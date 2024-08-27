---
title: No se puede usar la declaración de importación fuera de un módulo [Error de React TypeScript Resuelto]
date: 2024-08-27T14:10:46.341Z
author: Ihechikara Abba
authorURL: https://www.freecodecamp.org/news/author/Ihechikara/
originalURL: https://www.freecodecamp.org/news/cannot-use-import-statement-outside-a-module-react-typescript-error-solved/
posteditor: ""
proofreader: ""
---

Al construir una aplicación web, es posible que encuentres el error `SyntaxError: Cannot use import statement outside a module`.

<!-- more -->

Este error puede surgir al usar JavaScript o TypeScript en el back-end. Así que podrías estar trabajando en el lado del cliente con React, Vue, etc., y aún así encontrarte con este error.

También puedes encontrar este error al trabajar con JavaScript en el lado del cliente.

En este artículo, aprenderás cómo solucionar el error `SyntaxError: Cannot use import statement outside a module` al usar TypeScript o JavaScript con [Node][1].

También aprenderás cómo solucionar el error al trabajar con JavaScript en el lado del cliente.

## Cómo solucionar el error de TypeScript `SyntaxError: Cannot use import statement outside a module`

En esta sección, trabajaremos con un servidor básico de Node usando Express.

Nota que si estás utilizando la última versión de TypeScript para tu aplicación Node, el archivo **tsconfig.json** tiene reglas predeterminadas que evitan que se genere el error `SyntaxError: Cannot use import statement outside a module`.

Así que probablemente no te encontrarás con el error `SyntaxError: Cannot use import statement outside a module` si:

-   Instalas la última versión de TypeScript, y estás usando el archivo **tsconfig.json** predeterminado que se genera cuando ejecutas `tsc init` con la última versión.
-   Configuras TypeScript correctamente para Node e instalas los paquetes necesarios.

Pero asumamos que no estás utilizando las configuraciones más recientes del archivo **tsconfig.json**.

Aquí hay un servidor Express que escucha en el puerto 3000 y registra "¡Hola Mundo!" en la consola:

```
import express from "express"

const app = express()

app.listen("3000", (): void => {
    console.log("¡Hola Mundo!")
    // SyntaxError: Cannot use import statement outside a module
})
```

El código anterior parece que debería funcionar perfectamente, pero se genera el error `SyntaxError: Cannot use import statement outside a module`.

Esto está sucediendo porque usamos la palabra clave `import` para importar un módulo: `import express from "express"`.

Para solucionarlo, dirígete al archivo **tsconfig.json** y desplázate hacia la sección de módulos.

Deberías ver una regla particular así bajo la sección de módulos:

```
/* Modules */
"module": "esnext"
```

Para solucionar el problema, cambia el valor "esnext" a "commonjs".

Es decir:

```
/* Modules */
"module": "commonjs"
```

## Cómo solucionar el error de JavaScript `SyntaxError: Cannot use import statement outside a module`

Solucionar el error `SyntaxError: Cannot use import statement outside a module` al usar JS puro es un poco diferente de TypeScript.

Aquí está nuestro servidor:

```
import express from "express";

const app = express();

app.listen(3000, () => {
    console.log("¡Hola Mundo!");
    // SyntaxError: Cannot use import statement outside a module
});
```

Estamos obteniendo el error `SyntaxError: Cannot use import statement outside a module` por la misma razón: usamos la palabra clave `import` para importar un módulo.

Para solucionar esto, ve al archivo **package.json** y agrega `"type": "module",`. Es decir:

```
{
  "name": "js",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

Ahora puedes usar la palabra clave `import` sin obtener un error.

Para solucionar este error al trabajar con JavaScript en el lado del cliente (sin ningún framework), simplemente agrega el atributo `type="module"` a la etiqueta de script del archivo que deseas importar como módulo. Es decir:

```
<script type="module" src="./add.js"></script>
```

## Resumen

En este artículo, hablamos sobre el error `SyntaxError: Cannot use import statement outside a module` en TypeScript y JavaScript.

Este error ocurre principalmente cuando utilizas la palabra clave `import` para importar un módulo en Node.js. O cuando omites el atributo `type="module"` en una etiqueta `script`.

Vimos ejemplos de código que generaban el error y cómo solucionarlos al trabajar con TypeScript y JavaScript.

¡Feliz codificación!

[1]: https://www.freecodecamp.org/news/node-js-server-side-javascript-what-is-node-used-for/


