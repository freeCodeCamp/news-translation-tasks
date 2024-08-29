---
title: Como Criar uma Solução de Chat Profissional com Sockets em NodeJS
  [Nível Iniciante]
date: 2024-08-29T00:48:19.396Z
author: Adeel Imran
authorURL: https://www.freecodecamp.org/news/author/adeel/
originalURL: https://www.freecodecamp.org/news/create-a-professional-node-express/
posteditor: ""
proofreader: ""
---

Você já se perguntou como funcionam as aplicações de chat nos bastidores? Bem, hoje eu vou te guiar sobre como fazer uma aplicação baseada em REST + Sockets construído sobre [NodeJS][1]/[ExpressJS][2] usando [MongoDB][3].

<!-- more -->

Estive trabalhando no conteúdo deste artigo por mais de uma semana – realmente espero que ajude alguém por aí.

## Pré-requisitos

-   Configure o MongoDB na sua máquina \[[Guia de instalação escrito aqui][4]\]
-   Para usuários de Windows, você pode encontrar o guia de instalação \[[aqui][5]\]
-   Para usuários de macOS, você pode encontrar o guia de instalação \[[aqui][6]\]\[[Instalação objetiva que eu escrevi][7]\]
-   Para usuários de Linux, você pode encontrar o guia de instalação \[[aqui][8]\]
-   Instale Node/NPM na sua máquina \[[Link de instalação aqui][9]\] (Estou usando a versão Node v12.18.0)

## Tópicos que vamos abordar

### Geral

-   Criar um servidor express
-   Como fazer validações de API
-   Criar esqueleto básico para toda a aplicação
-   Configurando o MongoDB (instalação, configuração no express)
-   Criando API + Banco de Dados de usuários (Criar um usuário, Obter um usuário por id, Obter todos os usuários, Deletar um usuário por id)
-   Entendendo o que é um middleware
-   Autenticação JWT (JSON web tokens) (decodificar/codificar) - Middleware de Login
-   Classe de web socket que lida com eventos quando um usuário desconecta, adiciona sua identidade, entra em uma sala de chat, quer silenciar uma sala de chat
-   Discutindo o modelo de banco de dados da sala de chat e das mensagens de chat

### Para a API

-   Iniciar um chat entre usuários
-   Criar uma mensagem na sala de chat
-   Ver conversa de uma sala de chat pelo seu id
-   Marcar uma conversa inteira como lida (similar ao Whatsapp)
-   Obter conversa recente de todos os chats (similar ao messenger do Facebook)

### Bônus - API

-   Deletar uma sala de chat pelo id junto com todas as suas mensagens associadas
-   Deletar uma mensagem pelo id

Antes de começarmos, gostaria de abordar alguns conceitos básicos nos vídeos a seguir.

### Entendendo os fundamentos do ExpressJS

O que são rotas? Controladores? Como permitimos o CORS (compartilhamento de recursos de origem cruzada)? Como permitimos que o usuário final envie dados em formato JSON em uma solicitação de API?

Falo sobre tudo isso e mais (incluindo convenções REST) neste vídeo:

<iframe width="480" height="270" src="https://www.youtube.com/embed/t7-yuYFVG1Y?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" name="fitvid0"></iframe>

Além disso, aqui está um [link do GitHub para todo o código-fonte deste vídeo][10] \[Capítulo 0\]

Dê uma olhada no README.md para o código fonte do "Capítulo 0". Ele tem todos os links de aprendizado relevantes que menciono no vídeo junto com um tutorial incrível de meia hora sobre postman.

### Adicionando validação de API ao seu ponto de extremidade da API

No vídeo abaixo, você aprenderá como escrever sua própria validação personalizada usando uma biblioteca chamada "make-validation":

<iframe width="480" height="270" src="https://www.youtube.com/embed/t-KGXLM0YlE?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" name="fitvid1"></iframe>

Aqui está o [link do GitHub para todo o código-fonte deste vídeo][11] \[Capítulo 0\].

E aqui está o link da biblioteca **make-validation** \[G[itHub][12]\]\[[npm][13]\]\[[exemplo][14]\].

O código-fonte completo deste tutorial pode ser encontrado **[aqui][15]**. Se tiver qualquer feedback, por favor, entre em contato comigo no [http://twitter.com/adeelibr][16]. Se você gostou deste tutorial, deixe uma estrela no [**repositório do github**][17]**.**

Vamos começar agora que você conhece os fundamentos do ExpressJS e como validar uma resposta do usuário.

## Começando

Crie uma pasta chamada `chat-app`:

```
mkdir chat-app;
cd chat-app;
```

Em seguida, inicialize um novo projeto npm na pasta raiz do projeto digitando o seguinte:

```
npm init -y
```

e instale os seguintes pacotes:

```
npm i cors @withvoid/make-validation express jsonwebtoken mongoose morgan socket.io uuid --save;
npm i nodemon --save-dev;
```

E na seção `scripts` do seu `package.json` adicione os seguintes 2 scripts:

```
"scripts": {
    "start": "nodemon server/index.js",
    "start:server": "node server/index.js"
},
```

Seu `package.json` agora deve parecer com algo assim:

```
{
  "name": "chapter-1-chat",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "start": "nodemon server/index.js",
    "start:server": "node server/index.js"
  },
  "dependencies": {
    "@withvoid/make-validation": "1.0.5",
    "cors": "2.8.5",
    "express": "4.16.1",
    "jsonwebtoken": "8.5.1",
    "mongoose": "5.9.18",
    "morgan": "1.9.1",
    "socket.io": "2.3.0",
    "uuid": "8.1.0"
  },
  "devDependencies": {
    "nodemon": "2.0.4"
  }
}
```

Incrível!

Agora, na pasta raiz do seu projeto, crie uma nova pasta chamada `server`:

```
cd chat-app;
mkdir server;
cd server;
```



```import http from "http";
import express from "express";
import logger from "morgan";
import cors from "cors";
// rotas
import indexRouter from "./routes/index.js";
import userRouter from "./routes/user.js";
import chatRoomRouter from "./routes/chatRoom.js";
import deleteRouter from "./routes/delete.js";
// middlewares
import { decode } from './middlewares/jwt.js'

const app = express();

/** Obtém a porta do ambiente e armazena no Express. */
const port = process.env.PORT || "3000";
app.set("port", port);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/users", userRouter);
app.use("/room", decode, chatRoomRouter);
app.use("/delete", deleteRouter);

/** captura 404 e encaminha para o manipulador de erro */
app.use('*', (req, res) => {
  return res.status(404).json({
    success: false,
    message: 'O endpoint da API não existe'
  })
});

/** Cria o servidor HTTP. */
const server = http.createServer(app);
/** Ouve na porta fornecida, em todas as interfaces de rede. */
server.listen(port);
/** Ouve o evento "listening" do servidor HTTP. */
server.on("listening", () => {
  console.log(`Ouvindo na porta:: http://localhost:${port}/`)
});
```

Vamos adicionar as rotas para `indexRouter` `userRouter` `chatRoomRouter` & `deleteRouter`.

Na pasta raiz do seu projeto, crie uma pasta chamada `routes`. Dentro da pasta `routes`, adicione os seguintes arquivos:

-   `index.js`
-   `user.js`
-   `chatRoom.js`
-   `delete.js`

Vamos primeiro adicionar o conteúdo para `routes/index.js`:

```
import express from 'express';
// controladores
import users from '../controllers/user.js';
// middlewares
import { encode } from '../middlewares/jwt.js';

const router = express.Router();

router
  .post('/login/:userId', encode, (req, res, next) => { });

export default router;
```

Vamos adicionar o conteúdo para `routes/user.js` a seguir:

```
import express from 'express';
// controladores
import user from '../controllers/user.js';

const router = express.Router();

router
  .get('/', user.onGetAllUsers)
  .post('/', user.onCreateUser)
  .get('/:id', user.onGetUserById)
  .delete('/:id', user.onDeleteUserById)

export default router;
```

E agora vamos adicionar o conteúdo para `routes/chatRoom.js`:

```
import express from 'express';
// controladores
import chatRoom from '../controllers/chatRoom.js';

const router = express.Router();

router
  .get('/', chatRoom.getRecentConversation)
  .get('/:roomId', chatRoom.getConversationByRoomId)
  .post('/initiate', chatRoom.initiate)
  .post('/:roomId/message', chatRoom.postMessage)
  .put('/:roomId/mark-read', chatRoom.markConversationReadByRoomId)

