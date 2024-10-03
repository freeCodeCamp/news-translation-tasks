```markdown
---
title: Explicação sobre Compilação Just in Time
date: 2024-10-03T00:46:13.013Z
authorURL: ""
originalURL: https://www.freecodecamp.org/news/just-in-time-compilation-explained/
posteditor: ""
proofreader: ""
---

A compilação just-in-time é um método para melhorar o desempenho de programas interpretados. Durante a execução, o programa pode ser compilado em código nativo para melhorar seu desempenho. Também é conhecida como compilação dinâmica.

<!-- more -->

A compilação dinâmica tem algumas vantagens sobre a compilação estática. Ao executar aplicativos Java ou C#, o ambiente de execução pode analisar o aplicativo enquanto ele está sendo executado. Isso permite que um código mais otimizado seja gerado. Se o comportamento do aplicativo mudar enquanto ele está sendo executado, o ambiente de execução pode recompilar o código.

Algumas das desvantagens incluem atrasos na inicialização e a sobrecarga da compilação durante a execução. Para limitar a sobrecarga, muitos compiladores JIT apenas compilam os caminhos de código que são frequentemente usados.

## Visão Geral

Tradicionalmente, existem dois métodos para converter o código-fonte em uma forma que pode ser executada em uma plataforma. A compilação estática converte o código em uma linguagem para uma plataforma específica. Um interpretador executa diretamente o código-fonte.

A compilação JIT tenta usar os benefícios de ambos. Enquanto o programa interpretado está sendo executado, o compilador JIT determina o código mais frequentemente usado e o compila para código de máquina. Dependendo do compilador, isso pode ser feito em um método ou em uma seção menor de código.

A compilação dinâmica foi descrita pela primeira vez em um artigo por J. McCarthy sobre LISP em 1960.

Compilação Just In Time, JIT, ou Tradução Dinâmica, é a compilação que é feita durante a execução de um programa. Ou seja, em tempo de execução, em vez de antes da execução. O que acontece é a tradução para código de máquina. As vantagens de um JIT são devidas ao fato de que, como a compilação ocorre em tempo de execução, um compilador JIT tem acesso a informações de tempo de execução dinâmicas, possibilitando melhores otimizações (como a incorporação de funções).

É importante entender sobre a compilação JIT que ela compilará o bytecode em instruções de código de máquina da máquina em execução. Ou seja, o código de máquina resultante é otimizado para a arquitetura de CPU da máquina em execução.

Alguns exemplos de Compiladores JIT são JVM (Java Virtual Machine) em Java e CLR (Common Language Runtime), em C#.

## História

No começo, um compilador era responsável por converter uma linguagem de alto nível (definida como mais elevada que assembly) em código objeto (instruções de máquina), que então seria ligado (por um linker) em um executável.

Em determinado ponto da evolução das linguagens, os compiladores compilavam uma linguagem de alto nível em pseudocódigo, que seria então interpretado (por um interpretador) para executar seu programa. Isso eliminou o código objeto e executáveis, permitindo que essas linguagens fossem portáveis para múltiplos sistemas operacionais e plataformas de hardware. Pascal (que compilava para P-Code) foi uma das primeiras; Java e C# são exemplos mais recentes. Eventualmente, o termo P-Code foi substituído por bytecode, já que a maioria das operações pseudo são de um byte de comprimento.

Um compilador Just-In-Time (JIT) é um recurso do interpretador de tempo de execução que, em vez de interpretar bytecode toda vez que um método é invocado, compilará o bytecode em instruções de código de máquina da máquina em execução e, em seguida, invocará esse código objeto. Idealmente, a eficiência de executar o código objeto superará a ineficiência de recompilar o programa toda vez que ele for executado.

### Cenário Típico

O código-fonte é completamente convertido em código de máquina.

### Cenário JIT

O código-fonte será convertido em uma estrutura semelhante a uma linguagem de montagem \[por exemplo, IL (linguagem intermediária) para C#, ByteCode para Java\].

O código intermediário é convertido em linguagem de máquina somente quando a aplicação precisa, ou seja, apenas os códigos necessários são convertidos em código de máquina.

## **Comparação JIT vs Não-JIT**

No JIT, nem todo o código é convertido em código de máquina; primeiro, uma parte do código que é necessária será convertida em código de máquina, então, se um método ou funcionalidade chamado não estiver em máquina, este será convertido em código de máquina, o que reduz o peso na CPU. Como o código de máquina será gerado em tempo de execução, o compilador JIT produzirá código de máquina otimizado para a arquitetura de CPU da máquina em execução.

Alguns exemplos de JIT são:

-   Java: JVM (Java Virtual Machine)
-   C#: CLR (Common Language Runtime)
-   Android: DVM (Dalvik Virtual Machine) ou ART (Android RunTime) em versões mais recentes

A Máquina Virtual Java (JVM) executa bytecode e mantém uma contagem de quantas vezes uma função é executada. Se essa contagem exceder um limite predefinido, o JIT compila o código em linguagem de máquina, que pode ser diretamente executada pelo processador (ao contrário do caso normal em que o javac compila o código em bytecode e então o Java, o interpretador, interpreta esse bytecode linha por linha, converte-o em código de máquina e executa).

Além disso, na próxima vez que essa função for calculada, o mesmo código compilado é executado novamente, ao contrário da interpretação normal, em que o código é interpretado novamente linha por linha. Isso torna a execução mais rápida.
```

