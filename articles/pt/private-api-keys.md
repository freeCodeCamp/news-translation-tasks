---
title: Demo
date: 2024-10-03T00:27:10.546Z
authorURL: ""
originalURL: https://www.freecodecamp.org/news/private-api-keys/
posteditor: ""
proofreader: ""
---

Por Jackson Bates

<!-- more -->

## O Problema

Tudo o que você quer fazer é buscar algum JSON de um endpoint de API para o clima, algumas resenhas de livros ou algo similarmente simples.

A consulta fetch no seu front-end é suficientemente fácil, mas você tem que colar sua chave de API secreta bem ali no código do front-end para qualquer um encontrar com um mínimo de esforço!

Além disso, enviar suas chaves de API para o seu repositório GitHub é um grande problema: [Dev colocou as chaves da AWS no Github. E então COISAS RUINS aconteceram][1].

> "Por que isso é tão difícil?!" – Você, provavelmente há 15 minutos

## A Solução

Você deve usar um servidor back-end como um relé para buscar os resultados da API para você e depois passá-los para o seu front-end.

## O Novo Problema

Você está apenas tentando fazer uma demonstração de front-end para seu portfólio! Você ainda não aprendeu nada sobre tecnologias de back-end! Por que isso é tão difícil?!

# Demo

Encontrei esse problema com frequência suficiente para decidir parar de inventar truques bobos e implementar uma solução que funciona com código back-end mínimo.

Nesta demonstração, eu configuro um back-end que ouve por requisições POST e as envia para a [API do GoodReads][2]. Para usar isso, você precisa implementar **seu próprio** front-end que possa enviar a requisição POST apropriada para este back-end. Seu front-end não se comunicará diretamente com o GoodReads, portanto, nenhuma chave de API é exposta.

## Você precisará

-   [Node][3] (isso foi testado com a versão v10.16.0, versões posteriores estarão bem, versões anteriores podem encontrar problemas)
-   [git][4]
-   Este repositório: https://github.com/JacksonBates/example-goodreads-api-relay

### Comece

`git clone https://github.com/JacksonBates/example-goodreads-api-relay.git`

O README.md contém tudo o que você precisa saber, incluindo instalação e configuração.

Incluí os pontos principais aqui para sua conveniência:

### README.md

Instale as dependências:

`npm i`

Você precisa criar seu próprio arquivo `.env` para sua chave:

`cp .env.example .env`

Então abra o novo arquivo `.env` e cole suas chaves no local correto.

Exemplo:

```
GOODREADS_API_KEY=AABBCCDDEEFF00112233445566778899
```

Agora execute o servidor:

`node app.js`

No navegador, navegue até localhost:3000 para confirmar que o servidor está funcionando. Você deve ver um simples `Hello World!`

### O que vem a seguir?

Agora leia o arquivo `app.js` cuidadosamente.

Comentei o código extensivamente para ajudá-lo a entender o que está acontecendo se você não viu muito node / express antes.