export default router;
```

Finalmente, vamos adicionar conteúdo para `routes/delete.js`:

```
import express from 'express';
// controladores
import deleteController from '../controllers/delete.js';

const router = express.Router();

router
  .delete('/room/:roomId', deleteController.deleteRoomById)
  .delete('/message/:messageId', deleteController.deleteMessageById)

export default router;
```

Ótimo, agora que nossas rotas estão no lugar, vamos adicionar os controladores para cada rota.

Crie uma nova pasta chamada `controllers`. Dentro dessa pasta, crie os seguintes arquivos:

-   `` `user.js` ``
-   `chatRoom.js`
-   `delete.js`

Vamos começar com `controllers/user.js`:

```
export default {
  onGetAllUsers: async (req, res) => { },
  onGetUserById: async (req, res) => { },
  onCreateUser: async (req, res) => { },
  onDeleteUserById: async (req, res) => { },
}
```

Em seguida, vamos adicionar conteúdo em `controllers/chatRoom.js`:

```
export default {
  initiate: async (req, res) => { },
  postMessage: async (req, res) => { },
  getRecentConversation: async (req, res) => { },
  getConversationByRoomId: async (req, res) => { },
  markConversationReadByRoomId: async (req, res) => { },
}
```

E finalmente, vamos adicionar conteúdo para `controllers/delete.js`:

```
export default {
  deleteRoomById: async (req, res) => {},
  deleteMessageById: async (req, res) => {},
}
```

Até agora adicionamos controladores vazios para cada rota, então eles ainda não fazem muito. Adicionaremos funcionalidade em breve.

Só mais uma coisa – vamos adicionar uma nova pasta chamada `middlewares` e dentro dessa pasta criar um arquivo chamado `jwt.js`. Adicione o seguinte conteúdo a ele:

```
import jwt from 'jsonwebtoken';

export const decode = (req, res, next) => {}

export const encode = async (req, res, next) => {}
```

Vou falar sobre o que este arquivo faz em breve, então por enquanto vamos apenas ignorá-lo.

![0f2621f3fad63457842f817f81df58ec](https://www.freecodecamp.org/news/content/images/2020/06/0f2621f3fad63457842f817f81df58ec.gif)

Terminamos com nosso boilerplate básico da base de código.

Acabamos fazendo o seguinte:

-   Criamos um servidor Express que escuta na porta 3000
-   Adicionamos Cross-Origin-Resource Sharing (CORS) ao nosso `server.js`
-   Adicionamos um logger ao nosso `server.js`
-   E também adicionamos manipuladores de rota com controladores vazios.

Nada de muito sofisticado até agora que eu não tenha coberto nos vídeos acima.

## Vamos configurar o MongoDB em nossa aplicação

Antes de adicionarmos o MongoDB à nossa base de código, verifique se ele está instalado na sua máquina executando um dos seguintes comandos:
```

Se você está tendo problemas para instalar o MongoDB, me avise em [https://twitter.com/adeelibr][22] e eu escreverei um guia personalizado para você ou farei um vídeo guia de instalação. :)

Estou usando [Robo3T][23] como minha GUI do MongoDB.

Agora você deve ter sua instância do MongoDB em execução e [Robo3T][24] instalado. (Você pode usar qualquer cliente GUI que você goste para isso. Eu gosto muito do [Robo3T][25], então estou usando ele. Além disso, é open source.)

Aqui está um pequeno vídeo que encontrei no YouTube que oferece uma introdução de 6 minutos ao [Robo3T][26]:

<iframe width="480" height="270" src="https://www.youtube.com/embed/DKZr1Urs7sA?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" name="fitvid2"></iframe>

Uma vez que sua instância do MongoDB esteja em funcionamento, vamos começar a integrá-lo em nosso código também.

No seu diretório raiz, crie uma nova pasta chamada `config`. Dentro dessa pasta, crie um arquivo chamado `index.js` e adicione o seguinte conteúdo:

```javascript
const config = {
  db: {
    url: 'localhost:27017',
    name: 'chatdb'
  }
}

export default config
```

Normalmente, a porta padrão que as instâncias de `MongoDB` usarão é `27017`.

Aqui definimos informações sobre a URL do nosso banco de dados (que está em `db`) e o `nome` do banco de dados, que é `chatdb` (você pode chamar isso do que quiser).

Em seguida, crie um novo arquivo chamado `config/mongo.js` e adicione o seguinte conteúdo:

```javascript
import mongoose from 'mongoose'
import config from './index.js'

const CONNECTION_URL = `mongodb://${config.db.url}/${config.db.name}`

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
  console.log('Mongo has connected succesfully')
})
mongoose.connection.on('reconnected', () => {
  console.log('Mongo has reconnected')
})
mongoose.connection.on('error', error => {
  console.log('Mongo connection has an error', error)
  mongoose.disconnect()
})
mongoose.connection.on('disconnected', () => {
  console.log('Mongo connection is disconnected')
})
```

Em seguida, importe `config/mongo.js` no seu arquivo `server/index.js` assim:

```javascript
.
// conexão mongo
import "./config/mongo.js";
// rotas
import indexRouter from "./routes/index.js";
```

Se você se perder em algum momento, o código-fonte completo deste tutorial está [**aqui**][27]**.**

Vamos discutir o que estamos fazendo aqui passo a passo:

Primeiro importamos nosso arquivo `config.js` em `config/mongo.js`. Em seguida, passamos o valor para nossa `CONNECTION_URL` assim:

```javascript
const CONNECTION_URL = `mongodb://${config.db.url}/${config.db.name}`
```

Depois, usando a `CONNECTION_URL`, formamos uma conexão Mongo, fazendo isso:

```javascript
mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
```

Isso diz ao `mongoose` para fazer uma conexão com o banco de dados com nossa aplicação Node/Express.

As opções que estamos dando ao Mongo aqui são:

- `useNewUrlParser`: O driver do MongoDB descontinuou seu atual [parsers de string de conexão][28]. `useNewUrlParser: true` diz ao mongoose para usar o novo parser do Mongo. (Se estiver definido como true, temos que fornecer uma porta de banco de dados na `CONNECTION_URL`.)
- `useUnifiedTopology`: False por padrão. Definir como `true` para optar por usar o [novo engine de gerenciamento de conexão do driver MongoDB][29]. Você deve definir esta opção como `true`, exceto para o caso improvável de que isso impeça você de manter uma conexão estável.

Em seguida, simplesmente adicionamos manipuladores de eventos `mongoose` assim:

```javascript
mongoose.connection.on('connected', () => {
  console.log('Mongo has connected succesfully')
})
mongoose.connection.on('reconnected', () => {
  console.log('Mongo has reconnected')
})
mongoose.connection.on('error', error => {
  console.log('Mongo connection has an error', error)
  mongoose.disconnect()
})
mongoose.connection.on('disconnected', () => {
  console.log('Mongo connection is disconnected')
})
```

- `connected` será chamado uma vez que a conexão com o banco de dados for estabelecida
- `disconnected` será chamado quando sua conexão Mongo for desativada
- `error` é chamado se houver um erro ao conectar ao seu banco de dados Mongo
- `reconnected` é chamado quando o banco de dados perde a conexão e então faz uma tentativa para se reconectar com sucesso.

Uma vez que você tenha isso no lugar, simplesmente vá ao seu arquivo `server/index.js` e importe `config/mongo.js`. E é isso. Agora, quando você iniciar seu servidor digitando isto:

```bash
npm start
```

Você deve ver algo assim:

![Screenshot-2020-06-15-at-19.42.53](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-15-at-19.42.53.png)

Logs quando você inicia seu servidor

Se você ver isso, você adicionou o Mongo com sucesso à sua aplicação.

Parabéns!

Se você ficou preso aqui por algum motivo, me avise em [twitter.com/adeelibr][30] e eu tentarei resolver isso para você. :)

## Vamos configurar nossa primeira seção de API para users/

A configuração de nossa API para `users/` não terá token de autenticação para este tutorial, porque meu foco principal é ensinar sobre a aplicação de Chat aqui.

### Esquema do Modelo de Usuário

Vamos criar nosso primeiro modelo (esquema de banco de dados) para a coleção `user`.

```javascript
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

export const USER_TYPES = {
  CONSUMIDOR: "consumidor",
  SUPORTE: "suporte",
};

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: () => uuidv4().replace(/\-/g, ""),
    },
    firstName: String,
    lastName: String,
    type: String,
  },
  {
    timestamps: true,
    collection: "users",
  }
);

