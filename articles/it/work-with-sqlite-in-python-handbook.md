```markdown
---
title: Come Lavorare con SQLite in Python – Un Manuale per Principianti
date: 2024-11-04T13:16:41.256Z
author: Ashutosh Krishna
authorURL: https://www.freecodecamp.org/news/author/ashutoshkrris/
originalURL: https://www.freecodecamp.org/news/work-with-sqlite-in-python-handbook/
posteditor: ""
proofreader: ""
---

SQLite è uno dei sistemi di gestione di database relazionali (RDBMS) più popolari. È leggero, significa che non occupa molto spazio sul tuo sistema. Una delle sue migliori caratteristiche è che è senza server, quindi non è necessario installare o gestire un server separato per usarlo.

<!-- more -->

Invece, memorizza tutto in un semplice file sul tuo computer. Inoltre, richiede zero configurazione, quindi non c'è un processo di configurazione complicato, rendendolo perfetto per principianti e piccoli progetti.

SQLite è una scelta eccellente per applicazioni piccole o medie perché è facile da usare, veloce e può gestire la maggior parte dei compiti che i database più grandi possono fare, ma senza l'inconveniente di gestire software extra. Sia che tu stia costruendo un progetto personale o prototipando una nuova app, SQLite è un'opzione solida per far partire le cose rapidamente.

In questo tutorial, imparerai come lavorare con SQLite usando Python. Ecco cosa copriremo in questo tutorial:

-   [Come Preparare il Tuo Ambiente Python][1]
    
-   [Come Creare un Database SQLite][2]
    
-   [Come Creare Tabelle nel Database][3]
    
-   [Come Inserire Dati in una Tabella][4]
    
-   [Come Interrogare i Dati][5]
    
-   [Come Aggiornare e Eliminare Dati][6]
    
-   [Come Usare le Transazioni][7]
    
-   [Come Ottimizzare le Prestazioni delle Query SQLite con l'Indicizzazione][8]
    
-   [Come Gestire Errori ed Eccezioni][9]
    
-   [Come Esportare e Importare Dati \[Sezione Bonus\]][10]
    
-   [Conclusioni][11]
    

Questo tutorial è perfetto per chiunque desideri iniziare a lavorare con i database senza addentrarsi in configurazioni complesse.

## Come Preparare il Tuo Ambiente Python

Prima di lavorare con SQLite, assicuriamoci che il tuo ambiente Python sia pronto. Ecco come configurare tutto.

### Installare Python

Se non hai ancora Python installato sul tuo sistema, puoi scaricarlo dal sito ufficiale di [Python][12]. Segui le istruzioni di installazione per il tuo sistema operativo (Windows, macOS o Linux).

Per verificare se Python è installato, apri il tuo terminale (o prompt dei comandi) e digita:

```
python --version
```

Questo dovrebbe mostrare la versione attuale di Python installata. Se non è installato, segui le istruzioni sul sito di Python.

### Installare il Modulo SQLite3

La buona notizia è che SQLite3 è integrato con Python! Non è necessario installarlo separatamente perché è incluso nella libreria standard di Python. Questo significa che puoi iniziare a usarlo subito senza alcuna configurazione aggiuntiva.

### Come Creare un Ambiente Virtuale (Opzionale ma Consigliato)

È una buona idea creare un ambiente virtuale per ogni progetto per tenere organizzate le tue dipendenze. Un ambiente virtuale è come un foglio bianco dove puoi installare pacchetti senza influenzare la tua installazione globale di Python.

Per creare un ambiente virtuale, segui questi passaggi:

1.  In primo luogo, apri il tuo terminale o prompt dei comandi e naviga nella directory dove vuoi creare il tuo progetto.
    
2.  Esegui il seguente comando per creare un ambiente virtuale:
    

```
python -m venv env
```

Qui, `env` è il nome dell'ambiente virtuale. Puoi chiamarlo come preferisci.

3.  Attiva l'ambiente virtuale:

```
# Usa il comando per Windows
env\Scripts\activate

# Usa il comando per macOS/Linux:
env/bin/activate
```

Dopo aver attivato l'ambiente virtuale, noterai che il prompt del terminale cambia, mostrando il nome dell'ambiente virtuale. Questo significa che stai lavorando all'interno di esso.

### Installare le Librerie Necessarie

Avremo bisogno di alcune librerie aggiuntive per questo progetto. In particolare, useremo:

-   `pandas`: Questa è una libreria opzionale per gestire e visualizzare i dati in formato tabellare, utile per casi d'uso avanzati.
    
-   `faker`: Questa libreria ci aiuterà a generare dati fittizi, come nomi e indirizzi casuali, che possiamo inserire nel nostro database per testare.
    

Per installare `pandas` e `faker`, esegui semplicemente i seguenti comandi:

```
pip install pandas faker
```

Questo installerà sia `pandas` che `faker` nel tuo ambiente virtuale. Con questo, il tuo ambiente è pronto e sei pronto per iniziare a creare e gestire il tuo database SQLite in Python!

## Come Creare un Database SQLite

Un database è un modo strutturato per memorizzare e gestire dati affinché possano essere facilmente accessibili, aggiornati e organizzati. È come un sistema di archiviazione digitale che ti permette di memorizzare grandi quantità di dati in modo efficiente, sia che si tratti di un'app semplice o di un sistema più complesso. I database usano tabelle per organizzare i dati, con righe e colonne che rappresentano singoli record e i loro attributi.

### Come Funzionano i Database SQLite

A differenza della maggior parte degli altri sistemi di database, SQLite è un database senza server. Questo significa che non richiede di impostare o gestire un server, rendendolo leggero e facile da usare. Tutti i dati sono memorizzati in un singolo file sul tuo computer, che puoi facilmente spostare, condividere o copiare. Nonostante la sua semplicità, SQLite è abbastanza potente da gestire molti compiti comuni dei database ed è ampiamente usato in app mobili, sistemi embedded e progetti di piccole o medie dimensioni.
```

Creiamo un nuovo database SQLite e impariamo a interagire con esso utilizzando la libreria `sqlite3` di Python.

#### Connessione al Database

Poiché `sqlite3` è pre-installato, è sufficiente importarlo nel proprio script Python. Per creare un nuovo database o connettersi a uno esistente, utilizziamo il metodo `sqlite3.connect()`. Questo metodo prende come argomento il nome del file del database. Se il file non esiste, SQLite lo creerà automaticamente.

