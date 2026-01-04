---
title: Macros Procedurales en Rust – Un Manual para Principiantes
date: 2024-09-04T15:52:15.042Z
author: Anshul Sanghi
authorURL: https://www.freecodecamp.org/news/author/anshulsanghi/
originalURL: https://www.freecodecamp.org/news/procedural-macros-in-rust/
posteditor: ""
proofreader: ""
---

En este manual, aprenderás sobre las macros procedurales en Rust y qué propósitos sirven. También aprenderás cómo escribir tus propias macros procedurales con ejemplos tanto hipotéticos como del mundo real.

<!-- more -->

Esta guía asume que estás familiarizado con Rust y sus conceptos básicos, como tipos de datos, iteradores y traits. Si necesitas establecer o revisar tus conceptos básicos de Rust, [consulta este curso interactivo][1].

No necesitas ningún conocimiento previo sobre macros, ya que este artículo cubre todo desde cero.

## Tabla de Contenidos

1.  [¿Qué son las Macros en Rust?][2]
    1.  [Tipos de Macros en Rust][3]
    2.  [Tipos de Macros Procedurales][4]
2.  [Requisitos Previos][5]
    1.  [Dependencias Útiles][6]
3.  [Cómo Escribir una Macro Derive Simple][7]
    1.  [La Macro Derive `IntoStringHashMap`][8]
    2.  [Cómo Declarar una Macro Derive][9]
    3.  [Cómo Analizar la Entrada de la Macro][10]
    4.  [Cómo Asegurar un Struct como Objetivo de la Macro][11]
    5.  [Cómo Construir el Código de Salida][12]
    6.  [Cómo Utilizar tu Macro Derive][13]
    7.  [Cómo Mejorar Nuestra Implementación][14]
4.  [Una Macro Derive Más Elaborada][15]
    1.  [La Macro `DeriveCustomModel`][16]
    2.  [Cómo Separar la Implementación de la Declaración][17]
    3.  [Cómo Analizar los Argumentos de la Macro Derive][18]
    4.  [Cómo Implementar `DeriveCustomModel`][19]
    5.  [Cómo Generar Cada Modelo Personalizado][20]
    6.  [Cómo Utilizar tu Macro `DeriveCustomModal`][21]
5.  [Una Macro de Atributo Simple][22]
    1.  [El Atributo `log_duration`][23]
    2.  [Cómo Declarar una Macro de Atributo][24]
    3.  [Cómo Implementar la Macro de Atributo `log_duration`][25]
    4.  [Cómo Utilizar tu Macro `log_duration`][26]
6.  [Una Macro de Atributo Más Elaborada][27]
    1.  [El Atributo `cached_fn`][28]
    2.  [Cómo Implementar la Macro de Atributo `cached_fn`][29]
    3.  [Argumentos del Atributo `cached_fn`][30]
    4.  [Cómo Utilizar la Macro `cached_fn`][31]
7.  [Una Macro Similar a una Función Simple][32]
    1.  [La Macro `constant_string`][33]
    2.  [Cómo Declarar una Macro Similar a una Función][34]
    3.  [Cómo Implementar la Macro `constant_string`][35]
    4.  [Cómo Utilizar la Macro `constant_string`][36]
8.  [Una Macro Similar a una Función Más Elaborada][37]
    1.  [La Macro `hash_mapify`][38]
    2.  [Cómo Implementar la Macro `hash_mapify`][39]
    3.  [Cómo Analizar la Entrada de `hash_mapify`][40]
    4.  [Cómo Generar el Código de Salida][41]
    5.  [Cómo Convertir Tipos de Datos Personalizados en Tokens de Salida][42]
    6.  [Cómo Utilizar la Macro `hash_mapify`][43]
9.  [Más Allá de Escribir Macros][44]
    1.  [Crates/Herramientas Útiles][45]
10.  [Desventajas de las Macros][46]
    1.  [Depuración (o falta de ella)][47]
    2.  [Costos de Tiempo de Compilación][48]
    3.  [Falta de autocompletado y comprobación de código][49]
    4.  [¿Dónde trazamos la línea?][50]
11.  [Resumen][51]
    1.  [¿Te gusta mi trabajo?][52]

## **¿Qué son las Macros en Rust?**

Las macros son una parte integral del lenguaje de programación Rust. No pasa mucho tiempo antes de que empieces a encontrarlas cuando estás aprendiendo el lenguaje por primera vez.

En su forma más simple, las macros en Rust te permiten ejecutar algún código en tiempo de compilación. Rust prácticamente te permite hacer lo que quieras cuando se trata de macros y lo que puedes hacer con ellas. El caso de uso más común de esta característica es escribir código que genere otro código.

Las macros son una forma de extender la funcionalidad del compilador más allá de lo que está soportado de manera estándar. Ya sea que quieras generar código basado en código existente, o quieras transformar código existente de alguna forma, las macros son tu herramienta ideal.

Así es como el libro oficial de Rust lo describe:

> El término _macro_ se refiere a una familia de características en Rust.
>
> Fundamentalmente, las macros son una forma de escribir código que escribe otro código, lo que se conoce como _metaprogramación_.
>
> La metaprogramación es útil para reducir la cantidad de código que tienes que escribir y mantener, lo cual es también uno de los roles de las funciones. Sin embargo, las macros tienen algunos poderes adicionales que las funciones no tienen.

Usando macros, también puedes agregar dinámicamente cosas que se requieren agregar en el tiempo de compilación, lo cual no es posible usando funciones ya que se llaman en tiempo de ejecución. Una característica de este tipo, por ejemplo, es implementar _Traits_ en tipos, lo cual se requiere implementar en tiempo de compilación.

Otra ventaja de las macros es que pueden ser muy flexibles, ya que pueden tomar una cantidad dinámica de parámetros o entradas a diferencia de una función.

Las macros tienen su propia sintaxis tanto para escribirlas como para utilizarlas, que exploraremos en detalle en las próximas secciones.

Algunos ejemplos de cómo se están utilizando las macros realmente ayudan a transmitir cuán poderosas son:

-   El proyecto **SQLx** utiliza macros para verificar todas tus consultas y declaraciones SQL (siempre y cuando las crees usando la macro proporcionada) en tiempo de compilación ejecutándolas realmente contra una instancia en ejecución de la base de datos (sí, en tiempo de compilación).
-   **typed\_html** implementa un analizador HTML completo con validación en tiempo de compilación, todo mientras se utiliza la sintaxis familiar de JSX.

En Rust, hay 2 tipos diferentes de macros: declarativas y procedimentales.

### Macros declarativas

Las macros declarativas funcionan basándose en el análisis sintáctico. Aunque la documentación oficial las define como una forma de permitirte escribir extensiones de sintaxis, creo que es más intuitivo considerarlas como una versión avanzada del keyword `match` para el compilador.

Puedes definir uno o más patrones para emparejar, y su cuerpo debería devolver el código Rust de salida que te gustaría que la macro produjera.

No vamos a hablar de ellas en este artículo, pero si quieres aprender más, [aquí][53] es un buen lugar para empezar.

### Macros procedimentales

Estas macros, en sus casos de uso más básicos, ejecutan cualquier código Rust que quieras en tiempo de compilación. El único requisito es que deben tomar código Rust como entrada y devolver código Rust como salida.

No hay un análisis sintáctico especial involucrado para escribir estas macros (a menos que quieras hacerlo), por lo que personalmente me resultan más fáciles de entender y escribir.

Las macros procedimentales se dividen en 3 categorías: macros de derivación, macros de atributo y macros funcionales.

### Tipos de Macros Procedimentales

#### Macros de derivación

Las macros de derivación, generalmente hablando, se aplican a tipos de datos en Rust. Son una forma de extender la declaración del tipo para también "derivar" funcionalidad automáticamente para él.

Puedes usarlas para generar tipos "derivados" a partir de un tipo, o como una manera de implementar métodos en el tipo de datos objetivo automáticamente. Esto debería tener sentido una vez que veas el siguiente ejemplo.

Imprimir tipos de datos no primitivos, como structs, enums o incluso errores (que son solo structs, pero supongamos que no lo son), para propósitos de depuración es una característica muy común para cualquier lenguaje, no solo Rust. En Rust, solo los primitivos tienen implícitamente la capacidad de ser impresos en contextos de "depuración".

Si piensas en cómo todo en Rust son solo traits (incluso operaciones básicas como suma e igualdad), esto tiene sentido. Quieres poder imprimir en depuración tus tipos de datos personalizados, pero Rust no tiene manera de decir "por favor, aplica este trait a cada tipo de dato en el código, siempre".

Aquí es donde entra la macro de derivación `Debug`. Hay una manera estándar de imprimir en depuración cada tipo de estructura de datos en Rust que se usa para sus tipos internos. La macro `Debug` te permite implementar automáticamente el trait `Debug` para tus tipos personalizados, mientras sigues las mismas reglas y guía de estilo que la implementación para tipos internos de datos.

```
// Ejemplos de macros de derivación

/// Ejemplo para derivar métodos en tipos de datos
#[derive(Debug)]
pub struct User {
    username: String,
    first_name: String,
    last_name: String,
}
```

La macro de derivación `Debug` dará como resultado el siguiente código (presentacional, no exacto):

```
impl core::fmt::Debug for User {
    fn fmt(&self, f: &mut core::fmt::Formatter) -> core::fmt::Result {
        f.debug_struct(
            "User"
        )
        .field("username", &self.username)
        .field("first_name", &self.first_name)
        .field("last_name", &self.last_name)
        .finish()
    }
}
```

Como puedes imaginar, nadie quiere escribir este código para todas sus structs y enums personalizados una y otra vez. Esta simple macro te da una idea del poder de las macros en Rust, así como por qué son una parte esencial del lenguaje en sí.

Durante la compilación real, el mismo código daría como resultado lo siguiente:

```
pub struct User {
    username: String,
    first_name: String,
    last_name: String,
}

impl core::fmt::Debug for User {
    fn fmt(&self, f: &mut core::fmt::Formatter) -> ::core::fmt::Result {
        f.debug_struct(
            "User"
        )
        .field("username", &self.username)
        .field("first_name", &self.first_name)
        .field("last_name", &self.last_name)
        .finish()
    }
}
```

Observa cómo la declaración del tipo original se conserva en el código de salida. Esta es una de las principales diferencias entre las macros de derivación y otras. Las macros de derivación preservan el tipo de entrada sin modificaciones. Sólo añaden código adicional a la salida. Por otro lado, todas las demás macros no se comportan de la misma manera. Solo preservan el objetivo cuando la salida de la macro incluye el objetivo también.

#### Macros de atributo

Las macros de atributo, además de en tipos de datos, suelen aplicarse a bloques de código como funciones, bloques impl, bloques inline, y así sucesivamente. Por lo general, se utilizan para transformar el código objetivo de alguna manera, o para anotarlo con información adicional.

El caso de uso más común para estas es modificar una función para añadirle funcionalidad o lógica adicional. Por ejemplo, puedes escribir fácilmente una macro de atributo que:

