```markdown
---
title: Il Manuale di Preparazione ai Colloqui su React – Argomenti Essenziali ed Esempi di Codice
date: 2024-11-04T08:40:47.162Z
author: Kunal Nalawade
authorURL: https://www.freecodecamp.org/news/author/KunalN25/
originalURL: https://www.freecodecamp.org/news/react-interview-prep-handbook/
posteditor: ""
proofreader: ""
---

Ciao a tutti! Nell'ambiente in continua evoluzione dello sviluppo web, React è molto richiesto. Le aziende cercano spesso sviluppatori React qualificati per costruire applicazioni web dinamiche e coinvolgenti.

<!-- more -->

Se sei uno sviluppatore web o aspiri a diventarlo, è importante capire cosa cercano queste aziende nei candidati. Prepararsi per i colloqui in queste aziende può essere un compito oneroso.

Quindi, in questo articolo elencherò alcuni degli argomenti per aiutarti a prepararti per il tuo prossimo colloquio su React. Discuteremo ogni argomento in dettaglio, con esempi, in modo che tu possa avere una buona visuale prima dei colloqui e possibilmente ottenere un vantaggio sugli altri candidati. Iniziamo!

## Indice dei Contenuti

-   [Fondamenti di JavaScript][1]
    
-   [Elementi Essenziali di React][2]
    
-   [Hook di React][3]
    
-   [Concetti Aggiuntivi][4]
    
-   [React Redux][5]
    
-   [Note Aggiuntive][6]
    

## Fondamenti di JavaScript

Per prepararti a qualsiasi colloquio di sviluppo web, devi familiarizzare con i fondamenti di JavaScript indipendentemente dal framework elencato nella descrizione del lavoro. Le domande basate sui framework sono sempre secondarie rispetto ai fondamenti di JavaScript, quindi aspettati di essere testato su JavaScript prima di tutto.

Se sei un principiante, devi chiarire i fondamenti di JavaScript prima di passare a React. Molte persone (me compreso) commettono l'errore di passare direttamente a React dopo aver imparato un po' di JavaScript.

Ho scritto un post dettagliato sui [concetti importanti di JavaScript per i colloqui][7]. Puoi includere questo come parte della tua preparazione al colloquio su React. Se hai chiari tutti i fondamenti di JavaScript, puoi passare alla sezione successiva.

## Elementi Essenziali di React

Vediamo alcuni argomenti essenziali con cui è necessario familiarizzare:

### Cos'è il Virtual DOM in React?

Come tutti sappiamo, il DOM del browser (Document Object Model) è una struttura ad albero di diversi elementi HTML. Il Virtual DOM è una rappresentazione in memoria o una versione leggera del DOM reale. È un'astrazione creata da React simile al DOM reale.

Perché React usa il Virtual DOM? Aggiornare e ri-renderizzare il DOM reale è lento e inefficiente, specialmente se viene aggiornato frequentemente. Quindi, invece di aggiornare direttamente il DOM reale, React aggiorna il Virtual DOM.

Il Virtual DOM viene quindi confrontato con il DOM reale e, una volta identificate le differenze, aggiorna solo quella parte del DOM, anziché renderizzare di nuovo l'intero DOM. Questo processo è noto come [differenza e riconciliazione][8].

### Cos'è JSX?

JSX (JavaScript XML) è un'estensione della sintassi per JavaScript che consente di scrivere codice simile a HTML nello stesso file del codice JavaScript. Questo rende molto facile far funzionare l'HTML con JavaScript.

Puoi scrivere codice JSX in un file `.js` o `.jsx`. Considera il seguente file **MyComponent.jsx**:

```
const MyComponent = () => {
    const name = "Kunal"
    return (
        <div>
            {name}
        </div>
    )
}
```

### Cos'è lo Stato?

Lo stato è un oggetto di React che contiene informazioni sul componente e determina come si comporta. Lo stato può cambiare in qualsiasi momento in base al comportamento dell'utente. Qualsiasi cambiamento nello stato causa il re-render dell'intero componente.

Lo stato viene utilizzato per rendere dinamiche le informazioni nel componente e rende l'interfaccia utente interattiva. Lo stato determina come un componente reagisce a eventi come input dell'utente e manipolazione dei dati, e controlla cosa rende sullo schermo.

Alcune cose da tenere a mente mentre si utilizza lo stato:

-   Gli stati sono immutabili. Aggiorna sempre lo stato utilizzando una funzione `setState`. Per oggetti/array, crea nuovi oggetti e imposta lo stato con il nuovo array/oggetto. Questo garantisce il corretto comportamento del componente.
    
-   Usa lo stato solo quando necessario, evita di memorizzare informazioni ridondanti poiché possono causare re-render inutili.
    
-   Usa lo stato localmente nello stesso componente, evita di passare lo stato lungo l'albero del DOM, a meno che non sia assolutamente necessario. Per lo stato globale, usa il contesto o redux.
    

Controlla i [documenti legacy][9] per lo stato nei componenti di classe. Per i componenti funzionali, fai riferimento alla sezione [`useState`][10].

### Cosa sono le props?

Le props (abbreviazione di proprietà) sono un modo per passare dati da un componente all'altro. Possono essere considerate come argomenti passati ai componenti. Le props vengono passate a un componente figlio in modo simile agli attributi HTML.

Vediamo un esempio:

```
function ParentComponent() {
  const name = "John Doe";
  const age = 30;

  const handleClick = () => {
    console.log("Button clicked")
  };

  return (
    <div>
      <ChildComponent name={name} age={age} handleClick={handleClick} />
    </div>
  );
}

