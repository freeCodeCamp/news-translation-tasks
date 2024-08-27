---
title: flushdns – Cómo Vaciar DNS con el Comando ipconfig /flushdns de Windows
date: 2024-08-27T13:38:54.905Z
author: Kolade Chris
authorURL: https://www.freecodecamp.org/news/author/koladechris/
originalURL: https://www.freecodecamp.org/news/flushdns-how-to-flush-dns-with-the-windows-ipconfig-flushdns-command/
posteditor: ""
proofreader: ""
---

Probablemente hayas notado que, después de visitar un sitio web por primera vez, el sitio carga mucho más rápido la próxima vez que lo visitas.

<!-- more -->

Esto se debe a que tu sistema operativo, o el navegador en el caso de Google Chrome, almacenan en caché las direcciones IP y la información de DNS (Sistema de Nombres de Dominio) de cualquier sitio web que visitas. La caché de DNS contiene:

-   la dirección del sitio web o nombre de host, técnicamente llamada los datos del recurso (rdata)
-   el nombre de dominio del sitio web
-   tipo de registro (IPv4 o IPv6)
-   la validez de la caché o TTL (tiempo de vida)

Cuando el TTL expira, la caché se vaciará y el DNS se limpiará automáticamente para ti. Pero hay momentos en que no quieres esperar horas o días para que el TTL expire, y deseas vaciar tu DNS manualmente.

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

Esto significa que tu caché ha sido completamente vaciada, y se cargarán versiones frescas de cualquier sitio web que visites.

## Cómo Limpiar la Caché de DNS en Google Chrome

A pesar de no ser un sistema operativo, Chrome tiene su propia caché de DNS para ayudar a personalizar tu experiencia de navegación.

Para vaciar la caché de DNS de Chrome, todo lo que necesitas hacer es escribir `chrome://net-internals/#dns` en la barra de direcciones y presionar `ENTER`.

Luego haz clic en “Clear host cache”:

![flushChromeDNS](https://www.freecodecamp.org/news/content/images/2022/04/flushChromeDNS.png)

## Conclusión

Como has aprendido en este artículo, vaciar tu DNS te ofrece muchas ventajas que pueden hacer que tu experiencia en internet sea más segura.

Aunque la caché se limpia después de que el TTL expira, deberías vaciar tu DNS tan a menudo como sea posible para obtener estas ventajas.

¡Gracias por leer!

