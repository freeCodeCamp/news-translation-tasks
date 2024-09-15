---
title: Conclusão
date: 2024-09-15T02:12:59.669Z
authorURL: ""
originalURL: https://www.freecodecamp.org/news/build-web-apis-with-nestjs-beginners-guide/
posteditor: ""
proofreader: ""
---

Por Victor Onwuzor

<!-- more -->

NestJS é um framework MVC para construir aplicações server-side eficientes e escaláveis com [Node.js][1].

Ele é construído com e oferece suporte completo ao [TypeScript][2] (ainda que permita aos desenvolvedores codificar em JavaScript puro). Além disso, combina elementos da Programação Orientada a Objetos, Programação Funcional e Programação Reativa Funcional.

Um dos principais benefícios do Nest é que ele oferece uma arquitetura de aplicação pronta para uso, permitindo aos desenvolvedores e equipes criarem aplicações altamente testáveis, escaláveis, com baixo acoplamento e facilmente manuteníveis.

## O que estamos construindo

Neste post, eu vou te levar pela jornada de começar com Nest. Vamos construir um Mini Blog que é uma aplicação Web API RESTful.

Esta simples aplicação Mini Blog cobrirá:

-   Configuração do Sequelize e do banco de dados Postgres
-   Autenticação com Passport (Login e Cadastro)
-   Validação de entrada do usuário
-   Proteção de rotas com JWT
-   Criação, Leitura, Atualização e Deleção de um post no blog

## Pré-requisitos

Conhecimento de TypeScript e JavaScript é muito importante para seguir este tutorial. Experiência com Angular é um ponto a mais, mas não se preocupe – este post explicará todo conceito que você precisa saber sobre Nest.

Você precisará instalar o [Postman][3], pois o usaremos para testar nossos endpoints da API. E também certifique-se de ter [Node.js][4] (>= 8.9.0) instalado na sua máquina. [Por fim, você pode encontrar aqui um link para o repositório GitHub do projeto final][5].

## Blocos de construção

Antes de começarmos, discutiremos algumas abstrações/conceitos que te ajudarão a saber onde colocar uma lógica de negócio específica de projeto para projeto.

Nest é muito parecido com Angular – então, se você está familiarizado com conceitos do Angular, será direto para você.

Ainda assim, vou presumir que você não tem conhecimento desses conceitos e explicá-los para você.

### Controlador

O controlador é responsável por escutar as requisições que chegam na sua aplicação. Ele então formula as respostas que saem.

Por exemplo, quando você faz uma chamada de API para `/posts`, o controlador lidará com essa requisição e retornará a resposta apropriada que você especificou.

```
import { Controller, Get } from '@nestjs/common';

@Controller('posts')
export class PostsController {
    @Get()
    findAll(): string {
        return 'Esta ação retorna todos os posts';
    }

    @Get(:id)
    findOne(@Param('id') id: number): string {
        return 'Esta ação retorna um post';
    }
}
```

Esta é apenas uma declaração básica de Classe em TypeScript/JavaScript com um decorator `@Controller`. Todos os Controladores Nest devem ter o decorator, que é **necessário** para definir um Controlador básico no Nest.

O Nest permite que você especifique suas rotas como um parâmetro no decorator `@Controller()`. Isso ajuda a agrupar um conjunto de rotas relacionadas e minimiza a repetição de código. Qualquer requisição para `/posts` será tratada por este controlador.

No nível dos métodos da classe, você pode especificar qual método deve lidar com as requisições HTTP `GET`, `POST`, `DELETE`, `PUT/PATCH`.

No nosso exemplo, o método `findAll()` com o decorator `@Get()` lida com todas as requisições HTTP `GET` para obter todos os posts do blog. Enquanto o método `findOne()` com o decorator `@Get(':id')` lidará com uma requisição `GET /posts/1`.

### Providers

Os providers foram projetados para abstrair qualquer forma de complexidade e lógica para uma classe separada. Um provider pode ser um serviço, um repositório, uma fábrica ou um helper.

Os providers são classes simples de TypeScript/JavaScript com um decorator `@Injectable()` precedendo sua declaração de classe. Assim como os serviços no Angular, você pode criar e injetar providers em outros controladores ou em outros providers também.

Um bom caso de uso para um provider de serviço é criar um PostService que abstrai toda a comunicação com o banco de dados nesse serviço. Isso mantém o `PostsController` limpo e organizado.

```
import { Injectable } from '@nestjs/common';
import { Post } from './interfaces/post.interface';

@Injectable()
export class PostsService {
    private readonly posts: Post[] = [];

    create(post: Post) {
        this.posts.push(post);
    }

    findAll(): Post[] {
        return this.posts;
    }
}
```

```
export interface Post {
    title: string;
    body: string;
}
```

Esta é apenas uma classe simples de TypeScript com um decorator `@Injectable()` (é assim que o Nest sabe que é um provider). `Post` é apenas uma interface para verificar tipos.

Aqui, estamos usando uma estrutura de dados simples para armazenar os dados. Em um projeto real, este serviço estará se comunicando com o banco de dados.

### Módulos

Um módulo é uma classe JavaScript/TypeScript com o decorator `@Module()`.  
O decorator `@Module()` fornece metadados que o Nest usa para organizar a estrutura da aplicação.

Os módulos são um aspecto muito importante do Nest e cada aplicação deve fornecer pelo menos um Módulo: o módulo raiz da aplicação. O módulo raiz é o ponto de partida que o Nest usa para construir o gráfico da aplicação.



