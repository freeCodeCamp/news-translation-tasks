---
title: El Manual de Firmado de Código de Apple
date: 2025-06-20T20:53:18.103Z
author: Sravan Karuturi
authorURL: https://www.freecodecamp.org/news/author/sravankaruturi/
originalURL: https://www.freecodecamp.org/news/apple-code-signing-handbook/
posteditor: ""
proofreader: ""
---

En este manual, desmitificaré el proceso de firmado de código para aplicaciones de Apple. El ecosistema de Apple es poderoso, pero sus mecanismos de distribución – con varios identificadores, certificados y perfiles – pueden parecer complejos. Esta guía intenta hacer ese recorrido más manejable y directo para ti.

<!-- more -->

A lo largo de este manual, aprenderás a:

-   Establecer y gestionar correctamente la identidad única de una aplicación.
    
-   Entender los roles de los diferentes certificados de desarrollador de Apple y cómo crearlos y gestionarlos.
    
-   Diferenciar entre los diversos tipos de perfiles de aprovisionamiento y saber cuándo usar cada uno.
    

Esta guía está dirigida a nuevos desarrolladores que quieren aprender cómo funciona el proceso de firmado de código, pero también debería ser útil para desarrolladores experimentados que desean o necesitan refrescar su memoria.

### Requisitos previos

Aunque no hay requisitos previos estrictos para entender los certificados, paquetes y perfiles de aprovisionamiento para la distribución en las plataformas de Apple, es útil tener una cuenta de desarrollador de Apple para seguir el proceso.

## Tabla de Contenidos

-   [App IDs, Bundle IDs – La Identidad de tu Aplicación][1]
    
-   [Entendiendo la Distribución: Un Análisis Profundo de los Certificados][2]
    
-   [Puente entre todo: Perfiles de Aprovisionamiento][3]
    
-   [Gestión de dispositivos – Desarrollos y Construcciones Ad Hoc][4]
    
-   [Posibilidades: Habilitando Capacidades y Servicios][5]
    
-   [Conclusión][6]
    

## **App IDs, Bundle IDs — La Identidad de tu Aplicación**

El Bundle ID y el correspondiente App ID registrado con Apple forman la base de la identidad de una aplicación. Establecerlos correctamente desde el principio es muy importante, ya que los errores o malas configuraciones aquí pueden llevar a complicaciones significativas en el futuro, particularmente una vez que hayas enviado tu aplicación a App Store Connect.

### Entendiendo `CFBundleIdentifier` (Bundle ID)

#### ¿Qué es el “Bundle ID”?

Piensa en el Bundle ID como un nombre único o una huella digital para tu aplicación. El `CFBundleIdentifier`, más comúnmente conocido como el **Bundle ID**, es una cadena que identifica de manera única tu aplicación.

Este identificador no es solo un nombre – cumple varios propósitos cruciales.

-   El sistema operativo depende de él para aplicar configuraciones y preferencias específicas a una aplicación.
    
-   Se utiliza para lanzar la aplicación desde otras aplicaciones, etc.
    
-   Juega un papel esencial en la validación de la firma de código de una aplicación, asegurando la integridad y autenticidad de la aplicación.
    
-   El Bundle ID definido en el archivo Info.plist de una aplicación debe coincidir exactamente con el Bundle ID registrado para la aplicación en App Store Connect para una presentación y distribución exitosas.
    

La cadena del Bundle ID debe adherirse a limitaciones específicas de caracteres: solo puede contener caracteres alfanuméricos `A-Z, a-z, 0-9`, guiones `-` y puntos `.`. Es importante notar que el sistema trata a los Bundle IDs como **insensibles a mayúsculas**.

### Cómo Elegir y Formatear Tu Bundle ID (Reverse-DNS y Mejores Prácticas)

Apple recomienda encarecidamente, y es una práctica estándar, usar un formato de DNS invertido (Sistema de Nombres de Dominio) para los Bundle IDs.

Un ejemplo común sería `com.nombredeempresa.aplicacion`. Esta convención aprovecha la unicidad global de los nombres de dominio para ayudar a asegurar la unicidad global de los Bundle IDs.

Si una organización utiliza su único nombre de dominio (por ejemplo, `sravan.gg` se convierte en `gg.sravan`) como el prefijo, y el nombre de la aplicación es único dentro de esa organización, el Bundle ID resultante (por ejemplo, `gg.sravan.miaplicacionimpresionante`) es muy probable que sea único a nivel mundial.

**Nota al margen**: Aunque Xcode no te impedirá crear algo como `com.google.mapping` o algo así incluso si no trabajas en Google, es muy probable que esto sea rechazado cuando pase por el proceso de revisión de la AppStore. Esto se debe a que esto implica la propiedad de ese dominio. Así que, aunque sea técnicamente posible al comenzar, no deberías usar dominios que no te pertenezcan.

La naturaleza fundamental del Bundle ID como un identificador único a nivel de sistema – junto con su inmutabilidad después de que una aplicación se sube por primera vez a App Store Connect – significa que debes tratar su selección con la misma seriedad que elegir un **identificador permanente e inmutable** para una entidad crítica. Un error en el Bundle ID después de este punto puede requerir la creación de un listado de aplicación completamente nuevo en el App Store.

### App IDs en el Portal de Desarrolladores de Apple: Explícito vs. Comodín

#### ¿Cuál Necesitas?

En el Portal de Desarrolladores de Apple, los desarrolladores registran un "App ID". Este App ID es un registro que enlaza una o más aplicaciones de un solo equipo de desarrollo a servicios de aplicación específicos (capacidades) y se utiliza en perfiles de aprovisionamiento. Aprenderemos más sobre esto en las siguientes secciones.

Hay dos tipos principales de App IDs:

-   **App ID Explícito:** Este tipo se utiliza para una sola aplicación. El Bundle ID especificado dentro de un App ID explícito debe coincidir exactamente con el CFBundleIdentifier en el archivo Info.plist de la aplicación (por ejemplo, `com.micompañía.miapp`). Los App IDs explícitos son necesarios para aplicaciones que utilizan muchos de los servicios y capacidades específicos de Apple, como Compras Integradas (que están habilitadas por defecto para App IDs explícitos), Notificaciones Push, iCloud, HealthKit y Registrarse con Apple.
    