-    Registre todos los parámetros de entrada y salida.
-    Registre el tiempo total de ejecución de la función.
-    Cuente el número de veces que se llama a esa función.
-    Añada campos adicionales predeterminados a cualquier struct.

y así sucesivamente.

Todas las cosas que mencioné anteriormente, y mucho más, combinadas forman la macro de `instrumentación` increíblemente popular y útil en Rust proporcionada por el crate `tracing`. Por supuesto, estoy simplificando muchísimo aquí, pero es suficiente como ejemplo.



Eso es un ejemplo de macros utilizadas para anotar la función con información adicional. Indica al compilador que advierta al usuario si el valor de retorno de esta llamada de función no se usa. El tipo `Result` ya está anotado con `#[must_use]` por defecto, por lo que ves la advertencia `Unused Result<...> that must be used` cuando no utilizas un valor de retorno del tipo `Result`.

Las macros de atributos también son lo que potencia la [compilación condicional][54] en Rust.

#### Macros funcionales

Las macros funcionales son macros disfrazadas de funciones. Son el tipo de macros procesales menos restrictivas, ya que se pueden usar literalmente en cualquier lugar, siempre que produzcan código válido en el contexto en el que se usan.

Estas macros no se "aplican" a nada, a diferencia de las otras 2, sino que se llaman como si llamaras a una función. Como argumentos, puedes pasar literalmente lo que quieras, siempre que tu macro sepa cómo analizarlo. Esto incluye todo, desde ningún argumento hasta código Rust válido o jerigonza aleatoria que solo tu macro puede entender.

En cierto sentido, son la versión procesal de las macros declarativas. Si necesitas ejecutar código Rust y también poder analizar una sintaxis personalizada, las macros funcionales son tu herramienta preferida. También son útiles si necesitas funcionalidad similar a las macros en lugares donde no se pueden usar otras macros.

Después de esa larga descripción de la información básica sobre las macros, finalmente es momento de sumergirse en la escritura de macros procesales.

## Requisitos previos

Existen ciertas reglas para escribir tus propias macros procesales que deberás seguir. Estas reglas se aplican a los 3 tipos de macros procesales. Son:

-   Las macros procesales solo se pueden agregar a un proyecto que esté marcado como `proc-macro` en `Cargo.toml`.
-   Los proyectos marcados como tales no pueden exportar nada más que macros procesales.
-   Las propias macros deben ser todas declaradas en el archivo `lib.rs`.

Comencemos configurando nuestro proyecto con este código:

```
cargo new --bin mi-aplicacion
cd mi-aplicacion
cargo new --lib mi-aplicacion-macros
```

Esto creará un proyecto raíz, así como un subproyecto dentro de él que albergará nuestras macros. Necesitarás algunos cambios en los archivos `Cargo.toml` para ambos proyectos.

Primero, el archivo `Cargo.toml` para `mi-aplicacion-macros` debe tener el siguiente contenido (nota que necesitas declarar una sección de librería que tenga la propiedad `proc-macro`):

```
# mi-aplicacion/mi-aplicacion-macros/Cargo.toml

[package]
name = "mi-aplicacion-macros"
version = "0.1.0"
edition = "2021"

[lib]
name = "mi_aplicacion_macros"
path = "src/lib.rs"
proc-macro = true

[dependencies]
```

A continuación, el archivo `Cargo.toml` para `mi-aplicacion` debe tener el siguiente contenido:

```
# mi-aplicacion/Cargo.toml

workspace = { members = ["mi-aplicacion-macros"] }

[package]
name = "mi-aplicacion"
version = "0.1.0"
edition = "2021"
resolver = "2"

# Consulta más claves y sus definiciones en https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
mi-aplicacion-macros = { path = "./mi-aplicacion-macros" }
```

Necesitas establecer la versión del resolvedor de dependencias a “2”, y agregar tu proyecto de macros como una dependencia del proyecto `mi-aplicacion`.

### Dependencias útiles

Desde el punto de vista del compilador, así es como funcionan las macros:

-   Toman un flujo de tokens como entrada (y opcionalmente un flujo de tokens como argumentos para la propia macro).
-   Devuelven un flujo de tokens como salida.

¡Eso es todo lo que el compilador sabe! Y como pronto verás, es suficiente para que el compilador lo entienda.

Sin embargo, esto crea un problema. Necesitas poder entender este "flujo de tokens" de una manera en la que los comprendas correctamente, ya sea como código Rust o sintaxis personalizada, puedas modificarlos y también producirlos. Hacer esto manualmente no es una tarea fácil y, para los fines de este tutorial, está fuera del alcance.

Sin embargo, podemos confiar en el excelente trabajo de código abierto realizado por muchos desarrolladores para facilitar esto. Necesitas agregar algunas dependencias para ayudar con este problema:

-   `syn` — Un analizador de sintaxis para Rust. Esto te ayuda a analizar el flujo de tokens de entrada como AST de Rust. El AST es un concepto que normalmente encuentras al intentar escribir tu propio intérprete o compilador, pero una comprensión básica es esencial para trabajar con macros. Después de todo, las macros son solo extensiones que escribes para el compilador en cierto sentido. Si estás interesado en aprender más sobre qué son los AST, [consulta esta introducción muy útil][55].
-   `quote` — `quote` es, y esto es una gran generalización, una biblioteca que nos ayuda a realizar la operación inversa a lo que hace `syn`. Nos ayuda a convertir el código fuente de Rust en un flujo de tokens que podemos producir desde nuestra macro.
-   `proc-macro2` — La biblioteca estándar proporciona una biblioteca `proc-macro`, pero los tipos que proporciona no pueden existir fuera de las macros procesales. `proc-macro2` es un contenedor alrededor de la biblioteca estándar que hace que todos los tipos internos sean utilizables fuera del contexto de las macros. Esto, por ejemplo, permite que tanto `syn` como `quote` no solo se usen para macros procesales, sino también en código Rust normal, en caso de que alguna vez tengas tal necesidad. Y de hecho, lo usaremos extensamente si alguna vez queremos realizar pruebas unitarias de nuestras macros o sus expansiones.
-   `darling`–Facilita el análisis y trabajo con argumentos de las macros, lo cual es un proceso tedioso debido a tener que analizarlos manualmente desde el árbol de sintaxis. `darling` nos proporciona la capacidad tipo `serde` para analizar automáticamente el árbol de argumentos de entrada en nuestra estructura de argumentos. También nos ayuda en el manejo de errores relacionados con argumentos no válidos, argumentos requeridos, y así sucesivamente.

Agreguemos rápidamente estas dependencias a nuestro proyecto y comencemos a escribir nuestra macro:

```
// my-app-macros

cargo add syn quote proc-macro2 darling
```

## Cómo Escribir una Macro de Derivación Simple

En esta sección aprenderás a escribir una macro `Derive`. A este punto, ya deberías estar familiarizado con los diferentes tipos de macros y lo que implican, como discutimos en las secciones anteriores.

### La Macro de Derivación `IntoStringHashMap`

Supongamos que tienes una aplicación donde necesitas poder convertir structs en mapas hash, que usen el tipo `String` tanto para las claves como para los valores. Esto significa que debería funcionar con cualquier struct donde todos los campos sean convertibles al tipo `String` usando el trait `Into`.

### Cómo Declarar una Macro de Derivación

Declaras macros creando una función y anotando esa función usando macros de atributo que le dicen al compilador que considere esa función como una declaración de macro. Ya que tu `lib.rs` está vacío ahora mismo, también necesitas declarar `proc-macro2` como un crate externo:

```
// my-app-macros/src/lib.rs
extern crate proc_macro;

use proc_macro::TokenStream;

#[proc_macro_derive(IntoStringHashMap)]
pub fn derive_into_hash_map(item: TokenStream) -> TokenStream {
    todo!()
}
```

Todo lo que estamos haciendo aquí es declarar nuestra macro como una macro de derivación con el identificador `IntoStringHashMap`. Nota que el nombre de la función no es importante aquí. Lo que es importante es el identificador pasado a la macro de atributo `proc_macro_derive`.

Veamos inmediatamente cómo puedes usar esto – volveremos y terminaremos la implementación más tarde:

```
// my-app/src/main.rs

use my_app_macros::IntoStringHashMap;

#[derive(IntoStringHashMap)]
pub struct User {
    username: String,
    first_name: String,
    last_name: String,
    age: u32,
}

fn main() {

}
```

Puedes usar tu macro como cualquier otra macro de derivación, usando el identificador que declaraste para ella (en este caso fue `IntoStringHashMap`).

Si intentas compilar tu código en esta etapa, deberías ver el siguiente error de compilación:

```
   Compiling my-app v0.1.0 

error: proc-macro derive panicked
 --> src/main.rs:3:10
  |
3 | #[derive(IntoHashMap)]
  |          ^^^^^^^^^^^
  |
  = help: message: not yet implemented

error: could not compile `my-app` (bin "my-app") due to 1 previous error
```

Esto prueba claramente que nuestra macro se ejecutó durante la etapa de compilación, ya que, si no estás familiarizado con la macro `todo!()`, entra en pánico con `help: message: not yet implemented` cuando se ejecuta.

Esto significa que tanto nuestra declaración de macro como su uso funcionan. Ahora podemos pasar a implementar realmente esta macro.

### Cómo Analizar la Entrada de la Macro

Primero, analizas el flujo de tokens de entrada como un `DeriveInput` usando `syn`, que es una representación de cualquier objetivo con el que puedas usar una macro de derivación:

```
let input = syn::parse_macro_input!(item as syn::DeriveInput);
```

`syn` nos proporciona la macro `parse_macro_input` que usa una sintaxis algo personalizada como sus argumentos. Le proporcionas el nombre de tu variable de entrada, la palabra clave `as` y el tipo de datos en `syn` que debería analizar como el flujo de tokens de entrada (en nuestro caso, un `DeriveInput`).

Si inspeccionas el código fuente de `DeriveInput`, verás que te proporciona la siguiente información:

-   `attrs`: Atributos aplicados a este tipo, ya sean otras macros de atributo declaradas por nosotros, o las integradas como `must_use`.
-   `vis`: El especificador de visibilidad para esta declaración de tipo.
-   `ident`: El identificador (nombre) del tipo.
-   `generics`: Información sobre los parámetros genéricos que este tipo toma, incluyendo tiempos de vida.
-   `data`: Un enum que describe si el objetivo es un struct, un enum, o una unión, y también nos proporciona más información para cada uno de estos.

Estos nombres de campo y sus tipos (aparte del campo data) son bastante estándar entre los objetivos soportados por `syn`, como funciones, enums, etc.

Si inspeccionas más a fondo la declaración del enum `Data`, y en particular en `DataStruct`, verás que proporciona un campo llamado `fields`. Este es una colección de todos los campos de este struct y puedes usarlo para iterar sobre ellos. ¡Esto es exactamente lo que necesitamos para construir nuestro mapa hash!

La implementación completa de esta macro se ve así:

```
// my-app/my-app-macros/lib.rs

extern crate proc_macro2;

use proc_macro::TokenStream;
use quote::quote;
use syn::Data;

#[proc_macro_derive(IntoHashMap)]
pub fn into_hash_map(item: TokenStream) -> TokenStream {
    let input = syn::parse_macro_input!(item as syn::DeriveInput);

    let struct_identifier = &input.ident;

    match &input.data {
        Data::Struct(syn::DataStruct { fields, .. }) => {
            let mut implementation = quote!{
                let mut hash_map = std::collections::HashMap::<String, String>::new();
            };

            for field in fields {
                let identifier = field.ident.as_ref().unwrap();
                implementation.extend(quote!{
                    hash_map.insert(stringify!(#identifier).to_string(), String::from(value.#identifier));
                });
            }

            quote! {
                #[automatically_derived]
                impl From<#struct_identifier> for std::collections::HashMap<String, String> {
                    fn from(value: #struct_identifier) -> Self {
                        #implementation

                        hash_map
                    }
                }
            }
        }
        _ => unimplemented!()
    }.into()
}
```

Hay mucho pasando aquí, así que descomponámoslo:

### Cómo Asegurarse de que el Objetivo de la Macro es un `struct`

`let struct_identifier = &input.ident;`: Almacenas el identificador del struct en una variable separada, para poder usarlo fácilmente más tarde.

```
match &input.data {
    Data::struct(syn::DataStruct { fields, .. }) => { ... },
    _ => unimplemented!()
}
```

Haces coincidencia sobre el campo `data` analizado de `DeriveInput`. Si es del tipo `DataStruct` (un struct en Rust) entonces continúas, de lo contrario, entras en pánico, ya que la macro no está implementada para otros tipos.

### Cómo Construir el Código de Salida

Echemos un vistazo a la implementación del brazo de coincidencia cuando tienes un `DataStruct`:

```
let mut implementation = quote!{
    let mut hash_map = std::collections::HashMap::<String, String>::new();
};
```

Aquí creaste un nuevo `TokenStream` usando `quote`. Este `TokenStream` es diferente del proporcionado por la biblioteca estándar, así que no lo confundas con eso. Esto necesita ser mutable, ya que pronto agregaremos más código a este `TokenStream`.

`TokenStream` es básicamente la representación inversa de un AST. Proporcionas código Rust real a la macro `quote`, y te da el "flujo de tokens" como lo has llamado anteriormente para ese código fuente.

Este `TokenStream` puede convertirse a tipo de salida de la macro, o ser manipulado usando métodos proporcionados por `quote` como `extend`.

Continuando,

```
for field in fields {
    let identifier = field.ident.as_ref().unwrap();
    implementation.extend(quote!{
        hash_map.insert(
            stringify!(#identifier).to_string(),
            String::from(value.#identifier)
        );
    });
}
```

Recorres todos los campos. En cada iteración, primero creas una variable `identifier` para mantener el nombre del campo para uso posterior. Luego usas el método `extend` en nuestro `TokenStream` previamente creado para agregarle código adicional.

El método `extend` simplemente toma otro `TokenStream`, que se puede generar fácilmente usando la macro `quote`. Para la extensión, simplemente escribes código para insertar una nueva entrada en el `hash_map` que se creará en la salida de la macro.

Echemos un vistazo más de cerca a eso:

```
hash_map.insert(
    stringify!(#identifier).to_string(),
    String::from(value.#identifier)
);
```

Como sabes, el método insert toma una clave y un valor. Le has dicho al compilador que tanto la clave como el valor son del tipo `String`. `stringify` es una macro incorporada en la biblioteca estándar, que convierte cualquier tipo `Ident` en su equivalente `&str`. La usas aquí para convertir tus identificadores de campo en `&str` reales. Luego llamas al método `to_string()` en él para convertirlo al tipo `String`.

¿Pero qué representa el `#identifier`?

`quote` te proporciona la capacidad de usar cualquier variable declarada fuera del `TokenStream` dentro de él usando el prefijo `#`. Piénsalo como `{}` en argumentos de formato. `#identifier` en este caso simplemente se reemplaza con el identificador del campo que declaramos fuera de la llamada a `extend`. Así que básicamente llamas a la macro `stringify!()` en el identificador del campo directamente.

De manera similar, puedes acceder al valor de un campo usando la sintaxis `struct_variable.field_name` familiar, pero usando la variable del identificador en lugar del nombre del campo. Esto es lo que haces cuando pasas el valor a tu declaración de inserción: `String::from(value.#identifier)`.

Si has observado el código de cerca, te darás cuenta de dónde salió `value`, pero si no, es simplemente lo que el método de implementación del trait usa para declarar su argumento de entrada más abajo.

Una vez que has construido tu implementación usando el bucle para cada campo en el struct, tienes un `TokenStream` que, para propósitos de representación, contiene el siguiente código:

```
let mut hash_map = std::collections::HashMap::<String, String>::new();
hash_map.insert("username".to_string(), String::from(value.username));
hash_map.insert("first_name".to_string(), String::from(value.first_name));
hash_map.insert("last_name".to_string(), String::from(value.last_name));
```

Pasando finalmente a generar la salida de nuestra macro, tienes:



```markdown
hash_map
        }
    }
}
```

Aquí comienzas creando otro `TokenStream` usando `quote`. Escribes tu implementación del trait `From` en este bloque.

La siguiente línea nuevamente usa la sintaxis del prefijo `#` que acabamos de ver para declarar que la implementación del trait debe ser para tu estructura objetivo, basada en el identificador de la estructura. En este caso, este identificador será reemplazado con `User` si aplicas la macro derive a la estructura `User`.

```
impl From<#struct_identifier> for std::collections::HashMap<String, String> {}
```

Finalmente, tienes el cuerpo del método actual:

```
fn from(value: #struct_identifier) -> Self {
    #implementation

    hash_map
}
```

Como puedes ver, puedes anidar fácilmente `TokenStream`s dentro de otros `TokenStreams` usando la misma sintaxis `#` que te permite usar variables externas dentro de la macro `quote`.

Aquí, declaras que tu implementación de hash map debe ser insertada como las primeras líneas del función. Y luego simplemente devuelves el mismo `hash_map`. Esto completa tu implementación del trait.

Como último paso, llamas a `.into()` en el tipo de retorno de nuestro bloque `match`, lo que devuelve la salida de la llamada a la macro `quote`. Esto convierte el tipo `TokenStream` usado por `quote` en el tipo `TokenStream` que proviene de la biblioteca estándar y que el compilador espera que se devuelva de una macro.

Si fue más difícil de entender cuando lo desglosé línea por línea, puedes ver el siguiente código completo pero comentado además:

```
// Indica al compilador que esta función es una macro derive, y el identificador para derive es `IntoHashMap`.
#[proc_macro_derive(IntoHashMap)]
// Declara una función que toma un `TokenStream` de entrada y devuelve un `TokenStream`.
pub fn into_hash_map(item: TokenStream) -> TokenStream {
    // Analiza el flujo de tokens de entrada como el tipo `DeriveInput` provisto por la crate `syn`.
    let input = syn::parse_macro_input!(item as syn::DeriveInput);

    // Almacena el identificador (nombre) de la estructura en una variable para que puedas insertarlo en el código de salida.
    let struct_identifier = &input.ident;

    // Comparar sobre el tipo objetivo al que se aplicó la macro derive
    match &input.data {
        // Comprobar que el objetivo era una estructura, y desestructurar el campo `fields` de su información.
        Data::Struct(syn::DataStruct { fields, .. }) => {
            // Declara un nuevo bloque de código que contendrá el código para tu implementación del hash map.
            // Este bloque creará un nuevo hash map y también lo llenará con todos los campos de la estructura.
            let mut implementation = quote!{
                // Esto es solo código que deseas ver en la salida. En este caso, deseas crear un nuevo hash map.
                let mut hash_map = std::collections::HashMap::<String, String>::new();
            };

            // Itera sobre todos los campos de tu estructura objetivo
            for field in fields {
                // Crea una variable para almacenar el identificador (nombre) del campo para su uso posterior
                let identifier = field.ident.as_ref().unwrap();
                // Extiende tu bloque `implementation` para incluir código en la salida que llene
                // el hash map que creaste con la información del campo actual.
                implementation.extend(quote!{
                    // Convierte el identificador del campo en una cadena usando la macro `stringify!`. Esto se usa
                    // como la llave en tu nueva entrada del hash map. Para el valor de esta llave, accesamos el valor del campo
                    // de la estructura usando `value.#identifier`, donde `#identifier` se reemplaza con el nombre real
                    // del campo en el código de salida.
                    hash_map.insert(stringify!(#identifier).to_string(), String::from(value.#identifier));
                });
            }

            // Crear el bloque de salida final
            quote! {
                // Implementa el trait `From` para permitir convertir tu estructura objetivo, identificada por
                // `struct_identifier` a un HashMap con tanto las claves como los valores como `String`.
                // Al igual que anteriormente, #struct_identifier se reemplaza con el nombre real de la
                // estructura objetivo en el código de salida.
                impl From<#struct_identifier> for std::collections::HashMap<String, String> {
                    // Esto es solo un método que el trait `From` requiere que implementes. El
                    // tipo del valor de entrada es nuevamente `#struct_identifier`, que se reemplaza con
                    // el nombre de la estructura objetivo en el código de salida.
                    fn from(value: #struct_identifier) -> Self {
                        // Incluye el bloque `implementation` que creaste usando `quote!` como el cuerpo
                        // de este método. `quote` te permite anidar otros bloques `quote` libremente.
                        #implementation

                        // Devuelve el hash_map.
                        hash_map
                    }
                }
            }
        }
        // Si el objetivo es de cualquier otro tipo, se produce un pánico.
        _ => unimplemented!()
        // Convierte el tipo `TokenStream` usado por `quote` en el tipo `TokenStream` usado por la
        // biblioteca estándar y el compilador
    }.into()
}
```
```

**Es hora de disfrutar los frutos de tu trabajo.**

### Cómo Usar Tu Macro Derive

Volviendo a tu archivo `my-app/main.rs`, hagamos una impresión de depuración del hashmap que creas usando la macro que implementaste. Tu archivo `main.rs` debería verse así:

```
// my-app/src/main.rs

use std::collections::HashMap;
use my_app_macros::IntoHashMap;

#[derive(IntoHashMap)]
pub struct User {
    username: String,
    first_name: String,
    last_name: String,
}

fn main() {
    let user = User {
        username: "username".to_string(),
        first_name: "First".to_string(),
        last_name: "Last".to_string(),
    };

    let hash_map = HashMap::<String, String>::from(user);

    dbg!(hash_map);
}
```

Si ejecutas esto usando `cargo run`, deberías ver la siguiente salida en tu terminal:

```
[src/main.rs:20:5] hash_map = {
    "last_name": "Last",
    "first_name": "First",
    "username": "username",
}
```

¡Y ahí lo tienes!

### Cómo Mejorar Nuestra Implementación

Hay una mejor manera de trabajar con iteradores y `quote` que omití en nuestra implementación original, intencionalmente, porque requiere que aprendamos un poco más de la sintaxis específica de `quote`.

Veamos cómo se vería con eso antes de profundizar en cómo funciona:

```
let input = syn::parse_macro_input!(item as syn::DeriveInput);
    let struct_identifier = &input.ident;

    match &input.data {
        Data::Struct(syn::DataStruct { fields, .. }) => {
            let field_identifiers = fields.iter().map(|item| item.ident.as_ref().unwrap()).collect::<Vec<_>>();

            quote! {
                impl From<#struct_identifier> for std::collections::HashMap<String, String> {
                    fn from(value: #struct_identifier) -> Self {
                        let mut hash_map = std::collections::HashMap::<String, String>::new();

                        #(
                            hash_map.insert(stringify!(#field_identifiers).to_string(), String::from(value.#field_identifiers));
                        )*

                        hash_map
                    }
                }
            }
        }
        _ => unimplemented!()
    }.into()
```

¡Eso se ve mucho más conciso y fácil de entender! Vamos a ver el fragmento de sintaxis especial que lo hace posible, en particular, la siguiente línea:

```
#(
    hash_map.insert(stringify!(#field_identifiers).to_string(), String::from(value.#field_identifiers));
)*
```

Vamos a desglosarlo. Primero, envuelves todo el bloque en un `#()*` y tu código va dentro de los paréntesis. Esta sintaxis es la que te permite usar cualquier iterador dentro de los paréntesis, y repetirá ese bloque de código para todos los elementos en el iterador, mientras reemplaza la variable con el elemento correcto en cada iteración.

En este caso, primero creas un iterador `field_identifiers`, que es una colección de todos los identificadores de campo en tu struct objetivo. Luego escribes tu declaración de inserción en el `hash_map` usando directamente el iterador como si fuera un solo elemento. El envoltorio `#()*` convierte esto en la salida esperada de múltiples líneas, una para cada elemento en el iterador.

## Una Macro Derive Más Elaborada

Ahora que estás cómodo escribiendo una macro Derive simple, es hora de continuar y crear algo que será realmente útil en el mundo real, especialmente si estás trabajando con modelos de bases de datos.

### La Macro `DeriveCustomModel`

Vas a construir una macro Derive que te ayudará a generar structs derivados de tu struct original. Vas a necesitar esto todo el tiempo cada vez que trabajes con bases de datos, y solo quieras cargar parte de los datos.

Por ejemplo, si tienes un struct `User`, que tiene toda la información del usuario, pero solo quieres cargar la información del nombre del usuario desde la base de datos, necesitarás un struct que solo contenga esos campos, a menos que quieras hacer que todos los campos sean una Option, lo cual no es la mejor idea.

También necesitaremos agregar una implementación de la función `From` para convertir automáticamente del struct `User` al struct derivado. Otra cosa que nuestra macro necesita es ser capaz de derivar múltiples modelos del mismo struct objetivo.

Comencemos por declararlo en `lib.rs`:

```
// lib.rs

#[proc_macro_derive(DeriveCustomModel, attributes(custom_model))]
pub fn derive_custom_model(item: TokenStream) -> TokenStream {
    todo!()
}
```

La mayor parte de esta sintaxis debería ser familiar para ti por ahora por nuestro ejemplo anterior. La única adición que tenemos aquí es definir `attributes(custom_model)` en la llamada a `proc_macro_derive`, que básicamente le dice al compilador que trate cualquier atributo que comience con `#[custom_model]` como un argumento para esta macro derive en ese objetivo.

Por ejemplo, una vez que hayas definido esto, puedes aplicar `#[custom_model(name = "SomeName")]` al struct objetivo, para definir que el struct derivado debe tener el nombre "SomeName". Necesitas analizar esto tú mismo y manejarlo también, por supuesto, la definición fue solo para decirle al compilador que pase eso a tu implementación de la macro y no lo trate como un atributo desconocido.

Vamos a crear también un nuevo archivo que contendrá el detalle de la implementación de esta macro. La regla de la macro establece que debe **definirse** en `lib.rs`, y ya lo hemos hecho. La implementación en sí puede vivir en cualquier parte del proyecto.

```
touch src/custom_model.rs
```

### Cómo Separar la Implementación de la Declaración

Defina una función que implemente la macro `DeriveCustomModel`. También vamos a añadir todas las importaciones de inmediato para evitar confusiones más adelante:

```
// custom_model.rs

use syn::{
    parse_macro_input, Data::Struct, DataStruct, DeriveInput, Field, Fields, Ident, Path,
};
use darling::util::PathList;
use darling::{FromAttributes, FromDeriveInput, FromMeta};
use proc_macro::TokenStream;
use quote::{quote, ToTokens};

pub(crate) fn derive_custom_model_impl(input: TokenStream) -> TokenStream {
    // Parse input token stream as `DeriveInput`
    let original_struct = parse_macro_input!(input as DeriveInput);

    // Destructure data & ident fields from the input
    let DeriveInput { data, ident, .. } = original_struct.clone();
}
```

Esto es solo una función en Rust, así que no hay reglas especiales aquí. Puedes llamarla desde la declaración como una función normal de Rust.

```
#[proc_macro_derive(DeriveCustomModel, attributes(custom_model))]
pub fn derive_custom_model(item: TokenStream) -> TokenStream {
    custom_model::custom_model_impl(item)
}
```

### Cómo Analizar los Argumentos de Derive Macro

Para analizar los argumentos de nuestra macro derive (que generalmente se proporcionan utilizando atributos aplicados tanto al objetivo como a sus campos), vamos a confiar en el crate `darling` para hacerlo tan simple como definir el tipo de datos para ellos.

```
// custom_model.rs

// Derive `FromDeriveInput` for this struct, which is a
// macro provided by darling to automatically add the ability
// to parse argument tokens into the given struct.
#[derive(FromDeriveInput, Clone)]
// We tell darling that we're looking for arguments
// that are defined using the `custom_model` attribute, and
// that we only support named structs for this.
#[darling(attributes(custom_model), supports(struct_named))]
struct CustomModelArgs {
    // Specify parameters for generating a derive model.
    // Multiple models can be generated by repeating
    // this attribute with parameters for each model.
    #[darling(default, multiple, rename = "model")]
    pub models: Vec<CustomModel>,
}
```

Le hemos dicho a `darling` que para los argumentos de la estructura, debemos esperar una lista de argumentos `model`, y cada uno definirá parámetros para un solo modelo derivado. Esto nos permite usar la macro para generar múltiples estructuras derivadas a partir de una sola estructura de entrada.

A continuación, definamos los argumentos para cada modelo:

```
// custom_model.rs

// Derive `FromMeta` for this struct, which is a
// macro provided by darling to automatically add the ability
// to parse metadata into the given struct.
#[derive(FromMeta, Clone)]
struct CustomModel {
    // Name of the generated model.
    name: String,
    // Comma-separated list of field identifiers
    // to be included in the generated model
    fields: PathList,
    // List of additional derives to apply to the
    // resulting struct such as `Eq` or `Hash`.
    #[darling(default)]
    extra_derives: PathList,
}
```

En esto, tenemos dos argumentos requeridos, `name` y `fields`, y uno opcional `extra_derives`. Es opcional debido a la anotación `#[darling(default)]`.

### Cómo Implementar `DeriveCustomModel`

Ahora que tenemos todos nuestros tipos de datos definidos, vamos a analizarlo – lo cual es tan simple como llamar a un método en nuestra estructura de argumentos. La implementación completa de la función debería ser así:

```
// custom_model.rs

pub(crate) fn derive_custom_model_impl(input: TokenStream) -> TokenStream {
    // Parse input token stream as `DeriveInput`
    let original_struct = parse_macro_input!(input as DeriveInput);

    // Destructure data & ident fields from the input
    let DeriveInput { data, ident, .. } = original_struct.clone();

    if let Struct(data_struct) = data {
        // Extract the fields from this data struct
        let DataStruct { fields, .. } = data_struct;

        // `darling` provides this method on the struct
        // to easily parse arguments, and also handles
        // errors for us.
        let args = match CustomModelArgs::from_derive_input(&original_struct) {
            Ok(v) => v,
            Err(e) => {
                // If darling returned an error, generate a
                // token stream from it so that the compiler
                // shows the error in the right location.
                return TokenStream::from(e.write_errors());
            }
        };

        // Destructure `models` field from parsed args.
        let CustomModelArgs { models } = args;

        // Create a new output
        let mut output = quote!();

        // Panic if no models are defined but macro is
        // used.
        if models.is_empty() {
            panic!(
                "Please specify at least 1 model using the `model` attribute"
            )
        }

        // Iterate over all defined models
        for model in models {
            // Generate custom model from target struct's fields and `model` args.
            let generated_model = generate_custom_model(&fields, &model);

            // Extend the output to include the generated model
            output.extend(quote!(#generated_model));
        }

        // Convert output into TokenStream and return
        output.into()
    } else {
        // Panic if target is not a named struct
        panic!("DeriveCustomModel can only be used with named structs")
    }
}
```

El código que genera tokens para cada modelo ha sido extraído a otra función que llamamos `generate_custom_model`. Vamos a implementarla también:

### Cómo Generar Cada Modelo Personalizado



```rust
fn generar_modelo_personalizado(campos: &Campos, modelo: &ModeloPersonalizado) -> proc_macro2::TokenStream {
    let CustomModel {
        name, // nombre
        fields: target_fields, // campos_objetivo,
        extra_derives, // derivaciones_extra
    } = modelo;

    // Crear salida de nuevos campos
    let mut new_fields = quote!(); // nuevos_campos

    // Iterar sobre todos los campos en la estructura fuente
    for Field {
        // El identificador para este campo
        ident,
        // Cualquier atributo aplicado a este campo
        attrs,
        // El especificador de visibilidad para este campo
        vis,
        // El token dos puntos `:`
        colon_token,
        // El tipo de este campo
        ty,
        ..
    } en campos {
        // Asegúrate de que el campo tenga un identificador, pánico de lo contrario
        let Some(ident) = ident else {
            panic!("No se pudo obtener el identificador del campo de la estructura")
        };

        // Intentar convertir el identificador del campo a `Path`, que es un tipo proporcionado
        // por `syn`. Hacemos esto porque el tipo `PathList` de `darling` es solo una
        // colección de este tipo con métodos adicionales sobre él.
        let path = match Path::from_string(&ident.clone().to_string()) {
            Ok(path) => path,
            Err(error) => panic!("No se pudo convertir el identificador del campo a ruta: {error:?}"),
        };

        // Si la lista de campos objetivo no contiene este campo,
        // saltar al siguiente campo
        if !target_fields.contains(&path) {
            continue;
        }

        // Si lo contiene, reconstruir la declaración del campo
        // y añadirlo en la salida `new_fields` para que podamos usarlo
        // en la estructura de salida.
        new_fields.extend(quote! {
            #(#attrs)*
            #vis #ident #colon_token #ty,
        });
    }

    // Crear un nuevo identificador para la estructura de salida
    // a partir del nombre proporcionado.
    let struct_ident = match Ident::from_string(name) {
        Ok(ident) => ident,
        Err(error) => panic!("{error:?}"),
    };

    // Crear un TokenStream para mantener las declaraciones de derivación adicionales
    // en la nueva estructura.
    let mut extra_derives_output = quote!(); // derivaciones_extra_salida

    // Si extra_derives no está vacío,
    if !extra_derives.is_empty() {
        // Esta sintaxis es un poco compacta, pero ya deberías
        // saber todo lo necesario para entenderla a estas alturas.
        extra_derives_output.extend(quote! {
            #(#extra_derives,)*
        })
    }

    // Construir la estructura final combinando todos los
    // TokenStreams generados hasta ahora.
    quote! {
        #[derive(#extra_derives_output)]
        pub struct #struct_ident {
            #new_fields
        }
    }
}
```