```
import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
    controllers: [PostsController],
    providers: [PostsService],
})
export class PostsModule {}
```

Em seguida, importamos este módulo para o módulo raiz `AppModule`:

```
import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';

@Module({
    imports: [PostsModule],
})
export class AppModule {}
```

O decorador `@Module()` aceita um único objeto cujas propriedades descrevem o módulo:

-   `**imports:**` Outros módulos que são necessários por este módulo.
-   `**exports:**` Por padrão, os módulos encapsulam provedores. É impossível injetar provedores que não fazem parte diretamente do módulo atual ou que não são exportados dos módulos importados. Para tornar os provedores do módulo atual disponíveis para outros módulos na aplicação, eles precisam ser exportados aqui. Também podemos exportar módulos que importamos.
-   `**controllers:**` O conjunto de controladores definidos neste módulo que precisam ser instanciados.
-   `**providers:**` Em termos simples, todos os nossos serviços e provedores dentro do módulo estarão aqui.

### Interceptor

Um interceptor é um conjunto especializado de middleware que permite observar a solicitação que entra na aplicação. Você pode observar a solicitação antes que ela chegue ao controlador ou após o controlador ter terminado com a solicitação e antes que ela chegue ao lado do cliente como uma resposta. Você pode manipular os dados em seu caminho de saída no interceptor.

### Guard

Guard também é um tipo especial de middleware que é usado principalmente para autenticação e autorização. Ele apenas retorna um valor booleano de verdadeiro ou falso.

Os Guards possuem uma **responsabilidade única**: determinar se uma solicitação específica será tratada pelo manipulador de rotas ou não, dependendo de certas condições (como permissões, funções, ACLs, etc.) presentes em tempo de execução.

Um Guard também deve implementar a interface `CanActivate`.

### Pipe

Pipes são também um tipo especial de middleware que ficam entre o cliente e o controlador. Eles são usados principalmente para validação e transformação de dados antes de chegarem ao controlador.

### DTO (Data Transfer Object)

O objeto de transferência de dados é um objeto que define como os dados serão enviados pela rede. Eles também são usados para validação e verificação de tipos.

### Interfaces

As interfaces TypeScript são usadas apenas para verificação de tipos e não são compiladas no código JavaScript.

## Instalação

Instale o NestJs CLI. O Nest vem com uma CLI incrível que facilita a criação de uma aplicação Nest com facilidade. No seu terminal ou cmd, execute:

`npm i -g @nestjs/cli`

Agora você tem o Nest instalado globalmente na sua máquina.

No seu terminal ou cmd, acesse o diretório onde você deseja criar sua aplicação e execute os seguintes comandos:

`nest new nest-blog-api`  
`cd nest-blog-api`  
`npm run start:dev`

Navegue para `[http://localhost:3000](http://localhost:3000/)` em qualquer um dos seus navegadores. Você deve ver `Hello World`. Bravo! você criou sua primeira aplicação Nest. Vamos continuar.

**NOTA: No momento desta escrita**, **caso executar** `**npm run start:dev**` **gere um erro, altere o** `**typescript:3.4.2**` **no seu** `**package.json**` **para** `**typescript:3.7.2**` **e, em seguida, delete o** `**node_modules e package-lock.json**` **e execute novamente** `**npm i**`**.**

Sua estrutura de pastas deve se parecer com isso:

![Image](https://www.freecodecamp.org/news/content/images/2020/06/1_qLCtw-62xXAdTHXPy2JAMg.png) _Estrutura de pastas do Nest_

## Configuração do Sequelize e Banco de Dados

Vamos começar instalando as seguintes dependências. Certifique-se de que seu terminal ou cmd está atualmente no diretório raiz do seu projeto. Em seguida, execute os seguintes comandos:

`npm install -g sequelize npm install --save sequelize sequelize-typescript pg-hstore pg npm install --save-dev @types/sequelize npm install dotenv --save`

Agora, crie um módulo de banco de dados. Execute `nest generate module /core/database`.

### Interface de Banco de Dados

Dentro da pasta do banco de dados, crie uma pasta `interfaces`, em seguida, crie um arquivo `dbConfig.interface.ts` dentro dela. Isso é para a interface de configuração do banco de dados.

Cada um dos ambientes de banco de dados deve opcionalmente ter as seguintes propriedades. Copie e cole o código a seguir:

```
export interface IDatabaseConfigAttributes {
    username?: string;
    password?: string;
    database?: string;
    host?: string;
    port?: number | string;
    dialect?: string;
    urlDatabase?: string;
}

export interface IDatabaseConfig {
    development: IDatabaseConfigAttributes;
    test: IDatabaseConfigAttributes;
    production: IDatabaseConfigAttributes;
}
```

### Configuração do Banco de Dados

Agora, vamos criar uma configuração de ambiente de banco de dados. Dentro da pasta do banco de dados, crie um arquivo `database.config.ts`. Copie e cole o código abaixo:

```
import * as dotenv from 'dotenv';
import { IDatabaseConfig } from './interfaces/dbConfig.interface';

dotenv.config();

export const databaseConfig: IDatabaseConfig = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME_DEVELOPMENT,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
    },
    test: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME_TEST,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME_PRODUCTION,
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
    },
};
```
```

### Arquivo .env

Na pasta raiz do nosso projeto, crie arquivos `.env` e `.env.sample`. Copie e cole o seguinte código em ambos os arquivos:

```
DB_HOST=localhost
DB_PORT=5432
DB_USER=nome_do_usuario_do_banco
DB_PASS=senha_do_banco
DB_DIALECT=postgres
DB_NAME_TEST=nome_do_banco_teste
DB_NAME_DEVELOPMENT=nome_do_banco_desenvolvimento
DB_NAME_PRODUCTION=nome_do_banco_producao
JWTKEY=chave_secreta_aleatoria
TOKEN_EXPIRATION=48h
BEARER=Bearer
```

Preencha os valores com a informação correta – apenas no arquivo `.env` – e certifique-se de adicioná-lo ao arquivo `.gitignore` para evitar enviá-lo online. O `.env.sample` é para aqueles que desejam baixar seu projeto e usá-lo, então você pode enviá-lo online.

**DICAS:** **Seu nome de usuário, senha e nome do banco de dados devem ser os que você usa para configurar seu Postgres. Crie um banco de dados Postgres com o seu nome de banco de dados.**

O Nest fornece um pacote `@nestjs/config` prontamente disponível para ajudar a carregar o nosso arquivo `.env`. Para usá-lo, primeiro instalamos a dependência necessária.

Execute `npm i --save @nestjs/config`.

Importe o `@nestjs/config` no módulo raiz do seu aplicativo:

```
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
    ]
})
export class AppModule { }
```

Definir `ConfigModule.forRoot({ isGlobal: true })` para `isGlobal: true` tornará as propriedades do `.env` disponíveis em toda a aplicação.

### Provedor de Banco de Dados

Vamos criar um provedor de banco de dados. Dentro da pasta do banco de dados, crie um arquivo chamado `database.providers.ts`.

A diretório core conterá todas as nossas configurações principais, configurações, módulos compartilhados, pipes, guards e middlewares.

No arquivo `database.providers.ts`, copie e cole este código:

```
import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';

