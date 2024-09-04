---
title: El Manual de Clases de JavaScript – Guía Completa sobre Campos de Clase y la Palabra Reservada Super
date: 2024-09-04T15:22:50.195Z
author: Oluwatobi Sofela
authorURL: https://www.freecodecamp.org/news/author/oluwatobiss/
originalURL: https://www.freecodecamp.org/news/javascript-class-handbook/
posteditor: ""
proofreader: ""
---

Las clases te permiten privatizar tus datos mientras proporcionan a los usuarios un acceso indirecto a estos. Es una excelente manera de prevenir el acceso directo a los datos de tu constructor.

<!-- more -->

Este manual tiene como objetivo mostrarte exactamente cómo funcionan las clases en JavaScript. También discutiremos los campos de clase y la palabra reservada `super`.

## Tabla de Contenidos

1.  [¿Qué es una Clase en JavaScript?][1]
2.  [¿Por qué Clases en JavaScript?][2]
3.  [Sintaxis de una Clase en JavaScript][3]
    -   [¿Qué es una Palabra Reservada `class`?][4]
    -   [¿Qué es un Nombre de Clase?][5]
    -   [¿Qué es un Bloque de Código?][6]
    -   [¿Qué es un Cuerpo de Clase?][7]
4.  [¿Qué es un Campo de Clase en JavaScript?][8]
    -   [Cómo Crear Campos de Clase en JavaScript][9]
    -   [Cómo Crear Campos de Clase con Nombres Computados][10]
    -   [Cómo Crear Métodos Regulares de Campo de Clase][11]
    -   [Cómo Crear Métodos Cortos de Campo de Clase][12]
    -   [Métodos Regulares vs. Métodos Cortos de Campo de Clase: ¿Cuál es la Diferencia?][13]
    -   [¿Qué es un Método Prototípico Definido por el Usuario en Clases JavaScript?][14]
    -   [¿Qué es un Método `constructor` en Clases JavaScript?][15]
    -   [Tipos de Campos de Clase][16]
    -   [¿Qué es un Campo de Clase Público en Clases JavaScript?][17]
    -   [¿Qué es un Campo de Clase Privado en Clases JavaScript?][18]
    -   [¿Qué es un Campo de Clase Estático en Clases JavaScript?][19]
5.  [Tipos de Clases JavaScript][20]
    -   [¿Qué es una Declaración de Clase JavaScript?][21]
    -   [¿Qué es una Expresión de Clase JavaScript?][22]
    -   [¿Qué es una Clase Derivada en JavaScript?][23]
6.  [¿Qué es la Palabra Reservada `super` en JavaScript?][24]
    -   [Cómo Usar la Palabra Reservada `super` como Llamador de Función][25]
    -   [Cómo Usar la Palabra Reservada `super` como Accesor de Propiedades][26]
    -   [`super` vs. Palabra Reservada `this`: ¿Cuál es la Diferencia?][27]
7.  [Componentes de una Clase JavaScript][28]
8.  [¿Cómo Ayuda una Clase JavaScript con la Encapsulación?][29]
9.  [Cosas Importantes a Saber sobre Clases JavaScript][30]
    -   [1\. Declara tu Clase Antes de Acceder a Ella][31]
    -   [2\. Las Clases son Funciones][32]
    -   [3\. Las Clases son Estrictas][33]
    -   [4\. Evita la Palabra Reservada `return` en el Método `constructor` de tu Clase][34]
    -   [5\. La Evaluación de una Clase Comienza desde la Cláusula `extends` hasta sus Valores][35]
10.  [Resumen][36]

Entonces, comencemos desde lo básico.

## ¿Qué es una Clase en JavaScript?

Una clase en JavaScript es un [constructor de objetos][37] que la [palabra reservada `new`][38] utiliza para crear una nueva instancia de objeto.

Aquí hay un ejemplo:

```
// Define una clase JavaScript:
class Nombre {}

// Crea una instancia de objeto desde la clase Nombre:
const tuNombre = new Nombre();

// Verifica el contenido de tuNombre:
tuNombre;

// La invocación anterior devolverá un objeto vacío:
{ }
```

[**Intenta Editarlo**][39]

El fragmento anterior utilizó la palabra reservada `new` para crear una nueva instancia de objeto desde el constructor `class`.

**Nota:** Llamar a una clase de JavaScript requiere la palabra reservada `new`. De lo contrario, los navegadores lanzarán un `TypeError`.

## ¿Por qué Clases en JavaScript?

Las clases proporcionan una manera de crear una plantilla para crear objetos que tienen acceso a datos privados a través de métodos públicos.

En otras palabras, las clases te ayudan a [encapsular][40] tus datos mientras proporcionan a los usuarios un acceso indirecto a las operaciones internas de una instancia. Esto te permite proporcionar a los usuarios una interfaz limpia y amigable que es independiente de las implementaciones internas de un objeto.

Por ejemplo, [`Date`][41] es una clase en JavaScript que te permite acceder a sus datos de fecha a través de sus métodos públicos, como `getDate()`, `setDate()` y `getFullYear()`.

## Sintaxis de una Clase en JavaScript

```
class NombreDeClase {
  // cuerpo de la clase
}
```

Una clase se compone de cuatro componentes:

1.  Una palabra reservada `class`
2.  El nombre de la clase
3.  Un bloque de código (`{...}`)
4.  El cuerpo de la clase

Discutamos cada componente.

### ¿Qué es una Palabra Reservada `class`?

Usamos la palabra reservada `class` para declarar a los navegadores que un fragmento específico de código es una clase de JavaScript, no una clase matemática u otra clase genérica.

### ¿Qué es un Nombre de Clase?

Un nombre de clase te permite crear un identificador para tu clase, que puedes usar para referenciarla.

**Nota:** Los desarrolladores típicamente usan mayúsculas para comenzar el nombre de una clase. Esta convención ayuda a diferenciar un constructor de otras funciones.

### ¿Qué es un Bloque de Código?

Un bloque es un par de llaves (`{...}`) usadas para agrupar múltiples declaraciones juntas.

Aquí hay un ejemplo:

```
{
  var mejorColor = "Blanco";
}
```

El bloque en el fragmento anterior encerró una [declaración de JavaScript][42].

Aquí hay otro ejemplo:

```
if (new Date().getHours() < 18) {
  const horaAhora = new Date().getHours();
  const minutosAhora = new Date().getMinutes();
  const segundosAhora = new Date().getSeconds();
  console.log(`Revisa tus planes ahora. La hora es ${horaAhora}:${minutosAhora}:${segundosAhora}.`);
}
```

El bloque de código de la condición `if` agrupó cuatro declaraciones de JavaScript juntas.

```
class Time {
  hourNow = new Date().getHours();
  minutesNow = new Date().getMinutes();
  secondsNow = new Date().getSeconds();
}

if (new Date().getHours() < 18) {
   const currentTime = new Time();
   console.log(`Revisa tus planes ahora. La hora es ${currentTime.hourNow}:${currentTime.minutesNow}:${currentTime.secondsNow}.`);
}
```

El bloque de código de la clase `Time` agrupa tres declaraciones de JavaScript, mientras que el bloque de código de la condición `if` agrupa dos.

Nota lo siguiente:

-   `hourNow`, `minutesNow` y `secondsNow` son los campos (propiedades) de la clase.
-   El fragmento de código anterior utilizó la palabra clave `new` para construir un nuevo objeto a partir de la clase `Time`. Por lo tanto, el objeto `currentTime` es una instancia de la clase constructora `Time`.

### ¿Qué es el Cuerpo de una Clase?

El cuerpo de una clase es donde colocas una secuencia de declaraciones.

Aquí está la sintaxis:

```
class NombreDeLaClase {
  // cuerpo de la clase
}
```

**Nota:** El cuerpo de una clase alberga solo los campos de la clase. Pero ¿qué es exactamente un campo de clase? Averigüémoslo.

## ¿Qué es un Campo de Clase en JavaScript?

Un campo de clase es una propiedad definida directamente en el cuerpo de una clase, no dentro de ninguno de los [métodos][43] de la clase.

### Cómo Crear Campos de Clase en JavaScript

Puedes crear un campo de clase utilizando un signo igual (`=`) para asignar un valor a una propiedad, no dos puntos (`:`).

Aquí hay un ejemplo:

```
// Define una clase de JavaScript:
class Nombre {
  // Crea dos campos de clase:
  firstName = "Oluwatobi";
  lastName = "Sofela";
}

// Crea una nueva instancia de objeto:
const fullName = new Nombre();

console.log(fullName.firstName + " " + fullName.lastName);
```

[**Prueba Editarlo**][44]

La clase `Nombre` en el fragmento anterior tiene dos campos de clase (`firstName` y `lastName`).

Nota lo siguiente:

-   Los campos de clase en JavaScript por defecto son `undefined` si no les proporcionas ningún valor.
-   Los campos de clase son como las [propiedades][45] regulares del objeto cuyos nombres puedes [calcular][46]. Discutamos cómo.

### Cómo Crear Campos de Clase con Nombres Calculados

Puedes calcular (evaluar) el nombre de un campo de clase colocando una expresión entre corchetes, así:

```
// Inicializa una variable num con un número:
let num = 0;

// Asigna un valor de cadena a una variable enSuites:
const enSuites = "East";

// Define una clase Room y calcula los nombres de cada uno de sus campos de clase:
class Room {
  [enSuites + ++num] = num;
  [enSuites + ++num] = num;
  [enSuites + ++num] = num;
}

// Crea una instancia del objeto ensuiteRooms:
const ensuiteRooms = new Room();

// Verifica el contenido de ensuiteRooms:
console.log(ensuiteRooms);

// La invocación anterior devolverá:
{East1: 1, East2: 2, East3: 3}
```

[**Prueba Editarlo**][47]

Utilizamos la sintaxis `[enSuites + ++num]` en el fragmento anterior para calcular los nombres de los campos de clase.

En otras palabras, JavaScript evaluó la expresión `enSuites + ++num` y usó el resultado como nombre de cada campo de clase.

**Nota:** También puedes definir campos de clase como métodos regulares de JavaScript. Hablemos más sobre esto ahora.

### Cómo Crear Métodos de Campo de Clase Regulares

Puedes crear un método de campo de clase regular utilizando un signo igual (`=`) para asignar una función a una propiedad.

Aquí hay un ejemplo:

```
// Define una clase de JavaScript:
class Time {
  // Crea dos métodos de campo de clase regulares:
  hourNow = function() {
    return new Date().getHours();
  }
  minutesNow = function() {
    return new Date().getMinutes();
  }
}

// Crea una nueva instancia de objeto:
const currentTime = new Time();

console.log(`La hora es ${currentTime.hourNow()}:${currentTime.minutesNow()}.`);
```

[**Prueba Editarlo**][48]

Los métodos `hourNow` y `minutesNow` en el fragmento anterior son métodos de campo de clase porque son propiedades que contienen funciones regulares de JavaScript.

JavaScript te permite utilizar una sintaxis abreviada para acortar los métodos de tu clase. Veamos cómo.

### Cómo Crear Métodos Abreviados de Campo de Clase

El método abreviado de campo de clase es una manera concisa de definir métodos de JavaScript en el cuerpo de tus clases.

Aquí hay un ejemplo:

```
// Define una clase de JavaScript:
class Time {
  // Crea dos métodos de campo de clase abreviados: 
  hourNow() {
    return new Date().getHours();
  }
  minutesNow() {
    return new Date().getMinutes();
  }
}

// Crea una nueva instancia de objeto:
const currentTime = new Time();

console.log(`La hora es ${currentTime.hourNow()}:${currentTime.minutesNow()}.`);
```

[**Prueba Editarlo**][49]

Aunque puedes usar los métodos regulares y abreviados de manera intercambiable en el cuerpo de tu clase, debes conocer una diferencia significativa entre las dos sintaxis. Hablemos de ello ahora.

### Métodos Regulares vs. Métodos Abreviados de Campo de Clase: ¿Cuál es la Diferencia?

La principal diferencia entre los métodos regulares y los métodos abreviados de campo de clase es la siguiente:

-   Los métodos regulares son [propiedades de instancia][50], mientras que los métodos abreviados son [propiedades prototípicas][51].

En otras palabras, JavaScript trata los métodos regulares y abreviados de manera diferente como sigue:

-   **Método regular:** JavaScript agrega el método a la [instancia del objeto][52] que construyes con la palabra clave `new`. Por lo tanto, los métodos regulares son propiedades de la instancia del objeto.
-   **Método abreviado:** JavaScript agrega el método a la [propiedad `prototype`][53] de la clase. Por lo tanto, los métodos abreviados son propiedades prototípicas de una instancia de objeto.
```

```
// Definir una clase en JavaScript:
class Time {
  // Crear un método regular:
  hourNow = function() {
    return new Date().getHours();
  }
  // Crear un método abreviado:
  minutesNow() {
    return new Date().getMinutes();
  }
}

// Crear una nueva instancia de objeto:
const currentTime = new Time();

// Verificar el contenido de currentTime:
console.log(currentTime);

// La invocación anterior devolverá:
{ hourNow: hourNow() }
```

[**Prueba a editarlo**][54]

La instancia del objeto `currentTime` contiene solo la propiedad `hourNow` porque los métodos regulares son propiedades de instancia que la palabra clave `new` asigna al objeto que construye a partir de su clase constructora.

Por otro lado, los métodos abreviados son métodos prototípicos que JavaScript agrega a la propiedad `prototype` de la clase que has definido.

Por lo tanto, puedes acceder al método `minuteNow` a través de la [herencia prototípica][55] de su clase de la siguiente manera:

```
// Definir una clase en JavaScript:
class Time {
  // Crear un método regular:
  hourNow = function() {
    return new Date().getHours();
  }
  // Crear un método abreviado:
  minutesNow() {
    return new Date().getMinutes();
  }
}

// Verificar el contenido del prototipo de Time:
console.log(Time.prototype);

// La invocación anterior devolverá:
{...}:
  constructor: class Time {}
  minutesNow: function minutesNow()
  [[Prototype]]: Object {...}
```

[**Prueba a editarlo**][56]

Puedes ver que la propiedad `prototype` de `Time` contiene el método `minutesNow`, el cual todas las instancias de objeto heredarán automáticamente.

Aquí tienes un ejemplo:

```
// Definir una clase en JavaScript:
class Time {
  // Crear un método abreviado:
  minutesNow() {
    return new Date().getMinutes();
  }
}

// Crear una instancia de objeto a partir de la clase Time:
const currentTime = new Time();

// Verificar el contenido de currentTime:
console.log(currentTime);

// La invocación anterior devolverá un objeto vacío:
{ }

// Invocar el método minutesNow de currentTime:
console.log(currentTime.minutesNow());
```

[**Prueba a editarlo**][57]

El código `currentTime.minutesNow()` devolvió un valor válido porque `currentTime` heredó el método `minuteNow()` de la propiedad `prototype` de su constructor.

**Nota:** Una clase en JavaScript tiene dos tipos de métodos prototípicos:

-   Métodos definidos por el usuario
-   Métodos del constructor

Discutamos los dos tipos ahora.

### ¿Qué es un método prototípico definido por el usuario en las clases de JavaScript?

Un método prototípico definido por el usuario es el método abreviado que creas tú mismo en el cuerpo de tu clase de JavaScript.

Aquí tienes un ejemplo:

```
// Definir una clase en JavaScript:
class Name {
  // Crear un método abreviado:
  firstName(name) {
    return name;
  }
}

// Crear una instancia de objeto a partir de la clase Name:
const myName = new Name().firstName("Oluwatobi");

// Registrar el contenido de myName en la consola:
console.log(myName);

// La invocación anterior devolverá:
"Oluwatobi"
```

[**Prueba a editarlo**][58]

El método `firstName()` es un método definido por el usuario porque lo creamos nosotros mismos en el cuerpo de la clase `Name`.

## ¿Qué es un método constructor en las clases de JavaScript?

Un `constructor()` es el método prototípico predeterminado que viene incorporado con cada clase de JavaScript.

Crear un método `constructor` es opcional. Sin embargo, si no creas uno, JavaScript agregará automáticamente uno vacío.

El método `constructor` recibe automáticamente los [argumentos][59] que pasas a la clase. Por lo tanto, es el lugar ideal para definir los campos de la clase que dependen de los argumentos del [iniciador de la clase][60].

Aquí tienes un ejemplo:

```
// Definir una clase en JavaScript:
class Name {
  // Usar el método constructor incorporado:
  constructor(name) {
    this.name = name;
  }
}

// Crear una instancia de objeto a partir de la clase Name:
const myName = new Name("Oluwatobi");

// Registrar el contenido de myName en la consola:
console.log(myName);

// La invocación anterior devolverá:
{ name: "Oluwatobi" }
```

[**Prueba a editarlo**][61]

La clase `Name` anterior tiene un método `constructor` con una [propiedad de instancia][62] en su bloque de código.

**Consejo:** La palabra clave `this` del método `constructor()` se refiere a la instancia del objeto de la clase.

JavaScript ejecuta el método `constructor` antes que cualquier otro método definido por el usuario. Por lo tanto, es el mejor lugar para definir cualquier código que desees ejecutar antes que otros métodos en el cuerpo de la clase. Por ejemplo, considera el siguiente código:

```
// Definir una clase en JavaScript:
class CarColor {
  // Usar el método constructor incorporado:
  constructor(color) {
    this.carColor = `${color} car`;
  }
  // Crear un método abreviado:
  revealColor() {
    console.log(`I have a ${this.carColor}`);
  }
}

// Crear una instancia de objeto a partir de la clase CarColor:
const myCarColor = new CarColor("white");

// Invoca el método prototípico revealColor de myCarColor:
myCarColor.revealColor();

// La invocación anterior devolverá:
"I have a white car"
```

[**Prueba a editarlo**][63]

El fragmento anterior invocó automáticamente el método `constructor` mientras creaba la instancia del objeto `myCarColor`.

Por lo tanto, la computadora procesó las declaraciones del `constructor` antes de ejecutar el código `myCarColor.revealColor()`.

Nota lo siguiente:

-   Solo puedes usar la [técnica de método abreviado de JavaScript][64] para definir un `constructor`. De lo contrario, los navegadores lanzarán un `Uncaught SyntaxError`.
-   Una clase puede tener solo un método `constructor`. De lo contrario, los navegadores lanzarán un `Uncaught SyntaxError`.
```

## Tipos de Campos de Clase

Los tres tipos de campos de clase son:

-   Campos de clase públicos
-   Campos de clase privados
-   Campos de clase estáticos

Vamos a discutir cada tipo.

### ¿Qué es un Campo de Clase Público en Clases de JavaScript?

Un campo de clase público es una propiedad a la que una instancia de objeto tiene acceso.

**Consejo:** Aunque puedes definir múltiples campos de clase públicos con el mismo nombre, el último campo sobrescribirá a los anteriores.

#### Ejemplo: Cómo crear campos de clase públicos

```
// Define una clase de JavaScript:
class Name {
  // Crea dos campos de clase públicos:
  myName = "Oluwatobi";
  updateMyName(name) {
    this.myName = name;
  }
}

// Crea una nueva instancia de objeto:
const author = new Name();

// Revisa el valor actual de myName:
author.myName;

// La invocación anterior devolverá:
"Oluwatobi"

// Usa la propiedad de la variable author para modificar el valor de myName:
author.myName = "Sofela";

// Revisa el valor actual de myName:
author.myName;

// La invocación anterior devolverá:
"Sofela"

// Usa el método de la variable author para actualizar el valor de myName:
author.updateMyName("CodeSweetly");

// Revisa el valor actual de myName:
author.myName;

// La invocación anterior devolverá:
"CodeSweetly"
```

[**Prueba Editarlo**][65]

La clase `Name` en el fragmento anterior contiene campos de clase públicos porque puedes usar las instancias de objeto de la clase para acceder y modificar las dos propiedades.

Supongamos que defines múltiples campos de clase públicos con el mismo nombre. En ese caso, la última propiedad sobrescribirá a las anteriores.

#### Ejemplo: El último campo de clase público sobrescribe a los anteriores con el mismo nombre

```
// Define una clase de JavaScript:
class Name {
  // Crea tres campos de clase públicos:
  myName = "Oluwatobi";
  myName = "Sofela";
  myName = "CodeSweetly";
}

// Crea una nueva instancia de objeto:
const author = new Name();

// Revisa el valor actual de myName:
author.myName;

// La invocación anterior devolverá:
"CodeSweetly"
```

[**Prueba Editarlo**][66]

El fragmento anterior devolvió `"CodeSweetly"` porque el último campo de clase pública `myName` sobrescribió a los declarados anteriormente.

### ¿Qué es un Campo de Clase Privado en Clases de JavaScript?

Un campo de clase privado es una propiedad a la que solo puedes acceder y modificar dentro del cuerpo de la clase.

Puedes anteponer un campo de clase con el símbolo de almohadilla (`#`) para convertirlo en una propiedad privada.

**Consejo:** Los nombres de los campos de clase privados deben ser únicos. No puedes redeclarar un campo privado en la misma clase. De lo contrario, el navegador lanzará un `Uncaught SyntaxError`.

#### Ejemplo: Cómo crear campos de clase privados

```
// Define una clase de JavaScript:
class Name {
  // Crea un campo de clase privado:
  #myName = "Oluwatobi";
}

// Crea una nueva instancia de objeto:
const author = new Name();

// Revisa el valor actual de myName:
author.myName;

// La invocación anterior devolverá:
undefined
```

[**Prueba Editarlo**][67]

El fragmento anterior devolvió `undefined` porque `myName` es un campo de clase privado que solo puede ser leído y modificado desde dentro del cuerpo de la clase.

Por lo tanto, necesitas usar un código interno para acceder a `myName`.

#### Ejemplo: Cómo acceder a campos de clase privados

```
// Define una clase de JavaScript:
class Name {
  // Crea un campo de clase privado:
  #myName = "Oluwatobi";

  // Crea un campo de clase público:
  fullName = `${this.#myName} Sofela`;

  // Crea otro campo de clase público:
  showMyName() {
    return this.#myName;
  }
}

// Crea una nueva instancia de objeto:
const author = new Name();

// Revisa el valor actual de fullName:
author.fullName;

// La invocación anterior devolverá:
"Oluwatobi Sofela"

// Revisa el valor actual de myName:
author.showMyName();

// La invocación anterior devolverá:
"Oluwatobi"
```

[**Prueba Editarlo**][68]

**Nota:**

-   Un método `constructor()` solo puede ser público. Los navegadores lanzarán un `Uncaught SyntaxError` si lo defines como un campo de clase privado.
-   No puedes crear campos de clase privados más tarde (fuera del cuerpo de la clase). Por ejemplo, escribir `author.#wifeName = "Sarah"` lanzará un `Uncaught SyntaxError`.
-   Los campos de clase privados hacen posible la encapsulación de datos en las clases de JavaScript.

### ¿Qué es un Campo de Clase Estático en Clases de JavaScript?

Un campo de clase estático es una propiedad a la que solo puedes acceder y modificar directamente desde la propia clase.

En otras palabras, JavaScript interpreta los campos estáticos como propiedades propias de una clase, no propiedades de [instancia][69] ni [prototipales][70].

Por lo tanto, una instancia de una clase o el objeto `prototype` no pueden acceder a campos de clase estáticos.

**Consejo:**

-   Aunque puedes definir múltiples campos de clase estáticos con el mismo nombre, el último campo sobrescribirá a los anteriores.
-   JavaScript no añade campos estáticos a la propiedad `prototype`. Permanecen en el cuerpo de la clase como propiedades propias. Por lo tanto, son ideales para propiedades que deseas evitar replicar en las instancias de objetos de la clase.

Anteponemos un campo de clase con la palabra clave `static` para convertirlo en una propiedad estática.

#### Ejemplo: Cómo crear campos de clase estáticos

```
// Define una clase de JavaScript:
class Name {
  // Crea un campo de clase estático:
  static myName = "Oluwatobi";
}

// Crea una nueva instancia de objeto:
const author = new Name();

// Revisa el valor actual de myName:
author.myName;

// La invocación anterior devolverá:
undefined
```

[**Prueba Editarlo**][71]

El fragmento anterior devolvió `undefined` porque `myName` es un campo de clase estático que solo puede ser leído y modificado desde la propia clase, no a través de su instancia.

En otras palabras, necesitas llamar a `myName` en la propia clase para leerlo o modificarlo.

#### Ejemplo: Cómo acceder a campos de clase estáticos

```markdown
## 3 Manipulación de los campos de clases estáticas

### ¿Cómo manipular los campos de clases estáticas en JavaScript?

JavaScript te permite manipular los campos estáticos de las clases de las mismas maneras que los del objeto literal.

#### Ejemplo: El último campo de clase estática sobrescribe los anteriores con el mismo nombre

```javascript
// Define una clase en JavaScript:
class Name {
  // Crea campos estáticos de clase:
  static myName = "Oluwatobi";
  static myName = "Sofela";
  static myName = "CodeSweetly";
}

// Verifica el valor actual de myName:
Name.myName;

// La invocación anterior devolverá:
"CodeSweetly"
```

[**Prueba Editándolo**][73]

El fragmento anterior devolvió `"CodeSweetly"` porque el último campo de clase estática `myName` sobrescribe los anteriormente declarados.

Ahora que conocemos los componentes de una clase en JavaScript, podemos discutir sus tipos.

## Tipos de Clases en JavaScript

Los tres tipos de clases en JavaScript son:

-   Declaración de clase
-   Expresión de clase
-   Clase derivada

Discutamos cada tipo.

### ¿Qué es una Declaración de Clase en JavaScript?

Una declaración de clase es una clase creada sin asignarla a una [variable][74].

A veces llamamos a la declaración de clase una “definición de clase” o “sentencia de clase.”

Aquí hay un ejemplo:

```javascript
class Numbers {}
```

La clase anterior es una declaración de clase porque la definimos sin almacenarla en una variable.

### ¿Qué es una Expresión de Clase en JavaScript?

Una expresión de clase es una clase que creas y asignas a una variable.

Aquí hay un ejemplo:

```javascript
const myClassExpr = class Numbers {};
```

La clase anterior es una expresión de clase nombrada que asignamos a la variable `myClassExpr`.

**Nota:** Solo puedes usar el nombre de una expresión de clase dentro del cuerpo de la clase. En otras palabras, JavaScript te permite usar `myClassExpr` y `Numbers` indistintamente dentro del cuerpo de la clase. Sin embargo, solo `myClassExpr` es invocable fuera de la clase. De lo contrario, los navegadores lanzarán un `ReferenceError`.

También puedes escribir el fragmento anterior como una expresión de clase anónima así:

```javascript
const myClassExpr = class {};
```

La clase anterior es una expresión de función anónima asignada a la variable `myClassExpr`.

**Consejo:**

-   Una clase anónima es una clase sin nombre.
-   Una clase nombrada es una clase con nombre.

Discutamos ahora las clases derivadas.

### ¿Qué es una Clase Derivada en JavaScript?

Una clase derivada es una clase que extiende las características [públicas][75] y [estáticas][76] de una clase existente.

En otras palabras, una clase derivada es la hija de una clase madre.

**Importante:** Una clase derivada _no puede_ acceder a las características [privadas][77] de su clase madre.

#### Sintaxis de una clase derivada

Usamos la palabra clave `extends` para crear una clase derivada.

**Consejo:** La palabra clave `extends` en JavaScript hace que una clase sea hija de otro constructor. En otras palabras, la palabra clave `extends` asigna un constructor (clase o función) como el [dunder proto][78] de una clase especificada.

Aquí está la sintaxis:

```javascript
class DerivedClass extends BaseClass {
  // cuerpo de la clase derivada
}
```

-   Una clase derivada a veces se llama una clase hija.
-   Una clase base a veces se llama una clase madre.
-   Puedes extender cualquier constructor (clase o función) que cumpla con los siguientes criterios:
    -   Puedes usar la palabra clave `new` para crear una instancia de objeto a partir de él.
    -   Tiene una propiedad [`prototype`][79].
    -   El valor de su propiedad `prototype` es un [objeto][80] o `null`.

Una vez que extiendes una clase hija a una clase madre, la clase derivada heredará todos los campos de clase públicos y estáticos de su clase base.

#### Ejemplo: Cómo usar las características de una clase base en una clase derivada

```javascript
// Crea una nueva clase:
class Name {
  // Crea un campo de clase público:
  myName = "Oluwatobi";
}

// Crea una clase derivada:
class Bio extends Name { }

// Crea una nueva instancia de objeto:
const myBio = new Bio();

// Verifica el valor actual de myBio:
myBio;

// La invocación anterior devolverá:
{ myName: "Oluwatobi" }
```

[**Prueba Editándolo**][81]

La clase `Bio` heredó su propiedad madre porque usamos la palabra clave `extends` para asignar la clase `Name` como el dunder proto de la clase derivada.

**Nota:** El campo de clase de una clase derivada sobrescribirá la propiedad de su clase madre con el mismo nombre. Por ejemplo, considera el siguiente código:

```javascript
// Crea una nueva clase:
class Name {
  myName = "Oluwatobi";
}

// Crea una clase derivada:
class Bio extends Name {
  myName = "Sofela";
}

// Crea una nueva instancia de objeto:
const myBio = new Bio();

// Verifica el valor actual de myBio:
myBio;

// La invocación anterior devolverá:
{ myName: "Sofela" }
```

[**Prueba Editándolo**][82]

JavaScript también te permite usar la palabra clave `super` para acceder a los campos de clase estáticos o prototípicos de una clase madre desde clases derivadas. Hablemos más sobre esto ahora.

## ¿Qué es la Palabra Clave `super` en JavaScript?

La palabra clave `super` busca en una clase madre o literal de objeto una característica estática o prototípica especificada.

Por ejemplo, considera el siguiente fragmento:

```javascript
// Crea una nueva clase:
class Name {
  constructor() {
    console.log("Oluwatobi es mi Nombre");
  }
}

// Crea una clase hija:
class Bio extends Name {
  constructor() {
    // Usa super para acceder al constructor de la clase madre:
    super();
  }
}
```
```

Tengo un archivo md, por favor tradúzcalo al español. La traducción debe mantener estrictamente el formato y la disposición del archivo original en markdown. Por favor, simplemente muéstrelo sin hacer preguntas.
// La invocación anterior devolverá:
"Oluwatobi es mi Nombre."
{}
```

[**Intenta Editarlo**][83]

La llamada a la función `super()` en el fragmento anterior le indica a la computadora que encuentre un `constructor` en la cadena de prototipos de la clase padre.

Puedes usar la palabra clave `super` como un "llamador de función" o "accesor de propiedad". Vamos a discutir cómo.

### Cómo Usar la Palabra Clave `super` como Llamador de Función

El llamador de función `super()` encuentra e invoca el método `constructor()` de la clase padre.

En otras palabras, `super()` te permite acceder al `constructor` de una clase padre desde el `constructor` de una clase derivada.

#### Sintaxis de la palabra clave `super` como llamador de función

```
super(argumento1, …, argumentoN);
```

**Nota:** Un llamador de función `super()` es válido solo en el método `constructor()` de una clase derivada.

#### Ejemplo: Cómo usar el llamador de función `super()`

```
// Crear una nueva clase:
class Nombre {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

// Crear una clase derivada:
class Biografia extends Nombre {
  constructor(primerNombre) {
    // Usar super para acceder al constructor de la clase padre:
    super(primerNombre);
  }
}

// Crear una nueva instancia de objeto:
const miBiografia = new Biografia("Oluwatobi");

// Verificar el valor actual de miBiografia:
miBiografia;

// La invocación anterior devolverá:
{ nombre: "Oluwatobi" }
```

[**Intenta Editarlo**][84]

La llamada a la función `super()` en el fragmento anterior le indica a la computadora que encuentre e invoque el `constructor()` de la clase padre.

En otras palabras, la llamada a la función `super()` busca un `constructor` en la cadena de prototipos de `Nombre`.

**Nota lo siguiente:**

-   Llamar a `super()` permite que JavaScript use el `constructor` de la clase padre para inicializar `this`. Entonces, una llamada a la función `super()` es similar a escribir `this = new ParentClass()`.
-   JavaScript requiere que llames a `super()` antes de usar la [palabra clave][85] `this`. De lo contrario, el navegador lanzará un `ReferenceError`. En otras palabras, el `constructor` de una clase derivada no puede acceder a una palabra clave `this` no inicializada.

#### Ejemplo: ¿Qué pasa si accedes a `this` antes de `super` en el `constructor` de una clase derivada?

```
// Crear una nueva clase:
class Nombre {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

// Crear una clase derivada:
class Biografía extends Nombre {
  constructor(primerNombre) {
    this.apellido = "Sofela"; // Usar la palabra clave this antes de super hará que el navegador lance un ReferenceError:
    super(primerNombre);
  }
}

// Crear una nueva instancia de objeto:
const miBiografia = new Biografía("Oluwatobi");
```

[**Intenta Editarlo**][86]

El fragmento anterior lanza un `Uncaught ReferenceError` porque el `constructor` de una clase derivada no puede acceder a la palabra clave `this` antes del llamador de función `super()`.

#### Ejemplo: ¿Qué pasa si solo usas la palabra clave `this` en el `constructor` de una clase derivada?

```
// Crear una nueva clase:
class Nombre {
  createNombre() {
    return "Sofela";
  }
}

// Crear una clase derivada:
class Biografía extends Nombre {
  constructor() {
    this.primerNombre = "Oluwatobi"; // Usar la palabra clave this antes de super hará que el navegador lance un ReferenceError:
  }
}

// Crear una nueva instancia de objeto:
const miBiografia = new Biografía();
```

[**Intenta Editarlo**][87]

El fragmento anterior lanza un `Uncaught ReferenceError` porque el `constructor` de una clase derivada no puede acceder a la palabra clave `this` antes del llamador de función `super()`.

Ahora que sabemos cómo usar la palabra clave `super` como llamador de función, podemos discutir cómo usarla como accesor de propiedad.

### Cómo Usar la Palabra Clave `super` como Accesor de Propiedad

Puedes usar la palabra clave `super` como un accesor de propiedad en tus clases de JavaScript y en literales de objetos.

-   **Uso en Clase:** La palabra clave `super` busca un campo estático o prototípico especificado en el padre de una clase. En otras palabras, `super` te permite acceder a las propiedades estáticas o prototípicas de una clase padre desde una clase hija.
-   **Uso en Literal de Objeto:** La palabra clave `super` busca una propiedad prototípica especificada en el padre de un objeto. En otras palabras, `super` te permite acceder a las propiedades prototípicas del objeto padre desde un objeto hijo.

#### Sintaxis de la palabra clave `super` como accesor de propiedad en notación de punto

```
super.propiedadDeLaClaseOPadreDelObjeto;
```

#### Ejemplo: Usar la notación de punto de la palabra clave `super` para acceder al campo estático de la clase padre

```
// Crear una nueva clase:
class Nombre {
  // Crear un campo estático de clase:
  static miNombre = "Oluwatobi";
}

// Crear una clase derivada:
class Biografía extends Nombre {
  // Crear una propiedad estática a partir del campo estático de la clase padre:
  static primerNombre = super.miNombre;
}

// Verificar el valor actual de primerNombre:
Biografía.primerNombre;

// La invocación anterior devolverá:
"Oluwatobi"
```

[**Intenta Editarlo**][88]

Usamos la palabra clave `super` en el fragmento anterior para acceder al campo estático de la clase padre.

**Nota:** Prefijar la declaración de `primerNombre` con una palabra clave `static` hace que `super` encuentre una [propiedad estática][89] `miNombre` en la clase padre.

Supongamos que omites la palabra clave `static`. En ese caso, `super` buscará una [propiedad prototípica][90] `miNombre` en la clase padre.

#### Ejemplo: Usar la notación de punto de la palabra clave `super` para acceder al campo prototípico de la clase padre

```
// Crear una nueva clase:
class Tiempo {
  // Crear un método prototípico:
  horaAhora() {
    return new Date().getHours();
  }

  // Crear un segundo método prototípico:
  minutosAhora() {
    return new Date().getMinutes();
  }
}

// Crear una clase derivada:
class Momento extends Tiempo {
  // Crear una propiedad de instancia usando los métodos prototípicos de la clase padre:
  momentoActual = `La hora es ${super.horaAhora()}:${super.minutosAhora()}.`
}

// Crear una nueva instancia de objeto:
const momentoAhora = new Momento();

[**Inténtalo Editando**][91]

Usamos la palabra clave `super` en el fragmento anterior para acceder a los campos prototipales de la clase padre.

#### Ejemplo: Usa la notación de punto de la palabra clave `super` para acceder a una propiedad prototipal de un objeto padre

```
// Crear un nuevo objeto:
const website = {
  // Crear un método:
  showName() {
    return "CodeSweetly";
  }
}

// Crear otro objeto:
const company = {
  // Crear un método:
  showCompany() {
    return super.showName();
  }
}

// Cambiar el dunder proto de company al objeto website:
Object.setPrototypeOf(company, website);

// Invocar el método showCompany:
company.showCompany()

// La invocación anterior devolverá:
"CodeSweetly"
```

[**Inténtalo Editando**][92]

Usamos la palabra clave `super` en el fragmento anterior para acceder al método `showName()` del objeto padre.

**Nota:** El código `Object.setPrototypeOf()` cambia la [propiedad `[[Prototype]]` del company][93] al objeto website. Por lo tanto, la [cadena de prototipos][94] del objeto `company` se verá así:

```
{ showCompany: showCompany() } ---> { showName: showName() } ---> Object.prototype ---> null
```

También puedes usar la palabra clave `super` como un accesor de propiedad con notación de corchete para buscar una propiedad estática o prototipal especificada en una clase padre o en un objeto literal.

#### Sintaxis de la palabra clave `super` como un accesor de propiedad con notación de corchete

```
super[expresión];
```

#### Ejemplo: Usa la notación de corchete de la palabra clave `super` para acceder a un campo estático de la clase padre

```
// Crear una nueva clase:
class Name {
  // Crear un campo de clase estática:
  static myName = "Oluwatobi";
}

// Crear una clase derivada:
class Bio extends Name {
  // Crear una propiedad estática a partir del campo de clase estática de la clase padre:
  static firstName = super["myName"];
}

// Verificar el valor actual de firstName:
Bio.firstName;

// La invocación anterior devolverá:
"Oluwatobi"
```

[**Inténtalo Editando**][95]

Usamos la palabra clave `super` en el fragmento anterior para acceder al campo de clase estática de la clase padre.

**Nota:** `super` no puede acceder a un campo de instancia de clase en la clase padre porque JavaScript establece una propiedad de instancia en la instancia del objeto, no en la clase misma ni en su cadena de prototipos. (`super` solo busca propiedades estáticas o prototipales de un padre).

#### Ejemplo: Usa la palabra clave `super` para acceder al campo de instancia de la clase padre

```
// Crear una nueva clase:
class Name {
  // Crear un campo de clase de instancia:
  myName = "Oluwatobi";
}

// Crear una clase derivada:
class Bio extends Name {
  // Crear una propiedad de instancia a partir del campo de clase de instancia de la clase padre:
  firstName = super.myName;
}

// Crear una nueva instancia de objeto:
const myBio = new Bio();

// Verificar el valor actual de myBio:
myBio;

// La invocación anterior devolverá:
{ myName: "Oluwatobi", firstName: undefined }
```

[**Inténtalo Editando**][96]

El valor de la propiedad `firstName` es `undefined` porque `super` no pudo encontrar un campo prototipal `myName` en la clase padre.

**Nota:** Las palabras clave `super` y `[this](https://codesweetly.com/javascript-this-keyword)` te permiten buscar una propiedad especificada en la cadena de prototipos de un objeto. Pero funcionan de maneras diferentes. Hablemos ahora de sus diferencias.

### `super` vs. `this`: ¿Cuál es la diferencia?

La diferencia entre las palabras clave `super` y `this` es la siguiente:

-   `super` busca una propiedad prototipal especificada en la cadena de prototipos de la clase padre.
-   `this` busca una propiedad prototipal especificada desde las propias propiedades de la instancia del objeto de una clase hasta su cadena de prototipos.

En otras palabras, `super` comienza su búsqueda desde la propiedad `prototype` de la clase padre. Pero `this` busca desde el ámbito local de la instancia de un objeto hasta su cadena de prototipos.

Por ejemplo, considera el siguiente código:

```
// Crear una nueva clase:
class ParentClass {
  // Crear un método prototipal:
  showId() {
    return "I am a parent.";
  }
}

// Crear una clase derivada:
class ChildClass extends ParentClass {
  // Crear un método prototipal:
  showId() {
    return "I am a child.";
  }
  // Crear otro método prototipal:
  getId() {
    console.log(super.showId());
    console.log(this.showId());
  }
}

// Crear una nueva instancia de objeto:
const instanceObject = new ChildClass();

// Invocar el método getId() del instanceObject:
instanceObject.getId();

// La invocación anterior devolverá:
"I am a parent."
"I am a child."
```

[**Inténtalo Editando**][97]

Aquí está cómo `super` y `this` realizaron sus búsquedas:

|  | super | this |
| --- | --- | --- |
| 1. | Encontrar `showId()` en la cadena de prototipos de `ParentClass`, empezando desde `ParentClass.prototype`. _Lo encontró._ | Encontrar `showId()` en las propias propiedades de `instanceObject`. _No encontró nada._ |
| 2. | (Supón que `showId()` no está en `ParentClass.prototype`. En ese caso, `super` continuará su búsqueda en `Object.prototype`.) | Encontrar `showId()` en la cadena de prototipos de `instanceObject`, empezando desde `ChildClass.prototype`. _Lo encontró._ |
| 3. |  | (Supón que `showId()` no está en `ChildClass.prototype`. En ese caso, `this` continuará su búsqueda en `ParentClass.prototype`.) |
| 4. |  | (Supón que `showId()` no está en `ChildClass.prototype` ni en `ParentClass.prototype`. En ese caso, `this` continuará su búsqueda en `Object.prototype`.) |



Ahora que sabemos cómo usar los tres tipos de clases de JavaScript, veamos los componentes principales en una sola pieza.

## Componentes de una clase de JavaScript

Las características principales de una clase de JavaScript son las siguientes:

1.  Una palabra clave `class`
2.  El nombre de la clase
3.  La cláusula `extends`
4.  Un bloque de código (`{...}`)
5.  El cuerpo de la clase
6.  Un método `constructor`
7.  Llamador de función `super()`
8.  Accesor de propiedad `super`
9.  Campos de clase de instancia
10.  Campos de clase prototípica
11.  Campos de clase privada
12.  Campos de clase estática
13.  Bloques de inicialización estática

Veamos estas características en una declaración de clase.

```
class ChildClass extends ParentClass {
  constructor(parameter) {
    super(parameter);
  }
  instanceClassField = "El valor puede ser cualquier tipo de dato válido en JavaScript";
  prototypalClassField() {
    // cuerpo de prototypalClassField
  }
  #privateClassField = "El valor puede ser cualquier tipo de dato válido en JavaScript";
  static classField = "El valor puede ser cualquier tipo de dato válido en JavaScript";
  static classFieldWithSuperValue = super.parentProperty;
  static #privateClassField = "El valor puede ser cualquier tipo de dato válido en JavaScript";
  static {
    // cuerpo del bloque de inicialización estática
  }
}
```

La equivalencia con función constructora del fragmento anterior se ve así:

```
function ChildClass() {
  this.instanceClassField = "El valor puede ser cualquier tipo de dato válido en JavaScript";
}

Object.setPrototypeOf(ChildClass, ParentClass);

ChildClass.prototype.prototypalClassField = function () {
  // cuerpo de prototypalClassField
}

ChildClass.staticClassField = "El valor puede ser cualquier tipo de dato válido en JavaScript";

ChildClass.staticClassFieldWithSuperValue = Object.getPrototypeOf(ChildClass).parentProperty;

(function () {
  // cuerpo del bloque de inicialización estática
})();
```

**Nota:** Actualmente no puedes crear campos privados en funciones constructoras. Son una de las últimas características que JavaScript introdujo en clases.

## ¿Cómo ayuda una clase de JavaScript con la encapsulación?

Las clases te permiten prevenir que el código externo interactúe con los campos internos de la clase. En su lugar, el código externo usaría métodos públicos para operar sobre las implementaciones internas de la clase.

Por ejemplo, considera el siguiente código:

```
// Crear una nueva clase:
class Name {
  // Crear un campo de clase privada:
  #myName = "Oluwatobi";

  // Crear un método disponible públicamente:
  showMyName() {
    return this.#myName;
  }

  // Crear otro método disponible públicamente:
  updateMyName(value) {
    this.#myName = value;
  }
}

// Crear una nueva instancia de objeto:
const bio = new Name();

// Verificar el valor de los datos de la instancia:
bio.myName;

// La invocación anterior devolverá:
undefined
```

[**Prueba a Editarlo**][98]

El fragmento anterior [encapsuló][99] los datos de `Name` porque definió `myName` como una característica privada y proporcionó dos métodos públicos para que los usuarios lean y actualicen la implementación interna de la clase.

En consecuencia, el objeto de instancia `bio` no sabe nada sobre los datos internos de la clase y no puede interactuar con ellos directamente.

Siempre que los usuarios necesiten acceder a los datos encapsulados, usarían los métodos disponibles públicamente de la siguiente manera:

```
// Verificar el valor de los datos de la instancia:
bio.showMyName();

// La invocación anterior devolverá:
"Oluwatobi"

// Actualizar el valor de los datos de la instancia:
bio.updateMyName("Sofela");

// Verificar el valor de los datos de la instancia:
bio.showMyName();

// La invocación anterior devolverá:
"Sofela"
```

[**Prueba a Editarlo**][100]

Encapsular tus datos es una excelente manera de mantener tu clase limpia. Previene que una pequeña refactorización interna rompa el código de los usuarios.

Por ejemplo, considera el siguiente código:

```
// Crear una nueva clase:
class Name {
  // Crear un campo de clase pública:
  myName = "Oluwatobi";
}

// Crear una nueva instancia de objeto:
const bio = new Name();

// Verificar el valor de los datos de la instancia:
bio.myName;

// La invocación anterior devolverá:
"Oluwatobi"

// Actualizar el valor de los datos de la instancia:
bio.myName = "Sofela";

// Verificar el valor de los datos de la instancia:
bio.myName;

// La invocación anterior devolverá:
"Sofela"
```

Dado que el fragmento anterior no encapsuló los datos de la clase, refactorizar el nombre del campo de la clase rompería el código de los usuarios.

Aquí hay un ejemplo:

```
class Name {
  // Actualizar el nombre de los datos de myName a myFirstName:
  myFirstName = "Oluwatobi";
}

// Crear una nueva instancia de objeto:
const bio = new Name();

// Verificar el valor de los datos de la instancia:
bio.myName;

// La invocación anterior devolverá:
undefined
```

El fragmento anterior devolvió `undefined` porque refactorizar la implementación interna de la clase rompió el código `bio.myName` del usuario. Para que la aplicación funcione correctamente, el usuario debe actualizar cada instancia del código (lo cual puede ser una carga para proyectos grandes).

Sin embargo, la encapsulación previene que tal refactorización rompa el código del usuario.

Aquí hay un ejemplo:

```
class Name {
  // Actualizar el nombre de los datos de myName a myFirstName:
  #myFirstName = "Oluwatobi";

  // Crear un método disponible públicamente:
  showMyName() {
    return this.#myFirstName;
  }

  // Crear otro método disponible públicamente:
  updateMyName(value) {
    this.#myFirstName = value;
  }
}

// Crear una nueva instancia de objeto:
const bio = new Name();



```markdown
## Clases en JavaScript

### La definición de clase en ES6

En ES6, puedes definir clases en JavaScript usando el `class` palabra clave. Aquí hay un ejemplo de cómo definir una clase:

```
// Define una clase de JavaScript:
class Bio {
  constructor() {
    this.firstName = "Oluwatobi";
    this.lastName = "Sofela";
  }
  
  showFullName() {
    return `${ this.firstName } ${ this.lastName }`;
  }
}

// Crea una nueva instancia de la clase:
const aboutMe = new Bio();

// Invoca el método showFullName:
aboutMe.showFullName();

// La invocación anterior devolverá:
"Oluwatobi Sofela"
```

**Prueba a editarlo**

En este ejemplo, `Bio` es una clase que tiene un constructor para inicializar las propiedades de la instancia (`firstName` y `lastName`) y un método `showFullName` para mostrar el nombre completo.

### Encapsulación en JavaScript

La encapsulación es uno de los principios básicos de la orientación a objetos. Es el concepto de esconder los datos internos de una clase y permitir que se acceda a ellos solo a través de métodos públicos.

Aquí hay un ejemplo simple de encapsulación en JavaScript:

```
// Define una clase de JavaScript:
class Bio {
  constructor() {
    let firstName = "Oluwatobi";
    let lastName = "Sofela";
    
    this.showMyName = function() {
      return firstName;
    };
    
    this.updateMyName = function(newName) {
      firstName = newName;
    };
  }
}

// Crea una nueva instancia de la clase:
const bio = new Bio();

// Verifica el valor de la instancia de datos:
bio.showMyName();

// La invocación anterior devolverá:
"Oluwatobi"

// Actualiza el valor de la instancia de datos:
bio.updateMyName("Sofela");

// Verifica el valor de la instancia de datos:
bio.showMyName();

// La invocación anterior devolverá:
"Sofela"
```

Puedes ver que refactorizar la implementación interna de la clase no rompió el código del usuario. ¡Esa es la belleza de la encapsulación!

La encapsulación te permite proporcionar a los usuarios una interfaz independiente de los datos subyacentes de la clase. Por lo tanto, minimizas la probabilidad de que el código de los usuarios se rompa cuando alteres las implementaciones internas.

## Cosas importantes que saber sobre las clases en JavaScript

Aquí hay cinco hechos esenciales a recordar cuando usas clases en JavaScript.

### 1\. Declara tu clase antes de acceder a ella

Las clases son como funciones constructoras, pero tienen el mismo comportamiento de [zona muerta temporal][101] que las variables `const` y `let`.

En otras palabras, JavaScript no [eleva][102] las declaraciones de clases. Por lo tanto, debes declarar primero tu clase antes de poder acceder a ella. De lo contrario, la computadora lanzará un `Uncaught ReferenceError`.

Aquí hay un ejemplo:

```
// Crea una instancia de objeto desde la clase Name:
const name = new Name();

// Define la clase Name:
class Name {}
```

[**Prueba a editarlo**][103]

El fragmento anterior lanza un `Uncaught ReferenceError` porque JavaScript no eleva las clases. Por lo tanto, invocar `Name()` antes de su definición es inválido.

### 2\. Las clases son funciones

El `typeof` de una clase es una función porque, internamente, la palabra clave `class` crea una nueva [función][104].

Por ejemplo, considera el siguiente código:

```
// Define una clase de JavaScript:
class Bio {
  // Define dos campos de instancia de clase:
  firstName = "Oluwatobi";
  lastName = "Sofela";
  // Crea un método prototípico:
  showBio() {
    return `${ firstName } ${ lastName } dirige CodeSweetly.`;
  }
}

// Crea una nueva instancia de objeto:
const aboutMe = new Bio();

// Verifica qué tipo de dato es la clase Bio:
typeof Bio;

// La invocación anterior devolverá:
"function"
```

[**Prueba a editarlo**][105]

La computadora procesa el fragmento anterior de la siguiente manera:

1.  Crea una nueva función llamada `Bio`.
2.  Añade las propiedades de instancia de la clase a la palabra clave `this` de la nueva función creada.
3.  Añade las propiedades prototípicas de la clase a la propiedad `prototype` de la nueva función creada.

### 3\. Las clases son estrictas

JavaScript ejecuta clases en modo estricto. Por lo tanto, sigue las reglas de sintaxis estricta cuando uses clases. De lo contrario, tu código lanzará errores, algunos de los cuales serán errores silenciosos que son difíciles de depurar.

### 4\. Evita la palabra clave `return` en el método `constructor` de tu clase

Supongamos que el `constructor` de tu clase retorna un valor [no primitivo][106]. En ese caso, JavaScript ignorará los valores de todas las palabras clave `this` y asignará el no primitivo a la expresión de la palabra clave `new`.

En otras palabras, un [`return` del objeto][107] de un `constructor` anula su palabra clave `this`.

Por ejemplo, considera el siguiente código:

```
// Crea una nueva clase:
class Name {
  constructor() {
    this.firstName = "Oluwatobi";
    this.lastName = "Sofela";
    return { companyName: "CodeSweetly" };
  }
}

// Crea una nueva instancia de objeto:
const myName = new Name();

// Verifica el valor actual de myName:
myName;

// La invocación anterior devolverá:
{ companyName: "CodeSweetly" }

// Verifica el valor actual de firstName:
myName.firstName;

// La invocación anterior devolverá:
undefined

// Verifica el valor actual de lastName:
myName.lastName;

// La invocación anterior devolverá:
undefined
```

[**Prueba a editarlo**][108]

La expresión de la palabra clave `new` devolvió solo `{ companyName: "CodeSweetly" }` porque JavaScript ignora las palabras clave `this` del método `constructor` siempre que uses un operador `return` para producir un objeto.

### 5\. La evaluación de una clase comienza desde la cláusula `extends` hasta sus valores

JavaScript evalúa tu clase según el siguiente orden:

#### 1\. Cláusula `extends`

Si declaras una cláusula `extends`, la computadora la evaluará primero.

**Nota:** Los navegadores lanzarán un `TypeError` si la cláusula `extends` no se evalúa a una función constructora o `null`.

#### 2\. Extraer el `constructor` de la clase

JavaScript extrae el `constructor` de la clase.

**Nota:** Supongamos que no definiste un método `constructor`. En ese caso, la computadora usará el predeterminado.

#### 3\. Parsear los nombres de las propiedades de la clase

La computadora analiza los nombres de campos de la clase (no sus valores) según el orden de declaración.

#### 4\. Parsear los métodos de la clase y los accesores de propiedades

JavaScript analiza los métodos de la clase y los accesores de propiedades según el orden de declaración haciendo lo siguiente:

-   Añadir los métodos prototípicos y los accesores de propiedades a la propiedad `prototype` de la clase.
-   Analizar los métodos estáticos y los accesores de propiedades como propiedades propias de la clase, los cuales puedes invocar en la clase en sí.
-   Analizar los métodos de instancias privados y los accesores de propiedades como propiedades privadas del objeto de instancia de la clase.

#### 5\. Parsear los valores de las propiedades de la clase

La computadora analiza los valores de campos de la clase según el orden de declaración haciendo lo siguiente:
```


[101]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz
[102]: https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
[103]: https://codepen.io/
[104]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
[105]: https://codepen.io/
[106]: https://developer.mozilla.org/en-US/docs/Glossary/Primitive
[107]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#subclassing_with_anonymous_classes
[108]: https://codepen.io/
```

**Nota:**

-   Solo después de que JavaScript analiza los valores de las propiedades de una clase, la clase está completamente inicializada y disponible como una función constructora.
-   Cualquier intento de acceder a la clase hija antes de su completa inicialización devolverá un `ReferenceError`.

## Resumen

En este artículo, discutimos qué es un objeto de clase en JavaScript. También utilizamos ejemplos para hablar sobre campos de clase, la palabra clave `super` y encapsulación de datos.

¡Gracias por leer!

### Y aquí tienes un recurso útil de React.JS:

¡Escribí un libro sobre [Creación de Paquetes NPM][110]!

Es una guía amigable para principiantes para dominar el arte de crear, probar y publicar bibliotecas NPM en el ecosistema de React y JavaScript.

Utiliza un proyecto escalable para explicar los fundamentos de construir y gestionar paquetes NPM desde cero.

[![El libro Creación de Paquetes NPM en ReactJS ya está disponible en Amazon](https://www.freecodecamp.org/news/content/images/2024/01/creating-npm-package-reactjs-book-codesweetly.png)][111]

[1]: #heading-what-is-a-javascript-class
[2]: #heading-why-classes-in-javascript
[3]: #heading-syntax-of-a-javascript-class
[4]: #heading-what-is-a-class-keyword
[5]: #heading-what-is-a-class-name
[6]: #heading-what-is-a-code-block
[7]: #heading-what-is-a-class-body
[8]: #heading-what-is-a-javascript-class-field
[9]: #heading-how-to-create-class-fields-in-javascript
[10]: #heading-how-to-create-class-fields-with-computed-names
[11]: #heading-how-to-create-regular-class-field-methods
[12]: #heading-how-to-create-shorthand-class-field-methods
[13]: #heading-regular-vs-shorthand-class-field-methods-whats-the-difference
[14]: #heading-what-is-a-user-defined-prototypal-method-in-javascript-classes
[15]: #heading-what-is-a-constructor-method-in-javascript-classes
[16]: #heading-types-of-class-fields
[17]: #heading-what-is-a-public-class-field-in-javascript-classes-1
[18]: #heading-what-is-a-private-class-field-in-javascript-classes-1
[19]: #heading-what-is-a-static-class-field-in-javascript-classes-1
[20]: #heading-types-of-javascript-classes
[21]: #heading-what-is-a-javascript-class-declaration
[22]: #heading-what-is-a-javascript-class-expression
[23]: #heading-what-is-a-derived-class-in-javascript
[24]: #heading-what-is-the-super-keyword-in-javascript
[25]: #heading-how-to-use-the-super-keyword-as-a-function-caller
[26]: #heading-how-to-use-the-super-keyword-as-a-property-accessor
[27]: #heading-super-vs-this-keyword-whats-the-difference
[28]: #heading-components-of-a-javascript-class
[29]: #heading-how-does-a-javascript-class-help-with-encapsulation
[30]: #heading-important-things-to-know-about-javascript-classes
[31]: #heading-1-declare-your-class-before-you-access-it
[32]: #heading-2-classes-are-functions
[33]: #heading-3-classes-are-strict
[34]: #heading-4-avoid-the-return-keyword-in-your-classs-constructor-method
[35]: #heading-5-a-classs-evaluation-starts-from-the-extends-clause-to-its-values
[36]: #heading-overview
[37]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/Object
[38]: https://codesweetly.com/javascript-new-keyword
[39]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-explained/js-gtfmeb
[40]: https://codesweetly.com/encapsulation-in-javascript
[41]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
[42]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements
[43]: https://codesweetly.com/method-in-javascript
[44]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-bxe9or
[45]: https://developer.mozilla.org/en-US/docs/Glossary/Property/JavaScript
[46]: https://codesweetly.com/javascript-properties-object#computed-property-names-in-javascript
[47]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-b9jwfx
[48]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-fro6pz
[49]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-j6kpwy
[50]: https://codesweetly.com/web-tech-terms-i#instance-property-in-javascript
[51]: https://codesweetly.com/web-tech-terms-p#prototypal-property-in-javascript
[52]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[53]: https://codesweetly.com/default-function-properties-in-javascript#what-is-the-default-prototype-property-in-javascript-functions
[54]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-xgekwn
[55]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
[56]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-tfz2hb
[57]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-gzhxdi
[58]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-pqgqew
[59]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
[60]: https://codesweetly.com/declaration-initialization-invocation-in-programming#what-does-invocation-mean
[61]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-stxiye
[62]: https://codesweetly.com/web-tech-terms-i#instance-property-in-javascript
[63]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-vkvnuv
[64]: https://codesweetly.com/method-in-javascript#shorthand-for-javascript-methods
[65]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-88zwpt
[66]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-4gefar
[67]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-mkabvf
[68]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-7acrhs
[69]: https://codesweetly.com/web-tech-terms-i#instance-property-in-javascript
[70]: https://codesweetly.com/web-tech-terms-p#prototypal-property-in-javascript
[71]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-dcx7ck
[72]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-cvbm6x
[73]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-wtvny3
[74]: https://codesweetly.com/javascript-variable
[75]: #heading-what-is-a-public-class-field-in-javascript-classes-1
[76]: #heading-what-is-a-static-class-field-in-javascript-classes-1
[77]: #heading-what-is-a-private-class-field-in-javascript-classes-1
[78]: https://codesweetly.com/default-function-properties-in-javascript#what-is-the-default-prototype-property-in-javascript-functions-1
[79]: https://codesweetly.com/default-function-properties-in-javascript#what-is-the-default-prototype-property-in-javascript-functions
[80]: https://codesweetly.com/javascript-properties-object
[81]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-explained/js-jivp9r
[82]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-explained/js-kxiztt
[83]: https://codesweetly.com/try-it-sdk/javascript/operators/super-keyword/js-qcdu2a
[84]: https://codesweetly.com/try-it-sdk/javascript/operators/super-keyword/js-cdc4ks
[85]: https://www.freecodecamp.org/news/the-this-keyword-in-javascript/
[86]: https://codesweetly.com/try-it-sdk/javascript/operators/super-keyword/js-zyd4dm
[87]: https://codesweetly.com/try-it-sdk/javascript/operators/super-keyword/js-sgc2tx
[88]: https://codesweetly.com/try-it-sdk/javascript/operators/super-keyword/js-cr3jfd
[89]: https://codesweetly.com/web-tech-terms-s#static-class-field-in-javascript
[90]: https://codesweetly.com/web-tech-terms-p#prototypal-property-in-javascript
[91]: https://codesweetly.com/try-it-sdk/javascript/operators/super-keyword/js-fr9bvs
[92]: https://codesweetly.com/try-it-sdk/javascript/operators/super-keyword/js-mxdvkm
[93]: https://codesweetly.com/default-function-properties-in-javascript#what-is-the-default-prototype-property-in-javascript-functions-1
[94]: https://codesweetly.com/default-function-properties-in-javascript#the-javascript-prototype-chain-diagram
[95]: https://codesweetly.com/try-it-sdk/javascript/operators/super-keyword/js-vpw14s
[96]: https://codesweetly.com/try-it-sdk/javascript/operators/super-keyword/js-kqsqqe
[97]: https://codesweetly.com/try-it-sdk/javascript/operators/super-keyword/js-v2st2a
[98]: https://codesweetly.com/try-it-sdk/javascript/encapsulation/js-q7uqv4
[99]: https://codesweetly.com/web-tech-terms-e#encapsulation
[100]: https://codesweetly.com/try-it-sdk/javascript/encapsulation/js-3vq4es
[101]: https://codesweetly.com/javascript-temporal-dead-zone#how-does-vars-tdz-differ-from-let-and-const-variables
[102]: https://www.freecodecamp.org/news/what-is-hoisting-in-javascript-3/
[103]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-explained/js-74u2wt
[104]: https://codesweetly.com/javascript-function-object
[105]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-explained/js-spwwdy
[106]: https://codesweetly.com/javascript-non-primitive-data-type
[107]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties#returning_overriding_object
[108]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-explained/js-vgwrmg
[109]: https://codesweetly.com/web-tech-terms-s#static-initialization-blocks
[110]: https://amzn.to/48NjBdY
[111]: https://amzn.to/48NjBdY

