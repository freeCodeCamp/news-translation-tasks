---
title: Manual de FastAPI – Cómo Desarrollar, Probar y Desplegar APIs
date: 2024-09-27T01:40:48.488Z
authorURL: ""
originalURL: https://www.freecodecamp.org/news/fastapi-quickstart/
posteditor: ""
proofreader: ""
---

Por Atharva Shah

<!-- more -->

Bienvenido al mundo de FastAPI, un marco web elegante y de alto rendimiento para construir APIs en Python. No te preocupes si eres nuevo en la programación de APIs; comenzaremos desde el principio.

Una **API** (Interfaz de Programación de Aplicaciones) conecta varios programas de software permitiéndoles conversar e intercambiar información. Las APIs son esenciales en el desarrollo de software moderno ya que son la arquitectura de backend de una aplicación.

Después de leer esta guía rápida, podrás desarrollar una API de administración de cursos usando **[FastAPI][1]** y **[MongoDB][2]**. La mejor parte es que no solo estarás escribiendo APIs, sino también probando y contenedorizando la aplicación.

En este proyecto de recorrido, crearemos un sistema backend en Python utilizando FastAPI, un marco web rápido, y una base de datos MongoDB para el almacenamiento y recuperación de información de los cursos.

El sistema permitirá a los usuarios acceder a los detalles de los cursos, ver capítulos, calificar capítulos individuales y agregar calificaciones.

El proyecto está diseñado para desarrolladores de Python con conocimientos básicos de programación y algo de conocimiento en NoSQL. No se requiere familiaridad con MongoDB, Docker y PyTest, ya que destacaré todo lo que necesitas saber para el alcance de este proyecto.

## Lo Que Construiremos

Esto es lo que vamos a construir:

**Backend con FastAPI:** Servirá como la interfaz para gestionar las solicitudes y respuestas de la API. FastAPI es elegida por su facilidad de uso, rendimiento y diseño intuitivo.

**Base de Datos MongoDB:** Una base de datos NoSQL para almacenar información de los cursos. El esquema flexible de MongoDB nos permite almacenar datos en documentos similares a JSON, lo que la hace adecuada para este proyecto.

**Información del Curso:** Los usuarios podrán ver varios detalles del curso, como el nombre del curso, descripción, instructor, etc.

**Detalles de los Capítulos:** El sistema proporcionará información sobre los capítulos de un curso, incluyendo nombres de los capítulos, descripciones y cualquier otro dato relevante.

**Calificación de los Capítulos:** Los usuarios podrán calificar capítulos individuales. Implementaremos funcionalidad para registrar y recuperar calificaciones de los capítulos.

**Calificación Agregada del Curso:** El sistema calculará y mostrará la calificación agregada para cada curso basada en las calificaciones de sus capítulos.

Este recorrido muestra cómo configurar un entorno de desarrollo, construir un backend con FastAPI, integrar MongoDB, definir los extremos de la API, agregar funcionalidad de calificación de capítulos y calcular calificaciones agregadas de los cursos. Cubre conceptos fundamentales del proyecto, así como Python, MongoDB y bases de datos NoSQL.

Al final, este útil sistema backend gestionará detalles de los capítulos, información de los cursos y calificaciones de los usuarios, sirviendo como base para un proyecto complejo y gratificante.

El objetivo es crear un sistema que procese consultas relacionadas con los cursos. La información del curso debe ser recuperada de MongoDB dependiendo de la solicitud. Finalmente, estos datos de respuesta deben ser devueltos en un formato estándar (JSON).

Comenzaremos con un script que lee la información del curso desde courses.json. Estos datos serán almacenados en la instancia de MongoDB. Una vez que los datos han sido cargados, nuestro código de API puede conectarse a esta base de datos para permitir una recuperación simple de datos.

El aspecto interesante es crear varios extremos con FastAPI. Nuestra API podrá:

-   Obtener una lista de todos los cursos
-   Mostrar una vista general comprensiva del curso
-   Enumerar información detallada sobre ciertos capítulos
-   Registrar calificaciones de los usuarios para cada capítulo.

Además, para cada curso, agregaremos todas las reseñas, proporcionando a los visitantes información relevante sobre la popularidad y calidad del curso.

Este tutorial se enfoca en construir una API escalable, eficiente y fácil de usar. Una vez que hayamos probado todo, contenedorizaremos la aplicación usando Docker. Esto simplificará enormemente el despliegue, mantenimiento e instalación.

## Tabla de Contenidos

Estas son las secciones de este tutorial:

-   [Métodos API][3]
-   [Cliente y Servidor][4]
-   [Cómo Configurar la Base de Datos MongoDB][5]
-   [Cómo Analizar e Insertar Datos del Curso en MongoDB][6]
-   [Cómo Diseñar los Puntos de Extremo en FastAPI][7]
-   [Pruebas Automatizadas de los Puntos de Extremo de la API con PyTest][8]
-   [Cómo Contenedorizar la Aplicación con Docker][9]
-   [Conclusión][10]

## Métodos API

