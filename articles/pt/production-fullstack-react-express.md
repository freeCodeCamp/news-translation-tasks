---
title: Como implantar um aplicativo React em produção na AWS usando Express,
  Postgres, PM2 e nginx
date: 2024-08-28T23:36:14.764Z
author: Mohammad Iqbal
authorURL: https://www.freecodecamp.org/news/author/iqbal125/
originalURL: https://www.freecodecamp.org/news/production-fullstack-react-express/
posteditor: ""
proofreader: ""
---

Neste tutorial, vou guiá-lo através de uma configuração de implantação em nível de produção na AWS a partir do zero. Vou presumir que você tem pouco ou nenhum conhecimento prévio sobre AWS e assumir que você é um iniciante.

<!-- more -->

Configuraremos um aplicativo full stack React Express com um banco de dados PSQL. Implantaremos o aplicativo em uma instância AWS EC2 executando uma Amazon Linux AMI 2. A configuração usará NGINX como um proxy reverso e PM2 como um gerenciador de cluster. O banco de dados PSQL será implantado no AWS RDS.

Vamos nos manter dentro do nível gratuito, então seguir este tutorial não custará nada.

**Por que aprender AWS?**  
AWS é atualmente a maior plataforma de computação em nuvem. O Wordpress alimenta mais sites pequenos, mas a AWS é usada pela grande maioria dos sites comerciais de alto tráfego. Isso significa que pessoas com habilidades em AWS estão em grande demanda.

