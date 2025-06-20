---
title: The NestJS Handbook – Learn to Use Nest with Code Examples
date: 2025-06-20T16:41:27.526Z
author: German Cocca
authorURL: https://www.freecodecamp.org/news/author/GerCocca/
originalURL: https://www.freecodecamp.org/news/the-nestjs-handbook-learn-to-use-nest-with-code-examples/
posteditor: ""
proofreader: ""
---

NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. Combining the best ideas from OOP (Object-Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming), it gives you a fully-architected, batteries-included platform on top of Express (or Fastify).

<!-- more -->

If you’re coming from Angular, you’ll feel right at home with its module/controller/service structure and powerful dependency-injection system.

In this article we’ll cover both **theory** – why NestJS exists, how it’s structured, and when to reach for it –and **practice**, with bite-sized code snippets demonstrating how to bootstrap a project, define routes, inject dependencies, and more. Let’s start by understanding what NestJS is and where it came from.

## Table of Contents

1.  [What is NestJS?][1]
    
    -   [1.1 History and Philosophy][2]
2.  [Why Choose NestJS?][3]
    
    -   [2.1 Benefits and Use Cases][4]
        
    -   [2.2 Comparison with Other Frameworks][5]
        
3.  [Getting Started][6]
    
    -   [3.1 Installing the CLI][7]
        
    -   [3.2 Creating Your First Project][8]
        
    -   [3.3 Project Structure Overview][9]
        
4.  [Core NestJS Building Blocks][10]
    
    -   [4.1 Modules][11]
        
    -   [4.2 Controllers][12]
        
    -   [4.3 Providers (Services)][13]
        
5.  [Dependency Injection][14]
    
    -   [5.1 How DI Works in NestJS][15]
        
    -   [5.2 Custom Providers and Factory Providers][16]
        
6.  [Routing & Middleware][17]
    
    -   [6.1 Defining Routes][18]
        
    -   [6.2 Applying Middleware][19]
        
7.  [Request Lifecycle & Pipes][20]
    
    -   [7.1 What Are Pipes?][21]
        
    -   [7.2 Built-In vs. Custom Pipes][22]
        
8.  [Guards & Authorization][23]
    
    -   [8.1 Implementing Guards][24]
        
    -   [8.2 Role-Based Access Control][25]
        
9.  [Exception Filters][26]
    
    -   [9.1 Handling Errors Gracefully][27]
        
    -   [9.2 Creating Custom Filters][28]
        
10.  [Interceptors & Logging][29]
    
    -   [10.1 Transforming Responses][30]
        
    -   [10.2 Logging and Performance Metrics][31]
        
11.  [Database Integration][32]
    
    -   [11.1 TypeORM with NestJS][33]
        
    -   [11.2 Mongoose (MongoDB)][34]
        
    -   [11.3 Prisma][35]
        
12.  [Configuration Management][36]
    
    -   [12.1 @nestjs/config Module][37]
        
    -   [12.2 Environment Variables][38]
        
13.  [Authentication][39]
    
    -   [13.1 JWT Strategy][40]
        
    -   [13.2 OAuth2 / Social Login][41]
        
14.  [Conclusion & Further Resources][42]
    
    -   [Summary][43]
        
    -   [Official Docs and Community Links][44]
        

## 1\. What is NestJS?

NestJS is a framework for building server-side applications in Node.js. It’s written in TypeScript (but supports plain JavaScript as well). At its core, it:

-   **Wraps** a mature HTTP server library (Express or Fastify)
    
-   **Standardizes** application architecture around modules, controllers, and providers
    
-   **Leverages** TypeScript’s type system for compile-time safety and clear APIs
    
-   **Offers** built-in support for things like validation, configuration, and testing
    

Rather than stitching together middleware by hand, NestJS encourages a declarative, layered approach. You define **modules** to group related functionality, **controllers** to handle incoming requests, and **providers** (often called “services”) for your business logic. Behind the scenes, NestJS resolves dependencies via an IoC container, so you can focus on writing clean, reusable classes.

To start up a project, run the following commands:

```
# Install the Nest CLI globally
npm install -g @nestjs/cli

# Create a new project called 'my-app'
nest new my-app

cd my-app
npm run start:dev
```

Once it’s running, you have a ready-to-go HTTP server with hot reloading, strict typing, and a sensible folder layout.

### 1.1 History and Philosophy

NestJS first appeared in 2017, created by Kamil Myśliwiec. Its goal was to bring the architectural patterns of Angular to the backend world, providing:

1.  **Consistency:** A single, opinionated way to structure applications.
    
2.  **Scalability:** Clear boundaries (modules) make it easier to grow teams and codebases.
    
3.  **Testability:** Built-in support for Jest and clear separation of concerns.
    
4.  **Extensibility:** A pluggable module system makes it easy to integrate ORMs, WebSockets, GraphQL, microservices, and more.
    

Under the hood, NestJS embraces these principles:

-   **Modularity:** Everything lives in a module (`AppModule`, `UsersModule`, and so on), which can import other modules or export providers.
    
-   **Dependency Injection:** Services can be injected into controllers (and even into other services), which fosters loose coupling.
    
-   **Decorators and Metadata:** With TypeScript decorators (`@Module()`, `@Controller()`, `@Injectable()`), NestJS reads metadata at runtime to wire everything together.
    

Here’s a tiny example showing the interplay of these pieces:

```
// users.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [{ id: 1, name: 'Alice' }];
  findAll() {
    return this.users;
  }
}

// users.controller.ts
import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.findAll();
  }
}

// users.module.ts
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
```

-   The `@Module` decorator groups controller + service
    
-   The controller injects the service via its constructor
    
-   A simple `GET /users` route returns an array of user objects
    

With that foundation laid, in the next section we’ll explore **why you’d choose NestJS**, comparing it to other popular Node frameworks and outlining common real-world use cases.

## 2\. Why Choose NestJS?

NestJS isn’t just another Node.js framework – it brings a structured, enterprise-grade approach to building backend services. In this section we’ll cover benefits and real-world use cases, then compare NestJS to other popular Node frameworks so you can see where it fits best.

### 2.1 Benefits and Use Cases

1.  **Strong architectural patterns**
    
    -   **Modularity:** You break your app into focused modules (`AuthModule`, `ProductsModule`, and so on), each responsible for a slice of functionality.
        
    -   **Separation of concerns:** Controllers handle HTTP, services encapsulate business logic, modules wire everything up.
        
    -   **Scalability:** Growing teams map naturally onto modules—new features rarely touch existing code.
        
2.  **Built-in dependency injection (DI)**
    
    -   DI makes testing and swapping implementations trivial.
        
    -   You can easily mock a service in a unit test:
        

```
    // products.controller.spec.ts
    import { Test, TestingModule } from '@nestjs/testing';
    import { ProductsController } from './products.controller';
    import { ProductsService } from './products.service';

    describe('ProductsController', () => {
      let controller: ProductsController;
      const mockService = { findAll: () => ['apple', 'banana'] };

      beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
          controllers: [ProductsController],
          providers: [
            { provide: ProductsService, useValue: mockService },
          ],
        }).compile();

        controller = module.get<ProductsController>(ProductsController);
      });

      it('returns a list of products', () => {
        expect(controller.getAll()).toEqual(['apple', 'banana']);
      });
    });
```

3.  **TypeScript-first**
    
    -   Full type safety at compile time.
        
    -   Leverage interfaces and decorators (`@Body()`, `@Param()`) to validate and transform data.
        
4.  **Rich ecosystem and extensibility**
    
    -   Official integrations for WebSockets, GraphQL, microservices (RabbitMQ, Kafka), and more.
        
    -   Hundreds of community modules (for example `@nestjs/swagger` for OpenAPI docs).
        
5.  **Production-grade tooling**
    
    -   CLI generates boilerplate (`nest g module`, `nest g service`).
        
    -   Support for hot-reload in development (`npm run start:dev`).
        
    -   Built-in testing setup with Jest.
        

**Real-World Use Cases:**

-   **Enterprise APIs** with strict module boundaries and RBAC.
    
-   **Microservices architectures**, where each service is a self-contained NestJS app.
    
-   **Real-time applications** (chat, live dashboards) using Nest’s WebSocket gateways.
    
-   **GraphQL backends** with code-first schemas.
    
-   **Event-driven systems** connecting to message brokers.
    

### 2.2 Comparison with Other Frameworks

| Feature | Express | Koa | NestJS |
| --- | --- | --- | --- |
| **Architecture** | Minimal, unopinionated | Minimal, middleware-based | Opinionated modules/controllers/services |
| **Dependency Injection** | Manual wiring | Manual wiring | Built-in, reflect-metadata |
| **TypeScript Support** | Via DefinitelyTyped | Via DefinitelyTyped | First-class, decorators |
| **CLI Tooling** | None (3rd-party) | None | `@nestjs/cli` generates code |
| **Testing** | User-configured | User-configured | Jest + DI makes mocking easy |
| **Ecosystem** | Middleware library | Middleware library | Official microservices, GraphQL, Swagger modules |
| **Learning Curve** | Low | Low | Medium (learning Nest idioms) |

-   **Express** is great if you want minimal layers and full control, but you’ll end up hand-rolling a lot (DI, validation, folder structure).
    
-   **Koa** offers a more modern middleware approach, but still leaves architecture decisions to you.
    
-   **NestJS** provides the full stack: structure, DI, validation, testing, and official integrations, which is ideal if you value **consistency**, **type safety**, and **out-of-the-box best practices**.
    

**When to choose NestJS:**

NextJS is great for various use cases. It’s particularly effective if you’re building a large-scale API or microservice suite, if you want a solid architecture from day one, and if you prefer TypeScript and DI to keep code testable and maintainable.

With these advantages in mind, you’ll find that NestJS can dramatically speed up development, especially on projects that need robust structure and clear boundaries.

In the next section, we’ll dive into getting started: installing the CLI, creating a project, and exploring the generated folder layout.

## 3\. Getting Started

Let’s jump into the basics: installing the CLI, scaffolding a new project, and exploring the default folder layout.

### 3.1 Installing the CLI

Nest ships with an official command-line tool that helps you generate modules, controllers, services, and more. Under the hood it uses Yeoman templates to keep everything consistent.

```
# Install the CLI globally (requires npm ≥ 6)
npm install -g @nestjs/cli
```

Once installed, you can run `nest --help` to see available commands:

```
nest --help
Usage: nest <command> [options]

Commands:
  new <name>       Scaffold a new project
  generate|g <schematic> [options]  Generate artifacts (modules, controllers, ...)
  build            Build project with webpack
  ...

Options:
  -v, --version    Show version number
  -h, --help       Show help
```

### 3.2 Creating Your First Project

Scaffolding a new app is a single command. The CLI will ask whether to use npm or yarn, and whether to enable strict TypeScript settings.

```
# Create a new Nest app in the "my-nest-app" folder
nest new my-nest-app
```

After answering the prompts, you’ll have:

```
cd my-nest-app
npm run start:dev
```

