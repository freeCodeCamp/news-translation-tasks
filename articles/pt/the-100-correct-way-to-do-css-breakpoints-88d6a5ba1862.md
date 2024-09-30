---
title: A maneira 100% correta de fazer breakpoints CSS
date: 2024-09-30T11:57:09.697Z
authorURL: ""
originalURL: https://www.freecodecamp.org/news/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862/
posteditor: ""
proofreader: ""
---

Por David Gilbertson

<!-- more -->

Pelos próximos minutos, quero que você esqueça o CSS. Esqueça o desenvolvimento web. Esqueça as interfaces digitais de usuário.

E à medida que você esquece essas coisas, quero que permita sua mente vagar. Voltar no tempo. De volta à sua juventude. De volta ao seu primeiro dia de escola.

Era um tempo mais simples, quando tudo o que você precisava se preocupar era desenhar formas e manter sua incontinência sob controle.

![Imagem](https://cdn-media-1.freecodecamp.org/images/1*XoDgRc5GXaxo7j47ClsIgw.png)

Dê uma olhada nos pontos acima. Perceba como alguns deles estão agrupados e outros estão espalhados? O que eu quero que você faça é dividi-los em cinco grupos para mim, da maneira que achar melhor.

Vá em frente. Após verificar que ninguém está olhando, desenhe um círculo ao redor de cada um dos cinco grupos com seu dedo infantil.

Você provavelmente chegou a algo semelhante ao abaixo, certo? (E seja o que for que você faça, não me diga que rolou a página sem fazer o exercício. Eu vou dar um facepalm.)

![Imagem](https://cdn-media-1.freecodecamp.org/images/1*cZcTR2tVMzYg1U1h3cqdNg.png)

Claro, aqueles dois pontos à direita poderiam ir para qualquer um dos lados. Se você os agrupou juntos, tudo bem, eu acho. Dizem que não há resposta errada, mas eu nunca estive errado, então nunca estive do lado receptor desse ditado específico.

Antes de continuar, você desenhou algo assim?

![Imagem](https://cdn-media-1.freecodecamp.org/images/1*RZryP0xAyOy1_WRpBdPIog.png)

Provavelmente não. Certo?

Mas é basicamente isso que você estaria fazendo se definisse seus breakpoints em posições correspondentes à largura exata dos dispositivos populares (320px, 768px, 1024px).

![Imagem](https://cdn-media-1.freecodecamp.org/images/1*pwC0py16i-sQr1agaP26QQ.png)

Já ouviu ou disse algo do tipo?

> “O breakpoint médio vai _até_ 768px, ou inclui 768? Entendi... e isso é paisagem do iPad, ou é 'grande'? Ah, grande é 768px _e acima_. Entendi. E pequeno é 320px? O que é essa faixa de 0 a 319px? Um breakpoint _para formigas_?”

Eu poderia proceder para mostrar os breakpoints corretos e deixar por isso mesmo. Mas acho muito curioso que o método acima (“agrupamento bobo”) seja tão disseminado.

Por que isso acontece?

Acho que a resposta para esse problema, como tantos outros problemas, se resume a terminologia desalinhada. Afinal, _técnicas de tortura em Guantanamo Bay_ parecem super radicais se você não souber o que são essas coisas. (Oh [quem dera][1] essa piada fosse minha.)

Acho que confundimos “limites” e “faixas” em nossas discussões e implementações de breakpoints.

Me diga, se você faz breakpoints no Sass, você tem uma variável chamada `$large` que é, digamos, 768px?

É o limite inferior da faixa que você chama de grande, ou o limite superior? Se for o inferior, então você não deve ter `$small` porque isso deveria ser `0`, certo?

E se for o limite superior, então como você definiria um breakpoint `$large-and-up`? Isso deve ser uma consulta de mídia com um `min-width` de `$medium`, certo?

E se você estiver se referindo apenas a um limite quando diz grande, então teremos confusão mais tarde porque uma consulta de mídia é sempre uma _faixa_.

Essa situação é uma bagunça e estamos perdendo tempo pensando nisso. Então, tenho três sugestões:

1.  Obtenha seus _breakpoints_ corretamente
2.  Nomeie suas _faixas_ sensatamente
3.  Seja declarativo

### Dica #1: Obtenha seus breakpoints corretamente

Então, quais são os _breakpoints_ corretos?

Seu eu de jardim de infância já desenhou os círculos. Eu apenas os transformarei em retângulos para você.

![Imagem](https://cdn-media-1.freecodecamp.org/images/1*-ldpo5wcYVnuyRFbO24WPQ.png)

600px, 900px, 1200px e 1800px se você planeja dar algo especial para as pessoas com monitores gigantes. Em uma nota lateral, se você está encomendando um monitor gigante online, certifique-se de especificar que é para um computador. Você não vai querer [receber um lagarto gigante pelo correio][2].

Aqueles pontos com os quais seu eu jovem se divertiu representam na verdade os 14 tamanhos de tela mais comuns:

![Imagem](https://cdn-media-1.freecodecamp.org/images/1*199KbL2oM2P5d4pFMBXYxQ.png) _\[crédito da imagem\](http://gs.statcounter.com/#desktop+mobile+tablet-resolution-ww-monthly-201608-201610-bar" rel="noopener" target="_blank" title=")_

Então podemos fazer uma imagem bonita que permita o fácil fluxo de palavras entre as pessoas vestidas como empresários, designers, desenvolvedores e testadores.

![Imagem](https://cdn-media-1.freecodecamp.org/images/1*7YeOvzoYgUEDJdfQy2ERXg.png) _Estou arrependido de minha escolha de laranja e verde, mas não vou refazer todas essas imagens agora._

### Dica #2: Nomeie suas faixas sensatamente

Claro, você poderia nomear seus breakpoints de [papa-urso e bebê-urso][3] se quiser. Mas se eu for me sentar com um designer e discutir como o site deve parecer em dispositivos diferentes, quero que seja o mais rápido possível. Se nomear um tamanho de _tablet em retrato_ facilita isso, então estou vendia. Aliás, até perdoaria você por chamar de “iPad em retrato.”

Mas o CSS do seu site tem uma vida útil de cerca de três anos (a menos que seja o Gmail). O iPad está conosco há o dobro desse tempo e ainda não foi destronado. E sabemos que a Apple não faz mais novos produtos, eles apenas removem coisas dos existentes (botões, buracos, etc).

Então 1024 x 768 veio para ficar, pessoal. Vamos não enterrar nossas cabeças na areia. (Fato curioso: avestruzes não vivem em cidades porque não há areia e, portanto, nenhum lugar para se esconder dos predadores.)

Conclusão: a comunicação é importante. Não se desligue propositalmente de vocabulário útil.

### Dica #3: Seja declarativo

Eu sei, eu sei, essa palavra "declarativo" de novo. Vou colocar de outra maneira: seu CSS deve definir _o que_ ele quer que aconteça, não _como_ deve acontecer. O "como" pertence escondido em algum tipo de mixin.

Como discutido anteriormente, parte da confusão em torno dos pontos de interrupção é que as variáveis que definem um _limite_ de um intervalo são usadas como o _nome_ do intervalo. `$large: 600px` simplesmente não faz sentido se `large` é um intervalo. É o mesmo que dizer `var coordinates = 4;`.

Então podemos esconder esses detalhes dentro de um mixin em vez de expô-los para serem usados no código. Ou podemos fazer melhor e não usar variáveis de todo.

No início, eu fiz o trecho abaixo como um exemplo simplificado. Mas realmente acho que cobre todos os aspectos. Para vê-lo em ação, [veja este pen][4]. Estou usando Sass porque não consigo imaginar construir um site sem ele. A lógica se aplica ao CSS ou Less da mesma forma.

```
@mixin for-phone-only {
  @media (max-width: 599px) { @content; }
}
@mixin for-tablet-portrait-up {
  @media (min-width: 600px) { @content; }
}
@mixin for-tablet-landscape-up {
  @media (min-width: 900px) { @content; }
}
@mixin for-desktop-up {
  @media (min-width: 1200px) { @content; }
}
@mixin for-big-desktop-up {
  @media (min-width: 1800px) { @content; }
}

// uso
.my-box {
  padding: 10px;

  @include for-desktop-up {
    padding: 20px;
  }
}
```

Observe que estou forçando o desenvolvedor a especificar os sufixos `-up` ou `-only`.

> A ambiguidade gera confusão.

Uma crítica óbvia pode ser que isso não lida com consultas de mídia personalizadas. Bem, boas notícias, pessoal. Se você quiser uma consulta de mídia personalizada, escreva uma consulta de mídia personalizada. (Na prática, se eu precisasse de mais complexidade do que o acima, cortaria minhas perdas e correria para o abraço amoroso do kit de ferramentas do [Susy][5].)

Outra crítica pode ser que eu tenho oito mixins aqui. Com certeza um único mixin seria a decisão mais sensata, para então passar o tamanho necessário, assim:

```
@mixin for-size($size) {
  @if $size == phone-only {
    @media (max-width: 599px) { @content; }
  } @else if $size == tablet-portrait-up {
    @media (min-width: 600px) { @content; }
  } @else if $size == tablet-landscape-up {
    @media (min-width: 900px) { @content; }
  } @else if $size == desktop-up {
    @media (min-width: 1200px) { @content; }
  } @else if $size == big-desktop-up {
    @media (min-width: 1800px) { @content; }
  }
}

// uso
.my-box {
  padding: 10px;

  @include for-size(desktop-up) {
    padding: 20px;
  }
}
```

Claro, isso funciona. Mas você não terá erros em tempo de compilação se passar um nome não suportado. E passar uma variável sass significa expor 8 variáveis só para passar para um switch em um mixin.

Sem mencionar que a sintaxe `@include for-desktop-up {...}` é muito mais bonita do que `@include for-size(desktop-up) {...}`.

Uma crítica de ambos esses trechos de código pode ser que estou digitando 900px duas vezes, e também 899px. Certamente eu deveria apenas usar variáveis e subtrair 1 quando necessário.

Se você quiser fazer isso, sinta-se à vontade, mas há duas razões pelas quais eu não faria:

1.  Estas não são coisas que mudam frequentemente. Estas também não são números que são usados em outro lugar na base de código. Nenhum problema é causado pelo fato de que eles _não são_ variáveis — a menos que você queira expor seus pontos de interrupção Sass para um script que injeta um objeto JS com essas variáveis na sua página.
2.  A sintaxe é _horrível_ quando você quer transformar números em strings com Sass. Abaixo está o preço que você paga por acreditar que repetir um número duas vezes é o pior de todos os males:

```
@mixin for-size($range) {
  $phone-upper-boundary: 600px;
  $tablet-portrait-upper-boundary: 900px;
  $tablet-landscape-upper-boundary: 1200px;
  $desktop-upper-boundary: 1800px;

  @if $range == phone-only {
    @media (max-width: #{$phone-upper-boundary - 1}) { @content; }
  } @else if $range == tablet-portrait-up {
    @media (min-width: $phone-upper-boundary) { @content; }
  } @else if $range == tablet-landscape-up {
    @media (min-width: $tablet-portrait-upper-boundary) { @content; }
  } @else if $range == desktop-up {
    @media (min-width: $tablet-landscape-upper-boundary) { @content; }
  } @else if $range == big-desktop-up {
    @media (min-width: $desktop-upper-boundary) { @content; }
  }
}

// uso
.my-box {
  padding: 10px;

  @include for-size(desktop-up) {
    padding: 20px;
  }
}
```

Ah, e já que adotei um tom de desabafo nos últimos parágrafos... Eu sinto pena do tolo que faz algo mágico como armazenar pontos de interrupção em uma lista Sass e iterar sobre eles para gerar consultas de mídia, ou algo igualmente ridículo que futuros desenvolvedores terão dificuldade em decifrar.

Finalmente, você pode estar pensando "eu não deveria estar baseando meus pontos de interrupção no conteúdo, e não nos dispositivos?". Bem, estou maravilhado que você tenha chegado até aqui e a resposta é sim... para sites com um layout único. Ou se você tiver múltiplos layouts e estiver feliz em ter um conjunto diferente de pontos de interrupção para cada layout. Ah, e também se o design do seu site não mudar com frequência, ou se você estiver feliz em atualizar seus pontos de interrupção quando seus designs forem atualizados, já que você vai querer _mantê-los_ baseados no conteúdo, certo?

Para sites complexos, a vida é muito mais fácil se você escolher alguns pontos de interrupção para usar em todo o site.

Terminamos! Mas este post não foi tão "peludo" quanto eu gostaria, deixe-me ver se consigo pensar em uma desculpa para incluir alguns...

Ah, eu sei!

### Dicas bônus para o desenvolvimento de pontos de interrupção

![Imagem](https://cdn-media-1.freecodecamp.org/images/1*ClU6ZZNLtd0ux8nqRPfhng.png) _Sim, até mesmo o Flickr tem pontos de interrupção em 768 e 1400_

1.  Se você precisar experimentar pontos de interrupção de CSS para tamanhos de tela maiores do que o monitor que você está usando, utilize o modo 'responsivo' nas Ferramentas de Desenvolvedor do Chrome e digite qualquer tamanho gigante que você quiser.
2.  A barra azul mostra consultas de mídia com 'largura máxima' (max-width), a barra laranja mostra consultas de mídia com 'largura mínima' (min-width), e a barra verde mostra consultas de mídia com tanto uma largura mínima quanto uma máxima.
3.  Clicar em uma consulta de mídia ajusta a largura da tela para aquela largura. Se você clicar em uma consulta de mídia verde mais de uma vez, ela alterna entre as larguras máxima e mínima.
4.  Clique com o botão direito em uma consulta de mídia na barra de consultas de mídia para ir à definição dessa regra no CSS.

Ei, obrigado por ler! Comente com suas melhores ideias, eu adoraria ouvi-las. E clique no pequeno coração se você acha que eu mereço, ou deixe-o vazio e oco, como será meu senso de autoestima se você não clicar.

[1]: https://www.reddit.com/r/Showerthoughts/comments/2ucx09/waterboarding_at_guantanamo_bay_sounds_super_rad/
[2]: http://metro.co.uk/2016/06/16/this-monster-lizard-at-the-door-is-absolutely-terrifying-5947737/
[3]: https://css-tricks.com/naming-media-queries/
[4]: http://codepen.io/davidgilbertson/pen/aBpJzO
[5]: http://susydocs.oddbird.net/en/latest/toolkit/#breakpoint

