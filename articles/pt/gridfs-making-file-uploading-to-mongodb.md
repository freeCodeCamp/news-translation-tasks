---
title: "Guia GridFS: Como Fazer Upload de Arquivos e Imagens no MongoDB Facilmente Usando Node"
date: 2024-09-15T02:06:39.176Z
authorURL: ""
originalURL: https://www.freecodecamp.org/news/gridfs-making-file-uploading-to-mongodb/
posteditor: ""
proofreader: ""
---

Por Tarique Ejaz

<!-- more -->

O armazenamento de arquivos é um recurso importante necessário em vários processos em diversos tipos de aplicações. A existência de processos como `Content Delivery Networks (CDNs)`, configurados através de opções de nuvem de terceiros como Amazon Web Services, e opções de armazenamento de arquivos locais sempre tornaram mais fácil a construção desse recurso.

No entanto, o conceito de armazenar arquivos diretamente em um banco de dados através de uma única chamada de API me intrigou por muito tempo. Foi aí que o GridFS entrou em cena para mim.

![Imagem](https://www.freecodecamp.org/news/content/images/2020/05/gridfs.png) _Provavelmente não é a melhor maneira de implementar um sistema de armazenamento de arquivos_

## GridFS - Entendimento Simplificado

O MongoDB possui uma especificação de driver para upload e recuperação de arquivos chamada [GridFS][1]. O GridFS permite que você armazene e recupere arquivos, incluindo aqueles que excedem o limite de tamanho do documento BSON de **16 MB**.

Basicamente, o GridFS pega um arquivo e o divide em vários pedaços, que são armazenados como documentos individuais em duas coleções:

-   _a coleção `chunk`_ (armazena as partes do documento), e
-   _a coleção `file`_ (armazena os metadados adicionais consequentes).

Cada pedaço é limitado a 255 KB de tamanho. Isso significa que o último pedaço é normalmente igual ou menor que 255 KB. Parece bem legal.

Quando você lê do GridFS, o driver recompõe todos os pedaços conforme necessário. Isso significa que você pode ler seções de um arquivo de acordo com o intervalo da sua consulta. Como escutar um segmento de um arquivo de áudio ou buscar uma seção de um arquivo de vídeo.

**Nota:** É preferível usar o GridFS para armazenar arquivos normalmente excedendo o limite de tamanho de 16 MB. Para arquivos menores, é recomendado usar o formato BinData para armazenar os arquivos em documentos únicos.

Isso resume como o GridFS funciona em geral. Hora de mergulhar em algum código funcionando e ver como implementar um sistema assim.

## Chega de Falar, Mostre-me o Código

Estamos usando Node.js com acesso a uma instância de nuvem do MongoDB para nossa configuração. Você pode encontrar o repositório de código para a aplicação de exemplo aqui.

[https://github.com/tarique93102/gridfs-file-storage][2]

Vamos focar completamente em segmentos do código que se relacionam com as funcionalidades do GridFS. Vamos aprender como configurá-lo e usá-lo para armazenar arquivos, recuperar arquivos ou um arquivo específico, e deletar um arquivo específico. Vamos começar então.

### Inicializar o Motor de Armazenamento

Os pacotes necessários para inicializar o motor são [`multer-gridfs-storage`][3] e [`multer`][4]. Também usamos o middleware `method-override` para habilitar a operação de exclusão de arquivos. O módulo npm `crypto` é usado para criptografar os nomes dos arquivos ao serem armazenados e lidos do banco de dados.

Uma vez que o motor de armazenamento usando GridFS é inicializado, você só precisa chamá-lo usando o middleware multer. Ele é então passado para a rota respectiva que executa as várias operações de armazenamento de arquivos.

![Imagem](https://www.freecodecamp.org/news/content/images/2020/05/server-app-1.png)

### Inicializar o Stream do GridFS

Inicializamos um stream do GridFS conforme visto no código abaixo. O stream é necessário para ler os arquivos do banco de dados e também para ajudar a renderizar uma imagem em um navegador quando necessário.

![Imagem](https://www.freecodecamp.org/news/content/images/2020/05/server-app-2.png)

### Fazer Upload de um Único Arquivo ou Imagem

Reutilizamos o middleware de upload que criamos anteriormente.

**Nota:** O nome `file` é usado como parâmetro em `upload.single()` pois temos a chave com um nome similar carregando o arquivo sendo enviado pelo cliente.

![Imagem](https://www.freecodecamp.org/news/content/images/2020/05/server-app-4.png)

### Fazer Upload de Múltiplos Arquivos ou Imagens

Também podemos fazer upload de múltiplos arquivos de uma vez. Em vez de `upload.single()`, temos que simplesmente usar `upload.multiple(<número de arquivos>)`.

**Nota:** O número de arquivos carregados pode ser menor que o número definido de arquivos.

![Imagem](https://www.freecodecamp.org/news/content/images/2020/05/server-app-5.png)

### Buscar Todos os Arquivos do Banco de Dados

Usando o stream inicializado podemos buscar todos os arquivos no banco de dados específico usando `gfs.find().toArray(...)`. Uma vez que os arquivos são obtidos, mapeamos para um array e enviamos a resposta.

![Imagem](https://www.freecodecamp.org/news/content/images/2020/05/server-app-6.png)

### Buscar um Único Arquivo pelo Nome do Arquivo

É super simples consultar o GridFS para um único arquivo baseado em um atributo específico como `filename`. Usando o stream do GridFS, você pode consultar o banco de dados através da função `gfs.find({<adicionar consulta aqui>})`.

![Imagem](https://www.freecodecamp.org/news/content/images/2020/05/server-app-7.png)

### Renderizar uma Imagem Buscada no Navegador

Esta é uma parte um pouco mais complicada, pois você precisa não apenas buscar um arquivo do banco de dados, mas também renderizá-lo como uma imagem no navegador respectivo. Buscamos o arquivo normalmente. Sem mudança nesse processo.

Então, com a ajuda do método `openDownloadStreamByName()` no stream gfs, podemos facilmente renderizar uma imagem, pois ele retorna um stream legível. Tendo feito isso, podemos usar o `pipe()` do JavaScript para transmitir a resposta.



### Excluir um Arquivo Específico por Id

Excluir um arquivo é igualmente simples. Usamos o método `delete()` com o parâmetro `_id` para consultar e excluir o arquivo em questão.

![Image](https://www.freecodecamp.org/news/content/images/2020/05/server-app-9.png)

Essas são as principais funcionalidades oferecidas pelo design da engine de armazenamento. Eu utilizei os recursos do GridFS discutidos para criar uma aplicação simples de upload de imagens. Você pode se aprofundar no código no [repositório][5].

## Conclusão

Demorei um pouco e tive uma quantidade razoável de dificuldade para entender como usar o GridFS para um projeto pessoal. Por causa disso, queria garantir que ao menos outra pessoa não precisasse investir a mesma quantidade de tempo.

Dito isso, eu recomendo usar o GridFS com cautela. Não é uma _bala de prata_ para todos os seus problemas de armazenamento de arquivos. Ainda assim, é uma especificação interessante para conhecer e estar ciente.

Se você tiver alguma dúvida ou preocupação, pode comentar no post ou me contatar no [`LinkedIn`][6].

Enquanto isso, continue codificando.

[1]: https://docs.mongodb.com/manual/core/gridfs/
[2]: https://github.com/tarique93102/gridfs-file-storage
[3]: https://www.npmjs.com/package/multer-gridfs-storage
[4]: https://www.npmjs.com/package/multer
[5]: https://github.com/tarique93102/gridfs-file-storage
[6]: https://www.linkedin.com/in/tarique-ejaz/