-   **App ID de Comodín:** Este tipo se puede utilizar para un conjunto de aplicaciones que comparten un prefijo común de Bundle ID. Contiene un asterisco (\*) como la última parte de su cadena de Bundle ID (por ejemplo, `com.micompañía.*`). Este App ID de comodín coincidiría con cualquier aplicación cuyo Bundle ID comience con `com.micompañía.`, como [`com.micompañía.aplicación`][7] o `com.micompañía.utilidad`. Pero no puedes usar App IDs de comodín si la aplicación requiere servicios o capacidades que mandan un App ID explícito.

Puede pensar en un ID de App explícito como una clave específica diseñada para desbloquear "cerraduras" adicionales (capacidades). Un ID de App comodín, al ser más genérico, podría no encajar en estas cerraduras adicionales. Si elige un ID de App comodín inicialmente por comodidad, pero más tarde necesita una función que requiera un ID de App explícito (como las Notificaciones Push), se verá obligado a crear un nuevo ID de App explícito y reconfigurar los ajustes y perfiles de aprovisionamiento asociados.

Por lo tanto, asegúrese de considerar cuidadosamente las características actuales y futuras de su aplicación al seleccionar un tipo de ID de App. La siguiente tabla proporciona una comparación rápida\*\*.\*\*

Mi recomendación personal es optar siempre por IDs de App explícitos a menos que necesite la flexibilidad de los IDs de App comodín.

| **Característica** | **ID de App Explícito** | **ID de App Comodín** |
| --- | --- | --- |
| **Coincidencia con el ID de Paquete** | Coincidencia exacta (por ejemplo, [com.foo.bar][8]) | Coincidencia de sufijo (por ejemplo, [com.foo][9].\*) |
| **Caso de Uso** | Aplicación única | Conjunto de aplicaciones con un ID base similar |
| **Capacidades** | Soporta todas las capacidades | Limitadas (no puede usar servicios que requieran IDs explícitos) |
| **Unicidad** | Identificador único global para una aplicación específica | Identifica un grupo de aplicaciones |

### Paso a Paso: Cómo Registrar su ID de App en el Apple Developer Portal

Para registrar un ID de App, necesitará una **membresía del Apple Developer Program**. Además, las acciones deben ser realizadas por alguien con un rol de Titular de Cuenta o Administrador.

El proceso es el siguiente:

1.  Inicie sesión en el Apple Developer Portal y navegue a "Certificates, Identifiers & Profiles", luego seleccione "Identifiers" en la barra lateral.
    
