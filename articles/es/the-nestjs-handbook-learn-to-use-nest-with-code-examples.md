```markdown
---
title: El Manual de NestJS – Aprende a Usar Nest con Ejemplos de Código
date: 2025-06-20T16:41:27.526Z
author: German Cocca
authorURL: https://www.freecodecamp.org/news/author/GerCocca/
originalURL: https://www.freecodecamp.org/news/the-nestjs-handbook-learn-to-use-nest-with-code-examples/
posteditor: ""
proofreader: ""
---

NestJS es un framework progresivo de Node.js para construir aplicaciones del lado del servidor de manera eficiente, confiable y escalable. Combinando las mejores ideas de POO (Programación Orientada a Objetos), PF (Programación Funcional) y PRF (Programación Reactiva Funcional), te ofrece una plataforma completamente arquitectada y con todo incluido sobre Express (o Fastify).

<!-- more -->

Si vienes de Angular, te sentirás como en casa con su estructura de módulo/controlador/servicio y su poderoso sistema de inyección de dependencias.

En este artículo cubriremos tanto la **teoría** – por qué existe NestJS, cómo está estructurado y cuándo utilizarlo – como la **práctica**, con fragmentos de código breves que demuestran cómo iniciar un proyecto, definir rutas, inyectar dependencias y más. Comencemos por entender qué es NestJS y de dónde proviene.

## Tabla de Contenidos

1.  [¿Qué es NestJS?][1]
    
    -   [1.1 Historia y Filosofía][2]
2.  [¿Por qué Elegir NestJS?][3]
    
    -   [2.1 Beneficios y Casos de Uso][4]
        
    -   [2.2 Comparación con Otros Frameworks][5]
        
3.  [Comenzando][6]
    
    -   [3.1 Instalando el CLI][7]
        
    -   [3.2 Creando Tu Primer Proyecto][8]
        
    -   [3.3 Resumen de la Estructura del Proyecto][9]
        
4.  [Fundamentos de NestJS][10]
    
    -   [4.1 Módulos][11]
        
    -   [4.2 Controladores][12]
        
    -   [4.3 Proveedores (Servicios)][13]
        
5.  [Inyección de Dependencias][14]
    
    -   [5.1 Cómo Funciona la DI en NestJS][15]
        
    -   [5.2 Proveedores Personalizados y Proveedores de Fábrica][16]
        
6.  [Rutas y Middleware][17]
    
    -   [6.1 Definiendo Rutas][18]
        
    -   [6.2 Aplicando Middleware][19]
        
7.  [Ciclo de Vida de Peticiones y Pipes][20]
    
    -   [7.1 ¿Qué Son los Pipes?][21]
        
    -   [7.2 Pipes Integrados vs. Pipes Personalizados][22]
        
8.  [Guards y Autorización][23]
    
    -   [8.1 Implementación de Guards][24]
        
    -   [8.2 Control de Acceso Basado en Roles][25]
        
9.  [Filtros de Excepción][26]
    
    -   [9.1 Manejando Errores de Manera Elegante][27]
        
    -   [9.2 Creando Filtros Personalizados][28]
        
10.  [Interceptores y Registro][29]
    
    -   [10.1 Transformando Respuestas][30]
        
    -   [10.2 Registro y Métricas de Rendimiento][31]
        
11.  [Integración con Base de Datos][32]
    
    -   [11.1 TypeORM con NestJS][33]
        
    -   [11.2 Mongoose (MongoDB)][34]
        
    -   [11.3 Prisma][35]
        
12.  [Gestión de Configuración][36]
    
    -   [12.1 Módulo @nestjs/config][37]
        
    -   [12.2 Variables de Entorno][38]
        
13.  [Autenticación][39]
    
    -   [13.1 Estrategia JWT][40]
        
    -   [13.2 OAuth2 / Inicio de Sesión Social][41]
        
14.  [Conclusión y Recursos Adicionales][42]
    
    -   [Resumen][43]
        
    -   [Documentación Oficial y Enlaces de la Comunidad][44]
        

## 1\. ¿Qué es NestJS?

NestJS es un framework para construir aplicaciones del lado del servidor en Node.js. Está escrito en TypeScript (pero también soporta JavaScript puro). En su núcleo:

-   **Envuelve** una biblioteca de servidor HTTP madura (Express o Fastify)
    
-   **Estandariza** la arquitectura de la aplicación en módulos, controladores y proveedores
    
-   **Aprovecha** el sistema de tipos de TypeScript para una seguridad en tiempo de compilación y APIs claras
    
-   **Ofrece** soporte incorporado para cosas como validación, configuración y pruebas
    

En lugar de juntar middleware a mano, NestJS fomenta un enfoque declarativo y por capas. Defines **módulos** para agrupar funcionalidades relacionadas, **controladores** para manejar peticiones entrantes y **proveedores** (a menudo llamados "servicios") para tu lógica de negocio. Tras bambalinas, NestJS resuelve las dependencias mediante un contenedor de IoC, para que puedas centrarte en escribir clases limpias y reutilizables.

Para iniciar un proyecto, ejecuta los siguientes comandos:

```
# Instala el CLI de Nest globalmente
npm install -g @nestjs/cli

# Crea un nuevo proyecto llamado 'mi-app'
nest new mi-app

cd mi-app
npm run start:dev
```

Una vez en funcionamiento, tendrás un servidor HTTP listo para usar con recarga en caliente, tipeo estricto y una estructura de carpetas sensata.

### 1.1 Historia y Filosofía

NestJS apareció por primera vez en 2017, creado por Kamil Myśliwiec. Su objetivo era llevar los patrones arquitectónicos de Angular al mundo backend, proporcionando:

1.  **Consistencia:** Una manera única y opinada de estructurar aplicaciones.
    
2.  **Escalabilidad:** Límites claros (módulos) que facilitan el crecimiento de equipos y bases de código.
    
3.  **Capacidad de Prueba:** Soporte incorporado para Jest y separación clara de preocupaciones.
    
4.  **Extensibilidad:** Un sistema de módulos enchufables facilita la integración de ORMs, WebSockets, GraphQL, microservicios, y más.
    

Bajo el capó, NestJS adopta estos principios:

-   **Modularidad:** Todo vive en un módulo (`AppModule`, `UsersModule`, etc.), que puede importar otros módulos o exportar proveedores.
    
-   **Inyección de Dependencias:** Los servicios pueden inyectarse en controladores (e incluso en otros servicios), lo que fomenta un acoplamiento débil.
    
-   **Decoradores y Metadatos:** Con decoradores de TypeScript (`@Module()`, `@Controller()`, `@Injectable()`), NestJS lee metadatos en tiempo de ejecución para conectar todo.
    
```

```markdown
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

-   El decorador `@Module` agrupa el controlador + servicio
    
-   El controlador inyecta el servicio a través de su constructor
    
-   Una simple ruta `GET /users` devuelve un array de objetos de usuarios
    


Con esa base sentada, en la siguiente sección exploraremos **por qué elegir NestJS**, comparándolo con otros frameworks populares de Node y delineando casos de uso comunes en el mundo real.

## 2\. ¿Por Qué Elegir NestJS?

NestJS no es solo otro framework de Node.js: ofrece un enfoque estructurado y de grado empresarial para construir servicios de backend. En esta sección, cubriremos beneficios y casos de uso en el mundo real, luego compararemos NestJS con otros frameworks populares de Node para que puedas ver dónde encaja mejor.

### 2.1 Beneficios y Casos de Uso

1.  **Patrones arquitectónicos sólidos**
    
    -   **Modularidad:** Divide tu aplicación en módulos enfocados (`AuthModule`, `ProductsModule`, etc.), cada uno responsable de una parte de la funcionalidad.
        
    -   **Separación de preocupaciones:** Los controladores manejan HTTP, los servicios encapsulan la lógica de negocios, los módulos conectan todo.
        
    -   **Escalabilidad:** Equipos en crecimiento se organizan naturalmente en módulos: las nuevas características rara vez tocan el código existente.
        
2.  **Inyección de dependencias (DI) incorporada**
    
    -   DI facilita las pruebas y el intercambio de implementaciones.
        
    -   Puedes simular fácilmente un servicio en una prueba unitaria:
        

```typescript
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

3.  **Primero TypeScript**
    
    -   Seguridad de tipos completa en tiempo de compilación.
        
    -   Aprovecha interfaces y decoradores (`@Body()`, `@Param()`) para validar y transformar datos.
        
4.  **Ecosistema rico y extensibilidad**
    
    -   Integraciones oficiales para WebSockets, GraphQL, microservicios (RabbitMQ, Kafka), y más.
        
    -   Cientos de módulos comunitarios (por ejemplo, `@nestjs/swagger` para documentación OpenAPI).
        
5.  **Herramientas de grado de producción**
    
    -   CLI genera código base (`nest g module`, `nest g service`).
        
    -   Soporte para recarga en caliente en desarrollo (`npm run start:dev`).
        
    -   Configuración de pruebas incorporada con Jest.
        

**Casos de Uso Reales:**

-   **APIs empresariales** con límites de módulo estrictos y RBAC.
    
-   **Arquitecturas de microservicios**, donde cada servicio es una aplicación NestJS autónoma.
    