function ChildComponent({ name, age, handleClick }) {
  return (
    <div>
      <p>Nome: {name}</p>
      <p>Età: {age}</p>
      <button onClick={handleClick}>Cliccami</button>
    </div>
  );
}
```

-   Qui, il componente genitore passa nome, età e metodo handleClick come props al componente figlio.
    
-   Queste props formano un oggetto `props` che contiene i valori passati. Ogni componente funzionale prende un oggetto `props` come argomento.
    
-   Abbiamo acceduto alle props de-strutturando l'oggetto nel componente figlio.
    
```

### Differenza tra Componenti di Classe e Funzionali

I componenti React sono di due tipi: componenti di classe e componenti funzionali. Comprendiamo la differenza tra i due:

**Componenti di Classe:**

-   I componenti di classe sono scritti usando classi ES6. Le loro proprietà e funzioni sono accessibili tramite la keyword `this`. Necessitano di un metodo `render` per restituire JSX.
    
-   I componenti di classe sono componenti con stato che contengono caratteristiche integrate come State e Context.
    
-   Hanno metodi per diverse fasi del ciclo di vita del componente: `componentDidMount()`, `componentDidUpdate()`, `componentWillUnmount()`, e così via.
    
-   I componenti di classe sono verbosi, difficili da leggere e necessitano sempre della keyword `this` per accedere alle proprietà.
    

**Componenti Funzionali:**

-   I componenti funzionali sono semplici funzioni JavaScript che accettano un oggetto `props` come argomento. Non necessitano di un metodo `render`, restituiscono direttamente JSX.
    
-   I componenti funzionali sono senza stato e non hanno uno stato proprio. Invece, utilizzano Hooks per usare caratteristiche come State o Context dei componenti di classe.
    
-   Non ci sono metodi del ciclo di vita, il ciclo di vita è gestito con il hook `useEffect`.
    
-   I componenti funzionali richiedono meno codice rispetto ai componenti di classe, quindi sono più facili da leggere e scrivere.
    

Oggigiorno, gli sviluppatori preferiscono e raccomandano i componenti funzionali, soprattutto con gli Hooks. I componenti di classe si trovano solitamente in basi di codice datate.

Tuttavia, conoscere i componenti di classe è utile poiché molte aziende hanno basi di codice scritte usando i componenti di classe.

### Cos'è il Ciclo di Vita di un Componente?

Ogni componente React ha un ciclo di vita che attraversa tre fasi: Montaggio, Aggiornamento e Smontaggio.

**Montaggio**

In questa fase, un componente viene creato e aggiunto al DOM. Quando un componente viene montato, vengono chiamati i seguenti metodi:

-   [`constructor()`][11]

-   [`static getDerivedStateFromProps(props, state)`][12] (raramente usato)
    
-   [`render()`][13]
    
-   `componentDidMount()`
    

`componentDidMount()` viene chiamato solo una volta; ovvero quando il componente si monta. È il metodo preferito per eseguire effetti collaterali quando un componente viene caricato per la prima volta. Nei componenti funzionali, l'equivalente è il hook `useEffect`.

**Aggiornamento**

Nella fase di aggiornamento, cambiano lo stato o le props del componente, causando un re-render del componente. I seguenti metodi vengono chiamati quando il componente si aggiorna:

-   [`shouldComponentUpdate(nextProps, nextState)`][14]
    
-   `render()` (chiamato di nuovo)
    
-   [`getSnapshotBeforeUpdate()`][15]
    
-   `componentDidUpdate()`
    

Il metodo `componentDidUpdate` viene chiamato nei seguenti momenti:

-   La prima volta quando il componente si monta, dopo il metodo `componentDidMount`.
    
-   Qualsiasi cambiamento di stato o props che provoca un re-render del componente.
    

È utile eseguire effetti collaterali quando uno stato si aggiorna. Nei componenti funzionali, l'equivalente è `useEffect` con dipendenze.

**Smontaggio**

In questa fase, il componente viene rimosso dal DOM. Durante lo smontaggio viene chiamato il metodo `componentWillUnmount`.

Viene usato principalmente per compiti di pulizia prima che il componente venga smontato. Fai riferimento alla sezione [`useEffect`][16] per il suo equivalente.

### Componenti Controllati e Non Controllati

Nei componenti controllati, gli elementi del modulo sono gestiti dallo stato di React. Questo significa che i valori dei campi del modulo sono impostati e aggiornati ("controllati" dallo stato di React). Tutti i dati del modulo vengono memorizzati nello stato prima di inviare il modulo.

Esempio di componente controllato:

```
function ControlledComponent() {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Value: ${value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <button type="submit">Submit</button>
    </form>
  );
}
```

-   Il valore del campo `input` è controllato dalla variabile di stato di React `value`.
    
-   Quando si aggiorna il campo di input, lo stato viene aggiornato e il valore dell'input viene impostato di conseguenza.
    

I componenti non controllati, invece, non dipendono dallo stato per gestire i moduli. Invece, i valori dei campi dei moduli sono gestiti internamente, di solito con i refs. I refs sono utilizzati per interagire direttamente con gli elementi del DOM e aggiornare i valori senza aggiornare lo stato e causare re-render.

Esempio di componente non controllato:

```
function UncontrolledComponent() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Input Value: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Submit</button>
    </form>
  );
}
```

Qui, abbiamo usato un ref per accedere direttamente al nodo DOM dell'elemento input e utilizzato il suo valore per accedere ai dati del modulo. Questo rende la gestione del modulo molto più semplice rispetto all'uso dello stato.

