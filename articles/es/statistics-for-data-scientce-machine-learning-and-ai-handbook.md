```markdown
---
title: Aprende Estadística para Ciencia de Datos, Aprendizaje Automático e IA – Manual Completo
date: 2024-09-04T16:04:36.643Z
author: Tatev Aslanyan
authorURL: https://www.freecodecamp.org/news/author/tatevkaren/
originalURL: https://www.freecodecamp.org/news/statistics-for-data-scientce-machine-learning-and-ai-handbook/
posteditor: ""
proofreader: ""
---

Karl Pearson fue un matemático británico que una vez dijo que "La estadística es la gramática de la ciencia". Esto es especialmente cierto para las Ciencias de la Computación e Información, Ciencias Físicas y Ciencias Biológicas.

<!-- more -->

Cuando estás empezando tu recorrido en Ciencia de Datos, Análisis de Datos, Aprendizaje Automático, o IA (incluyendo IA Generativa), tener conocimientos estadísticos te ayudará a aprovechar mejor los insights de los datos y a comprender realmente todos los algoritmos más allá de su enfoque de implementación.

No puedo enfatizar lo suficiente la importancia de la estadística en la ciencia de datos y la Inteligencia Artificial. La estadística proporciona herramientas y métodos para encontrar estructura y dar insights más profundos a los datos. Tanto la Estadística como las Matemáticas aman los hechos y odian las conjeturas. Conocer los fundamentos de estos dos temas importantes te permitirá pensar críticamente y ser creativo al usar los datos para resolver problemas empresariales y tomar decisiones basadas en datos.

### Conceptos estadísticos clave para tu recorrido en ciencia de datos o análisis de datos con Código en Python

En este manual, cubriré los siguientes temas de Estadística para la ciencia de datos, aprendizaje automático e inteligencia artificial (incluyendo GenAI):

-   [Variables aleatorias][1]
-   [Media, Varianza, Desviación Estándar][2]
-   [Covarianza y Correlación][3]
-   [Funciones de distribución de probabilidad (PDFs)][4]
-   [Teorema de Bayes][5]
-   [Regresión Lineal y Mínimos Cuadrados Ordinarios (OLS)][6]
-   [Teorema de Gauss-Markov][7]
-   [Propiedades del parámetro (Sesgo, Consistencia, Eficiencia)][8]
-   [Intervalos de confianza][9]
-   [Pruebas de hipótesis][10]
-   [Significancia estadística][11]
-   [Error Tipo I y Tipo II][12]
-   [Pruebas estadísticas (Prueba t de Student, Prueba F, Prueba t para 2 muestras, Prueba Z para 2 muestras, Prueba de Chi-Cuadrado)][13]
-   [Valor p y sus limitaciones][14]
-   [Estadística Inferencial][15]
-   [Teorema del Límite Central y Ley de los Grandes Números][16]
-   [Técnicas de reducción de dimensionalidad (PCA, FA)][17]
-   [Preparación para entrevistas - Las 7 preguntas principales de estadística con respuestas][18]
-   [Sobre el autor][19]
-   [¿Cómo puedes profundizar más?][20]

Si no tienes conocimientos previos de Estadística y quieres identificar y aprender los conceptos estadísticos esenciales desde cero y prepararte para tus entrevistas de trabajo, entonces este manual es para ti. También será una buena lectura para cualquiera que quiera refrescar sus conocimientos estadísticos.

## Prerrequisitos

Antes de empezar a leer este manual sobre conceptos clave en Estadística para Ciencia de Datos, Aprendizaje Automático e Inteligencia Artificial, hay algunos prerrequisitos que te ayudarán a aprovecharlo al máximo.

Esta lista está diseñada para asegurar que estés bien preparado y puedas comprender completamente los conceptos estadísticos discutidos:

1. **Habilidades Matemáticas Básicas**: Es esencial tener comodidad con matemáticas de nivel de escuela secundaria, incluyendo álgebra y cálculo básico. Estas habilidades son cruciales para comprender las fórmulas y métodos estadísticos.
2. **Pensamiento Lógico**: La capacidad de pensar lógicamente y metódicamente para resolver problemas ayudará a comprender el razonamiento estadístico y aplicar estos conceptos a escenarios basados en datos.
3. **Conocimientos Informáticos**: Es necesario tener conocimientos básicos de uso de computadoras e internet, ya que muchos ejemplos y ejercicios pueden requerir el uso de software estadístico o programación.
4. También se requiere conocimiento básico de Python, como la creación de variables y el trabajo con algunas estructuras de datos básicas y codificación (si no estás familiarizado con estos conceptos, revisa mi **[Curso completo de Python para Ciencia de Datos 2024 - Para principiantes][21]** aquí).
5. **Curiosidad y Voluntad de Aprender**: Un gran interés en aprender y explorar datos es quizás el prerrequisito más importante. El campo de la ciencia de datos está evolucionando constantemente, y un enfoque proactivo para aprender será increíblemente beneficioso.

Este manual no asume conocimientos previos de estadística, haciéndolo accesible para principiantes. Aun así, la familiaridad con los conceptos anteriores mejorará enormemente tu comprensión y capacidad para aplicar métodos estadísticos de manera efectiva en varios dominios.

Si deseas aprender Matemáticas, Estadística, Aprendizaje Automático o IA, revisa nuestro **[Canal de YouTube][22]** y **[LunarTech.ai][23]** para recursos gratuitos.

## Variables Aleatorias

Las variables aleatorias forman la piedra angular de muchos conceptos estadísticos. Puede ser difícil digerir la definición matemática formal de una variable aleatoria, pero en términos simples, es una forma de mapear los resultados de procesos aleatorios, como lanzar una moneda o tirar un dado, a números.

Por ejemplo, podemos definir el proceso aleatorio de lanzar una moneda mediante la variable aleatoria X que toma el valor 1 si el resultado es _cara_ y 0 si el resultado es _cruz._

$$X =  
\\begin{cases}  
1 & \\text{si es cara} \\\\  
0 & \\text{si es cruz}  
\\end{cases}  
$$

En este ejemplo, tenemos un proceso aleatorio de lanzar una moneda donde este experimento puede producir **dos** **resultados posibles**: {0,1}. Este conjunto de todos los posibles resultados se llama el **espacio muestral** del experimento. Cada vez que se repite el proceso aleatorio, se refiere a un **evento**.
```


La probabilidad de un evento es la probabilidad de que una variable aleatoria tome un valor específico de x, lo cual puede describirse por P(x). En el ejemplo de lanzar una moneda, la probabilidad de obtener caras o cruces es la misma, es decir, 0.5 o 50%. Así que tenemos la siguiente configuración:

$$  
\\begin{align}  
\\Pr(X = \\text{caras}) = 0.5 \\\\  
\\Pr(X = \\text{cruces}) = 0.5  
\\end{align}  
$$

donde la probabilidad de un evento, en este ejemplo, solo puede tomar valores en el rango \[0,1\].

## Media, Varianza, Desviación Estándar

Para entender los conceptos de media, varianza y muchos otros temas estadísticos, es importante aprender los conceptos de **población** y **muestra.**

La población es el conjunto de todas las observaciones (individuos, objetos, eventos o procedimientos) y generalmente es muy grande y diversa. Por otro lado, una muestra es un subconjunto de observaciones de la población que idealmente representa verdaderamente a la población.

