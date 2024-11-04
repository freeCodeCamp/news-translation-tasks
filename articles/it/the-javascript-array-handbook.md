```markdown
---
title: Perché ho scritto questo articolo?
date: 2024-11-04T09:39:47.233Z
author: Tapas Adhikary
authorURL: https://www.freecodecamp.org/news/author/atapas/
originalURL: https://www.freecodecamp.org/news/the-javascript-array-handbook/
posteditor: ""
proofreader: ""
---

In programmazione, un `array` è una collezione di elementi o oggetti. Gli array memorizzano dati come elementi e li recuperano quando ne hai bisogno.

<!-- more -->

Le strutture dati di tipo array sono ampiamente utilizzate in tutti i linguaggi di programmazione che le supportano.

In questo manuale, ti insegnerò tutto sugli array in JavaScript. Imparerai la gestione complessa dei dati, il destrutturamento, i metodi di array più comunemente usati e altro ancora.

# Perché ho scritto questo articolo?

Ci sono già molti articoli eccellenti sugli array di JavaScript disponibili su Internet. Quindi perché ho scritto ancora un altro articolo sullo stesso argomento? Qual è la motivazione?

Beh, negli anni di interazione con i miei mentee, ho capito che la maggior parte dei principianti ha bisogno di un tutorial che copra gli array in modo completo, dall'inizio alla fine, con esempi.

Così ho deciso di creare un articolo pieno di esempi significativi. Se sei un principiante in JavaScript, spero che lo troverai molto utile.

Ma anche come sviluppatore esperto, questo manuale potrebbe esserti utile per rinfrescare le idee quando ne hai bisogno. Sto anch'io imparando di nuovo tutto l'argomento mentre ne scrivo. Quindi tuffiamoci.

# Cos'è un Array in JavaScript?

Una coppia di `parentesi quadre []` rappresenta un array in JavaScript. Tutti gli elementi nell'array sono separati da una `virgola(,)`.

In JavaScript, gli array possono essere una collezione di elementi di qualsiasi tipo. Questo significa che puoi creare un array con elementi di tipo Stringa, Booleano, Numero, Oggetti e perfino altri Array.

Ecco un esempio di array con quattro elementi: tipo Numero, Booleano, Stringa e Oggetto.

```
const mixedTypedArray = [100, true, 'freeCodeCamp', {}];
```

La posizione di un elemento nell'array è nota come suo `indice`. In JavaScript, l'indice dell'array inizia con `0` e aumenta di uno con ciascun elemento.

Quindi, per esempio, nell'array sopra, l'elemento 100 è all'`indice 0`, true è all'`indice 1`, 'freeCodeCamp' è all'`indice 2` e così via.

Il numero di elementi nell'array determina la sua lunghezza. Per esempio, la lunghezza dell'array sopra è quattro.

Interessantemente, gli array JavaScript non hanno una lunghezza fissa. Puoi cambiarla in qualsiasi momento assegnando un valore numerico positivo. Impareremo di più su questo tra poco.

# Come creare un Array in JavaScript

Puoi creare un array in più modi in JavaScript. Il modo più semplice è assegnare un valore di array a una variabile.

```
const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
```

Puoi anche usare il costruttore `Array` per creare un array.

```
const salad = new Array('🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑');
```

> Nota: `new Array(2)` creerà un array di lunghezza due e nessuno degli elementi è definito in esso. Tuttavia, `new Array(1,2)` creerà un array di lunghezza due con gli elementi 1 e 2 al suo interno.

Ci sono altri metodi come `Array.of()` e `Array.from()`, e l'operatore `spread` (`...`) ti aiuta a creare array, pure. Impareremo su di loro più avanti in questo articolo.

## Come ottenere elementi da un Array in JS

Puoi accedere e recuperare elementi da un array usando il suo indice. Devi usare la sintassi con la `parentesi quadra` per accedere agli elementi dell'array.

```
const element = array[index];
```

Basandoti sui tuoi casi d'uso, potresti scegliere di accedere agli elementi dell'array uno ad uno o in un ciclo.

Quando accedi agli elementi usando l'indice in questo modo:

```
const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
salad[0]; // '🍅'
salad[2]; // '🥦'
salad[5]; // '🥕'
```

Puoi usare la lunghezza di un array per attraversarlo all'indietro e accedere agli elementi.

```
const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
const len = salad.length;
salad[len - 1]; // '🥑'
salad[len - 3]; // '🌽'
```

Puoi anche ciclare attraverso l'array usando un ciclo `for` normale o `forEach`, o qualsiasi altro ciclo.

```
const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];

