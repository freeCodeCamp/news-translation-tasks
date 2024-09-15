---
title: Conclusion
date: 2024-09-15T02:12:59.669Z
authorURL: ""
originalURL: https://www.freecodecamp.org/news/build-web-apis-with-nestjs-beginners-guide/
posteditor: ""
proofreader: ""
---

By Victor Onwuzor

<!-- more -->

NestJS is an MVC framework for building efficient, scalable [Node.js][1] server-side applications.

It is built with and fully supports [TypeScript][2] (yet still enables developers to code in pure JavaScript). It also combines elements of Object Oriented Programming, Functional Programming, and Functional Reactive Programming.

One of the key benefits of Nest is that it provides an out-of-the-box application architecture that allows developers and teams to create highly testable, scalable, loosely coupled, and easily maintainable applications.

## What we are building

In this post, I will take you through the journey of getting started with Nest. We will build a Mini Blog that's a Web RESTful API Application.

This simple Mini Blog application will cover:

-   Setting up Sequelize and Postgres Database
-   Authentication with Passport (Login and Sign up)
-   Validating user input
-   Route protection with JWT
-   Creating, Reading, Updating, and Deleting a blog post

## Prerequisites

Knowledge of TypeScript and JavaScript is very important to follow along with this tutorial. Experience with Angular is a plus, but no worries – this post will explain every concept you need to know about Nest.

You will need to install [Postman][3], as we will use it to test our API endpoints. And also make sure you have [Node.js][4] (>= 8.9.0) installed on your machine. [Lastly, you can find a link to the final project GitHub repo here][5].

## Building blocks

Before we get started, we'll discuss some abstractions/concepts that will help you know where to put specific business logic from project to project.

Nest is very similar to Angular – so if you are familiar with Angular concepts it will be straightforward to you.

Still, I'll assume that you have no knowledge of these concepts and will explain them to you.

### Controller

The controller is responsible for listening to requests that come into your application. It then formulates the responses that go out.

For instance, when you make an API call to `/posts` the controller will handle this request and return the appropriate response you specified.

```
import { Controller, Get } from '@nestjs/common';

@Controller('posts')
export class PostsController {
    @Get()
    findAll(): string {
        return 'This action returns all posts';
    }

    @Get(:id)
    findOne(@Param('id') id: number): string {
        return 'This action returns one post';
    }
}
```

This is just a basic Class declaration in TypeScript/JavaScript with a `@Controller` decorator. All Nest Controllers must have the decorator which is **required** to define a basic Controller in Nest.

Nest allows you to specify your routes as a parameter in the `@Controller()` decorator. This helps you group a set of related routes and minimises code repetition. Any request to `/posts` will be handled by this controller.

At the class methods level, you can specify which method should handle the `GET`, `POST,` `DELETE`, `PUT/PATCH` HTTP requests.

In our example, the `findAll()` method with the `@Get()` decorator handles all `GET` HTTP requests to get all blog posts. While the `findOne()` method with the `@Get(': id')`decorator will handle a `GET /posts/1` request.

### Providers

Providers were designed to abstract any form of complexity and logic to a separate class. A provider can be a service, a repository, a factory, or a helper.

Providers are plain TypeScript/JavaScript classes with an `@Injectable()` decorator preceding their class declaration. Just like services in Angular, you can create and inject providers into other controllers or other providers as well.

A good use case for a service provider is to create a PostService that abstracts all communication to the database into this service. This keeps the `PostsController` nice and clean.

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

This is just a plain TypeScript class with a `@Injectable()` decorator (this is how Nest knows it is a provider). `Post` is just an interface for type checking.

Here, we are using a simple data structure to store the data. In a real project, this service will be communicating with the database.

### Modules

A module is a JavaScript/TypeScript class with the `@Module()`decorator.  
The `@Module()` decorator provides metadata that Nest uses to organise the application structure.

Modules are a very important aspect of Nest and each application must provide at least one Module: the application root module. The root module is the starting point Nest uses to build the application graph.

The post service, controller, post entity, and everything related to post should be grouped into a module (PostsModule). Below, we have defined the PostsModule.

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

Then, we import this module into the root module `AppModule`:

```
import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';

@Module({
    imports: [PostsModule],
})
export class AppModule {}
```

The `@Module()` decorator takes a single object whose properties describes the module:

