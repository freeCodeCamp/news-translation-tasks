---
title: "Error: error:0308010c:digital envelope routines::unsupported [Error de Node
  Solucionado]"
date: 2024-08-27T13:46:01.360Z
author: Kolade Chris
authorURL: https://www.freecodecamp.org/news/author/koladechris/
originalURL: https://www.freecodecamp.org/news/error-error-0308010c-digital-envelope-routines-unsupported-node-error-solved/
posteditor: ""
proofreader: ""
---

Si trabajas con Node.js y soluciones de interfaz de línea de comandos como Webpack, create-react-app o vue-cli-service, podrías haberte encontrado con el error, `Error: error:0308010c:digital envelope routines::unsupported`.

<!-- more -->

No estás solo, porque actualmente yo también lo estoy recibiendo:

![ss1-1](https://www.freecodecamp.org/news/content/images/2022/11/ss1-1.png)

La aplicación de React efectivamente no pudo iniciar:

![ss2-1](https://www.freecodecamp.org/news/content/images/2022/11/ss2-1.png)

En este artículo, aprenderás cómo solucionar este error de 3 maneras. Pero primero, discutamos qué causa el error.

## ¿Qué Causa el Error "0308010c:digital envelope routines::unsupported"?

Es probable que estés recibiendo este error debido a 2 razones principales:

-   no estás usando la versión LTS (soporte a largo plazo) de Node JS. Puedes ver que estoy usando Node 17.0.0, que no es una versión LTS de Node.
-   estás usando react-script con una versión menor a 5

El error también puede ocurrir porque estás usando Node 17.

## Cómo Solucionar el Error "0308010c:digital envelope routines::unsupported"

Hay al menos 3 maneras de solucionar este error. Vamos a revisarlas una por una. Cualquiera de ellas debería funcionar para ti.

### Pasar `--openssl-legacy-provider` a Webpack o la Herramienta CLI

En una aplicación de React, por ejemplo, puedes pasar `--openssl-legacy-provider` al script de inicio de esta manera `"react-scripts --openssl-legacy-provider start"`.

Eso debería solucionar el problema. Pero si esto no soluciona el error, entonces procede a la siguiente solución. En muchas ocasiones, funciona.

### Usar una Versión LTS de Node JS

Considera reducir la versión de Node a 16.16.0 u otras versiones LTS.

Actualmente, 18.12.1 es la última versión LTS de Node. Puedes descargarla desde el sitio web oficial de Node JS o usar NVM para instalarla.

### Actualizar React Script a la Versión 5+

Si estás trabajando con React y esto aún no soluciona el error, entonces es probable que sea un problema con tu script de React.

Si estás usando una versión de react-script menor a 5, entonces deberías actualizarla a la versión 5+.

En mi caso, actualmente estoy usando react-scripts 3.4.3:

![ss3](https://www.freecodecamp.org/news/content/images/2022/11/ss3.png)

Para actualizar react-scripts a 5+, puedes hacerlo de dos maneras:

-   Desinstalar y reinstalar react-scripts
    
    -   abre la terminal y ejecuta `npm uninstall react-scripts`
    -   ejecuta `npm install react-scripts`
-   Cambiar manualmente la versión de react-script
    
    -   ve a tu `package.json` y cambia la versión de react-script a 5.0.2
    -   elimina la carpeta node\_modules ejecutando `rm –rf node_modules`
    -   elimina el archivo package.lock.json ejecutando `rm –rf package.lock.json`
    -   ejecuta `npm install` o `yarn add`, dependiendo del gestor de paquetes que estés utilizando

Después de actualizar la versión de react-scripts a 5+, mi aplicación de React ahora funciona bien:

![ss4](https://www.freecodecamp.org/news/content/images/2022/11/ss4.png)

![ss5](https://www.freecodecamp.org/news/content/images/2022/11/ss5.png)

## Conclusión

Como ya se señaló en este artículo, si estás recibiendo el error "0308010c:digital envelope routines::unsupported", podría deberse a que no estás usando una versión LTS de Node JS, o estás usando react-scripts versión <5.

Esperemos que las soluciones que discutimos en este tutorial te ayuden a resolver este error. Si alguna de las soluciones no funciona para ti, entonces intenta con las otras. En mi caso, fue la actualización de react-scripts a 5+ lo que funcionó para mí.

Gracias por leer.

