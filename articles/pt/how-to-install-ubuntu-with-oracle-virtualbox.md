---
title: Como instalar o Ubuntu no VirtualBox
date: 2024-09-27T11:14:36.705Z
authorURL: ""
originalURL: https://www.freecodecamp.org/news/how-to-install-ubuntu-with-oracle-virtualbox/
posteditor: ""
proofreader: ""
---

Por Thanoshan MV

<!-- more -->

## O que é o VirtualBox?

Oracle VM VirtualBox é um aplicativo de virtualização multiplataforma desenvolvido pela Oracle Corporation. Ele permite aos usuários instalar sistemas operacionais em discos rígidos virtuais, como Windows, macOS, Solaris e Linux.

Como exemplo, você pode rodar Windows e Linux em seu Mac, rodar servidor Windows em seu servidor Linux ou rodar Linux em seu PC com Windows enquanto executa suas outras aplicações existentes.

Espaço em disco e memória são os únicos problemas que você enfrentará ao instalar várias máquinas virtuais.

## Por que você vai precisar dele

-   O VirtualBox da Oracle é fácil de instalar e usar
-   É grátis
-   Você pode rodar e experimentar qualquer sistema operacional de forma segura
-   Se você é um desenvolvedor, o VirtualBox pode ser usado como uma ferramenta para testar seus próprios projetos de desenvolvimento em múltiplos ambientes de SO de forma segura
-   Pode rodar desde pequenos sistemas embarcados até laptops
-   É bom para testes e recuperação de desastres, pois pode ser facilmente copiado, backup e transportado entre hosts

## Instalação do VirtualBox

O VirtualBox pode ser baixado aqui: [Downloads do VirtualBox][1]

## Por que Ubuntu?

-   É grátis
-   Personalização fácil: O ambiente de desktop GNOME ajuda você a personalizar facilmente
-   É seguro
-   O Ubuntu é open-source
-   Comunidade amigável e de suporte
-   Requisitos de sistema baixos
-   De acordo com [FOSSBYTES][2], o Ubuntu é a segunda melhor distro Linux para programação e desenvolvedores \[Edição de 2019\]
-   É amigável para iniciantes

## Configuração do Ubuntu

Primeiro, abra o VirtualBox, depois clique em "Novo" para criar uma máquina virtual.

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/start-1.png)

Digite "Ubuntu" como nome, selecione "Linux" como tipo e selecione Ubuntu (64-bit) como versão.

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--14-.png)

**NOTA**: Selecione a quantidade de memória que desejar, mas não adicione mais que 50% da sua RAM total.

Marque a opção "Criar um disco rígido virtual agora" para que possamos definir mais tarde o tamanho do disco rígido virtual do Ubuntu OS.

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--16-.png)

Agora, queremos selecionar "VHD (Virtual Hard Disk)".

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--17--1.png)

Em seguida, vamos alocar dinamicamente o armazenamento em nosso disco rígido físico.

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--18-.png)

Queremos especificar o tamanho do Ubuntu OS. O tamanho recomendado é 10 GB, mas você pode aumentar se desejar.

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--19-.png)

Depois de criar um disco rígido virtual, você verá o Ubuntu no seu painel.

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--20-.png)

Agora, precisamos configurar o arquivo de imagem de disco do Ubuntu (.iso).

O arquivo de imagem de disco do Ubuntu pode ser baixado aqui: [Download do Ubuntu OS][3]

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--23-.png)

Para configurar o arquivo de imagem de disco do Ubuntu, vá em configurações e siga estes passos:

1.  Clique em "Armazenamento"
2.  Em dispositivos de armazenamento, clique em "Vazio"
3.  Em atributos, clique na imagem do disco e "Escolher arquivo de disco óptico virtual"
4.  Selecione o arquivo de imagem de disco do Ubuntu e abra-o

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--25-.png)

Clique em OK.

Seu Ubuntu OS está pronto para ser instalado no VirtualBox. Vamos começar!

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--26-.png)

**NOTA:** A instalação do Ubuntu no VirtualBox e a instalação real do SO podem variar. Este guia ajuda você a instalar o Ubuntu no VirtualBox apenas.

## Vamos instalar o Ubuntu!

Clique em Instalar Ubuntu.

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--27-.png)

Selecione seu layout de teclado.

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--29-.png)

Na seção "Atualizações e outros softwares", marque "Instalação normal" e continue.

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--30-.png)

Em "Tipo de instalação", marque "Apagar disco e instalar Ubuntu".

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--31-.png)

Clique em "Continuar".

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--32-.png)

Escolha sua localização atual.

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--33-.png)

Agora, configure seu perfil.

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--34-.png)

Você verá o Ubuntu sendo instalado.

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--35-.png)

Após a instalação, reinicie.

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--36-.png)

Após fazer login, você verá a área de trabalho do Ubuntu.

Nós instalamos com sucesso o Ubuntu no VirtualBox. Ele está pronto para uso em seus futuros projetos de desenvolvimento.

## Vamos verificar a instalação.

Abra o seu terminal (Pressione Ctrl+Alt+T) e digite os comandos abaixo para verificar se funcionam.

1.  pwd: Isso irá imprimir o diretório de trabalho atual
2.  ls: Isso irá listar todos os itens no seu diretório atual

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--43-.png)

Depois de verificar esses comandos, desligue a sua máquina usando o seguinte comando.

```
poweroff
```

![Imagem](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--44-.png)

## Conclusão

VirtualBox é gratuito e uma ótima ferramenta para executar múltiplos sistemas operacionais em um único SO. O Ubuntu tem muitos benefícios. Se você é um iniciante em Linux, eu recomendaria usar o Ubuntu, pois é amigável para iniciantes.

Por favor, sinta-se à vontade para me informar se tiver alguma pergunta.

Você pode me contatar e conectar-se comigo no [Twitter][4] e [Medium][5].

Obrigado por ler.

**Feliz Codificação!**

[1]: https://www.virtualbox.org/wiki/Downloads
[2]: https://fossbytes.com/best-linux-distros-for-programming-developers/
[3]: https://ubuntu.com/#download
[4]: https://twitter.com/ThanoshanMV
[5]: https://medium.com/@mvthanoshan9

