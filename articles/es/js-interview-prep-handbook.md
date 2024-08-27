---
title: Manual de Preparación para Entrevistas de JavaScript – Temas Esenciales a Conocer + Ejemplos de Código
date: 2024-08-27T16:06:20.626Z
author: Kunal Nalawade
authorURL: https://www.freecodecamp.org/news/author/kunal-nalawade-25/
originalURL: https://www.freecodecamp.org/news/js-interview-prep-handbook/
posteditor: ""
proofreader: ""
---

JavaScript es un lenguaje ampliamente utilizado en el desarrollo web y potencia funciones interactivas de prácticamente todos los sitios web. JavaScript hace posible crear páginas web dinámicas y es muy versátil.

<!-- more -->

JavaScript sigue siendo uno de los lenguajes de programación más demandados en 2024. Muchas empresas buscan competencia en JavaScript, y en uno de sus marcos como Angular y React. Si eres un aspirante a desarrollador web, comprender lo que estas empresas buscan en las entrevistas es la clave para desbloquear grandes oportunidades.

En este manual, profundizaré en varios conceptos esenciales de JavaScript que debes preparar antes de ir a una entrevista. Equipado con los fundamentos y los siguientes conceptos, te posicionarás como un candidato impresionante en el panorama del desarrollo web.

## Tabla de Contenidos

-   [Cómo Usar las Palabras Clave `var`, `let`, y `const`][1]
-   [¿Qué es el Elevamiento (Hoisting)?][2]
-   [¿Cómo Funcionan los Closures?][3]
-   [Cómo Implementar el Debouncing.][4]
-   [Cómo Implementar el Throttling.][5]
-   [¿Qué es el Currying?][6]
-   [¿Cuál es la Diferencia entre `==` y `===`?][7]
-   [¿Cómo Funciona la Palabra Clave `this`?][8]
-   [Cómo Usar los Métodos `call`, `apply` y `bind`][9]
-   [¿Qué Son los Prototipos y la Herencia Prototipal?][10]
-   [‌Cómo Usar el Operador de Expansión (Spread Operator)][11]
-   [¿Cómo Funciona la Desestructuración de Arrays y Objetos?][12]
-   [¿Qué Son las Promesas?][13]
-   [Cómo Usar las Palabras Clave `async` y `await`][14]
-   [¿Qué es un Bucle de Eventos (Event Loop)?][15]
-   [Cómo Funciona la Propagación de Eventos – Burbujeo y Captura][16]
-   [¿Qué Son las Funciones Generadoras?][17]
-   [Cómo Implementar Polyfills para `Array.map()`, `Array.reduce()`, y `Array.filter()`][18]
-   [Reflexiones Adicionales][19]

## Cómo Usar las Palabras Clave `var`, `let`, y `const`

En JavaScript, puedes declarar una variable de tres maneras: usando `var`, `let` y `const`. Es esencial comprender la diferencia entre estas tres.

Una variable `var` tiene un alcance global y de nivel de función. Si la variable se declara globalmente, se puede acceder a ella desde cualquier lugar y si se declara dentro de una función, se puede acceder a ella dentro de esa función.

```javascript
var a=5
function fun() {
    var b=4
}

console.log(a) // 5
console.log(b) // arroja ReferenceError
```

Una variable `let` tiene un alcance de bloque. Esta variable, si se declara dentro de un bloque, no se puede acceder a ella desde fuera de ese bloque. Por ejemplo:              

```javascript
var a = 5;
if (a > 1) {
    var b = 6;
    let c = 7;
}
console.log(a); // imprime 5
console.log(b); // imprime 6
console.log(c); // arroja ReferenceError
```

Aquí, las variables `a` y `b` tienen alcance global, por lo que se puede acceder a ellas desde cualquier lugar. La variable `c` no se puede acceder fuera del bloque `if` ya que `let` solo tiene alcance de bloque.

`const` se usa para declarar una constante. Una vez que una variable se declara con `const`, no se puede modificar.              

```javascript
const x = 5;
x = 6; // Arroja un error
```

Sin embargo, puedes modificar las propiedades de un objeto o los elementos de un array.

```javascript
const obj = { nombre: 'kunal', edad: 21 };
obj.nombre = 'alex';
console.log(obj); // { nombre: 'alex', edad: 21 }

const arr = [1, 2, 3];
arr[1] = 4;
console.log(arr); // [ 1, 4, 3 ]
```

## ¿Qué es el Elevamiento (Hoisting)?

El elevamiento se refiere al comportamiento predeterminado de JavaScript que mueve todas las declaraciones de variables y funciones a la parte superior. Esto significa que puedes usarlas antes de que se declaren.