export default mongoose.model("User", userSchema);
```

Vamos dividir isso em partes:

```
export const USER_TYPES = {
  CONSUMIDOR: "consumidor",
  SUPORTE: "suporte",
};
```

Basicamente, teremos 2 tipos de usuários, `consumidor` e `suporte`. Eu escrevi dessa forma porque quero garantir programaticamente a validação da API e do BD, sobre o que falarei mais adiante.

A seguir, criamos um esquema de como um único `documento` (objeto/item/entrada/linha) irá parecer dentro da nossa coleção `user` (uma coleção é equivalente a uma tabela MySQL). Definimos assim:

```
const userSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: () => uuidv4().replace(/\-/g, ""),
    },
    firstName: String,
    lastName: String,
    type: String,
  },
  {
    timestamps: true,
    collection: "users",
  }
);
```

Aqui estamos dizendo ao `mongoose` que, para um único documento na nossa coleção `users`, queremos que a estrutura seja assim:

```
{
	id: String // obterá uma string aleatória por padrão graças ao uuidv4
    firstName: String,
    lastName: String,
    type: String // isso pode ter 2 tipos, consumidor/suporte
}
```

Na segunda parte do esquema, temos algo assim:

```
{
    timestamps: true,
    collection: "users",
}
```

Definir `timestamps` como `true` adicionará 2 coisas ao meu esquema: um valor de data `createdAt` e `updatedAt`. Toda vez que criarmos uma nova entrada, o `createdAt` será atualizado automaticamente e `updatedAt` será atualizado uma vez que atualizarmos uma entrada no banco de dados usando o mongoose. Ambos são feitos automaticamente pelo `mongoose`.

A segunda parte é `collection`. Isso mostra qual será o nome da minha coleção dentro do meu banco de dados. Estou atribuindo o nome de `users`.

E finalmente exportaremos o objeto assim:

```
export default mongoose.model("User", userSchema);
```

Então, `mongoose.model` pega 2 parâmetros aqui.

-   O nome do modelo, que aqui é `User`
-   O esquema associado a esse modelo, que neste caso é `userSchema`

Nota: Com base no nome do modelo, que aqui é `User`, não adicionamos a chave `collection` na seção do esquema. Ele pegará esse nome `User` e adicionará um `s` a ele, criando uma coleção com esse nome, que se torna `user`.

Ótimo, agora temos nosso primeiro modelo.

Se você ficou preso em algum lugar, dê uma olhada no [código fonte][31].

### Criar uma nova API de usuário \[Solicitação POST\]

A seguir, vamos escrever nosso primeiro controlador para essa rota: `.post('/', user.onCreateUser)`.

Entre em `controllers/user.js` e importe 2 coisas no topo:

```javascript
// utils
import makeValidation from '@withvoid/make-validation';
// models
import UserModel, { USER_TYPES } from '../models/User.js';
```

Aqui estamos importando a biblioteca de validação que mencionei no vídeo no topo. Também estamos importando nosso modelo de usuário junto com os `USER_TYPES` do mesmo arquivo.

Isso é o que `USER_TYPES` representa:

```
export const USER_TYPES = {
  CONSUMIDOR: "consumidor",
  SUPORTE: "suporte",
};
```

A seguir, encontre o controlador `onCreateUser` e adicione o seguinte conteúdo a ele:

```javascript
onCreateUser: async (req, res) => {
    try {
      const validation = makeValidation(types => ({
        payload: req.body,
        checks: {
          firstName: { type: types.string },
          lastName: { type: types.string },
          type: { type: types.enum, options: { enum: USER_TYPES } },
        }
      }));
      if (!validation.success) return res.status(400).json(validation);

      const { firstName, lastName, type } = req.body;
      const user = await UserModel.createUser(firstName, lastName, type);
      return res.status(200).json({ success: true, user });
    } catch (error) {
      return res.status(500).json({ success: false, error: error })
    }
  },
```

Vamos dividir isso em 2 seções.

Primeiro, validamos a resposta do usuário fazendo isso:

```javascript
const validation = makeValidation(types => ({
  payload: req.body,
  checks: {
    firstName: { type: types.string },
    lastName: { type: types.string },
    type: { type: types.enum, options: { enum: USER_TYPES } },
  }
}));
if (!validation.success) return res.status(400).json({ ...validation });
```

Por favor, certifique-se de ter visto o vídeo (acima) sobre `validar uma solicitação de API no Node usando validação personalizada ou usando a biblioteca make-validation`.

Aqui estamos usando a biblioteca `[make-validation][32]` (que acabamos criando enquanto escrevíamos este tutorial). Falo sobre seu uso no vídeo no início deste tutorial.

Tudo que estamos fazendo aqui é passar `req.body` para `payload`. Então, nas verificações, adicionamos um objeto onde, para cada `chave`, estamos dizendo quais são os requisitos para cada tipo, por exemplo:

```
firstName: { type: types.string },
```
```

A variável `validation` retornará um objeto com 3 elementos: `{success: boolean, message: string, errors: object}`.

Se `validation.success` for falso, simplesmente retornamos tudo da validação e passamos para o usuário com um código de status `400`.

Uma vez que nossa validação esteja em ação e sabemos que os dados que estamos recebendo são válidos, então fazemos o seguinte:

```
const { firstName, lastName, type } = req.body;
const user = await UserModel.createUser(firstName, lastName, type);
return res.status(200).json({ success: true, user });
```

Então, extraímos `firstName, lastName, type` de `req.body` e passamos esses valores para nosso `UserModel.createUser`. Se tudo der certo, ele simplesmente retorna `success: true` com o novo `user` criado junto com um status `200`.

Se em qualquer lugar deste processo algo der errado, ele lança um erro e vai para o bloco catch:

```
catch (error) {
  return res.status(500).json({ success: false, error: error })
}
```

Lá, simplesmente retornamos uma mensagem de erro junto com o status HTTP `500`.

A única coisa que estamos perdendo aqui é o método `UserModel.createUser()`.

Então, vamos voltar ao nosso arquivo `models/User.js` e adicioná-lo:

```
userSchema.statics.createUser = async function (
    firstName, 
    lastName, 
    type
) {
  try {
    const user = await this.create({ firstName, lastName, type });
    return user;
  } catch (error) {
    throw error;
  }
}

export default mongoose.model("User", userSchema);
```

Então, tudo que estamos fazendo aqui é adicionar um método estático ao nosso `userSchema` chamado `createUser` que recebe 3 parâmetros: `firstName, lastName, type`.

Em seguida, usamos isto:

```
const user = await this.create({ firstName, lastName, type });
```

Aqui a parte do `this` é muito importante, já que estamos escrevendo um método estático em `userSchema`. Escrever `this` garantirá que estamos realizando operações no objeto `userSchema`.

Uma coisa a notar aqui é que `userSchema.statics.createUser = async function (firstName, lastName, type) => {}` não funcionará. Se você usar uma função `=>` arrow, o contexto do `this` será perdido e não funcionará.

Se você quiser aprender mais sobre métodos `static` em mongoose, veja este exemplo de documentação muito curto, mas útil [aqui][33].

Agora que temos tudo configurado, vamos iniciar nosso terminal executando o seguinte comando na pasta raiz do projeto:

```
npm start;
```

Vá para o postman, configure uma requisição `POST` nesta API `http://localhost:3000/users`, e adicione o seguinte corpo à API:

```
{
    firstName: 'John',
    lastName: 'Doe',
    type: 'consumer'
}
```

Assim:

![Screenshot-2020-06-15-at-21.37.15](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-15-at-21.37.15.png)

Você também pode obter toda a **coleção da API do postman** completa a partir de [**aqui**][34], para que você não tenha que escrever as APIs repetidamente.

Incrível – acabamos de criar nossa primeira API. Vamos criar mais algumas APIs de usuário antes de passarmos para a parte do chat, porque não há chat sem usuários (a menos que tenhamos robôs, mas robôs também são usuários ?).

### Obter um usuário pelo seu ID API \[GET request\]

Em seguida, precisamos escrever uma API que nos obtenha um usuário pelo seu ID. Então, para nossa rota `.get('/:id', user.onGetUserById)`, vamos escrever seu controlador.

Vá para `controllers/user.js` e para o método `onGetUserById`, escreva isso:

```
onGetUserById: async (req, res) => {
  try {
    const user = await UserModel.getUserById(req.params.id);
    return res.status(200).json({ success: true, user });
  } catch (error) {
    return res.status(500).json({ success: false, error: error })
  }
},
```

