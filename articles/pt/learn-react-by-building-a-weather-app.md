---
title: Como Construir um Aplicativo de Clima com React e React Hooks
date: 2024-08-26T20:54:41.731Z
author: Nishant Kumar
authorURL: https://www.freecodecamp.org/news/author/nishant-kumar/
originalURL: https://www.freecodecamp.org/news/learn-react-by-building-a-weather-app/
posteditor: ""
proofreader: ""
---

React é uma biblioteca de front-end super-incrível que você pode usar para construir interfaces de usuário.

<!-- more -->

Uma das melhores coisas sobre o React é que os componentes que criamos são encapsulados. Em outras palavras, eles não podem ser vistos.

Vamos aprender mais sobre como tudo isso funciona construindo um aplicativo de clima usando React.

## Como Instalar Node e npm

Para construir nossa aplicação React, precisamos de um ambiente de tempo de execução chamado Node. Ele é principalmente usado para executar código JavaScript.

Para baixá-lo, vá para [https://nodejs.org/en/][1].

Você também precisará do **npm**, que é um gerenciador de pacotes construído no Node. Você pode usá-lo para instalar pacotes para seus aplicativos JavaScript. Felizmente, ele vem com o Node, então você não precisa baixá-lo separadamente.

Uma vez que ambos estejam instalados, abra seu terminal ou prompt de comando e digite `node -v`. Isso verifica qual versão do Node você tem.

## Como Criar um App React

Para criar nossa aplicação React, digite **`npx create-react-app <nome do seu app>`** no seu terminal, ou **`npx create-react-app my-weather-app`** neste caso.

Você verá que os pacotes estão sendo instalados.

Uma vez que os pacotes estiverem prontos, entre na pasta do projeto e digite **`npm start`**.

Você verá o template padrão do React, assim:

![Screenshot-2021-03-12-12-07-22](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-12-12-07-22.png)

O Template Padrão de Boilerplate do React

![Screenshot-2021-03-12-12-08-28](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-12-12-08-28.png)

App.js

Não precisamos de tudo isso agora. Então, vamos limpar um pouco do código.

No seu arquivo **app.js**, limpe tudo dentro da tag `div`. Remova a importação do logo.

Você receberá uma tela em branco na saída depois de fazer isso.

![Screenshot-2021-03-12-12-12-25](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-12-12-12-25.png)

App.js após a limpeza

## Como Instalar os Pacotes Necessários

Para tornar este aplicativo mais atraente, precisamos de alguns pacotes externos. Então, vamos instalá-los.

Precisamos da biblioteca [Semantic React UI][2]. Para instalá-la, digite o seguinte comando no terminal:

```bash
npm install semantic-ui-react semantic-ui-css
```

Uma vez instalada, abra **index.js** e importe a biblioteca. Apenas copie e cole o seguinte comando no seu arquivo **index.js**:

```
import 'semantic-ui-css/semantic.min.css'
```

Também precisamos do [moment.js][3] para formatar nosso tempo. Instale-o usando o seguinte comando:

```
npm install moment --save
```

Você pode verificar seu arquivo package.json para acompanhar todos os pacotes instalados.

![Screenshot-2021-03-12-12-21-01](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-12-12-21-01.png)

package.json

Aqui, você pode ver todos os pacotes que possui até agora.

## Como Criar Nosso Aplicativo de Clima

Para fazer nosso aplicativo de clima funcionar, precisamos do OpenWeatherMap, uma API de terceiros que nos permitirá buscar os dados do clima.

Vá para [https://home.openweathermap.org/users/sign\_up][4] e crie sua própria conta.

Após finalizar, clique na opção API na barra de navegação. Você verá diferentes opções como Dados Meteorológicos Atuais, Previsões de 4 horas por hora, Previsões de 16 dias e outras. Estes são endpoints da API que você precisará para buscar os dados.

![Screenshot-2021-03-12-12-30-10](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-12-12-30-10.png)

Você também precisa de uma chave de API para chamar essas APIs. Para obter sua chave de API, clique em seu nome de usuário no canto superior direito, e depois em "minhas chaves de API".

Crie uma chave de API se ela ainda não existir.

Na sua pasta principal do app, crie um arquivo chamado **.env.**

Este é um arquivo de variável de ambiente que conterá todos os seus endpoints e chaves de API.

```
REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5'
REACT_APP_API_KEY = Cole sua chave de API aqui.
REACT_APP_ICON_URL = 'https://openweathermap.org/img/w'
```

Cole sua chave API copiada na variável REACT_APP_API_KEY.

## Como Usar React Hooks

React Hooks nos permite usar e gerenciar o estado em nossos componentes funcionais.

Vamos usar o hook `useState` e o hook `useEffect`. Vamos importá-los no topo.

```
import React, { useEffect, useState } from "react";
```

Vamos criar dois estados. Um é para latitude e outro é para longitude.

```
const [lat, setLat] = useState([]);
const [long, setLong] = useState([]);
```

Agora, crie a função `useEffect`. Seu objetivo é carregar as funções quando a aplicação for carregada e recarregada.

```
useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    console.log("Latitude é:", lat)
    console.log("Longitude é:", long)
  }, [lat, long]);
```



```import './App.css';
import React, { useEffect, useState } from "react";
export default function App() {

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    console.log("Latitude is:", lat)
    console.log("Longitude is:", long)
  }, [lat, long]);

  return (
    <div className="App">

    </div>
  );
}
```

app.js

Assim é como o nosso arquivo app.js está agora. Você pode verificar o console para os valores de latitude e longitude.

```
Latitude is: 25.5922166
Longitude is: 85.12761069999999
```

Nossa latitude e longitude

## Como Obter Nossa Localização Atual Usando Latitude e Longitude.

Vamos criar outra função **getWeather** que buscará os dados meteorológicos da API de Meteorologia, com base em nossa latitude e longitude.

Nesta função, estamos usando uma chamada fetch para obter os dados da API. O **process.env.REACT_APP_API_URL** obtém o endereço da sua API e **process.env.REACT_APP_API_KEY** obtém sua chave de API do arquivo **.env**. A lat e long são a latitude e longitude que obtivemos anteriormente.

E então convertimos os dados para o formato **JSON**.

No próximo passo, usamos **setData** para armazenar nosso resultado no objeto **data**.

```
await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
```

E registramos os dados no console.

![Screenshot-2021-03-12-13-36-26](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-12-13-36-26.png)

Aqui, você pode ver todos os dados meteorológicos com base em nossa Latitude e Longitude.

Aqui está nosso novo arquivo app.js que busca os dados meteorológicos com base na Longitude e Latitude:

```
import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './components/weather';
export default function App() {
  
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long])
  
  return (
    <div className="App">
      
    </div>
  );
}
```

app.js

### Como Criar os Componentes do Tempo

Vamos criar nossos componentes meteorológicos onde exibiremos nossos dados meteorológicos.

Na sua pasta src, crie uma pasta chamada **components**, e nesta pasta, crie um arquivo chamado **weather.js.**

Agora, vamos chamar nosso componente meteorológico em nosso arquivo principal **app.js.**

```
import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './components/weather';
export default function App() {
  
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long])
  
  return (
    <div className="App">
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data}/>
      ): (
        <div></div>
      )}
      
    </div>
  );
}
```

Importando o Componente Weather no arquivo app.js

Você pode ver que incluí uma verificação na declaração de retorno. Se o tipo de dados que estamos obtendo for indefinido, ele nos mostrará um div vazio. E como a busca de dados é uma função async, é obrigatório incluir esta verificação. Ela carrega a função após todas as outras funções terem sido executadas. Então, se você remover essa verificação, receberá um erro.

![Screenshot-2021-03-13-05-19-29-1](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-13-05-19-29-1.png)

Isso ocorre porque nossa aplicação renderiza a declaração de retorno antes que a chamada à API seja feita, e não há nada para mostrar nesse caso, então ela lança um erro indefinido.

Para saber mais sobre async/await, confira [este artigo][5].

### Como Criar nosso Corpo da Previsão do Tempo

Para esta parte, vamos usar a biblioteca Semantic UI para projetar nossa interface.

Vamos criar um card que exibirá nossas informações meteorológicas.

```
import React from 'react';
import './styles.css';
import { Card } from 'semantic-ui-react'
```

```markdown
export default CardExampleCard;
```

Weather.js

Aqui, importamos um cartão do semantic-ui-react e, dentro desse cartão, um cabeçalho que mostrará o nome da sua cidade.

Mas a questão é, como obtemos dados do nosso app.js para o componente weather.js?

A resposta é simples. Podemos usar props no React para enviar dados de um componente pai para um componente filho. No nosso caso, nosso componente pai é app.js e nosso componente filho é weather.js.

E para fazer isso, basta adicionar as props no componente em **app.js.**

```
<Weather weatherData={data}/>
```

Aqui, estamos passando os dados com o nome da prop como weatherData. E receberemos as props weatherData em **Weather.js.**

```
import React from 'react';
import './styles.css';
import { Card } from 'semantic-ui-react'

const CardExampleCard = ({weatherData}) => (
  <Card>
    <Card.Content>
        <Card.Header className="header">{weatherData.name}</Card.Header>
    </Card.Content>
  </Card>
)

export default CardExampleCard;
```

![Screenshot-2021-03-12-17-36-56](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-12-17-36-56.png)

Você pode ver que obtemos o nome da cidade de acordo com a localização.

Da mesma forma, podemos adicionar mais campos ao nosso componente de clima.

```
import React from 'react';
import './styles.css';
import { Card } from 'semantic-ui-react'

const CardExampleCard = ({weatherData}) => (
  <Card>
    <Card.Content>
        <Card.Header className="header">Nome da Cidade: {weatherData.name}</Card.Header>
        <p>Temperatura: {weatherData.main.temp}</p>
        <p>Nascer do Sol: {weatherData.sys.sunrise}</p>
        <p>Pôr do Sol: {weatherData.sys.sunset}</p>
        <p>Descrição: {weatherData.weather[0].description}</p>
    </Card.Content>
  </Card>
)

export default CardExampleCard;
```

Podemos obter a Temperatura, Nascer do Sol, Pôr do Sol e Descrição da API.

![Screenshot-2021-03-12-17-45-36-1](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-12-17-45-36-1.png)

Você pode adicionar quaisquer outros campos que desejar, como Umidade, Velocidade do Vento, Visibilidade e mais.

### Como Formatar os Dados e Adicionar o Dia e Data de Hoje

Vamos formatar os dados para que sejam fáceis de entender. Vamos adicionar mais alguns campos.

Para começar, adicione a unidade de temperatura. Você pode fazer isso adicionando **&deg;C** após a temperatura.

Além disso, vamos mudar o horário do nascer e pôr do sol para a hora local.

```
import React from 'react';
import './styles.css';
import { Card } from 'semantic-ui-react'

const CardExampleCard = ({weatherData}) => (
  <Card>
    <Card.Content>
        <Card.Header className="header">Nome da Cidade: {weatherData.name}</Card.Header>
        <p>Temperatura: {weatherData.main.temp} &deg;C</p>
        <p>Nascer do Sol: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Pôr do Sol: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Descrição: {weatherData.weather[0].main}</p>
        <p>Umidade: {weatherData.main.humidity} %</p>
    </Card.Content>
  </Card>
)

export default CardExampleCard;
```

Agora, vamos adicionar o dia e a data de hoje usando **moment.js.**

```
import moment from 'moment';

<p>Dia: {moment().format('dddd')}</p>
<p>Data: {moment().format('LL')}</p>
```

Usando moment.js

Importamos o pacote **moment** no topo e exibimos o dia e a data de hoje, respectivamente. A grande coisa sobre este pacote é que ele atualiza automaticamente a data e o dia.

É assim que nosso **weather.js** se parece agora:

```
import React from 'react';
import './styles.css';
import { Card } from 'semantic-ui-react';
import moment from 'moment';

const CardExampleCard = ({weatherData}) => (
  <Card>
    <Card.Content>
        <Card.Header className="header">Nome da Cidade: {weatherData.name}</Card.Header>
        <p>Temperatura: {weatherData.main.temp} &deg;C</p>
        <p>Nascer do Sol: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Pôr do Sol: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
        <p>Descrição: {weatherData.weather[0].main}</p>
        <p>Umidade: {weatherData.main.humidity} %</p>
        <p>Dia: {moment().format('dddd')}</p>
        <p>Data: {moment().format('LL')}</p>
    </Card.Content>
  </Card>
)

export default CardExampleCard;
```

weather.js

![Screenshot-2021-03-13-12-16-14](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-13-12-16-14.png)

E o acima é nosso resultado.

## Vamos Fazer Alguma Estilização

Agora que temos todos os nossos dados, vamos estilizar para torná-los mais atraentes.

Primeiramente, vamos tornar o cartão maior, mudar o border-radius, adicionar uma fonte mais legal e uma cor, e remover o alinhamento de texto.

```
import React from 'react';
import './styles.css';
import moment from 'moment';

const CardExampleCard = ({weatherData}) => (
  <div className="main">
      <p className="header">{weatherData.name}</p>
      <div>
        <p className="day">Dia: {moment().format('dddd')}</p>
      </div>

      <div>
        <p className="temp">Temperatura: {weatherData.main.temp} &deg;C</p>
      </div>
      
  </div>
)

export default CardExampleCard;
```
```

```css
@import url('https://fonts.googleapis.com/css2?family=Recursive&display=swap');

.main{
    width: 700px;
    border-radius: 15px;
    background-color: #01579b;
}

.header{
    background-color: #424242;
    color: whitesmoke;
    padding: 10px;
    font-size: 28px;
    border-radius: 15px;
    font-family: 'Recursive', sans-serif;
}

.day{
    padding: 15px;
    color: whitesmoke;
    font-family: 'Recursive', sans-serif;
    font-size: 24px;
    font-weight: 600;
}

.temp{
    padding: 15px;
    color: whitesmoke;
    font-family: 'Recursive', sans-serif;
    font-size: 18px;
}
```

styles.css

![Screenshot-2021-03-13-12-48-03](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-13-12-48-03.png)

É assim que nosso aplicativo se parece agora.

Vamos usar o **flexbox** para organizar os dados em colunas.

```jsx
<div className="flex">
   <p className="day">Dia: {moment().format('dddd')}</p>
</div>

<div className="flex">
   <p className="temp">Temperatura: {weatherData.main.temp} &deg;C</p>
</div>
```

Nomeie as divs como 'flex' e adicione a seguinte propriedade no **_styles.css._**

```css
.flex{
    display: flex;
    justify-content: space-between;
}
```

Nosso weather.js agora ficará assim.

```jsx
import React from 'react';
import './styles.css';
import moment from 'moment';

const CardExampleCard = ({weatherData}) => (
  <div className="main">
      <p className="header">{weatherData.name}</p>
      <div className="flex">
        <p className="day">Dia: {moment().format('dddd')}</p>
        <p className="day">{moment().format('LL')}</p>
      </div>

      <div className="flex">
        <p className="temp">Temperatura: {weatherData.main.temp} &deg;C</p>
        <p className="temp">Umidade: {weatherData.main.humidity} %</p>
      </div>
      
      
  </div>
)

export default CardExampleCard;
```

![Screenshot-2021-03-13-12-56-27](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-13-12-56-27.png)

Da mesma forma, adicione os campos restantes.

```jsx
import React from 'react';
import './styles.css';
import moment from 'moment';

const WeatherCard = ({weatherData}) => (
  <div className="main">
      <p className="header">{weatherData.name}</p>
      <div className="flex">
        <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
        <p className="description">{weatherData.weather[0].main}</p>
      </div>

      <div className="flex">
        <p className="temp">Temperatura: {weatherData.main.temp} &deg;C</p>
        <p className="temp">Umidade: {weatherData.main.humidity} %</p>
      </div>

      <div className="flex">
        <p className="sunrise-sunset">Nascer do sol: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        <p className="sunrise-sunset">Pôr do sol: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
      </div>
    
  </div>
)

export default WeatherCard;
```

weather.js

```css
@import url('https://fonts.googleapis.com/css2?family=Recursive&display=swap');

.main{
    width: 700px;
    border-radius: 20px;
    background-color: #01579b;
}

.top{
    height: 60px;
    background-color: #424242;
    color: whitesmoke;
    padding: 10px;
    border-radius: 20px 20px 0 0;
    font-family: 'Recursive', sans-serif;
    display: flex;
    justify-content: space-between;
}

.header{
    background-color: #424242;
    color: whitesmoke;
    margin: 10px 0px 0px 10px;
    font-size: 25px;
    border-radius: 20px 20px 0 0;
    font-family: 'Recursive', sans-serif;
}

.day{
    padding: 15px;
    color: whitesmoke;
    font-family: 'Recursive', sans-serif;
    font-size: 24px;
    font-weight: 600;
}

.temp{
    padding: 15px;
    color: whitesmoke;
    font-family: 'Recursive', sans-serif;
    font-size: 18px;
}

.flex{
    display: flex;
    justify-content: space-between;
}

.sunrise-sunset{
    padding: 15px;
    color: whitesmoke;
    font-family: 'Recursive', sans-serif;
    font-size: 16px;
}

.description{
    padding: 15px;
    color: whitesmoke;
    font-family: 'Recursive', sans-serif;
    font-size: 24px;
    font-weight: 600;
}
```

styles.css

É assim que nossa aplicação se parece agora:

![Screenshot-2021-03-13-13-37-46](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-13-13-37-46.png)

### Como Adicionar um Botão de Atualizar.

Vamos adicionar um botão de atualizar na parte superior da nossa página.

```jsx
import React from 'react';
import './styles.css';
import moment from 'moment';
import { Button } from 'semantic-ui-react';

const refresh = () => {
  window.location.reload();
}

const WeatherCard = ({weatherData}) => (
  <div className="main">

      <div className="top">
        <p className="header">{weatherData.name}</p>
        <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
      </div>
      <div className="flex">
        <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
        <p className="description">{weatherData.weather[0].main}</p>
      </div>

      <div className="flex">
        <p className="temp">Temperatura: {weatherData.main.temp} &deg;C</p>
        <p className="temp">Umidade: {weatherData.main.humidity} %</p>
      </div>
```

export default WeatherCard;
```

weather.js

```
.button{
    width: 35px;
    height: 35px;
}
```

styles.css

![Screenshot-2021-03-13-13-51-37](https://www.freecodecamp.org/news/content/images/2021/03/Screenshot-2021-03-13-13-51-37.png)

Você pode ver um botão que acionará a função de atualização. Quando você pressioná-lo, ele atualizará a página.

### Como Adicionar um Carregador Quando Nossa Aplicação Está Carregando.

Vamos adicionar um carregador para tornar o aplicativo ainda mais incrível.

Importe Loader do Semantic UI e adicione-o na função de retorno, onde verificamos a ausência de dados indefinidos.

```
import { Dimmer, Loader } from 'semantic-ui-react';

<div className="App">
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data}/>
      ): (
        <div>
          <Dimmer active>
            <Loader>Carregando...</Loader>
          </Dimmer>
       </div>
     )}
 </div>
```

app.js

## Vamos Recapitular o que Fizemos

Criamos uma aplicação React que mostra o clima atual com base na sua localização.

Vamos passar por tudo que fizemos até agora.

### Aprendemos sobre State e Props

State e Props são recursos muito poderosos em React. Eles são usados para gerenciar dados e controlar seu fluxo dentro de diferentes componentes.

Em nossa aplicação, estamos gerenciando o state, que é o estado da aplicação. Por exemplo, o nome da cidade, a temperatura, a data, a umidade e tudo mais. Eles variam de usuário para usuário, dependendo de sua localização.

Props, por outro lado, são usados para passar dados entre componentes. Estamos obtendo os dados no nosso arquivo **app.js**, mas estamos lendo-os em **weather.js.** Lembre-se, props só podem ser usados para passar dados do componente pai para o componente filho.

### Usamos React Hooks

Se você já usou componentes de classe, então deve conhecer os métodos do ciclo de vida. Se não, eles são os métodos que são chamados quando nossa página renderiza ou re-renderiza. Mas não podemos usar métodos do ciclo de vida em componentes funcionais, pois eles são especialmente construídos para componentes de classe.

Então, React Hooks é a alternativa. Usamos dois hooks em nossa aplicação. Um é o useState, usado para gerenciar o estado da aplicação. O outro é o useEffect, que é carregado quando a página é renderizada ou carregada.

### Experimentamos o Semantic UI

Semantic UI é uma biblioteca para React que possui componentes pré-definidos incríveis.

Isso é tudo, pessoal. Você pode adicionar mais recursos ao aplicativo, como uma previsão de cinco dias, ícones e muito mais.

Você pode [encontrar o código no Github][6] se quiser experimentar mais.

Você também pode [assistir a este tutorial no meu canal do YouTube][7] se quiser.

> Experimente e experimente, bom aprendizado.

[1]: https://nodejs.org/en/
[2]: https://react.semantic-ui.com/usage/
[3]: https://momentjs.com/
[4]: https://home.openweathermap.org/users/sign_up
[5]: https://www.freecodecamp.org/news/async-await-in-javascript/
[6]: https://github.com/nishant-666/React-weather
[7]: https://youtu.be/Y1wKWIRNthQ