```
// app.js

// Estes importam módulos necessários e definem algumas variáveis iniciais
require("dotenv").config();
const express = require("express");
const fetch = require("node-fetch");
const convert = require("xml-js");
const rateLimit = require("express-rate-limit");
const app = express();
const port = 3000;

// Limitação de taxa - o Goodreads limita para 1/seg, então devemos também

// Ativar se você estiver atrás de um proxy reverso (Heroku, Bluemix, AWS ELB, Nginx, etc)
// veja https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', 1);

const limiter = rateLimit({
    windowMs: 1000, // 1 segundo
    max: 1, // limita cada IP a 1 requisição por windowMs
})

// aplica a todas as requisições
app.use(limiter)

// Rotas

// Rota de teste, visite localhost:3000 para confirmar se está funcionando
// deve mostrar 'Hello World!' no navegador
app.get("/", (req, res) => res.send("Hello World!"));

// Nossa rota de relé do Goodreads!
app.get("/api/search", async (req, res) => {
    try {
        // Isso usa interpolação de strings para fazer nossa string de consulta de busca
        // tira o parâmetro de consulta postado e o reformata para o goodreads
        const searchString = `q=${req.query.q}`;

        // Usa o node-fetch para chamar a API do goodreads e lê a chave do .env
        const response = await fetch(`https://www.goodreads.com/search/index.xml?key=${process.env.GOODREADS_API_KEY}&${searchString}`);
        //mais informações aqui https://www.goodreads.com/api/index#search.books
        const xml = await response.text();

        // A API do Goodreads retorna XML, então para usá-la facilmente no front-end, podemos
        // converter isso para JSON:
        const json = convert.xml2json(xml, { compact: true, spaces: 2 });

        // A API retorna coisas que não nos interessam, então podemos muito bem eliminar
        // tudo exceto os resultados:
        const results = JSON.parse(json).GoodreadsResponse.search.results;

        return res.json({
            success: true,
            results
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        })
    }
})

// Isso ativa nosso servidor e gera logs para usarmos.
// Quaisquer declarações console.log que você usar no node para depuração aparecerão no seu
// terminal, não no console do navegador!
app.listen(port, () => console.log(`Exemplo de aplicação escutando na porta ${port}!`));
```

**Atualização**: Um grande agradecimento a Gouri Shankar Kumawat por contribuir com um PR que melhorou este código! Você pode segui-lo no Twitter em [@dev\_gskumawat][5], ou no GitHub: [gskumawat0][6]

Use [Postman][7] para testar a API.

Configure o Postman para GET e cole isso na URL: `localhost:3000/api/search?q=hobbit`

O Postman mostrará a resposta JSON abaixo.

![Imagem](https://www.freecodecamp.org/news/content/images/2019/10/get_request.png) _Captura de tela do Postman mostrando o JSON retornado do nosso novo back-end_

### Como você usa isso no seu front-end?

Este aplicativo simples está ouvindo requisições POST em `/api/search`, então interaja com ele em seu aplicativo front-end da mesma forma que você fazia anteriormente com a API original.

Isso está configurado apenas para lidar com consultas de pesquisa - se você quiser usar outros endpoints/métodos da API Goodreads, você precisará pensar em como implementá-los por conta própria!

### Hospedagem

Você não pode implantar seu front-end e ainda ter isso no localhost - obviamente você precisa implantar isso também.

Recomendo o [Heroku][8].

## Crédito Extra

Se você quiser expandir isso, pode considerar como tornar isso acessível apenas a partir de um intervalo restrito de endereços IP para aumentar a segurança - o que estava fora do escopo deste tutorial/demonstração.

---

Isso foi rapidamente montado em resposta a uma discussão no [fórum][9]. Se você encontrar algum problema nesta postagem ou no código de exemplo, por favor, não hesite em responder ao [tópico do fórum][10] que deu início a tudo. Manterei o artigo e o repositório atualizados com melhorias.

Sinta-se à vontade para enviar PRs se tiver contribuições valiosas a fazer :)

Você também pode entrar em contato comigo via Twitter: [@JacksonBates][11].

[1]: https://www.theregister.co.uk/2015/01/06/dev_blunder_shows_github_crawling_with_keyslurping_bots/
[2]: https://www.goodreads.com/api
[3]: https://nodejs.org/en/download/
[4]: https://git-scm.com/downloads
[5]: https://https://twitter.com/dev_gskumawat
[6]: https://github.com/gskumawat0
[7]: https://www.getpostman.com/
[8]: https://devcenter.heroku.com/articles/deploying-nodejs
[9]: https://www.freecodecamp.org/forum
[10]: https://www.freecodecamp.org/forum/t/trying-to-fetch-response-from-goodreads-api/323312?u=jacksonbates
[11]: https://twitter.com/jacksonbates