This launches a development server on [`http://localhost:3000`][45] with automatic reload on file changes.

### 3.3 Project Structure Overview

By default, you’ll see something like:

```
my-nest-app/
├── src/
│   ├── app.controller.ts      # example controller
│   ├── app.controller.spec.ts # unit test for controller
│   ├── app.module.ts          # root application module
│   ├── app.service.ts         # example provider
│   └── main.ts                # entry point (bootstraps Nest)
├── test/                      # end-to-end tests
├── node_modules/
├── package.json
├── tsconfig.json
└── nest-cli.json             # CLI configuration
```

-   **src/main.ts**  
    The “bootstrap” script. It creates a Nest application instance and starts listening on a port:
    
    ```
      import { NestFactory } from '@nestjs/core';
      import { AppModule } from './app.module';
    
      async function bootstrap() {
        const app = await NestFactory.create(AppModule);
        await app.listen(3000);
        console.log(`🚀 Application is running on: ${await app.getUrl()}`);
      }
      bootstrap();
    ```
    
-   **src/app.module.ts**  
    The root module. It ties together controllers and providers:
    
    ```
      import { Module } from '@nestjs/common';
      import { AppController } from './app.controller';
      import { AppService } from './app.service';
    
      @Module({
        imports: [],                 // other modules to import
        controllers: [AppController],
        providers: [AppService],
      })
      export class AppModule {}
    ```
    
-   **src/app.controller.ts / app.service.ts**  
    A simple example that shows dependency injection in action:
    
    ```
      // app.controller.ts
      import { Controller, Get } from '@nestjs/common';
      import { AppService } from './app.service';
    
      @Controller()
      export class AppController {
        constructor(private readonly appService: AppService) {}
    
        @Get()
        getHello(): string {
          return this.appService.getHello();
        }
      }
    
      // app.service.ts
      import { Injectable } from '@nestjs/common';
    
      @Injectable()
      export class AppService {
        getHello(): string {
          return 'Hello, NestJS!';
        }
      }
    ```
    

With this scaffold in place, you have a minimal – but fully functional – NestJS application. From here, you can generate new modules, controllers, and services:

```
# Generate a new module, controller, and service for "tasks"
nest g module tasks
nest g controller tasks
nest g service tasks
```

Each command will drop a new `.ts` file in the appropriate folder and update your module’s metadata. In the next section, we’ll dive into core Nest building blocks like modules, controllers, and providers in more detail.

## 4\. Core NestJS Building Blocks

At the heart of every NestJS application are three pillars: **Modules**, **Controllers**, and **Providers** (often called Services). Let’s see what each one does, and how they fit together in theory and in practice.

### 4.1 Modules

A **Module** is a logical boundary – a container that groups related components (controllers, providers, and even other modules). Every NestJS app has at least one root module (usually `AppModule`), and you create feature modules (`UsersModule`, `AuthModule`, and so on) to organize code by domain.

#### @Module() Decorator

-   `imports`: other modules to use
    
-   `controllers`: controllers that handle incoming requests
    
-   `providers`: services or values available via DI
    
-   `exports`: providers that should be visible to importing modules
    

**Here’s an example:**

```
// cats.module.ts
import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  imports: [],            // e.g. TypeOrmModule.forFeature([Cat])
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService], // makes CatsService available to other modules
})
export class CatsModule {}
```

Then in your root module:

```
// app.module.ts
import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
})
export class AppModule {}
```

Now anything that injects `CatsService` will resolve to the one defined inside `CatsModule`.

### 4.2 Controllers

A **Controller** maps incoming HTTP requests to handler methods. It’s responsible for extracting request data (query parameters, body, headers) and returning a response. Controllers should remain thin – delegating business logic to providers.

-   **@Controller(path?)**: Defines a route prefix
    
-   **@Get, @Post, @Put, @Delete, and so on**: Define method-level routes
    
-   **@Param(), @Query(), @Body(), @Headers(), @Req(), @Res()**: Decorators to extract request details
    

**Here’s an example:**

```
// cats.controller.ts
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')                  // prefix: /cats
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll() {
    return this.catsService.findAll();  // GET /cats
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catsService.findOne(+id);  // GET /cats/1
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);  // POST /cats
  }
}
```

```
// dto/create-cat.dto.ts
export class CreateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed?: string;
}
```

### 4.3 Providers (Services)

**Providers** are classes annotated with `@Injectable()` that contain your business logic or data access. Anything you want to inject elsewhere must be a provider. You can provide plain values, factory functions, or classes.

-   **@Injectable()**: Marks a class as available for DI
    
-   **Scope**: Default is singleton, but you can change to request or transient
    
-   **Custom Providers**: Use `useClass`, `useValue`, `useFactory`, or `useExisting` for more control
    

**Here’s an example:**

```
// cats.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  private cats = [];

  create(dto: CreateCatDto) {
    const newCat = { id: Date.now(), ...dto };
    this.cats.push(newCat);
    return newCat;
  }

  findAll() {
    return this.cats;
  }

  findOne(id: number) {
    const cat = this.cats.find(c => c.id === id);
    if (!cat) {
      throw new NotFoundException(`Cat #${id} not found`);
    }
    return cat;
  }
}
```

**Injecting a Custom Value:**

```
// logger.provider.ts
export const LOGGER = {
  provide: 'LOGGER',
  useValue: console,
};

// app.module.ts
import { Module } from '@nestjs/common';
import { LOGGER } from './logger.provider';

@Module({
  providers: [LOGGER],
  exports: [LOGGER],
})
export class AppModule {}
```

```
// some.service.ts
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class SomeService {
  constructor(@Inject('LOGGER') private readonly logger: Console) {}

  logMessage(msg: string) {
    this.logger.log(`Custom log: ${msg}`);
  }
}
```

With modules wiring up controllers and providers, NestJS gives you a scalable, testable foundation. In the next section, we’ll explore **Dependency Injection** in depth – how it works under the hood and how to create custom providers and factory-based injections.

## 5\. Dependency Injection

Nest’s built-in Dependency Injection (DI) system is the heart of how components (controllers, services, and so on) talk to each other in a loosely-coupled, testable way.

### 5.1 How DI Works in NestJS

When your application boots, Nest builds a **module-based IoC container**. Each `@Injectable()` provider is registered in the container under a token (by default, its class). When a class declares a dependency in its constructor, Nest looks up that token and injects the matching instance.

-   **Singleton scope**: One instance per application (default)
    
-   **Request scope**: New instance per incoming request
    
-   **Transient scope**: New instance every time it’s injected
    

**Here’s an example:**

```
// cats.service.ts
@Injectable()
export class CatsService {
  // ...
}

// cats.controller.ts
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  // Nest sees CatsService in the constructor,
  // finds its singleton instance, and injects it.
}
```

_Behind the scenes_, Nest collects metadata from decorators (`@Injectable()`, `@Controller()`) and builds a graph of providers. When you call `NestFactory.create(AppModule)`, it resolves that graph and wires everything together.

### 5.2 Custom Providers and Factory Providers

Sometimes you need to inject non-class values (APIs, constants) or run logic at registration time. Nest lets you define **custom providers** using the `provide` syntax.

#### `useValue`

Inject a plain value or object:

```
// config.constant.ts
export const APP_NAME = {
  provide: 'APP_NAME',
  useValue: 'MyAwesomeApp',
};

// app.module.ts
@Module({
  providers: [APP_NAME],
  exports: ['APP_NAME'],
})
export class AppModule {}

// some.service.ts
@Injectable()
export class SomeService {
  constructor(@Inject('APP_NAME') private readonly name: string) {}

  whoAmI() {
    return `Running in ${this.name}`;
  }
}
```

#### `useClass`

Swap implementations easily (useful for testing or feature flags):

```
// logger.interface.ts
export interface Logger {
  log(msg: string): void;
}

// console-logger.ts
@Injectable()
export class ConsoleLogger implements Logger {
  log(msg: string) { console.log(msg); }
}

// file-logger.ts
@Injectable()
export class FileLogger implements Logger {
  log(msg: string) { /* write to file */ }
}

// app.module.ts
@Module({
  providers: [
    { provide: 'Logger', useClass: FileLogger }, 
  ],
})
export class AppModule {}

// any.service.ts
@Injectable()
export class AnyService {
  constructor(@Inject('Logger') private readonly logger: Logger) {}
}
```

#### `useFactory`

Run arbitrary factory logic (for example, async initialization, dynamic config):

```
// database.provider.ts
export const DATABASE = {
  provide: 'DATABASE',
  useFactory: async (configService: ConfigService) => {
    const opts = configService.getDbOptions();
    const connection = await createConnection(opts);
    return connection;
  },
  inject: [ConfigService],
};

// app.module.ts
@Module({
  imports: [ConfigModule],
  providers: [DATABASE],
  exports: ['DATABASE'],
})
export class AppModule {}

// users.service.ts
@Injectable()
export class UsersService {
  constructor(@Inject('DATABASE') private readonly db: Connection) {}
}
```

With custom providers and the factory pattern, you can integrate external libraries, toggle implementations, or perform async setup – all while retaining the clear, testable structure NestJS provides.

In the next section we’ll look at **Routing and Middleware**, showing how to define route handlers, apply global or per-route middleware, and extend your HTTP pipeline.

## 6\. Routing & Middleware

Routing in NestJS is built on top of your controllers and decorators, while middleware lets you hook into the request/response pipeline for cross-cutting concerns like logging, authentication checks, or CORS.

### 6.1 Defining Routes

First, a bit of theory:

-   **@Controller(path?)** sets a URL prefix for all routes in that class.
    
-   **@Get, @Post, @Put, @Delete, etc.** define HTTP-method handlers.
    
-   **@Param(), @Query(), @Body(), @Headers(), @Req(), @Res()** extract parts of the incoming request.
    

You can combine route decorators and parameter decorators to build expressive, type-safe endpoints.

**Here’s an example:**

```
// products.controller.ts
import { Controller, Get, Post, Param, Query, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')                // all routes here start with /products
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()                              // GET /products
  findAll(
    @Query('limit') limit = '10',     // optional query ?limit=20
  ) {
    return this.productsService.findAll(+limit);
  }

  @Get(':id')                         // GET /products/123
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Post()                             // POST /products
  create(@Body() dto: CreateProductDto) {
    return this.productsService.create(dto);
  }
}
```

You can also nest controllers by importing a feature module, and use **@Patch**, **@Put**, **@Delete**, **@Head**, and so on for full RESTful coverage.

### 6.2 Applying Middleware

**Middleware** are functions that run _before_ your routes handle a request. They’re useful for logging, body-parsing (though Nest provides built-ins), authentication guards at a lower level, rate limiting, and so on.

You can implement them either as a functional middleware or a class implementing `NestMiddleware`.

**Here’s an example (Functional Middleware):**

```
// logger.middleware.ts
import { Request, Response, NextFunction } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
}

