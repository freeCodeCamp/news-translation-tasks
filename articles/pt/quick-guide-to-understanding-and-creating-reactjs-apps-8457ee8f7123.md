---
title: Um guia rápido para ajudar você a entender e criar apps ReactJS
date: 2024-09-15T02:02:29.002Z
authorURL: ""
originalURL: https://www.freecodecamp.org/news/quick-guide-to-understanding-and-creating-reactjs-apps-8457ee8f7123/
posteditor: ""
proofreader: ""
---

Por Aditya Sridhar

<!-- more -->

### Este Post está dividido em 2 partes

1.  A Primeira Parte demonstra como criar um simples app React usando a CLI 'create-react-app' e explica a estrutura do projeto.
2.  A Segunda Parte explica um código existente que postei no Github. Este código demonstra o uso de componentes, comunicação entre componentes, realiza chamadas HTTP e usa React Bootstrap (bootstrap escrito para React).

### Parte 1

#### Instale NodeJS se ainda não estiver presente

NodeJS é necessário, pois as Bibliotecas Requeridas para React são baixadas usando o gerenciador de pacotes node (npm). Consulte [https://nodejs.org/en/][1] para instalar o NodeJS.

#### Instale o Pacote Node create-react-app

O pacote node **create-react-app** ajuda a configurar um projeto React. Instale o pacote node create-react-app globalmente usando o seguinte comando.

```
npm install -g create-react-app
```

#### Crie o Projeto

O projeto pode ser criado usando **create-react-app.** Use o comando abaixo para criar o projeto.

```
npx create-react-app first-react-app
```

**first-react-app** é o nome do aplicativo. O comando acima cria uma pasta chamada **first-react-app**, que é a pasta do projeto. Para testar se tudo foi configurado corretamente, entre na pasta do projeto e inicie o aplicativo usando o seguinte comando.

```
cd first-react-app
npm start
```

Vá ao seu navegador e acesse a seguinte URL **localhost:3000**  
Você deverá ver que seu aplicativo está em execução. O Aplicativo deve se parecer com isto em seu navegador:

![Imagem](https://cdn-media-1.freecodecamp.org/images/w1SbWWOdE5XDpq25D6aYcw6e7RjJSJupdp1T)

#### Estrutura Básica de Pastas Explicada

Quando você criou o projeto, deve ter notado que ele criou vários arquivos. Aqui listarei alguns dos arquivos e pastas importantes que você deve conhecer.

1.  **package.json:** Este arquivo contém a lista de dependências node necessárias.
2.  **public/index.html:** Quando o aplicativo é iniciado, esta é a primeira página que é carregada. Este será o único arquivo html em todo o aplicativo, já que o React é geralmente escrito usando **JSX**, sobre o qual falarei mais adiante. Além disso, este arquivo tem uma linha de código. Esta linha é muito significativa, pois todos os componentes do aplicativo são carregados neste div.
3.  **src/index.js**: Este é o arquivo javascript correspondente ao index.html. Este arquivo contém a seguinte linha de código, que é muito significativa. **ReactDOM.render(, document.getElementById(‘root’));**
4.  A linha de código acima está informando que o Componente **App** (cobrirei o Componente App em breve) deve ser carregado em um elemento html com id **root**. Isto nada mais é do que o **elemento div** presente no **index.html.**
5.  **src/index.css**: O arquivo CSS correspondente ao index.js.
6.  **src/App.js** : Este é o arquivo do Componente **App**. O Componente **App** é o componente principal no React que atua como um contêiner para todos os outros componentes.
7.  **src/App.css** : Este é o arquivo CSS correspondente ao Componente **App**
8.  **build:** Esta é a pasta onde os arquivos compilados são armazenados. Apps React podem ser desenvolvidos usando tanto JSX quanto JavaScript normal em si, mas usar JSX definitivamente facilita as coisas para o desenvolvedor :). No entanto, os navegadores não entendem JSX. Portanto, JSX precisa ser convertido em javascript antes de ser implantado. Esses arquivos convertidos são armazenados na pasta build após a agrupação e minificação. Para ver a pasta build, execute o seguinte comando

```
npm run build
```

#### Criando Componentes

Um Componente em React realiza uma funcionalidade específica. Um Aplicativo nada mais é do que uma coleção de componentes. Cada componente pode ter múltiplos componentes filhos, e os componentes podem se comunicar entre si.

Vamos criar um Componente React agora.

Dentro da pasta **src**, crie um arquivo chamado **FirstComponent.js** e copie o seguinte código para **FirstComponent.js.**

```
import React, {Component} from 'react';

export default class FirstComponent extends Component {

constructor(props) {
    super(props)
    }

render() {
    const element = (<div>Texto do Elemento</div>)
    return (<div className="comptext">
    <h3>Primeiro Componente</h3>
        {this.props.displaytext}
        {element}
    </div>)
    }
}
```

1.  O nome do Componente é **FirstComponent**, que é denotado pelo nome do arquivo assim como pela declaração `export default class FirstComponent extends Component`
2.  O atributo **props** no construtor conterá todos os parâmetros que são passados como entrada para este componente.
3.  **render():** O valor de retorno desta função é renderizado (exibido) na tela. Sempre que a função render() é chamada, a Tela é rerenderizada. Isto é geralmente feito automaticamente pelo aplicativo. O código que se parece muito com html nesta função nada mais é do que **JSX.**

**JSX** parece muito semelhante ao HTML, mas possui todo o poder do JavaScript. Aqui, eu explicarei o código JSX e o que ele está tentando fazer.

```
render() {
    const element = (<div>Texto do Elemento</div>)
    return (<div className="comptext">
    <h3>Primeiro Componente</h3>
        {this.props.displaytext}
        {element}
    </div>)
    }
```

A primeira linha `const element = (<div>Texto do Elemento</div>)` cria um elemento div e o atribui a uma constante chamada element. Esta sintaxe peculiar que você vê é **apenas** JSX.

Dentro da declaração de retorno, você vê a seguinte sintaxe:

```
<div className="comptext">
    <h3>Primeiro Componente</h3>
        {this.props.displaytext}
        {element}
</div>
```

Aqui, **className** é usado para apontar para uma classe CSS. `<h3>Primeiro Componente</h3>` é apenas uma sintaxe HTML normal. `{this.props.displaytext}` é usado para acessar um atributo chamado displaytext a partir de props (então displaytext é passado como uma entrada sempre que este componente é chamado). Aqui **displaytext** é apenas um nome personalizado que eu dei. `{element}` é a constante que foi criada, que por sua vez contém o elemento div.

#### Usando o Componente

**PrimeiroComponente** foi criado, mas ainda não está sendo usado em nenhum lugar. Vamos adicionar **PrimeiroComponente** ao componente **App**. Aqui está o código modificado para **App.js**

```
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bem-vindo ao React</h1>
        </header>
        <p className="App-intro">
          Para começar, edite <code>src/App.js</code> e salve para recarregar.
        </p>
        <FirstComponent displaytext="Dados do Primeiro Componente"/>
      </div>
);
  }
}
export default App;
```

**PrimeiroComponente** precisa ser importado para o componente App primeiro, o que é feito na linha `import FirstComponent from ‘./FirstComponent’`

Então **PrimeiroComponente** é adicionado ao componente **App** usando a linha `<FirstComponent displaytext="Dados do Primeiro Componente"/>`

Aqui **displaytext** é passado como um atributo para o PrimeiroComponente.

Agora você pode executar a aplicação usando o comando `npm start`

Você deve ver o seguinte resultado no navegador.

![Imagem](https://cdn-media-1.freecodecamp.org/images/1HRMdkexuXF6YgrAp1NwPXyzZsIuebRpiFjB)

#### Parabéns?

Agora você sabe como criar uma aplicação React e como criar e usar componentes React. Você também sabe um pouco sobre JSX :)

A próxima parte explicará um código React existente do Github. O código da Parte 2 é diferente do código que escrevemos na Parte 1.

### Parte 2

#### Código

O seguinte código está sendo explicado aqui, então clone o repositório em seu computador. O repositório tem instruções sobre como clonar e configurar o código em seu computador.

#### [https://github.com/aditya-sridhar/simple-reactjs-app][2]

#### URL da Aplicação

Para ver como a aplicação final se parece, você pode clicar no seguinte URL. Isso dará uma boa ideia do que a aplicação está tentando fazer.

#### [https://aditya-sridhar.github.io/simple-reactjs-app][3]

A aplicação se parecerá com isso em uma tela de celular

![Imagem](https://cdn-media-1.freecodecamp.org/images/0aE6v5BOa389ObdKL-9oglyr4KLYhBTKhrTm)

#### O que esta Aplicação faz

Esta aplicação exibe uma lista de clientes. Quando um cliente é selecionado, exibe os detalhes do cliente selecionado. Esta é uma Aplicação de Página Única (SPA). **React é mais adequado para Aplicações de Página Única**. As Aplicações de Página Única exibem tudo dentro de uma única página.

#### **Estrutura da Aplicação Explicada**

#### **Customers** Componente

Este componente exibe a lista de clientes. Isso corresponde ao arquivo **src/Customers.js**. Este componente tem o seguinte construtor.

```
constructor(props) {
    super(props)
    this.state = {
        selectedCustomer: 1
    }
}
```

**props** já foram explicados. Mas aqui você também vê **this.state**. Sempre que o estado muda, o componente é re-renderizado. Aqui, **state** tem um parâmetro chamado **selectedCustomer** para manter controle de qual cliente está selecionado. Se **selectedCustomer** muda, então o **componente e seus componentes filhos** são renderizados novamente. O construtor é usado apenas para definir **props** e **state.** Além disso, **props** nunca devem **ser editados** dentro de um componente.

A próxima coisa que você nota é o seguinte código.

```
componentDidMount() {
    this.getCustomerData();
}
```

**componentDidMount()** é uma função que é chamada assim que o componente é renderizado. Portanto, isso pode ser usado para definir alguns valores iniciais, bem como carregar dados. Aqui, está chamando uma função chamada **getCustomerData()**

O próximo pedaço de código que você vê é

```
getCustomerData() {
    axios.get('assets/samplejson/customerlist.json').then(response => {
        this.setState({customerList: response})
    })
};
```

Esta função **getCustomerData()** faz uma chamada HTTP para ler o JSON de exemplo contendo a lista de clientes de **assets/samplejson/customerlist.json.** Ao obter uma resposta com sucesso, o estado do sistema é alterado, atribuindo a **response** à **customerList.** Você pode se perguntar por que nunca adicionamos customerList no construtor. A razão é que você pode adicionar parâmetros dinamicamente no estado em qualquer ponto do código. O único requisito é que no construtor pelo menos um estado vazio deve ser definido.

A próxima função é a função **render()** que retorna quais elementos devem ser renderizados na tela. Os principais pontos de foco na função render são:

```
<Button bsStyle="info" onClick={() => this.setState({selectedCustomer: customer.id})}>

Clique para Ver Detalhes

</Button>
```

Todo cliente na lista possui um botão chamado **Clique para Ver Detalhes**. O trecho de código acima indica que, sempre que o botão for clicado, o estado de **selectedCustomer** será alterado para o id do cliente selecionado. Como o estado muda aqui, o componente e seu componente filho serão rerenderizados.

O outro trecho de código que é importante é:

```
<CustomerDetails val={this.state.selectedCustomer}/>
```

Este trecho indica que **CustomerDetails** é um componente filho do componente **Customers** e também passa o id **selectedCustomer** como entrada para o componente **CustomerDetails**

#### Componente CustomerDetails

Este componente exibe os detalhes do Cliente selecionado. Alguns trechos de código importantes deste componente serão explicados aqui:

```
componentDidUpdate(prevProps) {

// obter detalhes do cliente apenas se as props mudarem
// (props é a entrada) 
    if (this.props.val !== prevProps.val) {
        this.getCustomerDetails(this.props.val)
    }
}
```

A função **componentDidUpdate()** é chamada sempre que o componente é rerenderizado. Aqui, estamos chamando a função **getCustomerDetails()** se a entrada deste componente tiver mudado quando o componente for rerenderizado. A entrada passada para a função **getCustomerDetails()** é **this.props.val**. **this.props.val** por sua vez, obtém seu valor do componente **Customers** (selectedCustomer foi passado como entrada para este). Para saber se a entrada mudou, o trecho de código usado é `this.props.val !== prevProps.val`

```
getCustomerDetails(id) {
    axios.get('assets/samplejson/customer' + id + '.json').then(response => {
        this.setState({customerDetails: response})
    })
};
```

A função **getCustomerDetails()** faz uma chamada HTTP para obter o json de exemplo que contém os detalhes do cliente. O parâmetro **id** é usado para saber quais detalhes do cliente são necessários. **id** nada mais é do que **this.props.val.** Quando a resposta é recebida com sucesso, o estado deste componente é alterado atribuindo **response** a **customerDetails**.

A função **render()** para este componente é bastante direta e simples, então não será coberta aqui.

### Referências

**create-react-app:** Consulte [https://github.com/facebook/create-react-app][4] para aprender tudo que pode ser feito usando create-react-app

**ReactJS:** Consulte [https://reactjs.org/][5] para entender os conceitos do ReactJS. A documentação é muito boa.

**React Bootstrap:** Consulte [https://react-bootstrap.github.io/getting-started/introduction/][6] para entender como usar o React Bootstrap

**axios:** Consulte [https://www.npmjs.com/package/axios][7] para saber mais sobre como usar a biblioteca axios para fazer requisições HTTP

### Parabéns Novamente?

Agora você sabe como usar componentes, como comunicar de um componente pai para um componente filho e também um pouco sobre renderização.

Os conceitos básicos foram abordados neste post e espero que isso seja útil.

### Sobre o autor

Eu amo tecnologia e sigo os avanços tecnológicos. Também gosto de ajudar os outros com qualquer conhecimento que tenho no espaço da tecnologia.

Sinta-se à vontade para se conectar comigo no meu LinkedIn [https://www.linkedin.com/in/aditya1811/][8]

Você também pode me seguir no Twitter [https://twitter.com/adityasridhar18][9]

Meu Site: [https://adityasridhar.com/][10]

### Outros Posts Relevantes de Minha Autoria

[Um Guia Rápido para Ajudá-lo a Entender e Criar Aplicativos Angular 6][11]

[Uma breve introdução ao Vue.js][12]

[1]: https://nodejs.org/en/
[2]: https://github.com/aditya-sridhar/simple-reactjs-app
[3]: https://aditya-sridhar.github.io/simple-reactjs-app
[4]: https://github.com/facebook/create-react-app
[5]: https://reactjs.org/
[6]: https://react-bootstrap.github.io/getting-started/introduction/
[7]: https://www.npmjs.com/package/axios
[8]: https://www.linkedin.com/in/aditya1811/
[9]: https://twitter.com/adityasridhar18
[10]: https://adityasridhar.com/
[11]: https://medium.freecodecamp.org/quick-guide-to-understanding-and-creating-angular-6-apps-2f491dffca1c
[12]: https://medium.freecodecamp.org/a-quick-introduction-to-vue-js-72937ee8880d