Legal, isso parece direto. Vamos adicionar `UserModel.getUserById()` no nosso arquivo `models/User.js`.

Adicione este método abaixo do último método `static` que você escreveu:

```
userSchema.statics.getUserById = async function (id) {
  try {
    const user = await this.findOne({ _id: id });
    if (!user) throw ({ error: 'No user with this id found' });
    return user;
  } catch (error) {
    throw error;
  }
}
```

Passamos um parâmetro `id` e envolvemos nossa função em `try/catch`. Isso é muito importante quando você está usando `async/await`. As linhas para se concentrar aqui são essas 2:

```
const user = await this.findOne({ _id: id });
if (!user) throw ({ error: 'No user with this id found' });
```

Usamos o método `findOne` do `mongoose` para encontrar uma entrada pelo `id`. Sabemos que apenas um item existe na coleção por esse `id` porque o `id` é único. Se nenhum usuário for encontrado, simplesmente lançamos um erro com a mensagem `No user with this id found`.

E é isso! Vamos iniciar nosso servidor:

```
npm start;
```

Abra o postman e crie uma requisição `GET` `http://localhost:3000/users/:id`.

Nota: Estou usando o ID do último usuário que acabamos de criar.

![Screenshot-2020-06-15-at-22.01.16](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-15-at-22.01.16.png)

Muito bem! Bom trabalho.

Faltam duas APIs para nossa seção de usuários.

### Obter todos os usuários API \[GET request\]

Para nosso roteador em `.get('/', user.onGetAllUsers)` vamos adicionar informações ao seu controlador.

Vá para `controllers/user.js` e adicione código no método `onGetAllUsers()`:


A seguir, vamos criar o método estático para `getUsers()` no arquivo `models/User.js`. Abaixo do último método estático que você escreveu nesse arquivo, digite:

```
userSchema.statics.getUsers = async function () {
  try {
    const users = await this.find();
    return users;
  } catch (error) {
    throw error;
  }
}
```

Usamos o método do `mongoose` chamado `await this.find();` para obter todos os registros da nossa coleção `users` e retorná-los.

Nota: Não estou lidando com paginação na nossa API de usuários porque esse não é o foco principal aqui. Falarei sobre paginação quando nos movermos para nossas APIs de chat.

Vamos iniciar nosso servidor:

```
npm start;
```

Abra o postman e crie uma requisição `GET` para esta rota `http://localhost:3000/users`:

![Screenshot-2020-06-15-at-22.12.13](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-15-at-22.12.13.png)

Eu fui em frente e acabei criando mais alguns usuários. 😊

### Deletar um usuário pelo ID da API \[Requisição DELETE\] (Mais uma seção bônus, você pode pular se quiser)

Vamos criar nossa rota final para deletar um usuário pelo seu ID. Para a rota `.delete('/:id', user.onDeleteUserById)` vá para o controlador em `controllers/user.js` e escreva este código no método `onDeleteUserById()`:

```
onDeleteUserById: async (req, res) => {
  try {
    const user = await UserModel.deleteByUserById(req.params.id);
    return res.status(200).json({ 
      success: true, 
      message: `Deleted a count of ${user.deletedCount} user.` 
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error })
  }
},
```

Vamos adicionar o método estático `deleteByUserById` em `models/User.js`:

```
userSchema.statics.deleteByUserById = async function (id) {
  try {
    const result = await this.remove({ _id: id });
    return result;
  } catch (error) {
    throw error;
  }
}
```

Passamos o `id` aqui como um parâmetro e depois usamos o método do `mongoose` chamado `this.remove` para deletar um item de registro de uma coleção específica. Neste caso, é a coleção `users`.

Vamos iniciar nosso servidor:

```
npm start;
```

Vá ao postman e crie uma nova rota `DELETE`:

![Screenshot-2020-06-15-at-22.24.51](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-15-at-22.24.51.png)

Com isso concluiremos nossa seção da API de USUÁRIO.

Em seguida, veremos como autenticar rotas com um token de autenticação. Esta é a última coisa que quero tocar antes de seguir para a seção de chat – porque todas as APIs de chat serão autenticadas.

### O que são middlewares no ExpressJS?

Como podemos escrevê-los? Adicionando middleware JWT em sua aplicação:

<iframe width="480" height="270" src="https://www.youtube.com/embed/G8Z6yeV0ytc?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" name="fitvid3"></iframe>

E aqui está o [Link do GitHub para todo o código fonte deste vídeo][35] \[Capítulo 0\].

E novamente, todas as informações relevantes podem ser encontradas no READ.ME.

Voltando à nossa base de código, vamos criar um middleware JWT para autenticar nossas rotas. Vá para `middlewares/jwt.js` e adicione o seguinte:

```
import jwt from 'jsonwebtoken';
// models
import UserModel from '../models/User.js';

const SECRET_KEY = 'some-secret-key';

export const encode = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await UserModel.getUserById(userId);
    const payload = {
      userId: user._id,
      userType: user.type,
    };
    const authToken = jwt.sign(payload, SECRET_KEY);
    console.log('Auth', authToken);
    req.authToken = authToken;
    next();
  } catch (error) {
    return res.status(400).json({ success: false, message: error.error });
  }
}

export const decode = (req, res, next) => {
  if (!req.headers['authorization']) {
    return res.status(400).json({ success: false, message: 'No access token provided' });
  }
  const accessToken = req.headers.authorization.split(' ')[1];
  try {
    const decoded = jwt.verify(accessToken, SECRET_KEY);
    req.userId = decoded.userId;
    req.userType = decoded.type;
    return next();
  } catch (error) {

    return res.status(401).json({ success: false, message: error.message });
  }
}
```

Vamos discutir o método `encode` primeiro:

```
export const encode = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await UserModel.getUserById(userId);
    const payload = {
      userId: user._id,
      userType: user.type,
    };
    const authToken = jwt.sign(payload, SECRET_KEY);
    console.log('Auth', authToken);
    req.authToken = authToken;
    next();
  } catch (error) {
    return res.status(400).json({ 
    	success: false, message: error.error 
    });
  }
}
```

Vamos analisá-lo passo a passo.

Obtemos o `userId` de nosso `req.params`. Se você se lembra do vídeo anterior, `req.params` é o `/:<identifier>` definido em nossa seção de rotas.

Em seguida, usamos o método `const user = await UserModel.getUserById(userId);` que acabamos de criar recentemente para obter as informações do usuário. Se existirem, é claro – caso contrário, essa linha lançará um erro e irá diretamente para o bloco `catch` onde retornaremos ao usuário com uma resposta `400` e uma mensagem de erro.

```javascript
const payload = {
      userId: user._id,
      userType: user.type,
};
```

Em seguida, assinamos esse payload no JWT usando o seguinte:

```javascript
const authToken = jwt.sign(payload, SECRET_KEY);
```

Assim que tivermos o JWT assinado, fazemos o seguinte:

```javascript
req.authToken = authToken;
next();
```

Definimos isso no nosso `req.authToken` e depois encaminhamos essa informação com `next()`.

Agora vamos falar sobre o método `decode`:

```javascript
export const decode = (req, res, next) => {
  if (!req.headers['authorization']) {
    return res.status(400).json({ success: false, message: 'No access token provided' });
  }
  const accessToken = req.headers.authorization.split(' ')[1];
  try {
    const decoded = jwt.verify(accessToken, SECRET_KEY);
    req.userId = decoded.userId;
    req.userType = decoded.type;
    return next();
  } catch (error) {

    return res.status(401).json({ success: false, message: error.message });
  }
}
```

Vamos detalhar isso:

```javascript
if (!req.headers['authorization']) {
  return res.status(400).json({ 
      success: false, 
      message: 'No access token provided' 
  });
}
```

Primeiro verificamos se o cabeçalho `authorization` está presente ou não. Se não estiver, simplesmente retornamos uma mensagem de erro para o usuário.

Em seguida fazemos isto:

```javascript
const accessToken = req.headers.authorization.split(' ')[1];
```

Ele está sendo `split(' ')` por espaço e depois estamos pegando o segundo índice do array acessando seu índice `[1]` porque a convenção é `authorization: Bearer <auth-token>`. Quer ler mais sobre isso? Confira este bom [tópico no quora][36].

Então tentamos decodificar nosso token:

```javascript
try {
  const decoded = jwt.verify(accessToken, SECRET_KEY);
  req.userId = decoded.userId;
  req.userType = decoded.type;
  return next();
} catch (error) {
  return res.status(401).json({ 
      success: false, message: error.message 
  });
}
```

