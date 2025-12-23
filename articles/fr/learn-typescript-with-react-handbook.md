---
title: Apprendre TypeScript – Un manuel pour les développeurs
date: 2025-03-07T04:51:19.827Z
author: oghenekparobo Stephen
authorURL: https://www.freecodecamp.org/news/author/Xtephen/
originalURL: https://www.freecodecamp.org/news/learn-typescript-with-react-handbook/
posteditor: ""
proofreader: ""
---

Ce manuel vous enseignera les bases de TypeScript, notamment ce que c'est, pourquoi c'est utile et les fonctionnalités clés qu'il propose.

<!-- more -->

TypeScript a été créé par Anders Hejlsberg, un ingénieur logiciel de renom chez Microsoft, également connu pour son travail sur C# et Delphi. TypeScript a été conçu pour améliorer JavaScript en y ajoutant des types statiques, facilitant ainsi la création et la maintenance d'applications à grande échelle.

Nous commencerons par utiliser Vite pour intégrer TypeScript à un projet React. Ensuite, vous découvrirez des concepts clés tels que les annotations de type, l'inférence de type et la gestion des objets et des tableaux.

Après cela, nous explorerons des sujets avancés tels que les types union et any, les propriétés readonly, les fonctions avec des paramètres et des types de retour spécifiques, les génériques pour un code flexible et réutilisable, ainsi que les rôles distinctifs des alias de type et des interfaces.

Je fournirai des exemples détaillés et des explications tout au long de ce manuel pour vous donner une compréhension complète de la manière dont les fonctionnalités de TypeScript peuvent améliorer le développement JavaScript.

### Prérequis

Je suppose que vous connaissez déjà les fondamentaux de JavaScript et de React. Par conséquent, dans ce manuel, je n'entrerai pas dans des explications approfondies sur certains concepts, tels que la structure des fichiers lors de l'initialisation des projets.

## Table des matières

