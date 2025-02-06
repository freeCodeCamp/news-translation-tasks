以下是翻译后的中文内容，保留了源文件的 markdown 排版布局：

---

title: C\# 类手册 – 类的类型及代码示例  
date: 2025-02-06T15:27:56.141Z  
author: Isaiah Clifford Opoku  
authorURL: https://www.freecodecamp.org/news/author/Clifftech/  
originalURL: https://www.freecodecamp.org/news/classes-in-c-sharp-handbook-with-examples/  
posteditor: ""  
proofreader: ""  

---

类是 C\# 中面向对象编程的基本构建模块。它们通过将相关数据和函数分组来创建可重用和模块化的代码。

<!-- more -->

不同类型的类用于不同的目的。例如，在构建应用程序时，组织你的逻辑以使代码更易于导航是有帮助的。

你可以将代码分组或分离成类，通过继承，可以根据需要使用不同的类。类帮助封装你的代码，使你能够在应用程序的其他部分重用你的逻辑。类具有许多功能，我们将详细探讨其中的一些。

在本指南中，我们将探索 C\# 中的各种类类型，以及如何使用它们创建高效且可维护的代码。

## **先决条件**

在开始之前，你应该具备以下条件：

1.  **C\# 基础知识**：你应该了解 C\# 语法和基本的编程结构，如变量、循环和条件语句。

2.  **熟悉面向对象编程 (OOP) 的概念**：你应该知道如何使用类、对象、继承、多态、封装和抽象。

3.  **熟悉访问修饰符**：你应该了解公共、私有、内部和受保护等访问修饰符。

4.  **具备 C\# IDE/环境的使用经验**：你应该能够使用如 Visual Studio 这样的 IDE 编写和运行 C\# 程序。

如果你想了解更多关于 C\# 的知识，可以查看我的 YouTube 渠道：[CliffTech][1]。

## 目录

