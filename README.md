Express Blog - API CRUD (parte 1)
===
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
