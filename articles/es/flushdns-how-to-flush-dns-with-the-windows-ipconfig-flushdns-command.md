---
title: flushdns – Cómo Vaciar DNS con el Comando ipconfig /flushdns de Windows
date: 2024-08-27T13:38:54.905Z
author: Kolade Chris
authorURL: https://www.freecodecamp.org/news/author/koladechris/
originalURL: https://www.freecodecamp.org/news/flushdns-how-to-flush-dns-with-the-windows-ipconfig-flushdns-command/
posteditor: "lucas-agustin-morales-romero"
proofreader: ""
---

Probablemente,hayas notado que, una vez que visitas un sitio web nuevo pro primera vez, las siguientes cargará mucho mas rapido.

<!-- more -->

Esto se debe a que el sistema operativo (o el navegador, en caso de que uses Google Chrome) guarda las direcciones IP y la información del DNS (Domain Name System) de cada sitio que visitas. Esta cache contiene los siguientes datos: 

-   la dirección web o nombre de host, técnicamente llamada los datos del recurso (rdata)
-   el nombre de dominio del sitio web
-   tipo de registro (IPv4 o IPv6)
-   la validez de la caché o TTL (Time To Live)

Cuando el TTL expira, la caché se borra automáticamente y el DNS se limpia solo. Pero a veces no querés esperar que eso ocurra automaticamente, y necesitás vaciar la caché DNS manualmente.

En este artículo, explicaré por qué deberías vaciar tu DNS y cómo hacerlo en Windows 10 y Chrome.

## Entonces, ¿Por Qué Deberías Vaciar (o Limpiar) tu DNS?

Vaciar tu DNS tiene varias ventajas, como:

-   ocultar tu comportamiento de búsqueda de los recolectores de datos que podrían mostrarte anuncios basados en tu historial de búsqueda
-   solicitar que se cargue una versión actualizada de un sitio web o aplicación web. Esto puede ayudar a resolver problemas 404 si un sitio web o aplicación web fue migrado a un nuevo dominio
-   prevenir el envenenamiento de la caché de DNS – una situación de seguridad en la que hackers malintencionados obtienen acceso a tu caché de DNS y la alteran para que seas redirigido a un sitio web donde podrían recopilarse información sensible de ti

## Cómo Vaciar tu DNS en Windows

Para vaciar tus registros de DNS en Windows 10, sigue los pasos a continuación:

**Paso 1**: Haz clic en Inicio o presiona la tecla `[logo]` de Windows en tu teclado

**Paso 2**: Escribe "cmd", luego selecciona "Ejecutar como Administrador" en la derecha

![cmd-admin](https://www.freecodecamp.org/news/content/images/2022/04/cmd-admin.jpg)

**Paso 3**: Escribe "ipconfig /flushdns" y presiona `ENTER`

Deberías obtener una respuesta que indique que la caché de DNS ha sido vaciada, como la siguiente:

![flushDNS](https://www.freecodecamp.org/news/content/images/2022/04/flushDNS.png)

Esto significa que tu caché se ha vaciado por completo y que, al visitar cualquier sitio web, se cargará una versión actualizada.

## Cómo Limpiar la Caché de DNS en Google Chrome

A pesar de no ser un sistema operativo, Chrome tiene su propia caché de DNS para ayudar a personalizar tu experiencia de navegación.

Para vaciar la caché de DNS de Chrome, todo lo que necesitas hacer es escribir `chrome://net-internals/#dns` en la barra de direcciones y presionar `ENTER`.

Luego haz clic en “Clear host cache”:

![flushChromeDNS](https://www.freecodecamp.org/news/content/images/2022/04/flushChromeDNS.png)

## Conclusión

Como has aprendido en este artículo, vaciar tu DNS te ofrece muchas ventajas que pueden hacer que tu experiencia en internet sea más segura.

Aunque la caché se limpia después de que el TTL expira, deberías vaciar tu DNS tan a menudo como sea posible para obtener estas ventajas.

¡Gracias por leer!