```javascript
x=5 
console.log(x) // imprime 5 
var x               
```

En el código anterior, JavaScript ha movido la declaración de la variable a la parte superior del bloque de código. Es decir: es similar a declarar `x` en la primera línea.

En el caso de las funciones, las declaraciones también se mueven a la parte superior:

```javascript
function foo() {
    console.log("foo llamada");
}

foo(); // foo llamada
```

Sin embargo, esto no funciona con `let` y `const`.

```javascript
x = 5; // arroja ReferenceError
let x;

fiz(); // arroja ReferenceError
const fiz = () => { console.log("fiz llamada") };
```

## ¿Cómo Funcionan los Closures?

Los closures son un concepto importante en JavaScript. Cuando tienes una función dentro de otra función, la función interna tiene acceso a todas las variables de la función externa.

Pero cuando esta función interna es devuelta por la función externa, la función interna se puede llamar desde cualquier lugar fuera de la función externa y aún puede acceder a esas variables.

```javascript
function fun() {
    let count = 0;
    return () => {
        count++;
        console.log(count);
    };
}

const innerFun = fun();
innerFun(); // imprime 1
innerFun(); // imprime 2
innerFun(); // imprime 3
```

Aquí, `fun()` declara e inicializa una variable `count`. Luego, devuelve una función interna que incrementa `count` antes de imprimirla. Ahora, cuando llamas a `innerFun()` en cualquier lugar fuera del método `fun()`, puede seguir accediendo a `count` e incrementarlo.



```markdown
Cómo Usar Closures en JavaScript – Una Guía para Principiantes

Los closures son un concepto confuso de JavaScript para aprender, porque es difícil ver cómo se usan realmente. A diferencia de otros conceptos como funciones, variables y objetos, no siempre usas closures conscientemente y directamente. No dices: ¡Oh! Aquí usaré un closure como solución. Pero en…

![favicon](https://cdn.freecodecamp.org/universal/favicons/favicon.ico)Matías HernándezfreeCodeCamp.org

![English-Header-4](https://www.freecodecamp.org/news/content/images/2021/01/English-Header-4.png)

## Cómo Implementar Debouncing

El debouncing es una técnica que retrasa la llamada de una función por unos segundos y asegura que siempre haya un retraso entre la llamada a la función y su ejecución.

Cuando llamas a una función, se ejecuta después de un retraso. Sin embargo, si llamas a la función nuevamente dentro de ese retraso, la llamada anterior se cancela y se inicia un nuevo temporizador. El mismo proceso se repite para cada llamada de función subsiguiente.

Vamos a ver cómo implementarlo:

```javascript
function debounce(func, delay) {
    let timeout = null;
    return (...args) => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            func(...args);
            timeout = null;
        }, delay);
    };
}
```

El debouncing toma una función y un retraso como parámetros, y devuelve una función nueva, debounced. Cuando llamas a la función debounced, se ejecutará después de `delay` milisegundos. Si la función se llama dentro de ese tiempo, se cancela la llamada anterior y espera nuevamente el `delay`.

Vamos a probar este comportamiento:

```javascript
function fun(a, b) {
    console.log(`Esta es una función con argumentos ${a} y ${b}`);
}

const debouncedFun = debounce(fun, 500);
debouncedFun(2, 3);
debouncedFun(2, 3);
debouncedFun(2, 3); // Esta es una función con argumentos 2 y 3
```

Las dos primeras llamadas no se ejecutan, mientras que la tercera sí, después de 500ms. El debouncing utiliza el concepto de closures, por lo que es importante entenderlos primero.

El debouncing tiene muchas aplicaciones, siendo la más popular la funcionalidad de autocompletar en las barras de búsqueda. He explicado el debouncing en detalle en la siguiente publicación:

[

Debouncing en JavaScript – Explicado Construyendo Funcionalidad de Autocompletar en React

Hola lectores, ¡espero que estén bien! Estoy de regreso con otro tutorial sobre desarrollo web. Si eres alguien a quien le gusta desarrollar aplicaciones web con JavaScript y React, entonces esta publicación es para ti. Cuando lanzas una nueva app en producción, quieres asegurarte de que sea fácil de usar. Un sitio web…

![favicon](https://cdn.freecodecamp.org/universal/favicons/favicon.ico)Kunal NalawadefreeCodeCamp.org

![photo-1550063873-ab792950096b](https://www.freecodecamp.org/news/content/images/2024/02/photo-1550063873-ab792950096b.jpeg)

## Cómo Implementar Throttling

El throttling es una técnica que limita la frecuencia con la que se llama a una función. Una función throttled se ejecuta por primera vez y solo puede ser llamada de nuevo después de un cierto retraso. Si se llama dentro del retraso, no ocurre nada.

Vamos a ver cómo implementarlo:

```javascript
function throttle(func, delay) {
    let timeout = null;
    return (...args) => {
        if (!timeout) {
            func(...args);
            timeout = setTimeout(() => {
                timeout = null;
            }, delay);
        }
    };
}
```

`throttle()` toma una función y un retraso como parámetros, y devuelve una función throttled. Cuando llamas a la función throttled, se ejecuta la primera vez y comienza un timeout con `delay`. Dentro de este tiempo, sin importar cuántas veces llames a la función throttled, no se ejecutará.

Vamos a probar este comportamiento:

```javascript
function fun(a, b) {
    console.log(`Esta es una función con argumentos ${a} y ${b}`);
}

