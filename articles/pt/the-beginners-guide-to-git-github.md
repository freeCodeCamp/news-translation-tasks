---
title: O que é Git?
date: 2024-09-15T04:01:38.776Z
authorURL: ""
originalURL: https://www.freecodecamp.org/news/the-beginners-guide-to-git-github/
posteditor: ""
proofreader: ""
---

Por Thanoshan MV

<!-- more -->

# **O que é Git?**

Git é um software de **controle de versão** gratuito e de código aberto. Foi criado por Linus Torvalds em 2005. Esta ferramenta é um sistema de controle de versão que foi inicialmente desenvolvido para trabalhar com vários desenvolvedores no kernel do Linux.

Basicamente, isso significa que o Git é um rastreador de conteúdo. Então, o Git pode ser usado para armazenar conteúdo — e é principalmente usado para armazenar código por causa das outras funcionalidades que ele fornece.

Projetos da vida real geralmente têm múltiplos desenvolvedores trabalhando em paralelo. Assim, eles precisam de um sistema de controle de versão como o Git para garantir que não ocorram conflitos de código entre eles.

Além disso, os requisitos de tais projetos mudam frequentemente. Assim, um sistema de controle de versão permite que os desenvolvedores revertam e voltem a uma versão anterior do seu código.

O sistema de branches no Git permite que os desenvolvedores trabalhem individualmente em uma tarefa (por exemplo: um branch -> uma tarefa OU um branch -> um desenvolvedor). Basicamente, pense no Git como uma pequena aplicação de software que controla sua base de código, se você for um desenvolvedor.

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/vcs.png) _Mostra como o Git funciona_

# **Repositórios Git**

Se quisermos começar a usar o Git, precisamos saber onde hospedar nossos repositórios.

Um repositório (ou "Repo" abreviado) é um projeto que contém múltiplos arquivos. No nosso caso, um repositório conterá arquivos baseados em código.

Existem duas maneiras de hospedar seus repositórios. Uma é online (na nuvem) e a segunda é offline (auto-instalado no seu servidor).

Existem três serviços populares de hospedagem de Git: GitHub (pertencente à Microsoft), GitLab (pertencente ao GitLab) e BitBucket. Usaremos o GitHub como nosso serviço de hospedagem.

# **Antes de usar o Git, devemos saber por que precisamos dele**

### Git facilita a contribuição para projetos de código aberto

Quase todos os projetos de código aberto usam o GitHub para gerenciar seus projetos. Usar o GitHub é gratuito se o seu projeto for de código aberto, e inclui um wiki e um rastreador de problemas que facilita a inclusão de documentação mais detalhada e o recebimento de feedback sobre seu projeto.

Se você quiser contribuir, você apenas "forqueta" (faz uma cópia) de um projeto, faz suas alterações e, em seguida, envia ao projeto um "pull request" usando a interface web do GitHub. Esse pull request é sua maneira de dizer ao projeto que você está pronto para que ele revisem suas alterações.

### Documentação

Ao usar o GitHub, você facilita a obtenção de excelente documentação. A seção de ajuda e os guias deles têm artigos sobre praticamente qualquer tópico relacionado ao Git que você possa imaginar.

### Opções de integração

O GitHub pode se integrar com plataformas comuns como Amazon e Google Cloud, com serviços como Code Climate para acompanhar seu feedback, e pode destacar a sintaxe em mais de 200 linguagens de programação diferentes.

### Acompanhe as alterações no seu código entre versões

Quando várias pessoas colaboram em um projeto, é difícil acompanhar as revisões — quem mudou o que, quando e onde esses arquivos estão armazenados.

O GitHub cuida desse problema ao acompanhar todas as alterações que foram enviadas ao repositório.

Muito parecido com o uso do Microsoft Word ou do Google Drive, você pode ter um histórico de versões do seu código para que versões anteriores não sejam perdidas a cada iteração. É fácil voltar à versão anterior e contribuir com seu trabalho.

### Exibir seu trabalho

Você é um desenvolvedor que deseja atrair recrutadores? O GitHub é a melhor ferramenta em que você pode confiar para isso.

Hoje, ao procurarem por novos recrutas para seus projetos, a maioria das empresas olha para perfis do GitHub. Se o seu perfil estiver disponível, você terá uma maior chance de ser recrutado, mesmo se não for de uma universidade ou faculdade renomada.

# **Agora aprenderemos como usar Git & GitHub**

### Criação de conta no GitHub

Para criar sua conta, você precisa ir ao site do [GitHub][1] e preencher o formulário de registro.

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/github-webpage.png) _Página oficial do GitHub_