-   **Aplicaciones en tiempo real** (chat, tableros en vivo) usando los gateways WebSocket de Nest.
    
-   **Backends de GraphQL** con esquemas code-first.
    
-   **Sistemas basados en eventos** que se conectan a brokers de mensajes.
    

### 2.2 Comparación con Otros Frameworks

| Característica | Express | Koa | NestJS |
| --- | --- | --- | --- |
| **Arquitectura** | Mínima, no opinativa | Mínima, basada en middleware | Módulos/controladores/servicios opinativos |
| **Inyección de Dependencias** | Conexión manual | Conexión manual | Incorporada, reflect-metadata |
| **Soporte para TypeScript** | A través de DefinitelyTyped | A través de DefinitelyTyped | De primera clase, decoradores |
| **Herramientas CLI** | Ninguna (terceros) | Ninguna | `@nestjs/cli` genera código |
| **Pruebas** | Configurado por el usuario | Configurado por el usuario | Jest + DI facilita la simulación |
| **Ecosistema** | Biblioteca de middleware | Biblioteca de middleware | Microservicios oficiales, módulos de GraphQL, Swagger |
| **Curva de Aprendizaje** | Baja | Baja | Media (idiomas de Nest) |

-   **Express** es ideal si deseas capas mínimas y control total, pero terminarás creando muchas cosas (DI, validación, estructura de carpetas) por ti mismo.
    
-   **Koa** ofrece un enfoque de middleware más moderno, pero aún deja las decisiones de arquitectura a ti.
    
-   **NestJS** proporciona el paquete completo: estructura, DI, validación, pruebas, e integraciones oficiales, lo cual es ideal si valoras la **consistencia**, la **seguridad de tipos** y las **mejores prácticas listas para usar**.
    
```

NextJS es excelente para varios casos de uso. Es particularmente efectivo si estás construyendo una API a gran escala o un conjunto de microservicios, si deseas una arquitectura sólida desde el primer día, y si prefieres TypeScript e inyección de dependencias para mantener el código testeable y mantenible.

Con estas ventajas en mente, encontrarás que NestJS puede acelerar dramáticamente el desarrollo, especialmente en proyectos que necesitan una estructura robusta y límites claros.

En la siguiente sección, profundizaremos en cómo empezar: instalando la CLI, creando un proyecto, y explorando la disposición de carpetas generada.

## 3\. Cómo Empezar

Vamos a lo básico: instalar la CLI, generar un nuevo proyecto, y explorar la disposición de carpetas por defecto.

### 3.1 Instalando la CLI

Nest viene con una herramienta de línea de comandos oficial que te ayuda a generar módulos, controladores, servicios y más. En su funcionamiento interno utiliza plantillas Yeoman para mantener todo consistente.

```
# Instalar la CLI globalmente (requiere npm ≥ 6)
npm install -g @nestjs/cli
```

Una vez instalada, puedes ejecutar `nest --help` para ver los comandos disponibles:

```
nest --help
Uso: nest <comando> [opciones]

Comandos:
  new <nombre>       Generar un nuevo proyecto
  generate|g <esquemático> [opciones]  Generar artefactos (módulos, controladores, ...)
  build            Construir proyecto con webpack
  ...

Opciones:
  -v, --version    Mostrar número de versión
  -h, --help       Mostrar ayuda
```

### 3.2 Creando Tu Primer Proyecto

Generar una nueva aplicación es un solo comando. La CLI te preguntará si deseas usar npm o yarn, y si deseas habilitar configuraciones estrictas de TypeScript.

```
# Crear una nueva aplicación Nest en la carpeta "my-nest-app"
nest new my-nest-app
```

Después de responder a las preguntas, tendrás:

```
cd my-nest-app
npm run start:dev
```

Esto lanza un servidor de desarrollo en [`http://localhost:3000`][45] con recarga automática al cambiar archivos.

### 3.3 Vista General de la Estructura del Proyecto

Por defecto, verás algo como:

```
my-nest-app/
├── src/
│   ├── app.controller.ts      # controlador de ejemplo
│   ├── app.controller.spec.ts # prueba unitaria para el controlador
│   ├── app.module.ts          # módulo raíz de la aplicación
│   ├── app.service.ts         # proveedor de ejemplo
│   └── main.ts                # punto de entrada (inicia Nest)
├── test/                      # pruebas de extremo a extremo
├── node_modules/
├── package.json
├── tsconfig.json
└── nest-cli.json             # configuración de la CLI
```

-   **src/main.ts**  
    El script de “bootstrap”. Crea una instancia de la aplicación Nest y comienza a escuchar en un puerto:
    
    ```
      import { NestFactory } from '@nestjs/core';
      import { AppModule } from './app.module';
    
      async function bootstrap() {
        const app = await NestFactory.create(AppModule);
        await app.listen(3000);
        console.log(`🚀 La aplicación está corriendo en: ${await app.getUrl()}`);
      }
      bootstrap();
    ```
    
-   **src/app.module.ts**  
    El módulo raíz. Une controladores y proveedores:
    
    ```
      import { Module } from '@nestjs/common';
      import { AppController } from './app.controller';
      import { AppService } from './app.service';
    
      @Module({
        imports: [],                 // otros módulos a importar
        controllers: [AppController],
        providers: [AppService],
      })
      export class AppModule {}
    ```
    
-   **src/app.controller.ts / app.service.ts**  
    Un ejemplo sencillo que muestra la inyección de dependencias en acción:
    
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
          return '¡Hola, NestJS!';
        }
      }
    ```
    

Con este andamiaje en su lugar, tienes una aplicación NestJS mínima pero completamente funcional. Desde aquí, puedes generar nuevos módulos, controladores y servicios:

```
# Generar un nuevo módulo, controlador y servicio para "tareas"
nest g module tasks
nest g controller tasks
nest g service tasks
```

Cada comando creará un nuevo archivo `.ts` en la carpeta correspondiente y actualizará los metadatos de tu módulo. En la siguiente sección, profundizaremos en los bloques de construcción centrales de Nest como módulos, controladores y proveedores con más detalle.

## 4\. Bloques de Construcción Centrales de NestJS

En el corazón de cada aplicación NestJS están tres pilares: **Módulos**, **Controladores** y **Proveedores** (a menudo llamados Servicios). Veamos qué hace cada uno, y cómo se integran en la teoría y en la práctica.

### 4.1 Módulos

Un **Módulo** es un límite lógico – un contenedor que agrupa componentes relacionados (controladores, proveedores e incluso otros módulos). Cada aplicación NestJS tiene al menos un módulo raíz (usualmente `AppModule`), y creas módulos de características (`UsersModule`, `AuthModule`, etc.) para organizar el código por dominio.

-   `imports`: otros módulos a utilizar
    
-   `controllers`: controladores que manejan solicitudes entrantes
    
-   `providers`: servicios o valores disponibles mediante DI (Inyección de Dependencias)
    
-   `exports`: proveedores que deberían ser visibles para los módulos importadores
    

**Aquí tienes un ejemplo:**

```typescript
// cats.module.ts
import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  imports: [],            // por ejemplo, TypeOrmModule.forFeature([Cat])
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService], // hace que CatsService esté disponible para otros módulos
})
export class CatsModule {}
```

Luego en tu módulo raíz:

```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
})
export class AppModule {}
```

Ahora cualquier cosa que inyecte `CatsService` se resolverá al definido dentro de `CatsModule`.

### 4.2 Controladores

Un **Controlador** asigna solicitudes HTTP entrantes a métodos manejadores. Es responsable de extraer datos de la solicitud (parámetros de consulta, cuerpo, cabeceras) y devolver una respuesta. Los controladores deben permanecer sencillos, delegando la lógica de negocio a los proveedores.

-   **@Controller(path?)**: Define un prefijo de ruta
    
-   **@Get, @Post, @Put, @Delete, y similares**: Definen rutas a nivel de método
    
-   **@Param(), @Query(), @Body(), @Headers(), @Req(), @Res()**: Decoradores para extraer detalles de la solicitud
    

**Aquí tienes un ejemplo:**

```typescript
// cats.controller.ts
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')                  // prefijo: /cats
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

```typescript
// dto/create-cat.dto.ts
export class CreateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed?: string;
}
```

### 4.3 Proveedores (Servicios)

Los **Proveedores** son clases anotadas con `@Injectable()` que contienen tu lógica de negocio o acceso a datos. Cualquier cosa que quieras inyectar en otro lugar debe ser un proveedor. Puedes proporcionar valores simples, funciones de fábrica o clases.

-   **@Injectable()**: Marca una clase como disponible para DI
    
-   **Alcance**: El predeterminado es singleton, pero puedes cambiarlo a solicitud o transitorio
    
-   **Proveedores Personalizados**: Usa `useClass`, `useValue`, `useFactory`, o `useExisting` para más control
    

**Aquí tienes un ejemplo:**

```typescript
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
      throw new NotFoundException(`Gato #${id} no encontrado`);
    }
    return cat;
  }
}
```

**Inyectando un Valor Personalizado:**

```typescript
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

```typescript
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

Con módulos que conectan controladores y proveedores, NestJS te ofrece una base escalable y comprobable. En la siguiente sección, exploraremos en detalle la **Inyección de Dependencias**: cómo funciona internamente y cómo crear proveedores personalizados e inyecciones basadas en fábricas.

## 5\. Inyección de Dependencias

El sistema de Inyección de Dependencias (DI) integrado en Nest es el corazón de cómo los componentes (controladores, servicios, y demás) se comunican entre sí de manera desacoplada y comprobable.

### 5.1 Cómo Funciona DI en NestJS

Cuando tu aplicación se inicia, Nest construye un **contenedor IoC basado en módulos**. Cada proveedor `@Injectable()` se registra en el contenedor bajo un token (por defecto, su clase). Cuando una clase declara una dependencia en su constructor, Nest busca ese token e inyecta la instancia correspondiente.

-   **Alcance singleton**: Una instancia por aplicación (por defecto)
    
-   **Alcance de solicitud**: Nueva instancia por solicitud entrante
    
-   **Alcance transitorio**: Nueva instancia cada vez que se inyecta
    

**Aquí tienes un ejemplo:**

```typescript
// cats.service.ts
@Injectable()
export class CatsService {
  // ...
}

// cats.controller.ts
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  // Nest ve CatsService en el constructor,
  // encuentra su instancia singleton y la inyecta.
}
```

### 5.2 Proveedores Personalizados y Proveedores de Fábrica

A veces necesitas inyectar valores que no son clases (APIs, constantes) o ejecutar lógica en el momento del registro. Nest te permite definir **proveedores personalizados** usando la sintaxis `provide`.

#### `useValue`

Inyecta un valor u objeto simple:

```
// config.constant.ts
export const APP_NAME = {
  provide: 'APP_NAME',
  useValue: 'MiAplicacionImpresionante',
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

Cambia implementaciones fácilmente (útil para pruebas o banderas de características):

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

Ejecuta lógica de fábrica arbitraria (por ejemplo, inicialización asíncrona, configuración dinámica):

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

Con proveedores personalizados y el patrón de fábrica, puedes integrar bibliotecas externas, alternar implementaciones o realizar configuraciones asíncronas, mientras mantienes la estructura clara y comprobable que proporciona NestJS.

En la siguiente sección, veremos **Enrutamiento y Middleware**, mostrando cómo definir manejadores de rutas, aplicar middleware global o por ruta, y extender tu pipeline HTTP.

## 6\. Enrutamiento y Middleware

El enrutamiento en NestJS se construye sobre tus controladores y decoradores, mientras que el middleware te permite engancharte al pipeline de solicitud/respuesta para preocupaciones transversales como el registro, comprobaciones de autenticación o CORS.

### 6.1 Definición de Rutas

Primero, un poco de teoría:

-   **@Controller(path?)** establece un prefijo de URL para todas las rutas en esa clase.
    
-   **@Get, @Post, @Put, @Delete, etc.** definen manejadores de métodos HTTP.
    
-   **@Param(), @Query(), @Body(), @Headers(), @Req(), @Res()** extraen partes de la solicitud entrante.
    

Puedes combinar decoradores de ruta y de parámetros para construir endpoints expresivos y seguros en tipos.

**Aquí hay un ejemplo:**

```
// products.controller.ts
import { Controller, Get, Post, Param, Query, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')                // todas las rutas aquí comienzan con /products
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()                              // GET /products
  findAll(
    @Query('limit') limit = '10',     // consulta opcional ?limit=20
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

También puedes anidar controladores importando un módulo de características, y utilizar **@Patch**, **@Put**, **@Delete**, **@Head**, etc., para una cobertura completa de REST.

### 6.2 Aplicación de Middleware

**Los middleware** son funciones que se ejecutan _antes_ de que tus rutas manejen una solicitud. Son útiles para registro, análisis de cuerpo (aunque Nest proporciona integrados), guardas de autenticación a nivel inferior, limitación de velocidad, etc.

Puedes implementarlos ya sea como middleware funcional o como una clase que implementa `NestMiddleware`.

**Aquí hay un ejemplo (Middleware Funcional):**

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
      .apply(logger)                 // aplicar logger
      .forRoutes('products');        // solo para las rutas /products
  }
}
```

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
      .forRoutes(UsersController);    // aplicar a todas las rutas en UsersController
  }
}
```

**Consejo:** El middleware global se puede aplicar en su `main.ts` antes de la llamada a `app.listen()` mediante `app.use(logger)` si lo desea en _todas_ las solicitudes.

Con la configuración de rutas y middleware, tienes control total sobre cómo las solicitudes fluyen a través de tu aplicación. A continuación, profundizaremos en el **Ciclo de Solicitudes y Pipes**, explorando cómo se transforman y validan los datos como parte de cada solicitud.

## 7\. Ciclo de Solicitudes y Pipes

NestJS procesa cada solicitud entrante a través de un “ciclo de vida” definido de pasos: enrutamiento al controlador correcto, aplicación de **pipes**, **guards**, **interceptores**, y finalmente invocación de tu método de controlador. **Los Pipes** se sitúan entre la petición entrante y tu manejador, transformando o validando datos antes de que lleguen a tu lógica de negocio.

### 7.1 ¿Qué son los Pipes?

Un **Pipe** es una clase anotada con `@Injectable()` que implementa la interfaz `PipeTransform`. Tiene un solo método:

```
transform(value: any, metadata: ArgumentMetadata): any
```

-   **Transformación**: Convertir datos de entrada (por ejemplo, una cadena `"123"`) en el tipo deseado (`número` `123`).
    
-   **Validación**: Verificar que los datos entrantes cumplan ciertas reglas y lanzar una excepción (generalmente una `BadRequestException`) si no lo hacen.
    

Por defecto, los pipes se ejecutan **después** del middleware y **antes** de guards/interceptores, para cada parámetro decorado (`@Body()`, `@Param()`, etc.).

**Así es como funciona:**  
Nest incluye un pipe de validación global muy útil que se integra con class-validator:

```
// main.ts
import { ValidationPipe } from '@nestjs/common';
import { NestFactory }    from '@nestjs/core';
import { AppModule }      from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Validar automáticamente y eliminar propiedades desconocidas
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
  await app.listen(3000);
}
bootstrap();
```

Con esto, cualquier DTO anotado con decoradores de validación se comprobará antes de ejecutar tu manejador:

```
// dto/create-user.dto.ts
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()           // debe ser un email válido
  email: string;

  @IsString()          // debe ser una cadena
  @MinLength(8)        // al menos 8 caracteres
  password: string;
}

// users.controller.ts
@Post()
createUser(@Body() dto: CreateUserDto) {
  // Si body.email no es un email, o password es más corto,
  // Nest lanza un 400 Bad Request con detalles.
  return this.usersService.create(dto);
}
```

### 7.2 Pipes Integrados vs. Pipes Personalizados

#### Pipes Integrados

Nest proporciona varios pipes listos para usar:

-   **ValidationPipe**: Se integra con `class-validator` para la validación de DTO (mostrado anteriormente).
    
-   **ParseIntPipe**: Convierte un parámetro de ruta a `número` o lanza `BadRequestException`.
    
-   **ParseBoolPipe**, **ParseUUIDPipe**, **ParseFloatPipe**, etc.
    

```
@Get(':id')
getById(@Param('id', ParseIntPipe) id: number) {
  // id está garantizado a ser un número aquí
  return this.itemsService.findOne(id);
}
```

#### Pipes Personalizados

Puedes escribir los tuyos para manejar cualquier lógica de transformación o validación:

```
import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParsePositiveIntPipe implements PipeTransform<string, number> {
  transform(value: string): number {
    const val = parseInt(value, 10);
    if (isNaN(val) || val <= 0) {
      throw new BadRequestException(`"${value}" no es un entero positivo`);
    }
    return val;
  }
}
```

Úsalo igual que un pipe integrado:

```
@Get('order/:orderId')
getOrder(
  @Param('orderId', ParsePositiveIntPipe) orderId: number
) {
  // orderId es un entero positivo validado
  return this.ordersService.findById(orderId);
}
```

Con pipes, te aseguras de que cada dato que ingresa a tus manejadores esté correctamente tipado y sea válido, manteniendo tu lógica de negocio limpia y enfocada. En la siguiente sección, exploraremos **Guards y Autorización** para controlar el acceso a tus endpoints.

## 8\. Guards y Autorización

Los guards se sitúan en el ciclo de vida de la solicitud **después** de los pipes y **antes** de interceptores/controladores. Determinan si se debe permitir que una solicitud dada continúe, basándose en una lógica personalizada. Esto es ideal para autenticación, comprobaciones de roles o banderas de características.
```

Un **Guardia** es una clase que implementa la interfaz `CanActivate`, con un único método:

```
canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
```

-   **ExecutionContext** te da acceso a la solicitud/respuesta subyacente y a los metadatos de la ruta.
    
-   Si `canActivate` devuelve `true`, la solicitud continúa. Devolver `false` o lanzar una excepción (por ejemplo, `UnauthorizedException`) la bloquea.
    

Registras guardias ya sea de forma **global**, a nivel del **controlador**, o en rutas **individuales** con el decorador `@UseGuards()`.

**Así es cómo funcionan los guardias:**