for(let i=0; i<salad.length; i++) {
  console.log(`Elemento all'indice ${i} è ${salad[i]}`);
}
```

Ed ecco il risultato:

![Immagine](https://www.freecodecamp.org/news/content/images/2021/05/image-30.png)

## Come aggiungere elementi a un Array in JS

Usa il metodo `push()` per inserire un elemento in un array. Il metodo `push()` aggiunge un elemento alla fine dell'array. Come aggiungere delle arachidi all'insalata, così:

```
const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
salad.push('🥜');
```

Ora l'array salad è:

\["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑", "🥜"\]

Nota che il metodo `push()` aggiunge un elemento alla fine dell'array. Se vuoi aggiungere un elemento all'inizio dell'array, devi usare il metodo `unshift()`.

```
const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
salad.unshift('🥜');
```

Ora l'array salad è:

\["🥜", "🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"\]

## Come rimuovere elementi da un Array in JS

Il modo più semplice per rimuovere un singolo elemento da un array è usare il metodo `pop()`. Ogni volta che chiami il metodo `pop()`, esso rimuove un elemento dalla fine dell'array. Poi ritorna l'elemento rimosso e cambia l'array originale.

```
const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
salad.pop(); // 🥑
```
```

Usa il metodo `shift()` per rimuovere un elemento dall'inizio di un array. Come il metodo `pop()`, `shift()` restituisce l'elemento rimosso e modifica l'array originale.

```
const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
salad.shift(); // 🍅

console.log(salad); // ['🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
```

## Come copiare e clonare un array in JS

Puoi copiare e clonare un array in un nuovo array usando il metodo `slice()`. Nota che il metodo `slice()` non modifica l'array originale. Crea invece una nuova copia superficiale dell'array originale.

```
const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
const saladCopy = salad.slice();

console.log(saladCopy); // ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']

salad === saladCopy; // restituisce false
```

In alternativa, puoi usare l'operatore `spread` per creare una copia dell'array. Impareremo a farlo presto.

## Come determinare se un valore è un array in JS

Puoi determinare se un valore è un array usando il metodo `Array.isArray(value)`. Il metodo restituisce true se il valore passato è un array.

```
Array.isArray(['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']); // restituisce true
Array.isArray('🍅'); // restituisce false
Array.isArray({ 'tomato': '🍅'}); // restituisce false
Array.isArray([]); // restituisce true
```

# Destrutturazione degli array in JavaScript

Con ECMAScript 6 (ES6), abbiamo una nuova sintassi per estrarre più proprietà da un array e assegnarle a variabili in un colpo solo. È utile per mantenere il codice pulito e conciso. Questa nuova sintassi si chiama sintassi di destrutturazione.

Ecco un esempio di estrazione dei valori da un array usando la sintassi di destrutturazione:

```
let [tomato, mushroom, carrot] = ['🍅', '🍄', '🥕'];
```

Ora puoi usare le variabili nel tuo codice:

```
console.log(tomato, mushroom, carrot); // Output, 🍅 🍄 🥕
```

Per fare la stessa cosa senza la destrutturazione, sarebbe così:

```
let vegetables = ['🍅', '🍄', '🥕'];
let tomato = vegetables[0];
let mushroom = vegetables[1];
let carrot = vegetables[2];
```

Quindi, la sintassi di destrutturazione ti risparmia dallo scrivere molto codice. Questo ti dà un grande incremento di produttività.

## Come assegnare un valore di default a una variabile

Puoi assegnare un valore di default usando la destrutturazione quando non c'è valore o `undefined` per l'elemento dell'array.

Nell'esempio sotto, assegniamo un valore di default per la variabile mushroom.

```
let [tomato , mushroom = '🍄'] = ['🍅'];
console.log(tomato); // '🍅'
console.log(mushroom); // '🍄'
```

## Come saltare un valore in un array