-   `**imports:**` Other modules that are needed by this module.
-   `**exports:**` By default, modules encapsulate providers. It’s impossible to inject providers that are neither directly part of the current module nor are exported from the imported modules. To make the current module providers available to other modules in the application, they have to be exported here. We can also export modules we imported too.
-   `**controllers:**` The set of controllers defined in this module which have to be instantiated.
-   `**providers:**`in simple terms, all our services and providers within the module will be here.

### Interceptor

An interceptor is a specialised set of middleware that lets you peek into the request that goes into the application. You can peek into the request either before it reaches the controller or after the controller is done with the request before it gets to the client-side as a response. You can manipulate the data on their way out in the interceptor.

### Guard

Guard is also a special kind of middleware that is used mainly for authentication and authorisation. It only returns a boolean value of true or false.

Guards have a **single responsibility**: they determine whether a given request will be handled by the route handler or not, depending on certain conditions (like permissions, roles, ACLs, etc.) present at run-time.

A Guard should also implement the `CanActivate` interface.

### Pipe

Pipes are also a special kind of middleware that sits between the client and the controller. They are mostly used for validation and transforming data before they get to the controller.

### DTO (Data Transfer Object)

Data transfer object is an object that defines how data will be sent over the network. They are also used for validation and type checking.

### Interfaces

TypeScript interfaces are only used for type-checking and they do not compile down into JavaScript code.

## Installation

Install the NestJs CLI. Nest comes with an awesome CLI that makes it easy to scaffold a Nest application with ease. In your terminal or cmd run:

`npm i -g @nestjs/cli`

Now you have Nest installed globally in your machine.

On your terminal or cmd, cd into the directory where you want to create your application, and run following commands:

`nest new nest-blog-api`  
`cd nest-blog-api`  
`npm run start:dev`

Navigate to `[http://localhost:3000](http://localhost:3000/)` on any of your browsers. You should see `Hello World`. Bravo! you have created your first Nest app. Let’s continue.

**NOTE: As of this writing,** i**f running** `**npm run start:dev**` **throws** an **error, change your** `**typescript:3.4.2**` **in your** `**package.json file**` **to** `**typescript:3.7.2**` **and then delete the** `**node_modules and package-lock.json**` **re-run** `**npm i**`**.**

Your folder structure should look like this:

![Image](https://www.freecodecamp.org/news/content/images/2020/06/1_qLCtw-62xXAdTHXPy2JAMg.png) _Nest folder structure_

## Sequelize and Database Setup

We’ll start by installing the following dependencies. Make sure your terminal or cmd is currently on your project root directory. Then run the following commands:

`npm install -g sequelize npm install --save sequelize sequelize-typescript pg-hstore pg npm install --save-dev @types/sequelize npm install dotenv --save`

Now, create a database module. Run `nest generate module /core/database`.

### Database Interface

Inside the database folder, create an `interfaces` folder, then create a `dbConfig.interface.ts` file inside it. This is for the database configuration interface.

Each of the database environments should optionally have the following properties. Copy and paste the following code:

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

### Database Configuration

Now, let’s create a database environment configuration. Inside the database folder, create a `database.config.ts` file. Copy and paste the below code:

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

The environment will determine which configuration should be used.

### .env file

On our project root folder, create `.env` and `.env.sample` files. Copy and paste the following code into both files:

```
DB_HOST=localhost
DB_PORT=5432
DB_USER=database_user_name
DB_PASS=database_password
DB_DIALECT=postgres
DB_NAME_TEST=test_database_name
DB_NAME_DEVELOPMENT=development_database_name
DB_NAME_PRODUCTION=production_database_name
JWTKEY=random_secret_key
TOKEN_EXPIRATION=48h
BEARER=Bearer
```

Fill the values with the correct information – only on the `.env` file – and make sure it’s added to the `.gitignore` file to avoid pushing it online. The `.env.sample` is for those who want to download your project and use it so you can push it online.

**HINTS:** **Your username, password, and database name should be what you use to set up your Postgres. Create a Postgres database with your database name.**

Nest provides a `@nestjs/config` package out-of-the-box to help load our `.env` file. To use it, we first install the required dependency.

Run `npm i --save @nestjs/config`.

Import the `@nestjs/config` into your app root module:

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

Setting the `ConfigModule.forRoot({ isGlobal: true })` to `isGlobal: true` will make the `.env` properties available throughout the application.

### Database Provider

Let’s create a database provider. Inside the database folder, create a file called `database.providers.ts`.

The core directory will contain all our core setups, configuration, shared modules, pipes, guards, and middlewares.

In the `database.providers.ts` file, copy and paste this code:

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
        sequelize.addModels(['models goes here']);
        await sequelize.sync();
        return sequelize;
    },
}];
```

Here, the application decides what environment we are currently running on and then chooses the environment configuration.

All our models will be added to the `sequelize.addModels([User, Post])` function. Currently, there are no models.

**Best practice**: It is a good idea to keep all string values in a constant file and export it to avoid misspelling those values. You'll also have a single place to change things.

Inside the core folder, create a `constants` folder and inside it create an `index.ts` file. Paste the following code:

```
export const SEQUELIZE = 'SEQUELIZE';
export const DEVELOPMENT = 'development';
export const TEST = 'test';
export const PRODUCTION = 'production';
```

Let’s add the database provider to our database module. Copy and paste this code:

```
import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';