Você pode assistir a uma versão em vídeo deste tutorial aqui  
[https://www.youtube.com/playlist?list=PLMc67XEAt-yzxRboCFHza4SBOxNr7hDD5][1]

**Comandos úteis do terminal:**  
[https://github.com/iqbal125/terminal\_commands\_fullstack][2]

**Projeto de exemplo React/Express:**  
[https://github.com/iqbal125/react-express-sample][3]

## Teoria

-   **Como funciona a rede na computação em nuvem da AWS**
-   **Instância AWS EC2**
-   **endereços IP públicos vs privados**
-   **endereços IPv4**
-   **conectando-se à internet pública a partir de uma rede privada**
-   **Visão geral conceitual da VPC da AWS**
-   **como funciona o subnetting na AWS**
-   **ssh**

## Prática

-   **Implantação simples do EBS**
-   **configuração da VPC e sub-redes**
-   **Gateways de Internet e Tabelas de Roteamento**
-   **Configuração de Grupos de Segurança**
-   **lançamento de um computador em nuvem com AWS EC2**
-   **configuração do banco de dados na AWS**
-   **configuração do build do React para produção**
-   **configuração do PM2**
-   **configuração do Nginx**

## Teoria

A Computação em Nuvem simplificou drasticamente a implantação de um aplicativo web. Sites como Digital Ocean e Heroku tornam o processo ainda mais fácil ao ocultar toda a complexidade e permitir que você implante seu aplicativo com alguns passos simples.

Essas ferramentas são boas, mas o que queremos é uma configuração de computação em nuvem robusta, altamente segura e altamente performática, o que significa que iremos fazê-la do zero.

A configuração da AWS envolverá principalmente a rede, é por isso que a maior parte deste tutorial focará em conceitos e configurações de rede.

Tudo o mais, como provisionar bancos de dados e instâncias EC2, é fácil de fazer na AWS; a rede será o maior desafio.

Mas não se preocupe se você não tiver nenhuma experiência em rede. Vou fornecer todas as informações que você precisa saber.

### Como funciona a rede na computação em nuvem

Funciona basicamente da mesma forma que a rede funciona com hardware, exceto que tudo que é hardware (roteadores, switches, gateways de internet) é virtualizado na computação em nuvem.

A rede na computação em nuvem determina essencialmente como seus recursos virtuais se comunicam entre si e com a internet em geral.

VPCs, endereços IP e sub-redes são os conceitos mais importantes para entender sobre redes na AWS.

Isso é basicamente o que iremos construir.

![image-1](https://www.freecodecamp.org/news/content/images/2019/09/image-1.png)

Teremos uma sub-rede pública e uma sub-rede privada em nossa VPC. A sub-rede pública conterá nosso servidor web e será acessível pela internet. Nossa sub-rede privada conterá nosso banco de dados, mas não será acessível pela internet.

Nosso servidor web e banco de dados poderão se comunicar entre si através de uma tabela de rotas.

Veremos exemplos de ambos quando configurarmos nosso projeto no console da AWS.

### endereços IP públicos vs privados

Um endereço IP público é a localização de onde seu computador está na internet. No entanto, o que chamamos de internet é apenas uma das muitas redes.

Da mesma forma que você pode ter um endereço IP na internet, você também pode ter um endereço IP em outra rede que não seja a internet.

Endereço IP é simplesmente uma forma de identificar um único computador em uma rede. Independentemente de essa rede ser a internet ou não.

Portanto, endereços IP privados são apenas uma maneira de identificar computadores em nossa própria rede e endereços IP públicos são uma maneira de identificar computadores na rede "internet".

### IPv4

IPv4 é o formato em que os endereços IP são escritos.

Exemplo de endereço IPv4: 10.12.15.22

Chamado de IPv4, pois existem 4 bytes que podem representar o endereço. Cada byte contém 8 bits e, portanto, é referido como um **octeto**.

Como cada octeto contém 8 bits e cada bit pode ser 0 ou 1, há 2 ^ 8 = 256 combinações diferentes. Mas começamos em 0, então um octeto pode ser um número entre 0-255. Como temos 4 octetos, temos 256 ^ 4 = 4,3 bilhões de combinações diferentes e, portanto, endereços IP!

Um endereço IPv4 é resolvido para um formato legível por humanos: “[https://google.com][4]” através de um DNS.

Também existe o IPv6, mas para manter as coisas concisas, vamos pular isso. Precisaremos apenas conhecer o IPv4 para os fins deste tutorial.


### Conectando a uma Rede Pública a partir de uma Rede Privada

Feito através de um gateway da internet

Quando uma solicitação é feita por um computador em uma rede privada, uma tabela de roteamento verifica se o destino é para um computador local ou não.

Se não for, a solicitação é encaminhada para o gateway da internet, que a encaminha para fora da rede privada e para um Provedor de Serviço de Internet, que então a envia para o destino pretendido.

O gateway da internet também recebe solicitações da internet.

O gateway da internet tem seu próprio endereço IP público, então uma rede pode ter 1 endereço IP público, mesmo que tenha milhares de endereços IP privados.

O protocolo usado para enviar e receber dados é chamado TCP. Este é um padrão e um modelo que assegura a integridade e confiabilidade dos dados.

### VPC e Subnetting

VPC e Subnetting são, de longe, as coisas mais difíceis de entender e aprender na AWS, por isso dedicarei uma seção mais longa a isso.

**Nuvem Privada Virtual (VPC)**. Uma localização virtual onde você pode implantar recursos AWS. Você pode implantar servidores web, bancos de dados, servidores de arquivos e serviços de mensagens em uma VPC e ter todos os seus recursos contidos em um único lugar virtual.

Cada recurso tem seu próprio endereço IP privado.

Uma **sub-rede (subnet)** é uma parte menor da sua VPC inteira. O subnetting é essencialmente uma maneira de dividir sua VPC por razões de desempenho e segurança.

**Exemplo:** Para implantar um banco de dados em uma sub-rede que seja inacessível pela internet. Enquanto outra sub-rede que possui os servidores web precisará ser acessível pela internet. Mesmo que essas duas sub-redes sejam separadas, elas ainda fazem parte da mesma VPC.

O subnetting na AWS é feito com a notação CIDR.

****Exemplo de notação CIDR para sub-rede:**** 10.11.12.0/24

**Máscara de Sub-rede**  
A máscara de sub-rede determina o número de endereços IP disponíveis para a sub-rede. O /24 é a máscara de sub-rede.

Uma máscara de sub-rede é usada como uma forma de dividir sua sub-rede em um número aproximado de endereços IP

**prefixo de rede**: Os octetos iniciais inalteráveis que identificam uma sub-rede ou VPC única.

**endereço do host**: Os endereços IP disponíveis para uso nos diferentes recursos em uma sub-rede.

/24 significa que os primeiros 24 bits devem ser usados como prefixo de rede e, portanto, são inutilizáveis. Como um IPv4 tem 32 bits no total, temos 8 bits restantes, que são conhecidos como endereço do Host. Esses são os endereços IP utilizáveis. Como 8 bits têm 256 combinações, nossa sub-rede pode ter qualquer endereço entre 10.11.12.0 e 10.11.12.255

Os números 1 representam o prefixo de rede e os números 0 representam o endereço do host

/24 = 255.255.255.0 = 11111111.11111111.11111111.00000000

**Igual:**

10.11.12.0/24

10.11.12.0/255.255.255.0

10.11.12.0/11111111.11111111.11111111.00000000

Uma sub-rede não precisa ser dividida uniformemente em octetos.

10.11.12.0 /19 significa uma máscara de sub-rede de 11111111.11111111.11100000.0000000

Se formos a um calculador de sub-rede, podemos ver como isso funciona. Um calculador de sub-rede fornece o número de endereços IP disponíveis em uma sub-rede. E também fornece o endereço IP mínimo e máximo.

![image-71](https://www.freecodecamp.org/news/content/images/2019/09/image-71.png)

Como você pode ver, esta sub-rede nos dá um total de 8190 endereços IP utilizáveis.

Os dois primeiros octetos são todos 1s, então ambos os octetos são usados como o prefixo de rede e podem ser qualquer número entre 0-255.

Mas nosso terceiro octeto tem apenas o prefixo de rede parcial e temos apenas 5 bits para usar como nosso endereço do host. Isso significa que o segundo octeto pode ser apenas um número entre 0-31, já que 2 ^ 5 = 32.

Nosso último octeto é todo 0, então, normalmente, pode ser qualquer número entre 0-255.

Tudo isso significa que nossa sub-rede pode ter qualquer endereço entre

10.11.0.0 - 10.11.31.255

**Nota:** Os primeiros e últimos endereços IP são usados como endereços de rede e transmissão, que são endereços IP especiais com funções especiais. É por isso que o Host min é o segundo endereço IP e o Host Max é o penúltimo endereço IP.

Você pode aprender mais sobre endereços de rede e transmissão aqui:

[https://www.computernetworkingnotes.com/ccna-study-guide/network-address-basic-concepts-explained-with-examples.html][6]

Para evitar toda a complexidade mencionada acima, é melhor ficar com Máscaras de Sub-rede de /8 /16 /24. Fazendo isso, você garantirá que não haverá octetos parciais.

10.11.12.0/8 terá os últimos 3 octetos inteiros disponíveis como endereços IP

10.11.12.0/16 terá os últimos 2 octetos inteiros disponíveis como endereços IP

10.11.12.0/24 terá o último 1 octeto inteiro disponível como endereços IP

Exemplo real  
**VPC:** 10.11.0.0/16

**Sub-rede Pública 1:** 10.11.1.0/24, qualquer endereço IP entre 10.11.1.0 e 10.11.1.255  
**Sub-rede Pública 2:** 10.11.2.0/24, qualquer endereço IP entre 10.11.2.0 e 10.11.2.255

**Sub-rede Privada 1:** 10.11.3.0/24, qualquer endereço IP entre 10.11.3.0 e 10.11.3.255 **Sub-rede Privada 2:** 10.11.4.0/24, qualquer endereço IP entre 10.11.4.0 e 10.11.4.255

**Nota:** Nem todos os endereços IP estarão disponíveis para sua Sub-rede. Alguns endereços, como os de Rede e Transmissão e alguns outros endereços de utilidade, serão reservados pela AWS.

### AWS EC2

É o "computador" na computação em nuvem. É essencialmente um computador virtual. Tem tudo o que seu computador doméstico possui: CPU, RAM, Disco Rígido etc.

Existem também outros sistemas operacionais Linux disponíveis, como Ubuntu e Red Hat.

Existem também sistemas operacionais baseados em Windows disponíveis, tais como Windows Server. Sistemas Windows permitem que você use uma interface gráfica de usuário (GUI) se preferir não trabalhar com a linha de comando.

Um único computador Ec2 é referido como uma instância.

### SSH

**Secure shell:** usado para fazer login no nosso servidor Linux EC2 a partir do nosso computador pessoal.

Você pode usar o Putty para SSH se preferir uma interface gráfica.

Eu usarei o Git Bash. É mais simples de usar, mas não tem uma GUI.

Vamos utilizar chaves Privadas e Públicas para SSH. Ambas estas chaves são geradas pela AWS.

A chave privada será armazenada no seu próprio computador e será usada durante o processo de login.

A chave pública será armazenada na Amazon e permitirá os logins. A chave pública não precisa ser mantida em segredo. A chave privada deve ser mantida em um lugar seguro no seu computador; se você a apagar acidentalmente, não há como obter outra.

## Prática

**Implantação simples do EBS**

Antes de fazer nossa implantação complexa, podemos fazer uma implantação simples do EBS para nos familiarizarmos.

AWS Elastic Beanstalk é uma maneira de lançar um aplicativo na Nuvem sem precisar configurar manualmente os recursos subjacentes, como o VPC, servidor web e banco de dados. É muito fácil e rápido obter um aplicativo em execução no AWS ELB e é uma boa maneira de se familiarizar com a AWS.

![image-5](https://www.freecodecamp.org/news/content/images/2019/09/image-5.png)

Vá para a página inicial da AWS e crie uma nova conta se você ainda não tiver uma.

![image-6](https://www.freecodecamp.org/news/content/images/2019/09/image-6.png)

Depois vá para Serviços e em seguida para ElasticBeanStalk em Compute.

![image-7](https://www.freecodecamp.org/news/content/images/2019/09/image-7.png)

Isso o levará à página inicial do EBS. Após isso avance e clique em Criar Aplicação Nova e depois dê um nome e descrição para ela.

![image-8](https://www.freecodecamp.org/news/content/images/2019/09/image-8.png)

Você pode então clicar em Criar Novo Ambiente e depois selecionar Ambiente de Servidor Web.

![image-9](https://www.freecodecamp.org/news/content/images/2019/09/image-9.png)

Nesta página, selecione Node.js como a plataforma e use o código do Aplicativo de Exemplo, todo o resto pode ser deixado como padrão.

Eu não tive sorte ao implantar o aplicativo diretamente daqui, então vamos clicar em Configurar mais opções para configurar o projeto um pouco mais.

![image-10](https://www.freecodecamp.org/news/content/images/2019/09/image-10.png)

Clique no cartão de Rede na parte inferior da página e certifique-se de que o VCP padrão está sendo usado junto com a sub-rede padrão sendo marcada.

Depois clique no cartão de Instâncias e certifique-se de que a caixa de grupos de segurança padrão esteja marcada.

![image-11](https://www.freecodecamp.org/news/content/images/2019/09/image-11.png)

E é isso, agora podemos clicar em criar ambiente para lançar nosso aplicativo.

Se funcionou, você deve ver o ambiente lançado com sucesso na sua tela.

![image-12](https://www.freecodecamp.org/news/content/images/2019/09/image-12.png)

E se você clicar na URL, você pode ver seu aplicativo implantado.

![image-13](https://www.freecodecamp.org/news/content/images/2019/09/image-13.png)

Parabéns por implantar um aplicativo na Nuvem da AWS!

**Importante: Certifique-se de limpar para não ser cobrado por usar a AWS.**

Para limpar, simplesmente clique em Terminar Ambiente em ações, e isso excluirá o aplicativo junto com todos os recursos subjacentes.

![image-14](https://www.freecodecamp.org/news/content/images/2019/09/image-14.png)

Agora podemos passar para a configuração complexa.

### Configuração do VPC

Então, primeiro podemos ir para o painel de controle do VPC que está na seção Network & Content Delivery.

![image-15](https://www.freecodecamp.org/news/content/images/2019/09/image-15.png)

Então você deve estar na tela de dashboard do VPC. Você pode criar um VPC com o botão Launch VPC Wizard, que é um pouco mais fácil, mas eu mostrarei como configurá-lo do zero, que é um pouco mais difícil, mas lhe dará uma melhor compreensão de como um VPC funciona.

Primeiro clique na aba VPCs e clique no botão Criar VPC, que levará você a uma página que se parece com isto.

![image-16](https://www.freecodecamp.org/news/content/images/2019/09/image-16.png)

Podemos nomear o VPC como VPC 3

Podemos definir o bloco CIDR para 10.11.0.0/16. Se você se lembra das seções de Teoria de VPC e Subnet, isso significa que os dois primeiros octetos são o prefixo da rede e os últimos dois octetos são o Endereço do Host, e estão disponíveis para nós usarmos.

Tenancy significa se o VPC estará em seu próprio hardware dedicado ou não. Há uma percepção de que a Tenancy dedicada é mais segura ou tem melhor desempenho, mas não há dados para sugerir isso.

Tenancy padrão significa que seu VPC compartilhará o hardware subjacente com outros usuários da AWS, mas será isolado deles através de software.

Depois disso, podemos clicar em criar VPC, que finalizará nossa configuração do VPC.

### Configuração de Subnets

A seguir, configuraremos as subnets. Podemos começar clicando na aba Subnets e clicar em criar subnet.

Vamos primeiro criar nossa Subnet Pública assim:

![image-17](https://www.freecodecamp.org/news/content/images/2019/09/image-17.png)

10.11 é nosso prefixo de rede inalterável da nossa VPC. O que faz com que .1 também faça parte do prefixo da rede, já que a máscara de sub-rede é /24 e .1 é também o identificador desta sub-rede.

O último octeto então serve como endereço do host, o que significa que esta sub-rede pode ter qualquer endereço entre 10.11.1.0 - 10.11.1.255.

E depois disso podemos clicar em criar, o que criará a sub-rede e listará ela sob as sub-redes.

Agora para nossa sub-rede privada

![image-18](https://www.freecodecamp.org/news/content/images/2019/09/image-18.png)

Ela é configurada de maneira similar à sub-rede pública, com a principal diferença sendo que a terceira casa decimal é .2 ao invés de .1. Também precisamos especificar uma zona de disponibilidade para fazer essa sub-rede funcionar com nosso banco de dados.

Então, basicamente, 10.11 é o prefixo de rede que obtivemos da VPC. .2 é a terceira casa decimal e o identificador único para esta sub-rede, e o último octeto .0 são os endereços IP disponíveis entre 0-255.

Isso significa que esta sub-rede pode ter qualquer endereço IP de 10.11.2.0 - 10.11.2.255.

Se você comparar isso com nossa sub-rede pública, que tem um intervalo de endereços IP de 10.11.1.0 -10.11.1.255, ficará muito mais claro qual é o padrão para configurar a sub-rede.

Implantar um banco de dados na AWS requer 2 sub-redes em diferentes zonas de disponibilidade, então você pode configurar a segunda assim.

![image-19](https://www.freecodecamp.org/news/content/images/2019/09/image-19.png)

### Gateways de Internet e Tabelas de Roteamento

**Tabelas de roteamento** são essencialmente roteadores e determinam como e para onde o tráfego é direcionado.

Agora podemos criar um gateway de internet que iremos anexar à nossa sub-rede pública.

![image-20](https://www.freecodecamp.org/news/content/images/2019/09/image-20.png)

Como todos os gateways de internet funcionam da mesma forma, só precisamos definir o nome. Antes de podermos anexar este gateway de internet à nossa sub-rede, precisamos primeiro configurar a tabela de roteamento.

Podemos ir para a aba das tabelas de roteamento e clicar em criar tabela de roteamento.

Só temos que definir o nome e associá-la à VPC. Podemos associá-la à VPC 3 e então clicar em criar.

![image-21](https://www.freecodecamp.org/news/content/images/2019/09/image-21.png)

Uma vez feito isso, podemos agora anexar nosso gateway de internet a esta VPC. Vamos voltar para a aba do gateway de internet, clicar no botão de ações e depois em anexar à VPC.

Para a opção de anexar, basta selecionar a VPC 3.

Em seguida, podemos voltar à nossa tabela de roteamento que configuramos e adicionar uma rota. Podemos adicionar a rota assim.

![image-22](https://www.freecodecamp.org/news/content/images/2019/09/image-22.png)

Isso está dizendo que, se for feita uma solicitação, a tabela de roteamento primeiro verifica se a rota é para uma rota local 10.11.0.0/16, caso contrário, encaminhamos essa solicitação para o gateway de internet para todas as outras rotas que são representadas por 0.0.0.0/0.

Então podemos clicar na aba de associações de sub-rede e depois no botão de editar associações de sub-rede.

![image-23](https://www.freecodecamp.org/news/content/images/2019/09/image-23.png)

Nós só queremos que a sub-rede pública esteja associada a essa tabela de roteamento, então marcamos apenas essa, e então podemos clicar em salvar.

E não podemos esquecer das nossas sub-redes privadas. Basta criar outra tabela de roteamento e associar as sub-redes privadas a ela da mesma maneira que fizemos para a sub-rede pública. Não adicione um gateway de internet, apenas deixe a tabela de roteamento para alvos locais.

### Grupos de Segurança

**Grupos de segurança** são essencialmente firewalls que filtram o tráfego de entrada e saída.

Agora precisamos configurar os grupos de segurança para trabalhar com essa configuração. Clique na aba de grupos de segurança e clique em criar grupo de segurança.

Criar o grupo de segurança é muito fácil, podemos apenas definir o nome e a descrição e então associá-lo à nossa VPC 3.

Depois de criar os grupos de segurança, clique em editar regras de entrada.

![image-24](https://www.freecodecamp.org/news/content/images/2019/09/image-24.png)

Em seguida, podemos configurar as regras de segurança assim

![image-25](https://www.freecodecamp.org/news/content/images/2019/09/image-25.png)

Primeiro, temos o SSH que usamos para fazer login na nossa instância do Ec2 a partir do nosso computador pessoal. Deixei a origem como 0.0.0.0/0 porque não quero colocar meu endereço IP pessoal, mas em um aplicativo real você vai querer colocar seu próprio endereço IP aqui.

Depois disso, temos a porta normal 80 e a porta 443, que permitem o tráfego normal pela internet. ::/0 permite todo o tráfego IPv6 junto com IPv4.

### Lançando uma instância EC2 (computador em nuvem)

Primeiro, vamos ao painel do ec2 e clicamos em lançar instância. Em seguida, podemos selecionar o Amazon Linux AMI como o sistema operacional.

![image-26](https://www.freecodecamp.org/news/content/images/2019/09/image-26.png)

Então, para permanecer na camada gratuita, selecione a opção t.2 micro para o tipo de instância.

Então, no terceiro passo, temos que configurar os detalhes da instância, o que podemos fazer assim.

![image-27](https://www.freecodecamp.org/news/content/images/2019/09/image-27.png)

Para a rede, podemos selecionar nossa VPC 3 e, para nossa sub-rede, podemos selecionar nossa sub-rede pública. Como este é nosso servidor web, queremos que ele esteja em nossa sub-rede pública anexada a um gateway de internet.

Adicionar tags e adicionar armazenamento podem ser deixados como padrão.

Para a segurança, certifique-se de adicionar o grupo de segurança do servidor web que configuramos na última seção.

Isso vai solicitar um pop-up para oferecer um par de chaves. Podemos seguir em frente e selecionar criar um novo par de chaves e, em seguida, baixar o par de chaves.

![image-28](https://www.freecodecamp.org/news/content/images/2019/09/image-28.png)

Se feito corretamente, você deverá ver isso na sua tela.

![image-29](https://www.freecodecamp.org/news/content/images/2019/09/image-29.png)

Depois disso, nossa instância é lançada e está disponível para acessarmos via SSH. Podemos acessar nossa instância com o comando:

`ssh -i “keypair.pem” ec2-user@public-ip-address`

### Configuração do Banco de Dados

Vamos agora configurar o banco de dados. Podemos começar indo até a aba RDS na seção de banco de dados, em serviços. Isso nos levará ao painel de controle do banco de dados RDS.

![image-30](https://www.freecodecamp.org/news/content/images/2019/09/image-30.png)

Mas, antes de podermos criar um banco de dados, temos que criar primeiro um grupo de sub-rede. Para começar, podemos ir até a aba de grupos de sub-rede e clicar em criar grupo de sub-rede de bd.

Um grupo de sub-rede de bd serve para proteger contra qualquer tipo de falha completa do servidor ou exclusão acidental, é por isso que ele abrange 2 zonas de disponibilidade. No caso remoto de um servidor falhar completamente em uma zona de disponibilidade, seu banco de dados ainda estará bem. É extremamente improvável que ambos os servidores falhem completamente em 2 zonas de disponibilidade diferentes ao mesmo tempo.

Primeiro, definimos o nome e a descrição. Depois associamos nossa VPC 3 ao grupo de sub-rede. Após isso, podemos adicionar nossas sub-redes.

![image-31](https://www.freecodecamp.org/news/content/images/2019/09/image-31.png)

As sub-redes serão listadas sob a zona de disponibilidade onde configuramos elas, na seção anterior. Depois, podemos apenas clicar em criar.

Depois de criar o grupo de sub-rede, estamos prontos para criar nosso banco de dados real.

Podemos primeiro selecionar a opção elegível para o nível gratuito no final.

![image-32](https://www.freecodecamp.org/news/content/images/2019/09/image-32.png)

Podemos então clicar em próximo. Podemos deixar todas as outras configurações na próxima página com as opções padrão. Certifique-se de lembrar do nome de usuário e senha definidos aqui.

Na próxima página, podemos definir a VPC como nossa VPC 3, o grupo de sub-rede para o que acabamos de configurar.

Certifique-se também de deixar "publicamente acessível" como não. Por razões óbvias de segurança, não queremos que nosso aplicativo esteja disponível na internet.

Todo o resto pode ser deixado como padrão. Configuraremos nossos grupos de segurança do Banco de Dados em um segundo.

![image-33](https://www.freecodecamp.org/news/content/images/2019/09/image-33.png)

Agora podemos clicar em criar banco de dados e podemos criar os grupos de segurança do banco de dados enquanto o banco de dados está sendo criado.

Podemos ir até a aba de grupos de segurança no painel de controle da VPC e criar um novo grupo de segurança, como vimos anteriormente. Para as regras de entrada, podemos limitá-las ao intervalo CIDR do nosso servidor web, com a porta configurada para a porta padrão 5432 do PSQL.

![image-34](https://www.freecodecamp.org/news/content/images/2019/09/image-34.png)

Clique em criar e estamos prontos para adicionar isso ao nosso banco de dados.

Para adicionar este novo grupo de segurança, podemos ir até o banco de dados no painel de controle do banco de dados. Depois clique no botão de modificar.

Depois disso, podemos apenas selecionar o grupo de segurança que acabamos de configurar na seção de Rede e Segurança.

Uma pergunta que você pode ter agora é como se conectar ao nosso banco de dados se ele não é publicamente acessível na internet.

A maneira de fazer isso é primeiro acessando via SSH nossa instância Linux e depois se conectar ao nosso banco de dados a partir dessa instância sobre a porta TCP do PSQL que configuramos na nossa tabela de rotas.

![image-35](https://www.freecodecamp.org/news/content/images/2019/09/image-35.png)

Para testar isso, podemos acessar via SSH nossa instância ec2 da mesma maneira vista acima. Em seguida, podemos instalar o psql com o comando:

`sudo amazon-linux-extras install postgresql9.6`

Depois disso, podemos nos conectar ao banco de dados psql com o seguinte comando:

`psql -d nome-do-bd -h nome-do-host -p porta -U nome-de-usuário`

Se conectado com sucesso, você verá o nome do seu banco de dados seguido de uma seta.

![image-36](https://www.freecodecamp.org/news/content/images/2019/09/image-36.png)

### Configuração do Projeto React e Node

Aqui vou abordar uma configuração de exemplo com React e node/express. A primeira coisa a fazer é executar o comando `npm run build`, que irá gerar uma build de produção do seu aplicativo em um diretório chamado **build.**

\*\*Nota: Certifique-se de que todas as rotas localhost na sua versão de build sejam alteradas para o IP público. Isso é provavelmente verdade para autenticação. Todo o resto pode ser deixado como está.

Corte e cole todo este diretório build em um servidor node/express. Depois defina um caminho para ele, conforme mostrado abaixo.

```javascript
....
//servidor express

app.use(express.static(path.join(__dirname, 'build')));

if(process.env.NODE_ENV === 'production') {
  app.get('/*', function (req, res) {
   	res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

....
```

A primeira função é como servimos os arquivos estáticos do nosso aplicativo React (os arquivos JS, CSS, PWA).

A segunda função primeiro verifica se o ambiente é de produção, então serve o principal arquivo HTML do React.

Esta abordagem mantém nosso roteamento do lado do cliente intacto. Por exemplo, na nossa build de desenvolvimento podemos usar rotas como /post/22 e isso será roteado corretamente para http://localhost:3000/post/22.

After this, simply deploy the React Express project to a Github repo.

E é isso, depois podemos implantar este aplicativo React Express em um servidor Linux.

### Implantando o projeto na instância AWS EC2.

Agora estamos prontos para implantar nosso projeto. Primeiro, faça SSH na sua instância EC2 com Gitbash usando o seguinte comando.

`ssh -i “keypair.pem” ec2-user@public-ip-address`

A próxima coisa que precisamos fazer é instalar o git, com o comando:

`sudo yum install git`

então podemos clonar o projeto no servidor com o comando

`sudo git clone link-to-repo`

Depois de fazer isso, você deve conseguir ver os arquivos do seu projeto fazendo `cd` no diretório.

![image-62](https://www.freecodecamp.org/news/content/images/2019/09/image-62.png)

Ainda não terminamos, ainda precisamos instalar o node e o npm, porque queremos instalar as dependências do nosso projeto. Primeiro precisamos instalar o gerenciador de versões do node, que permitirá instalar o node e o npm. Podemos instalar o nvm assim.

`sudo curl https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash`

Isso instalará o nvm, que podemos usar para instalar o node e o npm. Para fazer isso, basta listar as versões do node disponíveis para download e instalar a mais estável.

comando para listar versões do node  
`nvm ls remote`

comando de instalação  
`nvm install version-of-node`

Mas depois de instalar o npm e o node, se você tentar executar `npm install` no diretório do projeto, receberá um erro de permissão negada.

![image-63](https://www.freecodecamp.org/news/content/images/2019/09/image-63.png)

Você pode então executar o comando abaixo para dar permissão de escrita no diretório. O comando abaixo dá muito mais do que apenas permissões de escrita, mas configurar permissões no Linux está fora do escopo deste tutorial.

`sudo chmod 777` no diretório

Aqui está um link para um tutorial se você quiser saber mais sobre o chmod.  
[https://www.computerhope.com/unix/uchmod.htm][7]

Depois disso, seus módulos npm devem instalar normalmente com o comando normal `npm install`.

Então você pode simplesmente executar seu aplicativo com o comando `npm start`, que iniciará seu servidor node e servirá seu projeto React como arquivos estáticos.

Mas o problema é que o projeto só rodará nas portas não tradicionais, como 5000 ou 3000, ou qualquer porta que você estiver usando no localhost. Se você tentar a abordagem ingênua de apenas mudar a porta para a porta 80 no servidor, receberá um erro de permissão negada.

![image-64](https://www.freecodecamp.org/news/content/images/2019/09/image-64.png)

Para corrigir isso, usaremos o nginx.

### nginx

Você pode estar se perguntando por que estamos usando nginx se já temos node. É possível usar nginx como um servidor http, mas usaremos o nginx como um proxy reverso, que manterá o node como o servidor http real.

A configuração ficará assim.

![image-68](https://www.freecodecamp.org/news/content/images/2019/09/image-68.png)

Os benefícios de fazer isso são:

- o nginx atua como um balanceador de carga em nível de aplicação
- Ajuda o node com desempenho e confiabilidade
- Melhora a Segurança
- Previne ataques DoS

E aqui está um diagrama que mostra um proxy regular versus um proxy reverso.

![image-69](https://www.freecodecamp.org/news/content/images/2019/09/image-69.png)

Em um proxy regular, um cliente web pode enviar e receber dados de vários servidores web. Em um proxy reverso, um único servidor web pode enviar e receber dados de vários clientes web.

Agora vamos para a nossa instância Ec2 e fazer ssh nela.

A primeira coisa que precisamos fazer é instalar o nginx. A Amazon Linux AMI 2 já vem com o nginx, então você pode instalar assim

`sudo amazon-linux-extras install nginx1.12`

Depois podemos acessar o diretório do nginx com

`cd /etc/nginx`

Então podemos editar o arquivo de configuração do nginx com o comando

`sudo nano nginx.conf`

Isso abrirá o arquivo nginx.conf no editor sudo nano.

![image-65](https://www.freecodecamp.org/news/content/images/2019/09/image-65.png)

Então podemos adicionar este código à rota de localização do home

![image-66](https://www.freecodecamp.org/news/content/images/2019/09/image-66.png)

Basicamente estamos dizendo para definir a build do react como a rota root. Então defina o arquivo index.html como o índice principal, finalmente em cada solicitação subsequente sirva o mesmo arquivo index.html.

Isso porque React é um aplicativo de página única e literalmente um único arquivo html. Então, para possibilitar navegar dentro do aplicativo React, precisamos servir este mesmo arquivo html novamente em caso de erros.

Em seguida, também podemos configurar o nginx para lidar com nossas rotas da API.

![image-67](https://www.freecodecamp.org/news/content/images/2019/09/image-67.png)

Isso é, na maior parte, código boilerplate, mas a propriedade a ser observada é o `proxy_pass`, que é nosso IP público e a porta não padrão.

Esse endereço IP será então proxyado para a porta padrão 80, o que nos permitirá acessar o site normalmente.

Versão copiable do código:

```
    server {
        listen       80 default_server;
        listen       [::]:80 default_server;
        server_name  localhost;


        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;
```

        location /api/ {
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header Host $http_host;
                proxy_set_header X-NginX-Proxy true;
                proxy_pass http://10.0.1.187:3000;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;

        }
```

Depois disso, basta salvar e sair do editor.

Agora também precisamos reiniciar o nginx para que as alterações tenham efeito.

`sudo systemctl restart nginx`

Isso é tudo que você precisa fazer para ter o nginx como proxy reverso. Seu aplicativo agora poderá rodar na porta normal 80.

### PM2

PM2 é um gerenciador de cluster e nos permite rodar nosso aplicativo automaticamente e também reiniciar automaticamente se ele travar.

Então vamos nos conectar novamente à nossa instância via ssh e instalar o PM2

`npm install pm2 -g`

a flag -g é importante porque instala o PM2 globalmente. E isso é crucial porque é isso que permite que o PM2 faça seu trabalho.

Se você pensar sobre isso, se PM2 fosse instalado localmente, ele travaria quando nosso aplicativo travasse, então isso não funcionaria. Instalamos globalmente para que ele fique fora do nosso projeto e possa reiniciar o projeto se ele travar.

Então você pode rodar o PM2 no seu projeto com

`pm2 start app.js -i max`

Isso iniciará o projeto com o número máximo de núcleos. Isso é importante porque o node é single threaded e usar todos os núcleos maximiza o desempenho.

Se feito com sucesso, você deve ver uma página que se parece com esta.

![image-70](https://www.freecodecamp.org/news/content/images/2019/09/image-70.png)

Aqui estão alguns outros comandos úteis para PM2

`pm2 list`: lista todos os processos em execução

`pm2 stop app 0`: para o aplicativo com id 0

`pm2 delete app 0`: exclui o aplicativo com id 0

`pm2 restart app 0`: reinicia o aplicativo com id 0

`pm2 start app.js -i max`: inicia app.js com o número máximo de threads disponíveis

E é isso! Obrigado por ler e parabéns se você leu todo o tutorial - isso não é fácil.

> Conecte-se comigo no Twitter para mais atualizações sobre futuros tutoriais: [https://twitter.com/iqbal125sf][8]

[1]: https://www.youtube.com/playlist?list=PLMc67XEAt-yzxRboCFHza4SBOxNr7hDD5
[2]: https://github.com/iqbal125/terminal_commands_fullstack
[3]: https://github.com/iqbal125/react-express-sample
[4]: https://google.com
[5]: https://searchnetworking.techtarget.com/definition/IPv6-Internet-Protocol-Version-6
[6]: https://www.computernetworkingnotes.com/ccna-study-guide/network-address-basic-concepts-explained-with-examples.html
[7]: https://www.computerhope.com/unix/uchmod.htm
[8]: https://twitter.com/iqbal125sf



