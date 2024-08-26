---
title: Como Implantar um Modelo de Machine Learning Gratuitamente – 7 Plataformas
  de Nuvem para Implantação de Modelos de ML
date: 2024-08-26T21:14:59.936Z
author: Davis David
authorURL: https://www.freecodecamp.org/news/author/davis/
originalURL: https://www.freecodecamp.org/news/deploy-your-machine-learning-models-for-free/
posteditor: ""
proofreader: ""
---

Eu me lembro da primeira vez que criei um modelo simples de machine learning. Era um modelo que podia prever seu salário de acordo com seus anos de experiência. E depois de fazê-lo, eu estava curioso sobre como eu poderia implantá-lo em produção.

<!-- more -->

Se você tem aprendido machine learning, você pode ter visto esse desafio em tutoriais online ou livros. Você pode encontrar [o código fonte aqui][1] se estiver interessado.

Foi realmente difícil para mim descobrir onde eu poderia implantar meu modelo. Tentei implantá-lo em uma plataforma de hospedagem web, mas foi difícil configurar e executar o aplicativo Flask que servia meu modelo.

![man-5723449_1920](https://www.freecodecamp.org/news/content/images/2021/02/man-5723449_1920.jpg)

Então decidi explorar diferentes plataformas que foram especificamente criadas para implantação de modelos de machine learning (ou que tinham um bom ambiente para suportar meu stack de modelagem).

> Somente quando um modelo está totalmente integrado aos sistemas de negócio, podemos extrair valor real de suas previsões. - Christopher Samiullah

Neste artigo, você aprenderá sobre diferentes plataformas que podem ajudar você a implantar seus modelos de machine learning em produção (gratuitamente) e torná-los úteis.

Eu também incluí alguns ótimos recursos para ajudar você a começar a implantar seu modelo em uma plataforma específica.

**Nota:** As plataformas mencionadas neste artigo oferecem planos de **nível gratuito** que permitem usar seus produtos ou serviços até o limite de **uso gratuito** especificado. Se você quiser obter serviços ilimitados, será cobrado de acordo com o preço do serviço.

## Para quem é este artigo?

Este artigo é para aqueles que criaram um modelo de machine learning em uma máquina local e querem explorar plataformas potenciais para implantar esse modelo.

Também é para aqueles que estão procurando uma plataforma alternativa para implantar seus modelos de machine learning.

Vamos começar! 🚀

## Opção de Implantação de Modelo de Machine Learning #1: Algorithmia

[Algorithmia][2] é uma ferramenta de MLOps (operações de machine learning) fundada por [Diego Oppenheimer][3] e [Kenny Daniel][4] que fornece uma maneira simples e rápida de implantar seu modelo de machine learning em produção.

![Algorithmia](https://www.freecodecamp.org/news/content/images/2021/02/Algorithmia.png)

Algorithmia 

Algorithmia se especializa em **"algoritmos como serviço"**. Ela permite aos usuários criar trechos de código que executam o modelo de ML e, em seguida, hospedá-los no Algorithmia. Depois, você pode chamar seu código como uma API.

Agora seu modelo pode ser usado para diferentes aplicativos de sua escolha, como aplicativos web, aplicativos móveis ou e-commerce, por uma simples chamada de API a partir da Algorithmia.

![supported-programming-languages](https://www.freecodecamp.org/news/content/images/2021/02/supported-programming-languages.PNG)

Linguagens de Programação Suportadas

A boa notícia sobre o Algorithmia é que ele separa as preocupações de Machine Learning do resto do seu aplicativo. Neste caso, você precisa chamar seu modelo e fazer previsões como uma chamada de API. Seu aplicativo ficará livre das preocupações de um ambiente de machine learning.

Aqui está um bom recurso para você aprender mais sobre o Algorithmia:

-   [How to Deploy your NLP Model to Production as an API with Algorithmia][5]

## Opção de Implantação de Modelo de Machine Learning #2: PythonAnywhere

PythonAnywhere é outra plataforma bem conhecida e em crescimento como serviço baseada na linguagem de programação Python. Ela facilita a execução de programas em Python na nuvem e fornece uma maneira simples de hospedar seus aplicativos baseados em Python na web.

![pythonAnywhere](https://www.freecodecamp.org/news/content/images/2021/02/pythonAnywhere.PNG)

PythonAnywhere

Você pode usar qualquer framework web em Python como Flask para implantar seu modelo de machine learning e executá-lo na plataforma PythonAnywhere em apenas alguns minutos.

Tenha em mente que o PythonAnywhere não suporta GPU. Se você tem um modelo de deep learning que depende de CUDA e GPU, você precisa encontrar um bom servidor para acomodar os requisitos do seu modelo (verifique as plataformas a seguir).

Aqui estão recursos para você aprender como executar seu modelo de machine learning no PythonAnywhere:

-   [Deploy Machine Learning Models for Free][6]
-   [How to deploy and host a Machine Learning model][7]

## Opção de Implantação de Modelo de Machine Learning #3: Heroku

Heroku é uma plataforma de nuvem como serviço que ajuda desenvolvedores a implantar, gerenciar e escalar aplicativos modernos rapidamente, sem dores de cabeça com infraestrutura.

![1_H_nSB0PYTzIxnG9GhNU5vg](https://www.freecodecamp.org/news/content/images/2021/02/1_H_nSB0PYTzIxnG9GhNU5vg.jpeg)

Heroku 

Se você quer implantar seu modelo pela primeira vez, recomendo que experimente o Heroku porque é flexível e fácil de usar

Ele oferece uma ampla gama de serviços e ferramentas para acelerar seu desenvolvimento e ajuda você a evitar começar tudo do zero. Ele também suporta várias linguagens de programação amplamente usadas, como Python, Java, PHP, Node, Go, Ruby, Scala e Clojure.



Na parte de implantação, você pode fazer o upload do seu modelo de machine learning treinado e do código-fonte no Heroku vinculando seu repositório do Github à sua conta Heroku.

Aqui estão alguns recursos para você aprender a implantar seu modelo na plataforma Heroku:

-   [Como Desenvolver um Projeto de Machine Learning de Ponta a Ponta e Implantá-lo no Heroku com Flask][9]
-   [Crie e Implemente seu Primeiro Aplicativo Flask usando Python e Heroku][10]

> "Como [VentureBeat][11] relata, cerca de 90% dos modelos de machine learning nunca entram em produção. Em outras palavras, apenas um em cada dez dias de trabalho de um cientista de dados realmente acaba produzindo algo útil para a empresa." - Rhea Moutafis

## Opção de Implantação de Modelo de Machine Learning #4: Google Cloud Platform

Google Cloud Platform (GCP) é uma plataforma oferecida pelo Google que fornece uma série de serviços de computação em nuvem, como Computação, Armazenamento e Banco de Dados, Inteligência Artificial (IA) / Machine Learning (ML), rede, Big Data e Identidade e Segurança.

![gcp](https://www.freecodecamp.org/news/content/images/2021/02/gcp.png)

Google Cloud

Google Cloud Platform fornece infraestrutura como serviço, plataforma como serviço e ambientes de computação sem servidor.

Google Cloud oferece um crédito de $300 gratuitamente por 12 meses, mas você terá que adicionar os detalhes do seu cartão de crédito para garantir que você não é um robô. A plataforma não cobrará até que você decida fazer o upgrade para uma conta paga.

A plataforma Google Cloud oferece três maneiras de implantar seu modelo de machine learning.

### Google AI Platform

Google AI Platform fornece serviços abrangentes de machine learning. Cientistas de Dados e Engenheiros de Machine Learning podem usar esta plataforma para trabalhar em projetos de machine learning, desde a ideação até a implantação, de forma mais eficaz.

![google-AI-platform](https://www.freecodecamp.org/news/content/images/2021/02/google-AI-platform.png)

Serviços da Google Cloud AI Platform

Com a Google AI Platform, você terá acesso a todos os seus recursos sob um mesmo teto. Isso inclui preparação de dados, treinamento de modelo, ajuste de parâmetros, implantação de modelo e compartilhamento de modelos de machine learning com outros desenvolvedores.

Para saber mais sobre a Google AI Platform, você pode consultar o site da plataforma [aqui][12].

### Google App Engine

Google App Engine é uma plataforma como serviço (PaaS) fornecida pelo Google que suporta o desenvolvimento e hospedagem de diferentes aplicativos web escaláveis.

![appengine](https://www.freecodecamp.org/news/content/images/2021/02/appengine.png)

Google App Engine

Google App Engine oferece uma função de auto-escalonamento que aloca recursos automaticamente para que seu aplicativo web possa lidar com mais solicitações.

Ele suporta linguagens de programação populares, incluindo Python, PHP, Node.js, Java, Ruby, C# e Go.

Portanto, você pode implantar seu modelo no Google App Engine usando o framework Flask ou qualquer outro framework que você conheça.

Para saber mais sobre isso, você pode visitar a plataforma [aqui][13].

### Google Cloud Functions

Google Cloud Function é uma plataforma de computação sem servidor que oferece funções como serviço (FaaS) para executar seu código com gestão zero de servidores.

Tudo o que você precisa fazer é escrever um pequeno bloco de código (função) em qualquer linguagem de programação suportada e depois hospedá-lo no Google Cloud Function. Nesse caso, você não precisa enfrentar as dificuldades de manter seu próprio servidor.

![1_MeXs5Ot8X49Fn1vE_13ukA](https://www.freecodecamp.org/news/content/images/2021/02/1_MeXs5Ot8X49Fn1vE_13ukA.png)

Funções do Google Cloud

Todas as funções criadas e hospedadas no Google Cloud Functions serão executadas na nuvem quando necessário. Você pode chamar funções de nuvem para seu aplicativo usando diferentes [gatilhos][14]. A maneira mais comum é usando chamadas HTTP.

Portanto, você pode implantar seu modelo de machine learning com um bloco de código suportado para execução na função do Google Cloud e chamar a requisição HTTP para predição a partir de seu aplicativo web ou qualquer outro sistema.

Aqui estão alguns recursos para você aprender a implantar seu modelo na plataforma Google Cloud:

-   [Como Ir de Zero a Herói com Google Cloud Platform][15]
-   [Como Implantar Modelos Fast.ai no Google Cloud Functions para Predições][16]

## Opção de Implantação de Modelo de Machine Learning #6: Microsoft Azure Functions

Azure Functions é um serviço de nuvem sem servidor fornecido pela Microsoft Azure como uma Função como Serviço (FaaS). Azura Functions ajuda desenvolvedores a descarregar tarefas de gerenciamento de infraestrutura e focar na execução de seus aplicativos.

![1_I39WMuYsU_2BgGAgAePCuw](https://www.freecodecamp.org/news/content/images/2021/02/1_I39WMuYsU_2BgGAgAePCuw.png)

Funções do Microsoft Azure

> "Você foca nas partes do código que mais importam para você, e as Azure Functions cuidam do resto." [Página do Azure Function][17].

Com a computação sem servidor, você pode escrever um trecho de código que executa seu modelo e depois implantar o código e o modelo de machine learning no Azure Functions e chamá-lo para predição como uma API. Azure Functions é semelhante às funções do Google Cloud.

Azure Functions suporta diferentes funções desenvolvidas em C#, F#, Node.js, Python, PHP, JavaScript, Java 8, Powershell Core e TypeScript.

Se você tem um grande modelo de machine learning, então Azure Functions é a escolha certa para você. Ele suporta a implantação de grandes pacotes de ML, como frameworks de deep learning (Tensorflow e Pytorch).

-   [Azure Functions para ML][18]
-   [Implantação eficiente de modelos PyTorch sem servidor na Azure][19]

## Opção de Implantação de Modelos de Machine Learning #7: AWS Lambda

O AWS Lambda é um serviço de computação sem servidor fornecido pela Amazon como parte do Amazon Web Services. O AWS Lambda ajuda você a executar seu código sem gerenciar a infraestrutura subjacente.

![1_w3p_NfmQOrnGEN39pTC38g](https://www.freecodecamp.org/news/content/images/2021/02/1_w3p_NfmQOrnGEN39pTC38g.jpeg)

AWS Lambda

Com o Lambda, você pode enviar seu código em uma imagem de contêiner ou arquivo zip. O Lambda aloca automaticamente o poder computacional para executar seu código com base nas solicitações ou eventos recebidos, sem a necessidade de configurar nada.

O AWS Lambda permite que seu código seja associado a outros recursos da AWS, como uma tabela do Amazon DynamoDB, um bucket do Amazon S3, uma notificação do Amazon SNS e um stream do Amazon Kinesis.

Portanto, você pode facilmente implantar seu modelo de machine learning no AWS Lambda e acessá-lo através de uma API usando o Amazon API Gateway.

Você pode escrever funções Lambda nas seguintes linguagens de programação suportadas: Python, Java, Go, PowerShell, Node.js, Ruby e código C#.

![aws-lambda-how-it-works](https://www.freecodecamp.org/news/content/images/2021/02/aws-lambda-how-it-works.png)

Como funciona a Implantação no AWS Lambda

O AWS Lambda é muito barato porque você só paga quando invoca a função lambda (ou seja, quando faz solicitações de previsão). Isso pode economizar muito dinheiro em comparação com o custo de executar contêineres ou máquinas virtuais.

Se você quiser monitorar as funções lambda que criou, o AWS Lambda fará isso em seu nome.

O AWS Lambda monitora métricas em tempo real, incluindo taxas de erro, solicitações totais, uso de concorrência em nível de função, latência e solicitações limitadas através do Amazon CloudWatch.

Então, você pode visualizar as estatísticas de cada função lambda usando o Console do AWS Lambda ou o Console do Amazon CloudWatch.

Aqui estão alguns recursos para você aprender como implantar seu modelo no Azure Functions.

-   [Lições ao implantar modelos de machine learning no AWS Lambda][20]
-   [Implantando modelos de machine learning como APIs sem servidor][21]
-   [Como implantar modelos de deep learning com o AWS Lambda e TensorFlow][22]

## E uma Opção Extra de Implantação de Modelo de Machine Learning: a Biblioteca mc2gen

Tenho uma opção extra para você, caso as plataformas mencionadas acima não atendam às suas necessidades. Você sabia que é possível transformar seu modelo de machine learning treinado na linguagem de programação de sua escolha?

Sim, você pode converter seu modelo usando a biblioteca Python [m2cgen][23], desenvolvida pelos [Bayes' Witnesses][24]. m2cgen (Model 2 Code Generator) é uma biblioteca Python simples que converte um modelo de machine learning treinado em diferentes linguagens de programação.

Atualmente, ela suporta 14 linguagens de programação diferentes, incluindo Go, C#, Python, PHP e JavaScript. A biblioteca m2cgen suporta modelos de regressão e classificação do scikit-learn e frameworks de Gradient Boost como XGBoost e LightGBM (Light Gradient Boosting Machine).

Para saber mais sobre esta biblioteca, recomendo que você leia meu [guia sobre mc2gen aqui][25]. Eu expliquei como usar a biblioteca e converter um modelo de machine learning treinado em três linguagens de programação diferentes e depois fazer uma previsão.

Esta biblioteca Python ajudará você a implantar seu modelo em ambientes onde você não pode instalar sua stack Python para dar suporte à previsão do seu modelo.

## Conclusão

A implantação de machine learning é uma das habilidades importantes que você deve ter se for trabalhar em projetos de machine learning. As plataformas mencionadas acima podem ajudar você a implantar seu modelo e torná-lo útil, em vez de mantê-lo em sua máquina local.

**Parabéns** 👏👏**,** você chegou ao final deste artigo! Espero que tenha aprendido algo novo que o ajudará em sua carreira.

Se você aprendeu algo novo ou gostou de ler este artigo, por favor, compartilhe para que outros possam vê-lo. Até então, nos vemos no próximo post! Você também pode me encontrar no Twitter [@Davis_McDavid][26].

[1]: https://github.com/Davisy/Model-Deployment-by-using-Flask
[2]: https://algorithmia.com/
[3]: https://www.linkedin.com/in/doppenheimer/
[4]: https://www.linkedin.com/in/kennydaniel
[5]: https://www.freecodecamp.org/news/deploy-ml-model-to-production-as-api/
[6]: https://medium.com/analytics-vidhya/how-to-deploy-simple-machine-learning-models-for-free-56cdccc62b8d
[7]: https://medium.com/@kaustuv.kunal/how-to-deploy-and-host-machine-learning-model-de8cfe4de9c5
[8]: https://devcenter.heroku.com/articles/heroku-cli
[9]: https://www.freecodecamp.org/news/end-to-end-machine-learning-project-turorial/
[10]: https://www.kdnuggets.com/2020/09/flask-app-using-python-heroku.html
[11]: https://venturebeat.com/2019/07/19/why-do-87-of-data-science-projects-never-make-it-into-production/
[12]: https://cloud.google.com/ai-platform
[13]: https://cloud.google.com/appengine
[14]: https://cloud.google.com/functions/docs/calling
[15]: https://www.freecodecamp.org/news/google-cloud-platform-from-zero-to-hero/
[16]: https://jianjye.medium.com/how-to-deploy-fast-ai-models-to-google-cloud-functions-for-predictions-e3d73d71546b
[17]: https://docs.microsoft.com/en-us/azure/azure-functions/?WT.mc_id=ignite-event-toanglin
[18]: https://medium.com/microsoftazure/azure-functions-for-ml-4440bee58621
[19]: https://medium.com/pytorch/efficient-serverless-deployment-of-pytorch-models-on-azure-dc9c2b6bfee7
[20]: https://www.freecodecamp.org/news/what-we-learned-by-serving-machine-learning-models-using-aws-lambda-c70b303404a1/
[21]: https://aws.amazon.com/blogs/machine-learning/deploying-machine-learning-models-as-serverless-apis/
[22]: https://aws.amazon.com/blogs/machine-learning/how-to-deploy-deep-learning-models-with-aws-lambda-and-tensorflow/
[23]: https://github.com/BayesWitnesses/m2cgen
[24]: https://github.com/BayesWitnesses
[25]: https://www.freecodecamp.org/news/transform-machine-learning-models-into-native-code-with-zero-dependencies/
[26]: https://twitter.com/Davis_McDavid