### Cómo Usar Tu Macro `DeriveCustomModel`

Volviendo a tu `my-app/main.rs`, vamos a imprimir en depuración los mapas generados para tus nuevas estructuras que crees usando la macro que implementaste. Tu `main.rs` debería verse así:

```rust
// my-app/src/main.rs

use macros::{DeriveCustomModel, IntoStringHashMap};
use std::collections::HashMap;

#[derive(DeriveCustomModel)]
#[custom_model(model(
    name = "UserName",
    fields(first_name, last_name), // campos
    extra_derives(IntoStringHashMap) // derivaciones_extra
))]
#[custom_model(model(name = "UserInfo", fields(username, age), extra_derives(Debug)))]
pub struct User2 {
    username: String,
    first_name: String,
    last_name: String,
    age: u32,
}

fn main() {
    let user_name = UserName {
        first_name: "first_name".to_string(),
        last_name: "last_name".to_string(),
    };
    let hash_map = HashMap::<String, String>::from(user_name);

    dbg!(hash_map);

    let user_info = UserInfo {
        username: "username".to_string(),
        age: 27,
    };
    
    dbg!(user_info);
}
```

Como puedes ver, `extra_derives` ya es útil para nosotros, ya que necesitamos derivar `Debug` y `IntoStringHashMap` para los nuevos modelos.

Si ejecutas esto usando `cargo run`, deberías ver la siguiente salida en tu terminal:

```
[src/main.rs:32:5] hash_map = {
    "last_name": "last_name",
    "first_name": "first_name",
}
[src/main.rs:39:5] user_info = UserInfo {
    username: "username",
    age: 27,
}
```

Vamos a concluir las macros de derivación aquí.

## Una Simple Macro de Atributo

En esta sección, vas a aprender cómo escribir una macro de atributo.

### El Atributo `log_duration`

Vas a escribir una simple macro de atributo que se puede aplicar a cualquier función (o método) que registrará el tiempo total de ejecución de esa función cada vez que se llame a la función.

### Cómo Declarar una Macro de Atributo

Declara macros de atributo creando una función y anotándola usando la macro `proc_macro_attribute` que le dice al compilador que considere esa función como una declaración de macro. Veamos cómo se ve eso:

```rust
// my-app-macros/src/lib.rs

#[proc_macro_attribute]
pub fn log_duration(args: TokenStream, item: TokenStream) -> TokenStream {
    log_duration_impl(args, item)
}
```

Para estas macros, el nombre de la función es importante, ya que también se convierte en el nombre de la macro. Como puedes ver, estas toman dos argumentos diferentes. El primero es el argumento pasado a la macro de atributo, y el segundo es el objetivo de la macro de atributo.

Vamos a implementar `log_duration_impl`. Crea un nuevo archivo `log_duration.rs`:
```

### Cómo Implementar la Macro de Atributo `log_duration`

Primero, te voy a dar la implementación completa, y luego desglosaré las partes que no he utilizado hasta ahora:

```
// my-app-macros/src/log_duration.rs

use proc_macro::TokenStream;
use quote::quote;
use syn::{parse_macro_input, ItemFn};

pub(crate) fn log_duration_impl(_args: TokenStream, input: TokenStream) -> TokenStream {
    // Analiza la entrada como `ItemFn` que es un tipo proporcionado
    // por `syn` para representar una función.
    let input = parse_macro_input!(input as ItemFn);

    let ItemFn {
        // La firma de la función
        sig,
        // El especificador de visibilidad de esta función
        vis,
        // El bloque o cuerpo de la función
        block,
        // Otros atributos aplicados a esta función
        attrs,
    } = input;

    // Extraer declaraciones en el cuerpo de las funciones
    let statements = block.stmts;

    // Almacenar el identificador de la función para registrar
    let function_identifier = sig.ident.clone();

    // Reconstruir la función como salida usando la entrada analizada
    quote!(
        // Reaplicar todos los otros atributos en esta función.
        // El compilador no incluye la macro en la que estamos
        // trabajando actualmente en esta lista.
        #(#attrs)*
        // Reconstruir la declaración de la función
        #vis #sig {
            // Al inicio de la función, crear una instancia de `Instant`
            let __start = std::time::Instant::now();

            // Crear un nuevo bloque, cuyo cuerpo es el cuerpo de la función.
            // Almacenar el valor de retorno de este bloque como una variable para
            // que podamos devolverlo más tarde desde la función padre.
            let __result = {
                #(#statements)*
            };

            // Registrar la información de duración para esta función
            println!("{} tomó {}μs", stringify!(#function_identifier), __start.elapsed().as_micros());

            // Devolver el resultado (si lo hay)
            return __result;
        }
    )
    .into()
}
```

Lo único que quizás no has visto anteriormente son los campos `sig` y `block` que obtienes al analizar la entrada como `ItemFn`. `sig` contiene toda la firma de una función, mientras que `block` contiene todo el cuerpo de la función. Esto es por lo que, usando el siguiente código, podemos básicamente reconstruir la función no modificada:

```
// Ejemplo de código para reconstruir fn no modificada en macro

#vis #sig #block
```

En este ejemplo, deseas modificar el cuerpo de la función, por eso creas un nuevo bloque que encapsula el bloque original de la función.

### Cómo Usar Tu Macro `log_duration`

Volviendo a `main.rs`, usar una macro de atributo es más simple de lo que piensas:

```
// main.rs

#[log_duration]
#[must_use]
fn function_to_benchmark() -> u16 {
    let mut counter = 0;
    for _ in 0..u16::MAX {
        counter += 1;
    }

    counter
}

fn main() {
    println!("{}", function_to_benchmark());
}
```

Cuando ejecutes esto, deberías obtener la siguiente salida:

```
function_to_benchmark tomó 498μs
65535
```

Ahora estamos listos para pasar a un caso de uso más complejo.

## Una Macro de Atributo Más Elaborada

### El Atributo `cached_fn`

Vas a escribir una macro de atributo que te permitirá agregar capacidad de caché a cualquier función. Para los propósitos de este ejemplo, vamos a asumir que nuestra función siempre tiene argumentos `String` y también devuelve un valor `String`.

Algunos de ustedes podrían conocer esto mejor como una función "memoizada".

Además, necesitarás permitir que el usuario de esta macro le diga a la macro cómo puede generar una clave dinámica basada en los argumentos de la función.

Para ayudarnos a facilitar la parte del caché y no desviarnos, vamos a usar una dependencia llamada `cacache`. `cacache` es una biblioteca de Rust para gestionar cachés de clave y contenido locales. Funciona escribiendo el caché en el disco.

Vamos a agregarlo al proyecto editando el archivo `Cargo.toml` directamente:

```
// Cargo.toml

workspace = { members = ["my-app-macros"] }

[package]
name = "my-app"
version = "0.1.0"
edition = "2021"
resolver = "2"

# Ver más claves y sus definiciones en https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
# Nueva dependencia
cacache = { version = "13.0.0", default-features = false, features = ["mmap"] }
macros = { path = "./macros" }
```

### Cómo Implementar la Macro de Atributo `cached_fn`

Vamos a empezar por declarar esta macro en `lib.rs`:

```
// my-app-macros/src/lib.rs

#[proc_macro_attribute]
pub fn cached_fn(args: TokenStream, item: TokenStream) -> TokenStream {
    cached_fn_impl(args, item)
}
```

Crea un nuevo archivo `cached_fn.rs` para almacenar la implementación:

```
touch my-app-macros/src/cached_fn.rs
```

Vamos a definir cómo deberían verse nuestros argumentos antes de implementar cualquier cosa:

### Argumentos del Atributo `cached_fn`

```
// my-app-macros/src/cached_fn.rs

#[derive(FromMeta)]
struct CachedParams {
    // Aceptar cualquier expresión que debamos usar para calcular la
    // clave. Esto puede ser una cadena constante o algún cálculo
    // basado en los argumentos de la función.
    keygen: Option<Expr>,
}
```

El único argumento es un `keygen` opcional, que es de tipo `Expr`. `Expr` representa cualquier expresión válida [Rust][57], por lo que puede ser muy dinámico. En este ejemplo, estarás pasando una expresión que genera la clave basada en los argumentos de la función de destino.

```
// my-app-macros/src/cached_fn.rs

pub fn cached_fn_impl(args: TokenStream, item: TokenStream) -> TokenStream {
    // Analizar tokens de argumento como una lista de elementos NestedMeta
    let attr_args = match NestedMeta::parse_meta_list(args.into()) {
        Ok(v) => v,
        Err(e) => {
            // Escribir error en la secuencia de tokens de salida si hay uno
            return proc_macro::TokenStream::from(Error::from(e).write_errors());
        }
    };

    // Analizar la lista anidada de metadatos como nuestra estructura `CachedParams`
    let CachedParams { keygen } = match CachedParams::from_list(&attr_args) {
        Ok(params) => params,
        Err(error) => {
            // Escribir error en la secuencia de tokens de salida si hay uno
            return proc_macro::TokenStream::from(Error::from(error).write_errors());
        }
    };

    // Analizar el elemento objetivo de entrada como una función
    let ItemFn {
        // La firma de la función
        sig,
        // El especificador de visibilidad de esta función
        vis,
        // El bloque o cuerpo de la función
        block,
        // Otros atributos aplicados a esta función
        attrs,
    } = parse_macro_input!(item as ItemFn);

    // Generar nuestra declaración de clave basada en el parámetro dado (o falta de él)
    let key_statement = if let Some(keygen) = keygen {
        // Si el usuario especificó un `keygen`, usar eso como una expresión para
        // obtener la clave de caché.
        quote! {
            let __cache_key = #keygen;
        }
    } else {
        // Si no se proporcionó un `keygen`, usar el nombre de la función
        // como clave de caché.
        let fn_name = sig.ident.clone().to_string();
        quote! {
            let __cache_key = #fn_name;
        }
    };

    // Reconstruir la función como salida usando la entrada analizada
    quote!(
        // Aplicar otros atributos de la función original a la función generada
        #(#attrs)*
        #vis #sig {
            // Incluir la key_statement que generamos arriba como lo primero
            // en el cuerpo de la función
            #key_statement

            // Intentar leer el valor desde la caché
            match cacache::read_sync("./__cache", __cache_key.clone()) {
                // Si el valor existe, analizarlo como cadena y devolverlo
                Ok(value) => {
                    println!("Los datos se obtienen de la caché");
                    from_utf8(&value).unwrap().to_string()
                },
                Err(_) => {
                    println!("Los datos no se obtienen de la caché");
                    // Guardar la salida del bloque de la función original en
                    // una variable.
                    let output = #block;

                    // Escribir el valor de salida en la caché como bytes
                    cacache::write_sync("./__cache", __cache_key, output.as_bytes()).unwrap();

                    // Devolver la salida original
                    output
                }
            }
        }
    )
    .into()
}
```

Bueno, resulta que has visto todo lo que usamos en este antes.

Lo único nuevo aquí es el uso de la dependencia `cacache`, pero eso también es bastante sencillo. Simplemente das la ubicación donde deseas almacenar los datos en caché como el primer argumento a las funciones `read_sync` y `write_sync` proporcionadas por `cacache`.

También hemos añadido algunos registros para ayudarnos a verificar que la macro funcione como se espera.

### Cómo Usar la Macro `cached_fn`

Para hacer que cualquier función sea memorizada o en caché, simplemente la anotamos usando el atributo `cached_fn`:

```
// src/main.rs

