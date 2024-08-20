---
title: Conda Remove Environment – How to Delete an Env
date: 2024-08-20T14:16:52.843Z
author: Ihechikara Abba
authorURL: https://www.freecodecamp.org/news/author/Ihechikara/
originalURL: https://www.freecodecamp.org/news/how-to-delete-an-environment-in-conda/
posteditor: ""
proofreader: ""
---

Conda is an open-source package management and environment management system that can be used to create different, isolated coding environments.

<!-- more -->

With Conda, you can create separate environments for specific projects. You can have one environment for machine learning and another environment for data analytics.

Each environment can have its own packages. Packages installed in one environment can't be accessed in a different environment.

In this article, you'll learn how to delete an environment in Conda using built-in Conda commands.

## How to Delete an Environment in Conda

You can get a list of existing Conda environments using the command below:

```
conda env list
```

Before you delete an environment in Conda, you should first deactivate it. You can do that using this command:

```
conda deactivate
```

Once you've deactivated the environment, you'd be switched back to the `base` environment.

To delete an environment, run the command below:

```
conda remove --name ENV_NAME --all
```

`ENV_NAME` denotes the name of the environment to be removed/deleted. Make sure you deactivate an environment before removing it by running the `conda deactivate` command.

The `--all` flag removes all the packages installed in that environment.

Here's a summary of the steps involved in deleting an environment in Conda:

-   Deactivate the environment using the `conda deactivate` command.
-   Delete the environment using the `conda remove --name ENV_NAME --all` command.

## Summary

In this article, we talked about Conda. A package and environment management system that is used to install and manage separate coding environments and their packages.

We saw different commands that can be used to deactivate and remove an environment in Conda.

Happy coding!