1.  [Qu'est-ce que TypeScript ?][1]
    
2.  [Configuration du projet][2]
    
3.  [Annotations de type et inférence de type][3]
    
    -   [Annotations de type couramment utilisées][4]
        
    -   [Inférence de type][5]
        
4.  [Les types Union et Any][6]
    
    -   [Soyez prudent lors de l'utilisation de any en TypeScript][7]
        
    -   [Utiliser unknown comme alternative plus sûre à any en TypeScript][8]
        
5.  [Les objets en TypeScript][9]
    
    -   [Le problème de la mutabilité][10]
        
    -   [Readonly sur les propriétés d'objet][11]
        
    -   [Tableaux Readonly][12]
        
6.  [Paramètres et retours de fonction][13]
    
    -   [Les risques liés à l'utilisation de any][14]
        
    -   [Utiliser des types explicites pour les paramètres et les valeurs de retour][15]
        
    -   [Utiliser unknown comme alternative plus sûre à any en TypeScript][16]
        
    -   [Gestion de l'optionnel et des valeurs par défaut en TypeScript][17]
        
7.  [Paramètres Rest][18]
    
8.  [Les objets comme paramètres en TypeScript][19]
    
9.  [Alias de type en TypeScript][20]
    
    -   [Qu'est-ce qu'un type d'intersection en TypeScript ?][21]
10.  [Interfaces en TypeScript][22]
    
11.  [Tuples et Enums][23]
    
12.  [Assertion de type, Type Unknown et Type Never en TypeScript][24]
    
13.  [Les génériques en TypeScript][25]
    
14.  [Conclusion][26]
    

## Qu'est-ce que TypeScript ?

Avant de découvrir ce qu'est TypeScript, il est important de comprendre pourquoi il a été créé. JavaScript est un **langage à typage faible**, ce qui signifie que les variables sont définies et leurs types déterminés au moment de l'exécution (runtime). Cette flexibilité peut entraîner des comportements inattendus, en particulier dans les grands projets.

Par exemple, vous pourriez accidentellement affecter une valeur du mauvais type à une variable, ce qui entraînerait des erreurs que vous ne découvrirez que lors de l'exécution du code.

Voici un exemple en JavaScript qui illustre ce problème :

```javascript
let userName = "Alice";
userName = 42; // Pas d'erreur lors de l'affectation, mais cela pourrait casser le code plus tard.

function greetUser(name) {
  console.log("Bonjour, " + name.toUpperCase()); // Erreur à l'exécution si `name` n'est pas une chaîne.
}

greetUser(userName); // Lève une erreur car `userName` est un nombre, pas une chaîne.
```

Cette erreur peut être difficile à déboguer, car elle ne fait surface qu'à l'exécution, ce qui rend les grands projets plus difficiles à maintenir et plus sujets aux bogues.

C'est là que TypeScript entre en jeu. TypeScript est un langage de programmation qui s'appuie sur JavaScript en y ajoutant le **typage statique**. Le typage statique signifie que vous pouvez spécifier explicitement les types des variables, des arguments de fonction, des valeurs de retour, et plus encore. Contrairement au **typage dynamique**, où les types sont déterminés à l'exécution, le typage statique permet à TypeScript de détecter les erreurs liées aux types tôt pendant le développement, améliorant ainsi la qualité du code et réduisant les bogues.

Par exemple, voici le même code écrit en TypeScript :

```typescript
let userName: string = "Alice";
// userName = 42; // Erreur : Le type 'number' n'est pas assignable au type 'string'.

function greetUser(name: string): void {
  console.log("Bonjour, " + name.toUpperCase());
}

greetUser(userName); // Fonctionne parfaitement puisque `userName` est correctement typé.
```

## Configuration du projet

Nous utiliserons [Vite][27] pour configurer notre projet TypeScript. Vite est un outil de construction moderne conçu pour offrir une expérience de développement plus rapide et plus légère pour les projets web.

Pour commencer, exécutez la commande suivante pour créer un nouveau projet Vite avec le support de TypeScript :

```bash
npm create vite@latest
```

Saisissez ensuite un nom pour votre projet (vous pouvez choisir celui que vous préférez). Suivez attentivement les instructions des étapes suivantes.

![création d'un projet avec npm create vite@latest](https://cdn.hashnode.com/res/hashnode/image/upload/v1736769678848/93e22821-6044-4b06-b5ba-86cd3f01ca98.png)

Sélectionnez votre modèle de projet en choisissant 'React' parmi les options disponibles. Nous utiliserons React avec TypeScript pour le développement de ce projet.

![modèle de projet lors de l'exécution de create vite@latest](https://cdn.hashnode.com/res/hashnode/image/upload/v1736769912180/e94dc70c-32e2-4f9f-89cc-d70d35e3a86e.png)

Lorsqu'on vous demande de sélectionner une variante, choisissez 'TypeScript' parmi les options proposées.

![sélection de la variante typescript dans le modèle create vite@latest](https://cdn.hashnode.com/res/hashnode/image/upload/v1736770059262/d605726e-8d4f-4e73-8fb7-3854ce0b4e72.png)

Après avoir terminé ces étapes, vous serez invité à vous rendre dans le répertoire de votre projet et à exécuter `npm install`. Vous pouvez utiliser l'éditeur de code de votre choix. Pour cet exemple, j'utiliserai VS Code.

![e3f81f8b-19b7-4fb6-a439-2f24e3f55df5](https://cdn.hashnode.com/res/hashnode/image/upload/v1736771043869/e3f81f8b-19b7-4fb6-a439-2f24e3f55df5.png)

![aperçu de votre projet dans vscode et exécution de npm install pour installer les dépendances du projet](https://cdn.hashnode.com/res/hashnode/image/upload/v1736771426441/4c524149-4557-40bf-b50a-79400c6c3c91.png)

Après avoir exécuté `npm install`, lancez `npm run dev` pour démarrer le projet sur le serveur local. Une fois qu'il est opérationnel, nous sommes prêts à plonger dans l'apprentissage des concepts de TypeScript.

![notre page d'accueil après avoir exécuté npm run dev dans notre projet](https://cdn.hashnode.com/res/hashnode/image/upload/v1736772238962/36f9523c-d316-43e3-ae05-e1ebfa9398f1.png)

Mais d'abord, créons notre premier fichier TypeScript, `test.ts` (vous pouvez choisir d'utiliser `.ts` ou `.tsx`). Créez le fichier `test.ts` dans le dossier `src` de votre projet, et ajoutez le code suivant pour enregistrer un message de test :

`test.ts`

```typescript
console.log('Test de notre premier fichier TypeScript');
```

Pour voir cela dans la console, importez le fichier `test.ts` dans le fichier `main.tsx` situé dans le dossier `src`.

![mise en évidence des fichiers main.tsx et test.tsx](https://cdn.hashnode.com/res/hashnode/image/upload/v1736773745661/8492e586-7bc0-44a8-ac54-fb576119cdea.png)

`main.tsx`

```typescript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./test.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

Pour visualiser le log dans la console, assurez-vous d'importer le fichier `test.ts` dans le fichier `main.tsx` situé dans le dossier `src`. Après cela, vérifiez la console de votre projet s'exécutant sur le serveur local, et vous devriez y voir le message enregistré s'afficher.

**Voilà !**

![notre résultat dans console.log](https://cdn.hashnode.com/res/hashnode/image/upload/v1736774231199/9a270631-0639-40e0-84de-513143b4478d.png)

Passons maintenant aux choses sérieuses : l'apprentissage de TypeScript.

## Annotations de type et inférence de type

### Que sont les annotations de type ?

Les annotations de type dans TypeScript vous permettent de spécifier explicitement le type d'une variable. Cela garantit que la variable ne reçoit que des valeurs du type spécifié, ce qui renforce la sécurité du typage et facilite la maintenance de votre code.

Pour définir une annotation de type dans TypeScript, il suffit d'ajouter deux points `:` suivis du type souhaité après le nom de la variable. Cela vous permet de spécifier le type qu'une variable contiendra, ajoutant ainsi une couche de clarté et de précision à votre code. Par exemple, spécifions une variable de type `string` dans notre fichier `test.ts`, en veillant à ce qu'on ne lui assigne qu'une chaîne de caractères :

`test.ts`

```typescript
let name: string = 'Stephen';
```

Dans cet exemple, nous avons déclaré une variable `name` et spécifié que son type doit être `string`. TypeScript veillera désormais à ce qu'on ne puisse assigner qu'une valeur de type chaîne à `name`.

**📄 Note :** Tous les extraits de code se trouvent dans un fichier appelé `test.ts` à des fins de démonstration. Vous pouvez renommer le fichier ou copier les extraits dans votre projet TypeScript selon vos besoins. Je ne respecte pas une nomenclature de fichiers cohérente dans cet article.

### Annotations de type couramment utilisées

Voici quelques-unes des annotations de type les plus couramment utilisées dans TypeScript :

-   `string` : Représente des valeurs textuelles.
    
-   `number` : Représente des valeurs numériques (entiers et nombres à virgule flottante).
    
-   `boolean` : Représente une valeur qui est soit `true` soit `false`.
    
-   `any` : Un type de secours qui permet d'assigner n'importe quelle valeur à une variable, désactivant ainsi la vérification du type.
    
-   `void` : Généralement utilisé pour les fonctions qui ne renvoient pas de valeur.
    
-   `null` et `undefined` : Utilisés pour représenter l'absence de valeur.
    

Une fois que vous avez défini une variable avec une annotation de type, TypeScript s'assure qu'elle ne peut contenir que des valeurs de ce type spécifique. Vous pouvez également accéder aux méthodes associées à ce type. Par exemple, si vous déclarez une variable de type chaîne, TypeScript permet d'accéder à toutes les méthodes de chaîne, telles que `.toUpperCase()`.

`test.ts`

```typescript
let name: string = 'Stephen';  // Le type est explicitement défini comme string
name = 'John';  // C'est correct, car c'est toujours une chaîne
 
// Accès à une méthode de chaîne
console.log(name.toUpperCase());  // Résultat : JOHN
```

Ici, la variable `name` est réaffectée à une nouvelle valeur de chaîne, `'John'`. Comme le type est toujours `string`, vous pouvez utiliser des méthodes de chaîne comme `.toUpperCase()` sans aucun problème.

Vous pouvez également définir des tableaux avec des annotations de type. Cela garantit que le tableau ne contient que des éléments d'un type spécifique. Par exemple, si vous définissez un tableau de nombres, TypeScript vous permettra d'utiliser des méthodes de tableau spécifiques aux nombres.

`test.ts`

```typescript
let numbers: number[] = [1, 2, 3];  // Le type est explicitement défini comme un tableau de nombres
numbers.push(4);  // C'est correct, car 4 est un nombre

// Accès à une méthode de tableau
console.log(numbers.length);  // Résultat : 4
```

Dans ce cas, `numbers` est un tableau de nombres. Vous pouvez utiliser en toute sécurité des méthodes de tableau comme `.push()` et `.length`, qui sont valides pour les tableaux de nombres.

Si vous essayez de réaffecter une variable à une valeur d'un type incompatible, TypeScript détectera l'erreur immédiatement pendant le développement, avant même que le code ne soit exécuté.

Par exemple :

`test.ts`

```typescript
let name: string = 'Stephen';
name = 2;  // Erreur : Le type '2' n'est pas assignable au type 'string'
```

Ici, vous essayez d'assigner un nombre (`2`) à une variable qui a été précédemment déclarée comme une chaîne. TypeScript lève immédiatement une erreur, indiquant qu'un nombre ne peut pas être assigné à une variable de type chaîne.

De même, pour un tableau :

`test.ts`

```typescript
let numbers: number[] = [1, 2, 3];
numbers = 'Bonjour';  // Erreur : Le type 'string' n'est pas assignable au type 'number[]'
```

Ici, vous essayez d'assigner une chaîne (`'Bonjour'`) à une variable qui a été précédemment déclarée comme un tableau de nombres. TypeScript détecte cette erreur et met en évidence l'incompatibilité.

Expérimentez avec différents types pour voir comment TypeScript impose la sécurité du typage. Par exemple, essayez d'utiliser des types boolean, number ou d'autres types dans vos tableaux et variables.

Maintenant que vous avez vu comment les annotations de type fonctionnent avec les chaînes et les tableaux, il est temps d'expérimenter d'autres types. TypeScript vous permet de définir des tableaux et des variables avec divers types, garantissant ainsi la sécurité du typage dans tout votre code. Essayez de créer des tableaux avec d'autres types de données tels que `boolean`, `number`.

#### Exemple : Tableau de booléens

`test.ts`

```typescript
let booleanArray: Array<boolean> = [true, false, true];

// Accès à une méthode de tableau
console.log(booleanArray.length);  // Résultat : 3
```

Dans cet exemple, le tableau `booleanArray` est explicitement déclaré pour ne contenir que des valeurs `boolean`. Essayez d'ajouter des éléments de type `string` ou `number` pour voir comment TypeScript détecte les erreurs de type.

#### Exemple : Tableau de nombres

`test.ts`

```typescript
let numberArray: Array<number> = [1, 2, 3];

// Accès à une méthode de tableau
console.log(numberArray[0] * 2);  // Résultat : 2
```

N'hésitez pas à jouer avec ces exemples et à observer comment TypeScript offre une sécurité de typage forte et détecte les erreurs en temps réel. Plus vous explorerez, mieux vous comprendrez comment tirer parti du système de types de TypeScript pour écrire un code plus propre et plus fiable.

### Qu'est-ce que l'inférence de type ?

L'inférence de type dans TypeScript est une fonctionnalité puissante qui permet au compilateur TypeScript de déterminer automatiquement le type d'une variable en fonction de la valeur qui lui est assignée. TypeScript est conçu pour être assez intelligent pour inférer les types dans de nombreux cas, réduisant ainsi le besoin d'annotations de type explicites. Cela améliore la concision du code tout en conservant les avantages de la sécurité du typage.

Grâce à l'inférence de type, TypeScript peut prédire le type d'une variable en analysant la valeur qui lui est assignée, garantissant que vous n'avez pas besoin de spécifier le type manuellement, tout en bénéficiant de tous les avantages de la vérification de type.

##### **Exemple 1** : Type chaîne inféré

`test.ts`

```typescript
let message = "Bonjour, TypeScript !";  // TypeScript infère que 'message' est une chaîne
console.log(message.toUpperCase());  // Résultat : BONJOUR, TYPESCRIPT !
```

Dans cet exemple, TypeScript infère automatiquement le type de `message` comme étant `string` parce que la valeur assignée est une chaîne.

##### **Exemple 2** : Type nombre inféré

`test.ts`

```typescript
let count = 42;  // TypeScript infère que 'count' est un nombre
console.log(count + 8);  // Résultat : 50
```

Ici, TypeScript infère le type de `count` comme étant `number` sur la base de la valeur `42`, et vous pouvez effectuer des opérations arithmétiques sur celui-ci sans erreurs de type.

##### **Exemple 3** : Type tableau inféré

`test.ts`

```typescript
let numbers = [1, 2, 3];  // TypeScript infère que 'numbers' est un tableau de nombres (number[])
console.log(numbers.length);  // Résultat : 3
```

Dans ce cas, TypeScript infère que `numbers` est un tableau de type `number[]` parce que le tableau contient des nombres.

#### **Exemples incorrects :**

##### **Exemple 4** : Affectation de type incompatible

`test.ts`

```typescript
let count = 42;  // TypeScript infère que 'count' est un nombre
count = "Pas un nombre";  // Erreur : Le type 'string' n'est pas assignable au type 'number'
```

Même si TypeScript a inféré que `count` est un nombre, tenter de lui assigner une chaîne (`string`) entraîne une erreur. TypeScript détecte cela comme une incompatibilité de type car `count` a été initialement inféré comme un `number`.

##### **Exemple 5** : Type de tableau inféré avec des types mixtes

`test.ts`

```typescript
let mixedArray = [1, "pomme", true];  // TypeScript infère 'mixedArray' comme (string | number | boolean)[]
console.log(mixedArray[0].toFixed(2));  // Erreur : La propriété 'toFixed' n'existe pas sur le type 'string | boolean'.
```

Dans cet exemple, TypeScript infère `mixedArray` comme un tableau contenant plusieurs types (`string | number | boolean`). Bien que cela soit autorisé, l'accès à des méthodes comme `.toFixed()` sur les éléments peut entraîner des erreurs car tous les éléments du tableau ne supportent pas cette méthode (par exemple, `boolean` et `string` n'ont pas de méthode `.toFixed()`).

##### **Exemple 6** : Type inféré avec opération incorrecte

`test.ts`

```typescript
let price = 99.99;  // TypeScript infère 'price' comme un nombre
price = "Gratuit";  // Erreur : Le type 'string' n'est pas assignable au type 'number'
```

Ici, TypeScript infère que `price` est un `number`, mais essayer de le réaffecter à une `string` conduit à une erreur de type, garantissant que la variable conserve son type inféré.

## Les types Union et Any

Dans les exemples précédents, nous avons utilisé des types mixtes. Définissons maintenant correctement ces concepts et développons-les avec divers exemples :

### **Que sont les types Union ?**

Les types union permettent aux variables ou aux paramètres de contenir plusieurs types spécifiques, offrant ainsi une certaine flexibilité tout en maintenant la sécurité du typage. Vous définissez un type union à l'aide du symbole pipe (`|`).

**Type Union simple :**

`test.ts`

```typescript
let value: string | number;

value = "Bonjour";  // ✅ Correct
console.log(value.toUpperCase());  // Résultat : BONJOUR

value = 42;  // ✅ Correct
console.log(value + 8);  // Résultat : 50

value = true;  // ❌ Erreur : Le type 'boolean' n'est pas assignable au type 'string | number'.
```

Dans cet exemple, `value` peut être soit une chaîne, soit un nombre. Tout autre type d'affectation entraîne une erreur de type.

**Type Union dans les paramètres de fonction :**

`test.ts`

```typescript
function printId(id: string | number): void {
  console.log(`Votre ID est : ${id}`);
}

printId(12345);      // ✅ Correct
printId("abc123");   // ✅ Correct
printId(true);       // ❌ Erreur : Le type 'boolean' n'est pas assignable au type 'string | number'.
```

Ici, le paramètre `id` ne peut accepter qu'une chaîne (`string`) ou un nombre (`number`), garantissant la sécurité du typage tout en offrant de la flexibilité.

**Type Union personnalisé :**

Vous pouvez créer des types personnalisés à l'aide du mot-clé `type` pour une meilleure lisibilité et réutilisabilité.

`test.ts`

```typescript
type ID = string | number;

function getUser(id: ID): void {
  console.log(`Récupération de l'utilisateur avec l'ID : ${id}`);
}

getUser(12345);      // ✅ Correct
getUser("abc123");   // ✅ Correct
getUser(true);       // ❌ Erreur : Le type 'boolean' n'est pas assignable au type 'string | number'.
```

### **Qu'est-ce que le type** `any` ?

Le type `any` est le type le plus flexible de TypeScript. Il permet à une variable de contenir n'importe quel type de valeur, désactivant ainsi la vérification de type pour cette variable.

Le type `any` sacrifie la sécurité du typage pour une flexibilité maximale. Cela est utile dans les scénarios où vous n'êtes pas sûr du type ou lorsque vous travailvez avec des données dynamiques.

##### **Exemple 1** : Tableau de type any

`test.ts`

```typescript
let mixedArray: any[] = [1, "pomme", true];

console.log(mixedArray[0]);  // Résultat : 1
console.log(mixedArray[1].toUpperCase());  // Résultat : POMME
console.log(mixedArray[2]);  // Résultat : true
```

Ici, `mixedArray` peut contenir des éléments de n'importe quel type sans déclencher d'erreurs de type.

#### **Quand utiliser Union vs** `any`

-   **Types Union** : Utilisez les types union lorsque les valeurs possibles sont connues ou limitées à quelques types spécifiques. Cela assure la sécurité du typage et évite les erreurs d'exécution.
    
-   **Type** `any` : Utilisez `any` en dernier recours lorsque le type est inconnu ou dynamique.
    

N'oubliez pas que l'utilisation excessive de `any` peut annuler les avantages du système de types de TypeScript. En choisissant judicieusement entre les types union et `any`, vous pouvez écrire un code TypeScript à la fois flexible et sûr.

### **Soyez prudent lors de l'utilisation de** `any` en TypeScript

Le type `any` dans TypeScript est une fonctionnalité puissante mais risquée. Bien que cette flexibilité puisse parfois être utile, elle conduit souvent à des comportements inattendus ou à des erreurs que TypeScript ne peut pas détecter au moment de la compilation.

Explorons un exemple pour comprendre les pièges potentiels.

Voici une fonction qui illustre les risques :

```typescript
function combineValues(value: any) {
  let anotherValue: number = 10;

  return value + anotherValue;
}

const result = combineValues(5); // Pas d'erreur ici.
const anotherResult = result;

// Tentative d'appel d'une méthode sur `anotherResult`
anotherResult.someUndefinedMethod(); // Pas d'erreur à la compilation !
```

Que s'est-il passé ici ?

Premièrement, nous n'avons eu aucune vérification de type avec `any`. Le paramètre `value` est de type `any`, ce qui signifie qu'il peut contenir n'importe quelle valeur : une chaîne, un nombre, un objet, etc. TypeScript ignore les vérifications de type sur `value`.

Deuxièmement, la valeur de retour est supposée être `any`. Comme `value` est `any`, le type de retour de `combineValues` est également inféré comme `any`.

Troisièmement, il n'y a pas d'erreur lors de l'appel d'une méthode non définie. Une fois la fonction appelée, `anotherResult` est également traité comme `any`. TypeScript permet d'appeler n'importe quelle méthode (même inexistante) sur une variable de type `any` sans générer d'erreurs. Dans ce cas, `someUndefinedMethod` n'existe pas, mais TypeScript ne vous avertira pas.

#### **Les risques liés à l'utilisation de** `any`

1.  **Perte de sécurité de typage** : Vous perdez les avantages du système de types de TypeScript, comme la vérification des erreurs au moment de la compilation. Des erreurs d'exécution potentielles peuvent passer inaperçues pendant le développement.
    
2.  **Comportement accidentel** : La fonction pourrait accepter des entrées inattendues (par exemple, des chaînes, des tableaux ou des objets), entraînant des résultats incorrects ou des plantages.
    
3.  **Complexité du débogage** : Comme le type n'est pas imposé, le débogage des problèmes causés par des types incorrects devient plus difficile.
    

### **Comment corriger cela**

#### **Utiliser des types explicites pour les paramètres et les valeurs de retour**

Voici une version améliorée avec des annotations de type appropriées :

```typescript
function combineValues(value: number): number {
  let anotherValue: number = 10;

  return value + anotherValue;
}

const result = combineValues(5);
// result.someUndefinedMethod(); // Erreur : La propriété 'someUndefinedMethod' n'existe pas sur le type 'number'.
```

1.  **Type de paramètre** : La fonction attend désormais explicitement un `number` pour le paramètre `value`.
    
2.  **Type de retour** : Le type de retour est déclaré comme `number`, garantissant que seuls des nombres sont renvoyés.
    

Cela garantit que TypeScript générera des erreurs si vous essayez de passer des types invalides ou d'appeler des méthodes qui n'existent pas sur la valeur de retour.

#### **Points clés à retenir**

-   Le type `any` désactive la vérification de type de TypeScript, rendant votre code vulnérable aux erreurs d'exécution.
    
-   Évitez d'utiliser `any` autant que possible. Utilisez plutôt des types explicites ou des alternatives plus strictes comme `unknown` (si le type ne peut pas être déterminé à l'avance).
    
-   Les types explicites améliorent la clarté, la maintenance et la fiabilité du code en tirant parti des vérifications de TypeScript au moment de la compilation.
    

Si vous êtes tenté d'utiliser `any` parce que le type n'est pas clair, envisagez de refactoriser votre code ou d'utiliser `unknown` combiné avec des gardes de type (type guards) pour une meilleure sécurité.

### **Utiliser** `unknown` comme alternative plus sûre à `any` en TypeScript

Le type `unknown` dans TypeScript est une alternative plus stricte et plus sûre à `any`. Bien que `any` et `unknown` puissent tous deux contenir des valeurs de n'importe quel type, `unknown` vous oblige à effectuer des vérifications de type avant d'utiliser la valeur. Cela garantit une plus grande sécurité du typage tout en offrant de la flexibilité.

```typescript
function processValue(input: unknown): string {
  if (typeof input === 'string') {
    return `La valeur est une chaîne : ${input}`;
  } else if (typeof input === 'number') {
    return `La valeur est un nombre : ${input}`;
  } else {
    return 'La valeur est d\'un type inconnu';
  }
}

console.log(processValue('Bonjour, TypeScript !')); // La valeur est une chaîne : Bonjour, TypeScript !
console.log(processValue(42)); // La valeur est un nombre : 42
console.log(processValue(true)); // La valeur est d'un type inconnu
```

L'utilisation de `unknown` au lieu de `any` présente plusieurs avantages :

1.  **Gestion sûre du typage** : Contrairement à `any`, `unknown` vous oblige à vérifier le type de la valeur avant de l'utiliser. Cela évite les erreurs d'exécution causées par des opérations invalides sur des types inattendus.
    
2.  **Affinement explicite du type** : TypeScript exige que vous affiniez `unknown` vers un type spécifique (par exemple, `string`, `number`) à l'aide de gardes de type (`typeof`, `instanceof`, etc.) avant de pouvoir accéder à ses propriétés ou méthodes.
    
3.  **Clarté du code améliorée** : En utilisant `unknown`, vous signalez aux autres développeurs que le type est délibérément incertain et doit être vérifié avant utilisation.
    

### **Différences clés :** `any` vs `unknown`

| **Fonctionnalité** | `any` | `unknown` |
| --- | --- | --- |
| Vérification de type | Aucune vérification | Nécessite des vérifications avant utilisation |
| Flexibilité | Peut être utilisé directement | Doit d'abord affiner le type |
| Cas d'utilisation courant | Corrections rapides (déconseillé) | Gestion sûre des types incertains |

En résumé, privilégiez `unknown` par rapport à `any` chaque fois que vous manipulez des valeurs de types incertains. Cela aide à maintenir la sécurité du typage et réduit le risque d'erreurs. Et essayez d'éviter `any` sauf si nécessaire, car il contourne les fonctionnalités de sécurité de TypeScript.

## Les objets en TypeScript

Dans TypeScript, les objets sont des collections de propriétés où chaque propriété a un nom (clé) et une valeur. TypeScript nous permet de définir des types pour ces propriétés, garantissant que les objets se conforment à une structure spécifique.

`test.ts`

```typescript
let car = { car: 'Toyota', brand: 2024 };
console.log(car);
```

Cela fonctionne bien car TypeScript infère automatiquement les types pour `car` et `brand` en fonction des valeurs fournies.

### **Types d'objets explicites**

Lorsque nous voulons définir explicitement la forme d'un objet, nous pouvons utiliser des annotations de type en ligne. Cela permet de clarifier le type que chaque propriété doit avoir. Par exemple :

`test.ts`

```typescript
let carOne: { car: string; brand: number } = { car: 'Evil Spirit', brand: 2025 };
console.log(carOne);
```

Cela garantit que `carOne` possède toujours une propriété `car` de type `string` et une propriété `brand` de type `number`.

Supposons que nous voulions ajouter une propriété `color` à `carOne` :

`test.ts`

```typescript
let carOne: { car: string; brand: number } = { car: 'Evil Spirit', brand: 2025, color: 'Noir' };
```

Le code ci-dessus affichera une ligne rouge car `color` ne fait pas partie du type défini `{ car: string; brand: number }`. L'erreur ressemblera à ceci :

![8a3d48dd-3ae0-4769-9e13-fa1f6ca37331](https://cdn.hashnode.com/res/hashnode/image/upload/v1736933755272/8a3d48dd-3ae0-4769-9e13-fa1f6ca37331.png)

> Le type '{ car: string; brand: number; color: string; }' n'est pas assignable au type '{ car: string; brand: number; }'. Le littéral d'objet ne peut spécifier que des propriétés connues, et 'color' n'existe pas dans le type '{ car: string; brand: number; }'.

De même, si vous essayez de changer le type de `brand` en une chaîne :

`test.ts`

```typescript
carOne.brand = "2026";
```

Vous obtiendrez une autre erreur :

> Le type 'string' n'est pas assignable au type 'number'.

Devoir écrire le type d'objet complet à chaque fois peut devenir répétitif, en particulier pour les objets ayant de nombreuses propriétés ou lorsque la même structure est utilisée à plusieurs endroits. Mais ne vous inquiétez pas – je présenterai bientôt les **alias de type**, qui simplifient grandement la définition et la réutilisation des types d'objets. Vous verrez comment utiliser les alias de type pour simplifier les types d'objets et rendre votre code plus propre. Après cela, nous explorerons comment appliquer ces concepts dans React.

Pour l'instant, concentrez-vous sur la compréhension des bases et sur la manière dont TypeScript impose une structure. C'est comme jeter un coup d'œil sous le capot pour voir comment TypeScript fonctionne en coulisses.

### **Objets et tableaux**

Dans TypeScript, nous manipulons souvent des tableaux d'objets, où chaque objet a une structure spécifique. TypeScript aide à garantir que chaque objet du tableau est conforme au type attendu.

Imaginez que vous gérez une épicerie et que vous voulez suivre vos légumes. Voici comment vous pourriez commencer :

```typescript
let tomato = { name: 'Tomate', price: 2 };
let potato = { name: 'Pomme de terre', price: 1 };
let carrot = { name: 'Carotte' };

let vegetables: { name: string; price: number }[] = [tomato, potato, carrot];
```

Lorsque TypeScript vérifie ce code, il génère une erreur car `carrot` n'a pas de propriété `price`. Le type attendu pour chaque élément du tableau `vegetables` est `{ name: string; price: number }`. Comme `carrot` n'a pas de prix, TypeScript le signale comme une erreur.

> Le type '{ name: string; }' n'est pas assignable au type '{ name: string; price: number; }'. La propriété 'price' est manquante dans le type '{ name: string; }' mais requise dans le type '{ name: string; price: number; }'.

Si le prix n'est pas toujours connu ou applicable (par exemple, si le prix de la carotte est encore en cours de négociation), vous pouvez rendre la propriété `price` optionnelle. Vous pouvez le faire en ajoutant un `?` après le nom de la propriété :

```typescript
let vegetables: { name: string; price?: number }[] = [tomato, potato, carrot];
```

Désormais, TypeScript sait que la propriété `price` est facultative. Cela signifie que les objets du tableau `vegetables` peuvent inclure `price` ou l'omettre sans provoquer d'erreurs.

Lorsqu'une propriété est facultative, TypeScript l'autorise à être soit :

1.  Présente avec le type spécifié.
    
2.  Absente tout simplement.
    

Cette flexibilité élimine l'erreur pour les objets comme `carrot`, qui n'ont pas de propriété `price`.

### **Le modificateur** `readonly`

Dans TypeScript, le modificateur `readonly` est un excellent moyen de s'assurer que certaines propriétés ou des objets entiers restent immuables. C'est particulièrement utile lorsque vous voulez éviter des modifications accidentelles de vos données.

Continuons avec notre exemple d'épicerie de légumes et voyons comment `readonly` fonctionne.

#### **Le problème de la mutabilité**

Imaginez que nous ayons cette configuration :

```typescript
let tomato = { name: 'Tomate', price: 2 };
let potato = { name: 'Pomme de terre', price: 1 };
let carrot = { name: 'Carotte' };

let vegetables: { name: string; price?: number }[] = [tomato, potato, carrot];
```

Si quelqu'un essaie accidentellement de changer le `name` de l'objet `tomato` ou de supprimer l'objet `carrot` du tableau `vegetables`, TypeScript ne dira rien :

```typescript
vegetables[0].name = 'Concombre'; // Pas d'erreur, mais cela pourrait être involontaire !
vegetables.pop(); // Supprime le dernier légume, pas d'avertissement.
```

Nous pouvons utiliser `readonly` pour rendre ces objets et tableaux immuables, garantissant ainsi que leur état d'origine ne peut pas être modifié.

### **Readonly sur les propriétés d'objet**

Pour rendre les propriétés de chaque légume immuables, vous pouvez procéder comme suit :

```typescript
let vegetables: { readonly name: string; readonly price?: number }[] = [
  { name: 'Tomate', price: 2 },
  { name: 'Pomme de terre', price: 1 },
  { name: 'Carotte' },
];
```

Désormais, si vous essayez de modifier le `name` ou le `price` d'un légume, TypeScript génère une erreur :

```typescript
// Erreur : Impossible d'assigner à 'name' car il s'agit d'une propriété en lecture seule
vegetables[0].name = 'Concombre'; 
```

### **Tableaux Readonly**

Vous pouvez également rendre l'ensemble du tableau `vegetables` immuable en le déclarant comme `readonly` :

```typescript
let vegetables: readonly { name: string; price?: number }[] = [
  { name: 'Tomate', price: 2 },
  { name: 'Pomme de terre', price: 1 },
  { name: 'Carotte' },
];
```

Cela empêche les opérations qui modifient le tableau lui-même, telles que `push`, `pop` ou `splice` :

```typescript
// Erreur : La propriété 'push' n'existe pas sur le type 'readonly { name: string; price?: number; }[]'.
vegetables.push({ name: 'Oignon', price: 3 }); 
// Erreur : La propriété 'pop' n'existe pas sur le type 'readonly { name: string; price?: number; }[]'.
vegetables.pop(); 
```

### **Quand utiliser** `readonly`

1.  **Données immuables** : Utilisez `readonly` lorsque vous voulez imposer l'immuabilité pour des objets ou des tableaux, en particulier dans des contextes où les données doivent rester constantes (par exemple, configurations, états initiaux, constantes).
    
2.  **Prévenir les bogues** : Protégez vos données contre les modifications accidentelles causées par d'autres parties du code.
    

### **Exemple complet**

Voici un exemple mis à jour avec `readonly` en action :

```typescript
let vegetables: readonly { readonly name: string; readonly price?: number }[] = [
  { name: 'Tomate', price: 2 },
  { name: 'Pomme de terre', price: 1 },
  { name: 'Carotte' },
];

// Tentative de modification des données
// Erreur : Impossible d'assigner à 'name' car il s'agit d'une propriété en lecture seule.
vegetables[0].name = 'Concombre'; 
// Erreur : La propriété 'pop' n'existe pas sur le type 'readonly { readonly name: string; readonly price?: number; }[]'.
vegetables.pop(); 

console.log(vegetables);
```

Voici ce que vous devez savoir sur readonly, en résumé :

-   `readonly` sur les propriétés garantit que les champs individuels des objets ne peuvent pas être modifiés.
    
-   `readonly` sur les tableaux rend le tableau lui-même immuable, empêchant les opérations comme `push` et `pop`.
    
-   La combinaison des deux offre une immuabilité totale pour les objets au sein d'un tableau.
    

En utilisant `readonly`, vous créez un code plus sûr et plus prévisible, réduisant les bogues causés par des mutations involontaires.

## Paramètres et retours de fonction

Les fonctions dans TypeScript vous permettent de définir explicitement les **paramètres** et les **types de retour**. Cela garantit que la fonction se comporte comme prévu et évite les erreurs d'exécution. Décomposons cela avec un exemple simple.

### **Type de retour inféré**

```typescript
function arithmeticOp(price: number) {
  return price * 9;
}

const FP = arithmeticOp(2); // Le résultat est 18.
```

1.  Le paramètre `price` est explicitement défini comme un `number`.
    
2.  Le type de retour n'est pas explicitement indiqué, mais TypeScript **infère** qu'il s'agit d'un `number` car la fonction renvoie `price * 9`, ce qui est une opération numérique.
    

TypeScript est assez intelligent pour inférer le type de retour de la fonction sur la base de l'instruction `return`. Dans ce cas, il infère correctement qu'`arithmeticOp` renvoie un `number`.

### **Type de retour explicite**

```typescript
function arithmeticOp(price: number): number {
  return price * 9;
}

const FP = arithmeticOp(2); // Le résultat est toujours 18.
```

1.  La fonction déclare explicitement le type de retour comme `number` à l'aide de la syntaxe `functionName(parameters): returnType`.
    
2.  Cela ne change pas le résultat mais rend la déclaration de la fonction plus claire.
    

Alors pourquoi devriez-vous utiliser des types de retour explicites ? Tout d'abord, cela améliore la lisibilité du code et garantit que les modifications futures ne modifieront pas accidentellement le type de retour. Deuxièmement, cela sert de documentation pour les autres développeurs.

### **Incompatibilité du type de retour**

```typescript
function arithmeticOp(price: number): number {
  if (hasDiscount) {
    return 'remise'; // Erreur ici !
  }
  return price * 9;
}

const FP = arithmeticOp(2);
```

Dans le code ci-dessus, le type de retour est explicitement déclaré comme `number`. Mais la fonction tente de renvoyer une chaîne (`string`) (`'remise'`) dans certains cas. Cela amène TypeScript à générer une erreur :

> Le type 'string' n'est pas assignable au type 'number'.

Cela se produit parce que TypeScript impose le type de retour déclaré. Si vous dites qu'une fonction renvoie un `number`, elle **doit toujours** renvoyer un `number`, quelle que soit la logique interne de la fonction.

Si vous voulez que la fonction renvoie plusieurs types (par exemple, `number` ou `string`), utilisez un **type union** :

```typescript
function arithmeticOp(price: number): number | string {
  if (hasDiscount) {
    return 'remise'; // Maintenant valide !
  }
  return price * 9;
}

const FP = arithmeticOp(2);
```

Le type de retour `number | string` indique à TypeScript que la fonction peut renvoyer soit un `number`, soit une `string`. Cela résout l'erreur d'incompatibilité de type.

#### Points clés à retenir :

1.  TypeScript **infère** les types de retour lorsqu'ils ne sont pas explicitement définis, mais encourage les types de retour explicites pour plus de clarté et de maintenance.
    
2.  Le type de retour déclaré garantit que la fonction ne renvoie que des valeurs du type spécifié.
    
3.  Les incompatibilités de type, comme le renvoi d'une `string` par une fonction censée renvoyer un `number`, entraînent des erreurs TypeScript.
    
4.  Les types union (`type1 | type2`) permettent aux fonctions de renvoyer plusieurs types si nécessaire.
    

### **Gestion de l'optionnel et des valeurs par défaut en TypeScript**

Lorsqu'on travaille avec des fonctions TypeScript, spécifier le comportement des paramètres est crucial pour la flexibilité et la prévention des erreurs d'exécution. Explorons comment gérer efficacement les paramètres optionnels et par défaut avec des exemples pratiques.

### Exemple 1 : Comprendre le problème des arguments manquants

Considérez la fonction suivante :

```typescript
function calculateFinalScore(baseScore: number, deductions: number): number {
  return baseScore - deductions;
}

let scoreWithDeductions = calculateFinalScore(50, 10);
let scoreWithoutDeductions = calculateFinalScore(50); // Erreur
```

Le premier appel à `calculateFinalScore` fonctionne parfaitement. Mais le second appel génère une erreur TypeScript :

```
⚠ Erreur (TS2554) | 2 arguments étaient attendus, mais 1 a été reçu.
Tutorial.ts(7, 47) : Un argument pour 'deductions' n'a pas été fourni.
```

Cela se produit parce que TypeScript s'attend à ce que `baseScore` et `deductions` soient tous deux fournis, car ils sont tous deux des paramètres obligatoires. Si la valeur `deductions` est omise, TypeScript n'autorisera pas l'appel de la fonction.

### Exemple 2 : Corriger le problème avec des paramètres par défaut

Pour résoudre ce problème, nous pouvons définir une valeur par défaut pour le paramètre `deductions`. Les paramètres par défaut fournissent une valeur de secours si aucun argument n'est passé.

```typescript
function calculateFinalScore(baseScore: number, deductions: number = 0): number {
  return baseScore - deductions;
}

let scoreWithDeductions = calculateFinalScore(50, 10); // 40
let scoreWithoutDeductions = calculateFinalScore(50);  // 50
```

Dans cet exemple mis à jour :

-   Le paramètre `deductions` vaut par défaut `0` s'il n'est pas explicitement fourni.
    
-   Les deux appels fonctionnent désormais sans erreurs.
    

### Pourquoi cette solution fonctionne

En définissant `deductions` comme un paramètre par défaut, TypeScript s'assure que la fonction dispose de tous les arguments dont elle a besoin pour s'exécuter, même si certains sont omis lors de l'appel. Cette approche augmente la flexibilité de la fonction tout en maintenant la sécurité du typage.

Utilisez des paramètres par défaut lorsqu'une valeur est requise pour que la fonction fonctionne, mais qu'elle peut sans risque avoir une valeur de secours si elle est omise. Cette approche améliore la clarté du code et réduit la probabilité d'erreurs d'exécution.

## Paramètres Rest

Les paramètres Rest dans TypeScript vous permettent de gérer plusieurs arguments sans savoir à l'avance combien vous en recevrez. Vous pouvez passer autant d'arguments que vous le souhaitez — TypeScript s'en chargera. Ils sont parfaits pour les situations où le nombre d'entrées n'est pas fixe.

Pour utiliser les paramètres Rest, vous écrivez trois points (`...`) avant le nom du paramètre, ce qui rassemble tous les arguments supplémentaires dans un tableau.

Supposons que vous vouliez combiner plusieurs mots en une seule phrase :

```typescript
function joinWords(...words: string[]): string {
  return words.join(" ");
}

let sentence = joinWords("TypeScript", "rend", "le", "codage", "amusant");
console.log(sentence); // "TypeScript rend le codage amusant"
```

-   `...words` collecte tous les arguments dans un tableau (`["TypeScript", "rend", "le", "codage", "amusant"]`).
    
-   La méthode `join` les combine en une seule chaîne, séparée par des espaces.
    

### Paramètres Rest avec des nombres

Supposons maintenant que vous vouliez additionner plusieurs nombres :

```typescript
function sumNumbers(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

let total = sumNumbers(10, 20, 30);
console.log(total); // 60
```

-   `...numbers` rassemble tous les nombres dans un tableau (`[10, 20, 30]`).
    
-   La méthode `reduce` les additionne pour obtenir le total.
    

Nous pouvons également utiliser les paramètres Rest pour fusionner plusieurs tableaux en un seul :

```typescript
function mergeArrays(...arrays: number[][]): number[] {
  return arrays.flat();
}

let combined = mergeArrays([1, 2], [3, 4], [5, 6]);
console.log(combined); // [1, 2, 3, 4, 5, 6]
```

-   `...arrays` collecte chaque argument sous forme de tableau dans un tableau de tableaux (`[[1, 2], [3, 4], [5, 6]]`).
    
-   La méthode `flat` les combine en un seul tableau.
    

Les paramètres Rest doivent toujours être placés en dernier dans la liste des paramètres. Par exemple :

```typescript
function example(a: string, ...others: number[]): void {
  console.log(a, others);
}
```

Cela garantit que tous les arguments restants vont dans le paramètre Rest.

## Les objets comme paramètres en TypeScript

Dans TypeScript, les fonctions peuvent accepter des objets comme paramètres. C'est particulièrement utile lorsqu'on manipule plusieurs valeurs liées.

### Utilisation d'objets avec des propriétés spécifiques

Voici une fonction qui prend un objet avec une propriété `id` et renvoie un nouvel objet :

```typescript
function createEmployee({ id }: { id: number }): { id: number; isActive: boolean } {
  return { id, isActive: id % 2 === 0 };
}

const firstEmployee = createEmployee({ id: 1 });
console.log(firstEmployee); // { id: 1, isActive: false }

const secondEmployee = createEmployee({ id: 2 });
console.log(secondEmployee); // { id: 2, isActive: true }
```

La fonction `createEmployee` :

-   Prend un objet avec une seule propriété, `id`, comme paramètre.
    
-   Renvoie un nouvel objet avec deux propriétés : `id` et `isActive`.
    

La propriété `isActive` est déterminée en vérifiant si l'`id` est pair (`id % 2 === 0`).

La **déstructuration** est utilisée dans le paramètre :

-   `{ id }` extrait directement la propriété `id` de l'objet d'entrée.

### Acceptation d'objets plus complexes

Regardons maintenant une fonction qui prend un objet avec plusieurs propriétés :

```typescript
function createStudent(student: { id: number; name: string }): void {
  console.log(`Bienvenue au cours, ${student.name} !`);
}

const newStudent = { id: 1, name: "John" };
createStudent(newStudent); // "Bienvenue au cours, John !"
```

La fonction `createStudent` :

-   Accepte un objet avec deux propriétés : `id` et `name`.
    
-   Affiche un message de bienvenue en utilisant la propriété `name`.
    

L'objet `newStudent` correspond à la structure attendue par la fonction, il est donc passé directement.

### Pourquoi utiliser des objets comme paramètres ?

Tout d'abord, les fonctions avec des objets comme paramètres sont plus faciles à lire, en particulier lorsqu'on traite plusieurs valeurs liées. De plus, en utilisant la déstructuration, vous pouvez extraire uniquement les propriétés nécessaires d'un objet, ce qui rend le code plus concis. Enfin, les objets peuvent être réutilisés entre les fonctions sans en créer de nouveaux à chaque fois.

### Vérifications des propriétés excédentaires dans TypeScript

Dans TypeScript, les vérifications des propriétés excédentaires aident à garantir que les objets passés aux fonctions ne contiennent que les propriétés définies dans le type de paramètre de la fonction. S'il y a des propriétés supplémentaires, TypeScript lèvera une erreur. Voyons comment cela fonctionne avec des exemples simples.

#### 1. Erreur de propriété supplémentaire

Voici une fonction qui accepte un objet avec `id` et `name`, mais aucune propriété supplémentaire :

```typescript
function createStudent(student: { id: number; name: string }): void {
  console.log(`Bienvenue, ${student.name} !`);
}

const newStudent = { id: 1, name: "John", age: 20 }; // Propriété supplémentaire 'age'

createStudent(newStudent); // Erreur : 'age' n'est pas attendu
```

TypeScript génère une erreur car la propriété `age` ne fait pas partie de la structure d'objet attendue.

#### 2. Correction de l'erreur

Pour éviter l'erreur, il suffit de supprimer les propriétés supplémentaires :

```typescript
const validStudent = { id: 1, name: "John" };
createStudent(validStudent); // Cela fonctionne parfaitement
```

Cela fonctionne parce que l'objet ne possède que les propriétés attendues : `id` et `name`.

#### 3. Utilisation de l'assertion de type (non recommandé)

Si vous avez vraiment besoin de passer un objet avec des propriétés supplémentaires, vous pouvez utiliser l'**assertion de type** pour dire à TypeScript d'ignorer les propriétés en trop :

```typescript
const studentWithExtras = { id: 1, name: "John", age: 20 };
createStudent(studentWithExtras as { id: number; name: string }); // Contourne l'erreur
```

Bien que cela fonctionne, il est préférable de correspondre à la structure attendue au lieu d'utiliser l'assertion de type.

-   TypeScript s'attend à ce que les objets correspondent à la forme exacte du type de paramètre.
    
-   Les propriétés excédentaires provoquent des erreurs pour garantir que la structure est correcte.
    
-   Corrigez l'objet ou utilisez l'assertion de type (avec précaution) si vous avez besoin de propriétés supplémentaires.
    

Les vérifications des propriétés excédentaires aident à garder votre code sûr et garantissent que seules les bonnes données sont passées aux fonctions.

## Alias de type en TypeScript

Un **alias de type** dans TypeScript est essentiellement un **nom court** ou un **nom alternatif** pour un type existant. Il vous permet de définir un nom plus simple ou plus lisible pour un type qui peut être complexe ou utilisé de manière répétée dans votre code.

Cela ne crée pas un nouveau type, mais donne plutôt un nouvel identifiant à un type existant. La fonctionnalité du code ne change pas lors de l'utilisation d'un alias de type – cela rend simplement votre code plus lisible et réutilisable.

Voici un exemple avant d'utiliser un alias de type :

```typescript
// Sans alias de type
function getUserInfo(user: { name: string, age: number, address: string }) {
  console.log(`Infos utilisateur : 
    Nom : ${user.name}, 
    Âge : ${user.age}, 
    Adresse : ${user.address}`);
}

const user = { name: 'Alice', age: 30, address: '123 Main St' };

getUserInfo(user);
```

Maintenant, utilisons un alias de type pour les paramètres de la fonction afin de rendre le code plus lisible :

```typescript
// Avec alias de type
type UserInfo = { name: string, age: number, address: string };

function getUserInfo(user: UserInfo) {
  console.log(`Infos utilisateur : 
    Nom : ${user.name}, 
    Âge : ${user.age}, 
    Adresse : ${user.address}`);
}

const user: UserInfo = { name: 'Alice', age: 30, address: '123 Main St' };

getUserInfo(user);
```

Dans l'exemple ci-dessus :

-   Avant l'alias de type, nous définissons les paramètres séparément au sein de la fonction.
    
-   Après avoir défini un alias de type (`UserInfo`), nous l'utilisons dans le paramètre de la fonction pour simplifier la signature de la fonction et la rendre plus lisible.
    

Cela **ne change pas la fonctionnalité** du code. Cela le rend simplement plus facile à manipuler en utilisant l'alias. L'alias agit comme une référence réutilisable à un type complexe, et si la forme de `UserInfo` change, nous n'avons besoin de la mettre à jour qu'à un seul endroit, ce qui facilite la maintenance du code.

### Comment utiliser les alias de type

Un alias de type vous permet de définir un nouveau nom pour un type. Ce nouveau nom peut représenter un type primitif, une structure d'objet ou même une union de types. Le principal avantage est de rendre votre code plus lisible, réutilisable et d'éviter les erreurs.

Vous définissez un alias de type à l'aide du mot-clé `type` suivi d'un nom et de la structure du type.

```typescript
type TypeName = TypeStructure;
```

Par exemple, créons un alias de type pour un objet User :

```typescript
type User = {
  name: string;
  age: number;
};
```

Cela signifie que `User` est un type qui attend un objet avec deux propriétés :

-   `name` doit être une chaîne.
    
-   `age` doit être un nombre.
    

### Pourquoi utiliser des alias de type ?

Il existe plusieurs raisons d'utiliser des alias de type dans votre code. Tout d'abord, un alias de type définit explicitement la structure d'un objet, de sorte que quiconque lit le code sait exactement à quoi s'attendre. Deuxièmement, vous pouvez réutiliser le type `User` n'importe où dans votre code sans répéter la structure. Enfin, TypeScript vérifiera que tout objet assigné au type `User` possède les propriétés requises avec les types corrects.

#### Avec alias de type :

```typescript
type User = {
  name: string;
  age: number;
};

function getUserDetails(user: User): string {
  return `${user.name} (${user.age} ans)`;
}

const user: User = { name: "Alice", age: 30 };
console.log(getUserDetails(user)); // "Alice (30 ans)"
```

Dans cet exemple, nous avons défini l'alias de type `User` pour spécifier que les objets `user` doivent avoir un `name` de type `string` et un `age` de type `number`.

TypeScript détectera les erreurs si vous tentez d'assigner un objet qui ne correspond pas à cette structure, comme ceci :

```typescript
// Cela entraînera une erreur TypeScript :
const invalidUser: User = { name: "Alice" }; // Propriété 'age' manquante
```

### Qu'est-ce qu'un **type d'intersection** en TypeScript ?

Un **type d'intersection** est une fonctionnalité puissante de TypeScript qui vous permet de combiner plusieurs types en un seul. Lorsque vous créez une intersection, le type résultant doit posséder **toutes les propriétés** de chacun des types que vous intersectez.

Vous pouvez combiner n'importe quel nombre de types, et le type résultant doit satisfaire chaque condition de tous les types d'origine.

#### Syntaxe du type d'intersection

Pour définir un type d'intersection, vous utilisez l'opérateur `&` pour combiner deux types ou plus.

```typescript
type TypeA & TypeB;
```

#### Exemple d'un type d'intersection

Imaginez que vous vouliez étendre le type `User` pour inclure l'adresse de l'utilisateur. Au lieu de modifier le type `User` d'origine, vous pouvez utiliser un **type d'intersection** pour combiner `User` et `Address`.

```typescript
type Address = {
  city: string;
  country: string;
};

type UserWithAddress = User & Address; // Intersection de User et Address
```

Désormais, `UserWithAddress` nécessitera à la fois les propriétés de `User` et les propriétés d'`Address`.

#### Exemple avec une fonction

Voici comment vous pouvez utiliser cela dans une fonction :

```typescript
type User = {
  name: string;
  age: number;
};

type Address = {
  city: string;
  country: string;
};

type UserWithAddress = User & Address;

function getUserDetails(user: UserWithAddress): string {
  return `${user.name} (${user.age} ans), habite à ${user.city}, ${user.country}`;
}

const user: UserWithAddress = {
  name: "Alice",
  age: 30,
  city: "New York",
  country: "USA"
};

console.log(getUserDetails(user));
// Résultat : "Alice (30 ans), habite à New York, USA"
```

Dans ce cas :

-   `UserWithAddress` est un type d'intersection, ce qui signifie que l'objet `user` doit posséder à la fois les propriétés de `User` et d'`Address`.
    
-   TypeScript vérifie que `name` et `age` (de `User`), ainsi que `city` and `country` (d'`Address`), sont présents dans l'objet.
    

S'il nous manquait l'une de ces propriétés, TypeScript afficherait une erreur.

```typescript
// Cela entraînera une erreur TypeScript :
const incompleteUser: UserWithAddress = {
  name: "Alice",
  age: 30,
  city: "New York"
}; // 'country' manquant
```

### Pourquoi utiliser des **types d'intersection** ?

Les types d'intersection sont utiles dans plusieurs scénarios. Tout d'abord, ils vous permettent d'étendre des types existants sans les modifier, ce qui rend le code plus modulaire et flexible. Ils sont également utiles lorsque vous devez fusionner plusieurs structures différentes en une seule, comme la combinaison d'un `User` avec une `Address` ou des `OrderDetails`. Et vous pouvez facilement voir toutes les propriétés requises qu'un objet doit avoir lorsque vous utilisez des types d'intersection.

### Alias de type vs types d'intersection :

| Fonctionnalité | Alias de type | Type d'intersection |
| --- | --- | --- |
| **Définition** | Définit un type unique. | Combine plusieurs types en un seul. |
| **Cas d'utilisation** | Créer des types réutilisables pour des objets ou des primitifs. | Combiner plusieurs types, requérant toutes les propriétés. |
| **Combinaison de types** | Non utilisé pour combiner des types. | Utilisé pour combiner plusieurs types. |
| **Exemple** | `type User = { name: string, age: number };` | `type UserWithAddress = User & Address;` |

### Quand utiliser chacun d'eux

-   Utilisez les alias de type lorsque vous souhaitez définir un **type unique** pour un objet, une fonction ou une autre structure de données. Ils aident à la clarté, à la réutilisation et à la sécurité du typage.
    
-   Utilisez les types d'intersection lorsque vous souhaitez **combiner plusieurs types** en un seul. C'est idéal pour les scénarios où un objet doit remplir plusieurs contrats à la fois, comme lors de la combinaison de différents types ou de l'extension des fonctionnalités d'un type existant.
    

En tirant parti des alias de type et des types d'intersection dans TypeScript, votre code devient plus facile à comprendre, plus sûr et plus facile à maintenir. Ces fonctionnalités structurent vos données, aidant à détecter les bogues plus tôt.

## Interfaces en TypeScript

Dans TypeScript, une **interface** est un moyen de définir la structure d'un objet, en décrivant ses propriétés et leurs types. Les interfaces sont utilisées pour imposer la vérification de type dans votre code, garantissant que les objets adhèrent à une structure spécifique. Semblables aux alias de type, les interfaces rendent votre code plus lisible, réutilisable et facile à maintenir.

### Qu'est-ce qu'une interface ?

Une interface est un plan (blueprint) pour un objet, définissant les propriétés et les méthodes qu'il doit avoir. Les interfaces peuvent être utilisées pour définir des types personnalisés pour des objets, des fonctions ou des classes.

Voici un exemple de base :

```typescript
interface User {
  name: string;
  age: number;
  address: string;
}

function getUserInfo(user: User): string {
  return `${user.name} (${user.age} ans) habite au ${user.address}`;
}

const user: User = {
  name: "Alice",
  age: 30,
  address: "123 Main St",
};

console.log(getUserInfo(user)); // Résultat : Alice (30 ans) habite au 123 Main St
```

Dans cet exemple :

-   L'interface `User` définit la forme de l'objet.
    
-   Tout objet de type `User` doit avoir les propriétés `name`, `age` et `address` avec les types spécifiés.
    
-   La fonction `getUserInfo` garantit que le paramètre `user` adhère à l'interface `User`.
    

### Similitudes entre les interfaces et les alias de type

-   Les interfaces et les alias de type peuvent tous deux définir la structure des objets.
    
-   Les deux peuvent être étendus, bien que la syntaxe diffère.
    
-   Les deux améliorent la lisibilité et la réutilisabilité du code.
    
-   Dans la plupart des cas, vous pouvez utiliser indifféremment des interfaces ou des alias de type pour définir des types d'objets.
    

Exemple avec un alias de type :

```typescript
type User = {
  name: string;
  age: number;
  address: string;
};

const user: User = {
  name: "Bob",
  age: 25,
  address: "456 Elm St",
};
```

Le `type` et l'`interface` obtiennent le même résultat dans ce scénario.

### Différences entre les interfaces et les alias de type

Résumons également leurs principales différences :

| Fonctionnalité | Interface | Alias de type |
| --- | --- | --- |
| **Syntaxe** | Utilise le mot-clé `interface`. | Utilise le mot-clé `type`. |
| **Extensibilité** | Peut être étendu à l'aide de `extends`. | Peut être étendu à l'aide de l'intersection (`&`). |
| **Fusion de déclarations** | Supporte la fusion sur plusieurs déclarations. | Ne supporte pas la fusion de déclarations. |
| **Types Union** | Ne peut pas définir de types union. | Peut définir des types union. |

### Extension avec des interfaces et des alias de type

**Extension d'interfaces :**

```typescript
interface Address {
  city: string;
  country: string;
}

interface User extends Address {
  name: string;
  age: number;
}

const user: User = {
  name: "Alice",
  age: 30,
  city: "New York",
  country: "USA",
};
```

**Utilisation de l'alias de type pour l'intersection :**

```typescript
type Address = {
  city: string;
  country: string;
};

type User = {
  name: string;
  age: number;
} & Address;

const user: User = {
  name: "Alice",
  age: 30,
  city: "New York",
  country: "USA",
};
```

Les deux approches aboutissent au même résultat, mais la syntaxe est différente.

### Concepts avancés avec les interfaces

**1. Propriétés optionnelles :**

Les interfaces peuvent définir des propriétés comme optionnelles à l'aide du symbole `?` :

```typescript
interface User {
  name: string;
  age?: number; // Optionnel
}

const user1: User = { name: "Alice" };
const user2: User = { name: "Bob", age: 25 };
```

**2. Propriétés Readonly :**

Utilisez le modificateur `readonly` pour rendre les propriétés immuables :

```typescript
interface User {
  readonly id: number;
  name: string;
}

const user: User = { id: 1, name: "Alice" };
// user.id = 2; // Erreur : Impossible d'assigner à 'id' car il s'agit d'une propriété en lecture seule.
```

**3. Types de fonction :**

Les interfaces peuvent définir des signatures de fonction :

```typescript
interface Add {
  (a: number, b: number): number;
}

const add: Add = (a, b) => a + b;
console.log(add(5, 3)); // Résultat : 8
```

**4. Signatures d'index :**

Les interfaces peuvent définir des noms de propriétés dynamiques :

```typescript
interface StringDictionary {
  [key: string]: string;
}

const dictionary: StringDictionary = {
  hello: "world",
  name: "Alice",
};
```

**5. Extension de plusieurs interfaces :**

Une interface peut étendre plusieurs interfaces :

```typescript
interface A {
  propA: string;
}

interface B {
  propB: number;
}

interface C extends A, B {
  propC: boolean;
}

const obj: C = {
  propA: "Bonjour",
  propB: 42,
  propC: true,
};
```

### Quand utiliser les interfaces vs les alias de type

-   Utilisez les **interfaces** lorsque vous devez définir des formes d'objets, en particulier si vous prévoyez de les étendre. Utilisez également les interfaces si vous avez besoin de la fusion de déclarations, car les alias de type ne la supportent pas.
    
-   Utilisez les **alias de type** pour des types plus complexes, tels que des unions ou des intersections.
    

## Tuples et Enums

Un **tuple** dans TypeScript est un type spécial de tableau qui possède un nombre fixe d'éléments, où chaque élément peut avoir un type différent. Les tuples garantissent que l'ordre et les types de valeurs restent cohérents.

```typescript
// Un tuple avec une chaîne et un nombre
let user: [string, number] = ["Alice", 25];

console.log(user[0]); // Résultat : Alice
console.log(user[1]); // Résultat : 25
```

Dans cet exemple, le tuple `user` contient une chaîne (nom) et un nombre (âge). L'ordre et les types doivent être respectés tels que définis.

#### **Tuple avec des éléments optionnels :**

```typescript
let person: [string, number, boolean?] = ["Bob", 30];

console.log(person); // Résultat : ["Bob", 30]
```

Ici, le troisième élément (booléen) est facultatif.

#### **Tuple avec propriété en lecture seule :**

```typescript
const coordinates: readonly [number, number] = [10, 20];

// coordinates[0] = 50; // Erreur : Impossible d'assigner à '0' car il s'agit d'un tuple en lecture seule
```

Le mot-clé `readonly` empêche de modifier les valeurs du tuple.

### **Enums**

Un **enum** (énumération) dans TypeScript est un moyen de définir un ensemble de constantes nommées. Les enums rendent le code plus lisible et aident à gérer un ensemble fixe de valeurs.

#### **Enums numériques (par défaut) :**

```typescript
enum Status {
  Pending,   // 0
  InProgress, // 1
  Completed,  // 2
}

console.log(Status.Pending);   // Résultat : 0
console.log(Status.Completed); // Résultat : 2
```

Par défaut, TypeScript assigne des valeurs numériques commençant à `0`.

#### **Valeurs numériques personnalisées dans les enums :**

```typescript
enum OrderStatus {
  Pending = 1,
  Shipped = 5,
  Delivered = 10,
}

console.log(OrderStatus.Shipped); // Résultat : 5
```

Ici, des valeurs personnalisées sont assignées à chaque statut.

#### **Enums de chaînes de caractères :**

```typescript
enum Direction {
  Up = "HAUT",
  Down = "BAS",
  Left = "GAUCHE",
  Right = "DROITE",
}

console.log(Direction.Up); // Résultat : "HAUT"
```

Les enums de chaînes stockent des valeurs textuelles fixes au lieu de nombres.

#### **Utilisation des enums dans une fonction :**

```typescript
function getStatusText(status: Status): string {
  switch (status) {
    case Status.Pending:
      return "La commande est en attente.";
    case Status.InProgress:
      return "La commande est en cours.";
    case Status.Completed:
      return "La commande est terminée.";
    default:
      return "Statut inconnu.";
  }
}

console.log(getStatusText(Status.InProgress)); // Résultat : "La commande est en cours."
```

Cette fonction prend une valeur d'enum et renvoie un message basé sur le statut.

Les tuples définissent des tableaux de longueur fixe avec différents types de données, tandis que les enums fournissent des constantes nommées pour une meilleure lisibilité, rendant votre code plus structuré et sûr au niveau du typage.

## **Assertion de type, Type Unknown et Type Never en TypeScript**

### **Assertion de type**

L'assertion de type indique à TypeScript de traiter une valeur comme un type spécifique. Elle ne change pas la valeur mais aide le compilateur à comprendre le type.

```typescript
let value: unknown = "Bonjour, TypeScript !";

// Utilisation de l'assertion de type pour traiter 'value' comme une chaîne
let strLength: number = (value as string).length;

console.log(strLength); // Résultat : 21
```

Ici, `value` est initialement `unknown`, mais l'assertion de type (`as string`) permet de la traiter comme une chaîne.

Et voici une autre façon d'écrire l'assertion de type :

```typescript
let num = <number>(10);
console.log(num); // Résultat : 10
```

La syntaxe `<number>` effectue également une assertion de type.

### **Type Unknown**

Revenons brièvement sur le type `unknown`. Rappelez-vous qu'il s'agit d'une alternative plus sûre à `any` et qu'il peut contenir n'importe quelle valeur – mais TypeScript exige une vérification de type avant de l'utiliser.

```typescript
let data: unknown;

data = "Bonjour";
data = 42;
data = true;

// Vérification de type avant d'utiliser la valeur
if (typeof data === "string") {
  console.log(data.toUpperCase()); // Fonctionne uniquement si data est une chaîne
}
```

Comme `data` est `unknown`, TypeScript n'autorise pas d'opérations directes sans vérifier son type au préalable.

### **Type Never**

Le type `never` représente des valeurs qui ne se produisent jamais. Il est souvent utilisé pour des fonctions qui ne reviennent jamais ou qui lèvent toujours une erreur.

```typescript
function throwError(message: string): never {
  throw new Error(message);
}

// throwError("Quelque chose s'est mal passé !"); // Cette fonction ne revient jamais
```

Ici, `throwError` ne renvoie rien car elle lève toujours une erreur.

#### **Exemple du type Never dans un Switch Case :**

```typescript
type Status = "success" | "failure";

function checkStatus(status: Status): void {
  switch (status) {
    case "success":
      console.log("L'opération a réussi.");
      break;
    case "failure":
      console.log("L'opération a échoué.");
      break;
    default:
      const unexpected: never = status; // Garantit que tous les cas sont gérés
  }
}
```

Cela garantit que toutes les valeurs possibles de `Status` sont traitées, évitant ainsi des comportements inattendus.

Voici une comparaison rapide de ces différentes approches :

| **Fonctionnalité** | **Description** |
| --- | --- |
| **Assertion de type** | Indique à TypeScript de traiter une valeur comme un type spécifique. |
| **Type Unknown** | Permet de stocker n'importe quelle valeur mais nécessite une vérification de type avant utilisation. |
| **Type Never** | Représente des valeurs qui ne se produisent jamais, utilisé pour les fonctions qui ne reviennent jamais. |

## Les génériques en TypeScript

Les génériques permettent d'écrire un code flexible, réutilisable et sûr au niveau du typage. Au lieu de spécifier un type fixe, les génériques permettent à une fonction, une classe ou une interface de travailler avec plusieurs types tout en maintenant la sécurité du typage.

### **Génériques de base**

Une fonction générique fonctionne avec n'importe quel type tout en conservant la sécurité du typage.

```typescript
function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Bonjour")); // Résultat : "Bonjour"
console.log(identity<number>(42));      // Résultat : 42
```

Ici, `<T>` est un **paramètre de type générique**, permettant à `identity` de fonctionner avec n'importe quel type.

### **Génériques avec des tableaux**

Les génériques aident à imposer la sécurité du typage dans les tableaux.

Voici un exemple d'inversion d'un tableau avec des génériques :

```typescript
function reverseArray<T>(arr: T[]): T[] {
  return arr.reverse();
}

console.log(reverseArray<number>([1, 2, 3]));  // Résultat : [3, 2, 1]
console.log(reverseArray<string>(["A", "B", "C"])); // Résultat : ["C", "B", "A"]
```

Cela garantit que la fonction renvoie toujours le même type de tableau que celui qu'elle reçoit.

### **Génériques avec des interfaces**

Les génériques peuvent être utilisés dans les interfaces pour définir des structures d'objets flexibles.

```typescript
interface StorageBox<T> {
  content: T;
}

let numberBox: StorageBox<number> = { content: 100 };
let stringBox: StorageBox<string> = { content: "TypeScript" };

console.log(numberBox.content); // Résultat : 100
console.log(stringBox.content); // Résultat : "TypeScript"
```

Ici, `StorageBox<T>` permet de stocker différents types tout en garantissant la cohérence.

### **Génériques avec des classes**

Les génériques fonctionnent également dans les classes, les rendant plus réutilisables.

Voici un exemple d'une classe de file d'attente (queue) générique :

```typescript
class Queue<T> {
  private items: T[] = [];

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }
}

let numberQueue = new Queue<number>();
numberQueue.enqueue(10);
numberQueue.enqueue(20);
console.log(numberQueue.dequeue()); // Résultat : 10

let stringQueue = new Queue<string>();
stringQueue.enqueue("Bonjour");
stringQueue.enqueue("Monde");
console.log(stringQueue.dequeue()); // Résultat : "Bonjour"
```

Cette classe fonctionne avec n'importe quel type tout en maintenant la sécurité du typage.

### **Génériques avec plusieurs paramètres de type**

Une fonction ou une classe peut accepter plus d'un type générique.

Voici un exemple d'une fonction qui permute deux valeurs :

```typescript
function swap<T, U>(first: T, second: U): [U, T] {
  return [second, first];
}

console.log(swap<string, number>("Âge", 25)); // Résultat : [25, "Âge"]
console.log(swap<boolean, string>(true, "Oui")); // Résultat : ["Oui", true]
```

Ici, `<T, U>` permet à la fonction de travailler avec différents types en même temps.

### **Génériques avec contraintes**

Parfois, un type générique doit suivre certaines règles. Les **contraintes** garantissent qu'un type possède des propriétés spécifiques.

Voici un exemple pour s'assurer qu'un type possède une propriété `length` :

```typescript
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

console.log(getLength("Bonjour"));   // Résultat : 7
console.log(getLength([1, 2, 3])); // Résultat : 3
```

Ici, `T extends { length: number }` garantit que `T` possède une propriété `length`.

### **Avancé : Génériques avec l'opérateur** `keyof`

L'opérateur `keyof` peut être utilisé pour garantir des noms de propriétés valides.

Voici un exemple d'obtention de la valeur d'une propriété par son nom :

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

let user = { name: "Alice", age: 30 };

console.log(getProperty(user, "name")); // Résultat : "Alice"
console.log(getProperty(user, "age"));  // Résultat : 30
```

Ici, `K extends keyof T` garantit que `key` est une propriété valide de `T`.

## Conclusion

Dans ce manuel, vous avez eu un aperçu approfondi de la manière dont vous pouvez utiliser les bases de TypeScript dans React. Nous avons abordé des concepts importants tels que les annotations de type, l'inférence de type et la gestion des objets et des tableaux, montrant comment TypeScript améliore la stabilité et la maintenance du code.

Nous avons également couvert certains sujets avancés tels que les types union et any, les propriétés readonly, ainsi que l'utilisation des génériques, des alias de type et des interfaces. J'espère que les exemples vous ont aidé à comprendre comment TypeScript peut améliorer votre développement JavaScript, faisant de TS un outil précieux pour créer des applications robustes et à grande échelle.

[1]: #heading-what-is-typescript
[2]: #heading-setting-up-the-project
[3]: #heading-type-annotations-and-type-inference
[4]: #heading-commonly-used-type-annotations
[5]: #heading-type-inference
[6]: #heading-the-union-and-any-types
[7]: #heading-be-careful-when-using-any-in-typescript
[8]: #heading-unknown-as-a-safer-alternative-to-any-in-typescript
[9]: #heading-objects-in-typescript
[10]: #heading-the-problem-of-mutability
[11]: #heading-readonly-on-object-properties
[12]: #heading-readonly-arrays
[13]: #heading-function-params-and-function-returns
[14]: #heading-the-risks-of-using-any
[15]: #heading-use-explicit-types-for-parameters-and-return-values
[16]: #heading-using-unknown-as-a-safer-alternative-to-any-in-typescript
[17]: #heading-handling-optional-default-in-typescript
[18]: #heading-rest-parameters
[19]: #heading-objects-as-parameters-in-typescript
[20]: #heading-type-aliases-in-typescript
[21]: #heading-what-is-an-intersection-type-in-typescript
[22]: #heading-interfaces-in-typescript
[23]: #heading-tuples-and-enums
[24]: #heading-type-assertion-type-unknown-and-type-never-in-typescript
[25]: #heading-generics-in-typescript
[26]: #heading-conclusion
[27]: https://vite.dev/guide/
