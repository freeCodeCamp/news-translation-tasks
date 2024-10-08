---
title: Como transformar uma função de Callback em uma Promessa no JavaScript
date: 2024-10-08T13:16:33.296Z
authorURL: ""
originalURL: https://www.freecodecamp.org/news/how-to-make-a-promise-out-of-a-callback-function-in-javascript-d8ec35d1f981/
posteditor: ""
proofreader: ""
---

Por Adham El Banhawy

<!-- more -->

Desenvolvedores back-end enfrentam desafios o tempo todo ao construir aplicações ou testar código. Como um desenvolvedor que é relativamente novo e está se familiarizando com esses desafios, nunca me deparei com um desafio ou inconveniência com mais frequência — ou mais memorável — do que com **funções de callback**.

Não vou me aprofundar muito nos detalhes de callbacks e seus prós e contras ou alternativas como promessas e async/await. Para uma explicação mais vívida, você pode conferir [este artigo][1] que os explica detalhadamente.

### **Callback Hell**

Callbacks são uma funcionalidade útil do JavaScript que permite realizar chamadas assíncronas. Elas são funções que geralmente são passadas como um segundo parâmetro para outra função que está buscando dados ou realizando uma operação de E/S que leva tempo para completar.

Por exemplo, tente fazer uma chamada de API usando o módulo `request` ou conecte-se a um banco de dados MongoDB. Mas e se ambas as chamadas dependerem uma da outra? E se os dados que você está buscando forem a URL do MongoDB à qual você precisa se conectar?

Você teria que aninhar essas chamadas dentro uma da outra:

```
request.get(url, function(error, response, mongoUrl) {

  if(error) throw new Error("Erro ao buscar dados");

  MongoClient.connect(mongoUrl, function(error, client) {

    if(error) throw new Error("Erro de conexão com o MongoDB");

    console.log("Conectado com sucesso ao servidor");    
    const db = client.db("dbName");
    // Realizar alguma lógica da aplicação
    client.close();

  });

});
```

Ok... então onde está o problema? Bem, por um lado, a legibilidade do código sofre com essa técnica.

Pode parecer aceitável no começo quando a base de código é pequena. Mas isso não escala bem, especialmente se você entrar mais camadas profundas nos callbacks aninhados.

Você acabará com muitos colchetes e chaves que irão confundir você e outros desenvolvedores, não importa o quão bem formatado seu código esteja. Existe um site chamado [callbackhell][2] que aborda essa questão específica.

Ouço alguns de vocês, incluindo meu eu passado ingênuo, me dizendo para envolver em uma função `async` e então `await` na função de callback. Isso simplesmente não funciona.

Se houver qualquer bloco de código após a função que usa callbacks, aquele bloco de código será executado e **NÃO** **esperará** pelo callback.

Aqui está o erro que cometi antes:

```
var request = require('request');

// ERRADO

async function(){

  let joke;
  let url = "https://api.chucknorris.io/jokes/random"

  await request.get(url, function(error, response, data) {

    if(error) throw new Error("Erro ao buscar dados");

    let content = JSON.parse(data);
    joke = content.value;

  });

  console.log(joke); // undefined

};

// Errado

async function(){

  let joke;
  let url = "https://api.chucknorris.io/jokes/random"

  request.get(url, await function(error, response, data) {

    if(error) throw new Error("Erro ao buscar dados");

    let content = JSON.parse(data);
    joke = content.value;

  });

  console.log(joke); // undefined

};
```

Alguns desenvolvedores mais experientes podem dizer "Apenas use uma biblioteca diferente que use promessas para fazer a mesma coisa, como [axios][3], ou apenas use [fetch][4]". Claro, eu poderia nesse cenário, mas isso é apenas fugir do problema.

Além disso, este é apenas um exemplo. Às vezes, você pode estar preso a usar uma biblioteca que não suporta promessas sem alternativas. Como usar kits de desenvolvimento de software (SDKs) para se comunicar com plataformas como Amazon Web Services (AWS), Twitter ou Facebook.