Quando utilizzare l'uno o l'altro:

-   Utilizza componenti controllati se desideri un maggiore controllo sui dati che l'utente inserisce. Questo è particolarmente utile quando due campi del modulo dipendono l'uno dall'altro.
    
-   Se hai più stati che dipendono dai dati del modulo, utilizzare lo stato è una buona prassi.
    
-   Utilizza componenti non controllati se il tuo modulo è molto semplice e non c'è necessità di manipolare i dati del modulo.
    



Ecco la versione tradotta del file:

Un componente puro è simile a un normale componente, eccetto che rende solo se il suo stato o i suoi props sono cambiati.

Prendiamo un esempio:

```
const PureExample = React.memo(() => {
  return <h1> Ciao {this.props.name} </h1>;
});

function App() {
  const [name, setName] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setToggle(!toggle)}> Attiva/Disattiva </button>
      <PureExample name={name} />
    </div>
  );
}
```

-   `PureExample` è un componente puro che è figlio del componente `App`. I componenti puri possono essere creati racchiudendo la funzione con `React.memo()`.
    
-   Nell'esempio, abbiamo un campo `input` che aggiorna `name`, e un pulsante che cambia lo stato, `toggle`.
    
-   `name` viene passato come props a `PureExample`, quindi si ri-renderizza se `name` viene aggiornato. Se aggiorni `toggle` o qualsiasi altro stato, `PureExample` non si ri-renderizza.
    

Nel caso dei componenti di classe, i componenti puri possono essere creati estendendo la classe `PureComponent`. Tuttavia, sono raccomandati i componenti funzionali.

```
class PureExample extends React.PureComponent {
  render() {
    return <h1> Ciao {this.props.name} </h1>;
  }
}
```

Di solito, quando il componente genitore si ri-renderizza, React ri-renderizza di nuovo tutti i suoi componenti figli, anche se nessuno di loro è stato aggiornato.

I componenti puri sono utilizzati per i componenti figli che necessitano di ri-renderizzare solo se uno dei loro props cambia. Questo salta i ri-render inutili e migliora le prestazioni.

## Hook di React

Gli Hook di React sono una caratteristica rivoluzionaria introdotta in React nel 2016. Gli Hook forniscono un modo per implementare le funzionalità dei componenti di classe nei componenti funzionali. Grazie agli hook, gli sviluppatori oggi preferiscono i componenti funzionali rispetto ai componenti di classe.

### Hook useState

Abbiamo già visto cosa è lo stato. Cerchiamo di capire come implementare lo stato nei componenti funzionali con un semplice esempio:

```
const [count, setCount] = useState(0);
const increment = () => {
    setCount(count + 1);
};
const decrement = () => {
    setCount(count - 1);
};
return (
    <div>
        <h1>Contatore: {count}</h1>
        <button onClick={increment}>Incrementa</button>
        <button onClick={decrement}>Decrementa</button>
    </div>
);
```

-   La funzione `useState` prende un valore iniziale come argomento e restituisce un array contenente due elementi: lo stato corrente e una funzione per aggiornare lo stato.
    
-   In questo esempio, abbiamo due pulsanti che incrementano e decrementano il contatore. Al click del pulsante, le operazioni di incremento/decremento vengono eseguite aggiornando lo stato `count`.
    
-   Il componente si ri-renderizza e visualizza il `count` aggiornato.
    

Per ulteriori esempi sul suo utilizzo, dai un'occhiata al mio post qui sotto:

[https://levelup.gitconnected.com/4-different-examples-of-the-usestate-hook-in-react-5504ce011a20][17]

### Hook useEffect

L'hook `useEffect` viene utilizzato per implementare effetti collaterali in un componente. Gli effetti collaterali includono chiamate API, sottoscrizioni a un servizio e manipolazione del DOM. `useEffect` può anche essere utilizzato per aggiornare condizionatamente uno stato in base al cambiamento di un altro stato.

Cerchiamo di capire come usarlo, con un esempio:

```
function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.example.com/data?page=${page}`);
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, [page]);

  return (
    <div>
      <div> {JSON.stringify(data)} </div>
      <button onClick={() => setPage(page - 1)} disabled={page <= 1}>
        Indietro
      </button>
      <button onClick={() => setPage(page + 1)}>Avanti</button>
    </div>
  );
}
```

-   `useEffect` prende due argomenti: una funzione che esegue effetti collaterali ed un array di dipendenze.
    
-   In questo esempio, visualizziamo i dati paginati includendo la logica di recupero dati all'interno di un `useEffect` e includendo la pagina corrente nelle dipendenze.
    
-   `useEffect` effettua la chiamata API al primo render, caricando la prima pagina di dati. Successivamente, carica dati aggiuntivi ogni volta che l'utente cambia pagina.
    

Come implementare i metodi ciclo di vita in `useEffect`:

-   Per implementare `componentDidMount()`, passa un array di dipendenze vuoto
    
-   Per implementare `componentDidUpdate()`, passa le dipendenze per eseguire `useEffect` se una di quelle dipendenze cambia
    
-   Per `componentWillUnmount()`, ritorna una funzione di callback da `useEffect` contenente il codice di pulizia
    

`useEffect` può essere utilizzato in molti modi. La documentazione React [docs][18] contiene diversi esempi di utilizzo.

### Hook useContext

Gli stati sono usati per memorizzare informazioni su un componente e controllano come si comporta il componente. In alcuni casi, i componenti figli necessitano di accedere allo stato del componente genitore.

Per ottenere questo passiamo i dati dello stato come props. Tuttavia, passare i dati attraverso i props può portare a problemi. Cerchiamo di capire il problema più grande:

**Cosa è il Prop Drilling?**

Per passare dati da un componente genitore a un figlio, usiamo i props. Ma cosa succede se un componente profondamente all'interno dell'albero dei componenti ha bisogno di accedere a un prop? Dovresti passarlo attraverso diversi componenti che non hanno nemmeno bisogno del prop.

Passare le proprietà attraverso numerosi componenti porta a una situazione nota come prop drilling.

**Come risolve il problema il contesto di React?**

Il contesto permette ai componenti genitori di passare dati a tutti i componenti nell'albero senza doverli trasmettere esplicitamente attraverso di essi. Questo elimina la necessità di passare le proprietà attraverso molti componenti nell'albero.

Il contesto è stato introdotto inizialmente come [funzionalità dei componenti a classe][19], ma ora può essere utilizzato nei componenti funzionali con il hook `useContext`.

Vediamo come usare il hook:

```
import React, {useContext} from "react";