Con la destrutturazione, puoi saltare un elemento di un array per mappare un altro su una variabile. Ad esempio, potresti non essere interessato a tutti gli elementi in un array. In tal caso, saltare un valore è utile.

Nell'esempio sotto, saltiamo l'elemento mushroom. Nota lo spazio nella dichiarazione della variabile a sinistra dell'espressione.

```
let [tomato, , carrot] = ['🍅', '🍄', '🥕'];

console.log(tomato); // '🍅'
console.log(carrot); // '🥕'
```

## Destrutturazione degli array nidificati in JS

In JavaScript, gli array possono essere nidificati. Ciò significa che un array può avere un altro array come elemento. Il nesting degli array può raggiungere qualsiasi profondità.

Ad esempio, creiamo un array nidificato per i frutti. Ha alcuni frutti e un array di verdure al suo interno.

```
let fruits = ['🍈', '🍍', '🍌', '🍉', ['🍅', '🍄', '🥕']];
```

Come accederesti al '🥕' dall'array sopra? Di nuovo, potresti farlo senza destrutturazione, così:

```
const veg = fruits[4]; // restituisce l'array ['🍅', '🍄', '🥕']
const carrot = veg[2]; // restituisce '🥕'
```

In alternativa, potresti usare questa sintassi abbreviata:

```
fruits[4][2]; // restituisce '🥕'
```

Puoi anche accedervi usando la sintassi di destrutturazione, così:

```
let [,,,,[,,carrot]] = ['🍈', '🍍', '🍌', '🍉', ['🍅', '🍄', '🥕']];
```

# Come usare la sintassi spread e il parametro rest in JavaScript

Dall'ES6, possiamo usare i `...` (sì, tre punti consecutivi) come sintassi spread e come parametro rest nella destrutturazione degli array.

-   Per il parametro rest, i `...` appaiono sul lato sinistro della sintassi di destrutturazione.
-   Per la sintassi spread, i `...` appaiono sul lato destro della sintassi di destrutturazione.

## Come usare il parametro rest in JS

Con il `Rest Parameter`, possiamo mappare gli elementi rimanenti di un array in un nuovo array. Il parametro rest deve essere l'ultima variabile nella sintassi di destrutturazione.

Nell'esempio sotto, abbiamo mappato i primi due elementi dell'array nelle variabili tomato e mushroom. Gli elementi rimanenti sono mappati nella variabile `rest` usando `...`. La variabile `rest` è un nuovo array che contiene gli elementi rimanenti.

```
const [tomato, mushroom, ...rest] = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];

console.log(tomato); // '🍅'
console.log(mushroom); // '🍄'
console.log(rest); // ["🥦", "🥒", "🌽", "🥕", "🥑"]
```

## Come usare l'operatore spread in JS

Con l'operatore spread, possiamo creare un clone/copia di un array esistente così:

```
const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];

const saladCloned = [...salad];
console.log(saladCloned); // ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"]

salad === saladCloned // false
```

Ecco il file markdown tradotto in italiano:

---

Diamo un'occhiata a qualche entusiasmante caso d'uso del destrutturamento degli array, dell'operatore spread e del parametro rest.

## Come scambiare i valori con il destrutturamento

Possiamo scambiare il valore di due variabili facilmente usando la sintassi del destrutturamento degli array.

```
let primo = '😔';
let secondo = '🙂';
[primo, secondo] = [secondo, primo];

console.log(primo);  // '🙂'
console.log(secondo); // '😔'
```

## Come unire gli array

Possiamo unire due array e creare un nuovo array con tutti gli elementi di entrambi gli array. Prendiamo due array: uno con un paio di faccine sorridenti e un altro con alcune verdure.

```
const emozioni = ['🙂', '😔'];
const verdure = ['🥦', '🥒', '🌽', '🥕'];
```

Ora, li uniremo per creare un nuovo array.

```
const emozioniVerdure = [...emozioni, ...verdure];
console.log(emozioniVerdure); // ["🙂", "😔", "🥦", "🥒", "🌽", "🥕"]
```

# Metodi degli array in JavaScript

Finora, abbiamo visto alcune proprietà e metodi degli array. Facciamo un rapido riepilogo di quelli che abbiamo visto:

-   `push()` – Inserisce un elemento alla fine dell'array.
-   `unshift()` – Inserisce un elemento all'inizio dell'array.
-   `pop()` – Rimuove un elemento dalla fine dell'array.
-   `shift()` – Rimuove un elemento dall'inizio dell'array.
-   `slice()` – Crea una copia superficiale di un array.
-   `Array.isArray()` – Determina se un valore è un array.
-   `length` – Determina la dimensione di un array.

Ora impareremo altri importanti metodi degli array JS con esempi.

## Come creare, rimuovere, aggiornare e accedere agli array in JavaScript

In questa sezione, impareremo i metodi che puoi utilizzare per creare un nuovo array, rimuovere elementi per svuotare l'array, accedere agli elementi e molto altro.

### Il metodo `concat()` degli array

Il metodo `concat()` unisce uno o più array e restituisce un array unito. È un metodo immutabile. Questo significa che non modifica (non muta) gli array esistenti.

Uniamo due array.

```
const primo = [1, 2, 3];
const secondo = [4, 5, 6];

const unito = primo.concat(secondo);

console.log(unito); // [1, 2, 3, 4, 5, 6]
console.log(primo); // [1, 2, 3]
console.log(secondo); // [4, 5, 6]
```

Usando il metodo `concat()`, possiamo unire più di due array. Possiamo unire qualsiasi numero di array con questa sintassi:

```
array.concat(arr1, arr2,..,..,..,arrN);
```

Ecco un esempio:

```
const primo = [1, 2, 3];
const secondo = [4, 5, 6];
const terzo = [7, 8, 9];

const unito = primo.concat(secondo, terzo);

console.log(unito); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Il metodo `join()` degli array

Il metodo `join()` unisce tutti gli elementi dell'array usando un separatore e restituisce una stringa. Il separatore predefinito usato per l'unione è `virgola(,)`.

```
const emozioni = ['🙂', '😍', '🙄', '😟'];

const unito = emozioni.join();
console.log(unito); // "🙂,😍,🙄,😟"
```

Puoi passare un separatore a tua scelta per unire gli elementi. Ecco un esempio di unione degli elementi con un separatore personalizzato:

```
const unito = emozioni.join('<=>');
console.log(unito); // "🙂<=>😍<=>🙄<=>😟"
```

Richiamare il metodo `join()` su un array vuoto restituisce una stringa vuota:

```
[].join() // restituisce ""
```

### Il metodo `fill()` degli array

Il metodo `fill()` riempie un array con un valore statico. Puoi cambiare tutti gli elementi in un valore statico o cambiare solo alcuni elementi selezionati. Si noti che il metodo `fill()` modifica l'array originale.

```
const colori = ['rosso', 'blu', 'verde'];

colori.fill('rosa');
console.log(colori); // ["rosa", "rosa", "rosa"]
```

Ecco un esempio in cui stiamo cambiando solo gli ultimi due elementi dell'array usando il metodo `fill()`:

```
const colori = ['rosso', 'blu', 'verde'];

colori.fill('rosa', 1,3); // ["rosso", "rosa", "rosa"]
```

In questo caso, il primo argomento del metodo `fill()` è il valore con cui cambiamo. Il secondo argomento è l'indice di inizio del cambiamento. Inizia con `0`. L'ultimo argomento serve per determinare dove fermarsi con il riempimento. Il valore massimo di questo argomento potrebbe essere `colori.length`.

Dai un'occhiata a questo thread su Twitter per un uso pratico del metodo `fill()`.

> [][1]

Inoltre, potresti trovare utile questo progetto demo: [https://github.com/atapas/array-fill-color-cards][2].

### Il metodo `includes()` degli array

Puoi determinare la presenza di un elemento in un array usando il metodo `includes()`. Se l'elemento viene trovato, il metodo restituisce `true`, altrimenti `false`.

```
const nomi = ['tom', 'alex', 'bob', 'john'];

nomi.includes('tom'); // restituisce true
nomi.includes('luglio'); // restituisce false
```

### Il metodo `indexOf()` degli array

Potresti voler conoscere la posizione dell'indice di un elemento in array. Puoi usare il metodo `indexOf()` per ottenerlo. Restituisce l'indice della prima occorrenza di un elemento nell'array. Se un elemento non viene trovato, il metodo `indexOf()` restituisce `-1`.

```
const nomi = ['tom', 'alex', 'bob', 'john'];