export const databaseProviders = [{
    provide: SEQUELIZE,
    useFactory: async () => {
        let config;
        switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
           config = databaseConfig.development;
           break;
        case TEST:
           config = databaseConfig.test;
           break;
        case PRODUCTION:
           config = databaseConfig.production;
           break;
        default:
           config = databaseConfig.development;
        }
        const sequelize = new Sequelize(config);
        sequelize.addModels(['modelos vão aqui']);
        await sequelize.sync();
        return sequelize;
    },
}];
```

Aqui, a aplicação decide em qual ambiente estamos executando atualmente e então escolhe a configuração do ambiente.

Todos os nossos modelos serão adicionados à função `sequelize.addModels([User, Post])`. No momento, não há modelos.

**Melhor prática**: É uma boa ideia manter todos os valores de string em um arquivo de constantes e exportá-lo para evitar erros de digitação desses valores. Você também terá um único lugar para mudar as coisas.

Dentro da pasta core, crie uma pasta `constants` e dentro dela crie um arquivo `index.ts`. Cole o seguinte código:

```
export const SEQUELIZE = 'SEQUELIZE';
export const DEVELOPMENT = 'development';
export const TEST = 'test';
export const PRODUCTION = 'production';
```

Vamos adicionar o provedor de banco de dados ao nosso módulo de banco de dados. Copie e cole este código:

```
import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';

@Module({
    providers: [...databaseProviders],
    exports: [...databaseProviders],
})
export class DatabaseModule { }
```

Nós exportamos o provedor de banco de dados `exports: [...databaseProviders]` para torná-lo **acessível** ao resto da aplicação que precisar dele.

Agora, vamos importar o módulo de banco de dados em nosso módulo raiz da aplicação para torná-lo disponível para todos os nossos serviços.

```
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './core/database/database.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        DatabaseModule,
    ]
})
export class AppModule { }
```

### Configurando um prefixo global de endpoint

Nós podemos querer que todos os nossos endpoints da API comecem com `api/v1` para diferentes versionamentos. Não queremos ter que adicionar esse prefixo a todos os nossos controladores. Felizmente, o Nest fornece uma maneira de definir um prefixo global.

No arquivo `main.ts`, adicione `app.setGlobalPrefix('api/v1');`

```
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // prefixo global
    app.setGlobalPrefix('api/v1');
    await app.listen(3000);
}
bootstrap();
```

## Módulo de Usuário

Vamos adicionar um módulo de Usuário para gerenciar todas as operações relacionadas ao usuário e para manter o controle de quem está criando qual post.

Execute `nest generate module /modules/users`.  
Isso adicionará automaticamente este módulo ao nosso módulo raiz `AppModule`.

### Gerar Serviço de Usuário

Execute `nest generate service /modules/users`.  
Isso adicionará automaticamente esse serviço ao módulo de Usuários.

### Configurar Modelo de Esquema de Banco de Dados de Usuário

```typescript
import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password: string;

    @Column({
        type: DataType.ENUM,
        values: ['male', 'female'],
        allowNull: false,
    })
    gender: string;
}
```

Aqui, estamos especificando o que nossa tabela User conterá. O `@column() decorator` fornece informações sobre cada coluna na tabela. A tabela User terá `name` `email` `password` e `gender` como colunas. Importamos todos os decoradores do Sequelize de `sequelize-typescript`. Para ler mais sobre [Sequelize e TypeScript, confira isto][6].

### User DTO

Vamos criar nosso esquema User DTO (**Data Transfer Object**). Dentro da pasta users, crie uma pasta `dto`. Em seguida, crie um arquivo `user.dto.ts` dentro dela. Cole o seguinte código:

```typescript
export class UserDto {
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly gender: string;
}
```

### Provedor de Repositório de Usuário

Agora, crie um provedor de Repositório de Usuário. Dentro da pasta de usuário, crie um arquivo `users.providers.ts`. Este provedor é usado para se comunicar com o banco de dados.

```typescript
import { User } from './user.entity';
import { USER_REPOSITORY } from '../../core/constants';