@Module({
    providers: [...databaseProviders],
    exports: [...databaseProviders],
})
export class DatabaseModule { }
```

We exported the database provider `exports: [...databaseProviders]` to make it **accessible** to the rest of the application that needs it.

Now, let’s import the database module into our app root module to make it available to all our services.

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

### Setting a global endpoint prefix

We might want all our API endpoints to start with `api/v1` for different versioning. We don't want to have to add this prefix to all our controllers. Fortunately, Nest provides a way to set a global prefix.

In the `main.ts` file, add `app.setGlobalPrefix('api/v1');`

```
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // global prefix
    app.setGlobalPrefix('api/v1');
    await app.listen(3000);
}
bootstrap();
```

## User Module

Let’s add a User module to handle all user-related operations and to keep tabs on who is creating what post.

Run `nest generate module /modules/users`.  
This will automatically add this module to our root module `AppModule`.

### Generate User Service

Run `nest generate service /modules/users`.  
This will automatically add this service to the Users module.

### Set Up User Database Schema Model

Inside `modules/users`, create a file called `user.entity.ts` then copy and paste this code:

```
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

Here, we are specifying what our User table will contain. The `@column() decorator` provides information about each column in the table. The User table will have `name` `email` `password` and `gender` as columns. We imported all the Sequelize decorators from `sequelize-typescript`. To read more about [Sequelize and TypeScript, check this out][6].

### User DTO

Let’s create our User DTO (**Data Transfer Object**) schema. Inside the users folder, create a `dto` folder. Then create a `user.dto.ts` file inside it. Paste the following code in:

```
export class UserDto {
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly gender: string;
}
```

### User Repository provider

Now, create a User **Repository** provider. Inside the user's folder, create a `users.providers.ts` file. This provider is used to communicate with the database.

```
import { User } from './user.entity';
import { USER_REPOSITORY } from '../../core/constants';

export const usersProviders = [{
    provide: USER_REPOSITORY,
    useValue: User,
}];
```

Add this `_export_` const USER\_REPOSITORY = 'USER\_REPOSITORY'; to the constants `index.ts` file.

Also, add the user provider to the User module. Notice, we added the UserService to our `exports` array. That is because we’ll need it outside of the User Module.

```
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { usersProviders } from './users.providers';

@Module({
    providers: [UsersService, ...usersProviders],
    exports: [UsersService],
})
export class UsersModule {}
```

Let’s encapsulate user operations inside the UsersService. Copy and paste the following code:

```
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

Here, we injected the user repository to communicate with the DB.

-   `create(user: UserDto)` This method creates a new user into the user table and returns the newly created user object.
-   `findOneByEmail(email: string)` This method is used to look up a user from the user table by email and returns the user.
-   `findOneById(id: number)` This method is used to look up a user from the user table by the user Id and returns the user.

We will use these methods later.

Lastly, let’s add the User model to the `database.providers.ts` file `sequelize.addModels([User]);`.

```
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

## Auth Module

### Generate Auth Module

This module will handle user authentication (Login and Sign up).  
Run `nest generate module /modules/auth`.  
This will automatically add this module to our root module `AppModule`

### Generate Auth Service

Run `nest generate service /modules/auth`.  
This will automatically add this service to the Auth module.

### Generate Auth Controller

Run `nest g co /modules/auth`.  
This will automatically add this controller to the Auth module.  
**Note:** `**g**` **is an alias for** `**generate**` **and** `**co**` **is for** `**controller**`**.**