Às vezes, até mesmo usar um callback para fazer uma chamada muito simples com um rápido I/O ou operação CRUD está bem, e nenhuma outra lógica depende de seus resultados. Mas você pode estar restrito pelo ambiente de execução, como em uma [função Lambda][5] que mataria todos os processos uma vez que o thread principal termine, independentemente de qualquer chamada assíncrona que não tenha sido concluída.

### Solução 1 (fácil): Use o módulo "util" do Node

A solução é surpreendentemente simples. Mesmo se você estiver um pouco desconfortável com a ideia de promessas no JavaScript, você vai adorar como pode resolver esse problema usando-as.

Como apontado por Erop e Robin nos comentários, a versão 8 do Nodejs e acima agora suportam transformar funções de callback em promessas usando o módulo interno **util**.

```
const request = require('request');

const util = require('util');

const url = "https://api.chucknorris.io/jokes/random";

// Use o util para prometer o método request

const getChuckNorrisFact = util.promisify(request);

// Use o novo método para chamar a API em um padrão moderno de then/catch

getChuckNorrisFact(url).then(data => {

   let content = JSON.parse(data.body);

   console.log('Piada: ', content.value);

}).catch(err => console.log('erro: ', err))
```

O código acima resolve o problema de maneira limpa usando o método [**util.promisify**][6] disponível na biblioteca principal do Nodejs.

### Solução 2 (envolvida): Transformar o Callback em uma Promessa

Às vezes, usar as bibliotecas de request e util não é possível, seja por causa de um ambiente/código legado ou por realizar as requisições a partir do navegador do lado do cliente, você precisa encapsular uma promessa em torno de sua função de callback.

Vamos pegar o exemplo do Chuck Norris acima e transformá-lo em uma promessa.

```
var request = require('request');
let url = "https://api.chucknorris.io/jokes/random";

// Uma função que retorna uma promessa para resolver os dados //obtidos da API ou um erro
let getChuckNorrisFact = (url) => {
  return new Promise(
    (resolve, reject) => {
      request.get(url, function(error, response, data){
        if (error) reject(error);

let content = JSON.parse(data);
        let fact = content.value;
        resolve(fact);
      })
   }
 );
};

getChuckNorrisFact(url).then(
   fact => console.log(fact) // realmente exibe uma string
).catch(
   error => console.log(error)
);
```

![Imagem](https://cdn-media-1.freecodecamp.org/images/ZXNYPRkv4mC2cHoq-4PIdoAx0WK-DyuUybzA) _funciona como mágica_

No código acima, coloquei a função `request` baseada em callback dentro de uma encapsuladora de Promise `Promise((resolve, reject) => { //função de callback})`. Este invólucro nos permite chamar a função `getChuckNorrisFact` como uma promessa com os métodos `**.then()**` e `.catch()`. Quando a `_getChuckNorrisFact_` é chamada, ela executa a requisição para a API e **espera** por uma declaração `resolve()` ou `reject()` para executar. Na função de callback, você simplesmente passa os dados recuperados para os métodos resolve ou reject.

Uma vez que os dados (neste caso, um fato incrível sobre Chuck Norris) são obtidos e passados para o resolvedor, o `getChuckNorrisFact` executa o método `then()`. Isso retornará o resultado que você pode **utilizar dentro de uma função dentro do `then()`** para realizar a lógica desejada — neste caso, exibi-lo no console.

Você pode ler mais sobre isso na [MDN Web Docs.][7]

[1]: https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee
[2]: http://callbackhell.com/
[3]: https://www.npmjs.com/package/axios
[4]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
[5]: https://docs.aws.amazon.com/lambda/latest/dg/lambda-introduction-function.html
[6]: https://nodejs.org/docs/latest-v8.x/api/util.html#util_util_promisify_original
[7]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#Creating_a_Promise_around_an_old_callback_API

