---
title: Desenvolvimento Web Backend com Python - Curso Completo
date: 2024-09-15T02:21:50.524Z
author: Beau Carnes
authorURL: https://www.freecodecamp.org/news/author/beaucarnes/
originalURL: https://www.freecodecamp.org/news/backend-web-development-with-python-full-course/
posteditor: ""
proofreader: ""
---

O backend de um site pode ser escrito em muitas linguagens de programação diferentes. Está se tornando cada vez mais comum usar Python para o backend de um site.

<!-- more -->

Acabamos de publicar um curso completo de desenvolvimento web backend com Python no canal do YouTube da freeCodeCamp.org.

Este curso abrangente é para iniciantes absolutos e ensinará desenvolvimento web backend com Python. Você aprenderá o básico de Python e Django, e criará alguns projetos ao longo do caminho.

Tomi Tokko criou este curso. Tomi criou muitos cursos populares tanto em seu próprio canal quanto no canal da freeCodeCamp.

Aqui está uma lista completa do que é abordado neste curso:

-   Introdução ao Python
-   Instalação do Python
-   Hello World em Python
-   Variáveis em Python
-   Strings em Python
-   Números em Python
-   Obtendo a Entrada do Usuário
-   Exercício de Substituição de Palavras
-   Lista em Python
-   Métodos de Lista
-   Tuplas em Python
-   Funções em Python
-   A Palavra-chave Return
-   Declarações IF em Python
-   Construindo um Programa Verificador de Números Pares
-   Dicionários em Python
-   Loops While em Python
-   Loops For em Python
-   Listas 2D
-   Comentários em Python
-   Construindo uma Calculadora Básica
-   Try Except em Python
-   Lendo Arquivos
-   Escrevendo Arquivos
-   Classes e Objetos em Python
-   Herança em Python
-   O Shell do Python
-   Construindo um Sistema Simples de Login e Cadastro
-   Módulos e PIP em Python
-   Introdução ao Django
-   Instalação do Django
-   Roteamento de URL e Apps Django
-   Linguagem de Template Django
-   Enviando Dados para o Arquivo Template
-   Construindo um Contador de Palavras em Django
-   GET vs POST em Django
-   Arquivos Estáticos em Django
-   Introdução a Modelos Django
-   Painel Admin do Django e Manipulação de Banco de Dados
-   Cadastro de Usuário em Django
-   Login e Logout de Usuário em Django
-   Roteamento Dinâmico de URL em Django
-   Configuração do PostgreSQL
-   Construindo um Blog com Django - Parte 1
-   Construindo um Blog com Django - Parte 2
-   Construindo um Aplicativo de Clima com Django - Parte 1
-   Construindo um Aplicativo de Clima com Django - Parte 2
-   Construindo um Aplicativo de Chat em Tempo Real com Django - Parte 1
-   Construindo um Aplicativo de Chat em Tempo Real com Django - Parte 2
-   Curso Rápido de Django Rest Framework

Assista ao curso completo abaixo ou [no canal do YouTube da freeCodeCamp.org][1] (duração de 10 horas).

<iframe width="560" height="315" src="https://www.youtube.com/embed/jBzwzrDvZ18" style="aspect-ratio: 16 / 9; width: 100%; height: auto;" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" loading="lazy"></iframe>

## Transcrição

(autogerada)

Este curso abrangente é para iniciantes absolutos e ensinará desenvolvimento web backend com Python.

Você aprenderá o básico de Python e Django e criará alguns projetos ao longo do caminho.

Tommy criou muitos cursos populares, tanto em seu próprio canal quanto no canal da Free Code Camp.

Olá pessoal, bem-vindos a este curso de desenvolvimento web backend com Python.

Neste curso, vamos aprender tudo o que você precisa saber para começar sua jornada de desenvolvimento web com Python.

Vamos dar uma olhada rápida na agenda deste vídeo.

Primeiro, começaremos aprendendo Python, que é uma linguagem de programação que vamos usar neste vídeo.

No tutorial de Python, haverá muitos exercícios que vamos fazer juntos apenas para nos familiarizarmos com a linguagem de programação Python.

Uma vez que estivermos familiarizados com Python, vamos direto para Django.

Agora, Django é um framework Python, que é utilizado para construir aplicações web do lado do servidor.

No tutorial de Django, aprenderemos todos os conceitos que você precisa saber ao começar com Django.

Depois disso, vamos construir três projetos diferentes usando Django.

Os projetos que vamos fazer são uma aplicação de blog, um programa detector de clima e uma aplicação de chat em tempo real usando Django.

Vamos construir esses projetos para que você se familiarize com a construção de seus próprios projetos em Django.

Depois disso, você será apresentado às APIs com Django, aprenderá como criar APIs REST em Django usando o Django Rest Framework.

E eu espero que, após este vídeo, você se sinta confortável para construir suas próprias aplicações web do lado do servidor usando Django.

Agora, eu tenho alguns recursos gratuitos como um roteiro de Django, uma folha de referência de estrutura de dados Python, uma folha de referência de Django, entre muitos outros recursos gratuitos que compilei em um PDF.

E você pode baixar o PDF gratuitamente usando o link na descrição abaixo.

E se você gostar de mais tutoriais como este, você também pode conferir meu próprio canal no Youtube chamado COVID onde ensino mais sobre Python e desenvolvimento web em geral.

Agora que você está pronto, vamos mergulhar direto neste vídeo.

[1]: https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ


Então, esta é uma lista de tudo que vamos falar neste vídeo.

Deixe-me dar uma breve introdução ao Python.

O Python é uma das linguagens de programação que mais cresce no mundo.

Com o Python, você pode entrar em vários campos, como aprendizado de máquina e IA, desenvolvimento web, entre outros.

Portanto, aprender Python, que é fácil de aprender e possui boas vantagens, é uma excelente decisão para sua jornada de programação.

Então, sem perder tempo, vamos direto ao tutorial.

Aqui, estou apenas no meu navegador.

Vamos baixar o Python no nosso laptop.

Para fazer isso, vou apenas procurar por download do Python para Windows, já que estou em um Windows, e vou clicar no primeiro link.

E então, aqui, vejo que o download do Python 3.9.1 é a versão mais recente.

Então, vamos apenas clicar nele.

Você pode ver que ele foi baixado automaticamente.

Já tenho o Python baixado.

Agora, o que eu preciso fazer é instalá-lo, vou entrar onde o salvei.

E então vou executá-lo.

Certifique-se de que, ao instalar o Python, você deve marcar para adicionar Python ao PATH.

Caso contrário, você está apenas tornando as coisas mais complexas.

Vamos clicar em instalar agora.

Sim.

E isso vai instalar o Python na nossa máquina.

Deve levar alguns minutos para instalar.

E eu volto quando a instalação terminar.

Agora, a configuração foi bem-sucedida.

Como você pode ver, a instalação foi concluída.

Vou apenas clicar em Fechar.

Para confirmar que o Python foi instalado, vou abrir o prompt de comando.

Aqui no meu prompt de comando, vou digitar Python.

Uma vez que eu digito, ele deve abrir essa janela.

Você pode não entender o que tudo isso significa agora.

Mas isso é apenas para verificar se o Python foi realmente instalado.

Agora que sabemos que o Python está instalado, vamos instalar nosso editor de código.

O Python é a linguagem de programação.

Mas vamos codificar, vamos programar tudo, ou seja, todo o Python que vamos fazer será em um editor de código.

Existem vários editores de código por aí.

Temos o Visual Studio Code, o PyCharm, o Sublime Text, o Atom.

Existem inúmeros editores, mas para este tutorial, usaremos o Visual Studio Code.

Vamos fazer o download.

Vou fechar meu prompt de comando agora.

Se você não sabe como abrir o prompt de comando, basta procurar na barra de pesquisa do Windows.

Agora, vamos voltar ao Google.

E então podemos pesquisar por, digamos, download do Visual Studio Code.

Vou clicar no primeiro link.

Como estou no Windows, vou baixar a versão para Windows.

Se você estiver no Ubuntu ou Linux, ou Mac, baixe a versão para seu sistema operacional.

Agora, você pode ver que está baixando.

Já tenho ele baixado no meu PC, vou cancelar o download.

Deixe-me mostrar o processo de instalação.

Já o baixei, clicamos para executar.

Aqui ele me diz que já tenho o Visual Studio Code instalado no meu computador.

Vou apenas clicar em Cancelar.

Mas para você, como iniciante, você quer instalar como um novo software.

Quando já temos isso instalado, abrimos o Visual Studio Code, e isto é o que ele deve parecer quando você o abre pela primeira vez.

Agora, temos tudo configurado.

Baixamos o Python e o instalamos.

E então baixamos o Visual Studio Code e o instalamos.

Agora podemos começar a programar.

Agora que temos tudo armazenado, queremos criar um novo arquivo onde vamos programar todo o nosso código em Python.

No Visual Studio, vamos na barra de ferramentas e clicamos em novo arquivo.

Ao clicar em novo arquivo, você verá que tem o nome não salvo, mas eu quero salvar pressionando Ctrl S.

Vou salvar.

Mas primeiro, deixe-me dizer que todos os arquivos devem ser salvos com a extensão .py.

O nome do arquivo é up.

Mas na parte inferior, a extensão do arquivo será .py.

Sempre que trabalharmos com Python, ao criar um novo arquivo, ele deve ter a extensão .py, isso informará que estamos usando um arquivo Python.

Depois de salvar, ele será atualizado aqui.

E como você pode ver, o Visual Studio Code detecta automaticamente o logotipo do Python, isso mostra como salvar e criar um novo arquivo Python.

É assim que tudo parece no Visual Studio Code.

Na barra esquerda, temos várias opções, se abrirmos uma pasta, é aqui que veremos todos os arquivos e pastas.

Temos a pesquisa, o GitHub.

Não precisamos nos preocupar com isso agora.

Mas é assim que o Visual Studio Code se parece.

Já que temos tudo configurado e sabemos como criar um novo arquivo, vamos falar agora sobre a função print.

Agora vamos dizer que queremos apenas imprimir um texto na tela.

Como se quiséssemos mostrar a um usuário, como um Hello World ou bem-vindo, vamos usar a função print, que vai trazer um texto básico para a tela.

Primeiro, para fazer isso, vamos dizer print, e então vamos abrir parênteses.

E então podemos usar aspas simples.

Ou também podemos usar aspas duplas.

Não há problema aqui em Python.

Mas podemos ir com aspas simples.

Então você pode escolher uma e seguir com ela.

Então, nesses códigos, vou escrever meu texto como eu digo, Hello World.

Agora como você pode ver, eu imprimi hello world.

E devo garantir que eu salvei este arquivo.

E então, para eu executar este arquivo Python para ver a saída do meu código, eu tenho que vir aqui no canto direito e clicar em Run.

Agora, uma vez que eu clico em Run, você vê que ele abre um novo terminal automaticamente.

E nosso código será executado neste terminal.

Então, se apenas esperarmos um segundo, veremos a saída deste bom.

Você pode ver bem aqui que temos um pequeno word automaticamente imprime hello world.

Se eu digo, hello world, bem-vindo.

E eu executo, você vê que ele muda e diz hello world bem-vindo.

Então é assim que se executa um arquivo Python.

Agora, vamos falar sobre mais alguns recursos desta função print.

Agora, vamos dizer que queremos imprimir em uma nova linha.

Hello world, eu queria que bem-vindo estivesse em outra linha, podemos facilmente fazer isso, podemos apenas remover estes.

E então em uma nova linha apenas vamos imprimir bem-vindo, exatamente a mesma coisa.

Agora, uma vez que eu executo, você pode ver que ele diz um logo abaixo, e diz bem-vindo, então é assim que se imprime em uma nova linha. Podemos também fazer muitas coisas, vamos dizer que queremos adicionar outro valor a este hello world.

Como, vamos imprimir uma frase, vamos dizer meu nome é Tony.

E então eu quero dizer a minha idade é, então eu posso adicionar uma vírgula aqui e dizer 100.

Então isso automaticamente dirá ao Python que isto é um número, e não mais uma string, apenas um caractere normal.

Então agora, quando eu executar, você verá que ele diz meu nome é Tony, meu nome é Andre, sem erros.

E automaticamente você vê que deixa um espaço aqui, bem aqui, não deixamos um espaço, mas automaticamente, uma vez que colocamos este número aqui, ele deixa um espaço para esclarecer isso. Se eu não deixar nenhum espaço, e eu executar, você verá que os espaços permanecem.

Então isso é apenas um recurso inteligente do Python.

Então acho que isso é tudo para a função print.

Agora vamos falar sobre variáveis em Python.

Como você pode ver, eu tenho três funções de impressão.

A primeira diz Tim é um menino.

A segunda diz Tim tem 18 anos.

E a terceira diz Tim é da Turquia.

Então, como você pode ver, nas três funções de impressão, estou repetindo Tim três vezes.

Agora podemos usar variáveis em vez de repetir um texto particular.

Agora variáveis são basicamente salvar um dado na memória do Python.

E então podemos obter esses dados de volta referenciando seu nome.

Então vamos ver isso em ação.

Vamos dizer que acima do código, eu tenho uma variável chamada name.

Então este name é o nome da variável.

E eu digo igual a, eu coloco aspas simples, e o nome é Tim.

Então name é o nome da variável.

E Tim é o valor atribuído a este name.

Então assim, salvamos esta variável aqui.

Então podemos imprimir isso, também dizemos print.

Sempre que estamos imprimindo uma variável, não colocamos aspas como fazemos quando estamos imprimindo uma string normal.

Então podemos remover as aspas e apenas digitar o nome da variável que é name.

Então agora, quando eu executar isso, você verá que imprime tudo isso.

E na quarta linha, imprime Tim.

Não imprimiu name.

Agora, isso é o que variáveis são basicamente, apenas salvar um dado particular e então referenciá-lo através do nome da variável.

Então agora, em vez de dizer o mesmo três vezes, podemos apenas substituir este Tim por name.

E para fazer isso, aqui você vê que imprimimos apenas a variável.

E não tínhamos aspas.

Bem aqui, estamos imprimindo uma string com aspas.

E também queremos imprimir a variável com isso.

Então isso é chamado concatenação.

Vamos juntar a variável e a string normal.

Para fazer isso.

Vamos remover Tim.

E vamos dizer name, que é o nome da variável mais o texto restante.

Agora, com o name mais é um menino, vai nos imprimir Tim é um menino.

Então podemos fazer o mesmo bem aqui.

Vamos simplesmente remover Tim e dizer name mais é 18 anos.

Fazemos o mesmo para a terceira linha, diremos name.

Mais é da Turquia.

Agora, uma vez que imprimirmos isso, você verá que diz Tim é um menino Tim tem 18 anos.

Tim é da Turquia.

Bem aqui dissemos name.

Então é sobre isso que variáveis são.

Então vamos apenas digitar CLS para fechar isso.

Mas variáveis são mais amplas do que apenas isso.

Então há algo que chamamos de tipos de dados.

Agora, como você pode ver, isso é apenas Tim Tim são letras é um caractere.

E isso é uma string.

Então strings são basicamente apenas caracteres.

Agora, string é um tipo de dado.

Temos se isso é um número como 23, não é mais uma string, é agora um inteiro.

Temos Boolean que é para valores verdadeiros ou falsos e oh isso antes desta aula, vamos ser particulares sobre talvez dois ou três.

```markdown
Deixe-me especificar uma nova variável e nomeá-la idade.

Agora, essa variável, quero que seja a idade.

Vamos dar-lhe uma equipe.

Então, sempre que estamos usando um inteiro ou número, não adicionamos código quando estamos atribuindo a variável.

Veja aqui, adicionamos códigos, e dentro do nosso código colocamos equipe, mas para ser um inteiro, verá que não adicionamos códigos.

Se eu pairar sobre isso, verá que o dado 18 é `int`, que significa inteiro, e então equipe aqui é uma string.

Então agora podemos apenas juntar essas dizendo `+ idade`.

Agora, uma vez que imprimimos isso, ainda vai dar certo.

Então, pode ver agora que isso pode apenas concatenar texto, não inteiro.

Então agora há um problema com o Python.

Sempre que quero concatenar uma string com uma variável, não funciona, quero dizer, um inteiro com uma string, não funciona.

Então podemos apenas resolver isso, em vez de usar isso, podemos dizer `, idade`.

Uma vez que pressionamos isso, verá que diz que equipe é da Turquia.

Então, deixe-me fechar isso.

Aqui, podemos ver que toda vez que estamos concatenando, apenas `+` é possível.

Mas quando estamos lidando com um inteiro, não podemos usar este `+`, temos que usar `,`.

E também podemos usar `,` ao concatenar com uma string também.

Então estas são as duas coisas, podemos usar o sinal de adição somente com string.

E então podemos usar `,` com string e inteiro.

Então, se eu executar, vai funcionar. A equipe é uma equipe que basicamente concatena e junta strings com variáveis.

Agora vamos falar mais sobre strings.

Então strings são apenas texto simples.

Então, se eu imprimir algo como `print`, tudo bem, isso é uma string, string ou apenas texto simples.

Agora vamos falar mais sobre os recursos das strings, diferentes coisas que você pode fazer com strings.

Agora digamos que eu coloque um ponto final.

Oh, você sabe, uma vez que eu rodar isso, verá que ele roda na mesma linha, que é como, "Como está?", eu quero que isso esteja em outra linha sem ser colocado em outra função de impressão, eu posso simplesmente usar um `\n`.

Isso é um `\n`.

Agora, isso vai automaticamente levar isso para uma nova linha, é como uma quebra, vai adicionar uma quebra entre isso e isso.

Então, uma vez que eu rodar isso, verá que diz "Como está?", eu, "você", "terá" porque isso está aqui, se eu tirar isso e rodar novamente, verá que temos "Como está?".

Então, também imprimimos strings como variáveis.

Então, digamos que temos algo chamado nome, e o nome é Tim.

Então isso é uma string, é uma variável, mas um tipo de variável string.

E então na função de impressão, também imprimimos essa variável de string apenas dizendo `print nome`, sem aspas.

Uma vez que você imprime, verá que temos Tim impresso aqui. Feche isso.

Então, se subirmos aqui, também podemos imprimir, digamos que queremos adicionar aspas duplas ou aspas simples.

Agora você sabe que podemos adicionar aspas simples no meio do nosso texto, mas Python vai ver isso como querendo fechar este texto.

Então, primeiro adicionamos as aspas duplas e podemos apenas facilmente adicionar a barra invertida, então as aspas, agora uma vez que tenha uma barra invertida, isso é bom, essas aspas vão imprimir. 

Quando eu rodo, verá que temos "Como está?" com essas aspas.

Então, se você quiser criar caracteres especiais, usamos a barra invertida, ou você pode apenas trazer a barra invertida sozinha, isso vai funcionar.

Então, pode ver que a barra invertida está lá.

Então podemos imprimir.

Usá-la.

Barra invertida para quebrar para fazer isso em uma nova linha, porque há uma barra invertida para adicionar uma citação.

E então podemos trazer a barra invertida assim.

Agora deixe-me falar com você sobre funções especiais em strings.

Então funções em Python são apenas um bloco de código, que faz uma tarefa particular.

Então, em strings, strings têm muitas funções, que fazem diferentes coisas.

Digamos que queremos converter todos os caracteres disso para maiúsculas, podemos usar uma função de string, queremos verificar se é minúsculas, ou uma vez que obtemos a primeira letra, ou a segunda, essas são funções em Python.

Então agora, podemos só dizer que queremos obter apenas a primeira letra.

Agora, uma vez que obtenhamos a primeira letra, podemos apenas facilmente fazer algo como `print nome[colchetes 0]`.

Agora 0 representa a primeira letra, se eu disser 1, representa a segunda letra, se eu disser 2 representa a terceira letra.

Então, em Python, ou em programação em geral, os números começam a contar de 0.

Então, uma vez que eu coloco 0 e então executo, aqui embaixo, verá que imprime apenas o "T".

Agora, deixe-me rodar 2, que é o terceiro, verá que imprime apenas "M".

E se eu rodar algo que não está lá, tipo 0, 1, 2, tentar rodar 3 vai dar um erro, erro de índice.

Então, pode ver que o índice da string está fora do intervalo, o que significa que não está presente.

Agora, também fazemos várias coisas.

Digamos que queremos converter tudo para maiúsculas, podemos apenas fazer `nome.upper()`. 

Agora, uma vez que rodamos isso, diz que não há atributo "por caso", então às vezes podemos encontrar erros, apenas mudamos.

Então acho que é porque não deveria ser maiúsculas.

Então `nome.upper()` é a função que muda para maiúsculas.

Então, uma vez que eu rodo, verá que agora temos Tim em maiúsculas.

Também podemos fazer a mesma coisa com minúsculas, apenas dizemos `nome.lower()`, e então rodamos, agora pode ver que tudo foi mudado para minúsculas.
```

```markdown
Então para fazermos isso, vamos apenas dizer name.is, lower.

Então, ao executar, você vê que diz falso, então vai me dar uma resposta verdadeira ou falsa.

Se tudo estiver em letras maiúsculas, vai me dar falso, mas se estiver em letras minúsculas, vai me dar verdadeiro.

Então você pode ver que, como há uma letra maiúscula T, perguntei se está em minúsculas, e diz falso.

Mas se eu perguntar se está em maiúsculas, eu executo.

Se for falso, é justamente porque esta maiúscula e minúscula, nem tudo está em maiúscula ou minúscula.

Mas se eu mudar para minúsculas, deixe-me mudar tudo para maiúsculas, e então eu executo porque o mais legal é verdadeiro, porque tudo está em maiúsculas, e eles também juntarão diferentes funções.

Agora você pode ver se eu disser algo como is lower, e eu executar, diz falso.

Mas eu posso primeiro converter para minúsculas, então perguntar se está em minúsculas, então eu posso fazer isso, lower.

E então executar.

Você vê agora que diz verdadeiro.

O que é maiúsculo.

Então primeiro, diz que nome não é lower, o que significa convertido para minúsculas, depois verifica se está em minúsculas, o que nos dá verdadeiro.

Então, basicamente, é assim que juntar diferentes ou adicionar diferentes funções.

Juntamente, também fazemos outra coisa, por exemplo, digamos que queremos obter a quantidade de caracteres que temos nesta variável.

Para fazer isso, podemos dizer Len, então abrimos um parêntese e fechamos.

Quando executamos isso, você pode ver que nos dá três porque temos 123, se eu tiver muitos, e então eu executar, vai me dar a quantidade que temos, então é assim que obter o comprimento de uma string.

Mas vamos desfazer isso.

Mas digamos que queremos encontrar onde está um texto específico.

Então isso é i, menos queremos obter o número do índice de i, como sabemos, isso é zero e um.

Então este i é índice número um, se quisermos obter isso, vamos apenas dizer, Len, vou remover Len.

Então vou dizer name, ponto index.

E então vamos dizer i, então agora vai me dar um, porque é o número índice de i, uma vez que executamos, você vê, ele imprime um, que é o número índice.

Agora, digamos que queremos substituir um texto, digamos que temos m, queremos substituí-lo por c.

Então, podemos facilmente fazer isso.

Vamos apenas dizer que o nome é Replace, vou abrir um parêntese, e depois o texto a ser substituído, não substituirá m, vou colocar M.

E então o que queremos fazer é vírgula, e então o que queremos substituir por queremos substituir por C.

Então agora, uma vez que eu executo, você pode ver que imprimiu, vê.

Então isso é substituir este m por C, basicamente, como substituir.

Então, há também muitas funções, muitas funções de string.

Mas estes são apenas mostrados, mostrei como usá-los.

Então isso vai ser tudo para strings.

Nesta parte, vamos falar sobre números no Python.

Então, para imprimir um número no Python, é bem fácil.

Apenas digitamos print, e então vamos em frente e digitamos o número 78.

Agora, uma vez que executamos, você verá que imprime 78.

Então não precisamos adicionar nenhuma sintaxe ou coisa parecida, apenas imprimimos 78.

E dá-nos 78.

Agora também especificamos um número, a variável pode dizer, Não, o número é igual a 79.

Apenas escrevemos a letra, não precisamos adicionar isso.

E então podemos imprimir o número.

Então, uma vez que executamos, dá-nos 78 e 79.

Agora também podemos somar números.

Então deixe-me apenas remover isso.

Então, em vez de apenas imprimir 78, podemos imprimir 78 mais 22.

Agora podemos adicionar um número, podemos realizar operações aritméticas.

Uma vez que eu execute, você vê que ele me dá 100, ele automaticamente adiciona esses dois números ou inteiros juntos, e então o executa.

Eu também tento isso com um número decimal, que é 2.7.

Então uma vez que eu executo, você verá que me dá 100.9 34.

Então é assim que os números funcionam.

E vamos testá-lo também com a subtração.

Diz que nos dá 55.066.

E então podemos testá-lo com a divisão, que nos dá a resposta.

E então podemos testá-lo com a multiplicação.

Quando executamos, nos dá a resposta.

Então isso é basicamente operações aritméticas básicas com Python, podemos ir mais longe apenas o que fizemos com strings, podemos ir mais longe e usar as funções numéricas integradas.

Então digamos que eu quero mostrar o resto de uma divisão.

Então algo como 20 dividido por 6.

Agora você sabe que isso nos dará 3 resto 2.

Então nos dará 3 resto disso.

Bem, se quisermos apenas obter o resto, não queremos obter a resposta principal, podemos apenas fazer 20 percentual 6, assim que eu executar, você vê que me dá 2 que é o resto.

Isso é como obter o resto de uma divisão, também vamos converter um número para uma string.

Agora deixe-me mostrar.

Digamos que temos esta variável.

Temos uma variável chamada número igual a 55.

Você pode ver que é um número inteiro aqui.

Então eu posso especificar uma nova variável, posso nomeá-la número dois, e quero que este número seja uma string.

Então vou dizer que isso é string da variável número.

Então agora, se eu executar este número dois, você verá que é uma string, quando eu imprimir número dois, será 55.

Mas agora apenas a string 55, ainda é uma string.

Então como sabemos se é realmente uma string? Lembre-se que ao concatenar, concatenamos números, concatenamos strings.
```

Número é, vamos tentar continuar com o número principal.

Então vamos dizer adicionar número.

Vamos executá-lo, você vê, ele nos dá um erro: só pode chamar strings, não inteiros.

Mas agora que o convertemos, isso tenta calcular com não, uma vez que o executamos, você vê que nos dá o número é 55.

Então, isso mostra que ele converteu aquele inteiro ou aquele número em uma string.

Agora o Python vê isso como uma string, isso também é muito útil em muitos casos.

Então faz isso.

E então também podemos obter o valor absoluto de um número.

Então, digamos, vamos apenas cancelar isso, vamos imprimir menos cinco.

Agora, obviamente, quando imprimimos, isso deve nos dar menos cinco, como você pode ver aqui embaixo, e ele apenas fecha.

E se eu quisesse imprimir apenas cinco, independentemente do sinal, se é positivo ou negativo, eu vou adicionar abs.

Agora esta é uma função, é uma função de número, como eu expliquei anteriormente, função é apenas um bloco de código, que faz uma tarefa particular.

Agora nós podemos escrever uma função manualmente por si só.

Mas o Python tem algumas funções embutidas, que você pode usar automaticamente.

É por isso que quando usamos abs, ele automaticamente vê isso como uma função do Python.

Agora este ABS significa absoluto, é o significado completo de ABS, então vamos obter o valor absoluto deste número.

Agora, quando eu o executo, você vê que imprime apenas cinco, independentemente deste sinal negativo ao lado dele.

Então temos quatro e dois.

Então agora você sabe que quatro é obviamente maior que dois.

Então, uma vez que eu imprimo isso vai me dar quatro, isso está mostrando o número de DS.

Isso significa que quatro é igual a dois ou não, quatro é quatro para servir.

Isso significa que temos esses dois números, o Max vai obter o maior número.

Então digamos que temos outro número chamado três, uma vez que eu o executo, ele deve imprimir quatro, porque quatro é maior que todos estes por enquanto, e se eu tiver 16, uma vez que eu o executo, ele me dá 16.

Porque 16 é o número mais alto nesta gama de números, eu também posso fazer o mesmo para obter a quantidade mínima de números, eu posso dizer min, então isso vai automaticamente imprimir dois, porque é o mínimo, então uma vez que eu o executo, você vê que ele traz dois, então essa é a maneira básica de obter o máximo e o mínimo, e então ele vai ao redor no número dois.

Então podemos estimar um número.

Então você sabe, na matemática normal, se temos algo como 3.2 isso é estimado para três, mas se temos algo como 3.5 isso é estimado para quatro, também podemos fazer isso aqui no Python.

Suponha que vamos apenas arredondar, arredondar 3.2 vai nos dar três, vamos arredondar 3.5 vai nos dar quatro apenas estimativa normal, arredondando para um número.

E então também temos um, que é vamos ver bin.

Então o que este bin faz é que ele converte um número particular em uma string binária.

Agora, se você conhece números binários, é este tipo estranho de texto.

Então cada número tem suas strings binárias zero, isso obtém a string binária de um número. Basta executá-lo, e ele imprime isso.

Agora vamos executar algo como 334.

Ele imprime a string binária para 334.

Agora, essas são algumas funções básicas.

Mas há inúmeras funções para inúmeras funções numéricas.

Então todos esses, não conseguimos acessá-los, porque conseguimos acessá-los porque já estão incorporados no Python.

Mas ainda há mais que não podemos acessar.

Exceto que importamos.

Agora há algo no Python chamado importações.

Agora temos mais funções numéricas, aquela que é capaz de encontrar a raiz quadrada, aquela que pode obter a potência, várias inúmeras.

Então agora a razão pela qual não podemos acessar essas, porque não as importamos, as que acabei de mostrar, podemos usá-las sem importar.

Mas as que quero mostrar agora, precisamos importá-las da função matemática do Python antes que possamos usá-las.

Então primeiro para importar, vamos dizer from math, algo assim.

import *

Então o que isso está fazendo é dizendo da classe math, ou da função math, importar tudo o que está lá.

Agora nesta classe de matemática ou função, pode haver a que pode encontrar raízes quadradas, pode haver a que pode encontrar a potência, tudo.

Então não sabemos qual queremos ainda.

Então estamos apenas importando tudo com este asterisco.

Então agora estamos, desde que temos isso importado, podemos encontrar a raiz quadrada.

Agora, podemos apenas ver raiz quadrada de, vamos fazer algo como cem.

Agora uma vez que executamos isso, ele nos dará 10.

Como você pode ver, nos dá 10.

Hoje, esse ponto 00 K, mas agora nos dá 10.

Então isso vai ser tudo sobre trabalhar com números.

Então nesta parte, vamos obter a entrada dos usuários.

Então o que vamos fazer é dizer a um usuário para inserir um texto, e então vamos salvar esse texto em uma variável.

E então vamos dizer ao usuário o que ele inseriu.

Então vamos em frente e protocolarizar isso.

Então usar a entrada em Python é bem fácil.

Vamos apenas dizer input, então abrir e fechar parênteses.

Agora, quando abrir ou fechar parênteses, vamos perguntar ao usuário o que queremos que ele insira.

Então vamos colocar aspas duplas.

E nessa citação, vamos dizer algo como, insira seu nome.

```markdown
Então, uma vez que o usuário digitar algo como tema, ou Tommy ou john, qualquer coisa que os usuários digitarem, queremos salvar isso nesta variável chamada nome.

Então agora, essa variável chamada nome será a entrada.

Então, vamos tentar executar isso.

Você vê agora, a primeira coisa que ele diz é insira seu nome.

Deixe-me dizer Tom, quando eu clicar em enter, nada aconteceu.

O que faz como usar nossa entrada hoje, apenas feche, podemos voltar aqui e simplesmente imprimir para o usuário.

Nome.

Então, vamos executá-lo.

Qual é o nome da nossa entrada? inseguro, Tim, você vê que acabou de imprimir Tim.

Então, podemos tornar isso mais interativo perguntando o nome do usuário. 

E talvez perguntando a idade do usuário e depois dizendo ao usuário Seu nome é este e sua idade é esta.

Então precisamos ter duas variáveis.

Segunda, a idade.

Então nome é igual a entrada seu nome e depois idade será igual a entrada sua idade.

Então, o que queremos imprimir é, seu nome é e depois apenas queremos adicionar o nome e fechar isso.

E então dizer e você tem a idade, anos.

Agora, quando executamos isso, ele diz insira seu nome.

Deixe-me ver João, e tem 105 anos.

Então ele diz Seu nome é João, e você tem 105 anos.

Então, isso é basicamente como coletar dados simples do usuário.

E então usá-lo da maneira que você quiser, dizendo ao usuário, seu nome é este, sua idade é esta.

Então, este é o conceito básico.

Você também pode vinculá-lo a como eles fazem sites, como quando você cria um cadastro em um site.

E então eles salvam seu nome, seu email e tudo no banco de dados.

E mais tarde dizem Bem-vindo João ou bem-vindo, seja qual for o seu nome.

Então, apenas para vincular esse conceito é basicamente apenas obter as entradas do usuário e depois armazená-las como uma variável, neste caso como dados, e então podemos imprimi-lo de volta para o usuário.

Então é isso.

Tudo que você precisa saber sobre obter a entrada do usuário. Vamos também tornar isso mais divertido.

Agora, quando obtemos a entrada do usuário, você pode ver que a idade é vista como string, certo, a Idade é string, mas queremos que a idade seja um inteiro.

Então podemos converter essa string em um inteiro.

Para fazermos isso, vamos dizer int, abrimos o parêntese e depois fechamos o parêntese.

Assim, tudo está dentro dessa função de inteiro.

Se eu voltar aqui, você verá agora que isso foi mudado para inteiro em vez de strings normais.

Mas agora se tentarmos executar estas entradas, meu nome, eu insiro uma idade aleatória, você pode ver agora que ele nos dá este erro pode apenas concatenar strings, não inteiros.

Então, para podermos adicionar a idade, você sabe o que precisamos fazer, precisamos ou convertê-la para uma string, o que sabemos como fazer.

Ou podemos apenas usar uma vírgula.

Então, vamos apenas remover isso.

E vamos executá-lo.

Então, vamos inserir uma idade aleatória bem aqui.

nome aleatório, e idade.

Então, agora você vê que funciona.

Ele diz Seu nome é João e você tem 13 anos.

Agora é assim que basicamente obter a entrada do usuário e usá-la como quiser, e depois você pode passar essa informação de volta para o usuário.

Nesta parte, vamos fazer um exercício simples de Python.

Então, o que vamos fazer é um programa simples de substituição de palavras.

Então, o que vai acontecer é que um usuário vai digitar uma frase.

E então digamos que você queira mudar uma palavra nessa frase ou mudar algo nessa frase, então vamos permitir que o usuário faça isso.

Então, se um usuário digitar uma frase, como Eu sou um menino, e depois quiser mudar nosso menino para, digamos, um cara ou algo assim.

Então isso é o que queremos fazer.

Então vou pedir ao usuário três entradas, a primeira entrada será a frase, a segunda entrada será o que você quer mudar, e a terceira entrada será o que você quer substituir.

Então, vamos colocar isso em prática.

Agora, a primeira coisa que vamos fazer é apenas ter essas variáveis.

Então, vamos ter uma variável nomeada frase.

E eu quero que essa variável seja uma entrada.

E então eu vou dizer, insira sua frase.

Agora, deixe-me apenas imprimir a frase para o usuário.

Vamos executá-la.

Agora digamos a frase Eu sou um menino.

E ele simplesmente imprime essa frase.

Vamos voltar aqui, vamos dizer sua, sua frase é Eu sou um menino, que será qualquer coisa que o usuário escrever.

Então, o que queremos fazer agora é ter outra variável, digamos palavra um que será uma entrada.

Agora, esta variável é a palavra que o usuário quer remover ou substituir.

E então podemos dizer, e palavra para substituir.

Vamos dizer a palavra para substituir.

E depois que temos isso, será armazenado nesta variável chamada palavra um.

Também vamos ter outra variável, deixe-me chamar de palavra dois.

Isso será, o que você quer substituir.

Então vamos inserir a palavra para substituir.

Então agora, uma vez que temos tudo isso, vamos apenas imprimir frase.replace.

Isso significa que queremos substituir isso por isso, abrir parêntese para aceitar duas entradas, que são palavra um, a palavra que queremos substituir, e depois palavra dois, o que queremos substituir.

Então o que isso está fazendo é que, digamos que temos uma frase chamada Eu sou um menino, então essa palavra um é o menino que queremos mudar, e depois palavra dois é o que queremos substituir.

Então, vamos em frente e testar.
```

```markdown
Isso ocorre porque esquecemos de adicionar um sinal de mais bem aqui.

Agora vamos fazer isso novamente.

Bem aqui, você pode ver que diz para digitar sua frase.

Agora, deixe-me dizer "eu sou um menino", agora nos traz a sua frase: "eu sou um menino".

E diz para digitar a palavra para substituir, então eu quero substituir esta palavra "menino" e digitar a palavra para substituí-lo por "cara".

Agora você vê que ele imprime: "eu sou um cara".

Então, basicamente, é assim que se faz um exercício simples de substituição de palavras.

Ele recebe uma entrada, que é uma frase, depois recebe outra entrada, que é a palavra que você quer substituir, e então a terceira é a palavra que irá substituir.

E depois ele basicamente apenas imprime isso na tela.

Espero que você entenda o que fazer com isso nesta parte.

Se você não entendeu, pode voltar e assistir esta parte novamente e garantir que compreendeu antes de passar para a próxima.

Então, nesta parte, vamos falar sobre trabalhar com listas em Python.

Quando você trabalha em Python, vai lidar com muitos dados, ou você quer ser capaz de alimentar seus dados em uma lista.

Então, a lista em Python é basicamente apenas uma lista de diferentes atributos de diferentes valores fixos em um valor.

Então, vamos direto ao protocolo.

Agora, para definir uma lista é similar a definir uma variável.

Podemos simplesmente dar um nome à lista, digamos, uma lista de países, e eu posso nomear a lista de países.

E eu vou usar o sinal de igual e os colchetes.

Quando estamos definindo listas, precisamos usar colchetes, eu posso dar alguns valores como Reino Unido.

Posso também dar outro valor como Gana, deixa-me dizer Nigéria, e dar mais um valor.

E eu posso dizer Austrália.

Então, agora essa lista é uma variável de lista, tem quatro valores.

Agora, uma vez que eu imprima a lista assim, eu vou simplesmente dizer print e dou o nome países, que é a lista, você vê que ele simplesmente me traz toda a lista do jeito que está aqui.

Isso basicamente é o principal que você precisa saber ao definir uma lista.

Mas lista é mais ampla do que isso, há muito o que podemos fazer com listas, como listas, eu quero apenas pegar o primeiro atributo.

Agora, cada lista tem um número de índice, como este é 0, 1, 2, 3 e assim por diante, assim como eu disse antes neste tutorial que em Python ou em programação em geral, os números começam a contar do zero.

Então, o número de índice desse valor é 0, 1, 2, 3. É similar a quando temos uma variável, digamos que temos uma variável chamada nome, e temos Tom, então isso tem um índice de 0, 1, 2, 3.

Agora isso é muito similar a uma lista, cada valor tem um índice de 0, 1, 2, 3.

Agora podemos deletar isso.

Vamos dizer que queremos imprimir apenas isso, não queremos imprimir a lista inteira.

Eu posso fazer assim: países com colchetes e colocando o número do índice entre esses colchetes.

Agora, quando eu rodo isso, você vê que ele me traz apenas Reino Unido.

Eu posso fazer a mesma coisa, veja como imprimir Nigéria.

Eu dou o índice 2 e rodo isso agora e você vê que tem Nigéria, há muitas coisas que podemos fazer.

Agora, vamos dizer que queremos apenas pegar o primeiro "n" de Nigéria, podemos fazer isso também.

Portanto, no índice 2 de países, podemos especificar o número de índice 0.

Quando eu rodo isso, você vê que ele imprime "n" para mim, e o que isso significa? Que em países no índice 2, temos Nigéria.

Então eu digo para pegar o índice 0 de Nigéria.

E então, em Nigéria, "n" tem o índice 0.

Então, basicamente, adicionei algumas coisas simples em listas Python.

Agora, vamos dizer que queremos pegar apenas todas as listas de Gana até o final, não queremos adicionar Reino Unido, ou queremos pegar a lista de Nigéria até o final, também podemos fazer isso.

Então, dizemos apenas países, queremos pegar de Gana até o final, apenas dizemos, colchetes, 1 e dois-pontos.

Isso vai pegar tudo do índice 1 até o final.

Agora, deixe-me mostrar isso.

Quando eu rodo isso, você vê que ele me dá a lista sem Reino Unido, pega tudo de um índice específico até o final, também podemos fazer o mesmo de 2, de Nigéria até Austrália, aqui, Nigéria e Austrália.

Agora, especificamos uma faixa.

Vamos dizer que queremos pegar apenas uma lista de 1 até 3.

Ok, deixe-me adicionar mais um valor aqui, vamos dizer Nova Zelândia.

Sim, então aqui, Nova Zelândia.

E isso é 0, 1, 2, 3, 4.

Vamos dizer que queremos pegar de 1 até 3, não queremos o último, e não queremos este, posso fazer isso facilmente, digamos de 1, que é Gana, índice 1, depois dos dois-pontos, 3.

Então de 1, 2, 3.

Quando eu rodo isso, você vê, ok, ele me dá Gana e Nigéria.

Então isso é 0, 1, 2, 3.

Ok, então de 2 a 4.

Quando eu rodo isso, ele me dá Gana, Nigéria e Austrália.

Então ele pega de 1 até o anterior ao final.

Então é assim que fazer isso em Python.

E também pegamos o tipo da lista.
```

Agora vai imprimir aqui para mim que esta é uma lista.

Então, deixe-me apenas digitar CLS para limpar tudo o que fiz.

Agora, deixe-me imprimir, você vê que diz listas de classes.

Então, isso está me mostrando que este tipo de variável é uma lista.

Agora é apenas uma variável normal, assim como uma variável de string também vai me mostrar que é uma string.

Vamos tentar isso.

Vamos nos desviar da lista por um segundo.

Digamos que temos nome.

Então, escrevi o tipo de nome.

Quando eu executá-lo, você verá aqui embaixo que diz uma string.

Se eu mudar isso para 12, você verá aqui embaixo que diz inteiro. É assim que obtemos o tipo de um valor específico.

Então, agora sabemos que esta é uma variável de lista.

Agora, posso simplesmente deletá-la.

E, vamos dizer que quero mudar o valor de um elemento nesta lista.

Agora, digamos que quero mudar de Reino Unido para Estados Unidos.

Então, o que eu vou fazer é dizer, countries [0] porque o número do índice do Reino Unido é zero, agora deve ser igual a Estados Unidos.

E então deixe-me apenas adicionar um print talvez imprimir countries. Agora, quando eu imprimo countries, ok, você vê que o nome não está definido, é porque removemos esse dado, estava confuso.

Então, vamos apenas remover esta linha.

Eu executo novamente.

Você vê que agora o primeiro valor é Estados Unidos.

Enquanto antes era Reino Unido aqui, mas isso é simplesmente porque o mudamos para Estados Unidos aqui. Posso fazer isso novamente, vamos dizer que queremos mudar a Austrália, que é o terceiro, diremos três e vamos dizer que queremos mudar a Austrália para um país como o Canadá.

Quando eu executo, você vê que temos Estados Unidos, Gana, Nigéria, não temos mais Austrália, agora é Canadá, depois temos Nova Zelândia.

Então, é assim que se muda um valor específico em nossa lista.

Agora, vamos dizer que queremos obter apenas o último dessa lista.

Você sabe, nós também podemos pegar isso apenas digitando rapidamente, excluindo tudo isso, podemos obter Nova Zelândia apenas digitando countries, que é o número do índice, que é 0, 1, 2, 3, 4. O número do índice da Nova Zelândia é quatro. Ao digitar quatro e executar, ele me dá Nova Zelândia.

Mas também posso fazer isso de outra maneira.

Agora, se eu adicionar um sinal negativo aqui, deixe-me excluir isso.

E eu disser um.

Agora, isso vai pegar da lista o último valor nela.

Se eu executar isso, você vê que me dá Nova Zelândia. Se eu disser menos dois, menos dois é obviamente Austrália.

Ao executar isso agora, você vê que temos Austrália.

Então, observe que quando você usa um sinal negativo, ele pega da lista o último, basicamente.

Mas observe que desde o início usamos zero para o primeiro, e para o último usamos menos um.

Sim, isso é porque, como sabemos, na matemática normal, zero não é nem negativo nem positivo.

Então, quando começamos de trás, usamos menos um, não menos zero.

Então, começamos da frente é zero, começamos de trás é menos um, é assim que basicamente se usa isso.

Agora também há muitas outras coisas que podemos fazer com listas, como obter o comprimento dessa lista, digamos que queremos saber quantos valores temos nessa lista, porque na maioria das vezes temos uma grande quantidade de dados e não podemos começar a contá-los um por um assim.

Mas você pode só dizer len countries, que é o nome da lista.

Agora, uma vez que eu execute, você vê que me dá cinco, que é porque tenho cinco valores aqui.

Mas observe que quando ele me dá a resposta, não é baseado no valor do índice.

Agora, o valor do índice é como o ID atribuído a cada um desses valores aqui.

Mas quando calculo o comprimento, ele me dá a quantidade real que temos, que são cinco variáveis calculadas a partir do número do índice até quatro, espero que você entenda isso.

Podemos também fazer outras coisas com a lista.

Como você pode ver, todos esses são strings.

Agora, em vez de imprimir strings, deixe-me excluir esta Nova Zelândia.

Em vez de imprimir apenas strings, posso mudar, digamos, este Gana, posso mudá-lo para um número como dois.

Então agora temos a string, temos um inteiro, se eu imprimir isso, ok, isso me dá quatro.

Então deixe-me remover o comprimento.

Uma vez que eu imprimo isso, você vê, isso me dá o que eu quero ver, se eu trouxer o número do índice disso, que é um.

E eu pressionar executar, ele me dá dois.

Então, podemos misturar diferentes tipos de dados em uma lista.

Eu também posso mudar essa Nigéria para verdadeiro, que é um valor booleano.

Uma vez que eu executar isso, vamos remover isso.

Eu executo isso, ele me dá isso, então não haverá erro, nada entrará em conflito, podemos facilmente fazer isso.

E lembre-se de que verificamos o tipo de uma lista.

Então, aqui, uma vez que eu executar isso, você verá que ele me dá listas de classes, o que significa que essa variável é uma lista.

Mas vamos dizer que eu quero verificar o tipo dos valores em uma lista, tipo, quero verificar o tipo desse valor ou o tipo desse valor.

Agora, como você sabe, esse valor é uma string, esse é um inteiro, este é um valor booleano.

Isso também são strings.

Deixe-me sobre isso.

Você vê que ele me dá int, que é inteiro, de um lado para o outro. Deixe-me ver.

ok, não me dá nada lá, mas esse é um valor booleano.

Isso é uma string.

Então, vamos dizer que eu quero obter isso, eu só diria tipo countries, colchetes e eu dou este número do índice.

Vamos dizer que eu quero dar para o segundo, que tem um valor de um indiano.

Depois que eu executar, ele me dá inteiro.

Vamos tentar para o terceiro.

Ele me dá uma tigela, o que significa Boolean, então isso mostra como basicamente obter o tipo de uma string.

E também podemos fazer outras coisas como, vamos ver, a última coisa que quero mostrar para você nesta parte é outra maneira de definir uma string LMC para atribuir uma string, quer dizer uma lista desculpe.

Então, em vez de usar colchetes, também podemos usar algo que chamamos de listas.

Mas agora, quando estamos usando esse construtor de lista, é chamado de construtor de lista, ele é usado para construir uma lista, onde vou usar colchetes novamente, vamos usar parênteses normais assim.

Bem agora, deixa eu só deletar esta linha.

Agora vamos usar o construtor de lista para especificar como construir uma nova lista.

Então eu vou dizer lista.

E vou usar parênteses normais, e tem que ser duplo.

Então, quando eu estou usando o construtor de lista, ele tem que ser duplo assim.

Agora você pode ter todos os meus valores como Nigéria, posso ter o padrão antes, posso ter falso, quase, eu imprimo esses, não queremos imprimir o tipo, só queremos imprimir tudo.

países legal, isso me dá tudo o que eu quero ver.

Então isso é basicamente como usar o construtor de lista para especificar uma lista.

Então podemos imprimir uma lista de duas maneiras, a normal e a segunda com o construtor de lista.

E então também podemos imprimi-los da maneira normal sem listas, como os colchetes, como esses países também.

Então agora, se eu disser tipo, os tipos de países que você vê vão me dar uma lista.

E então deixe-me também imprimir o tipo de países apenas para mostrar que ambos ainda são listas, então listas e listas, para que sejam todos sobre os conceitos básicos de listas.

No próximo vídeo, vamos falar mais sobre listas, atributos, ainda há muitas coisas que podemos fazer com listas nesta parte, vamos falar mais sobre listas, especificamente, vamos falar sobre funções de listas ou métodos de lista em Python.

Então, na última parte, eu mostrei sobre listas e muitas coisas que você pode fazer com pelo menos 20 atributos de lista.

Neste vídeo, vamos nos aprofundar mais.

Agora digamos que temos duas listas.

A primeira é lista um.

E essa lista um é apenas um monte de números 12345.

E depois temos lista dois.

E depois queremos que essa lista dois seja apenas vamos ver um monte de frutas, então temos uma banana e depois temos maçãs, mangas, e laranjas.

Então agora temos essas duas listas.

Agora digamos que queremos juntar essas duas listas como se quiséssemos imprimi-las juntas.

Vamos fazer algo como lista um ponto append ponto extend queremos estendê-la com a lista dois agora também drena a lista um. O que isso vai me dar é que esses uniram esses.

Então vamos imprimir.

12345 então banana, maçã, manga, laranja.

Então só me dá isso unido com isso a primeira lista unida com a segunda lista.

Então isso é o que faz, combina as duas listas juntas.

Mas digamos que queremos adicionar um valor ao final desta lista, como laranjas.

Queremos adicionar água, o que temos? Acho que temos cerejas, mas só queremos adicionar algo mais a isso.

Podemos fazer algo como lista dois ponto append.

E então o que queremos adicionar a isso, deixe-me dizer cereja.

Agora vamos dizer imprimir lista dois, você vai me trazer tudo isso com cereja.

Agora a cereja é parte desta lista verá não apenas bananas, maçãs, mangas, laranjas, e me traz cereja.

Agora, se eu disser que quero obter o comprimento da lista dois.

Agora temos quatro aqui e adicionamos uma, deve nos dar cinco.

Agora você vê que temos cinco.

Então isso é apenas uma maneira simples de adicionar um valor a uma lista.

E é muito, muito útil também.

Mas digamos que queremos colocar um valor entre uma dessas, como temos múltiplos em um valor entre banana e maçã.

Essa cereja queremos que ela esteja bem aqui, algo assim.

Agora se quisermos fazer isso, vamos apenas dizer lista dois ponto inserir.

E então isso vai levar duas entradas, agora vai levar o número do índice, o lugar do índice, queremos colocar, queremos colocá-lo em um, e então queremos colocar a cereja.

Agora deixe-me explicar isso melhor.

Então diz lista dois ponto inserir queremos dizer no número de índice um, que significa logo aqui, então as cerejas devem estar bem aqui.

Então 01 queremos que seja a cereja.

Agora, quando eu imprimir cereja, deixe-me apenas executar isso, você vê que agora temos uma banana e depois temos cereja no meio.

Então entre bananas e maçãs, temos cereja.

Então é assim que se insere um valor entre uma lista.

Mas agora digamos que queremos remover um valor específico da lista, podemos dizer lista dois ponto remover, vamos remover bananas.

Agora quando eu imprimir lista dois, vai me imprimir uma lista dois, sem bananas.

E é muito fácil, é só dizer remover, então o que você quer remover.

Mas agora digamos que queremos fazer algo, queremos deletar tudo nesta lista, queremos limpar tudo, você pode simplesmente dizer lista dois ponto limpar.

E nada vai estar aqui.

Como eu disse lista dois ponto limpar, isso vai ficar vazio, vai ser apenas uma lista vazia.



```md
Então, as algas apenas deletam uma lista? Muito fácil.

Mas agora, digamos que temos esses valores.

E a manga, queremos obter o número do índice da manga, como sabemos, é 0, 1, 2.

Portanto, o número do índice de Manga é dois.

Mas queremos obtê-lo. Digamos que temos milhares de listas de valores nesta lista.

Queremos saber onde a manga está localizada nessa lista, vamos apenas dizer `print(lis2.index('mango'))`.

Então você só vai imprimir o número do índice de manga.

Vamos executá-lo aqui e você verá que é 2012.

Então ele me diz onde a manga está localizada nesta lista, o que é muito útil.

Agora, digamos que temos um valor que aparece mais de uma vez.

Então queremos saber quantas vezes um valor aparece nesta lista.

Agora é muito fácil, vamos ver `lista.count('mango')`.

Então agora deve nos dizer um, porque manga só está nesta lista uma vez.

Quando eu executo, você vê aqui que temos um.

Deixe-me vir aqui e inserir manga novamente.

Agora, quando eu executo desta vez, você verá que temos dois porque manga está em nossa lista duas vezes.

Então é assim que se faz isso de forma simples.

Mas agora, vamos ver uma lista de números, assumindo que eles estão espalhados, vamos dizer que temos um aqui, e deixe-me apenas deletar todos esses e temos quatro, cinco, então temos três aqui.

Então 4, 3, 5, 1, a menos que eu tenha dois no final.

Então, digamos que queremos imprimir esta lista em ordem crescente.

Sabe, como eu disse, em Python, você pode estar trabalhando com muitos dados, e temos milhares de números que estão espalhados, e quero imprimi-los de acordo.

Vamos ver de 100 para imprimir de 250 a 350, de acordo, não espalhados, podemos fazer isso facilmente dizendo `lista1.sort()`, como isso, bem aqui, eu só vou imprimir `lista1`.

Agora, quando eu imprimir, não vai imprimir 4, 3, 5, 1, 2 vai imprimir 1, 2, 3, 4, 5 em ordem crescente.

Agora você vê como temos 1, 2, 3, 4, 5.

Isso também é muito útil quando se trabalha com Python.

Mas agora deixe-me apenas remover esta manga, não queremos tê-la duas vezes.

Isso foi apenas para teste.

Mas agora, digamos que queremos imprimir uma lista de trás para frente, queremos inverter a lista.

Queremos imprimir de baixo para cima, o que faremos? Vamos dizer `lista2.reverse()`.

É muito fácil, basta `lista2.reverse()`, ao imprimir `lista2`, você verá que ela é impressa de laranjas, então duas mangas, duas maçãs e duas bananas.

Vamos executá-lo.

Agora veja laranjas, manga, maçã, banana, como imprimir facilmente uma lista de trás, a partir do último valor nessa lista.

Agora, digamos que queremos duplicar uma lista, como se quiséssemos apenas pegar essa lista e copiá-la novamente ou algo assim.

Vamos testar para quatro listas, deixe-me deletar essas duas, vamos ter outra lista chamada `lista3`, digamos que queríamos que `lista3` fosse exatamente a mesma coisa, uma duplicata da `lista2`.

Então, vamos apenas dizer `lista3 = lista2.copy()`.

Então, basta copiar todos os valores da lista2 e colá-los em lista3. Ao imprimir `lista3`, ao executar, teremos exatamente a mesma coisa que quando imprimimos `lista2`, é exatamente a mesma coisa.

E então também podemos fazer algo mais divertido.

Como, digamos que queremos apenas deletar o último valor dessa lista e imprimir todo o resto.

Podemos fazer isso dizendo, pessoal, dizendo o método pop, então podemos apenas dizer `lista2.pop()`.

Então, quando dizemos `lista2.pop()`, ele apenas removerá o último valor que temos na lista, ele deletará, removerá o último valor que temos nessa lista e então restará o resto.

Então, quando eu imprimir `lista2` agora, terá apenas três valores.

Agora você vê, temos bananas, maçãs e mangas, não tem mais laranja.

Mas, digamos que queremos ser específicos, queremos deletar, você se lembra que podemos apenas remover um valor dizendo `lista2.remove('banana')`.

E quando imprimimos isso, ele remove banana.

Mas também podemos simplesmente deletar ou remover um valor usando o número do índice.

Então, no pop, vamos dizer `lista2.pop(1)`.

Então, vamos remover o valor com o índice de valor um ou dizer um e imprimir nós, banana, manga, laranja.

Isso nos dá aquela mesma lista, mas sem o valor do número do índice.

Mas também podemos usar delete.

Ao invés de usar pop, podemos fazer exatamente a mesma coisa.

Mas agora podemos usar delete.

Então, quando dizemos `del lista2[0]`.

Então, isso vai deletar o valor com o número do índice zero nesta lista duas listas.

Quando imprimirmos `lista2`, vai nos dar tudo sem banana.

Vamos executá-lo e ver que temos maçãs, mangas e laranjas.

Lembre-se de que também mostramos como apenas limpar uma lista, eu apenas deletarei tudo em nossa lista.

Podemos fazer isso usando a função `del`.

Então, ao invés de especificar algo aqui, basta dizer `delete lista2`.

Agora, isso vai limpar esta lista.

Uma vez que eu a executo, você vê que diz que a lista2 não está definida.

Ok? Mas temos a lista2 bem aqui.

Então vamos fazer algo assim, deletar apenas um.

Sim.

E então apenas imprimir.

Oh, ok, então a razão pela qual ele diz que a lista2 não está definida, você vê que temos a lista1, aqui temos a lista2, que tem banana, maçã, manga e laranjas.
```

Segue a tradução do seu arquivo Markdown para o português, mantendo a formatação e o layout original:

---

Então, uma vez que deletamos a lista dois é bem diferente da que fizemos anteriormente, que foi `list.clear()`.

Lembre-se de que se fizermos `list2.clear()`, isso vai apenas remover tudo aqui.

Mas essa lista vai estar disponível no nosso código.

Mas, quando usamos este delete, isso vai apenas deletar a lista, deletar esse valor.

Então, não vai estar no nosso código novamente, é por isso que quando tentamos imprimir `list2`, o Python nos retorna que `list2` não está definida, então isso remove completamente.

Então, há uma diferença entre a função `clear` e a função `delete`.

Agora isso vai tornar todas as listas indisponíveis por enquanto.

Neste tutorial, vamos falar sobre tuplas em Python.

Tuplas são usadas para armazenar múltiplos itens em uma única variável.

Então, você sabe listas sobre as quais falamos anteriormente, as tuplas são muito semelhantes às listas.

Mas há algumas diferenças básicas, como tuplas são imutáveis.

Agora, imutável significa que você não pode mudar nenhum valor em uma tupla.

Agora, deixe-me mostrar como escrever uma tupla em Python.

Vamos supor que temos uma tupla de três números.

Vou chamar de `tres_numeros`.

E eu dou esses números, vou escrever a tupla que significa um parêntese normal, sem colchetes, então `123`.

Então, suponha que temos isso, agora quando imprimimos `tres_numeros` isso nos dá essa tupla, podemos também fazer algumas coisas como pegar o primeiro valor dessa tupla usando o número do índice, posso dizer pegar o índice `0`, que irá imprimir `1`.

Então, podemos também fazer todos esses tipos de coisas.

Mas suponha que agora tentamos mudar o valor de `2` para algo como `25`.

Isso não é possível porque, como disse anteriormente, é imutável, o que significa que não podemos mudá-lo.

Uma vez que temos a tupla, ela vai permanecer no nosso código, não podemos redefini-la ou adicionar qualquer coisa na tupla posteriormente no código.

Então, digamos que queremos fazer algo como `tres_numeros`.

Anunciador do índice número um, mudá-lo para `23`.

E então eu quero imprimir `tres_numeros`.

Agora isso vai nos dar um erro.

Então, sim, ele diz `TypeError: 'tuple' object does not support item assignment`.

Então, ele está dizendo o que queremos fazer, a tupla não suporta isso.

Então essa é a diferença básica entre tupla e lista.

E então podemos também fazer algumas outras coisas como tuplas permitem repetição de números ou repetição de valores, como eu tenho `123` e novamente coloco `1`, quando apenas removo essa linha, eu tenho `1` duas vezes, quando eu imprimo isso, vai funcionar bem, permite repetição do mesmo valor.

E eu também posso fazer algumas coisas como obter a `length` (comprimento) de uma tupla, posso apenas dizer imprimir `len` e então isso vai me dar a quantidade de valores que temos nessa tupla.

Como você pode ver, imprime `4` porque temos `1, 2, 3, 4` valores.

E então, eu também posso obter o tipo, apenas para ter certeza de que isso é uma tupla, posso fazer `type` para saber se isso é uma tupla ou não.

Quando eu executo, você vê esta classe `tuple`.

Então isso me mostra que isso é uma tupla e tuplas também permitem vários tipos de dados.

Como eu posso ter outra tupla e dizer `strings`.

E então eu posso dizer `oh, lunch`.

Deixe-me dar mais um.

Agora quando tento imprimir `strings`, você vê que tudo funciona bem.

Então permite vários tipos de dados, também podemos fazer isso novamente para o tipo `Boolean`, eu apenas digo `bo` e então `True` ou `False`, e depois `True` novamente.

Agora quando tentamos imprimir `bo`, você vê que funciona bem.

Então permite vários tipos de dados.

E então não os permite apenas em variáveis separadas, podemos misturá-los juntos, como agora temos `1`, posso ter outro que será uma string, que será `own`.

E então posso ter outro, que será um `boolean`.

Então, quando eu imprimo o primeiro, que são apenas `tres_numeros`.

Agora você verá que tudo ainda funciona bem.

Então, tuplas permitem todos esses tipos de coisas.

E então, nas tuplas, podemos também verificar o tipo de dado do valor dessa tupla.

Agora queremos verificar o tipo de dado desse primeiro valor, podemos dizer, tipo de `tres_numeros` com o índice número `0`, que é o primeiro, isso deve nos retornar `int`, que é inteiro.

Como você vê, ele diz `class int`.

Agora, uma tupla também pode fazer isso.

Agora, em vez de apenas escrever este parêntese aqui ou parênteses normais ou parênteses circulares, qualquer coisa que você queira chamar, está totalmente bem.

Podemos também usar o construtor de tuplas, da mesma forma que eu falei sobre o construtor de listas, também existe um construtor de tuplas.

Então, a única diferença é que vamos adicionar `tuple` bem aqui.

E terá dois parênteses assim, quando eu tentar imprimir, ainda vai estar tudo bem, deixe-me apenas imprimir a variável `tuple` normalmente.

Agora, quando eu imprimir, você vê que ainda é uma tupla, nada dá errado.

E isso basicamente será sobre tuplas, os fundamentos das tuplas em Python. Então, poderíamos usar essas tuplas menos frequentemente em Python, principalmente usamos listas.

Mas em alguns casos, realmente queremos usar tuplas.

Em Python, algo como, digamos que você está trabalhando com coordenadas, ou apenas alguns números que você não quer mudar, ou alguns valores que você não quer mudar, as tuplas podem ser a melhor opção.

Neste tutorial, vou falar com você sobre funções em Python.

---

Agora as funções permitem que você empacote seu código. Bem, deixe-me dizer que a reestruturação da boa vontade é como um bloco de código, que executa uma tarefa específica da maneira que você deseja usar a função, você simplesmente a chama.

Então, deixe-me mostrar como fazer uma função em Python.

Então, para definirmos uma função, usamos uma palavra-chave chamada `def`.

Agora, uma vez que digitamos `def`, Python sabe que agora queremos definir uma função.

Então, você pode dizer `def`, vamos fazer uma função simples, que vai cumprimentar o usuário.

Talvez ela diga "bem-vindo" ou algo assim.

Então, podemos simplesmente dizer `greetings`.

Então agora, a palavra-chave, que é `def`, e depois dela temos `greetings`, que é o nome de nossa função. Pode-se dizer `greetings_function`.

Então este é o nome da nossa função, e depois será seguido por parênteses abertos e fechados, e depois deles teremos dois pontos.

Então, após este bloco de código, Python sabe que o que vier abaixo dele será a tarefa que queremos que essa função execute.

Então, uma vez que eu pressione enter, noto que não começa do início, começa direto deste ponto, ele indenta automaticamente. Agora no Python, a indentação é muito importante.

Então agora essa indentação nos mostra que qualquer código que escrevermos, como imprimir algo, estará dentro da função.

Mas se eu simplesmente remover a indentação e começar daqui, então a função é cancelada.

Isso é uma sintaxe inválida, porque normalmente deve haver uma indentação, e uma indentação equivale a quatro espaços.

Então, se eu for aqui, você pode ver: 1, 2, 3, 4.

Assim que ele indenta automaticamente "automagicamente", ele cria quatro espaços.

Agora digamos que você esteja usando um editor de código que não faz a indentação automaticamente. Como se você estivesse usando o Notepad, e uma vez que você clicasse em enter, ele não adicionaria a indentação automaticamente, você pode simplesmente adicionar quatro espaços como este: 1, 2, 3, 4 e isso faz a indentação automática.

Então agora queremos que essa função simplesmente diga ao usuário "bem-vindo" ou "saudações da minha parte" ou algo assim.

Podemos dizer "welcome user".

Então, dessa forma, essa função chamada `greetings_function` está imprimindo para o usuário que bem-vindo.

Mas se eu rodar isso, nada acontecerá.

Vou apenas fechar isso.

E por que é isso?

Então, quando temos uma função, para que essa função seja executada, precisamos chamar a função.

E para chamar essa função, podemos simplesmente dizer. Agora, uma vez que eu pressionar enter, você verá que ainda está indentado.

Mas eu quero sair dessa função, terminei o que estava fazendo nesta função.

Então se eu simplesmente pressionar um backspace, agora estou fora desta função.

Agora, se eu simplesmente disser `greetings_function` com parênteses abertos e fechados, agora estou chamando esta função.

Então isso significa que esta linha está fazendo o mesmo que tudo que temos nesta função.

Então agora deve imprimir "bem-vindo, usuário".

Apenas execute isso e veja, agora ele diz "welcome user".

Então, é assim que se usa funções em Python.

Mas funções são mais amplas, há muitas coisas que podemos fazer com funções.

Agora, como você pode ver, isto diz "welcome user" o resultado.

Mas qual usuário? Vamos tornar isso mais divertido, algo assim, podemos passar algo chamado argumentos ou parâmetros.

Então bem aqui nestes parênteses abertos e fechados, em vez de deixá-los em branco, podemos passar algo como, vamos ver, temos `name`.

Oh, não isso.

Então `name`, que é o nome do usuário.

Agora, em vez de dizer "welcome user", queremos dizer "welcome, name".

Bem aqui, vamos simplesmente dizer `name`.

E isso vai simplesmente imprimir "welcome, name".

Mas em vez de `name`, espera-se que passemos algo ao chamar essa função.

Se eu executar isto, você verá que dá um erro.

Ele diz `greetings_function` está faltando um argumento posicional obrigatório: `name`.

Então isso nos mostra que quando estamos chamando essa função, agora, precisamos passar quem seja o usuário.

Então, digamos que o nome do usuário é `john`.

Então, agora quando eu executar isto, bem aqui, você verá que diz "welcome john".

Então, deixe-me apenas voltar e garantir de explicar muito bem.

Bem aqui temos esta função, que tem um argumento ou parâmetro, que é `name`.

Então este `name` será capaz de dizer à função qual usuário ela quer cumprimentar.

E então vai simplesmente cumprimentar o usuário com a função `print`.

Então, para nós darmos esse `name`, este `name` é como uma variável.

Então, quando estamos chamando a função, ao invés de deixá-los em branco como esses, vamos passar a string como `john`, mas você sabe, também podemos passar outros tipos de dados.

Então você pode ver que este `john` é uma string.

Mas digamos que queremos passar um inteiro ou um número.

Ou, você sabe, sempre que estivermos lidando com números no Python, não precisamos das aspas, podemos simplesmente dizer 34.

Uma vez que eu executar isto, você verá que ele diz que só pode concatenar strings, não inteiros.

Então, se você seguir este tutorial, desde o início, eu mostrei como converter um inteiro para uma string.

Então, bem aqui, ele diz que se contar, concatenar string e um inteiro, isso significa que você pode combiná-los juntos.

Então, para nós podermos usar isso, devemos garantir que convertemos este inteiro para uma string.

```markdown
Agora esse nome é uma string.

Uma vez que eu o execute, ele diz bem-vindo lamentável.

Então é assim que basicamente se faz isso.

conhecimentos voltam.

Então vamos garantir que estamos passando John.

Então é assim que se passa parâmetros ou argumentos.

Agora você pode chamá-los de parâmetros.

Você pode chamá-los de argumentos, como preferir.

E então também vamos passar mais de um parâmetro ou argumento.

Então podemos passar nome e também podemos passar idade.

E então podemos dizer bem-vindo e o nome.

E então podemos dizer algo como vamos fazer assim, você digitou o nome, vamos ver, idade.

Sim, entendi e um ponto final.

Então aqui, quando estamos passando John, também estamos passando a idade como um número inteiro, que é 27.

Mas lembre-se, agora isso é um número inteiro.

Se executarmos isso, obviamente teremos um erro, que é não é possível concatenar string e número inteiro.

Então você sabe que agora temos que converter isso para uma string bem aqui.

E então executar.

Então você vê, diz, Bem-vindo, John, você tem 27 anos.

Então é assim que simplesmente se faz isso, você pode passar dois argumentos ou parâmetros.

Agora, digamos que você não saiba a quantidade de argumentos que serão passados em você.

Vou particularizar isso antes de explicar.

Agora, digamos que temos nomes.

Vou só remover tudo isso.

Bem-vindo, nome.

Então, digamos que temos isso.

Bem, não sabemos quantos serão passados aqui.

Então teremos que colocar algo como asterisco.

Agora este asterisco está mostrando que estamos passando várias quantidades como uma tupla, uma tupla de que é como uma lista de valores que estamos passando aqui.

E então não sabemos as quantidades que estão sendo passadas.

Então digamos que aqui temos esta tupla, John.

Vamos ver, também temos outro chamado Tim.

Vamos dar mais um.

Ok, aqui.

Mais um chamado Tom.

Então aqui estamos passando esses três valores como nomes.

Então estes nomes são como uma tupla agora, é sempre um asterisco.

Porque não sabemos.

Então, para agora mostrar o nome que queremos.

Digamos que queremos saudar apenas o segundo usuário, então podemos saudar o usuário usando seu número de índice.

Então você pode dizer nomes, o número do índice é um.

Agora, quando eu executar isso, você verá que diz bem-vindo, Tim.

Então é assim que se passa vários valores, mais de um valor, se não soubermos o que estamos passando.

Agora, vamos voltar.

Deixe-me pressionar Ctrl.

C, mas para nome e idade.

Rapidamente, ok, assim.

Sim.

Então vamos imprimir isso e garantir que nosso código está funcionando.

Bem-vindo, John, você tem 27 anos.

Certo.

Agora, também podemos passar isso, em vez de apenas passar os valores, podemos passar isso pelos nomes das variáveis agora.

é como nome é igual a John.

E então idade é igual a 27, é exatamente a mesma coisa.

Então, quando executarmos isso, ainda vai imprimir bem-vindo, John, você tem 27 anos, é basicamente a mesma coisa.

Então, vamos tornar isso mais divertido.

Em vez de apenas passar esses valores, estaticamente, ou apenas adicionar código aos valores, podemos primeiro pedir ao usuário para nos dar uma entrada de seu nome e sua idade, e então vamos simplesmente imprimir isso.

Então, vamos fazer isso rapidamente.

Bem aqui.

Não, aqui.

Então, aqui, podemos dizer nome, entrada, e seu nome.

E então vamos dar outro chamado idade.

entrada, MSC e sua idade.

Então agora pedindo ao usuário pelo valor, eu vou digitar isso.

E então, uma vez que o usuário nos dê isso, vamos substituir isso aqui.

Então, substituindo isso por nome, e substituindo isso por idade, então vamos executar isso.

Então, se eu vier aqui, perguntar meu nome.

Eu digo Tim, pergunta a idade, eu digo 101.

Agora diz, bem-vindo Tim.

Você tem cento e um anos.

Então espero que você tenha entendido o conceito de funções em Python.

Essas são as coisas básicas que você vai lidar em Python.

Nesta parte, vamos falar sobre a instrução return em função de Python.

Agora as declarações de retorno são apenas usadas para obter uma resposta da tarefa sendo executada em uma função.

Agora, como você sabe, no último vídeo, quando definimos nossa função, então apenas imprimimos o que queremos retornar.

Mas normalmente, em Python, usamos o que chamamos de declaração de retorno.

Então essa declaração de retorno vai nos dar uma saída ou nos dar um feedback do que foi executado.

Então vamos personificar isso agora, digamos que você foi enviado para uma tarefa para obter algumas informações.

E então, quando você voltar, quer dar uma resposta ou quer retornar um feedback, quer dizer o que obteve ou a tarefa que executou.

Então é a mesma coisa aqui na função Python, o bloco de código, vai para a tarefa, e na declaração de retorno, nos dá uma resposta.

Então vamos mostrar como fazer isso.

Vamos apenas definir uma função normal, digamos minha função.

E então não vai receber nenhum argumento por agora.

Então aqui, queremos apenas retornar, digamos, cinco mais quatro.

Então esta função básica agora vai simplesmente retornar nove, porque é cinco mais quatro.

Mas agora, podemos simplesmente imprimir minha função, então uma vez que imprimirmos minha função, veja, bem, diz função, minha função é só que você sabe que é uma função, mas também precisamos adicionar nossos parênteses abertos e fechados, quando eu executar novamente, vemos nove.
```

```markdown
Então podemos dizer, adicionamos números.

E então queremos adicionar dois argumentos, número um e número dois.

Então o que queremos retornar é número um, mais número dois.

Então aqui, podemos simplesmente passar mais número dois, e número dois como três s3.

Então isso nos dará, veja, diz que minha função não está definida porque mudamos o nome para adicionar números, vamos apenas executá-la novamente.

Veja, agora dá cinco.

Mas vamos tornar isso mais interativo aqui.

Vamos dizer que número um, é igual a input.

E primeiro número sublinhado, avinoam.

para entradas.

E segundo número.

Certo, então assim nos dará o número um, aqui daremos o número dois.

Então agora quando executarmos isso, vai nos pedir o primeiro número, digamos 80.

Ou digamos 20, como o segundo número, vai somar isso e nos dar 100.

Agora veja, diz 88 8020.

E a razão pela qual diz isso é porque ele vê isso como uma string de status.

E então, quando usamos a adição ele vê isso como concatenação.

Então como eu disse, 8020, mas eu queria adicionar você por vir muito suculenta, diz a string Bem, sabemos que estamos coletando um interior o que Python faz, você sabe disso, então, temos que dizer ao Python que o que você quer coletar é um número.

Então eu quero que você adicione convertendo para um inteiro dizendo i n t.

Agora, fechamos aqui, então também fazemos o mesmo i n t e então fechamos aqui.

Agora, quando executamos isso, ele vai adicionar para nós este 20.

Agora ele nos dá Andrea.

Então esse é o conceito básico da instrução de retorno.

E também quero apontar algo que sempre que usamos a instrução de retorno em uma função Python, não escrevemos nada após esse bloco de código.

Como essa instrução de retorno mostra o fim da chamada da função. Me salve agora imprima.

Olá.

Uma vez que executo, ele pede os números, veja, apenas me dá 80 e retorna isso, não imprime olá, porque está fora de nossa função e não é uma indentação normal.

Então esse código não é visto em nosso bloco de código.

Mas se eu vier aqui, se eu excluir e dentro da função, colar, ele vai imprimir isso para nós.

Então digamos agora temos olá, e temos a resposta da adição.

Então é assim que se usa instruções de retorno em uma função Python.

Nesta parte do tutorial, vamos falar sobre instruções if em Python.

A instrução if é basicamente dar ao Python uma condição.

Agora, este conceito é muito fácil de entender, não apenas em Python, mas na programação em geral, sempre há instruções if, mas talvez com sintaxes diferentes.

Então a instrução if é apenas dizer ao Python para executar o código automaticamente por si só.

Então, assumindo que se uma determinada condição for verdadeira, então Python deve fazer isso.

Mas se não for verdade, então Python deve fazer aquilo.

Então, por que dar ao Python uma condição antes de executar o código? Então, deixe-me primeiro digitar uma nota simples para que você possa entender o conceito.

Então posso dizer algo como se eu escrever um número, então agora escrevo um número.

E então se o número for divisível por dois, então sabemos que o número é par.

Mas se não for divisível por dois, então é um número ímpar.

Então algo assim, isso não é como escrever código.

Isso é apenas texto simples.

Mas estou mostrando como, sim, eu escrevi um número, então se o número for divisível por dois, então podemos dizer ao Python para dizer ao usuário que, ok, esse número é par.

Mas se não for divisível por dois, então este número é ímpar.

Então agora vamos protocolar isso e escrever um código Python real.

Então agora temos uma variável chamada a é igual a dois.

E então temos outra variável chamada b e b é igual a três.

Agora temos uma instrução if simples.

Verificando se dois é maior que três ou três é maior que dois, ou se a variável a é maior que a variável b.

Então diga, se a é maior que b, então podemos apenas imprimir para o usuário, a vamos concatenar é maior que b.

Ok, mas sabemos que b é maior que a.

Então vamos apenas tornar isso maior.

Então, legal.

Vamos executar isso.

Agora você vê, não pode concatenar string, eu sei esse tipo de coisa.

Então vamos apenas converter para uma string.

Então vamos executar isso novamente.

Veja, agora diz quatro é maior que três.

Então verificamos se a é maior que b.

Agora também verifica, obviamente, se b é menor que b.

Agora você vê que nada acontece.

Porque dissemos que deveria executar este código.

Somente se a for menor que b, caso contrário, não é menos que b, o código não foi executado.

Agora também podemos verificar se A é igual a B.

Então se b é igual a B, vamos fazer a igual a B.

E executar.

Veja, diz quatro é maior que quatro porque essa foi a terceira questão, mas podemos simplesmente dizer A igual a B.

Então, ao executar, veja, diz A igual a B, onde mudamos agora para três.

Agora quatro não é mais igual a três.

Não executa.

Então esse é o conceito básico de instruções if.

Eu também farei isso para diferentes tipos de dados.

Agora digamos que temos uma string, que é Equipe, B também é equipe.

Então agora sabemos que A é igual à Equipe, B é igual à Equipe.

Então, obviamente, A é a mesma coisa que Equipe.
```

Quando executamos, vemos que diz A é igual a B, então podemos também usar o booleano.

Então vamos dizer true.

Agora podemos ver se a é igual a true, o que significa que se A é true, então podemos simplesmente dizer, A é true.

E então podemos simplesmente executar isso.

Então A é true.

Esse é o conceito básico de uma instrução if.

Bem, você sabe, podemos também dizer se A não é true, o que significa algo como false.

Diremos que a não é true.

Então agora é false.

Quando executamos, ele diz que a não é true.

Podemos também adicionar dois tipos diferentes, como se rapidamente mudarmos isso de volta para inteiros.

Então vamos ver, se a é maior ou igual a b, então você sabe, a é maior que B.

Ou se a é maior ou igual a b, então diremos ratio say true ou algo assim.

Quando executamos, você verá que diz true porque A é maior que B.

E se a também é igual a b, ele permanecerá true porque A é igual a B.

Mas agora vamos dizer que a é menor que b.

Quando executamos, nada foi executado.

Então agora queremos adicionar mais funções a essa instrução if.

Então diz se a é maior ou igual a b, então vamos verificar se A é igual a B, se não, diremos A é igual a B.

Mas e se a não é igual a ser assistindo ao Python dois? O que o código deve fazer? Certamente não executa nada? Então agora podemos adicionar else, isso else significa se a... vamos corrigir isso, se A não é igual a isso, então, assim como um IF é igual a B, ele deve imprimir A é igual a B, else significa qualquer coisa exceto isso, então ele apenas deve imprimir a não é igual a b.

Então, se a é igual a B imprime isso, então else significa, se não é o oposto disso, então deve apenas imprimir a é não é igual a B.

Quando eu executo isso agora, imprime a é não é igual a B.

Então, é assim que se usa uma simples instrução if e else.

Podemos também fazer isso com um booleano, vamos fazer isso true.

Então digamos, se A é true, digamos A é true.

Se não, digamos não true.

Quando executamos, você vê que diz A é true, com nossas mudanças para false, claramente a não é true.

Então diz a não true.

Então é assim que se usa basicamente uma simples instrução if else, vamos também prosseguir.

Agora digamos que queremos adicionar mais de uma condição, como se A é igual a true ou se a é igual a false.

Imprima A é false.

Else se sabe que nenhum dos dois.

Então se a é igual a true deve imprimir A é true.

Elif significa que estamos adicionando outra instrução, é a mesma coisa que if, mas else if significa que você tem uma.

Então, se a não é true, não pode verificar se A é false.

Então se a é false imprime isso, mas se não é nenhum desses dois, então apenas imprima a não é nenhum dos dois.

Então agora deve imprimir a é false quando executamos.

Você verá a é false.

Agora você sabe como adicionar uma simples instrução elif.

Agora podemos adicionar qualquer quantidade de instruções Elif que quisermos, podemos dizer, Canada quando eu digo elif a, vamos dizer não igual a, vamos dizer, algo assim, então podemos imprimir, podemos apenas imprimir qualquer coisa que quisermos.

Portanto, podemos ter qualquer quantidade de instruções Elif, essa é a sintaxe básica e usamos uma instrução if else.

Mas agora podemos tornar isso mais, podemos melhorar um pouco.

Agora, em vez de dizer "se A é igual a true", podemos dizer "se A está ok", vamos especificar uma variável, deixe-me ver.

Boy, é true.

Deixe-me ver curto, também é true.

Então eu posso dizer se boy é true, então imprima é um menino.

Agora, como boy é true, aqui não há nada assim.

Então vamos apenas mudar isso para boy, como boy é true, então podemos dizer é um menino, podemos também fazer algo como se boy é true, ou short também é true.

Isso significa que se alguma dessas duas condições forem verdadeiras, você imprimirá é um menino ou ele é baixo.

Quando eu executo, você vê é um menino ou ele é baixo.

Então, como ambas são verdadeiras, ele imprime isso, se isso for false, ainda assim, ele dirá, se boy é true ou short é false, ainda assim vai imprimir isso.

Agora a razão porque ainda está imprimindo isso, é porque estamos usando o ou, ele vai verificar apenas uma.

Portanto, se uma dessas condições for correta, ele apenas executa isso.

Então, quando eu executo, você vê é um menino ou ele é baixo, ambos, se eu mudar isso agora para e, você verá que não imprime isso, ele imprimirá a nenhum dos dois.

Então vamos simplesmente remover esse else if por enquanto.

Então agora você vê que imprime a instrução else a nenhum dos dois.

E isso porque estamos utilizando e, ele tem que verificar se essas duas condições são corretas.

Então, se uma delas não for correta, ele apenas vai para a próxima instrução e pula aquela instrução.

Então essa é a diferença entre ou e e.

Então agora que entendemos os conceitos, o conceito básico da instrução if else e Elif, vamos seguir em frente e fazer alguns exercícios simples.

Agora, digamos que queremos usar a instrução if else para verificar o tipo de dados.

E dizer ao usuário, ok, esse tipo de dados é, digamos uma string, ou é uma lista, algo assim.

Agora, primeiramente, vamos pedir ao usuário para inserir algo.

Então vamos dizer que o valor deve ser input.

E então diremos ao usuário para inserir um valor.

Agora, uma vez que o usuário insira um valor, vamos verificar o valor e dizer ao usuário que "oh, esse é o seu valor".

Então podemos usar uma instrução if para isso.

Então queremos verificar se a instrução é uma string.

Portanto, podemos dizer se type.

Vamos apenas imprimir o valor, o valor é uma string.

Bem, vamos adicionar um Elif.

Vamos dizer que queremos verificar se o tipo é um inteiro.

tipo de valor é um int faz um inteiro, vamos imprimir valor é um inteiro.

E então também queremos verificar se é uma lista, para dizer um Elif. Se o tipo de valor for uma lista, faremos print Veja, valor é uma lista.

Caso não seja nenhum desses, apenas dizemos que não sabemos.

Então, bem aqui, eu queria adicionar isso, mas obviamente ele diz, Python diz que eu fechei isso.

Então, para mim adicionar esses códigos de calendário lá, eu tenho que usar a barra invertida.

Então agora, uma vez que eu uso a barra invertida, isso vai ser impresso junto.

Então agora podemos dizer que não sabemos a data, eu tenho as medidas ou qualquer que seja o valor que eles usem.

Agora, deixe-me apenas fechar isso rapidamente.

E então vamos testar isso.

Agora nós inserimos o valor, deixe-me inserir seis, isso seis é uma string, isso é agradável para você.

Agora, a razão pela qual isso é uma string, porque qualquer coisa que inserimos é automaticamente considerada uma string.

Agora, se queremos obter isso como, digamos, um inteiro, temos que digitar int, temos que convertê-lo para inteiro.

Então este tipo de exercício só funciona para string.

Portanto, agora estamos mudando o nome deste exercício para verificar se é uma string apenas.

Então, o que queremos fazer é cancelar isso, não estamos verificando idade ou lista ou qualquer outro tipo de dado, estamos apenas verificando se é uma string.

E isso porque Python automaticamente vê isso como uma string.

E temos que convertê-lo para um inteiro, se eu não quiser saber se é um inteiro.

Então, podemos também ir mais longe para verificar com um inteiro usando alguma instrução if complexa, ou algum regex que geralmente não precisamos nos preocupar por enquanto.

Mas por enquanto, vamos nos ater a este exercício básico.

Então estamos verificando se é uma string.

Então, se a string quem diz que a string não é para dizer, não é uma estranheza.

Então, apenas trazemos tudo isso para o topo.

Então bem aqui é onde deve ser se um espaço e aí executamos isso novamente.

Agora quando eu imprimo o valor agora, e eu digo, eu sei que você pode ver que acho que isso é uma string.

Então é basicamente assim que se faz, sabe, fazer isso.

Mas se quisermos, como mudar ou salvar e dizer inteiro.

Então agora qualquer coisa que inserirmos é automaticamente vista como um inteiro.

Então automaticamente dirá que o valor não é uma string.

Então, mesmo se eu inserir seis.

Agora eu digo, Conoco cortado, não é uma string.

Então isso é simplesmente porque temos que converter isso para string antes de concatenar.

Ou, deixe-me mostrar uma maneira melhor de fazer isso.

Como estamos lidando com um.

Em vez de usar mais aqui, posso apenas usar uma vírgula.

Então, quando eu executar isso novamente, eu insiro um inteiro, ele diz que sete não é uma string.

Então agora o segundo exercício que vamos fazer é verificar se um número é divisível por cinco.

Então sabemos que temos números, múltiplos de cinco, ou algo assim, o que significa que os números pelos quais cinco podem ser divididos. Então temos o próprio cinco, temos 10, 15, 20, onde se eu der, por exemplo, 17, queremos que ele nos informe que 17 não pode ser dividido por cinco, algo assim.

Então, vamos obter automaticamente uma entrada, primeiro de tudo, e garantir que seja um inteiro.

Então vamos dizer, insira um número.

E então veremos se há apenas um gay, o que queremos ver agora é que se o valor... então o que isso está fazendo é adicionar valor é basicamente o número que o usuário inseriu.

E então este sinal de porcentagem significa o resto.

Então vamos dizer se o usuário inserir 20, então 20 dividido por cinco é quatro, então o resto é zero.

Então quando fazemos algo como 20, 25 em Python, isso significa nos dar o resto.

Primeiro de tudo, deixe-me apenas cortar isso.

E deixe-me mostrar o que isso faz.

Então, se eu disser print 20 porcentagem 5, agora você verá que vai imprimir zero, vai imprimir o resto dessa divisão.

Quando eu disser print 22, deve imprimir para mim dois, porque 22 dividido por cinco é quatro, então o resto deve ser dois.

Não é certo? Então, só precisamos trazer isso de volta rapidamente.

Agora estamos dizendo que se o valor porcentagem cinco, isso significa que se o resto é igual a zero, então obviamente, isso significa que o valor pode ser dividido por cinco, senão o valor não pode ser dividido por cinco.

Então, como estamos usando um inteiro, vamos adicionar uma vírgula aqui, assim.

Então isso deve funcionar.

Agora ele nos dá um número, digamos 100, agora ele diz que 100 pode ser dividido por cinco.

Vamos executar isso novamente e dar um número que não pode ser dividido por cinco, como 106.

Ele diz que 106 não pode ser dividido por cinco.

Então é assim que se constrói um programa básico para verificar se um número pode ser dividido por cinco.

Agora, o último exercício que vamos fazer em instrução FL será o exercício para verificar se o comprimento de uma frase é menor que 10.

Então, novamente, vamos coletar um valor, mas desta vez, deve ser uma string, porque será uma frase.

Agora, queremos verificar se o comprimento dessa frase é menor que 10.

Então, se o comprimento da frase for menor que 10, diremos que o valor é menor que 10.

Caso contrário, o valor é maior que 10.

Então, vamos digitar coisas aleatórias como, meu nome é.

Agora, isso é obviamente mais que 10.

Eu pressiono enter, ele diz não suportado entre instâncias.

Agora, sempre que estivermos usando "menor ou igual a", tem que ser, basicamente, um inteiro, não podemos fazer "menor ou igual a" para uma string.

Quais são outras formas de fazer isso? Vamos falar sobre assentos.

Poderíamos ter resolvido isso agora.

Mas estou deixando isso para o tutorial, porque não quero pular alguns passos.

Portanto, em qualquer tutorial, vamos voltar a este exercício e vou mostrar como fazer isso com strings.

Mas, por enquanto, vou abordar o conceito do uso de uma declaração else.

Então, antes de continuarmos com mais conceitos em Python, queremos apenas fazer um programa Python simples que verifica se um número dado é par ou ímpar.

Como sabemos, um número par é aquele que pode ser dividido por dois, um número ímpar é o que sobra.

Então isso não deve levar mais de dois minutos para fazer.

Vou apenas chamar uma entrada do usuário e nomeá-la como "number" (número). Vamos dizer "input" (entrada) e depois queremos garantir que seja um inteiro.

Então, vamos dizer "if number % 2 == 0", então obviamente, este é um número par.

O que isso está fazendo é que se o resto da divisão de "number" por dois for igual a zero, então é um número par.

Senão,

Vamos apenas dizer, número ímpar.

Agora, quando executarmos isso, inserimos o valor, por exemplo, 6.

Agora, como este é um número par, executamos novamente e o número 767 é ímpar.

Então, também vamos fazer um exercício simples

como esse usando statements if em Python.

Neste tutorial, vamos falar sobre dicionários em Python.

Os dicionários são usados para armazenar valores de dados em pares de chave e valor.

Então, dicionários também são um tipo de dado, assim como listas e strings.

O dicionário também é um tipo de dado.

Mas este dicionário armazena o valor em um par de chave e valor.

Então, assim como um dicionário principal, como um dicionário de inglês, onde temos a palavra como a chave e o valor como o significado dessa palavra, é basicamente assim que funciona nosso dicionário.

Agora, os dicionários são mutáveis, o que significa que você pode modificá-los mesmo após configurá-los.

Mas eles não permitem duplicatas, diferentemente das listas ou tuples, nas quais você pode digitar um valor mais de uma vez, no dicionário você não pode fazer isso.

Então, deixe-me mostrar como escrever um dicionário em Python.

Vou apenas nomear este dicionário, "my_dict" (meu dicionário). Como escrever um dicionário, vamos usar essas chaves, e então vamos dar a chave.

Então, a chave pode ser algo como, "name" (nome), e então vou usar esse dois-pontos.

E então o valor pode ser, digamos, "Tim".

E então vou colocar a vírgula, posso ter outra chave e valor, vamos dizer, "age" (idade).

Ah não, vamos dizer algo como "nationality" (nacionalidade).

Posso dizer algo como "African" ou algo assim.

E então vamos apenas ter esses dois.

Deixe-me adicionar mais um.

Vou dizer "qualification" (qualificação).

Vamos dizer "college degree" (diploma universitário) ou algo assim.

Então, este é um dicionário básico em Python.

Agora, vamos começar com o básico apenas imprimindo este dicionário na nossa tela.

Vamos apenas imprimir "my_dict".

Agora, uma vez que imprimimos isso, você verá que ele apenas nos dá o nome do dicionário como agora "name" Tim, "nationality" Africano, "qualification" diploma universitário.

Mas, digamos que queremos imprimir apenas o valor deste "name".

Então, isso é o valor e esta é a chave atribuída a este valor.

Isso significa que se quisermos obter este valor, precisamos procurar por esta chave.

Como quando você vai online e procura o significado de uma palavra ou de qualquer coisa.

Então, por exemplo, "meaning of order" (significado de ordem), então "order" (ordem) é a chave, e o valor que você está procurando é a definição.

Então, nosso dicionário funciona de forma muito semelhante ao dicionário normal de palavras.

Agora, para obter o valor deste "name", podemos simplesmente usar colchetes após o "d" em "my_dict" e inserir "name".

Então, o que isso vai imprimir para nós é "Tim" bem aqui, você pode ver "Tim", que é o valor deste "name".

Agora, há outras coisas que podemos fazer, como eu disse, duplicatas não são permitidas no dicionário.

Então, digamos que eu tenha dois nomes.

E o outro é "John".

Agora, quando eu tento imprimir isso, você verá que ele imprime apenas o segundo, o mais recente, automaticamente substituindo o primeiro.

Isso é o que quero dizer com duplicata não permitida em dicionários, não podemos ter duas chaves com o mesmo nome, mas podemos ter dois valores com o mesmo nome.

O que quero dizer com isso é: esta é a chave, este é o valor.

Então, duas chaves, não podemos ter com o mesmo nome, mas podemos ter dois valores.

Vamos dizer que isto seja "name2".

E o valor de "name2" ainda pode ser "Tim".

Agora, se eu imprimir isso, você verá "name" Tim, "name2" Tim.

Então, os valores podem ser repetidos, mas a chave atribuída não pode ser repetida, não pode ser duplicada.

Agora, digamos que queremos obter o comprimento disso, é muito fácil, basta usar "len".

Assim, uma vez que imprimimos, ele nos diz quatro, porque temos quatro pares de chave e valor aqui.

E então também podemos misturar tipos de dados.

Agora você sabe que... deixe-me apenas remover isso, você sabe que este "name", o valor atribuído a ele é uma string, o valor atribuído a "nationality" também é uma string, e o valor atribuído a "qualification" também é uma string.

```
Agora, normalmente, escreveremos um inteiro sem as aspas que vamos usar lá.

E então, uma vez que imprimimos, ainda podemos continuar e imprimir.

Ah, vai imprimir em telefones celulares sem problema.

Podemos ver bem aqui, em sete, também podemos adicionar um Booleano, podemos dizer se é alto.

Então ainda pode ser verdade.

E então, uma vez que imprimimos a idade, quero dizer, uma vez que imprimimos meu dicionário.

Então você vê que imprime verdadeiro.

Então nos diz que ok, esta pessoa é alta.

Então podemos adicionar diferentes tipos de dados.

E o que é muito legal é que também podemos adicionar uma lista, então podemos listar os amigos dele.

Então o tipo de dado pode ser uma lista assim, para que possamos ver, um dos amigos dele é o Peter.

Podemos dizer Paulo, podemos ver precioso e estranho, então a luz quer imprimir amigos.

Apenas vai imprimir aqueles pelo menos.

Ok, bem aqui, diz erro de sintaxe inválida.

E isso será porque esquecemos de adicionar uma vírgula bem aqui.

Então devemos garantir adicionar uma vírgula antes de adicionar outro valor.

Então, uma vez que clicamos em enter, você vê que nos dá Pedro, Paulo e precioso.

Então agora vamos apenas trazer o dicionário inteiro sem nada anexado.

Agora descemos aqui, vemos que imprime tudo nome do time em tudo o que precisamos saber sobre aquele dicionário.

E então, para verificar se isso é um dicionário, também podemos usar o tipo.

Então também, apenas coloque tipo aqui vai imprimir dicionário para nós.

Então você pode ver à direita, sim, esta classe é dict, o que significa que isto é um dicionário.

Então nós também podemos tornar isso mais divertido.

Especificando uma variável, digamos que temos uma variável chamada x.

E queremos que essa variável seja igual a um dos valores disso.

Então podemos simplesmente dizer, X pode ser simplesmente igual a mod.

Meu D.

Nome.

Então x agora é nome.

Agora, uma vez que você imprime x, obviamente ele imprime o nome.

Agora, essas são funções e métodos de dicionário ocupados.

Então espero que você entenda o conceito de dicionário em Python.

Este tutorial, vamos falar sobre o laço while em Python.

Então o laço while é um recurso do Python, que permite percorrer um bloco de código, enquanto uma certa condição é verdadeira.

Então digamos que você tem uma condição como se um número for maior que 10, então deve apenas percorrer um monte de código abaixo.

Então é como uma função com uma instrução if ou algo assim.

Então estamos dando uma condição que está sob a idade, temos um monte de código que queremos percorrer.

Então deixe-me apenas mostrar como usar um laço while em Python.

Então, primeiro de tudo, podemos especificar uma variável chamada I e dizer que é igual a um.

E agora para usar um laço while podemos dizer enquanto.

Um é ainda menos que seis.

Então esta é uma condição que estamos dizendo enquanto um for menor que seis.

Então queremos apenas imprimir I quero dizer, enquanto i for menor que seis, não um, isso foi muito bom.

Isso ainda é um que queremos imprimir, I e então queremos apenas incrementar i por um. Então podemos ver i igual a, i mais um.

Então isso vai apenas executar este laço while, enquanto um for i, for menor que seis, vai apenas imprimir na tela, e então vai aumentar por um, depois executar de novo, executar de novo, até ter certeza de que não ultrapassa seis, não atinge seis.

Então você também pode incrementar isso digitando, i mais igual a um, a mesma coisa, qualquer um funcionará.

Agora, quando executamos isso, você vê agora é 12345.

Então, o que aconteceu foi que ele passou por este bloco de código.

Então dissemos enquanto i for menor que seis, então isso significa que ele deve passar por este bloco de código que imprimiu I, então depois disso incrementamos, ali, agora i é igual a dois ainda é menor que seis.

É por isso que temos dois, então fez a mesma coisa.

incrementou, temos 345.

Mas depois de cinco, fez a mesma coisa.

incrementei por um, mas agora i é igual a seis.

Então, porque essa condição é realmente falsa, não é mais menor que seis então o laço while para, é como ser cortado de um certo modo desse laço while.

Então basicamente isso que é sobre o laço while, é muito importante no Python, há muitos programas em Python, que você quer construir que precisará usar um laço while para percorrer diferentes coisas com uma condição.

E então você também pode fazer mais coisas como e enquanto i for menor que seis, ou i é igual a seis, algo assim.

Então agora você sabe que quando executamos isso, deve imprimir 123456.

Porque não é mais apenas quando y é menor que c, então quando é igual a c.

Então agora nos dá um erro, porque ao escrever equals two em Python, tem que ser duplo.

Então vamos executá-lo novamente.

Então agora você vê 123456.

Então o laço while em Python percorre um bloco de código enquanto uma certa condição é verdadeira.

Então porque isso é verdadeiro, uma dessas é verdadeira.

Ele apenas imprime I aumenta por seis volta faz o looping faz esse código novamente, aumenta por seis volta, e então certifica-se de que chega a seis.

Agora vai.

Então diga i igual a 10.

Uma vez que eu executar isso ele nos dá 12345.

Então se dissermos e e agora executamos isso, não nos dá nada.

Então, às vezes um laço while.

Eu coloco isso em condições de laço while que não são semelhantes à instrução if, você sabe, quando você diz onde podemos fazer Eva é menor que seis e é isso, então deve fazer uma determinada coisa.
```

Então a razão pela qual isso não funcionou é porque inicialmente i é menor que seis.

Então isso é você desenhado, mas diremos que é igual a 10.

Mas sabemos que i aqui não é igual a 10.

Então, se eu mudar isso para 10.

Ainda assim não vai funcionar.

E a razão pela qual não vai funcionar é que uma dessas condições não está correta.

Então i não é menor que seis porque 10 não é menos do que dizemos que é menor que 16.

Agora, então podemos executar, eu acho ver que imprime algo agora.

Então por que ele e tudo na condição? Onde ele está? Ah, contanto que uma das condições seja verdadeira, então aquele laço while executará ambos os caminhos.

E as duas condições devem ser verdadeiras antes desse laço while funcionar, então agora não se preocupe com o and e agora vamos mudar para uma menor, mudando para 10.

Então agora quando executamos isso, devemos obter 129, deixe-me apenas expandir aqui para ver que temos 123456789, agora isso é basicamente o conceito básico do laço while em Python.

Neste tutorial vamos falar sobre laços for em Python.

Então, siga essas instruções para iterar sobre uma sequência.

Agora, isso significa que é usado para percorrer uma sequência.

E essa sequência pode ser uma lista, uma tupla ou dicionário, até mesmo uma string, um intervalo de números, pode ser qualquer coisa que seja uma lista.

Agora usamos o laço for para percorrê-las.

Agora, um laço for é bastante usado em Python, na verdade, porque na maioria das vezes temos listas de dados, temos grandes quantidades de dados, agora o laço for é usado, novamente, o laço for é usado para percorrer cada quantidade de dados, cada valor nesses dados.

Então deixe-me apenas mostrar como fazemos um laço for, ou chamamos o laço for em Python, é muito fácil.

Agora para você digitar um laço for, a primeira coisa que você precisa fazer é digitar esta palavra-chave for, F O R.

Agora, essa palavra-chave mostra que queremos percorrer alguma coisa.

Então podemos ver quatro letras em quatro letras, por exemplo, "hello".

Agora isso é para cada letra em "hello", que é h e l l o, nós apenas queremos imprimir uma letra.

Agora quando eu executar isso, você verá a experiência de separar, traz tudo separado.

Então está percorrendo cada letra na string "hello", como iterar através da sequência.

Agora também podemos fazer isso tendo uma lista.

Agora você pode ver minha lista, eu ajustaria esta lista para qualquer coisa, por exemplo: c, gi, j, Yu Gi Oh, agora podemos percorrer isso e dizer: "para", digamos, "x".

Agora observe que isso pode ser qualquer coisa, deixe-me apenas isso, que eu coloquei "letter", pode ser denotado por qualquer coisa.

Quando comecei com Python, eu estava meio confuso com esses laços for, simplesmente por causa dessa letra.

Então eu pensei que, já que estávamos usando "hello", e cada uma era chamada de caractere, cada uma é chamada de letra, então pensei que tínhamos que usar "letter" para cada uma.

Mas agora só quero esclarecer isso para que ninguém precise passar por essa confusão.

Então isso pode ser denotado por qualquer coisa.

Se eu disser "para x em hello", e eu apenas disser "print x", vai fazer exatamente a mesma coisa.

Se eu disser "para gi" ou "para qualquer coisa que eu fizer", pode ser denotado por qualquer coisa.

Agora deixe-me apenas, então agora só quero dizer "para valores" ou "para valores" será melhor "para valores nesta minha lista".

Então vou remover a string como em minha lista.

Agora só quero imprimir ambos os valores.

Agora, uma vez que eu pressionar executar, você verá que imprime tudo: gi, j, Yu Gi Oh, que é gi, j, Yu e j.

Então isso é basicamente como apenas percorrer uma lista.

Agora você pode percorrer qualquer coisa, na verdade, você pode percorrer um dicionário, então vamos apenas ter um dicionário simples.

E então, digamos que temos chaves e valores.

Name: John, Age: 10, então vou deixar apenas esses dois.

Agora você pode ver "para valores no meu dict", imprimir valores.

Agora, à medida que eu executo isso, você verá que diz "Name", "Age".

Então, basicamente, imprime esses dois que temos: "Name" e "Age".

Então isso é iterar sobre uma lista de valores.

E então no laço for, também há algo que chamamos de break.

Agora vamos voltar para nossa lista.

Sim, então agora nós ainda temos isso ou pelo menos eu diria "para valores em minha lista, imprimir valores", mas eu agora posso dizer "se valores forem iguais a Yu Gi Oh, então eu quero que você quebre".

Então o que isso vai fazer é percorrer um por um, vai de gi para j, então vai para Yu Gi Oh.

Então, uma vez que chegue a este Yu Gi Oh, deve quebrar, então deve parar esse laço.

Assim que eu executar isso, você verá Okay, bem aqui deveria ser duplo.

Assim que eu executar isso, você verá apenas gi, j e Yu.

Agora, por que isso acontece? Eu disse que deveria continuar percorrendo e imprimindo todos os valores, mas uma vez que chegue a esse valor que é igual a Yu Gi Oh, uma vez que ele chegar a Yu Gi Oh, então quebra, quebra significa parar o laço.

Então, é por isso que uma vez que ele chega a Yu, ele para, não temos Yu Gi Oh aqui.

Agora, também podemos, em vez de ter o break aqui, eu posso fazer algo assim.

Então, mesmo antes de imprimir valores, posso ter minha instrução if.

E posso dizer, "para valor em valores, se o valor for igual a Yu Gi Oh, eu posso dizer break".

E depois desse break, eu posso imprimir valores.

Então se você não entendeu até agora, a diferença é que se o valor for valor, então está percorrendo esses valores.

Você sabe, da última vez, ele primeiro imprimiu o valor, se como Peter é Jay, você antes de quebrar.

Mas agora, se o valor é J, você deve quebrar antes mesmo de imprimir.

Então vai adivinhar que Ok, temos j você quer quebrar, então vamos imprimir, então Python executa código linha por linha primeiro executa este código e executa este, depois executa este, então assim.

Então, a primeira coisa que ele vê é que estamos verificando se o que queremos ver a seguir é j U.

E vemos que sim, é verdade, é j U.

Agora apenas quebramos, depois de quebrar, imprimimos os valores, então o único valor que quero imprimir é G porque quebramos quando chegamos a você.

Então, quando eu executo isso, você vê que eu só tenho gi, não imprimimos j au novamente.

Então é basicamente assim que se usa o break em um for loop.

Mas também podemos percorrer um intervalo de números.

Então digamos que temos 4x em range.

Por enquanto, o que eu posso fazer é apenas imprimir x.

Agora, uma vez que eu imprimo x, vai me dar uma lista de números de zero a três.

Então vai me dar um intervalo de números começando do zero até o número antes de quatro.

Então, se eu mudar para apenas 10, vai me dar de zero a nove.

Então, como você pode ver, me dá de zero a nove.

E então também podemos especificar para cada um percorrer um intervalo particular de números.

Então agora demos 2010.

Mas podemos dizer cada loop para cada loop de três a sete, ou de 10 a 70, ou qualquer quantidade.

Então, se quisermos fazer um loop de três a sete, como vamos fazer, apenas dizemos para x em range três a sete, olhar para este número.

Então, quando eu executo isso, você vê que me dá 3456, não começa do zero.

Então ele olha de três até sete.

E assim que se faz um loop por um intervalo particular de números.

E a última coisa que vou mostrar a você em um for loop é que também podemos usar a instrução else.

Então agora vamos apenas fazer um loop para um intervalo de sete.

Então depois de fazer o loop, podemos dizer else, o que esse else faz é que uma vez que esse loop estiver terminado, uma vez que terminar, podemos apenas imprimir terminou o loop.

Então agora, uma vez que eu executo isso, imprime de zero a seis e diz terminou o loop, então isso é o que a instrução else faz, é que simplesmente, primeiro termina o loop, primeiro termina a iteração sobre a sequência, e depois nos diz o que quer que esteja na instrução else.

Então esta é uma introdução aos loops for em Python.

Nesta parte, vamos falar sobre listas 2D em Python.

Então listas 2D também significam listas bidimensionais.

Então é como se tivéssemos várias listas dentro de uma variável lista.

Então agora podemos ter uma lista normal como minha lista que pode ser apenas números como 1234, ao imprimir minha lista, saberemos que vamos obter 1234, que é uma lista normal.

Mas agora queremos ter uma lista 2D, primeiro é recomendado pressionar Enter apenas para organizar a indentação, então vamos ter uma lista.

Então isso pode ser 123.

E então podemos ter outra linha, que pode ser 456, então nós temos vírgula em outra linha que pode ser 789.

Então agora esta é uma lista 2D, porque tem linhas e colunas.

Esta é obviamente uma lista dentro de uma lista.

Então é como a lista de alto nível e é como suas subseções ou algo assim.

Então agora, quando apenas imprimimos minha lista, você verá que só nos dá esta lista normal.

Mas digamos que queremos obter esse valor de um ou dois.

Então vamos obtê-lo usando o número do índice.

Então sabemos que o número índice disso é um de zero, que é o primeiro, então também queremos obter o valor de face, que seria zero.

Então, quando imprimirmos isso, você verá que temos um.

Mas digamos que queremos obter o valor de cinco.

Então sabemos que o número índice disso é um que foi o número índice cinco, também é um.

Agora, quando eu executo isso, você vê que agora eu tenho cinco.

Então isso é basicamente navegar ou obter alguns valores certos das suas listas 2D.

E então também podemos fazer um loop através disso.

Então vou apresentar a vocês os loops aninhados.

Então loops aninhados é quando você tem um loop dentro de outro loop, um for loop para ser específico quando você tem um for loop dentro de outro for loop.

Então agora, em vez de apenas imprimir, digamos apenas para algo como listas em minha lista, então inicialmente apenas imprimir minha lista.

Agora, como eu executo estas, você vê apenas imprimir minha lista, tem uma lista em minha lista, só faz um loop através disso.

Um, em vez de apenas fazer um loop através disso ou apenas imprimir isso, o que posso fazer é adicionar um outro for loop dentro, então para listas em minha lista, e depois posso dizer para talvez linha ou coluna para linha em listas.

Então agora queremos imprimir linha.

Então, quando eu executo isso, nos dá um erro porque em Python deve ter indentação para mostrar que isso é inferior a este.

Vamos rodar novamente.

Agora você vê que diz tipo objeto não é iterável.

Então para linha em listas, deve ter certeza de que tudo está correto.

Então eu coloco a lista, mas o nome disso são listas.

Então depois disso, agora quando eu executo isso novamente, você vê que me dá deixe-me apenas abrir isso.

Você vê que me dá de um a nove, que é cada coisa única via 1234 até nove.

Então é assim que os loops aninhados funcionam.

Então é como fazer um loop dentro de um loop já existente.

Então um loop dentro de um loop.

Mas eu não tentei isso antes.

Mas eu acho que nós também podemos ter outro loop novamente para fazer outro algo como sim, sim.



Então, espero que você tenha entendido os conceitos básicos de Sudhi, pelo menos sobre loops aninhados.

Nessa parte do tutorial, vamos falar sobre comentários em Python.

Comentários são usados para evitar que um código específico ou bloco de código seja executado com seu programa atual.

Vamos ver, temos o print.

Olá.

E então, também temos print um.

Agora, quando eu executar isso, você verá que imprime olá um.

Agora, se eu comentar e colocar um sinal de hash, bem ao lado, assim, veja que isso fica em cinza, não faz mais parte do nosso código, ainda está lá.

Mas quando eu executar, ele não será executado com nosso código, apenas o print será executado.

Então, é para isso que servem os comentários, principalmente em Python, comentários em programação em geral, são úteis para explicar nosso código ou úteis para fazer anotações no nosso código, tornando-o mais legível.

Em Python, você também pode simplesmente adicionar um comentário, digamos que você só queira testar rapidamente seu código sem um bloco de código específico, você também pode usar comentários.

Então você também pode adicionar comentários no final.

Como você pode ver, hashtag essa linha imprime olá.

Então você pode usá-lo para explicar seu código.

Ou você pode apenas usá-lo para bloquear o código de ser executado.

E como você viu, se você quiser comentar mais de uma linha, pode colocar hashtag nesta linha e na segunda linha, então tudo será comentado.

Mas também há uma maneira melhor de fazer isso em Python, você pode simplesmente adicionar, digamos que você tem um bloco de código, ou tem uma função, como minha função.

E então essa função apenas imprime.

Oi, agora digamos que você queira comentar essa função específica.

O que você vai fazer é, acima da função, adicionar três aspas duplas, assim.

E como você pode ver, ele automaticamente comenta todo o seu código.

Então, se executarmos isso agora, nada será executado.

Diz que temos um erro de sintaxe e coisas assim.

Então, temos que fechar esses comentários colocando essas três aspas de volta lá, queremos fechar, então queremos fechar no início desta função até o final.

Agora, quando executarmos isso, veremos que o print olá e print um serão executados.

Agora, quando tentamos executar isso, vendo meu cachecol.

Você vê, vai nos dar um erro.

Diz erro de nome não definido, agora significa que ele nem vê esta parte do código que definimos a função quando tentamos executá-la, não funciona.

Então, é para isso que servem os comentários em Python, principalmente duas coisas úteis: remover o código ou apenas tomar notas ou tornar seu código mais legível.

Neste tutorial, vamos construir uma calculadora básica usando Python.

Então, vamos usar todas as habilidades e tudo que aprendemos nas sessões anteriores, vamos juntá-las e construir uma calculadora simples.

Então agora o que queremos fazer é ter três entradas, coletar três entradas de um usuário, que são o primeiro número, o segundo número e o operador.

Então a calculadora será muito básica: apenas uma que vai somar, subtrair, dividir e multiplicar dois números juntos.

Então queremos coletar um número, que será o número um, e o segundo número, que será o número dois, e o operador, o operador é se você quer somar ou subtrair, ou o que você quiser fazer.

Então, vamos definir isso, dizendo que num1 deve ser igual a input.

Podemos dizer insira o primeiro número.

E então faremos o mesmo.

Vou dizer num2 input insira o segundo número.

E então, vamos ver op, que é o operador input, e, operador.

Então, agora que temos as três entradas, queremos usar uma instrução if, então o que vai acontecer é que se o op, que é o seu operador, for igual a adição.

Agora, queremos basicamente somar o primeiro número e o segundo número, então vamos usar um Elif para pegar a subtração, seja o que for, então vamos fazer de acordo com o operador que o usuário inputou.

Então, digamos que se o op for igual a mais.

Então, é igual a fechar, apenas imprimiremos o número um mais o número dois. Então vamos testar isso.

Então, aqui, deixe-me dizer dois, três.

E eu quero somar, e diz 23, o que está muito errado, dois mais três deveria ser cinco.

Agora, a razão pela qual diz 23 é porque ele ainda vê isso como uma string.

Se eu passar o mouse, verá que é uma string, mas deve ser um inteiro.

Então, porque é uma string, ele está apenas concatenando, mas queremos que seja um inteiro, para que possa realizar a operação normal.

Então, temos que dizer, int num1, int num2, int num3, int num4, int num5, int num6, int num7, int num8, int num9, int num10, int num11, int num12, int num13, int num14, int num15, int num16, int num17, int num18, int num19, int num20, int num21, int num22, int num23, int num24, int num25, int num26, int num27, int num28, int num29, int num30, int num31, int num32, int num33, int num34, int num35, int num36, int num37, int num38, int num39, int num40, int num41, int num42, int num43, int num44, int num45, int num46, int num47, int num48, int num49, int num50, int num51, int num52, int num53, int num54, int num55, int num56, int num57, int num58, int num59, int num60, int num61, int num62, int num63, int num64, int num65, int num66, int num67, int num68, int num69, int num70, int num71, int num72, int num73, int num74, int num75, int num76, int num77, int num78, int num79, int num80, int num81, int num82, int num83, int num84, int num85, int num86, int num87, int num88, int num89, int num90, int num91, int num92, int num93, int num94, int num95, int num96, int num97, int num98, int num99, int num100, int num101, int num102, int num103, int num104, int num105, int num106, int num107, int num108, int num109, int num110, int num111, int num112, int num113, int num114, int num115, int num116, int num117, int num118, int num119, int num120, int num121, int num122, int num123, int num124, int num125, int num126, int num127, int num128, int num129, int num130, int num131, int num132, int num133, int num134, int num135, int num136, int num137, int num138, int num139, int num140, int num141, int num142, int num143, int num144, int num145, int num146, int num147, int num148, int num149, int num150, int num151, int num152, int num153, int num154, int num155, int num156, int num157, int num158, int num159, int num160, int num161, int num162, int num163, int num164, int num165, int num166, int num167, int num168, int num169, int num170, int num171, int num172, int num173, int num174, int num175, int num176, int num177, int num178, int num179, int num180, int num181, int num182, int num183, int num184, int num185, int num186, int num187, int num188, int num189, int num190, int num191, int num192, int num193, int num194, int num195, int num196, int num197, int num198, int num199, int num200, int num201, int num202, int num203, int num204, int num205, int num206, int num207, int num208, int num209, int num210, int num211, int num212, int num213, int num214, int num215, int num216, int num217, int num218, int num219, int num220, int num221, int num222, int num223, int num224, int num225, int num226, int num227, int num228, int num229, int num230, int num231, int num232, int num233, int num234, int num235, int num236, int num237, int num238, int num239, int num240, int num241, int num242, int num243, int num244, int num245, int num246, int num247, int num248, int num249, int num250, int num251, int num252, int num253, int num254, int num255, int num256, int num257, int num258, int num259, int num260, int num261, int num262, int num263, int num264, int num265, int num266, int num267, int num268, int num269, int num270, int num271, int num272, int num273, int num274, int num275, int num276, int num277, int num278, int num279, int num280, int num281, int num282, int num283, int num284, int num285, int num286, int num287, int num288, int num289, int num290, int num291, int num292, int num293, int num294, int num295, int num296, int num297, int num298, int num299, int num300, int num301, int num302, int num303, int num304, int num305, int num306, int num307, int num308, int num309, int num310, int num311, int num312, int num313, int num314, int num315, int num316, int num317, int num318, int num319, int num320, int num321, int num322, int num323, int num324, int num325, int num326, int num327, int num328, int num329, int num330, int num331, int num332, int num333, int num334, int num335, int num336, int num337, int num338, int num339, int num340, int num341, int num342, int num343, int num344, int num345, int num346, int num347, int num348, int num349, int num350, int num351, int num352, int num353, int num354, int num355, int num356, int num357, int num358, int num359, int num360, int num361, int num362, int num363, int num364, int num365, int num366, int num367, int num368, int num369, int num370, int num371, int num372, int num373, int num374, int num375, int num376, int num377, int num378, int num379, int num380, int num381, int num382, int num383, int num384, int num385, int num386, int num387, int num388, int num389, int num390, int num391, int num392, int num393, int num394, int num395, int num396, int num397, int num398, int num399, int num400, int num401, int num402, int num403, int num404, int num405, int num406, int num407, int num408, int num409, int num410, int num411, int num412, int num413, int num414, int num415, int num416, int num417, int num418, int num419, int num420, int num421, int num422, int num423, int num424, int num425, int num426, int num427, int num428, int num429, int num430, int num431, int num432, int num433, int num434, int num435, int num436, int num437, int num438, int num439, int num440, int num441, int num442, int num443, int num444, int num445, int num446, int num447, int num448, int num449, int num450, int num451, int num452, int num453, int num454, int num455, int num456, int num457, int num458, int num459, int num460, int num461, int num462, int num463, int num464, int num465, int num466, int num467, int num468, int num469, int num470, int num471, int num472, int num473, int num474, int num475, int num476, int num477, int num478, int num479, int num480, int num481, int num482, int num483, int num484, int num485, int num486, int num487, int num488, int num489, int num490, int num491, int num492, int num493, int num494, int num495, int num496, int num497, int num498, int num499, int num500, int num501, int num502, int num503, int num504, int num505, int num506, int num507, int num508, int num509, int num510, int num511, int num512, int num513, int num514, int num515, int num516, int num517, int num518, int num519, int num520, int num521, int num522, int num523, int num524, int num525, int num526, int num527, int num528, int num529, int num530, int num531, int num532, int num533, int num534, int num535, int num536, int num537, int num538, int num539, int num540, int num541, int num542, int num543, int num544, int num545, int num546, int num547, int num548, int num549, int num550, int num551, int num552, int num553, int num554, int num555, int num556, int num557, int num558, int num559, int num560, int num561, int num562, int num563, int num564, int num565, int num566, int num567, int num568, int num569, int num570, int num571, int num572, int num573, int num574, int num575, int num576, int num577, int num578, int num579, int num580, int num581, int num582, int num583, int num584, int num585, int num586, int num587, int num588, int num589, int num590, int num591, int num592, int num593, int num594, int num595, int num596, int num597, int num598, int num599, int num600, int num601, int num602, int num603, int num604, int num605, int num606, int num607, int num608, int num609, int num610, int num611, int num612, int num613, int num614, int num615, int num616, int num617, int num618, int num619, int num620, int num621, int num622, int num623, int num624, int num625, int num626, int num627, int num628, int num629, int num630, int num631, int num632, int num633, int num634, int num635, int num636, int num637, int num638, int num639, int num640, int num641, int num642, int num643, int num644, int num645, int num646, int num647, int num648, int num649, int num650, int num651, int num652, int num653, int num654, int num655, int num656, int num657, int num658, int num659, int num660, int num661, int num662, int num663, int num664, int num665, int num666, int num667, int num668, int num669, int num670, int num671, int num672, int num673, int num674, int num675, int num676, int num677, int num678, int num679, int num680, int num681, int num682, int num683, int num684, int num685, int num686, int num687, int num688, int num689, int num690, int num691, int num692, int num693, int num694, int num695, int num696, int num697, int num698, int num699, int num700, int num701, int num702, int num703, int num704, int num705, int num706, int num707, int num708, int num709, int num710, int num711, int num712, int num713, int num714, int num715, int num716, int num717, int num718, int num719, int num720, int num721, int num722, int num723, int num724, int num725, int num726, int num727, int num728, int num729, int num730, int num731, int num732, int num733, int num734, int num735, int num736, int num737, int num738, int num739, int num740, int num741, int num742, int num743, int num744, int num745, int num746, int num747, int num748, int num749, int num750, int num751, int num752, int num753, int num754, int num755, int num756, int num757, int num758, int num759, int num760, int num761, int num762, int num763, int num764, int num765, int num766, int num767, int num768, int num769, int num770, int num771, int num772, int num773, int num774, int num775, int num776, int

Então o que podemos fazer agora é apenas colocar uma vírgula, bem aqui, para que possamos apenas cobrir.

Então vamos testar.

Se eu vejo 17 e 20, eu simplesmente subtraio e o resultado da subtração é 50, o que é bom.

E então vamos fazer a mesma coisa para multiplicação.

Então, apenas dizemos que a multiplicação é número um, vezes número dois.

Então essa é a aritmética básica para multiplicação.

E então vamos fazer exatamente a mesma coisa para divisão.

Então, se for igual a dividir, apenas imprimimos que a divisão é número um dividido pelo número dois.

Então agora isso deve funcionar.

Agora, quando eu executo, e digo 60 e 20, e quero dividir, você vê, me dá a divisão que é 3.0.

E se eu fizer algo como os valores absolutos desses? Oh, não.

Então, valores absolutos desses, deixe-me executar novamente.

Agora, se eu digo 60 e 20.

Eu coloco dividir.

Ok, então você me deu três pontos.

Eu estava esperando que você me desse três.

Mas vamos contornar isso.

Então, isso é como construir uma calculadora básica usando Python obtendo entradas do usuário e, em seguida, usando a instrução if.

Instrução if e elif.

Então vamos adicionar mais uma coisa.

Então, se o usuário não inserir mais, menos, vezes ou dividir, o que queremos apenas dizer ao usuário que o operador é inválido.

Então vamos testar isso executando.

Como usuário, digo sessenta.

Ou noventa desta vez em sete, e você vai fazer algo como um sinal de dólar.

Ele diz operador inválido.

Mas agora vamos executá-lo novamente e testar desde o início.

Então vamos testar a adição noventa e vinte.

A adição nos mostra cento e dez.

Agora vamos testar a subtração.

Temos cinquenta, temos setenta. Então, testando, ele me dá menos vinte, que é a resposta correta. Agora, vamos testar a multiplicação quarenta, temos quatro.

E então temos multiplicação.

Agora ele diz cento e sessenta, o que é correto.

E para a divisão também, temos oitenta, temos cinco, temos divisão, dando dezesseis ponto zero, agora tudo está funcionando bem.

Então eu espero que você tenha entendido o que fizemos construindo esta calculadora básica.

Neste tutorial, vamos falar sobre tentar capturar exceções no Python.

O que isso faz é prevenir um erro.

Então, na maioria das vezes em que estamos trabalhando em Python, você pode obter muitos erros, você pode fazer algumas coisas e o programa lançar um erro ou exceção.

Então, na maioria das vezes, esse erro simplesmente para o nosso programa, interrompe nosso programa, se nosso programa está rodando durante uma tarefa específica, uma vez que um erro aparece, o programa é interrompido.

Para prevenir isso, usamos o método try-except.

Agora isso vai capturar automaticamente um erro, e então apenas imprimir o que quisermos dizer ao usuário.

Agora, por exemplo, você sabe, quando queremos fazer uma adição, queremos que o usuário insira um número inteiro.

Mas digamos que o usuário insira um valor booleano ou string ou algo mais.

Então, ao invés de o Python lançar um erro ou uma exceção, podemos automaticamente dizer ao usuário que a entrada não é válida que isso não é uma string ou algo assim.

Então deixe-me mostrar como fazer isso em Python.

Então agora, digamos que eu tenho x igual a input, especificamente um número inteiro, input, então dizemos, insira um número inteiro.

E então imprimimos x.

Agora quando eu executo e a entrada é um número inteiro, ele imprime x, imprime sete, o inteiro.

Agora deixem-me executar novamente, e inserir uma string.

Agora você vê que ele me dá um erro chamado ValueError, valor inválido para int.

Então está dizendo que h j k não é um número inteiro.

Então podemos capturar automaticamente este erro nós mesmos, e então, você sabe, dizer ao usuário em vez de o Python lançar esta exceção, que pode parar o nosso programa.

Então para fazer isso queremos dizer, try, assim, isso vai estar em try, e então, depois disso, vamos dizer, except, então, vamos apenas imprimir valor, não é um número inteiro.

Então este try está dizendo, tente todo este código, então se houver qualquer exceção, apenas imprima valor, não é um número inteiro, ou podemos apenas imprimir algo mais, porque não sabemos o que pode causar.

A exceção pode não ser que o usuário inseriu uma string, pode ser outra coisa.

Então vamos apenas dizer algo deu errado.

Por favor, tente novamente.

Então agora quando eu executo isso e insiro uma string, agora você vê que diz algo deu errado, por favor, tente novamente, não lançou este erro, como da última vez, então é basicamente assim que usar try-except em Python, mas é mais profundo do que isso, podemos capturar, podemos usar o método except para alguns tipos específicos de exceções.

Se eu rolar para cima, você vai ver que essa exceção que ele nos deu é chamada de ValueError.

Agora podemos dizer, exceto que existe um ValueError, então dizemos isso.

Isso que estou fazendo aqui é apenas adivinhar se há algum erro, mas vamos ser específicos.

Vamos ver se existe um ValueError.

Então agora, se existe um ValueError, um ValueError significa que o usuário inseriu o que não pedimos. Era para ser um número inteiro e inseriu outra coisa.

Então dizemos agora podemos dizer valor.

Não é um número inteiro.

Agora quando eu executo isso e insiro outra coisa.

Agora diz valor não é um número inteiro.

Está capturando apenas esse tipo de erro? Agora deixe-me tentar adicionar outro erro intencionalmente.

Aqui está a tradução do arquivo para o português, mantendo a formatação e o layout markdown do arquivo original:

---

Então, bem aqui, estou tentando concatenar com uma variável chamada nome.

Mas não tínhamos nenhuma variável assim antes.

Portanto, isso vai me dar um erro de nome.

Então, quando eu executo isso, eu classificaria.

Agora você vê, se você rolar para cima, ele me mostra o erro de nome, nome não está definido.

Então, e se eu simplesmente colocar somente exceto e eu executo, mostra-me nome não está definido.

Então, isso acontece porque estamos tentando definir algo que não é como uma variável que não é. Portanto, esse erro é nosso, pois podemos passar algo assim.

Mas agora estamos tentando passar um erro do usuário, estamos tentando garantir que o usuário não insira nada errado.

Então agora dizemos, exceto que o valor não é um inteiro.

Então, espero que você tenha entendido o conceito básico do método try except em Python.

Agora, também podemos fazer algo como essas mudanças, mas algo deu errado.

Porque veja, algo deu errado.

Agora, quando dizemos algo deu errado, após isso, podemos dizer senão.

Imprima, nada deu errado.

Agora, o que esse else está fazendo é que após digitar, após executar este código, se houver algo que deu errado, você deve fazer isso.

Mas se tudo correu bem, então você deve dizer, nada deu errado.

Agora, vamos rodar isso, ele me pergunta por um inteiro, eu quero um inteiro.

Agora ele imprime o inteiro e diz que nada deu errado.

Mas se eu rodar novamente, inserir um ruído estranho, ele diz que algo deu errado, mas não disse isso.

Então, esse else é, se tudo for bem-sucedido, se não houver erro, então ele vai dizer, nada deu errado.

Então, o último que vou mostrar chama-se Finalmente, é também uma palavra-chave.

Agora, isso vai rodar, quer haja um erro ou não.

Então eu posso apenas dizer, try except, finished.

Então, quer haja um erro ou não, isso vai imprimir finished. Se não houver erro, imprime sete e diz try finished.

Se eu rodar novamente e imprimir um string, ele diz algo deu errado, que é isso, e diz try except finished.

Então, isto está apenas dizendo que, após tudo, se há um problema ou não, apenas imprima que try except finished.

Agora, quero falar sobre leitura de arquivos em Python.

Então, às vezes, ao programar em Python, você pode querer trabalhar com alguns arquivos externos, digamos como um documento de texto, ou como uma planilha, como uma planilha do Excel, ou como um arquivo HTML ou qualquer arquivo externo.

Então você quer saber como ler e escrever nesse arquivo.

Vamos colocar isso em prática.

Primeiramente, vamos criar um novo arquivo bem aqui.

E vamos apenas nomeá-lo como algo, está sendo salvo assim e então vou salvar no mesmo lugar.

Deixe-me ver todos os arquivos.

DSR, tenho certeza de que está localizado aqui.

Primeiro, cancelamos isso e garantimos que sabemos onde isso está salvo.

Sim, se eu vier aqui, sim.

Então vejo onde está salvo.

Projeto john.

Certo.

Então agora posso criar um novo arquivo e então salvá-lo.

Então, bem aqui, posso salvá-lo como algo como países.

t x t.

Veja, já está no txt, posso mudar para todos os arquivos.

Então, nesses países, quero ter apenas uma lista de países aleatórios.

Então, posso dizer Gana.

Posso dizer México.

Posso dizer Marrocos.

Deixe-me dizer Espanha.

Não tenho nenhum erro de ortografia aqui.

Então, Gana, México, Espanha.

Sim.

Acho que está bem. Me dê mais um, veja França.

Então, acho que está bem.

Agora, para lermos este arquivo, temos que importá-lo para este nosso arquivo Python.

É muito fácil de fazer, só precisamos dizer open países, que é o nome do arquivo, ponto txt.

Agora, precisamos assegurar que esses países.txt estejam na mesma pasta que este Abdo pure para que possamos navegar facilmente até ele.

E então, após dizer isso, o segundo parâmetro que isso vai levar é R.

Agora, o que o R significa é que queremos ler este arquivo.

Então queremos apenas ler este arquivo, não queremos editar nada nele.

Então há também algo como W.

O W significa que queremos escrever neste arquivo, queremos editar este arquivo.

E também temos R mais A, esse A significa que queremos anexar ao arquivo, para que possamos adicionar no final do arquivo ou modificar o arquivo ou fazer quaisquer mudanças, só queremos anexar ao final do arquivo.

E então temos mais uma chamada R mais, isso significa que queremos tanto ler quanto escrever.

Então, nos dá capacidade total.

Mas para esta parte, vamos trabalhar apenas com o R, então estamos abrindo este arquivo.

E na maioria das vezes, sempre queremos salvá-lo em uma variável.

Então vamos apenas nomear uma variável arquivo_paises.

E então deve ser igual a isso.

Então, se imprimirmos, e qualquer momento que abrirmos um arquivo, e então abrirmos um arquivo, resolvemos garantir que fechamos o arquivo.

Então, aqui embaixo, também podemos dizer, arquivo_paises, ponto fechar.

Então, isso é para garantir que estamos fechando o arquivo.

E então, no meio disso, podemos fazer o que quisermos com o arquivo.

Agora, posso simplesmente imprimir arquivo.

Primeiro de tudo, quero verificar se este arquivo é legível, se tenho acesso para lê-lo.

Então, só vou fazer isso para dizer arquivo_paises, ponto legível.

Agora, isso só vai retornar um valor booleano verdadeiro ou falso.

Então, deixe-me rodar isso.



Então vamos garantir.

Então o que vamos fazer é navegar até esta pasta e garantir que a criamos.

Então, vamos lá.

Eu acho que a tenho bem aqui.

Então isso está no projeto.

Ok.

E então Django.

Então acho que estarei bem aqui.

E então há countries.txt, c o u n t ri é CE o u n t ri ES.

Então diz que não podemos abrir, diz que não há tal arquivo ou diretório.

Então o que precisamos fazer é algo assim.

Estes, embora este não seja o motivo pelo qual estamos tendo esse erro.

Então, quando executamos isso, nos dá esse erro.

Então, a melhor coisa a fazer é apenas pegar o diretório principal para dads e colá-lo, precisa dessa barra assim.

Então, vamos tentar executá-lo novamente.

Agora você vê que diz que nos dá esse erro.

Agora, o motivo desse erro é essa barra aqui, então vamos apenas mudá-la para a barra invertida aqui também.

E então, quando executamos novamente, agora diz que é verdade.

Então, o motivo pelo qual tivemos o erro é porque bem aqui está sempre com uma barra invertida para trás, mas estamos usando no Python, tem que ser com uma barra para frente.

Então agora estamos navegando com sucesso para dat countries.txt.

Então, quando dizemos, imprimir confer a redução, estamos perguntando, podemos ler este arquivo? Diz que sim.

Então, se não tivermos acesso, ele vai nos dizer que não, ou que isso é verdadeiro, então acho que estamos prontos para prosseguir.

Então, agora que podemos ler este arquivo, o que queremos fazer é trazer algo como podemos ver curl file.read line.

Agora, quando eu digo essa linha vermelha, vai imprimir a primeira linha deste arquivo, que é Gana.

Então, uma vez que eu imprimo isso, você vê agora que está imprimindo Gana, e isso é como uma sequência.

Então, se eu imprimir este arquivo novamente, se eu disser imprimir, e eu vir curl file.read line novamente, agora o que ele vai trazer é a segunda linha, e note que eu não fiz nenhuma mudança, o mesmo código, mas quando eu executo, imprime Gana, novamente, a segunda linha.

Essa é a forma recomendada de fazer isso, é apenas dizer, Gulf print lines, agora traz linhas que vão imprimir tudo em uma lista, então vai imprimir tudo, fazer linhas do seu arquivo, e depois armazenar em uma lista.

E agora podemos apenas obter, vamos dizer, a primeira, eu digo que quero pegar a primeira.

Agora estamos trazendo Gana, crianças de gangue.

A última.

Agora você vê, estamos com a França.

Então, essa é a forma de usar a função de listas.

E então podemos tornar isso mais legal, fazendo um loop por isso.

Então, podemos ver, novamente, mudar para um loop for, para fells em curl.read lines, assim, então queremos imprimir, basicamente queremos imprimir linhas.

Então, agora, quando eu executo, você vê que basicamente imprime todas as linhas antigas que eu tenho.

Então, a melhor forma de chamar isso é linhas, não Hell's, então linhas.

Então, quando eu executo novamente, a mesma coisa, só imprime todas as linhas que eu fiz uma alteração, como dizer que Gana é um país livre na CV.

Quando eu executo, essa mudança é automaticamente feita ao mover-se para cima.

Você vê bem aqui, a primeira linha diz que Gana é um país na África.

Então, você está entendendo o conceito de ler arquivos em Python.

É assim que você pode ler arquivos, ler por linhas, ler por texto e coisas assim.

Agora vamos direto para a próxima parte deste tutorial.

Nesta parte, vamos falar sobre escrever arquivos em Python.

Então, na última parte, falamos sobre abrir ou ler arquivos externos em Python, mas nesta parte, vamos falar sobre anexar texto ao arquivo, ou reescrever o arquivo todo novamente.

Então, primeiro, para escrever um arquivo, bem aqui, precisamos mudar esse R para W.

Então agora, quando mudamos esse R para W, vamos apenas remover isso, então podemos apenas dizer curl.write.

E então o que você quer fazer é apenas escrever o ofa.

Agora você pode ver que este é o arquivo, mas se eu colocar algo como, este é o novo texto.

Agora, quando eu executo isso, você verá que nada acontece, mas ao entrar aqui, você verá que foi alterado.

Tudo o que estava lá sumiu.

Então, nós escrevemos o arquivo todo novamente.

Agora, isso pode ser útil.

Vamos dizer que você quer escrever um arquivo novo.

Isso é muito útil.

Então, a razão pela qual reescreveu tudo novamente foi porque era um arquivo existente.

Então, ele sobrescreveu, como um roteador.

Mas isso é principalmente usado para criar um novo arquivo.

Então, vamos dizer que queremos ter um país agora.

Agora, deixe-me dizer, este é o novo país.

Agora, uma vez que eu salvo e executo, se eu chamar este diretório bem aqui no meu comando.

Então, eu vou fazer cd, entrar no diretório.

Ok, ele não entra naquele diretório.

Mas o que isso faz é que ele criou.

Ele criou este novo arquivo chamado country.txt naquele diretório, então vamos lá normalmente.

Então, bem aqui, você vê que temos um novo arquivo chamado country, vamos mudar e apenas dizer novo arquivo.

Agora, quando eu executo, vamos remover este espaço.

Quando eu executo, você vê que nada acontece, mas bem aqui, um novo arquivo é criado.

Agora, isso foi tudo para criar um novo arquivo e automaticamente escrever algo dentro dele.

Então, vamos apenas Ctrl+Z de volta para o countries que estávamos usando.

Aqui está a tradução do arquivo markdown para português, mantendo rigorosamente a formatação e layout originais:

---

Agora, o que eu vou fazer aqui é apenas dizer, file.write, então esta é uma nova linha.

Agora, quando eu executo esses nós em oposição a determinar, ou quando eu venho aqui é um apêndice, isso é uma nova linha para comer.

Mas você pode ver que se junta.

Agora vamos ver como formar uma nova linha que eu quero que isso seja alinhado a eu posso simplesmente vir aqui.

E eu posso ver barra invertida n.

Agora, isso vai magicamente levá-lo para uma nova linha, quando eu executá-lo novamente, Kamiah, você deve saber agora que isso está em uma nova linha.

Então, basicamente, é assim que se apenda em Python.

Agora você pode fazer isso para vários tipos de arquivos e extensões de arquivos.

Como você sabe, fizemos isso para o documento de texto, que é .txt, você pode até usar um arquivo Python para abrir um novo arquivo Python.

Agora, vamos colocar isso em prática.

Vamos dizer que queremos abrir um novo arquivo e nomeá-lo new.py.

E então nesse new.py eu quero escrever, e você pode escrever nele.

Então, agora, deixe-me apenas fazer isso, eu posso simplesmente escrever um código Python, eu posso dizer print.

Este é um novo arquivo.

Então, aqui, eu apenas escrevi um código Python simples.

E então, obviamente, temos que usar a barra invertida antes de podermos escrever um código.

Então, aqui, eu uso este print, este é um novo arquivo, e vai estar neste novo .py.

Então, quando eu executar isso, você verá agora que temos um arquivo new.py.

E então, quando eu venho aqui, posso executar new.py, você verá agora que ele simplesmente imprime "este é um novo arquivo", que era o comando ou a linha que colocamos antes.

Então, também é muito importante e muito útil escrever novos arquivos em Python.

Agora vamos falar sobre classes e objetos em Python.

Então, devo dizer que Python é uma linguagem de programação orientada a objetos.

Isso significa que qualquer coisa que lide com classes, objetos e coisas assim, é classificada como orientada a objetos.

Então, classes são apenas como uma característica em Python, uma coisa como uma função.

Uma função é uma característica que Python tem, e classes também são uma característica que Python possui, mas classes agora são como um construtor de objetos.

Então, você pode não entender o que estou dizendo agora, mas quando eu mostrar o código, tenho certeza que você entenderá mais facilmente.

Então, uma classe é como um construtor de diferentes objetos na classe, temos vários objetos.

Então, vamos apenas prosseguir e mostrar como fazer uma classe.

Então, agora, eu quero fazer uma classe, vamos apenas dizer classe usando a palavra-chave class, então podemos dizer, minhaClasse.

Ou então aqui, podemos ver x igual a cinco.

Agora, temos esta classe.

Esta é a classe, o nome da classe é minhaClasse.

E então temos x, que é um objeto nesta minhaClasse em x igual a cinco.

Agora queremos criar um objeto, isso é na verdade um valor, ou eu posso dizer um atributo na classe.

Agora, digamos que queremos criar um objeto usando esta classe, o que vamos fazer é algo como p1, algo assim.

É igual a minhaClasse.

Então, nós o inicializamos, aí dizemos print p1.x.

Agora, isso vai imprimir cinco, porque estamos dizendo que p1 é igual a minhaClasse, que é esta classe, então dizemos apenas print p1.x, assim que eu executá-lo, imprime cinco.

Então, é assim que se imprime basicamente isso, agora vamos falar sobre a função __init__.

Tudo o que eu acabei de dizer agora são os conceitos básicos de classe que podemos basicamente usar em projetos e coisas reais em nossa vida.

Mas a função __init__ nos permite inicializar diferentes valores em nossa classe.

Agora, por exemplo, temos esta classe, digamos que esta classe é chamada pessoa.

E então na outra classe, vamos ter uma função.

Vai levar dois sublinhados init assim, então você vai ter alguns parâmetros self.

Agora, este self vai estar lá, é apenas assim.

Esse é o jeito que é.

E então vamos dizer que isso é nome, que vamos colocar, vamos dizer, como idade.

E então.

Então colocamos nosso dois-pontos, como uma função normal.

Então vamos remover isso.

E então para determinar o nome desse self, ponto nome pode ser igual a nome.

E lá vamos nós, oh meu Deus.

E então vamos fazer o mesmo para a idade.

Então self.idade é igual a idade, assim.

E então vamos apenas inicializá-lo da maneira que fizemos aqui.

Então p1 é igual a minhaClasse é igual a pessoa desta vez.

Mas agora temos que dar esse nome e essa idade.

Então diremos o nome, podemos dizer que o nome é João.

E então a idade é 87.

Agora, uma vez que imprimimos p1.nome.

Você verá que ele nos dá João.

Ok, então agora diz erro de indentação.

Então isso está sob esta função que deveria estar indentado.

Então vamos executar isso novamente.

Agora você vê que imprimiu João, também podemos imprimir p1.idade.

E então você verá que ele imprime 87.

Agora também fazer isso permite ao usuário inserir.

Então podemos dizer nome é igual a input, que diz, insira seu nome.

E então podemos dizer idade é igual a input, que diz, insira sua idade.

E então, uma vez que temos o nome e a idade do usuário armazenados, podemos apenas substituir isso por nome.

E dizer idade.

Agora, quando executamos isso, primeiro ele nos pede um nome, e eu digo Tiago, e então a idade, e ele simplesmente imprime Tiago e 23.

---

Então, as classes são muito amplas em Python e são muito, muito utilizadas em Python.

Mas ainda há algumas outras propriedades de objetos que podemos manipular, digamos que queremos excluir uma propriedade desses ícones ou excluir esta idade.

Então, vamos apenas remover isso e depois dar 10 a John.

Agora, digamos que queremos excluir a idade dele, o que podemos fazer é apenas dizer `del p1.age`.

Agora, uma vez que excluímos `p1.age`, ele não terá mais essa idade.

E então podemos até excluir esse objeto totalmente, dizendo `del p1`, e quando rodarmos isso, ele será excluído.

Se tentarmos imprimir `p1` depois disso, não vai funcionar.

Agora, ele diz "nome não definido" porque já excluímos `p1`, não existe nada assim.

Então, não podemos imprimir o que não existe.

E também temos um recurso que podemos usar na classe.

Então, aqui, digamos que temos uma classe chamada `Person`.

E por enquanto, não sabemos o que colocar lá.

Não sabemos os valores e apenas queremos continuar codificando.

Ok, então para codificar pass, este pass nos permite contornar qualquer erro.

Então, se tivermos, tipo, essa classe que está vazia, podemos apenas colocar pass por enquanto e depois voltar e adicionar atributos.

Então, eu coloco pass e executo, isso não vai dar erro.

Mas se eu apenas colocar `class Person` e executar, você verá que vai me dar um erro.

Então, este pass é apenas para contornar o erro, para que possamos continuar com nosso código principal.

Uau.

Então, espero que você tenha entendido o conceito de classes e objetos em Python.

Agora vamos falar sobre herança em Python.

A herança significa simplesmente pegar de uma classe existente, e então obter todos os métodos e tudo nela e colocar em uma nova classe.

Então, você vai entender o que quero dizer em um instante.

Vamos dizer que temos uma classe existente neste arquivo chamado `new.py`, que acabei de criar, que na verdade criamos anteriormente neste vídeo, vamos ter uma classe chamada `Student`.

E digamos que `name` é igual a "same", `age` é igual a 34.

E digamos que `gender` é igual a "male".

Agora temos essa classe aqui, podemos facilmente importá-la dizendo `from new import Student`, que é isso bem aqui.

Então, agora estamos importando `Student`.

Então, em vez de dizer `from new import Student`, podemos apenas dizer `from new`, sem adicionar a extensão `.py`, ele automaticamente entende que estamos importando desse arquivo.

Mas antes de podermos importar, precisamos garantir que este `new.py` esteja no mesmo diretório.

Então, deixe-me apenas cancelar isso, precisamos garantir que esteja no mesmo diretório.

Então, agora eu tenho esta nova classe chamada `Person`, o que eu quero fazer é apenas herdar de `Student`.

Então, estou obtendo tudo da classe `Student`, que herdamos, e colocando nesta classe `Person`.

Então eu só coloco `pass` para evitar qualquer erro.

Agora eu posso dizer `p1` é igual a `Person`.

E eu posso agora dizer `p1.name`, posso apenas dizer `print(p1.name)`.

Agora, uma vez que eu rodar isso, você vê em "same", tudo desde `new.py`.

Mas estou rodando `new.py`.

Então, esse é o conceito básico de herança em Python.

Ela herda cada coisa que temos nesta classe.

E traz isso diretamente nesta nova classe.

Então, é como um duplicado dessa classe, mas não é um duplicado porque tem nomes diferentes em arquivos diferentes.

Então, isso é chamado de herança em Python.

Neste tutorial, vou falar com você sobre o intérprete Python ou o shell Python.

Então, o shell Python é um aplicativo que é automaticamente instalado sempre que você instala Python no seu computador.

Deixe-me abrir rapidamente meu shell Python.

Então, este é meu shell Python bem aqui.

Como você pode ver, IDLE.

Então deixe-me mostrar como abri-lo, você pode apenas vir aqui e procurar por `IDLE`.

Se você tiver Python instalado, isso automaticamente vai aparecer e você pode abrir.

Mas como eu já tenho isso aberto, o shell Python é como um ambiente menor onde posso rapidamente testar alguns códigos Python.

Como tudo que aprendemos neste tutorial, posso facilmente codificá-los aqui, como, digamos, `print("Você está gostando deste tutorial?")`.

Uma vez que eu pressionar enter, você vê que ele imprime isso imediatamente, ele automaticamente executa esse código assim que eu pressionar enter.

E também podemos definir uma variável, tipo, podemos dizer `name = "same"`.

E então podemos imprimir `name`.

Diretamente no intérprete Python, também podemos imprimir o nome sem nem escrever `print`.

Se você apenas disser `name`, ele automaticamente o imprime.

Mas isso só quando você está testando seu código aqui no seu shell Python, você não pode fazer isso no seu editor principal.

Agora, podemos fazer muitas coisas, como usar um loop `for`.

Digamos, `for letter in "same":`.

Então posso apenas dizer `print(letter)`.

Agora você vê, ele imprime "same" automaticamente, posso fazer qualquer coisa aqui, posso até escrever uma classe.

E posso dizer a classe `Person`.

E então posso dizer `name = "John"`.

E então aqui posso dizer `p1 = Person`.

E então posso dizer `p1.name`.

Isso vai apenas me imprimir "John".

Posso basicamente fazer tudo que faço no editor de código bem aqui.

Posso ter uma instrução `if`.

Digamos, `if p1.name == "John":` então `print("Sim, é ele.")`.

E então também realizamos nossa aritmética básica, como dois mais três nos dá cinco, nove menos zero nos dá nove.

E tudo o que podemos fazer normalmente.

Porque vamos definir uma função, digamos que temos uma função para dizer “Oi” e depois deixar passar um nome.

Deixo o nome ser não nomeado.

Em seguida, vamos dizer para imprimir.

O nome agora, digamos que eu nomeio de john.

Agora você vê que diz “Oi John”.

Então, quase tudo o que podemos fazer aqui, também podemos fazer no nosso editor principal. É como a mesma coisa, mas não é aconselhável usar isso ao construir projetos normais ou coisas assim.

Isso é basicamente apenas para testes ou algo parecido.

Então vamos tentar mais coisas como try e except.

Então tente, digamos que a idade seja igual a qualquer uma das entradas de digite a idade abaixo disso. Então eu queria que fosse idade e depois dizemos exit. Sim, devemos garantir que temos a indentação certa.

Então, exceto que nos dá um erro por causa da interpretação.

Mas basicamente podemos fazer todas essas coisas escrevendo no nosso Python IDE, é o que eu quero mostrar a você.

Às vezes você pode encontrar esse erro de sintaxe de indentação.

Porque a indentação não é realmente obviamente clara.

Assim como é aqui no Visual Studio Code.

Por isso é recomendado usar seu editor normal e não basicamente um IDE para edição, mas muitas vezes entender o conceito de um shell Python.

Isso vai ficar acima do interpretador Python.

Então agora vamos criar um sistema simples de inscrição e login em Python.

Vamos colocar tudo o que aprendemos neste tutorial e construir este simples programa.

Como você pode ver aqui, diz: crie sua conta.

Agora diz a entrada do nome de usuário, vou só entrar admin, e diz que devemos inserir a senha.

Vou digitar admin como a senha, agora diz usuário admin criado com sucesso, faça login agora.

Então, o que este programa faz é criar este usuário, obviamente, uma vez ou outra, lemos o banco de dados, estamos apenas armazenando isso em uma variável.

Uma vez que executamos este programa novamente, temos que criar novamente.

Então é só para práticas.

Então, uma vez que criamos uma conta, e diz que o usuário criado, realmente, diz para ativar o login.

Agora, quando tentamos fazer login, se o que digitamos for o mesmo que este, seremos automaticamente conectados, se for diferente, se nosso nome de usuário estiver errado ou a senha estiver errada, ele apenas dirá credenciais inválidas.

Agora, deixe-me tentar fazer login normalmente.

E eu digito admin agora diz usuário conectado com sucesso.

Deixe-me executar isso de novo.

Deixe-me agora criar outro admin novamente, admin.

Agora diz admin criado e deseja que eu faça login.

Se eu disser admin, mas a senha, e eu adicionar a letra n, eu clicar enter.

Você vê, agora diz credenciais inválidas.

Então este programa Python que vamos construir vai verificar se a senha está certa ou o nome de usuário está certo ou não.

Então vamos direto a isso.

Então, vamos apenas parar com isso e voltar aqui.

Podemos também parar com isso.

Então, o que vamos fazer? Vamos pegar quatro parâmetros.

Então o primeiro vai ser o nome de usuário e a senha para criar contas.

E o segundo, o terceiro, e quarto vão ser nome de usuário e senha para login.

Então vamos fazer isso.

Vamos dizer que o nome de usuário será igual a, então este é o primeiro que é nosso novo para criar conta.

Pois entradas, direi nome de usuário.

E então para a senha, digamos a mesma coisa entramos com a senha.

E então diremos ao usuário para entrar com o nome de usuário e senha, podemos apenas imprimir para o usuário e simplesmente dizer que sua conta foi criada com sucesso.

E então agora sabemos como informar ao usuário para fazer login.

Então vamos imprimir de novo, faça login agora.

Então agora uma vez que você tem outra variável, que deve ser o nome de usuário dois, deve ser igual a entrada e nome de usuário.

E depois a senha para login.

senha dois entrada e senha.

Então agora sabemos que isto é igual a isso.

Então, basicamente, dizemos que se o nome de usuário for igual ao nome de usuário dois, e senha for igual à senha dois.

Então esta é nossa declaração if dizendo isso e isto deve ser equivalente.

É por isso que usamos e se usarmos or, vai estar errado, porque se o nome de usuário estiver correto e a senha estiver errada, ainda vai parecer para nós. Então queremos garantir que os dois estejam corretos.

Dessa forma, obtemos a resposta correta antes de fazermos login.

Então, uma vez que esteja correto, podemos simplesmente dizer print conectado com sucesso.

Mas se estiver errado, senão.

Queremos apenas imprimir credenciais inválidas assim.

Então vamos apenas voltar ao topo aqui e imprimir algo como isso.

Criar contas agora isso deve funcionar vamos executá-lo e então criamos um nome de usuário vamos apenas dizer tome, a senha tome agora sua conta foi criada com sucesso, faça login agora tome a senha tome agora diz login com sucesso.

Vamos executá-lo novamente e tentar um incorreto alto a-e-aue.

Agora quando eu digo o nome de usuário a-aue.

Mas a senha é Ui Ui Ui.

Você vê, diz credenciais inválidas.

Então é assim que construir este programa básico em Python usando a entrada do usuário.

E a instrução if.

Espero que você tenha entendido o que fizemos aqui, se não, você pode voltar em cerca de cinco minutos e assistir a partir daí, tenho certeza de que você vai entender.

```markdown
Então os módulos basicamente permitem que você obtenha a classe de função ou tudo presente em outro arquivo, permitindo que você implemente e use essas mesmas funções em seu próprio arquivo ou projeto.

Os módulos são muito, muito versáteis e são amplamente utilizados no Python.

Todo mundo usa módulos.

Então, digamos que eu tenho este arquivo chamado noodles.py.

Agora, eu tenho uma função chamada say_I.

E então essa função say_I, eu apenas quero imprimir.

Eu sei, Bob está funcionando aqui, eu posso importar isso, eu apenas digo importar new.

Agora este new está começando como um módulo para este meu arquivo.

Agora aqui, eu posso simplesmente dizer, new.don't say I era I CDs, eu executo este arquivo, você verá que automaticamente diz, assim é como usar módulos no Python.

Agora, há muitas coisas que podemos fazer com módulos.

E os módulos são muito versáteis.

Então, se você quiser, como eu queria usar uma função que diz, em vez de codificar do zero, há a possibilidade de que alguém lá fora já tenha escrito essa mesma função, ou algo semelhante ao que você quer fazer.

E raramente ele não tem um módulo ou biblioteca, em gains mútuos, obter e implementar.

Então agora os módulos não estão apenas no seu laptop local ou no seu PC local como este, os módulos são hospedados online.

Então Python tem algo que chamamos de PIP, sobre o qual eu vou falar mais no próximo vídeo, na próxima parte.

Então todos os módulos são mais hospedados online.

Digamos que você esteja procurando um módulo que queira apenas fazer uma tarefa específica.

E você sabe que sim, claro, alguém mais teria feito isso, então você pode ir e procurar por esse módulo, ou procurar por aí, você vai ver esse módulo online.

Na próxima parte, vou mostrar como implementar o PIP e depois instalar todos esses tipos de módulos no seu computador.

Então, nesta parte, vou apresentá-lo a algo chamado PIP.

Agora, PIP é usado para instalar módulos externos da web no seu PC local.

Agora, como eu expliquei no último vídeo sobre módulos, eles basicamente permitem que você obtenha uma função de outro arquivo ou biblioteca.

Então o PIP permite que você instale um módulo da internet no seu laptop.

Agora, se formos online e procurarmos algo como módulos Python, podemos ver, vamos ver.

Vamos para o pypi.

Então, há um site chamado pypi.

Agora, este é onde todos os módulos Python, quase todos os módulos Python, estão sendo hospedados.

Como você pode ver, 200 e H 2000 projetos.

Então ele está basicamente dizendo 200.000 bibliotecas ou módulos que são hospedados neste site.

Agora você pode ver que cada um tem diferentes tarefas que fazem.

Agora veja este módulo é para recomendação do Spotify.

Digamos, ah, digamos que queremos um módulo como, vamos apenas para a página inicial.

E vamos ver o que queremos.

Então você também pode ver produtos em tendência.

Como módulos em tendência, um monte de coisas diferentes.

E então digamos, queremos ir para navegar desenvolvimento de estrutura.

Vamos clicar nisso.

Então agora este é o nome de um módulo.

Deixe-me procurar um que tenha uma descrição.

Então Django deep serializer.

Django é na verdade uma estrutura web, que permite que você construa sites usando Python.

Então este está dizendo um Django deep serializer.

Então é isso que este módulo específico faz.

Então, ao fazer estudos no nosso computador, apenas digitamos `pip install django_deep_serializer`.

Do jeito que está sendo dito aqui, então como é que agora, onde vamos executar esse comando? Se você estiver em um Mac, basta abrir o seu terminal, se estiver no Windows, abra o prompt de comando, e então apenas digite `pip install django_deep_serializer`.

Agora, se esta é a biblioteca ou módulo que você quer usar, você pode simplesmente executar esta linha de comando, e então está pronto para ir, instalou este módulo ou esta biblioteca no seu computador local.

Agora você pode ver que diz baixar Django deep serializer, então baixando Django deep serializer 0.1.3 e tudo mais.

Então está configurando tudo isso.

Sim, você vê que diz instalado com sucesso Django deep serializer.

Agora eu tenho isso no meu computador.

Agora, muito certo de que se eu quiser importar isso, eu só vou procurar por onde está o import.

Esses caras são bons.

Ok, eles não mencionaram isso aqui porque não estamos executando um projeto Django.

Então você não precisa entender o que estou dizendo por enquanto sobre Django.

Mas isso é basicamente como instalar um módulo ou biblioteca usando o PIP no seu computador, é isso que o PIP basicamente faz e este PIP.

Você não precisa baixar o PIP externamente, uma vez que você instala o Python, ele é automaticamente instalado com ele.

Por isso, quando você instala o Python, é bom.

Se eles perguntarem se você quer instalar todos os componentes, é bom marcar sim.

E então apenas adicionar Python ao caminho, apenas marcar tudo.

Então todos os componentes serão instalados quando você quiser usá-los mais tarde.

Então o PIP é automaticamente instalado com o Python.

Então se eu vier aqui, apenas digitar `pip`.

Você vê, ele diz, deixe-me dizer Python, para ser mais específico.

Então PIP Python, é um sistema de gerenciamento de pacotes escrito em Python usado para instalar e gerenciar pacotes de software.

Então como eu disse, o PIP é usado para baixar, ou neste caso, instalar pacotes.
```

```markdown
So P é o gerente que faz o download e armazena no seu laptop ou computador.

Então, o conceito básico que você precisa entender sobre pip.

Pessoal, isso é tudo para este tutorial.

Espero que você tenha aprendido algo e gostado do vídeo.

Bem-vindo ao Curso Rápido de Django.

O principal objetivo deste vídeo é apresentar o Django e mostrar todos os conceitos que você precisa para começar a construir seu próprio projeto usando Django.

Neste tutorial, não vamos construir nenhum projeto completo; o que vamos fazer é abordar cada conceito do Django passo a passo, usando-o em um caso prático.

E então, ao final deste vídeo, você saberá como construir seus próprios projetos usando Django.

Agora, este tutorial é focado principalmente para iniciantes, pois vamos começar do básico até as partes mais complexas do Django.

Então, uma rápida introdução ao Django.

Django é um framework web em Python.

Isso significa que, usando Python, podemos construir aplicações web com Django.

Então, sem perder mais tempo, vamos direto para este vídeo, é uma lista do que vamos abordar neste vídeo.

Vamos direto para a introdução e a instalação do Django.

Agora, a primeira coisa que precisamos fazer é instalar e configurar o Django em nosso computador.

Estou no Windows, mas se você estiver em um Mac ou Linux, o processo de instalação é bastante semelhante, com apenas algumas diferenças na linha de comando.

Também vou mostrar o que você precisa fazer se estiver em um SO diferente do meu.

Então, este é apenas o site oficial do Django.

Mas agora, antes de você precisar instalar o Django, você precisa ter o Python instalado no seu computador, pois vamos usar um gerenciador de pacotes do Python chamado pip.

E isso só vem quando você tem o Python instalado.

E o Django é um framework Python, então por que não?

Se você não tem o Python instalado, basta ir ao Google.

É muito fácil, você pode simplesmente buscar por "download Python" e clicar no primeiro site.

Você verá a versão mais recente, e você pode facilmente clicar aqui para baixá-lo.

Agora, quando você baixá-lo, você vai instalá-lo como um aplicativo normal.

Não vou fazer isso porque já tenho instalado no meu próprio laptop.

Se você não tem isso instalado, basta vir aqui, baixar isto, e tudo estará bem.

Agora podemos fechar esta aba.

Então agora temos o Python instalado em nosso computador.

O que precisamos fazer a seguir é abrir nosso prompt de comando.

Agora, é no prompt de comando onde faremos a maior parte da execução do servidor, das instalações e de tudo que precisamos fazer em nosso projeto Django.

Então, a primeira coisa que queremos fazer é instalar o Django, é muito fácil, o que precisamos digitar é `pip install django`.

Agora, esta linha de comando vai instalar o Django no nosso computador, então vai instalar o Django no sistema, para que possamos acessá-lo de qualquer lugar.

Mas eu já tenho o Django instalado.

Então o que vai me dizer é que o requisito já está satisfeito.

Se você trabalha bem com Python, sabe que uma vez que você tem um módulo, biblioteca ou pacote Python instalado, ele vai dizer que o requisito já está satisfeito.

Como você pode ver, diz que o requisito já está satisfeito.

Então, eu vou apenas fechar isso e manter assim.

Agora, você pode ver que temos o Django instalado no nosso computador.

E a versão que ele vai instalar é a versão mais recente.

Agora, não tenho certeza se é 3.2 ou 3.1.

Eu sei que é a versão mais recente do Django 3 ou algo assim.

E essa é a versão que ele vai instalar.

Mas digamos que para um projeto diferente, para cada projeto Django, você queira ter alguns pacotes específicos apenas para aquele projeto, não para todo o seu computador.

Eu também tenho uma versão diferente do Django apenas por uma razão específica em cada projeto.

Agora, o que precisamos fazer é criar um ambiente virtual.

Um ambiente virtual, eu diria, é como uma pequena caixa onde tudo sobre seu projeto está armazenado.

Então, é como um mini ambiente onde você pode acessar tudo sobre o seu projeto.

Então, a versão do Django daquele projeto específico é diferente, qualquer versão que você estiver usando de qualquer pacote instalado pode ser diferente.

Então, é apenas para aquele projeto específico, não vai estar disponível em todo o computador.

Para fazer isso, você precisa primeiro instalar um ambiente virtual no seu computador.

Agora, ao considerar meus gerenciadores de ambientes virtuais, um que eu uso e recomendo é chamado Anaconda.

Mas isso também tem seu processo de instalação.

E isso é principalmente usando Anaconda para aprendizado de máquina por causa dos pacotes que vêm com ele.

Mas para este projeto, vamos nos ater a um ambiente virtual muito simples.

E esse ambiente virtual é muito fácil.

Nós vamos apenas instalá-lo na nossa linha de comando bem aqui.

Mas com o Anaconda você tem que baixar o aplicativo, assim como fizemos com o Python, e depois instalar.

Se você quiser verificar isso, há inúmeras séries de tutoriais no YouTube sobre isso, você pode conferir.
```

E esse ambiente virtual é chamado Virtual env wrapper.

Então, para instalá-lo, diremos `beef install Virtua envy, rubber`, e, depois de fazer isso, colocaremos `iPhone`, e então diremos `when` e esta linha de comando irá instalá-lo no nosso computador.

Então, novamente, eu já tenho isso instalado, então ele vai me dizer que o requisito já está satisfeito, mas para você, ele deve prosseguir e instalar.

Então, eu só vou dizer para mostrar a barra de carregamento, baixando ou algo assim.

Agora, observe que se você estiver em um Mac, ao instalar todos esses pacotes, você precisa digitar `PIP three`.

Então, você pode ver que aqui no Windows digitamos `pip install`, depois digitamos o nome do pacote, mas se você estiver em um Mac, você digitará `p3 install` e então o nome do pacote.

Então, essa é apenas a principal diferença entre a instalação no Windows e no Mac.

Então, agora que temos esses wrappers de ambiente virtual instalados, vamos continuar e criar um ambiente virtual no projeto Django Java.

Primeiro, para fazer isso, vamos dizer `MK`, que é a forma abreviada de `MC`, e depois `virtual env`.

Então, agora quando dizemos `MK virtual env`, vamos deixar um espaço, e então colocaremos o nome do ambiente virtual.

Então, você pode dar qualquer nome, vamos supor que você está trabalhando em um projeto chamado dicionário online, que é o seu projeto Django, você também pode dar o nome do ambiente virtual como dicionário online.

Assim, você pode acessá-lo facilmente sempre que quiser.

Você pode dar qualquer nome que preferir.

Mas eu, pessoalmente, gosto de dar o nome do meu projeto.

Mas agora, vamos apenas dar o nome do meu app.

Então `MK MV` pode ser chamado de `my app`. Pressione Enter.

Agora, isso vai criar um ambiente virtual chamado `my app`.

E depois que ele terminar de criar esse ambiente virtual específico, o que ele vai fazer é ativar automaticamente esse ambiente.

Então, isso vai levar alguns segundos.

Como você pode ver, já temos isso instalado.

E então, antes de instalarmos, além do diretório onde estamos, não vimos nada ainda.

Mas agora você pode ver que temos `my app`.

Então isso está mostrando que criou o ambiente virtual chamado `my app`, e o ativou.

Como eu disse, lembra que eu disse que estávamos usando um ambiente virtual, é como uma caixa diferente do computador antigo.

Mas antes de podermos acessar essa caixa, antes de nós mesmos, nosso pequeno ambiente, precisamos ativá-lo.

Então, agora que ativamos esse ambiente virtual, qualquer coisa que fizermos nesta linha de comando específica estará no ambiente Dev.

Então agora, eu vou instalar o Django, quando eu instalar o Django dizendo `Pip install Django`, note que se você estiver em um Mac, você deve utilizar `p3 install Django`.

Então agora quando eu instalar Django e pressionar enter, não vai me dizer que o requisito já está satisfeito novamente.

E por agora você deve saber o motivo disso, é porque temos Django instalado no nosso computador.

Mas não o temos instalado nesse ambiente virtual, que é separado do que temos no nosso computador.

Então, como você pode ver, é instalar o Django novamente, o que é, vamos ver se temos, sim, instalando a versão três pontos dois pontos dois a mais recente.

Então essa é a diferença entre o seu ambiente virtual e o ambiente normal do seu computador, ou como quer que você chame.

Mas como você pode ver aqui, acrescentamos esse ambiente, pois criamos o ambiente virtual que foi automaticamente ativado.

Então, para você saber se realmente está em um ambiente virtual ou se o ambiente está ativado, você verá esses colchetes e depois o nome do ambiente dentro deles antes do diretório.

Então você sabe, quando você abre o seu terminal ou linha de comando pela primeira vez, a primeira coisa que você verá é o diretório onde você está. Em um ambiente virtual, você verá primeiro o nome do ambiente virtual entre parênteses, e depois o diretório que deve mostrar que você está no ambiente Dev.

Mas e se fecharmos essa linha de comando ou fecharmos esse prompt de comando e voltarmos, você sabe que não vamos ver esse `my app` novamente.

Então, vamos agora entrar nesse ambiente ou ativar ou entrar no ambiente.

Então, eu também vou falar sobre isso em alguns minutos.

Por enquanto, você pode ver que temos Django instalado nesse ambiente.

Isso é muito bom.

Agora, estamos em um ambiente virtual por um tempo. Vamos direto para o Django.

Temos Django instalado.

A próxima coisa que queremos fazer é criar um projeto Django porque queremos trabalhar com Django.

Agora, o Django tem essa linha de comando, que permite criar um projeto, um novo projeto.

Então, primeiro de tudo, você precisa se certificar de que está no diretório que deseja.

Deixe-me abrir minha pasta rapidamente.

Então, esta é a minha pasta.

Este diretório é o que está nessa linha de comando.

Então você pode ver aqui, projeto/tutorial Django.

Então, se você descer em projetos, tutorial Django, essa linha de comando está aberta nessa direção.

Então qualquer coisa que eu criar, criar um novo projeto Django, será criada nesse diretório.

Agora, eu só vou dizer `Django admin start project`.

```markdown
Minha aplicação está ok.

Meu projeto.

Vamos apenas dar a ele meu projeto.

Então você pode ver Agora estamos no ambiente virtual na minha aplicação.

E então, esta é a linha de comando que usaremos para criar um novo projeto Django.

Assim que eu pressionar Enter, vou esperar alguns segundos.

Como você pode ver, não mostrou nada aqui.

Mas se eu voltar para esta página, você verá que agora eu tenho um novo projeto chamado meu projeto.

Então, deixe-me voltar rapidamente.

O que fizemos foi Django admin start project meu projeto.

Agora, isso nos permitirá criar um novo projeto Django admin start project, então o nome do projeto depois. Então, se você estiver trabalhando em, digamos, um mecanismo de busca online, ou quiser chamá-lo de busca, massagem automática, ou qualquer nome que você queira dar.

Então você pode dizer Django admin start project, e depois mecanismo de busca online, ou qualquer nome que você quiser dar.

Assim é como criar um projeto Django simples.

Agora, se eu digitar dir, vejo que tenho um novo arquivo, uma nova pasta ainda, deixe-me entrar nessa pasta, cd meu projeto.

Então agora estou na pasta do meu projeto.

Se eu digitar dir de novo, você pode ver que tenho isso no meu projeto, vou explicar tudo isso. Pode parecer confuso no começo, mas vou explicar tudo isso, eu prometo.

Então, vou explicar rapidamente como você pode fazer todas essas coisas no Mark.

Agora, criar um novo projeto é exatamente a mesma coisa.

Assim como no Django, eu acho admin start project meu projeto exatamente a mesma coisa.

E então, aqui, quando eu digitei dir, o que fiz foi ver todos os arquivos e pastas neste diretório específico.

Então, se você está em um Mac, o que precisa digitar é LS.

Uma vez que você digitou l s, deixe-me apenas digitar rapidamente aqui.

Isso, então, se eu clicar Enter, não é reconhecido porque estou no Windows, mas no Mac, vai mostrar uma lista assim de todos os arquivos e pastas que você tem nesse diretório.

E o que fiz foi entrar na pasta do meu projeto, exatamente a mesma coisa com Mac, apenas digite cd, meu projeto que você entrará.

Então agora temos isso, vamos voltar.

Deixe-me entrar neste projeto.

O que vemos aqui é um arquivo chamado manage.py.

E então vemos uma pasta, que tem o nome do nosso projeto, que é meu projeto.

Deixe-me abrir e ver um monte de arquivos aqui.

E vou explicar todos esses.

Mas antes de fazer isso, vamos trazer este projeto para o Visual Studio Code.

Então, agora, falamos sobre fazer tudo na interface de linha de comando, criando o projeto.

Mas o que realmente queremos codificar.

Então, precisamos de um IDE, um editor de código, como quer que você chame.

E o que eu adoro usar é o Visual Studio Code.

Então, você pode querer usar outro, o meu é PyCharm, ou usar Warehouse, Sublime Text, mas eu uso Visual Studio Code, qualquer um que você quiser usar está bom, desde que saiba como usá-lo.

Então agora, tenho o Visual Studio Code aqui.

Vou apenas dizer, venha aqui, clique em arquivo.

E então vou abrir uma nova pasta.

Não, oh, sim, estou abrindo uma nova pasta.

Então, no projeto Django tutorial, meu projeto.

Então quero abrir esta pasta, selecionar pasta.

Deveria levar alguns segundos.

Bom.

É por isso que gosto do Visual Studio Code, porque é realmente rápido e leve, comparado a alguns outros IDEs extensos.

Então, isso deve abrir agora.

Dê alguns segundos.

E, sim, então isso está abrindo, vou dizer algo rapidamente.

Então, abriu bem ali.

Mas deixe-me apenas fechar isso.

Então, lembre-se que eu disse, E se um de nós disser este ambiente virtual específico, digamos que fechamos esta interface de linha de comando, e queremos iniciar este ambiente virtual.

Vou mostrar como fazer isso no nosso Visual Studio Code.

Então vamos apenas vir aqui.

Então, primeiro de tudo, estes são os arquivos que obtemos quando criamos um novo projeto Django.

Este arquivo manage.py, você não quer tocá-lo durante toda a sua codificação enquanto está construindo qualquer coisa que esteja construindo.

Eu, pessoalmente, pode haver alguns desenvolvedores que manipulam este arquivo, mas normalmente, como iniciante, mesmo como um desenvolvedor Django intermediário, você não quer tocar neste arquivo, não há nada que você queira fazer aqui.

Este arquivo é apenas para nos permitir fazer várias coisas em nosso projeto, como rodar nosso projeto no localhost.

Para que possamos ver o que estamos construindo, migrar bancos de dados, e eu não quero entrar em detalhes, porque você pode não entender agora, mas você entenderá mais tarde.

Mas por agora, você não quer tocar neste arquivo.

Então vamos apenas fechar isso.

E então, quando entramos no meu projeto, temos um arquivo __init__.py.

Sim, este arquivo está vazio.

Por enquanto, não há muito o que explicar neste arquivo, deixe-o assim mesmo.

Então, vamos usar todos esses arquivos mais tarde neste tutorial, então estou apenas mostrando um modelo que o Django traz quando criamos um novo arquivo, então vamos usar este.

asgiref é um importante.

Não precisamos de muita manipulação neste, é apenas uma linha de código ou algo assim, apenas para acessar alguns sockets e coisas do tipo.

Então, apenas deixe isso por agora.

E então este arquivo settings é como o alicerce de todo o seu projeto.
```

Então precisamos deste arquivo, precisamos muito deste arquivo.

Vamos usá-lo para algo como instalar aplicativos, vamos fazer algumas coisas nele, rolamos para baixo para ver onde temos modelos.

Isso está vazio.

Por enquanto, vamos fazer algumas coisas.

E então continuamos, sim, vamos fazer muitas coisas neste arquivo de configurações, é apenas o arquivo que tem tudo o que precisamos em nosso projeto.

Então, todas as configurações e os aplicativos ao instalar qualquer coisa em todos os nossos bancos de dados estão dentro deste arquivo, vamos configurá-lo.

Então agora temos este arquivo `URLs.py`.

Agora deixe-me explicar o que faz o seu arquivo `urls.py`. O que faz é o que vamos abordar aqui.

E então vamos especificar todas as URLs que queremos em nosso projeto.

Então, por exemplo, digamos que temos um site nomeado www.codetomi.ml.

Agora temos esse site, quando um usuário acessa codetomi.ml.

Qual página queremos abrir é você quem vai especificá-la, mas se algum usuário acessar codetomi.ml/newsletter, ou /blog post ou algo assim.

Agora, uma barra (`/`) é outra página da web.

Outra URL está aqui.

Vamos especificar isso aqui, vamos configurar cada URL que temos em nosso projeto.

Vamos falar sobre isso mais tarde neste curso.

E então esses arquivos `Wsgi`, sim, são meio parecidos com os arquivos SGI.

Mas por enquanto vamos deixar como está.

Certo, temos tudo isso.

Agora, o que eu quero fazer, eu realmente amo trabalhar neste prompt de comando.

Mas o que eu quero fazer agora, antes de tudo, é desativar este ambiente virtual.

Então é muito fácil.

Tudo o que eu preciso fazer é digitar `deactivate`.

Agora você pode ver que não estamos mais no ambiente virtual.

Mas agora estou longe do projeto Java travelmate, como posso acessá-lo novamente? Vamos entrar no VS code.

No VS code, podemos ter nosso terminal, nosso pequeno terminal bem aqui.

Então não precisamos voltar ao prompt de comando toda vez que precisamos fazer algo.

Então, bem aqui, você verá que temos este terminal, vai levar alguns segundos para carregar.

Isso não deve demorar muito.

Então, bem aqui neste terminal, vamos... Sim, é assim que vamos acessar nosso projeto, ele está pronto neste diretório de projetos.

Agora, digamos que queremos entrar no ambiente virtual, muito, muito fácil.

Só precisamos dizer para ativar novamente.

E então diremos o nome do ambiente virtual, no meu caso foi `myenv`.

Normalmente, deveríamos ter algo como isto bem aqui, mas se não for o seu caso, vamos entrar no prompt de comando e digitar `workon myapp`.

Então, bem aqui, você pode ver que ele traz o ambiente virtual de volta, mostrando que estamos neste ambiente virtual.

Então, no VS code, deveria fazer a mesma coisa, mas acredito que por estar usando talvez outro tipo de interface de linha de comando ou algo assim.

Mas sim, isso será um problema menor.

Podemos ignorar isso.

Mas é assim que podemos desativar um ambiente virtual e voltar para ele, é muito fácil.

Então deixe-me apenas fechar isso.

Agora, o que fizemos foi criar um novo projeto Django, instalamos Django, falamos sobre ambiente virtual, expliquei todos os arquivos, esses arquivos que foram criados quando criamos um projeto Django, expliquei a interface de linha de comando, fizemos muito para introduzir o Django.

Então agora tenho certeza de que pelo menos você deve ter uma noção do que é Django.

E agora podemos começar a trabalhar com ele.

Então, agora que temos nosso projeto Django criado, o que quero falar é sobre o aplicativo Django.

Pode parecer engraçado, mas há uma diferença entre seu projeto Django e seu aplicativo Django.

Vou explicar usando um site popular.

Agora os aplicativos Django são como subconjuntos do projeto principal, temos este projeto criado bem aqui.

Dentro deste projeto, podemos ter vários aplicativos Django, então são como subconjuntos de um aplicativo particular.

Mas por que usaríamos um aplicativo Django se já temos um projeto aqui.

Vou usar o Instagram como exemplo para explicar.

Então temos o Instagram.

No Instagram, você sabe que temos diferentes seções, temos o feed de fotos, temos o marketplace, temos as mensagens diretas, temos os stories e muitas outras coisas.

Então o Instagram pode ser o projeto principal, apenas se estivermos usando Django para este exemplo, digamos que o Instagram é o projeto principal, então temos as mensagens diretas, que pode ser um aplicativo específico, outro aplicativo só para as mensagens diretas, podemos ter outro aplicativo para o marketplace, outro para os Reels, outro para os stories, podemos ter outro aplicativo só para o feed de fotos.

Agora, cada aplicativo pode ter uma função específica.

Agora, na maioria dos projetos, você não terá muitos aplicativos, pode ter apenas um projeto e um aplicativo com o projeto, eu também tenho feito isso.

Mas se você tiver um projeto muito grande que exigirá muitos aplicativos, não há problema em fazê-lo.

Então é isso que são os aplicativos no Django, eles são o projeto principal e são os subconjuntos desse projeto, que são aplicativos para diferentes recursos.

Depende totalmente de como você deseja organizar seu projeto.

Mas, para um projeto, pelo menos, eu quero criar um aplicativo Django muito fácil, assim como criamos o projeto Django.

Primeiramente, precisamos garantir que estamos no ambiente.

E então, estamos no diretório do nosso projeto, o diretório raiz.

Agora, quando digo diretório raiz, o que quero dizer é o diretório que contém o arquivo `manage.py`.

Esse é o diretório raiz deste projeto Django.

Então, podemos confirmar se estamos no diretório raiz dizendo `dir`.

Assim, vemos `manage.py`.

Isso nos diz que, sim, estamos no diretório raiz.

Agora, para criar um aplicativo, vamos usar este `manage.py`.

Anteriormente, expliquei que esse `manage.py`, realmente não queremos codificar nada nele, mas usamos o arquivo muito para diferentes coisas.

Agora, criar um aplicativo é uma das vezes que usamos esse arquivo `manage.py`. Nós simplesmente dizemos `python manage.py startapp`.

E então, podemos nomear este `meuapp`, já que tenho meu nome de projeto em meu app.

E quando pressionamos enter, não vai nos dar uma resposta bem aqui na interface da linha de comando.

Mas se formos para o nosso Visual Studio Code, ao vir aqui, você verá agora que tenho uma nova pasta chamada `meuapp`.

E sob ela, tenho uma nova, outra pasta e um monte de arquivos.

Então, deixe-me apenas rapidamente passar por aqui e explicar. Este `__init__.py`, realmente não fazemos muito dentro dele.

Este é apenas para as migrações dos modelos, não vou entrar nisso agora.

Este `admin.py`, o Django tem essa bela interface de administrador, que permite que você controle seu site ou mantenha seu site, veja ou gerencie o banco de dados, tudo o que você precisa saber sobre seu site.

E este arquivo `admin.py` é onde registramos alguns bancos de dados que queremos colocar lá, e algumas outras coisas que queremos fazer.

E então, este `apps.py`, também o usamos mas não muito.

Mas vamos apenas mantê-lo.

E então, este `models.py` é o arquivo onde criamos todos os nossos bancos de dados.

Agora, lidar com banco de dados no Django é bastante diferente.

Porque não precisamos escrever uma única linha de código SQL.

Eu também vou explicar isso mais tarde neste curso.

E é para isso que serve este arquivo `models.py`.

Os `tests.py`, nós o usamos em alguns casos, mas não frequentemente, então não é frequentemente usado.

E este `views.py` é onde tudo acontece.

Então, o que vamos ver neste vídeo, se você quiser, é onde vamos começar.

Então agora, deixe-me apenas encerrar isso.

Agora, todos estes.

Agora, digamos que queremos começar com a configuração de URLs.

Agora, a configuração de URLs, quando eu digo isso, o que quero dizer, como expliquei anteriormente, é que, digamos que você tem um projeto, e então cada link, digamos que você tem um site como youtube.com, então cada link específico é uma URL diferente.

Então, é isso que a configuração de URLs trata, você vai entender isso um pouco.

Então, o que queremos fazer agora é configurar URLs, deixe-me apenas tornar isso mais compreensível.

Então, temos este site `djangoproject.com`.

Se eu clicar em `overview`, ou clicar em `downloads`, deixe-me clicar aqui em `download`.

Agora você vê `djangoproject.com/download`.

Este `/download` é uma outra URL.

Este `djangoproject.com` é o principal, é a principal URL, é a URL que o usuário deve ver quando entra no nosso site.

E temos o `/download` porque é uma outra URL, temos que configurar tudo isso dentro do nosso projeto Django, isso é o que é chamado de roteamento de URL, ou mapeamento de URL, ou configuração de URL.

Posso chamá-lo de qualquer coisa.

Então, para começar, estes não vão entrar no meu aplicativo, e então no meu aplicativo, vamos ao arquivo `urls`.

Então, vamos criar um novo arquivo e nomeá-lo `urls.py`.

E precisamos importar algo do Django chamado `path`.

Então, digamos `from django.urls import path`.

Agora, este `path` vai nos permitir ter múltiplas URLs na nossa lista.

Então, vamos ter uma nova lista chamada `urlpatterns`.

E esta lista vai conter todas as URLs que temos no nosso projeto.

Então, podemos dizer `path`.

Assim é como especificamos uma nova URL.

E então, só precisamos acho que há algo chamado de vista ou algo assim.

E então agora, eu digo `views.index`, vou explicar tudo isso, e então `name` igual a `index`.

Então, importamos `path` do `django.urls`.

Isso nos permite configurar cada URL que você pode ver, estamos usando os `path` que importamos.

E então, só temos uma nova lista chamada `urlpatterns`.

E então temos múltiplas URLs. Se você quiser outra URL, você pode apenas adicionar uma nova URL como essa.

Isso é para mostrar que é uma lista.

Agora, vamos usar `path` e abrir parênteses.

E então temos essas aspas vazias aqui.

Eu acho, quando estiver vazio, isso significa que é a URL raiz.

Digamos que temos algo como `/download`.

`/download` agora significa que quando um usuário vai ao nosso site `/download`, então isto é o que deve acontecer.

Mas por enquanto, quando está vazio, isso significa que volta, apenas o site principal, o projeto principal, onde dizemos `/download` significa nosso site `/download`.

Então, por enquanto, este é o site principal, e então `views.index`.

Então, a maneira como o URL funciona no Django é que escrevemos o arquivo de configuração de URL, mas quando um usuário acessa essa URL específica, o que acontecerá? Isso será feito no `views.index`, podemos renderizar um arquivo HTML, podemos apenas enviar uma resposta HTTP RESTful, uma resposta JSON, podemos fazer qualquer coisa.

Mas antes de podermos usar essas views, precisamos importá-las.

Então podemos ver pelos imports, a permissão está correta.

Importe as views.

Agora que temos as views importadas, podemos dizer views.dot.index, o que esse index significa? Significa uma função.

Então essas views que importamos basicamente são apenas o arquivo views.py aqui, quando venho aqui, eu tenho uma nova função chamada index, ela leva uma solicitação, eu também vou explicar tudo isso, e então posso passar por enquanto.

Então, bem aqui, eu tenho uma função chamada index.

Então o que quer que façamos nesta função é o que será atribuído a este URL específico.

Então é assim que funciona, o usuário vem para este URL, e então vê que precisa ir para views, e procurar uma função ou uma classe ou seja o que for chamado index.

E então o que quer que seja feito nesse index é o que será renderizado para o usuário.

E então vamos apenas usar nome, você pode fazer esse nome ser qualquer coisa, você pode chamá-lo de index ou o que for, mas é aconselhável nomeá-lo da mesma forma, seu nome naquele URL específico, para que você não fique confuso ou travado, ou apenas cometa alguns tipos de erros.

Então este nome também dá a isso um tipo de ID é o nome.

Então mais tarde, você vai ver por que vamos dar um nome por enquanto, vamos deixá-lo assim.

Então vamos salvar este arquivo.

Então como eu disse, a maioria dos usuários vem para a UI, vai entrar em views.dot.index.

E então o que quer que façamos nisso é o que será renderizado.

Agora o que queremos ver é o que eu estou fazendo aqui é o que será renderizado. Vamos fazer algo, vamos retornar algo.

E podemos apenas retornar uma resposta HTTP.

Então, antes que possamos ler, temos que importá-la de Django URLs, de Django.dot.HTTP, importe HTTP response.

E agora diga return HTTP response.

E então essa resposta HTTP pode ser apenas uma tag HTML, como uma h1.

E então adicionamos um welcome.

E então podemos fechar essa h1.

Então estamos apenas colocando um código HTML simples dentro disso.

Agora, se eu rodar meu projeto, eu também vou te mostrar como rodar seu projeto Django.

Se eu rodar meu projeto, você vai ver que não temos nada.

Então, primeiro de tudo, vamos rodar nosso projeto.

Antes de continuarmos.

Vamos voltar para nossa linha de comando e dizer Python manage.py runserver.

Agora lembre-se, eu disse que vamos usar muito o manage.py em nossa linha de comando.

Então para rodar nosso projeto em nosso localhost, para que possamos ver o que estamos construindo, precisamos digitar Python manage.py runserver, eu vou pressionar Enter, e então você vai ver o que vai acontecer, ele vai rodar nosso projeto no localhost com uma porta de 1000.

Então não precisamos copiar isso.

Vá para o nosso navegador, e então apenas cole isso.

Então enquanto espera isso carregar, você pode ver o que ele nos mostra, certo? Ele mostra um template padrão do Django de um novo projeto, para criar um novo projeto e apenas rodá-lo, isso é o que você vai ver.

Mas obviamente, não queremos ver isso.

O que queremos ver é nosso próprio site, nossos próprios templates, nosso arquivo HTML, nossa resposta, o que quer que queiramos fazer.

Então agora, vamos voltar para o Visual Studio Code.

Fizemos tudo aqui.

Dissemos que quando um usuário entra na página principal, deve ir para a View index. E na view index, estamos apenas enviando uma resposta HTTP, que é um "welcome". Isso deve mostrar uma mensagem de boas-vindas.

Agora, isso é porque tudo o que estivemos fazendo está dentro deste app, este meu app.

Mas lembre-se, eu disse que meu app é apenas um subconjunto do projeto principal, também precisamos dizer ao projeto principal onde procurar seu próprio URL.

Então é assim que ele vai ver isso.

Então o que vamos fazer é entrar no meu projeto, escrever em URLs.py, vamos, primeiro de tudo, importar algo chamado include.

Então de Django.urls, importe path de Django.urls, também podemos importar include.

Agora isso vai nos permitir incluir uma URL semelhante de um app, path, assim como estamos criando outra URL, a mesma coisa.

A partir de agora, não estamos dizendo views ou qualquer coisa, já que já configuramos isso no app, mas vamos dizer, include myapp.urls.

Então, se você conhece bem Python, deve entender o que isso está fazendo aqui.

O que está fazendo é que está incluindo myapp.urls, então vai entrar no myapp bem aqui, esse arquivo URL, e vai procurar uma URL semelhante a essa.

Então, de qualquer forma, com a série home, o que está sendo feito lá, é o que será renderizado.

Agora que fizemos isso.

Agora voltamos aqui e atualizamos, você vai ver agora que temos um "welcome", não temos mais aquele template padrão do Django.

O que temos agora é essa resposta HTTP particular.

Então isso é basicamente como fazer um roteamento de URL básico.

Hoje em dia, a maioria desses roteamentos de URL que vamos falar mais adiante neste curso, é como basicamente fazer um roteamento de URL simples no Django.

Até este ponto, vimos como nos livrar dos templates padrão do Django.

Por exemplo, quando acabamos de criar um novo projeto Django, aquele template que vai aparecer, agora sabemos como nos livrar disso e colocar nossa própria resposta.

Então, como você pode ver, certo, o h1 diz, Ei, bem-vindo.

Agora, mais do que isso, podemos codificar todo o nosso HTML aqui, podemos colocar todas as nossas tags P, se você conhece bem HTML, sabe do que estou falando, galera que tudo que ele quer é ter nosso próprio arquivo HTML externo, que queremos renderizar quando um usuário quiser acessar esta página de índice.

Agora, isso é fácil.

Django é bastante fácil.

O que precisamos fazer, precisamos configurar o Django para ser capaz de ver nossos arquivos HTML, para ser capaz de ver nossos arquivos de template, ou para ser capaz de olhar para esses arquivos.

Essa é a palavra certa.

Então, quando solicitamos por menos index.html, o Django sabe onde localizar esse arquivo, e então o renderiza.

Vamos fazer isso rapidamente.

À medida que fechamos, fechamos também.

Então, bem aqui no nosso diretório raiz, lembre-se que eu disse que o diretório raiz de um projeto Django é o diretório que contém o arquivo manage.py? Agora, sim, vamos criar uma nova pasta.

Agora, esta pasta vai se chamar templates.

E nesta pasta, vamos armazenar todos os nossos arquivos de template.

Ou seja, todos os arquivos HTML que vamos usar neste projeto.

E se eu apenas armazenar meu arquivo de template bem aqui, e eu vier aqui e disser, ok, Django mostre index.html.

Apenas criamos um arquivo temporário.

Mas não dissemos ao Django que é aqui que ele tem que procurar index.html, ou qualquer arquivo de template que estamos usando.

Então, precisamos dizer ao Django que vamos fazer isso usando o arquivo settings.py na nossa pasta do projeto.

Então, vamos ter que abrir settings.py e então vamos rolar para cima.

E então vamos vir, vamos apenas deixar isso em tela cheia, bem aqui onde diz templates.

Esta é a configuração para os templates, que vão procurar dentro disso.

Então, isso é uma forma abreviada do diretório.

Então, está dizendo qual diretório o Django deve ir para procurar o arquivo de template? Então é muito fácil, já que já temos o template aqui.

Vamos apenas dizer base_dir.

Vírgula, e então vamos dizer template.

Agora este template deve ser o nome desta pasta.

Então o que estamos dizendo é que ele deve ir para o diretório base, que também é o diretório raiz, e procurar uma pasta chamada templates.

Agora, digamos que nomeamos este template sem um S, também precisaríamos vir e remover aquele S e deixar apenas template.

Então o que você colocar aqui deve correlacionar com o nome da pasta.

Agora, podemos apenas salvar isso.

Agora o Django sabe onde procurar nossos arquivos de template, isso apenas fecha.

O que queremos fazer agora é entrar nessa pasta de template, e criar um novo arquivo chamado index.html.

Então nesse index.html, podemos ter um h1 agora com um arquivo HTML normal em um arquivo HTML normal, e então podemos apenas dizer, digamos, como você está hoje.

Então, nas nossas views, agora, não queremos retornar essa resposta HTTP, ou o que queremos fazer é renderizar este template HTML.

O Django sabe onde procurar os templates.

Tudo é simplificado.

Agora, podemos remover essa resposta HTTP, e dizer retornar render, ele está recebendo uma requisição.

E então você apenas coloca index.html, que é o nome do arquivo, ou tenta renderizar, que está bem aqui.

Então temos nossa função index, que está recebendo uma requisição, agora ela retorna renderizando index.html.

Agora vamos salvar este arquivo.

E então viemos aqui.

E então atualizamos.

Então isso deve mudar isso de volta.

Então não muda bem aqui.

Vamos ver por quê.

Sumiu.

Sim.

E certificou-se de.

Saia do servidor.

E então vamos rodá-lo novamente.

Vamos dar um minuto para rodar.

E então vamos vir aqui, e atualizar.

Então você pode ver que agora diz como você está hoje? Então isso mostra que está vindo do nosso arquivo index.html, não de uma resposta HTTP.

Agora, a razão pela qual não carregou antes, eu tenho certeza de que foi cacheado ou algo assim.

Então, quando saímos daquela maneira do Django, fechamos o servidor e o iniciamos novamente, ele recarregou, então às vezes você pode precisar fazer isso.

Então você vê agora que diz, Como você está hoje, podemos apenas ter uma imagem.

Aqui, salvar.

Temos isso salvo.

Ok, atualizar.

E então você pode ver aquela imagem, então é HTML típico, então podemos fechar isto agora.

Então agora você viu como renderizar um template HTML, ou arquivo de template em uma URL Django.

Então até este ponto, você deve começar a entender como trabalhar com Django, como criar um novo projeto, se você sabe a diferença entre um projeto Django e um aplicativo Django.

Se você sabe como proceder com as configurações da URL, você deve saber como configurar suas funções de views, então você deve entender a renderização de template do Django.

Agora quero falar sobre enviar dados dinâmicos para seu arquivo de template.

Vou explicar o que quero dizer com isso.

Deixe-me entrar no meu Visual Studio Code.

Bem aqui, eu só tenho o texto simples nomeado "Como você está".

Deixe-me explicar a diferença entre estático e dinâmico e quando algo é estático, significa que é o mesmo.

Quando algo é dinâmico, significa que muda de acordo com uma função particular ou o que quer que seja dado.

Vou explicar isso mais quando estivermos fazendo coisas práticas.

Agora este Como você está? é estático, é apenas um texto estático, certo? Agora dizemos isso porque se eu recarregar esta página, ela está lá, ela não está mudando.

Quando algo é dinâmico, pode ser como uma variável que é diferente para cada usuário.

Assim como quando você entra no facebook.com, você vê o seu nome e eles podem dizer "bem-vindo, Tom", se o seu nome for Tom.

E então, se alguém chamado John fizer login, você verá "bem-vindo, John".

Mas quando você vai ao Facebook e vê seu feed de notícias, verá o seu próprio feed de notícias, e não os amigos de outra pessoa, ou há inúmeras maneiras de pensar sobre isso.

Então, isso é o que significa ser dinâmico.

Agora, isso acontece porque é, na verdade, a mesma página, como o mesmo arquivo HTML, ou o mesmo código, mas é diferente para cada usuário.

E isso é o que queremos dizer com dinâmico, quando algo não é o mesmo para todos.

Então, vamos falar sobre enviar dados dinâmicos para o nosso arquivo de template.

O que quero dizer é que, no Django, porque Django é um framework de back-end, implementamos algumas funcionalidades de programação no HTML, coisas como variáveis, algo como declaração if, coisas como loops for, conseguimos codificar isso no HTML, usando uma determinada linguagem, chamada Jinja.

Vamos falar sobre isso mais tarde.

Por agora.

Vou enviar isso, seja o que for que eu chame de dados dinâmicos para o meu arquivo.

O que eu preciso fazer é assim: tenho uma variável chamada name.

Estou apenas dizendo que este nome é John.

Aqui, posso ver.

Bem-vindo.

JOHN, deixe-me apenas ver, john, CV.

Atualize para "bem-vindo, john".

Então, isso é estático, porque é john. Se outra pessoa chamada Tim fizer login, vai aparecer "john", se alguém mais chamado Pedro fizer login, vai aparecer "john", mas agora vamos mudar este nome para Patrick.

Posso enviar essa variável para meu arquivo index.html, e posso acessá-la de lá.

Posso fazer isso apenas vindo ao index.html, você apenas adiciona as chaves, e então o nome da variável.

E então estamos dando a você esta variável, que temos aqui.

Então isso é como uma chave-valor.

É como um dicionário, isso é a chave, e isto é o valor.

Agora vou poder acessar essa variável, por causa dessa chave, no meu index.html.

Se eu vier aqui agora, em vez de dizer "john", para acessar isso, vou usar as chaves duas vezes.

E vou dizer name, se eu salvar aqui agora, você verá que agora diz "bem-vindo, Patrick".

Agora, esse Patrick está vindo do nosso back end, não está vindo só como um texto plano, aqui estamos dizendo name, mas o que está sendo impresso é Patrick.

Isso porque isso é o que atribuímos aqui.

Agora isso pode ser diferente para todos.

Quando avançarmos, você verá como vamos usar a autenticação para permitir que cada usuário tenha seus próprios dados.

Vamos supor que esses dados vêm de um banco de dados.

Vamos supor que fazemos login de um usuário, e então obtemos este nome.

E vamos supor que seria algo como user.name, vou mostrar isso e algo como user name.

Então agora esse name está sendo dado um valor de user.name, que agora está vindo do banco de dados.

Então é intuitivo, será diferente para cada pessoa.

Então, se John acessar o sistema, mostrará "john", se Tim acessar, esse nome será enviado para o front end.

E é assim que enviamos dados dinâmicos usando Django.

Agora, também podemos enviar, fazer isso de forma mais formatada.

Vamos supor que temos múltiplos, não é uma boa prática vir e fazer vírgula e dizer, idade, e então dar isso, você pode fazer isso também, mas isso não é uma boa prática.

Então, podemos apenas ter algo que chamamos de contexto, que é popularmente usado no Django, e este contexto será um dicionário.

Neste dicionário, teremos todos os campos, por exemplo, nome.

E então damos Patrick como valor.

E então, idade, podemos dar 23.

nacionalidade.

Colocamos British, e então podemos continuar assim, é basicamente um dicionário.

E se quisermos passar isso para o HTML, não precisamos dessas chaves de novo, só podemos dizer contexto.

Agora esse contexto está sendo enviado para este index.html para nós.

E agora vou dizer name, vai imprimir o nome que está aqui, que ainda é Patrick.

Então isso não mudou.

Diz "bem-vindo, Patrick".

E agora, só vou dar um espaço.

E então podemos dizer sua idade, anos de idade, então agora vamos atualizar, eu vejo que diz "você tem 23 anos de idade", que é a variável idade vinda das views.

Bem, também podemos usar a nacionalidade e dizer apenas a nacionalidade.

Eu vou atualizar e diz que você é British.

Então, isso é apenas como manipular os dados.

Como você pode ver, diferentes dados vêm do back end, vêm das views, e mais tarde, vou mostrar como obter isso tudo do banco de dados, não apenas digitando dados fictícios ou dados estáticos.

Agora, espero que você entenda o conceito de enviar valores dinâmicos de suas views para seu arquivo de template no Django.

Agora, vamos pegar alguns dos recursos que aprendemos nas partes anteriores, e então com alguns novos recursos, vamos usá-los para construir um contador de palavras muito simples no Django.

Então, é apenas um projeto muito pequeno, em que um usuário poderá colocar algumas palavras como uma frase ou um artigo, e uma vez que o usuário enviar, ele mostrará ao usuário a quantidade de palavras que estão presentes nesse bloco de texto.

A primeira coisa que precisamos fazer é rapidamente ir para o nosso servidor, que está rodando bem aqui.

Então queremos ter um formulário bem aqui, no qual um usuário será capaz de colocar todo o texto, e então devemos ter um botão de submissão abaixo dele.

Então vamos fazer isso.

Primeiro de tudo, escrevendo no VS Code, podemos nos livrar de tudo isso agora.

E então teremos apenas um formulário, ele pode ficar em branco por enquanto.

Certo.

Então, neste formulário, vamos ter uma área de texto.

Dê um nome, ou texto da mensagem.

Isso deve estar bem.

E então aqui está o nosso botão de envio, não deveria ser "Enviar".

Mas sim, podemos ter uma quebra de linha.

Então agora vamos salvar isso e atualizar bem aqui.

Então isso é apenas o que temos.

Agora, vamos ver, podemos adicionar algo como uma regra.

E então vamos dizer apenas para dar novamente, mais longo, acho que há algo que chega perto.

Dê 10.

Também, esperar, atualizar.

Ok, então vamos fazer isso como 25x25.

Esperar, atualizar, bom.

Então, vamos fazer isso um pouco maior, o dobro de 50.

Vamos ver.

Ok.

Então acho que isso está bom.

E então bem aqui, não estamos realmente específicos sobre o design, só queremos saber como adicionar a funcionalidade de back-end.

Então, vamos subir aqui acima do formulário, certo, e ter um h1, que apenas diz "Insira seus textos abaixo".

Então agora, este é o nosso formulário.

Vamos atualizar e ver.

Então este é o nosso formulário bem aqui.

E então este formulário, vamos dar um método.

Se você conhece HTML, sabe que existem dois métodos ao enviar um formulário, que são GET e POST.

Então vamos deixar isso em branco por enquanto.

E vamos falar mais sobre os métodos GET e POST quando estivermos lidando com Django.

Vamos falar sobre isso mais tarde.

Mas por enquanto, vamos deixar isso em branco.

Então o que queremos fazer agora é que uma vez que você escreva o texto aqui e envie, não na URL, ainda estamos nesta URL, nesta página, e então ele apenas passa alguns dados, tudo o que foi escrito neste lugar quando enviado, que de outra forma é passado para a URL, e é salvo em uma variável, esta chave chamada texto.

E a razão pela qual está salvo em texto é porque demos a ele um nome ano, texto.

Se dermos a ele um nome de palavras.

Eu vou vir aqui e atualizar, vou dizer, como você está, e então eu venho aqui e envio.

Você vê, agora está salvo em uma chave variável de envio com todos esses valores.

Então agora tudo isso está sendo passado para a URL, é muito fácil para nós agora obter todos esses valores no backend.

Então deixe-me explicar o que vamos fazer.

Então, uma vez que o usuário clica em enviar, queremos enviá-lo para outra URL bem aqui, você pode ver que ele está apenas enviando de volta para esta página inicial, vamos criar outra URL, talvez como um contador, talvez como /counter, essa URL vai contar a quantidade de palavras, e então ele vai enviá-lo de volta para o arquivo de template, e então mostrar a quantidade de palavras para nós.

Então vai fazer sentido em um momento.

Vamos apenas fazer isso.

Então primeiro de tudo, estamos supostos a ter uma Action.

Action é onde queremos que todos esses dados sejam enviados.

Então agora não temos realmente qualquer outra URL, vamos criar isso.

Então bem aqui no urls.py, vamos ter outra URL.

E então podemos apenas nomear isso counter.

E então vamos dizer views.counter.

E então vamos dar um nome de counter.

Agora, você sabe que dissemos view.counter, onde nós viemos para nossas views, não temos nenhuma função, o nome counter, então vamos criar isso.

Então bem aqui, só queremos ter uma nova função chamada counter.

E então queremos que ele receba requests.

Agora, também podemos retornar render requests.

E então queremos ter, assim como temos index.html para esta página, queremos ter outro arquivo HTML para esse counter.

Vamos vir aqui e apenas criar um novo arquivo e nomeá-lo counter.html.

Então isso está em branco por enquanto, vamos deixar em branco.

Agora podemos renderizar este counter.html.

E então podemos deixar isso por enquanto.

Portanto, não precisamos de tudo isso novamente, elimine isso.

Então agora o que queremos fazer, é que queremos que esta action vá para o counter, é muito fácil, vamos apenas fazer na action, vamos apenas colocar o nome da URL, que é counter.

Então agora, uma vez que enviarmos, ele leva todos esses dados para esta visão counter.

Agora, vamos para as urls.py, venho aqui, atualizo, ok, não, não assim, e então um "O que está acontecendo", e então precisamos enviar.

Agora você vê, ele vai para /counter.

Com essas palavras, digo, "O que", agora que este counter tem esses dados em particular, esses yo-yo podem obter esses dados.

Então a primeira coisa, obter esses dados, vamos vir para views, vamos ter uma nova variável, vamos apenas nomear essa nova variável como palavras.

E então primeiro, para obtê-la, diga requests.get palavras, eu vou explicar tudo isso.

Então o que estamos apenas fazendo agora é definir uma nova variável, e então houve um request.get.

Então eu quero enviar um request para qualquer coisa que está sendo passada para essa view em particular.

E então queremos obtê-la e o que queremos obter são essas palavras, agora vamos para o index.html, você verá que estamos enviando esses dados em particular para este counter.

E nesse counter estamos obtendo esses dados.

Então request.get palavras, porque temos este nome nós demos ao coletor de texto em particular, como a área de texto, que coletou esses dados, este é o nome atribuído a ela.



# O que queremos ser agora deve ser texto.

Então, vamos apenas mudar isso para testículo, parece mais fazer mais sentido.

Agora você vê que, uma vez que estamos coletando, sim, deveria ser o sanduíche, foi mais fácil porque como um nome atribuído a cada mudança, como tx.

Agora isso não pode, quando tentamos coletar dados dele.

Ele não vê nenhum formulário com o nome de texto.

Então não vai coletar nenhum dado, dar x vai coletar nossos dados.

Então o que podemos fazer agora, já que já temos esses dados, coletamos nossos dados e os armazenamos nesta variável chamada x.

Então, o que está acontecendo agora, vamos voltar para o jeito antigo. Nós apenas escrevemos algumas coisas.

E então pressionamos enviar.

Agora coletamos nossos dados.

E então esses dados são revisados depois de serem armazenados nesta variável chamada texto.

Então você sabe, em Python, você pode, há uma maneira de contar a quantidade de palavras presente em um texto.

Então, deixe-me abrir rapidamente meu terminal de comando aqui e mostrar o que estou falando, depois voltaremos aqui.

Então deixe-me abrir meu shell do Python bem rápido.

E então, digamos que eu tenha uma variável chamada texto com uma frase chamada a.

Oh, você está fazendo.

Então você pode ver agora que isso é 123455 palavras nela.

Agora podemos contar isso, vamos ver, podemos apenas imprimir diretamente, e dizer, comprimento de sexo.splits.

Então o que isso está fazendo é que estamos apenas imprimindo o comprimento do texto, o splits, o splits significa que você obtém cada palavra presente neste texto.

Então, uma vez que ele divide tudo em um valor diferente, ele vai contar a quantidade disso no evento.

Agora.

Vamos fazer isso de novo.

Ok, isso é porque eu não fechei a função de impressão.

Então vamos sair daqui.

E então mais uma.

Assim você pode ver que temos cinco.

Então isso foi porque essa impressão é para isso fecha e essas lentes para esses e isso para o então precisamos adicionar mais uma.

E é assim que o shell funciona.

Então agora você vê que imprime cinco, isso porque temos cinco palavras aqui.

Então é exatamente a mesma coisa que vamos fazer aqui em nosso projeto já é nossa palavra para usar nossas rotas armazenadas nesta variável, apenas vamos adicionar uma nova variável, diremos quantidades de palavras, podemos chamá-la assim.

E então a quantidade de palavras será o comprimento do texto que divide assim.

Então agora temos a quantidade de palavras presente no que o usuário escreveu.

E estudamos desta forma, nomeamos quantidade de palavras, o que podemos fazer agora é enviar essa quantidade de palavras diretamente neste counter.html.

Muito fácil.

Apenas ter uma chave e um valor, vamos dizer quantidade de palavras, diremos quantidade, e então queremos dar quantidade de palavras.

Muito fácil, vamos salvar isso.

E agora podemos dizer a quantidade de palavras é, e então qual é a chave, a chave é quantidade.

Então isso é a chave, isso é o valor.

E então usamos a chave juntos.

Então a quantidade de palavras é isso.

Agora vamos voltar.

E agora escreva texto completo que faça sentido dizer, A, você está bem.

Você está indo bem.

Então vamos contar isso 1-234-567-8910.

Agora pressionamos enviar.

E ele diz a quantidade de palavras é 10.

Então você pode ver agora que diz que a quantidade de palavras é 10 faz exatamente o que queremos evitar.

Então vamos apenas vir aqui e apenas nos dar um h1 copiar, salvar, visitar, atualizar, e agora você vê que a quantidade de palavras é 10.

Para ler, volte e adicione algo para remover isso e agora devemos ter 12344 com enviar diz a quantidade de palavras é quatro.

Então agora você pode ver como estamos começando a mudar, essas são as características que percebo que o Django parou nosso aprendizado no projeto.

Então você pode ver agora que acabamos de obter o contador de texto simples, ele conta tudo.

Agora isso também pode ser muito útil.

Você pode ver apenas um projeto simples onde às vezes você pode construir para uso pessoal se você tiver, tipo, um post de blog.

Então deixe-me apenas abrir um post de blog.

E então você pode copiar todo o texto e depois colá-lo para listar algo daqui.

E então podemos copiar tudo isso.

Ok, há um monte de código.

Você entende do que estou falando.

Então chegamos aqui, colamos.

E então pressionamos enviar, e contou por outro janeiro 28 palavras.

Então você pode ver que também é muito útil.

Às vezes precisamos disso.

Então, agora que fizemos isso.

Mas há algo que quero falar mais ao enviar, você verá que tudo o que escrevemos naquela área de texto, naquele texto, está sendo enviado para a URL, e é bastante longo.

Então, como você pode ver, é muito.

E essa é a razão pela qual podemos acessá-lo.

Mas por que não queremos tudo isso na URL, o que queremos é que seja slash counter.

E ainda assim será capaz de contar este texto sem ter tudo isso na URL assim.

Sem ter isso, só queremos isso, e queremos ser capazes de contar.

Então também vamos falar sobre isso mais na próxima parte.

Agora vamos falar sobre solicitações GET e POST.

Então na última parte, construímos a contagem de palavras simples onde conseguimos colocar um monte de texto.

E então, uma vez que pressionamos enviar, ele conta aquele texto para nós, vamos notar que o outro texto que foi enviado está sendo passado nesta URL.

Agora, deixe-me explicar porque tudo isso acontece.

Então, este método é para você saber o tipo de requisição que está utilizando o tipo de método que está usando neste formulário.

Então, é ou um método GET ou um método POST, esses são os dois tipos que estão sendo usados.

E um método GET é usado principalmente sempre que não estamos passando informações pessoais ou qualquer informação muito segura.

Porque, como eu disse, está sendo mostrado na URL.

Mas se fosse em um método POST.

Este aplicativo, quando usamos um método POST, a informação que está sendo enviada não será mostrada na URL.

Agora isso é usado principalmente, porque pesa em novo assunto, digamos que quando um usuário quer se inscrever em um site, não queremos passar o nome de usuário e senha do usuário bem aqui na URL, isso faz sentido, ou o usuário quer pagar online com seu cartão de crédito, não queremos colocar os detalhes do cartão de crédito na URL dele.

É por isso que usamos o método POST, porque isso é mais seguro.

E isso previne alguns ataques em nosso site.

Então bem aqui, como você pode ver, estava bloqueado, eu não especifiquei nenhum método.

Então, quando eu deixo em branco desse jeito, por padrão, automaticamente, ele usa um método GET.

Então, se eu não colocar nenhum método aqui, mas apenas colocar um método e não especificá-lo, ele automaticamente usa um método GET.

Então, também posso chamar, eu só tentei obter isso ainda é um método GET, ou eu deixo em branco ainda é um método GET.

Agora, se eu quiser usar um método POST, eu preciso colocar aqui que é POST que eu quero usar.

Então, vou fazer dois POSTs.

Então agora, nós só vamos construir este contador de palavras novamente, mas agora usando este método POST, para que você entenda o conceito de post.

Então agora nossas mudanças para o método POST.

Deixe-me salvar isso.

E então voltar aqui e atualizar.

Então agora vamos colocar um monte de texto.

E enviar.

Sim, então bem aqui temos este erro.

Agora diz verificação do token CSRF proibida, solicitação abortada.

Agora isso acontece porque como eu disse, um método POST é usado para informações mais pessoais.

E toda vez que usamos um método POST, o Django espera que usemos algo que chamamos de token CSRF.

Agora CSRF significa falsificação de solicitação entre sites.

Então é como um ataque.

Agora, quando você está passando dados através de URLs, um atacante ou alguém que tenha más intenções sobre o seu site pode interceptá-los e obter essas informações usando este token CSRF.

O Django fornece um token CSRF padrão que nos permite prevenir esse ataque.

Então vamos apenas dar uma olhada rápida no token CSRF.

Então isso vai aparecer, como você pode ver, CSRF tokens são valores únicos, secretos e não imprimíveis que são gerados pela aplicação do lado do servidor e transmitidos.

Então esta é apenas uma definição chata disso.

Mas isso é o que o token CSRF faz.

Ele previne isso então vamos abrir o ataque CSRF.

Então, em um ataque CSRF, um usuário inocente é enganado por um atacante a enviar uma solicitação web que ele não pretendia.

Então é como roubar informações.

Mas quando usamos o token CSRF, isso previne isso.

Então eu espero que você entenda para que isso serve.

Então se não usarmos o token CSRF no Django, ele não permitirá que nosso formulário funcione.

Então precisamos adicionar isso.

Então é muito fácil, apenas uma linha de código, ou não precisamos fazer é pôr dois colchetes e percentagens, e digitar CSRF_token.

Agora, quando isso é feito, tudo está bem.

Se voltarmos, recarregar isso, como colocamos isso em um novo clicamos em enviar? Tenho certeza de que um erro ainda vai aparecer.

Sim, então diz erro de valor múltiplo, /contador.

Então temos um erro.

Mas agora não é.

Por causa da nossa solicitação POST.

Nós cobrimos tudo isso.

Então, isso é como fazer seu método POST.

Mas porque estamos recebendo este erro é porque bem aqui em nossas views, o ponto, você vai ver que dissemos que queremos obter o que o usuário enviou dizer request.get.

Mas agora estamos usando post.

Então também precisamos fazer o ad e apenas dizer, request.posts, é fácil assim.

Agora vamos só voltar a atualizar.

Como colocamos isso para recarregar, vamos voltar, o lixo está correndo.

Porque atualiza.

Agora, com tipo três, conhecimento, é amici.

Diz que a quantidade de palavras é três e então nossa URL está completamente clara.

Não temos nenhuma informação sendo passada na nossa URL.

Então o método POST é muito, muito útil sempre que você está lidando com informações mais seguras e protegidas.

Espero que você tenha entendido a diferença entre solicitações GET e POST ou método POST.

Vamos falar sobre arquivos estáticos no Django.

Agora, o que são esses arquivos estáticos no Django de que estamos falando é qualquer arquivo externo que você use em seu arquivo de template.

Agora, arquivos de template são os arquivos HTML que usamos no Django.

Então este índice de HTML é um arquivo de template.

Este é um arquivo temporário.

Agora qualquer arquivo externo que usamos é nosso arquivo estático.

Como temos um arquivo CSS externo que está ligado a este arquivo HTML, isso é um arquivo estático, se tivermos uma imagem, tivermos um vídeo externo, todos esses são arquivos estáticos.

Então da mesma forma que configuramos para o arquivo de template, lembra, anteriormente neste tutorial, nós realmente vamos às configurações deste projeto, e temos que dizer ao Django onde todos esses arquivos de template estão localizados.

Agora temos que fazer o mesmo para o arquivo estático.

Deixe-me fechar isso.

Agora, digamos que queremos adicionar um CSS externo a esta página.

Vou remover esse formulário, não precisamos mais dele.

Vou dizer, um bem-vindo aos meus projetos.

Agora, digamos que queremos adicionar um CSS externo a este arquivo específico.

E então queremos que esse CSS seja vinculado a ele.

Em um HTML normal, não precisamos usar nossa tag de link.

E então especificamos onde o arquivo CSS está localizado.

Chato.

Django é um pouco diferente.

Da mesma forma que armazenamos todos os arquivos de modelo em uma pasta chamada template, precisamos armazenar todos os arquivos estáticos em uma pasta chamada static.

Agora, vamos fazer isso.

Crie uma nova pasta.

Vou chamar de static.

Este arquivo estático, como eu disse, vai conter todos os arquivos externos dos quais precisamos.

Mas agora precisamos dizer ao Django onde localizar todos os arquivos estáticos.

E então vamos fazer isso também no arquivo settings.py.

É por isso que eu disse anteriormente neste vídeo, o arquivo settings.py é como o alicerce de todo o projeto.

É muito útil.

Então, o que vamos fazer agora é entrar no meu projeto e ir para settings.py.

Então, foi aqui que configuramos para os templates.

Antes dos arquivos estáticos.

Vamos configurá-los aqui embaixo.

Mas antes de descermos, temos que subir primeiro e aqui mesmo, precisamos importar algo que temos que é o OS.

Então, vamos digitar `import os`.

Agora, o que este "os" faz é obter um específico do sistema operacional no qual estamos codificando, como "os" significa sistema operacional.

Então, isso funciona no Windows, no Mac, ou qualquer que seja o nosso sistema.

Então, agora que importamos o OS, o que queremos fazer é descer.

Logo abaixo de `STATIC_URL`, podemos ter algo que vai ser `STATICFILES_DIRS`.

Vamos dizer que `STATICFILES_DIRS` vai ser igual a abrir parênteses, dizer `os.path.join`, e então abrir outro parênteses na mesma página.

E então, apenas deixamos como uma vírgula, `static`.

Do lado direito, também deixamos uma vírgula.

Então, o que ele está fazendo é, do `os` vai fazer o `BASE_DIR`, que é também o diretório raiz deste projeto.

Então, quando digo `BASE_DIR`, quero dizer a raiz.

Então, aqui é o diretório base, a pasta que contém o arquivo `manage.py` é o diretório base.

E então vai para a pasta onde temos `static`.

Então, aqui está essa pasta.

Agora temos isso configurado.

Naquela pasta, agora podemos criar um novo arquivo e nomeá-lo `style.css`.

Então, agora discutimos o `style.css`, vamos estilizar este `h1` e dar uma cor vermelha.

Então, você pode dizer `h1`, e dizer `color: red`.

Então, temos isso.

E agora, temos que vincular este `static` aqui neste HTML.

Fazemos isso no topo do arquivo.

E então, você sabe, em HTML normal, o que precisamos fazer é dizer `link`, e então dizemos `rel="stylesheet"`.

E então dizemos `href`, e então damos como `style.css`, o nome do arquivo, e então fechamos o arquivo.

Agora, se eu salvar isso e vier aqui e atualizar, você verá que temos aquele texto, que está em preto, e o CSS não está refletindo nele.

E isso porque esse link não é visto pelo Django.

Isso é muito detalhado, vamos usar tanto no `href`.

Em vez de apenas escrever estilos, precisamos adicionar algo que chamamos de `static`.

Primeiro, usamos nosso `static`.

Antes do nome do arquivo, colocamos chaves, um sinal de porcentagem, escrevemos `static`, deixamos um espaço, adicionamos uma das aspas, fechamos bem aqui como isso.

Então, é assim que se usa `static`.

Assim, o Django deve ver e saber onde localizar este `style.css`.

Agora, se salvarmos e voltarmos e atualizar, vamos ter um erro, um erro de template.

Agora, vemos que diz `TemplateSyntaxError`.

Diz `invalid block tag on line 1`, você esqueceu de registrar ou carregar esta tag.

Então, agora está dizendo que esquecemos de carregar esta tag `static`.

Então, bem aqui, `static` é como uma tag que o Django vê.

Antes de podermos usá-la, precisamos carregá-la.

Então, isso é muito fácil, apenas vamos para o topo do arquivo.

Sempre que queremos carregar algo no Django, precisa estar no topo do arquivo.

E dizemos, abrimos e fechamos chaves, sinal de porcentagem e `load static`.

Agora, quando salvamos isso, voltamos e atualizamos.

Boom, você vê agora que mostra em uma cor vermelha.

Isso está mostrando que o CSS está funcionando neste arquivo HTML.

Está conectado a ele.

Então, vamos aqui e mudamos para azul.

Salvamos, atualizamos, você vê agora que está azul.

Então, é assim que se vincula um arquivo estático ao seu arquivo de modelo.

Mas agora, vamos mais além.

E depois vamos trabalhar em projetos mais reais.

Então, o que quero fazer agora é ir ao Google e baixar um template HTML gratuito.

E então, vou mostrar como vincular diferentes tipos de arquivos estáticos, não apenas o CSS, agora, incluindo imagens, talvez JavaScript, qualquer um que baixarmos, então não preparei isso.

Só vou pesquisar templates HTML gratuitos e qualquer um que vermos, vamos usar, então vamos ver.

Vamos ver.

Acho que isso deve ser bom.

E então vamos rolar para baixo.

Ok.

Vamos ver.

Vamos conferir.

Sim.

Então, um desses deve ter uma aparência.

Ok, este deve ter muitos CSS nele.



O grátis.

Role para baixo.

Ok, este é grátis, vamos apenas rolar tudo para cima a menos que seja um download gratuito de modelo HTML ou algo assim, e eles apenas pegam um para baixar nas lendas, como você sabe, projeto Django.

Então, deveríamos ter um grátis, na verdade.

Eu conheço alguns sites.

Então, bootstrap me.

Yep.

Mas este site, eu sei que é gratuito.

E então eles apenas vêm aqui e pegam um para baixar.

Jump Jump on então.

Vamos ver.

Então, vamos trabalhar com esta página, download.

Pré-download.

bootstrap cinco baixa enquanto se inscreve para a newsletter.

Então vamos ver.

Ok.

Estava baixando bem aqui, como você pode ver.

Ok.

Dê um segundo.

E então deve estar feito.

Ok, então vamos para a pasta de Downloads e procurar por este extra, e depois soltar no Visual Studio Code.

Então, saberemos que vamos usar.

Isso deve estar feito baixando.

Vamos vir aqui.

Ir para downloads.

Página.

Yep.

Então, bem aqui, podemos apenas arrastar isso ou podemos apenas copiar.

E então vamos voltar duas vezes, ou três vezes.

E então, bem aqui está o nosso projeto Django, vamos colá-lo lá.

Isso deve levar alguns segundos para basear.

Então, agora podemos fechar tudo isso, não precisamos mais de tudo isso.

Agora podemos apenas começar com o que eu disse que íamos fazer, mudando diferentes ou conectando diferentes arquivos estáticos ao nosso projeto.

Isso está feito.

E então isso vai abrir.

Então temos tudo isso aqui.

Bom.

Agora vamos entrar aqui, deveríamos ter aquela página aqui.

E então podemos deletar este índice do HTML.

Vamos apenas deletar isso.

E então daqui, uma página onde temos índice HTML, vamos arrastar para os templates para. Sim, estamos movendo para dentro agora que movemos, movemos isso a próxima coisa que queremos fazer é apenas mover esse asset para o arquivo estático, porque é onde os arquivos estáticos estão localizados.

Então, como eu disse, vemos o CSS, imagem, JavaScript aqui.

Então, vamos fechar esta página por enquanto.

E então bem aqui no índice, isso é o que vai ser renderizado quando a página Index for chamada index.html.

Então, vamos fechar isso.

E agora vamos voltar para o nosso projeto, e então atualizar.

Então você pode ver que o título foi alterado.

E então temos tudo isso.

Então você pode ver, está vinculado com os arquivos estáticos, mas não da maneira que o Django os reconhece.

Então, todos esses estão vinculados, mas não da maneira que o Django os reconhece.

Então agora, vamos apenas mudar tudo que precisamos para este arquivo.

Vamos vir aqui e fazer node static.

E então vamos começar daqui e então podemos realmente fazer isso mais rápido usando os barcos assim.

De qualquer forma, vemos isso, apenas colocamos aí.

Então, nós apenas adicionamos.

Truque bom que uso e então fazemos o sinal de porcentagem, espaço estático.

E então colocamos isso bem aqui.

E agora aqui fazemos a mesma coisa.

Agora fazemos isso bem perto do final de todos esses arquivos, e então apenas fechamos a porcentagem ou fechamos.

Então, se eu salvar isso, e vir aqui e atualizar, devo ver uma grande mudança no site.

Então, você vê agora que temos a tag de pré-carregamento, ou div tag, estilo ou o que quer que esteja carregando.

E então nossa página deve carregar conforme esperado.

Então isso está carregando por muito tempo.

E estou muito certo de que é porque não vinculamos todos os arquivos que deveríamos vincular. Então vamos continuar ligando, vamos continuar ligando.

Então, vamos rolar para baixo.

Então agora, quando vamos aqui e atualizamos, isso deve funcionar, e não deve carregar para sempre. Bom.

Então, agora você pode ver que é isso que queremos.

Certo? Sim.

Então, podemos ver que o site carrega com sucesso.

Então, esta é a maneira básica de pegar um arquivo de modelo e depois os arquivos estáticos podem ser vinculados de maneira diferente, ou não usar ou vinculá-lo no Django.

Agora, espero que você tenha entendido tudo o que falamos sobre arquivos estáticos.

Então, agora vamos falar sobre modelos no Django.

Então, no Django, temos algo chamado modelos.

E esses módulos são usados principalmente para configurar nosso banco de dados.

Então, na maioria das vezes no Django, você não precisa escrever uma única linha de código SQL para colocar seu banco de dados em funcionamento.

É por isso que temos algo que chamamos de modelo, visualização e template.

Então, o modelo é o que usamos para o nosso banco de dados, a visualização é o que o usuário vê e o template é onde está todo esse HTML.

Então, a partir do modelo, apenas passamos todos os nossos dados para o nosso template para o filho entender tudo isso em um minuto.

Agora, os modelos são muito fáceis de configurar, em vez de usar como uma tabela de banco de dados código SQL, vamos apenas usar as classes em Python para construir nosso banco de dados.

Por enquanto, vamos apenas falar sobre as classes e herança na visão e, mais tarde, vamos integrá-la ao nosso banco de dados.

Vamos para um arquivo chamado Moodle dot viewer.

E esses arquivos estão sempre localizados no nosso aplicativo.

Então, bem aqui nesse arquivo, podemos criar um novo Moodle.

Então, apenas criando uma classe, e então podemos nomeá-la como quisermos, digamos, tipo, vamos entrar bem aqui.

Então, digamos fixtures (ferragens) certo.

fixture (ferragem), e então podemos usar isso assim.

E então podemos dar isso como um ID que deve ser um número inteiro.

```pt
E então podemos ter algo como os detalhes, detalhes do serviço.

Também deve ser uma string.

Então, bem aqui, o que sabemos é o nome, temos um ID e os detalhes da fixture.

Então temos isso bem aqui agora.

Bem, como podemos usar isso em nossas visualizações também é muito fácil de fazer é entrar em nosso views.py e aqui no índice, onde podemos simplesmente importar esse modelo.

Então podemos ver importando os modelos da feature.

Agora que temos isso importado, bem, podemos simplesmente fazer isso: vamos dizer feature one.

Deve herdar do modelo de feature.

Então, agora que este feature one está herdando do modelo de feature, podemos facilmente especificar o detalhe dos atributos dessa feature.

Então podemos ver se você se junta.

Mas Id, vamos dar um ID de zero, e um feature one.

Nome, vamos dar um nome, por exemplo, rápido.

Então é uma feature.

Lembre-se de que isso é uma string.

E depois adicionamos mais um, que acho que eram detalhes como detalhes.

Então feature e detalhes.

Vamos dizer, o serviço é muito rápido.

Então agora temos isso aqui, onde podemos simplesmente passar isso para o índice do HTML.

Então podemos dizer, feature deve ser igual a feature.

Vamos ver.

Agora, se formos ao índice no HTML e procurarmos por isso.

Então isso deve estar abaixo do Get Started disso, vamos subir tudo.

E então você começa.

Então isso deve acontecer em cerca de um minuto.

Desça um pouco.

Então devemos ver um get started.

E então, sim, bem aqui, temos isso.

Então, em vez de Lorem ou o que quer que seja, agora podemos simplesmente ter fixture feature.

Isso é fixture, como eu disse aqui, apenas arraste isso para cá, porque eu precisaria de um alerta.

Então isso é fixture, pode ver a feature, que é o nome.

Assim que salvarmos, eu clico aqui e ele atualiza, o que devemos ter agora é o nome, que é rápido.

Então vamos esperar a página atualizar.

Agora você pode ver que temos rápido, não temos mais qualquer coisa que estava lá antes.

E então também podemos alterar os detalhes disso.

Então vamos deletar tudo isso.

E então podemos dizer feature.

Uma feature os detalhes.

E então, se virmos aqui, e ele atualizar.

Você verá que diz que todos os serviços são muito rápidos naquele detalhe.

Agora também podemos fazer a mesma coisa para todas essas, o que podemos fazer é entrar em nossas views.

Então temos o feature one, podemos simplesmente copiar tudo isso.

Certo, vamos pegar duas vezes.

Agora vamos apenas mudar essas para feature dois.

E então vamos mudar tudo isso para feature três.

E então para feature quatro.

Então agora, temos features uma, duas, três, quatro.

E então o ID deve ser um, dois, três.

Então isso é rápido.

Vamos dizer que isso é confiável.

Fácil de usar, e acessível.

Então agora pessoal, um serviço é confiável, é fácil de usar, e nossos serviços são variados.

Então agora temos tudo isso, um, dois, três, quatro.

Bem, como passamos isso para o front-end.

Então podemos fazer a mesma coisa, fazendo algo assim.

Então podemos mudar de feature para feature um.

E bem aqui podemos apenas dizer que a feature dois deve ser feature dois.

E então feature três deve ser feature três e então feature quatro deve ser feature quatro.

E então podemos vir bem aqui e definir isso bem aqui.

E então podemos fazer exatamente a mesma coisa.

Então mudamos isso para um, o que nos leva a, vamos apenas mudar isso.

E então a feature dois.

feature dois detalhes.

Vamos ver isso agora ao atualizar.

Você verá que bem aqui, devemos ter os detalhes da feature dois.

Então veja: serviço rápido é rápido, serviço confiável é confiável, veja que esses dados estão agora vindo de nossas views, estão vindo do back-end.

Então vamos fazer a mesma coisa aqui.

E então você pode ver, vou mostrar uma falha, ou algo que podemos fazer para tornar isso mais rápido e um processo melhor.

Então, sei por que estou fazendo tudo isso do zero.

Então temos a feature, e depois os detalhes.

E então temos a mesma coisa bem aqui.

feature quatro.

Bem aqui.

Descemos, ele atualiza os dados, que adicionamos bem aqui.

Eu estava sendo renderizado bem aqui na visualização, no template.

Mas tenho certeza de que vocês vão concordar comigo que o que acabamos de fazer foi uma perda de tempo.

E vamos supor que temos milhares de dados, é assim que vamos renderizar cada um deles?

E não é possível tornar isso dinâmico, certo?

Porque isso é obviamente dados estáticos, é apenas o que estamos passando do banco de dados de lá, é o que está sendo mostrado aqui, podemos tornar isso mais dinâmico.

Agora, quando eu digo mais dinâmico, sabemos que podemos ter apenas um pedaço de código.

Então você pode ver que esse código está se repetindo quatro vezes no nosso HTML, temos ele aqui uma, duas, três.

E depois temos ele quatro vezes.

Agora vamos cancelar isso por enquanto, vamos cancelar três, e deixar apenas um.

Então podemos ver que ele foi repetido quatro vezes.

Mas agora cancelamos tudo e deixamos apenas um.

Se eu salvar e atualizar.

Só veremos um.

Mas vou mostrar porque fiz isso em um minuto.

Vamos voltar para nossas views.

Em vez de ter tudo isso passando aqui, como feature um, feature dois, isso provavelmente não é uma boa prática, o que você pode fazer é ter uma lista, que posso nomear como features.
```

Então agora que temos todos esses quatro, você pode simplesmente fazer.

Vamos remover todos esses, que passamos.

E então vamos voltar.

Então, em vez da funcionalidade um, podemos simplesmente ver funcionalidades, e então podemos passar essas funcionalidades.

Então agora o que você vê é que temos uma lista que contém todos os dados que temos.

Então todos esses dados, que temos aqui, estão armazenados dentro dessas listas, chamadas fixtures.

Agora, isso é uma prática muito boa.

E é assim que você deve fazer.

E agora estamos apenas passando isso para o HTML com as funcionalidades e funcionalidades.

Então agora, no HTML, podemos percorrer essa lista e obter o atributo para cada um desses itens aqui, então para nós, funcionalidade é todos esses atributos, Victoria, todos esses atributos.

Então, a partir do HTML, podemos percorrer e obter todos os atributos que precisamos.

Vamos lá e ver as seguranças.

Então, aqui, o que vamos fazer é procurar aquele bloco de código específico, no qual queremos fazer o loop, então queremos fazer o loop por esses livros específicos.

Então, a quantidade de dados que temos.

Essa é a quantidade de livros que mostramos.

Agora, se você puder raciocinar dessa forma, verá que isso agora é dinâmico, dependendo da quantidade de dados que temos que mostra a quantidade de textos do card ou bloco sendo emitidos.

Então, e isso é este bloco de código bem aqui.

Então, podemos fazer algo com um loop for.

E então podemos ver para funcionalidade em funcionalidades.

Então, o que estou fazendo é que essas funcionalidades que passei no HTML são uma lista.

Então, posso percorrer a lista etérea.

Então posso dizer para funcionalidade em funcionalidades.

Então, em vez de funcionalidade um.nome, direi, funcionalidade.nome, e funcionalidade.detalhes, do mesmo jeito que fazemos em Python.

E então o que também precisamos fazer é garantir que terminemos nosso loop for bem aqui, dizendo, e for porque você sabe que em Python, o loop for é finalizado automaticamente usando indentação.

Então, se você entende o que estou dizendo, por exemplo, se eu vier aqui e tiver um folio, vou ter uma fixture em fixtures.

Então agora, quando eu fizer algo, posso apenas passar por enquanto.

Então, qualquer coisa sob essa indentação está sob essa pasta, prometo que saí da indentação do código continuado, o loop for está sendo interrompido.

Então, apenas esse bloco de código agora faz parte do loop for.

No HTML, não vemos indentação, o que vemos são apenas tags de código e blocos de código.

Então, é isso que também precisamos usar para finalizar nosso loop for.

Se não colocarmos um fim para o loop aqui, o que vai acontecer é que ele vai percorrer todo o código abaixo disso.

E eles vão ver todo esse código várias vezes, vamos obter todas as imagens várias vezes.

E não é o que queremos.

Então, vamos voltar aqui.

E então isso encerra o loop for.

Então agora percorremos isso e pegamos cada uma das imagens, cada um dos nomes e esses, eu vou salvar.

Agora, quando viemos aqui e atualizamos, você verá que este código, este bloco vai aparecer quatro vezes para ver rápido, confiável, fácil de usar e acessível.

Então agora estamos tornando isso dinâmico.

Isso é o que queremos.

Então, temos apenas um bloco de código aqui, uma tag div aqui, mas está aparecendo quatro vezes, porque estamos percorrendo isso.

E isso porque temos quatro valores bem aqui.

1234.

Também temos mais um, deixe-me mostrar-lhe o, do nosso back-end, não vamos mexer no arquivo HTML.

Mas quando atualizamos, vamos ver mais um minuto.

Então vamos dizer que temos fixture cinco.

Então vamos usar nosso ajustes.

Então temos a funcionalidade cinco, e temos apenas a solicitação, e então o que podemos dizer confiável, assim como nosso serviço é alguns com confiança.

Então também podemos colocar isso na lista.

Então, funcionalidade cinco, e salvamos.

Então agora acabamos de adicionar um novo dado bem aqui nesse nosso pequeno banco de dados.

E então eu não vou tocar no index, HTML, não vamos atualizar.

Ok, então agora temos esse erro, diz referência disponível da funcionalidade antes da atribuição.

Então vamos ver de onde isso está vindo.

Então isso é apenas um erro porque dissemos fixtures em vez de funcionalidade cinco.

Então isso é o que precisamos.

E então precisamos atualizar.

Então antes de carregar, podemos ver agora que temos um novo bloco aqui sem tocar no HTML.

Mas é assim que é fácil tornar as coisas dinâmicas.

Então agora, se pensamos nisso, vamos supor que temos tudo isso vindo do nosso banco de dados.

É assim que podemos tornar nosso site muito dinâmico.

Vamos supor que queremos mostrar uma lista de usuários.

Então, uma vez que um usuário se inscreva automaticamente, vai adicionar bem aqui ou algo assim.

Você pode fazer o que quiser.

E assim, esses são os princípios básicos desses modelos no Django.

Então, vamos fazer mais algumas coisas que precisamos saber.

Então, aqui, fizemos um loop for.

Vamos fazer uma declaração if, da mesma forma que fazemos em Python.

Temos a declaração for onde a declaração if temos o STD de condição.

Vamos fazer isso também no nosso arquivo de template.

Então vamos definir algo como em nossos modelos, vamos ter um Boolean.

Então, vamos dizer se é correto ou é verdadeiro.

Então, o que eu quero que façamos é, vamos supor que essas funcionalidades são verdadeiras, vamos dizer que é rápido.

Agora adicionamos um novo atributo, que é apenas para mostrar se nosso site é realmente rápido.

Então, isso é apenas o básico sobre o que isso é.

Agora, nosso site é rápido, vejamos, característica um pontos é verdadeiro.

E então diremos verdadeiro.

Então isso significa que é realmente rápido.

E então eles fazem o mesmo, é realmente confiável.

Então essa é uma característica dois verdadeiro.

E vamos dizer que não é fácil de usar, digamos que estamos mentindo sobre isso.

Então agora a característica três é falsa.

Não é fácil de usar e característica quatro.

acessível.

Vamos fazer isso verdadeiro.

Sim, verdadeiro.

Então agora primeiro de tudo, vamos vir aqui, atualizar e nos livrar do estresse, preocupação.

Então, novamente, dê um segundo.

Ok, então nós apenas temos isso.

E agora cada um deles tem se essa característica é verdadeira ou não, podemos vir aqui em nosso HTML e ver, quando abaixo deste detalhe, podemos ter uma tag p que diz, verdadeiro.

E então podemos ter apenas menos de uma tag p que diz verdadeiro.

E se eu salvasse isso disse isso.

Vamos lá, essa característica é verdadeira.

Agora, vamos salvar isso.

E dar um F5 bem aqui.

Então você verá que ele diz, Essa característica é verdadeira para cada uma dessas características.

Mas lembre-se, no nosso banco de dados, nós dissemos, Não é fácil de usar para fácil de usar, é falso, mas fácil de usar, ainda assim ele diz Esta característica é verdadeira.

Então, como podemos corrigir este resultado que obtemos com uma característica é realmente verdadeira ou está errado.

Agora contra a declaração condicional.

Então podemos dizer que se característica.é verdadeiro é igual a verdadeiro, então queremos dizer que a característica é verdadeira.

E então também podemos encerrar nossa declaração if.

Então vamos fazer isso.

Então para chamar chaves para o sinal de porcentagem, e então podemos dizer se isso é verdadeiro, é igual a verdadeiro.

Então vamos dizer que esta característica é verdadeira.

E então precisamos encerrar essa declaração if.

Do jeito que eu disse a você que em Python usando a notação para encerrar nossa declaração if e nosso laço for.

em HTML no modelo para usamos um bloco de código para a tag ou qualquer que seja o nome que você queira dar.

Então agora só pegamos se esta característica é verdadeira, é quando diz verdadeiro? Então vamos salvar e verificar.

Então vamos atualizar.

E agora não devemos ver verdadeiro para um ano.

Ok, então como você pode ver, não diz verdadeiro para nenhum disso.

E isso é porque você sabe, em Python quando você quer usar uma declaração if, você usa esses dois pontos.

Para aqui.

O Booleano mesmo em Python, não precisamos de dois pontos ao atribuir um Booleano.

Não, não é dois pontos, nem parênteses ou aspas, eu acho que igual.

Então vamos salvar isso e isso deve funcionar.

Não funcionou porque colocamos essas aspas.

Então vamos dar um F5.

E cada um deles deve dizer é verdadeiro, exceto por isso.

Então ele diz que esta característica é verdadeira.

Esta característica é verdadeira.

Ele não diz nada e diga esta característica é verdadeira.

Então usamos dados de Annie para verificar se aquela característica específica é verdadeira.

E note a coisa divertida que estamos fazendo aqui.

Tudo que estamos fazendo é para em um bloco de código, o que está gerando diferentes dados desse mesmo bloco de código com diferentes valores é muito divertido e muito bom.

Tudo sobre isso.

Mas agora aqui é falso.

Vamos passar para nosso VA e ver que esta característica é falsa.

Como podemos fazer isso? Assim como em Python, temos o if, temos a declaração else, temos a declaração elif (elsif).

Podemos fazer isso aqui também.

Então podemos dizer se característica é verdadeira.

Caso contrário, então else significa que a característica não é verdadeira, então só queremos ter isso que diz, Vamos lá, que diz Esta característica é falsa.

Então se característica é verdadeira, dizer verdadeiro.

Se a característica não é verdadeira, que é obviamente falsa, dizer esta característica é falsa.

Ou vamos vir aqui e dar um F5.

Vamos ver o que temos.

Agora esta característica é verdadeira, verdadeira ou falsa, que é o que era e é verdadeira.

Agora isso é muito, muito, muito bom.

Isso é exatamente o que queremos.

E então podemos também usar o elif nisso.

Então bem aqui, então eles dizem else, podemos apenas dizer elif.

característica.que é verdadeira.

é igual a falso.

Agora, isso deve nos dar exatamente a mesma resposta.

Vamos dar um F5.

Você vê, ele diz que esta característica é falsa.

Então também podemos usar a declaração elif ou a declaração else.

Bem, na maioria das vezes queremos usar a declaração elif, e temos múltiplas condições que queremos definir, mas para este caso são apenas duas condições, é verdade ou falso.

Então, para isso, podemos apenas ficar com a declaração else.

Portanto, se não for verdade, então é definitivamente falso.

Agora, é assim que podemos fazer algum renderização de dados dinâmicos em Django.

Espero que tenha sido divertido até aqui para você.

Então agora eu te apresentei aos fundamentos dos módulos Django.

Mas obviamente, tudo isso são apenas classes Python normais, que estamos herdando em nossas views bem aqui.

Mas podemos tornar tudo isso mais avançado transformando-os em bancos de dados reais.

Primeiro de tudo, deixa eu colapsar isso e isso.

Então se você vier a este diretório raiz, verá que há um arquivo nomeado DB dot SQL lite três.

Então este arquivo é o que armazena todo nosso banco de dados em Django.

Então quando você cria um novo projeto Django, ele definir o padrão automaticamente, você tem seu banco de dados salvo usando SQL Lite.

Então como sabemos, o vários provedores de banco de dados como Postgres, Oracle, MySQL, SQL Lite, como o que está aqui.

Então, como padrão, o Django usa SQL Lite.

E é isso que vamos continuar usando para este vídeo.

Nós também falamos sobre isso.

Mas, por enquanto, vamos nos manter com a sequência leve.

Então, queremos transformar essa classe em um modelo de selva real e Tony em um banco de dados. Precisamos adicionar algumas coisas aqui mesmo.

Por exemplo, onde temos essa fixture, o que precisamos fazer é abrir o colchete, eu digo model dot model.

Agora, isso converte essa classe básica em um modelo.

E então, sempre que estivermos usando este modelo, não precisamos adicionar um ID novamente, porque automaticamente cada atributo ou cada objeto tem um ID quando é criado.

Então agora podemos remover isso.

Então, agora, quando temos nome, podemos mudar para igual a.

Então, em vez de escrever str, escreva algo como models dot current field.

Agora, este model dot char field simplesmente significa campo de caracteres, significa como uma string de caracteres entre aspas, agora vamos abrir um colchete, e ele aceita um atributo, o atributo é Max length.

Então, esse comprimento máximo é cinco o número máximo de caracteres que podem estar dentro deste campo de caracteres.

Então, para este nome, podemos especificar Andre que não deve ter mais de 100.

E então detalhes, como você pode ter adivinhado, ele também deve ser um campo de caracteres.

E existem vários tipos de campos, muitos campos neste módulo de selva, o campo de inteiro, o campo Boolean, há um número limitado de campos que você pode usar.

Então, se você fizer isso, o comprimento máximo, podemos defini-lo como 500, por causa do detalhe, e então para o fez true.

Tenho certeza de que não precisamos mais disso.

Então, vamos apenas ter o nome e os detalhes aqui.

Agora podemos salvar isso. Há algo que precisamos fazer antes que isso possa ser salvo no nosso banco de dados.

Por enquanto, isso é apenas código em um arquivo chamado models spy, precisamos enviar todos esses campos para o nosso banco de dados, para que possam ser registrados lá.

Mas antes de fazermos isso, este aplicativo, que estamos fazendo todos os nossos projetos nele, chamado my up, precisamos registrá-lo no arquivo de configurações do nosso projeto principal, entrando aqui, indo para settings.py.

E então podemos rolar até o topo, procurar onde vemos aplicativos instalados aqui.

E então podemos apenas adicionar um novo atributo e dizer my e isso vai adicionar este my app ao seu projeto principal.

Então, você precisa adicionar isso antes que possa começar a integrar bancos de dados desse my app em seus projetos principais.

Então, agora precisamos migrar esses dados para o nosso banco de dados.

Vamos voltar ao nosso prompt de comando e abrir um novo prompt de comando.

E então chegamos aqui.

E então apenas rolamos para cima.

Então, aqui deve estar, rolamos para cima novamente.

Sim, deve estar bem aqui.

E então, apenas entramos nisso.

Então, o que queremos fazer agora é digitar Python manage.py make migrations.

O que esta linha de comando faz é que quaisquer mudanças que você fez no arquivo de módulos.

Então, se eu voltar aqui, você verá que fizemos algumas mudanças aqui, ele vai salvar essas mudanças.

E então, como você pode ver, ele diz que criamos um módulo chamado fixture.

Então, ele vai salvar essas mudanças.

E depois para enviar todas essas mudanças para o nosso banco de dados, precisamos migrar dizendo Python manage.py migrate.

Então, é um método de duas etapas.

Primeiro, precisamos fazer migrações e migrar.

Então, essas migrações precisamos fazer.

Toda vez que adicionarmos ou mudarmos qualquer coisa nesses módulos com alpha pura, eles entrarão agora removendo este atributo de detalhes, ou digamos que adicionamos outro atributo, precisamos entrar e fazer essa etapa de novo, fazer migrações e migrar.

Para que possa ser refletido no nosso banco de dados.

Como você pode ver, tudo foi migrado.

Temos tipos de conteúdo, admin de autenticação de tipos de conteúdo, todos esses, e então aplicando my up 01 inicia.

Então, o que é isso, todos esses módulos que temos aqui.

Então, agora nosso banco de dados foi migrado.

Mas tenho certeza de que você gostaria de saber para onde foi o nosso banco de dados, basicamente.

Então, vamos abrir agora mesmo.

Temos algo que chamamos de painel de administração Django.

Então, todos esses bancos de dados estão sendo empurrados, movidos para esse banco de dados SQL lite.

Por que não podemos vê-lo e editá-lo e controlá-lo como quisermos, é aí que entra o nosso painel de administração Django.

Agora, obviamente, estamos usando Postgres ou qualquer outra interface, você pode simplesmente usar essas interfaces facilmente, porque são mais avançadas.

Mas, porque estamos começando com os fundamentos do Django, eu gostaria de apresentá-lo ao Django admin py primeiro.

Então, se você chegar ao seu projeto agora e for para /admin, então seu projeto /admin, e você pressionar Enter, verá o que vai acontecer, ele vai pedir para você fazer login.

Então, aqui diz que devemos fazer login, com quais detalhes não temos nenhum detalhe, nunca adicionamos, registramos e entramos no nosso projeto.

Mas este é um site de administração, não é seu site normal, novamente, ele vai para outra parte desse site.

Apenas nós, desenvolvedores, podemos obter credenciais para este site em particular.

E, para fazer isso, vamos entrar no nosso prompt de comando.

E então vamos dizer python manage.py.

Criar super usuário.

Agora, esta linha de comando cria super usuário.

O que ela faz é criar um usuário admin.

Então, aqui ele pede um nome de usuário, eu posso dizer admin, e então ele pede um endereço de email, eu pedi isso, e então ele pede uma senha.

Então, agora que esses suprimentos UCC foram criados com sucesso, o que eu acabei de digitar não foi criado com sucesso.

E eu posso usar esses dados para fazer login.

Sim.

Então, se eu disser admin e vier aqui e apenas inserir a senha e apertar Enter, ele vai me levar a um painel de administração, como você pode ver bem aqui. Aqui, eu posso manter e controlar o meu site a qualquer hora, sem nem precisar de uma interface de banco de dados externa.

Então, se eu for para este menu de usuários, você vai ver que eu vou ver todos os usuários que tenho no meu projeto.

Então, aqui, eu só tenho um usuário, que é o admin.

E esse sou eu, que foi o usuário que criei, bem aqui na interface de linha de comando.

Então, mais tarde, também vamos integrar nosso sistema para adicionar login e registro.

Uma vez que esses estiverem registrados, será salvo nesta lista, também vamos fazer tudo isso.

Mas o que queremos fazer agora é que criamos este recurso de nome de banco de dados.

E como eu disse, migramos isso para o nosso banco de dados.

Mas por que não estamos vendo isso aqui? Deixe-me explicar.

Então, esse painel de administração, tem um arquivo em nosso projeto que está controlando o painel de administração, se formos bem aqui, você vai ver que temos o admin.py.

Então, este arquivo realmente, precisamos registrar nossos módulos, porque ele diz para registrar seus módulos aqui.

Então, este Banco de Dados de Módulos, que criamos, precisamos importá-lo aqui e registrá-lo no admin, uma vez que isso for feito, vai refletir automaticamente aqui.

Então, o que eu preciso fazer é dizer, de módulos, import feature.

E agora eu posso apenas dizer, admin.site.register.

E então isso vai apenas salvar o feature.

Eu salvei isso, como você pode ver ao atualizar, você vai ver agora que tenho uma nova tabela de banco de dados com novos features.

E agora não tenho nenhum banco de dados ali.

Então, deixe-me apenas criar um novo banco de dados, um novo dado, deixe-me ver, rápido, deixe-me ver, nosso produto é muito rápido.

E então deixe-me apenas salvá-lo.

Então, agora que salvei, temos um novo objeto em nosso banco de dados.

Agora, posso vir aqui.

Como tenho um objeto em meu banco de dados, não preciso usar todos esses que criei.

Novamente, todos estes aqui.

Então, agora, estes são velhos, não precisamos de todos estes.

Deixe-me adicionar outro objeto em meu banco de dados e dizer, confiável.

Dizer, somos muito, muito, muito, muito confiáveis.

E agora vou salvar.

Então, agora tenho dois objetos.

Bem, como posso obter todos esses dados que tenho aqui nas minhas views, ou no meu projeto.

Então, o que eu preciso garantir que estou fazendo, antes de mais nada, é que estou importando aquele feature, um módulo de feature.

Então, este módulo aqui, está vinculado a este banco de dados vinculado.

Então, uma vez que eu acessar este feature no meu código, automaticamente, estou acessando todos os valores que temos neste banco de dados.

Agora, vou ter um novo arquivo, vou ter uma nova variável, vou nomeá-la fixture, fixtures, e vou dizer fixture objects.

Então, vou explicar o que isso significa.

Então, temos esta nova variável.

E esta nova variável está obtendo deste fixture que importamos.

E está dizendo .objects.all.

Então, esta feature que importamos é este banco de dados.

Agora, cada um dos valores que temos neste banco de dados, cada dado é um objeto.

Então, como você pode ver, esses são objetos, um objeto, dois, então ele salva daquele banco de dados feature e obtém todos os objetos que temos aqui, obtém cada coisa e armazena nesta variável.

E agora esta variável é uma lista.

E então você está passando para o HTML.

Vamos vir aqui.

E então declarações legíveis porque não temos um valor booleano novamente, apenas temos o nome e o detalhe.

Então, ao percorrer os dados que temos aqui, vamos entrar no nosso projeto e ver o que vamos obter.

Então, vamos ver.

Ele diz rápido, confiável, fácil de usar e acessível.

E tenho certeza disso porque não salvamos nosso arquivo, então vamos vir aqui e salvar.

E então atualizemos para ver o que vamos obter.

Bom.

Então, como você pode ver, diz, operação rápida, muito rápida e confiável, somos muito, muito, muito, muito confiáveis.

Então, pode haver alguns erros no código, como você pode ver bem aqui.

E isso seria por causa da maneira que colocamos aqui, tenho certeza.

Mas você pode ver que esses dois estão mostrados.

Então, apenas use o Control Z aqui.

Então, foi aí que tivemos um problema.

Vamos salvar.

E uma vez que atualizarmos, devemos ter aquele erro de estilização corrigido.

Então, você vê, temos rápido, temos confiável.

Então, agora você vê onde vinculamos do nosso banco de dados bem aqui.

E vinculamos bem aqui em nosso projeto.

Então, o que vou fazer agora é que nem vou mais ao meu código, vou apenas mudar meu banco de dados, vou adicionar um novo dado.

E agora deixe-me dizer, acessível, deixe-me dizer, somos muito acessíveis.

E então quando eu salvar, agora temos três objetos, que são acessíveis e somos muito acessíveis.

Então, o que está no meu banco de dados é agora o que está refletindo aqui, por causa do que eu chamei.

Espero que vocês entendam e gostem do que estamos fazendo neste curso de Django.

Porque esses são os fundamentos que você precisa saber para começar a realmente programar com Django.

Então, agora, vamos continuar com algumas coisas.

And those are the most important things you're going to need anytime we're working with any project in Django.

Por enquanto, vamos usar a instrução if, assim como usamos antes, mas agora estamos obtendo nossos dados daqui.

Então vamos dizer que se o nome for squeak, então queremos apenas adicionar algo, podemos fazer qualquer coisa.

Então eu só quero mostrar isso a você como um exemplo.

Então aqui, podemos ver.

Veja, se o nome do recurso for igual a squeak, então podemos apenas dizer, nunca pode ser e dizer que esse recurso diz que o site é squeak.

E então podemos encerrar as instruções if.

Agora, vamos salvar o resultado e atualizar.

Então, como você pode ver aqui, diz que esse recurso diz que nosso site é squeak, porque diz que o nome é squeak.

Então, é claro que acho que há um erro.

Então, vamos apenas fazer o melhor aqui.

E então atualize novamente.

E isso deve estar abaixo disso.

Então você pode ver que esses recursos dizem que nosso site é squeak, porque obtém que o nome desses dados em particular é squeak.

Então você pode ver que é fácil e viável manipular seu banco de dados usando Django.

Agora, isso é muito importante no Django, e espero que você tenha entendido o que temos feito até agora nesse ponto.

Agora vamos falar sobre autenticação de usuários no Django.

Agora, quando eu digo autenticação de usuários, o que eu quero dizer é entrar ou se registrar em uma plataforma, como quando você vai para facebook.com, e então você entra na plataforma dedicando sua conta a essa plataforma.

Então vamos adicionar essa característica ao nosso projeto.

A primeira coisa que queremos fazer é permitir que um usuário possa se registrar em nosso site.

Agora, isso pode vir com um pouco de complexidade, mas apenas siga comigo enquanto fazemos isso.

Então, a primeira coisa que queremos fazer é ter um novo URL, que será nomeado register.

Então, vamos ter um novo URL aqui.

Então, deve ser views, carregas register.

E depois, vamos dar um nome de register.

Então podemos salvar isso.

E a segunda coisa que queremos ter é nas views.

Então, primeiramente, podemos nos livrar disso, disso e disso.

Então, vamos criar uma nova função.

E vamos chamar de register.

vamos apenas pegar a request por enquanto e retornar render(request, 'register.html').

Então, por enquanto, não temos 'register.html'.

Então, vamos criar isso rapidamente.

E então bem aqui, vamos criar um novo arquivo chamado 'register.html'.

Então, bem aqui nesse 'register.html' queremos ter um formulário simples.

Então, veja, abaixo do sinal.

Agora, vamos usar a tag form no shouldn't mean like an h1 bem aqui na tag form, queremos que este formulário seja um post.

Então, o método deve ser post, como discutimos anteriormente.

E a action ainda deve ser este register.

Então, eu quero que você volte a esta página.

E então vamos ter um input.

O tipo deve ser text.

E então, vamos dar um nome de username.

E então vamos fechar isso.

Antes de fechá-lo, vamos dar um pouco de estilo.

Então, veja, username.

E então podemos apenas adicionar outro para o email.

Então aqui, podemos dizer email.

E o tipo deste deve ser email.

E o nome deve ser email.

Então, se formos para /register, você pode ver username, email, e então vamos adicionar para a senha, então deve ser password, a primeira senha, e o tipo deve ser password.

E o nome deve ser password.

E então essa deve ser password novamente.

E o tipo deve ser password.

E o nome deve ser algo como password2 finalmente ter mais uma coisa, que seria o input para o botão de submissão.

Então isso é um br, então deve parecer bom.

Então, vamos atualizar.

E como você pode ver, temos username, email, password, repetir senha e o botão de submissão.

Então, preenchemos isso e submetemos agora, nada vai acontecer.

Então, diga, apenas um time.

E então, enquanto você ao vivo suas senhas aleatórias e tweets aleatórios, quero dizer, nada vai acontecer.

Mas nos dá esse erro e diz falha na verificação CSRF.

Então, o motivo pelo qual está nos dando esse erro, como eu expliquei anteriormente, é porque estamos usando um método POST, e não adicionamos o token CSRF.

Primeiro, suba e adicione rapidamente o CSRF_token, salvamos isso.

Então, agora temos isso feito.

O que queremos fazer agora é que aqui nessas views, queremos ser capazes de coletar todos esses dados.

E isso vai ser bastante fácil.

Então o que podemos simplesmente fazer é, bem aqui, podemos dizer que o username deve ser igual a request.POST['username'].

Então, o que essa linha de código faz é que qualquer coisa que estamos postando nesta view register, queremos obter e armazenar em uma variável chamada username.

Então, vamos fazer o mesmo para o email.

E então obter o email, a senha e a senha novamente.

E o nome deve ser 'password2'.

Então, agora que temos todos esses detalhes que precisamos, o que podemos fazer é salvar todos esses detalhes em nosso banco de dados.

E o banco de dados em que estamos salvando está bem aqui, usuários, este banco de dados, então este banco de dados é para os usuários ativos em nossa plataforma.

Então vamos voltar.

E agora obtemos isso.

Então estamos verificando se há um método POST sendo usado, como se esta página estivesse sendo renderizada com um método POST, eles querem obter todos esses dummies algo está sendo enviado para esta visualização.

Mas se isso não acontecer, um usuário está apenas procurando pelo template HTML normal registrado.

Então, se o método POST ocorrer, o usuário preencheu os detalhes e clicou em enviar, e então está esperando para ser registrado.

Então, o que podemos fazer agora é ver, primeiramente, queremos garantir que esta primeira palavra seja equivalente a esta senha, queremos ter certeza de que elas são as mesmas, são iguais.

Então podemos fazer isso verificando se a senha é igual à senha dois.

Então, se a senha é igual à senha dois, podemos continuar com o que queremos fazer.

E antes de continuar agora, há algumas coisas que precisamos importar.

E o que precisamos importar é, vamos apenas rolar para baixo por um ano, precisamos importar redirect. Redirect vai nos permitir dizer que criamos um usuário com sucesso, eu quero levar o usuário para outra página, isso nos permitirá redirecionar o usuário para outra página.

E então queremos dizer de Django dot country, o relatório dot models import user ambos.

Então, este usuário é basicamente este modelo de usuário e auth é a função ou os métodos que nos permitem autenticar.

Então, outra coisa que quero importar é mensagens.

Então, de Django, pais input messages.

E vou mostrar por que precisamos de nossas mensagens mais tarde.

Então, agora que temos tudo isso, podemos continuar com nossa autenticação.

Então dissemos que se a senha for igual à senha dois, então mesmo o usuário, isso significa aqui se Ok, eu sei por que isso está acontecendo.

Então, porque estamos usando um pedido. Isso é legal.

Então, primeiro de tudo, vamos salvar isso.

Deixe ele atualizar.

Vamos ver.

Então, isso é para o servidor voltar a funcionar.

Então não usamos a coluna aqui.

Depois disso, devemos usar nossa coluna.

E então, vamos ver.

Ok, então vamos corrigir isso rapidamente antes de continuar.

O que podemos fazer agora é, primeiro de tudo, pegar isso, isso.

Então, agora, quando salvamos isso e eles vêm aqui.

Vamos ver agora se funciona.

OK, funciona.

Então podemos chamar isso, atualizar.

Então temos isso funcionando.

Vamos voltar e continuar.

Então agora estamos verificando se a senha é igual à senha dois. Então, se esta palavra for igual a isso, deve ser igual, então podemos continuar com nosso processo de inscrição, então queremos verificar se este e-mail já existe porque um usuário pode usar um e-mail que já existe em nossa plataforma, queremos verificar se o e-mail que o usuário está fornecendo já existe ou não.

Então agora, podemos simplesmente dizer se o filtro de objeto user.email existe.

Então isso vai verificar se o e-mail já existe.

Então, se existir, queremos lançar um erro e dizer mensagens.

Informar solicitação de e-mail já usado.

Então o que eu fiz aqui foi dizer se usar o filtro de objeto point. Então, este usuário é esse modelo de usuário, que importamos anteriormente.

E eu disse que nosso modelo é este banco de dados de usuário para dizer que quero filtrar o banco de dados e verificar se há um e-mail que já existe com este e-mail que o usuário acabou de enviar.

Então, se isso já existe, queremos enviar uma mensagem.

Então, esta mensagem foi, lembre-se quando eu disse que vou lhe dizer para que serve esta mensagem.

Então isso é para enviar uma resposta de volta se houver um erro ou qualquer coisa.

Então, como há um erro, que é o e-mail já em uso, então dizemos mensagens ou informações solicitam e-mail já usado.

Então vou mostrar como mostrar todas essas mensagens em seu modelo aqui.

Então, se houver alguma mensagem já usada, vai aparecer aqui em uma cor vermelha ou algo assim, também vou mostrar como fazer isso.

Então, aqui agora dizemos e-mail já em uso.

E então queremos retornar o usuário, não queremos continuar com o processo de inscrição, já que o e-mail já está em uso.

Então, redirecione o usuário de volta para registrar.

Então, o que eu fiz, depois de dizer ao usuário o que aconteceu, apenas redirecionamos o usuário de volta para registrar com apenas os detalhes aqui.

Então, o usuário tem que passar por esse formulário novamente e usar outro e-mail livre.

Então queremos usar outra condição.

E o que queremos fazer é verificar se o nome de usuário também existe, porque isso é quase tão importante quanto o e-mail e o nome de usuário, não podemos ter uma conta com dois e-mails ou uma conta com dois nomes de usuário.

Simplesmente não faz sentido porque se o filtro de objeto do usuário e então o nome de usuário é igual ao nome de usuário que existe exatamente o que eu fiz.

Então vamos dizer mensagens, isso é info.

E então vamos dizer solicitação.

e podemos dizer nome de usuário já usado.

E depois disso, queremos retornar o usuário para o registro.

Retorno redirecionar.

Agora, depois de fazer isso, o que queremos fazer agora é, então se a senha for igual à senha dois, então queremos continuar com o processo de inscrição, e então se o filtro de objeto não existir, mostre ao usuário este erro.

Ou se o nome de usuário existir, mostre esse erro.

```md
Então, se algum destes for falso, significa que o nome de usuário é novo e o e-mail é novo.

E a senha está correta.

As iniciais criaram nosso usuário.

Então podemos ver que o usuário não pode ser igual ao usuário.

Os objetos não criam usuário.

Agora podemos dizer criar usuário no qual o nome de usuário é igual ao nome de usuário. Então, o e-mail vai para o e-mail.

E então a senha vai para a senha.

Então, o que acabei de fazer foi dizer que deve criar um novo usuário com essas credenciais.

Então, estas são as credenciais desta credencial.

Então, quando o nome de usuário for igual a este nome de usuário, o e-mail for igual a este e-mail e a senha, eu escolhi uma dessas duas senhas, já que são a mesma coisa.

Então eu escolho a primeira.

Então, agora que temos todos esses detalhes, o que eu quero fazer é ir em frente e salvar esse usuário.

Então o usuário salva o código.

Depois de fazer isso, quero apenas redirecionar o usuário.

Primeiro de tudo, para o login.

Então, como o usuário foi criado com sucesso, redirecionamos o usuário para o login, para que ele possa tentar fazer login e ver se foi criado com sucesso.

Então, usamos a instrução if: se a senha for igual a essa, ele deve simplesmente prosseguir e fazer isso.

Mas e se a senha for falsa, tipo, se não forem iguais? Então, precisamos de uma instrução else que diga que a senha está errada, enviamos uma mensagem dizendo messages.info, request e então recebemos "senhas não são iguais".

E então redirecionamos o usuário de volta para o registro.

Então, depois disso, podemos apenas dizer, depois que tudo também estiver carregado, então, se não for uma requisição POST, ele pode simplesmente fazer isso.

Então, vejamos aqui, podemos ver um else assim.

Então, é apenas uma requisição normal nesta página, ele pode simplesmente renderizar este registro com HTML.

Mas agora, queremos mostrar todas essas mensagens, se houver qualquer erro. Veja essas mensagens, precisamos mostrá-las aqui se ocorrer algum erro.

Então, primeiro, para mostrar essas mensagens, precisamos fazer é muito simples, apenas subimos aqui e dizemos que usaremos um loop for.

Dizemos: for message in messages, como um H5, que apenas exibe a mensagem.

Então, qualquer mensagem que seja, ele apenas exibe, e então encerramos o loop for.

E por agora, vamos apenas estilizar as mensagens, então podemos vê-las.

Então, vamos dar à tag h5 a cor vermelha.

Isso para mostrar um aviso.

Então agora tudo isso está funcionando.

O que eu quero fazer é vir aqui.

Primeiro de tudo, já que sei que tenho um nome de usuário chamado admin, vou tentar registrar com o nome admin.

E então digamos admin@gmail.com.

Eu vou usar uma senha aleatória.

Agora, você verá que diz: nome de usuário já utilizado. Isso porque já temos um usuário admin aqui, ele detecta automaticamente que esse nome de usuário foi usado e nos diz nome de usuário já utilizado.

Vamos fazer o mesmo para o Gmail, agora não temos nenhum Gmail, mas podemos vir para esse usuário admin.

E então vejamos se podemos adicionar este usuário admin com um e-mail.

Dando um e-mail, digamos admin@gmail.com.

E então vejamos, tentemos salvar isso.

Então agora ele contém admin@gmail.com.

Então vamos copiar isso agora, vamos tentar usar esse e-mail, bem, vamos usar um nome de usuário aleatório, uma senha aleatória.

Digitar agora o que ele diz é: seu e-mail já foi usado.

Então ele obtém todos esses erros para nós.

Então, o que quero fazer agora é usar informações completamente novas para que possamos vê-las.

E então podemos testar isso.

E então podemos testar geo.com.

Underline vamos dizer, apenas me dê alguma senha.

Digitar.

Então ele diz: reverso para login não encontrado, eu estava esperando por esse erro.

Então o usuário, a pessoa foi criada com sucesso.

Se eu vier aqui e atualizar, você verá agora que tenho esse endereço de e-mail com tudo o que precisamos.

Mas o motivo disto é por causa da linha 29, onde dizemos return redirect login, vamos rapidamente voltar e ver o que está acontecendo.

Então, na linha 29, depois de salvar o usuário, depois de criar o novo usuário, redirecionamos o usuário para o login.

Mas não temos nenhuma função de login por enquanto.

Eu queria que pudéssemos fazer o login.

Então precisamos fazer isso a seguir.

Até agora, conseguimos criar um novo usuário, apenas registramos um usuário em nossa plataforma.

E o que queremos fazer agora é permitir que o usuário faça login em nossa plataforma.

Então, quando criamos um novo usuário e testamos nosso código, vimos que o usuário foi criado com sucesso aqui mesmo em nosso banco de dados, que é o Tim, mas ele nos dá um erro, que diz return redirect login.

Então esse erro é porque não temos nenhuma URL chamada login por enquanto.

Então vamos resolver isso, vamos criar uma nova URL para o login, vamos permitir que um usuário faça login no site, então quando um usuário fizer login no site, em vez de apenas mostrar todos esses dados fictícios.

Deixe-me abrir rapidamente nosso site.

Então, rápido, rápido, rápido.

Então, em vez de mostrar como uma página ou algo assim, pode apenas dizer bem-vindo Tim, ou bem-vindo admin ou qualquer que seja o usuário, podemos fazer isso.

Então vamos fazer isso.

Então, aqui, o que precisamos fazer é garantir que, entrando em urls.py, precisamos criar uma nova URL chamada path.
```

Agora visualize o login.

E então o nome deve ser login.

Então agora que temos esse URL, precisamos criar uma função chamada login.

Então, bem aqui, logo abaixo da função registrar.

Vamos criar uma nova função para o login.

Faça um quiz e depois pause por enquanto.

Não, não, não, vamos retornar render request e então login.html.

Então, vamos copiar estes e isso deve ser seu login.

Então vamos salvar isso.

Bem aqui.

Vamos criar um novo arquivo chamado login.html.

Bem aqui, há um h1, que está em loop agora.

Abaixo dele, carrega um monte de formulário.

E então este formulário queria que a ação fosse login e o método fosse post.

Então agora há uma tag p que diz nome de usuário.

E então um input como wasted tipo de texto e o nome do nome do usuário.

E então há outro apenas para a senha e então input type, senha e então dê um nome de senha.

E então o último, vamos apenas ter uma quebra bem aqui.

E então outro input para o Enviar.

Então tipos de carne estão seguros.

Então agora temos esta página, vá para o login agora, você vê agora que temos esta página de login.

Então vamos corrigir este login, vamos fazer um usuário realmente ser capaz de fazer login.

Então, o que precisamos fazer é apenas o que fizemos nas views para o registro, podemos fazer para o login também oferece e obter é um método POST para dizer se request.method é igual a post é um método POST que foi buscar o nome de usuário que foi enviado não deve ser request.post.

E então nome de usuário e então a senha que foi enviada também.

Não deve ser request.post senha.

Então agora que temos essas duas, informações salvas nas variáveis, o que podemos fazer é dizer que o atributo do usuário é igual a nos que autenticar nome de usuário não deve ser igual a nome de usuário.

Senha deve ser igual a senha.

Então agora quer educar com esses detalhes.

Agora queremos fazer login no usuário com esses detalhes.

Mas antes de seguirmos em frente e fazermos isso, e se o usuário fornecer informações erradas, que não estão no nosso banco de dados? Então queremos verificar isso, queremos verificar se o usuário está realmente registrado ou não.

Então diremos se o usuário não for conhecido.

Então é assim que se verifica.

Então o que você vê é que o usuário não é conhecido.

Se o usuário é conhecido.

Isso significa que o usuário é falso.

Isso significa que o usuário não está em nossa plataforma, mas não é conhecido.

Agora, como o usuário está realmente em nossa plataforma está registrado.

Então podemos dizer login, para que saibamos que o usuário é real.

E seu pedido de usuário após o login, agora podemos redirecionar o usuário para a página inicial.

Mas e se o usuário não estiver registrado, então queremos enviar as mensagens, mensagens e as mensagens recebidas mensagens do info quiz que dirá credenciais inválidas.

E então o que redirecionará o usuário de volta para esta página.

Então retorna redirect de volta ao login.

Página, quem tiver mais.

Bom.

Agora fizemos tudo isso.

E então o que queremos fazer é entrar no nosso login e também nas nossas mensagens.

Então usamos um loop for e dizemos for message in messages.

Há um h3 dizendo a mensagem e depois menos que o loop for.

Então eles apenas dão um estilo simples novamente.

Eles dirão que h3 deve ter uma cor vermelha.

Ok, vermelho.

Então agora, vamos testar isso.

Podemos vir aqui na nossa página, atualizar, e então fazer login como admin, então podemos ver admin, e depois fazer login.

Então nos dá este erro e como eu disse, apenas apagamos porque não adicionamos nosso token CSRF.

Então vamos adicionar isso agora.

Então bem aqui, apenas diga, sinal de porcentagem CSRF_token, em letras minúsculas.

Agora recebendo não atualizamos? Não, isso quer dizer.

E então diga Enviar.

Você vê agora que ele me redireciona para esta página para a página inicial, isso significa que fizemos login com sucesso.

Mas agora para eu saber realmente, o que vou fazer é em vez de uma página inicial do bootstrap, vou dizer bem-vindo, seja qual for o nome do usuário.

Então vamos fazer isso.

Bem aqui no index.

Padrão, onde vemos uma página inicial do bootstrap.

Então temos ao começar.

Ah, sim, bem aqui.

Novamente, não, não, isso deve ser mais fácil.

Então vamos apenas adicionar um P e ver se é isso que estamos procurando.

Novamente, saiba que é bem aqui.

Então não há idade, então não é o com espaço.

Então isso está bem aqui.

Então vamos acabar com isso.

Então podemos fazer agora uma declaração if e dizer, user.is_authenticated.

Então isso está verificando se o usuário está logado.

E então se o usuário estiver logado, em vez de mostrar uma página inicial do bootstrap, só queremos mostrar bem-vindo.

E então diremos bem-vindo ao usuário.

nome de usuário, associado user.username.

Então isso obterá o usuário atual que está carregando e obterá o nome de usuário, desculpe dizer, bem-vindo admin.

Mas e se o usuário não estiver logado, se o visual forem apenas visitantes aleatórios, então queremos ter outra declaração.

Então, terminamos com end if.

E agora vamos verificar isso.

Com atualização, devemos ver bem-vindo admin.

Então como você pode ver, agora diz, bem-vindo admin.

Mas agora deixe-me apenas copiar este URL e depois abrir como uma guia anônima, ou janela privada onde nenhum usuário está logado, você não verá que será diferente.

Então o que vai estar escrito aqui será diferente.

E agora, eu vejo que em uma página Bootstrap, onde diz "Welcome Admin", parece que está logando, então, diria "Welcome, Tim", ou se fosse John, diria "Welcome, John".

Então, é assim que você pode fazer coisas simples como essa.

E então, vamos voltar ao nosso código.

Então, bem aqui, vimos como fazer isso, podemos também fazer o mesmo para você, veremos todos os serviços.

Se o usuário não estiver logado, como se ele apenas estivesse aqui, podemos mudar tudo isso para "Login" e "Sign Up".

E então, uma vez que o usuário esteja logado, continuamos com o "Log Out".

Então, falamos sobre como ele pode se registrar na nossa plataforma.

Falamos sobre como ele pode fazer login na nossa plataforma.

Mas não falamos sobre isso, nosso usuário pode fazer log out.

Então, precisamos adicionar uma funcionalidade para que você não precise sempre falar na nossa plataforma, ou apenas tentar limpar os cookies e o tempo que o usuário deseja fazer log out.

Então, queremos ter um botão onde você diz "Get Started" e realmente fazer log out quando clicarmos nele.

Então, essa é a coisa mais fácil de fazer neste tutorial.

Agora, vamos apenas procurar por seus CDs "Get Started".

Então, isso está bem aqui.

Então você sabe que não é apenas procurar, ok, então isso está bem aqui.

Como já sabemos onde está, o que queremos fazer é usar aquela declaração if novamente, e ver que se o usuário estiver logado, então queremos mostrar isso onde o usuário não está logado, queremos mostrar é login.

Então, vamos ver.

Se o usuário estiver autenticado, significa que o usuário está logado, quero mostrar recurso para o usuário fazer log out.

E então, vou deixar isso em branco por agora.

Eu vou voltar quando tiver feito a URL e as visualizações para o logout.

Eu vou voltar e mudar isso.

Mas e se o usuário não estiver logado, então haverá um else lá, o que eu quero mostrar é a mesma coisa, mas o que eu quero mostrar agora é login ou signup.

Então agora vamos verificar esta adição aqui.

Estou logado.

Então eu aperto atualizar.

Diz nossa tag de fechamento, se.

Então, a razão pela qual isso nos dá um erro é porque, como eu disse, precisamos finalizar a declaração if sempre que terminarmos.

Então, precisamos terminar o if e depois atualizar novamente.

Como estamos logados neste navegador, devemos ver "Log Out".

Bom.

Quando vamos para o modo incognito onde não estamos logados, devemos ver "Login" ou "Sign Up".

Bom.

Então agora o mesmo botão, mas com textos diferentes.

Isso é do que estou falando quando digo dinâmico, quando digo que algo é dinâmico.

Então agora vamos cuidar desse login desse log out.

Primeiro de tudo, esse login deve ser fácil, posso apenas redirecionar o usuário para login.

Então, quero dizer, vamos lá e atualize.

Então, se um usuário não estiver logado, posso clicar aqui e nos levará para o login.

E vai ter como um botão abaixo, vou dizer se você não está logado, se você não tem uma conta, então crie uma ao se inscrever.

Agora vamos fazer isso.

Então, o que queremos fazer é log out.

Agora, vamos fazer isso, podemos simplesmente ir para o VS Code.

E então, nossa nova URL caminho log out.

Views faz log out.

Nome = log out.

E então, nas visualizações, bem aqui, podemos simplesmente ter o log out que leva a requisição.

Ali, o que eu quero fazer é simplesmente fazer log out da requisição.

Então, essa única linha de código irá desconectar o usuário da nossa plataforma.

E então, uma vez que o usuário tenha sido desconectado da plataforma, queremos redirecionar o usuário de volta para a página inicial.

Então, vamos verificar isso.

Mas antes de podermos verificar, precisamos ir ao nosso index.

E bem aqui no log out, precisamos vincular isso ao log out.

Bom.

Então, vamos aqui agora e atualizamos.

Então, uma vez que fizermos log out, ele me redirecionará de volta para esta página.

Mas agora não mostra "Welcome, Admin" e é "Login" ou "Sign Up".

Então é assim que fazer a autenticação básica do usuário no Django.

Espero que você tenha entendido o que fizemos até este ponto.

Então, agora vamos olhar para URLs dinâmicas no Django, o que quero dizer com URLs dinâmicas é que, por exemplo, temos a mesma URL, mas com ID diferente passada nela.

Então, deixe-me explicar rapidamente isso de forma prática.

Digamos que temos nosso site / Tommy taco.

Então, nosso site / Tommy e essa é a página de perfil, isso vai nos dar um erro porque não temos nada assim.

Mas digamos que esta é a página de perfil desse usuário chamado Tommy.

E então, também temos um usuário chamado Tim.

E então, também temos um usuário chamado John.

Então, digamos que para cada usuário no nosso site, eles têm uma página de perfil.

Então, para nós, isso vai ser apenas uma página que vamos codificar.

Mas como está recebendo nomes de usuário diferentes, serão saídas diferentes.

Então, isso é roteamento de URL dinâmico, diferentes URLs sendo passados, ou diferentes valores sendo passados na URL.

Agora, deixe-me explicar isso de forma mais prática.

Então, vamos bem aqui.

E então, nas URLs, fechamos isso.

Bem aqui, podemos fazer algo como passar, então podemos ver algo como, posts / str:slug e então fechamos.

Então, o que isso significa é que teremos slash posts, ou site / posts, então, strings.

E estamos nomeando a string slug.

Então a variável é chamada BK e é uma string, se quisermos que seja um inteiro, podemos simplesmente dizer, ambos, Eu gosto de manter como string.

Então agora podemos apenas adicionar uma vírgula e dizer, views, posts.

E depois podemos dar um nome de posts.

Então agora primeiro, para poder coletar isso em nossas views, precisamos vir aqui agora.

E então rolar até o final.

Outra nova view, eu digo, posts, serviço instável vs post retornar s, então posts, e você vai aceitar uma solicitação.

E depois dessa view, aceitando uma solicitação, também vai aceitar essa variável específica que foi passada, que se chama PJ.

E então agora o que nós queremos fazer é dizer, então temos este PK, e então Kathy retorna render request, e a lista vai para HTML.

Então há um script em um novo arquivo, chamado post.html.

Agora vamos enviar qualquer valor que esteja nesse URL para este post HTML.

Para que possamos ver BK deve ser próximo a pk.

Agora vamos salvar isto.

Bem aqui você vê que o valor no URL é BK.

Agora vamos salvar isso para se tornar agora eu direi /posts/12.

Então agora você vê que diz que o valor no URL é 12.

Hoje apenas faça este h1.

Então agora você vê que diz valor no URL é ter.

Então o que estiver neste URL é como Tim, o valor neste URL é Tim.

Então é dinâmico, o que passamos no URL.

Isso é o que é usado na maioria dos sites, como quando você tem uma página de perfil, que é como john, e então você vê o nome do pressionando john, então como dizemos, temos o nome de usuário se tornando, tornou-se o nome de usuário para o topo no banco de dados, eu obtenho a foto de perfil, obtenho a idade, obtenho todas as postagens, obtenho tudo o que precisamos sobre um usuário específico.

Então ainda é um mesmo arquivo de modelo, um mesmo código, mas saídas diferentes relacionadas ao que foi passado, ou consulta para formar no URL.

Então é isso que queremos dizer com URLs dinâmicos.

Agora, também podemos tornar isso mais adicionando alguns mais recursos como bem aqui, nos URLs.

Podemos ter nosso inteiro aqui.

Então agora isso é um inteiro.

Se viemos aqui, e então atualizamos a página, você verá dados de página não encontrados.

Por que isso aconteceu? Isso é simplesmente porque escrevemos em nosso código, dizemos que queremos apenas um inteiro bem aqui.

Então, se algo além de um inteiro está sendo passado no URL, se você ver isso ou não encontrado, então não faz parte do nosso código, não faz parte do nosso projeto, onde a mudança é agora 298.

E digite, você vê agora diz que o valor aqui é 98.

Isso é porque vê o que dissemos para procurar, vê o que dissemos para você procurar.

Então essa é a mesma coisa que podemos fazer com qualquer tipo, qualquer tipo de dado.

Mas a coisa boa com string, o que eu gosto de usar string é porque posso colocar um inteiro em uma string, e vai, ele vai ver isso como uma string, mesmo que eu signifique como um inteiro.

Então, na maioria das vezes você quer usar strings porque ajuda você a evitar erros complicados.

Então você não quer usar inteiro lá.

E então alguém consulta seu site e diz o mesmo.

E então vamos mudar isso para um inteiro e dizer equipe, e o Presidente vem ao seu site e vê esses erros.

Claro, isso não é desenvolvido apenas por um usuário que quer usar seu site.

Mesmo que você defina debug para false, o melhor, ele ainda não quer ver um erro.

Então, na maioria das vezes, meu conselho pessoal, quando você está usando seus URLs dinâmicos, você está muito, muito, muito específico sobre isso, eu aconselharia você a usar a string nele.

Então nós também podemos fazer algo como tornar isso mais utilizável.

Então vamos mudar isso para string de volta.

E então bem aqui.

Então você sabe, isso em nosso contador, apenas remova tudo isso.

Então, vamos ter uma postagem, que é igual a 12345.

Então há john, sim, isso é bom.

E então estamos passando isso para o contador.html.

Então vamos passar isso bem aqui.

Então agora no contador, o que eu posso fazer é ter um loop for.

Então agora eu posso fazer um loop através dessa postagem, posso dizer para postagem em posts, e depois, deixe-me encerrar o loop for.

O que posso fazer agora é ter uma tag de link.

Então neste h1, posso ter uma tag de link, eu digo.

Deixe-me dar-lhe em branco por agora.

E então o que eu posso apenas dizer é posts.

Então bem aqui, para mim, o que eu quero fazer é, deixe-me voltar ao contador.

Então eu vou e vou para /counter.

Então você pode ver que tenho 12345678.

Então, correlacionando com a quantidade que adicionei nesta lista, o que quero fazer é que uma vez que um usuário clique no primeiro, deve ir para /post/1.

E então, se você clicar como nesta equipe, deve ir para /post/team.

Então, se você sabe como fazer isso, então você sabe como consultar isso do banco de dados quando você apenas faz object dojo, e então obtém tudo que você precisa.

Vamos fazer isso rapidamente.

Então agora, o que eu apenas quero fazer é dizer, o sinal de porcentagem e fechar isso, e então eu vou apenas dizer URL.

posts.

E então era isso ID buzz? Não, apenas primeiro.

Sim.

Então assim, no vencedor, atualizar.

Você verá que o primeiro é 1, come.

O último é john.

Que bem aqui é john.

Se eu voltar, e eu clico nisso, você vê equipe, se eu voltar e clicar nisso, você vê que é 4.

Então é assim que obter a partir de uma lista e depois transformá-la em um URL.

Então esse simples gatilho, esse recurso de demonstração que ensinei, pode ser usado também quando você está obtendo alguns valores do banco de dados.

Então, digamos, por exemplo, que você tenha um blog.

E cada um desses itens representa postagens de blog do seu banco de dados aqui.

Então, no mesmo blog, ao clicar nele, você deve ser capaz de ler todas as postagens do blog mencionado, blog dois para ler todas as postagens e também blog três, e assim por diante.

até agora.

Então agora, espero que você tenha entendido o que fizemos nesta parte.

O que eu quero fazer agora é guiá-lo pelos passos de como você pode conectar outro provedor de banco de dados ao seu projeto Django.

Ao longo deste projeto, estivemos usando o SQLite, que foi fornecido por padrão pelo Django.

Como eu disse, existem outros como Postgres para nosso grupo, MySQL, DM2 e muitos outros que você pode até pensar.

Para este vídeo, vou mostrar como conectar o banco de dados Postgres ao seu projeto Django.

Então, a primeira coisa que você quer fazer é ir ao motor de busca e apenas baixar o Postgres. O que você quer digitar é download Postgres.

Isso vai levar você ao site onde você poderá baixar o Postgres obviamente.

Então, sim, este aqui, Postgres does Boggs / download, e então ele te leva para lá.

Você vê diferentes versões e diferentes anos para diferentes sistemas operacionais.

Então, apenas clique no seu.

Estou no Windows, então já tenho o Postgres instalado.

Então, eu não vou baixar esses.

Mas se você estiver no Linux, clique na versão correspondente. Se você estiver em um Mac, clique nesta versão, Windows, Solaris, BSD.

E a próxima coisa que você quer baixar é o PG Admin.

Na verdade, recentemente, uma vez que você baixa o Postgres, o PG Admin vem automaticamente com ele.

Mas se você baixar o Postgres e instalá-lo, e não ver o PG Admin, então só precisa vir aqui e baixar o PG Admin, e baixar a versão correspondente.

Então, depois de ter todos esses baixados e instalados, você pode simplesmente abrir o seu PG Admin.

Então, uma vez que você abre o seu PG Admin, isso é o que você vai ver.

Agora, o que você quer fazer é abrir este servidor assim, e então sob Postgres SQL, abrir banco de dados.

Agora, se você quiser criar um novo banco de dados, apenas clique com o botão direito neste banco de dados e selecione criar, e então clique em banco de dados.

Então, isso vai trazer um formulário para você criar um novo banco de dados.

Podemos adicionar um banco de dados, meu projeto.

E salvar, isso vai criar um novo banco de dados para nós.

Isso deve salvar tudo o que foi criado em nosso banco de dados. Vou mostrar como conectar esse banco de dados ao seu projeto Django de maneira bastante fácil.

Isso deve criar.

Dê alguns segundos.

Claro, vamos ver.

Isso não deveria demorar tanto.

Mas na maioria das vezes, o PG Admin geralmente trava ou demora de acordo com seu sistema.

Então, veja, ok, bom.

Isso foi criado. Podemos fechar isso e abrir.

Agora que temos isso aberto, sabemos que o nome é "meus projetos", onde podemos apenas abrir esquemas.

E depois abrir tabelas.

Como você pode ver, as tabelas estão vazias.

O que podemos fazer agora é entrar no VS Code.

E queremos ir para as configurações apenas para abrir nossa pasta de projeto e depois ir para settings.py.

Então, descendo, vamos ver banco de dados.

Então, bem aqui onde vemos banco de dados, o que queremos fazer é alterar a engine.

Podemos ver que está como Django DB .backends .sqlite3, queremos mudar isso para PostgreSQL.

Então, planejamos isso, e o nome deve ser o nome do banco de dados.

Sabemos que o nome do banco de dados é "meu projeto".

Então, bem aqui, eu só quero colocar "meu projeto".

E a próxima coisa que deve estar clara é o usuário.

E o usuário é Postgres, então basta usar Postgres.

E depois disso é a senha.

Então, a senha que você definiu quando abriu pela primeira vez o PG Admin é o que deve estar aqui.

Vou deixar isso em branco por enquanto.

E o host por agora é o localhost.

Então, temos tudo isso.

E depois de ter tudo isso configurado, o próximo passo é abrir o prompt de comando.

E no seu prompt de comando, você precisa instalar duas bibliotecas, e o psycopg2 especificamente.

Psycopg2.

E, depois de instalar o psycopg2, eu já tenho isso instalado, então vou sair disso.

Então, estou saindo disso.

E então, eu digo pip install pillow.

Essas duas bibliotecas vão permitir que você conecte o Postgres ao seu projeto Django.

Sem essas bibliotecas, você vai receber um erro.

Então, o pillow cuida de tudo.

Digamos que você tenha um banco de dados que lida com imagens ou arquivos, o pillow cuida disso e ajuda a conectá-los.

Como este requisito já está satisfeito, eu já tenho isso instalado.

Então, uma vez que você tenha isso configurado e instalado, o que você precisa fazer é apenas python manage .py makemigrations.

Então, antes de dizer makemigrations, vou entrar no meu código e inserir minha senha.

Então, bem aqui, eu vou colocar minha senha e então vou dizer makemigrations.

E isso deve fazer as migrações necessárias.

Então, vamos dar alguns segundos.

Oh, isso não deve demorar.

Então, vamos fazer makemigrations, é só fazer mudanças detectadas.

Então, python manage.

```markdown
Então agora voltaremos ao Postgres, nesta tabela, clique com o botão direito e atualize. Você verá que agora temos um monte de tabelas, até mesmo com aquele modelo que criamos meu app underscore fixture.

Então, se eu apenas arrastar isso para baixo e disser visualizar dados, todas as regras.

Então, vou visualizar todos os dados que tenho naquele modelo mom fixtures em meu app.

Então, vamos esperar que isso apareça.

Vamos ver.

Isso não deve demorar muito.

Deve levar alguns segundos.

E mostra todo o banco de dados que salvamos do nosso painel de administração anteriormente.

A questão estava bem aqui, porque migramos tudo para cá.

Este deve ser o banco de dados que deve começar a usar a partir de agora.

Você pode fazer o mesmo para MySQL ou Roku, como mencionei, são processos similares.

E tenho certeza de que pode achar legal e mais útil usar algum banco de dados externo fornecido em vez de apenas usar o SQL Lite padrão.

Então agora, é isso.

E a saída de dados, não temos nada aqui agora.

Mas agora, se usarmos, como se criássemos um novo agora, ele deve aparecer aqui.

Então, é assim que conectar o Postgres ao seu projeto Django.

Agora, espero que você tenha entendido tudo mesmo neste vídeo.

E sim, espero que agora você saiba como conectar o banco de dados Postgres ao seu projeto Django.

Então, pessoal, isso vai ser tudo para este vídeo.

Espero que tenham gostado.

Oh, claro.

Se gostaram, por favor, não se esqueçam de esmagar o botão de curtida e se inscrever.

Hey, pessoal, bem-vindos a este vídeo.

Neste vídeo, vamos construir um blog simples usando Django.

Então este vídeo será em duas partes.

Na primeira parte, vamos fazer tudo o que precisamos para configurar o blog.

E então começaremos com a postagem de um blog, e mostrando todas as postagens do blog.

E na próxima parte, vamos ter mais alguns recursos, como pegar apenas algumas palavras específicas das postagens, e então permitir que o usuário clique na postagem e leia suas postagens.

Então, espero que gostem de construir isso comigo.

E então, deixe-me mostrar uma demonstração rápida do que vamos construir.

Então, aqui, eu tenho esta postagem, posso clicar nesta postagem para ler tudo ali.

E então vai me dizer o dia, a hora, o título e a postagem são um blog muito movimentado, posso fazer o mesmo para qualquer outra.

E então, vamos ler rapidamente a última.

Então agora, tudo isso está sendo obtido do banco de dados.

Agora, se eu vier aqui e adicionar uma nova postagem, vamos apenas adicionar algumas baboseiras ali.

E salvar.

Agora que está salvo, preciso atualizar.

Então, isso é atualizado automaticamente aqui.

Agora, isso é o que vamos construir neste vídeo.

E então, este template que estamos usando é um template muito básico.

Como você pode ver, também vou deixar o link para este template e o código-fonte completo de tudo o que vamos construir na descrição abaixo.

Para que você possa ter isso se quiser verificar ou fazer qualquer coisa com isso.

Vou deixar na descrição abaixo.

E dito isso, acho que devemos mergulhar diretamente neste vídeo.

Então, pessoal, a primeira coisa que quero fazer é criar um novo projeto Django.

Então, aqui nesta pasta, eu tenho este arquivo index.html.

Agora, este é o arquivo do template que vamos usar para este blog.

Então, eu já tenho este template pronto também, vamos focar principalmente nas funcionalidades de back-end.

Então, vou apenas importar este template para o meu projeto.

Mas primeiro de tudo, preciso criar meu projeto.

Então, nesta pasta, vou criar meu projeto.

Então, agora eu só copiei este diretório e entrei no terminal Sr.

VS code, logo dentro daquele diretório.

E então, posso apenas, Ok, então vamos abrir o terminal normal, entrar na pasta sources cd.

E então, agora podemos dizer Django, acho que admin startproject.

E então podemos dizer blog.

Então, isso vai criar um novo projeto nesta pasta, chamado blog.

Em um segundo, deve fazer isso.

Então, está feito.

Se eu vier aqui agora, posso ver blog.

E então, lá dentro, também vou criar, vou entrar no cd blog, vou dizer python manage.py.

Startapp posts.

Então, vou iniciar um novo app chamado posts.

Então, pronto.

Agora, se eu entrar no blog, vou ver uma nova pasta.

Então nomeada posts.

Agora terminei com este terminal, não preciso de mais nada aqui.

Então, vou fechar isso.

E agora, o que quero fazer é abrir meu projeto criado no VS code.

Então, vou abrir a pasta e então, deve estar em.

Ok, bem aqui.

blog.

Sim.

Então, blog e posts.

Então, vou selecionar a pasta.

Apenas vou abrir isso.

Sim, e bom.

Então, agora vou fechar isto.

E então, vou entrar na pasta.

E vou arrastar este index.html, quero arrastá-lo para a pasta.

Então, agora tenho tudo em ordem.

Não preciso de mais nada da pasta.

Então, aqui, vou iniciar todas as coisas que preciso.

Então, primeiro de tudo, vamos executar nosso projeto para garantir que tudo esteja funcionando bem.
```


Agora, execute seu projeto no localhost na porta 8000.

Ok, agora deixe-me abrir meu navegador.

E então vá em frente, como você vê o template Django padrão.

Como você pode ver, diz que a instalação foi bem-sucedida.

Então, vamos voltar e nos aproximar.

E agora vamos começar com o mapeamento de URL.

Então, vou entrar em posts, e depois vou criar um novo arquivo, nomeá-lo de urls.py.

Bem aqui, vou configurar todas as minhas URLs.

Agora, se você não sabe o que é uma URL no Django, basicamente são os diferentes caminhos que você tem no seu site.

Vamos tomar como exemplo facebook.com.

Então facebook.com é o site principal.

Depois, quando você vai para facebook.com/notifications, há outra URL, vá para facebook.com/messages, há outra URL.

Então pense nisso neste projeto.

URLs são diferentes pontos em nosso site.

Então agora, deixe-me mostrar como configurar uma URL.

Então eu vou dizer from django.urls import path.

Então esta é apenas uma função padrão do Django que nos permite, você sabe, configurar URLs.

Então eu vou ver padrões de URL.

Novamente, haverá uma lista, e eu vou salvar o caminho.

E quando eu deixo em branco assim, significa a URL inicial.

Agora, se eu coloco algo como notifications, isso significa /notifications ou site /notifications.

Quando eu deixo em branco, significa a própria URL.

Então agora eu posso dizer views.index, e eu posso dar a ele um nome de index.

Então isso está dizendo que, quando um usuário vem para a página inicial, ele deve ir para a função views.index.

Isso significa que no arquivo views.py, ele deve procurar uma função index e então fazer o que foi solicitado.

Como podemos ver, não temos nenhuma função index em views, vamos ter que criá-la.

Primeiro de tudo, não temos views importado.

Então temos que dizer, from views import views.

Então agora temos a visão, podemos dizer view.index, e então apenas damos a ela um nome de index.

Agora é isso.

E então aqui, vamos criar uma nova função e nomeá-la de index.

Isso vai aceitar o request.

Agora queremos que isso renderize uma página HTML simples.

Mas antes de fazermos isso, se apenas digitarmos return, render isso para renderizar uma página HTML, e fazemos requests index.html, se fizermos isso, não vamos ver nada, vai nos dar um erro ou vai mostrar o template padrão do Django.

Agora, para que Django saiba onde obter essa página, precisamos fazer isso de uma maneira específica.

Então, no diretório raiz, teremos que criar uma nova pasta e nomeá-la de templates.

E então colocamos index.html dentro do template, queremos movê-lo.

Agora está dentro de templates, é assim que deve ser.

Mas não terminamos, precisamos ir até blog e ir para settings.py.

Então aqui em configurações, vamos descer até DIRS, vamos ver isso: DIRS: [BASE_DIR / 'templates'].

Agora, o que isso está dizendo é que sempre que um usuário solicitar uma página HTML de index, deve ir para o diretório base, que é o diretório raiz, depois deve ir para a pasta chamada templates e procurar aquela página HTML exata.

Então quando estamos tentando renderizar esta página HTML index.html, ele vai solicitar por esse index.html no diretório raiz.

E então ele vai procurar uma pasta chamada templates, e então pegar aquele index.html.

Então agora temos isso.

Mas novamente, deixe-me rolar para cima até INSTALLED_APPS.

E eu tenho que adicionar este aplicativo que eu criei que é posts, você tem que adicioná-lo lá.

Então agora eu posso salvar isso.

E agora isso pode ser renderizado.

Então eu posso salvar isso também, e salvar isso.

Mas se eu vim aqui e atualizar, boom, ainda nada acontece.

E isso é porque configuramos tudo isso no nosso app, precisamos configurar isso para nosso projeto principal.

Então o projeto saberá onde procurar uma URL.

Agora, para fazermos isso, vou dizer from django.urls import path, também tenho que importar include.

E então podemos dizer path, quando o usuário usar o boom, vai incluir posts.urls.

Agora o que isso está dizendo é que, uma vez que um usuário vem para a página inicial, que é apenas o site principal, ele deve incluir a própria URL nos posts que são posts.urls, que é isso.

Então ele vai procurar algo semelhante a isso, e é isso.

Então podemos fechar isso.

Agora voltamos aqui, atualizamos, boom, você pode ver agora que temos esta página HTML, temos um conjunto de front-end configurado.

Agora, eu acho que é hora de fazermos as coisas principais.

Então agora, o que precisamos fazer é criar um banco de dados que vai armazenar todos os nossos posts do blog.

Então ele vai armazenar o título do post do blog, quando o post do blog foi criado.

E então o corpo principal, o texto principal do post do blog.

Então vamos entrar em models, onde vamos criar um novo modelo Django, vamos dizer class.

E então vamos ver posts.

Então eu vou dizer models.Model.

E agora podemos dizer, o título deve ser igual a models.CharField.

E então temos que definir um comprimento máximo.

Vamos definir que o título deve ter tipo 100, não deve ter mais de 100.

E então temos que fazer o mesmo para o corpo, que é o post principal.

O corpo do post também era models.CharField.

```
Então, digamos, tipo, um milhão, porque alguns posts no blog podem ser quem.

E agora, a próxima coisa que precisamos definir são as datas em que este post foi criado.

Então, podemos nomeá-lo como created, underscore art.

Desconhecido como models, dot date, time field.

E então, para passarmos um parâmetro, precisamos importar date, time, que é uma biblioteca padrão do Python, como você pode ver, from date, time, import date, time, basicamente, date time.

Então agora, podemos apenas passar esse date time em anos.

Assim, sempre que isso for criado, será salvo junto com ele, nós vamos obter a data atual e salvá-la com a origem nas defaults.

defaults devem ser iguais a date time.now.

Na opção leave blank, coloque true.

Então agora está bom, podemos salvar isso.

Agora, temos nossos módulos prontos.

E você sabe, no Django, sempre que você cria um novo módulo ou adiciona qualquer alteração ao seu modelo, precisa fazer migrações e migrar para o banco de dados.

Então deixe-me criar um novo seminário bem aqui.

E então, tudo o que vou fazer é make migrations e migrate, que é python manage.py.

Make migrations.

Ok.

Make migrations.

Sim, ele atualizou os dados e então python manage.py.

migrate.

Então isso deve migrar tudo para o banco de dados.

Bom.

Então agora, como você sabe, o Django tem um painel administrativo padrão, que permite acessar todo o seu banco de dados e tudo sobre o seu site.

Para acessar isso, podemos ver nosso local slash admin.

Mas você verá que ele nos pede um nome de usuário e senha de login, mas não temos isso.

Então o que precisamos fazer é ir até nosso terminal e dizer Python manage.py, create super user.

Então isso vai criar um superusuário.

Para que possamos ter nossas credenciais para login aqui.

Então podemos ver que significa, não, isso é apenas o nome de usuário.

Então digamos admin, vamos deixar o email em branco e então dê uma senha.

Então, agora criamos isso com sucesso, podemos usar as credenciais para fazer login.

Sim.

Então, agora, temos isso, temos nosso banco de dados.

Estes são os usuários que temos no nosso site, não adicionamos autenticação ou qualquer coisa complexa, estamos mantendo isso muito simples.

O único usuário que temos é o admin.

Então deixe-me apenas voltar para o início, onde criamos este banco de dados de posts, então por que ele não está aqui? Agora, migramos este modelo para o nosso banco de dados, mas não salvamos ou mostramos isso em nosso parceiro admin.

Para fazer isso, vamos ter que ir para admin.py.

Primeiro de tudo, importe ou diga, from .models import posts.

Então temos este modelo importado.

E então vamos dizer admin, dot site, dot register.

No que eu estava assistindo, eu ia registrar esses posts.

Quando eu vier aqui, preciso atualizar.

Boom, agora vemos posts, tão fácil quanto isso.

Então agora temos este banco de dados, o que é muito bom.

Vamos apenas criar um novo post.

E então vamos dizer, título: prazer, digamos, como implantar um projeto Django no Heroku.

Então para o corpo, eu quero ter este relatório.

Então eu vou apenas ir para o meu site e coletar o post do blog sobre como implantar um projeto Django.

E então vou copiar tudo isso, basicamente, estou apenas copiando isso de novo.

E então vou colar aqui.

E então a data vai obter automaticamente a última data corretamente.

Então, vou salvar isso.

Agora temos o primeiro.

Ok, não precisamos disso.

Não precisamos de tudo isso.

Sim.

Esses posts.

Então vamos apenas salvar isso.

Então temos isso.

Vamos criar outro.

O que eu tenho aqui.

Então, a melhor maneira de começar com Django é baseada em...

Oh, meu Deus.

Bom.

Copie.

Cole e salve.

Então temos dois, vamos adicionar mais um.

Então podemos usar este banco de dados e mostrar isso aqui.

Então volte, pegue mais um, digamos instalação do bytes.

Ok, copie e cole.

E então, sim, bem aqui.

E então também cole isso e bom.

Agora estamos prontos.

Então, agora temos três posts, três posts de blog neste nosso blog.

E agora queremos apenas acessar tudo aqui, em vez de apenas ter dados fictícios.

E o que queremos fazer é usar um CLI.

Então nesse site para adicionar obviamente vai ser o título do post, como implantar um projeto Django.

E isso vai ser a data.

E isso vai ser como talvez a primeira linha do post principal do blog.

Então, uma vez que um usuário clicar nisso, ele vai levar o usuário para ler o post inteiro.

Vamos fazer isso.

Então agora temos isso.

Não precisamos mais disso.

Não, não precisamos mais disso.

Sim, então agora o que precisamos fazer, bem aqui, podemos abrir nosso index de HTML, vamos precisar disso.

Então vamos tornar isso dinâmico ou dispor dinâmico reconhecendo posts estáticos que estão lá, que é apenas isso, vamos obter tudo isso do nosso banco de dados assim que estivermos escrevendo isso.

Então, para fazer isso, depois de importar nosso modelo, diga from .models import post.

Então agora temos posts importados, podemos acessar todos os dados ou todos os objetos nesse post.

Então podemos apenas dizer posts deve ser igual a objects do post .all e então podemos apenas passar isso bem aqui supos.

E então save posts.

Agora isso deve ser uma variável supos.

Então, nesta linha particular, temos uma variável e estamos dando a ela posts, que é isso que importamos .objects .all, isso significa que estamos obtendo todos os objetos deste banco de dados bem aqui, você pode ver este objeto um objeto dois objeto três.
```

## Então podemos ver este ano.

E agora, quando chegarmos aqui, podemos simplesmente remover isso, não precisamos disso.

Então, agora, vamos usar um loop for a partir do ano, então vamos usar um loop for para avaliar esses dados.

Então vamos ver para postagens em postagens, então para postagem em postagens, essas postagens são essa variável que passamos para o nosso índice.

Então, agora podemos avaliá-la como uma variável.

Então, como no para postagem em postagens.

Em vez de escrever o título ad, agora queremos escrever posts.título.

Caso você esteja se perguntando de onde tiramos este título, este título é o título da página das postagens que foi atribuído no modelo.

Suponha um título e deve ser post criado em.

E então algum texto.

Então isso não deve ser boss.corpo.

Certo? Sim, bem, agora, em vez de apenas corpo, queremos fazer talvez apenas as primeiras 10 palavras, vamos selecionar as primeiras 15.

Então devemos ser capazes de fazer algo.

Vamos deixar assim por enquanto e depois vamos mudá-lo quando vermos qual é nosso resultado.

Então agora podemos terminar este loop for.

Agora, quando você estiver usando um loop for no Django, templating, você precisa terminar um loop for, mesmo que ele vá percorrer todo o código abaixo do loop for.

Então é bem diferente de um loop for normal em Python.

Você sabe, no Python, usamos indentação para saber quando terminar um loop for, usamos o endfor para terminar um loop for.

Então, agora vamos salvar este ícone aqui e atualizar.

Bom.

Então, temos o blog do Tommy, estamos prestes a implantar projetos Django, temos a data e a hora exata em que isso foi criado.

E então, como você pode ver, temos todas as postagens.

Então, isso está funcionando muito bem agora.

Mas o que queremos mudar é o seguinte:

Primeiro de tudo, não queremos todas essas postagens aqui, porque se um usuário pode ler todas as postagens na página principal, então ele não precisa clicar nessas postagens.

Então não queremos todas as postagens aqui, queremos talvez as primeiras 20 palavras ou algo assim, ou os primeiros 50 caracteres.

E então, como você pode ver, são 23:30h.

Isso é nível 32, nível 32.

Agora, 23:30h é anterior a 23:32h.

Agora queremos que as postagens mais recentes estejam no topo.

Então, como você pode ver, esta é a postagem mais antiga.

Então, se este é o jeito que nosso blog é Dominus, a primeira postagem que escrevemos é a que sempre estará no topo, e não queremos isso.

Então agora vamos voltar no ano, e então, para fazer com que a postagem mais recente esteja no topo, vamos dizer para postagens em postagem, reverso.

Isso é muito fácil.

Eles dirão reverse, eu só vou inverter isso para você.

Então temos isso invertido, D.

Então, agora, como você pode ver, a mais recente é o que está no topo, instalação, melhor maneira de Django e agora para implantar Django.

Então a última que adicionamos é a que vai aparecer no topo.

Então temos isso.

Então, pessoal, o que vamos fazer agora é garantir que não mostre todos os caracteres das postagens ou todo o corpo da postagem.

Então, vou morrer no próximo vídeo.

Bem-vindo de volta ao segundo vídeo deste tutorial de blog Django.

Este é o segundo e último vídeo.

Então, no último vídeo, paramos em obter toda a lista de postagens do blog, e depois organizá-las de acordo com as postagens mais recentes.

Então, no início, quando colocamos, mostrava as postagens mais antigas no início.

Mas agora a postagem mais recente aparece no início.

E eu disse que neste vídeo vamos continuar por que.

Como você pode ver, todas as postagens do blog estão aparecendo na página inicial, o que não queremos, queremos apenas 10 palavras, ou 20 palavras para mostrar que um usuário deve ser capaz de clicar, e isso os levará a outra página para ler todo o texto.

Então é isso que vamos fazer neste vídeo.

Então, primeiro de tudo, vamos remover tudo isso que não gostamos de ver todas as balas, então vamos mudar para bloquear em 20 ou 30 palavras.

Então, bem aqui no VS code, só precisamos adicionar no corpo da postagem, vamos dizer, truncar, truncar palavras.

E então vamos colocar dois pontos e dizer 20.

Então isso vai truncar para apenas 20 palavras.

Agora, quando eu atualizar, você pode ver agora que só tenho 20 palavras, e ele coloca automaticamente esses três pontos, que mostra que você pode continuar lendo quando clica ou algo assim.

Então, como você pode ver, apenas as primeiras 20 palavras estão aparecendo, o que está parecendo bom.

Então, o que eu só preciso fazer agora é garantir que o usuário possa clicar, como você pode ver, agora apenas texto simples, eu não posso clicar.

Então vamos fazer exatamente e depois vamos levar o usuário para outra página.

Então, bem aqui, não deveria estar nesta classe antiga.

Então vamos adicionar.

Então, bem aqui em H80, por enquanto, vamos basear isso de volta.

Então, isso não pode acalmar você, isso não pode acalmar aqui.

Então vamos salvar isso.

Então isso não deve ir a lugar algum, mas eu só verifiquei.

OK, isso está aparecendo, mas não gostamos de todos esses, como você pode ver, aparecendo em linha com roxo.

Agora, não queremos isso.

Então podemos facilmente adicionar uma estilização simples.

Então só precisamos dizer estilo, podemos apenas adicionar isso no estilo.

Eu disse que a decoração de texto deve ser nenhuma.

Então isso só vai garantir que todas as estilizações não apareçam.

Sim.

Então, como você pode ver as linhas, os sublinhados, não aparecem, mas ainda vemos isso em roxo.

Então muito fácil, eu só vou mudar isso para a cor preta.

Mas quando clico nele, ainda passa por essa mesma idade, seja qual for.

Então agora, uma vez desaparecido exatamente, deve levá-lo a uma página dinâmica e exclusiva.

Portanto, tudo o que faremos será dinâmico, você entenderá em um segundo.

Então vamos subir agora.

Para qual página o usuário vai depois de clicar em uma postagem? Vamos criar isso no URLs.

Há uma ótima, posts ilimitados, salvar essas posts, e então daremos o nome de post, devemos adicionar uma vírgula aqui porque são listas, salve.

Agora não temos nenhuma função nova em views chamada posts.

Então vamos criar isso.

Então diga, def posts, requests.

E então deixe-me apenas renderizar uma página HTML simples.

Post.html.

Então agora salvamos isso, mas não temos nenhuma página como essa.

Vamos criar isso rapidamente.

Bem aqui.

Novo Arquivo, que é o HTML. Ok, então temos com um S.

Então vamos atualizar este post retorna s.

Isso é bom.

E agora, o que queremos fazer é tornar isso um pouco dinâmico.

Então queremos, agora mesmo podemos ir para /posts.

Mas nada está aparecendo, apenas uma página HTML em branco, que é esta página.

Então queremos obter todos os dados, então uma vez que o usuário clicar nisso vai nos levar para aquele /posts, mas vai ser como /posts/1 /posts/2.

Página de amigos com URLs diferentes.

Então essas postagens do blog, desde que seja a primeira postagem, terão um ID de 1.

Então pode ser /post/1, isso pode ser /post/2, isso pode ser /post/3, se você entender, e então obteremos tudo isso dinamicamente do banco de dados.

Então vamos fazer isso rapidamente.

Bem aqui, podemos simplesmente dizer, podemos dar-lhe um inteiro ou uma string, apenas como uma string para evitar qualquer erro.

Então, uma string, que é pk, então seria /post/ uma string, que é pk.

Então podemos ver isso chegando ao views.

Então agora estamos coletando pk.

E então o que só precisamos fazer é dizer que posts é igual a posts.objects.get(aqueles cujo ID é igual a Pk).

Então, uma vez que temos isso, passamos isso ao HTML, vamos copiar isso aqui.

E colar.

Então o que estamos fazendo é, uma vez que o usuário recebe este URL, então, digamos, vai ser post/1.

Eu sei que /1 é o ID de, digamos, um desses.

Então obviamente, isso terá um ID de 1, porque é o primeiro ou talvez um ID de zero, talvez.

Mas uma vez que obtemos o ID, será passado neste URL, do URL será passado.

Sim, você pode ver que esta função está recebendo aquele PK, que é o nome que demos aqui.

E então a partir daquele PK, usamos você para filtrar nosso banco de dados.

Então adicionei uma nova variável.

E então uma vez que ela é atribuída à variável é posts, que é nosso modelo.objects.get.

Então vai pegar aquele post particular, cujo ID é pk.

Então, uma vez que temos isso, passamos isso ao HTML.

Porque fizemos index.html, podemos ir lá agora e acessar aquele post.

Então, bem aqui, vamos copiar o código do index.html e usá-lo.

Vamos colar.

Mas ainda, para mim, é blog.

Pássaros vão para /posts.

Ok, então precisamos adicionar algo que seja /1.

Ok, então não tem um ID de 1, zero.

Então vamos ao nosso banco de dados.

Cookie, sem ID, por enquanto.

Então precisamos criar um ID particular.

Como você pode ver, por agora, ele vê vários tipos de posts, não possui atributo objects, então não vê nenhum post com este objeto particular, o que é meio estranho.

Mas então o que precisamos fazer é garantir que estamos fazendo a coisa correta.

Então, basicamente, vamos voltar aqui.

Agora URLs.

Então estamos passando a string como pk ID.

E então bem aqui, estamos coletando dados e depois filtrando, o que é bom.

Então posts.objects.

Então objects com um S, posts.objects.get.

Então agora venho aqui, dou 1.

Ok, então post object não é iterável.

Sim, com certeza.

Então, o que está dizendo no post.html, cada coluna aqui, enquanto está aqui, estava em um loop for para obter isso agora, mas em nosso index, como dissemos posts.objects.all, o que significa que está obtendo isso como uma lista ou como um dicionário, ou apenas uma lista de algo, então podemos iterar não significa ter iterável quando diz algo a ver com música e olhar através dele.

Mas quando dizemos posts.objects.get estamos obtendo apenas um valor específico.

Então não podemos iterar valores específicos, apenas uma coisa.

Então é por isso que nos dá este erro de que o objeto post não é iterável.

Então em nosso posts, devemos remover isso e remover isso.

Então agora se virmos aqui e clicarmos em enter, novamente, não temos nada aqui porque estamos em posts em vez de post return, mas vamos deixar assim.

Mas temos isso agora.

E então bem aqui na postagem.

Então nosso simples é tentar criar posts.

Isso é ruim.

Mas agora não estamos truncando nenhuma palavra, queremos cada coisa única.

Agora, vamos ver.

Então como você pode ver, ele diz como implantar um projeto Django no Heroku.

E então nos dá tudo isso.

Então isso é o que precisamos.

Então bem aqui, vamos dar isso em um h1

And then putting the rest is good.

Então vamos salvar e atualizar.

Como implantar um projeto Django no Iraque.

E então temos a data de criação e precisamos postar isso.

Primeiro de tudo, vamos remover esta tag, não precisamos dela novamente.

Então, já foi.

Bem aqui, você pode ver que isso está funcionando perfeitamente.

Mas o que queremos fazer agora é que, a partir da página inicial, queremos que o usuário clique nisso e vá para aquele post específico.

Então temos que ir para index.html.

E diremos, ao invés de ir para uma tag hash, diz oozes lash boosts com um S, vamos ter certeza.

Ninguém apenas boosts este slash boss.id.

Assim, agora, tudo funcionará.

Agora vamos clicar nisso, você vê essa instalação do Python, a data em que foi criada com todos os posts, e deixe-me voltar novamente, ou clicar em outro, você vê que menciona aquele post específico.

E se eu clicar em outro, ele me leva para aquele post específico.

Então é assim que construir um blog simples, muito, muito simples usando Django.

Agora você tem alguns recursos mais avançados, como recursos muito avançados como imagens, você pode adicionar comentários, como na verdade ele pode comentar, você pode adicionar diferentes tipos de texto, para que o usuário possa formatar seu texto como fontes e coisas do tipo, você pode adicionar várias outras coisas.

Essa é apenas a funcionalidade básica do nosso blog, que é a funcionalidade crud, que é criar, ler, atualizar e excluir.

Então um usuário deve ser capaz de criar um novo post, o que você pode fazer pelo nosso painel de administração, e então deve ser capaz de ler o post.

Como você pode ver, qualquer pessoa pode vir e ler isso, ele deve ser capaz de atualizar o post.

Se eu vier aqui, instalação do Python, e disser instalação do Django, e disser salvar.

E eu vier aqui e atualizar.

Como você pode ver, muda para Django, deve mudar para Django, porque foi para isso que o projetamos.

Então eu realmente espero que vocês tenham gostado deste vídeo.

E na verdade também ser capaz de excluir um post, é só vir aqui e excluir um post, vai excluir definitivamente.

Então pensamos em excluir, sim, tenho certeza, ao atualizar, sumiu.

Isso é tudo para este vídeo.

Mais uma vez, espero que vocês tenham gostado de construir isso comigo.

Hey, pessoal, bem-vindos a este vídeo.

Neste vídeo, vamos usar Django para construir um detector de tempo, então ele vai apenas obter a situação atual do tempo em uma cidade específica pela qual você pesquisar.

Então, bem aqui, se eu apenas pesquisar por Londres, e clicar enter, ele diz Londres, me dá o código do país, as coordenadas, a temperatura, a pressão e a umidade.

Então é isso que vamos construir neste vídeo.

Então o template que possui este arquivo HTML e o código-fonte, que é o código final para definir nosso projeto, tudo vai estar linkado na descrição abaixo.

Então você pode verificar a descrição para obter o código-fonte para o front-end e o back-end e tudo o que você precisar.

Com tudo isso dito, vamos direto ao tutorial.

Então pessoal, a primeira coisa que precisamos fazer é, antes de tudo, criar um novo projeto Django.

Vamos criar um novo projeto Django agora e vamos nomeá-lo de weather detector.

Então, para fazer isso, temos que dizer no Django admin, start project e então vamos dizer weather subject ou algo assim.

Então é só pressionar Enter.

E agora isso vai criar uma nova pasta chamada weather detector no diretório, e a pasta vai conter a estrutura padrão do Django.

Então podemos dizer, CD para entrar nessa pasta.

Agora estamos nesta pasta.

Se eu pressionar dir, vou ver agora que tenho manage.py e weather detector.

Depois de fazer isso, podemos criar imediatamente o app Django que vamos usar para este projeto.

Então eu posso dizer python manage.py.

Iniciar app.

E então queremos apenas nomear isso como weather desse jeito, e depois você verá uma nova pasta adicionada chamada weather para fazer essas operações.

Agora vê que temos a weather.

Agora vamos importar este projeto para o Visual Studio Code.

Então vou apenas abrir o VS Code.

E depois abrir a pasta.

Então vou abrir aquela pasta no VS Code.

Então eu tenho isso em weather, weather detector.

Então isso deve abrir meu projeto aqui.

Então deixe-me fechar isso.

O que vamos fazer agora é configurar nossos templates.

Como eu disse na introdução a este vídeo, todo o código-fonte de tudo o que vamos fazer e o arquivo de template, vou linkar na descrição abaixo.

Então você pode obter o arquivo de template, que é o arquivo HTML, e o código-fonte para o projeto finalizado.

Assim, se você tiver algum problema, pode facilmente verificar o código-fonte.

Então vamos apenas criar uma nova pasta no diretório raiz, e nomeá-la templates.

Então deixe-me abrir meu terminal, ou vou apenas usar o meu command prompt.

Python manage.py runserver.

Então o que estou fazendo agora é rodar este projeto que acabamos de criar no nosso localhost, então o Django vai rodar no localhost na porta 8000.

Vou apenas copiar isso e colar no meu navegador.


```md
Nos modelos, vamos apenas obter nosso modelo HTML, que queremos usar, e depois vamos colocá-lo nessa pasta de modelos.

Então, essa pasta de modelos vai basicamente conter todos os arquivos HTML que precisamos, todos os nossos arquivos de modelo.

Tenho meu arquivo de modelo bem aqui, que é de fato o HTML.

Vou dizer mais uma vez, que esse arquivo index HTML será vinculado na descrição abaixo.

Então, eu vou apenas arrastá-lo e colá-lo em templates.

Então, agora temos isso.

Mas você sabe, isso não é suficiente para dizer ao Django que ele deve renderizar a página.

Então, precisamos entrar no weather detector, que é nosso projeto principal.

E então, no arquivo settings.py, vamos rolar para baixo até onde vemos templates.

Agora, veja templates aqui, que vamos procurar.

Aqui é onde vemos dir, que está aqui para salvar base dir / template.

Então, o que é templates? O que isso está fazendo é dizer ao Django onde procurar nossos arquivos HTML.

Então, sempre que solicitarmos a renderização de um arquivo HTML, ele vai entrar no diretório base / templates, que está basicamente nesta pasta, onde temos nosso arquivo HTML.

Depois de fazer isso, vamos apenas adicionar o aplicativo que criamos, que é weather.

Vamos adicioná-lo aos nossos aplicativos instalados.

Legal.

Então, agora podemos salvar isso.

Mas, novamente, isso não é suficiente para o Django renderizar essa página HTML.

Então, agora precisamos ir ao roteamento de URL.

Então, aqui, você vê que uma vez que chegamos à página inicial, temos este modelo Django padrão.

Então, para o Django, onde procurar um modelo, mas não dissemos ao Django, quando um usuário vem para nossa página inicial, qual modelo HTML você deve renderizar.

Agora, para fazer isso, precisamos usar o mapeamento de URL ou roteamento de URL.

Então, vamos especificar que uma vez que o usuário chegar a este URL, que é nossa página inicial.

Ele deve renderizar aquela pasta index.html, que está bem aqui.

Então, agora, eu vou entrar em weather.

Precisamos criar um novo arquivo chamado urls.py.

Bem aqui esses URLs são p wise onde nossos URLs vão ser armazenados, diga de django.urls import path, que vai permitir que especifiquemos diferentes URLs.

E você verá views import views.

Então, também importamos views, vou explicar por que precisamos disso em um segundo.

Agora, o que precisamos fazer é ter uma nova lista chamada URL patterns.

Agora deve ser igual a path.

E então vamos dizer views.index.

E então vamos dizer que o nome deve ser igual a index.

Agora, o que estamos fazendo aqui é importar path de django.urls.

Então, é uma função Django padrão, que nos permite especificar um caminho diferente aqui, você pode ver onde usamos.

Então, isso de dirtybird views é basicamente este arquivo.

Então, estamos importando todas as funções que temos neste arquivo, todas as classes, qualquer coisa que temos neste arquivo, colocamos nesses URLs puros.

Então, agora, quando especificamos um novo neste ano, o URL pattern é uma variável de lista, que vai levar uma lista de todos os seus URLs que vamos ter neste nosso site.

Então, o primeiro URL, que eu especifiquei é a página inicial, por isso está em branco.

Se eu quiser especificar, digamos, /signup, deve ser algo como, digamos registrar, é assim que eu vou fazer.

Eu posso apenas deixar em branco, é apenas registrar, ou é login, posso fazer exatamente a mesma coisa.

Algo assim.

Mas, esta é a página inicial, posso deixá-la em branco.

Agora, o Django sabe que estamos falando sobre esta página, a página inicial.

Agora, quando eu digo views.index, o que quero dizer é que deste arquivo views.py, que importamos, vá para a função index.

Agora, a função index é onde vamos dizer ao Django qual modelo HTML ou o que quer que queiramos fazer, queremos renderizar.

Agora, este nome é basicamente o nome dado a este URL específico.

Então, sempre que quisermos solicitar o URL, ou ir para aquele URL, usamos este nome.

Agora podemos apenas salvar isso.

E agora sabemos que não temos nenhuma função chamada index em views.py, precisamos fazer isso de qualquer maneira, sabe, criar uma nova função, vou chamá-la de index.

Então, esta index quer receber um request.

Então, vamos apenas dizer return, render, e depois request.

E então index.html.

Então, isso está solicitando por index.html na pasta Templates.

Legal.

Agora podemos salvar isso.

Bem, poderíamos chamar aqui a cada atualização, ainda não funciona.

Agora, o motivo pelo qual isso não funciona é porque configuramos todos esses URLs apenas em nosso aplicativo, também precisamos configurá-lo em nosso projeto principal para que o Django saiba o que estamos fazendo.

Então, vamos a weather detector, que é a pasta do projeto principal.

lá, vamos a urls.py.

E então, rolamos para baixo, onde importamos path, também queremos importar include, depois de importar include nos padrões de URL, que já está aqui, não escrevemos isso, já está lá, podemos apenas dizer path.

E então vamos dizer include com as duas setas.

Agora, o que isso está fazendo é criar outro URL inicial, estamos agora no arquivo urls.py do projeto principal.

E então, uma vez que chegamos a este caminho, deve incluir whether ou não URLs, isso significa que weather é este aplicativo, que criamos bem aqui.
```

```
Sim, é só incluir as URLs.

Então, se eu vier aqui, você verá que temos o mesmo caminho do blog.

Então, qualquer coisa que façamos aqui, eu estava me perguntando se está pegando views.index, ou estamos fazendo um view.index, renderizando este index de HTML.

Então agora, quando voltarmos aqui e apenas atualizar a página, você verá que agora temos esta página HTML.

Por enquanto, você pode ver que todos estes são apenas dados fictícios, código do país, coordenadas do código do país.

Então, o que queremos fazer agora é que o usuário possa procurar algo como Londres.

Quando ele pressionar enter, queremos mostrar os detalhes do clima atual ou o status do clima naquela cidade específica. Então, eu só vou voltar para o VS code.

Então, certo, sim, o indice.

Agora eu fui para a coluna em templates, e em index.

Então, bem aqui, vamos rolar para baixo.

O que queremos fazer agora, se rolarmos para cima, você verá que neste índice já temos um formulário.

Agora este formulário está usando um método POST.

A primeira coisa que precisamos fazer neste formulário é basicamente neste input, nesta barra de pesquisa, que temos aqui.

Então, este formulário é um formulário POST, como você pode ver, usando o método POST, no Django, toda vez que estamos usando o método POST, queremos sempre garantir que o token CSRF seja adicionado, algo assim.

No comentário, ok.

Agora, uma vez que eu salve isso, e eu pesquise Londres, ele nos dá esse erro.

Agora, porque eu não atualizei a página, você vê o erro, mas olhe para o erro, ele diz proibido.

Se eu voltar, eu preciso atualizar.

Agora eu carreguei o novo.

E eu busquei Londres novamente.

Você vê que agora eu não tenho nenhum erro, nada está funcionando ainda.

Mas passamos por esse erro, o que é bom.

Então, o que eu quero fazer agora é basicamente apenas definir este detalhe, este input bem aqui é este input, que você vê, input type text name, city.

E então, uma vez que você clique em submit, você envia esse detalhe para essa view, de volta para esta view index.html, ainda estou enviando você de volta para esta página.

Mas desta vez, queremos ser capazes de obter alguns detalhes sobre coisas.

Então, isso é fácil para nós fazermos, o que precisamos fazer é apenas especificar os dados que estamos enviando de volta.

Então agora, bem aqui, o que vamos simplesmente fazer é vir aqui, garantir que você defina uma ação.

E a ação deve ser em branco.

Agora, a razão pela qual esta ação está em branco é porque quando procuramos, está enviando todos os dados, que é na verdade o único que está enviando esses dados de Londres de volta para esta página inicial.

Bem, desta vez queremos ter algo sim de código do país, coordenada, queremos ter o verdadeiro código do país, que deve ser Londres, Reino Unido ou algo do tipo.

E então, depois, também vamos remover esses.

Então, quando ele é depois que seu país decide, por mim, quando ele vem decidir, este não deve ser o único que vamos procurar, vamos fazer tudo isso também.

Então, depois de adicionar a opção, e então somos capazes de enviar, agora o que precisamos fazer é entrar no nosso arquivo views.py, e então coletar isso.

Então, primeiro de tudo, coletar os dados que foram enviados, vamos dizer se requests.method for igual a POST.

Queremos dizer, city não deve ser igual a request.post.

City.

Agora, o que estamos fazendo aqui, quando eu venho para esta página, da barra de URL normal, estou usando um método GET para acessar esta página.

Quando eu enviio um formulário usando um método POST, eu não estou enviando um formulário para esta página, o método é diferente, como você pode ver agora é um método POST.

É por isso que vamos dizer se request.method é POST.

Agora, a única vez que vamos usar POST é quando estamos enviando um formulário.

Então, vamos pegar se o método é POST, isso significa obviamente que o programa sabe que o formulário está vindo.

Então, uma vez que sabemos que um formulário está vindo, só precisamos coletar o formulário, dizer request.post cidade.

Agora, esta cidade é este índice, este input bem aqui você pode ver há um nome de cidade, se eu mudar isso para lugar, então também preciso vir aqui e mudar para lugar.

Mas por enquanto, vamos com cidade para fazer isso grande novamente.

Vamos com cidade, ou então cidade, você entendeu o que fizemos, certo? Então, só vamos salvar isso.

E então, primeiro de tudo, depois de enviar a cidade para este lugar, deixe-me apenas passar de volta para o HTML apenas para garantir que sabemos o que estamos fazendo.

Então, podemos fazer algo assim cidade.

Então, vamos apenas salvar e então se eu vier aqui, diz variável local cidade referenciado antes da atribuição.

Agora, este erro sempre acontece, toda vez que você está usando uma declaração if, e há uma variável sendo atribuída sem adicionar uma declaração else.

Agora, só precisamos fazer else.

Cidade deve ser igual a vazio.

Uma vez que eu salve isso e volte e atualize, não teremos o erro de novo.

Então, toda vez que nos deparamos com um erro no Django é sempre muito, muito comum.

Você pode simplesmente usar isso para passar por isso.

Então, bem aqui, temos o código do país.

Apenas veja h1, e então há a cidade.

Então agora, se eu atualizar esta página, e eu digitar Londres, agora você vê que está me devolvendo Londres.

Então isso é só primeiro verificar.

Ok, sim, já estamos passando um valor de dados da nossa página de volta para a nossa página, como eu expliquei anteriormente, usando métodos diferentes em um método POST é a manhã.
```

```markdown
Para estes exemplos, vamos usar uma API chamada Open Weather Map.

É um site que possui uma API para você usar.

Você pode obter esses detalhes no site deles.

Mas antes de usar a API, você precisa se inscrever no site e obter uma chave de API, que é totalmente gratuita.

Para se inscrever, você pode obter uma chave de API, e vou mostrar como usá-la.

Primeiro, você precisa acessar o site, que é openweathermap.org.

Quando você fizer login, basta ir até "API keys" e verá sua própria chave.

Agora, isso é gratuito apenas para fins de teste, você não precisa comprar uma assinatura ou algo assim.

Não.

Então vamos usar essa chave de API para fazer o que queremos fazer.

Vou mostrar como usar a API para obter os detalhes de qualquer cidade que pesquisarmos, seja Londres, Accra, Cidade do Cabo, Délhi, Mumbai, ou qualquer lugar. Você pode obter a situação atual do clima diretamente do nosso programa Python ou site em Django.

Então, isso é tudo para este vídeo.

E vamos finalizar esses projetos no próximo vídeo.

Pessoal, esta é a segunda parte deste tutorial de sites de clima.

Então, na última parte, parei dizendo para vocês obterem a chave de API do Open Weather Maps.

Uma vez que você tem sua chave de API, você pode continuar seguindo adiante.

Este é o segundo e último vídeo deste tutorial em duas partes.

Agora, essa chave de API é muito importante para você poder acessar a API.

Depois de obter essa chave de API, você pode continuar.

Aonde paramos foi onde simplesmente passamos Londres de volta para esta página.

Mas agora, seja qual for a cidade que pesquisarmos e quisermos obter os detalhes, o que vamos fazer é voltar ao VS Code.

Agora que podemos enviar dados deste formulário para nossas views para nossos templates, podemos simplesmente obter esses dados e depois obter a situação do clima nessa cidade.

Primeiro, vamos remover essas torres para fins de teste agora.

E isso também.

Agora que fizemos tudo isso, o que queremos fazer, temos a cidade.

Então, bem aqui.

Agora que temos a cidade, queremos acessar a API do Open Weather Maps a partir deste código, então precisamos de algumas bibliotecas, precisamos importar JSON.

Agora JSON é necessário porque quando enviamos uma solicitação para a API, ela nos dará uma resposta em formato JSON.

Então precisamos importar JSON para poder realmente obter e depois, você sabe, analisar ou filtrar esses dados.

E então precisamos importar URL lib.requests.

Agora que fizemos isso, estamos muito bem para seguir adiante.

Então, bem aqui, eu só vou dizer algo como requests.

Agora este requests é a solicitação que estamos enviando para o Open Weather Maps.

O que vou fazer é dizer, urllib.requests.urlopen.

Então eu vou abrir uma URL específica, e a URL será HTTP api.openweathermap.org/data/2.5/weather? então quero passar alguns parâmetros, digamos Q.

Agora Q vai ser igual à cidade.

Agora esta cidade é Q significando consulta.

Então será igual à cidade da qual queremos obter os detalhes.

E usamos concatenação com a cidade.

Depois de adicionar a cidade, o que precisamos adicionar agora é nossa chave de API.

Então, vamos apenas dizer &appid= e agora apenas colar a chave de API que coletamos.

Cole-a bem ali.

Então agora nós inserimos nossa chave de API.

Então vou apenas dizer .read().

Com dois parênteses.

Agora que fizemos isso, vamos para uma nova linha.

E o que eu quero fazer é dizer algo como let json_data.

Agora, estes são os dados que obtenho após enviar uma solicitação para essa URL.

Então vou dizer que os json_data devem ser json.loads(requests).

Legal.

Agora eu tenho os detalhes do clima atual desta cidade armazenados nessa variável json_data.

Mas agora eu quero fazer esse json_data, quero mudar isso para um dicionário, um dicionário Python.

Então fica mais fácil de acessar, eu posso simplesmente dizer data =.

O que eu quero fazer é dizer que o país não deveria ser string.

E então dos dados JSON, veja sys e depois o país.

Então agora depois de ter isso, apenas usamos uma vírgula para obter alguns outros detalhes que precisamos.

Agora vamos ver o que precisamos bem aqui.

Isso foi impressionante.

Ok, vamos colocar isso para baixo.

Para sabermos de maneira divertida, precisamos das coordenadas, as coordenadas.

Então outro é as coordenadas.

Na verdade, eles têm uma documentação onde você pode aprender a utilizar tudo isso, mas eu já sei como usar.

Então você pode apenas seguir este tutorial.

Você também pode obter algumas outras coisas sobre essa localização específica, ainda mais do que a situação do tempo. Pessoal, estamos obtendo as coordenadas e o código do país.

Agora isso é mais sobre geolocalização.

Então você pode usar a API para algumas outras coisas, basta conferir a documentação.

Mas por enquanto, vamos ficar com isso.

Então coordenadas, e então também uma string, certificando-se de que é uma string.

E então dos dados JSON, o que queremos fazer é coord, e depois outro após isso, queremos obter a longitude, que é reduzida para lon.
```

Agora, queremos concatenar com a latitude e também enviar JSON.

E então o que não precisamos fazer é também dizer, C ou D.

E então, bem aqui, vamos apenas dizer lat, que é a forma abreviada de latitude.

Agora, adicione uma vírgula para ir para o próximo.

Então, temos o código do país, temos as coordenadas.

Agora vamos obter a temperatura que basicamente é o que precisamos.

Vamos mudar isso para temp estranho.

E então, dados JSON, depois o que precisamos fazer agora é apenas o exame principal principal, que é a temperatura mais gay.

Então, esta chave é basicamente em Kelvin, então não está em graus Celsius nem Farenheit, está em Kelvin.

Então você também pode usar seu código Python para converter isso muito facilmente.

Mas por enquanto, vamos apenas ficar com Kelvin.

E então, vejamos, precisamos da pressão e umidade, legal.

Então apenas uma pressão.

Esquecemos nossa string de pressão.

Dados JSON significam algo diferente de pressão.

Legal.

Então agora você pode apenas adicionar nossa vírgula.

Então, a última coisa que precisamos é a umidade.

Umidade, então dizemos a mesma coisa string.

Então apenas dizemos dados JSON.

Lá apenas dizemos média e então apenas dizemos umidade.

Basicamente.

Você encontra a umidade.

Legal.

Então calsonic Homer apenas para evitar qualquer erro, vá bem aqui.

E então podemos apenas descer.

Ok.

Então, estamos, acho que terminamos com esses dados, pois já fechamos aqui.

Então agora já temos tudo o que precisamos dentro desses dados, os dados socióis não devem estar vazios.

Então, agora o que queremos fazer é, após renderizar isso, queremos apenas passar os dados.

Agora podemos acessar isso do nosso HTML, o que é bem legal.

Então agora vamos para o nosso HTML.

Então agora, em vez de todos esses códigos de país, coordenadas, podemos apenas usar a mesma coisa para a temperatura também, para a pressão, umidade.

E acho que é isso que precisamos.

Então agora vamos salvar isso.

Vamos apenas salvar isso.

E voltamos aqui.

Agora, esta é a chave, agora você vê que não há nada nos resultados.

Então agora tudo está combinado.

Aperte Enter.

Então diz quiz orçamentário HTTP, descemos aqui.

Incapaz de receber, então estamos tendo alguns erros.

Vamos ver onde está o problema, sim, desta linha, o erro está vindo desta linha.

Então vamos ver.

Views.dot.p y.

Então vejamos, na maioria das vezes, isso acontece por causa do HTTPS.

Agora, vamos voltar à nossa página, Londres, apertar enter.

Então vemos o erro, basicamente.

Então vamos copiar esta URL na qual estamos tentando acessar.

E então vamos abri-la em uma nova página, apenas para garantir que sim, tudo está funcionando.

Ok, agora, a razão pela qual estamos recebendo isso é porque bem aqui, não há um igual a.

Então vamos voltar e mudar isso.

Então você pode ver que sempre que estamos passando um valor pode-se ver que deveria estar q, que é uma consulta igual a CT, então app ID igual a isso.

Então vamos apenas dizer consulta igual a então CT.

Então acho que isso deve resolver nosso problema.

Vamos salvar novamente.

E voltamos aqui e pesquisamos Londres.

Agora você pode ver, muito bom.

Temos o código do país.

Grã-Bretanha, que é onde eu moro, estou apenas dizendo coordenadas.

Temos a longitude e a latitude, então a temperatura é estranha.

74.

pontos.

34k.

Sim, acho que está correto.

Então pressão, que é DS e umidade D para sempre, que são os que precisamos.

E eu acho que basicamente, é tudo que precisamos para que este projeto esteja funcionando.

Podemos fazer alguns pequenos ajustes, como voltar aqui.

Bem aqui no índice.

Queremos ter bem aqui como um h1 e então vamos passar.

Gum, yeah.

Sim, este CT.

Então vamos garantir que o CT esteja em branco.

Então, vamos ver se CT é CT.

Agora salve isso, voltamos aqui.

E aqui podemos colocar CT.

Vamos salvar isso e verificar.

Como você pode ver, temos nossa página aparecendo como HTML.

Então tenho certeza de que a razão é porque houve um erro de sintaxe bem aqui.

Então vá no dicionário, apenas temos que cortar isso.

Fazer as mudanças, algo assim.

Então vamos salvar e verificar novamente.

Então dá enter com quatro códigos para rodar.

Vamos abrir isso.

Então temos uma sintaxe inválida na verdade.

Então a razão é porque deixe-me voltar aqui é porque não devemos passar um dicionário, sabe, assim.

Então só precisamos fazer isso.

Então dissemos que dados devem ser iguais a dados.

Agora vamos salvar isso.

E então isso deve funcionar de volta.

Vamos esperar como dois segundos ou mais.

Ok, ele está recarregando.

Sim.

Então agora vamos ver, a menos que seja Londres.

Então agora temos Londres.

Mas você pode ver que não temos tudo isso aparecendo.

Agora, a razão pela qual não temos isso mostrado é porque ele não vê isso.

Agora, como um dicionário, novamente, ele vê como uma variável normal.

Então vamos ter que vir aqui, no índice, e veremos dados.

Dados desses dados.

Então você precisa adicioná-los.

E também para a umidade.

Agora, quando salvamos isso, voltamos aqui, atualize e envie novamente, você pode ver agora temos Londres.

E também temos todos esses detalhes.

Então basicamente, é assim que consertamos isso.

Então vamos começar.

Vamos pesquisar por outra cidade, na verdade, vamos ver Lagos.

Agora Lagos, código do país Nigéria, que é NG, agora temos tudo isso bem, temperatura legal, então, vamos ver outra configuração e então seguimos.

E agora ele nos dá os detalhes.

Isso é o que queremos neste vídeo.

Mais uma coisa que queremos passar é que, quando um usuário acessar este site, não queremos que ele mostre uma tela em branco.

Primeiro de tudo, existe um histórico de pesquisa que é exibido.

Então, podemos fazer isso usando uma declaração if.

Logo após a regra, bem aqui, vamos dizer if data.country_code.

Então, se tivermos esses dados, o código do país deve ser o inicial. Caso contrário, o else, que é nossa declaração else, alega entidade se não precisarmos de else.

Agora vamos salvar isso e a cada atualização, boom, se foi.

Então o que estamos fazendo é dizer que se data tiver código de país, isso significa que se tivermos algo assim, você mostra todas essas palavras, mesmo que, obviamente, isso não esteja lá.

Então agora vamos verificar isso novamente.

Londres, vamos entrar, agora temos esta borda. Quando apenas acessamos o site, normalmente temos isso, o que é muito bom.

Isso é o que queremos.

Então espero que vocês tenham gostado deste tutorial, que foi muito divertido para mim, bonito.

E também, se gostaram, por favor, não se esqueçam de esmagar o botão de curtir e se inscrever.

Neste vídeo, vamos construir um aplicativo de chat simples usando Django.

Então isso vai ser construído com Django e um pouco de Ajax, então um pouco de JavaScript nele.

Não vamos usar nada tão complexo, não vamos usar WebSockets, canais ou algo assim, apenas Django com Ajax.

E o link para o código-fonte de tudo que vamos construir neste vídeo estará na descrição abaixo.

Então o arquivo de modelo e tudo que vamos construir, você pode acessar.

E este vídeo estará em duas partes.

Então esta é a primeira parte e você terá uma segunda parte para concluir.

E sim, vamos testar isso.

Então, este é o nome da sala ou o usuário pode criar uma nova sala ou apenas dizer, vamos dar o nome de sala de código Dean.

Não sei, estou apenas dando qualquer nome de sala e então eu e a equipe dos EUA vamos agora entrar na sala porque está em branco por enquanto.

Vamos entrar exatamente aqui.

Aqui estamos, vamos entrar como John.

Agora entramos.

Então agora eu posso ver, tipo, como se tivesse enviado.

Você vê, mostra 42, isso é em tempo real e eu recebo um "O que isso enviou", você vê, mostra 42, então este é o aplicativo simples que vamos construir neste vídeo.

Agora todos esses dados que você está vendo aqui com data e hora, mensagem e nome serão salvos em nosso banco de dados.

Então, como você pode ver, estamos recebendo todas essas mensagens em tempo real.

É realmente um projeto divertido de construir, e você vai melhorar suas habilidades em Django.

E misturando um pouco de JavaScript que você nem vai perceber.

Vamos direto ao vídeo.

Então pessoal, a primeira coisa que precisamos fazer para começar com este projeto é obviamente instalar o Django.

Como eu disse na introdução, vamos usar Django para fazer este aplicativo de chat.

Então vamos ter certeza de que temos o Django instalado.

Então eu vou apenas dizer Pip, instalar Django.

Agora esta linha de comando vai instalar a versão mais recente do Django no meu computador.

Mas eu já tenho Django instalado, então ele deve me dizer que a exigência já está satisfeita.

E note que se você está no Mac, deve digitar PIP3, instalar Django.

Há apenas uma pequena diferença entre Windows e Mac, nada mais do que isso.

Então como você pode ver, diz que a exigência já está satisfeita.

Então vamos esperar isso terminar de sair.

Oh sim, eu cancelei.

Então deixe-me fechar isso.

E agora podemos criar nosso projeto.

Então eu estou no diretório onde quero criar meu projeto.

Então eu vou apenas dizer Django-admin startproject.

Vamos nomeá-lo Django-chat.

Isso é, Django-chat.

E neste vídeo, não vamos usar canais e readies, e a forma popular de usar um aplicativo de chat, o que vamos usar é um pouco de JavaScript, que é Ajax.

Então vamos usar Django e implementar Ajax para fazer nossas funções de chat em tempo real.

Você vai ver o que vamos fazer neste vídeo.

Então agora, podemos apenas entrar lá e dizer, Django-chat.

Então estamos nisso.

E então se apertarmos dir, podemos ver bem aqui que há o arquivo manage.py e temos essa pasta.

Então o que eu gosto de fazer é criar meu aplicativo Django imediatamente.

Então agora posso fazer Python manage.py, startapp e vou nomear o aplicativo chat.

Então isso deve criar um novo aplicativo chamado chat.

E devemos ter outra pasta bem aqui chamada chat.

Então bem aqui, você pode ver que temos uma nova pasta.

Então não precisamos mais desse prompt de comando, vamos para o VS Code.

E então vamos abrir isso.

Então vou abrir uma pasta.

Então o projeto que acabamos de criar, vou colocá-lo no VS Code.

Então, projeto, está lá.

Eu tenho aqui.

E é isso, aqui está.

Então eu vou dizer Selecionar Pasta, então isso deve abrir.

E me dá alguns segundos.

Ok, então isso está feito.

Deixe-me fechar isso.

Então agora temos tudo isso aqui.

Então, a próxima coisa que quero fazer, a primeira coisa que gosto de fazer é adicionar meu arquivo de template.



```
Então, primeiramente, deixe-me falar sobre templates.

Então, eu preciso criar uma nova pasta no meu diretório raiz chamada **template**.

E aqui, eu vou trazer meus arquivos de template.

Eu já tenho este arquivo de template projetado, neste vídeo, não vamos fazer isso do zero.

Então, se você quiser obtê-lo, como eu disse na introdução, vou deixar um link para o código-fonte deste projeto na descrição abaixo.

Assim, você pode ir lá e obter o arquivo de template.

Então bem aqui, se eu abrir isto, é onde eu iniciei o arquivo de template.

Então, vou apenas arrastar e soltar no VS Code.

Assim, temos ele bem ali.

Agora, a próxima coisa que precisamos fazer é ir para nossas configurações, e apenas configurar o template e adicionar este gráfico aos aplicativos instalados.

Então, primeiramente, vamos para aqui.

E então, há nossos gráficos.

Então, isso é adicionado ao aplicativo instalado schoolzilla up e então descemos ainda escrevendo isto, eu posso apenas dizer paga o dia quando vejo esses **slush templates**.

Então, o que esta linha de comando está fazendo é que está dizendo ao Django onde olhar o nosso arquivo de template.

Então, quando estivermos fazendo o mapeamento de URLs, o que significa que quando estivermos dizendo ao Django onde estão todas as nossas URLs, todas as URLs do nosso projeto, e queremos renderizar uma página HTML para mostrar para uma URL específica, precisamos que o Django saiba onde localizar este arquivo HTML.

Então, esta linha de código diz diretório, então eu não preciso ir para o diretório base.

Então, o diretório base mostra o projeto raiz bem aqui.

Este é o diretório base.

E no diretório base, o Django vai entrar em uma pasta chamada **template**.

Como você pode ver, isto é um template.

Então, o Django pode acessar todos esses arquivos dentro desta pasta de templates.

Então digamos, em vez de nomear isso como template, vamos nomeá-lo como **arquivos**, o que precisamos fazer é vir aqui e mudar para **arquivos**.

Mas sim, estamos usando templates.

Então, não há nome específico que você precise dar, apenas certifique-se de que isso e isso estão correlacionados.

Então, sim, temos isso feito.

E podemos salvar.

Agora eu não acho que temos algo a fazer com o arquivo de configuração novamente, agora só precisamos fazer nossas URLs.

Então, viemos aqui, e então precisamos criar um novo arquivo chamado **urls.py**.

Para agora configurar a URL, vamos apenas dizer **from django.urls, import path**.

Assim, isso vai permitir que configuremos os caminhos.

Então, agora, deixe-me apenas dizer **from . import views**, então, vamos usar isso e vou explicar por que estamos importando esta segunda linha em um minuto.

Então, agora vamos dizer **urlpatterns = [ ]**, o primeiro, que está vazio no diretório raiz, nós usamos ou digamos **home**, e então vamos dar um nome.

Então, agora temos isso.

Então, estamos importando essas views, porque estamos dizendo que quando um usuário quer ir para o diretório principal, ele deve ir para **views.home**.

Então, ele vai para o arquivo **views.py**, que está bem aqui.

E novamente, procurar por uma função nomeada.

Então, o que estivermos fazendo nas funções, vai acontecer nesta URL.

Então, acabei de fazer uma segunda linha para import views.

Então, podemos dizer qualquer função que temos agora, que está bem aqui.

Então, bem aqui, temos que ter uma função chamada **home**.

Eu vou deixar você apenas pegar um simples requests.

E então há **return**, digamos **return render**.

E então requests, por enquanto quero requests para **home.html**.

Então, é isso, eu vou chamar isso aqui em cima.

Então a última coisa que precisamos fazer para essa URL específica é vir ao **Django chat**, que é a pasta principal do projeto, e dentro do **urls** temos que seguir estas camadas, *conclusões* para cima.

Então bem aqui no **path** depois de importar o path, queremos importar **include**, e então vou dizer **include charts.urls**, e vamos salvar.

Então, agora vou abrir um novo terminal.

E então quero rodar meus projetos Django apenas para garantir que esta configuração de URL funcione com sucesso.

Então vamos dar um minuto para configurar.

Então, é muito fácil rodar um projeto Django para realmente tentar seguir com este vídeo.

Eu espero que você saiba pelo menos o básico de Django para saber o que está acontecendo por aqui.

Mas, quando estou fazendo meus tutoriais, gosto de explicar tudo o que estou fazendo, mesmo se você não souber nada sobre Django, então você sabe o que está acontecendo.

Mas ter um conhecimento básico de Django antes de assistir isso será útil.

Então para rodar nosso projeto Django, vamos apenas dizer **python manage.py runserver**.

Então, é assim fácil rodar um projeto Django.

Então, vou apenas esperar por isso para rodar no localhost que é o localhost na porta 8000.

Então, ok, aqui.

Ele nos dá um erro dizendo para adicionar novos objetos.

Oh, então vamos vir aqui para salvar no Nana, também porque eu acho que não atualizou.

Ainda nos dá o mesmo erro.

Ok.

Vamos ver.

**views**.

Boom.

Aqui.

Não deveria ser ponto final, deveria ser vírgula.

Então, vamos salvar isso novamente deverá estar rodando.

Sim, sim, então está rodando nessa.

Então, se eu apenas Ctrl + Click isso, vai abrir esta URL específica no meu navegador padrão.

Então ok, vou apenas vir aqui e abrir nós mesmos.

Então, você apenas vai digitar o localhost, que é 12700 na porta 8000.
```

E então deveríamos ver nosso arquivo HTML.

Bom.

Como você pode ver, agora temos gráficos do Django.

E então temos o formulário básico, que vamos usar neste projeto.

Então, este é o arquivo HTML básico que estamos usando.

Então, um usuário vai apenas adicionar o nome da sala, e depois o nome de usuário, e poderá entrar em uma sala.

Então, vamos voltar ao VS code e continuar com a codificação.

Agora podemos fechar isso.

Vou apenas abrir um novo terminal porque vamos precisar dele mais tarde.

Agora que temos isso, o que eu quero fazer é configurar o modelo que vamos usar neste projeto.

Vou configurar dois modelos, um será para a sala de chat, e o segundo será para as mensagens.

Então, vou entrar no arquivo models.py.

Então, tudo que preciso fazer é criar uma classe, e vou nomeá-la como room, e ela herdará models.Model.

E a única coisa que quero que tenha é o nome da sala.

Isso é tudo, um campo de caractere com um comprimento máximo de 1000.

Então, esse é o nome da sala.

Eu teria dado a ele outro atributo de ID.

Mas no Django, cada objeto de modelo possui um ID gerado automaticamente quando um novo objeto é criado.

Então, como já há um outro atributo chamado ID, não precisamos escrever isso nós mesmos.

Isso é tudo.

E o segundo que quero criar é a mensagem.

Então, este é o módulo ou o banco de dados que vai armazenar todas as mensagens.

Diga models.Model.

Agora, vou apenas dizer valor.

Sim, acho que valor é um bom nome.

Então, valor é como a mensagem que o usuário quer enviar, tipo "Oi, como você está?".

Então, esse valor queremos dar a ele um campo de caractere com um comprimento máximo para que uma mensagem possa ter até um milhão de caracteres.

E então vamos dar a ele uma data.

Então, qual data é esta.

Antes de podermos usar data, precisamos importar algo chamado date time.

Então de date time, import datetime.

Nós vamos dizer models.DateTimeField, não apenas DateField, DateTimeField. E o que queremos passar aqui não terá um comprimento máximo.

O que isso terá é um valor padrão.

O padrão será igual a datetime.now.

E então, vamos apenas definir blank para ser verdadeiro.

Apenas copie isso e cole.

A próxima coisa que queremos ter é o usuário.

Então, qual usuário está enviando esta mensagem específica, queremos dar a ele um campo de caractere com um comprimento máximo de um milhão, o nome de usuário não deve ser duplicado, é apenas para evitar quaisquer erros neste projeto.

E então, a última coisa que queremos adicionar é a sala.

Queremos saber para qual sala esta mensagem está sendo enviada.

Então, esta sala será como, podemos usar outro modelo de Django, como um modelo de relacionamento, como muitos para muitos ou chave estrangeira para ligar isso com esta sala.

Mas não vamos fazer isso neste vídeo.

Então, esta é outra maneira de fazer isso.

Então, quando estivermos enviando uma nova mensagem, ele terá o ID da sala, o que vai adicionar um link a isso.

Vocês vão entender tudo isso em um momento.

Então, vamos apenas salvar isso.

E tudo o que precisamos fazer é migrar isso para o nosso banco de dados, então diga python manage.py.

Faça migrações.

E então, depois de fazer as migrações, vamos precisar migrar, então é feito com python manage.py.

migrate.

Então, sim, temos a migração feita.

Bom.

Então, foi migrado para o nosso banco de dados.

Agora podemos ir para o nosso projeto Django e ir para /admin.

Mas antes de podermos acessar o painel de administração, precisamos criar um superusuário.

Então, Python manage.py createsuperuser.

Vamos apenas usar admin, deixar em branco.

Dar uma senha.

Senha definida com sucesso.

Agora temos um superusuário criado.

Vamos fechar isso.

Precisamos registrar esses modelos em nosso arquivo de administração.

Primeiro de tudo, temos que importar os módulos de models.

import room e import message, admin.site.register(room).

E então também registrar message.

Agora, salve isso.

Agora vamos para /admin.

Ele vai me pedir para fazer login, vamos dar um segundo para carregar.

Legal, ele diz que eu devo fazer login, vamos fazer login com os detalhes que eu acabei de criar.

E então, como você pode ver, agora ele me leva a este painel de administração, e eu tenho as mensagens e as salas.

modelo Django instalado aqui.

Então, entrando em mensagens.

Por enquanto, obviamente, não devemos ter nenhum objeto aqui.

E se eu quiser adicionar uma nova mensagem, você verá que ele tem todos os campos que precisamos.

Então, vamos voltar para a home.

E então abrir uma nova aba, voltar para a página inicial e deixar assim.

Então, agora temos tudo isso.

A próxima coisa que acho que precisamos fazer agora é garantir que, uma vez que um usuário insira um nome de sala específico, digamos que o nome da sala seja Django, apenas sala de Django e o usuário seja, tipo, Tom.

Então, quando ele entrar na sala, ele deve levar o usuário a uma URL única para essa sala de chat específica do Django.

Então, o que precisamos fazer é, primeiro de tudo, verificar se esta sala existe no nosso banco de dados.

Então se, digamos, Django, por exemplo, é o nome da sala, eu quero entrar na sala.

Então, primeiro de tudo, é preciso deixar-me remover isso, não precisamos disso novamente.

Então, nas nossas URLs, precisamos ter um novo caminho.

Esse caminho será o caminho para a sala, serão as URLs para a sala.

Então, vou dizer que será uma URL dinâmica.

Então, vamos dizer estranho, nome da sala dos caras.

E então diremos barra.

Então, esta é a barra ruandesa, qualquer coisa que queira adicionar a isso.

Então, dizemos visualizações.

pontos sala, vou dar um nome no geral.

Então, isso é bom.

E então vamos entrar nas visualizações e criar uma nova.

Vou nomear sala associada solicitação de sala também, vamos apenas copiar isso, deve também renderizar o arquivo room.html.

Então, é aqui que o arquivo room.html está.

Então está renderizando o arquivo room.html.

Muito simples.

E agora, o que queremos fazer, então isso não está apenas recebendo uma solicitação.

Primeiro de tudo, como você pode ver, aqui, estamos passando uma variável para este nome de URL específico da sala.

Então, precisamos entrar nas visualizações e também coletar isso.

Então agora temos tudo isso coletado.

Mas se entrarmos no home.html, assim aqui, role para baixo, desça, desça.

Aqui, temos este formulário.

Então, queremos enviar este formulário para uma ação que, quando o usuário clicar em Enviar.

Primeiro, envia esses dados para uma visualização que verificará se esta sala específica existe ou não.

Então, vamos criar essa visualização.

Então, precisamos criar outra URL, na verdade.

Vamos nomeá-la verifica-vista.

Então, esta é uma visualização que vai verificar o que está acontecendo.

Então, vamos copiar essas visualizações.

A sala de verificação é o nome da verificação da sala, conforme design de Michelle, vírgula, e aqui em nossas visualizações.

Vamos verificar a sala.

Apenas pense solicitação.

Por enquanto, vamos passar.

Vamos salvar isso.

Então, agora temos esta URL.

Então, se eu for para barra qualquer coisa, automaticamente ele verá isso como uma sala.

Mas o que eu quero fazer agora é entrar no meu home.html.

Então, bem aqui no meu home.html, quero adicionar algumas coisas ao meu formulário.

Então, isso será fácil apenas para adicionar onde esses dados estão indo e coisas assim.

Primeiro de tudo, vamos dizer que o método que está usando para enviar esses dados é um método POST.

E então a ação, para onde está indo, vai para verificar para você.

Então, agora temos o nome da sala, o nome do usuário.

Então, no Django, estamos usando um método POST, devemos garantir que temos o token CSRF CSRF underscore token.

Então, você deve garantir que temos isso, obviamente agora temos o nome da sala e o nome do usuário.

Então, isso está pronto.

Então, agora estamos enviando isso com o nome da sala e o nome do usuário para esta verificação para você.

Agora, bem aqui na visualização de verificação, antes de fazermos qualquer coisa, queremos verificar se o nome dessa sala existe no nosso banco de dados.

Então, antes de podermos fazer isso, primeiro precisamos importar aquele modelo específico para salvar de, podemos ver esses modelos, ou podemos ver dos modelos de chat de qualquer lugar que você queira fazer isso, está bem.

De modelos padrão, importa, queremos importar sala, queremos importar mensagem.

Então, por enquanto, não precisamos de mensagem, pois isso é importante mais tarde, porque vamos usá-la.

Então, bem aqui na visualização de verificação, o que queremos fazer é dizer sala, porque a solicitação.posts.

E então bescom yummy ducha.

Então, o nome de nome da sala.

Então, estamos pegando esse nome, nome da sala.

E então o segundo é o nome do usuário, obviamente.

Então, vamos garantir que o nome do usuário esteja correto.

Então, um desses, e então o que queremos verificar é que vamos dizer se sala.objects.futuro, então nosso futuro precisa do arquivo nome nome da sala.

Agora, queremos verificar se isso existe, então vamos fazer algo.

Então, o que estamos dizendo aqui é que se um objeto de sala do futuro de sala, ele vai verificar mesmo se há um objeto neste modelo de sala, que tem o nome de sala, então o nome desta sala que o usuário enviou.

E então se isso existir, queremos fazer algo, o que só queremos fazer é redirecionar o usuário para esta sala, que é uma função de trim.

Antes de redirecionar caras, precisamos importá-lo.

Então, import Redireciona.

Bom.

Então, só dizemos, retornar redirecionamento, e estamos redirecionando o usuário para barra sala barra nome da sala.

E não precisamos dizer esse nome, porque já temos esse nome.

E sabemos que existe.

Então, estamos redirecionando o usuário para a sala.

E então o que queremos passar também queremos passar o nome do usuário da pessoa que quer entrar nesta sala.

Então, sabemos que estamos enviando uma mensagem ao entrar e fazendo coisas assim.

Então, agora, podemos simplesmente dizer barra nome de usuário.

Então, aqui, primeiro de tudo, devemos ter, tipo, esse nome de usuário deve ser igual a um religioso.

Adicione o nome do usuário.

Então, é por isso que levamos esses usuários e então retornando o usuário agora, para barra sala barra nome de usuário, então igual ao nome de usuário.

Então, isso está pronto para funcionar, então se não existir.

Então, se esta é uma nova sala que o usuário está apenas criando, mas quer fazer isso novo.

Ter uma nova variável, diz nova_sala deve agora ser igual a sala.objeto.criar.

Então, queremos criar uma nova com o nome da sala.

Então, vamos pegar aquela sala e criar uma nova sala com aquele nome específico.

Agora, uma vez que temos isso salvo, podemos redirecionar o usuário para essa página.

Exatamente a mesma coisa que fizemos aqui.

Então espero que você tenha entendido o que fizemos nesta visualização de verificação, é algo bem básico e simples.

Segurança religiosa, seguranças e bom testá-lo.

Então, bem aqui, ele atualiza.

Vamos para nossos quartos, você verá que não temos um quarto para deixar nosso novo quarto, a menos que você diga algo como, vamos dar programação.

Eles apenas dizem programação.

Codificadores.

Ok, bom.

E então eles dizem, Tom.

Então agora vamos criar um quarto.

Agora você pode ver que tudo está funcionando perfeitamente.

Isso nos leva a este URL específico chamado coders.

Então este é o nosso app / go faz então o nome do usuário igual a.

Então nós temos o nome da sala, e então o nome do usuário, então o usuário que entrou no show, e então quando chegamos aqui e atualizamos, podemos ver que nossa sala foi criada com sucesso, sala de coders.

Então isso é bom.

E então não se importe com esta mensagem ou veja agora que é apenas o modelo básico que trouxemos anteriormente.

Então isso é o que vamos mudar para ser uma mensagem em tempo real, e oh, ou deciduous, ou demo.

E eles vão mudar isso para o nome da sala, obviamente.

Então eu acho que temos isso, e então vamos verificar.

Então vamos voltar, e então tentar entrar nesta sala de programação novamente.

Então agora vamos garantir que ele não crie outra sala com o mesmo nome de CUDA.

Mas ele apenas nos leva a essa sala.

Então vamos entrar com outro usuário, desta vez eu poderia mudar.

Então ele nos leva para a mesma sala, mas com um usuário diferente desta vez.

Assim que atualizarmos, vemos que não temos um novo objeto criado, ele apenas nos leva a este existente.

Então é isso que fizemos na nossa visualização de verificação.

Isso é muito bom agora.

E então, como temos isso, o que podemos apenas fazer é entrar em room.html.

Então, bem aqui, é onde precisamos fazer algum trabalho.

Em seguida, posso apenas fechar isso.

Então, em vez de ter nome, ok, vamos ver, bem aqui.

Ok, bom.

Então agora temos tudo isso criado, a próxima coisa que queremos fazer é, primeiro de tudo, vamos remover isso.

E então, uma vez que o usuário inserir uma mensagem e a enviar, queremos que a mensagem seja armazenada no banco de dados com os detalhes desta sala e do usuário.

Então você vai ver o que vamos fazer.

Então, bem aqui, agora, o que precisamos fazer é, primeiro de tudo, entrar em room.html.

Então bem aqui neste formulário, precisamos criar algumas coisas que vão permitir que enviemos isso, obviamente, então no formulário, vamos ouvir, o formulário, certo deveria estar abaixo, discloses.

disclose DSL.

Então este é o formulário aqui.

Então agora neste formulário, vamos apenas ter algumas coisas como CSRF token, pois eu sempre adiciono CSRF_ token a isso, apenas para garantir que sempre que usarmos o método POST, tudo funcione.

Então você pode ver agora que eu coloquei um CSRF token, mas eu não fiz algo como método posts.

Isso porque vamos usar Ajax para enviar este formulário.

Então se eu vier aqui normalmente, e então digitar uma mensagem e enviá-la, a página vai recarregar.

E isso, isso é o que não queremos no nosso chat.

Então queremos que seja em tempo real, queremos que tudo aconteça.

Sem que esta página pense em atualizar.

Então, uma vez que enviamos algo, ele vai enviar enquanto é enviado sem a página atualizar, vai ser criado em nosso banco de dados de mensagens.

E então mais tarde, também vamos fazer com que seja exibido automaticamente em tempo real, sem qualquer atualização de página.

Então é aqui que entra o Ajax.

Então, Ajax é um recurso muito legal.

Eu tenho uma tonelada de tutoriais sobre Ajax no meu canal.

Então ele permite fazer coisas como obter banco de dados em tempo real, de forma assíncrona, algumas coisas legais que você pode brincar com Django.

Então este Ajax não é com Python, é na verdade com JavaScript.

Então vamos usar um JavaScript básico.

Agora, para usar Ajax, só precisamos garantir que você tenha este script carregado em seu arquivo de modelo.

Então esta linha particular, deixe-me apenas rolar para que vocês possam ver as linhas.

É isso.

Então, uma vez que você tenha isso importado, você está pronto.

Então, primeiro de tudo, bem aqui, você pode ver que temos este formulário.

Então queremos clicar em Enviar.

Então, bem aqui, você vê que temos 1, 2, 3, 4 entradas.

Mas sim, só temos duas entradas mostradas.

Então, se você ver, o tipo disso é hidden, e o tipo disso também é hidden, então não queremos que o usuário escreva algo novo, vamos dar automaticamente um valor a nós mesmos.

Então o nome do usuário é o usuário atual que fez login.

E então o ID da sala é o ID desta sala em que o usuário está.

Então antes de continuarmos, precisamos entrar em nossas visualizações, obter esses dois detalhes, depois de obter os detalhes, passamos de volta para cá e depois implementamos em nosso formulário.

Então vamos fazer isso rapidamente.

Então agora bem na nossa sala, só precisamos dizer nome do usuário, primeiro de tudo, então como vamos obter este nome de usuário, você pode ver não ruim, ruim, ruim, ruim, ruim, ruim.

Então o nome de usuário deve ser porque agora vamos apenas voltar e ouvir uma tempestade.

Ok, bom.

Então garanta que nossos URLs estejam funcionando.

Então você pode ver agora nossos URLs, temos o nome da sala e temos o nome do usuário.

Então vamos dizer que o nome do usuário deve ser igual a.

Então, eu vou solicitar para sua solicitação que obtém isso, certo?

E então vamos dizer nome de usuário.

Então, ele é armazenado em uma variável de nome de usuário, como você pode ver.

Então agora, neste cenário, vamos obter o valor de Tom, se este é o tema vamos obter um time com esta área, vamos obter.

E a próxima coisa que queremos obter são os detalhes da sala.

Então, você pode ver que temos esta sala.

Este código faz o que está sendo passado aqui nesta sala, temos essa leitura.

Então eu ia dizer que, como temos o nome dessa sala, vamos usar esse nome para acessar o banco de dados.

Então, vamos ver detalhes da sala no discord.

E então vamos dizer que vai para objetos da sala ponto obter nome igual a de.

Então, o que isso está fazendo é que temos uma nova variável, obviamente.

E então, desse modelo de sala aqui, ponto objeto ponto obter está obtendo o modelo particular que tem o nome desta sala.

Então, temos o nome de coders neste caso.

Agora que temos todos os detalhes de que precisamos, tudo o que eu quero fazer agora é passá-los para nosso HTML.

Então, bem aqui, vamos garantir que obtemos isso.

Primeiro de tudo, colocamos uma vírgula.

E temos isso.

E então, vamos passar o nome do usuário.

Copie isso, cole um nome de usuário.

E então, um de nós os detalhes da sala também.

Então, primeiro de tudo, uma buzina da sala.

Na verdade, se tivermos os detalhes da sala, precisamos passar a sala.

Mas vamos apenas fazer isso.

Vamos copiar e colar.

Então agora temos tudo isso enviado para nosso HTML.

Agora em nosso HTML, devemos ser capazes de acessar tudo isso facilmente.

Então, vamos salvar este arquivo.

E bem aqui em salas.

Primeiro de tudo, deixe-me rolar tudo para cima.

Então, em vez de nome da sala, agora que tenho o nome da sala, posso fazer apenas sala.

Então, esta sala é na verdade DCE.

Ok, isso não deve ser dias.

Bom.

Salve isso novamente.

Então temos esta sala.

Então, primeiro veja essa mudança e certifique-se de que tudo está funcionando.

Então, em vez de um nome, devemos ter coders.

Então bem aqui agora você pode ver que temos coders.

Bom.

Agora vamos rolar para baixo de volta ao formulário bem aqui.

Então, o valor do nome do usuário é o usuário atual, devemos apenas ter isso.

E então o ID da sala deve ter detalhes da sala que Id como este.

Então eu obtenho esses detalhes da sala que foram enviados aqui.

Então, como você pode ver, lembre-se que os diferentes detalhes da sala particular do modelo.

Então, o que estamos fazendo aqui é obter aquele modelo particular e obter esse ID, lembra no início eu disse uma vez que você tem um novo objeto, o objeto automaticamente No ad, então eu obtenho esse ID.

Então agora que temos tudo isso emitido, por que deveríamos estar prontos para usar nosso Ajax.

Então, apenas use Ajax, na verdade vou apenas abrir um novo script, bem aqui abaixo do corpo, conforme dado aqui.

Então, para economizar tempo, vou apenas colar este código.

Então o que este código faz, você pode ver apenas um pedaço de JavaScript.

Então deixe-me explicar linha por linha.

Então este é o documento.

Então, o que isso está fazendo é que uma vez que carregamos este formulário de documento, estamos dizendo que aquele também envia este formulário de postagem.

Então, o que estamos dizendo é imediatamente um usuário clica no botão de enviar deste formulário de postagem.

Então, este é esse botão de envio do formulário de postagem.

Então, o que queremos fazer, queremos ter uma função.

E damos isso um valor.

Então, vamos dizer e ponto evitar padrão.

Então, o que este evitar padrão faz é que normalmente em um formulário, uma vez que enviamos a página vai recarregar ou ir para outra página.

Então, este evitar padrão vai evitar que isso de recarregar ou ir para outra página.

Então agora sabemos que a página não vai recarregar.

Agora vamos usar nosso Ajax para enviar esses detalhes para nosso banco de dados.

Então, o que estamos fazendo agora é dizer Ajax, e então estamos dizendo que o tipo é post.

Normalmente, quando estamos usando Ajax, sabemos que vamos usar algo como método.

Mas uma vez que estamos usando Ajax, não precisamos disso.

Então, já estamos acessando o tipo post, e a URL é enviar, vou explicar esta URL em um pouco.

E então os dados são basicamente o que o nome do dado do usuário com a tag de imagem de nome do usuário, ID da sala, e então a mensagem.

Então, como você pode ver, tudo é nome de usuário, mighty mensagem.

Isso é apenas o que estamos enviando.

E então o token CSRF, é assim que implementamos o token CSRF bem aqui.

Então a função de sucesso, podemos apenas dizer algo como mensagem enviada.

Então, apenas comentei isso, deixe-me deixar isso assim.

E então, sim, deixe-me apenas deixar isso assim.

Então o que isso está fazendo é a função de sucesso quando a mensagem ou algum dado está no banco de dados, vamos criar uma mensagem particular.

Então, isso vai ser acessado a partir da função views.pi.

Vou voltar para isso.

E então, isso, o que isso está fazendo é uma vez que um usuário clicar em enviar e foi salvo no banco de dados, queremos excluir isso uma vez que excluímos aquela linha particular do input.

Então, o que quero dizer é que, digamos que o usuário digite algo bem aqui.

E então o usuário clicar em enviar.

Assim que isso for salvo, queremos limpar este input em particular para agora estar em branco, assim como você vê nos serviços de bate-papo normais.

O que queremos fazer é ter uma nova URL e vamos nomear essa URL como enviada.

Então, como você pode ver, está enviando todos esses dados para uma URL chamada enviada.

Então, antes de tudo, vamos salvar isto e criar uma nova, digamos, enviada.

E então, baseamos e baseamos, então temos uma nova URL chamada enviada, depois queremos criar uma nova função para ela.

Assim como fizemos algo como esta verificação de visualização, lembra? Então, esta verificação de visualização primeiro verificou se aquela sala está disponível ou não disponível, antes de fazer o que quer que fosse.

Então, vamos fazer algo semelhante no st.

Então, vamos apenas fazer, vamos avaliar o st.

Então, vamos rolar para baixo uma nova função enviar solicitações.

Então estas são apenas funções básicas.

E então, bem aqui, você pode ver que estamos enviando todos esses dados para este st.

URL, então vamos apenas acessá-los.

Então, vamos apenas dizer que a mensagem deve ser igual a.

Então por que não é um método Post do front-end associado a essas posts e depois é a mesma mensagem.

Então, gosto de conferir para evitar qualquer erro.

Então, aqui está uma variável de mensagem, o ID da sala, depois usar um nome.

Então, esses são os três de que precisamos.

Então, não.

gamer base baseados, e então isso deve ser o nome de usuário.

E então isso deve ser o ID underscore sala.

Então agora copie isso.

apenas colou a essência da mesma coisa.

Então, temos tudo isso feito.

Então agora que esta visualização tem todos esses dados, que para nós são meio que inseridos, tudo o que queremos fazer é armazenar esses dados neste banco de dados de mensagens, vamos deixar isso carregar rapidamente.

Ok, sei porque esse erro está surgindo, só porque não salvamos algumas alterações ainda.

Mas vamos continuar.

Então, você sabe, temos esses módulos, que é mensagem, então queremos salvar todos esses neste módulo.

Então, agora, desde que importamos o módulo de mensagens aqui em cima, lembra que eu disse que íamos usá-lo depois, então temos isso importado, não precisamos importá-lo novamente.

Então, podemos simplesmente dizer, nova mensagem.

Nenhuma nova mensagem, vamos dizer que a mensagem não é na verdade, uma mensagem msg. objeto.

Não barra espere um ponto, objeto ponto criar.

Então, eu criei um novo objeto certo? Agora o valor, lembra que usamos valor não deve ser a mensagem que coletamos.

E então o usuário, lembre-se que o usuário deve ser o nome de usuário, que foi coletado, e então a sala.

Então, o que queremos armazenar é o ID da sala.

Então, a sala deve ser igual ao ID da sala.

Então, agora que temos isso, tudo o que podemos fazer é apenas dizer, nova mensagem ponto salvar, então nós apenas fazemos, nova mensagem ponto salvar.

Então, temos isso salvo visuais, retorno.

Agora, não estamos renderizando nenhuma página HTML, só queremos retornar para o front-end ou para o JavaScript a mensagem.

Então vamos dar a ele uma resposta HTTP.

Mas antes de fazermos isso, antes de tudo, temos que importar cada limite.

Então, diremos de Django ponto HTTP, importar, HTTP resposta.

Bom.

Então, agora podemos ver retornar uma resposta HTTP.

Podemos dizer, mensagem enviada com sucesso.

Bom.

Então, agora temos isso.

Então essa resposta HTTP, é assim que acabei de salvar o arquivo.

E isso é o que vamos, então esses dados, lembra que eu disse no sucesso dummies, se tudo funcionar perfeitamente, vamos funcionar com esse valor de dados, e então queremos alertar os dados.

Então, esses dados são essa resposta HTTP.

Então, quando alertamos, só vai dizer que a mensagem foi enviada com sucesso.

Agora, fizemos um bom trabalho.

Então, vamos verificar o que fizemos.

Agora, isso deve estar funcionando.

Bom.

E então em mensagens, você pode ver que temos zero mensagem.

Então, agora deixe-me apenas digitar Ok, antes de tudo, tenho que atualizar esta página.

atualizar, atualizar.

Bom.

Então, agora deixe-me apenas digitar uma mensagem como, Ei, pessoal, e eu enviei, você pode ver que diz mensagem enviada com sucesso.

Obviamente, mais tarde no tutorial, vamos remover isso ou apenas usar isso para confirmação.

E então, uma vez que eu pressionar enviar, você verá que a mensagem não aparece aqui de novo, o que não deveria ser conforme esperado, vamos atualizar.

Eu acho que agora temos uma nova mensagem, então diz valor 'ei, pessoal'.

E vem do usuário termo, que vemos aqui.

E então a sala com o ID de um.

Então, a sala com o ID de um é obviamente esta sala de descanso.

Então, se for outra sala, vai nos dizer a sala com o ID de dois.

Vamos conferir.

Não, isso foi incrível.

Então eu disse ok, vamos para a página inicial.

Agora eu quero criar outra sala e dizer, desenvolvedores back-end.

E agora, Tom estará aqui.

Agora vamos criar a sala.

Agora, deixe-me ver um desenvolvedor e enviar a mensagem e com sucesso a mensagem exibida é limpa.

Agora, viemos aqui para mensagens, temos duas mensagens agora, um desenvolvedor temos a data e a hora, e vem do usuário Tom e o ID da sala é dois.

Então, se você for para salas, verá que temos uma nova sala criada com o ID de um desenvolvedor back-end.

Então, podemos usar isso para acessar as mensagens de cada sala mais tarde.

Então, isso está funcionando muito bem.

O que fizemos até este ponto é que um usuário pode criar uma nova sala, entrar nessa sala, então vai estar em uma URL dinâmica, e então o usuário pode enviar uma mensagem e essa mensagem será salva no banco de dados.

Então, no próximo vídeo, o que precisamos fazer é garantir que uma vez que o usuário entre em uma sala, todas as mensagens dessa sala, primeiro apareçam como um chat normal.

E então, não apenas para o usuário, mas também para outro usuário em qualquer lugar, a pessoa também vai testar isso em modo de navegação anônima.

Espero que vocês tenham gostado deste tutorial até agora, eu realmente me diverti construindo isso.

Não se esqueça de apertar o botão de curtir e se inscrever.

Olá, pessoal, bem-vindos à segunda parte deste tutorial de Django.

Então, esta é a segunda e última parte deste aplicativo de chat com Django.

No último vídeo, paramos em salvar todos os valores no banco de dados.

Então, adicionamos dois modelos, que eram, deixe-me rapidamente revisar suas mensagens e sala.

Então, esta sala vai criar uma nova sala, sempre que um usuário quiser criar uma nova sala, e então esta mensagem vai armazenar as mensagens.

Então, esta mensagem é como o banco de dados para armazenar todas as mensagens.

Então, como você pode ver, temos o valor da mensagem, um desenvolvedor, temos a data e a hora, temos o usuário que enviou nossa mensagem e temos a sala.

Então, como dizer a sala com o ID de dois.

Então, se você não assistiu o último vídeo, você definitivamente deve assisti-lo antes deste.

Então, o que precisamos fazer agora, já que temos todos os dados armazenados, acho que não temos muito trabalho a fazer, só precisamos pegar todos os dados e mostrá-los para você.

Mas o que precisamos fazer um pouco de trabalho extra é garantir que esses dados sejam exibidos em tempo real.

Então, se um usuário de outro telefone móvel ou de outro lugar do mundo enviar uma mensagem, queremos vê-la aqui em tempo real sem sequer atualizar esta página.

Então, estamos usando Ajax para isso. No último vídeo, usamos Ajax para que, quando um usuário enviar, então se eu vier aqui e disser que estou testando.

E então eu vejo que clico em enviar, ele diz mensagem enviada com sucesso, esta página não foi atualizada, e então foi limpa para você.

Bem-vindo às mensagens, você vai ver que eu tenho uma nova mensagem, eu testei a data e hora, usuário e o ID da sala.

Então, agora usamos Ajax para fazer isso.

Agora queremos usar Ajax também, novamente, para carregar esses dados de mensagens em tempo real.

Vamos direto ao ponto.

Então, aqui, só precisamos adicionar uma nova URL.

Então, se estivermos usando apenas Django normal para carregar as mensagens, você sabe, vamos apenas entrar nas views, temos uma nova função, ou nem precisamos de uma nova função, vamos apenas entrar na sala, e então só especificar a mensagem e enviá-la para o arquivo HTML, e então apenas exibi-la.

Mas se fizermos isso, uma vez que o usuário atualize ou crie uma nova mensagem, ela não será atualizada em tempo real.

Então, precisamos fazer isso em tempo real.

Vamos entrar em URLs, precisamos ter uma nova view para obter todas as mensagens.

E esta URL vai ser dinâmica.

Então, já que é uma lista de URL dinâmica, direito autoral é passado isso.

Então, isso é barra obter mensagens.

Então, se você pode ler isso, isso está dizendo que obtém mensagens / uma sala em particular que você quer obter a mensagem.

Então, vamos ter o nome da sala.

Então, se o nome da sala é chamado nós, como em seu nome digital de Jesus, mas back end developers.

Então, vamos ser como obter mensagens / back end developers, depois vamos dizer views.obter_mensagens e a sala obtém mensagens.

Então, isso é bom.

E então vai entrar em nosso arquivo views.py, criar uma nova função, obter_mensagens deve receber um request.

E também deve levar por enquanto, vamos passar.

Então, agora vamos salvar isso.

Então, agora isso está funcionando bem.

Agora, o que queremos fazer é vir aqui e então querer obter todas as mensagens daquela sala particular em que o usuário está.

Então agora que sabemos que temos o nome da sala, podemos usar este nome da sala para obter todas as mensagens daquela sala.

Agora, quando obtivermos esta mensagem desta sala, então vamos retornar uma resposta JSON de todas as mensagens.

Então, do nosso front end, vamos usar o Ajax JavaScript para acessar essa resposta JSON e exibi-la para nosso usuário.

Primeiro de tudo, precisamos ter certeza de que estamos importando JSON response para que possamos usá-lo bem aqui em HTTP, podemos dizer JSON response.

Então, bem aqui, agora não vamos mais passar.

Vamos apenas fazer isso para salvar os detalhes da sala.

Então, esta é uma nova variável.

Então, foi isso no modelo de sala, objetos que obtivemos e então o que obtemos na sala, que tem nome desta sala bem aqui.

Então, agora que sabemos que temos aquela sala que estamos procurando, vamos pegar as mensagens associadas à nossa sala.

Então, vamos dizer mensagens.

Bom, deveria ser igual a mensagem, então essa mensagem, módulo de objetos.filtro.

E então queremos filtrar com a sala, underscore underscore traço contínuo, não se preocupe, vou explicar isso.

Se você não entender aqui.

É room_details.id

Então, o que esta linha de código está fazendo, agora, deixe-me voltar ao que fizemos no primeiro tutorial.

Então, aqui, um módulo criou um novo modelo chamado mensagem.

Agora, esta mensagem, o que é é apenas o modelo que vai armazenar todas as mensagens nesta plataforma ou as mensagens.

E então adicionamos quatro atributos, o valor daquela mensagem, a data que aquela mensagem foi enviada, o usuário.

E agora o que estamos especificando é a sala.

Então, isso é o que quero falar sobre esta sala, é de qual sala esta mensagem está sendo enviada? Como, a qual sala esta mensagem pertence? Exatamente, essa é a palavra.

Então, agora que sabemos o ID da sala, não conseguimos obter todas as mensagens.

Agora, volte aqui para as views.

Estamos dizendo message aqueles objetos, o filtro.

Então agora queremos filtrar com toda a lista de dados que temos aqui.

Com o ID da sala que contém o room details.id.

Agora, não acho que deveríamos nem dizer contém, acho que deveríamos dizer com uma sala que é igual ao room details ou ID.

Agora, isto é mais futuro sem as mensagens com aquela na qual a sala é esse room details.id.

Agora, vamos apenas retornar em JSON response, retornar JSON response.

E então vamos retornar o meio da variável de mensagem mensagens, na verdade, vamos dizer que você deve estar bem, então, pelo menos obviamente, precisamos dizer que pelo menos vou dizer mensagens, valores assim.

Então isso é retornar uma resposta JSON.

E está retornando isso como uma variável de mensagens.

Então é isso que vamos usar para avaliá-lo.

E então terminamos uma lista de mensagens, que são essas mensagens de valor.

Então estamos obtendo todos os valores de você.

Isso é muito bom.

Agora temos isso feito.

Agora o que precisamos fazer é entrar no nosso room.html.

Então aqui, esta foi a função AJAX que usamos no início para enviar a mensagem.

Por enquanto, vamos apenas comentar isso fora.

E acho que podemos fechar isso.

Então aqui, deve ser bom ter outro script.

Então aqui, vamos ter outro script.

Vamos apenas ter aqui.

Bom.

Então vamos criar um novo script.

Então, vou colar um código JavaScript específico.

Então, o que esse código faz, eu vou explicar como esse código linha por linha.

Então isso está dizendo que uma vez que carregamos esse documento, que é esta página, então queremos fazer tudo nesta função.

Então é definir um intervalo, o que isso faz é que qualquer coisa dentro desses colchetes é a função que vai ser feita de novo, e de novo, e de novo, com essa quantidade específica de tempo, que é um segundo.

Então, isso significa que todas essas funções Ajax e obter todas as solicitações, tudo vai ser feito a cada segundo.

É por isso que podemos acessar os dados em tempo real.

Então, uma vez que uma atualização é feita no próximo segundo, já temos esses dados atualizados.

Então agora estamos usando o AJAX, estamos dizendo get. Desta vez, gostando de obter um dado específico da URL gets messages/room.

Então você se lembra quando fizemos isso, certo? Onde está? Aqui get messages/.

Então agora estamos dando o room.

Onde está o room? Em nossas views, lembre-se de que na view da sala aqui, enviamos room.

Então esse room é o nome desta sala específica.

Então eu acho, sim, talvez esse último nome específico da sala.

E então se tiver conseguido tudo, e então, então o que temos aqui, quando estamos obtendo, estamos obtendo essa resposta JSON bem aqui.

Então isso é o que estamos recebendo, então, se foi bem-sucedido, você pode fazer console.log response, vamos mostrar a resposta em girls, que são esses dados específicos.

Então eu comentei isso fora, porque não precisamos, mas o que queremos fazer é mostrar isso em nossa UI.

E então eu disse, display.empty.

Então o que é isso, é, então se eu vier aqui, você verá que eu tenho uma nova tag div com um ID de display.

Então, primeiro, eu certifiquei que isso esteja vazio, eu removi tudo lá.

Metallic gonna remove all things I just commented out.

Então eu removi tudo lá.

E então eu fiz um loop, então eu disse para key em response messages, então para cada valor nesta resposta, e essa resposta, que inclui was JSON, estava dizendo dot messages, como você pode ver, são essas mensagens de tudo que obtemos aqui.

Então, para cada key em response messages.

Agora, qual é a nova variável que nomeamos temp? Apenas coloque isso, e então agora você pode ver que temos esse div tag em particular aqui.

Então esse é o div tag que usamos aqui.

Então apenas especificamos uma nova variável JavaScript com a tag HTML.

Então é a mesma coisa? Então é div class, container Doc, tudo.

Mas agora, você pode ver que apenas adicionamos mensagens de exemplo.

Olá, pessoal.

Como vocês estão?

Mas aqui não está lá fora.

Novamente, aqui.

Qual é a IDS response? messages key.user.

Então isso, primeiro é o nome do usuário da pessoa que enviou a mensagem.

E este é o valor da mensagem, que é como qualquer coisa, caras, e esta é a data.

Então agora temos isso em uma tag HTML, enquanto eu ia adicionar isso ao div tag que tem esse ID display.

Então agora isso está vazio, então vamos adicionar o que obtemos neste div tag.

Então, depois de ter isso feito, eu apenas adicionei um erro.

Então, se algo acontecer, se adicionarmos um erro, apenas diremos que ocorreu um erro.

Então isso deve funcionar totalmente.

Agora, vamos salvar isso.

Então se eu vier aqui, desenvolvedores de back-end?

Sim, deixe-me atualizar.

Ok, então como você pode ver, agora tenho duas mensagens.

Então, se eu entrar no meu Chrome, não é Chrome, é Microsoft Edge Internet Explorer ou algo assim.

Então, se eu entrar nas minhas ferramentas de desenvolvedor e entrar no console, agora me deixe atualizar novamente.

Você pode ver que este HTML está mudando ocasionalmente a cada segundo.

Então, deixe-me mostrar o que está acontecendo agora.

Se eu enviar algo como WhatsApp para as pessoas, e eu disser enviar.

Automaticamente, você vê que temos essa mensagem aqui no HTML. Você vê que isso não está detalhado em nosso código, mas é isso que o código JavaScript está fazendo.

Então, isso deve mostrar tudo, acho, porque não estou usando o Chrome.

Não sei por quê.

Mas sim, podemos pular isso, obviamente.

E então, vamos ver.

Vamos ver.

Vamos ver.

Ok, bom.

Então, estávamos procurando network, não console.

Desculpe por isso.

Então, você pode ver que está recebendo alguns dados a cada um segundo.

Então, está atualizando.

Atualizando, na verdade, isso nem é o que eu estou procurando.

Ok, acho.

Então, em caso fosse suposto ter, oh, sim, sei qual é o problema, bem aqui na nossa função sources.

Eu lembro, eu comentei.

Então, vamos salvar isso de novo.

É para atualizar? Então agora você pode ver, eu tenho essa mensagem sem recarregar.

Então, três mensagens para este espaço específico, um desenvolvedor, eu era um pastor.

Então, agora você pode ver que temos três. Bom, deixe-me adicionar uma nova como, a, e então apenas apertar enter.

Agora você pode ver que temos quatro em tempo real, está atualizando.

Deixe-me mostrar o que é legal sobre isso.

Vou abrir uma nova janela de navegação anônima.

Então, em modo privado, nem acho que abri isso neste navegador antes.

Então, só vou adicionar isso ali.

É este? Sim.

Ok, bom.

Então onde está? Temos você? Sim.

Bom.

Então agora, deixe-me apenas acessar.

Bem, em desenvolvedores de back-end, então vamos entrar neste mesmo espaço, ou estados de espaço por agora? Estamos, acho que estamos. Sim.

Quanto a mim.

Agora, vamos entrar como john.

E ls entrar no espaço? Agora você vê que carrega todas as mensagens deste espaço? Agora, deixe-me dizer ele me perguntou como você está? automaticamente, você vê, mostra a você e mostra do meu lado também.

Então é em tempo real.

Então, se alguém está em outra parte do mundo, vai funcionar.

Então, digamos que postamos isso online.

E então temos duas pessoas conectadas em lugares diferentes, uma vez que um usuário envia uma mensagem aqui vai mostrar bem aqui na minha plataforma em tempo real, contanto que eu esteja conectado à Internet.

Então, é um recurso muito bom, na verdade.

Então, vamos garantir que não temos erros.

E neste teste é um jogo.

Então, vamos apenas ir para a página inicial.

E então na praia.

Então agora deixe-me criar um novo espaço.

Então, deixe-me dizer, deixe-me apenas dizer, código, deixe-me apenas nomeá-lo código.

E agora deixe-me entrar como amplo, algo assim.

Agora, internação, você pode ver agora que não há mensagens, na verdade, posso colocar algo como, se não houver mensagens, eu deveria dizer, sem mensagens no espaço ou ser o primeiro a enviar a mensagem de algo assim.

Não precisamos disso por enquanto.

Então, código.

E então digamos que ela seja outro nome, Jessie.

E agora precisamos entrar.

Então agora temos esses dois espaços em branco, agora dizer, a quem está online.

Eu estou 18.

E você vê, mostra automaticamente aqui sem qualquer atraso.

E eu posso ver que eu estou.

E mostra aqui.

Então, isso é muito, muito bom.

Então, eu posso postar isso online, talvez quando eu terminar de gravar este tutorial.

E se eu fizer isso, vou deixar um link para a descrição, a descrição.

Então, se você quiser bater um papo comigo, você pode.

E acho que estamos praticamente terminados com este vídeo, é algo bem aqui.

Ok.

Como está indo a codificação? Sim, bom.

Bom.

Sim, testando isso.

Então sim, isso é muito bom.

Eu amo o que construímos neste vídeo.

Com vocês adoro o que construímos.

E você gosta de assistir este vídeo.

E se você assistiu este vídeo até este ponto particular, eu agradeço você porque nem todo mundo assiste até o final.

Neste tutorial, vamos falar sobre o Django Rest Framework.

Então, o Django Rest Framework é uma biblioteca, que permite você construir APIs no seu projeto Django.

Então, digamos que você tem um projeto Django, ou você quer construir uma API para que outros possam acessar seus dados, ou você está apenas tentando isso por diversão, ou apenas quer desenvolver suas habilidades, o Django Rest Framework é a melhor maneira de ir.

Ele permite que você construa APIs facilmente com muito menos código.

Então, isso é isso, o rest framework é muito, muito fácil de configurar.

E eu vou guiá-lo através de tudo neste tutorial.

Vamos começar do zero, vamos, primeiro de tudo, instalar Django, e então vamos começar um novo projeto Django, depois vamos instalar o rest framework, e então eu vou mostrar a você como integrar o rest framework nesse projeto Django.

Então, sem perder mais tempo, vamos direto ao ponto.

Então, aqui eu tenho meu prompt de comando, e eu já o tenho neste diretório onde eu quero criar meu projeto Django.

Eu quero primeiro garantir que eu tenho Django instalado.

Então, apenas pip install Django.

Este comando linha é para instalar Django usando o gerenciador de pacotes Python chamado Pip.

Você pode também instalar o Django de algumas outras maneiras, como easy install ou apenas com o código diretamente do GitHub, mas esta é a melhor maneira de ir.

Então, eu já tenho Django instalado.

Então, deve me dizer que o requisito já está satisfeito.

Agora vamos começar o novo projeto Django usando o Django admin start project.

E vamos dizer, o RF, que significa abordagem do Django rest framework.

Então, o projeto do Django rest framework, para esse prompt de comando vai iniciar uma nova aplicação ou um novo projeto Django neste diretório.

Então, este é o diretório aqui.

Então, você pode ver agora que está vazio por enquanto.

E boom, você vê que temos um novo projeto que foi iniciado.

Então, vamos voltar.

Sim.

Então agora que sabemos que temos um novo projeto iniciado, vamos apenas entrar nesse projeto.

Primeiro de tudo, então vemos que temos um projeto Django e entramos nele.

Então, ao fechar isso pressionando di R, agora posso ver que tenho dinheiro, apenas Pew II e di F.

Então este é o meu projeto Django padrão.

Agora, a próxima coisa que eu quero fazer é instalar o Django rest framework.

Antes de instalar o Django rest framework, deixe-me trazer este projeto Django para o VS code.

Então, vamos abrir o VS code, fechar isso.

E então em outono, que vai vir para abrir pasta.

E então deve me levar à pasta que deve me levar ao gerenciador de arquivos.

Então, posso entrar nessa pasta, acho que é 2F toots, então Chang, ti F.

Então, esta é a pasta.

E então, uma vez que eu selecione essa pasta, obviamente o VS code vai abrir isso.

Então, enquanto o VS code está fazendo sua mágica, vamos voltar ao prompt de comando.

E então o que queremos fazer agora é instalar o Django rest framework.

Então digamos Pip, install Django rest framework.

Então, é tão fácil instalar o Django rest framework, apenas um simples comando PIP.

Então, esta linha de comando vai instalar o Django rest framework no nosso computador.

Então, novamente, eu já tenho o Django rest framework instalado, então ele deve me dizer que o requisito já está satisfeito.

Mas para você, isso deve ir eu entendi que se você não tiver isso instalado, então vamos voltar ao VS code enquanto isso está instalando.

E então vamos fazer tudo limpo aqui.

Então, podemos sair disso.

Então podemos ver que este é um projeto Django.

Então, para este projeto, não vamos criar um aplicativo Django, pelo menos por enquanto.

Então, mais tarde, vamos criar um aplicativo onde vamos usar serializers e coisas assim.

Mas por enquanto, vamos apenas ficar com o projeto Django e o arquivo URLs de UI nele.

Então, é onde vamos colocar nosso views.pi.

E tudo o que vamos usar.

Então, vamos voltar ao prompt de comando.

Como você pode ver, diz que o requisito já está satisfeito.

Isso significa que eu já tenho o rest framework instalado.

Então, agora que eu sei que tenho o rest framework instalado, eu posso usar a biblioteca em outro módulo no nosso projeto.

Então agora, o que eu quero fazer é criar um novo arquivo, primeiro de tudo, e então renomeá-lo para views.py.

Então, neste arquivo views.py é onde vou codificar, assim como um projeto Django normal.

Primeiro de tudo, deixe-me importar render, digamos de Django ponto atalhos.

Então, dos atalhos do Django é a linha de comando.

Na verdade, não é uma linha de comando, é o módulo.

Então, o atalho é como uma classe, acho que como uma função na biblioteca Django, na qual você pode importar algumas coisas.

Então, importamos render.

E agora, isso é apenas para renderizar um modelo Normal para, mas eu quero usar a API view do rest framework.

Então, o rest framework nos fornece uma classe ou função API view, ou o que quer que seja.

Então, com essa API view, poderemos acessar muitos tipos de API's que estão disponíveis no Django rest framework.

Então, quando usamos a API view, podemos usar algo como uma solicitação GET ou solicitação POST.

E algumas outras coisas que estão sendo renderizadas ou são fornecidas a nós pelo rest framework.

Então, primeiro de tudo, diga de rest underscore framework.

E depois quer saber as views, então vamos importar API view.

Então, estou colocando a API view do resto das views.

E então, como eu disse, essa API view vai nos permitir criar uma função ou uma classe sobre ela, para que possamos usar tudo o que está disponível nessa API view.

Mas também como uma API view, queremos obviamente enviar uma resposta.

Agora, por exemplo, digamos que alguém, outro desenvolvedor tenta acessar nossa API, uma vez que envia uma solicitação para nossa API, queremos dar ao desenvolvedor uma resposta, queremos dar-lhe algum tipo de resultado.

Então, vamos supor que o usuário envie uma solicitação GET apenas para obter uma lista de um conjunto de consultas ou algo assim, ou pelo menos sobre dados, queremos devolver ao usuário uma resposta ou dados?

Então, para primeiro dar uma resposta, vamos ter que importar a resposta do rest framework, associada ao rest framework, import ponto resposta, primeiro de tudo, importar resposta.

Então, o que isso está fazendo é apenas dizer do rest framework que, oh, não, isso está errado, do rest framework ponto resposta, você só quer importar resposta.

Então é isso.

Agora que temos tudo importado, podemos agora criar uma classe para herdar dessa API view, para que possamos obter muitos métodos com os quais podemos trabalhar.

```markdown
E vamos chamá-lo de algo como, digamos, teste de visualização.

E então API view.

Então, estávamos nomeando esta visualização, esta visualização.

E então, esta visualização está herdando da API view, que está bem aqui.

Então, o que podemos fazer agora é ordenar esta classe, queremos ter uma função get, que será como uma solicitação get para esta API.

Então, dito isso, Jeff obtém, e então aproximadamente diz, auto solicitação.

Certo, últimos argumentos, e então palavra-chave acessa argumentos de palavra-chave, palavra-chave x, assim mesmo.

Então, agora que temos essas funções, o que queremos especificar é um dado.

Então, esta é uma visualização de teste.

E então, neste teste, temos uma solicitação de get.

Então, queremos como dados médios que vamos enviar de volta para o usuário ou apenas nos dar um resultado.

Então, mesmos dados.

Por agora, vamos apenas codificar nossos próprios dados.

Mais tarde, vou mostrar como usar o modelo Django para que esses dados sejam como do banco de dados que você tem ou algo assim.

Mas por enquanto, vamos apenas ter um dicionário simples que vamos enviar de volta.

Então vamos apenas ter um dicionário dizendo algo como nome de usuário.

Deixe-me ver admin.

E então número de anos, eu seleciono número de anos, muitos dos usuários têm sido ativos.

E então podemos dar algo como 10 anos.

Então esse é realmente um bom usuário.

Então, estes são apenas os dados, o nome de usuário é admin, e ele está ativo há 10 anos, vamos apenas fazer uma demonstração específica do número de anos ativo.

Remova estes, não precisamos disso.

Então, vamos apenas usar ativo nos últimos 10 anos.

Então, agora temos esses dados que estão em um formato de dicionário.

Então, estes são os dados que quero enviar de volta como resposta.

Então, o que vamos fazer é dizer return response dos dados.

Então, o que acabamos de fazer foi usar esta resposta que importamos da resposta do restaurante.

E então, estamos retornando uma resposta desses dados específicos.

Então, agora temos isso feito.

O que queremos fazer agora é configurar uma URL para isso, para que possamos realmente testá-lo quando o executarmos em nosso localhost.

Então, vamos agora entrar em URLs spy, bem aqui.

Eu só quero remover todo este necessário.

E então, em ano, primeiro de tudo, deixe-me ter um novo caminho, que vai ser vazio.

Agora, este caminho vazio mostra o próprio URL.

Então, como quando você acessa seu site, digamos, como google.com, o URL é esse caminho vazio.

Então, é isso.

Agora, o que podemos fazer é, primeiro de tudo, importar a visualização de teste das visualizações.

Vamos importar essa visualização.

Então, agora que temos essa visualização importada, podemos usá-la facilmente aqui.

Então, este é o UI.

E então, podemos apenas dizer visualização de teste.

Como é uma visualização baseada em classe, temos que adicionar .as view.

Agora, a razão pela qual estamos adicionando isso .as view é porque a visualização que estamos usando é uma visualização baseada em classe.

Se você estiver usando uma visualização baseada em função, não precisa fazer isso, você pode apenas dizer, visualização de teste como a visualização aqui.

Mas como estamos usando uma visualização baseada em classe, devemos fazer isso, mesmo que nos dê um erro, e o Django não irá reconhecer isso como uma visualização válida.

Então, visualização de teste .as view.

E o ledger dá um nome, algo como teste.

Então, agora temos tudo configurado, temos isso vinculado ao próprio URL usando a visualização de teste .as view.

E damos o nome de teste.

Agora, quero que executemos nosso servidor e testemos imediatamente.

Mas se fizermos isso, não veremos nada, poderemos até obter um erro.

E a razão pela qual eu posso obter um erro é porque aqui, o que fizemos foi instalar o Django rest framework.

Imediatamente começamos a importar tudo em nosso projeto.

Mas você sabe, se trabalhar com Django por um tempo, você sabe que realmente precisa fazer algumas configurações secundárias, para poder usar um tipo particular de bibliotecas, nem todas.

Então, para este Django rest framework, precisamos adicionar algumas coisas às nossas configurações.

Agora, vamos entrar no arquivo settings.py.

Primeiro de tudo, a primeira coisa que precisamos adicionar é nos nossos aplicativos instalados, precisamos adicionar onde diz rest framework, surpreendentemente. Então, aqui, precisamos adicionar rest framework em nosso aplicativo instalado.

Assim, o Django vai reconhecê-lo.

Agora, depois de adicionar isso, o que queremos fazer nas configurações, o que queremos fazer é, sob os URLs, precisamos adicionar um URL no qual o framework de descanso... Oh, meu Deus.

Então, primeiro de tudo, precisamos importar include.

Depois disso, podemos passar API.

Acho que para ambos, vamos apenas fazer como uma vírgula, e dar a isso uma barra.

E então, vamos incluir do rest framework, ponto URLs.

Então, isso é suficiente para isso, e vamos dar uma vírgula.

E então, podemos ver.

Então agora, podemos facilmente ir para o prompt de comando, e apenas o Python gerencia Pew II executar servidor.

Então, agora, quando executamos este servidor, podemos vir aqui.

E então, se formos para o Oh, na verdade, o que vou usar para isso por enquanto, só precisamos definir isso como Oh, porque o Django rest framework requer isso.

Então, quando formos para a UI, deve nos dar essa visualização de teste.

E esta visualização de teste deve ser apenas obtenção de doc, apenas como se estivéssemos enviando uma solicitação get.

E então, vamos apenas dar uma resposta ou esses dados específicos.

Então, vamos salvar isso também.

E vamos voltar e ver o que está acontecendo.
```

Porque sentimos que normalmente, o Django não demora para rodar, mas como estamos iniciando um novo projeto e estamos rodando pela primeira vez.

Então, só me dê um minuto.

Ok, já está pronto.

E agora, vamos voltar ao navegador.

Vamos abrir uma nova aba.

Na nova aba.

Vamos entrar em nossos hosts locais com a porta 1000.

Porque essa é a URL padrão do Django, algo assim.

Então, dê-me um tempo para carregar.

Ok, já posso ver o título carregando.

Vamos dar alguns segundos e Pronto, bom.

Então, isso é o que vemos.

Agora, você sabe, Nós não projetamos esta página nem esta UI bacana que estamos vendo, nós não projetamos.

Isso vem com o Django Rest Framework, ele realmente te dá este template bonito para mostrar sua API e basicamente testar todas as suas APIs.

Agora, como você pode ver, está nos dando em um dicionário, aqui está nos dando o nome de usuário, admin ESR, tF 10.

E é exatamente a mesma coisa que estamos escrevendo em dados.

Então, normalmente, a API nos dá uma resposta em formato JSON, está nos dando uma resposta em formato de dicionário, porque essas palavras, nós realmente configuramos aqui.

Normalmente, deveria ser um formato JSON.

Então, lidando com dados reais, modelos reais, você vai ver do que estou falando.

Então, como você pode ver, escolhendo a solicitação GET, e então os endereços HTTP.

Ok, porque está permitindo solicitações GET, porque especificamos a função GET, aqui.

Deixe-me remover isso com segurança.

Porque especificamos a função GET aqui.

Se especificarmos a função POST, também vamos falar sobre isso logo.

Vai mostrar aqui que permitimos uma solicitação POST.

Então isso é basicamente o básico sobre o Django Rest Framework.

Então, se eu vier aqui, e então, é JSON, você vai ver agora como, me dá isso em formato JSON.

Então aqui, ele só me dá um formato JSON em branco, sem template, nada, apenas um formato JSON em branco, como se eu fosse para esta URL.

Mas normalmente, só obtemos a página inicial, isso é o que nos mostra.

Então isso é bom.

E espero que você esteja começando a entender o que é o Django Rest Framework.

Agora, para ser honesto, fica mais complexo do que essa camada, vou te guiar por cada coisa que você precisa saber para começar, e vou simplificar cada coisa.

Então vamos voltar à página do Rest Framework.

E se rolarmos para baixo, aqui, em instalação, você vê exatamente o que está fazendo aqui é o que fizemos em nosso projeto.

Então você pode ver que diz instalar usando Pip, incluindo quaisquer pacotes opcionais que você desejar.

Então é aqui que instalamos o Django Rest Framework.

Também podemos instalar markdown ou o Django filter, mas não precisamos disso por agora.

Porque são pacotes opcionais.

Então você apenas viu o Django Rest Framework, o que é obrigatório, ou você pode apenas clonar o projeto do GitHub.

Oh, eu vejo isso como estressante, sabe.

Então eu prefiro usar o Pip.

Então o que fizemos foi adicionar remotamente, instalamos os apps logo quando fizemos isso nas configurações.

E então adicionamos este padrão de URL que eu disse, o Rest Framework requer.

Então fizemos tudo isso, passamos pela instalação, voltamos aqui, vimos os resultados das APIs.

E então vamos direto para os serializers do Django Rest Framework.

Agora vamos falar sobre serializers no Django Rest Framework.

Então, serializers é uma estrutura de representação que representa um dado, que queremos retornar em formato JSON, ou salvar em formato JSON.

Então podemos usar este realize para transformar nossos modelos Django em JSON, vamos primeiro criar um novo app em nosso projeto Django, e então vamos nos aprofundar em serializers.

Então aqui, onde começamos, no meu prompt de comando, vou sair deste servidor que já está rodando.

E então vou criar um novo app Python, um novo app Django para o projeto smart.

E vamos nomeá-lo, como quisermos, pode ser my app ou DRF app ou algo assim.

Então, primeiro de tudo, é um total de t então t deve ser escolhido dentro de um segundo.

E então, sim, ok.

Então, ok, bem, isso foi um monte de pressionamentos.

Então agora podemos apenas fazer python manage.py startapp DRF.

Então isso vai começar um novo app Django em nosso projeto.

Então, quando isso começar, vamos continuar com ele.

Então, primeiro de tudo, depois que isso começar, vamos entrar em nossos módulos e criar um módulo com o qual realmente vamos brincar.

Então vamos apenas mudar e fazer isso.

E isso deve ser feito.

Dentro de um segundo, dar-lhe um momento para fazer e ver.

Não leva tempo.

Então, como isso está fazendo, deixe-me falar mais sobre serializers.

Na verdade, eu queria explicar mais sobre serializers.

Porque estamos começando com o restaurante mock jelly leva um pouco de tempo para entender o que essas coisas realmente fazem.

Então o serializer é um pouco sobre a falta de formulário, como um formulário modal.

Uma vez que você tem o modal, a maneira como você cria um formulário para o modal, então você pode enviar no Django, então você pode enviar um formulário, ou atualizar ou o que quer que você queira fazer.

Pense nisso como um serializer.

Então o serializer é basicamente a mesma coisa, você tem um modelo, então você tem um serializer que você liga para aquele modelo e então especifica os campos que você quer que estejam naquele serializer particular e nas visualizações da API do Django.

Agora vamos mergulhar nos protocolos.

Então, aqui podemos ver que DRF foi criado com sucesso.

Bom.

Vamos remover isso.

Então vamos voltar agora, temos que criar um novo arquivo e nomeá-lo serializers.py.

Agora, esse serializers.py é o arquivo onde vamos configurar nossa serialização.

Por enquanto, vamos deixar isso em branco.

Como eu disse, vamos criar um novo módulo que vamos usar.

Então vamos entrar em module.pi.

Então, escrevendo um módulo puro, vamos apenas criar um novo módulo.

Quero nomear esse módulo como país.

Eu mudei de ideia, eu quero estudantes aprendendo com os modelos.

Então vamos dar alguns campos.

E Alissa, o nome do aluno, isso seria models.CharField, deve ter max_length.

Vamos dizer 100.

Vamos dar outro, como idade.

Isso é models.IntegerField.

Não acho que isso leve qualquer atributo.

Vamos dar uma descrição do aluno, isso deve ser um campo de texto.

E isso não tem nenhum atributo, ou vamos dizer data de cadastro.

E isso deve ser um campo de data e hora.

Então será models.DateTimeField, vamos dizer auto_now, deve ser igual a true.

Então eu acho que temos isso.

Sim, estou feliz com isso.

E então vamos dar uma string.

Sim.

E então no método __str__ vamos fazer return self.name.

Então agora temos esse módulo específico.

Agora, como você sabe, normalmente no Django, quando você cria um novo módulo ou faz qualquer alteração no arquivo de módulos, precisamos migrá-lo para o nosso banco de dados.

Então vamos fazer isso agora.

Mas antes de fazermos isso, quero que, primeiro, registremos isso no nosso installed_apps.

Então, indo para settings.py, o que vamos fazer é adicionar o nome do app que criamos.

Então vamos salvar isso.

Agora que salvamos isso, o que podemos fazer é ir ao nosso prompt de comando.

E então vamos apenas migrar, associar Python manage.py makemigrations.

Então vamos dar um segundo para fazer as migrações, pode não detectar mudanças.

Eu gosto de garantir que eu faço migrações e migro para não ter erros, porque às vezes o Django pode ser engraçado.

Então isso deve estar funcionando bem.

Sim.

Então, como você pode ver, diz criar models.Student.

Então, quando executamos manage.py makemigrations, o que ele fez foi apenas fazer algumas migrações no models.Student, e agora ele está migrando tudo para um banco de dados admin do DRF.

Isso é o que queremos ver.

Então, agora que migramos, vamos voltar para serializers.py.

Agora precisamos importar os serializers do rest_framework.

E também precisamos importar o modelo Student do arquivo models.py.

E depois disso, podemos criar um serializer para o nosso modelo Student especificando apenas alguns campos.

Primeiro, vamos fazer from rest_framework import serializers.

Então, esta é a forma de importarmos o serializer.

Para que possamos usá-lo, assim como você usa forms no Django.

From django.forms import forms ou algo assim.

É assim que importamos os serializers.

Então, também vamos importar aquele módulo que queremos usar, então from .models import Student.

Agora que temos essas duas coisas importadas, vamos criar uma classe serializer para Student.

Então a classe será StudentSerializer.

E então, vamos fazer from serializers.ModelSerializer.

Como você pode ver, é bem semelhante ao forms, onde temos como, se fosse um form, poderíamos dizer StudentForm, e diríamos forms.Model, muito semelhante, se você está acostumado a usar os forms do Django, você definitivamente vai entender isso.

Então, é apenas nossa classe Meta, onde vamos especificar o modelo e os campos.

Então, os campos, vamos fazer um total de dois, queremos apenas o nome e a idade.

Então esses são os dois campos que queremos usar neste serializer.

Agora é fácil especificar um serializer para configurar conforme o desejado.

Então, vamos voltar para o arquivo views.py.

Então, aqui, vamos importar nosso serializer e nosso modelo Student.

Para fazer isso, vamos dizer from .serializers import StudentSerializer.

Então eu já cometi um erro, eu disse from .serializers import PostSerializer, mas vamos importar StudentSerializer porque realmente temos Student.

Então, a classe será StudentSerializer.

Assim, from .serializers import StudentsSerializer (certifique-se de ter isso).

Então, agora que temos o serializer importado, vamos importar o modelo Student.

Então from .models import Student.

Então agora nós também temos isso importado.

Vamos verificar e garantir que está correto.

Então agora que temos essas duas coisas importantes, vamos criar um método POST em nossa classe de visualização de teste.

Então nesta aula de vídeo, vamos criar um método POST.

Assim, podemos receber dados, assim como em um formulário.

Para fazer isso, vamos apenas adicionar uma função abaixo em artistas com a classe aqui mesmo.

Vamos dizer `def posts`.

Agora, isso vai ser um post, não um get, e então você vai pegar exatamente a mesma coisa que deve ser self.

Exatamente a mesma coisa.

E vai ser self requests.

E então palavras-chave.

Então agora que temos isso, vamos usar nosso serializer em uma variável.

Então isso serializer_students é igual a students serializer. Vamos apenas passar um dado.

Então quando fazemos algo como data igual a request.

Então isso é uma request para data.

Então, quando fazemos algo assim, ou assim que dizemos, realmente queremos usar um formulário ou queremos enviar um detalhe algo assim, diremos data igual a request.data.

Então abaixo, vamos ver se o serializer é válido.

Primeiro de tudo, verifique se é válido.

O que queremos fazer agora é dizer serialize.save, exatamente como fazemos em um formulário do Django, estou sempre referenciando ao formulário Django, porque é muito semelhante a isso.

Eu disse anteriormente, se você já trabalhou com formulário do Django antes, entenderá o que está acontecendo aqui.

Então serializer.data.

Então o que eu fiz foi, primeiro de tudo, especificar o serializer.

Mas o nosso serializer é este student_serializer.

Então, normalmente, se alguém estivesse em um post, como, se você não quisesse enviar um formulário, você poderia apenas remover isso como uma serialização porque o students realize o que eu disse, pois uma vez que você envia algo como um formulário tem que dizer data igual a request.data precisa obter os dados que estão sendo postados nesta visão de API em particular.

Então deixe-me pegar isso, vamos dizer que ele faz o realize que é válido.

Isso significa que se todos os valores em azul estiverem corretos, como queremos coletar um campo de número inteiro, claro, queremos ter um campo de número inteiro, se supostamente queremos chamar um campo de número inteiro, teremos todos os campos de caracteres ou campos de texto, então esse serializer não é válido.

Então isso está apenas verificando se é válido, se tudo o que queremos, mesmo se os valores forem corretos.

E se for válido, nós apenas salvaremos isso em serializer.save.

E então apenas retornaremos a resposta desses dados em particular, o que é incrível.

Então, você sabe, assim como quando você salva um dado, queremos apenas mostrar de volta para nós.

Então, os dados foram salvos, esses dados em particular foram salvos.

Mas se isso não acontecer, retornaremos uma resposta de um erro.

Fontes serializer.errors.

Então é isso.

Então agora, vamos salvar isso.

E então vamos chamar e executar nosso servidor mais uma vez.

Então o que eu quero fazer agora é o servidor está rodando.

Queremos testar esta API em particular no postman.

Então deixe-me primeiro, de tudo, esperar que isso carregue.

Então, ok, isso não deve ser feito.

Ok.

Então, diz, módulo não encontrado, nenhum módulo chamado DRF.

Project serializer.

O que isso está dizendo é que se voltarmos ao nosso código e encontrar um determinado.

Ok, bom.

Então, o que está dizendo é que ele não encontrou módulos, o serializer que era o serializer ndrf proach.

Então, estamos importando isso do model.serializer.

Supostamente deveríamos importar isso de outro lugar.

Mas como você pode ver, estávamos importando isso de outro lugar.

Então, normalmente, deveríamos usar algo como views.view, em nosso projeto, na verdade, ainda podemos usá-lo em.

Neste lugar, ninguém está usando o aplicativo, mas como ele está no projeto, só precisamos ter certeza de que estamos trazendo ele de outro lugar.

Deixe-me apenas dizer, do those D, F serializers.

E então do d r f.models, podemos apenas salvar isso e deve funcionar perfeitamente bem.

Então agora vamos ver se nossos dados foram renovados e devem funcionar sem nenhum erro e bom, então como podemos ver, tudo funciona com sucesso.

Agora, como eu disse, voltemos ao nosso navegador.

Como eu disse, agora precisamos testar essa API hoje é um aplicativo chamado postman.

Deixe-me abrir uma nova aba e mostrar a você, para entrar você só precisa digitar download postman.

E então uma vez que você digitar isso, basta pressionar enter para buscar.

Então, postman é um aplicativo, ou software, qualquer coisa que você goste de chamar, que é usado para testar sua API.

Então, já que nosso aplicativo está em produção ainda, ou produção no live na web ou algo assim.

Para alguns testes localmente em nosso local, podemos usar este aplicativo chamado postman.

Então, aqui vai levá-lo ao site, onde você vai baixar o código.

Então, vai detectar automaticamente seu sistema operacional.

Como você pode ver, ele mudou para o Windows porque estou no Windows, baixe e instale como um app normal, ou no instalador do Windows, a maioria de 2008, você deve estar pronto para ir.

Então agora que temos o postman instalado, eu o tenho aberto aqui.

O que eu quero fazer é criar uma nova aba bem aqui.

E então vamos testar a API que acabamos de criar.

Primeiro de tudo, vou entrar aqui e copiar.

Então vou copiar a URL, porque essa é a URL que vou testar de qualquer maneira.

Então, bem aqui, eu só vou colar Este é o URL que eu vou testar.

Então, vou chamar o corpo.

E então vou clicar em dados do formulário.

Agora vou inserir a chave.

Essa chave é onde quero enviar.

Então, vamos ver, voltamos ao nosso VS Code, entramos no nosso serializer, podemos ver que os campos exigem um nome e uma idade.

Então sabemos que em nossos modelos, nome é um campo de caractere e idade é um campo inteiro.

Para evitar qualquer erro, precisamos garantir que estamos seguindo tudo corretamente.

Então nome, dê o valor de admin.

E então chave, isso é o intervalo de idade, apenas dê um valor de 25.

Agora, se enviarmos a solicitação, nosso postman funciona, ele vai informar a API para você.

E então, como você pode ver aqui, nome, ele nos dá uma resposta desses dados específicos, nome, admin, idade 25.

Mas como sabemos que esses dados específicos foram enviados para o Moodle? Então o que queremos saber é se esses dados realmente foram salvos em nosso banco de dados. Para podermos fazer isso, precisamos verificar, precisamos abrir nossa interface de administrador, configurar nosso painel de administrador e então verificar nosso banco de dados.

Então vamos fazer isso rapidamente.

Primeiro de tudo, vamos voltar aqui, vamos sair deste servidor.

Agora que estamos fora do servidor, o que eu quero fazer é criar um superusuário, então vou dizer python manage.py.

Criar superusuário.

Isso vai me pedir para inserir meu nome de usuário.

E meu e-mail minha senha, como se eu estivesse me registrando em uma plataforma ou site, exatamente a mesma coisa.

Então vamos dar um momento para, então eu vou teclar admin.

Vou deixar isso em branco.

Vou dar uma senha.

Sim, contornar e boa.

Então agora vamos rodar o servidor.

Novamente.

Ele está rodando, vamos voltar para o nosso VS Code.

E no admin, o Pew II, bem, primeiro vamos importar de dot.models, import students, e queremos registrar esse aluno em nossa interface de administrador.

Então admin, site.register, students.

Então agora isso mostrará luz à medida que registrarmos no painel de administrador.

Vamos verificar isso em um minuto.

Por favor, certifique-se de que isso está funcionando bem.

Vamos para o navegador, abrir uma nova aba.

Vamos para /admin.

Então vamos fazer isso rapidamente agora.

E então fazer login usando as informações do administrador.

Ok, bom.

Então agora podemos ver que sob o aplicativo DRF, temos estudantes, se eu clicar em mim, devemos ter um objeto lá.

Como você pode ver, temos um estudante, que é o admin.

E enviamos isso a partir de nossa API.

Nós não criamos isso a partir deste painel de administrador, ou de nossos projetos ou de nosso site.

É através da nossa API.

Agora vamos testar isso mais uma vez.

Então temos esta API, temos o nome, basta dar algo como admin2, e então admin2 tem 27 anos.

Então quando envio, porque me dá admin2 27 anos.

Agora, a razão pela qual me dá isso é porque, se eu voltar aqui no nosso código, veremos que eu disse que, se for válido, deve salvar esses dados.

E quando quer salvar esses dados, deve nos dar uma resposta dos dados serializados.

Então isso significa que se isso for bem-sucedido, a resposta que quero obter são os dados que foram enviados.

Então, se eu voltar para o postman, toda vez que eu receber os dados, simplesmente a ideia de que eu os enviei, significa que foi bem-sucedido.

Então vamos ao nosso painel de administração, atualizar.

Agora temos outro aqui.

Então é assim que se envia da nossa API.

Agora, isso é legal.

Agora vamos falar sobre serializar os dados que estão saindo, e quero dizer, o método get.

Primeiro de tudo, já temos o modelo registrado, já criamos um superusuário.

Agora para usar nosso método get, vamos voltar ao nosso VS Code.

Agora, o que estou dizendo é, como você pode ver, este método get aqui, quando fizemos isso anteriormente, é apenas dados em branco, apenas um dicionário normal, mas nesta função post, estamos usando serialização, vamos serializar nossos dados.

Então vamos dizer que queremos também serializar os dados neste get.

Agora tudo o que vamos fazer, já que já temos self request, argumento e argumento com palavras-chave, vamos especificar um conjunto de consulta (query set).

Então vamos nos livrar desses valores padrão e ter um conjunto de consulta.

Conjunto de consulta pode ser students.objects.all().

Ou o que podemos simplesmente fazer porque esse serializer pode ser igual a students.serializer; então queremos especificar nosso conjunto de consulta, e precisamos especificar mais uma coisa dizendo many equals true.

Agora, a razão pela qual precisamos especificar many equals true é porque esse conjunto de consulta é uma lista de objetos.

Então deste módulo de alunos, estamos obtendo todos os objetos e o que quero dizer por objeto está bem aqui, todos os dados que temos neste banco de dados de alunos, o banco de dados de alunos ou os objetos.

Então como você pode ver, é mais de um, vai trazer uma lista, por isso temos que especificar many equals true quando os itens são mais de um.

Então depois de especificar o conjunto de consulta em uma variável, eu apenas tenho outra variável chamada serializer, que é tirada do students.serializer.

E eu passo o conjunto de consulta, e tenho que dizer que many é igual a true.

Agora, se fosse apenas um dado, mas sim, apenas um objeto específico ou algo que podemos apenas colocar conjunto de consulta, mas como é mais de um depois many equals true.

Quando um usuário tenta, por exemplo, acessar esta API usando um método GET, ela vai retornar uma resposta contendo outros dados.

E esta é uma lista dos objetos no modelo de estudante, que basicamente abrange todos os dados naquele site.

Então agora, vamos salvar isso.

E depois vamos testar nossa API mais uma vez.

Mas desta vez, estamos apenas testando o método GET.

Não precisamos lembrar de remover isso primeiro de tudo, para que não seja enviado sem conhecimento.

E como você pode ver, ele não me dá uma lista organizada dos dados que temos em nosso projeto.

Então, ele os fornece em um formato JSON.

Agora, se você não vir isso, este script específico então é apenas um dicionário.

Mas já que podemos ver estas duas chaves novamente e os colchetes, isso significa que cada dado está sendo retornado em um formato JSON, que é a maneira padrão de retornar a resposta ou solicitação da API.

Então, isso é o que podemos fazer quando estamos falando sobre a serialização do método GET.

Mas como eu disse, em Em, eu falei sobre many=True.

Mas vamos dizer que é apenas um dado singular.

Como fazemos isso? Então, primeiro de tudo, já que temos este conjunto de consultas, que são todos os objetos, sabemos que, oh, Deus, tem mais de um.

Então, primeiro de tudo, vamos pegar um, há apenas um dos objetos, então podemos dizer, estudante estudantes, um estudante deve ser igual a queryset.first.

Agora, o que este queryset ou first faz é pegar o primeiro objeto destes estudantes, então escrevendo o serializador, que é student_serializer.

E depois removemos many=True.

E voila, passando o queryset.

Agora, estamos passando apenas o primeiro estudante, que é student_one.

Então agora, podemos apenas retornar uma resposta ou serializar o dado.

Vamos continuar mais uma vez, escrevendo, vamos pegar então assim que enviarmos, como você pode ver, nos dá apenas o primeiro, o dado, podemos facilmente serializar nossos dados no Django Rest Framework.

Agora vamos falar sobre autenticação no Django Rest Framework.

O que eu quero dizer por essa autenticação? Agora, essa autenticação vai nos permitir proteger nosso endpoint da API.

Então, podemos ter algumas APIs que podemos simplesmente permitir que qualquer pessoa use sem autenticação ou autorização daquele usuário.

Tudo bem.

Mas também podemos ter algumas APIs que queremos que um usuário, primeiramente, esteja autenticado, desejaríamos que o usuário tenha uma chave API ou um token ou algo assim antes de acessar essa API específica.

Por exemplo, usamos a API de dados do YouTube, ela precisa fornecer uma chave API que você obtém na sua conta do Google Cloud ou algo assim.

Então, essa chave API será usada para autorizá-lo ou para autenticá-lo a usar a API.

Vamos fazer algo semelhante neste tutorial.

Primeiro de tudo, o que queremos fazer é entrar no nosso código, bem aqui.

Em views, vamos usar algo chamado permissões, essas permissões são do rest framework.

Então se eu disser from rest_frame import permissions.

Import.

Então, quando eu disser from rest_framework.permissions import, vamos obter um monte de permissões em um monte de listas de autenticação.

Então, como eu posso usar allow_any.

Agora, isso é bastante autoexplicativo, quando clicarmos em allow_any, isso permite qualquer acesso, isso não é estritamente necessário.

Mas você poderia usar uma lista de classes de permissão vazia só para garantir.

Então, o que isso está dizendo é que você pode permitir que qualquer pessoa use essa API específica.

Então, vamos ver outro exemplo como, is_authenticated.

Então, você pode ver que temos is_admin_user, is_authenticated, authenticated_or_read_only.

Então, temos um monte deles, is_admin_user também é autoexplicativo, precisa ser um usuário admin antes que a pessoa possa acessar a API, ou is_authenticated, este é o que vamos falar sobre.

Então, o usuário precisa estar autenticado nesta aplicação antes que possamos dar ao usuário a chance, antes que possamos dar ao usuário o caminho ou algo para usar nossa API.

Então agora vamos importar is_authenticated.

Este aqui.

Então, agora que importamos isso, podemos usá-lo na nossa visualização de teste.

Para fazer isso, podemos apenas adicionar o código bem aqui.

Então, vamos dizer antes de qualquer uma das funções, apenas adicionamos uma variável chamada permission_classes.

Agora, estas classes de permissão vão nos dar como as permissões que queremos coletar antes de um usuário acessar qualquer uma dessas.

Então, a maioria dos usuários autenticados, qualquer um pode acessar, precisam ser um usuário admin, qualquer coisa.

Então, isso vai ser uma tupla.

E depois dizemos is_authenticated, queremos que o usuário esteja autenticado? Vamos deixar assim.

Então, queremos apenas autenticados.

Agora, se você quiser allow_any, isso significa qualquer um, você pode também deixar vazio assim.

Isso só significa que qualquer um pode acessar.

Ou você pode simplesmente remover isso.

De qualquer forma, você quer fazer então, com is_authenticated significa o usuário precisa estar autenticado antes, você pode usá-lo.

Agora vamos salvar e tentar algo.

Se formos ao Postman, e depois só enviarmos, vai nos lançar um erro.

Então, como você pode ver, tudo bem, este não é o erro que estamos procurando.

Então, isso só está dizendo que nosso hospedeiro não está rodando.

Então vamos voltar aqui.

Agora está rodando.

Vamos tentar de novo.

Bom.

Então diz detalhe.

credenciais de autenticação não foram fornecidas.

Assim, como você pode ver, é necessário que estejamos autenticados para fornecer algum token de autenticação ou algo parecido antes que possa nos dar acesso às URLs das nossas APIs.

Então agora, para configurar essa autenticação, precisamos voltar ao nosso código.

E em settings.py, vamos rolar até o final.

Aqui à direita, vamos dizer wrists.

Todo o trabalho de preparação deve ser igual a colchetes.

E então, que disse defaults.

Vou passar para education_classe.

Agora, o que precisamos é de um colchete quadrado.

E então você diz rest.

Agora isso deve estar em letras minúsculas, rest_framework.

autenticação, token, autenticação, isso é o que precisamos.

E então agora podemos salvar isso.

Para que possamos criar este arquivo.

E agora que temos que usar este rest framework, também precisamos adicionar algo, vamos voltar a essas configurações para os aplicativos instalados.

Então suba.

E então nos aplicativos instalados, queremos adicionar rest framework.

Como você pode ver, já temos rest framework adicionado a este rest framework, ponto quarto, token, então isso é diferente.

E então, vamos apenas salvar para ler por um mês ou dois.

Ok, agora podemos sair disso.

Antes de continuar, precisamos rodar as migrações.

Então vamos sair deste servidor, Python manage.

py make migrations para depois de fazer migrações, nenhuma alteração detectada, na verdade.

Então, apenas querer migrar.

Então isso vai migrar o rest framework ponto auth token para o nosso banco de dados, que pode ser talking ou talking out.

Ok.

Vamos rodar nosso servidor de volta.

Na verdade, eu não quero rodar o servidor de volta.

Então vamos sair disso, eu quero fazer uma coisa.

Então, primeiro de tudo, eu quero limpar todos os dados que temos neste nosso banco de dados.

Então podemos, tipo, mostrar como criar um token para cada usuário.

Então agora ainda temos um usuário, vamos limpar todos os dados.

Então diga minha UI flush.

Então isso vai limpar todos os dados que temos no nosso banco de dados, apenas clique em Sim.

E pronto.

Então agora não temos nenhum usuário, se eu entrar aqui, devo realmente receber um erro de que não estou dedicado ou algo assim.

Então ok, pode repetir porque não está rodando.

Normalmente, o administrador é deletado.

Agora queremos criar outro superusuário, um novo superusuário, diga python manage.py.

Criar um superusuário.

Então agora, deve pedir para eu inserir o nome de usuário.

Então nome de usuário, deixe isso em branco.

Por que bom? Então agora temos isso criado.

Agora, vamos rodar nosso servidor de volta.

Então vamos dar isso. Se voltarmos aqui agora para o nosso servidor, ele nos pedirá para fazer o login novamente, porque apagamos os dados antes.

Então, logging, bom ir para a home, você verá agora que eu tenho odd talking up, e eles need talking Moodle.

Então isso é o que acabamos de fazer.

Então uma boa forma de criar um token para o usuário, uma maneira fácil é apenas entrar na nossa linha de comando é até o servidor novamente, e o mesmo Python, manage.py, drf_create_token, apenas passamos o nome de usuário.

Então isso vai criar um token para qualquer nome de usuário que passarmos.

Então vamos esperar por isso, isso vai nos dar um token agora.

E também vai salvá-lo no host.

Ok, então como você pode ver, nos dá este token, apenas copie isso.

E se entrarmos aqui, e atualizarmos este modelo, veremos que teremos um objeto.

Ok, então, primeiro de tudo, vamos rodar o nosso servidor de volta, antes de testá-lo, apenas para ter certeza de que tudo está funcionando.

Então agora vamos atualizar este token.

Agora, você pode ver que agora temos esse token aqui, a mesma coisa começa com B e termina com um C, A, B e termina com um C, para o usuário admin criado e desta vez, então isso é o que somos, você pode facilmente criar um token para um usuário.

Agora, esse usuário tem um token, deixe-me agora mostrar como você pode usar esse token no postman, para que você possa autenticar.

Então normalmente, vamos apenas entrar no nosso postman para autenticar usando esse token, o que queremos fazer agora é ir em autorização.

E então deixe-me, primeiro de tudo, abaixar isso um pouco.

Então o tipo, queremos mudar esse tipo para API key.

Então está me dando isso porque eu testei algumas coisas antes.

Então deixe-me apenas mostrar isso do zero.

Então a tecla, a tecla padrão para Django deve ser authorization, authorization, e o valor que você vai escrever vai ser token e então seguido por esse token específico, que foi criado para o usuário apenas token, que é o mesmo que o token.

Então vamos voltar para o postman.

Então aqui, agora, precisamos ter certeza de que estamos adicionando isso ao Edit e não aos parâmetros de consulta.

Vamos trazer isso um pouco para cima.

E disse, então agora, não nos diz agora novamente, que as credenciais, a autenticação de algumas credenciais.

Como você pode ver, nos dá uma resposta JSON.

Diz que o nome está em branco, a idade não está tudo isso é porque lembra, apagamos nosso banco de dados anteriormente.

Então está nos dando saber se temos algo em nosso banco de dados que obviamente vai mostrar para nós.

É assim que você pode facilmente autorizar ou autenticar no seu Django rest framework.

Claro! Aqui está a tradução do arquivo md para o português mantendo a formatação e layout markdown original:

---

Nós não podemos fazer isso por todos na nossa plataforma, queremos que seja automatizado.

Quero dizer, esse é o principal objetivo da programação, certo? Então, o que vamos fazer é enviar detalhes do usuário específico, como nome de usuário e senha para nossa aplicação e ela automaticamente vai gerar o token ou nos mostrar que está ok.

Então primeiro, vamos entrar no VS Code e em `urls.py`, vamos adicionar `from rest_framework.authtoken`.

Aqui, vamos importar `obtain_auth_token`.

Então, o que isso vai fazer é que não precisamos criar uma nova view em `views.py`.

Essa é uma view padrão, embutida, que vem do `rest_framework.authtoken`.

Isso nos permite apenas enviar as credenciais do usuário, e então ele obtém o token de autenticação para nós.

Agora vamos adicionar um novo caminho.

Vamos adicionar uma vírgula, `path`.

E então bem aqui, `/api/token/`, e então vamos configurar `obtain_auth_token`.

E então vou dar-lhe um nome algo como `obtain-token`.

Então agora que temos isso, podemos testar nossa API.

Primeiro de tudo, vamos copiar isso.

Vamos voltar para o Postman, e o que queremos fazer é abrir uma nova aba.

E então vamos configurar isso para POST.

E então vamos configurar `/api/token`.

E então, bem aqui, vamos em "Body", em "Form Data".

E usaremos a chave `username`, que será o nome de usuário, que é `admin`, e uma chave `password`.

E então essa senha, vou deixá-la em branco, porque não quero mostrar nenhuma senha neste vídeo.

Mas assim que você colocar a senha desse usuário específico, ele vai mostrar o token de autenticação para esse usuário, basicamente.

Então é assim que você pode fazer a mágica, também acessando isso a partir do seu código, você pode fazer algo como enviar uma requisição para esta página específica, e então obter o token de autenticação.

Então é assim que podemos autenticar um usuário facilmente no Django Rest Framework.

Espero que você tenha entendido tudo o que fizemos neste vídeo.

Espero que você passe pelos conceitos do Django Rest Framework.

Espero que você tenha entendido APIs ou agora conheça sobre serializers.

Espero que agora você conheça a autenticação no seu projeto Django Rest Framework.

Então pessoal, isso é tudo para este tutorial de Rest Framework.

Espero realmente que vocês tenham gostado.

E se gostou, não se esqueça de esmagar o botão de like e se inscrever.

[1]: https://www.youtube.com/watch?v=jBzwzrDvZ18

---