Se isto não for bem-sucedido, `jwt.verify(accessToken, SECRET_KEY)` simplesmente lançará um erro e nosso código irá imediatamente para o bloco `catch`. Se for bem-sucedido, então podemos decodificá-lo. Nós pegamos `userId` e `type` do token e salvamos como `req.userId, req.userType` e simplesmente chamamos `next()`.

Agora, seguindo em frente, todas as rotas que passarem por esse middleware `decode` terão o `id` e o tipo do usuário atual.

Isso foi tudo para a seção de middleware. Vamos criar uma rota de `login` para que possamos solicitar informações ao usuário e dar um token em troca (porque daqui para frente ele precisará de um token para acessar o restante das APIs de chat).

### Criando uma rota de login \[Requisição POST\]

Vá para seu arquivo `routes/index.js` e cole o seguinte conteúdo:

```javascript
import express from 'express';
// middlewares
import { encode } from '../middlewares/jwt.js';

const router = express.Router();

router
  .post('/login/:userId', encode, (req, res, next) => {
    return res
      .status(200)
      .json({
        success: true,
        authorization: req.authToken,
      });
  });

export default router;
```

Então, tudo o que estamos fazendo é adicionando o middleware `encode` à nossa rota `http://localhost:3000/login/:<user-id>` \[POST\]. Se tudo correr bem, o usuário receberá um token de `authorization`.

Nota: eu não estou adicionando um fluxo de login/cadastro, mas queria tocar no JWT/middleware neste tutorial.

Normalmente a autenticação é feita de maneira semelhante. A única adição aqui é que o usuário não fornece seu ID. Ele fornece seu nome de usuário, senha (que verificamos no banco de dados), e se tudo estiver certo, damos a ele um token de autorização.

Se você teve problemas até aqui, me escreva em [twitter.com/adeelibr][37], assim posso melhorar o conteúdo. Você também pode me escrever se quiser aprender algo mais.

Lembrando, o código-fonte completo está disponível [aqui][38]. Você não precisa codificar junto com este tutorial, mas se fizer isso, os conceitos ficarão mais claros.

Vamos verificar nossa rota `/login` agora.

Inicie seu servidor:

```bash
npm start;
```

Vamos executar o postman. Crie uma nova requisição POST `http://localhost:3000/login/<user-id>`:

![Screenshot-2020-06-15-at-23.03.15](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-15-at-23.03.15.png)

Quando o ID do usuário é correto

![Screenshot-2020-06-15-at-23.03.32](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-15-at-23.03.32.png)

Quando o ID do usuário é inválido

Com isso, também terminamos nosso fluxo de login.

Isso foi muito. Mas agora podemos focar apenas nas nossas rotas de chat.

## Criar uma classe de websocket

Esta classe de websocket irá lidar com eventos quando um usuário se desconectar, entrar em uma sala de chat ou quiser silenciar uma sala de chat.

Então, vamos criar uma classe de websocket que vai gerenciar os sockets para nós. Crie uma nova pasta chamada `utils`. Dentro dessa pasta, crie um arquivo chamado `WebSockets.js` e adicione o seguinte conteúdo:

```javascript
class WebSockets {
  users = [];
  connection(client) {
    // evento disparado quando a sala de chat é desconectada
    client.on("disconnect", () => {
      this.users = this.users.filter((user) => user.socketId !== client.id);
    });
    // adiciona identidade do usuário mapeada para o socket id
    client.on("identity", (userId) => {
      this.users.push({
        socketId: client.id,
        userId: userId,
      });
    });
    // inscreve pessoa no chat e outros usuários também
    client.on("subscribe", (room, otherUserId = "") => {
      this.subscribeOtherUser(room, otherUserId);
      client.join(room);
    });
    // silencia a sala de chat
    client.on("unsubscribe", (room) => {
      client.leave(room);
    });
  }
}
```

```default export new WebSockets();
```

A classe WebSockets tem três principais componentes:

-   array de usuários
-   método de conexão
-   inscrever membros de uma sala de bate-papo nela. `subscribeOtherUser`

Vamos dividir isso.

Temos uma classe:

```
class WebSockets {

}

export default new WebSocket();
```

Nós criamos uma classe e exportamos uma instância dessa classe.

Dentro da classe, temos um array `users` vazio. Este array conterá uma lista de todos os usuários ativos que estão online usando nossa aplicação.

Em seguida, temos um método `connection`, o núcleo desta classe:

```
connection(client) {
  // evento disparado quando a sala de bate-papo é desconectada
  client.on("disconnect", () => {
    this.users = this.users.filter((user) => user.socketId !== client.id);
  });
  // adicionar identidade do usuário mapeada ao ID do socket
  client.on("identity", (userId) => {
    this.users.push({
      socketId: client.id,
      userId: userId,
    });
  });
  // inscrever pessoa no chat e outro usuário também
  client.on("subscribe", (room, otherUserId = "") => {
    this.subscribeOtherUser(room, otherUserId);
    client.join(room);
  });
  // silenciar uma sala de bate-papo
  client.on("unsubscribe", (room) => {
    client.leave(room);
  });
}
```

O método `connection` recebe um parâmetro chamado `client` (cliente aqui será nossa instância do servidor, vou falar mais sobre isso em breve).

Pegamos o parâmetro `client` e adicionamos alguns eventos a ele

-   client.on('disconnect') // quando uma conexão do usuário é perdida, este método será chamado
-   client.on('identity') // quando o usuário faz login a partir do front-end, ele fará uma conexão com nosso servidor fornecendo sua identidade
-   client.on('subscribe') // quando um usuário entra em uma sala de bate-papo, este método é chamado
-   client.on('unsubscribe') // quando um usuário sai ou quer silenciar uma sala de bate-papo

Vamos falar sobre `disconnect`:

```
client.on("disconnect", () => {
  this.users = this.users.filter((user) => user.socketId !== client.id);
});
```

Assim que a conexão é desconectada, rodamos um filtro no array de usuários. Onde encontrarmos `user.id === client.id`, removemos do nosso array de sockets. (`client` aqui vem do parâmetro da função.)

Vamos falar sobre `identity`:

```
client.on("identity", (userId) => {
  this.users.push({
    socketId: client.id,
    userId: userId,
  });
});
```

Quando um usuário faz login através da aplicação front-end web/android/ios, ele fará uma conexão de socket com nossa aplicação backend e chamará este método `identity`. Eles também enviarão seu próprio ID de usuário.

Pegaremos esse ID de usuário e o ID do cliente (o próprio ID único do socket do usuário que socket.io cria quando fazem uma conexão com nosso backend).

Em seguida, temos `unsubscribe`:

```
client.on("unsubscribe", (room) => {
  client.leave(room);
});
```

O usuário passa o ID da `room` e apenas dizemos `client.leave()` para remover o usuário atual que está chamando este método de uma sala de bate-papo específica.

Em seguida, temos `subscribe`:

```
client.on("subscribe", (room, otherUserId = "") => {
  this.subscribeOtherUser(room, otherUserId);
  client.join(room);
});
```

Quando um usuário entra em uma sala de bate-papo, ele nos dirá sobre a sala que deseja ingressar, juntamente com a outra pessoa que faz parte dessa sala de bate-papo.

Nota: Veremos mais tarde que, quando iniciamos uma sala de bate-papo, obtemos todos os usuários associados a essa sala na resposta da API.

**Na minha opinião**: Outra coisa que poderíamos ter feito aqui era, quando o usuário envia o número da sala, podemos fazer uma consulta no banco de dados para ver todos os membros da sala de bate-papo e fazê-los ingressar se estiverem online no momento (ou seja, em nossa lista de usuários).

O método `subscribeOtherUser` é definido da seguinte maneira:

```
subscribeOtherUser(room, otherUserId) {
  const userSockets = this.users.filter(
    (user) => user.userId === otherUserId
  );
  userSockets.map((userInfo) => {
    const socketConn = global.io.sockets.connected(userInfo.socketId);
    if (socketConn) {
      socketConn.join(room);
    }
  });
}
```

Passamos `room` e `otherUserId` como parâmetros para essa função.

Usando o `otherUserId`, filtramos em nosso array `this.users` e todos os resultados que correspondem são armazenados no array `userSockets`.

Você pode estar pensando – como um usuário pode ter várias presenças no array de usuários? Bem, pense em um cenário onde o mesmo usuário está logado tanto em sua aplicação web quanto em seu celular. Isso criará várias conexões de socket para o mesmo usuário.