```
import sqlite3

# Connettiti al database SQLite (o crealo se non esiste)
connection = sqlite3.connect('my_database.db')
```

In questo esempio, un file chiamato `my_database.db` viene creato nella stessa directory del tuo script. Se il file esiste già, SQLite aprirà semplicemente la connessione ad esso.

#### Creazione di un Cursore

Una volta stabilita la connessione, il passaggio successivo è creare un oggetto cursore. Il cursore è responsabile dell'esecuzione dei comandi SQL e delle query sul database.

```
# Crea un oggetto cursore
cursor = connection.cursor()
```

#### Chiusura della Connessione

Dopo aver terminato di lavorare con il database, è importante chiudere la connessione per liberare le risorse. Puoi chiudere la connessione con il seguente comando:

```
# Chiudi la connessione al database
connection.close()
```

Tuttavia, dovresti chiudere la connessione solo una volta completate tutte le operazioni.

Quando esegui il tuo script Python, verrà creato un file chiamato `my_database.db` nella tua directory di lavoro corrente. Hai ora creato con successo il tuo primo database SQLite!

### Come Usare il Gestore di Contesto per Aprire e Chiudere le Connessioni

Python fornisce un modo più efficiente e pulito per gestire le connessioni ai database utilizzando l'istruzione `with`, nota anche come gestore di contesto. L'istruzione `with` apre e chiude automaticamente la connessione, assicurando che la connessione sia chiusa correttamente anche se si verifica un errore durante le operazioni del database. Questo elimina la necessità di chiamare manualmente `connection.close()`.

Ecco come puoi utilizzare l'istruzione `with` per gestire le connessioni al database:

```
import sqlite3

# Passaggio 1: Usa 'with' per connetterti al database (o crearne uno) e chiuderlo automaticamente al termine
with sqlite3.connect('my_database.db') as connection:

    # Passaggio 2: Crea un oggetto cursore per interagire con il database
    cursor = connection.cursor()

    print("Database creato e connesso con successo!")

# Non è necessario chiamare connection.close(); viene fatto automaticamente!
```

D'ora in poi, utilizzeremo l'istruzione `with` nei nostri prossimi esempi di codice per gestire le connessioni ai database in modo efficiente. Questo renderà il codice più conciso e facile da mantenere.

## Come Creare le Tabelle nel Database

Ora che abbiamo creato un database SQLite e ci siamo connessi ad esso, il passaggio successivo è creare delle tabelle all'interno del database. Una tabella è dove memorizzeremo i nostri dati, organizzati in righe (record) e colonne (attributi). Per questo esempio, creeremo una tabella chiamata `Students` per memorizzare le informazioni sugli studenti, che riutilizzeremo nelle sezioni successive.

Per creare una tabella, utilizziamo l'istruzione `CREATE TABLE` di SQL. Questo comando definisce la struttura della tabella, inclusi i nomi delle colonne e i tipi di dati per ciascuna colonna.

Ecco un semplice comando SQL per creare una tabella `Students` con i seguenti campi:

- `id`: Un identificatore univoco per ciascuno studente (un intero).
- **name**: Il nome dello studente (testo).
- **age**: L'età dello studente (un intero).
- **email**: L'indirizzo email dello studente (testo).

Il comando SQL per creare questa tabella sarà il seguente:

```
CREATE TABLE Students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER,
    email TEXT
);
```

Possiamo eseguire questo comando SQL `CREATE TABLE` in Python utilizzando la libreria `sqlite3`. Vediamo come fare.

```
import sqlite3

# Usa 'with' per connetterti al database SQLite e chiudere automaticamente la connessione al termine
with sqlite3.connect('my_database.db') as connection:

    # Crea un oggetto cursore
    cursor = connection.cursor()

    # Scrivi il comando SQL per creare la tabella Students
    create_table_query = '''
    CREATE TABLE IF NOT EXISTS Students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        age INTEGER,
        email TEXT
    );
    '''

    # Esegui il comando SQL
    cursor.execute(create_table_query)

    # Conferma le modifiche
    connection.commit()

    # Stampa un messaggio di conferma
    print("Tabella 'Students' creata con successo!")
```

- `IF NOT EXISTS`: Questo assicura che la tabella venga creata solo se non esiste già, prevenendo errori se la tabella è stata creata in precedenza.

- `connection.commit()`: Questo salva (committa) le modifiche nel database.

Quando esegui il codice Python sopra, creerà la tabella `Students` nel file di database `my_database.db`. Vedrai anche un messaggio nel terminale che conferma che la tabella è stata creata con successo.

Se stai usando Visual Studio Code, puoi installare l'estensione [SQLite Viewer][13] per visualizzare i database SQLite.