export const usersProviders = [{
    provide: USER_REPOSITORY,
    useValue: User,
}];
```

Adicione esta `const USER\_REPOSITORY = 'USER\_REPOSITORY';` aos arquivos de constantes `index.ts`.

Além disso, adicione o provedor de usuário ao módulo User. Observe que adicionamos o UserService ao nosso array `exports`. Isso ocorre porque precisaremos dele fora do Módulo User.

```typescript
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { usersProviders } from './users.providers';

@Module({
    providers: [UsersService, ...usersProviders],
    exports: [UsersService],
})
export class UsersModule {}
```

Vamos encapsular as operações do usuário dentro do UsersService. Copie e cole o código a seguir:

```typescript
import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
import { USER_REPOSITORY } from '../../core/constants';

@Injectable()
export class UsersService {

    constructor(@Inject(USER_REPOSITORY) private readonly userRepository: typeof User) { }

    async create(user: UserDto): Promise<User> {
        return await this.userRepository.create<User>(user);
    }

    async findOneByEmail(email: string): Promise<User> {
        return await this.userRepository.findOne<User>({ where: { email } });
    }

    async findOneById(id: number): Promise<User> {
        return await this.userRepository.findOne<User>({ where: { id } });
    }
}
```

Aqui, injetamos o repositório de usuários para se comunicar com o banco de dados.

-   `create(user: UserDto)` Este método cria um novo usuário na tabela de usuários e retorna o objeto de usuário recém-criado.
-   `findOneByEmail(email: string)` Este método é usado para procurar um usuário na tabela de usuários por email e retorna o usuário.
-   `findOneById(id: number)` Este método é usado para procurar um usuário na tabela de usuários pelo ID do usuário e retorna o usuário.

Usaremos esses métodos mais tarde.

Por fim, vamos adicionar o modelo User ao arquivo `database.providers.ts` `sequelize.addModels([User]);`.

```typescript
import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import { User } from '../../modules/users/user.entity';

export const databaseProviders = [{
    provide: SEQUELIZE,
    useFactory: async () => {
        let config;
        switch (process.env.NODE_ENV) {
            case DEVELOPMENT:
                config = databaseConfig.development;
                break;
            case TEST:
                config = databaseConfig.test;
                break;
            case PRODUCTION:
                config = databaseConfig.production;
                break;
            default:
                config = databaseConfig.development;
        }
        const sequelize = new Sequelize(config);
        sequelize.addModels([User]);
        await sequelize.sync();
        return sequelize;
    },
}];
```

## Módulo de Autenticação

### Gerar Módulo de Autenticação

Este módulo lidará com a autenticação do usuário (Login e Inscrição).  
Execute `nest generate module /modules/auth`.  
Isso adicionará automaticamente este módulo ao nosso módulo raiz `AppModule`.

### Gerar Serviço de Autenticação

Execute `nest generate service /modules/auth`.  
Isso adicionará automaticamente este serviço ao módulo Auth.

### Gerar Controlador de Autenticação

Execute `nest g co /modules/auth`.  
Isso adicionará automaticamente este controlador ao módulo Auth.  
**Nota:** `**g**` **é um alias para** `**generate**` **e** `**co**` **é para** `**controller**`**.**

Usaremos [Passport][7] para lidar com nossa autenticação. É simples integrar esta biblioteca com uma aplicação **Nest** usando o módulo @nestjs/passport.
```

-   **Local Passport Strategy:** Esta estratégia será usada para fazer login de usuários. Ela verificará se o email/nome de usuário e senha fornecidos pelo usuário são válidos ou não. Se as credenciais do usuário forem válidas, será retornado um token e um objeto de usuário, caso contrário, uma exceção será lançada.
-   **JWT Passport Strategy:** Esta estratégia será usada para proteger recursos protegidos. Somente usuários autenticados com um token válido poderão acessar esses recursos ou endpoints.

### Local Passport Strategy

Execute  
`npm install --save @nestjs/passport passport passport-local`  
`npm install --save-dev @types/passport-local`  
`npm install bcrypt --save`

Dentro da pasta auth, crie um arquivo `local.strategy.ts` e adicione o seguinte código:

```
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super();
    }

    async validate(username: string, password: string): Promise<any>{
        const user = await this.authService.validateUser(username, password);

        if (!user) {
         throw new UnauthorizedException('Invalid user credentials');
        }
        return user;
    }
}
```

Aqui, estamos importando `Strategy, PassportStrategy e AuthService.` Nós estendemos o `PassportStrategy` para criar a `LocalStrategy.` No nosso caso de uso com passport-local, não há opções de configuração, então nosso construtor simplesmente chama `super()` sem qualquer objeto de opções.

Precisamos implementar o método `validate()`. Para a local-strategy, o Passport espera um método `validate()` com a seguinte assinatura: `validate(username: string, password:string): any`.

A maior parte do trabalho de validação é feita em nosso `AuthService` (com a ajuda do nosso `UserService`), então esse método é bastante direto.

Chamamos o método `validateUser()` em `AuthService` (ainda precisamos escrever esse método), que verifica se o usuário existe e se a senha está correta. `authService.validateUser()` retorna null se não for válido ou o objeto do usuário se for válido.

Se um usuário for encontrado e as credenciais forem válidas, o usuário será retornado para que o Passport possa completar suas tarefas (por exemplo, criando a propriedade `user` no objeto `Request`), e o pipeline de manipulação de solicitações pode continuar. Se não for encontrado, lançamos uma exceção e deixamos nossa [camada de exceções][8] lidar com isso.

