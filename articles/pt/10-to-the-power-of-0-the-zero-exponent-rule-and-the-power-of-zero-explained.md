---
title: "10 elevado a 0: a Regra do Expoente Zero e o Poder do Zero Explicados"
date: 2024-09-15T13:47:17.843Z
author: Eric Leung
authorURL: https://www.freecodecamp.org/news/author/erictleung/
originalURL: https://www.freecodecamp.org/news/10-to-the-power-of-0-the-zero-exponent-rule-and-the-power-of-zero-explained/
posteditor: ""
proofreader: ""
---

Expoentes são importantes no mundo financeiro, na notação científica e nos campos da epidemiologia e saúde pública. Então, o que são eles e como funcionam?

<!-- more -->

Expoentes são escritos como (3^2) ou (10^3).

Mas o que acontece quando você eleva um número à potência (0) assim?

$$10^0 = \\text{?}$$

Este artigo vai abordar

-   os fundamentos dos expoentes,
    
-   o que eles significam, e
    
-   mostrará que (10^0) é igual a (1) usando expoentes negativos
    

Tudo o que estou assumindo é que você tem um entendimento de multiplicação e divisão.

## Expoentes são compostos de uma base e um expoente (ou potência)

Primeiro, vamos começar com as partes de um expoente.

Há duas partes em um expoente:

1.  a base
    
2.  o expoente ou potência
    

No início, tínhamos um expoente (3^2). O "3" aqui é a **base**, enquanto o "2" é **o expoente ou potência**.

Lemos isso como

> Três é elevado à potência de dois.

ou

> Três elevado a dois.

Mais geralmente, expoentes são escritos como (a^b), onde (a) e (b) podem ser qualquer par de números.

## Expoentes são multiplicação para os "preguiçosos"

Agora que entendemos um pouco como falar sobre expoentes, como descobrimos a que número ele é igual?

Usando nosso exemplo acima, podemos escrever e expandir "três elevado a dois" como

$$3^2 = 3 \\times 3 = 9$$

O número mais à esquerda no expoente é o número que estamos multiplicando repetidamente. É por isso que você vê vários 3's. O número mais à direita no expoente é o número de multiplicações que fazemos. Então, em nosso exemplo, o número 3 (a base) é multiplicado duas vezes (o expoente).

Alguns outros exemplos de expoentes são:

$$10^3 = 10 \\times 10 \\times 10 = 1000$$

$$2^{10} = 2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2 = 1024$$

Mais geralmente, podemos escrever esses expoentes como

$$\\textcolor{orange}{b}^\\textcolor{blue}{n} = \\underbrace{\\textcolor{orange}{b} \\times \\dots \\times \\textcolor{orange}{b}}\_{\\textcolor{blue}{n} \\textrm{ vezes}}$$

onde, o (\\textcolor{orange}{\\text{letra `b'' é a base}}\) que estamos multiplicando repetidamente e a (\\textcolor{blue}{\\text{letra `n'' é a potência}}) ou (\\textcolor{blue}{\\text{expoente}}), que é o número de vezes que estamos multiplicando a base por ela mesma.

Para os exemplos acima, os valores dos expoentes são relativamente pequenos. Mas você pode imaginar que se as potências forem muito grandes, torna-se redundante continuar escrevendo os números repetidamente usando sinais de multiplicação.

**Em suma, os expoentes ajudam a tornar a escrita dessas longas multiplicações mais eficiente.**

## Números elevados a zero são iguais a um

Os exemplos anteriores mostram potências maiores que um, mas o que acontece quando é zero?

A resposta rápida é que qualquer número, (b), elevado a zero é igual a um.

$$b^0 = 1$$

Com base em nossas definições anteriores, só precisamos de zero do valor base. Aqui, vamos ter nosso número base como 10.

$$10^0 = ? = 1$$

Mas o que significa um "zero" número de números base? Por que isso acontece?

**Podemos descobrir isso dividindo várias vezes para diminuir o valor da potência até chegarmos a zero.**

Vamos começar com

$$10^3 = 10 \\times 10 \\times 10 = 1000$$

Para diminuir as potências, precisamos entender brevemente os conceitos de

-   combinando expoentes
    
-   potências de um
    

Em nossa busca para diminuir o expoente de (10^3) ("dez à terceira potência") para (10^0) ("dez à potência de zero"), continuaremos fazendo o contrário de multiplicar, que é dividir.

$$\\frac{10^3}{10} = \\frac{10 \\times 10 \\times 10}{10} = \\frac{1000}{10} = 100$$

As partes mais à direita desta equação provavelmente fazem sentido. Mas como escrevemos expoentes quando temos (10^3) dividido por (10)?

### Como funcionam as potências de um

Primeiro, qualquer (\\textcolor{orange}{\\text{expoentes com potências de um}}) são iguais apenas ao (\\textcolor{blue}{\\text{o número base}}).

$$\\textcolor{orange}{b^1} = \\textcolor{blue}{b}$$

Há somente um valor sendo "multiplicado", então obtemos o valor em si.

Precisamos dessa definição de "potência de um" para que possamos reescrever a fração com expoentes.

$$\\frac{10^3}{10} = \\frac{10^3}{10^1}$$

