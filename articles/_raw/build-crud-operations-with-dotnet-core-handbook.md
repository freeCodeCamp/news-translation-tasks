---
title: How to Build CRUD Operations with .NET Core – A Todo API Handbook
date: 2024-08-27T15:55:01.834Z
author: Isaiah Clifford Opoku
authorURL: https://www.freecodecamp.org/news/author/Clifftech/
originalURL: https://www.freecodecamp.org/news/build-crud-operations-with-dotnet-core-handbook/
posteditor: ""
proofreader: ""
---

Welcome to this comprehensive guide on building CRUD operations with .NET Core. We'll use a Todo API as our practical example so you can get hands-on experience as you learn.

<!-- more -->

Throughout this tutorial, you'll learn how to create, read, update, and delete Todo items, and how to leverage Entity Framework Core to interact with a database.

## Table of Contents

-   [Prerequisites][1]
-   [How to Enhance Your Development Experience with Visual Studio Code Extensions][2]
-   [Learning Outcomes][3]
-   [What is .NET Core?][4]
-   [.NET Core vs .NET Framework][5]
-   [Step 1: Set Up Your Project Directory][6]
-   [Step 2: Establish Your Project Structure][7]
-   [Step 3: Create the Todo Model][8]
-   [Step 4: Set Up the Database Context][9]
-   [Step 5: Define Data Transfer Objects (DTOs)][10]
-   [Step 6: Implement Object Mapping for the Todo API][11]
-   [Step 7: Implement Global Exception Handling Middleware][12]
-   [Step 8: Implement the Service Layer and Service Interface][13]
-   [step 9: Implement the CreateTodoAsync Method in the Service Class][14]
-   [Step 10: Implement the GetAllAsync Method in the Service Class][15]
-   [step 11: Create the TodoController Class][16]
-   [Step 12: Implement the CreateTodoAsync Method in the TodoController Class][17]
-   [Step 13: Implement Migrations and Update the Database][18]
-   [Step 14: Verify Your API with Postman][19]
-   [Step 15: Retrieve All Todo Items][20]
-   [Step 16: Implement the GetByIdAsync Method][21]
-   [Step 17: Implement the UpdateTodoAsync Method][22]
-   [Step 18: Implement the DeleteTodoAsync Method][23]
-   [Step 19: Test Your API Endpoints with Postman][24]
-   [Conclusion][25]

Before we dive in, let's ensure you're equipped with the necessary prerequisites.

## Prerequisites

Before you get started, make sure you have the necessary tools installed on your machine. Here are the download links:

-   [.NET SDK][26]
-   [Visual Studio Code][27]
-   [Visual Studio 2019][28]
-   [Postman][29]
-   [SQLServer][30]

After installing the .NET SDK, it's important to verify its installation and check the version. For this tutorial, we'll be using .NET 8.0.

To check the version of the .NET SDK installed on your machine, open the terminal and run the following command:

```
dotnet --version
```

If the .NET SDK is installed correctly, the version number will be displayed in the terminal:

```
8.0
```

If you see a different version number, ensure you have .NET 8.0 installed on your machine.

## How to Enhance Your Development Experience with Visual Studio Code Extensions

Visual Studio Code, a lightweight and open-source code editor, is an excellent tool for building .NET Core applications. And you can further enhance its functionality with extensions that streamline the development process.

Here are two recommended extensions for .NET Core development:

-   [C# for Visual Studio Code][31]
-   [C# Namespace Autocompletion][32]

To install these extensions, follow these steps:

1.  Open Visual Studio Code.
2.  Click on the Extensions icon in the Activity Bar on the side of the window to open the Extensions view.
3.  In the search bar, type the name of the extension.
4.  In the search results, locate the correct extension and click on the Install button.

Here's how the Extensions view looks in Visual Studio Code:

-   C# Devkit Extension for Visual Studio Code ![Extensions view for Devkit](https://www.freecodecamp.org/news/content/images/2024/05/DevKIt.png)
    
-   Namespace Autocompletion Extension for Visual Studio Code ![Extensions view for Namespace Autocompletion](https://www.freecodecamp.org/news/content/images/2024/05/NameSpace.png)
    

In the images above, the extensions are already installed. If they're not installed on your system, you can do so by clicking on the Install button.

With these essential tools in place, we're now fully equipped to start building our Todo API.

## Learning Outcomes

By the end of this tutorial, you'll have learned how to:

-   Set up a new .NET Core project using the .NET Core CLI
-   Define a model for a Todo item
-   Create a database context to interact with the database
-   Implement routing and controllers for the Todo API
-   Create a service class to handle business logic
-   Implement CRUD operations for the Todo API
-   Handle exceptions globally using middleware
-   Test the API endpoints using Postman

If you're new to C# and .NET, don't worry. I'll explain all the concepts in depth to ensure you understand them. For additional information, you can refer to the [C# documentation][33].

Before we delve into the code, let's clarify what .NET Core is.

## What is .NET Core?

.NET Core, also known as ASP.NET, is a cross-platform framework that facilitates the building of web applications, APIs, and services. It's a free, open-source, and high-performance framework, designed for creating modern, cloud-based, internet-connected applications. It's the successor to the .NET Framework.

But what's the difference between .NET Core and .NET Framework?

## .NET Core vs .NET Framework

.NET Core and .NET Framework are two distinct frameworks used for application development. .NET Core is a cross-platform framework that operates on Windows, macOS, and Linux. It's a modular, open-source, and free-to-use framework, designed for building modern, cloud-based, internet-connected applications.

On the other hand, `.NET Framework` is a `Windows-only framework` used for building `Windows desktop` `applications`, `web applications`, and services. Unlike .NET Core, it's not open-source or free to use. However, it's a mature framework that has been around for a long time.

With a foundational understanding of .NET Core and .NET Framework under your belt, we're ready to dive into building our Todo API.

In this tutorial, we'll leverage .NET Core to construct a Todo API that performs CRUD operations. Our journey will take us through creating a new project, defining the Todo model, setting up the database, and implementing the CRUD operations.

Let's begin with Visual Studio Code. In this tutorial, we'll be using the .NET Core CLI to create our project and build our API. If you prefer Visual Studio 2019, you can follow along using that IDE as well but we will be using Visual Studio Code for this article.

## Step 1: Set Up Your Project Directory

First, navigate to the directory where you want to house your project. This could be any folder on your system where you'd like to store your code.

Once you're in the desired directory, open the terminal. You can do this in Visual Studio Code by going to `View -> Terminal` or by pressing Ctrl + a backtick.

With the terminal open, type the following command:

```
dotnet new webapi -n TodoAPI
```

This command instructs the .NET Core CLI to create a new web API project named `TodoAPI`. The `-n` option specifies the name of the project.

![Creating a new API with the .NET Core CLI](https://www.freecodecamp.org/news/content/images/2024/05/TerminalCreatingNewAPI.png)

The image above illustrates how to execute the command in the terminal.

After pressing the 'Enter' key, the .NET Core CLI will start generating the necessary files for your project.

![.NET project folder structure](https://www.freecodecamp.org/news/content/images/2024/05/ProjectFile.png)

The image above showcases the generated project structure. It includes all the necessary files and directories required for a .NET Core web API project.

With the project files and folders generated by the .NET Core CLI, let's take a moment to understand the purpose of each file.

-   `appsettings.json`: This file houses the application's configuration settings. It's the go-to place for storing connection strings, logging configurations, and other settings.
    
-   `Program.cs`: Serving as the application's entry point, this file is responsible for setting up the host and configuring the services.
    
-   `TodoAPI.csproj`: This project file contains metadata about your project, including references to the necessary packages and libraries.
    
-   `appsettings.Development.json`: This file is designed for configuration settings specific to the development environment. It's ideal for storing environment-specific settings. But for the purpose of this tutorial, we'll be using the `appsettings.json` file instead.
    
-   `TodoAPI.http`: This file is typically used to test API endpoints using the REST Client extension in Visual Studio Code, as it contains sample requests for the API endpoints. However, in this tutorial, we'll be using Postman for testing, so we won't need this file and will proceed to delete it.
    

## Step 2: Establish Your Project Structure

Having set up our project directory, it's time to lay out the structure of our project. We'll be creating several folders, each with a specific purpose:

![project folder structure](https://www.freecodecamp.org/news/content/images/2024/05/ProjectFolder.png)

-   `AppDataContext`: This folder will contain the database context, which is responsible for interacting with the database.
-   `Contracts`: This folder will house our Data Transfer Objects (DTOs), which are used to shape the data sent between the client and the server.
-   `Models`: This folder will contain the Todo model, which represents the structure of a Todo item.
-   `Controllers`: This folder will house the TodoController, which handles incoming HTTP requests and sends responses.
-   `Interfaces`: This folder will contain the IService interface, which defines the contract for our service class.
-   `Services`: This folder will house the Service class, which implements the IService interface and contains the business logic of our application.
-   `Mapping`: This folder will contain the mapping profile, which is used to map properties between different objects.
-   `Middleware`: This folder will house the exception middleware, which handles exceptions globally across our application.

_Congratulations!_ You've successfully set up your project directory and established the project structure. In the next section, we'll delve into defining the Todo model.

### How to Adjust the Program.cs File for ControllerBase

When creating a new application using the `dotnet new webapi` command in .NET Core 6 and onwards, the generated project is a minimal web API project. But for this tutorial, we'll be using the traditional way of creating APIs, which requires some adjustments to the `Program.cs` file.

Before we dive into the changes, let's briefly discuss what a minimal API is.

### Understanding Minimal APIs

In .NET 6, Microsoft introduced a new feature known as Minimal APIs. These APIs are simpler and more lightweight than traditional APIs. They allow you to define your API routes and endpoints using a single file, without the need for controllers or startup classes. This approach facilitates the creation of small, focused APIs that are quick to build and easy to maintain.

However, for the purpose of this tutorial, we'll stick to the traditional API structure. Let's proceed with the necessary changes to the `Program.cs` file.

![Initial view of Program.cs](https://www.freecodecamp.org/news/content/images/2024/05/Program.cs.png)

The image above displays the initial state of the `Program.cs` file when you create a new web API project. To adapt it for use with ControllerBase, we need to remove some code and add new code.

Start by deleting everything in the `Program.cs` file and replacing it with the following code:

```

 // program.cs
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
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

Now we can proceed to the next step, where we'll define the Todo model.

## Step 3: Create the Todo Model

Before diving into creating our Todo model, it's important to know what a model does in `.NET CORE`. Think of a `model` as a `blueprint` for the kind of data our application will work with. It helps us organize and manage this data efficiently.

For our Todo list app, we need a clear picture of what each Todo item looks like. This means deciding on things like names, descriptions, whether it's done or not, deadlines, priorities, and when it was made or changed. By being clear about these details, we can handle and show our Todo items well.

### Meet the Todo Model

Now, let's make our idea real by creating the `Todo` model. This model is like a template for our Todo items, making sure they have all the right pieces.

Let's create a new file called `Todo.cs` in the `Models` folder and fill it with this code:

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

Here's what each part of the `Todo` model means:

-   **Id**: A special number that makes each Todo item unique.
-   **Title**: The name of the Todo item.
-   **Description**: Extra details about the Todo item.
-   **IsComplete**: Whether the Todo item is finished or not.
-   **DueDate**: The date by which the Todo item needs to be done.
-   **Priority**: How important the Todo item is.
-   **CreatedAt** and **UpdatedAt**: When the Todo item was first made and last changed.

The `[Key]` tag tells us that `Id` is the main way to identify each Todo item in our database.

By having a clear `Todo` model, we can easily keep track of and display our Todo items in the best way possible.

In ASP.NET Core, models can be used to represent a variety of things. One such use case is error handling. When an error occurs in our application, we can create a model for that error and return it to the client.

Let's create a model specifically for error handling in our application.

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

This ErrorResponse model will be used to return error messages to the client when an error occurs in our application. It includes a title for the error, massage, and a status code, providing the client with useful information about what went wrong.

Let's define another model to manage our database connection string.

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

The `DbSettings` model is designed to encapsulate the connection string for our database. It contains a single property, `ConnectionString`, which will store the actual connection string value.

With our `Todo` model in place, we're now ready to proceed with setting up the database context.

Before we begin setting up our database, we need to install the necessary packages for our project.

### Package Installation

To set up our project, we need to install several packages. We'll use the dotnet CLI for this task.

Before we begin, ensure you're in the root directory of your project. If you're unsure of your current location in the terminal, you can verify it by running the following command:

```
ls
```

This command will list all the files and folders in your current directory. The image below shows the terminal output after running the `ls` command.

![Terminal ls file](https://www.freecodecamp.org/news/content/images/2024/05/ls-terminal.png)

If your terminal output matches the image above, you're in the correct directory to install the packages.

Now, let's install the packages:

```
dotnet add package Microsoft.EntityFrameworkCore --version 8.0.0 
dotnet add package Microsoft.EntityFrameworkCore.Design --version 8.0.0
dotnet add package Microsoft.EntityFrameworkCore.SqlServer --version 8.0.0
dotnet add package AutoMapper --version 13.0.1
```

Here's a brief overview of what these packages do:

-   `Microsoft.EntityFrameworkCore`: Provides the core Entity Framework Core functionality, enabling us to interact with our database.
-   `Microsoft.EntityFrameworkCore.Design`: Includes design-time components for Entity Framework Core, such as migrations.
-   `Microsoft.EntityFrameworkCore.SqlServer`: Allows us to use SQL Server as our database provider.
-   `AutoMapper`: Simplifies object-to-object mapping, making it easier to map properties between different objects.

**Note**: Ensure you install the same versions of the packages as shown above to avoid any compatibility issues.

To confirm that all the packages have been installed successfully, navigate to the `TodoAPI.csproj` file located in the root directory of your project. The installed packages should be listed under the `ItemGroup` section.

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

The above `TodoAPI.csproj` file shows the installed packages listed under the `ItemGroup` section. If your `TodoAPI.csproj` file reflects the same, it confirms that the packages have been installed successfully.

With the necessary packages installed, we're now ready to set up the database context for our Todo API.

## Step 4: Set Up the Database Context

In ASP.NET Core, the database context is a crucial component that manages interactions with the database. It's responsible for tasks such as establishing a connection to the database, querying data, and saving changes.

To enable our `Todo API` to interact with the database, we need to create a database context.

Let's create a new file named `TodoDbContext` in the `AppDataContext` folder and populate it with the following code:

```
// AppDataContext/TodoDbContext.cs

using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using TodoAPI.Models;

namespace TodoAPI.AppDataContext
{

    // TodoDbContext class inherits from DbContext
     public class TodoDbContext : DbContext
     {

        // DbSettings field to store the connection string
         private readonly DbSettings _dbsettings;

            // Constructor to inject the DbSettings model
         public TodoDbContext(IOptions<DbSettings> dbSettings)
         {
             _dbsettings = dbSettings.Value;
         }


        // DbSet property to represent the Todo table
         public DbSet<Todo> Todos { get; set; }

         // Configuring the database provider and connection string

         protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
         {
             optionsBuilder.UseSqlServer(_dbsettings.ConnectionString);
         }

            // Configuring the model for the Todo entity
         protected override void OnModelCreating(ModelBuilder modelBuilder)
         {
             modelBuilder.Entity<Todo>()
                 .ToTable("TodoAPI")
                 .HasKey(x => x.id);
         }
     }
}
```

Here's a breakdown of the `TodoDbContext` class:

-   **`TodoDbContext`**: This class, which inherits from `DbContext` (a part of Entity Framework Core), is the primary class that interacts with the database.
-   **`_dbsettings`**: This private field stores the connection string for our database. We inject the `DbSettings` model, which we created earlier to manage the connection string, into the `TodoDbContext` class.
-   **`Todos`**: This property represents the `Todo` table in our database. It's a `DbSet` of `Todo` objects, which allows us to query and save instances of `Todo`.
-   **`OnConfiguring`**: This method configures the database provider and connection string. We're using SQL Server as our database provider, and the connection string is retrieved from the `DbSettings` model.
-   **`OnModelCreating`**: This method configures the model for the `Todo` entity. We specify the table name, primary key, and other configurations for the `Todo` entity.

To use our `TodoDbContext` for interacting with the database, we need to register it in the `Program.cs` file. This registration process is part of setting up the Dependency Injection (DI) container in .NET Core.

Here's how to do it:

```
// Program.cs


using TodoAPI.AppDataContext;
using TodoAPI.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();



 // Add  This to in the Program.cs file
builder.Services.Configure<DbSettings>(builder.Configuration.GetSection("DbSettings")); // Add this line
builder.Services.AddSingleton<TodoDbContext>(); // Add this line




var app = builder.Build();

// Add this line

{
    using var scope = app.Services.CreateScope(); // Add this line
    var context = scope.ServiceProvider; // Add this line
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

In the code snippet above, we're doing two things:

-   Configuring the database settings by binding the `DbSettings` section from the `appsettings.json` file to the `DbSettings` class. This allows us to access the database connection string in our application.
-   Registering the `TodoDbContext` with the DI container as a singleton service. This means that a single instance of `TodoDbContext` will be created and shared across the entire application.

With the database context registered, we can now use it to perform CRUD operations on our Todo items.

Now let's check if everything is working fine by running the application.

```

dotnet run
```

If you see the following output, it means your application is running successfully:

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

**Note**: If you encounter any errors, just make sure you've followed all the steps correctly and that the necessary packages have been installed successfully. If you see some warnings, you can ignore them for now.

With the `TodoDbContext` class now set up, we're ready to define the Contracts for our application.

## Step 5: Define Data Transfer Objects (DTOs)

In the context of .NET development, a Data Transfer Object (DTO) is a simple object that carries data between processes. It's often used in conjunction with a service layer to shape the data sent between the client and the server.

For our Todo API, we'll define two DTOs: `CreateTodoRequest` and `UpdateTodoRequest`. These DTOs will help us enforce the structure and validation of the data sent to our API.

Navigate to the `Contracts` folder and create two new files: `CreateTodoRequest.cs` and `UpdateTodoRequest.cs`.

### The `CreateTodoRequest` File

The `CreateTodoRequest` DTO will define the structure and validation rules for creating a new Todo item. Add the following code to the `CreateTodoRequest.cs` file:

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

In this DTO, we've defined properties for `Title`, `Description`, `DueDate`, and `Priority`. We've also added validation attributes like `[Required]`, `[StringLength]`, and `[Range]` to enforce certain rules on these properties.

### The `UpdateTodoRequest` File

The `UpdateTodoRequest` DTO will define the structure and validation rules for updating an existing Todo item. Add the following code to the `UpdateTodoRequest.cs` file:

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

In this DTO, we've defined properties for `Title`, `Description`, `IsComplete`, `DueDate`, and `Priority`. The `IsComplete` property is nullable, which means it can be set to `null` if not provided. We've also added validation attributes like `[StringLength]` and `[Range]` to enforce certain rules on these properties.

With these DTOs in place, we're now ready to implement the service layer for our Todo API.

Now test the application, and see if there are any errors.

```

 dotnet  build
```

If you see the following output, it means your application is running successfully:

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

**Note**: If you encounter any errors, make sure you've followed all the steps correctly and that the necessary packages have been installed successfully. If you see some warnings, you can ignore them for now.

With the DTOs defined, we're now ready to implement the Mapping for the Todo API.

## Step 6: Implement Object Mapping for the Todo API

Having defined the DTOs for our Todo API, the next step is to implement object mapping. This process allows us to convert between the DTOs and the Todo model, a critical aspect of data transformation in our application.

To streamline this process, we'll use the `AutoMapper` library. AutoMapper is a widely-used library that simplifies object-to-object mapping, making it easier to map properties between different objects.

We've already installed the `AutoMapper` package in our project. Now, in the `MappingProfiles` folder, create a new file named `AutoMapperProfile.cs` and add the following code:

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

Let's break down the `AutoMapperProfile` class:

-   **AutoMapperProfile**: This class, which inherits from `Profile` (a class provided by AutoMapper), allows us to define mapping configurations.
-   **CreateMap**: This method creates a mapping between two objects. Here, we're mapping from `CreateTodoRequest` to `Todo` and from `UpdateTodoRequest` to `Todo`.
-   **ForMember**: This method configures the mapping for a specific property. We're using it to ignore the `id`, `CreatedAt`, and `UpdatedAt` properties when mapping from the DTOs to the `Todo` model.

Now let's add the automapper to the DI container in the `Program.cs` file.

```

// Program.cs

using TodoAPI.AppDataContext;
using TodoAPI.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();



 // Add  This to in the Program.cs file
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());  // Add this line


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

With the mapping profiles in place, we can now implement the service layer for our Todo API.

## Step 7: Implement Global Exception Handling Middleware

As we progress with our Todo API, it's crucial to implement a mechanism for handling exceptions globally. This ensures that any exceptions that occur during the execution of our application are caught and handled appropriately, providing meaningful error messages to the client.

.NET 8 introduces the `IExceptionHandler` interface, which simplifies the process of creating a custom exception handler. This handler will catch all exceptions that occur in our application and return a consistent error response to the client.

Let's create a global exception handler in the `Middleware` folder. Create a new file named `GlobalExceptionHandler.cs` and add the following code:

```
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

Here's a breakdown of the `GlobalExceptionHandler` class:

-   **GlobalExceptionHandler**: This class implements the `IExceptionHandler` interface, enabling global exception handling in our application.
-   **TryHandleAsync**: This method is invoked when an exception occurs. It logs the error message, creates an `ErrorResponse` object, sets the status code and title based on the exception type, and returns a consistent error response to the client.
-   **ErrorResponse**: This class represents the error response returned to the client when an exception occurs. It contains properties for the error message, status code, and title.
-   **BadHttpRequestException**: This case handles exceptions of type `BadHttpRequestException` and sets the status code and title accordingly.

After setting up the global exception handler, we need to register it in our `Program.cs` file:

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



builder.Services.AddExceptionHandler<GlobalExceptionHandler>(); // Add this line

builder.Services.AddProblemDetails();  // Add this line

// Adding of login 
builder.Services.AddLogging();  //  Add this line



var app = builder.Build();


// ......


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection(); // Add this line

app.UseExceptionHandler();
app.UseAuthorization();

app.MapControllers();

app.Run();


// ...
```

## Step 8: Implement the Service Layer and Service Interface

In .NET development, the service layer encapsulates the core business logic of an application. It serves as a bridge between the controller and the database, ensuring a clean separation of concerns.

First, let's define an interface for our service layer.

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

Here's a brief overview of the methods defined in the `ITodoServices` interface:

-   `GetAllAsync`: Retrieves all Todo items from the database.
-   `GetByIdAsync`: Fetches a specific Todo item by its `Id`.
-   `CreateTodoAsync`: Adds a new Todo item to the database.
-   `UpdateTodoAsync`: Modifies an existing Todo item in the database.
-   `DeleteTodoAsync`: Removes a Todo item from the database.

Now, let's create a service class that implements these methods. We'll use Dependency Injection to inject the `ITodoServices` interface into the service class, making our code more modular, testable, and maintainable.

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

At this point, you'll encounter an error because we haven't implemented the methods from the `ITodoServices` interface in the `TodoServices` class.

The below image shows the error message that appears when the methods from the `ITodoServices` interface are not implemented in the `TodoServices` class.

![Error in the TodoServices class](https://www.freecodecamp.org/news/content/images/2024/05/InterfaceError.png)

To resolve this, hover over `ITodoServices`, click on the light bulb icon that appears, and select 'Implement interface'. This will automatically generate stubs for the methods defined in the `ITodoServices` interface.

The below image shows the 'Implement interface' option that appears when hovering over `ITodoServices` in the `TodoServices` class.

![Implementing the ITodoServices interface](https://www.freecodecamp.org/news/content/images/2024/05/QickFixt.png)

After implementing the interface, the `TodoServices` class should look like this:

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

### How to Enhance the TodoServices Class with Dependency Injection

Now, let's enrich our `TodoServices` class with some essential properties. These properties will provide the necessary tools for interacting with the database, logging, and object mapping.

At the top of the `TodoServices` class, add the following properties:

```
// Services/TodoServices.cs

// ...

private readonly TodoDbContext _context;
private readonly ILogger<TodoServices> _logger;
private readonly IMapper _mapper;

// ...
```

Here's a brief explanation of these properties:

-   `_context`: An instance of the `TodoDbContext` class, enabling us to interact with the database.
-   `_logger`: An instance of the `ILogger` class, facilitating logging throughout our application.
-   `_mapper`: An instance of the `IMapper` class, allowing us to perform object-to-object mapping using AutoMapper.

Next, we'll update the constructor of the `TodoServices` class to inject these dependencies:

```
// Services/TodoServices.cs

// ...

public TodoServices(TodoDbContext context, ILogger<TodoServices> logger, IMapper mapper)
{
    _context = context;
    _logger = logger;
    _mapper = mapper;
}

// ...
```

With these dependencies injected, we're now ready to implement the methods defined in the `ITodoServices` interface. We'll begin with the `GetAllAsync` method in the next section.

## Step 9: Implement the CreateTodoAsync Method in the TodoServices Class

Now, let's implement the `CreateTodoAsync` method in the `TodoServices` class. This method will handle the creation of new Todo items in our database.

Navigate to the `TodoServices` class and add the following code to the `CreateTodoAsync` method:

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
        _logger.LogError(ex, "An error occurred while creating the Todo item.");
        throw new Exception("An error occurred while creating the Todo item.");
    }
}

// ...
```

Here's a breakdown of the `CreateTodoAsync` method:

-   **Mapping**: We use AutoMapper to convert the `CreateTodoRequest` object into a `Todo` entity.
-   **CreatedAt**: We set the `CreatedAt` property of the `Todo` entity to the current UTC date and time.
-   **Adding to the Database**: We add the `Todo` entity to the `Todos` DbSet in our context and save the changes asynchronously.
-   **Error Handling**: We catch any exceptions that might occur during the process, log the error, and throw a new exception with a descriptive error message.

With the `CreateTodoAsync` method implemented, we can now create new Todo items in our database.

## Step 10: Implement the GetAllAsync Method in the Service Class

Next, let's implement the `GetAllAsync` method in the `TodoServices` class. This method will retrieve all Todo items from the database.

Navigate to the `TodoServices` class and add the following code to the `GetAllAsync` method:

```


// Services/TodoServices.cs

// ...


 // Get all TODO Items from the database 
 public async Task<IEnumerable<Todo>> GetAllAsync()
 {
     var todo= await _context.Todos.ToListAsync();
     if (todo == null)
     {
         throw new Exception(" No Todo items found");
     }
     return todo;

 }

// ...
```

Here's a breakdown of the `GetAllAsync` method:

-   **Retrieving Todo Items**: We use Entity Framework Core's `ToListAsync` method to fetch all Todo items from the database.
    
-   **Error Handling**: If no Todo items are found, we throw an exception with a descriptive error message.
    

Now Your Service class should look like this:

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




        //  Create Todo for it be save in the datbase 

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
                _logger.LogError(ex, "An error occurred while creating the todo item.");
                throw new Exception("An error occurred while creating the todo item.");
            }
        }

        public async Task<IEnumerable<Todo>> GetAllAsync()
        {
            var todo = await _context.Todos.ToListAsync();
            if (todo == null)
            {
                throw new Exception(" No Todo items found");
            }
            return todo;

        }
        public Task DeleteTodoAsync(Guid id)
        {
            throw new NotImplementedException();
        }

        // Get all TODO Items from the database 


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

Now we have implemented the `CreateTodoAsync` and `GetAllAsync` methods in the `TodoServices` class. Before we proceed to implement the remaining methods, let's create routes for our API in the Controllers folder. So now let's create the TodoController class.

## Step 11: Create the TodoController Class

In ASP.NET Core, controllers are responsible for handling incoming HTTP requests and sending responses. They serve as the entry point for our API, defining the routes and actions that clients can interact with.

Let's create a new file named `TodoController.cs` in the `Controllers` folder and add the following code:

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

The `TodoController` class inherits from `ControllerBase`, a base class provided by ASP.NET Core for creating controllers. We've also added a route prefix of `api/[controller]` to the controller, which will be used as the base route for all actions in the controller.

## Step 12: Implement the CreateTodoAsync Method in the TodoController Class

Now that we have our Controller class, let's implement the `CreateTodoAsync` method in the `TodoController` class. This method will handle the creation of new Todo items in our database.

Navigate to the `TodoController` class and add the following code to the `CreateTodoAsync` method:

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
          return Ok(new { message = "Blog post successfully created" });

      }
      catch (Exception ex)
      {
          return StatusCode(500, new { message = "An error occurred while creating the  crating Todo Item", error = ex.Message });

      }
  }
  // ...
```

Here's a breakdown of the `CreateTodoAsync` method:

-   **Model Validation**: We check if the request model is valid using `ModelState.IsValid`. If the model is not valid, we return a `BadRequest` response with the model state errors.
    
-   **Creating a Todo Item**: We call the `CreateTodoAsync` method from the `ITodoServices` interface to create a new Todo item in the database.
    
-   **Success Response**: If the Todo item is created successfully, we return an `Ok` response with a success message.
    
-   **Error Handling**: If an error occurs during the creation process, we return a `500 Internal Server Error` response with an error message.
    

Now let's implement the `GetAllAsync` method in the `TodoController` class. This method will retrieve all Todo items from the database.

Navigate to the `TodoController` class and add the following code to the `GetAllAsync` method:

```

// Controllers/TodoController.cs 

// ...

  [HttpGet]
  public async Task<IActionResult> GetAllAsync()
  {
      try
      {
          var todo = await _todoServices.GetAllAsync();
          if (todo == null || !todo.Any())
          {
              return Ok(new { message = "No Todo Items  found" });
          }
          return Ok(new { message = "Successfully retrieved all blog posts", data = todo });

      }
      catch (Exception ex)
      {
          return StatusCode(500, new { message = "An error occurred while retrieving all Tood it posts", error = ex.Message });


      }
  }

// ...
```

Here's a breakdown of the `GetAllAsync` method:

-   **Retrieving Todo Items**: We call the `GetAllAsync` method from the `ITodoServices` interface to fetch all Todo items from the database.
    
-   **Success Response**: If Todo items are retrieved successfully, we return an `Ok` response with a success message and the list of Todo items.
    
-   **Error Handling**: If an error occurs during the retrieval process, we return a `500 Internal Server Error` response with an error message.
    

Now your `TodoController` class should look like this:

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



// Creating new Todo Item
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
          return Ok(new { message = "Blog post successfully created" });

      }
      catch (Exception ex)
      {
          return StatusCode(500, new { message = "An error occurred while creating the  crating Todo Item", error = ex.Message });

      }
  }

    // Get all Todo Items

      [HttpGet]
  public async Task<IActionResult> GetAllAsync()
  {
      try
      {
          var todo = await _todoServices.GetAllAsync();
          if (todo == null || !todo.Any())
          {
              return Ok(new { message = "No Todo Items  found" });
          }
          return Ok(new { message = "Successfully retrieved all blog posts", data = todo });

      }
      catch (Exception ex)
      {
          return StatusCode(500, new { message = "An error occurred while retrieving all Tood it posts", error = ex.Message });


      }
  }

    }
}
```

At this point, we've implemented the `CreateTodoAsync` and `GetAllAsync` methods in the `TodoController` class. These methods allow us to create new Todo items and retrieve all Todo items from the database. Let's try to run the application and see if everything is working fine.

Run the application by running the following command:

```


dotnet run
```

If you see the following output, it means your application is running successfully:

```

info: Microsoft.Hosting.Lifetime[14]
      Now listening on: http://localhost:5086
info: Microsoft.Hosting.Lifetime[0]
      Application started. Press Ctrl+C to shut down.
info: Microsoft.Hosting.Lifetime[0]
      Hosting environment: Development
info: Microsoft.Hosting.Lifetime[0]
      Content root path: E:\Todo\TodoAPI4
```

While we'll be using Postman within Visual Studio Code for making API requests, it's worth noting that .NET 8 includes a built-in Swagger UI. This feature allows us to interact with our API endpoints directly from a web browser. To access the Swagger UI, open your browser and navigate to `https://localhost:5086/swagger/index.html`. You should see a page similar to the one below:

![SwaggerUI](https://www.freecodecamp.org/news/content/images/2024/05/SwaggerUI.png) This indicates that we've made significant progress. We've created an API that can create and retrieve Todo items. Let's test this by attempting to create a new Todo item using our API.

Open Postman and create a new POST request with the following URL: `https://localhost:5086/api/todo`. Set the request body to the following JSON object:

```
{
    "title": "Learn ASP.NET Core",
    "description": "Learn how to build web applications with ASP.NET Core",
    "dueDate": "2022-12-31T00:00:00",
    "priority": 5
}
```

Upon executing this request, you may encounter an error. This is because we haven't yet added our connection string to the `appsettings.json` file. Let's rectify this.

![PostmanError](https://www.freecodecamp.org/news/content/images/2024/05/PostmanError.png)

**Note**: The error above is due to the absence of a connection string in the `appsettings.json` file. Let's add the connection string to the `appsettings.json` file.

Before we do that, let's setup or SQL Server Database. First Open your SQL Server Management Studio and you should see the below screen:

![SQLServerManagementStudio](https://www.freecodecamp.org/news/content/images/2024/05/SQLServerManagementStudio.png)

To connect to the SQL Server, where is says `Server Name` you can type `localhost` or `.` and click on the `Connect` button.

After connecting to the SQL Server, you will see the following screen:

![SQLServerManagementStudio2](https://www.freecodecamp.org/news/content/images/2024/05/SQLServerManagementStudio2.png)

Now go to your `appsettings.json` file and add the following connection string:

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

Let me explain the connection string above:

-   `Server`: This is the server name where the database is hosted. In this case, we're using `localhost` to connect to the local SQL Server instance.
-   `Database`: This is the name of the database we want to connect to. We've set it to `TodoAPIDb`.
-   `Integrated Security`: This parameter specifies that we're using Windows authentication to connect to the database.
-   `TrustServerCertificate`: This parameter specifies that we trust the server certificate when connecting to the database.

Now we need to register our `Service` and `Iservices` in the `Program.cs` file.

Add the service to the `Program.cs` file:

```

// Program.cs

// ...

builder.Services.AddScoped<ITodoServices, TodoServices>();

// ...
```

## Step 13: Implement Migrations and Update the Database

Migrations in Entity Framework Core provide a mechanism to keep the database schema in sync with the application's data model. They generate SQL scripts that can be applied to the database to reflect changes in the data model, eliminating the need for manual database schema updates.

To create a migration, ensure you're in the root directory of your project and run the following command in the terminal:

```
dotnet ef migrations add InitialCreate
```

Upon successful execution, you'll see an output similar to the following:

```
dotnet ef migrations add InitialCreate
Build started...
Build succeeded.
Done. To undo this action, use 'ef migrations remove'
```

This command generates a new migration named `InitialCreate`, which contains SQL scripts derived from the changes in our data model. A new folder named `Migrations` will appear in your project directory.

To apply the migration and update the database, execute the following command:

```
dotnet ef database update
```

You might encounter an error like this:

```
  at Microsoft.EntityFrameworkCore.Design.OperationExecutor.UpdateDatabase.<>c__DisplayClass0_0.<.ctor>b__0()
   at Microsoft.EntityFrameworkCore.Design.OperationExecutor.OperationBase.Execute(Action action)
Only the invariant culture is supported in globalization-invariant mode. See https://aka.ms/GlobalizationInvariantMode for more information. (Parameter 'name')
en-us is an invalid culture identifier.
```

This error indicates that the `en-us` culture is not supported in globalization-invariant mode. To resolve this, open the `TodoAPI.csproj` file and change `<InvariantGlobalization>true</InvariantGlobalization>` to `<InvariantGlobalization>false</InvariantGlobalization>`.

After making this change, run the `dotnet ef database update` command again. If the migration is successful, you'll see an output similar to the following:

```

Build started...
Build succeeded.
Applying migration '20240518180222_InitialCreate'.
Done.
```

This indicates that the migration has been applied successfully, and the database has been updated with the necessary schema changes.

Congratulations! You've successfully created a migration and updated the database schema. Now, let's test our API by creating a new Todo item using Postman.

## Step 14: Verify Your API with Postman

Before we can interact with our API, we need to ensure that our application is up and running. Start the application by executing the following command in the terminal:

```
dotnet run
```

With the application running, we can now use Postman to send requests to our API. Let's create a new Todo item:

1.  Open Postman and create a new request.
2.  Set the request method to `POST`.
3.  Enter the following URL: `https://localhost:5086/api/todo`.
4.  In the `Headers` tab, set the `Content-Type` to `application/json`.
5.  In the `Body` tab, select `raw` and enter the following JSON object:

```
{
    "title": "Learn ASP.NET Core",
    "description": "Learn how to build web applications with ASP.NET Core",
    "dueDate": "2022-12-31T00:00:00",
    "priority": 5
}
```

6.  Click on the `Send` button to execute the request.

If the request is successful, you'll receive a response similar to the one below:

```
{
    "message": "Todo item successfully created"
}
```

The image below illustrates the successful creation of a new Todo item using Postman:

![PostmanSuccess](https://www.freecodecamp.org/news/content/images/2024/05/PostmanSuccess.png)

Now that we've successfully created a new Todo item, let's retrieve all Todo items from the database using our API.

## Step 15: Retrieve All Todo Items

To retrieve all Todo items from the database, follow these steps:

1.  Open Postman and create a new request.
    
2.  Set the request method to `GET`.
    
3.  Enter the following URL: `https://localhost:5086/api/todo`.
    
4.  Click on the `Send` button to execute the request.
    

If the request is successful, you'll receive a response similar to the one below:

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

The image below illustrates the successful retrieval of all Todo items using Postman:

![PostmanGetAll](https://www.freecodecamp.org/news/content/images/2024/05/PostmanGetAll.png)

Congratulations! You've successfully created an API that can create and retrieve Todo items. This marks the completion of our Todo API project. You've learned how to set up a .NET Core project, define models, create a database context, implement a service layer, and create API endpoints. You've also learned how to use Postman to interact with your API and test its functionality.

Now let's move on to create the `GetByIdAsync`, `UpdateTodoAsync`, and `DeleteTodoAsync` methods in the `TodoServices` class and `TodoController` class.

## Step 16: Implement the GetByIdAsync Method

The `GetByIdAsync` method retrieves a specific Todo item by its `Id`. We'll implement this method in both the `TodoServices` and `TodoController` classes.

### The `TodoServices` Class

In the `TodoServices` class, add the following code to the `GetByIdAsync` method:

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

This method uses Entity Framework Core's `FindAsync` method to fetch a Todo item by its `Id`. If no Todo item is found, it throws a `KeyNotFoundException` with a descriptive error message.

### The `TodoController` Class

In the `TodoController` class, add the following code to the `GetByIdAsync` method:

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

This method calls the `GetByIdAsync` method from the `ITodoServices` interface to fetch a Todo item by its `Id`. If a Todo item is retrieved successfully, it returns an `Ok` response with a success message and the Todo item. If an error occurs during the retrieval process, it returns a `500 Internal Server Error` response with an error message.

## Step 17: Implement the UpdateTodoAsync Method

The `UpdateTodoAsync` method in the `TodoServices` class modifies an existing Todo item in the database. Let's implement this method now.

Navigate to the `TodoServices` class and add the following code to the `UpdateTodoAsync` method:

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
             throw new Exception($"Todo item with id {id} not found.");
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
         _logger.LogError(ex, $"An error occurred while updating the todo item with id {id}.");
         throw;
     }
 }

// ...
```

Here's a breakdown of the `UpdateTodoAsync` method:

-   **Retrieving a Specific Todo Item**: We use Entity Framework Core's `FindAsync` method to fetch a Todo item by its `Id`.
    
-   **Updating the Todo Item**: We update the Todo item properties based on the values provided in the `UpdateTodoRequest` object.
    
-   **Error Handling**: If no Todo item is found with the specified `Id`, we throw an exception with a descriptive error message.
    

Now let's implement the `UpdateTodoAsync` method in the `TodoController` class. This method will modify an existing Todo item in the database.

Navigate to the `TodoController` class and add the following code to the `UpdateTodoAsync` method:

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
               return NotFound(new { message = $"Todo Item  with id {id} not found" });
           }

           await _todoServices.UpdateTodoAsync(id, request);
           return Ok(new { message = $" Todo Item  with id {id} successfully updated" });

       }
       catch (Exception ex)
       {
           return StatusCode(500, new { message = $"An error occurred while updating blog post with id {id}", error = ex.Message });


       }


   }

// ...
```

Here's a breakdown of the `UpdateTodoAsync` method:

-   **Model Validation**: We check if the request model is valid using `ModelState.IsValid`. If the model is not valid, we return a `BadRequest` response with the model state errors.
    
-   **Retrieving a Specific Todo Item**: We call the `GetByIdAsync` method from the `ITodoServices` interface to fetch a Todo item by its `Id`.
    
-   **Updating the Todo Item**: If the Todo item is found, we call the `UpdateTodoAsync` method from the `ITodoServices` interface to update the Todo item.
    
-   **Success Response**: If the Todo item is updated successfully, we return an `Ok` response with a success message.
    
-   **Error Handling**: If an error occurs during the update process, we return a `500 Internal Server Error` response with an error message.
    

## Step 18: Implement the DeleteTodoAsync Method

The `DeleteTodoAsync` method in the `TodoServices` class removes a Todo item from the database. Let's implement this method now.

Navigate to the `TodoServices` class and add the following code to the `DeleteTodoAsync` method:

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
         throw new Exception($"No  item found with the id {id}");
     }


 }

// ...
```

Here's a breakdown of the `DeleteTodoAsync` method:

-   **Retrieving a Specific Todo Item**: We use Entity Framework Core's `FindAsync` method to fetch a Todo item by its `Id`.
    
-   **Removing the Todo Item**: If the Todo item is found, we remove it from the `Todos` DbSet in our context and save the changes asynchronously.
    
-   **Error Handling**: If no Todo item is found with the specified `Id`, we throw an exception with a descriptive error message.
    

Now let's implement the `DeleteTodoAsync` method in the `TodoController` class. This method will remove a Todo item from the database.

Navigate to the `TodoController` class and add the following code to the `DeleteTodoAsync` method:

```

// Controllers/TodoController.cs

// ...

 [HttpDelete("{id:guid}")]
 public async Task<IActionResult> DeleteTodoAsync(Guid id)
 {
     try
     {
         await _todoServices.DeleteTodoAsync(id);
         return Ok(new { message = $"Todo  with id {id} successfully deleted" });

     }
     catch (Exception ex)
     {
         return StatusCode(500, new { message = $"An error occurred while deleting Todo Item  with id {id}", error = ex.Message });

     }
 }



// ...
```

Here's a breakdown of the `DeleteTodoAsync` method:

-   **Removing the Todo Item**: We call the `DeleteTodoAsync` method from the `ITodoServices` interface to remove a Todo item by its `Id`.
    
-   **Success Response**: If the Todo item is deleted successfully, we return an `Ok` response with a success message.
    
-   **Error Handling**: If an error occurs during the deletion process, we return a `500 Internal Server Error` response with an error message.
    

Now your `TodoServices` class should look like this:

```
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




        //  Create Todo for it to be saved in the datbase 

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
                _logger.LogError(ex, "An error occurred while creating the todo item.");
                throw new Exception("An error occurred while creating the todo item.");
            }
        }


        public async Task<Todo> GetByIdAsync(Guid id)
        {
            var todo = await _context.Todos.FindAsync(id);
            if (todo == null)
            {
                throw new Exception($" No Items with {id} found ");
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
                    throw new Exception($"Todo item with id {id} not found.");
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
                _logger.LogError(ex, $"An error occurred while updating the todo item with id {id}.");
                throw;
            }
        }
        public async Task<IEnumerable<Todo>> GetAllAsync()
        {
            var todo = await _context.Todos.ToListAsync();
            if (todo == null)
            {
                throw new Exception(" No Todo items found");
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
                throw new Exception($"No  item found with the id {id}");
            }


        }




    }
}
```

Now your `TodoController` class should look like this:

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



        // Creating new Todo Item
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
                return Ok(new { message = "Blog post successfully created" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred while creating the  crating Todo Item", error = ex.Message });

            }
        }

        // Get all Todo Items

        [HttpGet]
        public async Task<IActionResult> GetAllAsync()
        {
            try
            {
                var todo = await _todoServices.GetAllAsync();
                if (todo == null || !todo.Any())
                {
                    return Ok(new { message = "No Todo Items  found" });
                }
                return Ok(new { message = "Successfully retrieved all blog posts", data = todo });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred while retrieving all Tood it posts", error = ex.Message });


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
                    return NotFound(new { message = $"Now Todo item with id {id} not found" });

                }
                return Ok(new { message = $"Successfully retrieved  todo item with id {id}", data = todo });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = $"An error occurred while retrieving   todo item  with id {id}", error = ex.Message });

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
                    return NotFound(new { message = $"Todo Item  with id {id} not found" });
                }

                await _todoServices.UpdateTodoAsync(id, request);
                return Ok(new { message = $" Todo Item  with id {id} successfully updated" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = $"An error occurred while updating blog post with id {id}", error = ex.Message });


            }


        }


        [HttpDelete("{id:guid}")]
        public async Task<IActionResult> DeleteTodoAsync(Guid id)
        {
            try
            {
                await _todoServices.DeleteTodoAsync(id);
                return Ok(new { message = $"Todo  with id {id} successfully deleted" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = $"An error occurred while deleting Todo Item  with id {id}", error = ex.Message });

            }
        }


    }
}
```

Now that we've implemented the `GetByIdAsync`, `UpdateTodoAsync`, and `DeleteTodoAsync` methods in the `TodoServices` and `TodoController` classes, we can test our API to ensure that everything is working as expected.

## Step 19: Test Your API Endpoints with Postman

With our application up and running, we can now test all our API endpoints. We'll create new Todo items, retrieve all Todo items, fetch a specific Todo item by its `Id`, update a Todo item, and delete a Todo item using Postman. Let's start by creating three new Todo items.

Note that we'll be creating these Todo items one at a time, not all at once. Follow these steps for each Todo item:

1.  Open Postman and create a new request.
2.  Set the request method to `POST`.
3.  Enter the following URL: `http://localhost:5086/api/todo`.
4.  In the `Headers` tab, set the `Content-Type` to `application/json`.
5.  In the `Body` tab, select `raw` and enter one of the following JSON objects:

For the first Todo item:

```
{
    "title": "Learn ASP.NET Core",
    "description": "Learn how to build web applications with ASP.NET Core",
    "dueDate": "2022-12-31T00:00:00",
    "priority": 2
}
```

For the second Todo item:

```
{
    "title": "Learn C#",
    "description": "Learn how to build web applications with C#",
    "dueDate": "2022-12-31T00:00:00",
    "priority": 3
}
```

For the third Todo item:

```
{
    "title": "Learn SQL",
    "description": "Learn how to build web applications with SQL",
    "dueDate": "2022-12-31T00:00:00",
    "priority": 1
}
```

6.  Click on the `Send` button to execute the request for each Todo item.

If each request is successful, you'll receive a response similar to the one below:

```
{
    "message": "Todo item successfully created"
}
```

This indicates that the Todo item has been successfully created. Repeat the steps for each Todo item.

### How to Retrieve All Todo Items

To fetch all Todo items from the database, follow these steps:

1.  Launch Postman and initiate a new request.
2.  Set the HTTP method to `GET`.
3.  Input the following URL: `http://localhost:5086/api/todo`.
4.  Click the `Send` button to execute the request.

The image below demonstrates a successful retrieval of all Todo items using Postman:

![PostmanGetAll-1](https://www.freecodecamp.org/news/content/images/2024/05/PostmanGetAll-1.png)

### How to Fetch a Specific Todo Item by Id

To retrieve a specific Todo item using its `Id`, follow these steps:

1.  Launch Postman and initiate a new request.
2.  Set the HTTP method to `GET`.
3.  Input the following URL: `http://localhost:5086/api/todo/{id}`, replacing `{id}` with the `Id` of the Todo item you wish to retrieve. For example, `http://localhost:5086/api/todo/e9898d1b-9ad3-4482-ad65-08dc77664fab`.
4.  Click the `Send` button to execute the request.

Upon successful execution, you'll receive a response similar to the one below:

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

The image below demonstrates the successful retrieval of a specific Todo item using Postman:

![PostmanGetById](https://www.freecodecamp.org/news/content/images/2024/05/PostmanGetById.png))

### How to Update a Todo Item

In our Todo model, we have a property `isComplete` which is initially set to `false` when a Todo item is created. This property is used to indicate whether a task has been completed or not. To mark a task as complete, we need to update this property to `true`. Note that we can only update one Todo item at a time, and we identify the item to update by its `Id`.

Let's fetch all the Todo items, select one and update it by setting the `isComplete` property to `true`.

Follow these steps to update a Todo item:

1.  Launch Postman and initiate a new request.
2.  Set the HTTP method to `PUT`.
3.  Input the following URL: `http://localhost:5086/api/todo/{id}`, replacing `{id}` with the `Id` of the Todo item you wish to update. For example, `http://localhost:5086/api/todo/e9898d1b-9ad3-4482-ad65-08dc77664fab`.
4.  In the `Headers` tab, set the `Content-Type` to `application/json`.
5.  In the `Body` tab, select `raw` and enter the following JSON object:

```
{
    "id": "21ebe2c2-79c0-45d4-4139-08dc789e3eb2",
    "title": "Learn C#",
    "description": "Learn how to build web applications with C#",
    "isComplete": true, // Set the isComplete to true
    "dueDate": "2022-12-31T00:00:00",
    "priority": 3,
    "createdAt": "2024-05-20T07:27:39.3730049+00:00",
    "updatedAt": "0001-01-01T00:00:00"
}
```

6.  Click the `Send` button to execute the request.

Upon successful execution, you'll receive a response similar to the one below:

```
{
    "message": "Todo Item with id 21ebe2c2-79c0-45d4-4139-08dc789e3eb2 successfully updated"
}
```

The image below demonstrates the successful update of a Todo item using Postman:

![PostmanUpdate](https://www.freecodecamp.org/news/content/images/2024/05/PostmanUpdate.png)

**Note**: The `isComplete` property of the Todo item has been updated to `true`. Now, when you fetch all Todo items from the database, you will see the `isComplete` property is `true` for the updated Todo item.

Now let's see how to delete a Todo item from the database.

### How to Delete a Todo Item

To remove a Todo item from the database, follow these steps:

1.  Open Postman and create a new request.
2.  Set the HTTP method to `DELETE`.
3.  Enter the following URL: `http://localhost:5086/api/todo/{id}`, replacing `{id}` with the `Id` of the Todo item you intend to remove. For instance, `http://localhost:5086/api/todo/e9898d1b-9ad3-4482-ad65-08dc77664fab`.
4.  Click the `Send` button to execute the request.

If the request is successful, you'll receive a response similar to the one below:

```
{
    "message": "Todo item with id 21ebe2c2-79c0-45d4-4139-08dc789e3eb2 successfully deleted"
}
```

The image below illustrates the successful deletion of a Todo item using Postman:

![PostmanDelete](https://www.freecodecamp.org/news/content/images/2024/05/PostmanDelete.png)

Well done! You've successfully implemented the `GetByIdAsync`, `UpdateTodoAsync`, and `DeleteTodoAsync` methods in the `TodoServices` and `TodoController` classes. You've also verified your API endpoints using Postman to ensure they're functioning as expected. You can

### Source Code

The entire source code for this project is readily available in the [TodoAPI][34] GitHub repository. I encourage you to delve into the codebase, tinker with various functionalities, and bolster your proficiency in crafting APIs using ASP.NET Core 8.

## Conclusion

In this guide, we've journeyed through the process of constructing a robust Todo API using the power of ASP.NET Core 8. We initiated our project from scratch, meticulously defining the essential models that form the backbone of our Todo application.

We then created a database context, a crucial step that facilitated our interaction with the database. To further streamline this interaction, we implemented a service layer, effectively abstracting the complexities of direct database operations.

Next, we created our API endpoints. These endpoints serve as the gateways for `creating`, `retrieving`, `updating`, and `deleting` Todo items, thereby providing comprehensive functionality to our application.

The final stage of our journey involved rigorous testing of our API using Postman. This ensured that our application was not only built as per our design but also functioned as expected, providing a reliable and efficient service.

As we conclude, it's important to remember that the knowledge gained here forms a solid foundation for building more complex and feature-rich APIs. The journey of learning and exploration doesn't end here – it's just the beginning. Happy coding!

[1]: #heading-prerequisites
[2]: #heading-how-to-enhance-your-development-experience-with-visual-studio-code-extensions
[3]: #heading-learning-outcomes
[4]: #heading-what-is-net-core
[5]: #heading-net-core-vs-net-framework
[6]: #heading-step-1-set-up-your-project-directory
[7]: #heading-step-2-establish-your-project-structure
[8]: #heading-step-3-create-the-todo-model
[9]: #heading-step-4-set-up-the-database-context
[10]: #heading-step-5-define-data-transfer-objects-dtos
[11]: #heading-step-6-implement-object-mapping-for-the-todo-api
[12]: #heading-step-7-implement-global-exception-handling-middleware
[13]: #heading-step-8-implement-the-service-layer-and-service-interface
[14]: #heading-step-9-implement-the-createtodoasync-method-in-the-todoservices-class
[15]: #heading-step-10-implement-the-getallasync-method-in-the-service-class
[16]: #heading-step-11-create-the-todocontroller-class
[17]: #step-12
[18]: #heading-step-13-implement-migrations-and-update-the-database
[19]: #heading-step-14-verify-your-api-with-postman
[20]: #heading-step-15-retrieve-all-todo-items
[21]: #heading-step-16-implement-the-getbyidasync-method
[22]: #heading-step-17-implement-the-updatetodoasync-method
[23]: #heading-step-18-implement-the-deletetodoasync-method
[24]: #heading-step-19-test-your-api-endpoints-with-postman
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