# Express Blog - API CRUD (parte 1)
## Consegna:
### Milestone 1:
- Riprendendo l'esercizio dell'ultima volta, creare una nuova cartella 'controllers', con all'interno un controller per i nostri post.
- All'interno, preparare tutte le funzioni necessarie e copiare in ciascuna, la logica delle funzioni che attualmente si trovano nel router (al momento mantenerle con la sola restituzione di un messaggio).
- In seguito nel file delle rotte (routers/routerPosts.js) importare le funzioni dichiarate nel controller e associarle alle varie rotte, come visto in classe.
- Testare il tutto su thunder-client. Se chiamando gli endpoint riceviamo effettivamente le risposte che avevamo prima, passare alla seconda milestone.

### Milestone 2:
- Creare una cartella 'data' in cui creare un file che contenga ed esporti l'array di post che troviamo in allegato. Importare questo file nel file del controller dei post.
#### Ora Passiamo ad implementare le logiche delle nostre CRUD:
- Index, dovrà restituire la lista dei post in formato JSON.
- Show, dovrà restituire un singolo post in formato JSON.
- Destroy dovrà elliminare un singolo post dalla lista, stampare nel terminale (console.log) la lista aggiornata, e rispondere com uno stato 204 e nessun contenuto.

### Bonus:
- Implementare un filtro di ricerca nella index che (tramite una query string) mostri solo i post che hanno un determinato tag.
- In Show e Destroy, controllare se il parametro si riferisce ad un post esistente, nel caso non esista un post con quel determinato parametro, rispondere con uno stato 404 e un messaggio di errore, sempre in formato JSON.



# Express Blog - API CRUD (parte 2)
## Consegna:
### Milestone 1:
- Per iniziare, da Thunder Client preparare una nuova chiamata verso la rotta store.
- Impostare il verbo e l'endpoint corretti.
- Inseriamo come corpo della request un oggetto che rappresenti un nuovo post.

### Milestone 2:
- Impostare il body-parser per far si che la nostra app riesca a decifrare il request body.
- Solo dopo, all'interno della rotta store, stampare nel terminale i dati in arrivo, con un console.log.

### Milestone 3:
- Implementare la logica per aggiungere un nuovo post al blog, e premere la risposta adeguata. Testare con Thunder Client.

### Milestone 4:
- Ripetere il procedimento per la rotta di Update, in modo da avere la possibilità di modificare le risorse.

### Bonus:
- Fare i bonus dell'esercizio precedente, se non già fatti.
- In update controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno status 404 e un messaggio d'errore, sempre in formato JSON.



# Express Blog - API CRUD (parte 3)
## Consegna:
Dopo aver completato tutte le operazini CRUD, completare l'API inserendo un middleware per la gestione delle rotte non registrate e uno per la gestione degli errori. 
- Se viene chiamato un endpoint inesistente, un middleware dovrà rispondere con un messaggio e uno status appropriato.
- Se viene generato un errore, un middleware si occuperà di rispondere con un messaggio e uno status appropriato.

### Bonus:
- Creare un middleware che in caso di inserimento/modifica controlli la validità dei dati.