---
title: Elementos Inline e Block em HTML - Explicado
date: 2024-09-15T04:03:36.909Z
authorURL: ""
originalURL: https://www.freecodecamp.org/news/inline-elements-and-block-elements-in-html-explained/
posteditor: ""
proofreader: ""
---

## **Elementos Block e Inline**

<!-- more -->

Vamos entender os elementos block e inline usando os exemplos abaixo:

#### **Exemplo de Código com Saída:**

![Block Output](https://user-images.githubusercontent.com/16048167/31070017-6f2cf0a2-a77c-11e7-9de6-110b9d0b488d.PNG)

### Elemento Block:

Um elemento de nível block ocupa todo o espaço do pai (container), como `<div>` e `<p>` no exemplo.

Note que ambos `<div>` e `<p>` começam em uma nova linha cada vez, formando uma estrutura **semelhante a um bloco**. Elementos de nível block começam em novas linhas.

Elementos **de nível block** comuns são `<div>`, `<p>`, `<article>`, `<section>`, `<figure>`, `<footer>` etc.

### Elemento Inline:

Inline, como o nome diz, "incluído como parte do texto principal e não como uma seção separada". Elementos inline ocupam o espaço conforme necessário dentro do espaço definido pelo elemento principal. Diferentemente dos elementos de nível block, eles não começam em novas linhas.

Alguns dos **elementos inline** são `<a>`, `<span>`, `<img>`, `<code>`, `<cite>`, `<button>`, `<input>` etc.

### Exemplo de Código com Saída:

![Inline Output](https://user-images.githubusercontent.com/16048167/31069389-e1e3fc10-a779-11e7-86d2-6685e0061f52.png)

**_Nota_**: Elementos de nível block podem conter outros elementos de nível block ou elementos inline. Elementos inline **não podem** conter elementos de nível block.

### Mudanças no HTML5

Embora a compreensão dos elementos block e inline ainda seja relevante, você deve estar ciente de que esses termos foram definidos em versões anteriores da especificação HTML.

No HTML5, um conjunto mais complexo de "categorias de conteúdo" substitui os elementos de nível block e inline. Elementos de nível block são amplamente colocados na categoria "conteúdo de fluxo" no HTML5, enquanto elementos inline correspondem à categoria "conteúdo de frase".

Para mais informações sobre as novas categorias de conteúdo no HTML5, incluindo conteúdo de fluxo e conteúdo de frase, consulte a [página de categorias de conteúdo na Mozilla Developer Network.][1]

Leia mais sobre HTML [aqui][2].

[1]: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories
[2]: https://guide.freecodecamp.org/html

