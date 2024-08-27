```markdown
title: Come Cancellare in Modo Sicuro un Disco e un File Usando il Comando shred di Linux
date: 2024-08-27T09:59:04.066Z
author: Zaira Hira
authorURL: https://www.freecodecamp.org/news/author/zaira/
originalURL: https://www.freecodecamp.org/news/securely-erasing-a-disk-and-file-using-linux-command-shred/
posteditor: ""
proofreader: ""
---

Rimuovere file e formattare dischi è un compito comune per gli utenti. Linux offre una serie di utilità per eliminare file e cartelle dalla riga di comando.

<!-- more -->

Il comando più comune per eliminare file e cartelle è `rm` e `rmdir`, rispettivamente. Puoi leggere in dettaglio sul comando `rm` [qui][1].

In questo post del blog, studieremo un nuovo comando noto come `shred` che ci aiuta a cancellare dischi e file in modo sicuro.

## Cos'è il comando `shred` di Linux?

Il comando shred aiuta a sovrascrivere i dati in posizione più volte. Questo rende più difficile per il software e le sonde hardware di terze parti recuperare i dati. Ecco perché viene comunemente usato per rimuovere i dati in modo sicuro.

### Sintassi del comando shred di Linux:

```
shred [OPTION] filename
```

```
shred -vfz [/file/system/path]
```

Secondo la pagina del `man`, alcune delle \[OPZIONI\] che puoi usare con `shred` sono:

-   `-n`, --iterations=N  
    Invece del valore predefinito (3) volte, sovrascrivi i dati N volte.
-   `-z`, --zero  
    Aggiungi una sovrascrittura finale con zeri per nascondere lo shredding.
-   `-f`, --force  
    Forza i permessi per consentire la scrittura se necessario.
-   `-v`, --verbose  
    Mostra il progresso in dettaglio.
-   `-u`, --remove  
    Trunca e rimuove il file dopo la sovrascrittura.

Nell'esempio sopra, sostituisci il percorso con il percorso del tuo disco.

### Come è diverso `shred` da `rm`?

Semplicemente usando `rm` si rimuove il puntatore al file system. I dati effettivi potrebbero ancora essere lì. Quindi esiste la possibilità di recupero dei dati.

Ma quando si usa il comando `shred`, il file viene sovrascritto un numero specificato di volte in modo che il contenuto effettivo sia irrecuperabile. Vedremo questo in esempi più avanti.

Un'altra differenza è la velocità di esecuzione. Di solito, `rm` è più veloce di `shred`. Questo perché `shred` sovrascrive il file un paio di volte prima di eliminarlo. A seconda del numero di iterazioni e della dimensione del file/disco, `shred` può richiedere più tempo. Mentre `rm` rimuove semplicemente il puntatore al file system.

### Come funziona il comando `shred`?

Il comando `shred` fa passare il file attraverso tre passaggi per impostazione predefinita. I tre passaggi garantiscono che il file venga sovrascritto tre volte. Il valore predefinito del passaggio può essere modificato usando il flag `-n`.

## Quando usare il comando `shred`

Usi il comando shred per cancellare dati sensibili, che garantisce sicurezza. Può essere usato da amministratori di sistema, team di forensics digitali, o specialisti della sicurezza delle informazioni per imporre standard di sicurezza.

## Esempi di `shred`

⚠️ Prima di eseguire uno qualsiasi degli esempi sul tuo sistema, assicurati che il tuo file e il tuo file system siano correttamente salvati. Fai attenzione, poiché i contenuti non sono recuperabili.

### Come sovrascrivere e eliminare un file con `shred`

Abbiamo un file di esempio `poem.txt` i cui contenuti sono condivisi qui sotto:

![content of file poem.txt](https://www.freecodecamp.org/news/content/images/2022/03/image-53.png) _Contenuti del file di esempio `poem.txt`_

Sovrascriviamo i suoi contenuti usando i tre passaggi predefiniti:

```
shred -v poem.txt
```

![Image](https://www.freecodecamp.org/news/content/images/2022/03/image-54.png) _Qui, possiamo vedere che il file è passato attraverso 3 sovrascritture_

Verifichiamo i contenuti del file triturato:

```
cat poem.txt
```

![Image](https://www.freecodecamp.org/news/content/images/2022/03/image-55.png) _Qui, possiamo vedere che i contenuti sono cambiati in un formato illeggibile._

Ora possiamo rimuovere in sicurezza il file usando `rm poem.txt`.

Tuttavia, possiamo usare il comando shred più efficientemente dove possiamo sovrascrivere, nascondere lo shredding e rimuovere il file in un unico comando. Modifichiamo ed eseguiamo il comando qui sotto:

```
shred -vzu -n5 poem.txt
```

Dove,

-   `-v` sta per verbose e fornisce un output dettagliato.
-   `-z` sostituisce il passaggio finale con zeri per nascondere lo shredding.
-   `-u` rimuove il file dopo lo shredding. Non dobbiamo rimuovere il file successivamente usando `rm` con questo flag.
-   `-n` cambia il numero di passaggi. Lo abbiamo impostato a 5.

### Output:

Nell'output qui sotto, il file è sovrascritto 5 volte. Nel passaggio finale, il file è sovrascritto con tutti zeri. Nei passaggi di rimozione del file, anche il nome del file è mutato così da non essere scoperto.

![Image](https://www.freecodecamp.org/news/content/images/2022/03/image-57.png) _Rimozione e nascondiglio del file in un unico comando_

### Come pulire un disco o una partizione con `shred`

Supponiamo che tu stia vendendo i tuoi dischi o che tu debba cancellare il tuo drive portatile. Puoi usare `shred` per pulire il tuo drive usando il comando qui sotto:

```
sudo shred -vfz /dev/sde
```

Dove,

-   `-v` fornisce un output dettagliato.
-   `-f` forza i permessi di scrittura se mancanti.
-   `-z` scrive zeri nel passaggio finale.

Puoi anche usare `shred` su partizioni RAID.

```
shred -vfz -n 10 /dev/md1
```

## Quando shred non è efficace? ☹️ ☹️

Ci sono alcuni casi in cui `shred` non è efficace. Secondo le pagine del [man][2], qui sotto ci sono alcuni dei casi:
```


## Concludendo

Il comando `shred` garantisce che i dati in un file non siano recuperabili. Sebbene ci siano alcune eccezioni, `shred` è comunque una soluzione migliore e più sicura rispetto a `rm`.

Spero che questo tutorial ti sia stato utile.

Condividi i tuoi pensieri su [Twitter][3]!

Puoi leggere i miei altri post [qui][4].

[1]: https://www.freecodecamp.org/news/remove-directory-in-linux-how-to-delete-a-folder-from-the-command-line/
[2]: https://linux.die.net/man/1/shred
[3]: https://twitter.com/hira_zaira
[4]: https://www.freecodecamp.org/news/author/zaira/