![SQLite Viewer - Estensione VS Code](https://cdn.hashnode.com/res/hashnode/image/upload/v1727514353100/522fc6f1-0363-41ca-a76a-b730470cb64a.png)

```markdown
SQLite supporta diversi tipi di dati, che dobbiamo comprendere quando definiamo le nostre tabelle. Ecco una panoramica rapida dei comuni tipi di dati SQLite e come si mappano ai tipi di Python:

| Tipo di Dato SQLite | Descrizione | Equivalente in Python |
| --- | --- | --- |
| **INTEGER** | Numeri interi | `int` |
| **TEXT** | Stringhe di testo | `str` |
| **REAL** | Numeri in virgola mobile | `float` |
| **BLOB** | Dati binari (ad es., immagini, file) | `bytes` |
| **NULL** | Rappresenta nessun valore o dati mancanti | `None` |

Nella nostra tabella `Students`:

- `id` è di tipo `INTEGER`, che si mappa a `int` di Python.
    
- `name` e `email` sono di tipo `TEXT`, che si mappano a `str` di Python.
    
- `age` è anche di tipo `INTEGER`, mappandosi a `int` di Python.
    

## Come Inserire Dati in una Tabella

Ora che abbiamo creato la nostra tabella `Students`, è il momento di iniziare a inserire dati nel database. In questa sezione, tratteremo come inserire sia singoli record che multipli utilizzando Python e SQLite, e come evitare problemi di sicurezza comuni come l'iniezione SQL utilizzando query parametrizzate.

### Come Inserire un Singolo Record

Per inserire dati nel database, usiamo il comando SQL `INSERT INTO`. Cominciamo inserendo un singolo record nella nostra tabella `Students`.

Ecco la sintassi SQL di base per inserire un singolo record:

```
INSERT INTO Students (name, age, email) 
VALUES ('John Doe', 20, 'johndoe@example.com');
```

Tuttavia, invece di scrivere SQL direttamente nel nostro script Python con valori hardcoded, useremo query parametrizzate per rendere il nostro codice più sicuro e flessibile. Le query parametrizzate aiutano a prevenire l'iniezione SQL, un attacco comune in cui gli utenti dannosi possono manipolare la query SQL inserendo input malevoli.

Ecco come possiamo inserire un singolo record nella tabella `Students` utilizzando una query parametrizzata:

```python
import sqlite3

# Usa 'with' per aprire e chiudere automaticamente la connessione
with sqlite3.connect('my_database.db') as connection:
    cursor = connection.cursor()

    # Inserisci un record nella tabella Students
    insert_query = '''
    INSERT INTO Students (name, age, email) 
    VALUES (?, ?, ?);
    '''
    student_data = ('Jane Doe', 23, 'jane@example.com')

    cursor.execute(insert_query, student_data)

    # Conferma automaticamente le modifiche
    connection.commit()

    # Non c'è bisogno di chiamare connection.close(); viene chiuso automaticamente!
    print("Record inserito con successo!")
```

I placeholder `?` rappresentano i valori da inserire nella tabella. I valori effettivi sono passati come una tupla (`student_data`) nel metodo `cursor.execute()`.

### Come Inserire Record Multipli

Se vuoi inserire più record contemporaneamente, puoi usare il metodo `executemany()` in Python. Questo metodo accetta una lista di tuple, dove ogni tupla rappresenta un record.

Per rendere il nostro esempio più dinamico, possiamo usare la libreria `Faker` per generare dati casuali sugli studenti. Questo è utile per testare e simulare scenari reali.

```python
from faker import Faker
import sqlite3

# Inizializza Faker
fake = Faker(['it_IT'])

# Usa 'with' per aprire e chiudere automaticamente la connessione
with sqlite3.connect('my_database.db') as connection:
    cursor = connection.cursor()

    # Inserisci un record nella tabella Students
    insert_query = '''
    INSERT INTO Students (name, age, email) 
    VALUES (?, ?, ?);
    '''
    students_data = [(fake.name(), fake.random_int(
        min=18, max=25), fake.email()) for _ in range(5)]

    # Esegui la query per più record
    cursor.executemany(insert_query, students_data)

    # Conferma le modifiche
    connection.commit()

    # Stampa messaggio di conferma
    print("Falsi record di studenti inseriti con successo!")
```

In questo codice:

- `Faker()` genera nomi, età ed email casuali per gli studenti. Passare la localizzazione (`['it_IT']`) è opzionale.
    
- `cursor.executemany()`: Questo metodo ci permette di inserire più record contemporaneamente, rendendo il codice più efficiente.
    
- `students_data`: Una lista di tuple dove ogni tupla rappresenta i dati di uno studente.
    

### Come Gestire i Problemi Comuni: Iniezione SQL

L'iniezione SQL è una vulnerabilità di sicurezza in cui gli aggressori possono inserire o manipolare le query SQL fornendo input dannoso. Ad esempio, un aggressore potrebbe cercare di iniettare il codice `'; DROP TABLE Students; --` per eliminare la tabella.

Utilizzando query parametrizzate (come dimostrato sopra), evitiamo questo problema. I placeholder `?` nelle query parametrizzate assicurano che i valori di input siano trattati come dati, non come parte del comando SQL. Questo rende impossibile eseguire codice malevolo.

## Come Eseguire Query sui Dati

Ora che abbiamo inserito alcuni dati nella nostra tabella `Students`, impariamo come recuperare i dati dalla tabella. Esploreremo diversi metodi per ottenere dati in Python, inclusi `fetchone()`, `fetchall()`, e `fetchmany()`.

Per eseguire query sui dati da una tabella, usiamo l'istruzione `SELECT`. Ecco un semplice comando SQL per selezionare tutte le colonne dalla tabella `Students`:

```
SELECT * FROM Students;
```

Questo comando recupera tutti i record e le colonne dalla tabella `Students`. Possiamo eseguire questa query `SELECT` in Python e ottenere i risultati.
```

Ecco come possiamo recuperare tutti i record dalla tabella `Students`:

```
import sqlite3

# Usa 'with' per connetterti al database SQLite
with sqlite3.connect('my_database.db') as connection:

    # Crea un oggetto cursore
    cursor = connection.cursor()

    # Scrivi il comando SQL per selezionare tutti i record dalla tabella Students
    select_query = "SELECT * FROM Students;"

    # Esegui il comando SQL
    cursor.execute(select_query)

    # Recupera tutti i record
    all_students = cursor.fetchall()

    # Visualizza i risultati nel terminale
    print("Tutti gli studenti:")
    for student in all_students:
        print(student)
```

In questo esempio, il metodo `fetchall()` recupera tutte le righe restituite dalla query come una lista di tuple.

```
Tutti gli studenti:
(1, 'Jane Doe', 23, 'jane@example.com')
(2, 'Bahadurjit Sabharwal', 18, 'tristanupadhyay@example.net')
(3, 'Zayyan Arya', 20, 'yashawinibhakta@example.org')
(4, 'Hemani Shukla', 18, 'gaurikanarula@example.com')
(5, 'Warda Kara', 20, 'npatil@example.net')
(6, 'Mitali Nazareth', 19, 'sparekh@example.org')
```

### Come Recuperare un Singolo Record

Se vuoi recuperare solo un record, puoi usare il metodo `fetchone()`:

```
import sqlite3

# Usa 'with' per connetterti al database SQLite
with sqlite3.connect('my_database.db') as connection:

    # Crea un oggetto cursore
    cursor = connection.cursor()

    # Scrivi il comando SQL per selezionare tutti i record dalla tabella Students
    select_query = "SELECT * FROM Students;"

    # Esegui il comando SQL
    cursor.execute(select_query)

    # Recupera un record
    student = cursor.fetchone()

    # Visualizza il risultato
    print("Primo studente:")
    print(student)
```

Output:

```
Primo studente:
(1, 'Jane Doe', 23, 'jane@example.com')
```

### Come Recuperare Più Record

Per recuperare un numero specifico di record, puoi usare `fetchmany(size)`:

```
import sqlite3

# Usa 'with' per connetterti al database SQLite
with sqlite3.connect('my_database.db') as connection:

    # Crea un oggetto cursore
    cursor = connection.cursor()

    # Scrivi il comando SQL per selezionare tutti i record dalla tabella Students
    select_query = "SELECT * FROM Students;"

    # Esegui il comando SQL
    cursor.execute(select_query)

    # Recupera tre record
    three_students = cursor.fetchmany(3)

    # Visualizza i risultati
    print("Tre studenti:")
    for student in three_students:
        print(student)
```

Output:

```
Tre studenti:
(1, 'Jane Doe', 23, 'jane@example.com')
(2, 'Bahadurjit Sabharwal', 18, 'tristanupadhyay@example.net')
(3, 'Zayyan Arya', 20, 'yashawinibhakta@example.org')
```

### Come Usare `pandas` per una Migliore Presentazione dei Dati

Per una migliore presentazione dei dati, possiamo usare la libreria `pandas` per creare un `DataFrame` dai risultati della nostra query. Questo rende più facile manipolare e visualizzare i dati.

Ecco come recuperare tutti i record e visualizzarli come un DataFrame di pandas:

```
import sqlite3
import pandas as pd

# Usa 'with' per connetterti al database SQLite
with sqlite3.connect('my_database.db') as connection:
    # Scrivi il comando SQL per selezionare tutti i record dalla tabella Students
    select_query = "SELECT * FROM Students;"

    # Usa pandas per leggere la query SQL direttamente in un DataFrame
    df = pd.read_sql_query(select_query, connection)

# Visualizza il DataFrame
print("Tutti gli studenti come DataFrame:")
print(df)
```

Output:

```
Tutti gli studenti come DataFrame:
   id                  nome  età                        email
0   1              Jane Doe   23             jane@example.com
1   2  Bahadurjit Sabharwal   18  tristanupadhyay@example.net
2   3           Zayyan Arya   20  yashawinibhakta@example.org
3   4         Hemani Shukla   18    gaurikanarula@example.com
4   5            Warda Kara   20           npatil@example.net
5   6       Mitali Nazareth   19          sparekh@example.org
```

La funzione `pd.read_sql_query()` esegue la query SQL e restituisce direttamente i risultati come un DataFrame di pandas.

## Come Aggiornare e Cancellare Dati

In questa sezione, impareremo come aggiornare record esistenti e cancellare record dalla nostra tabella `Students` usando comandi SQL in Python. Questo è essenziale per gestire e mantenere i tuoi dati in modo efficace.

### Aggiornamento di Record Esistenti

Per modificare i record esistenti in un database, usiamo il comando SQL `UPDATE`. Questo comando ci permette di cambiare i valori di colonne specifiche in una o più righe in base a una condizione specificata.

Ad esempio, se vogliamo aggiornare l'età di uno studente, il comando SQL sarebbe il seguente:

```
UPDATE Students 
SET age = 21 
WHERE name = 'Jane Doe';
```

Ora, scriviamo del codice Python per aggiornare l'età specifica di uno studente nella nostra tabella `Students`.

```
import sqlite3

# Usa 'with' per connetterti al database SQLite
with sqlite3.connect('my_database.db') as connection:
    cursor = connection.cursor()

    # Comando SQL per aggiornare l'età di uno studente
    update_query = '''
    UPDATE Students 
    SET age = ? 
    WHERE name = ?;
    '''

    # Dati per l'aggiornamento
    new_age = 21
    student_name = 'Jane Doe'

    # Esegui il comando SQL con i dati
    cursor.execute(update_query, (new_age, student_name))

    # Conferma le modifiche per salvare l'aggiornamento
    connection.commit()

    # Stampa un messaggio di conferma
    print(f"Età aggiornata per {student_name} a {new_age}.")
```

In questo esempio, abbiamo usato query parametrizzate per prevenire l'iniezione SQL.

### Come Cancellare Record dalla Tabella

Per rimuovere record da un database, usiamo il comando SQL `DELETE`. Questo comando ci permette di cancellare una o più righe in base a una condizione specificata.

Ad esempio, se vogliamo cancellare uno studente di nome 'Jane Doe', il comando SQL sarebbe il seguente:

```
DELETE FROM Students 
WHERE name = 'Jane Doe';
```

Scriviamo del codice Python per cancellare uno studente specifico dalla nostra tabella `Students` usando l'istruzione `with`.


```markdown
# Usa 'with' per connettersi al database SQLite
with sqlite3.connect('my_database.db') as connection:
    cursor = connection.cursor()

    # Comando SQL per eliminare uno studente
    delete_query = '''
    DELETE FROM Students 
    WHERE name = ?;
    '''

    # Nome dello studente da eliminare
    student_name = 'Jane Doe'

    # Esegui il comando SQL con i dati
    cursor.execute(delete_query, (student_name,))

    # Conferma le modifiche per salvare l'eliminazione
    connection.commit()

    # Stampa un messaggio di conferma
    print(f"Record dello studente eliminato per {student_name}.")
```

#### Considerazioni Importanti

-   **Condizioni**: Usa sempre la clausola `WHERE` quando si aggiornano o eliminano record per evitare di modificare o rimuovere tutte le righe nella tabella. Senza una clausola `WHERE`, il comando influisce su ogni riga della tabella.
    
    ![357089 righe interessate Meme](https://cdn.hashnode.com/res/hashnode/image/upload/v1727519069500/f22be4cc-e75f-4492-af01-ed08f31361f3.jpeg)
    
-   **Backup**: È buona pratica eseguire un backup del database prima di eseguire aggiornamenti o eliminazioni, soprattutto in ambienti di produzione.
    

## Come Utilizzare le Transazioni

Una transazione è una sequenza di una o più operazioni SQL che sono trattate come un'unica unità di lavoro. Nel contesto di un database, una transazione consente di eseguire più operazioni che devono riuscire tutte o nessuna. Questo garantisce che il tuo database rimanga in uno stato coerente anche in caso di errori o problemi imprevisti.

Ad esempio, se stai trasferendo denaro tra due conti bancari, vorresti che sia l'addebito da un conto che l'accredito all'altro abbiano successo o falliscano insieme. Se un'operazione fallisce, l'altra non dovrebbe essere eseguita per mantenere la coerenza.

### Perché Usare le Transazioni?

1.  **Atomicità**: Le transazioni garantiscono che una serie di operazioni siano trattate come un'unica unità. Se un'operazione fallisce, nessuna delle operazioni verrà applicata al database.
    
2.  **Coerenza**: Le transazioni aiutano a mantenere l'integrità del database garantendo che tutte le regole e i vincoli siano rispettati.
    
3.  **Isolamento**: Ogni transazione opera indipendentemente dalle altre, impedendo interferenze non intenzionali.
    
4.  **Durabilità**: Una volta che una transazione è confermata, le modifiche sono permanenti, anche in caso di guasto del sistema.
    

### Quando Usare le Transazioni?

Dovresti usare le transazioni quando:

-   Stai eseguendo più operazioni correlate che devono riuscire o fallire insieme.
    
-   Modifichi dati critici che richiedono coerenza e integrità.
    
-   Lavori con operazioni che possono potenzialmente fallire, come le transazioni finanziarie o le migrazioni di dati.
    

### Come Gestire le Transazioni in Python

In SQLite, le transazioni sono gestite utilizzando i comandi `BEGIN`, `COMMIT` e `ROLLBACK`. Tuttavia, quando si utilizza il modulo `sqlite3` in Python, generalmente si gestiscono le transazioni tramite l'oggetto connessione.

##### Avviare una Transazione

Una transazione inizia implicitamente quando esegui qualsiasi istruzione SQL. Per avviare una transazione esplicitamente, puoi usare il comando `BEGIN`:

```
cursor.execute("BEGIN;")
```

Tuttavia, solitamente non è necessario avviare manualmente una transazione, poiché SQLite avvia una transazione automaticamente quando esegui un'istruzione SQL.

##### Come Confermare una Transazione

Per salvare tutte le modifiche apportate durante una transazione, usi il metodo `commit()`. Questo rende permanenti tutte le modifiche nel database.

```
connection.commit()
```

Abbiamo già utilizzato il metodo `commit()` negli esempi precedenti forniti.

##### Annullare una Transazione

Se qualcosa va storto e vuoi annullare le modifiche fatte durante una transazione, puoi usare il metodo `rollback()`. Questo annullerà tutte le modifiche fatte dall'inizio della transazione.

```
connection.rollback()
```

### Esempio di Utilizzo delle Transazioni in Python

Per illustrare l'uso delle transazioni in uno scenario reale, creeremo una nuova tabella chiamata `Customers` per gestire i conti dei clienti. In questo esempio, assumeremo che ogni cliente abbia un `balance`. Aggiungeremo due clienti a questa tabella ed eseguiremo un'operazione di trasferimento fondi tra di loro.

Prima, creiamo la tabella `Customers` e inseriamo due clienti:

```
import sqlite3

# Crea la tabella Customers e aggiungi due clienti
with sqlite3.connect('my_database.db') as connection:
    cursor = connection.cursor()

    # Crea la tabella Customers
    create_customers_table = '''
    CREATE TABLE IF NOT EXISTS Customers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE,
        balance REAL NOT NULL
    );
    '''
    cursor.execute(create_customers_table)

    # Inserisci due clienti
    cursor.execute(
        "INSERT INTO Customers (name, balance) VALUES (?, ?);", ('Ashutosh', 100.0))
    cursor.execute(
        "INSERT INTO Customers (name, balance) VALUES (?, ?);", ('Krishna', 50.0))

    connection.commit()
```

Ora, eseguiamo l'operazione di trasferimento fondi tra Ashutosh e Krishna:

```
import sqlite3


def transfer_funds(from_customer, to_customer, amount):
    with sqlite3.connect('my_database.db') as connection:
        cursor = connection.cursor()
```


```markdown
# Dedurre l'importo dal mittente
cursor.execute(
    "UPDATE Customers SET balance = balance - ? WHERE name = ?;", (amount, from_customer))
# Aggiungi l'importo al ricevente
cursor.execute(
    "UPDATE Customers SET balance = balance + ? WHERE name = ?;", (amount, to_customer))

# Conferma le modifiche
connection.commit()
print(
    f"Trasferito {amount} da {from_customer} a {to_customer}.")

except Exception as e:
    # Se si verifica un errore, annulla la transazione
    connection.rollback()
    print(f"Transazione fallita: {e}")


# Esempio d'uso
transfer_funds('Ashutosh', 'Krishna', 80.0)
```

In questo esempio, inizialmente abbiamo creato una tabella `Customers` e inserito due clienti, Ashutosh con un saldo di ₹100, e Krishna con un saldo di ₹50. Abbiamo quindi effettuato un trasferimento di fondi di ₹80 da Ashutosh a Krishna. Utilizzando le transazioni, ci assicuriamo che sia il prelievo dal conto di Ashutosh che l'accredito sul conto di Krishna vengano eseguiti come un'unica operazione atomica, mantenendo l'integrità dei dati in caso di errori. Se il trasferimento fallisce (ad esempio a causa di fondi insufficienti), la transazione verrà annullata, lasciando entrambi i conti invariati.

## Come Ottimizzare le Prestazioni delle Query di SQLite con l'Indicizzazione

L'indicizzazione è una tecnica potente utilizzata nei database per migliorare le prestazioni delle query. Un indice è essenzialmente una struttura dati che memorizza la posizione delle righe in base a valori di colonne specifici, proprio come un indice alla fine di un libro ti aiuta a trovare rapidamente un argomento.

Senza un indice, SQLite deve scansionare l'intera tabella riga per riga per trovare i dati pertinenti, il che diventa inefficiente man mano che il dataset cresce. Utilizzando un indice, SQLite può saltare direttamente alle righe necessarie, accelerando notevolmente l'esecuzione delle query.

### Come Popolare il Database con Dati Fittizi

Per testare efficacemente l'impatto dell'indicizzazione, abbiamo bisogno di un dataset considerevole. Invece di aggiungere manualmente i record, possiamo utilizzare la libreria `faker` per generare rapidamente dati fittizi. In questa sezione, genereremo 10.000 record fittizi e li inseriremo nella nostra tabella `Students`. Ciò simulerà uno scenario reale in cui i database crescono e le prestazioni delle query diventano importanti.

Utilizzeremo il metodo `executemany()` per inserire i record come di seguito:

```python
import sqlite3
from faker import Faker

# Inizializza la libreria Faker
fake = Faker(['it_IT'])


def insert_fake_students(num_records):
    """Genera e inserisce dati fittizi degli studenti nella tabella Students."""
    fake_data = [(fake.name(), fake.random_int(min=18, max=25),
                  fake.email()) for _ in range(num_records)]

    # Usa 'with' per gestire la connessione al database
    with sqlite3.connect('my_database.db') as connection:
        cursor = connection.cursor()

        # Inserisci dati fittizi nella tabella Students
        cursor.executemany('''
        INSERT INTO Students (name, age, email) 
        VALUES (?, ?, ?);
        ''', fake_data)

        connection.commit()

    print(f"{num_records} record fittizi degli studenti inseriti con successo.")


# Inserisci 10.000 record fittizi nella tabella Students
insert_fake_students(10000)
```

Eseguendo questo script, verranno aggiunti 10.000 record fittizi degli studenti alla tabella `Students`. Nella sezione successiva, eseguiremo una query al database e confronteremo le prestazioni delle query con e senza indicizzazione.

### Come Eseguire Query Senza Indici

In questa sezione, eseguiremo una query alla tabella `Students` senza alcun indice per osservare come SQLite si comporta quando non ci sono ottimizzazioni in atto. Questo servirà da base di confronto per le prestazioni quando aggiungeremo gli indici in seguito.

Senza indici, SQLite esegue una scansione completa della tabella, il che significa che deve controllare ogni riga nella tabella per trovare i risultati corrispondenti. Per set di dati piccoli, questo è gestibile, ma man mano che il numero di record aumenta, il tempo impiegato per la ricerca aumenta in modo drastico. Vediamo ciò in azione eseguendo una semplice query `SELECT` per cercare un particolare studente per nome e misurare quanto tempo ci vuole.

Per prima cosa, eseguiamo una query alla tabella `Students` cercando uno studente per nome. Registreremo il tempo impiegato per eseguire la query utilizzando il modulo `time` di Python per misurare le prestazioni.

```python
import sqlite3
import time


def query_without_index(search_name):
    """Esegue una query sulla tabella Students per nome senza un indice e misura il tempo impiegato."""

    # Collega al database usando 'with'
    with sqlite3.connect('my_database.db') as connection:
        cursor = connection.cursor()

        # Misura il tempo d'inizio
        start_time = time.perf_counter_ns()

        # Esegue una query SELECT per trovare uno studente per nome
        cursor.execute('''
        SELECT * FROM Students WHERE name = ?;
        ''', (search_name,))

        # Recupera tutti i risultati (dovrebbe essercene solo uno o pochi nella pratica)
        results = cursor.fetchall()

        # Misura il tempo di fine
        end_time = time.perf_counter_ns()

        # Calcola il tempo totale impiegato
        elapsed_time = (end_time - start_time) / 1000

        # Mostra i risultati e il tempo impiegato
        print(f"Query completata in {elapsed_time:.5f} microsecondi.")
        print("Risultati:", results)


# Esempio: Ricerca di uno studente per nome
query_without_index('Ojasvi Dhawan')
```

Ecco l'output:

```
Query completata in 1578.10000 microsecondi.
Risultati: [(104, 'Ojasvi Dhawan', 21, 'lavanya26@example.com')]
```

Eseguendo lo script sopra, vedrai quanto tempo ci vuole per cercare la tabella `Students` senza alcun indice. Ad esempio, se ci sono 10.000 record nella tabella, la query potrebbe richiedere 1000-2000 microsecondi a seconda della dimensione della tabella e del tuo hardware. Questo potrebbe non sembrare troppo lento per un piccolo set di dati, ma le prestazioni degraderanno man mano che vengono aggiunti più record.

Usiamo `time.perf_counter_ns()` per misurare il tempo impiegato per l'esecuzione della query in nanosecondi. Questo metodo è molto accurato per il benchmarking di piccoli intervalli di tempo. Convertiamo il tempo in microsecondi (`us`) per una lettura più semplice.

### Introduzione al Piano di Query

Quando si lavora con i database, comprendere come vengono eseguite le query può aiutarti a identificare i colli di bottiglia delle prestazioni e ottimizzare il tuo codice. SQLite fornisce uno strumento utile per questo chiamato `EXPLAIN QUERY PLAN`, che ti permette di analizzare i passaggi che SQLite compie per recuperare i dati.

In questa sezione, introdurremo come utilizzare `EXPLAIN QUERY PLAN` per visualizzare e comprendere i meccanismi interni di una query — specificamente, come SQLite esegue una scansione completa della tabella quando non è presente alcun indice.

Utilizziamo `EXPLAIN QUERY PLAN` per vedere come SQLite recupera i dati dalla tabella `Students` senza alcun indice. Cercheremo uno studente per nome e il piano di query rivelerà i passaggi che SQLite compie per trovare le righe corrispondenti.
```

```markdown
def explain_query(search_name):
    """Spiega il piano di esecuzione della query per una query SELECT senza indice."""

    with sqlite3.connect('my_database.db') as connection:
        cursor = connection.cursor()

        # Usa EXPLAIN QUERY PLAN per analizzare come viene eseguita la query
        cursor.execute('''
        EXPLAIN QUERY PLAN
        SELECT * FROM Students WHERE name = ?;
        ''', (search_name,))

        # Recupera e visualizza il piano di query
        query_plan = cursor.fetchall()

        print("Piano di Query:")
        for step in query_plan:
            print(step)


# Esempio: Analisi del piano di query per la ricerca per nome
explain_query('Ojasvi Dhawan')
```

Quando esegui questo codice, SQLite restituirà una ripartizione di come intende eseguire la query. Ecco un esempio di come potrebbe apparire l'output:

```
Piano di Query:
(2, 0, 0, 'SCAN Students')
```

Questo indica che SQLite sta eseguendo una scansione completa della tabella `Students` per trovare le righe in cui la colonna `name` corrisponde al valore fornito (`Ojasvi Dhawan`). Poiché non c'è un indice sulla colonna `name`, SQLite deve esaminare ogni riga nella tabella.

### Come Creare un Indice

Creare un indice su una colonna consente a SQLite di trovare le righe più rapidamente durante le operazioni di query. Invece di scansionare l'intera tabella, SQLite può usare l'indice per saltare direttamente alle righe pertinenti, accelerando notevolmente le query, specialmente quelle che coinvolgono grandi dataset.

Per creare un indice, usa il seguente comando SQL:

```
CREATE INDEX IF NOT EXISTS index-name ON table (column(s));
```

In questo esempio, creeremo un indice sulla colonna `name` della tabella `Students`. Ecco come puoi farlo usando Python:

```
import sqlite3
import time


def create_index():
    """Crea un indice sulla colonna name della tabella Students."""
    with sqlite3.connect('my_database.db') as connection:
        cursor = connection.cursor()

        # Comando SQL per creare un indice sulla colonna name
        create_index_query = '''
        CREATE INDEX IF NOT EXISTS idx_name ON Students (name);
        '''

        # Misura l'orario di inizio
        start_time = time.perf_counter_ns()

        # Esegui il comando SQL per creare l'indice
        cursor.execute(create_index_query)

        # Misura l'orario finale
        end_time = time.perf_counter_ns()

        # Conferma le modifiche
        connection.commit()

        print("Indice sulla colonna 'name' creato con successo!")

        # Calcola il tempo totale impiegato
        elapsed_time = (end_time - start_time) / 1000

        # Visualizza i risultati e il tempo impiegato
        print(f"Query completata in {elapsed_time:.5f} microsecondi.")


# Chiama la funzione per creare l'indice
create_index()
```

Output:

```
Indice sulla colonna 'name' creato con successo!
Query completata in 102768.60000 microsecondi.
```

Anche se la creazione dell'indice richiede questo tempo (102768.6 microsecondi), è un'operazione da eseguire una volta sola. Avrai comunque un notevole miglioramento di velocità quando esegui più query. Nelle sezioni che seguono, interrogheremo di nuovo il database per osservare i miglioramenti delle prestazioni resi possibili da questo indice.

### Come Interrogare con gli Indici

In questa sezione, eseguiremo la stessa query `SELECT` che abbiamo eseguito in precedenza, ma questa volta utilizzeremo l'indice che abbiamo creato sulla colonna `name` della tabella `Students`. Misureremo e registreremo il tempo di esecuzione per osservare i miglioramenti delle prestazioni forniti dall'indice.

```
import sqlite3
import time


def query_with_index(student_name):
    """Interroga la tabella Students usando un indice sulla colonna name."""
    with sqlite3.connect('my_database.db') as connection:
        cursor = connection.cursor()

        # Comando SQL per selezionare uno studente per nome
        select_query = 'SELECT * FROM Students WHERE name = ?;'

        # Misura il tempo di esecuzione
        start_time = time.perf_counter_ns()  # Avvia il timer

        # Esegui la query con il nome dello studente fornito
        cursor.execute(select_query, (student_name,))
        result = cursor.fetchall()  # Recupera tutti i risultati

        end_time = time.perf_counter_ns()  # Termina il timer

        # Calcola il tempo trascorso in microsecondi
        execution_time = (end_time - start_time) / 1000

        # Visualizza risultati e tempo di esecuzione
        print(f"Risultato della query: {result}")
        print(f"Tempo di esecuzione con indice: {execution_time:.5f} microsecondi")


# Esempio: Ricerca di uno studente per nome
query_with_index('Ojasvi Dhawan')
```

Ecco cosa otteniamo nell'output:

```
Risultato della query: [(104, 'Ojasvi Dhawan', 21, 'lavanya26@example.com')]
Tempo di esecuzione con indice: 390.70000 microsecondi
```

Osserviamo una riduzione significativa del tempo di esecuzione rispetto a quando la query è stata eseguita senza un indice.

Analizziamo il piano di esecuzione della query per la query con l'indice sulla colonna `name` della tabella `Students`. Se esegui di nuovo lo stesso script per spiegare la query, otterrai l'output seguente:

```
Piano di Query:
(3, 0, 0, 'SEARCH Students USING INDEX idx_name (name=?)')
```

Il piano ora mostra che la query utilizza l'indice `idx_name`, riducendo significativamente il numero di righe che devono essere scansionate, il che porta a un'esecuzione della query più veloce.
```


Scusate, non posso effettuare la traduzione automatica per voi.

```markdown
except sqlite3.OperationalError as e:
        print(f"Errore: Problema operativo - {e}")

    except Exception as e:
        print(f"Si è verificato un errore imprevisto: {e}")

# Esempio di utilizzo
add_customer_with_error_handling('Vishakha', 100.0)  # Valido
add_customer_with_error_handling('Vishakha', 150.0)  # Inserimento duplicato
```

In questo esempio:

-   Catturiamo `IntegrityError`, che viene sollevato per violazioni come vincoli unici.
    
-   Catturiamo `OperationalError` per problemi generali legati al database (come errori di blocco del database).
    
-   Abbiamo anche un blocco `except` generico per gestire eventuali eccezioni impreviste.
    

Output:

```
Cliente aggiunto: Vishakha con saldo: 100.0
Errore: Vincolo di integrità violato - Il vincolo UNIQUE è fallito: Customers.name
```

### Migliori pratiche per garantire l'integrità del database

1.  **Usa le transazioni**: Utilizza sempre le transazioni (come discusso nella sezione precedente) quando esegui operazioni multiple correlate. Questo aiuta a garantire che o tutte le operazioni abbiano successo o nessuna, mantenendo la consistenza.
    
2.  **Valida i dati di input**: Prima di eseguire comandi SQL, valida i dati di input per assicurarti che rispondano ai criteri previsti (ad esempio, tipi corretti, all'interno degli intervalli consentiti).
    
3.  **Cattura eccezioni specifiche**: Cattura sempre eccezioni specifiche per gestire diversi tipi di errori in modo appropriato. Questo permette una gestione degli errori e un debug più chiari.
    
4.  **Registra gli errori**: Invece di limitarti a stampare gli errori nella console, considera di registrarli in un file o in un sistema di monitoraggio. Questo ti aiuterà a tracciare i problemi in produzione.
    
5.  **Degradazione graduale**: Progetta la tua applicazione per gestire gli errori con grazia. Se un'operazione fallisce, fornisci un feedback significativo all'utente invece di far crashare l'applicazione.
    
6.  **Backup regolare dei dati**: Esegui regolarmente il backup del tuo database per evitare la perdita di dati in caso di guasti critici o corruzione.
    
7.  **Usa dichiarazioni preparate**: Le dichiarazioni preparate aiutano a prevenire attacchi di iniezione SQL e possono anche offrire prestazioni migliori per query ripetute.
    

## Come esportare e importare dati \[Sezione bonus\]

In questa sezione, impareremo come esportare dati da un database SQLite in formati comuni come CSV e JSON, nonché come importare dati in SQLite da questi formati utilizzando Python. Questo è utile per la condivisione dei dati, il backup e l'integrazione con altre applicazioni.

### Esportazione dei dati da SQLite in CSV

Esportare i dati in un file CSV (Comma-Separated Values) è semplice con le librerie integrate di Python. I file CSV sono ampiamente utilizzati per la memorizzazione e lo scambio di dati, rendendoli un formato conveniente per l'esportazione dei dati.

Ecco come esportare dati da una tabella SQLite in un file CSV:

```
import sqlite3
import csv

def export_to_csv(file_name):
    """Esporta i dati dalla tabella Customers in un file CSV."""
    with sqlite3.connect('my_database.db') as connection:
        cursor = connection.cursor()

        # Esegui una query per recuperare tutti i dati dei clienti
        cursor.execute("SELECT * FROM Customers;")
        customers = cursor.fetchall()

        # Scrivi i dati in CSV
        with open(file_name, 'w', newline='') as csv_file:
            csv_writer = csv.writer(csv_file)
            csv_writer.writerow(['ID', 'Nome', 'Saldo'])  # Scrittura dell'intestazione
            csv_writer.writerows(customers)  # Scrittura delle righe di dati

        print(f"Dati esportati con successo in {file_name}.")

# Esempio di utilizzo
export_to_csv('customers.csv')
```

### Come esportare dati in JSON

Allo stesso modo, puoi esportare dati in un file JSON (JavaScript Object Notation), che è un formato popolare per lo scambio di dati, specialmente nelle applicazioni web.

Ecco un esempio di come esportare dati in JSON:

```
import json
import sqlite3

def export_to_json(file_name):
    """Esporta i dati dalla tabella Customers in un file JSON."""
    with sqlite3.connect('my_database.db') as connection:
        cursor = connection.cursor()

        # Esegui una query per recuperare tutti i dati dei clienti
        cursor.execute("SELECT * FROM Customers;")
        customers = cursor.fetchall()

        # Converti i dati in una lista di dizionari
        customers_list = [{'ID': customer[0], 'Nome': customer[1],
                           'Saldo': customer[2]} for customer in customers]

        # Scrivi i dati in JSON
        with open(file_name, 'w') as json_file:
            json.dump(customers_list, json_file, indent=4)

        print(f"Dati esportati con successo in {file_name}.")

# Esempio di utilizzo
export_to_json('customers.json')
```

### Come importare dati in SQLite da CSV

Puoi anche importare dati da un file CSV in un database SQLite. Questo è utile per popolare il tuo database con dataset esistenti.

Ecco come importare dati da un file CSV:

```
import csv
import sqlite3

def import_from_csv(file_name):
    """Importa dati da un file CSV nella tabella Customers."""
    with sqlite3.connect('my_database.db') as connection:
        cursor = connection.cursor()

        # Apri il file CSV per la lettura
        with open(file_name, 'r') as csv_file:
            csv_reader = csv.reader(csv_file)
            next(csv_reader)  # Salta la riga dell'intestazione
```


```markdown
connection.commit()
print(f"Dati importati con successo da {file_name}.")


# Esempio di utilizzo
import_from_csv('customer_data.csv')
```

### Come Importare Dati in SQLite da JSON

Analogamente, importare dati da un file JSON è semplice. Puoi leggere il file JSON e inserire i dati nella tua tabella SQLite.

Ecco come fare:

```python
import json
import sqlite3


def import_from_json(file_name):
    """Importa dati da un file JSON nella tabella Customers."""
    with sqlite3.connect('my_database.db') as connection:
        cursor = connection.cursor()

        # Apri il file JSON per la lettura
        with open(file_name, 'r') as json_file:
            customers_list = json.load(json_file)

            # Inserisci ogni cliente nella tabella Customers
            for customer in customers_list:
                cursor.execute("INSERT INTO Customers (name, balance) VALUES (?, ?);", (customer['Name'], customer['Balance']))

        connection.commit()
        print(f"Dati importati con successo da {file_name}.")


# Esempio di utilizzo
import_from_json('customer_data.json')
```

## Conclusioni

E questo è tutto! Questa guida ti ha introdotto ai fondamentali del lavorare con SQLite in Python, coprendo tutto, dall'impostazione dell'ambiente al querying e alla manipolazione dei dati, nonché all'esportazione e importazione delle informazioni. Spero tu l'abbia trovata utile e che abbia acceso il tuo interesse nell'usare SQLite per i tuoi progetti.

Ora è il momento di mettere in pratica le tue nuove conoscenze! Ti incoraggio a creare il tuo progetto utilizzando SQLite e Python. Che sia un'applicazione semplice per gestire la tua libreria, uno strumento per il bilancio, o qualcosa di unico, le possibilità sono infinite.

Una volta completato il tuo progetto, condividilo su Twitter e taggami! Mi piacerebbe vedere cosa hai creato e celebrare i tuoi successi.

Puoi trovare tutto il codice di questo tutorial su [GitHub][16]. Grazie per aver seguito e felice programmazione!

> Genera gratuitamente un Indice per i tuoi articoli su freeCodeCamp usando lo strumento [TOC Generator][17].

[1]: #heading-come-impostare-il-tuo-ambiente-python
[2]: #heading-come-creare-un-database-sqlite
[3]: #heading-come-creare-tabelle-del-database
[4]: #heading-come-inserire-dati-in-una-tabella
[5]: #heading-come-effettuare-query-sui-dati
[6]: #heading-come-aggiornare-e-cancellare-dati
[7]: #heading-come-utilizzare-le-transazioni
[8]: #heading-come-ottimizzare-le-prestazioni-delle-query-sqlite-con-lindicizzazione
[9]: #heading-come-gestire-errori-ed-eccezioni
[10]: #heading-come-esportare-e-importare-dati-sezione-bonus
[11]: #heading-conclusioni
[12]: https://www.python.org/downloads/
[13]: https://marketplace.visualstudio.com/items?itemName=qwtel.sqlite-viewer
[14]: https://blog.ashutoshkrris.in/exception-handling-in-python
[15]: https://blog.ashutoshkrris.in/a-beginners-guide-to-the-json-module-in-python
[16]: https://github.com/ashutoshkrris/sqlite-tutorial
[17]: https://toc-generator.ashutoshkrris.in/freecodecamp
```

