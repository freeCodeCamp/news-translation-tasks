---
title: Manual de PHP sobre Arrays – Cómo Crear, Trabajar y Recorrer Arrays
date: 2024-09-04T15:40:24.407Z
author: Kolade Chris
authorURL: https://www.freecodecamp.org/news/author/koladechris/
originalURL: https://www.freecodecamp.org/news/php-array-handbook/
posteditor: ""
proofreader: ""
---

En cada lenguaje de programación, los arrays proporcionan una opción flexible para almacenar más de un tipo de dato en una sola variable. Son una de las estructuras de datos más versátiles en el mundo de la programación, lo cual es una de las razones por las que muchos datos externos y muchas APIs vienen como arrays.

<!-- more -->

Cuando creas un array en PHP, querrás poder usarlo. Para hacerlo, tienes que manipularlo o recorrerlo. PHP proporciona varias funciones integradas para manipular arrays y varias formas de recorrer arrays.

Entender y utilizar esas funciones integradas y bucles es esencial para una manipulación eficiente de arrays. Con ellas, ahorrarás tiempo, escribirás un código más limpio y te convertirás en un desarrollador de PHP más eficiente.

Ten en cuenta que esta es la primera parte de una serie de dos artículos. La segunda parte se centrará en cómo usar MongoDB en PHP reconstruyendo el proyecto Tarjetas de Equipo de Fútbol. Los futbolistas provendrán de una base de datos de MongoDB Atlas. Luego los obtendremos como arrays y los mostraremos en la página.

## Lo que Cubriremos

-   [Cómo Crear Arrays en PHP][1]
    -   [Cómo Crear Arrays con la Función Array][2]
    -   [Cómo Crear Arrays con la Sintaxis de Corchetes][3]
-   [Cómo Imprimir Arrays en PHP][4]
    -   [Cómo Imprimir un Array con la Función `print_r()`][5]
    -   [Cómo Imprimir un Array con la Función `var_dump()`][6]
-   [Funciones de Array en PHP][7]
    -   [La Función de Array `count()`][8]
    -   [La Función de Array `array_push()`][9]
    -   [La Función `array_pop()`][10]
    -   [La Función `array_shift()`][11]
    -   [La Función `array_unshift()`][12]
    -   [La Función `array_splice()`][13]
    -   [La Función `array_keys()`][14]
    -   [La Función `array_values()`][15]
    -   [La Función `array_reduce()`][16]
    -   [La Función `sort()`][17]
    -   [La Función `rsort()`][18]
    -   [La Función `array_replace()`][19]
    -   [La Función `array_reverse()`][20]
    -   [La Función `array_slice()`][21]
    -   [La Función `array_sum()`][22]
    -   [La Función `array_merge()`][23]
    -   [La Función `array_filter()`][24]
    -   [La Función `array_map()`][25]
    -   [La Función `array_search()`][26]
    -   [La Función `array_column()`][27]
    -   [La Función `in_array()`][28]
-   [Cómo Recorrer Arrays en PHP][29]
    -   [Cómo Recorrer un Array Indexado][30]
    -   [Cómo Recorrer un Array Asociativo][31]
    -   [Cómo Recorrer un Array Dentro de la Plantilla HTML][32]
-   [Conclusión][33]

## Cómo Crear Arrays en PHP

En PHP, los arrays existen en 3 formas:

-   **indexado** – un array regular con índices predefinidos
-   **multidimensional** – un array con arrays dentro de él
-   **asociativo** – un array con índices de cadenas

Hay dos formas en que puedes crear cualquiera de esas 3 formas de arrays en PHP. Puedes usar la función `Array()` o la sintaxis de corchetes (`[ ]`).

### Cómo Crear Arrays con la Función Array

Para crear un array en PHP con la función `array()`, solo pasa los elementos a la función.

Aquí está el truco:

-   un **array regular** se crea con la función `array()` pasando los elementos directamente a la función
-   un **array multidimensional** se crea con la función `array()` anidando una o más funciones `array()` dentro de una función `array()`
-   un **array asociativo** se crea con la función `array()` separando las claves y los valores con una flecha gorda (`=>`) y separando cada entrada con una coma

Aquí tienes ejemplos de todos ellos en código:

```
// array regular con la función array
$myFruitsArr1 = array("Apple", "Banana", "Cashew", "Mango");


// array multidimensional con la función array
$myFruitsArr2 = array(
 array("Apple", "Avocado", "Apricot"),
 array("Banana", "Blackeberry", "Babaco"),
 array("Cashew", "Cherry", "Canary melon"),
 array("Mango", "Melon", "Miracle fruit"),
);


// array asociativo con la función array
$myFruitsArr3 = array(
 "fruit 1" => "Apple",
 "fruit 2" => "Banana",
 "fruit 3" => "Cashew",
 "fruit 4" => "Mango",
);
```

### Cómo Crear Arrays con la Sintaxis de Corchetes

La sintaxis de corchetes es la forma más común de crear un array en PHP (y JavaScript también).

Para crear un array con la sintaxis de corchetes, reemplaza cada ocurrencia de `array()` con corchetes de apertura y cierre:

```
// array regular con la sintaxis de corchetes
$myFruitsArr1 = ["Apple", "Banana", "Cashew", "Mango"];


// array multidimensional con la sintaxis de corchetes
$myFruitsArr2 = [
 ["Apple", "Avocado", "Apricot"],
 ["Banana", "Blackeberry", "Babaco"],
 ["Cashew", "Cherry", "Canary melon"],
 ["Mango", "Melon", "Miracle fruit"],
];


// array asociativo con la sintaxis de corchetes
$myFruitsArr3 = [
 "fruit 1" => "Apple",
 "fruit 2" => "Banana",
 "fruit 3" => "Cashew",
 "fruit 4" => "Mango",
];
```

La mayoría de las veces, puede necesitar imprimir un array con fines de depuración o visualización. PHP proporciona la declaración `echo`, y las funciones `print_r()` y `var_dump()` para imprimir datos.