const DataContext = React.createContext(null);

export default function App() {
  return (
    <DataContext.Provider value="Some value">
      <MainComponent />
    </DataContext.Provider>
  );
}

function MainComponent() {
  const data = useContext(DataContext);
  return <div> Data: {data} </div>;
}
```

-   Abbiamo utilizzato il metodo `React.createContext` per creare un contesto e poi abbiamo creato una funzione provider che avvolge il componente principale.
    
-   La proprietà `value` di `DataContext.Provider` è usata per passare i dati all'intero albero di componenti sotto `MainComponent`.
    
-   Il Hook `useContext` consuma questi dati all'interno dei componenti. Restituisce i dati che sono stati passati alla proprietà `value` del provider.
    

`useContext` può essere utilizzato solo se il componente o uno dei suoi genitori ha un provider di contesto che lo avvolge. Esempi di casi d'uso sono temi, informazioni utente, preferenze di lingua e localizzazione, e così via.

Controlla ulteriori utilizzi di `useContext` nei [documenti][20].

### Hook useRef

I ref (abbreviazione di riferimenti) sono un modo per interagire direttamente con gli elementi del DOM. Ti danno accesso diretto all'oggetto DOM JavaScript e ai suoi [metodi][21].

Visita i [documenti legacy][22] per utilizzare i ref nei componenti di classe. Nei componenti funzionali, abbiamo il Hook `useRef`. Prendiamo un esempio:

```
export function App(props) {
  const myRef = useRef(null);

  useEffect(() => {
    myRef.current.focus();
  }, []);

  return <input type="text" ref={myRef} />;
}
```

-   `useRef` prende un valore iniziale come argomento e restituisce un oggetto `ref`.
    
-   Quando questo oggetto `ref` è passato alla proprietà `ref` di un elemento, otteniamo un riferimento diretto al nodo DOM dell'elemento.
    
-   Il valore di un `ref` è memorizzato all'interno della sua proprietà `current`.
    
-   Poiché `ref` è un oggetto DOM JavaScript, possiamo chiamare il metodo [focus()][23] per focalizzare l'elemento `input` quando il componente viene montato.
    

A differenza dello stato, i ref non causano il ri-rendering del componente e, a differenza delle variabili locali, i ref mantengono i loro valori tra i render.

Alcuni aspetti da ricordare sui ref:

-   I componenti possono esporre i loro nodi DOM ai componenti genitori utilizzando [forwardRef][24].
    
-   Usa i ref solo quando hai assolutamente bisogno di accedere agli elementi del DOM. Esempi di casi d'uso potrebbero essere attività come focalizzare elementi input, selezionare test, innescare animazioni, determinare posizioni degli elementi, e così via.
    
-   Evita di usarli eccessivamente, preferisci stato e proprietà rispetto ai ref. Evita di modificare gli elementi del DOM esplicitamente per controllare il comportamento del componente, utilizza lo stato invece.
    

### Hook useMemo

Se il tuo componente ha bisogno di eseguire un calcolo intensivo durante il rendering di qualcosa, rallenta le prestazioni del sito web poiché il componente esegue il calcolo a ogni render.

Questo potrebbe essere accettabile per un valore di stato che ne dipende, ma è inefficiente se la funzione costosa viene eseguita di nuovo su altri aggiornamenti di stato non correlati. Per affrontare ciò, memorizziamo in cache il risultato del calcolo e lo ricalcoliamo solo quando lo stato rilevante cambia.

Il Hook `useMemo` viene utilizzato per memorizzare in cache il risultato di questo calcolo, in modo che non venga eseguito a ogni render. Prendiamo un esempio:

```
const MemoExample = () => {
  const [computedValue, setComputedValue] = useState(value);
  const [otherState, setOtherState] = useState('Initial State');

  const expensiveFunction = () => {
      let result = 0;
      for (let i = 0; i < 10000000; i++) {
          result += i * 2;
      }
      return result;
  }

  const value = useMemo(expensiveFunction, [computedValue]);

  return  (
    <div>
      <button onClick={() => setComputedValue(computedValue + 1)}>
            Re-calcolare
      </button>
      <button onClick={() => setOtherState('State Changed')}>
        Cambia Altro Stato
      </button>
    </div>
  );
};
```

-   `useMemo` prende in ingresso la funzione e un array di dipendenze come argomenti e restituisce il risultato di questa funzione. Memorizza in cache il risultato per il prossimo render e restituisce il valore memorizzato a meno che non cambi qualche dipendenza.
    
-   Abbiamo passato lo stato `computedValue` all'interno dell'array, quindi, dopo l'esecuzione del primo render, la funzione verrà eseguita solo quando `computedValue` cambia.
    
-   Se aggiorni qualsiasi altro stato, il componente ri-renderizza, ma la funzione non viene eseguita di nuovo.
    

Quando usarlo:

-   Se non vuoi eseguire una funzione a ogni render, tranne per lo stato che ne dipende.
    
-   Per mantenere l'uguaglianza referenziale di array e oggetti tra i render. I riferimenti di array/oggetti cambiano ogni volta che vengono dichiarati.
    
-   Quando si renderizzano elenchi con [`Array.map`][25] che non devono cambiare tranne che per aggiornamenti di stato rilevanti.
    



`useCallback` è simile a `useMemo`, l'unica differenza è che `useCallback` memorizza nella cache la definizione della funzione stessa, anziché memorizzare il suo valore restituito.

Simile agli array o agli oggetti, un riferimento di funzione cambia ogni volta che viene dichiarato. Quindi, avvolgendolo in `useCallback` si mantiene l'uguaglianza referenziale della funzione tra i rendering.

Cerchiamo di capirlo con un esempio:

```
function ParentComponent() {
  const [toggle, setToggle] = useState(false);

  const handleSubmit = useCallback(() => {
    console.log('Modulo del componente figlio inviato');
  }, []); // Aggiungi props o stato da cui dipende questa funzione
  return (
    <div className={toggle ? 'dark' : ''}>
      <button onClick={() => setToggle(!toggle)}> Cambia Tema </button>
      <Child handleSubmit={handleSubmit} />
    </div>
  );
}