We will be using [Passport][7] to handle our authentication. It is straightforward to integrate this library with a **Nest** application using the @nestjs/passport module.

We will implement two auth strategies for this application:

-   **Local Passport Strategy:** This strategy will be used for logging in users. It will verify if the email/username and password provided by the user is valid or not. If user credentials are valid, it will return a token and user object, if not, it will throw an exception.
-   **JWT Passport Strategy:** This strategy will be used to protect protected resources. Only authenticated users with a valid token will be able to access these resources or endpoints.

### Local Passport Strategy

Run  
`npm install --save @nestjs/passport passport passport-local`  
`npm install --save-dev @types/passport-local`  
`npm install bcrypt --save`

Inside the auth folder create a `local.strategy.ts` file and add the following code:

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

Here, we are importing `Strategy, PassportStrategy and AuthService.` We extend the `PassportStrategy` to create the `LocalStrategy.` In our use case with passport-local, there are no configuration options, so our constructor simply calls `super()` without any options object.

We must implement the `validate()` method. For the local-strategy, Passport expects a `validate()` method with the following signature: `validate(username: string, password:string): any`.

Most of the validation work is done in our `AuthService` (with the help of our `UserService`), so this method is quite straightforward.

We call the `validateUser()` method in the `AuthService` (we are yet to write this method), which checks if the user exists and if the password is correct. `authService.validateUser()` returns null if not valid or the user object if valid.

If a user is found and the credentials are valid, the user is returned so Passport can complete its tasks (e.g., creating the `user` property on the `Request` object), and the request handling pipeline can continue. If it's not found, we throw an exception and let our [exceptions layer][8] handle it.

Now, add the `PassportModule, UserModule`and `LocalStrategy` to our AuthModule.

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

Let’s implement the `validateUser()` method.

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

Here, we check if the user exists with the email provided. Then we check if the password in the DB matched what the User provided. If any of these checks fail, we return `null,` if not, we return the user object.

`comparePassword(enteredPassword, dbPassword):` This private method compares the user-entered password and user DB password and returns a boolean. If the password matches it returns true. If not, it returns false.

### JWT Passport Strategy

Run  
`npm install @nestjs/jwt passport-jwt`  
`npm install @types/passport-jwt --save-dev`

Inside the auth folder create a `jwt.strategy.ts` file and add the following code:

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

Here, we are extending `PassportStrategy.` Inside the `super()` we added some options object. In our case, these options are:

-   `jwtFromRequest:` supplies the method by which the JWT will be extracted from the `Request`. We will use the standard approach of supplying a bearer token in the Authorization header of our API requests.
-   `ignoreExpiration`: just to be explicit, we choose the default `false` setting, which delegates the responsibility of ensuring that a JWT has not expired to the Passport module. This means that if our route is supplied with an expired JWT, the request will be denied and a `401 Unauthorized` response sent. Passport conveniently handles this automatically for us.
-   `secretOrKey`: This is our secret key for the token. This will use the secret key in our `.env` file.
-   The `validate(payload: any)` For the jwt-strategy, Passport first verifies the JWT’s signature and decodes the JSON. It then invokes our `validate()` method passing the decoded JSON as its single parameter. Based on the way JWT signing works, we're guaranteed that we're receiving a valid token that we have previously signed and issued to a valid user. We confirm if the user exists with the user payload id. If the user exists, we return the user object, and Passport will attach it as a property on the `Request` object. If the user doesn’t exist, we throw an Exception.

Now, add the `JwtStrategy` and `JwtModule` to the `AuthModule.`:

```
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';

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

We configure the `JwtModule` using `register()`, passing in a configuration object.

Let’s add other methods we will need to login and create a new user in `AuthService`:

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

    public async login(user) {
        const token = await this.generateToken(user);
        return { user, token };
    }

    public async create(user) {
        // hash the password
        const pass = await this.hashPassword(user.password);

        // create the user
        const newUser = await this.userService.create({ ...user, password: pass });

        // tslint:disable-next-line: no-string-literal
        const { password, ...result } = newUser['dataValues'];

        // generate token
        const token = await this.generateToken(result);

        // return the user and the token
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

Import and inject JwtService.

-   `login(user):` This method is used to login the user. This takes the user information, generates a token with it, and then returns the token and user object.
-   `create(user):` This method is used to create a new user. This takes the user information, hash the user password, saves the user to the DB, removes the password from the newly returned user, generates a token with the user object, and then returns the token and user object.
-   `generateToken(user):` This private method generates a token and then returns it.
-   `hashPassword(password):` This private method hashes the user password and returns the hashed password.

We will be using all these functions later.

### AuthController

Now, let’s create our `signup` and `login` methods:

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

When we hit this endpoint POST `api/v1/auth/login` will call `@UseGuards(AuthGuard('local'))`. This will take the user email/username and password, then run the validate method on our local strategy class. The `login(@Request() req)` will generate a JWT token and return it.

The POST `api/v1/auth/signup` endpoint will call the `_this_`.authService.create(user) method, create the user, and return a JWT token.

### Let’s try it out…

Open your Postman application and make sure it's running. Send a POST request to `http://localhost:3000/api/v1/auth/signup` and input your body data to create a user. You should get a token and the user object returned.