### Como diminuir expoentes para zero

Como um lembrete, uma maneira de descobrir como (10^0) é igual a 1 é continuar dividindo por 10 até chegarmos a um expoente de zero.

Sabemos pelo lado direito da equação acima que devemos obter 100 de (\\frac{10^3}{10^1}).

$$\\frac{10^3}{10} = \\frac{10^3}{10^1} = \\frac{10 \\times 10 \\times 10}{10^1}$$

Antes de terminarmos de dividir por um 10, podemos multiplicar o topo e o fundo por 1 como marcadores ao cancelar números.

$$\\frac{10 \\times 10 \\times 10}{10^1} = \\frac{10 \\times 10 \\times 10 \\times 1}{10^1 \\times 1} = \\frac{10 \\times 10 \\times \\cancel{10} \\times 1}{\\cancel{10^1} \\times 1} = \\frac{10 \\times 10 \\times 1}{1}$$

$$\\frac{10 \\times 10 \\times 1}{1} = \\frac{10 \\times 10}{1} = \\frac{10^2}{1} = \\frac{100}{1}$$

Podemos dividir por 10 mais duas vezes para finalmente chegar a (10^0).

$$\\frac{10^2 \\times 1}{10 \\times 10 \\times 1} = \\frac{\\cancel{10} \\times \\cancel{10} \\times 1}{\\cancel{10} \\times \\cancel{10} \\times 1} = \\frac{10^0 \\times 1}{1} = \\frac{1}{1} = 1$$

Porque dividimos por dois 10's quando tínhamos apenas dois 10's no topo da fração, temos zero dezenas no topo. Ter zero dezenas basicamente significa que obtemos (10^0).

### Como funcionam os expoentes negativos

Agora, o (10^0) meio que surge do nada, então vamos explorar isso um pouco mais usando "expoentes negativos".

Mais geralmente, essa divisão repetitiva pelo mesmo base é o mesmo que multiplicar por "expoentes negativos".

Um expoente negativo é uma forma de reescrever a divisão.

$$\\frac{1}{\\textcolor{purple}{b^n}}= \\textcolor{green}{b^{-n}}$$

Um (\\textcolor{green}{\\text{expoente negativo}}) pode ser reescrito como uma fração com o denominador (ou a parte inferior de uma fração) com o (\\textcolor{purple}{\\text{mesmo expoente, mas com uma potência positiva}}) (o lado esquerdo desta equação).

Agora, usando expoentes negativos, podemos mostrar a divisão anterior de outra forma.

$$\\frac{10^2 \\times 1}{10 \\times 10 \\times 1} = \\frac{10^2}{10^2} = 10^2 \\times \\frac{1}{10^2} = 10^2 \\times 10^{-2}$$

**Nota**, uma regra dos expoentes é que quando você multiplica expoentes com o mesmo número base (lembre-se, nosso número base aqui é 10), você pode somar os expoentes.

$$10^2 \\times 10^{-2} = 10^{2 + (-2)} = 10^{2 - 2} = 10^{0}$$

### Juntando tudo

Sabendo disso, podemos combinar cada uma dessas equações acima para resumir nosso resultado.

$$\\textcolor{purple}{\\frac{10^2}{10^2}} = 10^2 \\times 10^{-2} = 10^{2 + (-2)} = 10^{2 - 2} = \\textcolor{blue}{10^{0}} \\textcolor{orange}{= 1}$$

Sabemos que (\\textcolor{purple}{\\text{dividir um número por ele mesmo}}) vai (\\textcolor{orange}{\\text{ser igual a um}}). E mostramos que (\\textcolor{purple}{\\text{dividir um número por ele mesmo}}) também é igual a (\\textcolor{blue}{\\text{dez elevado a zero}}). A matemática diz que as coisas que são iguais à mesma coisa também são iguais entre si.

Assim, (\\textcolor{blue}{\\text{dez elevado a zero}}) é (\\textcolor{orange}{\\text{igual a um}}). Este exercício acima se generaliza para qualquer número base, **então qualquer número elevado a zero é igual a um.**

## Em resumo

Expoentes são formas convenientes de fazer multiplicação repetitiva.

Geralmente, os expoentes seguem este padrão abaixo, com algum (\\textcolor{orange}{\\text{número base}}) sendo multiplicado repetidamente (\\textcolor{blue}{\\text{``n'' número de vezes}}).

$$\\textcolor{orange}{b}^\\textcolor{blue}{n} = \\underbrace{\\textcolor{orange}{b} \\times \\dots \\times \\textcolor{orange}{b}}\_{\\textcolor{blue}{n} \\textrm{ vezes}}$$

Usando expoentes negativos, podemos pegar o que sabemos de multiplicação e divisão (como para a fração 10 sobre 10,(\\frac{10}{10})) para mostrar que (b^0) é igual a um para qualquer número (b) (como (10^0 = 1)).

Siga-me no [Twitter][1] e confira meu [blog pessoal][2] onde compartilho outros insights e recursos úteis para programação, estatística e aprendizado de máquina.

Obrigado por ler!

[1]: https://twitter.com/erictleung
[2]: https://erictleung.com

