```markdown
---
title: C#类手册 – 类的类型与代码示例
date: 2025-07-17T02:15:02.960Z
author: Isaiah Clifford Opoku
authorURL: https://www.freecodecamp.org/news/author/Clifftech/
originalURL: https://www.freecodecamp.org/news/classes-in-c-sharp-handbook-with-examples/
posteditor: ""
proofreader: ""
---

类是 C# 中面向对象编程的基本构建块。它们允许通过将相关的数据和功能分组来创建可重用和模块化的代码。

<!-- more -->

不同类型的类服务于各种目的。例如，当构建应用程序时，组织逻辑以使代码更易于导航非常有用。

您可以将代码分组或分离到类中，并通过继承，根据需要使用不同的类。类有助于封装代码，使您能够在应用程序的其他部分重用您的逻辑。类具有多种功能，我们将在此处详细探讨其中一些。

在本指南中，我们将探讨 C# 中的各种类类型，以及如何使用它们来创建高效且易于维护的代码。

## **前提条件**

在继续之前，您应该具备以下条件：

1.  **C# 的基础知识**：您应该了解 C# 语法和基本编程结构，如变量、循环和条件语句。
    
2.  **面向对象编程 (OOP) 概念的熟悉程度**：您应该知道如何使用类、对象、继承、多态、封装和抽象。
    
3.  **访问修饰符的熟悉程度**：您应该了解公共、私有、内部和保护访问修饰符。
    
4.  **C# IDE/环境的使用经验**：您应该能够使用像 Visual Studio 这样的 IDE 来编写和运行 C# 程序。
    

如果您想了解更多关于 C# 的信息，可以查看我的 YouTube 频道：[CliffTech][1]。

## 目录

-   [C# 中的静态类][2]
    
-   [C# 中的密封类][3]
    
-   [C# 中的具体类][4]
    
-   [C# 中的抽象类][5]
    
-   [C# 中的单例类][6]
    
-   [C# 中的泛型类][7]
    
-   [C# 中的内部类][8]
    
-   [C# 中的嵌套类][9]
    
-   [C# 中的部分类][10]
    
-   [结论][11]
    

我们要讨论的第一种类是静态类。让我们深入了解。

## C# 中的静态类

静态类是 C# 中的一种特殊类型的类，旨在提供一组不依赖于实例数据的相关工具方法和属性。

C# 中的静态类是一种独特类型的类，旨在容纳一组不依赖于实例数据的相关工具方法和属性。

与常规类不同，静态类不能实例化，并且仅包含静态成员。这个特性意味着它们不能被继承，非常适合组织不需要面向对象编程特性的无状态方法。

本质上，当我们指无状态分组时，意味着无需创建实例即可调用静态方法——您可以直接使用类或方法名称。这种方法为管理工具函数提供了一种清晰高效的方式，提升了代码的组织性和可访问性。

### C# 中静态类的示例

以下是 C# 中静态类的示例：

```csharp
namespace StaticClasses
{
// 定义一个静态类
    public static class MathUtils
    {
        // 静态方法，用于相加两个数字
        public static int Add(int a, int b)
        {
            return a + b;
        }

        // 静态方法，用于相减两个数字
        public static int Subtract(int a, int b)
        {
            return a - b;
        }

       // 静态方法，用于相乘两个数字
        public static int Multiply(int a, int b)
        {
            return a * b;
        }
    }
}
```

在这个例子中：

-   `MathUtils` 类被定义为 `静态`，这意味着它不能被实例化。
    
-   包含三个静态方法：`Add`、`Subtract` 和 `Multiply`。
    
-   这些方法可以直接在 `MathUtils` 类上调用，无需创建实例。
    

在使用之前，您需要在 `Program.cs` 中调用它。当您创建任何 C# 应用程序时，入口点是 `Program.cs`。您需要到那里并确保调用这些类以便能够执行它们。这也是我们在接下来的部分中将要做的。

### 如何在 `Program.cs` 中使用静态方法

现在，您可以按如下方式使用定义在 `MathUtils` 类中的静态方法：

```csharp

 // program.cs
namespace StaticClasses
{
    class Program
    {
        static void Main(string[] args)
        {
             // 调用 MathUtils 类中的静态方法
            int sum = MathUtils.Add(5, 3);
            // 调用 MathUtils 类中的静态方法 Subtract
            int difference = MathUtils.Subtract(5, 3);

            // 调用 MathUtils 类中的静态方法 Multiply
            int product = MathUtils.Multiply(5, 3);

            // 显示 sum 方法的结果
            Console.WriteLine($"Sum: {sum}"); // 输出: 8
            // 显示 difference 方法的结果
            Console.WriteLine($"Difference: {difference}"); // 输出: 2
            // 显示 product 方法的结果
            Console.WriteLine($"Product: {product}");  // 输出: 15
        }
    }
}
```
```

为了决定何时在 C# 中使用静态类或静态方法，请考虑以下指南：

1.  **在以下情况下使用静态类：**
    
    -   需要一个不需要任何实例数据的实用工具或助手方法集合。
        
    -   方法和属性是无状态的，可以在不创建对象的情况下全局访问。
        
    -   想要将相关功能组合在一起，而不与特定对象状态关联。
        
    -   需要确保类无法被实例化或继承。
        
2.  **在以下情况下使用静态方法：**
    
    -   类主要是基于实例的，但需要一些不依赖实例数据的方法。
        
    -   方法执行一个独立于任何对象状态的任务，并且可以在没有实例的情况下执行。
        
    -   想要在类中提供一个实用函数，而不需要创建该类的对象即可访问。
        

通过适当地使用静态类和方法，可以增强代码组织、通过避免不必要的对象创建来提高性能，并确保特定功能在应用程序中可以轻松访问。

### 关于 C# 中静态类的重要点

-   **不能被实例化**：无法从静态类创建对象。
    
-   **仅限静态成员**：静态类只能拥有静态成员。不支持实例方法或字段。
    
-   **默认是密封的**：静态类自动为密封类，不能被继承。
    
-   **实用工具和辅助方法**：静态类通常用于将不需要对象状态的相关实用工具或辅助方法进行分组。
    

静态类帮助高效、简洁地组织和访问实用方法和属性，使其对于创建高效和可维护代码很重要。

## C# 中的密封类

密封类是 C# 中一种特殊类型的类，不能被继承。可以使用它们来阻止其他类派生，可以用于创建不可变类型或确保类的行为保持不变。

通过密封类，可以确保类不能被修改或扩展，对于希望提供特定实现而不允许进一步更改的场景非常有用。

### C# 中密封类的示例

以下是一个 C# 中密封类的示例：

```
namespace SealedClasses
{

    // 定义一个抽象类
    public abstract class Shape
    {
        // 计算面积的抽象方法
        public abstract double CalculateArea();
    }

     // 定义一个密封类
    public sealed class Rectangle : Shape
    {

        // 属性
        public double Width { get; }
        public double Height { get; }

        // 构造函数
        public Rectangle(double width, double height)
        {
            Width = width;
            Height = height;
        }

       // 实现 CalculateArea 方法
        public override double CalculateArea()
        {
            return Width * Height;
        }
    }
}
```

在这个示例中：

-   `Shape` 类是一个抽象基类，带有一个抽象方法 `CalculateArea()`。
    
-   `Rectangle` 类继承了 `Shape` 并提供了 `CalculateArea()` 的实现。
    
-   `Rectangle` 类是密封的，这意味着它不能被继承。这确保了类的实现不能被修改或扩展。
    

### 如何在 Program.cs 中使用密封的 Rectangle 类

以下是如何在 `Program.cs` 文件中使用 `Rectangle` 类：

```
namespace SealedClasses
{
    class Program
    {
        static void Main(string[] args)
        {
            Rectangle rectangle = new Rectangle(5, 3);
            double area = rectangle.CalculateArea();

            Console.WriteLine($"Area of the rectangle: {area}"); // 输出：Area of the rectangle: 15
        }
    }
}
```

在这个示例中，`Rectangle` 类被密封以确保其行为不能通过继承来更改。这保证了 `Rectangle` 类的 `CalculateArea()` 实现保持不变，有助于保持一致的行为。

### 何时使用密封类

密封类在以下情况下特别有用：

1.  **框架开发**：在开发框架或库时，可以使用密封类锁定某些不打算由用户扩展的类。这有助于维护对框架行为的控制，并确保用户不会通过扩展这些类引入错误或不一致性。
    
2.  **防止继承**：如果类被设计为特定实现，不需要进一步定制或扩展，通过密封可以阻止其他开发人员创建可能改变其预期功能的子类。
    
3.  **最终确定类设计**：当一个类的设计达到一个被认为完成的点，并且不再预期有进一步的更改或扩展时，密封它可以向其他开发人员发出信号，该类应按原样使用。
    
4.  **避免重写**：在某些情况下，重写方法可能导致不正确行为或安全问题，密封类确保其方法不能被重写，从而保留了原始逻辑和功能。
    


```markdown
-   **无继承**：密封类无法被继承，确保其行为保持不变。

-   **防止修改**：它们阻止进一步的继承，避免意外的更改或扩展。

-   **不可变且特定**：密封类适用于创建不可变类或当您需要特定且不可更改的实现时。
    

### 密封类与静态类的比较

您可能会想，既然静态类已是密封的，为何还需要密封类。关键的区别在于：

-   **静态类**是密封的，无法被实例化。它们用于分组静态方法和属性。

-   **密封类**可以被实例化，但不能被继承。这允许创建不会被进一步子类化的对象。
    

密封类在创建可直接使用的类时提供灵活性，而无需担心通过继承进行修改的风险。

## C# 中的具体类

具体类是 C# 中`面向对象编程`的重要组成部分。它们是完全实现的类，可以直接用来创建对象。

与`抽象类`或`接口`不同，具体类完全实现了所有方法和属性，使它们在大多数 C# 应用程序中既通用又基础。

一个具体类不是抽象的。它包含了所有成员（方法、属性、字段等）的完整实现，并可以用于创建对象。这些类在应用程序中代表现实世界的实体或概念，封装了数据（存储在字段或属性中）和行为（由方法定义）。

### 示例：在 C# 中定义具体类

以下是一个 C# 中具体类的简单示例：

```csharp
// 定义一个具体类
public class Animal
{
    public void Speak()
    {
        Console.WriteLine("The animal makes a sound.");
    }
}

// 定义一个继承自 Animal 类的派生类
public class Dog : Animal
{
    public void Bark()
    {
        Console.WriteLine("The dog barks.");
    }
}
```

在这个示例中，`Animal` 类是一个具有 `Speak` 方法的具体类，代表任何动物发出的通用声音。`Dog` 类继承自 `Animal`，并添加了一个 `Bark` 方法来表示狗特有的声音。`Animal` 和 `Dog` 都是具体类，因为它们可以被实例化并用于创建对象。

### 如何实例化和使用具体类

以下是在 `Program.cs` 文件中如何使用 `Dog` 类：

```csharp
// program.cs
class Program
{
    static void Main(string[] args)
    {
        // 创建 Dog 类的实例
        Dog myDog = new Dog();

        // 调用继承的方法
        myDog.Speak(); // 输出: The animal makes a sound.

        // 调用在 Dog 类中定义的方法
        myDog.Bark();  // 输出: The dog barks.
    }
}
```

在这个示例中，我们创建了一个名为 `myDog` 的 `Dog` 类实例。首先调用从 `Animal` 类继承的 `Speak` 方法，然后调用 `Dog` 类的 `Bark` 方法。这展示了具体类如何包括继承的和独特的行为。

### 实际例子：产品的具体类

为了说明具体类的实际应用，考虑以下 `Product` 类的示例：

```csharp
// 定义产品的具体类
public class Product
{
    // 数据属性
    public string Name { get; set; }
    public decimal Price { get; set; }

    // 显示产品信息的方法
    public void DisplayInfo()
    {
        Console.WriteLine($"Product: {Name}, Price: {Price:C}");
    }
}
```

这个 `Product` 类是一个具有属性 `Name` 和 `Price` 的具体类，用于存储有关产品的信息。`DisplayInfo` 方法提供了一种显示产品详情的方式。

#### 如何使用 `Product` 类

以下是如何使用 `Product` 类：

```csharp
class Program
{
    static void Main(string[] args)
    {
        // 创建 Product 类的实例
        Product product = new Product
        {
            Name = "Laptop",
            Price = 1299.99m
        };

        // 显示产品信息
        product.DisplayInfo(); // 输出: Product: Laptop, Price: $1,299.99
    }
}
```

在这个场景中，`Product` 类被用来创建一个 `product` 对象。调用 `DisplayInfo` 方法以显示产品的名称和价格。这展示了具体类如何用来建模和处理现实世界的数据。

### 关于具体类的关键点

-   **可实例化**：具体类可以实例化，允许您创建代表应用程序中特定实体或概念的对象。

-   **完整实现**：具体类提供所有方法和属性的完整实现，与抽象类或接口不同。

-   **常用**：它们是 C# 中最常用的类类型，用于定义具有特定行为和数据的对象。
    

具体类对 C# 开发至关重要，使您能够在应用程序中定义和使用真实世界实体的对象。有效地使用具体类对于构建健壮的面向对象软件至关重要。
```

在 C# 中，抽象类是一项强大的特性，它允许你为其他类定义一个蓝图，而不提供完整的实现。它们作为基类，不能直接被实例化，但可以被其他类继承，而这些类将为其中定义的抽象方法提供具体实现。这种设计有助于在相关类之间保持一致性，同时允许在实现某些行为时的灵活性。

### "实例化"是什么意思？

在探索抽象类之前，让我们先澄清一下“实例化”一个类是什么意思。实例化是从类创建一个对象的过程。当你在 C# 中使用 `new` 关键字时，你是在创建该类的一个实例（或对象）。

但是抽象类不能被直接实例化。它们必须被一个提供抽象方法实现的非抽象（具体）类继承。

### 理解抽象类和抽象方法

**抽象类**是无法直接创建对象的类。它们作为其他类的模板。它们可以包含完整的方法和没有方法体的方法（抽象方法）。抽象类有助于为相关类设置一个公共接口和共享行为。

**抽象方法**是指抽象类中没有方法体的方法。任何从抽象类继承的非抽象类都必须为这些方法提供方法体。这确保了所有子类具有一致的接口。

### 现实世界的例子：银行账户管理

让我们通过一个现实世界的例子来说明 C# 中的抽象类和抽象方法的概念。

```csharp
using System;

// 定义一个抽象类
namespace AbstractClasses
{
    // 抽象类
    public abstract class BankAccount
    {
        // 属性
        public string AccountNumber { get; private set; }
        public decimal Balance { get; protected set; }

        // 构造函数
        public BankAccount(string accountNumber, decimal initialBalance)
        {
            AccountNumber = accountNumber;
            Balance = initialBalance;
        }

        // 抽象方法
        public abstract void Deposit(decimal amount);
        public abstract void Withdraw(decimal amount);
        public abstract void DisplayAccountInfo();
    }

    // 派生类：SavingsAccount
    public class SavingsAccount : BankAccount
    {
        private decimal interestRate;

        public SavingsAccount(string accountNumber, decimal initialBalance, decimal interestRate)
            : base(accountNumber, initialBalance)
        {
            this.interestRate = interestRate;
        }

        // 实现抽象方法
        public override void Deposit(decimal amount)
        {
            Balance += amount;
            Console.WriteLine($"存入 {amount} 到储蓄账户 {AccountNumber}。新余额：{Balance}");
        }

        public override void Withdraw(decimal amount)
        {
            if (amount > Balance)
            {
                throw new InvalidOperationException("资金不足。");
            }
            Balance -= amount;
            Console.WriteLine($"从储蓄账户 {AccountNumber} 取出 {amount}。新余额：{Balance}");
        }

        public override void DisplayAccountInfo()
        {
            Console.WriteLine($"储蓄账户 {AccountNumber} - 余额：{Balance}，利率：{interestRate}%");
        }
    }

    // 派生类：CheckingAccount
    public class CheckingAccount : BankAccount
    {
        private decimal overdraftLimit;

        public CheckingAccount(string accountNumber, decimal initialBalance, decimal overdraftLimit)
            : base(accountNumber, initialBalance)
        {
            this.overdraftLimit = overdraftLimit;
        }

        // 实现抽象方法
        public override void Deposit(decimal amount)
        {
            Balance += amount;
            Console.WriteLine($"存入 {amount} 到支票账户 {AccountNumber}。新余额：{Balance}");
        }

        public override void Withdraw(decimal amount)
        {
            if (amount > Balance + overdraftLimit)
            {
                throw new InvalidOperationException("超出透支限额。");
            }
            Balance -= amount;
            Console.WriteLine($"从支票账户 {AccountNumber} 取出 {amount}。新余额：{Balance}");
        }

        public override void DisplayAccountInfo()
        {
            Console.WriteLine($"支票账户 {AccountNumber} - 余额：{Balance}，透支限额：{overdraftLimit}");
        }
    }
}
```

在这个示例中，`BankAccount` 类是一个抽象类，它为不同类型的银行账户定义了一个公共接口。它包括像 `Deposit`、`Withdraw` 和 `DisplayAccountInfo` 这样的抽象方法，任何继承自 `BankAccount` 的类都必须实现这些方法。

`SavingsAccount` 和 `CheckingAccount` 类继承自 `BankAccount`，并为这些抽象方法提供具体实现。这样的设计强制每一种类型的银行账户必须实现存款、取款和显示信息功能，同时允许每种账户类型根据其特定类型合理地实现这些功能。

让我们看看如何在 `Program.cs` 文件中使用 `SavingsAccount` 和 `CheckingAccount` 类。

```
namespace AbstractClasses
{
    class Program
    {
        static void Main(string[] args)
        {
            // 创建一个储蓄账户
            BankAccount savings = new SavingsAccount("SA123", 1000, 1.5m);
            // 创建一个支票账户
            BankAccount checking = new CheckingAccount("CA123", 500, 200);

            // 在储蓄账户进行存款和取款操作
            savings.DisplayAccountInfo();

           // 在储蓄账户进行存款和取款操作
            savings.Deposit(200);

            savings.Withdraw(100);
            // 显示更新后的账户信息
            savings.DisplayAccountInfo();

            checking.DisplayAccountInfo();

             // 在支票账户进行存款和取款操作
            checking.Deposit(300);

            checking.Withdraw(600);

            // 显示更新后的账户信息
            checking.DisplayAccountInfo();

            try
            {
                checking.Withdraw(200);
            }
            catch (InvalidOperationException ex)
            {
                Console.WriteLine($"错误: {ex.Message}");
            }

            checking.DisplayAccountInfo();
        }
    }
}
```

这个程序会产生以下输出：

```
储蓄账户 SA123 - 余额: 1000, 利率: 1.5%
存款 200 到储蓄账户 SA123. 新余额: 1200
从储蓄账户 SA123 取款 100. 新余额: 1100
储蓄账户 SA123 - 余额: 1100, 利率: 1.5%
支票账户 CA123 - 余额: 500, 透支限额: 200
存款 300 到支票账户 CA123. 新余额: 800
从支票账户 CA123 取款 600. 新余额: 200
支票账户 CA123 - 余额: 200, 透支限额: 200
从支票账户 CA123 取款 200. 新余额: 0
支票账户 CA123 - 余额: 0, 透支限额: 200
```

在这个例子中，创建了 `SavingsAccount` 和 `CheckingAccount` 对象，并调用了抽象方法 `Deposit`、`Withdraw` 和 `DisplayAccountInfo`。抽象类 `BankAccount` 确保了这两种账户类型都有这些方法，而派生类提供了具体的实现功能。

### 关于抽象类需要记住的关键点

-   **无法实例化**：你不能直接创建一个抽象类的实例。必须由子类继承并为抽象方法提供实现。
    
-   **包含抽象方法**：抽象类中的抽象方法没有具体实现。任何继承自抽象类的非抽象类都必须实现这些方法。
    
-   **定义通用接口**：抽象类为相关类设置了一个通用接口，确保它们的一致性，同时允许不同的实现。
    

抽象类在 C# 中很重要。它们帮助在相关类中强制执行一个结构，但仍允许具体的细节。通过使用抽象类，可以让代码更有组织性，更易于维护和扩展。

## C# 中的单例类

单例类是一种设计模式，限制类的实例化为单一实例。这在需要跨应用程序共享的单一资源时特别有用，例如配置管理器、日志服务或数据库连接。

### 为什么在 C# 中使用单例类？

假设您有一个类负责管理数据库连接。您不希望这个类的多个实例同时存在，因为这可能会导致资源管理问题或数据不一致。单例类确保只创建一个实例，并提供一个全局访问点。

### 示例：定义一个单例类

现在让我们看看如何在 C# 中实现一个单例类：

```
// 定义一个单例类
public class Singleton
{
    private static Singleton instance;
    private static readonly object lockObject = new object();

    // 私有构造函数防止类外实例化
    private Singleton()
    {
    }

    // 公共属性以访问类的单个实例
    public static Singleton Instance
    {
        get
        {
            // 确保线程安全
            lock (lockObject)
            {
                if (instance == null)
                {
                    instance = new Singleton();
                }
            }
            return instance;
        }
    }

    // 示例方法以演示单例实例
    public void PrintMessage()
    {
        Console.WriteLine("Hello, I am a singleton class.");
    }
}
```

在这个例子中，定义了一个 `Singleton` 类并使用私有构造函数，该构造函数防止其他类创建新实例。静态属性 `Instance` 返回类的单一实例，如果尚不存在则创建。`lockObject` 确保类线程安全，意味着即使在多线程环境中，也只会创建一个实例。

`PrintMessage` 方法只是一个简单的示例，展示了单例实例可以像其他类实例一样使用。

现在让我们看看如何在应用程序中使用这个 Singleton 类：

```
class Program
{
    static void Main(string[] args)
    {
        // 获取 Singleton 类的单个实例
        Singleton singleton1 = Singleton.Instance;
        singleton1.PrintMessage(); // 输出: Hello, I am a singleton class.

        // 再次获取实例
        Singleton singleton2 = Singleton.Instance;

        // 检查两个实例是否相同
        Console.WriteLine(singleton1 == singleton2); // 输出: True
    }
}
```

在这个例子中，我们获取了两次 Singleton 实例。因为该类是一个 Singleton，所以 `singleton1` 和 `singleton2` 都指向同一个实例。`==` 运算符通过返回 `true` 来确认这点。

### 如何扩展 Singleton 示例

您可以扩展 Singleton 模式以处理更复杂的场景。例如，可以用配置数据初始化 Singleton 实例：

```
public class ConfigurationManager
{
    private static ConfigurationManager instance;
    private readonly Dictionary<string, string> settings = new Dictionary<string, string>();

    private ConfigurationManager()
    {
        // 模拟从配置文件加载设置
        settings["AppName"] = "MyApplication";
        settings["Version"] = "1.0.0";
    }

    public static ConfigurationManager Instance
    {
        get
        {
            if (instance == null)
            {
                instance = new ConfigurationManager();
            }
            return instance;
        }
    }

    public string GetSetting(string key)
    {
        return settings.ContainsKey(key) ? settings[key] : null;
    }
}
```

这里，`ConfigurationManager` 是一个 Singleton 类，用于加载和管理应用程序设置。`GetSetting` 方法允许您检索特定配置值，从而确保应用程序的所有部分使用相同的设置。

### 关于 Singleton 类的关键点

-   **单个实例**：Singleton 类确保在应用程序中只有一个该类的实例。
    
-   **全局访问**：Singleton 提供对实例的全局访问点，使其在应用程序的不同部分中易于使用。
    
-   **线程安全**：在多线程环境中，确保您的 Singleton 是线程安全的，以避免创建多个实例。
    
-   **使用场景**：Singleton 的常见用例包括管理配置、记录服务和数据库连接。
    

Singleton 类是软件工程中的一个基本设计模式，提供了一种简单而强大的方式来管理共享资源。理解并正确实现 Singleton 可以帮助您编写更高效和可维护的代码。

## C# 中的泛型类

C# 中的泛型类提供了一种创建可重用和类型安全代码的强大方式。通过使用泛型类，您可以设计一个可以与任何数据类型一起使用的单个类，从而无需实现特定于类型的解决方案。这使您的代码更加灵活并减少冗余。

### 为什么使用泛型类？

想象一下需要实现一个存储整数的栈。之后，您可能需要另一个存储字符串的栈。

与其编写两个独立的类，不如编写一个可以处理这两种数据类型的泛型栈类，以及其他可能需要的类型。泛型类有助于避免代码重复，使您的代码库更易于维护。

### 示例：定义泛型类

让我们看看一个简单的泛型栈类的实现：

```
// 定义一个泛型类
public class Stack<T>
{
    private List<T> items = new List<T>();

    public void Push(T item)
    {
        items.Add(item);
    }

    public T Pop()
    {
        if (items.Count == 0)
        {
            throw new InvalidOperationException("The stack is empty.");
        }
        T item = items[items.Count - 1];
        items.RemoveAt(items.Count - 1);
        return item;
    }

    public T Peek()
    {
        if (items.Count == 0)
        {
            throw new InvalidOperationException("The stack is empty.");
        }
        return items[items.Count - 1];
    }

    public bool IsEmpty()
    {
        return items.Count == 0;
    }
}
```

在这个例子中，`Stack<T>` 类是用类型参数 `T` 定义的。这个类型参数是一个占位符，表示栈将存储的数据类型。类包含诸如 `Push` 方法用于向栈添加项，`Pop` 方法用于移除并返回顶部项，`Peek` 方法用于查看顶部项而不移除它，和 `IsEmpty` 方法用于检查栈是否为空等方法。

由于 `Stack<T>` 是泛型的，您可以用任意数据类型使用它，无论是 `int`、`string` 还是自定义类。

### 如何在 `Program.cs` 中使用 Stack 类

让我们看看如何在程序中使用这个泛型 `Stack` 类：

```
class Program
{
    static void Main(string[] args)
    {
        // 整型栈
        Stack<int> intStack = new Stack<int>();
        intStack.Push(10);
        intStack.Push(20);
        Console.WriteLine(intStack.Pop()); // 输出: 20
        Console.WriteLine(intStack.Peek()); // 输出: 10

        // 字符串栈
        Stack<string> stringStack = new Stack<string>();
        stringStack.Push("Hello");
        stringStack.Push("World");
        Console.WriteLine(stringStack.Pop()); // 输出: World
        Console.WriteLine(stringStack.Peek()); // 输出: Hello
    }
}
```

在这个例子中，我们创建了两个 `Stack` 类的实例：一个存储整数，另一个存储字符串。泛型的灵活性使我们能够使用相同的类来处理不同的数据类型，使我们的代码更具重复使用性和简洁性。

### 如何扩展泛型类

让我们更进一步，扩展我们的 `Stack` 类以包括一个返回所有项为数组的方法：

```
public T[] ToArray()
{
    return items.ToArray();
}
```

现在，您可以轻松地将栈中的项转换为数组：

```
int[] intArray = intStack.ToArray();
string[] stringArray = stringStack.ToArray();
```

这一扩展进一步展示了泛型的威力，使相同的方法能够无缝地处理不同的数据类型。

### 关于泛型类的关键点

-   **灵活性**：泛型类可以处理任何数据类型，使其可适应和可重用。
    
-   **类型安全**：使用类型参数可确保您的代码是类型安全的，可以在编译时而非运行时捕获错误。
    
-   **代码重用**：泛型避免了为不同数据类型重复代码，从而使代码更简洁且易于维护。
    
-   **类型参数**：泛型类使用类型参数作为占位符，用于在创建类的实例时使用的实际数据类型。
    

泛型类在 C# 中是构建灵活、可重用和类型安全代码的关键。通过学习和使用泛型，您可以创建更可靠和可维护的应用程序。

## C# 中的内部类

C# 中的内部类是一种在程序集内封装实现细节的强大方式。通过使用 `internal` 访问修饰符，您可以限制对某些类的访问，确保它们只能在同一程序集内访问。

这对于隐藏复杂逻辑或实用类非常有用，因为隐藏的类并不旨在暴露给您的库或应用程序的公共 API。

### 为什么使用内部类？

在大型应用程序中，可能有一些类应仅供您自己的代码内部使用，而不被外部消费者使用。例如，帮助类、实用函数或不需要在程序集中外部暴露的更大系统的组件可以标记为 `internal`。这确保了公共 API 仍然干净和专注，同时在程序集内仍然允许完整的功能。

### 示例：定义内部类

让我们考虑一个有处理订单的库的场景。您可能会有一个处理折扣计算的复杂逻辑的类，但是您不希望该类对您库的用户可访问。相反，您只公开主要的 `OrderProcessor` 类，将折扣逻辑隐藏在一个内部类中。

```
// 处理折扣计算的内部类
internal class DiscountCalculator
{
    public decimal CalculateDiscount(int orderId)
    {
        // 复杂的折扣计算逻辑
        return orderId * 0.05m;
    }
}
```

在这个例子中，`DiscountCalculator` 类被标记为 `internal`，意味着它仅在程序集内可访问。`OrderProcessor` 类是 `public` 的，使用这个内部类来处理订单。库的外部用户可以调用 `ProcessOrder`，而无需了解或交互 `DiscountCalculator` 类。

### 如何在 `Program.cs` 中使用内部类

现在，让我们看看它在实践中是如何工作的：

```
class Program
{
    static void Main(string[] args)
    {
        OrderProcessor processor = new OrderProcessor();
        processor.ProcessOrder(12345); // 输出：订单 12345 已处理，折扣为 $617.25
    }
}
```

在这个例子中，`ProcessOrder` 方法是公开可访问的，但折扣计算的内部工作仍然保持隐藏，提供了一个干净和安全的 API。

### 关于内部类的重要记忆点

-   **有限的访问**：内部类只能在同一个程序集内访问，有助于保持公共 API 简洁和专注。
    
-   **封装**：用于隐藏实现细节，如帮助函数或不应公开的复杂逻辑。
    
-   **可见性控制**：`internal` 访问修饰符允许您控制哪些类和成员是可见的，确保只有代码的必要部分可以被其他程序集访问。
    
内部类对管理复杂应用程序很重要，它允许您控制哪些代码部分可以从程序集外部访问。通过隐藏细节和限制访问，您可以保持代码库的整洁、易于维护和安全。

## C Sharp 中的嵌套类

C# 中的嵌套类是在另一个类中定义的。这种结构对于将相关类分组在一起并封装实现细节非常有用。嵌套类可以是静态或非静态的，它们可以直接访问其封闭类的私有成员。

### 为什么使用嵌套类？

当一个类与另一个类的逻辑密切相关且不打算独立使用时，使用嵌套类特别有用。它们允许您封装帮助类，将它们隐藏在程序的其他部分，并保持相关代码在一起。这可以导致一个更干净、更有组织的代码库。

### 示例：定义嵌套类

让我们考虑一个表示 `Car` 的类和一个表示 `Engine` 的类场景。由于 `Engine` 类与 `Car` 类密切相关，单独使用意义不大，所以我们可以将其定义为 `Car` 内的嵌套类。

```
// 定义一个带有嵌套类的类
public class Car
{
    // 定义私有字段
    private string model;
    private Engine carEngine;

    // 构造函数
    public Car(string model)
    {
        this.model = model;
        carEngine = new Engine();
    }

    // 启动车的方法
    public void StartCar()
    {
        carEngine.StartEngine();
        Console.WriteLine($"{model} is starting...");
    }

    // 嵌套类
    public class Engine
    {
        public void StartEngine()
        {
            Console.WriteLine("Engine started.");
        }
    }
}
```

在这个例子中，`Car` 类有一个私有字段 `model` 和一个 `StartCar` 方法来启动车。`Engine` 类是嵌套在 `Car` 类中，包含一个 `StartEngine` 方法。通过将 `Engine` 嵌套在 `Car` 内，我们表达了两者之间的密切关系。

### 如何在 `Program.cs` 中使用嵌套类

让我们看看如何在程序中使用 `Car` 类及其嵌套的 `Engine` 类：

```
class Program
{
    static void Main(string[] args)
    {
        Car myCar = new Car("Toyota");
        myCar.StartCar(); // 输出：Engine started. Toyota is starting...

        // 虽然您可以单独创建嵌套类的实例，但通常通过外部类使用它
        Car.Engine engine = new Car.Engine();
        engine.StartEngine(); // 输出：Engine started.
    }
}
```

在这个例子中，我们创建了一个 `Car` 类的实例并调用了 `StartCar` 方法，该方法内部调用了嵌套 `Engine` 类的 `StartEngine` 方法。虽然可以单独实例化嵌套类，但通常通过外部类访问它，更加强调两者之间的关系。

### 关于嵌套类的重要记忆点

-   **封装**：嵌套类保留不应在主类外看到的细节。
    
-   **访问私有成员**：嵌套类可以访问主类的私有部分，这使得它们适合作为需要与主类的内部部分协作的帮助类。
    
-   **组织**：使用嵌套类将相关类保持在一起，使代码更整洁和有序。
    
-   **静态或非静态**：嵌套类可以是静态或非静态。静态嵌套类不能直接访问主类的实例部分，但非静态嵌套类可以。
    
```

## C# 中的部分类

C# 中的部分类允许您将类定义拆分到多个文件中。这一特性在大型项目中特别有用，因为将复杂的类拆分为更小、更易于管理的部分是非常有利的。

通过使用 `partial` 关键字，您可以更好地组织代码，尤其是在处理生成的代码或在团队环境中合作时。

### 为什么使用部分类？

想象一下，您正在开发一个大型应用程序，其中一个类包含数百行代码。这会变得难以管理和维护。通过使用部分类，您可以将类分成若干逻辑部分，每部分位于不同的文件中。这不仅使代码更具可读性，还允许多个开发人员同时处理类的不同部分，而不会导致合并冲突。

### 示例：在 C# 中定义一个部分类

假设我们有一个类，用于处理员工管理系统的各种操作。我们可以使用部分类将所有的方法分散到多个文件中，而不是将它们全部放在一个文件中。

**文件 1：** `PartialClass_Methods1.cs`

```csharp
// 定义一个部分类
public partial class EmployeeOperations
{
    public void AddEmployee(string name)
    {
        Console.WriteLine($"Employee {name} added.");
    }
}
```

**文件 2：** `PartialClass_Methods2.cs`

```csharp
// 定义部分类的另一部分
public partial class EmployeeOperations
{
    public void RemoveEmployee(string name)
    {
        Console.WriteLine($"Employee {name} removed.");
    }
}
```

在这些示例中，`EmployeeOperations` 类被拆分到两个文件中，每个文件包含类的一部分。第一个文件负责添加员工，而第二个文件负责移除员工。

### 如何在 `Program.cs` 中使用部分类

现在，让我们在 `Program.cs` 文件中使用 `EmployeeOperations` 类：

```csharp
class Program
{
    static void Main(string[] args)
    {
        EmployeeOperations operations = new EmployeeOperations();

        operations.AddEmployee("John Doe");    // 输出: Employee John Doe added.
        operations.RemoveEmployee("John Doe"); // 输出: Employee John Doe removed.
    }
}
```

在这个例子中，虽然 `EmployeeOperations` 类定义在多个文件中，但它表现得像一个单独的类。方法 `AddEmployee` 和 `RemoveEmployee` 被无缝组合，提供了一种清晰且有条理的方式来管理操作。

### 关于部分类要记住的要点

-   **代码组织**：部分类通过将大型类分解为较小、集中的部分，有助于保持组织结构。
    
-   **团队协作**：多个开发人员可以同时处理同一类的不同部分，而不会干扰彼此的代码。
    
-   **生成代码**：常用于自动生成的代码，其中类的一部分由工具生成，其他部分由手动编写。
    

部分类是 C# 中的一个强大功能，尤其在大型应用程序中的代码管理方面更为出色。通过将类分解为逻辑组件，您可以保持代码的简洁、可读性和可维护性。

## 结论

类是 C# 中面向对象编程的基石。通过理解不同类型的类——抽象类、静态类、密封类、具体类和单例类，您可以创建结构良好、可维护且高效的代码。

无论您是在设计实用类、定义抽象接口还是封装复杂逻辑，类在塑造应用程序架构中都扮演着关键角色。

[1]: https://www.youtube.com/@CliffTech
[2]: #heading-static-classes-in-c-sharp
[3]: #heading-sealed-classes-in-c-sharp
[4]: #heading-concrete-classes-in-c-sharp
[5]: #heading-abstract-classes-in-c-sharp
[6]: #heading-singleton-classes-in-c-sharp
[7]: #heading-generic-classes-in-c-sharp
[8]: #heading-internal-classes-in-c-sharp
[9]: #heading-nested-classes-in-c-sharp
[10]: #heading-partial-classes-in-c-sharp
[11]: #heading-conclusion