1.  **Crear un guardia de autenticación simple:**

```
// auth.guard.ts
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Falta o es inválido el encabezado de autorización');
    }
    // Verificación básica del token (reemplazar con validación real)
    const token = authHeader.split(' ')[1];
    if (token !== 'valid-token') {
      throw new UnauthorizedException('Token inválido');
    }
    // Adjuntar información del usuario si es necesario:
    req.user = { id: 1, nombre: 'Alice' };
    return true;
  }
}
```

2.  **Aplicando el guardia**

-   **Globalmente** (en `main.ts`):
    
    ```
      import { NestFactory } from '@nestjs/core';
      import { AppModule } from './app.module';
      import { AuthGuard } from './auth.guard';
    
      async function bootstrap() {
        const app = await NestFactory.create(AppModule);
        // cada solicitud entrante pasa por AuthGuard
        app.useGlobalGuards(new AuthGuard());
        await app.listen(3000);
      }
      bootstrap();
    ```
    
-   **A nivel del Controlador**:
    
    ```
      import { Controller, Get, UseGuards } from '@nestjs/common';
      import { AuthGuard } from './auth.guard';
    
      @Controller('profile')
      @UseGuards(AuthGuard)       // se aplica a todas las rutas en este controlador
      export class ProfileController {
        @Get()
        getProfile(@Req() req) {
          return req.user;
        }
      }
    ```
    
-   **A nivel de Ruta**:
    
    ```
      @Get('admin')
      @UseGuards(AdminGuard, AuthGuard)  // encadenar múltiples guardias
      getAdminData() { /* ... */ }
    ```
    

### 8.2 Control de Acceso Basado en Roles

Más allá de la autenticación simple, a menudo necesitas **autorización** – asegurarte de que un usuario tenga el rol o permiso correcto. Puedes construir un guardia que lea metadatos (por ejemplo, roles requeridos) y verifique las afirmaciones del usuario.

**Así es cómo funciona:**

1.  **Definir un decorador de roles:**

```
// roles.decorator.ts
import { SetMetadata } from '@nestjs/common';
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
```

2.  **Crear un guardia de roles:**

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
      return true; // sin metadatos de roles => ruta abierta
    }
    const { user } = context.switchToHttp().getRequest();
    const hasRole = requiredRoles.some(role => user.roles?.includes(role));
    if (!hasRole) {
      throw new ForbiddenException('No tienes permiso (roles)');
    }
    return true;
  }
}
```

3.  **Aplicar metadatos de roles y guardia:**

```
@Controller('projects')
@UseGuards(AuthGuard, RolesGuard)
export class ProjectsController {
  @Get()
  @Roles('user', 'admin')         // la ruta requiere ya sea 'user' o 'admin'
  findAll() { /* ... */ }

  @Post()
  @Roles('admin')                 // solo 'admin' puede crear
  create() { /* ... */ }
}
```

Con esta configuración:

-   `AuthGuard` asegura que la solicitud esté autenticada y completa `req.user`.
    
-   `RolesGuard` lee los metadatos de `@Roles()` para hacer cumplir el acceso basado en roles.
    

Los guardias te dan una manera poderosa y declarativa de hacer cumplir políticas de seguridad y autorización. En la próxima sección, cubriremos **Filtros de Excepción** – cómo atrapar y formatear errores de manera centralizada, manteniendo tus controladores limpios.

## 9\. Filtros de Excepción

Los filtros de excepción te permiten centralizar el manejo de errores, transformando las excepciones lanzadas en respuestas HTTP coherentes o en otros formatos. Puedes confiar en el comportamiento integrado de Nest para muchos casos, pero los filtros personalizados te dan control sobre el registro, la forma de la respuesta, o el manejo de errores que no son HTTP.

### 9.1 Manejo de Errores de Forma Elegante

Por defecto, si un controlador o servicio lanza una `HttpException` (o una de las excepciones integradas de Nest como `NotFoundException`, `BadRequestException`, y así sucesivamente), Nest la captura y envía una respuesta HTTP apropiada con código de estado y cuerpo JSON que contiene `statusCode`, `message`, y `error`.

Los controladores/servicios deben lanzar excepciones en lugar de devolver códigos de error manualmente, para que el framework pueda dar formato de manera consistente.

**Así es como funciona:**

```typescript
// users.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [{ id: 1, name: 'Alice' }];

  findOne(id: number) {
    const user = this.users.find(u => u.id === id);
    if (!user) {
      // resulta en 404 con JSON { statusCode: 404, message: 'Usuario #2 no encontrado', error: 'No Encontrado' }
      throw new NotFoundException(`Usuario #${id} no encontrado`);
    }
    return user;
  }
}
```

```typescript
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

Si `findOne` lanza una excepción, el filtro predeterminado de Nest envía un error JSON estructurado. Para errores inesperados (como un `Error` lanzado), Nest lo envuelve en una respuesta 500.

### 9.2 Creación de Filtros Personalizados

Puedes implementar la interfaz `ExceptionFilter` o extender `BaseExceptionFilter`. Solo usa el decorador `@Catch()` para dirigir tipos de excepción específicos (o déjalo vacío para capturar todas).

En `catch(exception, host)`, puedes extraer el contexto (solicitud/respuesta HTTP) y dar forma a tu respuesta (por ejemplo, agregar metadatos, campos personalizados o un contenedor uniforme). También puedes registrar excepciones o reportarlas a sistemas externos aquí.

Puedes aplicar filtros **globalmente**, a un controlador, o a una ruta individual.

**Así es como funciona:**

1.  **Filtro de registro simple**  
    Captura todas las excepciones, registra detalles, luego delega al comportamiento predeterminado:
    
    ```typescript
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
    
     @Catch() // sin argumentos = captura todas las excepciones
     export class LoggingExceptionFilter extends BaseExceptionFilter {
       private readonly logger = new Logger(LoggingExceptionFilter.name);
    
       catch(exception: unknown, host: ArgumentsHost) {
         const ctx = host.switchToHttp();
         const req = ctx.getRequest<Request>();
         const res = ctx.getResponse();
    
         // Registrar pila o mensaje
         if (exception instanceof Error) {
           this.logger.error(`Error en ${req.method} ${req.url}`, exception.stack);
         } else {
           this.logger.error(`Excepción desconocida en ${req.method} ${req.url}`);
         }
    
         // Delegar al filtro predeterminado para excepciones HTTP o genérico 500
         super.catch(exception, host);
       }
     }
    ```
    
    **Aplicar globalmente** en `main.ts`:
    
    ```typescript
     async function bootstrap() {
       const app = await NestFactory.create(AppModule);
       app.useGlobalFilters(new LoggingExceptionFilter(app.get(HttpAdapterHost)));
       await app.listen(3000);
     }
    ```
    
    (Si extiendes `BaseExceptionFilter`, pasa el adaptador anfitrión al constructor o super según sea necesario.)
    