Em seguida, mapeamos em `userSockets`. Para cada item neste array, passamos este método: `const socketConn = global.io.sockets.connected(userInfo.socketId)`

Vou falar mais sobre `global.io.sockets.connected` em breve. Mas o que isso faz inicialmente é pegar `userInfo.socketId` e, se existir em nossa conexão de socket, retornará a conexão, caso contrário, `null`.

Em seguida, simplesmente verificamos se `socketConn` está disponível. Se estiver, pegamos esse `socketConn` e fazemos essa conexão juntar a `room` passada na função:

```
if (socketConn) {
	socketConn.join(room);
}
```

E é isso para nossa classe WebSockets.

Vamos importar este arquivo em nosso arquivo `server/index.js`:

```
import socketio from "socket.io";
// conexão mongo
import "./config/mongo.js";
// configuração do socket
import WebSockets from "./utils/WebSockets.js";
```
```

Next, onde estamos criando nosso servidor, adicione o conteúdo abaixo:

```
/** Cria servidor HTTP. */
const server = http.createServer(app);
/** Cria conexão de socket */
global.io = socketio.listen(server);
global.io.on('connection', WebSockets.connection)
```

O `server` foi criado e fazemos duas coisas:

-   atribuímos `global.io` a `socketio.listen(server)` (Assim que uma porta começa a escutar no `server`, os sockets começam a escutar por eventos que ocorrem nessa porta também.)
-   depois, atribuímos o método `global.io.on('connection', WebSockets.connection)`. Toda vez que alguém do front-end fizer uma conexão de socket, o método `connection` será chamado, o que invocará nossa classe `Websockets` e, dentro dessa classe, o método `connection`.

`global.io` é equivalente ao objeto `window` no navegador. Mas como não temos `window` no NodeJS, usamos `global.io`. Tudo o que colocarmos em `global.io` estará disponível em toda a aplicação.

Este é o mesmo `global.io` que usamos na classe `WebSockets` dentro do método `subscribeOtherUser`.

Se você se perdeu, aqui está o [código-fonte completo desta aplicação de chat][39]. Sinta-se à vontade para me enviar uma mensagem com seu feedback e tentarei melhorar o conteúdo deste tutorial.

## Discutindo o modelo de banco de dados de sala de chat e mensagem de chat

Antes de começar com o Chat, acho muito importante discutir o modelo de banco de dados no qual vamos criar nossa aplicação de chat. Dê uma olhada no vídeo abaixo:

<iframe width="480" height="270" src="https://www.youtube.com/embed/GAt-XjGvMxM?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" name="fitvid4"></iframe>

Agora que você tem uma ideia clara sobre como será nossa estrutura de chat, vamos começar criando nosso modelo de sala de chat.

Vá para dentro da sua pasta `models` e crie o seguinte `ChatRoom.js`. Adicione o seguinte conteúdo a ele:

```
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

export const CHAT_ROOM_TYPES = {
  CONSUMER_TO_CONSUMER: "consumer-to-consumer",
  CONSUMER_TO_SUPPORT: "consumer-to-support",
};

const chatRoomSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: () => uuidv4().replace(/\-/g, ""),
    },
    userIds: Array,
    type: String,
    chatInitiator: String,
  },
  {
    timestamps: true,
    collection: "chatrooms",
  }
);

chatRoomSchema.statics.initiateChat = async function (
	userIds, type, chatInitiator
) {
  try {
    const availableRoom = await this.findOne({
      userIds: {
        $size: userIds.length,
        $all: [...userIds],
      },
      type,
    });
    if (availableRoom) {
      return {
        isNew: false,
        message: 'retrieving an old chat room',
        chatRoomId: availableRoom._doc._id,
        type: availableRoom._doc.type,
      };
    }

    const newRoom = await this.create({ userIds, type, chatInitiator });
    return {
      isNew: true,
      message: 'creating a new chatroom',
      chatRoomId: newRoom._doc._id,
      type: newRoom._doc.type,
    };
  } catch (error) {
    console.log('error on start chat method', error);
    throw error;
  }
}

export default mongoose.model("ChatRoom", chatRoomSchema);
```

Temos três coisas acontecendo aqui:

-   Temos uma const para `CHAT_ROOM_TYPES` que possui apenas dois tipos
-   Definimos nosso esquema ChatRoom
-   Adicionamos um método estático para iniciar o chat

## APIs relacionadas ao chat

### Iniciar um chat entre usuários (/room/initiate [POST request])

Vamos discutir nosso método estático definido em `models/ChatRoom.js` chamado `initiateChat`:

```
chatRoomSchema.statics.initiateChat = async function (userIds, type, chatInitiator) {
  try {
    const availableRoom = await this.findOne({
      userIds: {
        $size: userIds.length,
        $all: [...userIds],
      },
      type,
    });
    if (availableRoom) {
      return {
        isNew: false,
        message: 'retrieving an old chat room',
        chatRoomId: availableRoom._doc._id,
        type: availableRoom._doc.type,
      };
    }

    const newRoom = await this.create({ userIds, type, chatInitiator });
    return {
      isNew: true,
      message: 'creating a new chatroom',
      chatRoomId: newRoom._doc._id,
      type: newRoom._doc.type,
    };
  } catch (error) {
    console.log('error on start chat method', error);
    throw error;
  }
}
```

Esta função recebe três parâmetros:

-   userIds (array de usuários)
-   type (tipo de sala de chat)
-   chatInitiator (o usuário que criou a sala de chat)

Em seguida, estamos fazendo duas coisas aqui: retornando um documento de sala de chat existente ou criando um novo.

Vamos analisar isso:

```
const availableRoom = await this.findOne({
  userIds: {
    $size: userIds.length,
    $all: [...userIds],
  },
  type,
});
if (availableRoom) {
  return {
    isNew: false,
    message: 'retrieving an old chat room',
    chatRoomId: availableRoom._doc._id,
    type: availableRoom._doc.type,
  };
}
```

Primeiro, usando a API `this.findOne()` no mongoose, encontramos todas as salas de chat onde os seguintes critérios são atendidos:

```
userIds: { $size: userIds.length, $all: [...userIds] },
type: type,
```

Estamos verificando para encontrar um documento de sala de chat onde um item existe na nossa coleção de salas de chat onde

1.  os `userIds` são os mesmos que estamos passando para esta função (independentemente da ordem dos IDs dos usuários), e
2.  o comprimento dos `userIds` é o mesmo que o comprimento de `userIds.length` que estamos passando pela função.

Também verificamos que o tipo de sala de chat deve ser o mesmo.

Se algo assim for encontrado, simplesmente retornamos a sala de chat existente.

Caso contrário, criamos uma nova sala de chat e a retornamos fazendo isto:

```
const newRoom = await this.create({ userIds, type, chatInitiator });
return {
  isNew: true,
  message: 'criando uma nova sala de chat',
  chatRoomId: newRoom._doc._id,
  type: newRoom._doc.type,
};
```

Crie uma nova sala e retorne a resposta.

Também temos uma chave `isNew` onde, se estiver recuperando uma sala de chat antiga, definimos como `false`, caso contrário, `true`.

Em seguida, para sua rota criada em `routes/chatRoom.js` chamada `post('/initiate', chatRoom.initiate)`, vá para seu controlador apropriado em `controllers/chatRoom.js` e adicione o seguinte no método `initiate`:

```
initiate: async (req, res) => {
  try {
    const validation = makeValidation(types => ({
      payload: req.body,
      checks: {
        userIds: { 
          type: types.array, 
          options: { unique: true, empty: false, stringOnly: true } 
        },
        type: { type: types.enum, options: { enum: CHAT_ROOM_TYPES } },
      }
    }));
    if (!validation.success) return res.status(400).json({ ...validation });

    const { userIds, type } = req.body;
    const { userId: chatInitiator } = req;
    const allUserIds = [...userIds, chatInitiator];
    const chatRoom = await ChatRoomModel.initiateChat(allUserIds, type, chatInitiator);
    return res.status(200).json({ success: true, chatRoom });
  } catch (error) {
    return res.status(500).json({ success: false, error: error })
  }
},
```

Estamos usando a biblioteca `[make-validation][42]` aqui para validar a solicitação do usuário. Para a API de iniciação, esperamos que o usuário envie uma matriz de `users` e também defina o tipo da `chat-room` que está sendo criada.

Uma vez que a validação passa, então:

```
const { userIds, type } = req.body;
const { userId: chatInitiator } = req;
const allUserIds = [...userIds, chatInitiator];
const chatRoom = await ChatRoomModel.initiateChat(allUserIds, type, chatInitiator);
return res.status(200).json({ success: true, chatRoom });
```

Uma coisa a se notar aqui é que `userIds, type` está vindo de `req.body` enquanto `userId` que está sendo apelidado como `chatInitiatorId` está vindo de `req` graças ao nosso middleware `decode`.

Se você se lembra, anexamos `app.use("/room", decode, chatRoomRouter);` em nosso arquivo `server/index.js`. Isso significa que esta rota `/room/initiate` está autenticada. Portanto, `const { userId: chatInitiator } = req;` é o ID do usuário atualmente logado.

Nós simplesmente chamamos nosso método `initiateChat` do `ChatRoomModel` e passamos `allUserIds, type, chatInitiator`. Qualquer que seja o resultado, simplesmente passamos para o usuário.

Vamos executar isso e ver se funciona (aqui está um vídeo de mim fazendo isso):

<iframe width="459" height="344" src="https://www.youtube.com/embed/vWzmTrNoNJs?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; giroscópio; picture-in-picture" allowfullscreen="" name="fitvid5"></iframe>

### Criar uma mensagem na sala de chat (/:roomId/message) \[requisição POST\]

Vamos criar uma mensagem para a sala de chat que acabamos de criar com `pikachu`.

Mas antes de criar uma mensagem, precisamos criar um modelo para nossos `chatmessages`. Então, vamos fazer isso primeiro. Na sua pasta `models`, crie um novo arquivo chamado `ChatMessage.js` e adicione o seguinte conteúdo a ele:

```
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const MESSAGE_TYPES = {
  TYPE_TEXT: "text",
};