![Image](https://www.freecodecamp.org/news/content/images/2020/06/1_FA6_FCcCIJqTw9o37MwaAA.png)

Now that we have a user, let’s log the user in. Send a POST request to `http://localhost:3000/api/v1/auth/login` and input just your username and password. You should get a token and the user object returned.

![Image](https://www.freecodecamp.org/news/content/images/2020/06/1_kDI2NMatZQjvcdHzpDNLAA.png)

## Validation

Notice how we are not validating any of the user's input. Now, let’s add validation to our application.

Run `npm i class-validator class-transformer --save`.

Inside the core folder, create a pipes folder and then create `validate.pipe.ts` file. Copy and paste the following code:

```
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

Let’s auto-validate all our endpoints with `dto` by binding `ValidateInputPipe` at the application level. Inside the `main.ts` file, add this:

```
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidateInputPipe } from './core/pipes/validate.pipe';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // global endpoints prefix
    app.setGlobalPrefix('api/v1');
    // handle all user input validation globally
    app.useGlobalPipes(new ValidateInputPipe());
    await app.listen(3000);
}
bootstrap();
```

Now, let’s update our users `dto` file:

```
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

Here, we are importing these decorators from `class-validator.`

-   `@IsNotEmpty():` ensures the field isn’t empty.
-   `@IsEmail():` checks if the email entered is a valid email address.
-   `@MinLength(6):` ensures the password character is not less than six.
-   `@IsEnum:` ensures only the specified value is allowed (in this case, male and female).

[class-validator][9] has tons of validation decorators – check them out.

**Let’s try our validation out…**