2.  **Forma personalizada de respuesta**  
    Supón que deseas que todos los errores devuelvan `{ success: false, error: { code, message } }`:
    
    ```typescript
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
           // res puede ser una cadena o un objeto
           message = typeof res === 'string' ? { message: res } : res;
         } else {
           status = HttpStatus.INTERNAL_SERVER_ERROR;
           message = { message: 'Error interno del servidor' };
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
    
    **Aplicar a nivel de controlador o ruta**:
    
    ```typescript
     @Controller('orders')
     @UseFilters(CustomResponseFilter)
     export class OrdersController {
       // ...
     }
    ```
    
3.  **Capturando excepciones específicas**  
    Si tienes una clase de excepción personalizada:
    
    ```typescript
     export class PaymentFailedException extends HttpException {
       constructor(details: string) {
         super({ message: 'Pago fallido', details }, HttpStatus.PAYMENT_REQUIRED);
       }
     }
    ```
    
    Puedes escribir un filtro que solo capture eso:
    
    ```typescript
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
           help: 'Por favor verifica tu método de pago e intenta de nuevo.',
         });
       }
     }
    ```
    
    Luego aplícalo solo donde ocurran pagos:
    
    ```typescript
     @Post('charge')
     @UseFilters(PaymentFailedFilter)
     charge() {
       // ...
     }
    ```



## 10\. Interceptores y Registro

Los interceptores envuelven la ejecución de métodos, permitiéndote transformar respuestas, vincular lógica adicional antes/después de las llamadas a métodos, o medir el rendimiento. Son ideales para preocupaciones transversales como el registro, la conformación de respuestas, el almacenamiento en caché o las métricas de tiempo.

### 10.1 Transformación de Respuestas

Un **Interceptor** implementa la interfaz `NestInterceptor` con un método `intercept(context, next)`.

Dentro de `intercept`, normalmente llamas a `next.handle()` que devuelve un `Observable` del resultado del manejador. Luego puedes aplicar operadores de RxJS (como `map`) para modificar los datos antes de que sean enviados al cliente.

Usos comunes son envolver todas las respuestas en un formato uniforme, filtrar ciertos campos o añadir metadatos.

**Así es como funciona:**

1.  **Envoltorio básico de respuesta**  
    Supongamos que deseas que cada respuesta exitosa sea `{ success: true, data: <original> }`.
    
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
    
    **Aplicar globalmente** en `main.ts`:
    
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
    
    Ahora, si un método del controlador devuelve `{ id: 1, name: 'Alice' }`, el cliente verá:
    
    ```
     {
       "success": true,
       "data": { "id": 1, "name": "Alice" }
     }
    ```
    
2.  **Filtrado de campos sensibles**  
    Puede que desees eliminar campos como `password` antes de enviar un objeto de usuario:
    
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
    
    **Aplicar en el controlador o ruta**:
    
    ```
     @Controller('users')
     @UseInterceptors(SanitizeInterceptor)
     export class UsersController {
       @Get(':id')
       getUser(@Param('id') id: string) {
         // devuelve un objeto de usuario con un campo de contraseña internamente,
         // pero el interceptor lo elimina antes de enviar al cliente
         return this.usersService.findOne(+id);
       }
     }
    ```
    
3.  **Serialización con** `class-transformer`  
    Si usas clases con decoradores, puedes integrarlas con `class-transformer`:
    
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
    
    **Aplicar con un DTO**:
    
    ```
     @Controller('users')
     export class UsersController {
       @Get(':id')
       @UseInterceptors(new ClassTransformInterceptor(User))
       getUser(@Param('id') id: string) {
         // el servicio devuelve un objeto simple; el interceptor transforma a una instancia de User
         return this.usersService.findOne(+id);
       }
     }
    ```
    

### 10.2 Registro y Métricas de Rendimiento

Los interceptores también pueden medir el tiempo de ejecución o registrar detalles de las solicitudes/respuestas. Capturas marcas de tiempo antes y después de `next.handle()`, registrando la diferencia. Esto ayuda a monitorear puntos finales lentos. Combinado con un framework de registro o el `Logger` de Nest, puedes estandarizar los registros.

1.  **Interceptor de temporización**  
    Registra cuánto tiempo lleva cada manejador de solicitudes:
    
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
    
    **Aplicar globalmente**:
    
    ```
     async function bootstrap() {
       const app = await NestFactory.create(AppModule);
       app.useGlobalInterceptors(new LoggingInterceptor());
       await app.listen(3000);
     }
    ```
    
    Ahora cada solicitud registra algo como:
    
    ```
     [LoggingInterceptor] GET /users/1 - 35ms
    ```
    
2.  **Registro detallado de solicitudes/respuestas**  
    Para más detalle, registre el cuerpo de la solicitud o el tamaño de la respuesta (cuidado con los datos sensibles):
    
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
    
    **Aplicar condicionalmente**: quizás solo en desarrollo:
    
    ```
     if (process.env.NODE_ENV !== 'production') {
       app.useGlobalInterceptors(new DetailedLoggingInterceptor());
     }
    ```
    
3.  **Combinando con guards/pipes**  
    Dado que los interceptores se ejecutan después de los guards y antes de que se envíe la respuesta, el tiempo de registro captura al manejador completo incluyendo llamadas al servicio, pero después de la validación/autorización. Eso asegura que solo midas solicitudes autorizadas y flujos de datos válidos.

Los interceptores ofrecen una forma flexible de envolver tus manejadores con comportamientos adicionales: transformar salidas, sanitizar datos, medir ejecución, o añadir cabeceras. En la siguiente sección, exploraremos la **Integración de base de datos** para ver cómo puedes integrar tu capa de datos en Nest.

## 11\. Integración de Base de Datos

En muchas aplicaciones del mundo real, la persistencia de datos es esencial. NestJS ofrece soporte de primera clase e integraciones para varias tecnologías de bases de datos. En esta sección cubrimos tres enfoques comunes:

-   **TypeORM con NestJS** (bases de datos relacionales, estilo Active Record/Data Mapper)
    
-   **Mongoose (MongoDB)** (almacenamiento de documentos NoSQL)
    
-   **Prisma** (constructor de consultas con seguridad de tipos/alternativa a ORM)
    

Para cada uno, explicaremos la teoría – cuándo y por qué elegirlo – y mostraremos ejemplos prácticos concisos de configuración y uso en un contexto de NestJS.

### 11.1 TypeORM con NestJS

TypeORM es un ORM popular para Node.js que soporta múltiples bases de datos relacionales (PostgreSQL, MySQL, SQLite, SQL Server, etc.), ofreciendo tanto patrones de Active Record como de Data Mapper.

En NestJS, el paquete `@nestjs/typeorm` envuelve TypeORM para proporcionar:

-   **Gestión automática de conexiones** a través de `TypeOrmModule.forRoot()`
    
-   **Repositorios/entidades a nivel de módulo** a través de `TypeOrmModule.forFeature()`
    
-   **Inyección de dependencias** para repositorios y el `DataSource`/`Connection`
    
-   **Decoradores de entidad** (`@Entity()`, `@Column()`, etc.) para la definición de esquemas
    
-   **Migraciones** y funciones avanzadas a través de CLI de TypeORM o uso programático
    

#### Cuándo elegir TypeORM

TypeORM es útil en varios escenarios. Úsalo cuando tus datos sean relacionales y necesites un ORM completo con decoradores y migraciones integradas. También es excelente si prefieres trabajar con clases/entidades y mapearlas automáticamente a tablas. Y es una gran elección si valoras funciones integradas como relaciones ávidas/perezosas, cascadas, constructores de consultas y patrones de repositorio.

#### Aquí se explica cómo usarlo:

1.  **Instalar dependencias:**
    
    ```
     npm install --save @nestjs/typeorm typeorm reflect-metadata
     # También instala el controlador de base de datos; por ejemplo, para Postgres:
     npm install --save pg
    ```
    
2.  **Configurar el módulo raíz:**
    
    En `app.module.ts`, importa `TypeOrmModule.forRoot()` con opciones de conexión. Estas pueden provenir de variables de entorno (discutidas más adelante en Gestión de Configuración).
    
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
           synchronize: false, // recomendado en producción; use migraciones
           // logging: true,
         }),
         UsersModule,
         // ...otros módulos
       ],
     })
     export class AppModule {}
    ```
    
    -   `synchronize: true` puede auto-sincronizar el esquema en desarrollo, pero en producción prefiera migraciones.
        
    -   Las entidades se cargan automáticamente mediante glob. Asegúrate de que la ruta coincida con la salida compilada.
        
3.  **Definir una entidad:**
    
    Crea una clase de entidad con decoradores:
    
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
    
4.  **Configurar el módulo de funciones:**
    
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
       exports: [UsersService], // si otros módulos necesitan UsersService
     })
     export class UsersModule {}
    ```
    
5.  **Inyectar el repositorio:**
    
    En el servicio, inyecta el `Repository<User>`:
    
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
         const user = this.userRepository.create(dto); // asigna campos DTO a la entidad
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
    
6.  **Usar en el controlador:**
    
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
    
7.  **Migraciones (opcional pero recomendado)**
    
    -   Usa TypeORM CLI o migraciones programáticas.
        
    -   Configura un `ormconfig` por separado o suministra opciones en código.
        
    -   Genera y ejecuta migraciones para evolucionar el esquema sin pérdida de datos.

Mongoose es un ODM (Object Document Mapper) ampliamente utilizado para MongoDB. En NestJS, `@nestjs/mongoose` integra Mongoose para:

-   Definir **esquemas** a través de clases y decoradores (`@Schema()`, `@Prop()`)
    
-   Registrar modelos en módulos con `MongooseModule.forFeature()`
    
-   Gestionar la conexión a MongoDB con `MongooseModule.forRoot()`
    
-   Inyectar instancias de **modelo** de Mongoose en servicios
    
-   Trabajar con documentos de forma segura en cuanto a tipos (con interfaces/tipos)
    
-   Aprovechar características como hooks, virtuales y validación a nivel de esquema
    

#### Cuándo elegir Mongoose

Mongoose es una buena elección si necesitas un almacén NoSQL orientado a documentos, sin esquema/con esquema. También es ideal si las formas de tus datos pueden variar, o prefieres el esquema flexible de MongoDB. Y es útil si deseas características como hooks de middleware en esquemas (guardar pre/post), virtuales, etc.

#### Cómo usarlo:

1.  **Instalar dependencias:**
    
    ```
     npm install --save @nestjs/mongoose mongoose
    ```
    
2.  **Configurar módulo raíz:**
    
    ```
     // src/app.module.ts
     import { Module } from '@nestjs/common';
     import { MongooseModule } from '@nestjs/mongoose';
     import { CatsModule } from './cats/cats.module';
    
     @Module({
       imports: [
         MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost/nest'),
         CatsModule,
         // ...otros módulos
       ],
     })
     export class AppModule {}
    ```
    
3.  **Definir un esquema y documento:**
    
    Usa decoradores e interfaces:
    
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
    
    -   Extender `Document` otorga los métodos y propiedades del documento de Mongoose.
        
    -   `timestamps: true` añade automáticamente `createdAt` y `updatedAt`.
        
    -   Puedes añadir hooks:
        
        ```
          CatSchema.pre<Cat>('save', function (next) {
            // por ejemplo, modificar datos o registrar antes de guardar
            next();
          });
        ```
        
4.  **Configurar módulo de características:**
    
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
    
5.  **Inyectar el modelo:**
    
    En el servicio, inyecta `Model<Cat>`:
    
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
           throw new NotFoundException(`Cat ${id} no encontrado`);
         }
         return cat;
       }
    
       async update(id: string, dto: UpdateCatDto): Promise<Cat> {
         const updated = await this.catModel
           .findByIdAndUpdate(id, dto, { new: true })
           .exec();
         if (!updated) {
           throw new NotFoundException(`Cat ${id} no encontrado`);
         }
         return updated;
       }
    
       async remove(id: string): Promise<void> {
         const res = await this.catModel.findByIdAndDelete(id).exec();
         if (!res) {
           throw new NotFoundException(`Cat ${id} no encontrado`);
         }
       }
     }
    ```
    
