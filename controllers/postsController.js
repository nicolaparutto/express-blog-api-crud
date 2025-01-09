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
   const id = parseInt(req.params.id);

   //Creo la logica per trovare il post, con quel determinato parametro richiesto (in questo caso l'id):
   let post = posts.find(post => post.id === id);

   //La risposta restituirà il post in formato json:
   res.json(post);
};

const store = (req, res) =>{
   //Genero un nuovo id, che rispetto all'ultimo elemento dell'array deve essere sempre +1:
   const id = posts[posts.length -1].id +1;
   //Creo il nuovo oggetto (post) che conterrà sia l'id, che le informazioni ricevute dal corpo della request:
   const newPost = {
      id,
      title: req.body.title,
      content: req.body.content,
      image: req.body.image,
      tags: req.body.tags
   }
   //Pusho il nuovo oggetto (post) all'interno dell'array dei post:
   posts.push(newPost);

   //La risposta sarà la lista dei post aggiornata in formato json:
   res.json(posts);
};

const update = (req, res) =>{
   //Salvo il parametro che mi "arriva" dalla richiesta:
   const id = parseInt(req.params.id);

   //Come per show e destroy devo poter identificare il post, in questo caso per poi effettuattuare modifiche:
   let post = posts.find(post => post.id === id);

   //Gestione dell'errore, nel caso si stia tentando di modificare un post non esistente:
   if (!post){
      res.status(404);
      return res.json({
         message: 'Post non trovato',
         status: 404,
         error: 'Not Found'
      });
   }

   //Aggiorno le proprietà dell'oggetto (post) selezionato:
   post.title = req.body.title;
   post.content = req.body.content;
   post.image = req.body.image;
   post.tags = req.body.tags;

   //La risposta sarà il post aggiornato:
   res.json(post);
};

const modify = (req, res) =>{
   res.send(`Modifico parzialmente il post con id: ${req.params.id}`);
};

const destroy = (req,res) =>{
   //Salvo il parametro che mi "arriva" dalla richiesta:
   const id = parseInt(req.params.id);

   //Creo la logica per trovare il post, con quel determinato parametro richiesto (in questo caso l'id):
   let post = posts.find(post => post.id === id);

   //Logica per eliminare il post richiesto con splice: (a splice passo come indice di partenza il post trovato con find)
   posts.splice(posts.indexOf(post), 1);

   //faccio un console log della lista dei post, per vederla nel terminale aggiornata:
   console.log(posts);

   //Rispondo con uno status 204 nel caso l'elliminazione abbia avuto successo:
   res.sendStatus(204);
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