const readByRecipientSchema = new mongoose.Schema(
  {
    _id: false,
    readByUserId: String,
    readAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: false,
  }
);

const chatMessageSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: () => uuidv4().replace(/\-/g, ""),
    },
    chatRoomId: String,
    message: mongoose.Schema.Types.Mixed,
    type: {
      type: String,
      default: () => MESSAGE_TYPES.TYPE_TEXT,
    },
    postedByUser: String,
    readByRecipients: [readByRecipientSchema],
  },
  {
    timestamps: true,
    collection: "chatmessages",
  }
);

chatMessageSchema.statics.createPostInChatRoom = async function (chatRoomId, message, postedByUser) {
  try {
    const post = await this.create({
      chatRoomId,
      message,
      postedByUser,
      readByRecipients: { readByUserId: postedByUser }
    });
    const aggregate = await this.aggregate([
      // pegue post onde _id = post._id
      { $match: { _id: post._id } },
      // faça uma junção com outra tabela chamada users, e
      // me dê um usuário cujo _id = postedByUser
      {
        $lookup: {
          from: 'users',
          localField: 'postedByUser',
          foreignField: '_id',
          as: 'postedByUser',
        }
      },
      { $unwind: '$postedByUser' },
      // faça uma junção com outra tabela chamada chatrooms, e
      // me dê uma sala de chat cujo _id = chatRoomId
      {
        $lookup: {
          from: 'chatrooms',
          localField: 'chatRoomId',
          foreignField: '_id',
          as: 'chatRoomInfo',
        }
      },
      { $unwind: '$chatRoomInfo' },
      { $unwind: '$chatRoomInfo.userIds' },
      // faça uma junção com outra tabela chamada users, e
      // me dê um usuário cujo _id = userIds
      {
        $lookup: {
          from: 'users',
          localField: 'chatRoomInfo.userIds',
          foreignField: '_id',
          as: 'chatRoomInfo.userProfile',
        }
      },
      { $unwind: '$chatRoomInfo.userProfile' },
      // agrupar dados
      {
        $group: {
          _id: '$chatRoomInfo._id',
          postId: { $last: '$_id' },
          chatRoomId: { $last: '$chatRoomInfo._id' },
          message: { $last: '$message' },
          type: { $last: '$type' },
          postedByUser: { $last: '$postedByUser' },
          readByRecipients: { $last: '$readByRecipients' },
          chatRoomInfo: { $addToSet: '$chatRoomInfo.userProfile' },
          createdAt: { $last: '$createdAt' },
          updatedAt: { $last: '$updatedAt' },
        }
      }
    ]);
    return aggregate[0];
  } catch (error) {
    throw error;
  }
}

export default mongoose.model("ChatMessage", chatMessageSchema);
```

Há algumas coisas acontecendo aqui:

-   Temos um objeto `MESSAGE_TYPES` que tem apenas um tipo chamado `text`
-   Estamos definindo nosso esquema para `chatmessage` e `readByRecipient`
-   Então, estamos escrevendo nosso método estático para `createPostInChatRoom`

Sei que isso é muito conteúdo, mas aguente firme comigo. Vamos apenas escrever o controlador para a rota que cria esta mensagem.

Para a rota definida em nosso API `routes/chatRoom.js` chamada `.post('/:roomId/message', chatRoom.postMessage)` vamos ao seu controlador em `controllers/chatRoom.js` e defini-lo:



```javascript
const messagePayload = {
      messageText: req.body.messageText,
    };
    const currentLoggedUser = req.userId;
    const post = await ChatMessageModel.createPostInChatRoom(roomId, messagePayload, currentLoggedUser);
    global.io.sockets.in(roomId).emit('new message', { message: post });
    return res.status(200).json({ success: true, post });
  } catch (error) {
    return res.status(500).json({ success: false, error: error })
  }
},
```

Legal, vamos discutir o que estamos fazendo aqui:

<iframe width="459" height="344" src="https://www.youtube.com/embed/z1C0Sl2wmJU?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" name="fitvid6"></iframe>

Os operadores discutidos neste vídeo são:

-   [$match][43]
-   [$last][44]
-   [$addToSet][45]
-   [$lookup][46]
-   [$unwind][47]
-   [$group][48]

### Ver conversa de uma sala de chat pelo seu id \[Requisição GET\]

Agora que temos

-   Criado uma sala de chat
-   Capacidade de adicionar mensagens nessa sala de chat

Vamos ver toda a conversa para esse chat também (com paginação).

Para a rota `.get('/:roomId', chatRoom.getConversationByRoomId)` no arquivo `routes/chatRoom.js`, abra seu controlador no arquivo `controllers/chatRoom.js` e adicione o seguinte conteúdo à sala de chat:

```javascript
getConversationByRoomId: async (req, res) => {
  try {
    const { roomId } = req.params;
    const room = await ChatRoomModel.getChatRoomByRoomId(roomId)
    if (!room) {
      return res.status(400).json({
        success: false,
        message: 'No room exists for this id',
      })
    }
    const users = await UserModel.getUserByIds(room.userIds);
    const options = {
      page: parseInt(req.query.page) || 0,
      limit: parseInt(req.query.limit) || 10,
    };
    const conversation = await ChatMessageModel.getConversationByRoomId(roomId, options);
    return res.status(200).json({
      success: true,
      conversation,
      users,
    });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
},
```

Em seguida, vamos criar um novo método estático em nosso arquivo `ChatRoomModel` chamado `getChatRoomByRoomId` em `models/ChatRoom.js`:

```javascript
chatRoomSchema.statics.getChatRoomByRoomId = async function (roomId) {
  try {
    const room = await this.findOne({ _id: roomId });
    return room;
  } catch (error) {
    throw error;
  }
}
```

Muito direto – estamos obtendo a sala pelo roomId aqui.

A seguir, em nosso `UserModel`, crie um método estático chamado `getUserByIds` no arquivo `models/User.js`:

```javascript
userSchema.statics.getUserByIds = async function (ids) {
  try {
    const users = await this.find({ _id: { $in: ids } });
    return users;
  } catch (error) {
    throw error;
  }
}
```

O operador usado aqui é [$in][49] – Vou falar sobre isso em breve.

E então, por fim, vá para o seu modelo `ChatMessage` em `models/ChatMessage.js` e escreva um novo método estático chamado `getConversationByRoomId`:

```javascript
chatMessageSchema.statics.getConversationByRoomId = async function (chatRoomId, options = {}) {
  try {
    return this.aggregate([
      { $match: { chatRoomId } },
      { $sort: { createdAt: -1 } },
      // faça um join em outra tabela chamada users, e 
      // obtenha um usuário cujo _id = postedByUser
      {
        $lookup: {
          from: 'users',
          localField: 'postedByUser',
          foreignField: '_id',
          as: 'postedByUser',
        }
      },
      { $unwind: "$postedByUser" },
      // aplicar paginação
      { $skip: options.page * options.limit },
      { $limit: options.limit },
      { $sort: { createdAt: 1 } },
    ]);
  } catch (error) {
    throw error;
  }
}
```

Vamos discutir tudo o que fizemos até agora:

<iframe width="459" height="344" src="https://www.youtube.com/embed/cnwOMrVMv0c?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" name="fitvid7"></iframe>

**[Todo o código fonte está disponível aqui][50].**

### Marcar uma conversa inteira como lida (recurso semelhante ao WhatsApp)

Uma vez que a outra pessoa está logada e visualiza uma conversa para um id de sala, precisamos marcar essa conversa como lida do lado dela.

Para fazer isso, em seu arquivo `routes/chatRoom.js` para a rota

```javascript
put('/:roomId/mark-read', chatRoom.markConversationReadByRoomId)
```

vá para o controlador apropriado em `controllers/chatRoom.js` e adicione o seguinte conteúdo no controlador `markConversationReadByRoomId`.

```javascript
markConversationReadByRoomId: async (req, res) => {
  try {
    const { roomId } = req.params;
    const room = await ChatRoomModel.getChatRoomByRoomId(roomId)
    if (!room) {
      return res.status(400).json({
        success: false,
        message: 'No room exists for this id',
      })
    }

    const currentLoggedUser = req.userId;
    const result = await ChatMessageModel.markMessageRead(roomId, currentLoggedUser);
    return res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error });
  }
},
```

Tudo o que estamos fazendo aqui é primeiro verificar se a sala existe ou não. Se sim, prosseguimos. Pegamos o `req.user.id` como `currentLoggedUser` e o passamos para a seguinte função:
```