Agora, adicione `PassportModule, UserModule` e `LocalStrategy` ao nosso AuthModule.

```
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './local.strategy';

@Module({
    imports: [
        PassportModule,
        UsersModule,
    ],
    providers: [
        AuthService,
        LocalStrategy,
    ],
    controllers: [AuthController],
})
export class AuthModule {}
```

### AuthService

Vamos implementar o método `validateUser()`.

```
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService) { }

    async validateUser(username: string, pass: string) {
        // find if user exist with this email
        const user = await this.userService.findOneByEmail(username);
        if (!user) {
            return null;
        }

        // find if user password match
        const match = await this.comparePassword(pass, user.password);
        if (!match) {
            return null;
        }

        // tslint:disable-next-line: no-string-literal
        const { password, ...result } = user['dataValues'];
        return result;
    }

    private async comparePassword(enteredPassword, dbPassword) {
        const match = await bcrypt.compare(enteredPassword, dbPassword);
        return match;
    }
}
```

Aqui, verificamos se o usuário existe com o email fornecido. Em seguida, verificamos se a senha no banco de dados corresponde à senha fornecida pelo usuário. Se algum desses testes falhar, retornamos `null,` caso contrário, retornamos o objeto do usuário.

`comparePassword(enteredPassword, dbPassword):` Este método privado compara a senha fornecida pelo usuário e a senha do banco de dados do usuário e retorna um booleano. Se a senha corresponder, retorna true. Caso contrário, retorna false.

### JWT Passport Strategy

Execute  
`npm install @nestjs/jwt passport-jwt`  
`npm install @types/passport-jwt --save-dev`

Dentro da pasta auth, crie um arquivo `jwt.strategy.ts` e adicione o seguinte código:

```
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly userService: UsersService) {
        super({
             jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
             ignoreExpiration: false,
             secretOrKey: process.env.JWTKEY,
        });
    }

    async validate(payload: any) {
        // check if user in the token actually exist
        const user = await this.userService.findOneById(payload.id);
        if (!user) {
            throw new UnauthorizedException('You are not authorized to perform the operation');
        }
        return payload;
    }
}
```

Aqui, estamos estendendo o `PassportStrategy.` Dentro do `super()` adicionamos alguns objetos de opções. No nosso caso, essas opções são:

-   `jwtFromRequest:` fornece o método pelo qual o JWT será extraído do `Request`. Usaremos a abordagem padrão de fornecer um token bearer no cabeçalho Authorization de nossas solicitações de API.
-   `ignoreExpiration`: apenas para ser explícito, escolhemos a configuração padrão `false`, que delega a responsabilidade de garantir que um JWT não tenha expirado para o módulo Passport. Isso significa que se nossa rota for fornecida com um JWT expirado, a solicitação será negada e uma resposta `401 Unauthorized` será enviada. O Passport lida convenientemente com isso automaticamente para nós.
-   `secretOrKey`: Esta é nossa chave secreta para o token. Isso usará a chave secreta no nosso arquivo `.env`.
-   O `validate(payload: any)` Para a jwt-strategy, o Passport primeiro verifica a assinatura do JWT e decodifica o JSON. Ele então invoca nosso método `validate()` passando o JSON decodificado como seu único parâmetro. Com base na forma como funciona a assinatura do JWT, estamos garantidos de que estamos recebendo um token válido que assinamos e emitimos anteriormente para um usuário válido. Confirmamos se o usuário existe com o id do payload do usuário. Se o usuário existe, retornamos o objeto do usuário, e o Passport o anexará como uma propriedade no objeto `Request`. Se o usuário não existe, lançamos uma exceção.

Agora, adicione `JwtStrategy` e `JwtModule` ao `AuthModule.`:



@Module({
    imports: [
        PassportModule,
        UsersModule,
        JwtModule.register({
            secret: process.env.JWTKEY,
            signOptions: { expiresIn: process.env.TOKEN_EXPIRATION },
        }),
    ],
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy
    ],
    controllers: [AuthController],
})
export class AuthModule { }
```

Configuramos o `JwtModule` usando `register()`, passando um objeto de configuração.

Vamos adicionar outros métodos que precisaremos para fazer login e criar um novo usuário no `AuthService`:

```
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService,
    ) { }

    async validateUser(username: string, pass: string) {
        // encontra se o usuário existe com este email
        const user = await this.userService.findOneByEmail(username);
        if (!user) {
            return null;
        }

        // verifica se a senha do usuário corresponde
        const match = await this.comparePassword(pass, user.password);
        if (!match) {
            return null;
        }

        // tslint:disable-next-line: no-string-literal
        const { password, ...result } = user['dataValues'];
        return result;
    }

    public async login(user) {
        const token = await this.generateToken(user);
        return { user, token };
    }

    public async create(user) {
        // hash da senha
        const pass = await this.hashPassword(user.password);

        // cria o usuário
        const newUser = await this.userService.create({ ...user, password: pass });

        // tslint:disable-next-line: no-string-literal
        const { password, ...result } = newUser['dataValues'];

        // gera token
        const token = await this.generateToken(result);

        // retorna o usuário e o token
        return { user: result, token };
    }

    private async generateToken(user) {
        const token = await this.jwtService.signAsync(user);
        return token;
    }

    private async hashPassword(password) {
        const hash = await bcrypt.hash(password, 10);
        return hash;
    }

    private async comparePassword(enteredPassword, dbPassword) {
        const match = await bcrypt.compare(enteredPassword, dbPassword);
        return match;
    }
}
```

Importe e injete o JwtService.

-   `login(user):` Este método é usado para fazer login do usuário. Ele utiliza as informações do usuário, gera um token com elas e, em seguida, retorna o token e o objeto de usuário.
-   `create(user):` Este método é usado para criar um novo usuário. Ele utiliza as informações do usuário, hash da senha do usuário, salva o usuário no banco de dados, remove a senha do usuário retornado, gera um token com o objeto do usuário e, em seguida, retorna o token e o objeto de usuário.
-   `generateToken(user):` Este método privado gera um token e, em seguida, o retorna.
-   `hashPassword(password):` Este método privado realiza o hash da senha do usuário e retorna a senha com hash.

Usaremos todas essas funções mais tarde.

### AuthController

Agora, vamos criar nossos métodos `signup` e `login`:

```
import { Controller, Body, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserDto } from '../users/dto/user.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        return await this.authService.login(req.user);
    }

    @Post('signup')
    async signUp(@Body() user: UserDto) {
        return await this.authService.create(user);
    }
}
```

Quando acessamos este endpoint POST `api/v1/auth/login`, será chamada a função `@UseGuards(AuthGuard('local'))`. Isso utilizará o email/nome de usuário e senha do usuário, e então executará o método validate em nossa classe de estratégia local. O método `login(@Request() req)` gerará um token JWT e o retornará.

O endpoint POST `api/v1/auth/signup` chamará o método `this.authService.create(user)`, criará o usuário e retornará um token JWT.

### Vamos testar...

Abra seu aplicativo Postman e garanta que ele esteja funcionando. Envie uma solicitação POST para `http://localhost:3000/api/v1/auth/signup` e insira seus dados no corpo para criar um usuário. Você deve obter um token e o objeto de usuário retornado.

