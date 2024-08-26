---
title: How to Deploy a Machine Learning Model for Free – 7 ML Model Deployment
  Cloud Platforms
date: 2024-08-26T21:14:59.936Z
author: Davis David
authorURL: https://www.freecodecamp.org/news/author/davis/
originalURL: https://www.freecodecamp.org/news/deploy-your-machine-learning-models-for-free/
posteditor: ""
proofreader: ""
---

I remember the first time I created a simple machine learning model. It was a model that could predict your salary according to your years of experience. And after making it, I was curious about how I could deploy it into production.

<!-- more -->

If you have been learning machine learning, you might have seen this challenge in online tutorials or books. You can find [the source code here][1] if you are interested.

It was really difficult for me to figure out where I could deploy my model. I tried to deploy it on a web hosting platform, but it was hard to configure and run the Flask app that served my model.

![man-5723449_1920](https://www.freecodecamp.org/news/content/images/2021/02/man-5723449_1920.jpg)

Then I decided to explore different platforms that were specifically created for machine learning model deployment (or had a good environment to support my model stack).

> Only when a model is fully integrated with the business systems, we can extract real value from its predictions. - Christopher Samiullah

In this article, you will learn about different platforms that can help you deploy your machine learning models into production (for free) and make them useful.

I have also included some great resources to help you start deploying your model on a particular platform.

**Note:** The platforms mentioned in this article provide **free tier** plans that allow you to use their products or services up to their specified **free usage limit**. If you wan to get unlimited services you will be charged according to the service's price.

## Who is this article for?

This article is for those who have created a machine learning model in a local machine and want to explore potential platforms for deploying that model.

It's also for those who are looking for an alternative platform to deploy their machine learning models.

Let's get started! 🚀

## Machine Learning Model Deployment Option #1: Algorithmia

[Algorithmia][2] is a MLOps (machine learning operations) tool founded by [Diego Oppenheimer][3] and [Kenny Daniel][4] that provides a simple and faster way to deploy your machine learning model into production.

![Algorithmia](https://www.freecodecamp.org/news/content/images/2021/02/Algorithmia.png)

Algorithmia 

Algorithmia specializes in **"algorithms as a service"**. It allows users to create code snippets that run the ML model and then host them on Algorithmia. Then you can call your code as an API.

Now your model can be used for different applications of your choice, such as web apps, mobile apps, or e-commerce, by a simple API call from Algorithmia.

![supported-programming-languages](https://www.freecodecamp.org/news/content/images/2021/02/supported-programming-languages.PNG)

Supported Programming languages

The good thing about Algorithmia is that it separates Machine Learning concerns from the rest of your application. In this case, you have to call your model and make predictions as an API call. Your application will be free of the concerns of a machine learning environment.

Here's a good resource for you to learn more about Algorithmia.

-   [How to Deploy your NLP Model to Production as an API with Algorithmia][5]

## Machine Learning Model Deployment Option #2: PythonAnywhere

PythonAnywere is another well-known and growing platform as a service based on the Python programming language. It makes it easy to run Python programs in the cloud, and provides an straightforward way to host your web-based Python applications.

![pythonAnywhere](https://www.freecodecamp.org/news/content/images/2021/02/pythonAnywhere.PNG)

PythonAnywhere

You can use any Python web framework like Flask to deploy your machine learning model and run it on the pythonAnywhere platform in just a few minutes.

Keep in mind that pythonAnywhere does not support GPU. If you have a deep learning model relying on CUDA and GPU, you need to find a good server to accommodate your model requirements (check the following platforms).

Here are resources for you to learn how to run your machine learning model on PythonAnywhere:

-   [Deploy Machine Learning Models for Free][6]
-   [How to deploy and host a Machine Learning model][7]

## Machine Learning Model Deployment Option #3: Heroku

Heroku is a cloud Platform as a Service that helps developers quickly deploy, manage, and scale moderns applications without infrastructure headaches.

![1_H_nSB0PYTzIxnG9GhNU5vg](https://www.freecodecamp.org/news/content/images/2021/02/1_H_nSB0PYTzIxnG9GhNU5vg.jpeg)

Heroku 

If you want to deploy your model for the first time, I recommend that you try Heroku because it is flexible and easy to use

It offers a wide range of services and tools to speed up your development and helps you avoid starting everything from scratch. It also supports several widely used programming languages like Python, Java, PHP, Node, Go, Ruby, Scala, and Clojure.

The good thing about Heroku is that it makes it easy to create, deploy and manage your app. You can do this right from the command line using the [Heroku CLI][8] (available for Windows, Linux, and Mac users).

On the deployment part, you can upload your trained machine learning model and source code onto Heroku by linking your Github repository to your Heroku account.

Here are resources for you to learn how to deploy your model on the Heroku platform.

-   [How to Develop an End-to-End Machine Learning Project and Deploy it to Heroku with Flask][9]
-   [Create and Deploy your First Flask App using Python and Heroku][10]

> " As [VentureBeat][11] reports, around 90 percent of machine learning models never make it into production. In other words, only one in ten of a data scientist’s workdays actually end up producing something useful for the company." - Rhea Moutafis

## Machine Learning Model Deployment Option #4: Google Cloud Platform

Google Cloud Platform (GCP) is a platform offered by Google that provides a series of cloud computing services such as Compute, Storage and Database, Artificial Intelligence(AI) / Machine Learning(ML), networking, Big Data, and Identity and Security.

![gcp](https://www.freecodecamp.org/news/content/images/2021/02/gcp.png)

Google Cloud

Google Cloud Platform provides infrastructure as a service, platform as a service, and serverless computing environments.

Google cloud provides $300 credit for free over 12 months, but you will have to add your credit card details to make sure you are not a robot. The platform will not charge you until you decide to upgrade to a paid account.

Google cloud platform offers three ways to deploy your machine learning model.

### Google AI Platform

Google AI Platform provides comprehensive machine learning services. Data Scientists and Machine Learning Engineers can use this platform to work on machine learning projects from ideation to deployment more effectively.

![google-AI-platform](https://www.freecodecamp.org/news/content/images/2021/02/google-AI-platform.png)

Google Cloud AI Platform services

With the Google AI platform, you will get access to all its assets under one roof. It includes data preparation, model training, parameter tuning, model deployment, and sharing machine learning models with other developers.

To learn more about the Google AI platform, you can check the platform's website [here][12].

### Google App Engine

Google App Engine is a Platform as a service (PaaS) provided by Google that supports the development and hosting of different scalable web applications.

![appengine](https://www.freecodecamp.org/news/content/images/2021/02/appengine.png)

Google App Engine

Google App Engine Provides an auto-scaling feature that automatically allocates resources so your web application can handle more requests.

It supports popular programming languages including Python, PHP, Node.js, Java, Ruby, C#, and Go.

Therefore you can deploy your model on the Google App Engine using the Flask framework or any other framework you know.

To learn more about it, you can visit the platform [here][13].

### Google Cloud Functions

Google Cloud Function is a serverless computing platform that offers Functions as a service (FaaS) to run your code with zero server management.

All you need to do is write a small block of code (function) in any supported programming language and then host it on the Google Cloud Function. In this case, you don't need to face the difficulties of maintaining your own server.

![1_MeXs5Ot8X49Fn1vE_13ukA](https://www.freecodecamp.org/news/content/images/2021/02/1_MeXs5Ot8X49Fn1vE_13ukA.png)

Google Cloud Functions

All functions created and hosted on Google Cloud Functions will be executed in the cloud when needed. You can call cloud functions to your application by using different [triggers][14]. The most common way is using HTTP calls.

Therefore you can deploy your machine learning model with a supported block of code for execution on the google cloud function and call the HTTP request for prediction from your web application or any other system.

Here are some resources for you to learn how to deploy your model on the Google Cloud Platform.

-   [How to Go from Zero to Hero with Google Cloud Platform][15]
-   [How to Deploy Fast.ai models to Google Cloud Functions for Predictions][16]

## Machine Learning Model Deployment Option #6: Microsoft Azure Functions

Azure Functions is a serverless cloud service provided by Microsoft Azure as a Functions-as-a-service (FaaS). Azure functions help developers offload infrastructure management tasks and focus on running their applications.

![1_I39WMuYsU_2BgGAgAePCuw](https://www.freecodecamp.org/news/content/images/2021/02/1_I39WMuYsU_2BgGAgAePCuw.png)

Microsoft Azure Functions

> "You focus on the pieces of code that matter most to you, and Azure Functions handles the rest." [Azure function page][17].

With serverless, you can write a snippet of code that runs your model and then deploy the code and machine learning model on Azure Functions and call it for prediction as an API. Azure functions are similar to Google cloud functions.

Azure Functions supports different functions developed in C#, F#, Node.js, Python, PHP, JavaScript, Java 8, Powershell Core, and TypeScript.

If you have a big machine learning model, then Azure functions is the right choice for you. It supports the deployment of large ML packages such as deep learning frameworks (Tensorflow and Pytorch).

Here are resources for you to learn how to deploy your model in Azure Functions.

-   [Azure Functions for ML][18]
-   [Efficient Serverless deployment of PyTorch models on Azure][19]

## Machine Learning Model Deployment Option #7: AWS Lambda

AWS Lambda is a serverless computing service provided by Amazon as part of Amazon Web Services. AWS lambda helps you run your code without managing the underlying infrastructure.

![1_w3p_NfmQOrnGEN39pTC38g](https://www.freecodecamp.org/news/content/images/2021/02/1_w3p_NfmQOrnGEN39pTC38g.jpeg)

AWS Lambda

With Lambda, you can upload your code in a container image or zip file. Lambda will automatically allocate computational power to run your code based on the incoming requests or events without requiring you to configure anything.

AWS Lambda allows your code to be associated with other AWS resources such as Amazon DyanamoDB table, Amazon S3 bucket, Amazon SNS notification, and Amazon Kinesis stream.

Therefore you can easily deploy your machine learning model on AWS Lambda, and you can access it through an API using Amazon API Gateway.

You can write Lambda functions in the following supported programming languages: Python, Java, Go, PowerShell, Node.js, Ruby, and C# code.

![aws-lambda-how-it-works](https://www.freecodecamp.org/news/content/images/2021/02/aws-lambda-how-it-works.png)

How AWS Lambda Deployment works

AWS Lambda is very cheap because you only pay when you invoke the lambda function (that is, when you make prediction requests). It can save lots of money compared to the cost of running containers or Virtual Machines.

If you want to monitor the lambda functions you have created, AWS Lambda will do it on your behalf.

AWS Lambda will monitor real-time metrics including error rates, total requests, function-level concurrency usage, latency, and throttled requests through Amazon CloudWatch.

Then you can view the statistics for each lambda function by using AWS Lambda Console or Amazon CloudWatch Console.

Here are some resources for you to learn how to deploy your model in the Azure Functions.

-   [Lessons from deploying machine learning models on AWS Lambda][20]
-   [Deploying machine learning models as serverless APIs][21]
-   [How to Deploy Deep Learning Models with AWS Lambda and TensorFlow][22]

## And a Bonus Machine Learning Model Deployment Option: the mc2gen Library

I have a bonus option for you if the mentioned platforms above do not fit your requirements. Do you know that it is possible to transform your trained machine learning model into the programming language of your choice?

Yes, you can convert your model by using the [m2cgen][23] Python library developed by [Bayes' Witnesses][24]. m2cgen (Model 2 Code Generator) is a simple Python library that converts a trained machine learning model into different programming languages

It currently supports 14 different programming languages including Go, C#, Python, PHP, and JavaScript. The m2cgen library supports regression and classification models from scikit-learn and Gradient boost frameworks such as XGBoost and LightGBM (Light Gradient Boosting Machine).

To learn more about this library, I recommend that you read my [read my guide to mc2gen here][25]. I explained how to use the library and then convert a trained machine learning model into three different programming languages and then make a prediction.

This Python library will help you deploy your model into environments where you can't install your Python stack to support your model prediction.

## Wrapping Up

Machine learning deployment is one of the important skills you should have if you're going to work on machine learning projects. The platforms mentioned above can help you deploy your model and make it useful rather than keeping it in your local machine.

**Congratulations** 👏👏**,** you have made it to the end of this article!. I hope you have learned something new that will help you in your career.

If you learned something new or enjoyed reading this article, please share it so that others can see it. Until then, see you in the next post! You can also find me on Twitter [@Davis\_McDavid][26].

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