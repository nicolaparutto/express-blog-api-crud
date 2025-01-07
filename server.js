//Importo express e lo inizializzo:
const express = require('express');
const app = express();

//Assegno una porta al server:
const port = 3000;



//Importo il modulo delle rotte:
const postsRouter = require('./routers/routerPosts.js');

//"Dico ad express" di utilizzare le rotte che gli fornisco, importate da un altro file:
app.use('/posts', postsRouter);



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