const throttledFun = throttle(fun, 500);

throttledFun(2, 3); // Esta es una función con argumentos 2 y 3
throttledFun(2, 3);

setTimeout(() => {
    throttledFun(2, 3);
}, 300);

setTimeout(() => {
    throttledFun(2, 3); // Esta es una función con argumentos 2 y 3
}, 600);
```

Aquí, la primera llamada se ejecuta inmediatamente, y durante los siguientes 500ms, ninguna llamada de función se ejecutará. La última se ejecuta ya que se llama después de 500ms.

El throttling también utiliza el concepto de closures. He explicado el throttling en detalle en mi publicación, así que échale un vistazo:

[

¿Qué es Throttling en JavaScript? Explicado con un Caso de Uso Simple en React

¡Bienvenidos de nuevo, desarrolladores! Hoy, una vez más, nos estamos adentrando en JavaScript y Desarrollo Web y aprendiendo sobre el throttling. Como desarrollador, hacer que tu sitio web sea fácil de usar es importante. Esto contribuye en gran medida al éxito del producto, y una parte clave de la experiencia…

![favicon](https://cdn.freecodecamp.org/universal/favicons/favicon.ico)Kunal NalawadefreeCodeCamp.org

![throttling-image](https://www.freecodecamp.org/news/content/images/2024/04/throttling-image.jpeg)

## ¿Qué es Currying?

El currying es una técnica donde una función con múltiples argumentos se transforma en una secuencia de funciones, con cada función tomando un solo argumento y devolviendo otra función. Por ejemplo, considera la función a continuación:
```

Con currying, la función anterior se puede escribir como:

```javascript
function curryAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}
```

Aquí, cada función dentro de `curryAdd` toma un argumento y devuelve otra función hasta que se recopilen todos los argumentos. `curryAdd` también se conoce como una [función de orden superior][24].

El currying te permite reutilizar implementaciones parciales de una función. En caso de que no tengas todos los argumentos disponibles, puedes fijar algunos argumentos de la función inicialmente y devolver una función reutilizable.

```javascript
// Función reutilizable
const addTwo = curryAdd(2);
console.log(addTwo); // imprime la función

// Llamando al resultado final
const result1 = addTwo(5)(10);
console.log(result1); // 17

const result2 = addTwo(3)(5);
console.log(result2); // 10
```

`addTwo` es una función reutilizable que se puede usar más tarde, cuando se dispongan de más argumentos.

Por lo tanto, el currying mejora la modularidad y flexibilidad del código con la aplicación parcial de funciones. También te permite crear funciones que se adaptan a necesidades específicas, como se ve en el ejemplo anterior.

El currying simplifica funciones complejas al descomponerlas en partes más simples y manejables. Esto conduce a un código más limpio y legible.

## ¿Cuál es la Diferencia entre `==` y `===`?

Esto es realmente simple, pero muy común en las entrevistas.

```javascript
let a = 1;
let b = "1";

console.log(a == b); // true
console.log(a === b); // false
```

-   `==` compara solo el valor de `a` y `b`,
-   `===` compara tanto el valor como el tipo de dato de `a` y `b`

## ¿Cómo Funciona la Palabra Clave `this`?

La palabra clave `this` es el objeto que actualmente estás refiriendo. Su valor se establece según el contexto en el que la estés utilizando. Cuando se refiere globalmente, `this` se refiere al objeto [window][25].

```javascript
console.log(this) // imprime window {}
```

`this` puede ser utilizado para acceder a propiedades de un objeto.

```javascript
const obj = {
    name: 'kunal',
    age: 21,
    getInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
};

obj.getInfo();
```

Consulta los [documentos][26] para aprender más sobre la palabra clave `this`.

## Cómo Usar los Métodos `call`, `apply` y `bind`