6.  **Usar en el controlador:**
    
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
    
7.  **Características avanzadas de Mongoose**
    
    -   **Virtuales**: definir propiedades calculadas no almacenadas en la BD.
        
    -   **Índices**: a través de opciones de esquema o `@Prop({ index: true })`.
        
    -   **Población**: referencia otras colecciones con `@Prop({ type: Types.ObjectId, ref: 'OtherModel' })`.
        
    -   **Transacciones**: usar sesiones de MongoDB para operaciones atómicas multiregistro.
        

Prisma es un ORM/Constructor de Consultas moderno que genera un cliente tipo seguro basado en una definición de esquema. Soporta bases de datos relacionales (PostgreSQL, MySQL, SQLite, SQL Server, y más).

Estas son algunas de sus características clave:

-   **Consultas tipo seguras**: Las definiciones de TypeScript autogeneradas previenen muchos errores en tiempo de ejecución.
    
-   **Esquema de Prisma**: Un archivo `.prisma` declarativo para definir modelos, relaciones y enums.
    
-   **Migraciones**: `prisma migrate` para evolucionar el esquema.
    
-   **Rendimiento**: Constructor de consultas ligero sin sobrecarga pesada en tiempo de ejecución.
    
-   **Flexibilidad**: Soporta consultas sin procesar cuando es necesario.
    

#### Cuándo elegir Prisma

Prisma es una gran elección si prefieres un enfoque primero de esquema con un DSL claro y cliente tipo seguro autogenerado. También es excelente si deseas características modernas como migraciones eficientes, rica inferencia de tipos, y una experiencia de desarrollador sencilla. Y es una elección sólida si no necesitas el patrón Active Record. En cambio, utilizas el cliente de Prisma en servicios.

#### Aquí te explicamos cómo funciona:

1.  **Instalar dependencias e inicializar:**
    
    ```
     npm install @prisma/client
     npm install -D prisma
     npx prisma init
    ```
    
    Esto crea un archivo `prisma/schema.prisma` y un `.env` con `DATABASE_URL`.
    
2.  **Definir el esquema:**
    
    En `prisma/schema.prisma`:
    
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
    
3.  **Ejecutar migraciones y generar cliente:**
    
    ```
     npx prisma migrate dev --name init
     npx prisma generate
    ```
    
    Esto actualiza el esquema de la base de datos y regenera el cliente de TypeScript.
    
4.  **Crear un PrismaService en NestJS:**
    
    Un patrón común es envolver el `PrismaClient` en un servicio inyectable, manejando hooks de ciclo de vida.
    
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
    
5.  **Registrar PrismaService en un módulo:**
    
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
    
    Luego, importa `PrismaModule` en cualquier módulo de característica que necesite acceso a la BD.
    
6.  **Usar en un servicio de característica:**
    
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
    
    Nota: Los campos del DTO deben alinearse con los tipos de esquema de Prisma. Los métodos del cliente de Prisma devuelven resultados tipados.
    
7.  **Inyectar en controlador:**
    
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
    
8.  **Uso avanzado de Prisma**
    
    -   **Relaciones y escrituras anidadas**: por ejemplo, crear una publicación con autor conectado/creado anidado.
        
    -   **Transacciones**: `this.prisma.$transaction([...])` para operaciones atómicas.
        
    -   **Consultas sin procesar**: `this.prisma.$queryRaw` cuando sea necesario.
        
    -   **Middleware**: Prisma soporta middlewares en el lado del cliente.
        
    -   **Ajuste de rendimiento**: seleccionar solo los campos necesarios, utilizar patrones de paginación.

-   **TypeORM** para un ORM completo con soporte para decoradores y migraciones en bases de datos relacionales.
    
-   **Mongoose** para esquemas de documentos flexibles en MongoDB.
    
-   **Prisma** para un constructor de consultas moderno, seguro por tipo, y una alternativa a ORM con una excelente ergonomía para desarrolladores.
    

En la siguiente sección, cubriremos **Gestión de Configuración** – cómo manejar variables de entorno y módulos de configuración en NestJS.

## 12\. Gestión de Configuración

Gestionar la configuración de manera ordenada es crucial para que las aplicaciones se comporten correctamente a través de diferentes entornos (desarrollo, pruebas, producción). NestJS proporciona el módulo `@nestjs/config` para centralizar la carga, validación e inyección de configuración.

### 12.1 Módulo @nestjs/config

El módulo `@nestjs/config` es una utilidad poderosa para gestionar las configuraciones de la aplicación. Algunas de sus características clave son:

-   **Configuración centralizada**: En lugar de dispersar `process.env` en tu código, utiliza un servicio dedicado que carga y valida la configuración una vez al iniciar.
    
-   **Agnóstico de entorno**: Carga variables desde archivos `.env`, variables de entorno u otras fuentes, con soporte para diferentes archivos por entorno.
    
-   **Validación**: Integra un esquema (por ejemplo, usando Joi) para asegurar que las variables requeridas están presentes y bien tipadas, fallando rápidamente si la configuración es incorrecta.
    
-   **Espaciado de Configuración**: Organiza configuraciones relacionadas en grupos lógicos (por ejemplo, base de datos, autenticación, APIs de terceros) a través de fábricas de configuración.
    
-   **Inyección**: Inyecta un `ConfigService` para leer valores de configuración en servicios o módulos, con seguridad de tipos al usar envoltorios personalizados tipados.
    

#### Así funciona:

1.  **Instalar el paquete**
    
    ```
     npm install @nestjs/config
     npm install joi    # si planeas validar a través de esquemas Joi
    ```
    
2.  **Importar e inicializar ConfigModule**
    
    En tu módulo raíz (`AppModule`), importa `ConfigModule.forRoot()`. Opciones típicas:
    
    ```typescript
     // src/app.module.ts
     import { Module } from '@nestjs/common';
     import { ConfigModule } from '@nestjs/config';
     import configuration from './config/configuration';
     import { validationSchema } from './config/validation';
    
     @Module({
       imports: [
         ConfigModule.forRoot({
           // Carga automática de .env; especificar envFilePath para customización:
           isGlobal: true,           // hace que ConfigService esté disponible en toda la aplicación
           envFilePath: ['.env.development.local', '.env.development', '.env'], 
           load: [configuration],    // opcional: carga fábricas de configuración personalizadas
           validationSchema,         // opcional: esquema Joi para validar variables de entorno
           validationOptions: {
             allowUnknown: true,
             abortEarly: true,
           },
         }),
         // ...otros módulos
       ],
     })
     export class AppModule {}
    ```
    
    -   `isGlobal: true` evita importar `ConfigModule` en cada módulo de característica.
        
    -   `envFilePath`: un array te permite probar múltiples archivos (por ejemplo, anular locales antes del predeterminado).
        
    -   `load`: array de funciones que retornan objetos de configuración parciales – ver el siguiente paso.
        
    -   `validationSchema`: un esquema Joi que asegura que las variables requeridas existan y tengan el tipo/formato correctos.
        
3.  **Definir una fábrica de configuración**
    
    Organiza configuraciones relacionadas en un objeto tipado:
    
    ```typescript
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
       // agregar otros espacios de nombres según sea necesario
     });
    ```
    
4.  **Validar variables de entorno**
    
    Usar Joi para la validación:
    
    ```typescript
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
       // agregar otras variables...
     });
    ```
    
    Si la validación falla al iniciar, la aplicación dará un error con detalles, previniendo implementaciones mal configuradas.
    
5.  **Inyectar ConfigService**
    
    Donde necesites configuración, inyecta `ConfigService`:
    
    ```typescript
     // src/some/some.service.ts
     import { Injectable } from '@nestjs/common';
     import { ConfigService } from '@nestjs/config';
    
     @Injectable()
     export class SomeService {
       constructor(private readonly configService: ConfigService) {}
    
       getDbConfig() {
         const host = this.configService.get<string>('database.host');
         const port = this.configService.get<number>('database.port');
         // Usa estos valores para configurar un cliente de base de datos, etc.
         return { host, port };
       }
     }
    ```
    
    -   Usa notación de punto para configuración anidada: por ejemplo, `'jwt.secret'`.
        
    -   También puedes leer variables de entorno sin procesar a través de `configService.get<string>('DB_HOST')` si es necesario, pero es más claro preferir una configuración estructurada.
        
