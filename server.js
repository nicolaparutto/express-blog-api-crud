//Importo express e lo inizializzo:
const express = require('express');
const app = express();
//Importo il modulo delle rotte:
const postsRouter = require('./routers/routerPosts.js');
//Importo il modulo della gestione dell'errore endpoint:
const endpNotFound = require('./middlewares/endpNotFound.js');
//Importo il modulo della gestione degli errori:
const errorsHandler = require('./middlewares/errorsHandler.js')

//Assegno una porta al server:
const port = 3000;



//Registro il body-parser per permettere ad express di decodificare il dato che riceve dal body della request(in questo caso per i formati json):
app.use(express.json());

//"Dico ad express" di utilizzare le rotte che gli fornisco, importate da un altro file:
app.use('/posts', postsRouter);

//Utilizzo la funzione della gestione degli errori: 
app.use(errorsHandler);

//Utilizzo la funzione della gestione dell'errore in caso di endpoint inesistente:
app.use(endpNotFound);






//Per farlo "girare", metto in ascolto il server alla porta che gli assegno:
app.listen(port, () =>{
   console.log(`server in ascolto alla porta ${port}`)
});





//Entry Point del server(per verificare se funziona testando da Thunder Client):
/*
app.get('/', (req, res) =>{
   res.send('rotta "base" del server.')
})
*/