-   [C\# 中的静态类][2]

-   [C\# 中的密封类][3]

-   [C\# 中的具体类][4]

-   [C\# 中的抽象类][5]

-   [C\# 中的单例类][6]

-   [C\# 中的泛型类][7]

-   [C\# 中的内部类][8]

-   [C\# 中的嵌套类][9]

-   [C\# 中的分部类][10]

-   [结论][11]

我们将讨论的第一个类类型是静态类。让我们深入了解。

## C\# 中的静态类

静态类是 C\# 中的一种特殊类类型，设计用于提供一系列不依赖于实例数据的相关实用方法和属性。

不像常规类，静态类不能被实例化，它们只能包含静态成员。这一特性意味着它们不能被继承，使它们非常适合组织不需要面向对象编程特征的无状态方法。

本质上，当我们提到无状态分组时，意味着不需要创建实例即可调用静态方法——你可以直接使用类或方法名。这种方法提供了一种清晰高效的方式来管理实用函数，增强了代码的组织和可访问性。

### 静态类的示例

下面是一个 C\# 中的静态类示例：

```csharp
namespace StaticClasses
{
    // 定义一个静态类
    public static class MathUtils
    {
        // 用于相加两个数的静态方法
        public static int Add(int a, int b)
        {
            return a + b;
        }

        // 用于相减两个数的静态方法
        public static int Subtract(int a, int b)
        {
            return a - b;
        }

        // 用于相乘两个数的静态方法
        public static int Multiply(int a, int b)
        {
            return a * b;
        }
    }
}
```

在这个示例中：

-   `MathUtils` 类被定义为 `static`，意味着它无法被实例化。

-   它包含三个静态方法：`Add`、`Subtract` 和 `Multiply`。

-   这些方法可以直接在 `MathUtils` 类上调用，而无需创建实例。

在使用之前，你需要在 `Program.cs` 中调用它。创建任何 C\# 应用程序时，入口点是 `Program.cs`。你需要到那里并确保调用这些类以便可以执行它们。对于这一节的其余部分，我们将这样做。

### 如何在 `Program.cs` 中使用静态方法

现在你可以如下使用 `MathUtils` 类中定义的静态方法：

```csharp
// program.cs
namespace StaticClasses
{
    class Program
    {
        static void Main(string[] args)
        {
            // 从 MathUtils 类调用静态方法
            int sum = MathUtils.Add(5, 3);
            // 从 MathUtils 类调用静态方法 Subtract
            int difference = MathUtils.Subtract(5, 3);
            // 从 MathUtils 类调用静态方法 Multiply
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

要决定何时在 C# 中使用静态类或方法，可以参考以下指南：

1.  **使用静态类的情形：**
    
    -   需要一个不依赖实例数据的工具类或帮助方法集合。
        
    -   方法和属性是无状态的，可以在不创建对象的情况下全局访问。
        
    -   想要将相关功能进行分组，但这些功能并不依赖于特定对象状态。
        
    -   需要确保类不能被实例化或继承。
        
2.  **使用静态方法的情形：**
    
    -   类主要是基于实例的，但有一些方法不依赖于实例数据。
        
    -   方法执行的任务独立于任何对象状态，可以在没有实例的情况下执行。
        
    -   想要在类中提供一个工具函数，该函数可以在不创建此类对象的情况下访问。
        

通过适当地使用静态类和静态方法，可以增强代码组织，通过避免不必要的对象创建来提高性能，并确保某些功能在整个应用程序中易于访问。

### C# 中有关静态类的要点

-   **不能被实例化**：不能从静态类创建对象。
    
-   **仅有静态成员**：静态类只能有静态成员。它们不支持实例方法或字段。
    
-   **默认密封**：静态类自动被密封，因此不能被继承。
    
-   **工具类和帮助方法**：静态类通常用于对不需要对象状态的相关工具或帮助方法进行分组。
    

静态类有助于清晰简单地组织和访问工具方法和属性，使其在创建高效且易于维护的代码中显得重要。

## C# 中的密封类

密封类是 C# 中的一种特殊类型的类，不能被继承。可以使用它们来阻止其他类从它们派生，这在创建不可变类型或确保类行为不变时非常有用。

通过密封一个类，可以确保它不能被修改或扩展，在希望提供特定实现而不允许进一步更改的场景中非常有用。

### C# 中密封类的示例

这里是一个 C# 中密封类的示例：

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

        //  属性
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

-   `Shape` 类是一个带有抽象方法 `CalculateArea()` 的抽象基类。
    
-   `Rectangle` 类继承自 `Shape` 并为 `CalculateArea()` 提供了实现。
    
-   `Rectangle` 类是密封的，这意味着它不能被继承。这样保证了类的实现不能被修改或扩展。
    

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

            Console.WriteLine($"Area of the rectangle: {area}"); // 输出: 矩形的面积: 15
        }
    }
}
```

在此示例中，`Rectangle` 类是密封的，以确保其行为不能通过继承来更改。这保证了 `Rectangle` 类对 `CalculateArea()` 的实现保持不变，有助于维护一致的行为。

### 何时使用密封类

密封类在以下情况下特别有用：

1.  **框架开发**：在开发框架或库时，可能会使用密封类锁定某些不打算由用户扩展的类。这有助于保持框架行为的一致性，并确保用户无法通过扩展这些类引入错误或不一致性。
    
2.  **防止继承**：如果一个类被设计为特定实现，不需要进一步定制或扩展，密封它可防止其他开发者创建可能改变其预期功能的子类。
    
3.  **完成类设计**：当类设计已达到预期的完整状态，不再预期有进一步更改或扩展时，密封它可以向其他开发者表明该类应按原样使用。
    
4.  **避免重写**：在方法重写可能导致错误行为或安全问题的场景下，密封类可确保其方法不能被重写，从而保留原始逻辑和功能。
    

-   **没有继承**: 密封类无法被继承，确保了其行为的一致性。
    
-   **防止修改**: 它们防止进一步继承，避免意外的变更或扩展。
    
-   **不可变和特定**: 密封类适用于创建不可变类，或者当您需要特定且不可改变的实现时。
    

### 密封类 vs. 静态类

您可能会问，如果静态类已经是密封的，为什么我们还需要密封类。关键区别在于：

-   **静态类** 是密封的且无法被实例化。它们用于分组静态方法和属性。
    
-   **密封类** 可以被实例化但不能被继承。这允许创建被保护免于进一步子类化的对象。
    

密封类提供了创建可以直接使用的类的灵活性，而无需通过继承修改的风险。

## C# 中的具体类

具体类在 C# 的`面向对象编程`中是必不可少的。它们是完全实现的类，可以用来直接创建对象。

与`抽象类`或`接口`不同，具体类具有其所有方法和属性的完整实现，使其成为大多数 C# 应用程序中多才多艺和基础的组成部分。

具体类不是抽象的。它包括其所有成员（方法、属性、字段等）的完整实现，并可以用来创建对象。这些类在您的应用程序中代表现实世界的实体或概念，封装了数据（存储在字段或属性中）和行为（由方法定义）两者。

### 示例: 在 C# 中定义一个具体类

这是一个在 C# 中简单的具体类示例：

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

在这个例子中，`Animal`类是一个具体类，它有一个方法 `Speak`，表示任何动物发出的通用声音。`Dog`类继承自 `Animal` 并添加了一个 `Bark` 方法，代表狗特有的声音。`Animal` 和 `Dog` 都是具体类，因为它们可以被实例化并用于创建对象。

### 如何实例化和使用具体类

以下是在 `Program.cs` 文件中如何使用 `Dog` 类：

```csharp
// program.cs
class Program
{
    static void Main(string[] args)
    {
        // 创建一个 Dog 类的实例
        Dog myDog = new Dog();

        // 调用继承的方法
        myDog.Speak(); // 输出: The animal makes a sound.

        // 调用 Dog 类中定义的方法
        myDog.Bark();  // 输出: The dog barks.
    }
}
```

在这个例子中，我们创建了一个名为 `myDog` 的 `Dog` 类实例。我们首先调用 `Animal` 类继承的`Speak`方法，然后调用 `Dog` 类的 `Bark` 方法。这显示了具体类如何包含继承和独特的行为。

### 实际示例: 产品的具体类

为了说明具体类的实际应用，考虑以下 `Product` 类的例子：

```csharp
// 为产品定义一个具体类
public class Product
{
    // 数据属性
    public string Name { get; set; }
    public decimal Price { get; set; }

    // 展示产品信息的方法
    public void DisplayInfo()
    {
        Console.WriteLine($"Product: {Name}, Price: {Price:C}");
    }
}
```

这个 `Product` 类是一个具体类，具有 `Name` 和 `Price` 属性，用于存储有关产品的信息。`DisplayInfo` 方法提供了一种展示产品详细信息的方法。

#### 如何使用 `Product` 类

以下是如何使用 `Product` 类：

```csharp
class Program
{
    static void Main(string[] args)
    {
        // 创建一个 Product 类的实例
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

在这种情况下，`Product` 类用于创建一个 `product` 对象。调用 `DisplayInfo` 方法来展示产品的名称和价格。这演示了具体类是如何用于建模和处理现实世界中的数据。

### 关于具体类的关键点

-   **可实例化**: 具体类可以实例化，允许您创建表示应用程序中特定实体或概念的对象。
    
-   **完整实现**: 具体类提供所有方法和属性的完整实现，这与抽象类或接口不同。
    
-   **常用**: 它们是 C# 中最常见的类类型，常用于定义具有特定行为和数据的对象。
    

具体类对于 C# 开发至关重要，使您能够定义和处理在应用程序中建模现实世界实体的对象。了解如何有效地使用具体类对于构建强大、面向对象的软件至关重要。

在 C# 中，抽象类是一个强大的功能，它允许你为其他类定义一个蓝图，而不需要提供完整的实现。它们充当基类，不能被直接实例化，但可以被其他类继承，这些类会为其中定义的抽象方法提供具体的实现。这种设计有助于在相关类之间保持一致性，同时允许在某些行为的实现上有灵活性。

### “实例化”是什么意思？

在探讨抽象类之前，让我们澄清一下实例化一个类意味着什么。实例化是从一个类创建一个对象的过程。当您在 C# 中使用 `new` 关键字时，您正在创建该类的一个实例（或对象）。

但抽象类不能被直接实例化。它们必须通过非抽象（具体）类继承，并为抽象方法提供实现。

### 理解抽象类和抽象方法

**抽象类** 是不能直接创建对象的类。它们充当其他类的模板。它们可以包含完整的方法和没有主体的方法（抽象方法）。抽象类有助于为相关类设置一个共同的接口和共享行为。

**抽象方法**，则是在抽象类中没有主体的方法。任何从抽象类继承的非抽象类都必须为这些方法提供主体。这确保了所有子类都有一个一致的接口。

### 真实案例：银行账户管理

让我们通过一个真实案例来说明 C# 中抽象类和抽象方法的概念。

```
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
            Console.WriteLine($"Deposited {amount} to Savings Account {AccountNumber}. New Balance: {Balance}");
        }

        public override void Withdraw(decimal amount)
        {
            if (amount > Balance)
            {
                throw new InvalidOperationException("Insufficient funds.");
            }
            Balance -= amount;
            Console.WriteLine($"Withdrew {amount} from Savings Account {AccountNumber}. New Balance: {Balance}");
        }

        public override void DisplayAccountInfo()
        {
            Console.WriteLine($"Savings Account {AccountNumber} - Balance: {Balance}, Interest Rate: {interestRate}%");
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
            Console.WriteLine($"Deposited {amount} to Checking Account {AccountNumber}. New Balance: {Balance}");
        }

        public override void Withdraw(decimal amount)
        {
            if (amount > Balance + overdraftLimit)
            {
                throw new InvalidOperationException("Overdraft limit exceeded.");
            }
            Balance -= amount;
            Console.WriteLine($"Withdrew {amount} from Checking Account {AccountNumber}. New Balance: {Balance}");
        }

        public override void DisplayAccountInfo()
        {
            Console.WriteLine($"Checking Account {AccountNumber} - Balance: {Balance}, Overdraft Limit: {overdraftLimit}");
        }
    }
}
```

在这个例子中，`BankAccount` 类是一个抽象类，它为不同类型的银行账户定义了一个公共接口。它包括像 `Deposit`、`Withdraw` 和 `DisplayAccountInfo` 这样的抽象方法，任何继承自 `BankAccount` 的类都必须实现这些方法。

`SavingsAccount` 和 `CheckingAccount` 类继承自 `BankAccount` 并为这些抽象方法提供具体的实现。这种设计强制每种类型的银行账户必须实现存款、提现和显示功能，同时又允许每种账户类型以适合具体类型的方式实现这些功能。

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

            // 在储蓄账户中存入和取出资金
            savings.DisplayAccountInfo();

           // 在储蓄账户中存入和取出资金
            savings.Deposit(200);

            savings.Withdraw(100);
            // 显示更新后的账户信息
            savings.DisplayAccountInfo();

            checking.DisplayAccountInfo();

             // 在支票账户中存入和取出资金
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
                Console.WriteLine($"Error: {ex.Message}");
            }

            checking.DisplayAccountInfo();
        }
    }
}
```

这个程序将产生以下输出：

```
储蓄账户 SA123 - 余额: 1000, 利率: 1.5%
已存入 200 到储蓄账户 SA123. 新余额: 1200
已从储蓄账户 SA123 提取 100. 新余额: 1100
储蓄账户 SA123 - 余额: 1100, 利率: 1.5%
支票账户 CA123 - 余额: 500, 透支限额: 200
已存入 300 到支票账户 CA123. 新余额: 800
已从支票账户 CA123 提取 600. 新余额: 200
支票账户 CA123 - 余额: 200, 透支限额: 200
已从支票账户 CA123 提取 200. 新余额: 0
支票账户 CA123 - 余额: 0, 透支限额: 200
```

在这个例子中，创建了 `SavingsAccount` 和 `CheckingAccount` 对象，并调用了抽象方法 `Deposit`、`Withdraw` 和 `DisplayAccountInfo`。抽象类 `BankAccount` 确保了两种账户类型都拥有这些方法，而派生类提供了具体功能。

### 关于抽象类需要记住的关键点

-   **不能被实例化**：你不能直接创建一个抽象类的实例。子类必须继承它并为抽象方法提供实现。
    
-   **包含抽象方法**：抽象类中的抽象方法没有主体。任何从抽象类继承的非抽象类都必须实现这些方法。
    
-   **定义通用接口**：抽象类为相关类设置一个通用接口，确保它们一致，同时允许不同的实现。
    

抽象类在 C# 中非常重要。它们有助于在相关类之间强制执行结构，但仍然允许具体细节的存在。通过使用抽象类，你可以使代码更加有组织、易于维护和扩展。

## C# 中的单例类

单例类是一种设计模式，将一个类的实例化限制为一个单一实例。当你需要一个在整个应用程序中共享的资源时，比如配置管理器、日志服务或数据库连接，这种模式特别有用。

### 为什么在 C# 中使用单例类？

想象一下，你有一个负责管理数据库连接的类。你不希望这个类的多个实例存在，因为它们可能会对资源管理或数据一致性造成问题。单例类确保只创建一个实例，并提供一个全局访问点。

### 示例：定义一个单例类

现在看看如何在 C# 中实现一个单例类：

```
// 定义一个单例类
public class Singleton
{
    private static Singleton instance;
    private static readonly object lockObject = new object();

    // 私有构造函数防止从类外部进行实例化
    private Singleton()
    {
    }

    // 公共属性用于访问该类的单一实例
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

    // 示例方法用于演示单例实例
    public void PrintMessage()
    {
        Console.WriteLine("Hello, I am a singleton class.");
    }
}
```

在这个例子中，定义了一个 `Singleton` 类，其私有构造函数防止其他类创建新实例。静态属性 `Instance` 返回类的单一实例，如果尚不存在，则创建它。`lockObject` 确保类是线程安全的，意味着即使在多线程环境中，也只会创建一个实例。

`PrintMessage` 方法只是一个简单的例子，用来展示单例实例可以像其他类实例一样使用。

现在让我们看看如何在应用程序中使用这个单例类：

```
class Program
{
    static void Main(string[] args)
    {
        // 获取单例类的单个实例
        Singleton singleton1 = Singleton.Instance;
        singleton1.PrintMessage(); // 输出：Hello, I am a singleton class.

        // 再次获取实例
        Singleton singleton2 = Singleton.Instance;

        // 检查两个实例是否相同
        Console.WriteLine(singleton1 == singleton2); // 输出：True
    }
}
```

在这个例子中，我们两次获取了 Singleton 实例。由于这个类是一个单例，所以 `singleton1` 和 `singleton2` 都引用同一个实例。`==` 运算符通过返回 `true` 来证实这一点。

### 如何扩展单例示例

您可以扩展单例模式以处理更复杂的场景。例如，您可以使用配置数据初始化单例实例：

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

在这里，`ConfigurationManager` 是一个单例类，用于加载和管理应用程序设置。`GetSetting` 方法允许您检索特定的配置值，确保应用程序的所有部分使用相同的设置。

### 记住有关单例类的关键点

- **单个实例**：单例类确保在应用程序中仅存在该类的一个实例。
  
- **全局访问**：单例提供对该实例的全局访问点，使其易于跨应用程序的不同部分使用。
  
- **线程安全**：在多线程环境中，确保您的单例是线程安全的，以避免创建多个实例。
  
- **使用场景**：单例的常见使用场景包括管理配置、日志服务和数据库连接。

单例类是软件工程中的一个基本设计模式，提供了一种简单而强大的方式来管理共享资源。理解并正确实现单例可以帮助您编写更高效和可维护的代码。

## C#中的泛型类

C# 中的泛型类提供了一种强大的方法来创建可重用和类型安全的代码。通过使用泛型类，您可以设计一个通用类来处理任何数据类型，无需为特定类型实现单独的版本。这使您的代码更加灵活并减少冗余。

### 为什么要使用泛型类？

假设您需要实现一个存储整数的栈。稍后，您可能需要另一个存储字符串的栈。

与其编写两个单独的类，不如编写一个泛型栈类来处理这两种数据类型——以及您可能需要的其他数据类型。泛型类帮助您避免代码重复，使代码库更易于维护。

### 示例：定义泛型类

让我们看看一个简单的泛型栈类实现：

```
// 定义泛型类
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

在这个例子中，`Stack<T>` 类是用类型参数 `T` 定义的。这个类型参数是一个占位符，代表栈将存储的数据类型。这个类包括一些方法，如 `Push` 用于添加项，`Pop` 用于移除并返回顶部的项，`Peek` 用于查看但不移除顶部的项，以及 `IsEmpty` 用于检查栈是否为空。

由于 `Stack<T>` 是泛型类，您可以使用任何数据类型，无论是 `int`、`string` 还是自定义类。

### 如何在 `Program.cs` 中使用栈类

让我们看看如何在程序中使用这个泛型 `Stack` 类：

```
class Program
{
    static void Main(string[] args)
    {
        // 整数栈
        Stack<int> intStack = new Stack<int>();
        intStack.Push(10);
        intStack.Push(20);
        Console.WriteLine(intStack.Pop()); // 输出：20
        Console.WriteLine(intStack.Peek()); // 输出：10

        // 字符串栈
        Stack<string> stringStack = new Stack<string>();
        stringStack.Push("Hello");
        stringStack.Push("World");
        Console.WriteLine(stringStack.Pop()); // 输出：World
        Console.WriteLine(stringStack.Peek()); // 输出：Hello
    }
}
```

在这个例子中，我们创建了两个 `Stack` 类的实例：一个存储整数，另一个存储字符串。泛型的灵活性使我们可以使用同一个类处理不同的数据类型，使我们的代码更加可重用和简洁。

### 如何扩展泛型类

让我们更进一步，扩展我们的 `Stack` 类以包括一个返回所有项的数组的方法：

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

这个扩展进一步展示了泛型的强大功能，允许同一方法无缝处理不同的数据类型。

### 记住有关泛型类的关键点

- **灵活性**：泛型类可以处理任何数据类型，使其适应性强且可重用。
  
- **类型安全**：使用类型参数确保您的代码是类型安全的，在编译时捕捉到错误而非运行时。
  
- **代码重用**：泛型消除了为不同数据类型重复代码的需要，从而产生更清晰、更易于维护的代码。

- **类型参数**：泛型类使用类型参数作为占位符，用于创建类实例时实际使用的数据类型。

泛型类对于在 C# 中构建灵活、可重用和类型安全的代码至关重要。通过学习和使用泛型，您可以创建更可靠和可维护的应用程序。

## C# 中的内部类

C# 中的内部类是一种强大的方式，用于在程序集内封装实现细节。通过使用 `internal` 访问修饰符，您可以限制对某些类的访问，确保它们仅在同一程序集内可访问。

这对于隐藏复杂逻辑或实用类特别有用，因为它们不打算暴露在库或应用程序的公共 API 中。

### 为什么使用内部类？

在大型应用程序中，您可能有一些类应该仅由您的代码内部使用，而不是由外部消费者使用。例如，不需要在程序集外部暴露的辅助类、实用函数或较大系统的组件都可以标记为 `internal`。这确保了您的公共 API 保持整洁和专注，同时仍在程序集内提供完整的功能。

### 示例：定义内部类

考虑一个处理订单的库的场景。您可能有一个类处理折扣计算的复杂逻辑，但您不希望该类对使用库的用户可访问。相反，您只公开主要的 `OrderProcessor` 类，将折扣逻辑隐藏于一个内部类中。

```csharp
// 内部类用于处理折扣计算
internal class DiscountCalculator
{
    public decimal CalculateDiscount(int orderId)
    {
        // 复杂的折扣计算逻辑
        return orderId * 0.05m;
    }
}
```

在这个例子中，`DiscountCalculator` 类被标记为 `internal`，这意味着它只能在程序集内访问。`OrderProcessor` 类是 `public` 的，它使用这个内部类来处理订单。库的外部用户可以调用 `ProcessOrder`，而无需了解或与 `DiscountCalculator` 类交互。

### 如何在 `Program.cs` 中使用内部类

现在，让我们看一下在实践中它是如何工作的：

```csharp
class Program
{
    static void Main(string[] args)
    {
        OrderProcessor processor = new OrderProcessor();
        processor.ProcessOrder(12345); // 输出: Order 12345 processed with a discount of $617.25
    }
}
```

在这个例子中，`ProcessOrder` 方法是公开访问的，但折扣计算的内部工作保持隐藏，为用户提供一个简洁和安全的 API。

### 关于内部类需要记住的要点

-   **访问限制**：内部类只能在同一程序集内访问，这有助于保持公共 API 的简洁和专注。
    
-   **封装**：它们用于隐藏实现细节，如辅助函数或复杂逻辑，不应公开可见。
    
-   **可见性控制**：`internal` 访问修饰符让您可以控制哪个类和成员是可见的，确保只有代码中必要的部分对其他程序集可访问。
    

内部类对于管理复杂的应用程序非常重要，它允许您控制哪些代码部分可以从程序集外部访问。通过隐藏细节和限制访问，您可以保持代码库的清晰、易于维护和安全。

## C# 中的嵌套类

C# 中的嵌套类是在另一个类中定义的。这种结构对于将相关的类组合在一起并封装实现细节非常有用。嵌套类可以是静态的或非静态的，它们可以直接访问其封闭类的私有成员。

### 为什么使用嵌套类？

当一个类与另一个类的逻辑紧密相连且不应独立使用时，嵌套类特别有用。它们允许封装辅助类，将它们隐藏在程序的其他部分，并将相关代码放在一起。这可以让代码库更清晰，更有条理。

### 示例：定义嵌套类

让我们考虑一个场景，我们有一个表示 `Car` 的类和一个表示 `Engine` 的类。由于 `Engine` 类与 `Car` 类紧密相关，单独使用没有多大意义，我们可以将其定义为 `Car` 内的嵌套类。

```csharp
// 定义一个有嵌套类的类
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


    // 启动车辆的方法
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

在这个例子中，`Car` 类有一个私有字段 `model` 和一个启动汽车的 `StartCar` 方法。`Engine` 类嵌套在 `Car` 类中，并包含一个 `StartEngine` 方法。通过在 `Car` 内嵌套 `Engine`，我们表达了两者之间的密切关系。

### 如何在 `Program.cs` 中使用嵌套类

让我们看看如何在程序中使用 `Car` 类及其嵌套的 `Engine` 类：

```csharp
class Program
{
    static void Main(string[] args)
    {
        Car myCar = new Car("Toyota");
        myCar.StartCar(); // 输出: Engine started. Toyota is starting...

        // 尽管可以单独创建嵌套类的实例，但通常通过外部类使用它更有意义
        Car.Engine engine = new Car.Engine();
        engine.StartEngine(); // 输出: Engine started.
    }
}
```

在这个例子中，我们创建了一个 `Car` 类的实例，并调用 `StartCar` 方法，它内部调用嵌套的 `Engine` 类的 `StartEngine` 方法。虽然可以单独实例化嵌套类，但更常见的是通过外部类访问，强调两者的关系。

### 关于嵌套类需要记住的要点

-   **封装**：嵌套类隐藏那些不应在主类之外看到的细节。
    
-   **对私有成员的访问**：嵌套类可以访问主类的私有部分，这使它们非常适合需要处理主类内部部分的辅助类。
    
-   **组织**：使用嵌套类可以将相关类放在一起，使代码更简洁、更有条理。
    
-   **静态或非静态**：嵌套类可以是静态的或非静态的。静态嵌套类不能直接访问主类的实例部分，但非静态嵌套类可以。
```

## C# 中的分部类

C# 中的分部类使您可以将类定义拆分为多个文件。此特性在大型项目中特别有用，因为在这些项目中，将复杂的类分解为更小、更易于管理的部分可能是有利的。

通过使用 `partial` 关键字，您可以更好地组织代码，特别是在处理生成的代码或在团队环境中协作工作时。

### 为什么使用分部类？

想象一下，您正在开发一个大型应用程序，其中一个类包含数百行代码。这可能会变得难以管理和维护。通过使用分部类，您可以将类分为逻辑部分，每部分位于一个单独的文件中。这不仅使代码更具可读性，还允许多个开发人员同时处理类的不同部分而不会导致合并冲突。

### 示例：定义一个分部类

假设我们有一个类用于处理员工管理系统的各种操作。我们可以利用分部类将这些方法分散在多个文件中，而不是将所有方法都放在一个文件中。

**文件 1：** `PartialClass_Methods1.cs`

```csharp
// 定义一个分部类
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
// 定义分部类的另一部分
public partial class EmployeeOperations
{
    public void RemoveEmployee(string name)
    {
        Console.WriteLine($"Employee {name} removed.");
    }
}
```

在这些示例中，`EmployeeOperations` 类被拆分成两个文件，每个文件包含类的一部分。第一个文件处理添加员工，第二个文件处理移除员工。

### 如何在 `Program.cs` 中使用分部类

现在，让我们在 `Program.cs` 文件中使用 `EmployeeOperations` 类：

```csharp
class Program
{
    static void Main(string[] args)
    {
        EmployeeOperations operations = new EmployeeOperations();

        operations.AddEmployee("John Doe");    // 输出：Employee John Doe added.
        operations.RemoveEmployee("John Doe"); // 输出：Employee John Doe removed.
    }
}
```

在此示例中，`EmployeeOperations` 类虽然在多个文件中定义，但表现得像一个单一的类。方法 `AddEmployee` 和 `RemoveEmployee` 被无缝结合，提供了一种干净且有组织的方式来管理操作。

### 关于分部类需记住的要点

-   **代码组织**：分部类通过将大型类分解为较小的、专注的部分来帮助保持组织性。
    
-   **团队协作**：多个开发人员可以在同一类的不同部分上工作，而不会干扰彼此的代码。
    
-   **生成代码**：通常与自动生成代码一起使用，其中类的一部分由工具生成，其余部分由人工编写。
    

分部类是 C# 中的一项强大功能，可在大型应用程序中实现更好的代码管理。通过将类分解为逻辑组件，您可以保持代码的清洁、可读和可维护性。

## 结论

类是 C#中面向对象编程的构建块。通过了解不同类型的类——抽象类、静态类、密封类、具体类和单例类，您可以创建结构良好、易于维护且高效的代码。

无论是设计实用程序类、定义抽象接口还是封装复杂逻辑，类在塑造应用程序架构方面都起着至关重要的作用。

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