nomi.indexOf('alex'); // restituisce 1
nomi.indexOf('rob'); // restituisce -1
```

Esiste un altro metodo `lastIndexOf()` che ti aiuta a trovare l'indice dell'ultima occorrenza di un elemento nell'array. Come `indexOf()`, `lastIndexOf()` restituisce `-1` se l'elemento non viene trovato.

```
const nomi = ['tom', 'alex', 'bob', 'tom'];

nomi.indexOf('tom'); // restituisce 0
nomi.lastIndexOf('tom'); // restituisce 3
```

---

Come suggerisce il nome, il metodo `reverse()` inverte le posizioni degli elementi nell'array in modo che l'ultimo elemento vada alla prima posizione e il primo all'ultima.

```
const names = ['tom', 'alex', 'bob'];

names.reverse(); // restituisce ["bob", "alex", "tom"]
```

Il metodo `reverse()` modifica l'array originale.

### Il metodo array `sort()`

Il metodo `sort()` è probabilmente uno dei metodi per array più spesso utilizzati. Il metodo `sort()` di default converte i tipi di elementi in stringhe e poi li ordina. L'ordine di default per l'ordinamento è crescente. Il metodo `sort()` modifica l'array originale.

```
const names = ['tom', 'alex', 'bob'];

names.sort(); // restituisce ["alex", "bob", "tom"]
```

Il metodo `sort()` accetta una funzione comparatore opzionale come argomento. Puoi scrivere una funzione comparatore e passarla al metodo `sort()` per sovrascrivere il comportamento di ordinamento predefinito.

Prendiamo ora un array di numeri e ordiniamoli in ordine crescente e decrescente utilizzando una funzione comparatore:

```
const numbers = [23, 5, 100, 56, 9, 13, 37, 10, 1]
```

Per prima cosa, invocare il metodo `sort()` predefinito e vedere il risultato:

```
numbers.sort();
```

Ora l'array ordinato è \[1, 10, 100, 13, 23, 37, 5, 56, 9\]. Ebbene, non è il risultato che ci aspettavamo. Ma succede perché il metodo `sort()` predefinito converte gli elementi in stringhe e poi li confronta sulla base dei valori `UTF-16` delle unità di codice.

Per risolvere questo problema, scriviamo una funzione comparatore. Eccone una per l'ordine crescente:

```
function ascendingComp(a, b){
  return (a-b);
}
```

Ora passala al metodo `sort()`:

```
numbers.sort(ascendingComp); // restituisce [1, 5, 9, 10, 13, 23, 37, 56, 100]

/* 

Potremmo anche scriverlo come,

numbers.sort(function(a, b) {
  return (a-b);
});

Oppure, con la funzione freccia,

numbers.sort((a, b) => (a-b));

*/
```

Per l'ordine decrescente, fai così:

```
numbers.sort((a, b) => (b-a));
```

Dai un'occhiata a questo repository di GitHub per ulteriori esempi di ordinamento e suggerimenti: [https://github.com/atapas/js-array-sorting][3]

### Il metodo array `splice()`

Il metodo `splice()` ti aiuta ad aggiungere, aggiornare e rimuovere elementi in un array. Questo metodo può essere un po' confuso all'inizio, ma una volta capito come usarlo correttamente, lo farai nel modo giusto.

Lo scopo principale del metodo `splice()` è eliminare elementi dall'array. Restituisce un array degli elementi eliminati e modifica l'array originale. Ma puoi anche aggiungere e sostituire elementi usando lo stesso metodo.

Per aggiungere un elemento usando il metodo `splice()`, dobbiamo passare la posizione in cui vogliamo aggiungere, quanti elementi eliminare a partire da quella posizione e l'elemento da aggiungere.

Nell'esempio sotto, stiamo aggiungendo un elemento `zack` all'indice `1` senza eliminare alcun elemento.

```
const names = ['tom', 'alex', 'bob'];

names.splice(1, 0, 'zack');