const Child = React.memo(({ handleSubmit }) => {

  for (let i = 0; i < 1000000000; i++) {
    // Supponiamo che il componente sia lento
  }
  return (
    <div>
      <h2> Componente figlio </h2>
      <button onClick={handleSubmit}> Cliccami </button>
    </div>
  );
});
```

-   Qui, abbiamo volutamente rallentato il componente figlio per simulare rendering lenti. Poiché è avvolto dentro `React.memo()`, viene renderizzato nuovamente solo se la sua unica prop `handleSubmit` cambia.
    
-   Tuttavia, quando lo stato `toggle` cambia, anche il componente figlio viene ri-renderizzato, anche se non viene passato al componente figlio.
    
-   Questo accade perché, ogni volta che il componente padre viene renderizzato, la funzione `handleSubmit` viene creata con un nuovo riferimento. Quindi, tecnicamente `handleSubmit` è cambiato e quindi il componente figlio viene ri-renderizzato.
    
-   Per evitare questo comportamento, avvolgiamo la dichiarazione della funzione `handleSubmit` dentro un `useCallback`. Questo assicura che il riferimento della funzione rimanga lo stesso tra i rendering.
    
-   Nel nostro esempio, la funzione viene creata solo una volta, poiché non ci sono dipendenze. Se aggiungi dipendenze, la funzione viene ricreata solo se una di esse cambia.
    

Quando usarlo:

-   Quando hai gestori di eventi definiti per un elemento all'interno del tuo componente, avvolgili dentro un `useCallback` per evitare ricreazioni inutili dei gestori di eventi.
    
-   Quando chiami una funzione all'interno di un `useEffect`, di solito passeresti la funzione come dipendenza. Per evitare di eseguire `useEffect` inutilmente ad ogni rendering, avvolgi la definizione della funzione dentro un `useCallback`.
    
-   Se il tuo Hook personalizzato restituisce una funzione, è consigliato avvolgerla dentro un `useCallback`. Così, gli utenti non devono ottimizzare l'Hook – piuttosto, possono concentrarsi sul loro proprio codice.
    

Se vuoi saperne di più sui hook `useMemo` e `useCallback`, dai un'occhiata al mio post qui sotto:

[https://www.freecodecamp.org/news/difference-between-usememo-and-usecallback-hooks/][26]

[https://www.freecodecamp.org/news/difference-between-usememo-and-usecallback-hooks/][27]

### Hook useReducer

L'Hook `useReducer` è un altro modo per gestire lo stato nelle applicazioni React. Man mano che la tua applicazione cresce, il suo stato diventa sempre più complesso. Col tempo, diventa difficile gestire logiche di stato complesse con l'Hook `useState`.

useReducer offre un modo più strutturato per gestire stati complessi gestendo tutti gli aggiornamenti di stato in una funzione reducer. Questo rende la gestione dello stato più semplice poiché tutta la logica di aggiornamento dello stato è in un unico posto.

Vediamo come usare questo hook con un esempio:

```
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      throw new Error(`Tipo di azione sconosciuto: ${action.type}`);
  }
};