6.  **Envoltorio tipado para ConfigService (opcional)**
    
    Para mayor seguridad de tipo, crea una interfaz que coincida con tu configuración y un envoltorio:
    
    ```typescript
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
    
    ```typescript
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
    
    Registra `TypedConfigService` en un módulo si prefieres inyectarlo en lugar de `ConfigService` sin procesar.
    
7.  **Registro dinámico de módulos usando configuración**
    
    Muchos módulos de Nest aceptan opciones dinámicas. Por ejemplo, TypeORM:
    
    ```typescript
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
    
    Usar `forRootAsync` con `useFactory` asegura que la configuración se cargue antes de que el módulo se inicialice.
    

Las variables de entorno sirven como puente entre el código y su entorno de ejecución, permitiendo desacoplar la configuración (como URLs de base de datos, claves de API o banderas de características) del código fuente.

Al depender de variables de entorno, aseguras que el mismo paquete de aplicación pueda ejecutarse de manera segura en desarrollo, prueba y producción, cada uno proporcionando sus propios ajustes sensibles o específicos del entorno sin cambiar el código. Así es como funciona:

-   **Principio de las 12 Factor App**: Almacena la configuración en el entorno. Evita codificar secretos o configuraciones específicas del entorno en el código.
    
-   **Separación de responsabilidades**: El código permanece igual en todos los entornos. El comportamiento es impulsado por variables de entorno o archivos de configuración.
    
-   **Seguridad**: Mantiene los secretos (claves de API, contraseñas de base de datos) fuera del control de versiones. Utiliza variables de entorno o bóvedas seguras.
    
-   **Sobrescrituras y precedencias**: Puedes tener múltiples archivos `.env` (por ejemplo, `.env`, `.env.local`, `.env.production`) o variables proporcionadas por CI/CD. Controla el orden de carga.
    
-   **Valores predeterminados y alternativos**: Proporciona valores predeterminados sensatos en el código o fábricas de configuración para que la aplicación pueda ejecutarse en desarrollo sin requerir cada variable.
    

#### Aquí te explico cómo usarlo:

1.  **Archivos .env**
    
    -   Crea un archivo `.env` en la raíz del proyecto con pares clave-valor:
        
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
        
    -   Opcionalmente crea `.env.development`, `.env.test`, `.env.production`, y cárgalos según `NODE_ENV`.
        
    -   Asegúrate de que los archivos `.env` estén en `.gitignore` para evitar comprometer secretos.
        
2.  **Orden de carga**
    
    -   Con `@nestjs/config`, especifica `envFilePath` como un arreglo, por ejemplo:
        
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
        
    -   Esto intenta cargar `.env.development.local`, luego `.env.development`, y luego `.env`. CI/CD puede establecer variables de entorno que sobrescriben los valores en los archivos.
        
3.  **Acceso a variables de entorno en bruto**
    
    -   Aunque se prefiere la configuración estructurada, a veces necesitas acceso directo:
        
        ```
          const raw = process.env.SOME_VAR;
        ```
        
    -   Evita dispersar `process.env` en múltiples lugares. En su lugar, prefiere leer una vez en la fábrica de configuración e inyectar a través de `ConfigService`.
        
4.  **Valores predeterminados**
    
    -   En la fábrica de configuración o al leer a través de `ConfigService`, proporciona valores predeterminados:
        
        ```
          const port = configService.get<number>('PORT', 3000);
        ```
        
        o en la fábrica:
        
        ```
          port: parseInt(process.env.PORT, 10) || 3000
        ```
        
5.  **Coerción de tipos**
    
    -   Las variables de entorno son cadenas por defecto. Convierte a números o booleanos según sea necesario:
        
        ```
          const isProd = configService.get<string>('NODE_ENV') === 'production';
          const enableFeature = configService.get<string>('FEATURE_FLAG') === 'true';
          const timeout = parseInt(configService.get<string>('TIMEOUT_MS'), 10) || 5000;
        ```
        
6.  **Gestión de secretos**
    
    -   Para datos sensibles en producción, considera usar gestores de secretos (AWS Secrets Manager, Vault) en lugar de un `.env` simple. En ese caso, carga los secretos al inicio (por ejemplo, a través de un proveedor o fábrica personalizado) e intégralos en la configuración.
        
    -   Ejemplo: en `useFactory`, recupera los secretos de manera asíncrona y devuelve un objeto de configuración que los incluya.
        
7.  **Cambios de configuración en tiempo de ejecución**
    
    -   Generalmente, las configuraciones son estáticas al inicio. Si necesitas recargar la configuración sin reiniciar, implementa un mecanismo personalizado (por ejemplo, lee desde una base de datos o un servicio de configuración remoto periódicamente). Inyecta un servicio que recupere y almacene en caché los valores, pero debes tener en cuenta que esto se desvía de los principios de las 12-factor.
8.  **Validación en producción**
    
    -   Siempre valida las variables de entorno necesarias al inicio para que las configuraciones incorrectas fallen temprano. Utiliza `validationSchema` con Joi u otro validador.
        
    -   Ejemplo de error: si `JWT_SECRET` falta o es demasiado corto, la app debería negarse a iniciar, registrando un error claro.
        

Con la gestión de configuraciones mediante `@nestjs/config` y variables de entorno, tu aplicación NestJS puede adaptarse sin problemas a diferentes entornos, mantener seguros los secretos y evitar cambios de código específicos del entorno. En la siguiente sección, cubriremos las estrategias de **Autenticación** (JWT, OAuth2 / inicio de sesión social).

## 13\. Autenticación

Manejar la autenticación de manera segura es un requerimiento común. En NestJS, normalmente utilizas estrategias de **Passport** junto al módulo **@nestjs/jwt** para flujos basados en JWT, o estrategias OAuth2 para inicio de sesión social.

Aquí cubriremos dos enfoques comunes:

-   **Estrategia JWT**: autenticación basada en tokens para APIs.
    
-   **OAuth2 / Inicio de sesión social**: integración de proveedores como Google o GitHub.

```markdown
Los JSON Web Tokens (JWTs) son un medio compacto y seguro para URLs de representar afirmaciones entre dos partes. En un contexto de autenticación, el servidor emite un token firmado que contiene la identidad del usuario y posiblemente otras afirmaciones, mientras que el cliente almacena y envía este token en solicitudes subsecuentes (típicamente en el encabezado `Authorization: Bearer <token>`).

Debido a que el token está firmado (y opcionalmente cifrado), el servidor puede verificar su integridad y autenticidad sin necesidad de mantener el estado de la sesión en memoria o en una base de datos. Esta naturaleza sin estado simplifica el escalado y desacopla los servicios.

Los tokens incluyen una expiración (`exp`) para que automáticamente se vuelvan inválidos después de cierto tiempo. Para sesiones de mayor duración, se puede utilizar un patrón de token de actualización encima.

En NestJS, aprovechamos `@nestjs/jwt` para firmar y verificar tokens y `@nestjs/passport` con `passport-jwt` para integrar un guardia que verifica los tokens entrantes. A continuación se explica cómo funciona.

-   **JWT (JSON Web Token)**: un token firmado que contiene afirmaciones (por ejemplo, ID de usuario) que los clientes envían en el encabezado `Authorization`.
    
-   **Sin estado**: el servidor verifica la firma del token sin almacenar el estado de la sesión.
    
-   **Expiración**: incruste vencimiento (`exp`) para que los tokens expiren automáticamente; posiblemente use tokens de actualización para sesiones de larga duración.
    
-   En NestJS, se utiliza `@nestjs/jwt` para firmar/verificar tokens y `@nestjs/passport` con `passport-jwt` para implementar el guardia.
    

#### Aquí está cómo usarlo:

1.  **Instalar dependencias**
    
    ```
    npm install @nestjs/jwt passport-jwt @nestjs/passport passport
    ```
    
2.  **Configuración**
    
    Use `ConfigService` (de la sección anterior) para cargar secretos y TTL:
    
    ```
    // src/auth/auth.config.ts
    export default () => ({
      jwt: {
        secret: process.env.JWT_SECRET || 'default-secret',
        expiresIn: process.env.JWT_EXPIRES_IN || '1h',
      },
    });
    ```
    
    Asegúrese de que `ConfigModule.forRoot({ load: [authConfig], isGlobal: true, validationSchema: ... })` esté configurado en `AppModule`.
    
3.  **Configuración de AuthModule**
    
    ```
    // src/auth/auth.module.ts
    import { Module } from '@nestjs/common';
    import { JwtModule } from '@nestjs/jwt';
    import { PassportModule } from '@nestjs/passport';
    import { ConfigService, ConfigModule } from '@nestjs/config';
    import { JwtStrategy } from './jwt.strategy';
    import { AuthService } from './auth.service';
    import { UsersModule } from '../users/users.module'; // asume un UsersService
    
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
    
    Responsable de validar credenciales y emitir tokens:
    
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
    
      // Validar credenciales de usuario (correo/contraseña)
      async validateUser(email: string, pass: string) {
        const user = await this.usersService.findByEmail(email);
        if (user && (await bcrypt.compare(pass, user.password))) {
          // excluir contraseña antes de devolver
          const { password, ...result } = user;
          return result;
        }
        return null;
      }
    
      // Llamado después de que validateUser tenga éxito
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
        // payload.sub es el ID del usuario
        return { userId: payload.sub, email: payload.email };
        // el valor devuelto se asigna a req.user
      }
    }
    ```
    