![1-VnNrkwNuW2hBKA8DC84Gdg](https://www.freecodecamp.org/news/content/images/2024/04/1-VnNrkwNuW2hBKA8DC84Gdg.png)

Fuente de la imagen: [LunarTech][24]

Dado que experimentar con toda una población es o bien imposible o simplemente demasiado caro, los investigadores o analistas usan muestras en lugar de toda la población en sus experimentos o pruebas.

Para asegurarse de que los resultados experimentales sean confiables y se mantengan para toda la población, la muestra debe ser una verdadera representación de la población. Es decir, la muestra debe ser imparcial.

Para este propósito, podemos usar [técnicas de muestreo estadístico][25] como Muestreo Aleatorio, Muestreo Sistemático, Muestreo por Clústeres, Muestreo Ponderado y Muestreo Estratificado.

### Media

La media, también conocida como promedio, es un valor central de un conjunto finito de números. Supongamos que una variable aleatoria X en los datos tiene los siguientes valores:

$$ X\_1, X\_2, X\_3, \\ldots, X\_N $$

donde N es el número de observaciones o puntos de datos en el conjunto de la muestra o simplemente la frecuencia de los datos. Entonces, la **media de la muestra** definida por **μ**, que muy a menudo se usa para aproximar la **media de la población**, puede expresarse de la siguiente manera:

$$  
\\mu = \\frac{\\sum\_{i=1}^{N} x\_i}{N}  
$$

La media también se refiere como **expectativa**, que a menudo se define por **E**() o una variable aleatoria con una barra en la parte superior. Por ejemplo, la expectativa de las variables aleatorias X e Y, es decir, **E**(X) y **E**(Y), respectivamente, puede expresarse de la siguiente manera:

$$  
\\bar{X} = \\frac{\\sum\_{i=1}^{N} X\_i}{N}  
$$  
  
$$  
\\bar{Y} = \\frac{\\sum\_{i=1}^{N} Y\_i}{N}  
$$

Ahora que tenemos una comprensión sólida de la media como medida estadística, veamos cómo podemos aplicar este conocimiento prácticamente usando Python. Python es un lenguaje de programación versátil que, con la ayuda de bibliotecas como NumPy, facilita realizar operaciones matemáticas complejas, incluyendo el cálculo de la media.

En el siguiente fragmento de código, demostramos cómo calcular la media de un conjunto de números usando NumPy. Comenzaremos mostrando el cálculo para un arreglo simple de números. Luego, abordaremos un escenario común encontrado en ciencia de datos: calcular la media de un conjunto de datos que incluye valores indefinidos o ausentes, representados como NaN (Not a Number). NumPy proporciona una función específicamente diseñada para manejar tales casos, permitiéndonos calcular la media ignorando estos valores NaN.

Aquí se muestra cómo puede realizar estas operaciones en Python:

```python
import numpy as np
import math
x = np.array([1,3,5,6])
mean_x = np.mean(x)

# en caso de que los datos contengan valores Nan
x_nan = np.array([1,3,5,6, math.nan])
mean_x_nan = np.nanmean(x_nan)
```

### Varianza

La varianza mide qué tan lejos están los puntos de datos del valor promedio. Es igual a la suma de los cuadrados de las diferencias entre los valores de los datos y el promedio (la media).

Podemos expresar la **varianza de la población** de la siguiente manera:

```python
x = np.array([1,3,5,6])
variance_x = np.var(x)

# aquí necesita especificar los grados de libertad (df) el número máximo de puntos de datos lógicamente independientes que tienen libertad para variar
x_nan = np.array([1,3,5,6, math.nan])
mean_x_nan = np.nanvar(x_nan, ddof = 1)
```

Para derivar expectativas y varianzas de diferentes funciones de distribución de probabilidad populares, [consulte este repositorio de Github][26].

### Desviación Estándar

La desviación estándar es simplemente la raíz cuadrada de la varianza y mide la magnitud en la que los datos varían respecto a su media. La desviación estándar definida por **sigma** puede expresarse de la siguiente manera:

$$  
\\sigma^2 = \\frac{\\sum\_{i=1}^{N} (x\_i - \\mu)^2}{N}  
$$

La desviación estándar a menudo es preferida sobre la varianza porque tiene las mismas unidades que los puntos de datos, lo que significa que se puede interpretar más fácilmente.

Para calcular la varianza de la población usando Python, utilizamos la función var de la biblioteca NumPy. De forma predeterminada, esta función calcula la varianza de la población configurando el parámetro ddof (Delta Degrees of Freedom) en 0. Sin embargo, al tratar con muestras y no con toda la población, normalmente se configuraría ddof en 1 para obtener la varianza de la muestra.

El fragmento de código proporcionado muestra cómo calcular la varianza para un conjunto de datos. Además, muestra cómo calcular la varianza cuando hay valores NaN en los datos. Los valores NaN representan datos ausentes o indefinidos. Al calcular la varianza, estos valores NaN deben manejarse correctamente; de lo contrario, pueden resultar en una varianza que no es un número (NaN), lo cual no es informativo.

```python
x = np.array([1,3,5,6])
variance_x = np.std(x)

x_nan = np.array([1,3,5,6, math.nan])
mean_x_nan = np.nanstd(x_nan, ddof = 1)
```

### Covarianza

La covarianza es una medida de la variabilidad conjunta de dos variables aleatorias y describe la relación entre estas dos variables. Se define como el valor esperado del producto de las desviaciones de las dos variables aleatorias respecto a sus medias.

La covarianza entre dos variables aleatorias X y Z puede describirse mediante la siguiente expresión, donde **E**(X) y **E**(Z) representan las medias de X y Z, respectivamente.

$$ \\text{Cov}(X, Z) = E\\left\[(X - E(X))(Z - E(Z))\\right\] $$

La covarianza puede tomar valores negativos o positivos, así como un valor de 0. Un valor positivo de la covarianza indica que dos variables aleatorias tienden a variar en la misma dirección, mientras que un valor negativo sugiere que estas variables varían en direcciones opuestas. Finalmente, el valor 0 significa que no varían juntas.

Para explorar el concepto de covarianza de manera práctica, utilizaremos Python con la biblioteca NumPy, que proporciona potentes operaciones numéricas. La función np.cov se puede usar para calcular la matriz de covarianza para dos o más conjuntos de datos. En la matriz, los elementos diagonales representan la varianza de cada conjunto de datos, y los elementos fuera de la diagonal representan la covarianza entre cada par de conjuntos de datos.

Veamos un ejemplo de cálculo de la covarianza entre dos conjuntos de datos:

```python
x = np.array([1,3,5,6])
y = np.array([-2,-4,-5,-6])

#esto devolverá la matriz de covarianza de x,y que contiene x_variance, y_variance en los elementos diagonales y la covarianza de x,y
cov_xy = np.cov(x,y)
```

### Correlación

La correlación también es una medida de una relación. Mide tanto la fuerza como la dirección de la relación lineal entre dos variables.

Si se detecta una correlación, esto significa que existe una relación o un patrón entre los valores de dos variables objetivo. La correlación entre dos variables aleatorias X y Z es igual a la covarianza entre estas dos variables dividida por el producto de las desviaciones estándar de estas variables. Esto se puede describir mediante la siguiente expresión:

$$ \\rho\_{X,Z} = \\frac{\\text{Cov}(X, Z)}{\\sigma\_X \\sigma\_Z} $$

Los valores de los coeficientes de correlación varían entre -1 y 1. Tenga en cuenta que la correlación de una variable consigo misma es siempre 1, es decir **Cor(X, X) = 1**.

Otra cosa a tener en cuenta al interpretar la correlación es no confundirla con **causalidad**, dado que una correlación no es necesariamente una causalidad. Incluso si existe una correlación entre dos variables, no se puede concluir que una variable cause un cambio en la otra. Esta relación podría ser coincidental, o un tercer factor podría estar causando que ambas variables cambien.

```python
x = np.array([1,3,5,6])
y = np.array([-2,-4,-5,-6])

corr = np.corrcoef(x,y)
```

## Funciones de Distribución de Probabilidad

Una función que describe todos los posibles valores, el espacio muestral, y las correspondientes probabilidades que una variable aleatoria puede tomar dentro de un rango dado, delimitado entre los valores mínimo y máximo posibles, se llama **una función de distribución de probabilidad (pdf)** o densidad de probabilidad.

Toda pdf debe satisfacer los siguientes dos criterios:

$$  
0 \\leq \\Pr(X) \\leq 1 \\\\  
\\sum p(X) = 1  
$$

donde el primer criterio establece que todas las probabilidades deben ser números en el rango de \[0,1\] y el segundo criterio establece que la suma de todas las probabilidades posibles debe ser igual a 1.

Las funciones de probabilidad suelen clasificarse en dos categorías: **discreta** y **continua**.

La función de distribución discreta describe el proceso aleatorio con un espacio muestral **contable**, como en el ejemplo de lanzar una moneda que solo tiene dos resultados posibles. Las funciones de distribución continua describen el proceso aleatorio con un espacio muestral **continuo**.

Ejemplos de funciones de distribución discreta son [Bernoulli][27], [Binomial][28], [Poisson][29], [Uniforme Discreta][30]. Ejemplos de funciones de distribución continua son [Normal][31], [Uniforme Continua][32], [Cauchy][33].

### Distribución Binomial

[La distribución binomial][34] es la distribución de probabilidad discreta del número de éxitos en una secuencia de **n** experimentos independientes, cada uno con un resultado booleano: **éxito** (con probabilidad **p**) o **fracaso** (con probabilidad **q** = 1 − p).

Supongamos que una variable aleatoria X sigue una distribución binomial, entonces la probabilidad de observar **k** éxitos en n ensayos independientes puede expresarse mediante la siguiente función de densidad de probabilidad:

$$ \\Pr(X = k) = \\binom{n}{k} p^k q^{n-k} $$

La distribución binomial es útil al analizar los resultados de experimentos independientes repetidos, especialmente si estás interesado en la probabilidad de alcanzar un umbral particular dado un error específico.

#### Media y Varianza de la Distribución Binomial

La media de una distribución binomial, denotada como _E_(_X_)=_np_, te dice el número promedio de éxitos que puedes esperar si realizas _n_ ensayos independientes de un experimento binario.

Un experimento binario es uno donde solo hay dos resultados: éxito (con probabilidad _p_) o fracaso (con probabilidad _q_\=1−_p_).
```

Por ejemplo, si lanzas una moneda 100 veces y defines un éxito como que la moneda caiga en cara (digamos que la probabilidad de cara es 0.5), la distribución binomial te diría cuán probable es obtener cualquier número de caras en esos 100 lanzamientos. La media _E_(_X_) sería 100×0.5=50, lo que indica que, en promedio, se esperaría obtener 50 caras.

La varianza Var(X)=npq mide la dispersión de la distribución, indicando cuánto es probable que el número de éxitos se desvíe de la media.

Continuando con el ejemplo del lanzamiento de la moneda, la varianza sería 100×0.5×0.5=25, lo cual te informa sobre la variabilidad de los resultados. Una varianza menor significaría que los resultados están más agrupados alrededor de la media, mientras que una varianza mayor indica que están más dispersos.

Estos conceptos son cruciales en muchos campos. Por ejemplo:

-   **Control de Calidad**: Los fabricantes podrían usar la distribución binomial para predecir el número de artículos defectuosos en un lote, ayudándoles a entender la calidad y consistencia de su proceso de producción.
-   **Cuidados de la Salud**: En medicina, podría usarse para calcular la probabilidad de que un cierto número de pacientes respondan a un tratamiento, basado en tasas de éxito pasadas.
-   **Finanzas**: En finanzas, los modelos binomiales se usan para evaluar el riesgo de estrategias de portafolio o inversión, prediciendo el número de veces que un activo alcanzará un cierto punto de precio.
-   **Análisis de Encuestas y Sondeos**: Al predecir resultados electorales o preferencias de clientes, los encuestadores podrían usar la distribución binomial para estimar cuántas personas favorecerán a un candidato o un producto, dada la probabilidad extraída de una muestra.

Entender la media y la varianza de la distribución binomial es fundamental para interpretar los resultados y tomar decisiones informadas basadas en la probabilidad de diferentes resultados.

La figura a continuación visualiza un ejemplo de distribución Binomial donde el número de ensayos independientes es igual a 8 y la probabilidad de éxito en cada ensayo es igual al 16%.

![1-68nMYVFT0e5VsMBf8c226g](https://www.freecodecamp.org/news/content/images/2024/04/1-68nMYVFT0e5VsMBf8c226g.png)

Distribución binomial - mostrando el número de éxitos y la probabilidad. Fuente de la imagen: [LunarTech][35]

El código Python a continuación crea un histograma para visualizar la distribución de resultados de 1000 experimentos, cada uno consistiendo en 8 ensayos con una probabilidad de éxito de 0.16. Se utiliza NumPy para generar los datos de la distribución binomial y Matplotlib para graficar el histograma, mostrando la probabilidad del número de éxitos en esos ensayos.

```python
# Generación aleatoria de 1000 muestras binomiales independientes
import numpy as np
import matplotlib.pyplot as plt

n = 8
p = 0.16
N = 1000
X = np.random.binomial(n,p,N)
# Histograma de la distribución binomial

counts, bins, ignored = plt.hist(X, 20, density = True, rwidth = 0.7, color = 'purple')
plt.title("Distribución binomial con p = 0.16 n = 8")
plt.xlabel("Número de éxitos")
plt.ylabel("Probabilidad")
plt.show()
```

### Distribución de Poisson

[La distribución de Poisson][36] es la distribución de probabilidad discreta del número de eventos que ocurren en un período de tiempo especificado, dado el número promedio de veces que el evento ocurre durante ese período de tiempo.

Supongamos que una variable aleatoria X sigue una distribución de Poisson. Entonces la probabilidad de observar **k** eventos durante un período de tiempo puede expresarse mediante la siguiente función de probabilidad:

$$ \\Pr(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!} $$

donde **e** es [**el número de Euler**][37] y **λ** lambda, el **parámetro de tasa de llegada**, es el valor esperado de X. La función de distribución de Poisson es muy popular por su uso en la modelización de eventos contables que ocurren dentro de un intervalo de tiempo dado.

#### Media y Varianza de la Distribución de Poisson

La distribución de Poisson es particularmente útil para modelizar el número de veces que un evento ocurre dentro de un marco temporal especificado. La media E(X) y la varianza Var(X) de una distribución de Poisson son ambas iguales a λ, que es la tasa promedio a la que ocurren los eventos (también conocido como el parámetro de tasa). Esto hace que la distribución de Poisson sea única, ya que se caracteriza por este único parámetro.

El hecho de que la media y la varianza sean iguales significa que a medida que observamos más eventos, la distribución del número de ocurrencias se vuelve más predecible. Se utiliza en varios campos como negocios, ingeniería y ciencia para tareas como:

Predecir el número de llegadas de clientes a una tienda dentro de una hora. Estimar el número de correos electrónicos que recibirías en un día.  Entender el número de defectos en un lote de materiales.

Así, la distribución de Poisson ayuda a hacer pronósticos probabilísticos sobre la ocurrencia de eventos raros o aleatorios a lo largo de intervalos de tiempo o espacio.

$$  
E(X) = \\lambda \\\\  
\\text{Var}(X) = \\lambda  
$$

Por ejemplo, la distribución de Poisson puede ser utilizada para modelar el número de clientes que llegan a la tienda entre las 7 y las 10 pm, o el número de pacientes que llegan a una sala de emergencias entre las 11 y las 12 pm.

La figura a continuación visualiza un ejemplo de distribución de Poisson donde contamos el número de visitantes web que llegan al sitio web donde la tasa de llegada, lambda, se asume igual a 7 minutos.

Generación aleatoria a partir de una distribución de Poisson con lambda = 7. Fuente de la imagen: [LunarTech][38]

En el análisis de datos práctico, a menudo es útil simular la distribución de eventos. A continuación se muestra un fragmento de código en Python que demuestra cómo generar una serie de puntos de datos que siguen una distribución de Poisson usando NumPy. Luego creamos un histograma utilizando Matplotlib para visualizar la distribución del número de visitantes (como ejemplo) que podríamos esperar ver, basado en nuestra tasa promedio λ = 7.

Este histograma ayuda a entender la forma y variabilidad de la distribución. El número más probable de visitantes está alrededor de la media λ, pero la distribución también muestra la probabilidad de ver números menores o mayores.

```python
# Generación aleatoria de 1000 muestras independientes de Poisson
import numpy as np
lambda_ = 7
N = 1000
X = np.random.poisson(lambda_, N)

# Histograma de la distribución de Poisson
import matplotlib.pyplot as plt
counts, bins, ignored = plt.hist(X, 50, density=True, color='purple')
plt.title("Generación aleatoria a partir de una distribución de Poisson con lambda = 7")
plt.xlabel("Número de visitantes")
plt.ylabel("Probabilidad")
plt.show()
```

### Distribución Normal

[La distribución de probabilidad normal][39] es la distribución de probabilidad continua para una variable aleatoria de valor real. La distribución normal, también llamada **distribución gaussiana**, es posiblemente una de las funciones de distribución más populares que se utilizan comúnmente en las ciencias sociales y naturales con fines de modelado. Por ejemplo, se utiliza para modelar la altura de las personas o los puntajes en pruebas.

Supongamos que una variable aleatoria X sigue una distribución normal. Entonces, su función de densidad de probabilidad se puede expresar de la siguiente manera:

$$  
\\Pr(X = k) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{1}{2} \\left(\\frac{x-\\mu}{\\sigma}\\right)^2}  
$$

donde el parámetro **μ** (mu) es la media de la distribución, también conocido como el **parámetro de ubicación**, y el parámetro **σ** (sigma) es la desviación estándar de la distribución, también conocido como el **parámetro de escala**. El número [**π**][40] (pi) es una constante matemática aproximadamente igual a 3.14.

#### Media y varianza de la distribución normal

$$  
E(X) = \\mu \\\\  
\\text{Var}(X) = \\sigma^2  
$$

La figura a continuación visualiza un ejemplo de distribución normal con una media de 0 (**μ = 0**) y una desviación estándar de 1 (**σ = 1**), que se conoce como distribución **normal estándar**, la cual es simétrica.

![1-T_jAWtNjpf5lx29TbqwigQ](https://www.freecodecamp.org/news/content/images/2024/04/1-T_jAWtNjpf5lx29TbqwigQ.png)

Generación aleatoria de 1000 observaciones de una distribución normal (mu = 0, sigma = 1). Fuente de la imagen: [LunarTech][41]

La visualización de la distribución normal estándar es crucial porque esta distribución sustenta muchos métodos estadísticos y teoría de probabilidad. Cuando los datos se distribuyen normalmente con una media (μ) de 0 y una desviación estándar (σ) de 1, se denomina distribución normal estándar. Es simétrica alrededor de la media, y la forma de la curva a menudo se denomina "curva de campana" debido a su forma.

La distribución normal estándar es fundamental por las siguientes razones:

-   **Teorema del Límite Central:** Este teorema establece que, bajo ciertas condiciones, la suma de un gran número de variables aleatorias se distribuirá aproximadamente de manera normal. Permite el uso de la teoría de probabilidad normal para medias y sumas de muestras, incluso cuando los datos originales no están distribuidos normalmente.
-   **Puntajes Z:** Los valores de cualquier distribución normal se pueden transformar en la distribución normal estándar utilizando puntajes Z, que indican cuántas desviaciones estándar está un elemento de la media. Esto permite la comparación de puntajes entre diferentes distribuciones normales.
-   **Inferencia Estadística y Pruebas AB:** Muchas pruebas estadísticas, como las pruebas t y ANOVAs, asumen que los datos siguen una distribución normal, o dependen del teorema del límite central. Comprender la distribución normal estándar ayuda en la interpretación de los resultados de estas pruebas.
-   **Intervalos de Confianza y Pruebas de Hipótesis:** Las propiedades de la distribución normal estándar se utilizan para construir intervalos de confianza y realizar pruebas de hipótesis.

Todos estos temas los cubriremos a continuación.

Por lo tanto, poder visualizar y comprender la distribución normal estándar es clave para aplicar muchas técnicas estadísticas con precisión.

El siguiente código en Python utiliza NumPy para generar 1000 muestras aleatorias de una distribución normal con una media (μ) de 0 y una desviación estándar (σ) de 1, que son los parámetros estándar para la distribución normal estándar. Estas muestras generadas se almacenan en la variable X.

Para visualizar la distribución de estas muestras, el código emplea Matplotlib para crear un histograma. La función plt.hist se utiliza para trazar el histograma de las muestras con 30 columnas, y el parámetro density se establece en True para normalizar el histograma de manera que el área bajo él sume 1. Esto convierte efectivamente el histograma en un gráfico de densidad de probabilidad.

Además, se utiliza la biblioteca SciPy para superponer la función de densidad de probabilidad (PDF) de la distribución normal teórica sobre el histograma. La función norm.pdf genera los valores y para el PDF dado un arreglo de valores x. Esta curva teórica se traza en amarillo sobre el histograma para mostrar cuán estrechamente se ajustan las muestras aleatorias a la distribución esperada.

```python
# Generación aleatoria de 1000 muestras normales independientes
import numpy as np
mu = 0
sigma = 1
N = 1000
X = np.random.normal(mu,sigma,N)

# Distribución de la población
from scipy.stats import norm
valores_x = np.arange(-5,5,0.01)
valores_y = norm.pdf(valores_x)
#Histograma de la muestra con distribución de la población
import matplotlib.pyplot as plt
cuentas, contenedores, ignorado = plt.hist(X, 30, density = True, color = 'purple',label = 'Distribución Muestral')
plt.plot(valores_x,valores_y, color = 'y',linewidth = 2.5,label = 'Distribución de la Población')
plt.title("Generación aleatoria de 1000 observaciones de distribución Normal mu = 0 sigma = 1")
plt.ylabel("Probabilidad")
plt.legend()
plt.show()
```

## Teorema de Bayes

El Teorema de Bayes (a menudo llamado **Ley de Bayes**) es posiblemente la regla más poderosa de la probabilidad y las estadísticas. Fue nombrado así por el famoso estadístico y filósofo inglés, Thomas Bayes.

![0-ypJ6xW1FA_Lh7Faw](https://www.freecodecamp.org/news/content/images/2024/04/0-ypJ6xW1FA_Lh7Faw.gif)

El matemático y filósofo inglés Thomas Bayes

El teorema de Bayes es una poderosa ley de la probabilidad que lleva el concepto de **subjetividad** al mundo de las Estadísticas y las Matemáticas donde todo se trata de hechos. Describe la probabilidad de un evento, basada en la información previa de **condiciones** que podrían estar relacionadas con ese evento.

Por ejemplo, si se sabe que el riesgo de contraer el Coronavirus o Covid-19 aumenta con la edad, entonces el Teorema de Bayes permite determinar el riesgo para un individuo de una edad conocida con mayor precisión. Esto lo hace condicionándolo en la edad en lugar de simplemente asumir que este individuo es común a la población en general.

El concepto de **probabilidad condicional**, que juega un papel central en el teorema de Bayes, es una medida de la probabilidad de que ocurra un evento, dado que otro evento ya ha ocurrido.

El teorema de Bayes se puede describir con la siguiente expresión donde X e Y representan los eventos X e Y, respectivamente:

$$ \\Pr(X | Y) = \\frac{\\Pr(Y | X) \\Pr(X)}{\\Pr(Y)} $$

-   _Pr_ (X|Y): la probabilidad de que ocurra el evento X dado que el evento o condición Y ha ocurrido o es verdadero
-   _Pr_ (Y|X): la probabilidad de que ocurra el evento Y dado que el evento o condición X ha ocurrido o es verdadero
-   _Pr_ (X) y _Pr_ (Y): las probabilidades de observar los eventos X e Y, respectivamente

En el caso del ejemplo anterior, la probabilidad de contraer el Coronavirus (evento X) condicionada a estar en una cierta edad es _Pr_ (X|Y). Esto es igual a la probabilidad de estar en una cierta edad dado que la persona contrajo el Coronavirus, _Pr_ (Y|X), multiplicada por la probabilidad de contraer el Coronavirus, _Pr_ (X), dividida por la probabilidad de estar en una cierta edad, _Pr_ (Y).

## Regresión Lineal

Anteriormente, introdujimos el concepto de causalidad entre variables, que ocurre cuando una variable tiene un impacto directo en otra variable.

Cuando la relación entre dos variables es lineal, entonces la Regresión Lineal es un método estadístico que puede ayudar a modelar el impacto de un cambio unitario en una variable, **la variable independiente** en los valores de otra variable, **la variable dependiente**.

Las variables dependientes a menudo se denominan **variables de respuesta** o **variables explicadas,** mientras que las variables independientes a menudo se denominan **regresores** o **variables explicativas**.

Cuando el modelo de Regresión Lineal se basa en una sola variable independiente, entonces el modelo se llama **Regresión Lineal Simple**. Cuando el modelo se basa en múltiples variables independientes, se le llama **Regresión Lineal Múltiple.**

La Regresión Lineal Simple se puede describir con la siguiente expresión:

$$ Y\_i = \\beta\_0 + \\beta\_1X\_i + u\_i $$

donde **Y** es la variable dependiente, **X** es la variable independiente que es parte de los datos, **β0** es la intersección que es desconocida y constante, **β1** es el coeficiente de pendiente o un parámetro correspondiente a la variable X que también es desconocido y constante. Finalmente, **u** es el término de error que el modelo comete al estimar los valores de Y.

La idea principal detrás de la regresión lineal es encontrar la línea recta que mejor se ajuste, **la línea de regresión,** a un conjunto de datos emparejados (X, Y).

Un ejemplo de la aplicación de la Regresión Lineal es modelar el impacto de la longitud de las aletas en la masa corporal de los pingüinos, lo cual se visualiza a continuación:

![1-cS-5_yS2xa--V97U1RoAIQ](https://www.freecodecamp.org/news/content/images/2024/04/1-cS-5_yS2xa--V97U1RoAIQ.png)

Fuente de la imagen: [LunarTech][42]

El fragmento de código R que has compartido es para crear un gráfico de dispersión con una línea de regresión lineal utilizando el paquete `ggplot2` en R, que es una biblioteca poderosa y ampliamente utilizada para crear gráficos y visualizaciones. El código usa un conjunto de datos llamado `penguins` del paquete `palmerpenguins`, que presumiblemente contiene datos sobre especies de pingüinos, incluyendo medidas como la longitud de las aletas y la masa corporal.

```python
# Código R para el gráfico
install.packages("ggplot2")
install.packages("palmerpenguins")
library(palmerpenguins)
library(ggplot2)
View(data(penguins))
ggplot(data = penguins, aes(x = flipper_length_mm,y = body_mass_g))+
  geom_smooth(method = "lm", se = FALSE, color = 'purple')+
  geom_point()+
  labs(x="Longitud de la Aleta (mm)",y="Masa Corporal (g)")
```
```

$$ Y\_i = \\beta\_0 + \\beta\_1X\_{1,i} + \\beta\_2X\_{2,i} + \\beta\_3X\_{3,i} + u\_i $$

### Mínimos Cuadrados Ordinarios

El método de mínimos cuadrados ordinarios (MCO) es una técnica para estimar los parámetros desconocidos como β0 y β1 en un modelo de regresión lineal. El modelo se basa en el principio de **mínimos cuadrados**. Este minimiza la suma de los cuadrados de las diferencias entre la variable dependiente observada y sus valores que son predichos por la función lineal de la variable independiente (a menudo referidos como **valores ajustados**).

Esta diferencia entre los valores reales y predichos de la variable dependiente Y se denomina **residuo**. Así, el MCO minimiza la suma de los residuos cuadrados.

Este problema de optimización resulta en las siguientes estimaciones de MCO para los parámetros desconocidos β0 y β1, que también se conocen como **estimaciones de coeficientes**:

$$ \\hat{\\beta}_1 = \\frac{\\sum_{i=1}^{N} (X\_i - \\bar{X})(Y\_i - \\bar{Y})}{\\sum\_{i=1}^{N} (X\_i - \\bar{X})^2} $$

$$ \\hat{\\beta}\_0 = \\bar{Y} - \\hat{\\beta}\_1\\bar{X} $$

Una vez que estos parámetros del modelo de regresión lineal simple son estimados, los **valores ajustados** de la variable de respuesta pueden ser calculados de la siguiente manera:

$$ \\hat{Y}\_i = \\hat{\\beta}\_0 + \\hat{\\beta}\_1X\_i $$

### Error Estándar

Los **residuos** o los términos de error estimados pueden determinarse de la siguiente manera:

$$ \\hat{u}\_i = Y\_i - \\hat{Y}\_i $$

Es importante tener en cuenta la diferencia entre los términos de error y los residuos. Los términos de error nunca se observan, mientras que los residuos se calculan a partir de los datos. El MCO estima los términos de error para cada observación pero no el término de error real. Así, la verdadera varianza del error sigue siendo desconocida.

Además, estas estimaciones están sujetas a incertidumbre de muestreo. Esto significa que nunca podremos determinar la estimación exacta, el valor verdadero, de estos parámetros a partir de datos de muestra en una aplicación empírica. Pero podemos estimarlo calculando la **varianza del residuo de la muestra** usando los residuos de la siguiente manera:

$$ \\hat{\\sigma}^2 = \\frac{\\sum\_{i=1}^{N} \\hat{u}\_i^2}{N - 2} $$

Esta estimación de la varianza de los residuos de la muestra nos ayuda a estimar la varianza de los parámetros estimados, que a menudo se expresa de la siguiente forma:

$$ \\text{Var}(\\hat{\\beta}) $$

La raíz cuadrada de este término de varianza se llama **el error estándar** de la estimación. Este es un componente clave para evaluar la precisión de las estimaciones de los parámetros. Se utiliza para calcular las estadísticas de prueba y los intervalos de confianza.

El error estándar puede expresarse de la siguiente forma:

$$ SE(\\hat{\\beta}) = \\sqrt{\\text{Var}(\\hat{\\beta})} $$

Es importante tener en cuenta la diferencia entre los términos de error y los residuos. Los términos de error nunca se observan, mientras que los residuos se calculan a partir de los datos.

#### Supuestos del MCO

El método de estimación del MCO hace los siguientes supuestos que deben cumplirse para obtener resultados de predicción confiables:

1.  El supuesto de **linealidad** establece que el modelo es lineal en parámetros.
2.  El supuesto de **muestra aleatoria** establece que todas las observaciones en la muestra son seleccionadas aleatoriamente.
3.  El supuesto de **exogeneidad** establece que las variables independientes no están correlacionadas con los términos de error.
4.  El supuesto de **homocedasticidad** establece que la varianza de todos los términos de error es constante.
5.  El supuesto de **no multicolinealidad** perfecta establece que ninguna de las variables independientes es constante y no existen relaciones lineales exactas entre las variables independientes.

El fragmento de código Python que has compartido realiza una regresión de Mínimos Cuadrados Ordinarios (MCO), que es un método utilizado en estadística para estimar la relación entre variables independientes y una variable dependiente. Este proceso implica calcular la línea de mejor ajuste a través de los puntos de datos que minimiza la suma de las diferencias cuadradas entre los valores observados y los valores predichos por el modelo.

El código define una función `runOLS(Y, X)` que toma una variable dependiente `Y` y una variable independiente `X` y realiza los siguientes pasos:

1.  Estima los coeficientes de MCO (beta\_hat) usando la solución de álgebra lineal al problema de mínimos cuadrados.
2.  Hace predicciones (`Y_hat`) usando los coeficientes estimados y calcula los residuos.
3.  Calcula la suma de residuos cuadrados (RSS), la suma total de cuadrados (TSS), el error cuadrático medio (MSE), la raíz del error cuadrático medio (RMSE) y el valor R-cuadrado, que son métricas comunes utilizadas para evaluar el ajuste del modelo.
4.  Calcula el error estándar de las estimaciones de los coeficientes, las estadísticas t, los valores p y los intervalos de confianza para los coeficientes estimados.

Estos cálculos son estándar en el análisis de regresión y se utilizan para interpretar y entender la fuerza y significancia de la relación entre las variables. El resultado de esta función incluye los coeficientes estimados y varias estadísticas que ayudan a evaluar el rendimiento del modelo.

```python
def runOLS(Y,X):

   # Estimación de MCO Y = Xb + e --> beta_hat = (X'X)^-1(X'Y)
   beta_hat = np.dot(np.linalg.inv(np.dot(np.transpose(X), X)), np.dot(np.transpose(X), Y))

   # Predicción de MCO
   Y_hat = np.dot(X,beta_hat)
   residuals = Y-Y_hat
   RSS = np.sum(np.square(residuals))
   sigma_squared_hat = RSS/(N-2)
   TSS = np.sum(np.square(Y-np.repeat(Y.mean(),len(Y))))
   MSE = sigma_squared_hat
   RMSE = np.sqrt(MSE)
   R_squared = (TSS-RSS)/TSS
```

```markdown
#t-estadísticas
t_stat = np.round(beta_hat[i,0]/SE_i,3)
t_stats.append(t_stat)

#valor-p de t-estadística p[|t_stat| >= t-treshhold dos lados]
p_value = t.sf(np.abs(t_stat),N-2) * 2
p_values.append(np.round(p_value,3))

#Intervalos de confianza = beta_hat -+ margen de error
t_critical = t.ppf(q =1-0.05/2, df = N-2)
margin_of_error = t_critical*SE_i
CI = [np.round(beta_hat[i,0]-margin_of_error,3), np.round(beta_hat[i,0]+margin_of_error,3)]
CI_s.append(CI)
return(beta_hat, SE, t_stats, p_values,CI_s, 
       MSE, RMSE, R_squared)
```

## Propiedades del Parámetro

Bajo la suposición de que los criterios/suposiciones de OLS que acabamos de discutir se satisfacen, los estimadores OLS de los coeficientes β0 y β1 son **BLUE** y **Consistentes**. Entonces, ¿qué significa esto?

### Teorema de Gauss-Markov

Este teorema destaca las propiedades de las estimaciones de OLS donde el término **BLUE** significa **Estimador Lineal Insesgado Óptimo**. Exploremos más en detalle lo que esto significa.

#### Sesgo

El **sesgo** de un estimador es la diferencia entre su valor esperado y el verdadero valor del parámetro que se está estimando. Puede expresarse de la siguiente manera:

$$ \\text{Sesgo}(\\beta, \\hat{\\beta}) = E(\\hat{\\beta}) - \\beta $$

Cuando afirmamos que el estimador es **insesgado**, queremos decir que el sesgo es igual a cero. Esto implica que el valor esperado del estimador es igual al verdadero valor del parámetro, es decir:

$$ E(\\hat{\\beta}) = \\beta $$

La insesgadez no garantiza que la estimación obtenida con cualquier muestra particular sea igual o cercana a β. Lo que significa es que, si **repetidamente** tomamos muestras aleatorias de la población y luego calculamos la estimación cada vez, entonces el promedio de estas estimaciones sería igual o muy cercano a β.

#### Eficiencia

El término **Óptimo** en el teorema de Gauss-Markov se relaciona con la varianza del estimador y se refiere como **eficiencia**_._ Un parámetro puede tener múltiples estimadores, pero aquel con la varianza más baja se llama eficiente.

#### Consistencia

El término consistencia va de la mano con los términos **tamaño de muestra** y **convergencia**. Si el estimador converge al verdadero parámetro a medida que el tamaño de la muestra se hace muy grande, se dice que este estimador es consistente, es decir:

$$ N \\to \\infty \\text{ entonces } \\hat{\\beta} \\to \\beta $$

Todas estas propiedades se cumplen para las estimaciones OLS como se resume en el teorema de Gauss-Markov. En otras palabras, las estimaciones OLS tienen la menor varianza, son insesgadas, lineales en parámetros y consistentes. Estas propiedades pueden demostrarse matemáticamente utilizando las suposiciones OLS hechas anteriormente.

## Intervalos de Confianza

El Intervalo de Confianza es el rango que contiene el verdadero parámetro poblacional con una cierta probabilidad pre-especificada. Esto se refiere como el **nivel de confianza** del experimento, y se obtiene utilizando los resultados de la muestra y el **margen de error**.

### Margen de Error

El margen de error es la diferencia entre los resultados de la muestra y en base a lo que hubiera sido el resultado si hubiera utilizado toda la población.

### Nivel de Confianza

El Nivel de Confianza describe el nivel de certeza en los resultados experimentales. Por ejemplo, un nivel de confianza del 95% significa que si realizara el mismo experimento repetidamente 100 veces, entonces 95 de esos 100 ensayos llevarían a resultados similares.

Tenga en cuenta que el nivel de confianza se define antes del inicio del experimento porque afectará qué tan grande será el margen de error al final del experimento.

### Intervalo de Confianza para Estimaciones OLS

Como mencioné anteriormente, las estimaciones OLS de la Regresión Lineal Simple, las estimaciones para el intercepto β0 y el coeficiente de pendiente β1, están sujetas a incertidumbre muestral. Pero podemos construir Intervalos de Confianza (CIs) para estos parámetros que contendrán el verdadero valor de estos parámetros en el 95% de todas las muestras.

Es decir, el intervalo de confianza del 95% para β puede interpretarse de la siguiente manera:

-   El intervalo de confianza es el conjunto de valores para los cuales una prueba de hipótesis no puede ser rechazada al nivel del 5%.
-   El intervalo de confianza tiene un 95% de probabilidad de contener el verdadero valor de β.

El intervalo de confianza del 95% de las estimaciones OLS puede construirse de la siguiente manera:

$$ CI\_{0.95}^{\\beta} = \\left\[\\hat{\\beta}\_i - 1.96 , SE(\\hat{\\beta}\_i), \\hat{\\beta}\_i + 1.96 , SE(\\hat{\\beta}\_i)\\right\] $$

Esto se basa en la estimación del parámetro, el error estándar de esa estimación y el valor de 1.96 que representa el margen de error correspondiente a la regla de rechazo del 5%.

Este valor se determina usando la [tabla de Distribución Normal][43], que discutiremos más adelante en este manual.

Mientras tanto, la siguiente figura ilustra la idea del IC del 95%:

![1-XtBhY43apW_xIyf23eOWow](https://www.freecodecamp.org/news/content/images/2024/04/1-XtBhY43apW_xIyf23eOWow.png)

Fuente de la imagen: [LunarTech][44]

Tenga en cuenta que el intervalo de confianza también depende del tamaño de la muestra, dado que se calcula utilizando el error estándar que se basa en el tamaño de la muestra.

## Prueba de Hipótesis Estadística

Probar una hipótesis en Estadística es una forma de probar los resultados de un experimento o encuesta para determinar cuán significativos son los resultados.
```

### Hipótesis Nula y Alternativa

Primero, debes determinar la tesis que deseas probar. Luego, debes formular la **Hipótesis Nula** y la **Hipótesis Alternativa.** La prueba puede tener dos posibles resultados. Basado en los resultados estadísticos, puedes rechazar la hipótesis formulada o aceptarla.

Como regla general, los estadísticos tienden a poner la versión o formulación de la hipótesis bajo la Hipótesis Nula que necesita ser rechazada, mientras que la versión aceptable y deseada se enuncia bajo la Hipótesis Alternativa.

### Significación Estadística

Veamos el ejemplo mencionado anteriormente donde usamos el modelo de Regresión Lineal para investigar si la Longitud del Ala de un pingüino, la variable independiente, tiene un impacto en la Masa Corporal, la variable dependiente.

Podemos formular este modelo con la siguiente expresión estadística:

$$ Y\_{\\text{MasaCorporal}} = \\beta\_0 + \\beta\_1X\_{\\text{LongitudAla}} + u\_i $$

Luego, una vez que se estiman los coeficientes de OLS, podemos formular la siguiente Hipótesis Nula y Alternativa para probar si la Longitud del Ala tiene un impacto **estadísticamente significativo** en la Masa Corporal:

![1-DVPqyel26EtGY__fwp_-rA](https://www.freecodecamp.org/news/content/images/2024/04/1-DVPqyel26EtGY__fwp_-rA.png)

donde H0 y H1 representan la Hipótesis Nula y la Hipótesis Alternativa, respectivamente.

Rechazar la Hipótesis Nula significaría que un aumento de una unidad en la Longitud del Ala tiene un impacto directo en la Masa Corporal (dado que la estimación del parámetro β1 describe este impacto de la variable independiente, Longitud del Ala, en la variable dependiente, Masa Corporal). Podemos reformular esta hipótesis de la siguiente manera:

$$  
\\begin{cases}  
H\_0: \\hat{\\beta}\_1 = 0 \\\\  
H\_1: \\hat{\\beta}\_1 \\neq 0  
\\end{cases}  
$$

donde H0 establece que la estimación del parámetro β1 es igual a 0, es decir, el efecto de la Longitud del Ala en la Masa Corporal es **estadísticamente insignificante** mientras que H1 sostiene que la estimación del parámetro β1 no es igual a 0, sugiriendo que el efecto de la Longitud del Ala en la Masa Corporal es **estadísticamente significativo**.

### Errores Tipo I y Tipo II

Al realizar Pruebas de Hipótesis Estadísticas, necesitas considerar dos tipos conceptuales de errores: Error Tipo I y Error Tipo II.

Los errores Tipo I ocurren cuando la Hipótesis Nula es rechazada incorrectamente, y los errores Tipo II ocurren cuando la Hipótesis Nula no es rechazada incorrectamente. Una matriz de confusión puede ayudarte a visualizar claramente la gravedad de estos dos tipos de errores.

Como regla general, los estadísticos tienden a poner la versión de la hipótesis bajo la Hipótesis Nula que necesita ser rechazada, mientras que la versión aceptable y deseada se enuncia bajo la Hipótesis Alternativa.

## Pruebas Estadísticas

Una vez que hayas formulado las Hipótesis Nula y Alternativa y definido las suposiciones de la prueba, el siguiente paso es determinar cuál prueba estadística es apropiada y calcular la **estadística de prueba**.

Determinar si rechazar o no rechazar la Hipótesis Nula se puede hacer comparando la estadística de prueba con el **valor crítico**. Esta comparación muestra si la estadística de prueba observada es más extrema que el valor crítico definido.

Puede tener dos posibles resultados:

-   La estadística de prueba es más extrema que el valor crítico → se puede rechazar la hipótesis nula
-   La estadística de prueba no es tan extrema como el valor crítico → no se puede rechazar la hipótesis nula

El valor crítico se basa en un **nivel de significancia α** preestablecido (generalmente elegido para ser igual al 5%) y el tipo de distribución de probabilidad que sigue la estadística de prueba.

El valor crítico divide el área bajo esta curva de distribución de probabilidad en la **región de rechazo** y la **región de no rechazo**. Existen numerosas pruebas estadísticas utilizadas para probar diversas hipótesis. Ejemplos de pruebas estadísticas son [la prueba t de Student][46], [la prueba F][47], [la prueba de Chi-cuadrado][48], [la prueba de endogeneidad de Durbin-Hausman-Wu][49], la prueba de heterocedasticidad de White][50]. En este manual, examinaremos dos de estas pruebas estadísticas: la prueba t de Student y la prueba F.

### Prueba t de Student

Una de las pruebas estadísticas más sencillas y populares es la prueba t de Student. Puedes usarla para probar varias hipótesis, especialmente cuando se trata de una hipótesis donde la principal área de interés es encontrar evidencia del efecto estadísticamente significativo de una **única variable**.

Las estadísticas de prueba de la prueba t siguen la [**distribución t de Student**][51] y se pueden determinar de la siguiente manera:

$$ T\_{\\text{stat}} = \\frac{\\hat{\\beta}\_i - h\_0}{SE(\\hat{\\beta})} $$

donde h0 en el numerador es el valor contra el cual se está probando la estimación del parámetro. Así que, las estadísticas de la prueba t son iguales a la estimación del parámetro menos el valor hipotetizado dividido por el error estándar de la estimación del coeficiente.

Usemos esto para nuestra hipótesis anterior, donde queríamos probar si la Longitud del Ala tiene un impacto estadísticamente significativo en la Masa Corporal o no. Esta prueba se puede realizar usando una prueba t. El h0 en ese caso es igual a 0 ya que la estimación del coeficiente de la pendiente se prueba contra un valor de 0.

Hay dos versiones de la prueba t: una **prueba t de dos colas** y una **prueba t de una cola**. Si necesitas una u otra versión de la prueba depende completamente de la hipótesis que quieras probar.

Puedes usar la prueba t de dos colas o **prueba t de dos extremos** cuando la hipótesis sea probar la relación _igual_ versus _no igual_ bajo las Hipótesis Nula y Alternativa. Sería similar al siguiente ejemplo:

$$  
H\_{0} = \\beta\_hat\_1  = h\_0\\  
H\_{1} = \\beta\_hat\_1 \\neq h\_0  
$$

La prueba t de dos colas tiene **dos regiones de rechazo** como se visualiza en la figura a continuación:

![1-otgnlBKy306KgrFUZxk0Og](https://www.freecodecamp.org/news/content/images/2024/04/1-otgnlBKy306KgrFUZxk0Og.png)

Fuente de la imagen: [_Hartmann, K., Krois, J., Waske, B. (2018): Proyecto de E-Learning SOGA: Estadísticas y Análisis de Datos Geoespaciales. Departamento de Ciencias de la Tierra, Universidad Libre de Berlín_][52]

En esta versión de la prueba t, se rechaza la Hipótesis Nula si el estadístico t calculado es demasiado pequeño o demasiado grande.

$$ T\_{\\text{stat}} < -t\_{\\alpha,N} \\text{ o } T\_{\\text{stat}} > t\_{\\alpha,N} $$

$$ |T\_{\\text{stat}}| > t\_{\\alpha,N} $$

Aquí, los estadísticos de prueba se comparan con los valores críticos basados en el tamaño de la muestra y el nivel de significancia elegido. Para determinar el valor exacto del punto de corte, puedes usar una [tabla de distribución t de dos colas][53].

Por otro lado, puedes usar la prueba t de una cola o **prueba t de un extremo** cuando la hipótesis sea probar relaciones _positivas/negativas_ versus _negativas/positivas_ bajo las Hipótesis Nula y Alternativa. Se ve así:

![1-uKChnDWApLtrCf8bq13o4w](https://www.freecodecamp.org/news/content/images/2024/04/1-uKChnDWApLtrCf8bq13o4w.png)

Cola izquierda vs cola derecha

La prueba t de una cola tiene una **única región de rechazo**. Dependiendo del lado de la hipótesis, la región de rechazo está en el lado izquierdo o en el lado derecho como se visualiza en la figura a continuación:

![1-SVKBOOFtXIvYwL2gC9XEoQ](https://www.freecodecamp.org/news/content/images/2024/04/1-SVKBOOFtXIvYwL2gC9XEoQ.png)

Fuente de la imagen: [_Hartmann, K., Krois, J., Waske, B. (2018): Proyecto de E-Learning SOGA: Estadísticas y Análisis de Datos Geoespaciales. Departamento de Ciencias de la Tierra, Universidad Libre de Berlín_][54]

En esta versión de la prueba t, se rechaza la Hipótesis Nula si el estadístico t calculado es menor/mayor que el valor crítico.

![1-UvLof79AQigLFgxbKAvYgA](https://www.freecodecamp.org/news/content/images/2024/04/1-UvLof79AQigLFgxbKAvYgA.png)

### Prueba F

La prueba F es otra prueba estadística muy popular que a menudo se utiliza para probar hipótesis que evalúan la **significancia estadística conjunta de múltiples variables**. Este es el caso cuando quieres probar si varias variables independientes tienen un impacto estadísticamente significativo en una variable dependiente.

A continuación se muestra un ejemplo de una hipótesis estadística que puedes probar usando la prueba F:

$$  
\\begin{cases}  
H\_0: \\hat{\\beta}\_1 = \\hat{\\beta}\_2 = \\hat{\\beta}\_3 = 0 \\\\  
H\_1: \\hat{\\beta}\_1 \\neq \\hat{\\beta}\_2 \\neq \\hat{\\beta}\_3 \\neq 0  
\\end{cases}  
$$

donde la Null establece que las tres variables correspondientes a estos coeficientes son conjuntamente no significativas estadísticamente, y la Alternativa establece que estas tres variables son conjuntamente significativas estadísticamente.

El estadístico de prueba de la prueba F sigue la [distribución F][55] y puede determinarse de la siguiente manera:

$$ F\_{\\text{stat}} = \\frac{(SSR\_{\\text{restricted}} - SSR\_{\\text{unrestricted}}) / q}{SSR\_{\\text{unrestricted}} / (N - k\_{\\text{unrestricted}} - 1)} $$

donde :

-   el SSR\_{restricted} es la **suma de los residuos cuadrados** del **modelo restringido**, que es el mismo modelo excluyendo del conjunto de datos las variables objetivo consideradas como insignificantes bajo la Null
-   el SSR\_{unrestricted} es la suma de los residuos cuadrados del **modelo no restringido**, que es el modelo que incluye todas las variables
-   q representa el número de variables que están siendo probadas conjuntamente por insignificancia bajo la Null
-   N es el tamaño de la muestra
-   y k es el número total de variables en el modelo no restringido.

Los valores de SSR se proporcionan junto a las estimaciones de los parámetros después de ejecutar la regresión OLS, y lo mismo se aplica para los valores de la estadística F.

A continuación se muestra un ejemplo del resultado del modelo MLR donde los valores de SSR y de la estadística F están marcados.

![1-5kTyYIc3LztrgM-oLKltwg](https://www.freecodecamp.org/news/content/images/2024/04/1-5kTyYIc3LztrgM-oLKltwg.png)

Fuente de la imagen: [Stock y Whatson][56]

La prueba F tiene **una única región de rechazo** como se visualiza a continuación:

![1-U3c2dRBPYCqtDqNGvk1BKA](https://www.freecodecamp.org/news/content/images/2024/04/1-U3c2dRBPYCqtDqNGvk1BKA.jpg)

Fuente de la imagen: [_Universidad de Michigan_][57]

Si el estadístico de prueba F calculado es mayor que el valor crítico, se puede rechazar la Hipótesis Nula. Esto sugiere que las variables independientes son conjuntamente significativas estadísticamente. La regla de rechazo puede expresarse de la siguiente manera:

$$ F\_{\\text{stat}} > F\_{\\alpha,q,N} $$

## Prueba t de 2 muestras

Si deseas probar si hay una diferencia estadísticamente significativa entre los parámetros métricos del grupo control y los del grupo experimental que están en forma de promedios (por ejemplo, el monto promedio de compra), la métrica sigue una _distribución t de Student_. Cuando el tamaño de la muestra es menor de 30, puedes usar la prueba t de 2 muestras para probar la siguiente hipótesis:

donde la distribución muestral de las medias del grupo de Control sigue una distribución t de Student con grados de libertad N\_con-1. Además, la distribución muestral de las medias del grupo Experimental también sigue la distribución t de Student con grados de libertad N\_exp-1.

Tenga en cuenta que N\_con y N\_exp son el número de usuarios en los grupos de Control y Experimental, respectivamente.

$$ \\hat{\\mu}\_{\\text{con}} \\sim t(N\_{\\text{con}} - 1) $$  
  
$$ \\hat{\\mu}\_{\\text{exp}} \\sim t(N\_{\\text{exp}} - 1) $$

Luego puede calcular una estimación para la **varianza combinada** de las dos muestras de la siguiente manera:

$$ S^2\_{\\text{combinada}} = \\frac{(N\_{\\text{con}} - 1) \* \\sigma^2\_{\\text{con}} + (N\_{\\text{exp}} - 1) \* \\sigma^2\_{\\text{exp}}}{N\_{\\text{con}} + N\_{\\text{exp}} - 2} \* \\left(\\frac{1}{N\_{\\text{con}}} + \\frac{1}{N\_{\\text{exp}}}\\right) $$

donde σ²\_con y σ²\_exp son las varianzas muestrales de los grupos de Control y Experimental, respectivamente. Luego el **Error Estándar** es igual a la raíz cuadrada de la estimación de la varianza combinada, y se puede definir como:

$$ SE = \\sqrt{\\hat{S}^2\_{\\text{combinada}}} $$

Por consiguiente, las **estadísticas de prueba** del test T de 2 muestras con la hipótesis planteada anteriormente se pueden calcular de la siguiente manera:

$$ T = \\frac{\\hat{\\mu}\_{\\text{con}} - \\hat{\\mu}\_{\\text{exp}}}{\\sqrt{\\hat{S}^2\_{\\text{combinada}}}} $$

Para probar la **significancia estadística** de la diferencia observada entre las medias de las muestras, necesitamos calcular el **p-valor** de nuestras estadísticas de prueba.

El p-valor es la probabilidad de observar valores al menos tan extremos como el valor común cuando esto se debe al azar. Dicho de otra manera, el p-valor es la probabilidad de obtener un efecto al menos tan extremo como el de sus datos muestrales, asumiendo que la hipótesis nula es verdadera.

Entonces, el p-valor de las estadísticas de prueba se puede calcular de la siguiente manera:

$$ p\_{\\text{valor}} = \\Pr\[t \\leq -T \\text{ o } t \\geq T\] $$  
  
$$ = 2 \* \\Pr\[t \\geq T\] $$

La interpretación de un _p_\-valor depende del nivel de significancia elegido, alfa, que se elige antes de realizar la prueba durante el _análisis de poder_.

Si el _p_\-valor calculado parece ser menor o igual a alfa (por ejemplo, 0.05 para un nivel de significancia del 5%) podemos rechazar la hipótesis nula y afirmar que existe una diferencia estadísticamente significativa entre las métricas primarias de los grupos de Control y Experimental.

Finalmente, para determinar cuán precisos son los resultados obtenidos y también para comentar sobre la significancia práctica de los resultados obtenidos, puede calcular el **Intervalo de Confianza** de su prueba utilizando la siguiente fórmula:  
  
$$ CI = \\left\[ (\\hat{\\mu}\_{\\text{con}} - \\hat{\\mu}\_{\\text{exp}}) - t\_{\\frac{\\alpha}{2}} \* SE(\\hat{\\mu}\_{\\text{con}} - \\hat{\\mu}\_{\\text{exp}}), (\\hat{\\mu}\_{\\text{con}} - \\hat{\\mu}\_{\\text{exp}}) + t\_{\\frac{\\alpha}{2}} \* SE \\right\] $$

donde t\_(1-alpha/2) es el valor crítico de la prueba correspondiente a la prueba t de dos colas con un nivel de significancia alfa. Se puede encontrar usando la [tabla t][58].

El código Python proporcionado realiza una prueba t de dos muestras, que se utiliza en estadística para determinar si dos conjuntos de datos son significativamente diferentes entre sí. Este fragmento en particular simula dos grupos (control y experimental) con datos que siguen una distribución t, calcula la media y la varianza para cada grupo y luego realiza los siguientes pasos:

1.  Calcula la varianza combinada, que es un promedio ponderado de las varianzas de los dos grupos.
2.  Calcula el error estándar de la diferencia entre las dos medias.
3.  Calcula el estadístico t, que es la diferencia entre las dos medias muestrales dividida por el error estándar. Este estadístico mide cuánto difieren los grupos en unidades de error estándar.
4.  Determina el valor t crítico de la distribución t para el nivel de significancia dado y grados de libertad, que se utiliza para decidir si el estadístico t es lo suficientemente grande como para indicar una diferencia estadísticamente significativa entre los grupos.
5.  Calcula el p-valor, que indica la probabilidad de observar tal diferencia entre las medias si la hipótesis nula (que no hay diferencia) es verdadera.
6.  Calcula el margen de error y construye el intervalo de confianza alrededor de la diferencia de medias.

Finalmente, el código imprime el estadístico t, el valor t crítico, el p-valor y el intervalo de confianza. Estos resultados se pueden usar para inferir si las diferencias observadas en las medias son estadísticamente significativas o probablemente se deban a la variación aleatoria.

```python
import numpy as np
from scipy.stats import t

N_con = 20
df_con = N_con - 1 # grados de libertad del Control 
N_exp = 20
df_exp = N_exp - 1 # grados de libertad del Experimental 

# Nivel de significancia
alpha = 0.05

# datos del grupo de control con distribución t
X_con = np.random.standard_t(df_con,N_con)
# datos del grupo experimental con distribución t
X_exp = np.random.standard_t(df_exp,N_exp)

# media del control
mu_con = np.mean(X_con)
# media del experimental
mu_exp = np.mean(X_exp)
```

# Varianza combinada
pooled_variance_t_test = ((N_con-1)*sigma_sqr_con + (N_exp -1) * sigma_sqr_exp)/(N_con + N_exp-2)*(1/N_con + 1/N_exp)

# Error Estándar
SE = np.sqrt(pooled_variance_t_test)

# Estadístico de prueba
T = (mu_con-mu_exp)/SE

# Valor crítico para una prueba t de dos muestras a dos colas
t_crit = t.ppf(1-alpha/2, N_con + N_exp - 2)

# Valor p de la prueba T de dos colas usando la distribución t y su propiedad simétrica
p_value = t.sf(T, N_con + N_exp - 2)*2

# Margen de Error
margin_error = t_crit * SE
# Intervalo de Confianza
CI = [(mu_con-mu_exp) - margin_error, (mu_con-mu_exp) + margin_error]

print("Puntuación T: ", T)
print("Valor crítico T: ", t_crit)
print("Valor P: ", p_value)
print("Intervalo de confianza de la prueba T de dos muestras: ", np.round(CI,2))
```

## Prueba Z de dos muestras

Hay varias situaciones en las que puede ser conveniente usar una prueba Z de dos muestras:

-   si quieres probar si hay una diferencia estadísticamente significativa entre las métricas de los grupos de control y experimental que están en forma de promedios (por ejemplo, cantidad promedio de compra) o proporciones (por ejemplo, Tasa de Clics)
-   si la métrica sigue una distribución _Normal_
-   cuando el tamaño de la muestra es mayor de 30, de modo que se puede usar el Teorema del Límite Central (CLT) para afirmar que las distribuciones de muestreo de los grupos de Control y Experimental son asintóticamente Normales

Aquí haremos una distinción entre dos casos: donde la métrica principal está en forma de proporciones (como la Tasa de Clics) y donde la métrica principal está en forma de promedios (como la cantidad promedio de compra).

### Caso 1: Prueba Z para comparar proporciones (a dos colas)

Si deseas probar si hay una diferencia estadísticamente significativa entre las métricas de los grupos de Control y Experimental que están en forma de proporciones (como la Tasa de Clics) y si el evento de clic ocurre independientemente, puedes usar una prueba Z de dos muestras para probar la siguiente hipótesis:

$$  
\\begin{cases}  
H\_0: p\_{\\text{con}} = p\_{\\text{exp}} \\\\  
H\_1: p\_{\\text{con}} \\neq p\_{\\text{exp}}  
\\end{cases}  
$$  
  
$$  
\\begin{cases}  
H\_0: p\_{\\text{con}} - p\_{\\text{exp}} = 0 \\\\  
H\_1: p\_{\\text{con}} - p\_{\\text{exp}} \\neq 0  
\\end{cases}  
$$

donde cada evento de clic puede describirse mediante una variable aleatoria que puede tomar dos valores posibles: 1 (éxito) y 0 (fracaso). También sigue una distribución de Bernoulli (clic: éxito y no clic: fracaso) donde p\_con y p\_exp son las probabilidades de clic (probabilidad de éxito) de los grupos de Control y Experimental, respectivamente.

Entonces, después de recopilar los datos de interacción de los usuarios de Control y Experimental, puedes calcular las estimaciones de estas dos probabilidades como sigue:

$$ SE = \\sqrt{\\hat{S}^2\_{\\text{combinada}}} $$  
  
$$ Z = \\frac{(\\hat{p}\_{\\text{con}} - \\hat{p}\_{\\text{exp}})}{SE} $$

Dado que estamos probando la diferencia en estas probabilidades, necesitamos obtener una estimación de la probabilidad combinada de éxito y una estimación de la varianza combinada, lo cual se puede hacer de la siguiente manera:

$$ \\hat{p}\_{\\text{combinada}} = \\frac{X\_{\\text{con}} + X\_{\\text{exp}}}{N\_{\\text{con}} + N\_{\\text{exp}}} = \\frac{\\#\\text{clics}\_{\\text{con}} + \\#\\text{clics}\_{\\text{exp}}}{\\#\\text{impresiones}\_{\\text{con}} + \\#\\text{impresiones}\_{\\text{exp}}} $$

$$ \\hat{S}^2\_{\\text{combinada}} = \\hat{p}\_{\\text{combinada}}(1 - \\hat{p}\_{\\text{combinada}}) \* \\left(\\frac{1}{N\_{\\text{con}}} + \\frac{1}{N\_{\\text{exp}}}\\right) $$

Entonces, el **Error Estándar** es igual a la raíz cuadrada de la estimación de la varianza combinada. Se puede definir como:

$$ SE = \\sqrt{\\hat{S}^2\_{\\text{combinada}}} $$

Y así, los **estadísticos de prueba** de la prueba Z de dos muestras para la diferencia en proporciones se pueden calcular de la siguiente manera:

$$ Z = \\frac{(\\hat{p}_{\\text{con}} - \\hat{p}_{\\text{exp}})}{SE} $$

Entonces, el valor p de estos estadísticos de prueba se puede calcular de la siguiente manera:

$$ p\_{\\text{valor}} = \\Pr\[Z \\leq -T \\text{ o } z \\geq T\] $$  
  
$$ = 2 \* \\Pr\[Z \\geq T\] $$

Finalmente, puedes calcular el **Intervalo de Confianza** de la prueba de la siguiente manera:

$$ CI = \\left\[ (\\hat{p}\_{\\text{con}} - \\hat{p}\_{\\text{exp}}) - z\_{\\frac{\\alpha}{2}} \* SE, (\\hat{p}\_{\\text{con}} - \\hat{p}\_{\\text{exp}}) + z\_{\\frac{\\alpha}{2}} \* SE \\right\] $$

donde z\_(1-alpha/2) es el valor crítico de la prueba correspondiente a la prueba Z a dos colas con nivel de significancia alfa. Puedes encontrarlo usando la [tabla Z][59].

La región de rechazo de esta prueba Z de dos muestras a dos colas puede visualizarse con el siguiente gráfico:

![Fuente de la imagen: LunarTech](https://www.freecodecamp.org/news/content/images/2024/04/1-hHddr3psz2Zxy-hzbLVVwA.png)

Fuente de la imagen: El Autor

El fragmento de código en Python que has proporcionado realiza una prueba Z de dos muestras para proporciones. Este tipo de prueba se utiliza para determinar si existe una diferencia significativa entre las proporciones de dos grupos. Aquí tienes una breve explicación de los pasos que realiza el código:

1.  Calcula las proporciones de muestra para ambos grupos, el de control y el experimental.
2.  Calcula la proporción de muestra combinada, que es una estimación de la proporción asumiendo que la hipótesis nula (que no hay diferencia entre las proporciones de los grupos) es cierta.
3.  Calcula la varianza de muestra combinada basada en la proporción combinada y los tamaños de las dos muestras.
4.  Deriva el error estándar de la diferencia en proporciones de muestra.
5.  Calcula el estadístico de prueba Z, que mide el número de errores estándar entre la diferencia en proporciones de muestra y la hipótesis nula.
6.  Encuentra el valor crítico Z de la distribución normal estándar para el nivel de significancia dado.
7.  Calcula el valor p para evaluar la evidencia en contra de la hipótesis nula.
8.  Calcula el margen de error y el intervalo de confianza para la diferencia en proporciones.
9.  Muestra el estadístico de prueba, el valor crítico, el valor p y el intervalo de confianza, y basado en el estadístico de prueba y el valor crítico, puede imprimir una declaración para rechazar o no la hipótesis nula.

```python
import numpy as np
from scipy.stats import norm

X_con = 1242 #clics control
N_con = 9886 #impresiones control
X_exp = 974 #clics experimental
N_exp = 10072 #impresiones experimental

# Nivel de significancia
alpha = 0.05

p_con_hat = X_con / N_con
p_exp_hat = X_exp / N_exp

p_pooled_hat = (X_con + X_exp)/(N_con + N_exp)
pooled_variance = p_pooled_hat*(1-p_pooled_hat) * (1/N_con + 1/N_exp)

# Error estándar
SE = np.sqrt(pooled_variance)

# estadísticos de prueba
Test_stat = (p_con_hat - p_exp_hat)/SE
# valor crítico usando la distribución normal estándar
Z_crit = norm.ppf(1-alpha/2)

# Margen de error
m = SE * Z_crit
# prueba bilateral y usando la propiedad de simetría de la distribución Normal, así que multiplicamos por 2
p_value = norm.sf(Test_stat)*2

# Intervalo de confianza
CI = [(p_con_hat-p_exp_hat) - SE * Z_crit, (p_con_hat-p_exp_hat) + SE * Z_crit]

if np.abs(Test_stat) >= Z_crit:
    print("rechazar la nula")
    print(p_value)

print("Estadístico de prueba: ", Test_stat)
print("Z-crítico: ", Z_crit)
print("P_valor: ", p_value)
print("Intervalo de Confianza de prueba Z de 2 muestras para proporciones: ", np.round(CI,2))

import matplotlib.pyplot as plt
z = np.arange(-3,3,  0.1)
plt.plot(z, norm.pdf(z), label = 'Distribución Normal Estándar', color = 'purple', linewidth = 2.5)
plt.fill_between(z[z>Z_crit], norm.pdf(z[z>Z_crit]), label = 'Región de Rechazo Derecha', color ='y' )
plt.fill_between(z[z<(-1)*Z_crit], norm.pdf(z[z<(-1)*Z_crit]), label = 'Región de Rechazo Izquierda', color ='y' )
plt.title("Región de rechazo de prueba Z de 2 muestras")
plt.legend()
plt.show()
```

### Caso 2: Prueba Z para Comparar Medias (bilateral)

Si deseas comprobar si existe una diferencia estadísticamente significativa entre las métricas de los grupos Control y Experimental que están en forma de promedios (como el monto promedio de compra) puedes usar una prueba Z de 2 muestras para probar la siguiente hipótesis:

$$  
\\begin{cases}  
H\_0: {CR}\_{\\text{con}} = {CR}\_{\\text{exp}} \\\\  
H\_1:{CR}\_{\\text{con}} \\neq {CR}\_{\\text{exp}}  
\\end{cases}  
$$  
  
$$  
\\begin{cases}  
H\_0: {CR}\_{\\text{con}} - {CR}\_{\\text{exp}} = 0 \\\\  
H\_1: {CR}\_{\\text{con}} - {CR}\_{\\text{exp}} \\neq 0  
\\end{cases}  
$$

donde la distribución muestral de las medias del grupo Control sigue una distribución Normal con media mu\_con y σ²\_con/N\_con. Además, la distribución muestral de las medias del grupo Experimental también sigue la distribución Normal con media mu\_exp y σ²\_exp/N\_exp.

$$ \\hat{\\mu}\_{\\text{con}} \\sim N(\\mu\_{con}, \\frac{\\sigma^2\_{con}}{N\_{con}}) $$  
  
$$ \\hat{\\mu}\_{\\text{exp}} \\sim N(\\mu\_{exp}, \\frac{\\sigma^2\_{exp}}{N\_{exp}}) $$

Entonces, la diferencia en las medias de los grupos control y experimental también sigue distribuciones Normales con media mu\_con - mu\_exp y varianza σ²\_con/N\_con + σ²\_exp/N\_exp.

$$ \\hat{\\mu}\_{\\text{con}}-\\hat{\\mu}\_{\\text{exp}}  \\sim N(\\mu\_{con}-\\mu\_{exp}, \\frac{\\sigma^2\_{con}}{N\_{con}}+\\frac{\\sigma^2\_{exp}}{N\_{exp}}) $$

En consecuencia, los **estadísticos de prueba** de la prueba Z de 2 muestras para la diferencia en medias se pueden calcular de la siguiente manera:

$$ T = \\frac{\\hat{\\mu}\_{\\text{con}}-\\hat{\\mu}\_{\\text{exp}}}{\\sqrt{\\frac{\\sigma^2\_{con}}{N\_{con}} + \\frac{\\sigma^2\_{exp}}{N\_{exp}}}}  \\sim N(0,1) $$

El **Error Estándar** es igual a la raíz cuadrada de la estimación de la varianza combinada y se puede definir como:

$$ SE = \\sqrt{\\frac{\\sigma^2\_{con}}{N\_{con}} + \\frac{\\sigma^2\_{exp}}{N\_{exp}}} $$

Entonces, el valor p de estos estadísticos de prueba se puede calcular de la siguiente manera:

$$ p\_{\\text{value}} = \\Pr\[Z \\leq -T \\text{ or } Z \\geq T\] $$  
  
$$ = 2 \* \\Pr\[Z \\geq T\] $$

Finalmente, puedes calcular el **Intervalo de Confianza** de la prueba de la siguiente manera:

$$ CI = \[(\\mu\_hat\_{con} - \\mu\_hat\_{exp}) - z\_{1-\\alpha/2}\*SE,((\\mu\_hat\_{con} - \\mu\_hat\_{exp}) + z\_{1-\\alpha/2})\*SE\] $$

El código de Python proporcionado parece estar configurado para realizar una prueba Z de dos muestras, típicamente utilizada para determinar si existe una diferencia significativa entre las medias de dos grupos independientes. En este contexto, el código podría estar comparando dos procesos o tratamientos diferentes.

1.  Genera dos arrays de enteros aleatorios para representar datos de un grupo de control (`X_A`) y un grupo experimental (`X_B`).
2.  Calcula las medias muestrales (`mu_con`, `mu_exp`) y las varianzas (`variance_con`, `variance_exp`) para ambos grupos.
3.  Se calcula la varianza combinada, que se utiliza en el denominador de la fórmula del estadístico de prueba para la prueba Z, proporcionando una medida de la varianza común de los datos.
4.  El estadístico de prueba Z (`T`) se calcula tomando la diferencia entre las dos medias muestrales y dividiéndola por el error estándar de la diferencia.
5.  Se calcula el valor p para probar la hipótesis de si las medias de los dos grupos son estadísticamente diferentes entre sí.
6.  Se determina el valor crítico Z (`Z_crit`) a partir de la distribución normal estándar, que define los puntos de corte para la significancia.
7.  Se calcula un margen de error y se construye un intervalo de confianza para la diferencia de medias.
8.  El estadístico de prueba, el valor crítico, el valor p y el intervalo de confianza se imprimen en la consola.
```

```python
import numpy as np
from scipy.stats import norm

N_con = 60
N_exp = 60

# Nivel de significancia
alpha = 0.05

X_A = np.random.randint(100, size = N_con)
X_B = np.random.randint(100, size = N_exp)

# Calculando las medias de los grupos de control y experimental
mu_con = np.mean(X_A)
mu_exp = np.mean(X_B)

variance_con = np.var(X_A)
variance_exp = np.var(X_B)

# Varianza combinada
pooled_variance = np.sqrt(variance_con/N_con + variance_exp/N_exp)

# Estadística de prueba
T = (mu_con-mu_exp)/np.sqrt(variance_con/N_con + variance_exp/N_exp)

# Prueba de dos lados y usando la propiedad de simetría de la distribución Normal, así que multiplicamos por 2
p_value = norm.sf(T)*2

# Valor crítico de Z
Z_crit  = norm.ppf(1-alpha/2)

# Margen de error
m = Z_crit*pooled_variance

# Intervalo de confianza
CI = [(mu_con - mu_exp) - m, (mu_con - mu_exp) + m]


print("Estadística de prueba: ", T)
print("Z-crítico: ", Z_crit)
print("P-valor: ", p_value)
print("Intervalo de confianza del Z-test de dos muestras para proporciones: ", np.round(CI,2))

import matplotlib.pyplot as plt
z = np.arange(-3,3,  0.1)
plt.plot(z, norm.pdf(z), label = 'Distribución Normal Estándar',color = 'purple',linewidth = 2.5)
plt.fill_between(z[z>Z_crit], norm.pdf(z[z>Z_crit]), label = 'Región de Rechazo Derecha',color ='y' )
plt.fill_between(z[z<(-1)*Z_crit], norm.pdf(z[z<(-1)*Z_crit]), label = 'Región de Rechazo Izquierda',color ='y' )
plt.title("Región de rechazo del Z-test de dos muestras")
plt.legend()
plt.show()
```

### Prueba Chi-Cuadrada

Si deseas comprobar si hay una diferencia estadísticamente significativa entre las métricas de rendimiento de los grupos de Control y Experimental (por ejemplo, sus conversiones) y realmente no deseas conocer la naturaleza de esta relación (cuál es mejor), puedes usar una prueba Chi-Cuadrada para probar la siguiente hipótesis:

$$  
\\begin{cases}  
H\_0: \\CR\_{\\text{con}} = \\CR\_{\\text{exp}} \\\\  
H\_1: \\CR\_{\\text{con}} \\neq \\CR\_{\\text{exp}}  
\\end{cases}  
$$  
  
$$\\begin{cases}  
H\_0: \\CR\_{\\text{con}} - \\CR\_{\\text{exp}} = 0 \\\\  
H\_1: \\CR\_{\\text{con}} - \\CR\_{\\text{exp}} \\neq 0  
\\end{cases}  
$$

Ten en cuenta que la métrica debe estar en forma de una variable binaria (por ejemplo, conversión o no conversión/clic o no clic). Los datos luego pueden ser representados en la forma de la siguiente tabla, donde O y T corresponden a valores observados y teóricos, respectivamente.

![1-1RVqOq4mc4-oach5QHCy5g](https://www.freecodecamp.org/news/content/images/2024/04/1-1RVqOq4mc4-oach5QHCy5g.png)

Tabla que muestra los datos de la prueba Chi-Cuadrada

Luego, la estadística de prueba de la prueba Chi-2 puede ser expresada de la siguiente manera:

$$ T = \\sum\_{i} \\frac{(Observed\_i - Expected\_i)^2}{Expected\_i} $$

donde _Observed_ corresponde a los datos observados y _Expected_ corresponde al valor teórico, y i puede tomar los valores 0 (no conversión) y 1 (conversión). Es importante ver que cada uno de estos factores tiene un denominador separado. La fórmula para la estadística de prueba cuando solo tienes dos grupos puede ser representada de la siguiente manera:

$$ T = \\frac{(Observed\_{con,1} - T\_{con,1})^2}{T\_{con,1}} + \\frac{(Observed\_{con,0} - T\_{con,0})^2}{T\_{con,0}} + \\frac{(Observed\_{exp,1} - T\_{exp,1})^2}{T\_{exp,1}} + \\frac{(Observed\_{exp,0} - T\_{exp,0})^2}{T\_{exp,0}} $$

El valor esperado es simplemente igual al número de veces que se visualiza cada versión del producto multiplicado por la probabilidad de que conduzca a una conversión (o a un clic en caso del CTR).

Ten en cuenta que, dado que la prueba Chi-2 no es una prueba paramétrica, su Error Estándar e Intervalo de Confianza no se pueden calcular de manera estándar como lo hicimos en la prueba Z paramétrica o prueba T.

La región de rechazo de esta prueba de Z de dos lados y dos muestras puede ser visualizada por el siguiente gráfico:

![Image Source: LunarTech](https://www.freecodecamp.org/news/content/images/2024/04/1-t8GYhf7iX1NJ2wNA8bHQ_A.png)

Fuente de la imagen: El Autor

El código de Python que has compartido es para realizar una prueba Chi-cuadrada, una prueba de hipótesis estadística que se utiliza para determinar si existe una diferencia significativa entre las frecuencias esperadas y las observadas en una o más categorías.

En el fragmento de código proporcionado, parece que la prueba se está utilizando para comparar dos conjuntos de datos categóricos:

1.  Calcula la estadística de la prueba Chi-cuadrada sumando la diferencia al cuadrado entre las frecuencias observadas (`O`) y esperadas (`T`), dividida por las frecuencias esperadas para cada categoría. Esto se conoce como la distancia relativa al cuadrado y se usa como estadística de prueba para la prueba Chi-cuadrada.
2.  Luego, calcula el p-valor para esta estadística de prueba usando los grados de libertad, que en este caso se asume que es 1 (pero esto típicamente dependería del número de categorías menos uno).
3.  La biblioteca Matplotlib se usa para trazar la función de densidad de probabilidad (pdf) de la distribución Chi-cuadrada con un grado de libertad. También destaca la región de rechazo para la prueba, que corresponde al valor crítico de la distribución Chi-cuadrada que la estadística de prueba debe exceder para que la diferencia se considere estadísticamente significativa.

La visualización ayuda a entender la prueba Chi-cuadrada al mostrar dónde se sitúa la estadística de prueba en relación con la distribución Chi-cuadrada y su valor crítico. Si la estadística de prueba está dentro de la región de rechazo, se puede rechazar la hipótesis nula de que no hay diferencia en las frecuencias.

```python
import numpy as np
from scipy.stats import chi2

O = np.array([86, 83, 5810,3920])
T = np.array([105,65,5781, 3841])

# Distancia relativa al cuadrado

def calculate_D(O,T):
    D_sum = 0
    for i in range(len(O)):
        D_sum += (O[i] - T[i])**2/T[i]
    return(D_sum)

D = calculate_D(O,T)
p_value = chi2.sf(D, df = 1)

```

### Valores P

Otra forma rápida de determinar si rechazar o apoyar la Hipótesis Nula es usando **valores p**. El valor p es la probabilidad de que la condición bajo la Hipótesis Nula ocurra. Dicho de otra manera, el valor p es la probabilidad, asumiendo que la hipótesis nula es verdadera, de observar un resultado al menos tan extremo como el estadístico de prueba. Cuanto más pequeño es el valor p, mayor es la evidencia en contra de la Hipótesis Nula, lo que sugiere que puede ser rechazada.

La interpretación de un _valor p_ depende del nivel de significancia elegido. La mayoría de las veces, se utilizan niveles de significancia del 1%, 5% o 10% para interpretar el valor p. Entonces, en lugar de usar la prueba t y la prueba F, se pueden utilizar los valores p de estos estadísticos de prueba para probar las mismas hipótesis.

La siguiente figura muestra una salida de ejemplo de una regresión MCO con dos variables independientes. En esta tabla, el valor p de la prueba t, que prueba la significancia estadística de la estimación del parámetro de la variable _tamaño\_de\_clase_, y el valor p de la prueba F, que prueba la significancia estadística conjunta de las estimaciones de los parámetros de las variables _tamaño\_de\_clase_ y _el\_pct_, están subrayados.

![1-aJh-8BEvYnwid5jS7fDLHA](https://www.freecodecamp.org/news/content/images/2024/04/1-aJh-8BEvYnwid5jS7fDLHA.png)

Fuente de la imagen: [Stock and Whatson][60]

El valor p correspondiente a la variable _tamaño\_de\_clase_ es 0.011. Cuando comparamos este valor con los niveles de significancia 1% o 0.01, 5% o 0.05, 10% o 0.1, podemos sacar las siguientes conclusiones:

-   0.011 > 0.01 → No se puede rechazar la hipótesis nula de la prueba t al nivel de significancia del 1%
-   0.011 < 0.05 → Se puede rechazar la hipótesis nula de la prueba t al nivel de significancia del 5%
-   0.011 < 0.10 → Se puede rechazar la hipótesis nula de la prueba t al nivel de significancia del 10%

Entonces, este valor p sugiere que el coeficiente de la variable _tamaño\_de\_clase_ es estadísticamente significativo en los niveles de significancia del 5% y 10%. El valor p correspondiente a la prueba F es 0.0000. Y dado que 0 es menor que los tres valores límite (0.01, 0.05, 0.10), podemos concluir que la hipótesis nula de la prueba F puede ser rechazada en los tres casos.

Esto sugiere que los coeficientes de las variables _tamaño\_de\_clase_ y _el\_pct_ son conjuntamente estadísticamente significativos en los niveles de significancia del 1%, 5% y 10%.

#### Limitación de los valores p

Usar valores p tiene muchos beneficios, pero también limitaciones. Una de las principales es que el valor p depende tanto de la magnitud de la asociación como del tamaño de la muestra. Si la magnitud del efecto es pequeña y estadísticamente insignificante, el valor p podría seguir mostrando un **impacto significativo** porque el tamaño de la muestra es grande. Lo opuesto también puede ocurrir: un efecto puede ser grande, pero no cumplir con los criterios de p<0.01, 0.05 o 0.10 si el tamaño de la muestra es pequeño.

## Estadísticas Inferenciales

Las estadísticas inferenciales utilizan datos muestrales para hacer juicios razonables sobre la población de la cual se originaron los datos muestrales. Las usamos para investigar las relaciones entre variables dentro de una muestra y hacer predicciones sobre cómo estas variables se relacionarán con una población más grande.

Tanto la **Ley de los Grandes Números (LLN)** como el **Teorema del Límite Central (CLM)** tienen un papel significativo en las estadísticas inferenciales porque muestran que los resultados experimentales se mantienen independientemente de la forma que tenía la distribución de la población original cuando los datos son lo suficientemente grandes.

Cuantos más datos se recopilen, más precisas serán las inferencias estadísticas, por lo tanto, se generan estimaciones de parámetros más precisas.

### Ley de los Grandes Números (LLN)

Supongamos que **X1, X2, . . . , Xn** son todas variables aleatorias independientes con la misma distribución subyacente (también llamada distribución independientemente idéntica o i.i.d), donde todas las X tienen la misma media **μ** y desviación estándar **σ**. A medida que aumenta el tamaño de la muestra, la probabilidad de que el promedio de todas las X sea igual a la media μ es igual a 1.

La Ley de los Grandes Números puede resumirse de la siguiente manera:

![1-guDCKe5lIntrCicvX1WeBQ](https://www.freecodecamp.org/news/content/images/2024/04/1-guDCKe5lIntrCicvX1WeBQ.png)

### Teorema del Límite Central (CLM)

Supongamos que **X1, X2, . . . , Xn** son todas variables aleatorias independientes con la misma distribución subyacente (también llamada distribución independientemente idéntica o i.i.d), donde todas las X tienen la misma media **μ** y desviación estándar **σ**. A medida que aumenta el tamaño de la muestra, la distribución de probabilidad de X **converge en la distribución** en una distribución Normal con media **μ** y varianza **σ** cuadrada.

El Teorema del Límite Central puede resumirse de la siguiente manera:

![1-FCDUcznU-VRRdctstA1WJA](https://www.freecodecamp.org/news/content/images/2024/04/1-FCDUcznU-VRRdctstA1WJA.png)

Dicho de otra manera, cuando tienes una población con media μ y desviación estándar σ y tomas muestras aleatorias suficientemente grandes de esa población con reemplazo, entonces la distribución de las medias muestrales será aproximadamente una distribución normal.

## Técnicas de Reducción de Dimensionalidad

La reducción de dimensionalidad es la transformación de datos de un **espacio de alta dimensionalidad** a un **espacio de baja dimensionalidad** de tal manera que esta representación de baja dimensionalidad de los datos aún contenga las propiedades significativas de los datos originales tanto como sea posible.


### Análisis de Componentes Principales (PCA)

El análisis de componentes principales (PCA) es una técnica de reducción de dimensionalidad que se utiliza con frecuencia para reducir la dimensionalidad de conjuntos de datos grandes. Lo hace transformando un gran conjunto de variables en un conjunto más pequeño que aún contiene la mayor parte de la información o la variación en el conjunto de datos original.

Supongamos que tenemos un dato X con p variables X1, X2, ...., Xp con **vectores propios** e1, ..., ep, y **valores propios** λ1, ..., λp. Los valores propios muestran la varianza explicada por un campo de datos particular de la varianza total.

La idea detrás del PCA es crear nuevas variables (independientes), llamadas Componentes Principales, que son una combinación lineal de la variable existente. El i-ésimo componente principal puede expresarse de la siguiente manera:

$$ Y\_i = e\_{i1}X\_1 + e\_{i2}X\_2 + e\_{i3}X\_3 + ... + e\_{ip}X\_p $$

Luego, utilizando la **Regla del Codo** o [**Regla de Kaiser**](65), puedes determinar la cantidad de componentes principales que resumen óptimamente los datos sin perder demasiada información.

También es importante considerar **la proporción de la variación total (PRTV)** que es explicada por cada componente principal para decidir si es beneficioso incluirlo o excluirlo. La PRTV para el i-ésimo componente principal puede calcularse usando los valores propios de la siguiente manera:

$$ PRTV\_i = \\frac{{\\lambda\_i}}{{\\sum\_{k=1}^{p} \\lambda\_k}} $$

### Regla del Codo

La regla del codo o el método del codo es un enfoque heurístico que podemos usar para determinar el número óptimo de componentes principales a partir de los resultados del PCA.

La idea detrás de este método es graficar _la variación explicada_ como una función del número de componentes y elegir el codo de la curva como el número de componentes principales óptimo.

A continuación se muestra un ejemplo de un diagrama de dispersión donde la PRTV (eje Y) se grafica en función del número de componentes principales (eje X). El codo corresponde al valor 2 en el eje X, lo que sugiere que el número óptimo de componentes principales es 2.

![1-cLCESS2u2ZIsQbPBd7Ljlg](https://www.freecodecamp.org/news/content/images/2024/04/1-cLCESS2u2ZIsQbPBd7Ljlg.png)

Fuente de la imagen: [Github de Estadísticas Multivariadas](66)

### Análisis Factorial (FA)

El análisis factorial o FA es otro método estadístico para la reducción de dimensionalidad. Es una de las técnicas de inter-dependencia más utilizadas. Podemos usarlo cuando el conjunto relevante de variables muestra una interdependencia sistemática y nuestro objetivo es encontrar los factores latentes que crean una común.

Supongamos que tenemos un dato X con p variables X1, X2, ...., Xp. El modelo FA puede expresarse de la siguiente manera:

$$ X-\\mu = AF + u $$

donde:

-   X es una matriz \[p x N\] de p variables y N observaciones
-   µ es una matriz de la media poblacional \[p x N\]
-   A es una matriz \[p x k\] de **cargas factoriales comunes**
-   F \[k x N\] es la matriz de factores comunes
-   u \[pxN\] es la matriz de factores específicos.

En otras palabras, un modelo factorial es una serie de regresiones múltiples, prediciendo cada una de las variables Xi a partir de los valores de los factores comunes no observables, de la siguiente manera:

$$  
X\_1 = \\mu\_1 + a\_{11}f\_1 + a\_{12}f\_2 + ... + a\_{1m}f\_m + u1\\\\  
X\_2 = \\mu\_2 + a\_{21}f\_1 + a\_{22}f\_2 + ... + a\_{2m}f\_m + u2\\\\  
.\\\\  
.\\\\  
.\\\\  
X\_p = \\mu\_p + a\_{p1}f\_1 + a\_{p2}f\_2 + ... + a\_{pm}f\_m + up  
$$

Cada variable tiene k de sus propios factores comunes, y estos se relacionan con las observaciones a través de la matriz de cargas factoriales para una sola observación de la siguiente manera:

En el análisis factorial, los **factores** se calculan para **maximizar la varianza entre grupos** mientras se **minimiza la varianza dentro del grupo**. Se les llama factores porque agrupan las variables subyacentes. A diferencia del PCA, en el FA los datos necesitan ser normalizados, dado que el FA asume que el conjunto de datos sigue una distribución normal.

## Preparación de Entrevistas – Top 7 Preguntas de Estadística con Respuestas

¿Te estás preparando para entrevistas en estadística, análisis de datos o ciencia de datos? Es crucial conocer conceptos estadísticos clave y sus aplicaciones.

A continuación he incluido siete importantes preguntas de estadística con respuestas, cubriendo pruebas estadísticas básicas, teoría de la probabilidad y el uso de estadísticas en la toma de decisiones, como las pruebas A/B.

### Pregunta 1: ¿Cuál es la diferencia entre una prueba t y una prueba Z?

La pregunta "¿Cuál es la diferencia entre una prueba t y una prueba Z?" es una pregunta común en entrevistas de ciencia de datos porque prueba la comprensión del candidato sobre conceptos estadísticos básicos utilizados para comparar medias de grupos.

Este conocimiento es crucial porque elegir la prueba correcta afecta la validez de las conclusiones extraídas de los datos, lo cual es una tarea diaria en el rol de un científico de datos al interpretar experimentos, analizar resultados de encuestas o evaluar modelos.

### Respuesta:

Ambas pruebas t y Z son métodos estadísticos utilizados para determinar si existen diferencias significativas entre las medias de dos grupos. Pero tienen diferencias clave:

-   **Suposiciones**: Puedes usar una prueba t cuando los tamaños de muestra son pequeños y la desviación estándar de la población es desconocida. No requiere que la media de la muestra sea normalmente distribuida si el tamaño de la muestra es suficientemente grande debido al Teorema del Límite Central. La prueba Z asume que tanto la distribución de la muestra como la de la población son normalmente distribuidas.
-   **Tamaño de Muestra**: Las pruebas t se utilizan típicamente para tamaños de muestra menores de 30, mientras que las pruebas Z se utilizan para tamaños de muestra mayores o iguales a 30 cuando se conoce la desviación estándar de la población.
-   **Estadístico de Prueba**: La prueba t usa la distribución t para calcular el estadístico de prueba, teniendo en cuenta la desviación estándar de la muestra. La prueba Z usa la distribución normal estándar, utilizando la desviación estándar conocida de la población.
-   **Valor P**: El valor p en una prueba t se determina en base a la distribución t, que tiene en cuenta la variabilidad en muestras más pequeñas. La prueba Z usa la distribución normal estándar para calcular el valor p, adecuada para muestras más grandes o parámetros poblacionales conocidos.

La pregunta "¿Qué es un valor p?" requiere la comprensión de un concepto fundamental en las pruebas de hipótesis que hemos discutido en detalle en este blog con ejemplos. No es solo un número, es un puente entre los datos que recolectas y las conclusiones que sacas para la toma de decisiones basada en datos.

Los valores p cuantifican la evidencia en contra de una hipótesis nula: qué tan probable es observar los datos recolectados si la hipótesis nula fuera verdadera.

Para los científicos de datos, los valores p son parte del lenguaje cotidiano en el análisis estadístico, la validación de modelos y el diseño experimental. Deben interpretar los valores p correctamente para tomar decisiones informadas y a menudo necesitan explicar sus implicaciones a las partes interesadas que podrían no tener un conocimiento estadístico profundo.

Por lo tanto, entender los valores p ayuda a los científicos de datos a transmitir el nivel de certeza o duda en sus hallazgos y a justificar acciones o recomendaciones subsecuentes.

Así que aquí necesitas mostrar tu comprensión de lo que mide un valor p y conectarlo con la significancia estadística y las pruebas de hipótesis.

### Respuesta:

El valor p mide la probabilidad de observar un estadístico de prueba al menos tan extremo como el observado, bajo el supuesto de que la hipótesis nula es cierta. Ayuda a decidir si los datos observados se desvían significativamente de lo que se esperaría bajo la hipótesis nula.

Si el valor p es menor que un umbral predeterminado (nivel alfa, usualmente establecido en 0.05), se rechaza la hipótesis nula, lo que indica que el resultado observado es estadísticamente significativo.

### Pregunta 3: ¿Cuáles son las limitaciones de los valores p?

Los valores p son un pilar de la estadística inferencial, proporcionando una métrica para evaluar la evidencia en contra de una hipótesis nula. En esta pregunta necesitas nombrar un par de ellas.

### Respuesta

-   **Dependencia del Tamaño de Muestra**: El valor p es sensible al tamaño de la muestra. Muestras grandes pueden arrojar valores p significativos incluso para efectos triviales, mientras que muestras pequeñas pueden no detectar efectos significativos aunque existan.
-   **No es una Medida del Tamaño del Efecto o Importancia**: Un valor p pequeño no necesariamente significa que el efecto es prácticamente significativo, simplemente indica que es improbable que haya ocurrido por azar.
-   **Mala Interpretación**: Los valores p pueden ser malinterpretados como la probabilidad de que la hipótesis nula sea verdadera, lo cual es incorrecto. Solo miden la evidencia en contra de la hipótesis nula.

### Pregunta 4: ¿Qué es un Nivel de Confianza?

Un nivel de confianza representa la frecuencia con la cual un intervalo de confianza estimado contendría el verdadero parámetro poblacional si se repitiera el mismo proceso múltiples veces.

Por ejemplo, un nivel de confianza del 95% significa que si el estudio se repitiera 100 veces, se esperaría que aproximadamente 95 de los intervalos de confianza calculados de esos estudios contuvieran el verdadero parámetro poblacional.

### Pregunta 5: ¿Cuál es la Probabilidad de Elegir 5 Bolas Rojas y 5 Bolas Azules sin Reemplazo?

¿Cuál es la probabilidad de elegir exactamente 5 bolas rojas y 5 bolas azules en 10 elecciones sin reemplazo de un conjunto de 100 bolas, donde hay 70 bolas rojas y 30 bolas azules? El texto describe cómo calcular esta probabilidad utilizando matemáticas combinatorias y la distribución hipergeométrica.

En esta pregunta, estás lidiando con un problema clásico de probabilidad que implica principios combinatorios y el concepto de probabilidad sin reemplazo. El contexto es un conjunto finito de bolas, cada extracción afecta las siguientes porque la composición del conjunto cambia con cada extracción.

Para abordar este problema, necesitas considerar:

-   **El número total de bolas**: Si la pregunta no especifica esto, necesitas preguntar o hacer una suposición razonable basada en el contexto.
-   **Proporción inicial de bolas**: Conocer el conteo inicial de bolas rojas y azules en el conjunto.
-   **Probabilidad secuencial**: Recuerda que cada vez que sacas una bola, esta no se vuelve a poner, por lo que la probabilidad de sacar una bola de cierto color cambia con cada extracción.
-   **Combinaciones**: Calcular el número de formas de elegir 5 bolas rojas del total de bolas rojas y 5 bolas azules del total de bolas azules, luego dividir por el número de formas de elegir cualquier 10 bolas del total.

Pensar en estos puntos te guiará a formular la solución basada en la distribución hipergeométrica, que describe la probabilidad de un número dado de éxitos en extracciones sin reemplazo de una población finita.

Esta pregunta pone a prueba tu capacidad de aplicar la teoría de la probabilidad a un escenario dinámico, una habilidad invaluable en la toma de decisiones basada en datos y la modelización estadística.

### Respuesta:

Para encontrar la probabilidad de elegir exactamente 5 bolas rojas y 5 bolas azules en 10 elecciones sin reemplazo, calculamos la probabilidad de elegir 5 bolas rojas de 70 y 5 bolas azules de 30, y luego dividimos por las formas totales de elegir 10 bolas de 100:

![Screenshot-2024-04-09-at-12.35.56-AM](https://www.freecodecamp.org/news/content/images/2024/04/Screenshot-2024-04-09-at-12.35.56-AM.png)

Vamos a calcular esta probabilidad:

![Screenshot-2024-04-09-at-12.36.16-AM](https://www.freecodecamp.org/news/content/images/2024/04/Screenshot-2024-04-09-at-12.36.16-AM.png)

Proporcione un ejemplo de cómo podría utilizarse en pruebas genéticas para determinar la probabilidad de que un individuo porte un cierto gen.

El Teorema de Bayes es una piedra angular de la teoría de la probabilidad que permite actualizar creencias iniciales (probabilidades previas) con nueva evidencia para obtener creencias actualizadas (probabilidades posteriores). Esta pregunta quiere probar la capacidad de los candidatos para explicar el concepto, el marco matemático para incorporar nuevas pruebas en predicciones o modelos existentes.

### Respuesta:

El Teorema de Bayes es un teorema fundamental en teoría de probabilidad y estadística que describe la probabilidad de un evento, basado en el conocimiento previo de condiciones que podrían estar relacionadas con el evento. Es crucial para calcular probabilidades posteriores, que son las probabilidades de hipótesis dadas pruebas observadas.

![Screenshot-2024-04-09-at-12.41.03-AM](https://www.freecodecamp.org/news/content/images/2024/04/Screenshot-2024-04-09-at-12.41.03-AM.png)

-   _P_(_A_∣_B_) es la probabilidad posterior: la probabilidad de la hipótesis _A_ dada la evidencia _B_.
-   P(B∣A) es la verosimilitud: la probabilidad de observar la evidencia _B_ dada la hipótesis _A_ es verdadera.
-   P(A) es la probabilidad previa: la probabilidad inicial de la hipótesis _A_, antes de observar la evidencia _B_.
-   P(B) es la probabilidad marginal: la probabilidad total de observar la evidencia _B_ bajo todas las hipótesis posibles.

### Pregunta 7: Describe cómo determinarías estadísticamente si los resultados de una prueba A/B son significativos - explícanos el proceso de pruebas AB.

En esta pregunta, el entrevistador evalúa tu conocimiento completo del marco de pruebas A/B. Están buscando evidencia de que puedes navegar el espectro completo de los procedimientos de pruebas A/B, lo cual es esencial para científicos de datos y profesionales de IA encargados de optimizar características, tomar decisiones basadas en datos y probar productos de software.

El entrevistador quiere confirmar que comprendes cada paso del proceso, comenzando con la formulación de hipótesis estadísticas derivadas de objetivos comerciales. Están interesados en tu capacidad para realizar un análisis de poder y discutir sus componentes, incluyendo la determinación del tamaño del efecto, el nivel de significancia y el poder, todo crítico para calcular el tamaño mínimo de la muestra necesario para detectar un efecto verdadero y prevenir la manipulación de resultados (p-hacking).

La discusión sobre la aleatorización, la recolección de datos y los chequeos de monitoreo verifica si entiendes cómo mantener la integridad de las condiciones de prueba. También deberías estar preparado para explicar la selección de pruebas estadísticas apropiadas, el cálculo de estadísticas de prueba, valores p, e interpretación de resultados para significancia tanto estadística como práctica.

En última instancia, el entrevistador está probando si puedes actuar como un defensor de los datos: alguien que puede ejecutar meticulosamente pruebas A/B, interpretar los resultados y comunicar hallazgos y recomendaciones efectivamente a las partes interesadas, impulsando así la toma de decisiones basada en datos dentro de la organización.

Para aprender sobre pruebas A/B, consulta mi [Curso Rápido de Pruebas A/B en YouTube][67].

### Respuesta:

En una prueba A/B, mi primer paso es establecer hipótesis claras tanto comerciales como estadísticas. Por ejemplo, si estamos probando un nuevo diseño de página web, la hipótesis comercial podría ser que el nuevo diseño aumenta la participación del usuario. Estadísticamente, esto se traduce en esperar una mayor puntuación media de participación para el nuevo diseño en comparación con el anterior.

Luego, realizaría un análisis de poder. Esto implica decidir sobre un tamaño del efecto que sea prácticamente significativo para nuestro contexto comercial—por ejemplo, un aumento del 10% en la participación. Elegiría un nivel de significancia, comúnmente 0.05, y apuntaría a un poder del 80%, reduciendo la probabilidad de errores Tipo II.

El análisis de poder, que tiene en cuenta el tamaño del efecto, el nivel de significancia y el poder, ayuda a determinar el tamaño mínimo de la muestra necesario. Esto es crucial para asegurar que nuestra prueba tenga suficiente poder para detectar el efecto que nos interesa y evitar la manipulación de resultados (p-hacking) al comprometerse con un tamaño de muestra de antemano.

Con nuestro tamaño de muestra determinado, aseguraríamos una aleatorización adecuada en la asignación de usuarios a los grupos de control y prueba, para eliminar el sesgo de selección. Durante la prueba, monitorearía de cerca la recolección de datos en busca de anomalías o ajustes necesarios.

Al completar la recolección de datos, elegiría una prueba estadística adecuada basada en la distribución de los datos y la homogeneidad de la varianza—típicamente una prueba t si el tamaño de la muestra es pequeño o no se puede asumir una distribución normal, o una prueba Z para muestras más grandes con una varianza conocida.

El cálculo de la estadística de prueba y el valor p correspondiente nos permite probar la hipótesis nula. Si el valor p es menor que nuestro nivel alfa elegido, rechazamos la hipótesis nula, sugiriendo que el nuevo diseño tiene un impacto estadísticamente significativo en la participación.

Además de la significancia estadística, evaluaría la significancia práctica al observar el intervalo de confianza para el tamaño del efecto y considerar el impacto comercial.

Finalmente, documentaría todo el proceso y los resultados, y los comunicaría a las partes interesadas en un lenguaje claro y no técnico. Esto incluye no solo la significancia estadística, sino también cómo los resultados se traducen en resultados comerciales. Como defensor de los datos, mi objetivo es apoyar decisiones basadas en datos que se alineen con nuestros objetivos comerciales y estrategia de experiencia del usuario.

¡Gracias por elegir esta guía como tu compañera de aprendizaje! A medida que continúas explorando el vasto campo del aprendizaje automático, espero que lo hagas con confianza, precisión y un espíritu innovador. ¡Mis mejores deseos en todos tus futuros esfuerzos!

## Sobre la Autora

Soy **[**Tatev** Aslanyan][70]**, Investigadora Senior de Aprendizaje Automático e IA, y Cofundadora de **[LunarTech][71]** donde hacemos la Ciencia de Datos y la IA accesibles para todos. He tenido el privilegio de trabajar en Ciencia de Datos en numerosos países, incluyendo EE. UU., Reino Unido, Canadá y los Países Bajos.

Con una Maestría y una Licenciatura en Econometría, mi viaje en Machine Learning y la IA ha sido nada menos que increíble. Basándome en mis estudios técnicos durante mi Licenciatura y Maestría, junto con más de 5 años de experiencia práctica en la industria de Ciencia de Datos, en Machine Learning y la IA, he recopilado este resumen de alto nivel de temas de ML para compartir contigo.

## ¿Cómo Puedes Profundizar Más?

Después de estudiar esta guía, si estás interesado en profundizar aún más y el aprendizaje estructurado es tu estilo, considera unirte a nosotros en [**LunarTech**][72]. Ofrecemos cursos individuales y Bootcamps en Ciencia de Datos, Machine Learning y IA.

Proporcionamos un programa integral que ofrece una comprensión profunda de la teoría, implementación práctica, material de práctica extenso y preparación personalizada para entrevistas para asegurarte el éxito a tu propio ritmo.

Puedes echar un vistazo a nuestro [Ultimate Data Science Bootcamp][73] y unirte a [una prueba gratuita][74] para probar el contenido de primera mano. Esto ha sido reconocido como uno de los [Mejores Bootcamps de Ciencia de Datos de 2023][75], y ha sido destacado en publicaciones de renombre como [Forbes][76], [Yahoo][77], [Entrepreneur][78] y más. Esta es tu oportunidad de ser parte de una comunidad que prospera en la innovación y el conocimiento. ¡Aquí está el mensaje de bienvenida!

<iframe width="356" height="200" src="https://www.youtube.com/embed/c-SXFXegVTw?start=2&amp;feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" title="Welcome to LunarTech - The Most Comprehensive Data Science Bootcamp" name="fitvid0"></iframe>

## Conecta Conmigo

![Screenshot-2024-04-09-at-12.05.32-AM](https://www.freecodecamp.org/news/content/images/2024/04/Screenshot-2024-04-09-at-12.05.32-AM.png)

[LunarTech][79] Newsletter

-   [Sígueme en **LinkedIn**][80] y en **[YouTube][81]**
-   [Consulta LunarTech.ai para Recursos GRATUITOS][82]
-   Suscríbete a mi [**Newsletter de Ciencia de Datos e IA**][83]

[

LunarTech | Substack

Investigación en Machine Learning e IA con más de 5 millones de lectores de blogs | 🌐 Bootcamp de Ciencia de Datos de primera categoría en 2024 | Destacado en Forbes, Entrepreneur, Yahoo, Bloomberg y otros.

![apple-touch-icon-1024x1024](https://substackcdn.com/icons/substack/apple-touch-icon-1024x1024.png)SubstackSubstack

![https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdfaccf84-5dd3-421e-ae5e-37cd6bfb8146_100x100](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdfaccf84-5dd3-421e-ae5e-37cd6bfb8146_100x100.jpeg)

][84]

Si quieres saber más sobre una carrera en Ciencia de Datos, Machine Learning y la IA, y aprender cómo conseguir un trabajo en Ciencia de Datos, puedes descargar esta guía gratuita [Manual de Carreras en Ciencia de Datos e IA][85].

[1]: #random-variables
[2]: #mean-variance-standard-deviation
[3]: #covariance
[4]: #probability-distribution-functions
[5]: #bayes-theorem
[6]: #linear-regression
[7]: #gauss-markov-theorem
[8]: #parameter-properties
[9]: #confidence-intervals
[10]: #statistical-hypothesis-testing
[11]: #statistical-significance
[12]: #type-i-and-type-ii-errors
[13]: #type-i-and-type-ii-errors
[14]: #limitation-of-p-values
[15]: #inferential-statistics
[16]: #inferential-statistics
[17]: #dimensionality-reduction-techniques
[18]: #interview-prep-top-7-statistics-questions-with-answers
[19]: #about-the-author
[20]: #how-can-you-dive-deeper
[21]: https://www.youtube.com/watch?v=HXL58Ikh7UM&t=244s
[22]: https://www.youtube.com/watch?v=TJSfLo49iTM&t=144s
[23]: https://lunartech.ai
[24]: https://www.freecodecamp.org/news/statistics-for-data-scientce-machine-learning-and-ai-handbook/LunarTech.ai
[25]: https://github.com/TatevKaren/mathematics-statistics-for-data-science/tree/main/Sampling%20Techniques
[26]: https://github.com/TatevKaren/mathematics-statistics-for-data-science/tree/main/Deriving%20Expectation%20and%20Variances%20of%20Densities
[27]: https://en.wikipedia.org/wiki/Bernoulli_distribution
[28]: https://en.wikipedia.org/wiki/Binomial_distribution
[29]: https://en.wikipedia.org/wiki/Poisson_distribution
[30]: https://en.wikipedia.org/wiki/Discrete_uniform_distribution
[31]: https://en.wikipedia.org/wiki/Normal_distribution
[32]: https://en.wikipedia.org/wiki/Continuous_uniform_distribution
[33]: https://en.wikipedia.org/wiki/Cauchy_distribution
[34]: https://brilliant.org/wiki/binomial-distribution/
[35]: https://lunartech.ai
[36]: https://www.freecodecamp.org/news/poisson-distribution-a-formula-to-calculate-probability-distribution/
[37]: https://brilliant.org/wiki/eulers-number/
[38]: https://lunartech.ai
[39]: https://www.freecodecamp.org/news/normal-distribution-explained/
[40]: https://www.mathsisfun.com/numbers/pi.html
[41]: https://lunartech.ai
[42]: https://lunartech.ai
[43]: https://www.google.com/url?sa=i&url=https%3A%2F%2Ffreakonometrics.hypotheses.org%2F9404&psig=AOvVaw2IcJrhGrWbt9504WTCWBwW&ust=1618940099743000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjR4v7rivACFQAAAAAdAAAAABAI
[44]: https://lunartech.ai
[45]: https://www.dataschool.io/simple-guide-to-confusion-matrix-terminology/
[46]: https://en.wikipedia.org/wiki/Student%27s_t-test
[47]: https://en.wikipedia.org/wiki/F-test
[48]: https://en.wikipedia.org/wiki/Chi-squared_test
[49]: https://www.stata.com/support/faqs/statistics/durbin-wu-hausman-test/
[50]: https://en.wikipedia.org/wiki/White_test#:~:text=In%20statistics%2C%20the%20White%20test,by%20Halbert%20White%20in%201980.
[51]: https://en.wikipedia.org/wiki/Student%27s_t-distribution
[52]: https://www.geo.fu-berlin.de/en/v/soga/Basics-of-statistics/Hypothesis-Tests/Introduction-to-Hypothesis-Testing/Critical-Value-and-the-p-Value-Approach/index.html
[53]: https://www.google.com/search?q=t-table+two+sided&client=safari&rls=en&sxsrf=ALeKk01KSlU3EEtBeMcXPuh13ud42kRCWw:1618592162824&tbm=isch&source=iu&ictx=1&fir=ZGAb8l8KaBNJiM%252CZaqfSsY36WrUvM%252C_&vet=1&usg=AI4_-kSaUb_tv_3EBZQRhYaQVYYaJ1uBHQ&sa=X&ved=2ahUKEwjBtZrXnYPwAhWHgv0HHQPmASUQ9QF6BAgSEAE&biw=1981&bih=1044#imgrc=ZGAb8l8KaBNJiM
[54]: https://www.geo.fu-berlin.de/en/v/soga/Basics-of-statistics/Hypothesis-Tests/Introduction-to-Hypothesis-Testing/Critical-Value-and-the-p-Value-Approach/index.html
[55]: https://en.wikipedia.org/wiki/F-distribution
[56]: https://www.uio.no/studier/emner/sv/oekonomi/ECON4150/v18/lecture7_ols_multiple_regressors_hypothesis_tests.pdf
[57]: https://www.statisticshowto.com/probability-and-statistics/f-statistic-value-test/
[58]: https://www.sjsu.edu/faculty/gerstman/StatPrimer/t-table.pdf
[59]: http://www.z-table.com/
[60]: https://www.uio.no/studier/emner/sv/oekonomi/ECON4150/v18/lecture7_ols_multiple_regressors_hypothesis_tests.pdf
[61]: https://builtin.com/data-science/step-step-explanation-principal-component-analysis
[62]: https://en.wikipedia.org/wiki/Factor_analysis
[63]: https://en.wikipedia.org/wiki/Canonical_correlation
[64]: https://towardsdatascience.com/understanding-random-forest-58381e0602d2
[65]: https://docs.displayr.com/wiki/Kaiser_Rule
[66]: https://raw.githubusercontent.com/TatevKaren/Multivariate-Statistics/main/Elbow_rule_%25varc_explained.png
[67]: https://www.youtube.com/watch?v=QzAXW7kQ0I8&t=1707s
[68]: https://lunartech.ai/free-resources/
[69]: https://lunartech.ai/course-overview/
[70]: https://tatevaslanyan.com
[71]: https://lunartech.ai
[72]: https://lunartech.ai
[73]: https://lunartech.ai/course-overview/
[74]: https://lunartech.ai/pricing/
[75]: https://www.itpro.com/business-strategy/careers-training/358100/best-data-science-boot-camps
[76]: https://www.forbes.com.au/brand-voice/uncategorized/not-just-for-tech-giants-heres-how-lunartech-revolutionizes-data-science-and-ai-learning/
[77]: https://finance.yahoo.com/news/lunartech-launches-game-changing-data-115200373.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAAM3JyjdXmhpYs1lerU37d64maNoXftMA6BYjYC1lJM8nVa_8ZwTzh43oyA6Iz0DfqLtjVHnknO0Zb8QTLIiHuwKzQZoodeM85hkI39fta3SX8qauBUsNw97AeiBDR09BUDAkeVQh6eyvmNLAGblVj3GSf1iCo81bwHQxknmhgng#
[78]: https://www.entrepreneur.com/ka/business-news/outpacing-competition-how-lunartech-is-redefining-the/463038
[79]: https://substack.com/@lunartech
[80]: https://www.linkedin.com/in/tatev-karen-aslanyan/
[81]: https://www.youtube.com/@LunarTech_ai
[82]: https://lunartech.ai/free-resources/
[83]: https://tatevaslanyan.substack.com/
[84]: https://substack.com/@lunartech
[85]: https://downloads.tatevaslanyan.com/six-figure-data-science-ebook