Los métodos HTTP (Protocolo de Transferencia de Hipertexto) especifican la acción a realizar en un recurso. Los siguientes son los métodos más utilizados en el desarrollo de APIs:

**GET**: Solicita información de un servidor. Cuando un cliente envía una solicitud GET, está solicitando datos del servidor.

**POST**: Envía datos al servidor para su procesamiento. Cuando un cliente envía una solicitud POST, a menudo está entregando datos al servidor para crear o actualizar un recurso.

**PUT**: Actualiza datos en el servidor. Cuando un cliente envía una solicitud PUT, se actualiza el recurso indicado en la solicitud.

**DELETE**: Un cliente que envía una solicitud DELETE está pidiendo la eliminación del recurso especificado.

## Cliente y Servidor

El **cliente** a menudo es una aplicación de front-end que envía solicitudes al servidor, como un navegador web o una aplicación móvil. El **servidor**, por otro lado, es la aplicación de back-end encargada de procesar las solicitudes del cliente y responder adecuadamente.

Después de que el servidor reciba la **solicitud**, la procesa y devuelve una **respuesta**. La respuesta es el mensaje que el servidor devuelve al cliente que contiene los datos solicitados o el resultado de la actividad.

Una respuesta generalmente incluye un código de estado HTTP que indica el éxito o fracaso de la solicitud, así como cualquier dato enviado al cliente por el servidor.