#[cached_fn(keygen = "format!(\"{first_name} {last_name}\")")]
fn test_cache(first_name: String, last_name: String) -> String {
    format!("{first_name} {last_name}")
}

fn main() {
    test_cache("John".to_string(), "Appleseed".to_string());
    test_cache("John".to_string(), "Appleseed".to_string());
    test_cache("John".to_string(), "Doe".to_string());
}
```

Si ejecutas esto, deberías ver la siguiente salida:

```
Los datos no se obtienen de la caché
Los datos se obtienen de la caché
Los datos no se obtienen de la caché
```

Lo que muestra claramente que si la función se llama más de una vez para los mismos argumentos, los datos se devuelven de la caché. Pero si los argumentos son diferentes, no devuelve el valor que fue almacenado en caché para un conjunto diferente de argumentos.

Hicimos muchas suposiciones para este que no se sostienen en un caso de uso del mundo real. Como tal, esto es solo para propósitos de aprendizaje, pero representa un caso de uso del mundo real.

Por ejemplo, he escrito macros de atributo para almacenar en caché funciones de manejadores HTTP usando `redis` para servidores de producción. Esos tienen una implementación muy similar a esta, pero contienen muchas "campanas y silbatos" para trabajar con ese caso de uso particular.

## Una Sencilla Macro de Tipo Función

Finalmente es hora de divertirnos de nuevo. Vamos a comenzar simple, pero el segundo ejemplo incluirá el análisis de sintaxis personalizada. ¿Divertido, cierto?

Descargo de responsabilidad: Si estás familiarizado con las macros declarativas (usando la sintaxis `macro_rules!`), podrías darte cuenta de que los siguientes ejemplos se pueden escribir fácilmente usando esa sintaxis y no necesitan ser macros procedurales. Escribir ejemplos de macros procedurales que no se puedan escribir como macros declarativas es extremadamente difícil si también deseas mantener las cosas simples, por lo cual los ejemplos fueron elegidos a pesar de esto.
```

Vamos a construir una macro muy simple que toma una cadena literal (del tipo `&str`) como entrada y crea una constante pública global para ella (el nombre de la variable será el mismo que el valor). Básicamente, nuestra macro generará lo siguiente:

```
pub const CADENA_LITERAL: &str = "CADENA_LITERAL";
```

### Cómo Declarar una Macro Parecida a una Función

Declaras macros parecidas a funciones creando una función y anotando esa función usando una macro `proc_macro`. Esto le dice al compilador que considere esa función como una declaración de macro. Veamos cómo se ve eso:

```
// my-app-macros/src/lib.rs

#[proc_macro]
pub fn constant_string(item: TokenStream) -> TokenStream {
    constant_string_impl(item)
}
```

Para estas macros, el nombre de la función es importante, ya que también se convierte en el nombre de la macro. Como puedes ver, estas solo toman un argumento, que es lo que pasas a la macro. Literalmente puede ser cualquier cosa, incluso sintaxis personalizada que no es código válido de Rust.

### Cómo Implementar la Macro `constant_string`

Para la implementación, vamos a crear un nuevo archivo `constant_string.rs`:

```
touch my-app-macros/src/constant_string.rs
```

La implementación es bastante simple:

```
use darling::FromMeta;
use proc_macro::TokenStream;
use quote::quote;
use syn::{parse_macro_input, Ident, LitStr};

pub fn constant_string_impl(item: TokenStream) -> TokenStream {
    // Parsear la entrada como un literal de cadena
    let constant_value = parse_macro_input!(item as LitStr);

    // Crear un nuevo `Ident` (identificador) a partir del valor de cadena pasado.
    // Este será el nombre de la variable constante.
    let constant_value_name = Ident::from_string(&constant_value.value()).unwrap();

    // Generar el código para declarar la variable constante.
    quote!(pub const #constant_value_name: &str = #constant_value;).into()
}
```

Todo lo que hacemos es analizar la entrada como un literal de cadena. Si pasas algo que no es un literal de cadena, lanzará un error. Luego tomamos la cadena, creamos un identificador a partir de ella y generamos el código de salida. Corto y simple.

### Cómo Usar la Macro `constant_string`

El uso de esta macro también es bastante simple:

```
// src/main.rs

constant_string!("SOME_CONSTANT_STRING_VALUE");
```

El código anterior se ampliará a esto:

```
pub const SOME_CONSTANT_STRING_VALUE: &str = "SOME_CONSTANT_STRING_VALUE";
```

## Una Macro Más Elaborada Parecida a una Función

Las macros parecidas a funciones, como su nombre podría sugerir, se pueden usar de manera similar a la llamada a una función. También puedes usarlas en cualquier lugar donde puedas llamar a una función, y más allá.

### La Macro `hash_mapify`

Pasando a las partes interesantes: la macro que vas a escribir ahora te permitirá generar un `HashMap` simplemente pasando una lista de pares clave-valor. Por ejemplo:

```
let variable = "Some variable";

hash_mapify!(
    &str,
    key = "value", 
    key2 = "value2", 
    key3 = "value3", 
    key4 = variable
);
```

Como puedes ver, queremos que el primer argumento sea el tipo del valor, y los argumentos subsecuentes sean los pares clave-valor. Y necesitaremos analizar todo esto nosotros mismos.

Para mantener las cosas simples, ya que esto puede salirse fácilmente de control, solo vamos a soportar valores primitivos como cadenas, enteros, flotantes y booleanos. Así que no vamos a soportar la creación de un `hash_map` con claves no de tipo cadena o `enum` y `struct` como valores.

### Cómo Implementar la Macro `hash_mapify`

Vamos a empezar como de costumbre declarando nuestra macro:

```
// my-app-macros/src/lib.rs

#[proc_macro]
pub fn hash_mapify(item: TokenStream) -> TokenStream {
    hash_mapify_impl(item)
}
```

A continuación, vas a definir una estructura de datos para mantener tus datos de entrada. En este caso, necesitas saber el tipo de valor pasado, así como una lista de pares clave-valor.

Vamos a extraer la implementación a un archivo separado, que es donde también implementarás los tipos de datos y la lógica de análisis.

Crea un nuevo archivo `hash_mapify.rs` y declara el tipo de dato para mantener los datos de entrada:

```
touch my-app-macros/src/hash_mapify.rs
```

### Cómo Analizar la Entrada de `hash_mapify`

```
// my-app-macros/src/hash_mapify.rs

use proc_macro::TokenStream;
use quote::{quote, ToTokens};
use syn::parse::{Parse, ParseStream};
use syn::{parse_macro_input, Lit, LitStr, Token, Type};

pub struct ParsedMapEntry(String, proc_macro2::TokenStream);

pub struct ParsedMap {
    value_type: Type,
    entries: Vec<ParsedMapEntry>,
}
```

Almacenamos el valor como `TokenStream` directamente porque necesitamos soportar tanto valores literales como variables, los cuales solo tienen un tipo común en este contexto, `TokenStream`.

También podrías haber notado que guardamos el `value_type` como `Type`, que es un tipo proporcionado por el crate `syn`, que es un enum de los posibles tipos que un valor de Rust podría tener. ¡Eso fue un poco complicado!

No necesitarás manejar cada variante de este enum, ya que este tipo también puede ser convertido directamente a `TokenStream`. Entenderás mejor qué significa esto en breve.

A continuación, necesitas implementar el rasgo `syn::parse::Parse` para `ParsedMap` declarado anteriormente, para que pueda ser calculado a partir del `TokenStream` pasado como argumentos a la macro.

```
// my-app-macros/src/hash_mapify.rs


`input`, que en este caso es de tipo `ParsedStream`, funciona de manera similar a un iterador. Necesitas analizar los tokens del `input` utilizando el método `parse` en él, lo que también adelantará el flujo hasta el comienzo del siguiente token.

Por ejemplo, si tienes un flujo de tokens que representa `[a, b, c]`, tan pronto como analices `[` de este flujo, el flujo será mutado para contener solo `a, b, c]`. Esto es muy similar a los iteradores, donde tan pronto como sacas un valor, el iterador avanza una posición y solo contiene los elementos restantes.

Antes de analizar cualquier cosa, necesitas verificar si el `input` está vacío y detenerse si lo está:

```
// my-app-macros/src/hash_mapify.rs

impl Parse para ParsedMap {
    fn parse(input: ParseStream) -> syn::Result<Self> {
        // ...

        // Verifica si el `input` está vacío (no se pasaron argumentos).
        // Si es así, detente porque no podemos continuar.
        if input.is_empty() {
            panic!("Se debe especificar al menos un tipo para un hashmap vacío");
        }

        // ...
    }
}
```

Dado que esperamos que el primer argumento pasado al macro sea el tipo del valor en nuestro hashmap, analicemos eso del flujo de tokens:

```
// my-app-macros/src/hash_mapify.rs

impl Parse para ParsedMap {
    fn parse(input: ParseStream) -> syn::Result<Self> {
        // ...

        // Dado que el primer argumento debería ser de tipo `Type`,
        // intentas analizar `Type` del `input` y devuelves un error de otra manera.
        let ty = input.parse::<Type>()?;

        // ...
    }
}
```

Parse toma un único argumento de tipo que representa lo que se debe analizar.

Si el primer argumento no se puede analizar como un tipo válido, se devolverá un error. Ten en cuenta que esto no verifica si el tipo que pasaste realmente existe o no, esto solo validará si los tokens en el primer argumento son válidos para una definición de tipo, y eso es todo.

Esto significa que si pasas `SomeRandomType` donde `SomeRandomType` no está realmente definido, el análisis aún tendrá éxito. Solo fallará después de expandir el macro durante el tiempo de compilación.

Sigamos adelante, también esperamos que el usuario use `,` para separar los argumentos. Analicemos eso como el próximo token después del tipo:

```
// my-app-macros/src/hash_mapify.rs

