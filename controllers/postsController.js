//Metodi delle rotte CRUD:
/*
Cioè funzioni che, una volta importate nel file del router,
svolgeranno le funzioni di ogni determinata rotta
*/

const index = (req, res) => {
   res.send('Lista dei post');
};

const show = (req, res) =>{
   res.send(`Visualizza post con id: ${req.params.id}`);
};

const store = (req, res) =>{
   res.send('Aggiungi un nuovo post');
};

const update = (req, res) =>{
   res.send(`Modifico il post con id: ${req.params.id}`);
};

const modify = (req, res) =>{
   res.send(`Modifico parzialmente il post con id: ${req.params.id}`);
};

const destroy = (req,res) =>{
   res.send(`Ellimino il post con id: ${req.params.id}`);
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