### Instalação do Git

Agora precisamos instalar as ferramentas do Git em nosso computador. Usaremos CLI para nos comunicarmos com o GitHub.

Para Ubuntu:

1. Primeiro, atualize seus pacotes.

```
sudo apt update
```

2. Em seguida, instale Git e GitHub com apt-get

```
sudo apt-get install git
```

3. Finalmente, verifique se o Git está instalado corretamente

```
git --version
```

4. Execute os seguintes comandos com suas informações para definir um nome de usuário e e-mail padrão quando você for salvar seu trabalho.

```
git config --global user.name "MV Thanoshan"
git config --global user.email "example@mail.com"
```

# **Trabalhando com projetos no GitHub**

Trabalharemos com projetos no GitHub de duas maneiras.

### Tipo 1: Crie o repositório, clone-o para o seu PC e trabalhe nele. (Recomendado)

O Tipo 1 envolve criar um repositório totalmente novo no GitHub, cloná-lo para o nosso computador, trabalhar em nosso projeto e enviá-lo de volta.

Crie um novo repositório clicando no botão "novo repositório" na página web do GitHub.

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/new-repo.png)



![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/readme.png)

Bem feito! Seu primeiro repositório no GitHub foi criado.

Sua primeira missão é obter uma cópia do repositório no seu computador. Para fazer isso, você precisa "clonar" o repositório no seu computador.

Clonar um repositório significa que você está pegando um repositório que está no servidor e clonando-o para o seu computador - assim como baixá-lo. Na página do repositório, você precisa obter o endereço "HTTPS".

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/github-project.png)

Depois de obter o endereço do repositório, você precisa usar seu terminal. Utilize o seguinte comando no terminal. Quando estiver pronto, você pode inserir isto:

```
git clone [ENDEREÇO HTTPS]
```

Este comando fará uma cópia local do repositório hospedado no endereço fornecido.

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/cmd-1.png) _Mensagem de saída do comando “git clone”_

Agora, o repositório está no seu computador. Você precisa entrar nele com o seguinte comando.

```
cd [NOME DO REPOSITÓRIO]
```

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/cmd-2.png)

Como você pode ver na imagem acima, o nome do meu repositório é “My-GitHub-Project” e esse comando me fez ir para esse diretório específico.

**NOTA:** Quando você clona, o Git criará um repositório no seu computador. Se quiser, você pode acessar seu projeto com a interface do usuário do computador em vez de usar o comando 'cd' no terminal.

Agora, naquela pasta, podemos criar arquivos, trabalhar neles e salvá-los localmente. Para salvá-los remotamente — como no GitHub — temos que fazer um processo chamado “commit”. Para fazer isso, volte ao seu terminal. Se o tiver fechado, como mencionei anteriormente, use o comando 'cd'.

```
cd [NOME DO REPOSITÓRIO]
```

Agora, no terminal, você está no diretório do seu repositório. Existem 4 etapas em um commit: ‘status’, ‘add’, ‘commit’ e ‘push’. Todos os passos seguintes devem ser realizados dentro do seu projeto. Vamos passar por eles um por um.

1.  “status”: A primeira coisa que você precisa fazer é verificar os arquivos que você modificou. Para fazer isso, você pode digitar o seguinte comando para exibir uma lista de mudanças.

```
git status
```

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/git-status-1.png)

2.  “add”: Com a ajuda da lista de mudanças, você pode adicionar todos os arquivos que deseja enviar com o seguinte comando,

```
git add [NOME DO ARQUIVO] [NOME DO ARQUIVO] [...]
```

No nosso caso, vamos adicionar um arquivo HTML simples.

```
git add sample.html
```

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/sample.png)

3.  “commit”: Agora que adicionamos os arquivos da nossa escolha, precisamos escrever uma mensagem para explicar o que fizemos. Esta mensagem pode ser útil mais tarde se quisermos verificar o histórico de alterações. Aqui está um exemplo do que podemos colocar no nosso caso.

```
git commit -m "Adicionado arquivo HTML de amostra que contém sintaxe básica"
```

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/commit-1.png)

4.  “push”: Agora podemos colocar nosso trabalho no GitHub. Para fazer isso, temos que ‘empurrar’ nossos arquivos para o Remoto. Remoto é uma instância duplicada do nosso repositório que vive em algum lugar em um servidor remoto. Para fazer isso, devemos saber o nome do remoto (na maioria das vezes o remoto é nomeado origin). Para descobrir esse nome, digite o seguinte comando.