![Imagen](https://www.freecodecamp.org/news/content/images/2023/07/image-131.png) _Diagrama que muestra cómo funcionan las API_

## Cómo Configurar la Base de Datos MongoDB

MongoDB es un tipo de base de datos NoSQL. Es no relacional y guarda la información como colecciones y documentos.

Instala MongoDB para tu sistema operativo desde el [sitio web oficial.][11]

Ahora ejecuta el comando `mongosh` en tu terminal para verificar si la instalación fue exitosa.

![Imagen](https://www.freecodecamp.org/news/content/images/2023/07/image-125.png) _Ejecutar el comando mongosh debería producir esta salida_

Conéctate al servidor de MongoDB con **MongoDB Compass**. Te recomiendo que configures MongoDB especificando ajustes como el número de puerto, el motor de almacenamiento, la autenticación, entre otros.

![Imagen](https://www.freecodecamp.org/news/content/images/2023/07/image-124.png) _Crear una nueva conexión MongoDB_

Ahora que la conexión está establecida, el siguiente paso es crear una base de datos o un "documento". Llama a esta base de datos "courses". Actualmente estará vacía para ti. En un minuto insertaremos los documentos usando un script de Python.

## Cómo Analizar e Insertar Datos de Cursos en MongoDB

Podrías insertar registros uno por uno, pero es mejor usar un archivo JSON para simplificar ese proceso. Descarga este archivo [**courses.json**][12] desde GitHub. Toda la información del curso está presente en él (como una lista de cursos).

Específicamente, cada curso tiene la siguiente estructura:

-   **name:** El título del curso.
-   **date:** Fecha de creación como un timestamp de UNIX.
-   **description:** La descripción del curso.
-   **domain:** Lista de los dominios del curso.
-   **chapters:** Lista de los capítulos del curso. Cada capítulo tiene un nombre de título y texto de contenido.

Necesitarás algunos paquetes de Python para este proyecto.

-   **`BSON`** - Formato de serialización binaria que se usa en MongoDB para almacenamiento y recuperación de datos eficientes. Viene incluido con PyMongo.
-   **`FastAPI`** - Marco web para crear APIs en Python que ofrecen alto rendimiento, validación automática, documentación interactiva y soporte para operaciones asíncronas.
-   **`PyMongo`** - Controlador oficial de MongoDB para Python. Sirve como una API de alto nivel para integrar MongoDB dentro de Python.
-   **`Uvicorn`** - Servidor ASGI principal que mejora el rendimiento de la aplicación. Es responsable del inicio del servidor.
-   **`Starlette`** - Marco ASGI que alimenta FastAPI y permite un desarrollo de prototipos rápido.
-   **`Pydantic`** - Biblioteca integrada de validación y análisis de datos. La necesitamos para crear documentación interactiva de la API mientras valida automáticamente los datos de solicitud entrantes y aplica reglas de tipo de datos.

Instálalos mediante los comandos pip de la siguiente manera:

```
pip install fastapi pymongo uvicorn starlette pydantic
```

Ahora, vamos a escribir un script Python para insertar todos estos datos de cursos en la base de datos para que podamos empezar a construir rutas de API. Abre tu IDE, crea un archivo llamado `script.py`, y asegúrate de que esté en el mismo directorio que el archivo `courses.json`.

```
""" 
Script para analizar la información del curso en courses.json, crear las bases de datos y
colección(es) apropiadas en una instancia local de MongoDB, crear los índices apropiados (para la recuperación eficiente)
y finalmente agregar los datos del curso en la(s) colección(es).
"""

import pymongo
import json

# Conectar a MongoDB
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["courses"]
collection = db["courses"]

# Leer cursos desde courses.json
with open("courses.json", "r") as f:
    courses = json.load(f)

# Crear índice para la recuperación eficiente
collection.create_index("name")

# agregar campo de calificación a cada curso
for course in courses:
    course['rating'] = {'total': 0, 'count': 0}

# agregar campo de calificación a cada capítulo
for course in courses:
    for chapter in course['chapters']:
        chapter['rating'] = {'total': 0, 'count': 0}

# Agregar cursos a la colección
for course in courses:
    collection.insert_one(course)

# Cerrar conexión con MongoDB
client.close()
```

Este script puebla una base de datos MongoDB con la información del curso desde el archivo JSON.

Primero, se conecta a la instancia local de MongoDB. Luego, lee los datos del curso desde un archivo llamado `courses.json` y crea un nuevo campo para las calificaciones de los cursos. Después, desarrolla un índice para agilizar la recuperación de datos. Finalmente, los datos del curso se agregan a la colección de MongoDB.

Es un script sencillo para gestionar datos de cursos en una base de datos. Al ejecutar el script, todos los registros del `courses.json` deberían haber sido insertados en la base de datos courses. Cambia a MongoDB Compass para verificarlo.

![Imagen](https://www.freecodecamp.org/news/content/images/2023/07/image-116.png) _Deberías poder ver los elementos JSON en tu base de datos de cursos después de ejecutar el script de python_

## Cómo Diseñar los Endpoints de FastAPI


Recomiendo diseñar los endpoints de la API primero junto con el tipo de solicitud HTTP antes de escribir el código. Esto sirve como una buena referencia y proporciona claridad durante el proceso de codificación.

| Endpoint | Tipo de Solicitud | Descripción |
| --- | --- | --- |
| /courses | GET | Obtén una lista de todos los cursos disponibles con opciones de clasificación.  
  
Opciones: Ordenar por título (ascendente), fecha (descendente) o calificación total del curso (descendente).  
  
Se admite filtrado opcional basado en el dominio. |
| /courses/{course\_id} | GET | Obtén una visión general de un curso específico identificado por course\_id. |
| /courses/{course\_id}/{chapter\_id} | GET | Obtén información sobre un capítulo específico dentro de un curso. |
| /courses/{course\_id}/{chapter\_id} | POST | Califica un capítulo específico dentro de un curso.  
  
Opciones: Calificación positiva (1), calificación negativa (-1).  
  
Las calificaciones se agregan para cada curso. |

Bien, es hora de sumergirnos en el código de la API. Crea un archivo nuevo de Python y llámalo `main.py`:

```
import contextlib
from fastapi import FastAPI, HTTPException, Query
from pymongo import MongoClient
from bson import ObjectId
from fastapi.encoders import jsonable_encoder

app = FastAPI()
client = MongoClient('mongodb://localhost:27017/')
db = client['courses']
```

El código importa módulos esenciales y crea una instancia activa de la clase FastAPI llamada app. También establece una conexión con la base de datos local de MongoDB usando la biblioteca PyMongo y la variable `db` ahora almacena la referencia de la conexión al documento de cursos.

Vamos a repasar cada uno de estos endpoints en más detalle ahora.

### El Endpoint Obtener Todos los Cursos (`/courses` – GET)

Este endpoint te permite obtener una lista de todos los cursos disponibles. Puedes ordenar los cursos según diferentes criterios, como orden alfabético (basado en el título del curso en orden ascendente), fecha (en orden descendente) o calificación total del curso (en orden descendente). También permitiremos a los usuarios filtrar los cursos según su dominio.

```
@app.get('/courses')
def get_courses(sort_by: str = 'date', domain: str = None):
    # establece el rating.total y rating.count para todos los cursos basado en la suma de las calificaciones de los capítulos
    for course in db.courses.find():
        total = 0
        count = 0
        for chapter in course['chapters']:
            with contextlib.suppress(KeyError):
                total += chapter['rating']['total']
                count += chapter['rating']['count']
        db.courses.update_one({'_id': course['_id']}, {'$set': {'rating': {'total': total, 'count': count}}})


    # sort_by == 'date' [DESCENDING]
    if sort_by == 'date':
        sort_field = 'date'
        sort_order = -1

    # sort_by == 'rating' [DESCENDING]
    elif sort_by == 'rating':
        sort_field = 'rating.total'
        sort_order = -1

    # sort_by == 'alphabetical' [ASCENDING]
    else:  
        sort_field = 'name'
        sort_order = 1

    query = {}
    if domain:
        query['domain'] = domain


    courses = db.courses.find(query, {'name': 1, 'date': 1, 'description': 1, 'domain':1,'rating':1,'_id': 0}).sort(sort_field, sort_order)
    return list(courses)
```

Este código define un endpoint en la aplicación FastAPI para obtener una lista de todos los cursos disponibles. El endpoint puede ser accedido usando una solicitud HTTP GET a la URL '/courses'.

El decorador `@app.get()` está adjunto a la función `get_course` y se encarga de esto.

Cuando se realiza una solicitud a este endpoint, el código primero calcula la calificación total del curso sumando las calificaciones de todos los capítulos en cada curso. Luego actualiza el campo `rating` de cada curso en la base de datos MongoDB con el total y el conteo de calificaciones computados.

A continuación, el código determina el modo de ordenación basado en el parámetro de consulta `sort_by`. Si `sort_by` está establecido en `date`, los cursos se ordenarán por su fecha de creación en orden descendente. Si está establecido en `rating`, los cursos se ordenarán por su calificación total en orden descendente. De lo contrario, los cursos se ordenarán alfabéticamente por sus nombres en orden ascendente.

Si se proporciona el parámetro de consulta opcional `domain`, el código filtrará los cursos basándose en el dominio especificado.

Finalmente, el código consulta la base de datos MongoDB para obtener la información relevante del curso, incluyendo el nombre del curso, la fecha de creación, la descripción, el dominio y la calificación. Los cursos se ordenan según el modo de ordenación seleccionado y se devuelven como una lista.

Esa fue la explicación del código, ¿pero qué hay de la respuesta real de la API? Ejecuta el siguiente comando en tu terminal desde el directorio de trabajo actual:

```
uvicorn main:app --reload
```

Uvicorn es un servidor web ASGI. Puedes interactuar con los endpoints de la API directamente en tu máquina local sin ningún servidor externo. Al ejecutar el comando anterior, deberías ver un mensaje de éxito indicando que el servidor ha comenzado.

Abre tu navegador e ingresa [`http://127.0.0.1:8000/courses`][13] en la barra de URL. El resultado que verás será la respuesta JSON directamente del servidor.

Verifica que el primer objeto contenga lo siguiente:

```
{
 "name": "Introducción a la Programación",
 "date": 1659906000,
 "description": "Una introducción a la programación usando un lenguaje llamado Python. Aprende a leer y escribir código así como a probarlo y \"depurarlo\". Diseñado para estudiantes con o sin experiencia previa en programación que deseen aprender Python específicamente. Aprende sobre funciones, argumentos y valores de retorno (¡oh my!); variables y tipos; condicionales y expresiones booleanas; y bucles. Aprende a manejar excepciones, encontrar y corregir errores, y escribir pruebas unitarias; usar bibliotecas de terceros; validar y extraer datos con expresiones regulares; modelar entidades del mundo real con clases, objetos, métodos y propiedades; y leer y escribir archivos. Oportunidades prácticas para mucha práctica. Ejercicios inspirados en problemas de programación del mundo real. No se requiere ningún software excepto un navegador web, o puedes escribir código en tu propia PC o Mac.",
 "domain": [
     "programming"
     ],
 "rating": {
     "total": 6,
     "count": 12
     }
}
```

![Imagen](https://www.freecodecamp.org/news/content/images/2023/07/image-117.png) _La calificación para todo el curso se actualizará según la suma agregada de los capítulos, como se menciona en el documento de asignación._

En este punto, si deseas ver la documentación de tu API, hazlo navegando al endpoint [`http://127.0.0.1:8000/docs`][14]. Esta API navegable viene preempaquetada con FastAPI. ¿Qué tan genial es eso?

![Imagen](https://www.freecodecamp.org/news/content/images/2023/07/image-126.png) _Documentación de FastAPI para todos tus endpoints de la API_

¿No te gusta el aspecto sencillo de la documentación? No te preocupes, también hay un endpoint `/redoc` con una interfaz un poco más elegante. Simplemente navega a `[http://127.0.0.1:8000/](http://127.0.0.1:8000/docs)redoc` y serás recibido con esta pantalla.

![Imagen](https://www.freecodecamp.org/news/content/images/2023/07/image-127.png) _Interfaz alternativa redoc de FastAPI con opciones de búsqueda y descarga_

### El Endpoint Obtener Resumen del Curso (`/courses/{course_id}` – GET)

Utilizarás este endpoint para obtener un resumen de un curso específico. Simplemente proporciona el `course_id` en la URL, y la API devolverá información detallada sobre ese curso en particular.

```
@app.get('/courses/{course_id}')
def get_course(course_id: str):
    course = db.courses.find_one({'_id': ObjectId(course_id)}, {'_id': 0, 'chapters': 0})
    if not course:
        raise HTTPException(status_code=404, detail='Course not found')
    try:
        course['rating'] = course['rating']['total']
    except KeyError:
        course['rating'] = 'Not rated yet' 

    return course
```

Este fragmento de código busca en la base de datos MongoDB el curso con el `course_id` especificado y extrae la información del curso, dejando fuera el campo `chapters`.

Si no puede encontrar el curso, lanza una `HTTPException` con el código de estado 404. Si lo encuentra, intenta acceder al campo `rating` y lo reemplaza con su valor `total` para mostrar la calificación total. Si no, el campo `rating` se establece como `Not rated yet`.

Finalmente, sin el campo `chapters`, devuelve la respuesta JSON de la información del curso, incluida la calificación total.

![Imagen](https://www.freecodecamp.org/news/content/images/2023/07/image-118.png) _Respuesta del Endpoint Resumen de Curso Único_

### Obtener Información de Capítulo Específico (`/courses/{course_id}/{chapter_id}` – GET)

Acceder a este endpoint devuelve información específica sobre un capítulo dentro de un curso. Al especificar tanto el `course_id` como el `chapter_id` en la URL, puedes acceder a los detalles de ese capítulo en particular.

```
@app.get('/courses/{course_id}/{chapter_id}')
def get_chapter(course_id: str, chapter_id: str):    
    course = db.courses.find_one({'_id': ObjectId(course_id)}, {'_id': 0, })
    if not course:
        raise HTTPException(status_code=404, detail='Course not found')
    chapters = course.get('chapters', [])
    try:
        chapter = chapters[int(chapter_id)]
    except (ValueError, IndexError) as e:
        raise HTTPException(status_code=404, detail='Chapter not found') from e
    return chapter
```

Como podrías esperar, `course_id` es la identidad del curso, y `chapter_id` es el identificador del capítulo dentro de ese curso.

Cuando se realiza una solicitud a este endpoint, el código primero busca en la base de datos MongoDB el curso con el `course_id` especificado, ignorando la columna `_id` en la respuesta.

Si no se puede encontrar el curso con el `course_id` proporcionado en la base de datos, el código lanza una HTTPException con el código de estado 404, indicando que no se pudo localizar el curso.

El código entonces utiliza la función GET para recuperar la lista de capítulos para el curso, estableciendo el valor predeterminado a una lista vacía si el campo 'chapters' no existe.

Utilizando el `chapter_id` proporcionado en la solicitud, el código intenta recuperar el capítulo exacto dentro de la lista de capítulos. Si el `chapter_id` no es un entero válido o está fuera del rango para la lista de capítulos, el código lanza una HTTPException con el código de estado 404. Esto indica que no se pudo localizar el capítulo.

Si localiza el capítulo, la respuesta contiene información sobre el capítulo individual dentro del curso.

![Imagen](https://www.freecodecamp.org/news/content/images/2023/07/image-119.png) _Detalle del Endpoint del Capítulo_

### Endpoint Calificar Capítulo (`/courses/{course_id}/{chapter_id}` – POST)

Este endpoint permite a los usuarios calificar capítulos individuales dentro de un curso. Puedes proporcionar una calificación de 1 para una revisión positiva o -1 para una revisión negativa. La API agrega todas las calificaciones para cada curso, proporcionando valiosos comentarios para futuras mejoras.

Hasta ahora, hemos visto principalmente solicitudes GET. Pero ahora veamos cómo puedes enviar datos al servidor, validarlos e insertarlos en la base de datos de la aplicación.

```
@app.post('/courses/{course_id}/{chapter_id}')
def rate_chapter(course_id: str, chapter_id: str, rating: int = Query(..., gt=-2, lt=2)):
    course = db.courses.find_one({'_id': ObjectId(course_id)}, {'_id': 0, })
    if not course:
        raise HTTPException(status_code=404, detail='Course not found')
    chapters = course.get('chapters', [])
    try:
        chapter = chapters[int(chapter_id)]
    except (ValueError, IndexError) as e:
        raise HTTPException(status_code=404, detail='Chapter not found') from e
    try:
        chapter['rating']['total'] += rating
        chapter['rating']['count'] += 1
    except KeyError:
        chapter['rating'] = {'total': rating, 'count': 1}
    db.courses.update_one({'_id': ObjectId(course_id)}, {'$set': {'chapters': chapters}})
    return chapter
```

Si no encuentra el curso, lanza una excepción HTTP con un código de estado 404. El código recupera la lista de capítulos, estableciendo el valor predeterminado a una lista vacía.

Si `chapter_id` no es un entero válido o está fuera de rango, lanza una `HTTPException` con un código de estado de 404. Si se encuentra el capítulo, el código actualiza su calificación incrementando el valor de `total` con la calificación proporcionada y aumentando el valor de `count`.

Si el capítulo no tiene un campo `rating` existente, crea uno y lo inicializa con la calificación proporcionada y un conteo de 1. La calificación actualizada se actualiza en la base de datos, y el capítulo actualizado se devuelve como respuesta, proporcionando retroalimentación al usuario sobre su calificación para ese capítulo.

![Imagen](https://www.freecodecamp.org/news/content/images/2023/07/image-120.png) _Solicitud POST para agregar una calificación a un capítulo_

Para hacer una solicitud POST, abra los documentos y haga clic en la solicitud destacada en la imagen anterior. Luego, haga clic en "Probar", llene los datos de la publicación y presione el botón Ejecutar justo abajo. Esto envía los datos POST al servidor, que luego se validan.

Si todos los datos enviados son como se esperaba, el servidor acepta y muestra el código de estado 200, lo que significa que la operación fue exitosa. Los datos enviados ahora están en el documento de MongoDB.

![Imagen](https://www.freecodecamp.org/news/content/images/2023/07/image-121.png) _Éxito de la solicitud POST_

Eso es todo en la parte de desarrollo de la API.

## Pruebas automatizadas de endpoints API con PyTest

A medida que aumenta la complejidad de las aplicaciones web modernas, también aumenta el número de endpoints API y sus interacciones.

En una aplicación web de comercio electrónico dinámica, podría haber cientos de endpoints, cada uno compatible con múltiples métodos de solicitud HTTP. Y estos endpoints podrían estar intrincadamente interconectados.

Asegurar el funcionamiento adecuado de todos estos endpoints después de cada iteración de desarrollo se convierte en una tarea formidable para los desarrolladores y los equipos de aseguramiento de calidad. Aquí es donde entran en juego las pruebas automáticas.

Cree un archivo `test_app.py` en el mismo directorio que `courses.json` y `main.py`:

```
from fastapi.testclient import TestClient
from pymongo import MongoClient
from bson import ObjectId
import pytest
from main import app

client = TestClient(app)
mongo_client = MongoClient('mongodb://localhost:27017/')
db = mongo_client['courses']
```

Eso configura un entorno de prueba automatizado.

**FastAPI Test Client** simula solicitudes HTTP a la aplicación web. Con esto, puede pretender ser un usuario, enviando solicitudes a su aplicación y recibiendo respuestas, tal como lo haría un usuario real.

Estamos usando **Conexión MongoDB** para el almacenamiento de datos del curso, con MongoClient permitiendo la interacción y actualizaciones de datos durante las pruebas.

**Base de datos de prueba** es una base de datos separada para pruebas. No afectará los documentos de curso reales.

Con esta configuración, ahora puede crear funciones de prueba que envían solicitudes a su aplicación FastAPI usando el TestClient. Interactuará con su base de datos de MongoDB durante estas pruebas, pero no se preocupe: esta es solo la base de pruebas, por lo que nada importante se dañará.

### Cómo probar el Endpoint "Obtener lista de cursos"

Estas funciones de prueba usan `TestClient` para interactuar con el endpoint "/courses" de la aplicación FastAPI. Verifican si el endpoint se comporta como se espera cuando se proporcionan diferentes parámetros, como ordenar y filtrar por dominio.

Las pruebas verifican los códigos de estado, la presencia de datos, el orden de clasificación y el filtrado de dominios en las respuestas de la API, asegurando que la funcionalidad del endpoint del curso sea correcta y confiable.

```
def test_get_courses_no_params():
    response = client.get("/courses")
    assert response.status_code == 200

def test_get_courses_sort_by_alphabetical():
    response = client.get("/courses?sort_by=alphabetical")
    assert response.status_code == 200
    courses = response.json()
    assert len(courses) > 0
    assert sorted(courses, key=lambda x: x['name']) == courses


def test_get_courses_sort_by_date():
    response = client.get("/courses?sort_by=date")
    assert response.status_code == 200
    courses = response.json()
    assert len(courses) > 0
    assert sorted(courses, key=lambda x: x['date'], reverse=True) == courses

def test_get_courses_sort_by_rating():
    response = client.get("/courses?sort_by=rating")
    assert response.status_code == 200
    courses = response.json()
    assert len(courses) > 0
    assert sorted(courses, key=lambda x: x['rating']['total'], reverse=True) == courses

def test_get_courses_filter_by_domain():
    response = client.get("/courses?domain=mathematics")
    assert response.status_code == 200
    courses = response.json()
    assert len(courses) > 0
    assert all([c['domain'][0] == 'mathematics' for c in courses])

def test_get_courses_filter_by_domain_and_sort_by_alphabetical():
    response = client.get("/courses?domain=mathematics&sort_by=alphabetical")
    assert response.status_code == 200
    courses = response.json()
    assert len(courses) > 0
    assert all([c['domain'][0] == 'mathematics' for c in courses])
    assert sorted(courses, key=lambda x: x['name']) == courses

def test_get_courses_filter_by_domain_and_sort_by_date():
    response = client.get("/courses?domain=mathematics&sort_by=date")
    assert response.status_code == 200
    courses = response.json()
    assert len(courses) > 0
    assert all([c['domain'][0] == 'mathematics' for c in courses])
    assert sorted(courses, key=lambda x: x['date'], reverse=True) == courses
```

### Cómo Probar el Endpoint "Obtener Información de un Curso"

Las pruebas utilizan TestClient para enviar consultas al endpoint "/courses/course id" de FastAPI, recuperando datos del curso desde la base de datos MongoDB usando la función `db.courses.find_one`. Comparar los datos de la respuesta de la API con los datos de la base de datos te puede ayudar a determinar si el endpoint maneja IDs de curso existentes y no existentes.

```
def test_get_course_by_id_exists():
    response = client.get("/courses/6431137ab5da949e5978a281")
    assert response.status_code == 200
    course = response.json()
    # obtener el curso de la base de datos
    course_db = db.courses.find_one({'_id': ObjectId('6431137ab5da949e5978a281')})
    # obtener el nombre del curso de la base de datos
    name_db = course_db['name']
    # obtener el nombre del curso de la respuesta
    name_response = course['name']
    # comparar los dos
    assert name_db == name_response


def test_get_course_by_id_not_exists():
    response = client.get("/courses/6431137ab5da949e5978a280")
    assert response.status_code == 404
    assert response.json() == {'detail': 'Course not found'}
```

### Cómo Probar el Endpoint "Obtener Información de un Capítulo del Curso"

Las pruebas anticipan que el endpoint "/courses/course id/chapter number" de la aplicación FastAPI proporcione información del capítulo para un determinado ID de curso y número cuando utilizan TestClient para hacer la solicitud.

Usamos aserciones para determinar si la respuesta incluye los datos anticipados o da una respuesta de "No Encontrado" para un capítulo inexistente. Esto valida que el capítulo correcto de la API fue recuperado y maneja capítulos existentes y no existentes.

```
def test_get_chapter_info():
    response = client.get("/courses/6431137ab5da949e5978a281/1")
    assert response.status_code == 200
    chapter = response.json()
    assert chapter['name'] == 'Big Picture of Calculus'
    assert chapter['text'] == 'Highlights of Calculus'


def test_get_chapter_info_not_exists():
    response = client.get("/courses/6431137ab5da949e5978a281/990")
    assert response.status_code == 404
    assert response.json() == {'detail': 'Chapter not found'}
```

### Cómo Probar el Endpoint "Enviar Calificación del Curso"

Para probar la capacidad de calificación, la función de prueba especifica las variables de ID del curso, ID del capítulo y calificación. Utiliza el método post de TestClient para enviar una solicitud POST a la API "/courses/course id/chapter id", proporcionando el ID del curso y el número de capítulo en la URL y pasando la variable de calificación como un parámetro de consulta.

FastAPI imita la actividad de un usuario de calificar un determinado capítulo de un curso. La respuesta es exitosa con un código de estado 200. El contenido JSON es validado para las claves "name" y "rating", así como las claves "total" y "count". La calificación total y el recuento de calificaciones son mayores que 0, indicando que los usuarios han calificado el capítulo.

```
def test_rate_chapter():
    course_id = "6431137ab5da949e5978a281"
    chapter_id = "1"
    rating = 1

    response = client.post(f"/courses/{course_id}/{chapter_id}?rating={rating}")

    assert response.status_code == 200

    # Verificar si el cuerpo de la respuesta tiene la estructura esperada
    assert "name" in response.json()
    assert "rating" in response.json()
    assert "total" in response.json()["rating"]
    assert "count" in response.json()["rating"]

    assert response.json()["rating"]["total"] > 0
    assert response.json()["rating"]["count"] > 0

def test_rate_chapter_not_exists():
    response = client.post("/courses/6431137ab5da949e5978a281/990/rate", json={"rating": 1})
    assert response.status_code == 404
    assert response.json() == {'detail': 'Not Found'}
```

Esta verificación asegura que el endpoint de adición de calificación funcione como se espera, con la API devolviendo el código de éxito correcto e información esperada sobre el capítulo, incluyendo su nombre y detalles de calificación actualizados.

Al ejecutar el comando `pytest`, todas las funciones de prueba en el archivo `test_app.py` se ejecutarán, y obtendrás comentarios sobre si los endpoints están funcionando como se espera o si han ocurrido errores o regresiones. Esto permite a los desarrolladores y equipos de QA detectar problemas tempranamente en el ciclo de desarrollo y mantener la fiabilidad y estabilidad de la aplicación.

Como puedes ver en la imagen siguiente, todas las pruebas están pasando. ¡Buen trabajo! A medida que sigas agregando más características y endpoints a la aplicación, sigue agregando las pruebas asociadas para validar la corrección. Esto se llama [Desarrollo Guiado por Pruebas (TDD)][15].

![Imagen](https://www.freecodecamp.org/news/content/images/2023/07/image-122.png) _Ejecutando Pruebas de API con Pytest_

Ejecutar el comando Pytest muestra la salida como se ilustra en la imagen anterior. Dice que 13 pruebas pasaron. Esto significa que todos nuestros endpoints son funcionales y devuelven las respuestas esperadas.

Al detectar regresiones, integrar componentes, resolver errores, hacer pruebas de carga y rendimiento, y probar la seguridad, las pruebas de endpoints verifican que las operaciones esenciales de una aplicación sean correctas. Todas las posibles debilidades y vulnerabilidades son notadas y etiquetadas para inspección.

Pytest te ayuda a asegurarte de que los endpoints de la API funcionen bien juntos, y también te ayuda a manejar fallos y casos extremos. Puede gestionar múltiples grandes solicitudes concurrentes en situaciones prácticas.

Puedes poner tu aplicación y todas sus dependencias en una sola unidad llamada contenedor. Esto se llama **containerización**. Separa la aplicación del sistema subyacente, lo que mantiene la consistencia a través de diferentes sistemas operativos.

**Docker** es una tecnología de containerización moderna que facilita la creación, distribución y ejecución de contenedores. Permite a los desarrolladores construir, enviar y ejecutar aplicaciones de manera constante y reproducible sin necesidad de compilar desde la fuente.

Instalar Docker desde aquí: [https://www.docker.com/get-started][16].

Dockerizar programas en Python te ayuda a asegurarte de que se ejecuten de manera consistente en varios equipos, eliminando dificultades de compatibilidad. Conteneriza el software, sus dependencias y personalizaciones, haciéndolos portables.

En el mismo directorio que otros archivos, crea un nuevo archivo llamado `Dockerfile`. Nota que no requiere ninguna extensión.

```
# Usar un tiempo de ejecución de Python oficial como imagen principal
FROM python:3.9-slim-buster

# Establecer el directorio de trabajo en /app
WORKDIR /app

# Copiar el contenido del directorio actual al contenedor en /code
WORKDIR /app

COPY ./requirements.txt /app/requirements.txt

# Instalar cualquier paquete necesario especificado en requirements.txt
RUN pip install --no-cache-dir --upgrade -r /app/requirements.txt

COPY . /app

# Ejecutar app.py cuando se lance el contenedor
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]
```

Empezando con la imagen oficial slim de Python 3.9, el Dockerfile define el plano de la imagen.

Cambia el directorio de trabajo a /app, que es donde se almacenará el código de la aplicación. Los requisitos del proyecto están listados en el archivo `requirements.txt`, que se puso en el contenedor.

El comando RUN usa pip para instalar los requisitos de Python. COPY mueve el código de la aplicación del host al directorio /app del contenedor. CMD proporciona el comando que se ejecutará cuando se inicie el contenedor.

En este caso, ejecuta "uvicorn main:app" (la aplicación de FastAPI en main.py) con el host configurado en 0.0.0.0 y el puerto 80.

### Cómo Ejecutar el Contenedor Docker

Construir la imagen de Docker en el mismo directorio que el Dockerfile usando: `**docker build -t my_python_app .**`

![Imagen](https://www.freecodecamp.org/news/content/images/2023/07/image-123.png) _Containerizando la aplicación FastAPI con Docker_

Ejecutar el contenedor en modo desvinculado usando el comando `**docker run -d -p 80:80 my_python_app**`.

Una vez hecho esto, puedes ver el estado de los contenedores y la imagen desde Docker Desktop.

![Imagen](https://www.freecodecamp.org/news/content/images/2023/07/image-128.png) _Docker Desktop muestra que nuestra imagen del contenedor ahora está en estado de ejecución en el puerto 80_

### Cómo Terminar el Contenedor Docker

Encuentra la ID o el nombre del contenedor con `**docker ps**`. Detén el contenedor usando su ID o nombre: `**docker stop <container_id_or_name>**`

Este tutorial solo ha abordado desarrollo, pruebas y containerización. Solo ten en cuenta que si se descuida la seguridad del contenedor post-despliegue, introduce riesgos como vulnerabilidades, configuraciones incorrectas y ataques. Idealmente, deberías aprovechar una [CNAPP][17] (Plataforma de Protección de Aplicaciones Nativas de la Nube) para escanear imágenes, adherirse a las mejores prácticas, y monitorear contenedores en ejecución para protección.

La conclusión es que la containerización con Docker permite agrupar scripts de Python con dependencias, haciéndolos consistentes y portables. El Dockerfile describe cómo debe ser creada la imagen.

Ejecutar el contenedor después de que ha sido construido es tan simple como emitir un comando. Detenerlo es igualmente sencillo. Docker facilita la administración de la distribución de aplicaciones en Python.

## Conclusión

Este tutorial fue una guía rápida para ayudarte a aprovechar el poder de FastAPI. Construimos una API de administración de cursos que maneja eficientemente consultas relacionadas con cursos.

Hicimos esto importando datos de cursos desde un archivo JSON en MongoDB y luego creando múltiples endpoints para que los usuarios accedan a listas de cursos, resúmenes, información de capítulos y puntuaciones de usuarios. También agregamos una función de agregación de reseñas para demostrar el uso de métodos HTTP POST y HTTP GET para que puedas obtener datos y también enviarlos al servidor.

PyTest nos ayudó a manejar pruebas automatizadas, asegurando confiabilidad y estabilidad. Luego containerizamos la aplicación con Docker, lo que simplifica el despliegue y mantenimiento.

Mi [Repositorio en Github][18] contiene el código completo cubierto en esta guía rápida. Suscríbete a mi [blog técnico][19] para hojas de trucos y recursos técnicos.

[1]: https://fastapi.tiangolo.com/
[2]: https://www.mongodb.com/
[3]: #heading-api-methods
[4]: #heading-client-and-server
[5]: #heading-how-to-set-up-the-mongodb-database
[6]: #heading-how-to-parse-and-insert-course-data-into-mongodb
[7]: #heading-how-to-design-the-fastapi-endpoints
[8]: #heading-automated-api-endpoint-testing-with-pytest
[9]: #heading-how-to-containerize-the-application-with-docker
[10]: #heading-conclusion
[11]: https://www.mongodb.com/try/download/community
[12]: https://github.com/HighnessAtharva/fastapi-kimo/blob/master/courses.json
[13]: http://127.0.0.1:8000/courses
[14]: http://127.0.0.1:8000/docs
[15]: https://www.freecodecamp.org/news/an-introduction-to-test-driven-development-c4de6dce5c/
[16]: https://www.docker.com/get-started
[17]: https://www.accuknox.com/blog/cnapp-buyers-guide
[18]: https://github.com/HighnessAtharva/fastapi-kimo/
[19]: https://atharvashah.netlify.app/

