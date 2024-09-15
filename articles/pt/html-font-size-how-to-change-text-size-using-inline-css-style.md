---
title: Tamanho da Fonte HTML – Como Mudar o Tamanho do Texto Usando Estilo CSS Inline
date: 2024-09-15T04:02:54.104Z
author: Kolade Chris
authorURL: https://www.freecodecamp.org/news/author/koladechris/
originalURL: https://www.freecodecamp.org/news/html-font-size-how-to-change-text-size-using-inline-css-style/
posteditor: ""
proofreader: ""
---

Em HTML, a fonte que você escolhe desempenhará um papel importante na aparência e na sensação das suas páginas da web.

<!-- more -->

Você pode escolher a cor, o peso, o tamanho da fonte, e assim por diante. E todas essas características fazem com que seus sites e aplicativos fiquem melhores e mais apresentáveis para o usuário.

Com a propriedade `font-size` no CSS, você pode mudar o quão grande ou pequeno o texto está na página web. Você pode usar essa propriedade em qualquer tipo de CSS que você estiver escrevendo – externo, interno ou inline.

Neste artigo, eu vou mostrar como mudar o tamanho do texto com a propriedade `font-size` no CSS inline.

## O que é CSS inline?

CSS inline é uma das três maneiras diferentes que você pode usar para estilizar qualquer elemento HTML.

Em vez de direcionar o elemento com um atributo de classe ou id, ou o próprio elemento como o seletor e estilizar desta maneira, você coloca todos os estilos CSS na tag de abertura.

Além disso, você precisa garantir que todas as propriedades e valores dos seus estilos estejam dentro do atributo `style`. Este atributo `style` é um dos inúmeros atributos aceitos por todas as tags HTML.

No exemplo abaixo, eu mudo a cor do fundo do texto para carmesim, a cor do texto para `#f1f1f1` (cinza-claro), e o peso da fonte para `bold` com CSS inline.

```
<p style="background-color: crimson; color: #f1f1f1; font-weight: bold">
      Olá Campistas...
</p>
```

![exemplo-de-estilização-inline](https://www.freecodecamp.org/news/content/images/2021/09/inline-styling-example.png)

A propósito, meu navegador está com zoom de 400%, por isso tudo aparece tão grande. Eu não apliquei nenhum estilo adicional para conseguir isso :)

## Como Mudar o Tamanho do Texto Usando CSS Inline

Para mudar o tamanho do seu texto com CSS inline, você precisa fazer isso com o atributo `style`. Você digita a propriedade `font-size`, e então atribui a ela um valor.

Existem valores embutidos como `large`, `larger`, `medium`, `small`, `x-large`, e assim por diante: ![propriedades-embutidas](https://www.freecodecamp.org/news/content/images/2021/09/inbuilt-properties.png)

No trecho de código abaixo, eu mudo o tamanho do texto “Olá Campistas…” para x-large, um dos valores embutidos da propriedade `font-size`.

```
<p style="font-size: x-large">Olá Campistas...</p>
```

![estilo-da-fonte-com-valor-embutido](https://www.freecodecamp.org/news/content/images/2021/09/font-style-with-inbuilt-value.png)

Você também pode definir o valor da propriedade `font-size` usando um número com qualquer unidade, como pixels (px), rem ou em.

É melhor usar valores numerados porque eles dão mais liberdade para escolher qualquer tamanho de fonte que você quiser.

No trecho de código abaixo, eu mudei o tamanho do texto para `30px` com CSS inline:

```
<p style="font-size: 30px">Olá Campistas...</p>
```

![estilo-da-fonte-com-valor-numerado](https://www.freecodecamp.org/news/content/images/2021/09/font-style-with-numbered-value.png)

## Conclusão

Neste artigo, você aprendeu como mudar o tamanho do texto com CSS inline e a propriedade `font-size`. Você também viu como pode atribuir valores à propriedade `font-size`.

Apenas um aviso: CSS inline é ótimo para estilizar, mas você não deve depender muito dele, pois dificulta a leitura do seu HTML, especialmente se você estiver trabalhando em equipe. Você não quer ser o único capaz de ler seu próprio código.

Esteja ciente de que também sobrescreve qualquer estilização definida com estilo interno ou externo. Você deve usar estilo externo ou estilo interno, pois eles separam seus códigos HTML e CSS, o que é melhor para a legibilidade.

Ao atribuir valores à propriedade `font-size`, é melhor atribuir os valores em unidades rem em vez de `px`, por exemplo. Isso porque, quando você usa `rem`, o navegador será capaz de fazer ajustes no tamanho da fonte conforme o usuário dá zoom in ou out, o que não acontece quando você usa `px`.

Obrigado por ler, e continue codando.