```
git remote
```

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/remote-1.png)

Como você pode ver na imagem acima, diz que o nome do nosso remoto é origin. Agora podemos ‘empurrar’ nosso trabalho com segurança pelo seguinte comando.

```
git push origin master
```

Agora, se formos ao nosso repositório na página web do GitHub, podemos ver o arquivo sample.html que enviamos para o remoto — GitHub!

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/push-1.png)

**NOTA**: Às vezes, quando você está usando comandos Git no terminal, pode levar você ao editor de texto VIM (um editor de texto baseado em CLI). Para se livrar dele, você tem que digitar

```
:q
```

e ENTER.

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/-q.png)

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/explanation.png) _Descreve como pull e push funcionam_

Puxar é o ato de receber do GitHub.

Empurrar é o ato de enviar para o GitHub.

### Tipo 2: Trabalhe no seu projeto localmente e depois crie o repositório no GitHub e envie-o para o remoto.

O Tipo 2 permite que você crie um novo repositório a partir de uma pasta existente no seu computador e envie isso para o GitHub. Em muitos casos, você pode já ter criado algo no seu computador que deseja, de repente, transformar em um repositório no GitHub.

Vou explicar isso para você com um projeto de formulário de pesquisa que fiz anteriormente que não foi adicionado ao GitHub.

Como já mencionei, ao executar quaisquer comandos Git, temos que garantir que estamos no diretório correto no terminal.

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/type-2.png)

Por padrão, qualquer diretório no nosso computador não é um repositório Git – mas podemos transformá-lo em um repositório Git executando o seguinte comando no terminal.

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/init.png)

Após converter nosso diretório para um repositório Git, a primeira coisa que precisamos fazer é verificar os arquivos que temos usando o seguinte comando.

```
git status
```

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/status-2.png)

Então, há dois arquivos nesse diretório que precisamos “adicionar” ao nosso repositório.

```
git add [NOME_DO_ARQUIVO] [NOME_DO_ARQUIVO] [...]
```

**NOTA**: Para “adicionar” todos os arquivos no nosso repositório, podemos usar o seguinte comando:

```
git add .
```

Após a área de stage (o processo de adição) estar completa, podemos verificar se os arquivos foram adicionados com sucesso executando o `git status`.

Se esses arquivos específicos estiverem em verde, como na imagem abaixo, você fez seu trabalho!

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/green.png)

Então, temos que “commitar” com uma descrição.

```
git commit -m "Adicionando formulário de pesquisa web"
```

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/survey-form.png)

Se meu repositório começou no GitHub e eu o clonar para meu computador, um remoto já estará anexado a ele (Tipo 1). Mas se eu estiver começando o repositório no meu computador, ele não tem um remoto associado a ele, então preciso adicionar esse remoto (Tipo 2).

Para adicionar esse remoto, precisamos ir ao GitHub primeiro. Crie um novo repositório e nomeie-o como quiser para armazená-lo no GitHub. Em seguida, clique no botão “Create repository”.

**NOTA**: No Tipo 2, por favor, não inicialize o repositório com um arquivo README ao criar um novo repositório na página web do GitHub.

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/new-repo-2.png)

Depois de clicar no botão “Create repository”, você verá a imagem abaixo como uma página web.

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/web-page.png)

Copie o endereço HTTPS. Agora vamos criar o remoto para nosso repositório.

```
git remote add origin [ENDEREÇO HTTPS]
```

Após executar esse comando, podemos verificar se adicionamos o remoto com sucesso usando o seguinte comando

```
git remote
```

E se ele exibir “origin”, você adicionou o remoto ao seu projeto.

**NOTA**: Lembre-se de que podemos indicar qualquer nome para o remoto alterando o nome “origin”. Por exemplo:

```
git remote add [NOME_DO_REMOTO] [ENDEREÇO HTTPS]
```

Agora, podemos enviar nosso projeto para o GitHub sem problemas!

```
git push origin master
```

Após completar essas etapas uma por uma, se você for ao GitHub, encontrará seu repositório com os arquivos!

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/final.png)

# **Conclusão**

Obrigado a todos por lerem. Expliquei apenas o básico do Git e GitHub. Recomendo fortemente que todos leiam mais artigos relacionados ao Git e GitHub. Espero que este artigo tenha ajudado.

[Confira][2] meu artigo original no Medium.

Obrigado.

**Feliz codificação!**

[1]: https://github.com/
[2]: https://medium.com/@mvthanoshan9/ubuntu-a-beginners-guide-to-git-github-44a2d2fda0b8