Cuando usas `this` dentro de una función, su valor se establece en el objeto sobre el cual se llama la función. Tomemos un ejemplo:

```javascript
function getInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}
```

`call`, `apply` y `bind` se utilizan para establecer el valor de la palabra clave `this` dentro de un método.

### `call`

Para llamar a la función `getInfo()` en un objeto, usa la función `call`. Creamos dos objetos y llamamos a `getInfo()` en esos objetos.

```javascript
const ob1 = { name: 'alex', age: 25 };
const ob2 = { name: 'marcus', age: 23 };

getInfo.call(ob1); // Name: alex, Age: 25
getInfo.call(ob2); // Name: marcus, Age: 23
```

`call` establece el valor de la palabra clave `this` dentro de una función.

### `apply`

El método `apply` es similar a `call`, pero difiere en la forma de pasar los argumentos. Considera una función con argumentos:

```javascript
function getInfo(a, b) {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
    console.log(`Args: ${a} and ${b}`);
}

const obj = {
    name: 'alex',
    age: 25
};

getInfo.call(obj, 2, 3);
getInfo.apply(obj, [2, 3]);
```

### `bind`

`bind` se usa para crear una nueva función que tiene su palabra clave `this` establecida en un objeto. Usemos la función `getInfo` anterior como ejemplo.

```javascript
const obj = {
    name: 'alex',
    age: 25
};

const objGetInfo = getInfo.bind(obj, 2, 3);
objGetInfo();
```

Cuando se llama a `bind` en la función `getInfo()`, devuelve una nueva función que está vinculada a `obj`. Ahora, cada vez que llames a la función `objGetInfo()`, la palabra clave `this` se refiere a `obj`.

Los tres métodos son similares. Es decir, establecen el valor de la palabra clave `this`. Sin embargo, una diferencia clave en `bind` es que devuelve una nueva función, mientras que `call` y `apply` simplemente llaman a la función.

## ¿Qué son los Prototipos y la Herencia Prototípica?

La herencia es un concepto en la programación orientada a objetos que permite a un objeto heredar propiedades y métodos de otro objeto. Sin embargo, la herencia funciona de manera diferente en JavaScript.

En JavaScript, cada objeto tiene una propiedad que enlaza a otro objeto llamado prototipo. El prototipo en sí mismo es un objeto que puede tener su propio prototipo, formando así una cadena de prototipos. Esta cadena termina cuando llegamos a un prototipo igual a `null`.

El prototipo te permite heredar métodos y propiedades de otro objeto. Cuando una propiedad no existe en un objeto, JavaScript busca en su prototipo y así sucesivamente hasta que llega al final de la cadena de prototipos.

Entendamos con un ejemplo.

```javascript
let animal = {
    eats: true,
    walk() {
        console.log("Animal is walking");
    }
};

const rabbit = Object.create(animal);
rabbit.jumps = true;
rabbit.walk(); // Animal is walking
```

`Object.create` crea un nuevo objeto `rabbit` con su prototipo establecido en `animal`. También puedes establecer propiedades adicionales del nuevo objeto.

Además, el método `walk()` no existe en `rabbit`, por lo que busca en el prototipo del objeto `animal`. Esto significa que el objeto `rabbit` ha heredado las propiedades y métodos del objeto `animal`.

```javascript
const perro = {
    ladrar() {
        console.log("Perro ladrando");
    }
};

Object.setPrototypeOf(perro, animal);
console.log(perro.come); // true
perro.camina(); // Animal está caminando
```

También puedes usar una función como constructor y establecer su prototipo usando la propiedad `prototype`.

```javascript
function Animal(nombre) {
    this.nombre = nombre;
}

Animal.prototype.camina = function () {
    console.log(`${this.nombre} está caminando`);
};

const perro = new Animal("Perro");
console.log(perro); // Animal { nombre: 'Perro' }
perro.camina(); // Perro está caminando
```

Puedes aprender más sobre prototipos y herencia en JavaScript en el siguiente artículo de [Germán Cocca][27].