// app.module.ts
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { logger } from './logger.middleware';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)                 // apply logger
      .forRoutes('products');        // only for /products routes
  }
}
```

**And here’s another example (Class-based Middleware):**

```
// auth.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (!req.headers.authorization) {
      return res.status(401).send('Unauthorized');
    }
    // validate token...
    next();
  }
}

// security.module.ts
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AuthMiddleware } from './auth.middleware';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
})
export class SecurityModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(UsersController);    // apply to all routes in UsersController
  }
}
```

**Tip:** Global middleware can be applied in your `main.ts` before the `app.listen()` call via `app.use(logger)` if you want it on _every_ request.

With routing and middleware set up, you have full control over how requests flow through your application. Next up, we’ll dive into **Request Lifecycle and Pipes**, exploring how data transforms and validations happen as part of each request.

## 7\. Request Lifecycle & Pipes

NestJS processes each incoming request through a defined “lifecycle” of steps – routing to the correct handler, applying **pipes**, **guards**, **interceptors**, and finally invoking your controller method. **Pipes** sit between the incoming request and your handler, transforming or validating data before it reaches your business logic.

### 7.1 What Are Pipes?

A **Pipe** is a class annotated with `@Injectable()` that implements the `PipeTransform` interface. It has a single method:

```
transform(value: any, metadata: ArgumentMetadata): any
```

-   **Transformation**: Convert input data (for example, a string `"123"`) into the desired type (`number` `123`).
    
-   **Validation**: Check that incoming data meets certain rules and throw an exception (usually a `BadRequestException`) if it doesn’t.
    

By default, pipes run **after** middleware and **before** guards/interceptors, for each decorated parameter (`@Body()`, `@Param()`, and so on).

**Here’s how it works:**  
Nest ships with a handy global validation pipe that integrates with class-validator:

```
// main.ts
import { ValidationPipe } from '@nestjs/common';
import { NestFactory }    from '@nestjs/core';
import { AppModule }      from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Automatically validate and strip unknown properties
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
  await app.listen(3000);
}
bootstrap();
```

With this in place, any DTO annotated with validation decorators will be checked before your handler runs:

```
// dto/create-user.dto.ts
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()           // must be a valid email
  email: string;

  @IsString()          // must be a string
  @MinLength(8)        // at least 8 characters
  password: string;
}

// users.controller.ts
@Post()
createUser(@Body() dto: CreateUserDto) {
  // If body.email isn't an email, or password is shorter,
  // Nest throws a 400 Bad Request with details.
  return this.usersService.create(dto);
}
```

### 7.2 Built-In vs. Custom Pipes

#### Built-In Pipes

Nest provides several out-of-the-box pipes:

-   **ValidationPipe**: Integrates with `class-validator` for DTO validation (shown above).
    
-   **ParseIntPipe**: Converts a route parameter to `number` or throws `BadRequestException`.
    
-   **ParseBoolPipe**, **ParseUUIDPipe**, **ParseFloatPipe**, and so on.
    

```
@Get(':id')
getById(@Param('id', ParseIntPipe) id: number) {
  // id is guaranteed to be a number here
  return this.itemsService.findOne(id);
}
```

#### Custom Pipes

You can write your own to handle any transformation or validation logic:

```
import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParsePositiveIntPipe implements PipeTransform<string, number> {
  transform(value: string): number {
    const val = parseInt(value, 10);
    if (isNaN(val) || val <= 0) {
      throw new BadRequestException(`"${value}" is not a positive integer`);
    }
    return val;
  }
}
```

Use it just like a built-in pipe:

```
@Get('order/:orderId')
getOrder(
  @Param('orderId', ParsePositiveIntPipe) orderId: number
) {
  // orderId is a validated, positive integer
  return this.ordersService.findById(orderId);
}
```

With pipes you ensure that every piece of data entering your handlers is correctly typed and valid, keeping your business logic clean and focused. In the next section, we’ll explore **Guards and Authorization** to control access to your endpoints.

## 8\. Guards & Authorization

Guards sit in the request lifecycle **after** pipes and **before** interceptors/controllers. They determine whether a given request should be allowed to proceed based on custom logic. This is ideal for authentication, role checks, or feature flags.

### 8.1 Implementing Guards

A **Guard** is a class that implements the `CanActivate` interface, with a single method:

```
canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
```

-   **ExecutionContext** gives you access to the underlying request/response and route metadata.
    
-   If `canActivate` returns `true`, the request continues. Returning `false` or throwing an exception (for example, `UnauthorizedException`) blocks it.
    

You register guards either **globally**, at the **controller** level, or on **individual routes** with the `@UseGuards()` decorator.

**Here’s how guards work:**

1.  **Creating a simple auth guard:**

```
// auth.guard.ts
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Missing or invalid authorization header');
    }
    // Basic token check (replace with real validation)
    const token = authHeader.split(' ')[1];
    if (token !== 'valid-token') {
      throw new UnauthorizedException('Invalid token');
    }
    // Attach user info if needed:
    req.user = { id: 1, name: 'Alice' };
    return true;
  }
}
```

2.  **Applying the guard**

-   **Globally** (in `main.ts`):
    
    ```
      import { NestFactory } from '@nestjs/core';
      import { AppModule } from './app.module';
      import { AuthGuard } from './auth.guard';
    
      async function bootstrap() {
        const app = await NestFactory.create(AppModule);
        // every incoming request passes through AuthGuard
        app.useGlobalGuards(new AuthGuard());
        await app.listen(3000);
      }
      bootstrap();
    ```
    
-   **Controller-Level**:
    
    ```
      import { Controller, Get, UseGuards } from '@nestjs/common';
      import { AuthGuard } from './auth.guard';
    
      @Controller('profile')
      @UseGuards(AuthGuard)       // applies to all routes in this controller
      export class ProfileController {
        @Get()
        getProfile(@Req() req) {
          return req.user;
        }
      }
    ```
    
-   **Route-Level**:
    
    ```
      @Get('admin')
      @UseGuards(AdminGuard, AuthGuard)  // chain multiple guards
      getAdminData() { /* ... */ }
    ```
    

### 8.2 Role-Based Access Control

Beyond plain authentication, you often need **authorization** – ensuring a user has the correct role or permission. You can build a guard that reads metadata (for example, required roles) and verifies user claims.

**Here’s how it works:**

1.  **Define a roles decorator:**

```
// roles.decorator.ts
import { SetMetadata } from '@nestjs/common';
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
```

2.  **Create a roles guard:**

```
// roles.guard.ts
import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!requiredRoles) {
      return true; // no roles metadata => open route
    }
    const { user } = context.switchToHttp().getRequest();
    const hasRole = requiredRoles.some(role => user.roles?.includes(role));
    if (!hasRole) {
      throw new ForbiddenException('You do not have permission (roles)');
    }
    return true;
  }
}
```

3.  **Apply roles metadata and guard:**

```
@Controller('projects')
@UseGuards(AuthGuard, RolesGuard)
export class ProjectsController {
  @Get()
  @Roles('user', 'admin')         // route requires either 'user' or 'admin'
  findAll() { /* ... */ }

  @Post()
  @Roles('admin')                 // only 'admin' can create
  create() { /* ... */ }
}
```

With this setup:

-   `AuthGuard` ensures the request is authenticated and populates `req.user`.
    
-   `RolesGuard` reads the `@Roles()` metadata to enforce role-based access.
    

Guards give you a powerful, declarative way to enforce security and authorization policies. In the next section, we’ll cover **Exception Filters** – how to catch and format errors centrally, keeping your controllers clean.

## 9\. Exception Filters

Exception filters let you centralize error handling, transforming thrown exceptions into consistent HTTP responses or other formats. You can rely on Nest’s built-in behavior for many cases, but custom filters give you control over logging, response shape, or handling non-HTTP errors.

### 9.1 Handling Errors Gracefully

By default, if a controller or service throws an `HttpException` (or one of Nest’s built-in exceptions like `NotFoundException`, `BadRequestException`, and so on), Nest catches it and sends an appropriate HTTP response with status code and JSON body containing `statusCode`, `message`, and `error`.

If an unexpected error (for example, a runtime error) bubbles up, Nest uses its default exception filter to return a 500 Internal Server Error with a generic message.

Controllers/services should throw exceptions rather than return error codes manually, so the framework can format consistently.

**Here’s how it works:**

```
// users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [{ id: 1, name: 'Alice' }];

  findOne(id: number) {
    const user = this.users.find(u => u.id === id);
    if (!user) {
      // results in 404 with JSON { statusCode: 404, message: 'User #2 not found', error: 'Not Found' }
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }
}
```

```
// users.controller.ts
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }
}
```

If `findOne` throws, Nest’s default filter sends a structured JSON error. For unexpected errors (like a thrown `Error`), Nest wraps it into a 500 response.

### 9.2 Creating Custom Filters

You can implement the `ExceptionFilter` interface or extend `BaseExceptionFilter`. Just use the `@Catch()` decorator to target specific exception types (or leave empty to catch all).

In `catch(exception, host)`, you can extract context (HTTP request/response) and shape your response (for example, add metadata, custom fields, or a uniform envelope). You can also log exceptions or report to external systems here.

You can apply filters **globally**, to a controller, or to an individual route.

**Here’s how it works:**

1.  **Simple logging filter**  
    Catch all exceptions, log details, then delegate to default behavior:
    
    ```
     // logging-exception.filter.ts
     import {
       ExceptionFilter,
       Catch,
       ArgumentsHost,
       HttpException,
       HttpStatus,
       Logger,
     } from '@nestjs/common';
     import { BaseExceptionFilter } from '@nestjs/core';
    
     @Catch() // no args = catch every exception
     export class LoggingExceptionFilter extends BaseExceptionFilter {
       private readonly logger = new Logger(LoggingExceptionFilter.name);
    
       catch(exception: unknown, host: ArgumentsHost) {
         const ctx = host.switchToHttp();
         const req = ctx.getRequest<Request>();
         const res = ctx.getResponse();
    
         // Log stack or message
         if (exception instanceof Error) {
           this.logger.error(`Error on ${req.method} ${req.url}`, exception.stack);
         } else {
           this.logger.error(`Unknown exception on ${req.method} ${req.url}`);
         }
    
         // Delegate to default filter for HTTP exceptions or generic 500
         super.catch(exception, host);
       }
     }
    ```
    
    **Apply globally** in `main.ts`:
    
    ```
     async function bootstrap() {
       const app = await NestFactory.create(AppModule);
       app.useGlobalFilters(new LoggingExceptionFilter(app.get(HttpAdapterHost)));
       await app.listen(3000);
     }
    ```
    
    (If extending `BaseExceptionFilter`, pass the adapter host to the constructor or super as needed.)
    
2.  **Custom response shape**  
    Suppose you want all errors to return `{ success: false, error: { code, message } }`:
    
    ```
     // custom-response.filter.ts
     import {
       ExceptionFilter,
       Catch,
       ArgumentsHost,
       HttpException,
       HttpStatus,
     } from '@nestjs/common';
    
     @Catch()
     export class CustomResponseFilter implements ExceptionFilter {
       catch(exception: unknown, host: ArgumentsHost) {
         const ctx = host.switchToHttp();
         const response = ctx.getResponse();
         const request = ctx.getRequest<Request>();
    
         let status: number;
         let message: string | object;
    
         if (exception instanceof HttpException) {
           status = exception.getStatus();
           const res = exception.getResponse();
           // res might be a string or object
           message = typeof res === 'string' ? { message: res } : res;
         } else {
           status = HttpStatus.INTERNAL_SERVER_ERROR;
           message = { message: 'Internal server error' };
         }
    
         response.status(status).json({
           success: false,
           error: {
             statusCode: status,
             ...(
               typeof message === 'object'
                 ? message
                 : { message }
             ),
           },
           timestamp: new Date().toISOString(),
           path: request.url,
         });
       }
     }
    ```
    
    **Apply at controller or route level**:
    
    ```
     @Controller('orders')
     @UseFilters(CustomResponseFilter)
     export class OrdersController {
       // ...
     }
    ```
    
3.  **Catching specific exceptions**  
    If you have a custom exception class:
    
    ```
     export class PaymentFailedException extends HttpException {
       constructor(details: string) {
         super({ message: 'Payment failed', details }, HttpStatus.PAYMENT_REQUIRED);
       }
     }
    ```
    
    You can write a filter that only catches that:
    
    ```
     @Catch(PaymentFailedException)
     export class PaymentFailedFilter implements ExceptionFilter {
       catch(exception: PaymentFailedException, host: ArgumentsHost) {
         const ctx = host.switchToHttp();
         const res = ctx.getResponse();
         const status = exception.getStatus();
         const { message, details } = exception.getResponse() as any;
         res.status(status).json({
           error: {
             message,
             details,
           },
           help: 'Please verify your payment method and retry.',
         });
       }
     }
    ```
    
    Then apply only where payments occur:
    
    ```
     @Post('charge')
     @UseFilters(PaymentFailedFilter)
     charge() {
       // ...
     }
    ```
    

With exception filters in place, you ensure a consistent error contract, centralized logging or reporting, and tailored handling of different error types. Next up: **Interceptors and Logging**, where we’ll see how to transform responses, measure performance, and hook around method execution.

## 10\. Interceptors & Logging

Interceptors wrap around method execution, letting you transform responses, bind extra logic before/after method calls, or measure performance. They’re ideal for cross-cutting concerns like logging, response shaping, caching, or timing metrics.

### 10.1 Transforming Responses

An **Interceptor** implements the `NestInterceptor` interface with an `intercept(context, next)` method.

Inside `intercept`, you typically call `next.handle()` which returns an `Observable` of the handler’s result. You can then apply RxJS operators (like `map`) to modify the data before it’s sent to the client.

Common uses are wrapping all responses in a uniform envelope, filtering out certain fields, or adding metadata.

**Here’s how it works:**

1.  **Basic response wrapper**  
    Suppose you want every successful response to be `{ success: true, data: <original> }`.
    
    ```
     // response.interceptor.ts
     import {
       Injectable,
       NestInterceptor,
       ExecutionContext,
       CallHandler,
     } from '@nestjs/common';
     import { Observable } from 'rxjs';
     import { map } from 'rxjs/operators';
    
     @Injectable()
     export class ResponseInterceptor implements NestInterceptor {
       intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
         return next.handle().pipe(
           map(data => ({
             success: true,
             data,
           })),
         );
       }
     }
    ```
    
    **Apply globally** in `main.ts`:
    
    ```
     import { NestFactory } from '@nestjs/core';
     import { AppModule } from './app.module';
     import { ResponseInterceptor } from './common/response.interceptor';
    
     async function bootstrap() {
       const app = await NestFactory.create(AppModule);
       app.useGlobalInterceptors(new ResponseInterceptor());
       await app.listen(3000);
     }
     bootstrap();
    ```
    
    Now, if a controller method returns `{ id: 1, name: 'Alice' }`, the client sees:
    
    ```
     {
       "success": true,
       "data": { "id": 1, "name": "Alice" }
     }
    ```
    
2.  **Filtering sensitive fields**  
    You might want to strip out fields like `password` before sending a user object:
    
    ```
     // sanitize.interceptor.ts
     import {
       Injectable,
       NestInterceptor,
       ExecutionContext,
       CallHandler,
     } from '@nestjs/common';
     import { Observable } from 'rxjs';
     import { map } from 'rxjs/operators';
    
     @Injectable()
     export class SanitizeInterceptor implements NestInterceptor {
       intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
         return next.handle().pipe(
           map(data => {
             if (data && typeof data === 'object') {
               const { password, ...rest } = data;
               return rest;
             }
             return data;
           }),
         );
       }
     }
    ```
    
    **Apply at controller or route**:
    
    ```
     @Controller('users')
     @UseInterceptors(SanitizeInterceptor)
     export class UsersController {
       @Get(':id')
       getUser(@Param('id') id: string) {
         // returns a user object with a password field internally,
         // but interceptor strips it before sending to client
         return this.usersService.findOne(+id);
       }
     }
    ```
    
3.  **Serializing with** `class-transformer`  
    If you use classes with decorators, you can integrate with `class-transformer`:
    
    ```
     // user.entity.ts
     import { Exclude, Expose } from 'class-transformer';
    
     export class User {
       id: number;
       name: string;
    
       @Exclude()
       password: string;
    
       @Expose()
       get displayName(): string {
         return `${this.name} (#${this.id})`;
       }
     }
    ```
    
    ```
     // class-transform.interceptor.ts
     import {
       Injectable,
       NestInterceptor,
       ExecutionContext,
       CallHandler,
     } from '@nestjs/common';
     import { plainToInstance } from 'class-transformer';
     import { Observable } from 'rxjs';
     import { map } from 'rxjs/operators';
    
     @Injectable()
     export class ClassTransformInterceptor<T> implements NestInterceptor {
       constructor(private dto: new (...args: any[]) => T) {}
    
       intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
         return next.handle().pipe(
           map(data => {
             return plainToInstance(this.dto, data, {
               excludeExtraneousValues: true,
             });
           }),
         );
       }
     }
    ```
    
    **Apply with a DTO**:
    
    ```
     @Controller('users')
     export class UsersController {
       @Get(':id')
       @UseInterceptors(new ClassTransformInterceptor(User))
       getUser(@Param('id') id: string) {
         // service returns a plain object; interceptor transforms to User instance
         return this.usersService.findOne(+id);
       }
     }
    ```
    

### 10.2 Logging and Performance Metrics

Interceptors can also measure execution time or log request/response details. You capture timestamps before and after `next.handle()`, logging the difference. This helps monitor slow endpoints. Combined with a logging framework or Nest’s `Logger`, you can standardize logs.

**Here’s how it works:**

1.  **Timing interceptor**  
    Logs how long each request-handler takes:
    
    ```
     // logging.interceptor.ts
     import {
       Injectable,
       NestInterceptor,
       ExecutionContext,
       CallHandler,
       Logger,
     } from '@nestjs/common';
     import { Observable } from 'rxjs';
     import { tap } from 'rxjs/operators';
    
     @Injectable()
     export class LoggingInterceptor implements NestInterceptor {
       private readonly logger = new Logger(LoggingInterceptor.name);
    
       intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
         const req = context.switchToHttp().getRequest();
         const method = req.method;
         const url = req.url;
         const now = Date.now();
         return next.handle().pipe(
           tap(() => {
             const elapsed = Date.now() - now;
             this.logger.log(`${method} ${url} - ${elapsed}ms`);
           }),
         );
       }
     }
    ```
    
    **Apply globally**:
    
    ```
     async function bootstrap() {
       const app = await NestFactory.create(AppModule);
       app.useGlobalInterceptors(new LoggingInterceptor());
       await app.listen(3000);
     }
    ```
    
    Now each request logs something like:
    
    ```
     [LoggingInterceptor] GET /users/1 - 35ms
    ```
    
2.  **Detailed request/response logging**  
    For more detail, log request body or response size (careful with sensitive data):
    
    ```
     // detailed-logging.interceptor.ts
     import {
       Injectable,
       NestInterceptor,
       ExecutionContext,
       CallHandler,
       Logger,
     } from '@nestjs/common';
     import { Observable } from 'rxjs';
     import { tap, map } from 'rxjs/operators';
    
     @Injectable()
     export class DetailedLoggingInterceptor implements NestInterceptor {
       private readonly logger = new Logger('HTTP');
    
       intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
         const ctx = context.switchToHttp();
         const req = ctx.getRequest<Request>();
         const { method, url, body } = req;
         const now = Date.now();
    
         this.logger.log(`Incoming ${method} ${url} - body: ${JSON.stringify(body)}`);
    
         return next.handle().pipe(
           map(data => {
             const elapsed = Date.now() - now;
             this.logger.log(`Response ${method} ${url} - ${elapsed}ms - data: ${JSON.stringify(data)}`);
             return data;
           }),
         );
       }
     }
    ```
    
    **Apply conditionally**: perhaps only in development:
    
    ```
     if (process.env.NODE_ENV !== 'production') {
       app.useGlobalInterceptors(new DetailedLoggingInterceptor());
     }
    ```
    
3.  **Combining with guards/pipes**  
    Since interceptors run after guards and before the response is sent, logging time captures the full handler including service calls, but after validation/authorization. That ensures you measure only authorized requests and valid data flows.
    

Interceptors offer a flexible way to wrap your handlers with extra behavior: transforming outputs, sanitizing data, timing execution, or adding headers. In the next section, we’ll explore **Database integration** to see how you can integrate your data layer in Nest.

## 11\. Database Integration

In many real-world applications, persisting data is essential. NestJS offers first-class support and integrations for several database technologies. In this section we cover three common approaches:

-   **TypeORM with NestJS** (relational databases, Active Record/Data Mapper style)
    
-   **Mongoose (MongoDB)** (NoSQL document store)
    
-   **Prisma** (Type-safe query builder/ORM alternative)
    

For each, we’ll explain the theory – when and why to choose it – and show concise practical examples of setup and usage in a NestJS context.

### 11.1 TypeORM with NestJS

TypeORM is a popular ORM for Node.js that supports multiple relational databases (PostgreSQL, MySQL, SQLite, SQL Server, and so on), offering both Active Record and Data Mapper patterns.

In NestJS, the `@nestjs/typeorm` package wraps TypeORM to provide:

-   **Automatic connection management** via `TypeOrmModule.forRoot()`
    
-   **Module-scoped repositories/entities** via `TypeOrmModule.forFeature()`
    
-   **Dependency injection** for repositories and the `DataSource`/`Connection`
    
-   **Entity decorators** (`@Entity()`, `@Column()`, and so on) for schema definition
    
-   **Migrations** and advanced features via TypeORM CLI or programmatic usage
    

#### When to choose TypeORM

Type ORM is useful in several scenarios. Use it when your data is relational and you want a full-featured ORM with decorators and built-in migrations. It’s also great if you prefer to work with classes/entities and automatically map them to tables. And it’s a great choice if you value built-in features like eager/lazy relations, cascading, query builders, and repository patterns.

#### Here’s how to use it:

1.  **Install dependencies:**
    
    ```
     npm install --save @nestjs/typeorm typeorm reflect-metadata
     # Also install the database driver; e.g., for Postgres:
     npm install --save pg
    ```
    
2.  **Configure the root module:**
    
    In `app.module.ts`, import `TypeOrmModule.forRoot()` with connection options. These can come from environment variables (discussed later in Configuration Management).
    
    ```
     // src/app.module.ts
     import { Module } from '@nestjs/common';
     import { TypeOrmModule } from '@nestjs/typeorm';
     import { UsersModule } from './users/users.module';
    
     @Module({
       imports: [
         TypeOrmModule.forRoot({
           type: 'postgres',
           host: process.env.DB_HOST || 'localhost',
           port: +process.env.DB_PORT || 5432,
           username: process.env.DB_USER || 'postgres',
           password: process.env.DB_PASS || 'password',
           database: process.env.DB_NAME || 'mydb',
           entities: [__dirname + '/**/*.entity{.ts,.js}'],
           synchronize: false, // recommended false in production; use migrations
           // logging: true,
         }),
         UsersModule,
         // ...other modules
       ],
     })
     export class AppModule {}
    ```
    
    -   `synchronize: true` can auto-sync schema in development, but in production prefer migrations.
        
    -   Entities are auto-loaded via glob. Ensure path matches compiled output.
        
3.  **Define an entity:**
    
    Create an entity class with decorators:
    
    ```
     // src/users/user.entity.ts
     import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
    
     @Entity({ name: 'users' })
     export class User {
       @PrimaryGeneratedColumn()
       id: number;
    
       @Column({ unique: true })
       email: string;
    
       @Column()
       password: string;
    
       @Column({ nullable: true })
       name?: string;
    
       @CreateDateColumn()
       createdAt: Date;
    
       @UpdateDateColumn()
       updatedAt: Date;
     }
    ```
    
4.  **Set up the feature module:**
    
    ```
     // src/users/users.module.ts
     import { Module } from '@nestjs/common';
     import { TypeOrmModule } from '@nestjs/typeorm';
     import { UsersService } from './users.service';
     import { UsersController } from './users.controller';
     import { User } from './user.entity';
    
     @Module({
       imports: [TypeOrmModule.forFeature([User])],
       providers: [UsersService],
       controllers: [UsersController],
       exports: [UsersService], // if other modules need UsersService
     })
     export class UsersModule {}
    ```
    
5.  **Inject the repository:**
    
    In the service, inject the `Repository<User>`:
    
    ```
     // src/users/users.service.ts
     import { Injectable, NotFoundException } from '@nestjs/common';
     import { InjectRepository } from '@nestjs/typeorm';
     import { Repository } from 'typeorm';
     import { User } from './user.entity';
     import { CreateUserDto } from './dto/create-user.dto';
    
     @Injectable()
     export class UsersService {
       constructor(
         @InjectRepository(User)
         private readonly userRepository: Repository<User>,
       ) {}
    
       async create(dto: CreateUserDto): Promise<User> {
         const user = this.userRepository.create(dto); // maps DTO fields to entity
         return this.userRepository.save(user);
       }
    
       async findAll(): Promise<User[]> {
         return this.userRepository.find();
       }
    
       async findOne(id: number): Promise<User> {
         const user = await this.userRepository.findOne({ where: { id } });
         if (!user) {
           throw new NotFoundException(`User #${id} not found`);
         }
         return user;
       }
    
       async update(id: number, dto: Partial<CreateUserDto>): Promise<User> {
         const user = await this.findOne(id);
         Object.assign(user, dto);
         return this.userRepository.save(user);
       }
    
       async remove(id: number): Promise<void> {
         await this.userRepository.delete(id);
       }
     }
    ```
    
6.  **Use in controller:**
    
    ```
     // src/users/users.controller.ts
     import { Controller, Get, Post, Body, Param, ParseIntPipe, Put, Delete } from '@nestjs/common';
     import { UsersService } from './users.service';
     import { CreateUserDto } from './dto/create-user.dto';
    
     @Controller('users')
     export class UsersController {
       constructor(private readonly usersService: UsersService) {}
    
       @Post()
       create(@Body() dto: CreateUserDto) {
         return this.usersService.create(dto);
       }
    
       @Get()
       findAll() {
         return this.usersService.findAll();
       }
    
       @Get(':id')
       findOne(@Param('id', ParseIntPipe) id: number) {
         return this.usersService.findOne(id);
       }
    
       @Put(':id')
       update(
         @Param('id', ParseIntPipe) id: number,
         @Body() dto: Partial<CreateUserDto>,
       ) {
         return this.usersService.update(id, dto);
       }
    
       @Delete(':id')
       remove(@Param('id', ParseIntPipe) id: number) {
         return this.usersService.remove(id);
       }
     }
    ```
    
7.  **Migrations (optional but recommended)**
    
    -   Use TypeORM CLI or programmatic migrations.
        
    -   Configure a separate `ormconfig` or supply options in code.
        
    -   Generate and run migrations to evolve schema without data loss.
        

### 11.2 Mongoose (MongoDB)

Mongoose is a widely used ODM (Object Document Mapper) for MongoDB. In NestJS, `@nestjs/mongoose` integrates Mongoose to:

-   Define **schemas** via classes and decorators (`@Schema()`, `@Prop()`)
    
-   Register models in modules with `MongooseModule.forFeature()`
    
-   Manage the MongoDB connection with `MongooseModule.forRoot()`
    
-   Inject Mongoose **Model** instances into services
    
-   Work with documents in a type-safe way (with interfaces/types)
    
-   Leverage features like hooks, virtuals, and validation at schema level
    

#### When to choose Mongoose

Mongoose is a good choice if you need a document-oriented, schema-less/ schematized NoSQL store. It’s also great if your data shapes may vary, or you prefer MongoDB’s flexible schema. And it’s helpful if you want features like middleware hooks in schema (pre/post save), virtuals, and so on.

#### Here’s how to use it:

1.  **Install dependencies:**
    
    ```
     npm install --save @nestjs/mongoose mongoose
    ```
    
2.  **Configure root module:**
    
    ```
     // src/app.module.ts
     import { Module } from '@nestjs/common';
     import { MongooseModule } from '@nestjs/mongoose';
     import { CatsModule } from './cats/cats.module';
    
     @Module({
       imports: [
         MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost/nest'),
         CatsModule,
         // ...other modules
       ],
     })
     export class AppModule {}
    ```
    
3.  **Define a schema and document:**
    
    Use decorators and interfaces:
    
    ```
     // src/cats/schemas/cat.schema.ts
     import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
     import { Document } from 'mongoose';
    
     @Schema({ timestamps: true })
     export class Cat extends Document {
       @Prop({ required: true })
       name: string;
    
       @Prop()
       age: number;
    
       @Prop()
       breed: string;
     }
    
     export const CatSchema = SchemaFactory.createForClass(Cat);
    ```
    
    -   Extending `Document` gives the Mongoose document methods and properties.
        
    -   `timestamps: true` auto-adds `createdAt` and `updatedAt`.
        
    -   You can add hooks:
        
        ```
          CatSchema.pre<Cat>('save', function (next) {
            // e.g., modify data or log before saving
            next();
          });
        ```
        
4.  **Set up feature module:**
    
    ```
     // src/cats/cats.module.ts
     import { Module } from '@nestjs/common';
     import { MongooseModule } from '@nestjs/mongoose';
     import { CatsService } from './cats.service';
     import { CatsController } from './cats.controller';
     import { Cat, CatSchema } from './schemas/cat.schema';
    
     @Module({
       imports: [
         MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }]),
       ],
       controllers: [CatsController],
       providers: [CatsService],
     })
     export class CatsModule {}
    ```
    
5.  **Inject the model:**
    
    In the service, inject `Model<Cat>`:
    
    ```
     // src/cats/cats.service.ts
     import { Injectable, NotFoundException } from '@nestjs/common';
     import { InjectModel } from '@nestjs/mongoose';
     import { Model } from 'mongoose';
     import { Cat } from './schemas/cat.schema';
     import { CreateCatDto } from './dto/create-cat.dto';
     import { UpdateCatDto } from './dto/update-cat.dto';
    
     @Injectable()
     export class CatsService {
       constructor(
         @InjectModel(Cat.name) private readonly catModel: Model<Cat>,
       ) {}
    
       async create(dto: CreateCatDto): Promise<Cat> {
         const created = new this.catModel(dto);
         return created.save();
       }
    
       async findAll(): Promise<Cat[]> {
         return this.catModel.find().exec();
       }
    
       async findOne(id: string): Promise<Cat> {
         const cat = await this.catModel.findById(id).exec();
         if (!cat) {
           throw new NotFoundException(`Cat ${id} not found`);
         }
         return cat;
       }
    
       async update(id: string, dto: UpdateCatDto): Promise<Cat> {
         const updated = await this.catModel
           .findByIdAndUpdate(id, dto, { new: true })
           .exec();
         if (!updated) {
           throw new NotFoundException(`Cat ${id} not found`);
         }
         return updated;
       }
    
       async remove(id: string): Promise<void> {
         const res = await this.catModel.findByIdAndDelete(id).exec();
         if (!res) {
           throw new NotFoundException(`Cat ${id} not found`);
         }
       }
     }
    ```
    
6.  **Use in controller:**
    
    ```
     // src/cats/cats.controller.ts
     import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
     import { CatsService } from './cats.service';
     import { CreateCatDto } from './dto/create-cat.dto';
     import { UpdateCatDto } from './dto/update-cat.dto';
    
     @Controller('cats')
     export class CatsController {
       constructor(private readonly catsService: CatsService) {}
    
       @Post()
       create(@Body() dto: CreateCatDto) {
         return this.catsService.create(dto);
       }
    
       @Get()
       findAll() {
         return this.catsService.findAll();
       }
    
       @Get(':id')
       findOne(@Param('id') id: string) {
         return this.catsService.findOne(id);
       }
    
       @Put(':id')
       update(
         @Param('id') id: string,
         @Body() dto: UpdateCatDto,
       ) {
         return this.catsService.update(id, dto);
       }
    
       @Delete(':id')
       remove(@Param('id') id: string) {
         return this.catsService.remove(id);
       }
     }
    ```
    
7.  **Advanced Mongoose features**
    
    -   **Virtuals**: define computed properties not stored in DB.
        
    -   **Indexes**: via schema options or `@Prop({ index: true })`.
        
    -   **Populate**: reference other collections with `@Prop({ type: Types.ObjectId, ref: 'OtherModel' })`.
        
    -   **Transactions**: use MongoDB sessions for multi-document atomic operations.
        

### 11.3 Prisma

Prisma is a modern ORM/Query Builder that generates a type-safe client based on a schema definition. It supports relational databases (PostgreSQL, MySQL, SQLite, SQL Server, and more).

Here are some of its key features:

-   **Type-safe queries**: Autogenerated TypeScript definitions prevent many runtime errors.
    
-   **Prisma schema**: A declarative `.prisma` file to define models, relations, and enums.
    
-   **Migrations**: `prisma migrate` for evolving schema.
    
-   **Performance**: Lean query builder without heavy runtime overhead.
    
-   **Flexibility**: Supports raw queries when needed.
    

#### When to choose Prisma

Prisma is a great choice if you prefer a schema-first approach with a clear DSL and auto-generated type-safe client. It’s also great if you want modern features like efficient migrations, rich type inference, and a straightforward developer experience. And it’s a solid choice if you don’t need Active Record pattern. Instead, you use the Prisma client in services.

#### Here’s how it works:

1.  **Install dependencies and initialize:**
    
    ```
     npm install @prisma/client
     npm install -D prisma
     npx prisma init
    ```
    
    This creates a `prisma/schema.prisma` file and a `.env` with `DATABASE_URL`.
    
2.  **Define the schema:**
    
    In `prisma/schema.prisma`:
    
    ```
     datasource db {
       provider = "postgresql"
       url      = env("DATABASE_URL")
     }
    
     generator client {
       provider = "prisma-client-js"
     }
    
     model User {
       id        Int      @id @default(autoincrement())
       email     String   @unique
       name      String?
       posts     Post[]
       createdAt DateTime @default(now())
       updatedAt DateTime @updatedAt
     }
    
     model Post {
       id        Int      @id @default(autoincrement())
       title     String
       content   String?
       author    User     @relation(fields: [authorId], references: [id])
       authorId  Int
       published Boolean  @default(false)
       createdAt DateTime @default(now())
       updatedAt DateTime @updatedAt
     }
    ```
    
3.  **Run migrations and generate client:**
    
    ```
     npx prisma migrate dev --name init
     npx prisma generate
    ```
    
    This updates the database schema and regenerates the TypeScript client.
    
4.  **Create a PrismaService in NestJS:**
    
    A common pattern is to wrap the `PrismaClient` in an injectable service, handling lifecycle hooks.
    
    ```
     // src/prisma/prisma.service.ts
     import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
     import { PrismaClient } from '@prisma/client';
    
     @Injectable()
     export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
       async onModuleInit() {
         await this.$connect();
       }
    
       async onModuleDestroy() {
         await this.$disconnect();
       }
     }
    ```
    
5.  **Register PrismaService in a module:**
    
    ```
     // src/prisma/prisma.module.ts
     import { Module } from '@nestjs/common';
     import { PrismaService } from './prisma.service';
    
     @Module({
       providers: [PrismaService],
       exports: [PrismaService],
     })
     export class PrismaModule {}
    ```
    
    Then import `PrismaModule` in any feature module needing DB access.
    
6.  **Use in a feature service:**
    
    ```
     // src/users/users.service.ts
     import { Injectable } from '@nestjs/common';
     import { PrismaService } from '../prisma/prisma.service';
     import { CreateUserDto } from './dto/create-user.dto';
    
     @Injectable()
     export class UsersService {
       constructor(private readonly prisma: PrismaService) {}
    
       async create(dto: CreateUserDto) {
         return this.prisma.user.create({ data: dto });
       }
    
       async findAll() {
         return this.prisma.user.findMany();
       }
    
       async findOne(id: number) {
         return this.prisma.user.findUnique({ where: { id } });
       }
    
       async update(id: number, dto: Partial<CreateUserDto>) {
         return this.prisma.user.update({
           where: { id },
           data: dto,
         });
       }
    
       async remove(id: number) {
         await this.prisma.user.delete({ where: { id } });
         return { deleted: true };
       }
     }
    ```
    
    Note: DTO fields must align with Prisma schema types. Prisma client methods return typed results.
    
7.  **Inject in controller:**
    
    ```
     // src/users/users.controller.ts
     import { Controller, Get, Post, Body, Param, ParseIntPipe, Put, Delete } from '@nestjs/common';
     import { UsersService } from './users.service';
     import { CreateUserDto } from './dto/create-user.dto';
    
     @Controller('users')
     export class UsersController {
       constructor(private readonly usersService: UsersService) {}
    
       @Post()
       create(@Body() dto: CreateUserDto) {
         return this.usersService.create(dto);
       }
    
       @Get()
       findAll() {
         return this.usersService.findAll();
       }
    
       @Get(':id')
       findOne(@Param('id', ParseIntPipe) id: number) {
         return this.usersService.findOne(id);
       }
    
       @Put(':id')
       update(
         @Param('id', ParseIntPipe) id: number,
         @Body() dto: Partial<CreateUserDto>,
       ) {
         return this.usersService.update(id, dto);
       }
    
       @Delete(':id')
       remove(@Param('id', ParseIntPipe) id: number) {
         return this.usersService.remove(id);
       }
     }
    ```
    
8.  **Advanced Prisma usage**
    
    -   **Relations and nested writes**: for example, create a post with nested author connect/create.
        
    -   **Transactions**: `this.prisma.$transaction([...])` for atomic operations.
        
    -   **Raw queries**: `this.prisma.$queryRaw` when needed.
        
    -   **Middleware**: Prisma supports middlewares on the client side.
        
    -   **Performance tuning**: select only needed fields, use pagination patterns.
        

With these three approaches, you can choose the database integration strategy that best fits your application’s needs:

-   **TypeORM** for a full-fledged ORM with decorators and migrations support in relational databases.
    
-   **Mongoose** for flexible document schemas in MongoDB.
    
-   **Prisma** for a modern, type-safe query builder/ORM alternative with excellent developer ergonomics.
    

In the next section, we’ll cover **Configuration Management** – how to handle environment variables and config modules in NestJS.

## 12\. Configuration Management

Managing configuration cleanly is crucial for applications to behave correctly across environments (development, staging, production). NestJS provides the `@nestjs/config` module to centralize configuration loading, validation, and injection.

### 12.1 @nestjs/config Module

The `@nestjs/config` module is a powerful utility for managing application configuration settings. Here are some of its key features:

-   **Centralized config**: Instead of sprinkling `process.env` throughout your code, it uses a dedicated service that loads and validates configuration once at startup.
    
-   **Environment agnostic**: It loads variables from `.env` files, environment variables, or other sources, with support for different files per environment.
    
-   **Validation**: It integrates a schema (for example, via Joi) to ensure required variables are present and correctly typed, failing fast if misconfigured.
    
-   **Config Namespacing**: It organizes related settings into logical groups (for example, database, auth, third-party APIs) via configuration factories.
    
-   **Injection**: It injects a `ConfigService` to read config values in services or modules, with type safety when using custom typed wrappers.
    

#### Here’s how it works:

1.  **Install the package**
    
    ```
     npm install @nestjs/config
     npm install joi    # if you plan to validate via Joi schemas
    ```
    
2.  **Import and initialize ConfigModule**
    
    In your root module (`AppModule`), import `ConfigModule.forRoot()`. Typical options:
    
    ```
     // src/app.module.ts
     import { Module } from '@nestjs/common';
     import { ConfigModule } from '@nestjs/config';
     import configuration from './config/configuration';
     import { validationSchema } from './config/validation';
    
     @Module({
       imports: [
         ConfigModule.forRoot({
           // Load .env automatically; specify envFilePath if custom:
           isGlobal: true,           // makes ConfigService available app-wide
           envFilePath: ['.env.development.local', '.env.development', '.env'], 
           load: [configuration],    // optional: load custom config factory(s)
           validationSchema,         // optional: Joi schema to validate env vars
           validationOptions: {
             allowUnknown: true,
             abortEarly: true,
           },
         }),
         // ...other modules
       ],
     })
     export class AppModule {}
    ```
    
    -   `isGlobal: true` avoids importing `ConfigModule` in every feature module.
        
    -   `envFilePath`: an array lets you try multiple files (for example, local overrides before default).
        
    -   `load`: array of functions returning partial config objects – see next step.
        
    -   `validationSchema`: a Joi schema ensuring required variables exist and are correct type/format.
        
3.  **Define a configuration factory**
    
    Organize related settings into a typed object:
    
    ```
     // src/config/configuration.ts
     export default () => ({
       port: parseInt(process.env.PORT, 10) || 3000,
       database: {
         host: process.env.DB_HOST,
         port: parseInt(process.env.DB_PORT, 10) || 5432,
         user: process.env.DB_USER,
         pass: process.env.DB_PASS,
         name: process.env.DB_NAME,
       },
       jwt: {
         secret: process.env.JWT_SECRET,
         expiresIn: process.env.JWT_EXPIRES_IN || '1h',
       },
       // add other namespaces as needed
     });
    ```
    
4.  **Validate environment variables**
    
    Using Joi for validation:
    
    ```
     // src/config/validation.ts
     import * as Joi from 'joi';
    
     export const validationSchema = Joi.object({
       NODE_ENV: Joi.string()
         .valid('development', 'production', 'test', 'staging')
         .default('development'),
       PORT: Joi.number().default(3000),
       DB_HOST: Joi.string().required(),
       DB_PORT: Joi.number().default(5432),
       DB_USER: Joi.string().required(),
       DB_PASS: Joi.string().required(),
       DB_NAME: Joi.string().required(),
       JWT_SECRET: Joi.string().min(32).required(),
       JWT_EXPIRES_IN: Joi.string().default('1h'),
       // add other variables...
     });
    ```
    
    If validation fails at startup, the application will error out with details, preventing misconfigured deployments.
    
5.  **Inject ConfigService**
    
    Anywhere you need config, inject `ConfigService`:
    
    ```
     // src/some/some.service.ts
     import { Injectable } from '@nestjs/common';
     import { ConfigService } from '@nestjs/config';
    
     @Injectable()
     export class SomeService {
       constructor(private readonly configService: ConfigService) {}
    
       getDbConfig() {
         const host = this.configService.get<string>('database.host');
         const port = this.configService.get<number>('database.port');
         // Use these values to configure a database client, etc.
         return { host, port };
       }
     }
    ```
    
    -   Use dot notation for nested config: for example, `'jwt.secret'`.
        
    -   You can also read raw env vars via `configService.get<string>('DB_HOST')` if needed, but preferring structured config is clearer.
        
6.  **Typed wrapper for ConfigService (optional)**
    
    For stronger typing, create an interface matching your configuration and a wrapper:
    
    ```
     // src/config/config.interface.ts
     export interface AppConfig {
       port: number;
       database: {
         host: string;
         port: number;
         user: string;
         pass: string;
         name: string;
       };
       jwt: {
         secret: string;
         expiresIn: string;
       };
     }
    ```
    
    ```
     // src/config/typed-config.service.ts
     import { Injectable } from '@nestjs/common';
     import { ConfigService } from '@nestjs/config';
     import { AppConfig } from './config.interface';
    
     @Injectable()
     export class TypedConfigService {
       constructor(private readonly configService: ConfigService) {}
    
       get appConfig(): AppConfig {
         return {
           port: this.configService.get<number>('port'),
           database: {
             host: this.configService.get<string>('database.host'),
             port: this.configService.get<number>('database.port'),
             user: this.configService.get<string>('database.user'),
             pass: this.configService.get<string>('database.pass'),
             name: this.configService.get<string>('database.name'),
           },
           jwt: {
             secret: this.configService.get<string>('jwt.secret'),
             expiresIn: this.configService.get<string>('jwt.expiresIn'),
           },
         };
       }
     }
    ```
    
    Register `TypedConfigService` in a module if you prefer injecting it instead of raw `ConfigService`.
    
7.  **Dynamic module registration using config**
    
    Many Nest modules accept dynamic options. For example, TypeORM:
    
    ```
     // src/database/database.module.ts
     import { Module } from '@nestjs/common';
     import { TypeOrmModule } from '@nestjs/typeorm';
     import { ConfigService } from '@nestjs/config';
    
     @Module({
       imports: [
         TypeOrmModule.forRootAsync({
           inject: [ConfigService],
           useFactory: (config: ConfigService) => ({
             type: 'postgres',
             host: config.get<string>('database.host'),
             port: config.get<number>('database.port'),
             username: config.get<string>('database.user'),
             password: config.get<string>('database.pass'),
             database: config.get<string>('database.name'),
             entities: [__dirname + '/../**/*.entity{.ts,.js}'],
             synchronize: config.get('NODE_ENV') !== 'production',
           }),
         }),
       ],
     })
     export class DatabaseModule {}
    ```
    
    Using `forRootAsync` with `useFactory` ensures config is loaded before the module initializes.
    

### 12.2 Environment Variables

Environment variables serve as the bridge between code and its runtime environment, letting you decouple configuration (like database URLs, API keys, or feature flags) from your source.

By relying on environment variables, you ensure that the same application bundle can run safely across development, staging, and production – each providing its own sensitive or environment-specific settings without changing code. This is how it works:

-   **12-Factor app principle**: Stores config in the environment. Avoids hard-coding secrets or environment-specific settings in code.
    
-   **Separation of concerns**: Code remains the same across environments. Behavior is driven by env vars or config files.
    
-   **Security**: Keeps secrets (API keys, DB passwords) out of source control. Uses environment variables or secure vaults.
    
-   **Overrides and precedence**: You may have multiple `.env` files (for example, `.env`, `.env.local`, `.env.production`) or CI/CD provided vars. It controls the order of loading.
    
-   **Defaults and fallbacks**: Provides sensible defaults in code or config factories so the app can run in development without requiring every variable.
    

#### Here’s how to use it:

1.  **.env files**
    
    -   Create a `.env` file at project root with key-value pairs:
        
        ```
          PORT=3000
          DB_HOST=localhost
          DB_PORT=5432
          DB_USER=postgres
          DB_PASS=secret
          DB_NAME=mydb
          JWT_SECRET=supersecretjwtkey
          JWT_EXPIRES_IN=2h
        ```
        
    -   Optionally create `.env.development`, `.env.test`, `.env.production`, and load them based on `NODE_ENV`.
        
    -   Ensure `.env` files are in `.gitignore` to avoid committing secrets.
        
2.  **Loading order**
    
    -   With `@nestjs/config`, specify `envFilePath` as an array, for example:
        
        ```
          ConfigModule.forRoot({
            envFilePath: [
              `.env.${process.env.NODE_ENV}.local`,
              `.env.${process.env.NODE_ENV}`,
              `.env`,
            ],
            isGlobal: true,
          });
        ```
        
    -   This tries `.env.development.local`, then `.env.development`, then `.env`. CI/CD can set actual environment variables that override values in files.
        
3.  **Accessing raw environment variables**
    
    -   While structured config is preferred, sometimes you need direct access:
        
        ```
          const raw = process.env.SOME_VAR;
        ```
        
    -   Avoid scattering `process.env` in multiple places. Instead, prefer reading once in configuration factory and injecting via `ConfigService`.
        
4.  **Default values**
    
    -   In configuration factory or when reading via `ConfigService`, provide defaults:
        
        ```
          const port = configService.get<number>('PORT', 3000);
        ```
        
        or in factory:
        
        ```
          port: parseInt(process.env.PORT, 10) || 3000
        ```
        
5.  **Type coercion**
    
    -   Environment variables are strings by default. Convert to numbers or booleans as needed:
        
        ```
          const isProd = configService.get<string>('NODE_ENV') === 'production';
          const enableFeature = configService.get<string>('FEATURE_FLAG') === 'true';
          const timeout = parseInt(configService.get<string>('TIMEOUT_MS'), 10) || 5000;
        ```
        
6.  **Secret management**
    
    -   For sensitive data in production, consider using secret managers (AWS Secrets Manager, Vault) instead of plain `.env`. In that case, load secrets at startup (for example, via a custom provider or factory) and merge into the configuration.
        
    -   Example: in `useFactory`, asynchronously fetch secrets and return a config object including them.
        
7.  **Runtime configuration changes**
    
    -   Generally configs are static at startup. If you need to reload config without restarting, implement a custom mechanism (for example, read from a database or remote config service periodically). Inject a service that fetches and caches values, but note this departs from 12-factor principles.
8.  **Validation in production**
    
    -   Always validate required env vars at startup so misconfigurations fail early. Use `validationSchema` with Joi or another validator.
        
    -   Example error: if `JWT_SECRET` is missing or too short, the app should refuse to start, logging a clear error.
        

With configuration managed via `@nestjs/config` and environment variables, your NestJS app can adapt seamlessly across environments, keep secrets secure, and avoid environment-specific code changes. In the next section, we’ll cover **Authentication** strategies (JWT, OAuth2/social login).

## 13\. Authentication

Handling authentication securely is a common requirement. In NestJS, you typically use **Passport** strategies alongside the **@nestjs/jwt** module for JWT-based flows, or OAuth2 strategies for social login.

Here, we’ll cover two common approaches:

-   **JWT Strategy**: token-based authentication for APIs.
    
-   **OAuth2 / Social Login**: integrating providers like Google or GitHub.
    

### 13.1 JWT Strategy

JSON Web Tokens (JWTs) are a compact, URL-safe means of representing claims between two parties. In an authentication context, the server issues a signed token containing user identity and possibly other claims, while the client stores and sends this token on subsequent requests (typically in the `Authorization: Bearer <token>` header).

Because the token is signed (and optionally encrypted), the server can verify its integrity and authenticity without needing to maintain session state in memory or a database. This stateless nature simplifies scaling and decouples services.

Tokens include an expiration (`exp`) so they automatically become invalid after a certain time. For longer-lived sessions, you can layer a refresh-token pattern on top.

In NestJS, we leverage `@nestjs/jwt` to sign and verify tokens and `@nestjs/passport` with `passport-jwt` to integrate a guard that checks incoming tokens. Below is how it works.

-   **JWT (JSON Web Token)**: a signed token containing claims (for example, user ID) that clients send in the `Authorization` header.
    
-   **Stateless**: the server verifies the token signature without storing session state.
    
-   **Expiration**: embed expiry (`exp`) so tokens auto-expire; possibly use refresh tokens for long-lived sessions.
    
-   In NestJS, you use `@nestjs/jwt` to sign/verify tokens and `@nestjs/passport` with `passport-jwt` to implement the guard.
    

#### Here’s how to use it:

1.  **Install dependencies**
    
    ```
     npm install @nestjs/jwt passport-jwt @nestjs/passport passport
    ```
    
2.  **Configuration**
    
    Use `ConfigService` (from previous section) to load secrets and TTL:
    
    ```
     // src/auth/auth.config.ts
     export default () => ({
       jwt: {
         secret: process.env.JWT_SECRET || 'default-secret',
         expiresIn: process.env.JWT_EXPIRES_IN || '1h',
       },
     });
    ```
    
    Ensure `ConfigModule.forRoot({ load: [authConfig], isGlobal: true, validationSchema: ... })` is set in `AppModule`.
    
3.  **AuthModule setup**
    
    ```
     // src/auth/auth.module.ts
     import { Module } from '@nestjs/common';
     import { JwtModule } from '@nestjs/jwt';
     import { PassportModule } from '@nestjs/passport';
     import { ConfigService, ConfigModule } from '@nestjs/config';
     import { JwtStrategy } from './jwt.strategy';
     import { AuthService } from './auth.service';
     import { UsersModule } from '../users/users.module'; // assumes a UsersService
    
     @Module({
       imports: [
         UsersModule,
         PassportModule.register({ defaultStrategy: 'jwt' }),
         JwtModule.registerAsync({
           imports: [ConfigModule],
           inject: [ConfigService],
           useFactory: (config: ConfigService) => ({
             secret: config.get<string>('jwt.secret'),
             signOptions: { expiresIn: config.get<string>('jwt.expiresIn') },
           }),
         }),
       ],
       providers: [AuthService, JwtStrategy],
       exports: [AuthService],
     })
     export class AuthModule {}
    ```
    
4.  **AuthService**
    
    Responsible for validating credentials and issuing tokens:
    
    ```
     // src/auth/auth.service.ts
     import { Injectable, UnauthorizedException } from '@nestjs/common';
     import { JwtService } from '@nestjs/jwt';
     import { UsersService } from '../users/users.service';
     import * as bcrypt from 'bcrypt';
    
     @Injectable()
     export class AuthService {
       constructor(
         private readonly usersService: UsersService,
         private readonly jwtService: JwtService,
       ) {}
    
       // Validate user credentials (email/password)
       async validateUser(email: string, pass: string) {
         const user = await this.usersService.findByEmail(email);
         if (user && (await bcrypt.compare(pass, user.password))) {
           // exclude password before returning
           const { password, ...result } = user;
           return result;
         }
         return null;
       }
    
       // Called after validateUser succeeds
       async login(user: any) {
         const payload = { sub: user.id, email: user.email };
         return {
           access_token: this.jwtService.sign(payload),
         };
       }
     }
    ```
    
5.  **JwtStrategy**
    
    ```
     // src/auth/jwt.strategy.ts
     import { Injectable } from '@nestjs/common';
     import { PassportStrategy } from '@nestjs/passport';
     import { ExtractJwt, Strategy } from 'passport-jwt';
     import { ConfigService } from '@nestjs/config';
    
     @Injectable()
     export class JwtStrategy extends PassportStrategy(Strategy) {
       constructor(private readonly configService: ConfigService) {
         super({
           jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
           ignoreExpiration: false,
           secretOrKey: configService.get<string>('jwt.secret'),
         });
       }
    
       async validate(payload: any) {
         // payload.sub is user ID
         return { userId: payload.sub, email: payload.email };
         // returned value is assigned to req.user
       }
     }
    ```
    
6.  **Auth Controller**
    
    Expose login endpoint:
    
    ```
     // src/auth/auth.controller.ts
     import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common';
     import { AuthService } from './auth.service';
     import { LocalAuthGuard } from './local-auth.guard'; // optional if using local strategy
    
     @Controller('auth')
     export class AuthController {
       constructor(private readonly authService: AuthService) {}
    
       // Example: using a local strategy for email/password
       @UseGuards(LocalAuthGuard)
       @Post('login')
       async login(@Request() req) {
         // LocalAuthGuard attaches user to req.user
         return this.authService.login(req.user);
       }
    
       // Alternatively, implement login logic directly:
       @Post('login-basic')
       async loginBasic(@Body() body: { email: string; password: string }) {
         const user = await this.authService.validateUser(body.email, body.password);
         if (!user) {
           throw new UnauthorizedException('Invalid credentials');
         }
         return this.authService.login(user);
       }
     }
    ```
    
    -   **LocalAuthGuard** would use a LocalStrategy to validate credentials via Passport.
7.  **Protecting routes**
    
    Use the **JwtAuthGuard**:
    
    ```
     // src/auth/jwt-auth.guard.ts
     import { Injectable } from '@nestjs/common';
     import { AuthGuard } from '@nestjs/passport';
    
     @Injectable()
     export class JwtAuthGuard extends AuthGuard('jwt') {}
    ```
    
    Apply to controllers or routes:
    
    ```
     // src/profile/profile.controller.ts
     import { Controller, Get, UseGuards, Request } from '@nestjs/common';
     import { JwtAuthGuard } from '../auth/jwt-auth.guard';
    
     @Controller('profile')
     export class ProfileController {
       @UseGuards(JwtAuthGuard)
       @Get()
       getProfile(@Request() req) {
         return req.user; // { userId, email }
       }
     }
    ```
    
8.  **Refresh Tokens (optional)**
    
    -   Issue a refresh token (longer expiry) and store it (for example, in DB or as HTTP-only cookie).
        
    -   Create a separate endpoint to issue new access token when the access token expires.
        
    -   Verify refresh token validity (for example, compare stored token or a hashed version).
        
    -   Implementation details vary – consider security best practices (rotate tokens, revoke on logout).
        

### 13.2 OAuth2 / Social Login

Social login via OAuth2 lets users authenticate with third-party providers (Google, GitHub, Facebook, and so on) without creating a separate password for your service.

Under the Authorization Code Flow, the user is redirected to the provider’s consent screen. After granting permission, the provider redirects back with a temporary code. The backend exchanges this code for access (and optionally refresh) tokens, fetches the user’s profile, and then you can link or create a local user record. Finally, you typically issue your own JWT (or session) so the client can call your secured APIs.

Keeping OAuth client IDs/secrets in environment variables (via `ConfigService`) ensures security and flexibility. Here’s how it works:

-   **OAuth2 Authorization Code Flow**: Redirect the user to the provider’s consent screen. The provider redirects back with a code. The back-end exchanges code for tokens and retrieves user info.
    
-   In server-side (NestJS) you use Passport strategies (for example, `passport-google-oauth20`, `passport-github2`).
    
-   After getting user profile from provider, you look up or create a matching local user record, then issue your own JWT or session.
    
-   Keep secrets (client ID/secret) in environment variables and load via `ConfigService`.
    

#### Here’s how to use it:

1.  **Install dependencies**
    
    ```
     npm install @nestjs/passport passport passport-google-oauth20
     # or passport-facebook, passport-github2, etc.
    ```
    
2.  **Configuration**
    
    Add OAuth credentials to env and `ConfigModule`:
    
    ```
     GOOGLE_CLIENT_ID=your-google-client-id
     GOOGLE_CLIENT_SECRET=your-google-client-secret
     GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback
    ```
    
3.  **OAuth Strategy**
    
    Example: Google
    
    ```
     // src/auth/google.strategy.ts
     import { Injectable } from '@nestjs/common';
     import { PassportStrategy } from '@nestjs/passport';
     import { Strategy, VerifyCallback } from 'passport-google-oauth20';
     import { ConfigService } from '@nestjs/config';
     import { AuthService } from './auth.service';
    
     @Injectable()
     export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
       constructor(configService: ConfigService, private readonly authService: AuthService) {
         super({
           clientID: configService.get<string>('GOOGLE_CLIENT_ID'),
           clientSecret: configService.get<string>('GOOGLE_CLIENT_SECRET'),
           callbackURL: configService.get<string>('GOOGLE_CALLBACK_URL'),
           scope: ['email', 'profile'],
         });
       }
    
       async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
         const { id, emails, displayName } = profile;
         const email = emails && emails[0]?.value;
         // Delegate to AuthService to find or create local user
         const user = await this.authService.validateOAuthLogin('google', id, email, displayName);
         done(null, user);
       }
     }
    ```
    
    In `AuthService`:
    
    ```
     // src/auth/auth.service.ts (add method)
     async validateOAuthLogin(provider: string, providerId: string, email: string, name?: string) {
       // Find existing user by provider+providerId or email
       let user = await this.usersService.findByProvider(provider, providerId);
       if (!user) {
         // Optionally check by email: if exists, link accounts; otherwise create new
         user = await this.usersService.createOAuthUser({ provider, providerId, email, name });
       }
       // Issue JWT or return user object; here we return minimal payload for login
       return user;
     }
    ```
    
4.  **AuthController endpoints**
    
    ```
     // src/auth/auth.controller.ts
     import { Controller, Get, Req, UseGuards } from '@nestjs/common';
     import { AuthGuard } from '@nestjs/passport';
     import { AuthService } from './auth.service';
    
     @Controller('auth')
     export class AuthController {
       constructor(private readonly authService: AuthService) {}
    
       @Get('google')
       @UseGuards(AuthGuard('google'))
       async googleAuth(@Req() req) {
         // Initiates Google OAuth2 flow
       }
    
       @Get('google/callback')
       @UseGuards(AuthGuard('google'))
       async googleAuthRedirect(@Req() req) {
         // Google redirects here after consent; req.user set by GoogleStrategy.validate
         const user = req.user;
         // Issue JWT or set a cookie, then redirect or return token
         const jwt = await this.authService.login(user);
         // E.g., redirect with token as query, or set cookie:
         // res.redirect(`http://frontend-app.com?token=${jwt.access_token}`);
         return { access_token: jwt.access_token };
       }
     }
    ```
    
    -   The first endpoint (`/auth/google`) triggers redirect to Google.
        
    -   The callback endpoint handles the response, then issues your JWT.
        
5.  **Session vs. Stateless**
    
    -   Many examples use sessions and `@nestjs/passport` session support, but for APIs you often skip sessions: Passport still invokes `validate`, returns user, and you issue JWT immediately.
        
    -   Ensure you disable sessions in `PassportModule` registration: `PassportModule.register({ session: false })`.
        
6.  **Multiple Providers**
    
    -   Repeat strategy setup for each provider (for example, GitHubStrategy).
        
    -   In `validateOAuthLogin`, handle `provider` parameter to distinguish logic.
        
    -   You can store in your user entity fields like `googleId`, `githubId`, and so on, or a separate table for OAuth accounts.
        
7.  **Protecting routes post-login**
    
    -   Clients use the issued JWT in `Authorization: Bearer <token>` to access protected endpoints via `JwtAuthGuard`.
        
    -   If you prefer sessions/cookies, configure Nest to use sessions and Passport's session features, but for SPAs or mobile clients JWT is common.
        
8.  **Frontend considerations**
    
    -   Redirect URIs must match those configured in the OAuth provider console.
        
    -   After receiving JWT, store it securely (for example, HTTP-only cookie or secure storage on client).
        
    -   Handle token expiry: possibly combine OAuth refresh tokens or your own refresh token flow.
        

With JWT and OAuth2 strategies set up, your NestJS backend can support secured endpoints, user registration/login flows, and social logins.

## Conclusion & Further Resources

### Summary

We’ve walked through key aspects of building a NestJS application: its architectural patterns, core building blocks (modules, controllers, providers), dependency injection, routing and middleware, request lifecycle with pipes, guards, exception filters, interceptors, database integration options (TypeORM, Mongoose, Prisma), configuration management, authentication strategies (JWT, OAuth2), and strategies for migrating existing apps.

NestJS provides a structured, TypeScript-first framework that accelerates development of scalable, maintainable backends. By leveraging its module system and built-in integrations, you get consistency, testability, and clear separation of concerns out of the box.

Whether you choose a relational database via TypeORM, a document store with Mongoose, or Prisma’s type-safe client, you can plug these into Nest’s DI container and configuration module. Authentication flows – both JWT-based and social login – fit naturally into Nest’s Passport integration.

Overall, NestJS is well-suited for APIs, microservices, real-time apps, and enterprise backends where maintainability and developer experience matter.

### Official Docs and Community Links

-   **NestJS Official Documentation**: Comprehensive guide and API reference for all core features.
    
    -   https://docs.nestjs.com
-   **GitHub Repository**: Source code, issue tracker, and community contributions.
    
    -   [https://github.com/nestjs/nest][46]

[1]: #heading-1-what-is-nestjs
[2]: #heading-11-history-and-philosophy
[3]: #heading-2-why-choose-nestjs
[4]: #heading-21-benefits-and-use-cases
[5]: #heading-22-comparison-with-other-frameworks
[6]: #heading-3-getting-started
[7]: #heading-31-installing-the-cli
[8]: #heading-32-creating-your-first-project
[9]: #heading-33-project-structure-overview
[10]: #heading-4-core-nestjs-building-blocks
[11]: #heading-41-modules
[12]: #heading-42-controllers
[13]: #heading-43-providers-services
[14]: #heading-5-dependency-injection
[15]: #heading-51-how-di-works-in-nestjs
[16]: #heading-52-custom-providers-and-factory-providers
[17]: #heading-6-routing-amp-middleware
[18]: #heading-61-defining-routes
[19]: #heading-62-applying-middleware
[20]: #heading-7-request-lifecycle-amp-pipes
[21]: #heading-71-what-are-pipes
[22]: #heading-72-built-in-vs-custom-pipes
[23]: #heading-8-guards-amp-authorization
[24]: #heading-81-implementing-guards
[25]: #heading-82-role-based-access-control
[26]: #heading-9-exception-filters
[27]: #heading-91-handling-errors-gracefully
[28]: #heading-92-creating-custom-filters
[29]: #heading-10-interceptors-amp-logging
[30]: #heading-101-transforming-responses
[31]: #heading-102-logging-and-performance-metrics
[32]: #heading-11-database-integration
[33]: #heading-111-typeorm-with-nestjs
[34]: #heading-112-mongoose-mongodb
[35]: #heading-113-prisma
[36]: #heading-12-configuration-management
[37]: #heading-121-nestjsconfig-module
[38]: #heading-122-environment-variables
[39]: #heading-13-authentication
[40]: #heading-131-jwt-strategy
[41]: #heading-132-oauth2-social-login
[42]: #heading-conclusion-amp-further-resources
[43]: #heading-summary
[44]: #heading-official-docs-and-community-links
[45]: http://localhost:3000
[46]: https://github.com/nestjs/nest