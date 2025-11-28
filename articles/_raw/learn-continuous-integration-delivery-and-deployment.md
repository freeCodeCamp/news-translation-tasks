---
title: "The CI/CD Handbook: Learn Continuous Integration and Delivery with
  GitHub Actions, Docker, and Google Cloud Run"
date: 2025-07-17T02:10:48.442Z
author: Prince Onukwili
authorURL: https://www.freecodecamp.org/news/author/onukwilip/
originalURL: https://www.freecodecamp.org/news/learn-continuous-integration-delivery-and-deployment/
posteditor: ""
proofreader: ""
---

Hey everyone! 🌟 If you’re in the tech space, chances are you’ve come across terms like **Continuous Integration (CI)**, **Continuous Delivery (CD)**, and **Continuous Deployment**. You’ve probably also heard about automation pipelines, staging environments, production environments, and concepts like testing workflows.

<!-- more -->

These terms might seem complex or interchangeable at first glance, leaving you wondering: What do they actually mean? How do they differ from one another? 🤔

In this handbook, I’ll break down these concepts in a clear and approachable way, drawing on relatable analogies to make each term easier to understand. 🧠💡 Beyond just theory, we’ll dive into a hands-on tutorial where you’ll learn how to set up a CI/CD workflow step by step.

Together, we’ll:

-   Set up a Node.js project. ✨
    
-   Implement automated tests using Jest and Supertest. 🛠️
    
-   Set up a CI/CD workflow using GitHub Actions, triggered on push, and pull requests, or after a new release. ⚙️
    
-   Build and publish a Docker image of your application to Docker Hub. 📦
    
-   Deploy your application to a staging environment for testing. 🚀
    
-   Finally, roll it out to a production environment, making it live! 🌐
    

By the end of this guide, not only will you understand the difference between CI/CD concepts, but you’ll also have practical experience in building your own automated pipeline. 😃

### Table of Contents

1.  [**What is Continuous Integration, Deployment, and Delivery?**][1]
    
2.  [**Differences Between Continuous Integration, Continuous Delivery, and Continuous Deployment**][2]
    
3.  [**How to Set Up a Node.js Project with a Web Server and Automated Tests**][3]
    
4.  [**How to Create a GitHub Repository to Host Your Codebase**][4]
    
5.  [**How to Set Up the CI and CD Workflows Within Your Project**][5]
    
6.  [**Set Up a Docker Hub Repository for the Project's Image and Generate an Access Token for Publishing the Image**][6]
    
7.  [**Create a Google Cloud Account, Project, and Billing Account**][7]
    
8.  [**Create a Google Cloud Service Account to Enable Deployment of the Node.js Application to Google Cloud Run via the CD Pipeline**][8]
    
9.  [**Create the Staging Branch and Merge the Feature Branch into It (Continuous Integration and Continuous Delivery)**][9]
    
10.  [**Merge the Staging Branch into the Main Branch (Continuous Integration and Continuous Deployment)**][10]
    
11.  [**Conclusion**][11]
    

## **What is Continuous Integration, Deployment, and Delivery?** 🤔

### **Continuous Integration (CI)**

Imagine you’re part of a team of six developers, all working on the same project. Without a proper system, chaos would ensue.

Let’s say Mr. A is building a new login feature, Mrs. B is fixing a bug in the search bar, and Mr. C is tweaking the dashboard UI—all at the same time. If everyone is editing the same "folder" or codebase directly, things could go horribly wrong: _"Hey! Who just broke the app?!"_ 😱

To keep everything in order, teams use **Version Control Systems (VCS)** like GitHub, GitLab, or BitBucket. Think of it as a digital workspace where everyone can safely collaborate without stepping on each other’s toes. 🗂️✨

Here’s how Continuous Integration fits into this process step-by-step:

#### 1\. **The Main Branch: The General Folder** ✨

At the heart of every project is the **main branch**—the ultimate source of truth. It contains the stable codebase that powers your live app. It’s where every team member contributes their work, but with one important rule: only tested and approved code gets merged here. 🚀

#### 2\. **Feature Branches: Personal Workspaces** 🔨

When someone like Mr. A wants to work on a new feature, they create a **feature branch**. This branch is essentially a personal copy of the main branch where they can tinker, write code, and test without affecting others. Mrs. B and Mr. C are also working on their own branches. Everyone’s experiments stay neatly organized. 🧪💡

#### 3\. **Merging Changes: The CI Workflow** 🎉

When Mr. A is satisfied with his feature, he doesn’t just shove it into the main branch—CI ensures it’s done safely:

-   **Automated Tests**: Before merging, CI tools automatically run tests on Mr. A’s code to check for bugs or errors. Think of it as a bouncer guarding the main branch, ensuring no bad code gets in. 🕵️‍♂️
    
-   **Build Verification**: The feature branch code is also "built" (converted into a deployable version of the app) to confirm it works as intended.
    

Once these checks are passed, Mr. A’s feature branch is merged into the main branch. This frequent merging of changes is what we call **Continuous Integration**.

### Continuous Delivery (CD)

Continuous Delivery (CD) often gets mixed up with Continuous Deployment, and while they share similarities, they serve distinct purposes in the development lifecycle. Let’s break it down! 🧐

#### The Need for a `Staging` Area 🌉

In the Continuous Integration (CI) process we discussed above, we primarily dealt with **feature branches** and the **main branch**. But directly merging changes from feature branches into the main branch (which powers the live product) can be risky. Why? 🛑

While automated tests and builds catch many errors, they’re not foolproof. Some edge cases or bugs might slip through unnoticed. This is where the **staging branch** and **staging environment** come into play! 🎭

Think of the staging branch as a “trial run.” Before unleashing changes to real customers, the codebase from feature branches is merged into the staging branch and deployed to a **staging environment**. This environment is an exact replica of the production environment, but it’s used exclusively by the **Quality Assurance (QA) team** for testing.

The QA team takes the role of a “test driver,” running the platform through its paces just as a real user would. They check for usability issues, edge cases, or bugs that automated tests might miss, and provide feedback to developers for fixes. 🚦 If everything passes, the codebase is cleared for deployment to production.

#### Continuous Delivery in Action 📦

The process of merging changes into the staging branch and deploying them to the **staging environment** is what we call **Continuous Delivery**. 🛠️ It ensures that the application is always in a deployable state, ready for the next step in the pipeline.

Unlike Continuous Deployment (which we’ll discuss later), Continuous Delivery doesn’t automatically push changes to production (live platform). Instead, it pauses to let humans—namely the QA team or stakeholders—decide when to proceed. This adds an extra layer of quality assurance, reducing the chances of errors making it to the live product. 🕵️‍♂️

### Continuous Deployment (CD)

Continuous Deployment (CD) takes automation to its peak. While it shares similarities with Continuous Delivery, the key difference lies in the **final step**: there’s no manual approval required. The final process—merging the codebase and deploying it live for end users (the QA testers or the team lead could do this).

Let’s explore what makes Continuous Deployment so powerful (and a little scary)! 😅

#### The Last Mile of the CI/CD Pipeline 🛣️

Imagine you’ve gone through the rigorous process of Continuous Integration: teammates have merged their feature branches, automated tests were run, and the codebase was successfully deployed to the staging environment during Continuous Delivery.

Now, you’re confident that the application is free of bugs and ready to shine in the production environment—the live version of your platform used by real customers.

In **Continuous Deployment**, this final step of deploying changes to the live environment happens **automatically**. The pipeline triggers whenever specific events occur, such as:

-   A **Pull Request (PR)** is merged into the **main branch**.
    
-   A new **release version** is created.
    
-   A **commit** is pushed directly to the production branch (though this is rare for most teams).
    

Once triggered, the pipeline springs into action, building, testing, and finally deploying the updated codebase to the production environment. 📡

## **Differences Between Continuous Integration, Continuous Delivery, and Continuous Deployment** 🔍

| Aspect | Continuous Integration (CI) | Continuous Delivery (CD) | Continuous Deployment (CD) |
| --- | --- | --- | --- |
| Primary Focus | Merging feature branches into the main/general codebase OR to the staging codebase. | Deploying the tested code to a staging environment for QA testing and approval. | Automatically deploying the code to the live production environment. |
| **Automation Level** | Automates testing and building processes for feature branches. | Automates deployment to staging/test environments after successful testing. | Fully automates the deployment to production with no manual approval. |
| **Testing Scope** | Automated tests run on feature branches to ensure code quality before merging into the main or staging branch. | Includes automated tests before deployment to staging and allows QA testers to perform manual testing in a controlled environment. | May include automated tests as a final check, ensuring the production environment is stable before deployment. |
| **Branch Involved** | Feature branches merging into the main/general or staging branch. | Staging branch used as an intermediate step before merging into the main branch. | Main/general branch deployed directly to production. |
| **Environment Target** | Ensures integration and testing within a local environment or build pipeline. | Deploys to staging/test environments where QA testers validate features. | Deploys to production/live environment accessed by end users. |
| **Key Goal** | Prevent integration conflicts and ensure new changes don’t break the existing codebase. | Provide a stable, near-production environment for thorough QA testing before final deployment. | Ensure that new features and updates reach users as soon as possible with minimal delays. |
| **Approval Process** | No approval needed. Feature branches are tested and merged upon passing criteria. | QA team or lead provides feedback/approval before changes are merged into the main branch for production. | No manual approval. Deployment is entirely automated. |
| **Example Trigger** | A developer merges a feature branch into the main branch. | The staging branch passes automated tests (during PR) and is ready for deployment to the testing environment. | A new release is created or a pull request is merged into the main branch, triggering an automatic production deployment. |

Now that we’ve untangled the mysteries of Continuous Integration, Continuous Delivery, and Continuous Deployment, it’s time to roll up our sleeves and put theory into practice 😁.

## **How to Set Up a Node.js Project with a Web Server and Automated Tests** ✨

In this hands-on section, we’ll build a Node.js web server with automated tests using Jest. From there, we’ll create a CI/CD pipeline with GitHub Actions that automates testing for every **pull request to the staging and main branches**. Finally, we’ll publish an Image of our application to DockerHub and deploy the image to **Google Cloud Run**, first to a staging environment for testing and later to the production environment for live use.

Ready to bring your project to life? Let’s get started! 🚀✨

### Step 1: Install Node.js 📥

To get started, you’ll need to have **Node.js** installed on your machine. Node.js provides the JavaScript runtime we’ll use to create our web server.

1.  Visit [https://nodejs.org/en/download/package-manager][12]
    
2.  Choose your operating system (Windows, macOS, or Linux) and download the installer.
    
3.  Follow the installation instructions to complete the setup.
    

To verify that Node.js was installed successfully, open your terminal and run `node -v`. This should display the installed version of Node.js

### Step 2: Clone the Starter Repository 📂

The next step is to grab the starter code from GitHub. If you don’t have Git installed, you can download it at [https://git-scm.com/downloads][13]. Choose your OS and follow the instructions to install Git. Once you’re set, it’s time to clone the repository.

Run the following command in your terminal to clone the boilerplate code:

```
git clone --single-branch --branch initial https://github.com/onukwilip/ci-cd-tutorial
```

This will download the project files from the `initial` branch, which contains the starter template for our Node.js web server.

Navigate into the project directory:

```
cd ci-cd-tutorial
```

### Step 3: Install Dependencies 📦

Once you’re in the project directory, install the required dependencies for the Node.js project. These are the packages that power the application:

```
npm install --force
```

This will download and set up all the libraries specified in the project. Alright, dependencies installed? You’re one step closer!

### Step 4: Run Automated Tests ✅

Before diving into the code, let’s confirm that the automated tests are functioning correctly. Run:

```
npm test
```

You should see two successful test results in your terminal. This indicates that the starter project is correctly configured with working automated tests.

![Successful test run](https://cdn.hashnode.com/res/hashnode/image/upload/v1733074280408/93b4ea86-1dfa-42eb-a163-b97c19c2a053.png)

### Step 5: Start the Web Server 🌐

Finally, let’s start the web server and see it in action. Run the following command:

```
npm start
```

Wait for the application to start running. Open your browser and visit [http://localhost:5000][14]. 🎉 You should see the starter web server up and running, ready for your CI/CD magic:

![Successful project run](https://cdn.hashnode.com/res/hashnode/image/upload/v1733074667521/7b80bb21-1f43-430e-8a56-2bff8b81ddad.png)

## **How to Create a GitHub Repository to Host Your Codebase 📂**

### Step 1: Sign In to GitHub

1.  **Go to GitHub**: Open your browser and visit GitHub - [https://github.com][15].
    
2.  **Sign In**: Click on the **Sign In** button in the top-right corner and enter your username and password to log in, OR create an account if you don’t have one by clicking the **Sign up** button.
    

### Step 2: Create a New Repository

Once you're signed in, on the main GitHub page, you’ll see a "+" sign in the top-right corner next to your profile picture. Click on it, and select **“New repository”** from the dropdown.

![New GitHub repository](https://cdn.hashnode.com/res/hashnode/image/upload/v1733130465203/dac28dee-74da-4fd4-8a96-bc90aef01207.png)

Now it’s time to set the repository details. You’ll include:

-   **Repository Name**: Choose a name for your repository. For example, you can call it `ci-cd-tutorial`.
    
-   **Description** (Optional): You can add a short description, like “A tutorial project for CI/CD with Docker and GitHub Actions.”
    
-   **Visibility**: Choose whether you want your repository to be **public** (accessible by anyone) or **private** (only accessible by you and those you invite). For the sake of this tutorial, make it **public**.
    
-   **Do Not Check the Add a README File Box**: **Important**: Make sure you **do not check** the option to **Add a README file**. This will automatically create a `README.md` file in your repository, which could cause conflicts later when you push your local files. We'll add the README file manually if needed later.
    

After filling out the details, click on **“Create repository”**.

![Create GitHub repository](https://cdn.hashnode.com/res/hashnode/image/upload/v1733130890582/04e09ac8-0ee6-4d26-a9f2-007c0e6ca08f.png)

### Step 3: Change the Remote Destination and Push to Your New Repository

#### **Update the Remote Repository URL**:

Since you've already cloned the codebase from my repository, you need to update the remote destination to point to your newly created GitHub repository.

Copy your repository URL (the URL of the page you were redirected to after creating the repository). It should look similar to this: `https://github.com/<username>/<repo-name>`.

Open your terminal in the project directory and run the following commands:

```
git remote set-url origin <your-repo-url>
```

Replace `<your-repo-url>` with your GitHub repository URL which you copied earlier.

#### **Rename the Current Branch to** `main`:

If your branch is named something other than `main`, you can rename it to `main` using:

```
git branch -M main
```

#### **Push to Your New Repository**:

Finally, commit any changes you’ve made and push your local repository to the new remote GitHub repository by running:

```
git add .
git commit -m 'Created boilerplate'
git push -u origin main
```

Now your local codebase is linked to your new GitHub repository, and the files are successfully pushed there. You can verify by visiting your repository on GitHub.

## How to Set Up the CI and CD Workflows Within Your Project ⚙️

Now it’s time to create the **CI and CD workflows** for our project! These workflows won’t run on your local PC but will be automatically triggered and executed in the cloud once you push your changes to the remote repository. GitHub Actions will detect these workflows and run them based on the triggers you define.

### Step 1: Prepare the Workflow Directory 📂

Before adding the CI/CD pipelines, it's a good practice to first create a feature branch. This step mirrors the workflow commonly used in teams, where new features or changes are made in separate branches before they are merged into the main codebase.

To create and switch to a new branch, run the following command:

```
git checkout -b feature/ci-cd-pipeline
```

This will create a new branch called `feature/ci-cd-pipeline` and switch to it. Now, you can safely add and test the CI/CD workflows without affecting the main branch.

Once you finish, you’ll be able to merge this feature branch back into `main` or `staging` as part of the pull request process.

In the project’s root directory, create a folder named `.github`. Inside `.github`, create another folder called `workflows`.

Any YAML file placed in the `.github/workflows` directory is automatically recognized as a GitHub Actions workflow. These workflows will execute based on specific triggers, such as pull requests, pushes, or releases.

### Step 2: Create the Continuous Integration Workflow 🚀

We’ll now create a CI workflow that automatically tests the application whenever a pull request is made to the `main` or `staging` branches.

First, inside the `workflows` directory, create a file named `ci-pipeline.yml`.

Paste the following code into the file:

```
name: CI Pipeline to staging/production environment
on:
  pull_request:
    branches:
      - staging
      - main
jobs:
  test:
    runs-on: ubuntu-latest
    name: Setup, test, and build project
    env:
      PORT: 5001
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Install dependencies
        run: npm ci

      - name: Test application
        run: npm test

      - name: Build application
        run: |
          echo "Run command to build the application if present"
          npm run build --if-present
```

#### Explanation of the CI Workflow

Here’s a breakdown of each section in the workflow:

1.  `name: CI Pipeline to staging/production environment`: This is the title of your workflow. It helps you identify this pipeline in GitHub Actions.
    
2.  `on`: The `on` parameter is what determines the events that trigger your workflow. When the workflow YAML file is pushed to the remote GitHub repository, GitHub Actions automatically registers the workflow using the configured triggers in the `on` field. These triggers act as event listeners that tell GitHub when to execute the workflow
    
    **For example:**
    
    If we set `pull_request` as the value for the `on` parameter and specify the branches we want to monitor using the `branches` key, GitHub sets up event listeners for pull requests to those branches.
    
    ```
     on:
       pull_request:
         branches:
           - main
           - staging
    ```
    
    This configuration means that GitHub will trigger the workflow whenever a pull request is made to the `main` or `staging` branches.
    
    **Multiple Triggers**:  
    You can define multiple event listeners in the `on` parameter. For instance, in addition to pull requests, you can add a listener for push events.
    
    ```
     on:
       pull_request:
         branches:
           - main
           - staging
       push:
         branches:
           - main
    ```
    
    This configuration ensures that the workflow is triggered when:
    
    -   A pull request is made to either the `main` or `staging` branch.
        
    -   A push is made directly to the `main` branch.
        

📘 **Learn more about triggers:** Check out the [official GitHub documentation here][16].

3.  `jobs`: The `jobs` section outlines the specific tasks (or jobs) that the workflow will execute. Each job is an independent unit of work that runs on a separate virtual machine (VM). This isolation ensures a clean, unique environment for every job, avoiding potential conflicts between tasks.
    
    **Key Points About Jobs:**
    
    1.  **Clean VM for Each Job**: When GitHub Actions runs a workflow, it assigns a dedicated VM instance to each job. This means the environment is reset for every job, ensuring there’s no overlap or interference between tasks.
        
    2.  **Multiple Jobs**: Workflows can have multiple jobs, each responsible for a specific task. For example:
        
        -   A **Test** job to install dependencies and run automated tests.
            
        -   A **Build** job to compile the application.
            
    3.  **Job Organization**: Jobs can be organized to run:
        
        -   **Sequentially**: Ensures one job is completed before the next starts, for example the Test job must finish before the Build job. This sequential flow mimics the "pipeline" structure.
            
        -   **Simultaneously**: Multiple jobs can run in parallel to save time, especially if the jobs are independent of one another.
            
    4.  **Single Job in This Workflow**: In our current workflow, there is only one job, `test`, which:
        
        -   Installs dependencies.
            
        -   Runs automated tests.
            
        -   Builds the application.
            

📘 **Learn more about jobs:** Dive into the [GitHub Actions jobs documentation here][17].

4.  `runs-on: ubuntu-latest`: Specifies the operating system the job will run on. GitHub provides pre-configured virtual environments, and we’re using the latest Ubuntu image.
    
5.  `env`: Sets environment variables for the job. Here, we define the **PORT** variable used by our application.
    
6.  **Steps**: Steps define the individual actions to execute within a job:
    
    -   `Checkout`: Uses the `actions/checkout` action to clone the repository containing the codebase in the feature branch into the virtual machine instance environment. This step ensures the pipeline has access to the project files.
        
    -   `Install dependencies`: Runs `npm ci` to install the required Node.js packages.
        
    -   `Test application`: Runs the automated tests using the `npm test` command. This validates the codebase for errors or failing test cases.
        
    -   `Build application`: Builds the application if a build script is defined in the `package.json`. The `--if-present` flag ensures this step doesn’t fail if no build script is present.
        

Now that we’ve completed the CI pipeline, which runs on pull requests to the `main` or `staging` branches, let’s move on to setting up the **Continuous Delivery (CD)** and **Continuous Deployment** pipelines. 🚀

### Step 3: The Continuous Delivery and Deployment Workflow

**First, create the Pipeline File**:  
In the `.github/workflows` folder, create a new file called `cd-pipeline.yml`. This file will define the workflows for automating delivery and deployment.

**Next, paste the configuration**:  
Copy and paste the following configuration into the `cd-pipeline.yml` file:

```
name: CD Pipeline to Google Cloud Run (staging and production)
on:
  push:
    branches:
      - staging
  workflow_dispatch: {}
  release:
    types: published

env:
  PORT: 5001
  IMAGE: ${{vars.IMAGE}}:${{github.sha}}
jobs:
  test:
    runs-on: ubuntu-latest
    name: Setup, test, and build project
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Install dependencies
        run: npm ci

      - name: Test application
        run: npm test
  build:
    needs: test
    runs-on: ubuntu-latest
    name: Setup project, Authorize GitHub Actions to GCP and Docker Hub, and deploy
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Authenticate for GCP
        id: gcp-auth
        uses: google-github-actions/auth@v0
        with:
          credentials_json: ${{ secrets.GCP_SERVICE_ACCOUNT }}

      - name: Set up Cloud SDK
        uses: google-github-actions/setup-gcloud@v0

      - name: Authenticate for Docker Hub
        id: docker-auth
        env:
          D_USER: ${{secrets.DOCKER_USER}}
          D_PASS: ${{secrets.DOCKER_PASSWORD}}
        run: |
          docker login -u $D_USER -p $D_PASS
      - name: Build and tag Image
        run: |
          docker build -t ${{env.IMAGE}} .
      - name: Push the image to Docker hub
        run: |
          docker push ${{env.IMAGE}}
      - name: Enable the Billing API
        run: |
          gcloud services enable cloudbilling.googleapis.com --project=${{secrets.GCP_PROJECT_ID}}
      - name: Deploy to GCP Run - Production environment (If a new release was published from the master branch)
        if: github.event_name == 'release' && github.event.action == 'published' && github.event.release.target_commitish == 'main'
        run: |
          gcloud run deploy ${{vars.GCR_PROJECT_NAME}} \
          --region ${{vars.GCR_REGION}} \
          --image ${{env.IMAGE}} \
          --platform "managed" \
          --allow-unauthenticated \
          --tag production \
      - name: Deploy to GCP Run - Staging environment
        if: github.ref != 'refs/heads/main'
        run: |
          echo "Deploying to staging environment"
          # Deploy service with to staging environment
          gcloud run deploy ${{vars.GCR_STAGING_PROJECT_NAME}} \
          --region ${{vars.GCR_REGION}} \
          --image ${{env.IMAGE}} \
          --platform "managed" \
          --allow-unauthenticated \
          --tag staging \
```

The **CD pipeline** configuration combines Continuous Delivery and Continuous Deployment workflows into a single file for simplicity. It builds on the concepts of CI/CD we discussed earlier, automating testing, building, and deploying the application to Google Cloud Run.

#### Explanation of the CD pipeline:

1.  #### Workflow Triggers (`on`)
    

-   `push`: Workflow triggers on pushes to the `staging` branch.
    
-   `workflow_dispatch`: Enables manual execution of the workflow via the GitHub Actions interface.
    
-   `release`: Triggers when a new release is published.  
    Example: When a release is published from the `main` branch, the app deploys to the production environment.
    

2.  **Job 1 – Testing the Codebase:** The first job in the pipeline, Test, ensures the codebase is functional and error-free before proceeding with delivery or deployment
    
3.  **Job 2 – Building and Deploying the Application:** Aha! Moment ✨: These jobs run sequentially. 😃 The **Build** job begins only after the **Test** job is completed successfully. It prepares the application for deployment and manages the actual deployment process.
    
    Here's what happens:
    
    -   **Authorization for GCP and Docker Hub**: The workflow authenticates with both Google Cloud Platform (GCP) and Docker Hub. For GCP, it uses the `google-github-actions/auth@v0` action to handle service account credentials stored as secrets. Similarly, it logs into Docker Hub with stored credentials to enable image uploads.
        
    -   **Build and Push Docker Image**: The application is built into a Docker image and tagged with a unique identifier (`${{env.IMAGE}}`). This image is then pushed to Docker Hub, making it accessible for deployment.
        
    -   **Deploy to Google Cloud Run**: Based on the event that triggered the workflow, the application is **deployed to either the staging or production environment** in Google Cloud Run. A **push** to the `staging` branch deploys to the staging environment (Continuous Delivery), while a **release** from the `main` branch deploys to production (Continuous Deployment).
        

To ensure the security and flexibility of our pipeline, we rely on external variables and secrets rather than hardcoding sensitive information directly into the workflow file.

Why? Workflow configuration files are part of your repository and accessible to anyone with access to the codebase. If sensitive data, like API keys or passwords, is exposed here, it can be easily compromised. 😨

Instead, we use GitHub’s **Secrets** to securely store and access this information. Secrets allow us to define variables that are encrypted and only accessible by our workflows. For example:

-   **DockerHub Credentials**: We’ll add a Docker username and access token to the repository’s secrets. These are essential for authenticating with DockerHub to upload the built Docker images.
    
-   **Google Cloud Service Account Key**: This key will grant the pipeline the necessary permissions to deploy the application on **Google Cloud Run** securely.
    

We'll set up these variables and secrets incrementally as we proceed, ensuring each step is fully secure and functional. 🎯

## **Set Up a Docker Hub Repository for the Project's Image and Generate an Access Token for Publishing the Image** 📦

Before we dive into the steps, let’s quickly go over what we’re about to do. In this section, you’ll learn how to create a Docker Hub repository, which acts like an online storage space for your application’s container image.

Think of a container image as a snapshot of your application, ready to be deployed anywhere. To ensure smooth and secure access, we’ll also generate a special access token, kind of like a revokable password that our CI/CD pipeline can use to upload your app’s image to Docker Hub. Let’s get started! 🚀

### Step 1: Sign Up for Docker Hub

Here are the steps to follow to sign up for Docker Hub:

1.  **Go to the Docker Hub website**: Open your web browser and visit Docker Hub - [https://hub.docker.com/][18].
    
2.  **Create an account**: On the Docker Hub homepage, you’ll see a button labelled **"Sign Up"** in the top-right corner. Click on it.
    
3.  **Fill in your details**: You'll be asked to provide a few details like your username, email address, and password. Choose a strong password that you can remember.
    
4.  **Agree to the terms**: You’ll need to check a box to agree to Docker’s terms of service. After that, click **“Sign Up”** to create your account.
    
5.  **Verify your email**: Docker Hub will send you an email to verify your account. Open that email and click on the verification link to complete your account creation.
    

### Step 2: Sign In to Docker Hub

After verifying your email, go back to Docker Hub, and click on **"Sign In"** at the top right. Then you can use the credentials you just created to log in.

### Step 3: Generate an Access Token (for the CI/CD pipeline)

Now that you have an account, you can create an access token. This token will allow your GitHub Actions workflow to securely sign into Docker Hub and upload Docker images.

Once you’re logged into Docker Hub, click on your profile picture (or avatar) in the top right corner. This will open a menu. From the menu, click “Account Settings”.

Then in the left-hand menu of your account settings, scroll to the **"Security"** tab. This section is where you manage your tokens and passwords.

Now you’ll need to create a new access token. In the Security tab, you’ll see a link labelled **“Personal access tokens”** – click on it. Click the button labelled **“Generate new token”**.

You’ll be asked to give your token a description. You can name it something like "GitHub Actions CI/CD" so that you know what it's for.

After giving it a description, click on the “**Access permissions dropdown**“ and select **“Read & Write“,** or **“Read, Write, Delete“**. Click “**Generate**“

![Create Docker access token](https://cdn.hashnode.com/res/hashnode/image/upload/v1733129374816/c725f041-c0ef-49a0-b8ef-ca62acafc1ee.png)

Now, you need to copy the credentials. After clicking the generate button, Docker Hub will create an access token. **Immediately copy this token along with your username** and save it somewhere safe, like in a file (don’t worry, we’ll add it to our GitHub secrets). You won’t be able to see this token again, so make sure you save it!

![Copy Docker username + access token](https://cdn.hashnode.com/res/hashnode/image/upload/v1733133363382/33dbf334-a7ec-4151-8639-5368c3ccaedb.png)

### Step 4: Add the Token to GitHub as a Secret

To do this, open your GitHub repository where the codebase is hosted. In the GitHub repo, click on the **Settings** tab (located near the top of your repo page).

Then on the left sidebar, scroll down and click on **“Secrets and Variables”**, then choose **“Actions”**.

1.  ![Open GitHub Actions Secrets](https://cdn.hashnode.com/res/hashnode/image/upload/v1733133003023/75c3bd35-1a5b-46fa-845a-0f4fd8305d53.png)

Here are the steps to create and manage your new secret:

1.  **Add a new secret**: Click on the **“New repository secret”** button.
    
2.  **Set up the secret**:
    
    -   In the **Name** field, type `DOCKER_PASSWORD`.
        
    -   In the **Value** field, paste the access token you copied earlier.
        
3.  **Save the secret**: Finally, click **Add secret** to save your Docker access token securely in GitHub.
    

Then you’ll repeat the process for your Docker username. Create a new secret called `DOCKER_USER` and add your Docker username that you copied earlier.

And that’s it! Now your CI/CD pipeline can use this token to securely log in to Docker Hub and upload images automatically when triggered. 🎉

### **Step 5: Creating the Dockerfile for the Project**

Before you can build and publish the Docker image to Docker Hub, you need to create a `Dockerfile` that contains the necessary instructions to build your application.

Follow the steps below to create the `Dockerfile` in the root folder of your project:

1.  Navigate to your project’s root folder.
    
2.  Create a new file named `Dockerfile`.
    
3.  Open the **Dockerfile** in a text editor and paste the following content into it:
    

```
FROM node:18-slim

WORKDIR /app

COPY package.json .

RUN npm install -f

COPY . .

# EXPOSE 5001
EXPOSE 5001

CMD ["npm", "start"]
```

#### Explanation of the Dockerfile:

-   `FROM node:18-slim`: This sets the base image for the Docker container, which is a slim version of the official Node.js image based on version 18.
    
-   `WORKDIR /app`: Sets the working directory for the application inside the container to `/app`.
    
-   `COPY package.json .`: Copies the `package.json` file into the working directory.
    
-   `RUN npm install -f`: Installs the project dependencies using `npm`.
    
-   `COPY . .`: Copies the rest of the project files into the container.
    
-   `EXPOSE 5001`: This tells Docker to expose port `5001`, which is the port our app will run on inside the container.
    
-   `CMD ["npm", "start"]`: This sets the default command to start the application when the container is run, using `npm start`.
    

## **Create a Google Cloud Account, Project, and Billing Account** ☁️

In this section, we’re laying the foundation for deploying our application to Google Cloud. First, we’ll set up a Google Cloud account (don’t worry, it’s free to get started!). Then, we’ll create a new project where all the resources for your app will live.

Finally, we’ll enable billing so you can unlock the cloud services needed for deployment. Think of this as setting up your workspace in the cloud—organized, ready, and secure! Let’s dive in! ☁️

### Step 1: Create or Sign in to a Google Cloud Account 🌐

First, go to [Google Cloud Console][19]. If you don’t have a Google Cloud account, you’ll need to create one.

To do this, click on **Get Started for Free** and follow the steps to set up your account (you’ll need to provide payment information, but Google offers $300 in free credits to get started). If you already have a Google account, simply sign in using your credentials.

Once you’ve signed in, you’ll be taken to your Google Cloud dashboard. This is where you can manage all your cloud projects and resources.

### Step 2: Create a New Google Cloud Project 🏗️

At the top left of the Google Cloud Console, you’ll see a drop-down menu beside the Google Cloud logo. Click on this drop-down to display your current projects.

Now it’s time to create a new project. In the top-left corner of the pop-up modal, click on the **New Project** button.

![Create Google Cloud Project](https://cdn.hashnode.com/res/hashnode/image/upload/v1733134260252/6769909a-cf9c-4c91-9d79-7676500f3981.webp)

You’ll be redirected to a page where you’ll need to provide some basic details for your new project. So now enter the following information:

-   **Project Name:** Enter a name of your choice for the project (for example, `gcr-ci-cd-project`).
    
-   **Location:** Select a location for your project. You can leave it as the default "No organization" if you're just getting started.
    

Once you've entered the project name, click the **Create** button. Google Cloud will now start creating your new project. It may take a few seconds.

### Step 3: Access Your New Project 🛠️

After a few seconds, you’ll be redirected to your **Google Cloud dashboard**.

Click on the drop-down menu beside the Google Cloud logo again, and you should now see your newly created project listed in the modal where you can select it.

Then click on the project name (for example, `gcr-ci-cd-project`) to enter your project’s dashboard.

### Step 4: Link A Billing Account To Your Project 💳

To access the billing page, in the Google Cloud Console, find the **Navigation Menu** (the three horizontal lines) at the top left of the screen. Click on it to open a list of options. Scroll down and click on **Billing**. This will take you to the billing section of your Google Cloud account.

![Navigate to Google Cloud Billing dashboard/section ](https://cdn.hashnode.com/res/hashnode/image/upload/v1733134747962/745c8a0e-13c5-4dde-849b-303c1200f495.png)

If you haven't set up a billing account yet, you'll be prompted to do so. Click on the **"Link a billing account"** button to start the process.

Now you can create a new billing account (if you don’t have one). You’ll be redirected to a page where you can either select an existing billing account or create a new one. If you don't already have a billing account, click on **"Create a billing account"**.

Provide the necessary details, including:

-   **Account name** (for example, "Personal Billing Account" or your business name).
    
-   **Country**: Choose the country where your business or account is based.
    
-   **Currency**: Choose the currency in which you want to be billed.
    
    ![Create Google Cloud billing account](https://cdn.hashnode.com/res/hashnode/image/upload/v1733135153425/1287ab53-e9c5-45b5-a09d-3d3a13840ca4.png)
    

Next, enter your payment information (credit card or bank account details). Google Cloud will verify your payment method, so make sure the information is correct.

Read and agree to the Google Cloud Terms of Service and Billing Account Terms. Once you’ve done this, click **"Start billing"** to finish setting up your billing account

After setting up your billing account, you’ll be taken to a page that asks you to **link** it to your project. Select the billing account you just created or an existing billing account you want to use. Click Set Account to link the billing account to your project.

![Link Google Cloud billing account to project](https://cdn.hashnode.com/res/hashnode/image/upload/v1733337276189/b80702dd-2ff6-42db-a325-c2082e8059e5.png)

After you’ve linked your billing account to your project, you should see a confirmation message indicating that billing has been successfully enabled for your project.

You can always verify this by returning to the Billing section in the Google Cloud Console, where you’ll see your billing account listed.

## **Create a Google Cloud Service Account to Enable Deployment of the Node.js Application to Google Cloud Run via the CD Pipeline** 🚀

### Why Do We Need a Service Account and Key? 🤔

A **service account** allows our CI/CD pipeline to authenticate and interact with Google Cloud services programmatically. By assigning specific roles (permissions), we ensure the service account can only perform tasks related to deployment, such as managing Google Cloud Run.

The **service account key** is a JSON file containing the credentials used for authentication. We securely store this key as a GitHub secret to protect sensitive information.

### Step 1: Open the Service Accounts Page

Here are the steps you can follow to set up your service account and get your key:

First, visit the Google Cloud Console at [https://console.cloud.google.com/][20]. Ensure you’ve selected the correct project (e.g. `gcr-ci-cd-project`). To change projects, click the drop-down menu next to the Google Cloud logo at the top-left corner and select your project.

Then navigate to the Navigation Menu (three horizontal lines in the top-left corner) and click on **IAM & Admin > Service Accounts**.

![Navigate to Google Cloud IAM - Service Account](https://cdn.hashnode.com/res/hashnode/image/upload/v1733147553088/e3647442-ca8e-4197-ab5f-91cee5a6d6b0.png)

### Step 2: Create a New Service Account

Click on the "Create Service Account" button. This will open a form where you’ll define your service account details.

Next, enter the Service Account details:

-   **Name**: Enter a descriptive name (for example, `ci-cd-sa`).
    
-   **ID**: This will auto-fill based on the name.
    
-   **Description**: Add a description to help identify its purpose, such as “Used for deploying Node.js app to Cloud Run.”
    
-   Click **Create and Continue** to proceed.
    

### Step 3: Assign Necessary Roles (Permissions)

On the next screen, you’ll assign roles to the service account. Add the following roles one by one:

-   **Cloud Run Admin**: Allows management of Cloud Run services.
    
-   **Service Account User**: Grants the ability to use service accounts.
    
-   **Service Usage Admin**: Enables control over enabling APIs.
    
-   **Viewer**: Provides read-only access to view resources.
    

To add a role:

-   Click on **"Select a Role"**.
    
-   Use the search bar to type the role name (for example, "Cloud Run Admin") and select it.
    
-   Repeat for all four roles.
    

![Create Google Cloud Service Account - Add role to a service account during creation](https://cdn.hashnode.com/res/hashnode/image/upload/v1733147870701/393833c9-c320-49e3-8743-dbc0d739b99b.png)

Your screen should look similar to this:

![Create a Google Cloud service account (SA) - Done assigning all roles to SA](https://cdn.hashnode.com/res/hashnode/image/upload/v1733147949148/c509c810-767d-4900-aa44-a737cc1c8dc1.png)

After assigning the roles, click **Continue**.

### Step 4: Skip Granting Users Access to the Service Account

On the next screen, you’ll see an option to grant additional users access to this service account. Click **Done** to complete the creation process.

### Step 5: Generate a Service Account Key 🔑

You should now see your newly created service account in the list. Find the row for your service account (for example, `ci-cd-sa`) and click the three vertical dots under the “Actions” column. Select **"Manage Keys"** from the drop-down menu.

To add a new key:

-   Click on **"Add Key" > "Create New Key"**.
    
-   In the pop-up dialog, select **JSON** as the key type.
    
-   Click **Create**.
    
    ![Create Google Cloud service account key](https://cdn.hashnode.com/res/hashnode/image/upload/v1733148120618/c7014982-ae7d-40ed-bbfb-0c8f5c4b8090.png)
    

Now, download the key file. A JSON file will automatically be downloaded to your computer. This file contains the credentials needed to authenticate with Google Cloud.

Make sure you keep the key secure and store it in a safe location. Don’t share it – treat it as sensitive information.

### Step 6: Add the Service Account Key to GitHub Secrets 🔒

Start by opening the downloaded JSON file using a text editor (like Notepad or VS Code). Then select and copy the entire contents of the file.

Then navigate to the repository you created for this project on GitHub. Click on the **Settings** tab at the top of the repository. Scroll down and find the **Secrets and variables > Actions** section.

Now you need to add a new secret. Click the **"New repository secret"** button. In the **Name** field, enter `GCP_SERVICE_ACCOUNT`. In the **Value** field, paste the JSON content you copied earlier. Click **Add secret** to save it.

Do the same for the `GCP_PROJECT_ID` secret, but now add your Google Project ID as the value. To get your project ID, follow these steps:

1.  **Navigate to the Google Cloud Console**: Open Google Cloud Console at [https://console.cloud.google.com/][21].
    
2.  **Locate the Project Dropdown**: At the top-left of the screen, next to the **Google Cloud logo**, you will see a drop-down that shows the name of your current project.
    
3.  **View the Project ID**: Click the drop-down, and you'll see a list of all your projects. Your **Project ID** will be displayed next to the project name. It is a unique identifier used by Google Cloud.
    
4.  **Copy the Project ID**: Copy the **Project ID** that is displayed, and add it as the value of the `GCP_PROJECT_ID` secret.
    

### Step 7: Adding External Variables to the GitHub Repository 🔧

Before proceeding with deployment, we need to define some external variables that were referenced in the CD workflow. These variables ensure that the pipeline knows critical details about your Google Cloud Run services and Docker container registry.

Here are the steps you’ll need to follow to do this:

1.  First, go to your repository on GitHub.
    
2.  Click the **Settings** tab at the top of the repository. Scroll down to **Secrets and variables > Actions**.
    
3.  Click on the **Variables** tab next to **Secrets**. Click **"New repository variable"** for each variable. Then you’ll need to define these variables:
    
    -   `GCR_PROJECT_NAME`: Set this to the name of your Cloud Run service for the production/live environment. For example, `gcr-ci-cd-app`.
        
    -   `GCR_STAGING_PROJECT_NAME`: Set this to the name of your Cloud Run service for the staging/test environment. For example, `gcr-ci-cd-staging`.
        
    -   `GCR_REGION`: Enter the region where you’d like to deploy the services. For this tutorial, set it to `us-central1`.
        
    -   `IMAGE`: Specify the name of the Docker image/container registry where the published image will be uploaded. For example, `<dockerhub-username>/ci-cd-tutorial-app`.
        
4.  After entering each variable name and value, click **Add variable**.
    

### Enabling the Service Usage API on the Google Cloud Project 🌐

To deploy your application, the **Service Usage API** must be enabled in your Google Cloud project. This API allows you to manage Google Cloud services programmatically, including enabling/disabling APIs and monitoring their usage.

Follow these steps to enable it:

1.  First, visit the Google Cloud Console at [https://console.cloud.google.com/][22].
    
2.  Then make sure you’re in the correct project. Click the project drop-down menu near the **Google Cloud logo** at the top-left corner. Select `gcr-ci-cd-project` , or the name you gave your project from the list of projects.
    
3.  Next you’ll need to access the API library. Open the **Navigation Menu** (three horizontal lines in the top-left corner). Select **APIs & Services > Library** from the menu.
    
4.  In the API Library, use the search bar to search for **"Service Usage API"**.
    
5.  Click on the **Service Usage API** from the search results. On the API’s details page, click **Enable**.
    
6.  To verify, go to **APIs & Services > Enabled APIs & Services** in the Google Cloud Console. Confirm that the **Service Usage API** appears in the list of enabled APIs.
    
    ![Enable the Google Cloud "Service Usage API" in the project](https://cdn.hashnode.com/res/hashnode/image/upload/v1733150269757/00a4e20b-72ac-4bd4-b05f-af6e61600e09.png)
    

## **Create the Staging Branch and Merge the Feature Branch into It (Continuous Integration and Continuous Delivery) 🌟**

When changes from the `feature/ci-cd-pipeline` branch are merged into the `staging` branch, we complete the **Continuous Integration (CI)** process, and the workflow `ci-pipeline.yml` will run. This ensures that the changes made in the feature branch are tested and integrated into a shared branch.

Once the pull request (PR) is merged into `staging`, the **Continuous Delivery (CD)** pipeline automatically triggers, deploying the application to the staging environment. This simulates how updates are tested in a safe environment before being pushed to production.

### Create the `staging` Branch on the Remote Repository

To enable the CI/CD pipeline, we’ll first create a `staging` branch on the remote GitHub repository. This branch will serve as the test environment where changes are deployed before they reach the production environment.

To create the `staging` branch directly on GitHub, follow these steps:

1.  First, navigate to your repository on GitHub. Open your web browser and go to the GitHub repository where you want to create the new `staging` branch.
    
2.  Then, switch to the `main` branch. On the top of the repository page, locate the **Branch** dropdown (usually labelled as `main` or the current branch name). Click on the dropdown and make sure you are on the `main` branch.
    
3.  Next, create the `staging` branch. In the same dropdown where you see the `main` branch, type `staging` into the text box. Once you start typing, GitHub will offer you the option to create a new branch called `staging`. Select the **Create branch: staging** option from the dropdown.
    
4.  Finally, verify the branch\*\*.\*\* After creating the `staging` branch, GitHub will automatically switch to it. You should now see `staging` in the branch dropdown, confirming the new branch was created.
    
    ![Create a new Staging branch in the GitHub repository](https://cdn.hashnode.com/res/hashnode/image/upload/v1733152232155/e6215137-5e3b-474b-88f8-af03269eccc2.png)
    

### **Merge Your Feature Branch into the Staging Branch via a Pull Request (PR)**

This process combines both Continuous Integration (CI) and Continuous Delivery (CD). You will commit changes from your feature branch, push them to the remote feature branch, and then open a PR to merge those changes into the `staging` branch. Here's how to do it:

#### **Step 1: Commit Local Changes on Your Feature Branch**

First, you’ll want to make sure that you are on the correct branch (the feature branch) by running:

```
git status
```

If you are not on the `feature/ci-cd-pipeline` branch, switch to it by running:

```
git checkout feature/ci-cd-pipeline
```

Now, it’s time to add your changes you made for the commit:

```
git add .
```

This stages all changes, including new files, modified files, and deleted files.

Next, commit your changes with a clear and descriptive message:

```
git commit -m "Set up CI/CD pipelines for the project"
```

Then you can verify your commit by running:

```
git log
```

This will display your most recent commits, and you should see the commit message you just added.

#### **Step 2: Push Your Feature Branch Changes to the Remote Repository**

After committing your changes, push them to the remote repository:

```
git push origin feature/ci-cd-pipeline
```

This pushes your local changes on the `feature/ci-cd-pipeline` branch to the remote GitHub repository.

Once the push is successful, visit your GitHub repository in a web browser, and confirm that the `feature/ci-cd-pipeline` branch is updated with your new commit.

#### **Step 3: Create a Pull Request to Merge the Feature Branch into Staging**

Go to your repository on GitHub and ensure that you are on the main page of the repository.

You should see an alert at the top of the page suggesting you create a pull request for the recently pushed branch (`feature/ci-cd-pipeline`). Click the **Compare & Pull Request** button next to the alert.

Now, it’s time to choose the base and compare branches. On the PR creation page, make sure the **base** branch is set to `staging` (this is the branch you want to merge your changes into). The **compare** branch should already be set to `feature/ci-cd-pipeline` (the branch you just pushed). If they’re not selected correctly, use the dropdowns to change them.

You’ll want to come up with a good PR description for this. Write a clear title and description for the pull request, explaining what changes you're merging and why. For example:

-   **Title**: "Merge CI/CD setup changes from feature branch"
    
-   **Description**: "This pull request adds the CI/CD pipelines for GitHub Actions and Docker Hub integration to the project. It includes the configurations for both CI and CD workflows."
    

Now GitHub will show a list of all the changes that will be merged. Take a moment to review them and ensure everything looks correct.

If all looks good after reviewing, click on the **Create pull request** button. This will create the PR and notify team members (if any) that changes are ready to be reviewed and merged.

Wait a few seconds, and you should see a message indicating that all the checks have passed. Click on the link with the description "**CI Pipeline to staging/production environment...**". This should direct you to the Continuous Integration workflow, where you can view the steps that ran

![Create a new pull request (PR) from the feature to the staging branch](https://cdn.hashnode.com/res/hashnode/image/upload/v1733153444873/6ecdb277-0a45-44ec-981c-c7ee671cd2f0.png)

![CI workflow run from PR (feature to staging branch)](https://cdn.hashnode.com/res/hashnode/image/upload/v1733153637817/e12fefde-9259-41a3-9bd1-63b5da1d88ea.png)

#### The Continuous Integration (CI) Process

The CI process begins when a Pull Request is made to the `staging` branch. It triggers the GitHub Actions workflow defined in the `.github/workflows/ci-pipeline.yml` file. The workflow runs the necessary steps to set up the environment, install dependencies, and build the Node.js application.

It then runs automated tests (using `npm test`) to ensure that the changes do not break any functionality in the codebase. If all these steps are completed successfully, the CI pipeline confirms that the feature branch is stable and ready to be merged into the `staging` branch for further testing and deployment.

#### **Step 4: Merge the Pull Request**

If your team or collaborators are part of the project, they may review your PR. This step may involve discussing any changes or improvements. If everything looks good, a reviewer will merge the PR.

Once the PR has been reviewed and approved, you can merge the PR. To do this, just click on the **Merge pull request** button. Choose **Confirm merge** when prompted.

After merging, you can go to the `staging` branch to verify that the changes were successfully merged.

### **Navigating to the Actions Page After Merging the PR**

Once you have successfully merged your pull request from the `feature/ci-cd-pipeline` branch into the `staging` branch, the Continuous Delivery (CD) pipeline will be triggered. To view the progress of the CD pipeline, navigate to the **Actions** tab in your GitHub repository. Here's how to do it:

1.  Go to your GitHub repository.
    
2.  At the top of the page, you will see the **Actions** tab next to the **Code** tab. Click on it.
    
3.  On the Actions page, you will see a list of workflows that have been triggered. Look for the one labelled **CD Pipeline to Google Cloud Run (staging and production)**. It should appear as a new run after the PR merge.
    
4.  Click on the workflow run to view its progress and see the detailed logs for each step.
    

![Continuous Delivery workflow from merge to staging (feature to staging)](https://cdn.hashnode.com/res/hashnode/image/upload/v1733154575368/96e236a2-ae66-494b-b544-f96955a18ac9.png)

![Continuous Delivery workflow Jobs from merge to staging (feature to staging)](https://cdn.hashnode.com/res/hashnode/image/upload/v1733159329441/cb7e26a9-7a20-4b1b-9869-e00facc695c1.png)

![Continuous Delivery workflow steps from merge to staging (feature to staging)](https://cdn.hashnode.com/res/hashnode/image/upload/v1733160506355/4682afe3-bb04-405d-af4e-fd9bd3494659.png)

This will allow you to monitor the status of the CD pipeline and check if there are any issues during deployment.

If you look at the CD steps and workflow, you'll see that the step to deploy the application to the **production** environment was skipped, while the step to deploy to the **staging** environment was executed.

#### **Continuous Delivery (CD) pipeline – what’s going on:**

The **Continuous Delivery (CD) Pipeline** automates the process of deploying the application to Google Cloud Run (testing environment). This workflow is triggered by a push to the `staging` branch, which happens after the changes from the feature branch are merged into `staging`. It can also be manually triggered via `workflow_dispatch` or upon a new release being published.

The pipeline consists of multiple stages:

1.  **Test Job:** The pipeline begins by setting up the environment and running tests using the `npm test` command. If the tests pass, the process moves forward.
    
2.  **Build Job:** The next step builds the Docker image of the Node.js application, tags it, and then pushes it to Docker Hub.
    
3.  **Deployment to GCP:** After the image is pushed, the workflow authenticates to Google Cloud and deploys the application. If the event is a release (that is, a push to the `main` branch), the application is deployed to the production environment. If the event is a push to `staging`, the app is deployed to the staging environment.
    

The CD process ensures that any changes made to the `staging` branch are automatically tested, built, and deployed to the staging environment, ready for further validation. When a release is published, it will trigger deployment to production, ensuring your app is always up to date.

### Accessing the Deployed Application in the Staging Environment on Google Cloud Run 🌐

Once the deployment to Google Cloud Run is successfully completed, you'll want to access your application running in the **staging** environment. Follow these steps to find and visit your deployed application:

#### 1\. **Navigate to the Google Cloud Console**

Open the Google Cloud Console in your browser by visiting [https://console.cloud.google.com][23]. If you're not already signed in, make sure you log in with your Google account.

#### 2\. **Go to the Cloud Run Dashboard**

In the Google Cloud Console, use the Search bar at the top or navigate through the left-hand menu: Go to **Cloud Run** (you can type this into the search bar, or find it under **Products & services** > **Compute** > **Cloud Run**). Click on **Cloud Run** to open the Cloud Run dashboard.

#### 3\. **Select Your Staging Service**

In the **Cloud Run dashboard**, you should see a list of all your services deployed across various environments. Find the service associated with the staging environment. The name should be similar to what you defined in your workflow (for example, `gcr-ci-cd-staging`).

![Google Cloud Run service for the staging environment](https://cdn.hashnode.com/res/hashnode/image/upload/v1733159635861/4ac895d2-5071-4d3f-9ed1-5af2bcca8835.png)

#### 4\. **Access the Service URL**

Once you've selected your staging service, you’ll be taken to the **Service details page**. This page provides all the important information about your deployed service.  
On this page, look for the **URL** section under the **Service URL** heading. The URL will look something like: `https://gcr-ci-cd-staging-<unique-id>.run.app`.

#### 5\. **Visit the Application**

Click on the **Service URL**, and it will open your staging environment in a new tab in your browser. You can now interact with your application as if it were live, but in the **staging environment**.

![Google Cloud Run service URL for the staging environment](https://cdn.hashnode.com/res/hashnode/image/upload/v1733160050763/b097e647-bf6d-442e-87df-fc7d82d3585c.png)

## **Merge the Staging Branch into the Main Branch (Continuous Integration and Continuous Deployment) 🌐**

In this section, we'll take the updates in the staging branch, merge them into the main branch, and trigger the CI/CD pipeline. This process not only ensures your changes are production-ready but also deploys them to the production/live environment. 🚀

### Step 1: Push Local Changes and Open a Pull Request

**Why?** The first step involves merging the staging branch into the main branch. Just like in the previous Continuous Delivery process, this ensures the integration of thoroughly tested updates.

Here’s how to do it:

First, visit the GitHub repository where your project is hosted.

Then go to the **Pull Requests** tab. Click **New Pull Request**. Choose **staging** as the source branch (base branch) and **main** as the target branch. Add a clear title and description for the Pull Request, explaining why these updates are ready for production deployment.

### Step 2: Continuous Integration (CI) Pipeline Execution

After merging the pull request, the **Continuous Integration (CI)** pipeline will automatically execute to validate that the changes are still stable when integrated into the **main branch**.

#### Pipeline Steps:

-   **Code Checkout**: The workflow fetches the latest code from the **main branch**.
    
-   **Dependency Installation**: The pipeline installs all required dependencies.
    
-   **Testing**: Automated tests are run to validate the application's stability.
    

### Step 3: Create a New Release

The Continuous Deployment (CD) workflow to deploy to the production environment is triggered by the creation of a new release from the main branch.

Let’s walk through the steps to create a release.

On your GitHub repository page, click on the **Releases** section (located under the **Code** tab).

![Navigate to the Release page in theGitHub repo](https://cdn.hashnode.com/res/hashnode/image/upload/v1733338781623/c21e7f03-5381-47f9-8807-b5a3360245ad.png)

Next, click **Draft a new release**. Set the **Target** branch to **main**. Enter a **Tag version** (for example, `v1.0.0`) following semantic versioning. Add a **Release title** and an optional description of the changes.

Then, click **Publish Release** to finalize.

![Create a new release in the GitHub repo](https://cdn.hashnode.com/res/hashnode/image/upload/v1733161473858/6e14214c-31fb-49b3-9dff-a719b9ec1d40.png)

#### Why run the Continuous Deployment pipeline on release instead of on push? 🤔

In our setup, we decided not to trigger the Continuous Deployment (CD) pipeline every time changes are pushed to the main branch. Instead, we trigger it only when a new release is created. This gives the team more control over when updates are deployed to the production environment.

Imagine a scenario where developers are working on new features—they may push changes to the main branch as part of their regular workflow, but these features might not be complete or ready for users yet. Automatically deploying every push could accidentally expose unfinished features to your users, which can be confusing or disruptive.

By requiring a release to trigger the deployment, the team gets a chance to finalize and polish all changes before they go live.

For example, developers can test new features in the staging environment, fix any issues, and merge those changes into the main branch without worrying about them immediately appearing in production. This workflow ensures that only well-tested and complete features make their way to your end users.

Ultimately, this approach helps maintain a smooth user experience. Instead of seeing half-built features or unexpected changes, users only see updates that are ready and functional. It also gives the team the flexibility to push changes to the main branch frequently—preventing merge conflicts and making collaboration easier—while keeping control over what gets deployed live. 🚀

### Step 4: Navigate to the Actions Page

After the release is published, the CD pipeline for the production environment is triggered. To monitor this repeat the process taken for the Continuous Delivery workflow, follow these steps:

1.  **Go to the GitHub Actions tab**: In your GitHub repository, click on the **Actions** tab.
    
2.  **Locate the deployment workflow**: Look for the **CD Pipeline to Google Cloud Run (staging and production)** workflow. You’ll notice that the workflow has been triggered on the **main branch** due to the push event.
    
3.  **Open the workflow details**: Click on the workflow to view detailed steps, logs, and statuses for each part of the deployment process.
    

This time, the Continuous delivery workflow deploys the application to the **production**/**live** environment.

![Continuous Deployment workflow from merge to main (staging to main)](https://cdn.hashnode.com/res/hashnode/image/upload/v1733164741827/303cd415-5bb9-4149-aa5d-7088d0eab582.png)

### Step 5: Access the Live Application

Once the deployment is complete, go to Google Cloud Console at [https://console.cloud.google.com][24].

Navigate to **Cloud Run** from the menu. Select the service corresponding to the **production environment** (for example, `gcr-ci-cd-app`).

Locate the **Service URL** in the service details page. Open the URL in your browser to access the live application.

And now, congratulations – you’re done!

## Conclusion 🌟

In this article, we explored how to build and automate a CI/CD pipeline for a Node.js application, using GitHub Actions, Docker Hub, and Google Cloud Run.

We set up workflows to handle Continuous Integration by testing and integrating code changes and Continuous Delivery to deploy those changes to a staging environment. We also containerized our app using Docker and deployed it seamlessly to Google Cloud Run.

Finally, we implemented Continuous Deployment, ensuring updates to the production environment happen only when a release is created from the main branch.

This approach gives teams the flexibility to push and test incomplete features without impacting end users. By following these steps, you've built a robust pipeline that makes deploying your application smoother, faster, and more reliable.

### Study Further 📚

If you would like to learn more about Continuous Integration, Delivery, and Deployment you can check out the courses below:

-   [**Continuous Integration and Continuous Delivery (CI/CD) (from IBM Coursera**][25]**)**
    
-   [**GitHub Actions - The Complete Guide (from Udemy**][26]**)**
    
-   [**Learn CI/CD by buliding a project (freeCodeCamp tutorial)**][27]
    

### About the Author 👨‍💻

Hi, I’m Prince! I’m a software engineer passionate about building scalable applications and sharing knowledge with the tech community.

If you enjoyed this article, you can learn more about me by exploring more of my blogs and projects on my [LinkedIn profile][28]. You can find my [LinkedIn articles here][29]. And you can [visit my website][30] to read more of my articles as well. Let’s connect and grow together! 😊

[1]: #heading-what-is-continuous-integration-deployment-and-delivery
[2]: #heading-differences-between-continuous-integration-continuous-delivery-and-continuous-deployment
[3]: #heading-how-to-set-up-a-nodejs-project-with-a-web-server-and-automated-tests
[4]: #heading-how-to-create-a-github-repository-to-host-your-codebase
[5]: #heading-how-to-set-up-the-ci-and-cd-workflows-within-your-project
[6]: #heading-set-up-a-docker-hub-repository-for-the-projects-image-and-generate-an-access-token-for-publishing-the-image
[7]: #heading-create-a-google-cloud-account-project-and-billing-account
[8]: #heading-create-a-google-cloud-service-account-to-enable-deployment-of-the-nodejs-application-to-google-cloud-run-via-the-cd-pipeline
[9]: #heading-create-the-staging-branch-and-merge-the-feature-branch-into-it-continuous-integration-and-continuous-delivery
[10]: #heading-merge-the-staging-branch-into-the-main-branch-continuous-integration-and-continuous-deployment
[11]: #heading-conclusion
[12]: https://nodejs.org/en/download/package-manager
[13]: https://git-scm.com/downloads
[14]: http://localhost:5000/
[15]: https://github.com/
[16]: https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows
[17]: https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/using-jobs-in-a-workflow
[18]: https://hub.docker.com/
[19]: https://console.cloud.google.com
[20]: https://console.cloud.google.com/
[21]: https://console.cloud.google.com/
[22]: https://console.cloud.google.com/
[23]: https://console.cloud.google.com
[24]: https://console.cloud.google.com
[25]: https://www.coursera.org/learn/continuous-integration-and-continuous-delivery-ci-cd
[26]: https://www.udemy.com/course/github-actions-the-complete-guide/?couponCode=CMCPSALE24
[27]: https://www.freecodecamp.org/news/what-is-ci-cd/
[28]: https://www.linkedin.com/in/prince-onukwili-a82143233/
[29]: https://www.linkedin.com/in/prince-onukwili-a82143233/details/publications/
[30]: https://prince-onuk.vercel.app/achievements#articles