`echo` no imprime un array correctamente porque está destinado a imprimir cadenas, enteros y flotantes. Deberías usar `print_r()` y `var_dump()` para imprimir arrays en su lugar.

### Cómo Imprimir un Array con la Función `print_r()`

La función `print_r()` muestra información estructurada acerca de una variable en un formato legible para humanos.

`print_r()` es particularmente útil para mostrar e inspeccionar el contenido de estructuras de datos complejas como arrays y objetos. La utilizas pasando el identificador del array a la función:

```
print_r($myFruitsArr1);
print_r($myFruitsArr2);
print_r($myFruitsArr3);
```

Incluso si el array u objeto tiene elementos anidados, `print_r()` recorrerá todo el array u objeto y mostrará todo el contenido sin omitir ningún elemento.

Así es como se ven cada uno de los 3 tipos de arrays cuando los imprimes con la función `print_r()`:

![Imagen](https://www.freecodecamp.org/news/content/images/2024/05/image6-1.png) _Ejemplos de arrays regulares, multidimensionales y asociativos._

### Cómo Imprimir un Array con la Función `var_dump()`

La función `var_dump()` te permite imprimir un array o variable como la función `print_r()`. Lo que hace de manera diferente es que muestra el tipo de dato de lo que estás imprimiendo, incluyendo cada elemento del array.

Así es como se usa la función `var_dump()`:

```
var_dump($myFruitsArr1);
var_dump($myFruitsArr2);
var_dump($myFruitsArr3);
```

Y así es como se ven cada uno de los 3 tipos de arrays cuando los imprimes con la función `var_dump()`:

![Imagen](https://www.freecodecamp.org/news/content/images/2024/05/image3.png) _Arrays regulares, multidimensionales y asociativos impresos con var_dump()_

## Funciones de Array en PHP

PHP proporciona una amplia variedad de funciones de array. Te permiten realizar una amplia gama de operaciones en arrays, desde manipulación básica hasta procesamiento avanzado de datos.

Hay más de 70 funciones de array que puedes usar en PHP, por lo que no podremos cubrir todas en este manual.

Aquí están las que cubriremos:

-   `count()`
-   `array_push()`
-   `array_pop()`
-   `array_shift()`
-   `array_unshift()`
-   `array_splice()`
-   `array_keys()`
-   `array_values()`
-   `array_reduce()`
-   `sort()`
-   `rsort()`
-   `array_replace()`
-   `array_reverse()`
-   `array_slice()`
-   `array_sum()`
-   `array_merge()`
-   `array_filter()`
-   `array_map()`
-   `array_search()`
-   `array_column()`
-   `in_array()`

### La Función de Array `count()`

La función `count()` hace lo que su nombre implica: recorre un array, cuenta los elementos y devuelve un entero que representa la longitud del array.

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango"];
echo count($myFruitsArr); // 4
```

`count()` puede ser útil si quieres hacer algo basado en la longitud de un array en particular:

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango"];


if (count($myFruitsArr) === 4) {
  echo "Las frutas son suficientes";
} else {
  echo "Las frutas no son suficientes";
}


// Las frutas son suficientes
```

Debido a que `count()` obtiene la longitud de un array, es comúnmente usada en bucles:

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango"];


for ($i = 0; $i < count($myFruitsArr); $i++) {
 echo $myFruitsArr[$i] . "<br>";
}


/*
Salida:


Apple
Banana
Cashew
Mango
*/
```

### La Función de Array `array_push()`

`array_push()` “empuja” un elemento al final del array. Es decir, añade un elemento especificado después del último elemento del array. Esto significa que modifica el array original.

`array_push` toma un argumento obligatorio `array` y el elemento que quieres empujar en el array existente:

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango"];


array_push($myFruitsArr, "Avocado");
print_r($myFruitsArr); // Array ( [0] => Apple [1] => Banana [2] => Cashew [3] => Mango [4] => Avocado )
```

Puedes usar la etiqueta `<pre>` para formatear mejor el array resultante:

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango"];


array_push($myFruitsArr, "Avocado");
echo "<pre>";
var_dump($myFruitsArr);
echo "<pre>";


/*
Salida:


array(5) {
 [0]=>
 string(5) "Apple"
 [1]=>
 string(6) "Banana"
 [2]=>
 string(6) "Cashew"
 [3]=>
 string(5) "Mango"
 [4]=>
 string(7) "Avocado"
}
*/
```

También puedes empujar dos o más elementos:

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango"];


array_push($myFruitsArr, "Avocado", "Pineapple");
echo "<pre>";
var_dump($myFruitsArr);
echo "<pre>";


/*
Salida:


array(6) {
 [0]=>
 string(5) "Apple"
 [1]=>
 string(6) "Banana"
 [2]=>
 string(6) "Cashew"
 [3]=>
 string(5) "Mango"
 [4]=>
 string(7) "Avocado"
 [5]=>
 string(9) "Pineapple"
}
*/
```

### La Función `array_pop()`

`array_pop()` hace lo opuesto a lo que hace `array_push()` – **elimina un elemento del final del array**. Eso significa que puede ser útil en estructuras de datos basadas en pilas.

Para usar la función `array_pop()`, solo necesitas pasar el array del cual quieres eliminar el elemento:

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango"];
array_pop($myFruitsArr);
```

```markdown
## Operaciones del Array de PHP: Cómo Añadir, Eliminar y Manipular Elementos

A veces necesitas manipular directamente los arreglos en PHP, añadiendo, eliminando o modificando elementos según sea necesario. En este artículo, revisaremos varias funciones útiles de PHP para manejar arreglos.

### La Función `array_pop()`

`array_pop()` elimina y devuelve el último elemento de un arreglo. Esta función modifica el arreglo original.

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango"];
array_pop($myFruitsArr);
var_dump($myFruitsArr); 

/*
Mango ha desaparecido:


array(3) {
 [0]=>
 string(5) "Apple"
 [1]=>
 string(6) "Banana"
 [2]=>
 string(6) "Cashew"
}
*/
```

Puedes mostrar el elemento eliminado porque `array_pop()` modifica el arreglo original:

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango"];
$poppedElem = array_pop($myFruitsArr);

echo $poppedElem; // Mango
```

### La Función `array_shift()`

`array_shift()` es similar a `array_pop`, pero elimina el primer elemento de un arreglo y no el último. Esto es útil en estructuras de datos basadas en colas.

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango"];
array_shift($myFruitsArr);
var_dump($myFruitsArr);

/*
Apple ha desaparecido:


array(3) {
 [0]=>
 string(6) "Banana"
 [1]=>
 string(6) "Cashew"
 [2]=>
 string(5) "Mango"
}
*/
```

Porque la función `array_shift()` modifica el arreglo original, reorganiza los índices:

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango"];

echo "antes de shift: ";
var_dump($myFruitsArr);

echo "<br>";

echo "después de shift: ";
array_shift($myFruitsArr);
var_dump($myFruitsArr);
```

![Imagen](https://www.freecodecamp.org/news/content/images/2024/05/image5.png) _Antes y después de usar la función shift()_

`array_shift()` también devuelve el elemento eliminado porque modifica el arreglo original:

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango"];
$shiftedElem = array_shift($myFruitsArr);

echo $shiftedElem; // Apple
```

### La Función `array_unshift()`

La función `array_unshift()` añade uno o más elementos al principio de un arreglo. Modifica el arreglo original insertando los nuevos elementos al comienzo y reindexando los elementos existentes.

Toma el arreglo al que quieres añadir elementos y el elemento que deseas añadir como argumentos. Puedes usarlo sin proporcionar el elemento a añadir al inicio del arreglo, pero se recomienda no hacerlo.

Aquí hay un ejemplo:

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango"];
array_unshift($myFruitsArr, "Avocado");

var_dump($myFruitsArr);

/*
array(5) {
 [0]=>
 string(7) "Avocado"
 [1]=>
 string(5) "Apple"
 [2]=>
 string(6) "Banana"
 [3]=>
 string(6) "Cashew"
 [4]=>
 string(5) "Mango"
}
*/
```

### La Función `array_splice()`

El método `array_splice()` elimina un elemento de un arreglo y lo reemplaza con el reemplazo especificado. `array_splice()` modifica el arreglo original, por lo que devuelve el elemento eliminado.

`array_splice()` acepta hasta 4 argumentos, como puedes ver en su sintaxis básica a continuación:

```
array_splice(array, startingIndex, length, replacement)
```

-   `array` es el arreglo en el que estás usando la función `array_splice()`
-   `startingIndex` es la posición donde quieres comenzar a eliminar los elementos en el arreglo. Eso significa que si especificas `0`, se eliminará el primer elemento en el arreglo.
-   `length` es hasta dónde quieres que llegue el empalme. Por ejemplo, si especificas `2`, se eliminarán dos elementos comenzando desde el `startingIndex` especificado.
-   `replacement` es el elemento que reemplazará al elemento eliminado. Esto podría ser un solo elemento u otro arreglo.

Aquí hay un ejemplo con un arreglo y un reemplazo de cadena:

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango"];
$splicedItem = array_splice($myFruitsArr, 1, 1, "Avocado");

var_dump($myFruitsArr);

/*
Salida:

array(4) {
 [0]=>
 string(5) "Apple"
 [1]=>
 string(7) "Avocado"
 [2]=>
 string(6) "Cashew"
 [3]=>
 string(5) "Mango"
}
*/
echo "<br>";

var_dump($splicedItem);

/*
Salida:
array(1) {
 [0]=>
 string(6) "Banana"
}
*/
```

Aquí hay otro ejemplo con un arreglo como reemplazo:

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango"];
$splicedItem = array_splice($myFruitsArr, 1, 1, array("Avocado", "Apricot", "Abiu"));

var_dump($myFruitsArr);
/*
Salida:

array(6) {
 [0]=>
 string(5) "Apple"
 [1]=>
 string(7) "Avocado"
 [2]=>
 string(7) "Apricot"
 [3]=>
 string(4) "Abiu"
 [4]=>
 string(6) "Cashew"
 [5]=>
 string(5) "Mango"
}
*/

var_dump($splicedItem);
/*
Salida:

array(1) {
 [0]=>
 string(6) "Banana"
}
*/
```

### La Función `array_keys()`

Hay dos componentes en cada arreglo: las claves y los valores. Para un arreglo regular, las claves son los índices. Para un arreglo asociativo, las claves son los índices especificados para cada elemento del arreglo.

La función `array_keys` extrae las claves de los elementos en un arreglo.

Si el arreglo es un arreglo regular, lista los índices del arreglo como las claves:

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango"];
$myFruitsArrKeys = array_keys($myFruitsArr);

print_r($myFruitsArrKeys);
/*
Salida:

Array
(
   [0] => 0
   [1] => 1
   [2] => 2
   [3] => 3
)
```

Si el arreglo es un arreglo asociativo, lista las claves que especificaste para cada elemento en el arreglo:

```
$myFruitsWithColors = [
 "apple" => "red",
 "banana" => "yellow",
 "orange" => "orange",
 "grape" => "purple",
 "watermelon" => "green",
];

$myFruitsWithColorsKeys = array_keys($myFruitsWithColors);

print_r($myFruitsWithColorsKeys);
/*
Salida:

Array
(
   [0] => apple
   [1] => banana
   [2] => orange
   [3] => grape
   [4] => watermelon
)
```

`array_keys()` puede aceptar un segundo argumento. Esto suele ser un elemento del arreglo.

Si especificas un elemento como ese segundo argumento, `array_keys()` devolverá la clave de ese elemento solamente:

```
$myFruitsWithColors = [
 "apple" => "red",
 "banana" => "yellow",
 "orange" => "orange",
 "grape" => "purple",
 "watermelon" => "green",
];

$myFruitsWithColorsKeys = array_keys($myFruitsWithColors, "orange");

print_r($myFruitsWithColorsKeys);
/*
Salida:
```


### La Función `array_values()`

La función `array_values()` extrae la otra parte de un arreglo: los valores.

```
$miFrutasArr = ["Manzana", "Banana", "Anacardo", "Mango"];
$miFrutasArrValores = array_values($miFrutasArr);

print_r($miFrutasArrValores);

/*
Salida:
Array
(
   [0] => Manzana
   [1] => Banana
   [2] => Anacardo
   [3] => Mango
)
*/
```

La salida de `array_values()` parece lo que sucede cuando imprimes un arreglo regular con la función `print_r()`, pero no lo es. Lo que sucede es que también asigna índices a esos valores impresos.

Un ejemplo con un arreglo asociativo lo haría más claro:

```
$miFrutasConColores = [
 "manzana" => "rojo",
 "banana" => "amarillo",
 "naranja" => "naranja",
 "uva" => "púrpura",
 "sandía" => "verde",
];

$miFrutasConColoresValores = array_values($miFrutasConColores);
print_r($miFrutasConColoresValores);

/*
Salida:

Array
(
   [0] => rojo
   [1] => amarillo
   [2] => naranja
   [3] => púrpura
   [4] => verde
)
*/
```

### La Función `array_reduce()`

La función `array_reduce()` se utiliza para "reducir" un arreglo a un solo valor aplicando una función de callback a cada elemento del arreglo. Funciona como el método `reduce()` de arreglos en JavaScript.

`array_reduce()` itera a través del arreglo y realiza la función de callback en cada elemento, acumulando un único resultado.

Eso significa que puedes usarlo para agregación de datos y cálculos, como calcular el valor total de los artículos en un carrito de compras.

`array_reduce()` toma 2 argumentos obligatorios y 1 opcional. Aquí está la sintaxis:

```
array_reduce(arregloAReducir, funciónDeCallback, valorInicial)
```

-   `arregloAReducir` es el arreglo que estás usando para `reducir`
-   `funciónDeCallback` es la función que “reducirá” los elementos del arreglo a un solo valor
-   `valorInicial` es opcional. Especifica el valor inicial del acumulador. Si se proporciona, se usará como valor inicial para la primera llamada a la función de callback. Si no se proporciona, el primer elemento del arreglo se usará como valor inicial del acumulador.

`array_reduce()` usualmente se usa con números:

```
$misNumeros = [5, 89, 19, 10, 49];

$total = array_reduce($misNumeros, function ($acumulador, $elemento) {
 return $acumulador + $elemento;
}, 0);

echo $total; // 172
```

Puedes extraer esa función de callback en una función separada y pasarla como uno de los argumentos de la función `array_reduce()`:

```
$misNumeros = [5, 89, 19, 10, 49];

function sumarNumeros($acumulador, $elemento)
{
 return $acumulador + $elemento;
}

$total = array_reduce($misNumeros, 'sumarNumeros', 0);

echo $total; // 172
```

`array_reduce()` también funciona con cadenas de texto:

```
$palabras = ["Hola", "camper!", "¿Cómo", "estás", "hoy?"];

// Usa array_reduce para concatenar todas las cadenas de texto
$resultado = array_reduce($palabras, function ($acumulador, $elemento) {
 return $acumulador . " " . $elemento;
}, "");

echo $resultado; //  Hola camper! ¿Cómo estás hoy?
```

### La Función `sort()`

La función `sort()` toma un arreglo y lo ordena en orden ascendente basado en los valores de sus elementos. Modifica el arreglo original reorganizando sus elementos en orden ascendente.

Si tienes algunos datos en un arreglo que deseas organizar en orden ascendente, la función `sort()` es perfecta para eso.

```
$misNumeros = [4, 2, 1, 3, 5];
sort($misNumeros);

print_r($misNumeros);

/*
Salida:

Array
(
   [0] => 1
   [1] => 2
   [2] => 3
   [3] => 4
   [4] => 5
)
*/
```

### La Función `rsort()`

La función `rsort()` es similar a `sort()`, pero ordena el arreglo en orden descendente en lugar de orden ascendente.

```
$misNumeros = array(4, 2, 1, 3, 5);
rsort($misNumeros);

/*
Salida:

Array
(
   [0] => 5
   [1] => 4
   [2] => 3
   [3] => 2
   [4] => 1
)
*/

print_r($misNumeros);
```

### La Función `array_replace()`

La función `array_replace()` se utiliza para reemplazar los valores del primer arreglo con los valores de un arreglo proporcionado. Es perfecta para actualizar datos.

`array_replace()` toma dos argumentos: el arreglo que quieres reemplazar y el nuevo arreglo.

```
$misNombresArr1 = ["Zen", "Kay", "Luger"];
$misNombresArr2 = ["Yuan", "Jay", "John"];

$reemplazoRes = array_replace($misNombresArr1, $misNombresArr2);

print_r($reemplazoRes);

/*
Salida:
Array
(
   [0] => Yuan
   [1] => Jay
   [2] => John
)
*/
```

Si no proporcionas un segundo valor, devuelve el único argumento que proporcionas:

```
$misNombresArr1 = ["Zen", "Kay", "Luger"];
$misNombresArr2 = ["Yuan", "Jay", "John"];

$reemplazoRes = array_replace($misNombresArr1);

print_r($reemplazoRes);

/*
Salida:
Array
(
   [0] => Zen
   [1] => Kay
   [2] => Luger
)
*/
```

Si pasas tres o más arreglos como argumentos, el último argumento será el reemplazo para el primero, no el segundo:

```
$misNombresArr1 = ["Zen", "Kay", "Luger"];
$misNombresArr2 = ["Yuan", "Jay", "John"];
$misNombresArr3 = ["Eddy", "Blanco", "Jane"];

$reemplazoRes = array_replace($misNombresArr1, $misNombresArr2, $misNombresArr3);

print_r($reemplazoRes);

/*
Salida:
Array
(
   [0] => Eddy
   [1] => Blanco
   [2] => Jane
)
*/
```

También puedes reemplazar selectivamente un elemento en un índice particular:

```
$miFrutasArr1 = ["a" => "manzana", "b" => "banana", "c" => "cereza"];
$miFrutasArr2 = array("b" => "arándano", "c" => "arándano rojo");
$reemplazoRes = array_replace($miFrutasArr1, $miFrutasArr2);
```

```markdown
/*
Salida:
Array
(
   [a] => manzana
   [b] => arándano
   [c] => arándano rojo
)
*/

### La función `array_reverse()`

La función `array_reverse()` se utiliza para invertir el orden de los elementos en un array. Crea un nuevo array con los elementos en orden inverso.

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango"];
$reversedArr = array_reverse($myFruitsArr);

print_r($reversedArr);

/*
Salida:

Array
(
   [0] => Mango
   [1] => Cashew
   [2] => Banana
   [3] => Apple
)
*/
```

Si recuerdas cómo funciona la función `rsort()`, es muy similar a cómo funciona `array_reverse()`. La única diferencia es que `rsort()` modifica el array original, pero `array_reverse()` no.

### La función `array_slice()`

Si deseas extraer una parte particular de un array y devolverla como un array separado, `array_slice()` es la función ideal para usar.

`array_slice()` te permite especificar el índice de inicio, la longitud de la porción y si deseas preservar las claves del array original. Aquí está la sintaxis básica:

```
array_slice(arrayToSlice, startIndex, length, preserve)
```

-   `arrayToSlice` es el array en el que quieres usar `array_slice()`
-   `startIndex` es el índice desde el que quieres comenzar la extracción
-   `length` es hasta dónde deseas que llegue la extracción en el `arrayToSlice`. Es opcional.
-   `preserve` especifica si deseas que los índices del array cambien o no. Es un booleano.

El ejemplo a continuación comienza la extracción desde el segundo elemento del array, lo que significa que dejará fuera el primer elemento y devolverá los demás:

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango", "Avocado", "Pineapple"];
$slicedArr = array_slice($myFruitsArr, 1);

print_r($slicedArr);

/*
Salida:

Array
(
   [0] => Banana
   [1] => Cashew
   [2] => Mango
   [3] => Avocado
   [4] => Pineapple
)
*/
```

No olvides que puedes especificar el número de elementos que deseas de la extracción especificando un tercer argumento opcional:

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango", "Avocado", "Pineapple"];
$slicedArr = array_slice($myFruitsArr, 1, 3);

print_r($slicedArr);

/*
Salida:

Array
(
   [0] => Banana
   [1] => Cashew
   [2] => Mango
)
*/
```

Si deseas preservar los índices, puedes especificar un cuarto argumento booleano opcional `true`:

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango", "Avocado", "Pineapple"];
$slicedArr = array_slice($myFruitsArr, 1, 3, true);

print_r($slicedArr);

/*
Salida:

Array
(
   [1] => Banana
   [2] => Cashew
   [3] => Mango
)
*/
```

### La función `array_sum()`

`array_sum()` suma todos los valores numéricos en un array y devuelve el resultado. El único parámetro que toma es el array que contiene los valores numéricos.

```
$myNums = [5, 6, 9, 20, 1];

$total = array_sum($myNums);
echo $total; // 41
```

Si se usa en un array que contiene cadenas, `array_sum()` lanza el error `Warning: array_sum(): Addition is not supported on type string in /location/index.php on line #`:

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango", "Avocado", "Pineapple"];
$total = array_sum($myFruitsArr);
```

![Imagen](https://www.freecodecamp.org/news/content/images/2024/05/image2.png) _error función sum_

### La función `array_merge()`

`array_merge()` une dos o más arrays. Eso significa que es ideal para combinar múltiples arrays en un solo array gigante.

```
$array1 = [1, 2, 3];
$array2 = [4, 5, 6, 7, 8];

$result = array_merge($array1, $array2);

print_r($result);
/*
Salida:

Array
(
   [0] => 1
   [1] => 2
   [2] => 3
   [3] => 4
   [4] => 5
   [5] => 6
   [6] => 7
   [7] => 8
)
*/
```

También puedes usar `array_merge()` en arrays asociativos:

```
$array1 = [
 'fname' => 'John',
 'sex' => 'male',
];

$array2 = [
 'lname' => 'Doe',
 'favColor' => 'red',
];

$result = array_merge($array1, $array2);
print_r($result);

/*
Salida:

Array
(
   [fname] => John
   [sex] => male
   [lname] => Doe
   [favColor] => red
)
*/
```

Si los arrays contienen claves similares, el último sobrescribe el(los) anterior(es) en el resultado:

```
$array1 = [
 'fname' => 'John',
 'sex' => 'male',
];

$array2 = [
 'fname' => 'Jane',
 'favColor' => 'red',
];

$result = array_merge($array1, $array2);
print_r($result);

/*
Salida:

Array
(
   [fname] => Jane
   [sex] => male
   [favColor] => red
)
*/
```

Si se pasa un solo array a `array_merge()` y las claves no son enteros secuenciales comenzando desde 0, sino una secuencia como `3`, `7`, `8`, el array resultante tendrá sus claves reindexadas comenzando desde `0`:

```
$myArray = [3 => 'Granero', 7 => 'Silo', 8 => 'Tanque'];
$res = array_merge($myArray);

print_r($res);

/*
Array
(
   [0] => Granero
   [1] => Silo
   [2] => Tanque
)
*/
```

### La función `array_filter()`

La función `array_filter()` “filtra” los elementos de un array basado en una función de devolución (`callback`) que pasas a ella. Puedes usarla para eliminar elementos innecesarios de un array.

Si la función de devolución devuelve `true` para un elemento en el array, ese elemento se incluye en el array resultante; de lo contrario, se excluye.

`array_filter()` toma hasta 3 argumentos. La sintaxis básica es la siguiente:

```
array_filter(arrayToFilter, callbackFunction, flag)
```
```

Aquí tienes un ejemplo que obtiene los números pares de un arreglo de números:

```
$array = [76, 11, 12, 22, 13, 43, 54];
$getEvenNums = array_filter($array, function ($value) {
 return $value % 2 == 0;
});


print_r($getEvenNums);


/*
Array
(
   [0] => 76
   [2] => 12
   [3] => 22
   [6] => 54
)
*/
```

Aquí tienes un ejemplo más complejo de cómo obtener todas las personas con el primer nombre “John” en un arreglo asociativo multidimensional:

```
$persons = [
 ['first' => 'John', 'last' => 'Doe'],
 ['first' => 'Janet', 'last' => 'Jackson'],
 ['first' => 'John', 'last' => 'Smith'],
 ['first' => 'Jane', 'last' => 'Doe'],
 ['first' => 'David', 'last' => 'Lee'],
 ['first' => 'John', 'last' => 'Olga']
];


$personsWithJohnFirstnames = array_filter($persons, function ($person) {
 return $person['first'] === "John";
});

print_r($personsWithJohnFirstnames);

/*
Output:

Array
(
   [0] => Array
       (
           [first] => John
           [last] => Doe
       )

   [2] => Array
       (
           [first] => John
           [last] => Smith
       )

   [5] => Array
       (
           [first] => John
           [last] => Olga
       )

)
*/
```

Recuerda que si pasas el arreglo como el único argumento, el arreglo resultante contendrá cada elemento que evalúe como `true`:

```
$array = [9, 4, 10, 0, 3];
$result = array_filter($array);


print_r($result);


/*
Output:


Array
(
   [0] => 9
   [1] => 4
   [2] => 10
   [4] => 3
)
*/
```

### La Función `array_map()`

La función `array_map()` transforma todos los elementos de un arreglo en base a una función de callback que se le pasa. Luego, devuelve un nuevo arreglo que contiene los elementos transformados.

Puedes pensar en `array_map()` como una forma más conveniente de "iterar" un arreglo, aunque técnicamente no es un bucle.

`array_map()` toma dos parámetros obligatorios: la función de callback y el arreglo que quieres transformar.

Aquí tienes un ejemplo en el que todos los números de un arreglo se elevan al cuadrado:

```
$numbers = [5, 8, 3, 4];

$squaredNumbers = array_map(function ($num) {
 return $num * $num;
}, $numbers);

print_r($squaredNumbers);

/*
Output:

Array
(
   [0] => 25
   [1] => 64
   [2] => 9
   [3] => 16
)
*/
```

También puedes extraer la función de callback en una función separada y pasarla:

```
function squareNums($num)
{
 return $num * $num;
}

$numbers = [5, 8, 3, 4];
$squaredNumbers = array_map('squareNums', $numbers);

print_r($squaredNumbers);

/*
Output:

Array
(
   [0] => 25
   [1] => 64
   [2] => 9
   [3] => 16
)
*/
```

También puedes usar la función `array_map()` en un arreglo de cadenas. El siguiente ejemplo convierte todas las frutas del arreglo `$fruitsArr` a mayúsculas:

```
$fruitsArr = ['mango', 'apple', 'orange', 'strawberry'];

function toUpperCase($str)
{
 return strtoupper($str);
}

$uppercasedFruits = array_map('toUpperCase', $fruitsArr);

print_r($uppercasedFruits);

/*
Output:

Array
(
   [0] => MANGO
   [1] => APPLE
   [2] => ORANGE
   [3] => STRAWBERRY
)
*/
```

Aquí tienes un ejemplo usando un arreglo asociativo donde todos los valores se prefijan con `prefix_`:

```
$fruitsArr = [
 'fruit1' => 'mango',
 'fruit2' => 'banana',
 'fruit3' => 'orange',
];


function addPrefixToFruits($fruit)
{
 return 'prefix_' . $fruit;
}

$prefixedFruits = array_map('addPrefixToFruits', $fruitsArr);

print_r($prefixedFruits);

/*
Output:

Array
(
   [fruit1] => prefix_mango
   [fruit2] => prefix_banana
   [fruit3] => prefix_orange
)
*/
```

> **Nota**: Si te preguntas cuál es la diferencia entre `array_map()` y `array_filter()`, el truco está en que **`array_map()` transforma todos los elementos del arreglo en base a una función de callback**. En contraste, **`array_filter()` devuelve cualquier elemento del arreglo que coincida con la función de callback pasada**.

### La Función `array_search()`

La función `array_search()` se utiliza para buscar un valor determinado dentro de un arreglo. Si se encuentra el valor, devuelve la clave del valor; de lo contrario, no devuelve nada.

`array_search()` toma hasta 3 argumentos. Aquí tienes la sintaxis:

```
array_search(valueToSearch, arrayToSearch, strict)
```

-   `valueToSearch` es el valor que estás buscando.
-   `arrayToSearch` es el arreglo en el que quieres buscar el valor.
-   `strict` es un argumento booleano opcional que determina si se debe utilizar un operador de comparación estricta en la búsqueda. Es `false` por defecto. Pero si se establece en `true`, buscará elementos idénticos en el arreglo y los devolverá. Por ejemplo, `"1"` y `1`.

Aquí tienes un ejemplo buscando el ítem `Cashew` en un arreglo de frutas:

```
$myFruitsArr = [
 "fruit1" => "Apple",
 "fruit2" => "Banana",
 "fruit3" => "Cashew",
 "fruit4" => "Mango",
 "fruit5" => "Avocado",
 "fruit6" => "Pineapple"
];

$checkForCashew = array_search('Cashew', $myFruitsArr);

echo $checkForCashew; // fruit3
```

Y si lo usas en un arreglo regular, aún devolverá el índice del arreglo, que es la clave en el fondo:

```
$myFruitsArr = [
 "Apple",
 "Banana",
 "Cashew",
 "Mango",
 "Avocado",
 "Pineapple"
];


$CheckForCashew = array_search('Cashew', $myFruitsArr);


echo $CheckForCashew; // 2
```

### La Función `array_column()`

Eso significa que `array_column` es útil cuando quieres crear un arreglo a partir de la columna de un arreglo existente.

`array_column()` toma hasta 3 argumentos. Aquí está la sintaxis:

```
array_column(parentArray, columKey, indexKey)
```

-   `parentArray`: usualmente un arreglo multidimensional, es el arreglo del cual se extrae la columna de valores
-   `columnKey`: la clave o índice de la columna para extraer valores. Esto puede ser un índice entero o una clave de cadena que representa el nombre de la columna.
-   `indexKey` (opcional): la columna a usar como índice para el arreglo retornado. Si se omite o se establece en null, se usan índices numéricos.

El siguiente ejemplo usa la clave name del arreglo para crear un nuevo arreglo:

```
$pupils = [
 ["id" => 1, "name" => "John", "score" => 90],
 ["id" => 2, "name" => "Jane", "score" => 79],
 ["id" => 3, "name" => "Will", "score" => 83],
 ["id" => 4, "name" => "Jill", "score" => 92],
 ["id" => 5, "name" => "steven", "score" => 100],
];

$arrayFromNameColumn = array_column($pupils, 'name');

print_r($arrayFromNameColumn);

/*
Salida:

Array
(
   [0] => John
   [1] => Jane
   [2] => Will
   [3] => Jill
   [4] => steven
)
*/
```

Recuerda que puedes pasar otra clave en el arreglo para hacer que sus valores sean los índices del arreglo resultante. Usaré la `"id"` para eso:

```
$pupils = [
 ["id" => 1, "name" => "John", "score" => 90],
 ["id" => 2, "name" => "Jane", "score" => 79],
 ["id" => 3, "name" => "Will", "score" => 83],
 ["id" => 4, "name" => "Jill", "score" => 92],
 ["id" => 5, "name" => "steven", "score" => 100],
];

$arrayFromNameColumn = array_column($pupils, "name", "id");

print_r($arrayFromNameColumn);

/*
Salida:

Array
(
   [1] => John
   [2] => Jane
   [3] => Will
   [4] => Jill
   [5] => steven
)
*/
```

### La Función `in_array()`

`in_array()` se usa para verificar si un elemento en particular está en un arreglo. Toma dos parámetros obligatorios y uno opcional.

Aquí está la sintaxis:

```
in_array(itemToSearch, arrayToSearchThrough, strict)
```

-   `itemToSearch` es el elemento que estás buscando. Es obligatorio.
-   `arrayToSearchThrough` es el arreglo en el cual deseas buscar `itemToSearch`. También es obligatorio.
-   `strict` es un valor booleano que te permite especificar si deseas que la búsqueda se haga con comparación laxa (`==`) o comparación estricta (`===`). Por defecto es `false`.

Aquí está la función `in_array()` en acción:

```
$myFruitsArr1 = ["Apple", "Banana", "Cashew", "Mango"];
var_dump(in_array("Banana", $myFruitsArr1)); // bool(true)
var_dump(in_array("banana", $myFruitsArr1)); // bool(false)
```

Debido a que el resultado de `in_array()` es booleano, es comúnmente usado en condicionales:

```
$myFruitsArr1 = ["Apple", "Banana", "Cashew", "Mango"];

if (in_array("Banana", $myFruitsArr1)) {
 echo "Banana está en el arreglo"; // Banana está en el arreglo
} else {
 echo "Banana no está en el arreglo";
}
```

## Cómo Iterar Através de Arreglos en PHP

PHP provee el tradicional bucle `for` para iterar tanto a través de arreglos indexados como asociativos. También puedes usar una función `forEach()` más limpia para el mismo propósito.

### Cómo Iterar a Través de un Arreglo Indexado

Aquí está la sintaxis básica para iterar a través de un arreglo con un bucle `for`:

```
for ($i=0; $i < count($arr); $i++) {
 # hacer algo con $arr ...
}
```

Y aquí está la sintaxis de `foreach()`:

```
foreach ($arrs as $arr) {
 # hacer algo con $arr
}
```

Aquí hay un ejemplo usando el bucle `for` para iterar a través de un arreglo de cadenas:

```
$retiredBallers = ["Pele", "Maradona", "Zidane", "Lampard", "Okocha"];

for ($i = 0; $i < count($retiredBallers); $i++) {
 echo $retiredBallers[$i] . "<br>";
}

/*
Salida:

Pele
Maradona
Zidane
Lampard
Okocha
*/
```

Puedes iterar a través de números de la misma manera:

```
for ($i = 0; $i < count($myNums); $i++) {
 echo $myNums[$i] . "<br>";
}

/*
Salida:

45
8
90
2
5
*/
```

También puedes imprimir el índice para cada elemento del arreglo:

```
for ($i = 0; $i < count($myNums); $i++) {
 echo $myNums[$i] . " está en el índice " . $i . "<br>";
}

/*
Salida:

45 está en el índice 0
8 está en el índice 1
90 está en el índice 2
2 está en el índice 3
5 está en el índice 4
*/
```

No olvides que también puedes usar `foreach` para iterar a través de cualquier arreglo:

```
foreach ($retiredBallers as $retiredBaller) {
 echo $retiredBaller . "<br>";
}

/*
Pele
Maradona
Zidane
Lampard
Okocha
*/
```

También puedes obtener el índice de esta manera:

```
foreach ($retiredBallers as $key => $retiredBaller) {
 echo $retiredBaller . " está en el índice " . $key . "<br>";
}

/*
Salida:

Pele está en el índice 0
Maradona está en el índice 1
Zidane está en el índice 2
Lampard está en el índice 3
Okocha está en el índice 4
*/
```

### Cómo Iterar a Través de un Arreglo Asociativo

Un arreglo asociativo puede ser complejo con elementos anidados profundamente en él. Así que tienes que obtener lo que quieres de él en lugar de mostrar todo lo que contiene.

Aquí está cómo obtuve el nombre y el país de algunos futbolistas retirados de un arreglo `$retiredFootballers`:

```
$retiredFootballers = [
 [
   "name" => "Pele",
   "position" => "Forward",
   "country" => "Brazil",
   "club" => "Santos"
 ],
 [
   "name" => "Diego Maradona",
   "position" => "Attacking Midfielder",
   "country" => "Argentina",
   "club" => "Napoli"
 ],
```

```
 [
   "name" => "Ronaldinho",
   "position" => "Mediapunta",
   "country" => "Brasil",
   "club" => "Barcelona"
 ],


 [
   "name" => "David Beckham",
   "position" => "Centrocampista",
   "country" => "Inglaterra",
   "club" => "Manchester United"
 ],
 [
   "name" => "Jay-Jay Okocha",
   "position" => "Centrocampista",
   "country" => "Nigeria",
   "club" => "Bolton Wanderers"
 ]
];


for ($i = 0; $i < count($retiredFootballers); $i++) {
 echo $retiredFootballers[$i]["name"] . " es de " . $retiredFootballers[$i]["country"] . "<br>";
 echo "<hr>";
}
```

Hacer lo mismo con `foreach()` es más limpio porque no necesitas una variable `$i`:

```
foreach ($retiredFootballers as $retiredFootballer) {
 echo $retiredFootballer["name"] . " es de " . $retiredFootballer["country"] . "<br>";
 echo "<hr>";
}
```

### Cómo recorrer un array dentro de la plantilla HTML

Cualquier HTML en tu archivo PHP es la plantilla para ese archivo PHP. Esto significa que puedes hacer el bucle dentro del HTML, porque puedes escribir PHP dentro de ese HTML.

Así es como puedes hacerlo:

```
<?php
$retiredBallers = ["Pelé", "Maradona", "Zidane", "Lampard", "Okocha"];
?>

<h1 class="text-center mt-3 bd-highlight">Recorriendo Arrays en PHP</h1>

<h2 class="mx-5 mt-5">Algunos Futbolistas Retirados</h2>

<ul class="list-group mx-5" style="width: 25%;">
   <!-- El bucle -->
   <?php for ($i = 0; $i < count($retiredBallers); $i++) : ?>
     <li class="list-group-item"> <?= $retiredBallers[$i] ?> </li>
   <?php endfor; ?>
</ul>
```

Puedes hacer lo mismo con `foreach()`:

```
<?php
$retiredBallers = ["Pelé", "Maradona", "Zidane", "Lampard", "Okocha"];
?>

<h1 class="text-center mt-3 bd-highlight">Recorriendo Arrays en PHP</h1>

<h2 class="mx-5 mt-5">Algunos Futbolistas Retirados</h2>

<ul class="list-group mx-5" style="width: 25%;">
   <!-- El bucle -->
   <?php foreach ($retiredBallers as $retiredBaller) : ?>
     <li class="list-group-item"> <?= $retiredBaller ?> </li>
   <?php endforeach; ?>
</ul>
```

Así es como se ve en el navegador:

![Imagen](https://www.freecodecamp.org/news/content/images/2024/05/image4.png) _Recorriendo arrays usando un bucle PHP dentro de HTML_

Usemos `foreach()` para mostrar el array asociativo `$retiredFootballers` también:

```
<h1 class="text-center mt-3 bd-highlight">Recorriendo Arrays en PHP</h1>

<h2 class="mx-5 mt-5">Algunos Futbolistas Retirados</h2>

<ul class="list-group mx-5" style="width: 25%;">
   <!-- El bucle -->
   <?php foreach ($retiredFootballers as $retiredFootballer) : ?>
     <li class="list-group-item"> <?= $retiredFootballer["name"] . " es de " . $retiredFootballer["country"] ?> </li>
   <?php endforeach; ?>
</ul>
```

![Imagen](https://www.freecodecamp.org/news/content/images/2024/05/image1.png) _Recorriendo arrays usando la función foreach de PHP dentro del HTML_

## Conclusión

Aprender a trabajar con arrays es un paso fundamental hacia la competencia en PHP y el desarrollo web. Por eso, este manual te ha guiado a través de las diversas capacidades de los arrays en PHP, desde su creación hasta su manipulación y bucle.

Ahora deberías sentirte seguro usando arrays para gestionar datos de manera efectiva en PHP, ya sea para listas simples con arrays indexados, o estructuras complejas con arrays asociativos y multidimensionales.

En adelante, te animo a experimentar con varias funciones de arrays para mejorar tu código y enfrentar diferentes desafíos de programación. También, considera explorar arrays multidimensionales y asociativos para escenarios de datos más complejos.

A medida que te vuelvas más competente con los arrays en PHP, integrarlos con operaciones de base de datos puede mejorar aún más tus aplicaciones web, así que estate atento a la segunda parte de esta serie.

¡Sigue codificando!

[1]: #heading-how-to-create-arrays-in-php
[2]: #heading-how-to-create-arrays-with-the-array-function
[3]: #heading-how-to-create-arrays-with-the-square-bracket-syntax
[4]: #heading-how-to-print-arrays-in-php
[5]: #howtoprintanarraywiththeprintrfunction
[6]: #howtoprintanarraywiththevardumpfunction
[7]: #heading-php-array-functions
[8]: #heading-the-count-array-function
[9]: #thearraypush_arrayfunction
[10]: #heading-the-arraypop-function
[11]: #heading-the-arrayshift-function
[12]: #heading-the-arrayunshift-function
[13]: #heading-the-arraysplice-function
[14]: #heading-the-arraykeys-function
[15]: #heading-the-arrayvalues-function
[16]: #heading-the-arrayreduce-function
[17]: #heading-the-sort-function
[18]: #heading-the-rsort-function
[19]: #heading-the-arrayreplace-function
[20]: #heading-the-arrayreverse-function
[21]: #heading-the-arrayslice-function
[22]: #heading-the-arraysum-function
[23]: #heading-the-arraymerge-function
[24]: #heading-the-arrayfilter-function
[25]: #thearraymap_function
[26]: #heading-the-arraysearch-function
[27]: #thearraycolumnfunction
[28]: #heading-the-inarray-function
[29]: #heading-how-to-loop-through-arrays-in-php
[30]: #heading-how-to-loop-through-an-indexed-array
[31]: #heading-how-to-loop-through-an-associative-array
[32]: #heading-how-to-loop-through-an-array-inside-the-html-template
[33]: #heading-conclusion
```