[

Prototipos y Herencia en JavaScript – y Por Qué Dicen Que Todo en JS es un Objeto

¡Hola a todos! En este breve artículo vamos a hablar sobre la herencia prototípica en JavaScript y cuáles son sus implicaciones. Tabla de Contenidos \* Introducción \* Cómo acceder a las propiedades y métodos de un prototipo en JavaScript \* La cadena de prototipos \* Un lenguaje basado en prototipos \* Javascript c…

![favicon](https://cdn.freecodecamp.org/universal/favicons/favicon.ico)Germán Cocca freeCodeCamp.org

![pexels-maor-attias-5192478](https://www.freecodecamp.org/news/content/images/2022/04/pexels-maor-attias-5192478.jpg)

][28]

## ‌Cómo Usar el Operador Spread

El operador spread se usa para distribuir contenidos de un array u objeto en elementos individuales o recolectar un montón de elementos en un solo objeto. Tiene los siguientes casos de uso:

El operador spread se puede usar para copiar un array en uno nuevo:

```javascript
const arr1 = [2, 4, 5];
const arr2 = [...arr1];

console.log(arr1); // [2, 4, 5]
console.log(arr2); // [2, 4, 5]
console.log(arr1 == arr2); // false
```

`arr1` y `arr2` son objetos completamente diferentes, como se muestra con el operador de igualdad.

También puedes reutilizar campos de un objeto mientras creas uno nuevo:

```javascript
const obj1 = { nombre: 'kunal', edad: 23 };
const obj2 = { ...obj1, género: 'masculino', ciudad: 'Mumbai' };

console.log(obj2); // { nombre: 'kunal', edad: 23, género: 'masculino', ciudad: 'Mumbai' }
```

Puedes recolectar múltiples argumentos pasados a una función en un array.

```javascript
function fun1(...args) {
    console.log(args);
}

fun1(1, 2, 3, 4, 5); // [ 1, 2, 3, 4, 5 ]
```

O puedes pasar elementos de un array como argumentos individuales a una función.

```javascript
function fun2(a, b) {
    console.log(`${a} y ${b}`);
}

const numeros = [1, 2];
fun2(...numeros);
```

## Cómo Funcionan la Desestructuración de Arrays y Objetos

Similar al operador spread, puedes distribuir elementos de un array o un objeto en variables individuales.

```javascript
const arr = [1, 2, 3];
const [a, b, c] = arr;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

Esto es lo mismo para objetos:        

```javascript
const obj = { nombre: 'kunal', edad: 22, género: 'masculino' };
const {nombre, edad, género} = obj;

console.log(nombre); // kunal
console.log(edad); // 22
console.log(género); // masculino
```

## ¿Qué son las Promesas?

Las promesas son un concepto muy importante en JavaScript, casi seguro que se lo preguntarán en entrevistas. Las promesas se utilizan para operaciones asincrónicas en JavaScript como temporizadores o llamadas API.

Las promesas utilizan un objeto [Promise][29] que existe en uno de tres estados: pendiente, cumplida (resuelta) y rechazada. Cuando una operación asincrónica termina, una promesa puede ser resuelta (exitosa) o rechazada (fallida).

Tomemos un ejemplo simple:

```javascript
function operacionAsincronica() {
    return new Promise((resolver, rechazar) => {
        const x = 1 + Math.random() * 10;
        if (x < 5) 
            resolver("Exitosa");
        else 
            rechazar("Error");
    });
}
```

La función anterior devuelve una promesa que realiza una operación asincrónica.

-   Si la operación es exitosa, se llama al método `resolver` para indicar que la promesa se ha cumplido.
-   Si la operación falla, se llama al método `rechazar` para indicar que la promesa ha sido rechazada.

En este ejemplo, estos métodos se llaman al azar. Para manejar esta promesa en tu código, usa los métodos `then` y `catch`.

```javascript
operacionAsincronica()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
```

-   El método `then` toma una función callback que se ejecuta si la promesa fue resuelta. Toma un objeto de respuesta como argumento que es igual al objeto que pasas en el método `resolver`.
-   El método `catch` toma una función callback que se ejecuta si la promesa fue rechazada y toma un objeto de error como argumento que se pasa en el método `rechazar`.

El código anterior imprime "Exitosa" y "Error" al azar.

Además de lo básico, el objeto Promise también contiene métodos útiles que trabajan con múltiples promesas: `[Promise.all()][30]`, `[Promise.any()][31]`, `[Promise.race()][32]`.

Lee el siguiente tutorial para aprender sobre promesas en detalle:

[

Tutorial de Promesas en JavaScript – Cómo Resolver o Rechazar Promesas en JS

Las promesas son bloques de construcción importantes para operaciones asincrónicas en JavaScript. Puedes pensar que las promesas no son tan fáciles de entender, aprender y trabajar con ellas. Y créeme, ¡no eres el único! Las promesas son desafiantes para muchos desarrolladores web, incluso después de pasar años trabajando con ellas. En este…
```

![cover-1](https://www.freecodecamp.org/news/content/images/2020/11/cover-1.png)

## Cómo Utilizar las Palabras Clave `async` y `await`

La palabra clave `await` pausa la ejecución de una función hasta que una promesa ha sido resuelta o rechazada. `await` solo puede ser usada dentro de una función `async`. Vamos a ver un ejemplo:

```javascript
function dataPromise() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Datos recuperados"), 500);
    });
}

async function fetchData() {
    try {
        const res = await dataPromise();
        console.log(res); // Datos recuperados (después de 500ms)
    } catch(err) {
        console.log(err);
    }
}

fetchData();
```

Cuando se llama a `dataPromise()`, la ejecución de la función se pausa por 500ms. La ejecución continúa después de que la promesa ha sido resuelta. Para manejar errores, rodea el código con un bloque `try-catch`.

La palabra clave `await` también facilita el trabajo con múltiples promesas que se ejecutan una tras otra.

```javascript
function promise1() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Promesa 1 resuelta"), 500);
    });
}

function promise2() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Promesa 2 resuelta"), 300);
    });
}

async function fetchData() {
    try {
        const res1 = await promise1();
        console.log(res1); // Promesa 1 resuelta (después de 500ms)
        const res2 = await promise2();
        console.log(res2); // Promesa 2 resuelta (después de 300ms)
    } catch(err) {
        console.log(err);
    }
}

fetchData();
```

`async` y `await` facilitan el trabajo con promesas y también hacen que tu código sea más limpio y legible al eliminar el anidamiento en el código.

## ¿Qué es un Event Loop?

El bucle de eventos (Event Loop) explica el mecanismo detrás de operaciones asincrónicas y manejo de eventos. Este es un concepto crucial en JavaScript que explica su modelo de tiempo de ejecución y, por lo tanto, es una de las preguntas más comunes en entrevistas.

En lugar de proporcionar una breve explicación, creo que deberías aprenderlo en detalle y entenderlo completamente. Lee la [documentación de MDN][34] para comprender el bucle de eventos en detalle, con la ayuda de diagramas.

Si prefieres videos, también puedes ver el siguiente video de Philip Roberts:

<iframe width="356" height="200" src="https://www.youtube.com/embed/8aGhZQkoFbQ?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" title="What the heck is the event loop anyway? | Philip Roberts | JSConf EU" name="fitvid0"></iframe>

## Cómo Funciona la Propagación de Eventos - Bubbling y Capturing

La propagación de eventos ocurre cuando un evento es capturado y manejado por el elemento objetivo y todos sus ancestros. Tomemos el siguiente ejemplo:

```html
<body>
    <div id="box"> <button id="button">Haz clic en mí</button> </div>
    <script src="script.js"></script>
</body>
```

Cuando haces clic en el botón, también has hecho clic en el elemento `div` así como en el `body`. El evento se propaga a lo largo del árbol del DOM. Añadamos manejadores a todos los elementos anteriores:

```javascript
document.body.addEventListener("click", () => {
    console.log("Se hizo clic en el cuerpo (body)");
});

document.getElementById("box").addEventListener("click", () => {
    console.log("Se hizo clic en el div");
});

document.getElementById("button").addEventListener("click", () => {
    console.log("Se hizo clic en el botón");
});
```

La propagación de eventos ocurre de dos maneras:

### Event Bubbling

Cuando se hace clic en el botón, el manejador de eventos del botón se llama primero. Luego, el evento burbujea hacia arriba en el árbol del DOM y los manejadores de eventos de los padres se llaman secuencialmente desde el padre inmediato hasta el ancestro más alto. Es decir: los elementos `div` y `body` respectivamente.

![image-52](https://www.freecodecamp.org/news/content/images/2024/05/image-52.png)

Event Bubbling

### Event Capturing

Esto funciona de manera similar a la burbuja de eventos, pero en reversa. El evento es capturado primero por el elemento raíz, luego viaja hacia abajo en el árbol del DOM hasta el elemento objetivo.

Los manejadores de eventos son llamados en secuencia comenzando desde el elemento raíz hasta el elemento objetivo. Esto se puede lograr pasando `true` como tercer parámetro en la función `addEventListener()`.

```javascript
document.body.addEventListener("click", () => {
    console.log("Se hizo clic en el cuerpo (body)");
}, true);
```

![image-53](https://www.freecodecamp.org/news/content/images/2024/05/image-53.png)

Event Capturing

Sin embargo, esto parece contraproducente. Después de todo, el usuario solo quiere hacer clic en el botón, no tiene idea de la estructura del árbol del DOM. Así que, para prevenir este comportamiento, podemos usar el método `stopPropagation()`.

```javascript
document.getElementById("button").addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("Se hizo clic en el botón");
});
```

![image-54](https://www.freecodecamp.org/news/content/images/2024/05/image-54.png)

Propagación detenida

## ¿Qué son las Funciones Generadoras?

Las funciones generadoras son un tipo especial de funciones que pueden pausar su ejecución y reanudarla más tarde. También devuelven un valor cada vez que pausan la ejecución.



A continuación, se muestra un ejemplo básico de una función generadora:

```javascript
function* funcionGeneradora() {
    yield 1;
    yield 2;
}
```

Una función generadora se declara con `function*` y la palabra clave `yield` se usa para pausar la ejecución y devolver un valor. La sintaxis anterior crea un objeto [GeneratorFunction][35].

```javascript
const gen = funcionGeneradora()
```

Este objeto usa un [iterador][36] para ejecutar una función generadora. El iterador proporciona un método `next()` que ejecuta el cuerpo de la función hasta la siguiente declaración yield y devuelve un objeto que contiene el valor generado y una propiedad `done` (Booleana), que indica si la función generadora ha llegado a su fin.

Llamemos a la función generadora:

```javascript
console.log(gen.next().value); // 1
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

Aquí, la primera llamada a `next()` genera 1 y la segunda genera 2. La última no genera nada y establece la bandera `done` en true, ya que no hay más declaraciones `yield`.

También puedes iterar sobre una función generadora usando el bucle `for`:

```javascript
for(value of funcionGeneradora()) {
  console.log(value)
}
```

De esta manera, puedes controlar la ejecución de una función generadora entrando y saliendo de la función en cualquier momento.

## Cómo Implementar Polyfills para `Array.map()`, `Array.reduce()` y `Array.filter()`

JavaScript ha evolucionado mucho desde sus inicios. Se han añadido varios métodos y construcciones a JavaScript que no existían antes. La mayoría de los navegadores modernos usan las versiones más recientes de JavaScript.

Sin embargo, hay muchas aplicaciones que aún se ejecutan en navegadores antiguos que usan versiones más antiguas de JavaScript. Métodos de array como `map`, `reduce` y `filter` pueden no estar disponibles. Por lo tanto, puede que tengas que proporcionar polyfills para estos métodos.

Los polyfills son fragmentos de código que proporcionan funcionalidades modernas a navegadores antiguos que no los soportan. Esto asegura que tu código funcione sin problemas en diferentes navegadores y versiones.

La mayoría de las empresas tienen sitios web que aún atienden a usuarios y sistemas que ejecutan navegadores antiguos. Por lo tanto, saber cómo escribir polyfills para métodos que se usan frecuentemente es importante.

En nuestro caso, vamos a escribir polyfills para los métodos `Array.map`, `Array.reduce` y `Array.filter`. Esto significa que vamos a escribir nuestras propias implementaciones en lugar de usar las predeterminadas.

### `Array.map`

Este método toma una función de callback como parámetro, la ejecuta en cada elemento del array y devuelve un nuevo array modificado.

La función de callback toma tres argumentos: el elemento del array, el índice y el propio array. Los dos últimos argumentos son opcionales.

```javascript
Array.prototype.map = function(callback) {
  var nuevoArray = [];
  for (var i = 0; i < this.length; i++) {
    nuevoArray.push(callback(this[i], i, this));
  }
  return nuevoArray;
};
```

La lógica es simple. Llama a la función para cada elemento del array y añade cada valor al nuevo array. La keyword `this` es el objeto sobre el que estás llamando a la función, en este caso, el array.

### `Array.filter`

Este método también toma una función de callback como parámetro. La función de callback ejecuta una condición en cada elemento del array y devuelve un valor booleano. El método `filter` devuelve un nuevo array filtrado que contiene elementos que cumplen con la condición.

Esta función de callback toma tres argumentos: el elemento del array, el índice y el propio array. Los dos últimos argumentos son opcionales.

```javascript
Array.prototype.filter = function(callback) {
  var arrayFiltrado = [];
  for (var i = 0; i < this.length; i++) {
    var condicion = callback(this[i], i, this);
    if (condicion) {
      arrayFiltrado.push(this[i]);
    }
  }
  return arrayFiltrado;
};
```

Aquí, usa el valor booleano devuelto por la función de callback para añadir elementos al nuevo array.

### `Array.reduce`

Este método toma una función de callback y un valor inicial como parámetros y reduce el array a un solo valor. Esto se hace ejecutando la función en el acumulador y el valor actual y almacenando el resultado en el acumulador.

La función de callback toma cuatro argumentos: el acumulador, el elemento actual, el índice y el propio array. Los dos últimos argumentos son opcionales.

```javascript
Array.prototype.reduce = function(callback, valorInicial) {
    var acumulador = valorInicial;
    for (var i = 0; i < this.length; i++) {
        if (acumulador !== undefined) {
            acumulador = callback(acumulador, this[i], i, this);
        } else {
            acumulador = this[i];
        }
    }
    return acumulador;
};
```

Inicialmente, establece el acumulador al valor inicial. Ejecuta la función de callback para cada elemento del array y almacena el resultado en el acumulador. Si el acumulador es undefined, entonces configúralo al elemento mismo.

Probemos estos métodos:

```javascript
const arr = [1, 2, 3];
console.log(arr.map(ele => ele * 2)); // [ 2, 4, 6 ]
console.log(arr.filter(ele => ele < 2)); // [ 1 ]
console.log(arr.reduce((total, ele) => total + ele, 0)); // 6
```

**Nota:** Antes de añadir un polyfill para cualquier propiedad, siempre verifica si la propiedad existe en el prototipo del objeto, o podrías sobrescribir el comportamiento existente. Por ejemplo:

## Pensamientos Adicionales

Antes de terminar, me gustaría compartir algunos pensamientos adicionales. Superar una entrevista de JavaScript no se trata solo de memorizar conceptos. Asegúrate de profundizar en cada tema y entenderlo a fondo, incluyendo sus aplicaciones.

Además, no subestimes la importancia de las habilidades blandas como la comunicación. Transmitir tus ideas claramente al entrevistador es tan importante como conocer el tema.

Cuando te hagan preguntas sobre cualquiera de los conceptos mencionados, comienza explicando brevemente el concepto y luego usa un ejemplo para una explicación más detallada.

Explicar con ejemplos es crucial para responder cualquier pregunta de entrevista. Hace que sea más fácil para los entrevistadores entender tu proceso de pensamiento. En esta publicación, también he seguido un patrón similar al explicar cada concepto.

Por último, sigue revisando este manual durante toda tu preparación para las entrevistas. Siéntete libre de usarlo como una hoja de referencia. Si eres un desarrollador con experiencia, este manual también te ayudará a revisar y reforzar estos conceptos.

## Conclusión

Las entrevistas pueden ser bastante aterradoras e impredecibles. Aunque hay una alta demanda de habilidades en JavaScript, la competencia es igualmente intensa. Construir una base sólida es crucial para una preparación exitosa para la entrevista.

En este manual, he delineado varios temas importantes para preparar tu próxima entrevista de JavaScript y he proporcionado explicaciones detalladas para cada concepto. Aunque esta no es una lista exhaustiva, cubre varios conceptos críticos. Si crees que he omitido algún tema importante, por favor házmelo saber.

Si no puedes entender el contenido o encuentras insatisfactoria la explicación, comenta tus pensamientos a continuación. ¡Las nuevas ideas siempre son bienvenidas! Siéntete libre de conectarte conmigo en Twitter.

¡¡¡Buena suerte con tus entrevistas!!!

[1]: #como-usar-las-palabras-clave-var-let-y-const
[2]: #que-es-el-hoisting
[3]: #como-funcionan-los-closures
[4]: #como-implementar-el-debouncing
[5]: #como-implementar-el-throttling
[6]: #que-es-el-currying
[7]: #cual-es-la-diferencia-entre-y-
[8]: #como-funciona-la-palabra-clave-this
[9]: #como-usar-los-metodos-call-apply-y-bind
[10]: #que-son-los-prototipos-y-la-herencia-prototipal
[11]: #como-usar-el-operador-spread
[12]: #como-funciona-la-desestructuracion-de-arrays-y-objetos
[13]: #que-son-las-promesas
[14]: #como-usar-las-palabras-clave-async-y-await
[15]: #que-es-un-event-loop
[16]: #como-funciona-la-propagacion-de-eventos-burbujeo-y-captura
[17]: #que-son-las-funciones-generadoras
[18]: #como-implementar-polyfills-para-array-map-array-reduce-y-array-filter
[19]: #pensamientos-adicionales
[20]: https://www.freecodecamp.org/news/author/matias-hernandez/
[21]: https://www.freecodecamp.org/news/closures-in-javascript/
[22]: https://www.freecodecamp.org/news/deboucing-in-react-autocomplete-example/
[23]: https://www.freecodecamp.org/news/throttling-in-javascript/
[24]: https://www.freecodecamp.org/news/higher-order-functions-explained/
[25]: https://developer.mozilla.org/en-US/docs/Web/API/Window
[26]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
[27]: https://www.freecodecamp.org/news/author/gercocca/
[28]: https://www.freecodecamp.org/news/prototypes-and-inheritance-in-javascript/
[29]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[30]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
[31]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any
[32]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race
[33]: https://www.freecodecamp.org/news/javascript-promise-tutorial-how-to-resolve-or-reject-promises-in-js/
[34]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop
[35]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction
[36]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol

