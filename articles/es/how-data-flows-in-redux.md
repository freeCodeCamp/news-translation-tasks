---
title: Flujo de Datos en Redux Explicado – Un Manual de Gestión de Estado
date: 2024-08-27T15:21:18.258Z
author: Joan Ayebola
authorURL: https://www.freecodecamp.org/news/author/joanayebola/
originalURL: https://www.freecodecamp.org/news/how-data-flows-in-redux/
posteditor: ""
proofreader: ""
---

En aplicaciones React complejas, gestionar el estado de la aplicación de manera efectiva puede convertirse en un desafío. Aquí es donde entra Redux, una biblioteca de gestión de estado predecible.

<!-- more -->

Al introducir un flujo de datos unidireccional, Redux aporta orden y claridad sobre cómo los datos se actualizan e interactúan dentro de tus componentes React.

Este artículo discute el funcionamiento interno de Redux, enfocándose específicamente en cómo los datos fluyen a lo largo de tu aplicación. Exploraremos conceptos básicos como el store de Redux, acciones, reducers y selectores, junto con ejemplos prácticos de cómo trabajan juntos para gestionar sin problemas el estado de tu aplicación.

## Tabla de Contenidos

1.  [¿Qué es Redux?][1]
2.  [¿Por Qué Usar Redux para la Gestión de Datos?][2]
3.  [Conceptos Básicos del Flujo de Datos en Redux][3]
4.  [Flujo de Datos Unidireccional][4]
5.  [Beneficios del Flujo de Datos Unidireccional][5]
6.  [Gestión de Estado con el Store de Redux][6]
7.  [¿Qué es el Store de Redux?][7]
8.  [Estructura del Store (Estado, Reducers, Acciones)][8]
9.  [Acciones: Iniciando Cambios de Estado][9]
10.  [Creadores de Acciones (Funciones para Crear Acciones)][10]
11.  [Tipos de Acciones (Identificación de Diferentes Acciones)][11]
12.  [Cómo Procesar Cambios de Estado][12]
13.  [Funciones Puras: Reducers en el Núcleo][13]
14.  [Características de las Funciones Puras][14]
15.  [Anatomía de una Función Reducer][15]
16.  [Parámetros: Estado Anterior y Objeto de Acción][16]
17.  [Valor de Retorno: Estado Actualizado][17]
18.  [Cómo Manejar Diferentes Acciones en los Reducers][18]
19.  [Usando Sentencias Switch o Lógica Condicional][19]
20.  [Despachando Acciones: Cómo Actualizar el Store de Redux][20]
21.  [La Función `dispatch`][21]
22.  [Despachando Acciones desde Componentes o Eventos][22]
23.  [Cómo Acceder a Datos Específicos del Store][23]
24.  [Creando Funciones Selector][24]
25.  [Memorización para Uso Eficiente de Selectores][25]
26.  [Cómo Conectar Componentes React a Redux][26]
27.  [La Función `connect` de la Biblioteca `react-redux`][27]
28.  [Mapeo de Estado y Dispatch a Props][28]
29.  [Usando Componentes Conectados en tu Aplicación][29]
30.  [Técnicas Avanzadas de Flujo de Datos en Redux][30]
31.  [Acciones Asíncronas (Redux Thunk, Redux Saga)][31]
32.  [Middleware para Ampliar la Funcionalidad de Redux][32]
33.  [Mejores Prácticas para Gestionar el Flujo de Datos en Redux][33]
34.  [Conclusión][34]

## ¿Qué es Redux?

Redux es un contenedor de estado predecible para aplicaciones JavaScript, utilizado principalmente con bibliotecas como React. Ayuda a gestionar el estado de la aplicación en un store centralizado, haciendo que sea más fácil manejar y actualizar el estado a través de toda tu aplicación.

En términos simples, Redux proporciona una manera de almacenar y gestionar los datos que tu aplicación necesita para funcionar. Sigue un patrón estricto para asegurar que los cambios de estado sean predecibles y manejables.

## ¿Por Qué Usar Redux para la Gestión de Datos?

Usar Redux para la gestión de datos en tu aplicación ofrece varias ventajas:

**Gestión Centralizada del Estado**: Redux almacena el estado de la aplicación en un solo store, haciendo que sea más fácil de manejar y depurar en comparación con tener el estado disperso a través de múltiples componentes.

**Cambios de Estado Predecibles**: Las mutaciones de estado se realizan a través de reducers, que son funciones puras. Esto asegura que los cambios de estado sean predecibles y rastreables, haciendo más fácil entender cómo los datos fluyen a través de tu aplicación.

**Depuración Más Fácil**: Con una sola fuente de verdad, la depuración se vuelve más simple. Puedes registrar los cambios de estado, rastrear acciones e incluso implementar la depuración de viaje en el tiempo (a través de Redux DevTools) para reproducir acciones e inspeccionar el estado en cualquier punto en el tiempo.

**Facilita las Pruebas**: Dado que los reducers son funciones puras que dependen solo de su entrada y producen una salida predecible, las pruebas se vuelven sencillas. Puedes fácilmente probar cómo los reducers actualizan el estado en respuesta a diferentes acciones.

**Refuerza el Flujo de Datos Unidireccional**: Redux sigue un patrón estricto de flujo de datos unidireccional. Los datos fluyen en una dirección: las acciones se despachan, los reducers actualizan el estado de manera inmutable y los componentes se suscriben a los cambios que les interesan. Este patrón simplifica la gestión de datos y reduce errores relacionados con el estado inconsistente.

**Facilita la Persistencia del Estado**: Redux facilita la persistencia del estado de tu aplicación entre sesiones o su almacenamiento local, mejorando la experiencia del usuario al preservar datos entre visitas.

**Escalabilidad**: Redux escala bien con aplicaciones grandes debido a su gestión centralizada del estado. A medida que tu aplicación crece, manejar el estado se vuelve más manejable y menos propenso a errores en comparación con el uso de estado local de componentes o el paso de props.

## Conceptos Básicos del Flujo de Datos en Redux

Entender los conceptos básicos del flujo de datos en Redux es esencial para dominar la gestión de estado en aplicaciones JavaScript modernas.

### Flujo de Datos Unidireccional

Redux sigue un patrón estricto de flujo de datos unidireccional, lo que significa que los datos en tu aplicación se mueven en una única dirección a través de una serie de pasos:

Aquí tienes una visión simplificada de cómo funciona el flujo de datos unidireccional en Redux:

1.  **Despacho de Acciones**: Los componentes despachan acciones al store de Redux usando `store.dispatch(action)`. Las acciones son objetos en JavaScript con un campo `type` que describe el tipo de acción que se está realizando.
2.  **Manejo de Acciones**: El store pasa la acción despachada al reducer raíz. El reducer es una función pura que toma el estado actual y la acción, calcula el nuevo estado basado en la acción y retorna el estado actualizado.
3.  **Actualización del Estado**: El store de Redux actualiza su estado basándose en el valor de retorno del reducer raíz. Notifica a todos los componentes suscritos del cambio de estado.
4.  **Re-renderizado de Componentes**: Los componentes que están suscritos al store reciben el estado actualizado como props. Se re-renderizan con los nuevos datos.

### Beneficios del Flujo de Datos Unidireccional

**Predictibilidad**: Al imponer una única dirección para el flujo de datos, Redux hace que los cambios de estado sean más predictibles y fáciles de entender. Las acciones son explícitas sobre los cambios que están ocurriendo, y los reducers definen claramente cómo ocurren las transiciones de estado.

**Depuración**: El flujo de datos unidireccional simplifica la depuración porque puedes rastrear cómo los cambios de estado se propagan a través de tu aplicación. Redux DevTools mejora esto aún más al permitirte rastrear acciones, inspeccionar cambios de estado a lo largo del tiempo e incluso reproducir acciones para reproducir errores.

**Mantenibilidad**: Con una clara separación entre datos (estado) y lógica (reducers), Redux promueve un código más limpio y mantenible. Reduce la probabilidad de errores causados por mutaciones de estado inconsistentes o efectos secundarios.

**Escalabilidad**: A medida que tu aplicación crece en tamaño y complejidad, el flujo de datos unidireccional ayuda a gestionar las actualizaciones de estado de manera más efectiva. Evita las trampas del enlace de datos bidireccional y asegura que los cambios al estado sean controlados y manejables.

**Pruebas**: Dado que los reducers son funciones puras que toman entradas y producen salidas sin efectos secundarios, las pruebas unitarias se vuelven directas. Puedes probar reducers con diferentes acciones y escenarios de estado para asegurar que se comportan como se espera.

## Gestión de Estado con el Store de Redux

La gestión de estado juega un papel crucial en el desarrollo web moderno, asegurando que las aplicaciones mantengan estados consistentes y predictibles a través de varios componentes.

### ¿Qué es el Store de Redux?

El Store de Redux es el corazón de la gestión de estado de Redux. Contiene el árbol entero del estado de tu aplicación. El store te permite:

-   Acceder al estado actual de tu aplicación vía `store.getState()`.
-   Despachar acciones para cambiar el estado usando `store.dispatch(action)`.
-   Suscribirse a cambios en el estado para que tus componentes puedan actualizarse en consecuencia usando `store.subscribe(listener)`.

En esencia, el Store de Redux actúa como un repositorio centralizado para el estado de tu aplicación, facilitando un flujo de datos predictibles y haciendo la gestión de estado más manejable.

### Estructura del Store (Estado, Reducers, Acciones)

El **estado** en Redux representa el estado completo de tu aplicación. Típicamente está estructurado como un objeto en JavaScript. La forma del estado está definida por los reducers. Por ejemplo:

```
const initialState = {
  todos: [],
  visibilityFilter: 'SHOW_ALL',
};
```

En este ejemplo, `todos` y `visibilityFilter` son partes del estado gestionadas por Redux.

**Reducers** son funciones que especifican cómo el estado de la aplicación cambia en respuesta a acciones despachadas al store. Toman el estado actual y una acción como argumentos, y retornan el nuevo estado basado en el tipo de acción.

Los reducers deben ser funciones puras, lo que significa que producen la misma salida para la misma entrada y no modifican directamente el estado.

```
const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};
```

En este ejemplo, `todosReducer` maneja la parte del estado `todos`, manejando acciones como `'ADD_TODO'` y `'TOGGLE_TODO'` para añadir nuevos todos o cambiar su estado de finalización.

**Acciones** son objetos en JavaScript que describen lo que sucedió en tu aplicación. Son la única fuente de información para el store. Las acciones típicamente tienen un campo `type` que indica el tipo de acción que se está realizando, y también pueden llevar datos adicionales necesarios para la acción.

```
const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
});

const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
});
```

En este ejemplo, `addTodo` y `toggleTodo` son funciones creadoras de acciones que retornan acciones para añadir un nuevo todo y para cambiar el estado de finalización de un todo, respectivamente.

La relación entre estos elementos en Redux es crucial para gestionar el estado de la aplicación de manera efectiva:

-   **Acciones** describen eventos que ocurren en tu aplicación.
-   **Reducers** especifican cómo el estado de la aplicación cambia en respuesta a las acciones.
-   **Store** contiene el estado de la aplicación y te permite despachar acciones para actualizar el estado.

## Acciones: Iniciando Cambios en el Estado

Gestionar el estado efectivamente es fundamental para crear aplicaciones dinámicas y responsivas. Las acciones, dentro de la arquitectura Redux y bibliotecas de manejo de estado similares, sirven como elementos importantes para iniciar cambios en el estado.

### Creadores de Acciones (Funciones para Crear Acciones)

Los creadores de acciones en Redux son funciones que crean y devuelven objetos de acción. Estos objetos de acción describen lo que ocurrió en tu aplicación y se despachan al store de Redux para iniciar cambios en el estado.

Los creadores de acciones encapsulan la lógica de creación de acciones, haciendo que tu código sea más modular y fácil de probar.

Aquí hay un ejemplo de un creador de acciones:

```js
// Función creadora de acción
const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
});

// Uso del creador de acción
const newTodoAction = addTodo('Comprar víveres');
```

En este ejemplo:

- `addTodo` es una función creadora de acciones que toma `text` como parámetro y devuelve un objeto de acción.
- El objeto de acción tiene un campo `type` (`'ADD_TODO'`) que identifica el tipo de acción y campos adicionales (`id` y `text`) que proporcionan los datos necesarios para la acción.

Los creadores de acciones simplifican el proceso de crear acciones, especialmente cuando las acciones requieren datos complejos o cálculos antes de ser despachadas.

### Tipos de Acciones (Identificando Diferentes Acciones)

Los tipos de acciones en Redux son constantes de cadena que definen el tipo de acción que se está realizando. Se utilizan para identificar y diferenciar las diferentes acciones que se pueden despachar al store de Redux. Al usar constantes de cadena para los tipos de acciones, Redux asegura que los tipos de acciones sean únicos y fáciles de referenciar en toda tu aplicación.

Así es como normalmente se definen los tipos de acciones:

```js
// Tipos de acciones como constantes
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
```

Estas constantes (`ADD_TODO`, `TOGGLE_TODO`, `SET_VISIBILITY_FILTER`) representan diferentes acciones que pueden ocurrir en tu aplicación, como agregar una tarea, alternar el estado de finalización de una tarea, o establecer un filtro de visibilidad para las tareas.

Los tipos de acciones se utilizan típicamente en los objetos de acción creados por los creadores de acciones y se corresponden en los reductores para determinar cómo debe cambiar el estado en respuesta a cada acción.

```js
// Ejemplo de uso de tipos de acciones en un reductor
const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};
```

En este ejemplo:

- `ADD_TODO` y `TOGGLE_TODO` son tipos de acciones utilizados en el `todosReducer` para manejar diferentes tipos de acciones (`'ADD_TODO'` y `'TOGGLE_TODO'`).
- El campo `action.type` en la declaración switch asegura que el reductor responda adecuadamente a cada acción despachada basado en su tipo.

## Cómo Procesar Cambios en el Estado

En el corazón de la gestión del estado están los reductores, funciones puras diseñadas para manejar transiciones de estado de una manera controlada e inmutable.

### Funciones Puras: Reductores en el Centro

Los reductores en Redux son funciones puras responsables de especificar cómo cambia el estado de la aplicación en respuesta a acciones despachadas al store. Toman el estado actual y una acción como argumentos, y devuelven el nuevo estado basado en el tipo de acción.

Aquí hay una descripción de cómo funcionan los reductores y su papel en la gestión de cambios en el estado:

**Funciones Puras**: Los reductores son funciones puras, lo que significa que:

- Producen la misma salida para la misma entrada cada vez que se llaman.
- No causan efectos secundarios (como modificar argumentos o variables globales).
- No mutan directamente el estado, sino que devuelven un nuevo objeto de estado.

**Manejo de Transiciones de Estado**: Los reductores especifican cómo cambia el estado de la aplicación en respuesta a diferentes tipos de acciones. Utilizan el estado actual y la acción despachada para computar y devolver el nuevo estado.

```js
// Ejemplo de un reductor de tareas
const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};
```

En este ejemplo:

- `todosReducer` es una función pura que toma `state` (arreglo actual de tareas) y `action` como argumentos.
- Dependiendo del `action.type`, computa y devuelve un nuevo estado (arreglo de tareas actualizado).

**Actualizaciones Inmutables del Estado**: Los reductores nunca deben mutar directamente el estado. En lugar de eso, crean copias del estado y modifican las copias para producir un nuevo objeto de estado. Esto asegura que Redux pueda detectar cambios en el estado y actualizar los componentes eficientemente.


### Características de las Funciones Puras

Las funciones puras, incluidas las reductoras de Redux, tienen características específicas que las hacen adecuadas para gestionar cambios de estado:

**Deterministas**: Una función pura siempre produce el mismo resultado para la misma entrada. Esta previsibilidad asegura que los reductores se comporten de manera consistente y sean más fáciles de razonar.

**Sin Efectos Secundarios**: Las funciones puras no modifican los argumentos de entrada ni ningún estado externo. Solo dependen de sus parámetros de entrada y producen una salida sin causar efectos secundarios observables.

**Datos Inmutables**: Las funciones puras no mutan datos. En su lugar, crean y devuelven nuevas estructuras de datos. En Redux, los reductores producen un nuevo objeto de estado sin modificar el estado existente, lo que permite una detección de cambios y una gestión del estado eficientes.

**Transparencia Referencial**: Las funciones puras pueden ser reemplazadas por sus valores de retorno sin afectar la corrección del programa. Esta propiedad apoya la composibilidad y facilita la prueba y razonamiento del código.

## Anatomía de una Función Reductora

Una función reductora, en su esencia, define cómo cambia el estado de la aplicación en respuesta a acciones enviadas. Esta función toma dos parámetros: el estado actual y un objeto de acción, determinando el nuevo estado según el tipo de acción recibida.

### Parámetros: Estado Anterior y Objeto de Acción

Una función reductora en Redux es una función pura que toma dos parámetros: el estado anterior (estado antes de que se aplique la acción) y un objeto de acción. Estos parámetros definen cómo el reductor calcula el siguiente estado de la aplicación.

**Estado Anterior**: Este parámetro representa el estado actual de la aplicación antes de que se envíe la acción. Es inmutable y no debe ser modificado directamente dentro del reductor.

**Objeto de Acción**: Un objeto de acción es un objeto simple de JavaScript que describe lo que ha sucedido en tu aplicación. Típicamente tiene un campo `type` que indica el tipo de acción que se está realizando. Otros campos en el objeto de acción pueden proporcionar datos adicionales necesarios para actualizar el estado.

```
const action = {
  type: 'ADD_TODO',
  id: 1,
  text: 'Comprar comestibles'
};
```

En este ejemplo, `action.type` es `'ADD_TODO'`, indicando que queremos agregar un nuevo elemento a la lista de tareas.

### Valor de Retorno: Estado Actualizado

La función reductora debe devolver el estado actualizado basado en el estado anterior y el objeto de acción que se le pasó. El estado actualizado es típicamente un nuevo objeto que representa el estado de la aplicación después de aplicar la acción.

Aquí está la estructura básica de una función reductora:

```
const initialState = {
  todos: [],
  visibilityFilter: 'SHOW_ALL'
};

const todoAppReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          (todo.id === action.id)
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case 'SET_VISIBILITY_FILTER':
      return {
        ...state,
        visibilityFilter: action.filter
      };
    default:
      return state;
  }
};
```

En este ejemplo:

- `todoAppReducer` es una función reductora que gestiona el estado de las tareas y los filtros de visibilidad.
- Toma `state` (estado anterior) y `action` como parámetros.
- Dependiendo del `action.type`, calcula y devuelve un nuevo objeto de estado que refleja los cambios causados por la acción.

### Puntos Clave:

**Actualización Inmutable**: Los reductores nunca deben modificar directamente el estado anterior. En su lugar, deben crear un nuevo objeto de estado copiando el estado anterior (`...state`) y aplicando cambios a él.

**Caso Predeterminado**: El caso `default` en la declaración `switch` devuelve el estado actual sin cambios si el reductor no reconoce el tipo de acción. Esto asegura que el reductor siempre devuelva un objeto de estado válido, incluso si no se hacen cambios.

**Responsabilidad Única**: Cada caso en la declaración `switch` corresponde a un tipo de acción específico y es responsable de actualizar una parte específica del estado de la aplicación. Esto promueve una clara separación de responsabilidades y hace que los reductores sean más fáciles de entender y mantener.

## Cómo Manejar Diferentes Acciones en los Reductores

En Redux, puedes manejar diferentes acciones en los reductores utilizando declaraciones `switch` o lógica condicional. Ambos enfoques buscan determinar cómo debería cambiar el estado de la aplicación basado en el tipo de acción enviada.

### Usando Declaraciones Switch

Las declaraciones `switch` se utilizan comúnmente en los reductores de Redux para manejar diferentes tipos de acción. Cada `case` en la declaración `switch` corresponde a un tipo de acción específico, y el reductor ejecuta la lógica correspondiente basada en el tipo de acción.

Aquí hay un ejemplo de usar declaraciones `switch` en un reductor:

```
const initialState = {
  todos: [],
  visibilityFilter: 'SHOW_ALL'
};

const todoAppReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          (todo.id === action.id)
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case 'SET_VISIBILITY_FILTER':
      return {
        ...state,
        visibilityFilter: action.filter
      };
    default:
      return state;
  }
};
```

-   La función `todoAppReducer` usa una declaración switch para manejar diferentes tipos de acciones (`'ADD_TODO'`, `'TOGGLE_TODO'`, `'SET_VISIBILITY_FILTER'`).
-   Cada bloque `case` especifica cómo se debe actualizar el estado en respuesta al tipo de acción correspondiente.
-   El caso `default` devuelve el estado actual sin cambios si el reductor no reconoce el tipo de acción, asegurando que el reductor siempre devuelva un objeto de estado válido.

### Usando Lógica Condicional

Alternativamente, los reductores también pueden usar lógica condicional (declaraciones if-else) para determinar cómo actualizar el estado en función del tipo de acción. Aunque menos común que las declaraciones switch en Redux, la lógica condicional puede usarse de manera similar para manejar acciones.

Aquí tienes un ejemplo de uso de lógica condicional en un reductor:

```
const todoAppReducer = (state = initialState, action) => {
  if (action.type === 'ADD_TODO') {
    return {
      ...state,
      todos: [
        ...state.todos,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    };
  } else if (action.type === 'TOGGLE_TODO') {
    return {
      ...state,
      todos: state.todos.map(todo =>
        (todo.id === action.id)
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    };
  } else if (action.type === 'SET_VISIBILITY_FILTER') {
    return {
      ...state,
      visibilityFilter: action.filter
    };
  } else {
    return state;
  }
};
```

En este ejemplo:

-   La función `todoAppReducer` usa declaraciones if-else para comprobar el tipo de acción (`action.type`) y ejecutar lógica diferente según el tipo de acción.
-   Cada condición especifica cómo se debe actualizar el estado para el tipo de acción correspondiente.
-   El bloque final `else` devuelve el estado actual sin cambios si el tipo de acción no es reconocido.

### Elección Entre Declaraiones Switch y Lógica Condicional

#### 1\. Declaración Switch:

-   Ventajas: Las declaraciones switch son típicamente más legibles y fáciles de mantener al manejar múltiples tipos de acciones en los reductores de Redux. Separan claramente diferentes casos basados en los tipos de acción.
-   Consideraciones: Asegúrate de que cada tipo de acción tenga un `case` correspondiente en la declaración switch para manejar actualizaciones correctamente.

#### 2\. Lógica Condicional:

-   Ventajas: La lógica condicional (declaraciones if-else) proporciona flexibilidad y puede ser más fácil de entender en ciertos escenarios donde hay menos tipos de acciones.
-   Consideraciones: Mantén la consistencia en el manejo de los tipos de acciones y asegúrate de que cada condición maneje las actualizaciones de estado correctamente.

En la práctica, las declaraciones switch son el enfoque recomendado en los reductores de Redux debido a su claridad y convención dentro de la comunidad de Redux. Ayudan a mantener un enfoque estructurado para gestionar cambios de estado basados en diferentes tipos de acciones, promoviendo la consistencia y la predictibilidad en aplicaciones Redux.

## Despachando Acciones: Cómo Actualizar el Almacén Redux

Despachar acciones en Redux es fundamental para gestionar actualizaciones de estado dentro de tu aplicación. Redux, un contenedor de estado predecible para aplicaciones de JavaScript, se basa en las acciones como cargas de información que envían datos desde tu aplicación al almacén de Redux.

### La Función `dispatch`

En Redux, la función `dispatch` es un método proporcionado por el almacén de Redux. Se utiliza para despachar acciones que desencadenan cambios de estado en la aplicación. Cuando se despacha una acción, el almacén de Redux llama a la función reductor asociada con ella, calcula el nuevo estado y notifica a todos los suscriptores que el estado se ha actualizado.

Así es como se usa la función `dispatch`:

```
import { createStore } from 'redux';

// Función reductor
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// Crear el almacén de Redux
const store = createStore(counterReducer);

// Despachar acciones para actualizar el estado
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
```

En este ejemplo:

-   Creamos un almacén de Redux usando `createStore` y pasamos la función `counterReducer`.
-   La función `store.dispatch` se usa para despachar acciones (`{ type: 'INCREMENT' }` y `{ type: 'DECREMENT' }`) para actualizar el estado.
-   Cada acción despachada dispara el caso correspondiente en el reductor, actualizando el estado según lo definido.

### Despachando Acciones desde Componentes o Eventos

En una aplicación típica de Redux, las acciones a menudo se despachan desde componentes de React en respuesta a interacciones del usuario u otros eventos.

Para despachar acciones desde componentes, típicamente conectas el componente al almacén de Redux usando la función `connect` de React Redux o hooks como `useDispatch`.

Aquí tienes cómo puedes despachar acciones desde un componente de React usando `connect` y `mapDispatchToProps`:

```
import React from 'react';
import { connect } from 'react-redux';

// Funciones creadoras de acciones
const increment = () => ({ type: 'INCREMENT' });
const decrement = () => ({ type: 'DECREMENT' });

// Definición del componente
const Counter = ({ count, increment, decrement }) => (
  <div>
    <p>Count: {count}</p>
    <button onClick={increment}>Incrementar</button>
    <button onClick={decrement}>Decrementar</button>
  </div>
);

```
// Map dispatch to props
const mapDispatchToProps = {
  increment,
  decrement
};

// Conectar el componente a la tienda Redux
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
```

En este ejemplo:

-   `increment` y `decrement` son funciones creadoras de acciones que devuelven acciones (`{ type: 'INCREMENT' }` y `{ type: 'DECREMENT' }`).
-   El componente `Counter` está conectado a la tienda Redux usando `connect`. Recibe `count` del estado de Redux como una prop, junto con los creadores de acciones `increment` y `decrement`.
-   Hacer clic en los botones "Increment" y "Decrement" despacha acciones, que son manejadas por el reductor para actualizar el estado de Redux.

Alternativamente, puedes usar los hooks de React Redux (`useDispatch`) para despachar acciones en componentes funcionales:

```
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
```

En este ejemplo de componente funcional:

-   `useSelector` se utiliza para seleccionar `count` del estado de la tienda Redux.
-   `useDispatch` se utiliza para obtener la función `dispatch` de la tienda Redux.
-   Las funciones `handleIncrement` y `handleDecrement` despachan acciones (`{ type: 'INCREMENT' }` y `{ type: 'DECREMENT' }`) para actualizar el estado de Redux cuando se hace clic en los botones.

## Cómo Acceder a Datos Específicos de la Tienda

Acceder a datos específicos de la tienda en Redux implica navegar a través de la estructura del estado de la aplicación para recuperar la información precisa necesaria para representar componentes o realizar lógica.

### Crear Funciones Selector

Los selectores en Redux son funciones que encapsulan la lógica para recuperar piezas específicas de datos del estado de la tienda Redux. Ayudan a desacoplar los componentes de la estructura del estado y facilitan el acceso eficiente y la transformación de los datos.

Así es como puedes crear funciones selectoras:

```
// Estado inicial de ejemplo en Redux
const initialState = {
  todos: [
    { id: 1, text: 'Learn Redux', completed: false },
    { id: 2, text: 'Write Redux selectors', completed: true },
    // más tareas...
  ],
  visibilityFilter: 'SHOW_COMPLETED'
};

// Función selector para obtener tareas del estado
const getTodos = (state) => state.todos;

// Función selector para filtrar tareas basadas en el filtro de visibilidad
const getVisibleTodos = (state) => {
  const todos = getTodos(state);
  const visibilityFilter = state.visibilityFilter;

  switch (visibilityFilter) {
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed);
    case 'SHOW_ALL':
    default:
      return todos;
  }
};
```

En este ejemplo:

-   `getTodos` es una función selector que recupera el array `todos` desde el estado de Redux.
-   `getVisibleTodos` es una función selector que filtra `todos` basándose en el `visibilityFilter` guardado en el estado.

También puedes componer selectores para crear selectores más complejos:

```
// Función selector compuesta para obtener tareas visibles
const getVisibleTodos = (state) => {
  const todos = getTodos(state);
  const visibilityFilter = state.visibilityFilter;

  switch (visibilityFilter) {
    case 'SHOW_COMPLETED':
      return getCompletedTodos(todos);
    case 'SHOW_ACTIVE':
      return getActiveTodos(todos);
    case 'SHOW_ALL':
    default:
      return todos;
  }
};

// Funciones auxiliares para filtrar tareas
const getCompletedTodos = (todos) => todos.filter(todo => todo.completed);
const getActiveTodos = (todos) => todos.filter(todo => !todo.completed);
```

### Memoización para Uso Eficiente de Selectores

La memoización es una técnica utilizada para optimizar cálculos costosos al almacenar en caché los resultados de llamadas a funciones basándose en sus entradas. En el contexto de los selectores de Redux, la memoización puede mejorar el rendimiento asegurando que los selectores solo recalculen sus resultados cuando sus entradas (estado) cambian.

Puedes usar bibliotecas como `reselect` para memoización en selectores de Redux:

```
npm install reselect
```

Ejemplo de uso de `reselect` para la memoización:

```
import { createSelector } from 'reselect';

// Selectores
const getTodos = (state) => state.todos;
const getVisibilityFilter = (state) => state.visibilityFilter;

// Selector memoizado para obtener tareas visibles
const getVisibleTodos = createSelector(
  [getTodos, getVisibilityFilter],
  (todos, visibilityFilter) => {
    switch (visibilityFilter) {
      case 'SHOW_COMPLETED':
        return todos.filter(todo => todo.completed);
      case 'SHOW_ACTIVE':
        return todos.filter(todo => !todo.completed);
      case 'SHOW_ALL':
      default:
        return todos;
    }
  }
);
```

En este ejemplo:

-   `createSelector` de `reselect` crea un selector memoizado que toma `getTodos` y `getVisibilityFilter` como selectores de entrada.
-   La función selector calcula las tareas filtradas basándose en el `visibilityFilter` y almacena en caché el resultado hasta que los selectores de entrada cambien.
```

Conectar componentes React a Redux es una técnica fundamental para gestionar el estado de la aplicación de manera eficiente en proyectos basados en React. Redux sirve como un almacén centralizado que contiene todo el estado de tu aplicación, haciéndolo accesible a cualquier componente que lo necesite.

### La función `connect` de la librería react-redux

En aplicaciones React que usan Redux para la gestión del estado, la función `connect` de la librería `react-redux` se utiliza para conectar componentes React al almacén Redux. Proporciona una forma de inyectar el estado de Redux y las funciones de despacho de acciones (dispatchers) en tus componentes.

Así es como usas `connect`:

```
import React from 'react';
import { connect } from 'react-redux';

// Define un componente React
const Counter = ({ count, increment, decrement }) => (
  <div>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
  </div>
);

// Mapea el estado de Redux a las props del componente
const mapStateToProps = (state) => ({
  count: state.count
});

// Mapea las acciones de despacho a las props del componente
const mapDispatchToProps = {
  increment: () => ({ type: 'INCREMENT' }),
  decrement: () => ({ type: 'DECREMENT' })
};

// Conecta el componente al almacén Redux
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
```

### Mapeando el Estado y las Acciones a Props

**`mapStateToProps`**: Esta función mapea el estado del almacén Redux a las props de tu componente React. Toma el estado de Redux como argumento y devuelve un objeto. Cada campo en el objeto devuelto se convierte en una prop del componente conectado.

**`mapDispatchToProps`**: Esta función mapea las acciones de despacho a las props de tu componente React. Puede ser un objeto donde cada campo es una función creadora de acciones, o una función que recibe `dispatch` como argumento y devuelve un objeto. Cada creadora de acciones será envuelta automáticamente con `dispatch` para que puedan ser llamadas directamente.

En el ejemplo:

-   `mapStateToProps` mapea el campo `count` del estado de Redux (`state.count`) a la prop `count` del componente `Counter`.
-   `mapDispatchToProps` mapea las acciones `increment` y `decrement` a las props, por lo que al hacer clic en los botones en el componente `Counter` se despacharán las acciones correspondientes (`{ type: 'INCREMENT' }` y `{ type: 'DECREMENT' }`).

### Usando Componentes Conectados en Tu Aplicación

Una vez que un componente está conectado al almacén Redux usando `connect`, puede acceder al estado Redux y despachar acciones mediante props. Así es como puedes usar componentes conectados en tu aplicación:

```
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers'; // Importa tu reductor raíz
import App from './App'; // Importa tu componente conectado

// Crea el almacén Redux con el reductor raíz
const store = createStore(rootReducer);

// Renderiza el componente App dentro del Provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

En esta configuración:

-   `Provider` es un componente de `react-redux` que hace que el almacén Redux esté disponible para cualquier componente anidado que haya sido conectado usando `connect`.
-   `store` se crea usando `createStore` y combinando un reductor raíz (`rootReducer`) que combina todos tus reductores en uno solo.

Al envolver tu componente de nivel superior (`App` en este caso) con `Provider` y pasar el almacén Redux como una prop, todos los componentes conectados dentro de tu aplicación pueden acceder al almacén Redux e interactuar con él a través de props (mapeos de `mapStateToProps` y `mapDispatchToProps`).

## Técnicas Avanzadas de Flujo de Datos en Redux

Las técnicas avanzadas de flujo de datos en Redux amplían los principios fundamentales de la gestión de estado en aplicaciones complejas. Estas técnicas van más allá de las acciones y reductores básicos, introduciendo conceptos como middleware, selectores y acciones asíncronas.

### Acciones Asíncronas (Redux Thunk, Redux Saga)

En Redux, manejar acciones asíncronas implica gestionar acciones que tienen efectos secundarios, como obtener datos de un servidor o actualizar el estado de forma asíncrona. Redux proporciona varias soluciones de middleware para manejar acciones asíncronas de manera efectiva.

#### Redux Thunk

Redux Thunk es un middleware que te permite escribir creadores de acciones que devuelven una función en lugar de un objeto de acción. Esta función puede realizar operaciones asíncronas y despachar acciones síncronas regulares cuando las operaciones asíncronas se completan.

Ejemplo de uso de Redux Thunk para acciones asíncronas:

**Configurando el Middleware Redux Thunk**:

```
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // Importa tu reductor raíz

// Crea el almacén Redux con el middleware thunk
const store = createStore(rootReducer, applyMiddleware(thunk));
```

**Creador de Acción Asíncrona usando Redux Thunk**:

```
// Función creadora de acción usando Redux Thunk
const fetchPosts = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_POSTS_REQUEST' });

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.json();
      dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: posts });
    } catch (error) {
      dispatch({ type: 'FETCH_POSTS_FAILURE', error: error.message });
    }
  };
};
```

-   `fetchPosts` es un creador de acciones que devuelve una función en lugar de un objeto de acción.
-   Dentro de la función, puedes realizar operaciones asíncronas (como obtener datos) y despachar acciones basadas en el resultado.
-   El middleware Redux Thunk intercepta funciones devueltas por los creadores de acciones, permitiendo acciones asíncronas en Redux.

#### Redux Saga

Redux Saga es otro middleware para manejar efectos secundarios en aplicaciones Redux. Utiliza generadores ES6 para facilitar la lectura, escritura y prueba del código asíncrono.

Ejemplo de uso de Redux Saga para manejar acciones asíncronas:

**Configuración del Middleware Redux Saga**:

```
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers'; // Importa tu reductor raíz
import rootSaga from './sagas'; // Importa tu saga raíz

// Crear middleware Redux Saga
const sagaMiddleware = createSagaMiddleware();

// Crear tienda Redux con el middleware Saga
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Ejecutar la saga raíz
sagaMiddleware.run(rootSaga);
```

**Ejemplo de Saga (rootSaga.js)**:

```
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { fetchPostsSuccess, fetchPostsFailure } from './actions'; // Importa tus creadores de acciones

// Saga trabajadora para obtener posts
function* fetchPostsSaga() {
  try {
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts');
    const posts = yield call([response, 'json']);
    yield put(fetchPostsSuccess(posts));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}

// Saga vigilante para escuchar la acción FETCH_POSTS_REQUEST
function* watchFetchPosts() {
  yield takeEvery('FETCH_POSTS_REQUEST', fetchPostsSaga);
}

// Saga raíz
export default function* rootSaga() {
  yield all([
    watchFetchPosts()
    // Añadir más vigilantes si es necesario
  ]);
}
```

En este ejemplo:

-   `fetchPostsSaga` es una saga trabajadora que realiza la operación asíncrona (obtener posts).
-   `watchFetchPosts` es una saga vigilante que escucha acciones específicas (`FETCH_POSTS_REQUEST`) y desencadena la saga trabajadora correspondiente.
-   `rootSaga` combina múltiples sagas usando `all` y las ejecuta usando `sagaMiddleware.run`.

### Middleware para Extender la Funcionalidad de Redux

El middleware en Redux proporciona una forma de extender las capacidades de la tienda de Redux, como registrar acciones, manejar operaciones asíncronas, enrutar, y más. El middleware se sitúa entre el despacho de una acción y el momento en el que llega al reductor, permitiendo la interceptación y manipulación de acciones.

#### Ejemplo de Middleware Personalizado:

```
const loggerMiddleware = store => next => action => {
  console.log('Despachando acción:', action);
  const result = next(action);
  console.log('Nuevo estado:', store.getState());
  return result;
};

// Aplicando middleware personalizado a la tienda Redux
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'; // Importa tu reductor raíz

// Crear tienda Redux con middleware personalizado
const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));
```

En este ejemplo:

-   `loggerMiddleware` es una función de middleware personalizada que registra cada acción despachada y el estado resultante.
-   `next` es una función proporcionada por Redux que permite a la acción continuar al siguiente middleware o al reductor.
-   El middleware personalizado mejora la funcionalidad de Redux interceptando acciones, realizando lógica personalizada y opcionalmente despachando nuevas acciones o modificando las existentes.

## Mejores Prácticas para Gestionar el Flujo de Datos en Redux

Redux proporciona una forma estructurada de gestionar el estado en aplicaciones JavaScript, pero su uso efectivo requiere adherirse a las mejores prácticas. Aquí están mis recomendaciones clave para gestionar el flujo de datos en Redux:

### Organización de Reducers y Acciones

**Estructura y Organización de Archivos**:

-   **Separar preocupaciones**: Mantén las acciones, los reductores y los selectores en archivos separados para mantener claridad y modularidad.
-   **Estructura basada en características**: Agrupa acciones y reductores relacionados en función de características en lugar de tipos.

```
src/
├── actions/
│   ├── todosActions.js
│   └── userActions.js
├── reducers/
│   ├── todosReducer.js
│   └── userReducer.js
├── selectors/
│   ├── todosSelectors.js
│   └── userSelectors.js
└── store.js
```

**Tipos de Acción**:

-   **Constantes**: Usa constantes o enumeraciones para los tipos de acción para evitar errores tipográficos y asegurar consistencia.

```
// Tipos de acción
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
```

**Composición de Reducers**:

-   **Combinar reductores**: Usa `combineReducers` de Redux para combinar múltiples reductores en un único reductor raíz.

```
import { combineReducers } from 'redux';
import todosReducer from './todosReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  user: userReducer
});

export default rootReducer;
```

### Actualizaciones de Estado Inmutables

**Inmutabilidad con el Operador Spread**:

-   **Usar operador spread (`...`)**: Crear nuevos objetos o arreglos al actualizar el estado para mantener la inmutabilidad.

**Bibliotecas Inmutables**:

-   **Immutable.js**: Considera usar bibliotecas como Immutable.js para estructuras de datos más complejas para hacer cumplir la inmutabilidad y optimizar el rendimiento.

```
import { Map, List } from 'immutable';

const initialState = Map({
  todos: List(),
  user: Map()
});

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.update('todos', todos => todos.push(Map({
        id: action.id,
        text: action.text,
        completed: false
      })));

    case TOGGLE_TODO:
      return state.update('todos', todos =>
        todos.map(todo =>
          (todo.get('id') === action.id) ? todo.set('completed', !todo.get('completed')) : todo
        )
      );

    default:
      return state;
  }
};
```

### Pruebas de Aplicaciones Redux

**Pruebas Unitarias**:

-   **Reducers**: Prueba los reducers para asegurarte de que manejen correctamente las acciones y devuelvan el estado esperado.

```
describe('todosReducer', () => {
  it('debería manejar ADD_TODO', () => {
    const action = { type: 'ADD_TODO', id: 1, text: 'Test todo' };
    const initialState = { todos: [] };
    const expectedState = { todos: [{ id: 1, text: 'Test todo', completed: false }] };

    expect(todosReducer(initialState, action)).toEqual(expectedState);
  });
});
```

**Pruebas de Integración**:

-   **Creadores de Acciones y Thunks**: Prueba los creadores de acciones y thunks para verificar que despachen las acciones correctas o manejen operaciones asíncronas.

```
describe('creador de acciones fetchPosts', () => {
  it('crea FETCH_POSTS_SUCCESS cuando fetchPosts ha sido completado', () => {
    const expectedActions = [
      { type: 'FETCH_POSTS_REQUEST' },
      { type: 'FETCH_POSTS_SUCCESS', payload: { /* datos simulados */ } }
    ];

    const store = mockStore({ posts: [] });

    return store.dispatch(fetchPosts()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
```

**Integración con Componentes**:

-   **Componentes Conectados**: Prueba componentes conectados usando `redux-mock-store` para simular el comportamiento de la tienda Redux.

```
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import App from './App';

const mockStore = configureStore([]);

describe('<App />', () => {
  it('renderiza el componente App', () => {
    const store = mockStore({ /* estado simulado */ });

    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(getByText('Welcome to Redux App')).toBeInTheDocument();
  });
});
```

## Conclusión

Redux ofrece una solución poderosa de gestión de estado para aplicaciones JavaScript, proporcionando una forma predecible y centralizada de gestionar el estado de la aplicación.

Ya sea manejando operaciones asíncronas con middleware como Redux Thunk o Redux Saga, o optimizando la gestión de estado a través de prácticas de datos inmutables, Redux te permite construir aplicaciones escalables y mantenibles.

Dominando estas técnicas, puedes aprovechar Redux para simplificar el flujo de datos, mejorar el rendimiento de la aplicación y simplificar las complejidades de la gestión del estado en el desarrollo web moderno.

¡Eso es todo por este artículo! Si deseas continuar la conversación o tienes preguntas, sugerencias o comentarios, no dudes en contactarme en [LinkedIn][35]. Y si disfrutaste de este contenido, considera [invitarme a un café][36] para apoyar la creación de más contenido amigable para desarrolladores.

[1]: #heading-what-is-redux
[2]: #heading-why-use-redux-for-data-management
[3]: #heading-core-concepts-of-redux-data-flow
[4]: #heading-unidirectional-data-flow
[5]: #heading-benefits-of-unidirectional-data-flow
[6]: #heading-state-management-with-redux-store
[7]: #heading-what-is-the-redux-store
[8]: #heading-store-structure-state-reducers-actions
[9]: #heading-actions-initiating-state-changes
[10]: #heading-action-creators-functions-to-create-actions
[11]: #heading-action-types-identifying-different-actions
[12]: #heading-how-to-process-state-changes
[13]: #heading-pure-functions-reducers-at-the-core
[14]: #heading-characteristics-of-pure-functions
[15]: #heading-anatomy-of-a-reducer-function
[16]: #heading-parameters-previous-state-and-action-object
[17]: #heading-return-value-updated-state
[18]: #heading-how-to-handle-different-actions-in-reducers
[19]: #heading-using-switch-statements
[20]: #heading-dispatching-actions-how-to-update-the-redux-store
[21]: #heading-the-dispatch-function
[22]: #heading-dispatching-actions-from-components-or-events
[23]: #heading-how-to-access-specific-data-from-the-store
[24]: #heading-creating-selector-functions
[25]: #heading-memoization-for-efficient-selector-usage
[26]: #heading-how-to-connect-react-components-to-redux
[27]: #heading-the-connect-function-from-react-redux-library
[28]: #heading-mapping-state-and-dispatch-to-props
[29]: #heading-using-connected-components-in-your-application
[30]: #heading-advanced-redux-data-flow-techniques
[31]: #heading-asynchronous-actions-redux-thunk-redux-saga
[32]: #heading-middleware-for-extending-redux-functionality
[33]: #heading-best-practices-for-managing-data-flow-in-redux
[34]: #heading-conclusion
[35]: https://ng.linkedin.com/in/joan-ayebola
[36]: https://www.buymeacoffee.com/joanayebola