![Image](https://www.freecodecamp.org/news/content/images/2020/06/1_IM9erua1RbvCkQv1yq4hGQ.png)

Without passing any value, I got the following validation error. Our validation is working now. This validation is automatic to all endpoints with a dto (data transfer object).

### Unique User account

Let’s add a guard that prevents users from signing up with the same email twice since email is unique at the schema level.

Inside the core folder, create a guards folder, then create a `doesUserExist.guard.ts` file. Copy and paste the following code:

```
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

Now, let’s add this guard to our signup method in `AuthController.`:

```

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

Let’s try to create a user with an email that already exists in our database:

![Image](https://www.freecodecamp.org/news/content/images/2020/06/1_HuAT1HbVfu4EXWxMBD5QQQ.png)

## Post Module

Run `nest g module /modules/posts`.  
This will automatically add this module to our root module `AppModule`.

### Generate Post Service

Run`nest g service /modules/posts`.  
This will automatically add this service to the Post module.

### Generate Post Controller

Run `nest g co /modules/posts`,  
This will automatically add this controller to the Post module.

### Post Entity

Create a `post.entity.ts` file inside the posts folder. Copy and paste the following code:

```
import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from '../users/user.entity';

@Table
export class Post extends Model<Post> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title: string;

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

The only new thing here is the `@ForeignKey(() => User)` specifying that the userId column is the id of the User table and `@BelongsTo(() => User)` specifying the relationship between the Post table and User table.

### Post DTO (Data Transfer Object)

Inside the posts folder, create a `dto` folder then create a `post.dto.ts` file inside it. Copy and paste the following code:

```
import { IsNotEmpty, MinLength } from 'class-validator';

export class PostDto {
    @IsNotEmpty()
    @MinLength(4)
    readonly title: string;

    @IsNotEmpty()
    readonly body: string;
}
```

Here, our post body object must have a title, and body and title length must not be less than 4.

### Post Provider

Create a `posts.providers.ts` file inside the posts folder. Copy and paste the following code:

```
import { Post } from './post.entity';
import { POST_REPOSITORY } from '../../core/constants';

export const postsProviders = [{
    provide: POST_REPOSITORY,
    useValue: Post,
}];
```

Add this `_export_` const POST\_REPOSITORY = 'POST\_REPOSITORY'; to the constants `index.ts` file.

Add our Post provider to our Post Module file:

```
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

Now, add our Post entity to our database provider. Import the Post entity inside the `database.providers.ts` file, add the Post to this method:

`sequelize.addModels([User, Post]);`

### Post Service Methods

Copy and paste the following inside the Post service file:

```
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

Here, we are injecting our Post repository to communicate with our database.

-   `create(post: PostDto, userId):` This accepts post object and the id of the user creating the post. It adds the post to the database and returns the newly created Post. The `PostDto` is for validation.
-   `findAll():` This gets all the posts from the database and also includes/eager load the user who created it while excluding the user password.
-   `findOne(id):` This finds and returns the post with the id. It also includes/eager load the user who created it while excluding the user password.
-   `delete(id, userId):` This deletes the post from the database with the id and userId. Only the user who created the post can delete it. This returns the number of rows that were affected.
-   `update(id, data, userId):` This updates an existing post where `id` is the id of the post, `data` is the data to update, `userId` is the id of the original creator. This returns the number of rows that were updated and the newly updated object.

### Post Controller Methods

Copy and paste the following inside the Post controller file:

```
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
        // get all posts in the db
        return await this.postService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<PostEntity> {
        // find the post with this id
        const post = await this.postService.findOne(id);

        // if the post doesn't exit in the db, throw a 404 error
        if (!post) {
            throw new NotFoundException('This Post doesn\'t exist');
        }

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

Most of the CRUD operation functionality is done in our `PostService.`

-   `findAll():` This handles `GET` request to `api/v1/posts` endpoint. It returns all the posts in our database.
-   `findOne(@Param(‘id’) id: number):` This handles `GET` request to `api/v1/posts/1` endpoint to get a single post, where 1 is the id of the post. This throws a 404 error if it doesn’t find the post and returns the post object if it does find the post.
-   `create(@Body() post: PostDto, @Request() req):` This handles `POST` request to `api/v1/posts` endpoint to create a new post.
-   `@UseGuards(AuthGuard(‘jwt’))` is used to protect the route (remember our JWT strategy). Only logged in users can create a post.
-   `update(@Param(‘id’) id: number, @Body() post: PostDto, @Request() req):` This handles the `PUT` request to `api/v1/posts` endpoint to update an existing post. It is also a protected route. If the `numberOfAffectedRows` is zero that means no post with the params id was found.
-   `remove(@Param(‘id’) id: number, @Request() req):` This handles the `DELETE` request to delete an existing post.

## Let’s try our CRUD operation out…

### Create a Post

Log in and add your token since creating a post route is a protected route.

![Image](https://www.freecodecamp.org/news/content/images/2020/06/1_qXyUFopQW72cMaHa0uTVOw.png)

![Image](https://www.freecodecamp.org/news/content/images/2020/06/1_oxqCFmCNaMH4I8FBR1TD-A.png) _Creating a post._

### Read a single Post

This route isn’t protected, so it can be accessed without the token.

![Image](https://www.freecodecamp.org/news/content/images/2020/06/1_CQzE4J82K9Tmc0OsclMyQw.png) _Fetching a Single Post_

Reading all Posts

This route isn’t protected, so it can be accessed without the token too.

![Image](https://www.freecodecamp.org/news/content/images/2020/06/1_7D47fSupbbgASbqbpX2jEA.png) _fetching all posts_

### Updating a Single Post

This route is protected, so we need a token and only the creator can update it.

![Image](https://www.freecodecamp.org/news/content/images/2020/06/1__yN5JvnyoisPNmRASfLnJw.png) _updating a single post_

### Deleting a Post

This route is protected, so we need a token and only the creator can delete it.

![Image](https://www.freecodecamp.org/news/content/images/2020/06/1_qLmCLDKCvn_YOxeBGyx_3w.png) _Deleting a post_

# **Conclusion**

Nest.js gives you a more structured way of building your server-side applications with Node.

For more information, check out the official [NestJS website here][10].

Finally, I hope this article was useful to you! The [link to the final project GitHub repo is here][11].

You can connect with me on [LinkedIn][12] and [Twitter][13].

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