6.  **Controlador de Auth**
    
    Exponga un endpoint de inicio de sesión:
    
    ```
    // src/auth/auth.controller.ts
    import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common';
    import { AuthService } from './auth.service';
    import { LocalAuthGuard } from './local-auth.guard'; // opcional si se usa la estrategia local
    
    @Controller('auth')
    export class AuthController {
      constructor(private readonly authService: AuthService) {}
    
      // Ejemplo: utilizando una estrategia local para correo/contraseña
      @UseGuards(LocalAuthGuard)
      @Post('login')
      async login(@Request() req) {
        // LocalAuthGuard adjunta el usuario a req.user
        return this.authService.login(req.user);
      }
    
      // Alternativamente, implementar la lógica de inicio de sesión directamente:
      @Post('login-basic')
      async loginBasic(@Body() body: { email: string; password: string }) {
        const user = await this.authService.validateUser(body.email, body.password);
        if (!user) {
          throw new UnauthorizedException('Credenciales inválidas');
        }
        return this.authService.login(user);
      }
    }
    ```
    
    -   **LocalAuthGuard** utilizaría una LocalStrategy para validar las credenciales mediante Passport.
7.  **Protegiendo rutas**
    
    Use el **JwtAuthGuard**:
    
    ```
    // src/auth/jwt-auth.guard.ts
    import { Injectable } from '@nestjs/common';
    import { AuthGuard } from '@nestjs/passport';
    
    @Injectable()
    export class JwtAuthGuard extends AuthGuard('jwt') {}
    ```
    
    Aplique a controladores o rutas:
    
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
    
8.  **Tokens de actualización (opcional)**
    
    -   Emita un token de actualización (caducidad más larga) y guárdelo (por ejemplo, en la base de datos o como cookie solo para HTTP).
        
    -   Cree un endpoint separado para emitir un nuevo token de acceso cuando el token de acceso expire.
        
    -   Verifique la validez del token de actualización (por ejemplo, compare el token almacenado o una versión hashed).
        
    -   Los detalles de la implementación varían: considere las mejores prácticas de seguridad (rotar tokens, revocar al cerrar sesión).
        
```

Iniciar sesión social mediante OAuth2 permite a los usuarios autenticarse con proveedores de terceros (Google, GitHub, Facebook, etc.) sin crear una contraseña separada para tu servicio.

Bajo el flujo de Código de Autorización, el usuario es redirigido a la pantalla de consentimiento del proveedor. Después de otorgar permiso, el proveedor redirige de vuelta con un código temporal. El backend intercambia este código por tokens de acceso (y opcionalmente de refresco), obtiene el perfil del usuario, y luego puedes enlazar o crear un registro de usuario local. Finalmente, típicamente emites tu propio JWT (o sesión) para que el cliente pueda llamar a tus API seguras.

Mantener los IDs/secretos de cliente de OAuth en variables de entorno (a través de `ConfigService`) asegura seguridad y flexibilidad. Así es como funciona:

-   **Flujo de Código de Autorización OAuth2**: Redirigir al usuario a la pantalla de consentimiento del proveedor. El proveedor redirige de vuelta con un código. El backend intercambia código por tokens y recupera información del usuario.
    
-   En el lado del servidor (NestJS) utilizas estrategias Passport (por ejemplo, `passport-google-oauth20`, `passport-github2`).
    
-   Después de obtener el perfil del usuario del proveedor, buscas o creas un registro de usuario local correspondiente, luego emites tu propio JWT o sesión.
    
-   Mantén los secretos (ID/clave secreta de cliente) en variables de entorno y cárgalos a través de `ConfigService`.
    

#### Así es como se usa:

1.  **Instalar dependencias**
    
    ```
     npm install @nestjs/passport passport passport-google-oauth20
     # o passport-facebook, passport-github2, etc.
    ```
    
2.  **Configuración**
    
    Añade credenciales OAuth al entorno y `ConfigModule`:
    
    ```
     GOOGLE_CLIENT_ID=tu-google-client-id
     GOOGLE_CLIENT_SECRET=tu-google-client-secret
     GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback
    ```
    
3.  **Estrategia OAuth**
    
    Ejemplo: Google
    
    ```typescript
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
         // Delegar a AuthService para encontrar o crear un usuario local
         const user = await this.authService.validateOAuthLogin('google', id, email, displayName);
         done(null, user);
       }
     }
    ```
    
    En `AuthService`:
    
    ```typescript
     // src/auth/auth.service.ts (añadir método)
     async validateOAuthLogin(provider: string, providerId: string, email: string, name?: string) {
       // Encontrar usuario existente por proveedor+providerId o email
       let user = await this.usersService.findByProvider(provider, providerId);
       if (!user) {
         // Opcionalmente verificar por email: si existe, enlazar cuentas; de lo contrario, crear nuevo
         user = await this.usersService.createOAuthUser({ provider, providerId, email, name });
       }
       // Emitir JWT o devolver objeto usuario; aquí devolvemos carga mínima para el inicio de sesión
       return user;
     }
    ```
    
4.  **Endpoints de AuthController**
    
    ```typescript
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
         // Inicia flujo de OAuth2 Google
       }
    
       @Get('google/callback')
       @UseGuards(AuthGuard('google'))
       async googleAuthRedirect(@Req() req) {
         // Google redirige aquí después del consentimiento; req.user es establecido por GoogleStrategy.validate
         const user = req.user;
         // Emitir JWT o establecer una cookie, luego redirigir o devolver token
         const jwt = await this.authService.login(user);
         // Por ejemplo, redirigir con token como query, o establecer cookie:
         // res.redirect(`http://frontend-app.com?token=${jwt.access_token}`);
         return { access_token: jwt.access_token };
       }
     }
    ```
    
    -   El primer endpoint (`/auth/google`) desencadena la redirección a Google.
        
    -   El endpoint de callback maneja la respuesta, luego emite tu JWT.
        
5.  **Sesión vs. Sin estado**
    
    -   Muchos ejemplos usan sesiones y soporte de sesión de `@nestjs/passport`, pero para API a menudo omites sesiones: Passport aún invoca `validate`, retorna usuario, y emites JWT inmediatamente.
        
    -   Asegúrate de desactivar sesiones en el registro de `PassportModule`: `PassportModule.register({ session: false })`.
        
6.  **Múltiples Proveedores**
    
    -   Repite la configuración de estrategia para cada proveedor (por ejemplo, GitHubStrategy).
        
    -   En `validateOAuthLogin`, maneja el parámetro `provider` para distinguir la lógica.
        
    -   Puedes almacenar en tu entidad de usuario campos como `googleId`, `githubId`, etc., o una tabla separada para cuentas OAuth.
        
7.  **Protección de rutas post-inicio de sesión**
    
    -   Los clientes usan el JWT emitido en `Authorization: Bearer <token>` para acceder a endpoints protegidos vía `JwtAuthGuard`.
        
    -   Si prefieres sesiones/cookies, configura Nest para usar sesiones y las características de sesión de Passport, pero para SPAs o clientes móviles, el JWT es común.
        
8.  **Consideraciones de front-end**
    
    -   Las URI de redirección deben coincidir con las configuradas en la consola del proveedor OAuth.
        
    -   Después de recibir el JWT, almacénalo de forma segura (por ejemplo, cookie HTTP-only o almacenamiento seguro en cliente).
        
    -   Manejar la caducidad del token: posiblemente combinar tokens de refresco de OAuth o tu propio flujo de token de refresco.


## Conclusión y Recursos Adicionales

### Resumen

Hemos recorrido aspectos clave para construir una aplicación NestJS: sus patrones arquitectónicos, bloques de construcción fundamentales (módulos, controladores, proveedores), inyección de dependencias, enrutamiento y middleware, ciclo de vida de la solicitud con pipes, guards, filtros de excepción, interceptores, opciones de integración de base de datos (TypeORM, Mongoose, Prisma), gestión de configuración, estrategias de autenticación (JWT, OAuth2) y estrategias para migrar aplicaciones existentes.

NestJS proporciona un framework estructurado, orientado a TypeScript, que acelera el desarrollo de backends escalables y mantenibles. Al aprovechar su sistema de módulos y las integraciones integradas, se obtiene coherencia, capacidad de prueba y una clara separación de responsabilidades desde el principio.

Ya sea que elija una base de datos relacional a través de TypeORM, un almacenamiento de documentos con Mongoose, o el cliente con tipo seguro de Prisma, puede integrar estos en el contenedor DI y módulo de configuración de Nest. Los flujos de autenticación, tanto basados en JWT como de inicio de sesión social, se integran naturalmente con la integración de Passport de Nest.

En general, NestJS es adecuado para APIs, microservicios, aplicaciones en tiempo real y backends empresariales donde la mantenibilidad y la experiencia del desarrollador son importantes.

### Documentación Oficial y Enlaces de la Comunidad

-   **Documentación Oficial de NestJS**: Guía completa y referencia de API para todas las funciones principales.
    
    -   https://docs.nestjs.com
-   **Repositorio de GitHub**: Código fuente, seguimiento de problemas y contribuciones de la comunidad.
    
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