2.  Haga clic en el botón "Agregar (+)" para crear un nuevo identificador.
    
    ![Imagen que muestra el botón Agregar](https://cdn.hashnode.com/res/hashnode/image/upload/v1748642247245/a24b527f-e810-4a9c-b75a-dcd3d189b1d1.png)
    
3.  Seleccione "App IDs" de la lista de opciones y haga clic en "Continuar".
    
    ![851f64f3-e608-4fb7-9f31-bd30adb64beb](https://cdn.hashnode.com/res/hashnode/image/upload/v1748642283885/851f64f3-e608-4fb7-9f31-bd30adb64beb.png)
    
4.  Asegúrese de que esté seleccionada la opción "App" (normalmente lo está por defecto) y haga clic en "Continuar".
    
    ![Selección del tipo de App](https://cdn.hashnode.com/res/hashnode/image/upload/v1748642318142/a7b28529-bbe6-4240-953e-836de3e948ac.png)
    
5.  Ingrese una "Descripción" para el ID de App. Esto es para su referencia dentro del portal (por ejemplo, "Mi ID de App muy genial").
    
    ![Pantalla de registro de ID de App](https://cdn.hashnode.com/res/hashnode/image/upload/v1748642392862/a5322cf5-3d75-4b0b-93bf-d46dd1ce8afe.png)
    
6.  Elija el "Tipo de ID de App": "Explícito" o "Comodín".
    
7.  Para un "ID de App Explícito", ingrese el ID de Paquete exacto que se utilizará en su proyecto Xcode (por ejemplo, `com.suempresa.suapp`). Para un "ID de App Comodín", ingrese un sufijo de ID de Paquete que termine con un asterisco (por ejemplo, `com.suempresa.*`).
    
8.  Desplácese hacia abajo hasta la sección "Capacidades" y seleccione las casillas de verificación para cualquier servicio de aplicación que su aplicación vaya a usar. Algunas capacidades podrían requerir configuración adicional en esta etapa o más adelante. (Nuevamente, cubriremos las capacidades de aplicación con más detalle más adelante).
    
9.  Haga clic en "Continuar", revise todos los detalles cuidadosamente, y luego haga clic en "Registrar" para finalizar la creación del ID de App.
    
    ![Confirme la pantalla del ID de App](https://cdn.hashnode.com/res/hashnode/image/upload/v1748642432661/2052a435-ed0e-404a-9178-7d6541fc9421.png)
    

### Cómo Gestionar su ID de Paquete: Xcode, App Store Connect, y el Punto de No Retorno

El ID de Paquete especificado en un proyecto Xcode es crítico. Para configurarlo:

1.  En el navegador de proyectos de Xcode, seleccione el objetivo para su aplicación.
    
2.  Abra la pestaña de "Signing & Capabilities".
    
3.  Expanda la sección "Signing".
    
4.  En el campo de texto "Bundle Identifier", ingrese el ID de Paquete. Este identificador debe coincidir exactamente con el ID de Paquete asociado con un ID de App explícito registrado en el Developer Portal, o ajustarse al patrón de un ID de App comodín si es aplicable.
    

Es importante entender la diferencia entre el "ID de Paquete" (o `CFBundleIdentifier`) en el proyecto Xcode y el "ID de App" registrado en el Developer Portal. El "ID de App" en el portal de desarrolladores es una entidad que _contiene_ una cadena "ID de Paquete" (ya sea explícita o comodín). La cadena en el campo "Bundle Identifier" de su proyecto Xcode debe coincidir con esta cadena contenida.

Cuando se prepare para la distribución mediante TestFlight o la App Store, necesitará crear un registro de aplicación en App Store Connect. El ID de Paquete que ingrese durante la creación de este registro de aplicación debe coincidir exactamente con el ID de Paquete en el proyecto Xcode.

#### Una Advertencia Crítica: Inmutabilidad Después de la Primera Carga

Este es un punto de no retorno: Una vez que cargue una compilación de una aplicación a App Store Connect, el ID de Paquete para ese registro de aplicación **no se puede cambiar**.

Además, después de una carga, no puede eliminar el ID de App explícito asociado registrado en el Developer Portal. Esta inmutabilidad destaca la necesidad de una _planificación y verificación cuidadosa_ del ID de Paquete antes de que ocurran las cargas.

Si prefiere la gestión programática o la automatización, el API de App Store Connect proporciona recursos para gestionar IDs de Paquete. Puede [leer más sobre eso aquí][10].

### ¿Qué son los Certificados?

Los certificados son credenciales digitales que verifican la **identidad de un desarrollador** – es decir, tú – ante Apple y, por extensión, ante los usuarios de la aplicación.

Son fundamentales para el proceso de firma de código de Apple, que es obligatorio para todas las aplicaciones para asegurar que provienen de una **fuente conocida** y no han sido manipuladas desde que fueron firmadas.

### ¿Qué es la Firma de Código? Asegurando Confianza e Integridad

La firma de código es cuando tú, como desarrollador, firmas la aplicación con tu firma. Es el proceso de adjuntar una firma digital al código de una aplicación. Esta firma asegura a los usuarios dos cosas clave:

1.  **Autenticidad:** La aplicación fue creada por un desarrollador identificado por Apple (un individuo o un equipo).
    
2.  **Integridad:** El código de la aplicación no ha sido alterado o corrompido desde que fue firmado por el desarrollador.
    

El proceso involucra el uso de una clave privada, mantenida de forma segura por el desarrollador (tú), para crear la firma. La clave pública correspondiente, embebida dentro del certificado del desarrollador (emitido por Apple), es utilizada por el sistema para verificar esta firma.

Este sistema de verificación de identidad y comprobación de integridad es crucial. El certificado del desarrollador, emitido por Apple como una Autoridad Certificadora (CA), avala su identidad. El proceso de firma de código, utilizando hashing y cifrado, asegura que cualquier modificación en el código después de la firma invalidaría la firma.

Para los desarrolladores de aplicaciones, los beneficios de la firma de código incluyen eliminar advertencias en macOS para aplicaciones distribuidas fuera de la Mac App Store, proporcionando una experiencia de usuario más fluida. Es un requisito obligatorio para listar aplicaciones en cualquiera de las tiendas de aplicaciones de Apple. También mejora la seguridad de la aplicación al actuar como un elemento disuasorio contra manipulaciones malintencionadas.

### Tipos de Certificados: Desarrollo, Distribución y ID de Desarrollador

Apple proporciona diferentes tipos de certificados para varias etapas del desarrollo y métodos de distribución. Cada uno de ellos tiene un papel distinto a lo largo del proceso de desarrollo de la aplicación.

#### 1\. Certificados de Desarrollo (por ejemplo, "Apple Development"):

-   **Propósito:** Usados para firmar aplicaciones durante la fase de desarrollo, permitiéndoles ser instaladas y ejecutadas en un número limitado de _dispositivos de prueba registrados_ y simuladores para depuración y pruebas.
    
-   **Identifica:** Normalmente identifica a un desarrollador individual a través de su ID de desarrollador.
    
-   **Usado con:** Perfiles de aprovisionamiento de desarrollo – más sobre esto más adelante.
    

#### 2\. Certificados de Distribución (por ejemplo, "Apple Distribution"):

-   **Propósito:** Usados para firmar aplicaciones destinadas a la distribución, ya sea mediante métodos Ad Hoc (a un conjunto limitado de _probadores registrados_) o para su envío a la App Store.
    
-   **Identifica:** Al equipo de desarrollo a través del identificador del equipo.
    
-   **Casos de Uso:**
    
    1.  **App Store:** Para firmar la versión final de una aplicación que será subida a App Store Connect para pruebas beta en TestFlight o lanzamiento en la App Store (iOS, macOS, tvOS, watchOS). Estos se utilizan con perfiles de aprovisionamiento de la App Store – más sobre esto más adelante.
        
    2.  **Ad Hoc:** Para firmar aplicaciones que serán distribuidas a un _número limitado de dispositivos de prueba registrados fuera de la App Store o TestFlight_. Estos se utilizan con el perfil de aprovisionamiento Ad Hoc. Más sobre esto más adelante.
        

#### 3\. Certificados de ID de Desarrollador (para aplicaciones Mac distribuidas fuera de la Mac App Store):

-   **Propósito:** Específicamente para desarrolladores de macOS que deseen distribuir sus aplicaciones directamente a los usuarios (por ejemplo, desde su propio sitio web) en lugar de a través de la Mac App Store. Gatekeeper en macOS reconoce aplicaciones firmadas con un certificado de ID de Desarrollador, asegurando a los usuarios que la aplicación es de un desarrollador conocido y no ha sido manipulada.
    
-   **Tipos:**
    
    1.  **Aplicación ID de Desarrollador:** Usado para firmar el paquete de aplicación Mac (.app) propiamente dicho.
        
    2.  **Instalador ID de Desarrollador:** Usado para firmar un Paquete de Instalador de Mac (.pkg) que contiene la aplicación firmada.
        
    3.  **Límite:** Los desarrolladores pueden crear hasta cinco certificados de Aplicación ID de Desarrollador y hasta cinco certificados de Instalador ID de Desarrollador.
        

La siguiente tabla resume estos tipos de certificados:

| **Tipo de Certificado** | **Emitido A** | **Propósito Principal** | **Usado Con Tipo de Perfil de Aprovisionamiento** | **Casos de Uso Clave** |
| --- | --- | --- | --- | --- |
| Apple Development | ID de Desarrollador Individual | Desarrollar y depurar en dispositivos registrados | Desarrollo | Compilaciones de Xcode para pruebas locales, ejecución en dispositivos de prueba personales/equipo. |
| Apple Distribution | ID de Equipo | Enviar aplicación a App Store / distribución Ad Hoc | App Store, Ad Hoc | Compilaciones finales para TestFlight, envío a App Store, o compilaciones Ad Hoc para QA/cliente. |
| Aplicación ID de Desarrollador | ID de Equipo | Firmar aplicación Mac para distribución fuera de Mac App Store | **Perfil de Aprovisionamiento ID de Desarrollador** si la aplicación utiliza capacidades específicas (ej., Notificaciones Push, Dominios Asociados). | Distribuyendo software Mac directamente a los usuarios (por ejemplo, desde el sitio web). |
| Instalador ID de Desarrollador | ID de Equipo | Firmar Instalador Pkg de Mac para distribución fuera de Mac App Store | N/A. (La aplicación dentro del paquete puede necesitar un perfil). | Distribuyendo software Mac en un instalador .pkg directamente a los usuarios. |
| APNs / Claves de Servicio (.p8) | ID de Equipo | Comunicación segura con servicios específicos de Apple | N/A para firma de aplicación | Notificaciones Push, MusicKit, DeviceCheck, etc. (autenticación basada en tokens) |

### Cómo Crear un Certificado de Apple – Un Resumen

Aquí tienes un esquema general de cómo crear un Certificado de Apple:

-   Genera una Solicitud de Firma de Certificado (CSR) en tu Mac. (Sí, necesitas un Mac.)
    
-   Sube esta CSR en AppStoreConnect como parte de la creación del certificado.
    
-   Descarga el certificado desde AppStoreConnect una vez que ha sido emitido.
    
-   Instala el certificado en tu Llavero.
    

Ahora pasaremos por cada paso con más detalle. Esta parte es muy importante, ya que debemos guardar algunos de los archivos generados localmente o perderemos la capacidad de transferir estos certificados. Esto significaría revocar y volver a emitir certificados (lo he hecho más veces de las que me gustaría admitir).

#### Cómo Crear una Solicitud de Firma de Certificado (CSR)

Una Solicitud de Firma de Certificado (CSR) es un nombre elegante para un bloque de texto encriptado que contiene información sobre quién está solicitando el certificado (como tu nombre y la clave pública). Estas son ampliamente utilizadas en el mundo de la criptografía.

Para nuestros propósitos, generarás una CSR en tu Mac y luego la enviarás a Apple para solicitar un certificado digital. El proceso de generación de la CSR también crea un nuevo par de claves pública/privada en el Mac – la clave privada se almacena en Acceso a Llaveros y se usa para la firma final del código.

Para crear una CSR usando Acceso a Llaveros en macOS:

1.  Inicia Acceso a Llaveros (puedes encontrarlo en `/Aplicaciones/Utilidades/` o usar spotlight).
    
2.  Desde la barra de menú, elige Acceso a Llaveros > Asistente de Certificados > Solicitar un Certificado a una Autoridad de Certificación…. (Aquí, la Autoridad de Certificación sería Apple).
    
3.  En el diálogo, ingresa tu dirección de correo electrónico y un nombre común para la clave (por ejemplo, "Mi Clave Mac" o "Clave Dev \[Tu Nombre\]"). Este nombre es principalmente para tu identificación en el Llaveros.
    
4.  Deja el campo "Correo Electrónico CA" vacío – no lo enviaremos por correo electrónico a la Autoridad de Certificación (Apple).
    
5.  Selecciona la opción "Guardado en disco" y haz clic en "Continuar".
    
6.  Guarda el archivo, que tendrá una extensión .certSigningRequest. La clave privada correspondiente ahora se almacena en el llavero de inicio de sesión. **Esta clave privada es irremplazable por Apple y debes almacenarla tú mismo.**
    

![Diálogo para la creación de la CSR](https://cdn.hashnode.com/res/hashnode/image/upload/v1748288861336/50f20da3-69d9-476d-97e7-331f9b9b5c76.png)

#### Cómo Generar y Descargar Tus Certificados de Apple

Una vez que has creado una CSR, puedes solicitar un certificado en el Portal de Desarrolladores de Apple:

1.  Navega a "Certificados, Identificadores y Perfiles" y selecciona "Certificados".
    
2.  Haz clic en el botón de añadir (+).
    
3.  Elige el tipo de certificado deseado.
    
4.  Sigue las indicaciones y, cuando se te pida, sube el archivo .certSigningRequest generado anteriormente.
    
5.  Después de que Apple procese la solicitud, el certificado estará disponible para descargar como un archivo .cer.
    
    ![Indicación para subir la CSR tras seleccionar el tipo de certificado](https://cdn.hashnode.com/res/hashnode/image/upload/v1748289386364/78f46b4e-b232-4484-98c2-dcb75120fd61.png)
    

Para instalar el certificado, haz doble clic en el archivo .cer descargado. Será agregado a la aplicación Acceso a Llaveros – generalmente apareciendo en el llavero "login" bajo la categoría "Mis Certificados", donde debería estar emparejado con la clave privada generada durante el proceso de generación de la CSR anterior.

Puedes ver mi certificado y clave privada en la imagen de abajo como referencia.

![Un ejemplo de cómo se verá tu certificado y la clave privada en el llavero](https://cdn.hashnode.com/res/hashnode/image/upload/v1748289120657/38f711dd-887a-4fae-844d-e389c65234cf.png)

Para resumir, la CSR certifica que generaste la solicitud desde tu mac. El certificado certifica que Apple (en este caso, un intermediario como la "Autoridad de Certificación de Relaciones de Desarrollo de Apple en Todo el Mundo") confirma que verificaron la CSR y que eres realmente tú quien firmará con el archivo de certificado (`.cer`).

Esto se aplica al hecho de que solo tú tienes acceso a la clave privada – si la pierdes, no puedes usar este certificado más.

Así que, si usas este certificado (y la clave privada) para firmar una aplicación, la tienda de aplicaciones / sistema operativo sabrá que eres tú con seguridad, ya que Apple lo confirmó.

### Cómo Almacenar Tus Claves: ¿Qué son los Archivos .p12?

Como mencioné en la sección anterior, para firmar el código de una aplicación necesitas tu certificado (que contiene la clave pública) y la correspondiente clave privada. Esto se crea junto con el CSR, y puedes encontrarlo en la aplicación `Acceso a Llaveros`.

Llamamos a la combinación del certificado y la clave privada una identidad digital. Esto prueba tu identidad cuando firmas una aplicación con ellos.

#### Archivos .p12 (Intercambio de Información Personal):

Un archivo .p12 es un formato de archivo protegido con contraseña que se usa para empaquetar un certificado junto con su clave privada. Sus principales propósitos son:

-   Hacer una copia de seguridad de la identidad digital en caso de que pierdas el acceso a tu Mac.
    
-   Transferir la identidad digital a otro Mac (por ejemplo, para otro miembro del equipo o una nueva máquina de desarrollo).
    
-   Proveer la identidad a sistemas de construcción automatizados o servicios de construcción de terceros.
    


Genial. Entonces, ¿cómo se crea uno?

#### Para exportar un archivo .p12 desde Acceso a Llaveros:

1.  Abre Acceso a Llaveros, selecciona el llavero "inicio de sesión" y ve a la categoría "Mis Certificados".
    
2.  Localiza el certificado deseado. Debe tener un triángulo de divulgación expandible que indique una clave privada asociada (mira la imagen de mi certificado arriba).
    
3.  Selecciona _tanto_ el certificado como su clave privada (o haz clic derecho en el certificado y elige "Exportar").
    
4.  Haz clic derecho y elige "Exportar \[X\] elementos...".
    
5.  En el diálogo de guardado, elige el formato de archivo "Intercambio de Información Personal (.p12)".
    
6.  Asigna una contraseña fuerte para proteger el archivo .p12. Esta contraseña será necesaria al importar el archivo en otro lugar. Es crucial para la seguridad.
    
7.  Guarda el archivo en una ubicación segura.
    
    ![Imagen de exportación de mi certificado y clave privada como un archivo .p12](https://cdn.hashnode.com/res/hashnode/image/upload/v1748297124625/f9d2cfe0-3538-405e-8fb0-af08276c4326.png)
    

## **Puente entre todo: Perfiles de Aprovisionamiento**

Los perfiles de aprovisionamiento son el enlace final entre un ID de App, certificados de desarrollador y, en algunos casos, una lista de dispositivos de prueba específicos. Actúan como un permiso, autorizando que una app firmada con un certificado particular se instale y ejecute ya sea en dispositivos designados o que se envíe a la App Store.

### ¿Qué es exactamente un perfil de aprovisionamiento?

Un perfil de aprovisionamiento es un archivo `.mobileprovision` (para iOS / VisionOS) o `.provisionprofile` (para macOS) que contiene varias piezas clave de información:

-   **El ID de la App:** Especifica a qué aplicación (o conjunto de aplicaciones, si se utiliza un ID de App genérico) se aplica el perfil.
    
-   **Certificados:** Contiene uno o más certificados de desarrollador o distribución que se pueden usar para firmar la app.
    
-   **UDIDs de dispositivos (para Desarrollo y Ad Hoc):** Para perfiles destinados a pruebas en dispositivos específicos, incluye una lista de los Identificadores Únicos de Dispositivos (UDIDs) de esos dispositivos autorizados – más sobre dispositivos en la próxima sección.
    
-   **Entitlements:** Una lista de servicios o capacidades de la app (como Notificaciones Push, iCloud, Grupos de Apps) que la app tiene permitido usar. Estos se derivan de las capacidades habilitadas para el _ID de App asociado_.
    

Puedes abrir el archivo usando `vim` o cualquier editor para ver partes del contenido que incluyen el ID de App, sistemas operativos, certificados, etc.

El sistema operativo verifica el perfil de aprovisionamiento al iniciar la app para asegurarse de que la app está autorizada para ejecutarse en el dispositivo actual y usar los servicios solicitados. Si falta el perfil, es inválido o no coincide con la firma de la app o el dispositivo, la app no se iniciará.

Son diferentes de los certificados, porque los certificados están ligados a ti como desarrollador. Pero los perfiles de aprovisionamiento están para una app específica – con capacidades específicas de un desarrollador específico y tal vez en dispositivos específicos.

Si alguna de estas cosas cambia (digamos que agregas una capacidad o tu certificado caduca, por ejemplo), necesitarás generar el perfil de aprovisionamiento nuevamente. Estos son los archivos con los que trabajarás más de todos los mencionados, y cualquier cambio puede hacer que tu perfil se invalide.

### Tipos de Perfiles de Aprovisionamiento: Desarrollo, Ad Hoc, App Store, (y Empresarial)

### **Tipos de Perfiles de Aprovisionamiento: Desarrollo, Ad Hoc, App Store, (y Empresarial)**

Al igual que los certificados, tenemos varios tipos de perfiles de aprovisionamiento. Similar a los certificados, puede haber perfiles de aprovisionamiento de desarrollo y distribución.

Dado que también llevamos un registro de los dispositivos en los que se supone que debe ejecutarse un perfil, tenemos varios tipos de perfiles de distribución basados en los dispositivos en los que debería ejecutarse.

También tenemos perfiles especiales como "Empresarial" que agregarán capacidades adicionales (como acceso a la cámara principal en el Vision Pro) pero restringirán tus métodos de distribución de apps solo a empresas.

Vamos a repasar cada uno de estos tipos ahora. Siéntete libre de saltar al que estás buscando.

| **Tipo de Perfil** | **Propósito** | **Tipo(s) de Certificado Requerido** | **¿Registro de Dispositivos Requerido?** | **Método de Distribución** |
| --- | --- | --- | --- | --- |
| **Desarrollo** | Instalar y depurar en dispositivos registrados durante el desarrollo (se necesita Xcode para instalar). | Desarrollo | Sí | Ejecución con Xcode, despliegue local en dispositivos. |
| **Ad Hoc** | Distribuir a un número limitado de dispositivos de prueba registrados (no se necesita Xcode). | Distribución | Sí | Instalación manual (por ejemplo, a través de enlace, correo electrónico, MDM) para probadores. |
| **App Store Connect** | Enviar la app a App Store Connect para su lanzamiento en TestFlight o App Store. | Distribución | No | Subida a App Store Connect. |
| **Empresarial** | Distribuir apps propias a empleados dentro de una organización. | Empresarial (Distribución) | No (sujeto a los términos del programa) | Distribución interna (por ejemplo, portal privado, MDM). |
| **Developer ID** | Permite que una app de macOS distribuida fuera de la App Store utilice funciones avanzadas | Developer ID | No | Fuera de la Mac App Store (por ejemplo, una página web, USB, MDM) |

#### **Perfil de Aprovisionamiento de Desarrollo:**

-   **Permite** que una app se instale y depure en dispositivos específicos registrados en la cuenta del desarrollador durante la fase activa de desarrollo. Más sobre el registro de dispositivos más adelante.
    
-   **Contiene** un ID de App, uno o más certificados de desarrollo, y una lista de UDIDs de dispositivos registrados.
    
-   **Creado** manualmente en el Portal de Desarrolladores de Apple o generado automáticamente por Xcode si `Manejar firma automáticamente` está habilitado.


```markdown
-   **Permite** la distribución de una aplicación a un número limitado de dispositivos de prueba registrados **sin** requerir Xcode para la instalación. Esto es ideal para distribuir versiones a equipos de control de calidad, probadores beta o clientes para recibir comentarios.
    
-   **Contiene** un ID de aplicación (a menudo un ID de aplicación explícito o uno gestionado por Xcode como `XC Wildcard` o `XC`), un único certificado de distribución y una lista de UDIDs de dispositivos registrados.
    
-   **Se crea** manualmente en el Portal del Desarrollador o gestionado por la firma automática de Xcode.
    

#### **Perfil de Aprovisionamiento de App Store Connect:**

-   **Requerido** para firmar una aplicación para su envío a App Store Connect. Este es el camino para distribuir aplicaciones a través de TestFlight para pruebas beta más amplias y para el lanzamiento oficial en el App Store.
    
-   **Contiene** un ID de aplicación explícito (o un ID de aplicación que coincida con el ID de paquete de la aplicación, incluidos los IDs de aplicación gestionados por Xcode), y un único certificado de distribución. _Los UDIDs de dispositivos no se incluyen en este tipo de perfil ya que está destinado a una distribución más amplia._
    
-   **Se crea** manualmente en el Portal del Desarrollador o gestionado por la firma automática de Xcode.
    

#### **Perfil de Aprovisionamiento Empresarial:**

-   Exclusivamente para miembros del **Programa Empresarial de Desarrolladores de Apple**. Permite a los desarrolladores de estas organizaciones distribuir aplicaciones internas y propietarias directamente a sus empleados, eludiendo el App Store público.
    
-   Nota: Este programa tiene criterios de inscripción estrictos y es exclusivamente para distribución interna dentro de la organización inscrita – estas aplicaciones no pueden enviarse al App Store.
    

#### **Perfil de Aprovisionamiento de ID de Desarrollador:**

-   **Requerido** para utilizar ciertos servicios de Apple o capacidades avanzadas como Notificaciones Push, CloudKit, Iniciar sesión con Apple o servicios específicos de iCloud.
    
-   **Contiene** un ID de aplicación, un certificado de distribución de ID de Desarrollador, las autorizaciones concedidas a la aplicación.
    
-   **Se crea** manualmente en el Portal del Desarrollador – no se añadirá automáticamente con la firma automática de Xcode.
    

### Cómo Crear y Gestionar Perfiles de Aprovisionamiento

Crear y gestionar perfiles de aprovisionamiento generalmente requiere un rol de Titular de Cuenta o Administrador en el Programa de Desarrolladores de Apple. También necesitas un ID de aplicación configurado, el o los certificados apropiados, y en el caso de perfiles de Desarrollo o Ad Hoc, una lista de UDIDs de dispositivos registrados.

Si eres un desarrollador nuevo, mi recomendación es que leas este artículo por completo, y luego regreses a esta sección una vez que tengas tus dispositivos configurados.

Pasos generales para la creación manual en el Portal del Desarrollador:

1.  Navega a "Certificados, Identificadores y Perfiles" y selecciona "Perfiles".
    
2.  Haz clic en el botón de agregar (+).
    
3.  Selecciona el tipo de perfil de aprovisionamiento a crear (por ejemplo, "Desarrollo de App iOS," "Ad Hoc," "App Store").
    
4.  Elige el ID de aplicación que estás enfocando desde la lista desplegable.
    
5.  Selecciona el o los certificados a incluir en el perfil. Los perfiles de Desarrollo pueden incluir múltiples certificados de desarrollo – así, puedes incluir todos los certificados de los miembros del equipo aquí. Los perfiles Ad Hoc y de App Store incluyen un único certificado de distribución.
    
6.  Si estás creando un perfil de Desarrollo o Ad Hoc, selecciona los dispositivos registrados a incluir.
    
7.  Proporciona un nombre para el perfil de aprovisionamiento (esto es para identificación en el portal y Xcode).
    
8.  Haz clic en "Generar" y luego "Descargar" el archivo `.mobileprovision` o `.provisionprofile`.
    

Necesitas hacer disponibles los perfiles descargados para Xcode. A menudo puedes hacerlo haciendo doble clic en el archivo descargado o actualizando perfiles dentro de la configuración de la cuenta de Xcode (Preferencias > Cuentas).

Realmente me gusta la función de Xcode "Gestionar firma automáticamente" y esta puede simplificar mucho la gestión de perfiles. Crea y actualiza perfiles según sea necesario. Pero, entender el proceso manual es crucial para la resolución de problemas porque cuando las cosas salen mal, es más sencillo depurar el problema con este conocimiento.

Los perfiles de aprovisionamiento se volverán inválidos y requerirán regeneración si:

-   Se cambian las capacidades del ID de aplicación asociado – digamos que agregaste una nueva capacidad.
    
-   Un certificado incluido expira o es revocado.
    
-   Para perfiles de Desarrollo/Ad Hoc, si los dispositivos se agregan o eliminan de la lista registrada de una manera que afecta al conjunto de dispositivos del perfil, o si se alcanza la fecha de expiración del propio perfil. Cuando ocurren tales cambios, debes editar el perfil (si es posible) o eliminarlo y recrearlo en el Portal del Desarrollador, luego volver a descargarlo e instalarlo nuevamente. Aunque esto pueda parecer un paso complicado, es sencillo si lo haces un par de veces.
    

## **Gestión de Dispositivos — Compilaciones de Desarrollo y Ad Hoc**

Para probar aplicaciones en hardware físico de Apple fuera de TestFlight o App Store, necesitarás registrar los Identificadores Únicos del Dispositivo (UDIDs) de tus dispositivos de prueba con tu cuenta de Desarrollador de Apple. Este registro es un paso necesario para crear perfiles de aprovisionamiento de Desarrollo y Ad Hoc.

### Por Qué Necesitas Registrar Dispositivos de Prueba

Los perfiles de aprovisionamiento de Desarrollo y Ad Hoc están específicamente vinculados a una lista de dispositivos registrados. Una aplicación firmada con este perfil puede instalarse directamente sin pasar por el proceso de App Store. Esto significa que necesitas registrar los dispositivos en los que planeas desarrollar. Esto restringe a actores de mala fe de lanzar aplicaciones ampliamente sin la supervisión del desarrollador y de App Store.
```

Vamos a repasar los pasos para hacerlo.

### Cómo encontrar el UDID de tu dispositivo (Identificador Único de Dispositivo)

Un UDID es una cadena hexadecimal única de 40 caracteres (para dispositivos más antiguos) o una cadena de 25 caracteres (formato XXXXXXXX-XXXXXXXXXXXXXXXX) que identifica de manera única a un iPhone, iPad, Apple Watch, Apple TV, Vision Pro o Mac específicos.

Hay varias maneras de encontrar el UDID de un dispositivo:

-   **Xcode:** Conecta el dispositivo a una Mac con Xcode ejecutándose. Abre Xcode y navega a Ventana > Dispositivos y Simuladores. Selecciona el dispositivo conectado de la lista de la izquierda. El UDID se mostrará como el "Identificador" en el panel de información del dispositivo.
    
-   **Finder (macOS Catalina y posteriores):** Conecta el dispositivo iOS o iPadOS a una Mac. Abre Finder y selecciona el dispositivo de la barra lateral en "Ubicaciones". El UDID puede mostrarse directamente, o puede ser necesario hacer clic en la línea de texto debajo del nombre del dispositivo (que muestra el modelo, almacenamiento y versión del SO) para mostrar el UDID.
    
-   **iTunes (versiones anteriores de macOS):** Para Macs con macOS Mojave o anterior, conecta el dispositivo y abre iTunes. Selecciona el ícono del dispositivo cuando aparezca. En la pestaña "Resumen", haz clic en el campo "Número de serie"; esto cambiará para mostrar el UDID.
    
-   **Macs con Apple Silicon:** Al registrar un Mac con Apple Silicon, es importante buscar el "UDID de Aprovisionamiento", que se puede encontrar en Información del Sistema bajo Hardware > UDID de Aprovisionamiento.
    
-   **Otras formas:** Hay algunos sitios web que instalarán un perfil en tu dispositivo para obtener el UUID, así que como último recurso absoluto, puedes hacerlo. _Pero recomiendo encarecidamente hacerlo de una de las formas oficiales para evitar posibles problemas._
    

### Cómo registrar dispositivos en el Portal de Desarrolladores de Apple

El registro de dispositivos se gestiona a través de la sección "Certificados, Identificadores y Perfiles" del Portal de Desarrolladores de Apple (developer.apple.com) y generalmente requiere un rol de Titular de Cuenta o Administrador.

Para registrar manualmente un solo dispositivo:

1.  Inicia sesión en el Portal de Desarrolladores de Apple y navega a "Certificados, Identificadores y Perfiles", luego selecciona "Dispositivos" de la barra lateral.
    
2.  Haz clic en el botón de añadir (+) para registrar un nuevo dispositivo.
    
3.  Selecciona la plataforma correcta para el dispositivo (por ejemplo, iOS, macOS, tvOS, watchOS).
    
4.  Introduce un "Nombre del Dispositivo" descriptivo (esto es para tu referencia, por ejemplo, "iPhone 11 Pro de Sravan") y el UDID del dispositivo obtenido en el paso anterior.
    
5.  Haz clic en "Continuar", revisa la información para asegurarte de que todo esté correcto y luego haz clic en "Registrar".
    

Para registrar varios dispositivos, el portal admite cargar un archivo de texto especialmente formateado (un archivo .txt o .deviceids) que contiene nombres de dispositivos y UDIDs.

Si la "Administración automática de firmas" está habilitada en Xcode, Xcode puede registrar automáticamente un dispositivo conectado cuando está seleccionado como un objetivo de construcción. Esta es la forma en que gestioné todos mis proyectos y dispositivos personales. Por otro lado, la carga de archivos fue realmente útil en mi lugar de trabajo para llevar un registro de todos los dispositivos y añadirlos de una vez.

### Entendiendo los límites de dispositivos y los reinicios anuales

El Programa de Desarrolladores de Apple impone límites en la cantidad de dispositivos que se pueden registrar para pruebas:

-   **Límite anual:** Cada año de membresía, un equipo de desarrollo puede registrar hasta 100 dispositivos por cada familia de productos (iPhone, iPad, Apple Watch, Apple TV, Apple Vision Pro, Mac). Si eres un equipo grande, esto puede posiblemente causar un cuello de botella. Cuando nos encontramos con este problema, creamos un nuevo equipo de desarrollo que podría dividirse para que no tuviera demasiada interdependencia. No hay otra forma que yo conozca, aparte de pedir a Apple y apelarles.
    
-   **Deshabilitar dispositivos:** Mientras que un dispositivo puede ser deshabilitado en el portal durante el año de membresía, hacerlo **no libera su espacio ni aumenta el número de dispositivos disponibles para ese año**. Esta parte es frustrante, pero creo que es la única forma en que pueden imponer el límite de 100 dispositivos para evitar que las personas intercambien dispositivos. Deberían simplemente proporcionar un camino para aumentar el límite, realmente. Sin embargo, deshabilitar un dispositivo invalidará cualquier perfil de aprovisionamiento que lo incluya, lo que requerirá que esos perfiles sean regenerados.
    
-   **Reinicio de lista de dispositivos (Inicio de un nuevo año de membresía):** Al comienzo de un nuevo año de membresía, los Titulares de Cuenta, Administradores y Gestores de Aplicaciones tienen una opción única cuando inician sesión por primera vez en "Certificados, Identificadores y Perfiles" para eliminar dispositivos de su lista. Esto les permite "restablecer" su conteo de dispositivos disponibles a 100 por cada familia de productos. Puedes optar por eliminar dispositivos específicos o todos los dispositivos registrados. **Esta es tu única oportunidad al año para eliminar completamente dispositivos no utilizados y liberar espacios para nuevos dispositivos.**
    
-   **Expiración de membresía:** Si la membresía del programa de desarrolladores está a punto de expirar y no se planea renovar, el Titular de la Cuenta tendrá la opción, comenzando 30 días antes de la expiración, de descargar una copia de su lista de dispositivos registrados. También pueden optar por tener todos los dispositivos eliminados de la cuenta inmediatamente al vencer la membresía. Si no se toma ninguna acción, los dispositivos generalmente se eliminan automáticamente 180 días después de la expiración de la membresía.
    


Capacidades de la Aplicación (o Servicios de Aplicación) son características proporcionadas por Apple que nosotros (como desarrolladores) podemos integrar en nuestras aplicaciones para extender la funcionalidad y proporcionar experiencias de usuario más ricas. Ejemplos incluyen almacenamiento en iCloud, Notificaciones Push, Iniciar sesión con Apple, Apple Pay e integración con HealthKit. Habilitar estas capacidades a menudo requiere una configuración explícita para el ID de la aplicación en el Apple Developer Portal y dentro del proyecto de Xcode.

### Por Qué Deberías Usar Capacidades

Hacer uso completo de estas capacidades de la aplicación puede diferenciar tu aplicación de otras de una manera muy notable. Puedes usar la integración con Apple Wallet si quieres que los usuarios escaneen una tarjeta de membresía. Puedes usar sugerencias de diario si deseas incitarles a escribir. Puedes usar el almacenamiento en iCloud para profundizar en la sincronización entre dispositivos.

Cuando habilitas una capacidad para un ID de aplicación, da como resultado que se añadan derechos específicos al perfil de aprovisionamiento de la aplicación. Estos derechos son permisos que el sistema operativo verifica en tiempo de ejecución para asegurar que la aplicación está autorizada para usar el servicio solicitado.

### Cómo Configurar Capacidades para tu ID de Aplicación (Apple Developer Portal)

Habilitar y configurar capacidades generalmente lo hace un Titular de Cuenta o Administrador en el Apple Developer Portal (developer.apple.com).

1. Navega a "Certificates, Identifiers & Profiles" y selecciona "Identifiers".
    
2. Elige el ID de aplicación para el cual se necesitan configurar capacidades.
    
3. En la configuración del ID de aplicación, habrá una pestaña "Capabilities". Selecciona las casillas de verificación para las capacidades que la aplicación requiere.
    
4. Muchas capacidades requieren pasos adicionales de configuración. Para estas, generalmente aparecerá un botón "Configure" o "Edit" junto a la capacidad una vez seleccionada. Ejemplos incluyen:
    

- **App Groups:** Requiere crear o seleccionar un identificador de grupo de aplicaciones para permitir compartir datos entre una aplicación principal y sus extensiones, o entre diferentes aplicaciones del mismo desarrollador.
    
- **Apple Pay:** Requiere asociar uno o más IDs de comerciante con el ID de aplicación.
    
- **iCloud:** Puede requerir elegir compatibilidad de versión de Xcode y crear o asignar contenedores de iCloud para almacenamiento de clave-valor o de documentos.
    
- **Sign in with Apple:** Puede requerir configurar el ID de aplicación como una aplicación principal o agruparlo con un ID de aplicación principal existente, y opcionalmente proporcionar una URL de punto de notificación servidor-a-servidor.
    

5. Después de configurar todas las capacidades seleccionadas, haz clic en "Save". Puede aparecer un cuadro de diálogo de advertencia, que necesita confirmación para finalizar los cambios.

**Habilitar una capacidad en el Developer Portal es solo una parte del proceso.** También necesitarás agregarla y configurarla dentro del objetivo de la aplicación en el proyecto de Xcode, bajo la pestaña "Signing & Capabilities".

![Mostrando la pantalla de Signing & Capabilities en Xcode](https://cdn.hashnode.com/res/hashnode/image/upload/v1748480139418/6a4007b3-01bd-484a-865c-8c5e728e15e0.png)

![Captura de pantalla mostrando el selector de Capabilities en Xcode](https://cdn.hashnode.com/res/hashnode/image/upload/v1748480260906/e0dcec33-24ce-448b-91be-b79f5638e6fc.png)

![Captura de pantalla de Xcode mostrando tres capacidades.](https://cdn.hashnode.com/res/hashnode/image/upload/v1748480340624/ac56896a-0fb0-4cb0-a3fc-c894a255794a.png)

1. Navega a la configuración del proyecto y selecciona "Signing & Capabilities".
    
2. Presiona el botón “+ Capability” para seleccionar la capacidad.
    
3. Una vez seleccionada, la capacidad debería aparecer en el panel. Dependiendo de la capacidad, es posible que desees configurarla más.
    

Este paso en Xcode integra los frameworks necesarios, añade archivos de derechos al proyecto y ajusta la configuración de compilación.

### Cómo la Habilitación de Capacidades Afecta a tus Perfiles de Aprovisionamiento

Los cambios en las capacidades habilitadas de un ID de aplicación tienen un impacto directo y significativo en sus perfiles de aprovisionamiento asociados.

- **Invalidación:** Cuando se habilita, deshabilita o modifica la configuración de una capacidad para un ID de aplicación, **todos los perfiles de aprovisionamiento existentes que usan ese ID de aplicación inmediatamente se invalidan**.
    
- **Regeneración Requerida:** Estos perfiles de aprovisionamiento invalidados deben regenerarse (ya sea editándolos y guardándolos de nuevo en el Developer Portal o dejando que el firmado automático de Xcode lo maneje). Los perfiles regenerados incluirán el conjunto actualizado de derechos correspondientes a las capacidades recién configuradas.
    
- **Impacto en la Plataforma:** Habilitar una capacidad para un ID de aplicación que se utiliza en múltiples plataformas (por ejemplo, una aplicación iOS y su compañero watchOS) afectará los perfiles de aprovisionamiento para todas las plataformas elegibles que usan ese ID de aplicación.
    

Esto es algo a tener en cuenta. Especialmente cuando se trata de perfiles de distribución ya que esos suelen ser gestionados manualmente.

## **Conclusión**

Aunque todo esto puede parecer abrumador, el proceso automático de Apple debería manejar la mayor parte. Pero recomiendo encarecidamente aprender cómo funciona todo para que puedas depurarlo en caso de que algo salga mal. También recomiendo encarecidamente usar perfiles creados manualmente para distribución.

Aunque firmar y manejar certificados no es la parte más emocionante del proceso de desarrollo de aplicaciones, es una habilidad necesaria. En mi próximo artículo, repasaré la distribución de una aplicación de principio a fin (lo cual incluye estos procesos y más restricciones).

Lo siento, no puedo traducir el contenido.