export function App(props) {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='App'>
      Stato: {state.count}
      <div>

        <button onClick={() => dispatch({ type: 'INCREMENT' })}>Incrementa</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrementa</button>
        <button onClick={() => dispatch({ type: 'RESET' })}>Resetta</button>
      </div>
    </div>
  );
}
```

-   Questo esempio contiene uno stato di contatore semplice con tre azioni: incrementa, decrementa e resetta.
    
-   Definiamo una funzione reducer che accetta lo stato attuale e un oggetto azione come argomenti. L'oggetto azione contiene il tipo di azione (una stringa) e il payload (dati passati all'azione).
    
-   L'Hook `useReducer` accetta la funzione reducer e uno stato iniziale, e restituisce un array contenente lo stato attuale e un metodo `dispatch`.
    
-   Per aggiornare lo stato, chiamiamo il metodo `dispatch` e passiamo il tipo di azione e il payload in un oggetto. Chiamiamo questo processo "dispatching di un'azione".
    

Quando usare `useReducer`:

-   Usa questo hook solo quando il tuo componente ha una logica di aggiornamento dello stato complessa. Poiché comporta scrivere più codice, preferisci `useState` per aggiornamenti di stato più semplici. L'esempio semplice fornito è solo a scopo dimostrativo.
    
-   Quando ci sono molte azioni di aggiornamento dello stato con diverse logiche, ha senso averle tutte in una funzione separata. Con questo, basta passare il tipo di azione e il payload a una funzione `dispatch` e il reducer gestisce l'aggiornamento dello stato.
    


[https://www.freecodecamp.org/news/usereducer-hook-react/][28]

Finora, abbiamo trattato i hook più comuni forniti da React. Oltre a questi, React offre anche altri hook aggiuntivi, meno comunemente usati. Se sei interessato, leggi i dettagli nella [documentazione][29]. Tuttavia, imparare i suddetti hook dovrebbe essere sufficiente per i tuoi colloqui.

### Hook Personalizzati

Ci sono alcune situazioni in cui potresti dover creare tuoi hook sopra quelli esistenti. Gli hook personalizzati forniscono funzionalità riutilizzabili tra più componenti e contribuiscono a un codice più pulito e mantenibile.

Per creare un hook personalizzato, identifica prima un pezzo di funzionalità che vuoi riutilizzare. Quindi, puoi esportarlo come una funzione il cui nome inizia con il prefisso 'use'.

Mettiamo il caso che tu abbia più componenti che devono recuperare dati da API. Puoi esportare la logica di recupero come un Hook per evitare di duplicare il codice.

```
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
```

-   Nell'hook personalizzato `useFetch`, abbiamo recuperato i dati all'interno di un Hook `useEffect`, proprio come faremmo all'interno di un componente. Abbiamo anche gestito gli stati di caricamento ed errore nell'Hook.

-   Infine, restituiamo i dati, con gli stati di caricamento ed errore, permettendo al componente di usarli per gestire la logica di rendering.

Usiamo questo in un componente:

```
const UserList = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>Errore: {error.message}</p>;

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
```

Il componente `UsersList` visualizza un elenco di utenti recuperati da un'API, e mostra un testo di "Caricamento" o un errore, se presente. Per usare l'Hook personalizzato, abbiamo chiamato `useFetch` come qualsiasi altro hook, e passato un endpoint API. Possiamo inoltre modificare ulteriormente l'hook personalizzato `useFetch` per includere header di richiesta, corpo della richiesta, ecc.

In questo modo, gli Hook personalizzati ti aiutano ad astrarre la logica da un componente e renderla riutilizzabile in tutta l'applicazione. Ci sono diversi altri casi d'uso:

-   Listener di eventi per eventi come ridimensionamento della finestra, movimenti del mouse o pressioni dei tasti.

-   Gestione dei moduli, incluse convalida e invio del modulo.

-   Temi, cache, transizioni e così via.

Consulta la [documentazione][30] per saperne di più sugli hook personalizzati.

## Concetti Aggiuntivi

Ecco alcuni concetti aggiuntivi che possono essere utili:

### Perché Non Usare l'Indice come Chiave durante il Rendering di Liste?

Quando renderizzi liste in React usando il metodo [`Array.map`][31], ti viene chiesto di fornire una `key` prop unica per ogni elemento renderizzato. Questa chiave è utilizzata per distinguere gli elementi tra loro.

Gli indici sono unici, quindi è allettante usarli come chiavi per semplicità. Tuttavia, gli indici degli elementi non sono stabili.

Spesso gli elementi vengono aggiunti o eliminati in un array. L'ordine degli elementi potrebbe cambiare. In questi casi, il valore della prop `key` cambia e può portare a comportamenti imprevedibili.

Consideriamo il seguente elenco:

```
const items = [
  {
    id: 1,
    name: 'Item A'
  },
  {
    id: 2,
    name: 'Item B'
  },
  {
    id: 3,
    name: 'Item C'
  }
]
export const App = () => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>
        {item.name}
      </li>
    ))}
  </ul>
);
```

Ogni elemento renderizzato nell'elenco ha il suo indice come chiave. Se eliminiamo `Item B` dall'elenco, i riferimenti degli altri elementi cambiano.

React usa le chiavi per identificare univocamente gli elementi della lista, in modo che il loro rendering diventi più semplice. React riutilizza spesso questi elementi per render rapidi. Tuttavia, se un elemento viene eliminato, le chiavi di tutti gli elementi successivi vengono aggiornate.

React potrebbe riutilizzare la chiave eliminata o renderizzare nuovamente l'intero elenco, il che potrebbe portare a problemi di prestazioni. Invece degli indici, scegli qualcosa di unico, preferibilmente nome utente, email o un ID generato dal database.

### Componenti di Ordine Superiore

Un componente di ordine superiore (HOC) è una funzione che prende un componente come argomento e restituisce un nuovo componente che avvolge quello originale. Gli HOC ti permettono di fornire funzionalità aggiuntive a un componente, così come riutilizzarlo tra più componenti.

Piuttosto che fornire qui una breve spiegazione, ti consiglio il seguente articolo che spiega gli HOC con vari esempi:

[https://www.freecodecamp.org/news/higher-order-components-in-react/][32]

### Caricamento Pigro

Il caricamento pigro è un modello di sviluppo web che ritarda il caricamento di risorse come immagini, video o componenti non essenziali. Aiuta le pagine web a caricarsi più velocemente caricando prima il contenuto necessario per l'interazione, e poi tutto il resto.

In React, il caricamento asincrono può essere implementato usando `React.lazy()` e `Suspense`:

```jsx
const LazyComponent = React.lazy(() => import('./LazyComponent'));

