---
title: Como Usar Props no Vue.js
date: 2024-09-30T02:50:36.362Z
authorURL: ""
originalURL: https://www.freecodecamp.org/news/how-to-use-props-in-vuejs/
posteditor: ""
proofreader: ""
---

Por Joel Olawanle

<!-- more -->

Usamos props para passar informações/dados de um componente pai para componentes filhos. Neste artigo, vou explicar tudo o que você precisa saber sobre props e por que você deve usar props no Vue.js.

Aqui está um breve resumo do que vamos cobrir neste guia:

-   O que são props no Vue.js?
-   Como registrar props dentro de um componente
-   Como trabalhar com múltiplas props
-   Tipos de props no Vue.js
-   Como passar dados para props
-   Como passar funções para props
-   Como validar props
-   Como definir valores padrão para props

## O que são Props no Vue.js?

“Props” é uma palavra-chave especial que significa propriedades. Elas podem ser registradas em um componente para passar dados de um componente pai para um de seus componentes filhos.

Isso é muito mais fácil comparado a usar bibliotecas de gerenciamento de estado como vuex para aplicações Vue.js.

Os dados em props só podem fluir em um sentido – de cima, ou componente pai, para baixo, ou componentes filhos. Isso simplesmente significa que você não pode passar dados de um filho para um pai.

Outra coisa a ter em mente é que Props são apenas leitura e não podem ser modificadas pelo componente filho porque o componente pai "possui" esse valor.

Vamos equilibrar as coisas agora – os componentes pais passam props para os componentes filhos enquanto os componentes filhos emitem eventos para os componentes pais.

## Como Registrar Props Dentro de um Componente

Vamos agora dar uma olhada em como podemos registrar props dentro de um componente.

```
Vue.component('user-detail', {
  props: ['name'],
  template: '<p>Hi {{ name }}</p>'
})
.js
```

ou, em um Componente de Arquivo Único Vue:

```
<template>
  <p>{{ name }}</p>
</template>

<script>
export default {
  props: ['name']
}
</script>
```

No código acima, registramos uma prop chamada `name` que podemos chamar na seção de template do nosso aplicativo.

Nota: Este é o componente filho e esta prop vai receber dados do componente pai. Vou explicar isso mais adiante.

## Como Trabalhar com Múltiplas Props

Você pode ter mais de uma prop adicionando-as à array de props, como isto:

```
Vue.component('user-detail', {
  props: ['firstName', 'lastName'],
  template: '<p>Hi {{ firstName }} {{ lastName }}</p>'
})
```

ou, em um Componente de Arquivo Único Vue:

```
<template>
  <p>Hi {{ firstName }} {{ lastName }}</p>
</template>

<script>
export default {
  props: [
    'firstName', 
    'lastName'
  ],
}
</script>
```

## Tipos de Props no Vue.js

Para especificar o tipo de prop que você deseja usar no Vue, você usará um objeto em vez de uma array. Você usará o nome da propriedade como a chave de cada propriedade e o tipo como o valor.

Se o tipo de dado passado não corresponder ao tipo da prop, o Vue envia um alerta (em modo de desenvolvimento) no console com um aviso. Os tipos válidos que você pode usar são:

-   String
-   Number
-   Boolean
-   Array
-   Object
-   Date
-   Function
-   Symbol

```
Vue.component('user-detail', {
  props: {
    firstName: String,
    lastName: String
  },
  template: '<p>Hi {{ firstName }} {{ lastName }}</p>'
})
```

ou, em um Componente de Arquivo Único Vue:

```
<template>
  <p>Hi {{ firstName }} {{ lastName }}</p>
</template>

<script>
export default {
  props: {
    firstName: String,
    lastName: String
  },
}
</script>
```

## Como Passar Dados para Props no Vue

O principal objetivo de usar props é passar dados/informações para baixo. Você pode passar seu valor como uma propriedade de dados usando v-bind, como neste código:

```
<template>
  <ComponentName :title=title />
</template>

<script>
export default {
  //...
  data() {
    return {
      title: 'Entendendo Props no Vue.js'
    }
  },
  //...
}
</script>
```

ou como um valor estático assim:

```
<ComponentName title="Entendendo Props no Vue.js" />
```

Suponha que estamos construindo um aplicativo que tem vários botões com diferentes cores de texto/fundo. Em vez de repetir a sintaxe do botão em todos os nossos arquivos, é melhor criar um componente de botão e então passar as cores de texto/fundo como props.

Aqui está o componente pai:

```
<template>
  <div id="app">
    <Button :name='btnName' bgColor='red' />
    <Button :name='btnName' bgColor='green' />
    <Button :name='btnName' bgColor='blue' />
  </div>
</template>

<script>
import Button from './components/Button'

export default {
  name: 'App',
  data(){
    return{
      btnName:"Joel",
    }
  },
  components: {
    Button
  }
}
</script>
```

E aqui está o componente filho:

```
<template>
  <button class="btn" :style="{backgroundColor:bgColor}">{{name}}</button>
</template>
<script>
export default {
  name: 'Button',
  props:{
    name:String,
    bgColor:String
  }
}
</script>
```

O código acima mostra como usar tanto a propriedade de dados quanto valores estáticos quando você está recebendo dados de um componente pai e usando esses dados em um componente filho.

**Nota:** você também pode usar um operador ternário dentro do valor da prop para verificar uma condição verdadeira e passar um valor que dependa disso.

```
<template>
  <div id="app">
    <Button :tagUser="signedUp ? 'Logout' : 'Login'" bgColor='red' />
  </div>
</template>
<script>
import Button from './components/Button'
export default {
  name: 'App',
  data(){
    return{
      signedUp: true,
    }
  },
  components: {
    Button
  }
}
</script>
```

## Como Passar Funções para Props

Passar uma função ou um método para um componente filho como prop é relativamente simples. Basicamente, é o mesmo processo que passar qualquer outra variável.

Mas há razões pelas quais você não deve usar props como funções – em vez disso, você deve usar emit. Este artigo explica corretamente [por quê][1].

```
<template>
  <ChildComponent :function="newFunction" />
</template>
```

```
<script>
export default {
  methods: {
    newFunction() {
      // ...
    }
  }
};
</script>
```

## Como Validar Props no Vue

O Vue torna a validação de props muito fácil. Tudo o que você precisa fazer é adicionar a chave required e seu valor à prop. Podemos validar tanto o tipo da prop quanto usando `required`:

```
props: {
  name: {
    type: String,
    required: true
  }
}
```

## Como Definir Valores Padrão para Props

Antes de concluir este artigo, vamos agora ver como definir valores padrão para nossas props. Valores padrão são renderizados se o componente filho não conseguir obter dados do componente pai.

O Vue permite que você especifique um valor padrão, assim como especificamos `required` anteriormente.

```
props: {
  name: {
    type: String,
    required: true,
    default: 'John Doe'
  },
  img: {
    type: String,
    default: '../image-path/image-name.jpg',
   },
}
```

Você também pode definir o valor padrão como um objeto. E pode ser uma função que retorna um valor apropriado, em vez de ser o valor real.

## Conclusão

Neste artigo, aprendemos o que as props fazem e como elas funcionam no Vue.js.

Em resumo, usamos props para passar dados dos componentes pais para os componentes filhos. O componente filho também emite eventos para os componentes pais caso você precise enviar dados/eventos do filho para o componente pai.

![Imagem](https://www.freecodecamp.org/news/content/images/2021/08/image-50.png)

Obrigado por ler!

**Links Úteis**

-   [Vue.js Component Props - flaviocopes][2]
-   [Props - Vue documentação][3]

[1]: https://michaelnthiessen.com/pass-function-as-prop/
[2]: https://flaviocopes.com/vue-props/
[3]: https://vuejs.org/v2/guide/components-props.html