![Imagem](https://www.freecodecamp.org/news/content/images/2020/06/1_FA6_FCcCIJqTw9o37MwaAA.png)

Agora que temos um usuário, vamos fazer login com ele. Envie uma solicitação POST para `http://localhost:3000/api/v1/auth/login` e insira apenas seu nome de usuário e senha. Você deve obter um token e o objeto de usuário retornado.

![Imagem](https://www.freecodecamp.org/news/content/images/2020/06/1_kDI2NMatZQjvcdHzpDNLAA.png)

## Validação

Perceba que não estamos validando nenhuma das entradas do usuário. Agora, vamos adicionar validação ao nosso aplicativo.

Execute `npm i class-validator class-transformer --save`.

```typescript
import { Injectable, ArgumentMetadata, BadRequestException, ValidationPipe, UnprocessableEntityException } from '@nestjs/common';

@Injectable()
export class ValidateInputPipe extends ValidationPipe {
   public async transform(value, metadata: ArgumentMetadata) {
      try {
        return await super.transform(value, metadata);
      } catch (e) {
         if (e instanceof BadRequestException) {
            throw new UnprocessableEntityException(this.handleError(e.message.message));
         }
      }
   }

   private handleError(errors) {
        return errors.map(error => error.constraints);
   }
}
```

Vamos auto-validar todos os nossos endpoints com `dto` vinculando `ValidateInputPipe` no nível da aplicação. Dentro do arquivo `main.ts`, adicione o seguinte:

```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidateInputPipe } from './core/pipes/validate.pipe';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // prefixo global de endpoints
    app.setGlobalPrefix('api/v1');
    // tratar validação de entrada do usuário globalmente
    app.useGlobalPipes(new ValidateInputPipe());
    await app.listen(3000);
}
bootstrap();
```

Agora, vamos atualizar nosso arquivo `dto` de usuários:

```typescript
import { IsNotEmpty, MinLength, IsEmail, IsEnum } from 'class-validator';

enum Gender {
    MALE = 'male',
    FEMALE = 'female',
}

export class UserDto {
    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @MinLength(6)
    readonly password: string;

    @IsNotEmpty()
    @IsEnum(Gender, {
        message: 'gender must be either male or female',
    })
    readonly gender: Gender;
}
```

Aqui, estamos importando esses decoradores de `class-validator.`

-   `@IsNotEmpty():` garante que o campo não está vazio.
-   `@IsEmail():` verifica se o email inserido é um endereço de email válido.
-   `@MinLength(6):` garante que o comprimento da senha não é inferior a seis.
-   `@IsEnum:` garante que apenas o valor especificado é permitido (neste caso, male e female).

[class-validator][9] tem vários decoradores de validação - confira.

**Vamos testar nossa validação…**

![Image](https://www.freecodecamp.org/news/content/images/2020/06/1_IM9erua1RbvCkQv1yq4hGQ.png)

Sem passar nenhum valor, recebi o seguinte erro de validação. Nossa validação está funcionando agora. Esta validação é automática para todos os endpoints com um dto (data transfer object).

### Conta de usuário única

Vamos adicionar um guard que impede os usuários de se cadastrarem com o mesmo email duas vezes, já que o email é único ao nível do schema.

Dentro da pasta core, crie uma pasta guards e, em seguida, crie um arquivo `doesUserExist.guard.ts`. Copie e cole o seguinte código:

```typescript
import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsersService } from '../../modules/users/users.service';

@Injectable()
export class DoesUserExist implements CanActivate {
    constructor(private readonly userService: UsersService) {}

    canActivate(
      context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        return this.validateRequest(request);
    }

    async validateRequest(request) {
        const userExist = await this.userService.findOneByEmail(request.body.email);
        if (userExist) {
            throw new ForbiddenException('This email already exist');
        }
        return true;
    }
}
```

Agora, vamos adicionar este guard ao nosso método de signup em `AuthController.`:

```typescript
import { Controller, Body, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserDto } from '../users/dto/user.dto';
import { DoesUserExist } from '../../core/guards/doesUserExist.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        return await this.authService.login(req.user);
    }

    @UseGuards(DoesUserExist)
    @Post('signup')
    async signUp(@Body() user: UserDto) {
        return await this.authService.create(user);
    }
}
```

Vamos tentar criar um usuário com um email que já exista em nosso banco de dados:

![Image](https://www.freecodecamp.org/news/content/images/2020/06/1_HuAT1HbVfu4EXWxMBD5QQQ.png)

## Módulo de Post

Execute `nest g module /modules/posts`.  
Isto adicionará automaticamente este módulo ao nosso módulo raiz `AppModule`.

### Gerar Serviço de Post

Execute `nest g service /modules/posts`.  
Isto adicionará automaticamente este serviço ao módulo de Post.

### Gerar Controlador de Post

Execute `nest g co /modules/posts`,  
Isto adicionará automaticamente este controlador ao módulo de Post.

### Entidade de Post

Crie um arquivo `post.entity.ts` dentro da pasta posts. Copie e cole o seguinte código:

```typescript
import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from '../users/user.entity';
```

```typescript
    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    body: string;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId: number;

    @BelongsTo(() => User)
    user: User;
}
```

A única novidade aqui é a `@ForeignKey(() => User)` especificando que a coluna userId é o id da tabela User e `@BelongsTo(() => User)` especificando a relação entre as tabelas Post e User.

### Post DTO (Data Transfer Object)

Dentro da pasta de posts, crie uma pasta `dto` e, em seguida, crie um arquivo `post.dto.ts` dentro dela. Copie e cole o código a seguir:

```typescript
import { IsNotEmpty, MinLength } from 'class-validator';

export class PostDto {
    @IsNotEmpty()
    @MinLength(4)
    readonly title: string;

    @IsNotEmpty()
    readonly body: string;
}
```

Aqui, o objeto do corpo do post deve ter um título e um corpo, e o comprimento do título não deve ser menor que 4.

### Provedor de Post

Crie um arquivo `posts.providers.ts` dentro da pasta de posts. Copie e cole o seguinte código:

```typescript
import { Post } from './post.entity';
import { POST_REPOSITORY } from '../../core/constants';

export const postsProviders = [{
    provide: POST_REPOSITORY,
    useValue: Post,
}];
```

Adicione esta linha `_export_` const POST\_REPOSITORY = 'POST\_REPOSITORY'; ao arquivo `index.ts` de constantes.

Adicione nosso provedor de Post ao arquivo do Módulo de Post:

```typescript
import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { postsProviders } from './posts.providers';

@Module({
    providers: [PostsService, ...postsProviders],
    controllers: [PostsController],
})
export class PostsModule { }
```

Agora, adicione nossa entidade Post ao provedor de banco de dados. Importe a entidade Post dentro do arquivo `database.providers.ts`, adicione o Post a este método:

`sequelize.addModels([User, Post]);`

### Métodos do Serviço de Post

Copie e cole o seguinte dentro do arquivo de serviço de Post:

```typescript
import { Injectable, Inject } from '@nestjs/common';
import { Post } from './post.entity';
import { PostDto } from './dto/post.dto';
import { User } from '../users/user.entity';
import { POST_REPOSITORY } from '../../core/constants';

@Injectable()
export class PostsService {
    constructor(@Inject(POST_REPOSITORY) private readonly postRepository: typeof Post) { }

    async create(post: PostDto, userId): Promise<Post> {
        return await this.postRepository.create<Post>({ ...post, userId });
    }

    async findAll(): Promise<Post[]> {
        return await this.postRepository.findAll<Post>({
            include: [{ model: User, attributes: { exclude: ['password'] } }],
        });
    }

    async findOne(id): Promise<Post> {
        return await this.postRepository.findOne({
            where: { id },
            include: [{ model: User, attributes: { exclude: ['password'] } }],
        });
    }

    async delete(id, userId) {
        return await this.postRepository.destroy({ where: { id, userId } });
    }

    async update(id, data, userId) {
        const [numberOfAffectedRows, [updatedPost]] = await this.postRepository.update({ ...data }, { where: { id, userId }, returning: true });

        return { numberOfAffectedRows, updatedPost };
    }
}
```

Aqui, estamos injetando nosso repositório de Post para comunicar com nosso banco de dados.

-   `create(post: PostDto, userId):` Este aceita um objeto post e o id do usuário criando o post. Adiciona o post ao banco de dados e retorna o Post recém-criado. O `PostDto` é para validação.
-   `findAll():` Este obtém todos os posts do banco de dados e também inclui/carrega o usuário que o criou, excluindo a senha do usuário.
-   `findOne(id):` Este encontra e retorna o post com o id. Também inclui/carrega o usuário que o criou, excluindo a senha do usuário.
-   `delete(id, userId):` Este exclui o post do banco de dados com o id e userId. Apenas o usuário que criou o post pode excluí-lo. Retorna o número de linhas que foram afetadas.
-   `update(id, data, userId):` Este atualiza um post existente onde `id` é o id do post, `data` são os dados para atualizar, `userId` é o id do criador original. Retorna o número de linhas que foram atualizadas e o objeto recém-atualizado.

### Métodos do Controlador de Post

Copie e cole o seguinte dentro do arquivo do controlador de Post:

```typescript
import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PostsService } from './posts.service';
import { Post as PostEntity } from './post.entity';
import { PostDto } from './dto/post.dto';

@Controller('posts')
export class PostsController {
    constructor(private readonly postService: PostsService) { }

    @Get()
    async findAll() {
        // obter todos os posts no banco de dados
        return await this.postService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<PostEntity> {
        // encontrar o post com este id
        const post = await this.postService.findOne(id);
```


```markdown
// if post exist, return the post
return post;
}

@UseGuards(AuthGuard('jwt'))
@Post()
async create(@Body() post: PostDto, @Request() req): Promise<PostEntity> {
    // create a new post and return the newly created post
    return await this.postService.create(post, req.user.id);
}

@UseGuards(AuthGuard('jwt'))
@Put(':id')
async update(@Param('id') id: number, @Body() post: PostDto, @Request() req): Promise<PostEntity> {
    // get the number of row affected and the updated post
    const { numberOfAffectedRows, updatedPost } = await this.postService.update(id, post, req.user.id);

    // if the number of row affected is zero, 
    // it means the post doesn't exist in our db
    if (numberOfAffectedRows === 0) {
        throw new NotFoundException('This Post doesn\'t exist');
    }

    // return the updated post
    return updatedPost;
}

@UseGuards(AuthGuard('jwt'))
@Delete(':id')
async remove(@Param('id') id: number, @Request() req) {
    // delete the post with this id
    const deleted = await this.postService.delete(id, req.user.id);

    // if the number of row affected is zero, 
    // then the post doesn't exist in our db
    if (deleted === 0) {
        throw new NotFoundException('This Post doesn\'t exist');
    }

    // return success message
    return 'Successfully deleted';
}
}
```

A maior parte da funcionalidade das operações CRUD é feita em nosso `PostService.`

-   `findAll():` Isso lida com a requisição `GET` ao endpoint `api/v1/posts`. Ele retorna todos os posts em nosso banco de dados.
-   `findOne(@Param('id') id: number):` Isso lida com a requisição `GET` ao endpoint `api/v1/posts/1` para obter um único post, onde 1 é o id do post. Isso gera um erro 404 se não encontrar o post e retorna o objeto post se o encontrar.
-   `create(@Body() post: PostDto, @Request() req):` Isso lida com a requisição `POST` ao endpoint `api/v1/posts` para criar um novo post.
-   `@UseGuards(AuthGuard('jwt'))` é usado para proteger a rota (lembre-se da nossa estratégia JWT). Apenas usuários logados podem criar um post.
-   `update(@Param('id') id: number, @Body() post: PostDto, @Request() req):` Isso lida com a requisição `PUT` ao endpoint `api/v1/posts` para atualizar um post existente. Também é uma rota protegida. Se `numberOfAffectedRows` for zero, isso significa que não foi encontrado nenhum post com o id fornecido.
-   `remove(@Param('id') id: number, @Request() req):` Isso lida com a requisição `DELETE` para deletar um post existente.

## Vamos testar nossa operação CRUD...

### Criar um Post

Faça login e adicione seu token, pois a rota para criar um post é protegida.

![Imagem](https://www.freecodecamp.org/news/content/images/2020/06/1_qXyUFopQW72cMaHa0uTVOw.png)

![Imagem](https://www.freecodecamp.org/news/content/images/2020/06/1_oxqCFmCNaMH4I8FBR1TD-A.png) _Criando um post._

### Ler um único Post

Esta rota não é protegida, então pode ser acessada sem o token.

![Imagem](https://www.freecodecamp.org/news/content/images/2020/06/1_CQzE4J82K9Tmc0OsclMyQw.png) _Buscando um único post_

Lendo todos os Posts

Esta rota não é protegida, então pode ser acessada sem o token também.

![Imagem](https://www.freecodecamp.org/news/content/images/2020/06/1_7D47fSupbbgASbqbpX2jEA.png) _buscando todos os posts_

### Atualizando um único Post

Esta rota é protegida, então precisamos de um token e apenas o criador pode atualizá-lo.

![Imagem](https://www.freecodecamp.org/news/content/images/2020/06/1__yN5JvnyoisPNmRASfLnJw.png) _atualizando um único post_

### Deletando um Post

Esta rota é protegida, então precisamos de um token e apenas o criador pode deletá-lo.

![Imagem](https://www.freecodecamp.org/news/content/images/2020/06/1_qLmCLDKCvn_YOxeBGyx_3w.png) _Deletando um post_

# **Conclusão**

Nest.js oferece uma maneira mais estruturada de construir suas aplicações server-side com Node.

Para mais informações, confira o site oficial do [NestJS aqui][10].

Finalmente, espero que este artigo tenha sido útil para você! O [link para o repositório do projeto final no GitHub está aqui][11].

Você pode se conectar comigo no [LinkedIn][12] e [Twitter][13].

[1]: https://nodejs.org/
[2]: http://www.typescriptlang.org/
[3]: https://www.postman.com/
[4]: https://nodejs.org/
[5]: https://github.com/onwuvic/nest-blog-api
[6]: https://github.com/RobinBuschmann/sequelize-typescript#readme
[7]: https://github.com/jaredhanson/passport
[8]: https://docs.nestjs.com/exception-filters
[9]: https://github.com/typestack/class-validator
[10]: https://nestjs.com/
[11]: https://github.com/onwuvic/nest-blog-api
[12]: https://www.linkedin.com/in/victoronwuzor/
[13]: https://twitter.com/victoronwuzor
```