No nosso modelo `ChatMessage`, é definido assim:

```
chatMessageSchema.statics.markMessageRead = async function (chatRoomId, currentUserOnlineId) {
  try {
    return this.updateMany(
      {
        chatRoomId,
        'readByRecipients.readByUserId': { $ne: currentUserOnlineId }
      },
      {
        $addToSet: {
          readByRecipients: { readByUserId: currentUserOnlineId }
        }
      },
      {
        multi: true
      }
    );
  } catch (error) {
    throw error;
  }
}
```

Um caso de uso possível é que o usuário pode não ter lido as últimas 15 mensagens ao abrir uma conversa de sala específica. Todas devem ser marcadas como lidas. Então, estamos usando a função `this.updateMany` do mongoose.

A consulta em si é definida em 2 etapas:

-   Buscar
-   Atualizar

E pode haver várias declarações a serem atualizadas.

Para encontrar uma seção, faça isso:

```
{
  chatRoomId,
  'readByRecipients.readByUserId': { $ne: currentUserOnlineId }
},
```

Isso diz que quero encontrar todas as mensagens na coleção `chatmessages` onde `chatRoomId` corresponde, e o array `readByRecipients` não corresponde. O `userId` que estou passando para esta função é `currentUserOnlineId`.

Uma vez que tenha todos esses documentos onde os critérios correspondem, é hora de atualizá-los:

```
{
  $addToSet: {
    readByRecipients: { readByUserId: currentUserOnlineId }
  }
},
```

`$addToSet` simplesmente adicionará uma nova entrada ao array `readByRecipients`. Isso é como `Array.push`, mas para MongoDB.

Em seguida, queremos dizer ao `mongoose` para não apenas atualizar o primeiro registro que encontrar, mas também para atualizar todos os registros onde a condição corresponda. Então, fazendo isso:

```
{
  multi: true
}
```

E é isso – retornamos os dados como estão.

Vamos executar esta API.

Inicie o servidor:

```
npm start;
```

Abra o seu Postman e crie uma nova solicitação `PUT` para testar esta rota `localhost:3000/room/<room=id-aqui>/mark-read`:

![Screenshot-2020-06-16-at-23.20.53](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-16-at-23.20.53.png)

### Seção Bônus

-   Como deletar uma sala de chat e todas as suas mensagens relacionadas
-   Como deletar uma mensagem pelo seu id

<iframe width="459" height="344" src="https://www.youtube.com/embed/GHhOIg5ZDa4?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" name="fitvid8"></iframe>

E terminamos! Uau, isso foi muito aprendizado hoje.

Você pode encontrar o código fonte deste tutorial [aqui][51].

Entre em contato comigo no Twitter com seu feedback – eu adoraria ouvir se você tem alguma sugestão para melhorias: [twitter.com/adeelibr][52]

Se você gostou deste artigo, por favor, dê uma estrela ao [repositório no GitHub][53] e se inscreva no meu [canal do YouTube][54].

[1]: https://nodejs.org/
[2]: http://expressjs.com/
[3]: https://www.mongodb.com/
[4]: https://github.com/adeelibr/node-playground/blob/master/chapter-1-chat/guidelines/installing-mongo.md
[5]: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/#procedure
[6]: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#install-homebrew
[7]: https://github.com/adeelibr/node-playground/blob/master/chapter-1-chat/guidelines/installing-mongo.md
[8]: https://docs.mongodb.com/manual/administration/install-on-linux/
[9]: https://nodejs.org/en/download/
[10]: https://github.com/adeelibr/node-playground/tree/master/chapter-0-basic
[11]: https://github.com/adeelibr/node-playground/tree/master/chapter-0-basic
[12]: https://github.com/withvoid/make-validation
[13]: https://www.npmjs.com/package/@withvoid/make-validation
[14]: https://github.com/withvoid/make-validation/tree/master/example
[15]: https://github.com/adeelibr/node-playground/tree/master/chapter-1-chat
[16]: http://twitter.com/adeelibr
[17]: https://github.com/adeelibr/node-playground
[18]: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/#procedure
[19]: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#install-homebrew
[20]: https://github.com/adeelibr/node-playground/blob/master/chapter-1-chat/guidelines/installing-mongo.md
[21]: https://docs.mongodb.com/manual/administration/install-on-linux/
[22]: https://twitter.com/adeelibr
[23]: https://robomongo.org/
[24]: https://robomongo.org/
[25]: https://robomongo.org/
[26]: https://robomongo.org/
[27]: https://github.com/adeelibr/node-playground/tree/master/chapter-1-chat
[28]: https://docs.mongodb.com/manual/reference/connection-string/
[29]: https://mongoosejs.com/docs/deprecations.html#useunifiedtopology
[30]: https://twitter.com/adeelibr
[31]: https://github.com/adeelibr/node-playground/tree/master/chapter-1-chat
[32]: https://www.npmjs.com/package/@withvoid/make-validation
[33]: https://mongoosejs.com/docs/2.7.x/docs/methods-statics.html
[34]: https://www.getpostman.com/collections/c28b12148c3d980fc39d
[35]: https://github.com/adeelibr/node-playground/tree/master/chapter-0-basic
[36]: https://www.quora.com/Why-is-Bearer-required-before-the-token-in-Authorization-header-in-a-HTTP-request
[37]: https://twitter.com/adeelibr
[38]: https://github.com/adeelibr/node-playground/tree/master/chapter-1-chat
[39]: https://github.com/adeelibr/node-playground/tree/master/chapter-1-chat
[40]: https://docs.mongodb.com/manual/reference/operator/query/size/
[41]: https://docs.mongodb.com/manual/reference/operator/query/all/
[42]: https://www.npmjs.com/package/@withvoid/make-validation
[43]: https://docs.mongodb.com/manual/reference/operator/aggregation/match/
[44]: https://docs.mongodb.com/manual/reference/operator/aggregation/last/
[45]: https://docs.mongodb.com/manual/reference/operator/update/addToSet/
[46]: https://docs.mongodb.com/manual/reference/operator/aggregation/lookup/
[47]: https://docs.mongodb.com/manual/reference/operator/aggregation/unwind/
[48]: https://docs.mongodb.com/manual/reference/operator/aggregation/group/
[49]: https://docs.mongodb.com/manual/reference/operator/query/in/
[50]: https://github.com/adeelibr/node-playground/tree/master/chapter-1-chat
[51]: https://github.com/adeelibr/node-playground/tree/master/chapter-1-chat
[52]: https://twitter.com/adeelibr
[53]: https://github.com/adeelibr/node-playground/tree/master/chapter-1-chat
[54]: https://www.youtube.com/channel/UCGHFI8lm4QzUzFH5nnzqkjA

