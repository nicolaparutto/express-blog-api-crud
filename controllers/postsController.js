//Importo l'array dei post:
const posts = require('../data/postsArray');


//Metodi delle rotte CRUD:
/*
Cioè funzioni che, una volta importate nel file del router,
svolgeranno le funzioni di ogni determinata rotta
*/
const index = (req, res) => {
   //Alla richiesta di visualizzare i post, restituisco tutta la lista dei post in formato json:
   res.json(posts);
};

const show = (req, res) =>{
   //Salvo il parametro che mi "arriva" dalla richiesta:
   const id = req.params.id;

   //Creo la logica per trovare il post, con quel determinato parametro richiesto (in questo caso l'id):
   let post = posts.find(post => post.id == id);

   //La risposta restituirà il post in formato json:
   res.json(post);
};

const store = (req, res) =>{
   console.log(req.body)
   res.send('Aggiungi un nuovo post');
};

const update = (req, res) =>{
   res.send(`Modifico il post con id: ${req.params.id}`);
};

const modify = (req, res) =>{
   res.send(`Modifico parzialmente il post con id: ${req.params.id}`);
};

const destroy = (req,res) =>{
   //Salvo il parametro che mi "arriva" dalla richiesta:
   const id = req.params.id;

   //Creo la logica per trovare il post, con quel determinato parametro richiesto (in questo caso l'id):
   let post = posts.find(post => post.id == id);

   //Logica per eliminare il post richiesto con splice: (a splice passo come indice di partenza il post trovato con find)
   posts.splice(posts.indexOf(post), 1);

   //faccio un console log della lista dei post, per vederla nel terminale aggiornata:
   console.log(posts)

   //Rispondo con uno status 204 nel caso l'elliminazione abbia avuto successo:
   res.sendStatus(204)
};

//Esporto il modulo delle funzioni che assegneremo alle rotte:
module.exports = {
   index,
   show,
   store,
   update, 
   modify,
   destroy
}


