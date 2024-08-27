---
title: Cómo Crear Operaciones CRUD con .NET Core – Un Manual de API de Todo
date: 2024-08-27T15:55:01.834Z
author: Isaiah Clifford Opoku
authorURL: https://www.freecodecamp.org/news/author/Clifftech/
originalURL: https://www.freecodecamp.org/news/build-crud-operations-with-dotnet-core-handbook/
posteditor: ""
proofreader: ""
---

Bienvenido a esta guía completa sobre cómo crear operaciones CRUD con .NET Core. Utilizaremos una API de Todo como nuestro ejemplo práctico para que puedas obtener experiencia práctica mientras aprendes.

<!-- more -->

A lo largo de este tutorial, aprenderás cómo crear, leer, actualizar y eliminar elementos de Todo, y cómo aprovechar Entity Framework Core para interactuar con una base de datos.

## Tabla de Contenidos

-   [Requisitos Previos][1]
-   [Cómo Mejorar tu Experiencia de Desarrollo con Extensiones de Visual Studio Code][2]
-   [Resultados de Aprendizaje][3]
-   [¿Qué es .NET Core?][4]
-   [.NET Core vs .NET Framework][5]
-   [Paso 1: Configura tu Directorio de Proyecto][6]
-   [Paso 2: Establece tu Estructura de Proyecto][7]
-   [Paso 3: Crea el Modelo de Todo][8]
-   [Paso 4: Configura el Contexto de la Base de Datos][9]
-   [Paso 5: Define los Objetos de Transferencia de Datos (DTOs)][10]
-   [Paso 6: Implementa el Mapeo de Objetos para la API de Todo][11]
-   [Paso 7: Implementa un Middleware de Manejo Global de Excepciones][12]
-   [Paso 8: Implementa la Capa de Servicio y la Interfaz de Servicio][13]
-   [Paso 9: Implementa el Método CreateTodoAsync en la Clase de Servicio][14]
-   [Paso 10: Implementa el Método GetAllAsync en la Clase de Servicio][15]
-   [Paso 11: Crea la Clase TodoController][16]
-   [Paso 12: Implementa el Método CreateTodoAsync en la Clase TodoController][17]
-   [Paso 13: Implementa las Migraciones y Actualiza la Base de Datos][18]
-   [Paso 14: Verifica tu API con Postman][19]
-   [Paso 15: Recupera Todos los Elementos de Todo][20]
-   [Paso 16: Implementa el Método GetByIdAsync][21]
-   [Paso 17: Implementa el Método UpdateTodoAsync][22]
-   [Paso 18: Implementa el Método DeleteTodoAsync][23]
-   [Paso 19: Prueba tus Endpoints de API con Postman][24]
-   [Conclusión][25]

Antes de sumergirnos, asegúrate de tener los requisitos necesarios.

## Requisitos Previos

Antes de empezar, asegúrate de tener las herramientas necesarias instaladas en tu máquina. Aquí están los enlaces de descarga:

-   [.NET SDK][26]
-   [Visual Studio Code][27]
-   [Visual Studio 2019][28]
-   [Postman][29]
-   [SQLServer][30]

Después de instalar el SDK de .NET, es importante verificar su instalación y comprobar la versión. Para este tutorial, utilizaremos .NET 8.0.

Para comprobar la versión del SDK de .NET instalada en tu máquina, abre la terminal y ejecuta el siguiente comando:

```
dotnet --version
```

Si el SDK de .NET está instalado correctamente, el número de versión se mostrará en la terminal:

```
8.0
```

Si ves un número de versión diferente, asegúrate de tener .NET 8.0 instalado en tu máquina.

## Cómo Mejorar tu Experiencia de Desarrollo con Extensiones de Visual Studio Code

Visual Studio Code, un editor de código ligero y de código abierto, es una excelente herramienta para crear aplicaciones .NET Core. Y puedes mejorar aún más su funcionalidad con extensiones que agilizan el proceso de desarrollo.

Aquí hay dos extensiones recomendadas para el desarrollo de .NET Core:

-   [C# para Visual Studio Code][31]
-   [Autocompletado de Espacios de Nombres en C#][32]

Para instalar estas extensiones, sigue estos pasos:

1.  Abre Visual Studio Code.
2.  Haz clic en el ícono de Extensiones en la Barra de Actividad en el lado de la ventana para abrir la vista de Extensiones.
3.  En la barra de búsqueda, escribe el nombre de la extensión.
4.  En los resultados de la búsqueda, localiza la extensión correcta y haz clic en el botón Instalar.

Así es como se ve la vista de Extensiones en Visual Studio Code:

-   Extensión Devkit de C# para Visual Studio Code ![Vista de Extensiones para Devkit](https://www.freecodecamp.org/news/content/images/2024/05/DevKIt.png)
    
-   Extensión de Autocompletado de Espacios de Nombres para Visual Studio Code ![Vista de Extensiones para Autocompletado de Espacios de Nombres](https://www.freecodecamp.org/news/content/images/2024/05/NameSpace.png)
    

En las imágenes anteriores, las extensiones ya están instaladas. Si no están instaladas en tu sistema, puedes hacerlo haciendo clic en el botón de Instalar.

Con estas herramientas esenciales en su lugar, ahora estamos completamente equipados para comenzar a construir nuestra API de Todo.

## Resultados de Aprendizaje

Al final de este tutorial, habrás aprendido cómo:

-   Configurar un nuevo proyecto .NET Core usando la CLI de .NET Core
-   Definir un modelo para un elemento de Todo
-   Crear un contexto de base de datos para interactuar con la base de datos
-   Implementar enrutamiento y controladores para la API de Todo
-   Crear una clase de servicio para manejar la lógica empresarial
-   Implementar operaciones CRUD para la API de Todo
-   Manejar excepciones globalmente usando middleware
-   Probar los endpoints de la API usando Postman

Si eres nuevo en C# y .NET, no te preocupes. Explicaré todos los conceptos en profundidad para asegurarme de que los entiendas. Para información adicional, puedes consultar la [documentación de C#][33].

Antes de que nos sumerjamos en el código, aclaremos qué es .NET Core.

## ¿Qué es .NET Core?

.NET Core, también conocido como ASP.NET, es un framework multiplataforma que facilita la creación de aplicaciones web, APIs y servicios. Es un framework gratuito, de código abierto y de alto rendimiento, diseñado para crear aplicaciones modernas, basadas en la nube y conectadas a Internet. Es el sucesor del .NET Framework.



## .NET Core vs .NET Framework

.NET Core y .NET Framework son dos frameworks distintos utilizados para el desarrollo de aplicaciones. .NET Core es un framework multiplataforma que opera en Windows, macOS y Linux. Es un framework modular, de código abierto y de uso gratuito, diseñado para construir aplicaciones modernas, basadas en la nube y conectadas a internet.

Por otro lado, `.NET Framework` es un `framework solo para Windows` utilizado para construir `aplicaciones de escritorio`, `aplicaciones web` y servicios de Windows. A diferencia de .NET Core, no es de código abierto ni de uso gratuito. Sin embargo, es un framework maduro que ha existido durante mucho tiempo.

Con una comprensión fundamental de .NET Core y .NET Framework, estamos listos para sumergirnos en la construcción de nuestra API de Todo.

En este tutorial, aprovecharemos .NET Core para construir una API de Todo que realice operaciones CRUD. Nuestra travesía nos llevará a través de la creación de un nuevo proyecto, la definición del modelo Todo, la configuración de la base de datos y la implementación de las operaciones CRUD.

Comencemos con Visual Studio Code. En este tutorial, utilizaremos la CLI de .NET Core para crear nuestro proyecto y construir nuestra API. Si prefieres Visual Studio 2019, puedes seguir usando ese IDE también, pero utilizaremos Visual Studio Code para este artículo.

## Paso 1: Configura tu Directorio de Proyecto

Primero, navega al directorio donde deseas alojar tu proyecto. Esto podría ser cualquier carpeta en tu sistema donde te gustaría almacenar tu código.

Una vez que estés en el directorio deseado, abre la terminal. Puedes hacerlo en Visual Studio Code yendo a `View -> Terminal` o presionando Ctrl + un acento grave.

Con la terminal abierta, escribe el siguiente comando:

```
dotnet new webapi -n TodoAPI
```

Este comando instruye a la CLI de .NET Core para crear un nuevo proyecto de API web llamado `TodoAPI`. La opción `-n` especifica el nombre del proyecto.

![Creando una nueva API con la CLI de .NET Core](https://www.freecodecamp.org/news/content/images/2024/05/TerminalCreatingNewAPI.png)

La imagen anterior ilustra cómo ejecutar el comando en la terminal.

Después de presionar la tecla 'Enter', la CLI de .NET Core comenzará a generar los archivos necesarios para tu proyecto.

![Estructura de carpetas del proyecto .NET](https://www.freecodecamp.org/news/content/images/2024/05/ProjectFile.png)

La imagen anterior muestra la estructura del proyecto generada. Incluye todos los archivos y directorios necesarios para un proyecto de API web de .NET Core.

Con los archivos y carpetas del proyecto generados por la CLI de .NET Core, tomémonos un momento para entender el propósito de cada archivo.

-   `appsettings.json`: Este archivo alberga la configuración de la aplicación. Es el lugar de referencia para almacenar cadenas de conexión, configuraciones de registro y otros ajustes.
    
-   `Program.cs`: Sirviendo como el punto de entrada de la aplicación, este archivo es responsable de configurar el host y los servicios.
    
-   `TodoAPI.csproj`: Este archivo de proyecto contiene metadatos sobre tu proyecto, incluidas referencias a los paquetes y bibliotecas necesarios.
    
-   `appsettings.Development.json`: Este archivo está diseñado para configuraciones específicas del entorno de desarrollo. Es ideal para almacenar configuraciones específicas del entorno. Pero para el propósito de este tutorial, usaremos en su lugar el archivo `appsettings.json`.
    
-   `TodoAPI.http`: Este archivo se usa típicamente para probar los endpoints de la API utilizando la extensión REST Client en Visual Studio Code, ya que contiene solicitudes de muestra para los endpoints de la API. Sin embargo, en este tutorial, utilizaremos Postman para las pruebas, por lo que no necesitamos este archivo y procederemos a eliminarlo.
    

## Paso 2: Establece la Estructura de tu Proyecto

Habiendo configurado nuestro directorio de proyecto, es hora de trazar la estructura de nuestro proyecto. Crearemos varias carpetas, cada una con un propósito específico:

![estructura de carpetas del proyecto](https://www.freecodecamp.org/news/content/images/2024/05/ProjectFolder.png)

-   `AppDataContext`: Esta carpeta contendrá el contexto de la base de datos, que es responsable de interactuar con la base de datos.
-   `Contracts`: Esta carpeta albergará nuestros Data Transfer Objects (DTOs), que se utilizan para dar forma a los datos enviados entre el cliente y el servidor.
-   `Models`: Esta carpeta contendrá el modelo Todo, que representa la estructura de un elemento Todo.
-   `Controllers`: Esta carpeta albergará el TodoController, que maneja las solicitudes HTTP entrantes y envía respuestas.
-   `Interfaces`: Esta carpeta contendrá la interfaz IService, que define el contrato para nuestra clase de servicio.
-   `Services`: Esta carpeta albergará la clase Service, que implementa la interfaz IService y contiene la lógica de negocio de nuestra aplicación.
-   `Mapping`: Esta carpeta contendrá el perfil de mapeo, que se utiliza para mapear propiedades entre diferentes objetos.
-   `Middleware`: Esta carpeta albergará el middleware de excepciones, que maneja las excepciones globalmente en toda nuestra aplicación.

_¡Felicidades!_ Has configurado exitosamente tu directorio de proyecto y establecido la estructura del proyecto. En la siguiente sección, profundizaremos en la definición del modelo Todo.

### Cómo Ajustar el Archivo Program.cs para ControllerBase

Antes de sumergirnos en los cambios, hablemos brevemente sobre qué es una API mínima.

### Entendiendo las APIs Mínimas

En .NET 6, Microsoft introdujo una nueva característica conocida como APIs Mínimas. Estas APIs son más simples y ligeras que las APIs tradicionales. Te permiten definir tus rutas y puntos finales de la API utilizando un solo archivo, sin la necesidad de controladores o clases de inicio. Este enfoque facilita la creación de APIs pequeñas y enfocadas que son rápidas de construir y fáciles de mantener.

Sin embargo, con el propósito de este tutorial, nos apegaremos a la estructura tradicional de la API. Procedamos con los cambios necesarios en el archivo `Program.cs`.

![Vista inicial de Program.cs](https://www.freecodecamp.org/news/content/images/2024/05/Program.cs.png)

La imagen arriba muestra el estado inicial del archivo `Program.cs` cuando creas un nuevo proyecto de API web. Para adaptarlo para usar con ControllerBase, necesitamos remover algunos códigos y añadir nuevos códigos.

Comienza eliminando todo en el archivo `Program.cs` y reemplazándolo con el siguiente código:

```
// program.cs
var builder = WebApplication.CreateBuilder(args);

// Añadir servicios al contenedor.
builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configurar el canal de solicitud HTTP.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
```

Ahora podemos proceder al siguiente paso, donde definiremos el modelo Todo.

## Paso 3: Crear el Modelo Todo

Antes de sumergirnos en la creación de nuestro modelo Todo, es importante saber qué hace un modelo en `.NET CORE`. Piensa en un `modelo` como un `plano` para el tipo de datos con los que nuestra aplicación trabajará. Nos ayuda a organizar y gestionar estos datos de manera eficiente.

Para nuestra aplicación de lista de tareas, necesitamos una imagen clara de cómo se ve cada ítem Todo. Esto significa decidir cosas como nombres, descripciones, si está hecho o no, plazos, prioridades y cuándo fue hecho o cambiado. Al ser claros sobre estos detalles, podemos manejar y mostrar nuestros ítems Todo de manera efectiva.

### Conocer el Modelo Todo

Ahora, hagamos nuestra idea realidad creando el modelo `Todo`. Este modelo es como una plantilla para nuestros ítems Todo, asegurándose de que tengan todas las piezas correctas.

Creemos un nuevo archivo llamado `Todo.cs` en la carpeta `Models` y llenémoslo con este código:

```
// Models/Todo.cs
using System.ComponentModel.DataAnnotations;

namespace TodoAPI.Models
{
    public class Todo
    {
        [Key]
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public bool IsComplete { get; set; }
        public DateTime DueDate { get; set; }
        public int Priority { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public Todo()
        {
            IsComplete = false;
        }
    }
}
```

Esto es lo que significa cada parte del modelo `Todo`:

-   **Id**: Un número especial que hace cada ítem Todo único.
-   **Title**: El nombre del ítem Todo.
-   **Description**: Detalles adicionales sobre el ítem Todo.
-   **IsComplete**: Si el ítem Todo está completado o no.
-   **DueDate**: La fecha para la cual se debe completar el ítem Todo.
-   **Priority**: Qué tan importante es el ítem Todo.
-   **CreatedAt** y **UpdatedAt**: Cuándo fue creado y cuándo fue modificado por última vez el ítem Todo.

La etiqueta `[Key]` nos dice que `Id` es la forma principal de identificar cada ítem Todo en nuestra base de datos.

Al tener un modelo `Todo` claro, podemos mantener fácilmente el seguimiento y la visualización de nuestros ítems Todo de la mejor manera posible.

En ASP.NET Core, los modelos pueden ser utilizados para representar una variedad de cosas. Un uso de caso es el manejo de errores. Cuando ocurre un error en nuestra aplicación, podemos crear un modelo para ese error y devolverlo al cliente.

Creamos un modelo específicamente para el manejo de errores en nuestra aplicación.

```
// Models/ErrorResponse.cs

namespace TodoAPI.Models
{
       public class ErrorResponse
 {
     public string Title { get; set; }
     public int StatusCode { get; set; }
     public string Message { get; set; }
 }
}
```

Este modelo ErrorResponse se usará para devolver mensajes de error al cliente cuando ocurra un error en nuestra aplicación. Incluye un título para el error, un mensaje y un código de estado, proporcionando al cliente información útil sobre lo que salió mal.

Definamos otro modelo para gestionar nuestra cadena de conexión a la base de datos.

```
// Models/DbSettings.cs 

namespace TodoAPI.Models
{
    public class DbSettings
    {
        public string ConnectionString { get; set; }
    }
}
```

El modelo `DbSettings` está diseñado para encapsular la cadena de conexión para nuestra base de datos. Contiene una única propiedad, `ConnectionString`, que almacenará el valor real de la cadena de conexión.

Con nuestro modelo `Todo` en su lugar, ahora estamos listos para proceder con la configuración del contexto de la base de datos.

Antes de comenzar a configurar nuestra base de datos, necesitamos instalar los paquetes necesarios para nuestro proyecto.

### Instalación de Paquetes

Para configurar nuestro proyecto, necesitamos instalar varios paquetes. Usaremos la CLI de dotnet para esta tarea.

```
ls
```

Este comando listará todos los archivos y carpetas en tu directorio actual. La imagen a continuación muestra la salida de la terminal después de ejecutar el comando `ls`.

![Terminal ls file](https://www.freecodecamp.org/news/content/images/2024/05/ls-terminal.png)

Si la salida de tu terminal coincide con la imagen anterior, estás en el directorio correcto para instalar los paquetes.

Ahora, vamos a instalar los paquetes:

```
dotnet add package Microsoft.EntityFrameworkCore --version 8.0.0 
dotnet add package Microsoft.EntityFrameworkCore.Design --version 8.0.0
dotnet add package Microsoft.EntityFrameworkCore.SqlServer --version 8.0.0
dotnet add package AutoMapper --version 13.0.1
```

Aquí tienes un breve resumen de lo que hacen estos paquetes:

-   `Microsoft.EntityFrameworkCore`: Proporciona la funcionalidad principal de Entity Framework Core, permitiéndonos interactuar con nuestra base de datos.
-   `Microsoft.EntityFrameworkCore.Design`: Incluye componentes de tiempo de diseño para Entity Framework Core, como migraciones.
-   `Microsoft.EntityFrameworkCore.SqlServer`: Nos permite usar SQL Server como nuestro proveedor de base de datos.
-   `AutoMapper`: Simplifica la mapeo de objetos a objetos, facilitando el mapeo de propiedades entre diferentes objetos.

**Nota**: Asegúrate de instalar las mismas versiones de los paquetes que se muestran arriba para evitar cualquier problema de compatibilidad.

Para confirmar que todos los paquetes se han instalado correctamente, navega al archivo `TodoAPI.csproj` ubicado en el directorio raíz de tu proyecto. Los paquetes instalados deberían estar listados bajo la sección `ItemGroup`.

```
<Project Sdk="Microsoft.NET.Sdk.Web">

  <PropertyGroup>
    <TargetFramework>net8.0</TargetFramework>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
    <InvariantGlobalization>true</InvariantGlobalization>
  </PropertyGroup>

  <ItemGroup>
    <PackageReference Include="AutoMapper" Version="13.0.1" />
    <PackageReference Include="Microsoft.AspNetCore.OpenApi" Version="8.0.0" />
    <PackageReference Include="Microsoft.EntityFrameworkCore" Version="8.0.0" />
    <PackageReference Include="Microsoft.EntityFrameworkCore.Design" Version="8.0.0">
      <IncludeAssets>runtime; build; native; contentfiles; analyzers; buildtransitive</IncludeAssets>
      <PrivateAssets>all</PrivateAssets>
    </PackageReference>
    <PackageReference Include="Microsoft.EntityFrameworkCore.SqlServer" Version="8.0.0" />
    <PackageReference Include="Swashbuckle.AspNetCore" Version="6.4.0" />
  </ItemGroup>

</Project>
```

El archivo `TodoAPI.csproj` anterior muestra los paquetes instalados listados bajo la sección `ItemGroup`. Si tu archivo `TodoAPI.csproj` refleja lo mismo, confirma que los paquetes se han instalado correctamente.

Con los paquetes necesarios instalados, ahora estamos listos para configurar el contexto de base de datos para nuestra API de Tareas (Todo API).

## Paso 4: Configurar el Contexto de Base de Datos

En ASP.NET Core, el contexto de base de datos es un componente crucial que gestiona las interacciones con la base de datos. Es responsable de tareas como establecer una conexión con la base de datos, consultar datos y guardar cambios.

Para permitir que nuestra `API de Tareas` interactúe con la base de datos, necesitamos crear un contexto de base de datos.

Vamos a crear un nuevo archivo llamado `TodoDbContext` en la carpeta `AppDataContext` y poblarlo con el siguiente código:

```
// AppDataContext/TodoDbContext.cs

using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using TodoAPI.Models;

namespace TodoAPI.AppDataContext
{

    // La clase TodoDbContext hereda de DbContext
     public class TodoDbContext : DbContext
     {

        // Campo DbSettings para almacenar la cadena de conexión
         private readonly DbSettings _dbsettings;

            // Constructor para inyectar el modelo DbSettings
         public TodoDbContext(IOptions<DbSettings> dbSettings)
         {
             _dbsettings = dbSettings.Value;
         }


        // Propiedad DbSet para representar la tabla Todo
         public DbSet<Todo> Todos { get; set; }

         // Configurando el proveedor de base de datos y la cadena de conexión

         protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
         {
             optionsBuilder.UseSqlServer(_dbsettings.ConnectionString);
         }

            // Configurando el modelo para la entidad Todo
         protected override void OnModelCreating(ModelBuilder modelBuilder)
         {
             modelBuilder.Entity<Todo>()
                 .ToTable("TodoAPI")
                 .HasKey(x => x.id);
         }
     }
}
```

Aquí tienes un desglose de la clase `TodoDbContext`:

-   **`TodoDbContext`**: Esta clase, que hereda de `DbContext` (una parte de Entity Framework Core), es la clase principal que interactúa con la base de datos.
-   **`_dbsettings`**: Este campo privado almacena la cadena de conexión para nuestra base de datos. Inyectamos el modelo `DbSettings`, que creamos anteriormente para gestionar la cadena de conexión, en la clase `TodoDbContext`.
-   **`Todos`**: Esta propiedad representa la tabla `Todo` en nuestra base de datos. Es un `DbSet` de objetos `Todo`, lo que nos permite consultar y guardar instancias de `Todo`.
-   **`OnConfiguring`**: Este método configura el proveedor de base de datos y la cadena de conexión. Estamos usando SQL Server como nuestro proveedor de base de datos, y la cadena de conexión se recupera del modelo `DbSettings`.
-   **`OnModelCreating`**: Este método configura el modelo para la entidad `Todo`. Especificamos el nombre de la tabla, la clave primaria y otras configuraciones para la entidad `Todo`.


Aquí tienes la traducción al español manteniendo el formato y la disposición original en markdown:

```
// Program.cs


using TodoAPI.AppDataContext;
using TodoAPI.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();



// Agrega Esto en el archivo Program.cs
builder.Services.Configure<DbSettings>(builder.Configuration.GetSection("DbSettings")); // Agrega esta línea
builder.Services.AddSingleton<TodoDbContext>(); // Agrega esta línea




var app = builder.Build();

// Agrega esta línea

{
    using var scope = app.Services.CreateScope(); // Agrega esta línea
    var context = scope.ServiceProvider; // Agrega esta línea
}


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseExceptionHandler();
app.UseAuthorization();

app.MapControllers();

app.Run();
```

En el fragmento de código anterior, estamos haciendo dos cosas:

-   Configurar la configuración de la base de datos vinculando la sección `DbSettings` del archivo `appsettings.json` a la clase `DbSettings`. Esto nos permite acceder a la cadena de conexión de la base de datos en nuestra aplicación.
-   Registrar el `TodoDbContext` en el contenedor de DI como un servicio singleton. Esto significa que se creará y compartirá una sola instancia de `TodoDbContext` en toda la aplicación.

Con el contexto de base de datos registrado, ahora podemos usarlo para realizar operaciones CRUD en nuestros elementos de Todo.

Ahora comprobemos si todo funciona correctamente ejecutando la aplicación.

```

dotnet run
```

Si ves la siguiente salida, significa que tu aplicación se está ejecutando con éxito:

```

info: Microsoft.Hosting.Lifetime[14]
      Now listening on: http://localhost:5086
info: Microsoft.Hosting.Lifetime[0]
      Application started. Press Ctrl+C to shut down.
info: Microsoft.Hosting.Lifetime[0]
      Hosting environment: Development
info: Microsoft.Hosting.Lifetime[0]
Content root path: E:\Todo\TodoAPI
```

**Nota**: Si encuentras algún error, asegúrate de haber seguido todos los pasos correctamente y que los paquetes necesarios se hayan instalado correctamente. Si ves algunas advertencias, puedes ignorarlas por ahora.

Con la clase `TodoDbContext` ahora configurada, estamos listos para definir los Contratos para nuestra aplicación.

## Paso 5: Definir Data Transfer Objects (DTOs)

En el contexto del desarrollo .NET, un Data Transfer Object (DTO) es un objeto simple que transporta datos entre procesos. A menudo se usa junto con una capa de servicio para dar forma a los datos enviados entre el cliente y el servidor.

Para nuestra API de Todo, definiremos dos DTOs: `CreateTodoRequest` y `UpdateTodoRequest`. Estos DTOs nos ayudarán a hacer cumplir la estructura y validación de los datos enviados a nuestra API.

Navega a la carpeta `Contracts` y crea dos nuevos archivos: `CreateTodoRequest.cs` y `UpdateTodoRequest.cs`.

### El archivo `CreateTodoRequest`

El DTO `CreateTodoRequest` definirá la estructura y las reglas de validación para crear un nuevo elemento Todo. Agrega el siguiente código al archivo `CreateTodoRequest.cs`:

```
public class CreateTodoRequest
{
    [Required]
    [StringLength(100)]
    public string Title { get; set; }

    [StringLength(500)]
    public string Description { get; set; }

    [Required]
    public DateTime DueDate { get; set; }

    [Range(1, 5)]
    public int Priority { get; set; }
}
```

En este DTO, hemos definido propiedades para `Title`, `Description`, `DueDate` y `Priority`. También hemos agregado atributos de validación como `[Required]`, `[StringLength]` y `[Range]` para imponer ciertas reglas en estas propiedades.

### El archivo `UpdateTodoRequest`

El DTO `UpdateTodoRequest` definirá la estructura y las reglas de validación para actualizar un elemento Todo existente. Agrega el siguiente código al archivo `UpdateTodoRequest.cs`:

```
public class UpdateTodoRequest
{
    [StringLength(100)]
    public string Title { get; set; }

    [StringLength(500)]
    public string Description { get; set; }

    public bool? IsComplete { get; set; }

    public DateTime? DueDate { get; set; }

    [Range(1, 5)]
    public int? Priority { get; set; }

    public UpdateTodoRequest()
    {
        IsComplete = false;
    }
}
```

En este DTO, hemos definido propiedades para `Title`, `Description`, `IsComplete`, `DueDate` y `Priority`. La propiedad `IsComplete` es anulable, lo que significa que se puede establecer en `null` si no se proporciona. También hemos agregado atributos de validación como `[StringLength]` y `[Range]` para imponer ciertas reglas en estas propiedades.

Con estos DTOs en su lugar, ahora estamos listos para implementar la capa de servicio para nuestra API de Todo.

Ahora prueba la aplicación y verifica si hay errores.

```

 dotnet  build
```

Si ves la siguiente salida, significa que tu aplicación se está ejecutando con éxito:

```
MSBuild version 17.8.3+195e7f5a3 for .NET
  Determining projects to restore...
  All projects are up-to-date for restore.
  TodoAPI -> E:\Todo\TodoAPI\bin\Debug\net8.0\TodoAPI.dll

Build succeeded.
    0 Warning(s)
    0 Error(s)

Time Elapsed 00:00:00.94
```

**Nota**: Si encuentras algún error, asegúrate de haber seguido todos los pasos correctamente y que los paquetes necesarios se hayan instalado correctamente. Si ves algunas advertencias, puedes ignorarlas por ahora.


## Paso 6: Implementar Mapeo de Objetos para la API de Todo

Después de haber definido los DTOs para nuestra API de Todo, el siguiente paso es implementar el mapeo de objetos. Este proceso nos permite convertir entre los DTOs y el modelo de Todo, un aspecto crítico de la transformación de datos en nuestra aplicación.

Para agilizar este proceso, utilizaremos la biblioteca `AutoMapper`. AutoMapper es una biblioteca ampliamente utilizada que simplifica el mapeo de objeto a objeto, facilitando el mapeo de propiedades entre diferentes objetos.

Ya hemos instalado el paquete `AutoMapper` en nuestro proyecto. Ahora, en la carpeta `MappingProfiles`, crea un nuevo archivo llamado `AutoMapperProfile.cs` y agrega el siguiente código:

```
using AutoMapper;
using TodoAPI.Contracts;
using TodoAPI.Models;

namespace TodoAPI.MappingProfiles
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<CreateTodoRequest, Todo>()
                .ForMember(dest => dest.id, opt => opt.Ignore())
                .ForMember(dest => dest.CreatedAt, opt => opt.Ignore())
                .ForMember(dest => dest.UpdatedAt, opt => opt.Ignore());

            CreateMap<UpdateTodoRequest, Todo>()
                .ForMember(dest => dest.id, opt => opt.Ignore())
                .ForMember(dest => dest.CreatedAt, opt => opt.Ignore())
                .ForMember(dest => dest.UpdatedAt, opt => opt.Ignore());
        }
    }
}
```

Desglosemos la clase `AutoMapperProfile`:

- **AutoMapperProfile**: Esta clase, que hereda de `Profile` (una clase proporcionada por AutoMapper), nos permite definir configuraciones de mapeo.
- **CreateMap**: Este método crea un mapeo entre dos objetos. Aquí, estamos mapeando de `CreateTodoRequest` a `Todo` y de `UpdateTodoRequest` a `Todo`.
- **ForMember**: Este método configura el mapeo para una propiedad específica. Lo estamos utilizando para ignorar las propiedades `id`, `CreatedAt` y `UpdatedAt` al mapear desde los DTOs al modelo `Todo`.

Ahora agreguemos automapper al contenedor DI en el archivo `Program.cs`.

```csharp

// Program.cs

using TodoAPI.AppDataContext;
using TodoAPI.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Agregar esto en el archivo Program.cs
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());  // Agrega esta línea

// .....

var app = builder.Build();

// .....
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseExceptionHandler();
app.UseAuthorization();

app.MapControllers();

app.Run();
```

Con los perfiles de mapeo en su lugar, ahora podemos implementar la capa de servicio para nuestra API de Todo.

## Paso 7: Implementar Middleware global de manejo de excepciones

A medida que avanzamos con nuestra API de Todo, es crucial implementar un mecanismo para manejar excepciones globalmente. Esto asegura que cualquier excepción que ocurra durante la ejecución de nuestra aplicación sea capturada y manejada adecuadamente, proporcionando mensajes de error significativos al cliente.

.NET 8 introduce la interfaz `IExceptionHandler`, que simplifica el proceso de crear un manejador de excepciones personalizado. Este manejador capturará todas las excepciones que ocurran en nuestra aplicación y devolverá una respuesta de error consistente al cliente.

Vamos a crear un manejador de excepciones global en la carpeta `Middleware`. Crea un nuevo archivo llamado `GlobalExceptionHandler.cs` y agrega el siguiente código:

```csharp
// Middleware/GlobalExceptionHandler.cs

using System.Net;
using Microsoft.AspNetCore.Diagnostics;
using TodoAPI.Models;

namespace TodoAPI.Middleware
{
    public class GlobalExceptionHandler : IExceptionHandler
    {
        private readonly ILogger<GlobalExceptionHandler> _logger;

        public GlobalExceptionHandler(ILogger<GlobalExceptionHandler> logger)
        {
            _logger = logger;
        }

        public async ValueTask<bool> TryHandleAsync(
            HttpContext httpContext,
            Exception exception,
            CancellationToken cancellationToken)
        {
            _logger.LogError(
                $"An error occurred while processing your request: {exception.Message}");

            var errorResponse = new ErrorResponse
            {
                Message = exception.Message
            };

            switch (exception)
            {
                case BadHttpRequestException:
                    errorResponse.StatusCode = (int)HttpStatusCode.BadRequest;
                    errorResponse.Title = exception.GetType().Name;
                    break;

                default:
                    errorResponse.StatusCode = (int)HttpStatusCode.InternalServerError;
                    errorResponse.Title = "Internal Server Error";
                    break;
            }

            httpContext.Response.StatusCode = errorResponse.StatusCode;

            await httpContext
                .Response
                .WriteAsJsonAsync(errorResponse, cancellationToken);

            return true;
        }
    }
}
```

Aquí tienes un desglose de la clase `GlobalExceptionHandler`:

- **GlobalExceptionHandler**: Esta clase implementa la interfaz `IExceptionHandler`, habilitando el manejo global de excepciones en nuestra aplicación.
- **TryHandleAsync**: Este método se invoca cuando ocurre una excepción. Registra el mensaje de error, crea un objeto `ErrorResponse`, establece el código de estado y el título según el tipo de excepción, y devuelve una respuesta de error consistente al cliente.
- **ErrorResponse**: Esta clase representa la respuesta de error devuelta al cliente cuando ocurre una excepción. Contiene propiedades para el mensaje de error, el código de estado y el título.
- **BadHttpRequestException**: Este caso maneja excepciones del tipo `BadHttpRequestException` y establece el código de estado y el título en consecuencia.

```
// Program.cs

using TodoAPI.AppDataContext;
using TodoAPI.Interface;
using TodoAPI.Middleware;
using TodoAPI.Models;
using TodoAPI.Services;

var builder = WebApplication.CreateBuilder(args);



builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();



// ....



builder.Services.AddExceptionHandler<GlobalExceptionHandler>(); // Añade esta línea

builder.Services.AddProblemDetails();  // Añade esta línea

// Adición del inicio de sesión 
builder.Services.AddLogging();  // Añade esta línea



var app = builder.Build();


// ......


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection(); // Añade esta línea

app.UseExceptionHandler();
app.UseAuthorization();

app.MapControllers();

app.Run();


// ...
```

## Paso 8: Implementar la Capa de Servicios y la Interfaz de Servicio

En el desarrollo de .NET, la capa de servicios encapsula la lógica central del negocio de una aplicación. Sirve como un puente entre el controlador y la base de datos, asegurando una separación limpia de preocupaciones.

Primero, definamos una interfaz para nuestra capa de servicios.

```
// Interfaces/ITodoServices.cs 

using TodoAPI.Contracts;
using TodoAPI.Models;

namespace TodoAPI.Interface
{
     public interface ITodoServices
     {
         Task<IEnumerable<Todo>> GetAllAsync();
         Task<Todo> GetByIdAsync(Guid id);
         Task CreateTodoAsync(CreateTodoRequest request);
         Task UpdateTodoAsync(Guid id, UpdateTodoRequest request);
         Task DeleteTodoAsync(Guid id);
     }
}
```

A continuación se presenta una breve descripción de los métodos definidos en la interfaz `ITodoServices`:

-   `GetAllAsync`: Recupera todos los elementos Todo de la base de datos.
-   `GetByIdAsync`: Obtiene un elemento Todo específico por su `Id`.
-   `CreateTodoAsync`: Agrega un nuevo elemento Todo a la base de datos.
-   `UpdateTodoAsync`: Modifica un elemento Todo existente en la base de datos.
-   `DeleteTodoAsync`: Elimina un elemento Todo de la base de datos.

Ahora, creemos una clase de servicio que implemente estos métodos. Utilizaremos la Inyección de Dependencias para inyectar la interfaz `ITodoServices` en la clase de servicio, haciendo nuestro código más modular, comprobable y mantenible.

```
// Services/TodoServices.cs

using TodoAPI.Interface;

namespace TodoAPI.Services
{
    public class TodoServices : ITodoServices
    {

    }
}
```

En este punto, encontrarás un error porque no hemos implementado los métodos de la interfaz `ITodoServices` en la clase `TodoServices`.

La imagen a continuación muestra el mensaje de error que aparece cuando los métodos de la interfaz `ITodoServices` no están implementados en la clase `TodoServices`.

![Error en la clase TodoServices](https://www.freecodecamp.org/news/content/images/2024/05/InterfaceError.png)

Para resolver esto, pasa el cursor sobre `ITodoServices`, haz clic en el ícono de la bombilla que aparece y selecciona 'Implementar interfaz'. Esto generará automáticamente los métodos definidos en la interfaz `ITodoServices`.

La imagen a continuación muestra la opción 'Implementar interfaz' que aparece al pasar el cursor sobre `ITodoServices` en la clase `TodoServices`.

![Implementar la interfaz ITodoServices](https://www.freecodecamp.org/news/content/images/2024/05/QickFixt.png)

Después de implementar la interfaz, la clase `TodoServices` debería verse así:

```


// Services/TodoServices.cs
using TodoAPI.Contracts;
using TodoAPI.Interface;
using TodoAPI.Models;

namespace TodoAPI.Services
{
    public class TodoServices : ITodoServices
    {
        public Task CreateTodoAsync(CreateTodoRequest request)
        {
            throw new NotImplementedException();
        }

        public Task DeleteTodoAsync(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Todo>> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task<Todo> GetByIdAsync(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task UpdateTodoAsync(Guid id, UpdateTodoRequest request)
        {
            throw new NotImplementedException();
        }
    }
}
```

### Cómo Mejorar la Clase TodoServices con Inyección de Dependencias

Ahora, vamos a enriquecer nuestra clase `TodoServices` con algunas propiedades esenciales. Estas propiedades proporcionarán las herramientas necesarias para interactuar con la base de datos, registrar información y realizar mapeo de objetos.

En la parte superior de la clase `TodoServices`, agrega las siguientes propiedades:

```
// Services/TodoServices.cs

// ...

private readonly TodoDbContext _context;
private readonly ILogger<TodoServices> _logger;
private readonly IMapper _mapper;

// ...
```

A continuación se presenta una breve explicación de estas propiedades:

-   `_context`: Una instancia de la clase `TodoDbContext`, que nos permite interactuar con la base de datos.
-   `_logger`: Una instancia de la clase `ILogger`, que facilita el registro de información en toda nuestra aplicación.
-   `_mapper`: Una instancia de la clase `IMapper`, que nos permite realizar mapeo de objetos usando AutoMapper.

A continuación, actualizaremos el constructor de la clase `TodoServices` para inyectar estas dependencias:

```
// Services/TodoServices.cs
```

```markdown
public TodoServices(TodoDbContext context, ILogger<TodoServices> logger, IMapper mapper)
{
    _context = context;
    _logger = logger;
    _mapper = mapper;
}

// ...
```

Con estas dependencias inyectadas, ahora estamos listos para implementar los métodos definidos en la interfaz `ITodoServices`. Comenzaremos con el método `GetAllAsync` en la siguiente sección.

## Paso 9: Implementar el Método CreateTodoAsync en la Clase TodoServices

Ahora, vamos a implementar el método `CreateTodoAsync` en la clase `TodoServices`. Este método se encargará de la creación de nuevos ítems Todo en nuestra base de datos.

Navega a la clase `TodoServices` y agrega el siguiente código al método `CreateTodoAsync`:

```
// Services/TodoServices.cs

// ...

public async Task CreateTodoAsync(CreateTodoRequest request)
{
    try
    {
        var todo = _mapper.Map<Todo>(request);
        todo.CreatedAt = DateTime.UtcNow;
        _context.Todos.Add(todo);
        await _context.SaveChangesAsync();
    }
    catch (Exception ex)
    {
        _logger.LogError(ex, "Ocurrió un error mientras se creaba el ítem Todo.");
        throw new Exception("Ocurrió un error mientras se creaba el ítem Todo.");
    }
}

// ...
```

Aquí tienes un desglose del método `CreateTodoAsync`:

-   **Mapeo**: Usamos AutoMapper para convertir el objeto `CreateTodoRequest` en una entidad `Todo`.
-   **CreatedAt**: Establecemos la propiedad `CreatedAt` de la entidad `Todo` a la fecha y hora actual en UTC.
-   **Adición a la Base de Datos**: Agregamos la entidad `Todo` al DbSet `Todos` en nuestro contexto y guardamos los cambios de forma asincrónica.
-   **Manejo de Errores**: Capturamos cualquier excepción que pueda ocurrir durante el proceso, registramos el error, y lanzamos una nueva excepción con un mensaje descriptivo de error.

Con el método `CreateTodoAsync` implementado, ahora podemos crear nuevos ítems Todo en nuestra base de datos.

## Paso 10: Implementar el Método GetAllAsync en la Clase Service

A continuación, vamos a implementar el método `GetAllAsync` en la clase `TodoServices`. Este método recuperará todos los ítems Todo de la base de datos.

Navega a la clase `TodoServices` y agrega el siguiente código al método `GetAllAsync`:

```
// Services/TodoServices.cs

// ...

// Obtener todos los ítems TODO de la base de datos
public async Task<IEnumerable<Todo>> GetAllAsync()
{
    var todo = await _context.Todos.ToListAsync();
    if (todo == null)
    {
        throw new Exception("No se encontraron ítems Todo");
    }
    return todo;
}

// ...
```

Aquí tienes un desglose del método `GetAllAsync`:

-   **Recuperación de Ítems Todo**: Usamos el método `ToListAsync` de Entity Framework Core para obtener todos los ítems Todo de la base de datos.
    
-   **Manejo de Errores**: Si no se encuentran ítems Todo, lanzamos una excepción con un mensaje descriptivo de error.
    

Ahora tu clase Service debería verse así:

```



using AutoMapper;
using Microsoft.EntityFrameworkCore;
using TodoAPI.AppDataContext;
using TodoAPI.Contracts;
using TodoAPI.Interface;
using TodoAPI.Models;

namespace TodoAPI.Services
{
    public class TodoServices : ITodoServices
    {
        private readonly TodoDbContext _context;
        private readonly ILogger<TodoServices> _logger;
        private readonly IMapper _mapper;

        public TodoServices(TodoDbContext context, ILogger<TodoServices> logger, IMapper mapper)
        {
            _context = context;
            _logger = logger;
            _mapper = mapper;
        }

        // Crear Todo para guardarlo en la base de datos 

        public async Task CreateTodoAsync(CreateTodoRequest request)
        {
            try
            {
                var todo = _mapper.Map<Todo>(request);
                todo.CreatedAt = DateTime.Now;
                _context.Todos.Add(todo);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Ocurrió un error mientras se creaba el ítem Todo.");
                throw new Exception("Ocurrió un error mientras se creaba el ítem Todo.");
            }
        }

        public async Task<IEnumerable<Todo>> GetAllAsync()
        {
            var todo = await _context.Todos.ToListAsync();
            if (todo == null)
            {
                throw new Exception("No se encontraron ítems Todo");
            }
            return todo;
        }

        public Task DeleteTodoAsync(Guid id)
        {
            throw new NotImplementedException();
        }

        // Obtener todos los ítems TODO de la base de datos 

        public Task<Todo> GetByIdAsync(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task UpdateTodoAsync(Guid id, UpdateTodoRequest request)
        {
            throw new NotImplementedException();
        }
    }
}
```

Ahora hemos implementado los métodos `CreateTodoAsync` y `GetAllAsync` en la clase `TodoServices`. Antes de proceder a implementar los métodos restantes, vamos a crear rutas para nuestra API en la carpeta de Controladores. Así que ahora vamos a crear la clase TodoController.

## Paso 11: Crear la Clase TodoController

En ASP.NET Core, los controladores son responsables de manejar las solicitudes HTTP entrantes y enviar respuestas. Sirven como el punto de entrada para nuestra API, definiendo las rutas y acciones con las que los clientes pueden interactuar.
```

```


using Microsoft.AspNetCore.Mvc;
using TodoAPI.Interface;

namespace TodoAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TodoController : ControllerBase
    {
        private readonly ITodoServices _todoServices;

        public TodoController(ITodoServices todoServices)
        {
            _todoServices = todoServices;
        }

    }
}
```

La clase `TodoController` hereda de `ControllerBase`, una clase base proporcionada por ASP.NET Core para crear controladores. También hemos añadido un prefijo de ruta `api/[controller]` al controlador, que será utilizado como la ruta base para todas las acciones en el controlador.

## Paso 12: Implementar el Método CreateTodoAsync en la Clase TodoController

Ahora que tenemos nuestra clase controladora, implementemos el método `CreateTodoAsync` en la clase `TodoController`. Este método manejará la creación de nuevos elementos Todo en nuestra base de datos.

Navegue a la clase `TodoController` y agregue el siguiente código al método `CreateTodoAsync`:

```

// Controllers/TodoController.cs

// ...
  [HttpPost]
  public async Task<IActionResult> CreateTodoAsync(CreateTodoRequest request)
  {
      if (!ModelState.IsValid)
      {
          return BadRequest(ModelState);
      }


      try
      {

          await _todoServices.CreateTodoAsync(request);
          return Ok(new { message = "Publicación del blog creada exitosamente" });

      }
      catch (Exception ex)
      {
          return StatusCode(500, new { message = "Ocurrió un error al crear el elemento Todo", error = ex.Message });

      }
  }
  // ...
```

Aquí hay un desglose del método `CreateTodoAsync`:

-   **Validación del Modelo**: Verificamos si el modelo de solicitud es válido usando `ModelState.IsValid`. Si el modelo no es válido, devolvemos una respuesta `BadRequest` con los errores del estado del modelo.
    
-   **Creación de un Elemento Todo**: Llamamos al método `CreateTodoAsync` de la interfaz `ITodoServices` para crear un nuevo elemento Todo en la base de datos.
    
-   **Respuesta Exitosa**: Si el elemento Todo se crea exitosamente, devolvemos una respuesta `Ok` con un mensaje de éxito.
    
-   **Manejo de Errores**: Si ocurre un error durante el proceso de creación, devolvemos una respuesta `500 Internal Server Error` con un mensaje de error.
    

Ahora implementemos el método `GetAllAsync` en la clase `TodoController`. Este método recuperará todos los elementos Todo de la base de datos.

Navegue a la clase `TodoController` y agregue el siguiente código al método `GetAllAsync`:

```

// Controllers/TodoController.cs 

// ...

  [HttpGet]
  public async Task<IActionResult> GetAllAsync()
  {
      try
      {
          var todo = await _todoServices.GetAllAsync();
          if (todo == null || no hay (todo.Any()))
          {
              return Ok(new { message = "No se encontraron elementos Todo" });
          }
          return Ok(new { message = "Todos los elementos Todo recuperados exitosamente", data = todo });

      }
      catch (Exception ex)
      {
          return StatusCode(500, new { message = "Ocurrió un error al recuperar todos los elementos Todo", error = ex.Message });


      }
  }

// ...
```

Aquí hay un desglose del método `GetAllAsync`:

-   **Recuperación de Elementos Todo**: Llamamos al método `GetAllAsync` de la interfaz `ITodoServices` para obtener todos los elementos Todo de la base de datos.
    
-   **Respuesta Exitosa**: Si los elementos Todo se recuperan exitosamente, devolvemos una respuesta `Ok` con un mensaje de éxito y la lista de elementos Todo.
    
-   **Manejo de Errores**: Si ocurre un error durante el proceso de recuperación, devolvemos una respuesta `500 Internal Server Error` con un mensaje de error.
    

Ahora tu clase `TodoController` debería lucir así:

```



using Microsoft.AspNetCore.Mvc;
using TodoAPI.Contracts;
using TodoAPI.Interface;

namespace TodoAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TodoController : ControllerBase
    {
        private readonly ITodoServices _todoServices;

        public TodoController(ITodoServices todoServices)
        {
            _todoServices = todoServices;
        }




// Creando nuevo elemento Todo
[HttpPost]
  public async Task<IActionResult> CreateTodoAsync(CreateTodoRequest request)
  {
      if (!ModelState.IsValid)
      {
          return BadRequest(ModelState);
      }


      try
      {

          await _todoServices.CreateTodoAsync(request);
          return Ok(new { message = "Publicación del blog creada exitosamente" });

      }
      catch (Exception ex)
      {
          return StatusCode(500, new { message = "Ocurrió un error al crear el elemento Todo", error = ex.Message });

      }
  }

    // Obtener todos los elementos Todo

      [HttpGet]
  public async Task<IActionResult> GetAllAsync()
  {
      try
      {
          var todo = await _todoServices.GetAllAsync();
          if (todo == null || !todo.Any())
          {
              return Ok(new { message = "No se encontraron elementos Todo" });
          }
          return Ok(new { message = "Todos los elementos Todo recuperados exitosamente", data = todo });

      }
      catch (Exception ex)
      {
          return StatusCode(500, new { message = "Ocurrió un error al recuperar todos los elementos Todo", error = ex.Message });



```markdown
En este punto, hemos implementado los métodos `CreateTodoAsync` y `GetAllAsync` en la clase `TodoController`. Estos métodos nos permiten crear nuevos elementos Todo y recuperar todos los elementos Todo de la base de datos. Intentemos ejecutar la aplicación y ver si todo funciona bien.

Ejecuta la aplicación ejecutando el siguiente comando:

```


dotnet run
```

Si ves la siguiente salida, significa que tu aplicación se está ejecutando con éxito:

```


info: Microsoft.Hosting.Lifetime[14]
      Ahora escuchando en: http://localhost:5086
info: Microsoft.Hosting.Lifetime[0]
      Aplicación iniciada. Presiona Ctrl+C para apagar.
info: Microsoft.Hosting.Lifetime[0]
      Entorno de alojamiento: Development
info: Microsoft.Hosting.Lifetime[0]
      Ruta raíz del contenido: E:\Todo\TodoAPI4
```

Mientras usaremos Postman dentro de Visual Studio Code para hacer solicitudes API, vale la pena mencionar que .NET 8 incluye una interfaz de usuario Swagger incorporada. Esta función nos permite interactuar con nuestros puntos finales de la API directamente desde un navegador web. Para acceder a la interfaz de usuario Swagger, abre tu navegador y navega a `https://localhost:5086/swagger/index.html`. Deberías ver una página similar a la siguiente:

![SwaggerUI](https://www.freecodecamp.org/news/content/images/2024/05/SwaggerUI.png) Esto indica que hemos progresado significativamente. Hemos creado una API que puede crear y recuperar elementos Todo. Probemos esto intentando crear un nuevo elemento Todo usando nuestra API.

Abre Postman y crea una nueva solicitud POST con la siguiente URL: `https://localhost:5086/api/todo`. Configura el cuerpo de la solicitud al siguiente objeto JSON:

```
{
    "title": "Aprender ASP.NET Core",
    "description": "Aprender a construir aplicaciones web con ASP.NET Core",
    "dueDate": "2022-12-31T00:00:00",
    "priority": 5
}
```

Al ejecutar esta solicitud, puedes encontrar un error. Esto se debe a que aún no hemos agregado nuestra cadena de conexión al archivo `appsettings.json`. Vamos a rectificar esto.

![PostmanError](https://www.freecodecamp.org/news/content/images/2024/05/PostmanError.png)

**Nota**: El error anterior se debe a la ausencia de una cadena de conexión en el archivo `appsettings.json`. Agreguemos la cadena de conexión al archivo `appsettings.json`.

Antes de hacer eso, configuremos nuestra base de datos SQL Server. Primero abre tu SQL Server Management Studio y deberías ver la pantalla siguiente:

![SQLServerManagementStudio](https://www.freecodecamp.org/news/content/images/2024/05/SQLServerManagementStudio.png)

Para conectarte al SQL Server, donde dice `Server Name` puedes escribir `localhost` o `.` y hacer clic en el botón `Connect`.

Después de conectarte al SQL Server, verás la siguiente pantalla:

![SQLServerManagementStudio2](https://www.freecodecamp.org/news/content/images/2024/05/SQLServerManagementStudio2.png)

Ahora ve a tu archivo `appsettings.json` y agrega la siguiente cadena de conexión:

```


//appsettings.json
{
  "DbSettings": {
    "ConnectionString": "Server=localhost;Database=TodoAPIDb;  Integrated Security=true;  TrustServerCertificate=true;"
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning",
      "Microsoft.Hosting.Lifetime": "Information"
    },
    "AllowedHosts": "*"
  }
}
```

Déjame explicar la cadena de conexión anterior:

-   `Server`: Este es el nombre del servidor donde se aloja la base de datos. En este caso, estamos usando `localhost` para conectarnos a la instancia local de SQL Server.
-   `Database`: Este es el nombre de la base de datos a la que queremos conectarnos. Lo hemos configurado en `TodoAPIDb`.
-   `Integrated Security`: Este parámetro especifica que estamos utilizando la autenticación de Windows para conectarnos a la base de datos.
-   `TrustServerCertificate`: Este parámetro especifica que confiamos en el certificado del servidor al conectarnos a la base de datos.

Ahora necesitamos registrar nuestro `Service` y `Iservices` en el archivo `Program.cs`.

Agrega el servicio al archivo `Program.cs`:

```


// Program.cs

// ...

builder.Services.AddScoped<ITodoServices, TodoServices>();

// ...
```

## Paso 13: Implementar Migraciones y Actualizar la Base de Datos

Las migraciones en Entity Framework Core proporcionan un mecanismo para mantener el esquema de la base de datos sincronizado con el modelo de datos de la aplicación. Generan scripts SQL que se pueden aplicar a la base de datos para reflejar los cambios en el modelo de datos, eliminando la necesidad de actualizaciones manuales del esquema de la base de datos.

Para crear una migración, asegúrate de estar en el directorio raíz de tu proyecto y ejecuta el siguiente comando en la terminal:

```
dotnet ef migrations add InitialCreate
```

Después de una ejecución exitosa, verás una salida similar a la siguiente:

```
dotnet ef migrations add InitialCreate
Build started...
Build succeeded.
Done. To undo this action, use 'ef migrations remove'
```

Este comando genera una nueva migración llamada `InitialCreate`, que contiene scripts SQL derivados de los cambios en nuestro modelo de datos. Aparecerá una nueva carpeta llamada `Migrations` en el directorio de tu proyecto.

Para aplicar la migración y actualizar la base de datos, ejecuta el siguiente comando:

```
dotnet ef database update
```

Podrías encontrar un error como este:

```
  at Microsoft.EntityFrameworkCore.Design.OperationExecutor.UpdateDatabase.<>c__DisplayClass0_0.<.ctor>b__0()
   at Microsoft.EntityFrameworkCore.Design.OperationExecutor.OperationBase.Execute(Action action)
Only the invariant culture is supported in globalization-invariant mode. See https://aka.ms/GlobalizationInvariantMode for more information. (Parameter 'name')
en-us is an invalid culture identifier.
```
```

Después de realizar este cambio, ejecuta nuevamente el comando `dotnet ef database update`. Si la migración es exitosa, verás una salida similar a la siguiente:

```

Build started...
Build succeeded.
Applying migration '20240518180222_InitialCreate'.
Done.
```

Esto indica que la migración se ha aplicado con éxito y la base de datos se ha actualizado con los cambios necesarios en el esquema.

¡Felicitaciones! Has creado correctamente una migración y actualizado el esquema de la base de datos. Ahora, probemos nuestra API creando un nuevo elemento Todo usando Postman.

## Paso 14: Verificar Tu API con Postman

Antes de que podamos interactuar con nuestra API, debemos asegurarnos de que nuestra aplicación esté en funcionamiento. Inicia la aplicación ejecutando el siguiente comando en la terminal:

```
dotnet run
```

Con la aplicación en ejecución, ahora podemos usar Postman para enviar solicitudes a nuestra API. Vamos a crear un nuevo elemento Todo:

1.  Abre Postman y crea una nueva solicitud.
2.  Configura el método de solicitud a `POST`.
3.  Ingresa la siguiente URL: `https://localhost:5086/api/todo`.
4.  En la pestaña `Headers`, configura el `Content-Type` a `application/json`.
5.  En la pestaña `Body`, selecciona `raw` e ingresa el siguiente objeto JSON:

```
{
    "title": "Learn ASP.NET Core",
    "description": "Learn how to build web applications with ASP.NET Core",
    "dueDate": "2022-12-31T00:00:00",
    "priority": 5
}
```

6.  Haz clic en el botón `Send` para ejecutar la solicitud.

Si la solicitud es exitosa, recibirás una respuesta similar a la siguiente:

```
{
    "message": "Todo item successfully created"
}
```

La imagen a continuación ilustra la creación exitosa de un nuevo elemento Todo usando Postman:

![PostmanSuccess](https://www.freecodecamp.org/news/content/images/2024/05/PostmanSuccess.png)

Ahora que hemos creado exitosamente un nuevo elemento Todo, vamos a recuperar todos los elementos Todo de la base de datos usando nuestra API.

## Paso 15: Recuperar Todos los Elementos Todo

Para recuperar todos los elementos Todo de la base de datos, sigue estos pasos:

1.  Abre Postman y crea una nueva solicitud.
    
2.  Configura el método de solicitud a `GET`.
    
3.  Ingresa la siguiente URL: `https://localhost:5086/api/todo`.
    
4.  Haz clic en el botón `Send` para ejecutar la solicitud.
    

Si la solicitud es exitosa, recibirás una respuesta similar a la siguiente:

```

   {
    "message": "Successfully retrieved all blog posts",
    "data": [
        {
            "id": "e9898d1b-9ad3-4482-ad65-08dc77664fab",
            "title": "string",
            "description": "string",
            "isComplete": false,
            "dueDate": "2024-05-18T16:52:22.054Z",
            "priority": 5,
            "createdAt": "2024-05-18T18:14:08.1755565+00:00",
            "updatedAt": "0001-01-01T00:00:00"
        }
    ]
}
```

La imagen a continuación ilustra la recuperación exitosa de todos los elementos Todo usando Postman:

![PostmanGetAll](https://www.freecodecamp.org/news/content/images/2024/05/PostmanGetAll.png)

¡Felicitaciones! Has creado exitosamente una API que puede crear y recuperar elementos Todo. Esto marca la finalización de nuestro proyecto de API Todo. Has aprendido cómo configurar un proyecto .NET Core, definir modelos, crear un contexto de base de datos, implementar una capa de servicios y crear endpoints de API. También has aprendido a usar Postman para interactuar con tu API y probar su funcionalidad.

Ahora vamos a crear los métodos `GetByIdAsync`, `UpdateTodoAsync` y `DeleteTodoAsync` en la clase `TodoServices` y la clase `TodoController`.

## Paso 16: Implementar el Método GetByIdAsync

El método `GetByIdAsync` recupera un elemento Todo específico por su `Id`. Vamos a implementar este método tanto en la clase `TodoServices` como en la clase `TodoController`.

### La Clase `TodoServices`

En la clase `TodoServices`, agrega el siguiente código al método `GetByIdAsync`:

```
// Services/TodoServices.cs

public async Task<Todo> GetByIdAsync(Guid id)
{
    var todo = await _context.Todos.FindAsync(id);
    if (todo == null)
    {
        throw new KeyNotFoundException($"No Todo item with Id {id} found.");
    }
    return todo;
}
```

Este método utiliza el método `FindAsync` de Entity Framework Core para buscar un elemento Todo por su `Id`. Si no se encuentra ningún elemento Todo, arroja una `KeyNotFoundException` con un mensaje de error descriptivo.

### La Clase `TodoController`

En la clase `TodoController`, agrega el siguiente código al método `GetByIdAsync`:

```
// Controllers/TodoController.cs

[HttpGet("{id:guid}")]
public async Task<IActionResult> GetByIdAsync(Guid id)
{
    try
    {
        var todo = await _todoServices.GetByIdAsync(id);
        if (todo == null)
        {
            return NotFound(new { message = $"No Todo item with Id {id} found." });
        }
        return Ok(new { message = $"Successfully retrieved Todo item with Id {id}.", data = todo });
    }
    catch (Exception ex)
    {
        return StatusCode(500, new { message = $"An error occurred while retrieving the Todo item with Id {id}.", error = ex.Message });
    }
}
```

Este método llama al método `GetByIdAsync` de la interfaz `ITodoServices` para buscar un elemento Todo por su `Id`. Si se recupera correctamente un elemento Todo, devuelve una respuesta `Ok` con un mensaje de éxito y el elemento Todo. Si ocurre un error durante el proceso de recuperación, devuelve una respuesta `500 Internal Server Error` con un mensaje de error.

El método `UpdateTodoAsync` en la clase `TodoServices` modifica un elemento Todo existente en la base de datos. Implementemos este método ahora.

Navegue a la clase `TodoServices` y agregue el siguiente código al método `UpdateTodoAsync`:

```


// Services/TodoServices.cs

// ...

 public async Task UpdateTodoAsync(Guid id, UpdateTodoRequest request)
 {
     try
     {
         var todo = await _context.Todos.FindAsync(id);
         if (todo == null)
         {
             throw new Exception($"No se encontró el elemento Todo con id {id}.");
         }

         if (request.Title != null)
         {
             todo.Title = request.Title;
         }

         if (request.Description != null)
         {
             todo.Description = request.Description;
         }

         if (request.IsComplete != null)
         {
             todo.IsComplete = request.IsComplete.Value;
         }

         if (request.DueDate != null)
         {
             todo.DueDate = request.DueDate.Value;
         }

         if (request.Priority != null)
         {
             todo.Priority = request.Priority.Value;
         }

         todo.UpdatedAt = DateTime.Now;

         await _context.SaveChangesAsync();
     }
     catch (Exception ex)
     {
         _logger.LogError(ex, $"Ocurrió un error al actualizar el elemento Todo con id {id}.");
         throw;
     }
 }

// ...
```

Aquí hay un desglose del método `UpdateTodoAsync`:

-   **Recuperación de un elemento Todo específico**: Usamos el método `FindAsync` de Entity Framework Core para obtener un elemento Todo por su `Id`.
    
-   **Actualización del elemento Todo**: Actualizamos las propiedades del elemento Todo basándonos en los valores proporcionados en el objeto `UpdateTodoRequest`.
    
-   **Manejo de errores**: Si no se encuentra ningún elemento Todo con el `Id` especificado, lanzamos una excepción con un mensaje de error descriptivo.
    

Ahora implementemos el método `UpdateTodoAsync` en la clase `TodoController`. Este método modificará un elemento Todo existente en la base de datos.

Navegue a la clase `TodoController` y agregue el siguiente código al método `UpdateTodoAsync`:

```

// Controllers/TodoController.cs

// ... 
   [HttpPut("{id:guid}")]

   public async Task<IActionResult> UpdateTodoAsync(Guid id, UpdateTodoRequest request)
   {

       if (!ModelState.IsValid)
       {
           return BadRequest(ModelState);
       }

       try
       {

           var todo = await _todoServices.GetByIdAsync(id);
           if (todo == null)
           {
               return NotFound(new { message = $"No se encontró el elemento Todo con id {id}" });
           }

           await _todoServices.UpdateTodoAsync(id, request);
           return Ok(new { message = $"El elemento Todo con id {id} se actualizó correctamente" });

       }
       catch (Exception ex)
       {
           return StatusCode(500, new { message = $"Ocurrió un error al actualizar la entrada con id {id}", error = ex.Message });


       }


   }

// ...
```

Aquí hay un desglose del método `UpdateTodoAsync`:

-   **Validación del modelo**: Verificamos si el modelo de la solicitud es válido usando `ModelState.IsValid`. Si el modelo no es válido, devolvemos una respuesta `BadRequest` con los errores del estado del modelo.
    
-   **Recuperación de un elemento Todo específico**: Llamamos al método `GetByIdAsync` de la interfaz `ITodoServices` para obtener un elemento Todo por su `Id`.
    
-   **Actualización del elemento Todo**: Si se encuentra el elemento Todo, llamamos al método `UpdateTodoAsync` de la interfaz `ITodoServices` para actualizar el elemento Todo.
    
-   **Respuesta de éxito**: Si el elemento Todo se actualiza correctamente, devolvemos una respuesta `Ok` con un mensaje de éxito.
    
-   **Manejo de errores**: Si ocurre un error durante el proceso de actualización, devolvemos una respuesta `500 Internal Server Error` con un mensaje de error.
    

## Paso 18: Implementar el método DeleteTodoAsync

El método `DeleteTodoAsync` en la clase `TodoServices` elimina un elemento Todo de la base de datos. Implementemos este método ahora.

Navegue a la clase `TodoServices` y agregue el siguiente código al método `DeleteTodoAsync`:

```


// Services/TodoServices.cs

// ...


 public async Task DeleteTodoAsync(Guid id)
 {

     var todo = await _context.Todos.FindAsync(id);
     if(todo != null)
     {
          _context.Todos.Remove(todo);
         await _context.SaveChangesAsync();

     }
     else
     {
         throw new Exception($"No se encontró ningún elemento con el id {id}");
     }


 }

// ...
```

Aquí hay un desglose del método `DeleteTodoAsync`:

-   **Recuperación de un elemento Todo específico**: Usamos el método `FindAsync` de Entity Framework Core para obtener un elemento Todo por su `Id`.
    
-   **Eliminación del elemento Todo**: Si se encuentra el elemento Todo, lo eliminamos del DbSet `Todos` en nuestro contexto y guardamos los cambios de forma asíncrona.
    
-   **Manejo de errores**: Si no se encuentra ningún elemento Todo con el `Id` especificado, lanzamos una excepción con un mensaje de error descriptivo.
    

Ahora implementemos el método `DeleteTodoAsync` en la clase `TodoController`. Este método eliminará un elemento Todo de la base de datos.

Navegue a la clase `TodoController` y agregue el siguiente código al método `DeleteTodoAsync`:

```

// Controllers/TodoController.cs

```

```csharp
[HttpDelete("{id:guid}")]
public async Task<IActionResult> DeleteTodoAsync(Guid id)
{
    try
    {
        await _todoServices.DeleteTodoAsync(id);
        return Ok(new { message = $"Todo con id {id} eliminado con éxito" });

    }
    catch (Exception ex)
    {
        return StatusCode(500, new { message = $"Ocurrió un error al eliminar el elemento Todo con id {id}", error = ex.Message });

    }
}



// ...
```

A continuación se muestra un desglose del método `DeleteTodoAsync`:

-   **Eliminación del elemento Todo**: Llamamos al método `DeleteTodoAsync` de la interfaz `ITodoServices` para eliminar un elemento Todo por su `Id`.
    
-   **Respuesta de éxito**: Si el elemento Todo se elimina correctamente, devolvemos una respuesta `Ok` con un mensaje de éxito.
    
-   **Manejo de errores**: Si ocurre un error durante el proceso de eliminación, devolvemos una respuesta `500 Internal Server Error` con un mensaje de error.
    

Ahora tu clase `TodoServices` debería verse así:

```csharp
// Services/TodoServices.cs

using AutoMapper;
using Microsoft.EntityFrameworkCore;
using TodoAPI.AppDataContext;
using TodoAPI.Contracts;
using TodoAPI.Interface;
using TodoAPI.Models;

namespace TodoAPI.Services
{
    public class TodoServices : ITodoServices
    {
        private readonly TodoDbContext _context;
        private readonly ILogger<TodoServices> _logger;
        private readonly IMapper _mapper;

        public TodoServices(TodoDbContext context, ILogger<TodoServices> logger, IMapper mapper)
        {
            _context = context;
            _logger = logger;
            _mapper = mapper;
        }




        // Creación de Todo para que se guarde en la base de datos 

        public async Task CreateTodoAsync(CreateTodoRequest request)
        {
            try
            {
                var todo = _mapper.Map<Todo>(request);
                todo.CreatedAt = DateTime.Now;
                _context.Todos.Add(todo);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Ocurrió un error al crear el elemento todo.");
                throw new Exception("Ocurrió un error al crear el elemento todo.");
            }
        }


        public async Task<Todo> GetByIdAsync(Guid id)
        {
            var todo = await _context.Todos.FindAsync(id);
            if (todo == null)
            {
                throw new Exception($"No se encontraron elementos con {id}");
            }
            return todo;
        }

        public async Task UpdateTodoAsync(Guid id, UpdateTodoRequest request)
        {
            try
            {
                var todo = await _context.Todos.FindAsync(id);
                if (todo == null)
                {
                    throw new Exception($"No se encontró el elemento todo con id {id}.");
                }

                if (request.Title != null)
                {
                    todo.Title = request.Title;
                }

                if (request.Description != null)
                {
                    todo.Description = request.Description;
                }

                if (request.IsComplete != null)
                {
                    todo.IsComplete = request.IsComplete.Value;
                }

                if (request.DueDate != null)
                {
                    todo.DueDate = request.DueDate.Value;
                }

                if (request.Priority != null)
                {
                    todo.Priority = request.Priority.Value;
                }

                todo.UpdatedAt = DateTime.Now;

                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Ocurrió un error al actualizar el elemento todo con id {id}.");
                throw;
            }
        }
        public async Task<IEnumerable<Todo>> GetAllAsync()
        {
            var todo = await _context.Todos.ToListAsync();
            if (todo == null)
            {
                throw new Exception("No se encontraron elementos Todo");
            }
            return todo;

        }
        public async Task DeleteTodoAsync(Guid id)
        {

            var todo = await _context.Todos.FindAsync(id);
            if (todo != null)
            {
                _context.Todos.Remove(todo);
                await _context.SaveChangesAsync();

            }
            else
            {
                throw new Exception($"No se encontró ningún elemento con el id {id}");
            }


        }




    }
}
```

Ahora tu clase `TodoController` debería verse así:

```csharp

using Microsoft.AspNetCore.Mvc;
using TodoAPI.Contracts;
using TodoAPI.Interface;

namespace TodoAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TodoController : ControllerBase
    {
        private readonly ITodoServices _todoServices;

        public TodoController(ITodoServices todoServices)
        {
            _todoServices = todoServices;
        }



        // Creación de un nuevo elemento Todo
        [HttpPost]
        public async Task<IActionResult> CreateTodoAsync(CreateTodoRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
```

```csharp
await _todoServices.CreateTodoAsync(request);
return Ok(new { message = "Publicación del blog creada con éxito" });

}
catch (Exception ex)
{
    return StatusCode(500, new { message = "Ocurrió un error al crear el artículo de Todo", error = ex.Message });

}
}

// Obtener todos los artículos de Todo

[HttpGet]
public async Task<IActionResult> GetAllAsync()
{
    try
    {
        var todo = await _todoServices.GetAllAsync();
        if (todo == null || no hay todo.Any())
        {
            return Ok(new { message = "No se encontraron artículos de Todo" });
        }
        return Ok(new { message = "Todos los artículos del blog recuperados con éxito", data = todo });

    }
    catch (Exception ex)
    {
        return StatusCode(500, new { message = "Ocurrió un error al recuperar todos los artículos de Todo", error = ex.Message });


    }
}

[HttpGet("{id:guid}")]
public async Task<IActionResult> GetByIdAsync(Guid id)
{
    try
    {

        var todo = await _todoServices.GetByIdAsync(id);
        if (todo == null)
        {
            return NotFound(new { message = $"No se encontró ningún ítem de Todo con id {id}" });

        }
        return Ok(new { message = $"Ítem de Todo con id {id} recuperado con éxito", data = todo });

    }
    catch (Exception ex)
    {
        return StatusCode(500, new { message = $"Ocurrió un error al recuperar el ítem de Todo con id {id}", error = ex.Message });

    }
}

[HttpPut("{id:guid}")]

public async Task<IActionResult> UpdateTodoAsync(Guid id, UpdateTodoRequest request)
{

    if (!ModelState.IsValid)
    {
        return BadRequest(ModelState);
    }

    try
    {

        var todo = await _todoServices.GetByIdAsync(id);
        if (todo == null)
        {
            return NotFound(new { message = $"No se encontró ítem de Todo con id {id}" });
        }

        await _todoServices.UpdateTodoAsync(id, request);
        return Ok(new { message = $"Ítem de Todo con id {id} actualizado con éxito" });

    }
    catch (Exception ex)
    {
        return StatusCode(500, new { message = $"Ocurrió un error al actualizar la publicación del blog con id {id}", error = ex.Message });


    }
}

[HttpDelete("{id:guid}")]
public async Task<IActionResult> DeleteTodoAsync(Guid id)
{
    try
    {
        await _todoServices.DeleteTodoAsync(id);
        return Ok(new { message = $"Ítem de Todo con id {id} eliminado con éxito" });

    }
    catch (Exception ex)
    {
        return StatusCode(500, new { message = $"Ocurrió un error al eliminar el ítem de Todo con id {id}", error = ex.Message });

    }
}
}
}

Ahora que hemos implementado los métodos `GetByIdAsync`, `UpdateTodoAsync` y `DeleteTodoAsync` en las clases `TodoServices` y `TodoController`, podemos probar nuestra API para asegurarnos de que todo funcione según lo esperado.

## Paso 19: Pruebe sus endpoints API con Postman

Con nuestra aplicación en funcionamiento, ahora podemos probar todos nuestros endpoints API. Crearemos nuevos ítems de Todo, recuperaremos todos los ítems de Todo, buscaremos un ítem de Todo específico por su `Id`, actualizaremos un ítem de Todo y eliminaremos un ítem de Todo usando Postman. Comencemos creando tres nuevos ítems de Todo.

Tenga en cuenta que crearemos estos ítems de Todo uno a la vez, no todos de una sola vez. Siga estos pasos para cada ítem de Todo:

1.  Abra Postman y cree una nueva solicitud.
2.  Configure el método de solicitud en `POST`.
3.  Ingrese la siguiente URL: `http://localhost:5086/api/todo`.
4.  En la pestaña `Headers`, configure el `Content-Type` a `application/json`.
5.  En la pestaña `Body`, seleccione `raw` e ingrese uno de los siguientes objetos JSON:

Para el primer ítem de Todo:

```
{
    "title": "Aprender ASP.NET Core",
    "description": "Aprender a construir aplicaciones web con ASP.NET Core",
    "dueDate": "2022-12-31T00:00:00",
    "priority": 2
}
```

Para el segundo ítem de Todo:

```
{
    "title": "Aprender C#",
    "description": "Aprender a construir aplicaciones web con C#",
    "dueDate": "2022-12-31T00:00:00",
    "priority": 3
}
```

Para el tercer ítem de Todo:

```
{
    "title": "Aprender SQL",
    "description": "Aprender a construir aplicaciones web con SQL",
    "dueDate": "2022-12-31T00:00:00",
    "priority": 1
}
```

6.  Haga clic en el botón `Send` para ejecutar la solicitud para cada ítem de Todo.

Si cada solicitud tiene éxito, recibirá una respuesta similar a la siguiente:

```
{
    "message": "Ítem de Todo creado con éxito"
}
```

Esto indica que el ítem de Todo ha sido creado con éxito. Repita los pasos para cada ítem de Todo.

### Cómo recuperar todos los ítems de Todo

Para recuperar todos los ítems de Todo de la base de datos, siga estos pasos:
```

La imagen a continuación muestra una recuperación exitosa de todos los elementos Todo usando Postman:

![PostmanGetAll-1](https://www.freecodecamp.org/news/content/images/2024/05/PostmanGetAll-1.png)

### Cómo Recuperar un Elemento Todo Específico por Id

Para recuperar un elemento Todo específico usando su `Id`, sigue estos pasos:

1.  Inicia Postman e inicia una nueva solicitud.
2.  Establece el método HTTP en `GET`.
3.  Introduce la siguiente URL: `http://localhost:5086/api/todo/{id}`, reemplazando `{id}` con el `Id` del elemento Todo que deseas recuperar. Por ejemplo, `http://localhost:5086/api/todo/e9898d1b-9ad3-4482-ad65-08dc77664fab`.
4.  Haz clic en el botón `Send` para ejecutar la solicitud.

Al ejecutarse correctamente, recibirás una respuesta similar a la siguiente:

```
{
    "message": "Successfully retrieved  todo item with id e9898d1b-9ad3-4482-ad65-08dc77664fab",
    "data": {
        "id": "e9898d1b-9ad3-4482-ad65-08dc77664fab",
        "title": "string",
        "description": "string",
        "isComplete": false,
        "dueDate": "2024-05-18T16:52:22.054",
        "priority": 5,
        "createdAt": "2024-05-18T18:14:08.1755565",
        "updatedAt": "0001-01-01T00:00:00"
    }
}
```

La imagen a continuación muestra la recuperación exitosa de un elemento Todo específico usando Postman:

![PostmanGetById](https://www.freecodecamp.org/news/content/images/2024/05/PostmanGetById.png))

### Cómo Actualizar un Elemento Todo

En nuestro modelo Todo, tenemos una propiedad `isComplete` que se establece inicialmente en `false` cuando se crea un elemento Todo. Esta propiedad se utiliza para indicar si una tarea se ha completado o no. Para marcar una tarea como completada, necesitamos actualizar esta propiedad a `true`. Toma en cuenta que solo podemos actualizar un elemento Todo a la vez, y identificamos el elemento a actualizar por su `Id`.

Vamos a recuperar todos los elementos Todo, seleccionar uno y actualizarlo estableciendo la propiedad `isComplete` a `true`.

Sigue estos pasos para actualizar un elemento Todo:

1.  Inicia Postman e inicia una nueva solicitud.
2.  Establece el método HTTP en `PUT`.
3.  Introduce la siguiente URL: `http://localhost:5086/api/todo/{id}`, reemplazando `{id}` con el `Id` del elemento Todo que deseas actualizar. Por ejemplo, `http://localhost:5086/api/todo/e9898d1b-9ad3-4482-ad65-08dc77664fab`.
4.  En la pestaña `Headers`, establece el `Content-Type` en `application/json`.
5.  En la pestaña `Body`, selecciona `raw` e introduce el siguiente objeto JSON:

```
{
    "id": "21ebe2c2-79c0-45d4-4139-08dc789e3eb2",
    "title": "Learn C#",
    "description": "Learn how to build web applications with C#",
    "isComplete": true, // Establece isComplete en true
    "dueDate": "2022-12-31T00:00:00",
    "priority": 3,
    "createdAt": "2024-05-20T07:27:39.3730049+00:00",
    "updatedAt": "0001-01-01T00:00:00"
}
```

6.  Haz clic en el botón `Send` para ejecutar la solicitud.

Al ejecutarse correctamente, recibirás una respuesta similar a la siguiente:

```
{
    "message": "Todo Item with id 21ebe2c2-79c0-45d4-4139-08dc789e3eb2 successfully updated"
}
```

La imagen a continuación muestra la actualización exitosa de un elemento Todo usando Postman:

![PostmanUpdate](https://www.freecodecamp.org/news/content/images/2024/05/PostmanUpdate.png)

**Nota**: La propiedad `isComplete` del elemento Todo se ha actualizado a `true`. Ahora, cuando recuperes todos los elementos Todo de la base de datos, verás que la propiedad `isComplete` es `true` para el elemento Todo actualizado.

Ahora veamos cómo eliminar un elemento Todo de la base de datos.

### Cómo Eliminar un Elemento Todo

Para eliminar un elemento Todo de la base de datos, sigue estos pasos:

1.  Abre Postman y crea una nueva solicitud.
2.  Establece el método HTTP en `DELETE`.
3.  Introduce la siguiente URL: `http://localhost:5086/api/todo/{id}`, reemplazando `{id}` con el `Id` del elemento Todo que deseas eliminar. Por ejemplo, `http://localhost:5086/api/todo/e9898d1b-9ad3-4482-ad65-08dc77664fab`.
4.  Haz clic en el botón `Send` para ejecutar la solicitud.

Si la solicitud se ejecuta correctamente, recibirás una respuesta similar a la siguiente:

```
{
    "message": "Todo item with id 21ebe2c2-79c0-45d4-4139-08dc789e3eb2 successfully deleted"
}
```

La imagen a continuación ilustra la eliminación exitosa de un elemento Todo usando Postman:

![PostmanDelete](https://www.freecodecamp.org/news/content/images/2024/05/PostmanDelete.png)

¡Bien hecho! Has implementado con éxito los métodos `GetByIdAsync`, `UpdateTodoAsync` y `DeleteTodoAsync` en las clases `TodoServices` y `TodoController`. También has verificado tus endpoints de API usando Postman para asegurarte de que funcionan como se espera. Puedes

### Código Fuente

El código fuente completo para este proyecto está disponible en el repositorio de GitHub [TodoAPI][34]. Te animo a que explores el código, juegues con diversas funcionalidades y fortalezcas tu habilidad para crear APIs utilizando ASP.NET Core 8.

## Conclusión

En esta guía, hemos recorrido el proceso de construir una API de Todo robusta utilizando el poder de ASP.NET Core 8. Iniciamos nuestro proyecto desde cero, definiendo meticulosamente los modelos esenciales que forman la columna vertebral de nuestra aplicación Todo.

Luego, creamos un contexto de base de datos, un paso crucial que facilitó nuestra interacción con la base de datos. Para optimizar aún más esta interacción, implementamos una capa de servicios, abstrayendo efectivamente las complejidades de las operaciones directas con la base de datos.

La etapa final de nuestro viaje involucró pruebas rigurosas de nuestra API utilizando Postman. Esto aseguró que nuestra aplicación no solo se construyó según nuestro diseño, sino que también funcionó como se esperaba, proporcionando un servicio confiable y eficiente.

Al concluir, es importante recordar que el conocimiento adquirido aquí forma una base sólida para construir APIs más complejas y ricas en funciones. El viaje de aprendizaje y exploración no termina aquí, es solo el comienzo. ¡Feliz codificación!

[1]: #heading-requisitos-previos
[2]: #heading-como-mejorar-su-experiencia-de-desarrollo-con-las-extensiones-de-visual-studio-code
[3]: #heading-resultados-de-aprendizaje
[4]: #heading-que-es-net-core
[5]: #heading-net-core-vs-net-framework
[6]: #heading-paso-1-configure-su-directorio-de-proyecto
[7]: #heading-paso-2-establezca-su-estructura-de-proyecto
[8]: #heading-paso-3-cree-el-modelo-todo
[9]: #heading-paso-4-configure-el-contexto-de-base-de-datos
[10]: #heading-paso-5-defina-los-objetos-de-transferencia-de-datos-dtos
[11]: #heading-paso-6-implemente-el-mapeo-de-objetos-para-la-api-todo
[12]: #heading-paso-7-implemente-el-middleware-de-manejo-global-de-excepciones
[13]: #heading-paso-8-implemente-la-capa-de-servicio-y-la-interfaz-de-servicio
[14]: #heading-paso-9-implemente-el-metodo-createtodoasync-en-la-clase-todoservices
[15]: #heading-paso-10-implemente-el-metodo-getallasync-en-la-clase-de-servicio
[16]: #heading-paso-11-cree-la-clase-todocontroller
[17]: #paso-12
[18]: #heading-paso-13-implemente-migraciones-y-actualice-la-base-de-datos
[19]: #heading-paso-14-verifique-su-api-con-postman
[20]: #heading-paso-15-recupere-todos-los-elementos-todo
[21]: #heading-paso-16-implemente-el-metodo-getbyidasync
[22]: #heading-paso-17-implemente-el-metodo-updatetodoasync
[23]: #heading-paso-18-implemente-el-metodo-deletetodoasync
[24]: #heading-paso-19-pruebe-los-endpoints-de-su-api-con-postman
[25]: #heading-conclusion
[26]: https://dotnet.microsoft.com/download
[27]: https://code.visualstudio.com/download
[28]: https://visualstudio.microsoft.com/downloads/
[29]: https://www.postman.com/downloads/
[30]: https://www.microsoft.com/en-us/sql-server/sql-server-downloads
[31]: https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csdevkit
[32]: https://marketplace.visualstudio.com/items?itemName=adrianwilczynski.namespace
[33]: https://docs.microsoft.com/en-us/dotnet/csharp/
[34]: https://github.com/Clifftech123/TodoAPI