impl Parse para ParsedMap {
    fn parse(input: ParseStream) -> syn::Result<Self> {
        // ...

        // A continuación, analiza el token `,` que esperas que se
        // utilice para separar los argumentos.
        input.parse::<Token![,]>()?;

        // ...
    }
}
```

Podrías notar el uso del macro `Token!` al proporcionar el argumento de tipo para el método `parse`. Es un macro proporcionado por `syn` para convertir fácilmente incorporados como palabras clave (`type`, `async`, `fn`, y así sucesivamente), así como signos de puntuación (`,`, `.`, `;`, y así sucesivamente) y delimitadores (`{`, `[`, `(`, y así sucesivamente). Este macro toma un solo argumento, que es el literal de la palabra clave/puntuación/delimitador para el que se necesita el tipo.

Los documentos oficiales lo definen como:

> Un macro de tipo que se expande al nombre de la representación del tipo Rust de un token dado.

Ahora que tienes el tipo de valor así como el primer separador (coma), es momento de comenzar a analizar pares de clave-valor. Todos los pares de clave-valor siguen la misma estructura `key = value` y están separados por comas.

Ten en cuenta que el espacio en blanco no es importante, ya que se maneja completamente durante el proceso de tokenización y no es algo que necesites manejar tú.

Dado que no sabrás cuántos pares de clave-valor se pasan, necesitas algo que te diga cuándo se ha analizado todo:

```
// my-app-macros/src/hash_mapify.rs

impl Parse para ParsedMap {
    fn parse(input: ParseStream) -> syn::Result<Self> {
        // ...

        // Bucle hasta que el `input` esté vacío (no queda
        // nada por analizar).
        while !input.is_empty() {
            // ..
        }

        // ...
    }
}
```

Como expliqué anteriormente, los tokens se toman del flujo y avanzan cada vez que analizas algo. Esto significa que cuando se han analizado todos los tokens, el flujo estará vacío. Utilizamos este hecho aquí para averiguar cuándo salir del bucle.

Cada par de clave-valor se puede analizar de manera similar a como analizaste el argumento de tipo:

```
// my-app-macros/src/hash_mapify.rs

impl Parse para ParsedMap {
    fn parse(input: ParseStream) -> syn::Result<Self> {
        // ...

        // Bucle hasta que el `input` esté vacío (no queda
        // nada por analizar).
        while !input.is_empty() {
            // Intenta analizar la clave como un identificador
            let key = if let Ok(key) = input.parse::<syn::Ident>() {
                key.to_string()
                // Si no es un identificador, intenta analizarlo como
                // un literal de cadena.
            } else if let Ok(key) = input.parse::<LitStr>() {
                key.value()
                // Si no es ni un identificador ni un literal de cadena,
                // no es una clave válida, así que detente con el
                // error apropiado.
            } else {
                panic!("¡La clave debe ser un literal de cadena o un identificador!");
            };

            // Analiza el signo `=`, que debería ser el próximo token
            // después de una clave.
            input.parse::<Token![=]>()?;
```

```
// Empuja el par clave-valor analizado a nuestra lista.
entries.push(ParsedMapEntry(key, value));

// Verifica si el siguiente token es una coma, sin avanzar en el stream.
if input.peek(Token![,]) {
    // Si lo es, entonces analízalo y avanza en el stream antes
    // de pasar al siguiente par clave-valor.
    input.parse::<Token![,]>()?;
}

// ...
}
}
```

Lo único nuevo aquí es la llamada al método `peek` al final. Este es un método especial que devuelve un booleano si el token que se pasa a `peek` es el siguiente token en el stream, y falso en caso contrario.

Como su nombre podría sugerir, esto solo realiza una verificación, por lo que no saca ese token del stream ni avanza en el stream de ninguna forma.

Una vez que se completa todo el análisis, solo devuelves la información como parte de la estructura `ParsedMap` que declaramos anteriormente. La implementación completa para este trait es la siguiente si te resulta más fácil de leer:

```
// my-app-macros/src/hash_mapify.rs

impl Parse for ParsedMap {
    fn parse(input: ParseStream) -> syn::Result<Self> {
        let mut entries = Vec::<ParsedMapEntry>::new();

        // Verifica si la entrada está vacía (no se pasan argumentos). Si no,
        // lanza un pánico ya que no podemos continuar.
        if input.is_empty() {
            panic!("Al menos se debe especificar un tipo para un hashmap vacío");
        }

        // Dado que el primer argumento debe ser de tipo `Type`, intentas
        // analizar `Type` desde la entrada y devuelve un error de lo contrario.
        let ty = input.parse::<Type>()?;

        // A continuación, analiza el token `,`, que esperas que se use para
        // separar los argumentos.
        input.parse::<Token![,]>()?;

        // Bucle hasta que la entrada esté vacía (no quede nada más
        // para analizar).
        while !input.is_empty() {
            // Intenta analizar la clave como un identificador.
            let key = if let Ok(key) = input.parse::<syn::Ident>() {
                key.to_string()
                // Si no es un identificador, intenta analizarlo como
                // un literal de cadena.
            } else if let Ok(key) = input.parse::<LitStr>() {
                key.value()
                // Si no es ni un identificador ni un literal de cadena,
                // no es una clave válida, por lo que lanza un pánico con el
                // error apropiado.
            } else {
                panic!("¡La clave debe ser un literal de cadena o un identificador!");
            };

            // Analiza el signo `=`, que debería ser el siguiente token después
            // de una clave.
            input.parse::<Token![=]>()?;

            // Luego, intenta analizar el valor como un identificador. Si lo es,
            // significa que es una variable, por lo que deberíamos convertirlo
            // directamente en un stream de tokens.
            let value = if let Ok(value) = input.parse::<syn::Ident>() {
                value.to_token_stream()
                // Si la entrada no es un identificador, intenta analizarla como un
                // valor literal como `"cadena"` para cadenas, `42`
                // para números, `false` para valores booleanos, etc.
            } else if let Ok(value) = input.parse::<Lit>() {
                value.to_token_stream()
            } else {
                // Si la entrada no es ni un identificador ni un valor literal,
                // lanza un pánico con el error apropiado.
                panic!("¡El valor debe ser un literal o un identificador!");
            };

            // Empuja el par clave-valor analizado a nuestra lista.
            entries.push(ParsedMapEntry(key, value));

            // Verifica si el siguiente token es una coma, sin avanzar en el stream.
            if input.peek(Token![,]) {
                // Si lo es, entonces analízalo y avanza en el stream antes
                // de pasar al siguiente par clave-valor.
                input.parse::<Token![,]>()?;
            }
        }

        Ok(ParsedMap {
            value_type: ty,
            entries,
        })
    }
}
```

### Cómo Generar el Código de Salida

Ahora puedes finalmente escribir la implementación real del macro, que va a ser bastante sencilla:

```
// my-app-macros/src/hash_mapify.rs

pub fn hash_mapify_impl(item: TokenStream) -> TokenStream {
    // Analiza el stream de tokens de entrada como `ParsedMap` definido por nosotros.
    // Esto usará la lógica del trait de análisis que implementamos
    // anteriormente.
    let input = parse_macro_input!(item as ParsedMap);

    let key_value_pairs = input.entries;
    let ty = input.value_type;

    // Genera el hashmap de salida dentro de un bloque de código para que
    // no sobrescribamos ninguna variable existente. Devuelve el hashmap
    // desde el bloque.
    quote!({
        // Crea un nuevo hashmap con `String` para el tipo de clave y `#ty` para
        // el tipo de valor, que se analizó desde los argumentos de entrada del macro.
        let mut hash_map = std::collections::HashMap::<String, #ty>::new();

        // Inserta todos los pares clave-valor en el hashmap.
        #(
            hash_map.insert(#key_value_pairs);
        )*

        // Devuelve el hashmap generado
        hash_map
    })
    .into()
}
```
```

```
#(hash_map.insert(#key_value_pairs);)*
```

que es la sintaxis correcta para trabajar con listas, pero el tipo subyacente `ParsedMapEntry` es un tipo personalizado. Y ni `syn` ni `quote` sabrían cómo convertirlo en un flujo de tokens. Así que no podemos usarlo con esta sintaxis.

Pero si intentamos escribir manualmente una implementación donde hacemos el bucle nosotros mismos, generamos un flujo de tokens separado en cada bucle y extendemos el existente, será bastante tedioso. ¿No sería genial si hubiera una mejor solución? Resulta que la hay: el rasgo `ToTokens`.

### Cómo Convertir Tipos de Datos Personalizados en Tokens de Salida

Este rasgo puede ser implementado para cualquiera de nuestros tipos personalizados y define cómo se ve el tipo cuando se convierte en el flujo de tokens.

```
// my-app-macros/src/hash_mapify.rs

impl ToTokens for ParsedMapEntry {
    fn to_tokens(&self, tokens: &mut proc_macro2::TokenStream) {
        let key = self.0.clone();
        let value = self.1.clone();

        tokens.extend(quote!(String::from(#key), #value));
    }
}
```

Como parte de la implementación, necesitas mutar el argumento `tokens` y extenderlo para que contenga el flujo de tokens que queremos que nuestro tipo genere. La sintaxis que utilicé para hacer eso debería ser familiar a estas alturas.

Una vez que hayas hecho esto, `quote` ahora puede convertir fácilmente el código problemático en flujo de tokens. Así que esto: `#(hash_map.insert(#key_value_pairs);)*` ahora funcionará directamente.

Como de costumbre, aquí está la implementación completa si eso es más fácil de entender:

```
// my-app-macros/src/hash_mapify.rs

use proc_macro::TokenStream;
use quote::{quote, ToTokens};
use syn::parse::{Parse, ParseStream};
use syn::{parse_macro_input, Lit, LitStr, Token, Type};

pub struct ParsedMapEntry(String, proc_macro2::TokenStream);

pub struct ParsedMap {
    value_type: Type,
    entries: Vec<ParsedMapEntry>,
}

impl ToTokens for ParsedMapEntry {
    fn to_tokens(&self, tokens: &mut proc_macro2::TokenStream) {
        let key = self.0.clone();
        let value = self.1.clone();

        tokens.extend(quote!(String::from(#key), #value));
    }
}

impl Parse for ParsedMap {
    fn parse(input: ParseStream) -> syn::Result<Self> {
        let mut entries = Vec::<ParsedMapEntry>::new();

        // Verifica si la entrada está vacía (no se han pasado argumentos). Si no,
        // lanza pánico ya que no podemos continuar.
        if input.is_empty() {
            panic!("Se debe especificar al menos un tipo para un mapa vacío");
        }

        // Dado que el primer argumento debe ser de tipo `Type`, intentas
        // analizar `Type` de la entrada y devuelve un error de lo contrario.
        let ty = input.parse::<Type>()?;

        // A continuación, analiza el token `,`, que esperas que se use para
        // separar los argumentos.
        input.parse::<Token![,]>()?;

        // Bucle hasta que la entrada esté vacía (no quede nada más
        // por analizar).
        while !input.is_empty() {
            // Intenta analizar la clave como un identificador
            let key = if let Ok(key) = input.parse::<syn::Ident>() {
                key.to_string()
                // Si no es un identificador, intenta analizarlo como
                // un literal de cadena
            } else if let Ok(key) = input.parse::<LitStr>() {
                key.value()
                // Si no es ni un identificador ni un literal de cadena,
                // no es una clave válida, así que lanza pánico con un
                // error apropiado.
            } else {
                panic!("¡La clave debe ser un literal de cadena o un identificador!");
            };

            // Analiza el signo `=`, que debería ser el siguiente token después
            // de una clave.
            input.parse::<Token![=]>()?;

            // A continuación, intenta analizar el valor como un identificador. Si lo es, significa
            // significa que es una variable, así que deberíamos convertirla directamente en un flujo de tokens.
            let value = if let Ok(value) = input.parse::<syn::Ident>() {
                value.to_token_stream()
                // Si la entrada no es un identificador, intenta analizarla como un
                // valor literal como `"cadena"` para cadenas, `42`
                // para números `false` para valor booleano, etc.
            } else if let Ok(value) = input.parse::<Lit>() {
                value.to_token_stream()
            } else {
                // Si la entrada no es ni un identificador ni un valor literal,
                // lanza pánico con un error apropiado.
                panic!("¡El valor debe ser un literal o un identificador!");
            };

            // Agrega la pareja clave-valor analizada a nuestra lista.
            entries.push(ParsedMapEntry(key, value));

            // Verifica si el siguiente token es una coma, sin avanzar el flujo
            if input.peek(Token![,]) {
                // Si lo es, analízalo y avanza el flujo antes
                // de pasar a la siguiente pareja clave-valor
                input.parse::<Token![,]>()?;
            }
        }

        Ok(ParsedMap {
            value_type: ty,
            entries,
        })
    }
}

pub fn hash_mapify_impl(item: TokenStream) -> TokenStream {
    // Analiza el flujo de tokens de entrada como `ParsedMap` definido por nosotros.
    // Esto usará la lógica del rasgo parse que implementamos
    // anteriormente.
    let input = parse_macro_input!(item as ParsedMap);
```

```markdown
// Generar el hashmap de salida dentro de un bloque de código para que
// no ensombrezcamos ninguna variable existente. Devolver el hashmap
// desde el bloque.
quote!({
    // Crear un nuevo hashmap con `String` para el tipo de clave y `#ty` para
    // el tipo de valor, que se analiza a partir de los argumentos de entrada de la macro.
    let mut hash_map = std::collections::HashMap::<String, #ty>::new();

    // Insertar todas las parejas clave-valor en el hashmap.
    #(
        hash_map.insert(#key_value_pairs);
    )*

    // Devolver el hashmap generado
    hash_map
})
.into()
}
```

### Cómo Usar la Macro `hash_mapify`

Podemos verificar que nuestra macro funciona escribiendo un uso simple:

```rust
// src/main.rs

fn main() {
    test_hashmap();
}

fn test_hashmap() {
    let some_variable = "Some variable value";

    let hash_map = hash_mapify!(
        &str,
        "first_key" = "first_value",
        "second_variable" = some_variable,
        some_key = "value for variable key",
    );

    let number_hash_map =
        hash_mapify!(usize, "first_key" = 1, "second_variable" = 2, some_key = 3,);

    dbg!(hash_map);
    dbg!(number_hash_map);
}
```

Si ejecutas este código, deberías ver la siguiente salida:

```
[src/main.rs:62:5] hash_map = {
    "first_key": "first_value",
    "some_key": "value for variable key",
    "second_variable": "Some variable value",
}
[src/main.rs:63:5] number_hash_map = {
    "second_variable": 2,
    "first_key": 1,
    "some_key": 3,
}
```

que es lo que esperaríamos que sucediera.

Y ahora que hemos cubierto los tres tipos de macros procedurales, vamos a concluir los ejemplos aquí.

## Más Allá de Escribir Macros

Ahora que has aprendido cómo escribir macros de derivación básicas, me gustaría tomarme un tiempo para presentar rápidamente algunas herramientas y técnicas adicionales que serán útiles al trabajar con macros. También señalaré algunos inconvenientes de por qué y cuándo evitarlas.

### Crates/Herramientas Útiles

[**cargo-expand**][58]

Esta es una herramienta de CLI que puede generar código expandido de macros para cualquier archivo en tu proyecto. Otro gran proyecto de [David Tolnay][59]. Necesitas la cadena de herramientas nightly para Rust para usar esto, pero no te preocupes, solo se requiere para que la herramienta funcione. No necesitas hacer que tu proyecto use la cadena de herramientas nightly también. Tu proyecto puede permanecer en la zona estable.

Instala la cadena de herramientas nightly:

```
rustup toolchain install nightly
```

Instala `cargo-expand`:

```
cargo install cargo-expand
```

Ahora que esto está hecho, puedes ver cómo se ve la expansión real de tu código en main. Simplemente ejecuta lo siguiente en el directorio del proyecto `my-app`:

```
cargo expand
```

y se mostrará el código expandido en la salida de la terminal. Verás algunas cosas desconocidas también, como a lo que se expande la macro `dbg!`, pero puedes ignorarlas.

**[trybuild][60] & [macrotest][61]**

Estos son 2 crates que son extremadamente útiles si deseas realizar pruebas unitarias de las formas expandidas de tus macros procedurales, o afirmar cualquier error de compilación esperado.

## Desventajas de las Macros

### Depuración (o la falta de ella)

No puedes poner un punto de interrupción en ninguna línea de código que sea generada por la macro. Tampoco puedes llegar a ella desde el seguimiento de pila de un error. Esto hace que la depuración del código generado sea muy difícil.

En mi flujo de trabajo habitual, ya sea pongo registros en el código generado, o si eso no es suficiente, reemplazo temporalmente el uso de la macro con el código proporcionado por `cargo expand` para depurarlo, hacer cambios y luego actualizar el código de la macro en base a eso.

Podría haber mejores maneras por ahí, y si conoces alguna, te agradecería si pudieras compartirlas conmigo.

### Costos de Tiempo de Compilación

Hay un costo no nulo para la expansión de macros que el compilador necesita ejecutar y procesar, y luego verificar que el código que generó es válido. Esto se vuelve aún más costoso cuando se involucran macros recursivas.

Como una estimación muy burda, cada expansión de macro agrega 10ms al tiempo de compilación del proyecto. Si estás interesado, te animo a leer esta [introducción sobre cómo el compilador procesa macros][62] internamente.

### Falta de Auto-completar y Verificación de Código

El código escrito como parte de una salida de macro actualmente no es completamente compatible con ninguna IDE, ni es compatible con rust-analyzer. Así que, en la mayoría de los casos, estás escribiendo código sin depender de características como auto-completar, auto-sugerencias, y así sucesivamente.

### ¿Dónde Trazamos la Línea?

Dado el inmenso potencial de las macros, es muy fácil dejarse llevar por ellas. Es importante recordar todos los inconvenientes y tomar decisiones en consecuencia, asegurándote de no caer en la abstracción prematura.

Como regla general, personalmente evito implementar cualquier "lógica de negocio" con macros, ni intento escribir macros para generar código que necesitaré depurar repetidamente con un depurador. O el código que necesitaré hacer cambios micro para pruebas de rendimiento y mejora.

## Conclusión

¡Ha sido un largo viaje! Pero quería que cualquiera con conocimientos y experiencia básicos en Rust pudiera seguir y salir de esto capaz de escribir macros en sus propios proyectos.
```

Puedes encontrar el código completo de todo lo que revisamos en este artículo en el repositorio [https://github.com/anshulsanghi-blog/macros-handbook][63].

Además, no dudes en **[contactarme][64]** si tienes alguna pregunta u opinión sobre este tema.

### **¿Te gusta mi trabajo?**

¡Considera invitarme a un café para apoyar mi trabajo!

[☕Invítame a un café][65]

Hasta la próxima, ¡feliz codificación y deseándote cielos despejados!

[1]: https://www.freecodecamp.org/news/rust-in-replit/
[2]: #heading-what-are-macros-in-rust
[3]: #heading-types-of-macros-in-rust
[4]: #heading-types-of-procedural-macros
[5]: #heading-prerequisites
[6]: #heading-helpful-dependencies
[7]: #heading-how-to-write-a-simple-derive-macro
[8]: #heading-the-intostringhashmap-derive-macro
[9]: #heading-how-to-declare-a-derive-macro
[10]: #how-to-parse-macro-input
[11]: #how-to-ensure-a-struct-target-for-macro
[12]: #heading-how-to-build-the-output-code
[13]: #heading-how-to-use-your-derive-macro
[14]: #heading-how-to-improve-our-implementation
[15]: #heading-a-more-elaborate-derive-macro
[16]: #heading-the-derivecustommodel-macro
[17]: #how-to-separate-implementation-from-declaration
[18]: #heading-how-to-parse-derive-macro-arguments
[19]: #heading-how-to-implement-derivecustommodel
[20]: #heading-how-to-generate-each-custom-model
[21]: #how-to-use-your-derivecustommodal-macro
[22]: #heading-a-simple-attribute-macro
[23]: #heading-the-logduration-attribute
[24]: #heading-how-to-declare-an-attribute-macro
[25]: #heading-how-to-implement-the-logduration-attribute-macro
[26]: #how-to-use-your-log-duration-macro
[27]: #heading-a-more-elaborate-attribute-macro
[28]: #heading-the-cachedfn-attribute
[29]: #heading-how-to-implement-the-cachedfn-attribute-macro
[30]: #heading-cachedfn-attribute-arguments
[31]: #heading-how-to-use-the-cachedfn-macro
[32]: #heading-a-simple-function-like-macro
[33]: #heading-the-constantstring-macro
[34]: #heading-how-to-declare-a-function-like-macro
[35]: #heading-how-to-implement-the-constantstring-macro
[36]: #heading-how-to-use-the-constantstring-macro
[37]: #heading-a-more-elaborate-function-like-macro
[38]: #heading-the-hashmapify-macro
[39]: #heading-how-to-implement-the-hashmapify-macro
[40]: #how-to-parse-hash-mapifys-input
[41]: #how-to-generate-output-code
[42]: #heading-how-to-convert-custom-data-types-to-output-tokens
[43]: #heading-how-to-use-the-hashmapify-macro
[44]: #heading-beyond-writing-macros
[45]: #heading-helpful-cratestools
[46]: #heading-downsides-of-macros
[47]: #heading-debugging-or-lack-thereof
[48]: #heading-compile-time-costs
[49]: #heading-lack-of-auto-complete-and-code-checks
[50]: #heading-where-do-we-draw-the-line
[51]: #heading-wrapping-up
[52]: #heading-enjoying-my-work
[53]: https://doc.rust-lang.org/reference/macros-by-example.html
[54]: https://doc.rust-lang.org/reference/conditional-compilation.html
[55]: https://dev.to/balapriya/abstract-syntax-tree-ast-explained-in-plain-english-1h38
[56]: https://crates.io/users/dtolnay
[57]: https://doc.rust-lang.org/reference/expressions.html
[58]: https://github.com/dtolnay/cargo-expand
[59]: https://crates.io/users/dtolnay
[60]: https://docs.rs/trybuild/latest/trybuild/#
[61]: https://docs.rs/macrotest/latest/macrotest/#
[62]: https://rustc-dev-guide.rust-lang.org/macro-expansion.html
[63]: https://github.com/anshulsanghi-blog/macros-handbook
[64]: mailto:contact@anshulsanghi.tech
[65]: https://buymeacoffee.com/anshulsanghi