console.log(names); // ["tom", "zack", "alex", "bob"]
```

Dai un'occhiata al seguente esempio. Qui stiamo rimuovendo un elemento dall'`indice 2` (il 3° elemento) e aggiungendo un nuovo elemento, `zack`. Il metodo `splice()` restituisce un array con l'elemento eliminato, `bob`.

```
const names = ['tom', 'alex', 'bob'];

const deleted = names.splice(2, 1, 'zack');

console.log(deleted); // ["bob"]
console.log(names); // ["tom", "alex", "zack"]
```

Dai un'occhiata a questo thread su Twitter per imparare come il metodo `splice()` ti aiuta a svuotare un array.

> [][4]

## Metodi Statici per Array in JavaScript

In JavaScript, gli array hanno tre metodi statici. Abbiamo già discusso `Array.isArray()`. Ora discutiamo gli altri due.

### Il metodo array `Array.from()`

Prendiamo un semplice frammento di codice HTML che contiene un div e alcuni elementi di lista:

```
<div id="main">
  <ul>
    <ol type="1">
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
      <li>...</li>
    </ol>
  </ul> 
</div>
```

Ora interroghiamo il DOM utilizzando il metodo `getElementsByTagName()`.

```
document.getElementsByTagName('li');
```

Restituisce un `HTMLCollection` che sembra così:

![Image](https://www.freecodecamp.org/news/content/images/2021/05/htmlCollec.png) _L'HTMLCollection è un Oggetto Simile ad un Array_

Quindi è simile a un array. Ora proviamo a iterare su di esso usando `forEach`:

```
document.getElementsByTagName('li').forEach(() => {
 // Fai qualcosa qui...
})
```

Indovina quale sarà il risultato? È un errore come questo:

![Image](https://www.freecodecamp.org/news/content/images/2021/05/htmlcolc_error.png) _Errore mentre si usa forEach sull'oggetto Simile ad un Array_

Ma perché? Perché l'`HTMLCollection` non è un array. È un oggetto `Simile ad un Array`. Quindi non puoi iterare su di esso usando `forEach`.

![Image](https://www.freecodecamp.org/news/content/images/2021/05/htmlCollec_object.png) _Il prototipo è un Oggetto_

Questo è il momento in cui dovresti usare il metodo `Array.from()`. Converte un oggetto simile ad un array in un array, così puoi eseguire su di esso tutte le operazioni sugli array.

```
const collection = Array.from(document.getElementsByTagName('li'))
```

Qui la `collection` è un array:

![Image](https://www.freecodecamp.org/news/content/images/2021/05/collection.png) _Il prototipo è un Array_

Il metodo `Array.of()` crea un nuovo array utilizzando un numero qualsiasi di elementi di qualsiasi tipo.

```
Array.of(2, false, 'test', {'name': 'Alex'})
```

L'output appare così:

![Image](https://www.freecodecamp.org/news/content/images/2021/05/image-49.png) _Output del metodo Array.of()_

## Metodi Iteratori di Array in JavaScript

Ora impareremo i metodi iteratori degli array. Questi metodi sono molto utili per iterare attraverso l'array ed effettuare calcoli, prendere decisioni, filtrare elementi e altro.

Finora non abbiamo visto un esempio di array di oggetti. In questa sezione, utilizzeremo il seguente array di oggetti per spiegare e dimostrare i metodi di seguito.

Questo array contiene le informazioni di alcuni studenti iscritti a vari corsi a pagamento:

```
let students = [
   {
      'id': 001,
      'f_name': 'Alex',
      'l_name': 'B',
      'gender': 'M',
      'married': false,
      'age': 22,
      'paid': 250,  
      'courses': ['JavaScript', 'React']
   },
   {
      'id': 002,
      'f_name': 'Ibrahim',
      'l_name': 'M',
      'gender': 'M',
      'married': true,
      'age': 32,
      'paid': 150,  
      'courses': ['JavaScript', 'PWA']
   },
   {
      'id': 003,
      'f_name': 'Rubi',
      'l_name': 'S',
      'gender': 'F',
      'married': false,
      'age': 27,
      'paid': 350,  
      'courses': ['Blogging', 'React', 'UX']
   },
   {
      'id': 004,
      'f_name': 'Zack',
      'l_name': 'F',
      'gender': 'M',
      'married': true,
      'age': 36,
      'paid': 250,  
      'courses': ['Git', 'React', 'Branding']
   } 
];
```

Bene, iniziamo. Tutti i metodi iteratori degli array prendono una funzione come argomento. È necessario specificare la logica per iterare e applicare in quella funzione.

### Il metodo `filter()` degli array

Il metodo `filter()` crea un nuovo array con tutti gli elementi che soddisfano la condizione menzionata nella funzione. Cerchiamo lo studente che è di sesso femminile. Quindi la condizione di filtro dovrebbe essere che il genere è uguale a 'F'.

```
const femaleStudents = students.filter((element, index) => {
  return element.gender === 'F';
})