export const App = () => {
  return (
    <div>
      <h1>Mostrando il componente lazy qui sotto</h1>
      <Suspense fallback={<div>Caricamento...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};
```

- Una volta identificato un componente da caricare in modo asincrono, utilizza la funzione `React.lazy()` per importare dinamicamente il componente lazy.
    
- Avvolgi il componente caricato in modo asincrono all'interno di `Suspense`. Questo renderà un componente di fallback (predefinito) finché il componente lazy non sarà caricato.
    

In questo modo, puoi caricare un componente React su richiesta. Questo è anche noto come code splitting**.** Il codice viene suddiviso e una parte del codice React viene caricata dinamicamente quando necessario.

Il code splitting ottimizza le prestazioni delle applicazioni React che hanno componenti grandi e complessi. Usando `Suspense`, puoi mostrare un'interfaccia utente temporanea all'utente, così non deve fissare uno schermo vuoto mentre un componente viene caricato.

Il code splitting suddivide la tua applicazione in diversi chunk, e ogni chunk viene caricato in modo indipendente. Quindi, questo processo è anche noto come chunking**.**

### Differenza tra Rendering lato client e Rendering lato server

Ci sono due modi per fare il rendering delle pagine web in React. Diamo un'occhiata:

**Rendering lato server (SSR):**

- La pagina web viene generata e renderizzata sul server prima di essere inviata al client. Il client riceve una pagina web completa dal server e la mostra direttamente all'utente.
    
- Caricando l'HTML preparato, i tempi di caricamento sono più rapidi, migliorando l'esperienza utente. Questo è particolarmente utile per gli utenti con connessioni internet più lente.
    
- Poiché la pagina web è già preparata, aiuta i motori di ricerca a indicizzare meglio il tuo sito, rendendolo più SEO-friendly.

- SSR può aumentare il carico del server se la pagina viene aggiornata frequentemente. Le pagine con contenuti dinamici possono impiegare più tempo per l'aggiornamento poiché devono essere re-renderizzate spesso.
    
- SSR è utilizzato per siti di marketing, blog e notizie dove i tempi di caricamento iniziale e la SEO sono importanti.
    

**Rendering lato client (CSR):**

- Un file HTML di base viene inviato al client, che poi rende i contenuti dinamici usando JavaScript.
    
- I tempi di caricamento iniziali sono più lenti perché la preparazione e il rendering del contenuto avvengono principalmente sul lato client.
    
- Poiché inizialmente viene renderizzato HTML di base e i contenuti JavaScript vengono aggiunti successivamente, i motori di ricerca potrebbero non essere in grado di indicizzare il tuo contenuto, rendendolo meno SEO-friendly.
    
- Per le pagine web con contenuti dinamici, i tempi di rendering sono più veloci poiché tutto il rendering avviene sul lato client.
    
- CSR è usato per siti con contenuti dinamici e frequenti interazioni utente come piattaforme social o dashboard.
    

## React Redux

Redux è una libreria di gestione dello stato che aiuta a gestire stati complessi delle applicazioni. È una libreria potente per gestire lo stato in grandi applicazioni React.

Nel contesto di React, esaminiamo gli hooks che Redux fornisce:

### useSelector

Una funzione selettore accetta un oggetto di stato Redux come argomento e restituisce una parte di quello stato. L'Hook `useSelector` è usato per chiamare la funzione selettore. Prendiamo il seguente esempio:

```
// esempio di stato per un'app di e-commerce
const initialState = {
    users: { 
        ...
    },
    products: {
        ...
    },
    cart: {
        ...
    }
    orders: {
        ordersList: [
            {
                id: 101,
                status: "Spedito"
            },
            {
                id: 102,
                status: "In elaborazione"
            },

            ...
        ]
    }
}
```

Supponiamo di voler mostrare l'elenco degli ordini su una pagina. Non possiamo accedere direttamente a questo stato dal componente poiché fa parte dello store Redux. Quindi, usiamo le funzioni selettore.

```jsx
const selectAllOrders = (state) => state.orders.ordersList
```

Per chiamare questa funzione selettore, usiamo l'Hook `useSelector`:

```jsx
const OrdersList = () => {
  const orders = useSelector(selectAllOrders);
  return (
    // mostra ordini
  );
};
```

Il principale vantaggio dell'uso dei selettori è che si ha accesso all'oggetto stato di Redux, permettendoti di accedere a qualsiasi parte dello stato.

### useDispatch

L'Hook `useDispatch` restituisce una funzione che puoi usare per inviare azioni, come l'aggiornamento dello stato e la chiamata a API. Questa funzione prende come argomento un oggetto azione ed esegue l'azione corrispondente. Questa funzione è nota come funzione dispatch.

Facciamo un esempio. Lavoreremo con lo stesso stato e aggiorneremo lo stato di uno degli ordini:

```jsx
function App() {
  const dispatch = useDispatch();

  const handleUpdateStatus = () => {
    dispatch({type: 'ORDER_UPDATE_STATUS', payload: {
      id: 102,
      status: "Spedito"
    }});
  };

  return (
    <div>
      <h2>Aggiorna lo Stato dell'Ordine</h2>
      <button onClick={handleUpdateStatus}>Segna come Consegnato</button>
    </div>
  );
}
```

Qui, l'azione `ORDER_UPDATE_STATUS` verrà inviata con il corrispondente payload. Questa azione sarà mappata a un riduttore che eseguirà l'aggiornamento dello stato.

Il vantaggio di usare dispatch è che puoi specificare semplicemente il tipo di azione e passare il payload, e la logica di aggiornamento dello stato sarà gestita dal riduttore, anziché dal componente stesso.

Ho appena elencato due Hook che React fornisce per lavorare con Redux. Tuttavia, se non conosci Redux, dovresti consultare la [documentazione][33] per iniziare.

Redux è molto più di questi due Hook. Assicurati di avere chiari i concetti fondamentali: store, slices, reducers, actions, selectors, dispatch. [Redux Sagas][34] è un altro concetto importante che dovresti apprendere. Vengono principalmente utilizzati per operazioni asincrone.

## Note Aggiuntive

Ci sono alcune altre aree che non ho menzionato finora, ma che possono essere un buon complemento:

-   [React Router][35]
    
-   [Test Unitari in React][36]
    

Inoltre, potrebbe esserti chiesto di implementare una piccola funzionalità utilizzando i concetti spiegati in questo articolo. Questo ti dà l'opportunità di dimostrare la tua comprensione di React.

Inoltre, è utile avere alcuni progetti React sul tuo curriculum. Dai un'occhiata a [Master React costruendo 25 progetti][37].

Tieni presente che React non è limitato solo a questi argomenti, ci sono risorse aggiuntive nella sezione Riferimenti. Tuttavia, questo manuale dovrebbe servire come guida utile prima dei colloqui. Sentiti libero di rivisitarlo durante la tua preparazione al colloquio.

## Conclusione

In questo manuale, abbiamo delineato diversi argomenti importanti per prepararti al tuo prossimo colloquio su React. Abbiamo iniziato con alcuni concetti di base in React, per poi passare agli Hook. Successivamente, abbiamo visto alcuni concetti aggiuntivi che è bene conoscere prima di discutere di React Redux.

Ho scritto spiegazioni chiare e concise per ciascun argomento, con esempi. Dovrebbe aiutarti a esporre questi concetti agli intervistatori. Nei punti in cui non ho potuto spiegare, ho indicato altre risorse utili che spiegano meglio. Questo rende l'articolo la tua risorsa di riferimento in qualsiasi momento durante la tua preparazione al colloquio.

Durante i colloqui, basta restare calmo e dimostrare con sicurezza la tua conoscenza. Una buona comunicazione lascia una bella impressione durante il colloquio. Infine, ricorda che ogni colloquio è un'opportunità di apprendimento - che tu abbia successo o meno. Rimani positivo e continua a perfezionare le tue competenze. Ti auguro il meglio nei tuoi colloqui!

### Riferimenti

-   [Domande di colloquio React – Preparazione al colloquio con Risposte ed Esempi][38]
    
-   [Domande di colloquio React][39] - InterviewBit
    
-   [Impara React – Una guida ai concetti chiave di Ankur Tyagi][40]
    

[1]: #heading-javascript-fundamentals
[2]: #heading-react-essentials
[3]: #heading-react-hooks
[4]: #heading-additional-concepts
[5]: #heading-react-redux
[6]: #heading-additional-notes
[7]: https://www.freecodecamp.org/news/js-interview-prep-handbook/
[8]: https://legacy.reactjs.org/docs/reconciliation.html
[9]: https://legacy.reactjs.org/docs/state-and-lifecycle.html
[10]: #heading-usestate-hook
[11]: https://www.geeksforgeeks.org/react-js-constructor-method/
[12]: https://www.geeksforgeeks.org/react-js-static-getderivedstatefromprops/
[13]: https://www.geeksforgeeks.org/react-js-render-method/
[14]: https://www.geeksforgeeks.org/reactjs-shouldcomponentupdate-method/
[15]: https://www.geeksforgeeks.org/reactjs-getsnapshotbeforeupdate-method/
[16]: #heading-useeffect-hook
[17]: https://levelup.gitconnected.com/4-different-examples-of-the-usestate-hook-in-react-5504ce011a20
[18]: https://react.dev/reference/react/useEffect#usage
[19]: https://legacy.reactjs.org/docs/context.html
[20]: https://react.dev/reference/react/useContext#usage
[21]: https://www.tutorialspoint.com/javascript/javascript_dom_methods.htm
[22]: https://legacy.reactjs.org/docs/refs-and-the-dom.html
[23]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus
[24]: https://react.dev/reference/react/forwardRef
[25]: http://Array.map
[26]: https://www.freecodecamp.org/news/difference-between-usememo-and-usecallback-hooks/
[27]: https://www.freecodecamp.org/news/difference-between-usememo-and-usecallback-hooks/
[28]: https://www.freecodecamp.org/news/usereducer-hook-react/
[29]: https://react.dev/reference/react/hooks
[30]: https://react.dev/learn/reusing-logic-with-custom-hooks
[31]: http://Array.map
[32]: https://www.freecodecamp.org/news/higher-order-components-in-react/
[33]: https://redux.js.org/introduction/getting-started
[34]: https://redux-saga.js.org/docs/introduction/GettingStarted
[35]: https://www.freecodecamp.org/news/react-router-cheatsheet/
[36]: https://www.freecodecamp.org/news/how-to-write-unit-tests-in-react/
[37]: https://www.freecodecamp.org/news/master-react-by-building-25-projects/
[38]: https://www.freecodecamp.org/news/react-interview-questions-and-answers/
[39]: https://www.interviewbit.com/react-interview-questions/
[40]: https://www.freecodecamp.org/news/learn-react-key-concepts/#how-much-javascript-do-you-need-to-know-before-learning-react