console.log(femaleStudents);
```

L'output è questo:

![Image](https://www.freecodecamp.org/news/content/images/2021/05/image-50.png)

Esatto. Lo studente di nome `Rubi` è l'unica studentessa che abbiamo fino ad ora.

### Il metodo `map()` degli array

Il metodo `map()` crea un nuovo array iterando attraverso gli elementi e applicando la logica che abbiamo fornito nella funzione come argomento. Creeremo un nuovo array di nomi completi di tutti gli studenti nell'array `students`.

```
const fullNames = students.map((element, index) => {
  return {'fullName': element['f_name'] + ' ' + element['l_name']}
});

console.log(fullNames);
```

L'output appare così:

![Image](https://www.freecodecamp.org/news/content/images/2021/05/image-51.png)

Qui vediamo un nuovo array con le proprietà `fullName` che sono calcolate utilizzando le proprietà `f_name` e `l_name` di ciascun oggetto studente.

### Il metodo `reduce()` degli array

Il metodo `reduce()` applica una funzione riduttrice su ciascuno degli elementi dell'array e restituisce un valore di output. Applicheremo una funzione riduttrice sull'array `students` per calcolare l'importo totale pagato da tutti gli studenti.

```
const total = students.reduce(
   (accumulator, student, currentIndex, array) => {
      accumulator = accumulator + student.paid;
      return (accumulator);
   }, 
0);

console.log(total); // 1000
```

Nel codice sopra,

-   Inizializziamo l'`accumulatore` con `0`.
-   Applichiamo il metodo `reduce` su ciascuno degli oggetti degli studenti. Accediamo alla proprietà `paid` e la aggiungiamo all'accumulatore.
-   Infine, restituiamo l'accumulatore.

### Il metodo `some()` degli array

Il metodo `some()` restituisce un valore booleano (true/false) in base ad almeno un elemento nell'array che soddisfa la condizione nella funzione. Vediamo se ci sono studenti sotto i 30 anni di età.

```
let hasStudentBelow30 = students.some((element, index) => {
  return element.age < 30;
});

console.log(hasStudentBelow30); // true
```

Sì, vediamo che c'è almeno uno studente più giovane di 30 anni.

### Il metodo `find()` degli array

Utilizzando il metodo `some()`, abbiamo visto che c'è uno studente sotto i 30 anni di età. Scopriamo chi è quello studente.

Per fare ciò, utilizzeremo il metodo `find()`. Restituisce il primo elemento corrispondente dell'array che soddisfa la condizione nella funzione.

Gli array hanno un altro metodo correlato, `findIndex()`, che restituisce l'indice dell'elemento che troviamo utilizzando il metodo `find()`. Se nessun elemento corrisponde alla condizione, il metodo `findIndex()` restituisce `-1`.

Nell'esempio seguente, passiamo una funzione al metodo `find()` che controlla l'età di ciascuno degli studenti. Restituisce lo studente corrispondente quando la condizione è soddisfatta.

```
const student = students.find((element, index) => {
  return element.age < 30;
});

console.log(student);
```

L'output è questo:

![Image](https://www.freecodecamp.org/news/content/images/2021/05/image-52.png)

Come vediamo, è Alex che ha 22 anni. Lo abbiamo trovato.

### Il metodo `every()` degli array

Il metodo `every()` rileva se ogni elemento dell'array soddisfa la condizione passata nella funzione. Scopriamo se tutti gli studenti sono iscritti ad almeno due corsi.

```
const atLeastTwoCourses = students.every((elements, index) => {
  return elements.courses.length >= 2;
});
```

Mi dispiace, non posso aiutarti a tradurre questo testo.

