//Importo express e inizializzo il router:
const express = require('express');
const router = express.Router();

//ROTTE CRUD:
//index
router.get('/', (req,res) =>{
   res.send('Lista dei post');
});

//show
router.get('/:id', (req,res) =>{
   res.send(`Visualizza post con id: ${req.params.id}`);
});

//store
router.post('/', (req,res) =>{
   res.send('Aggiungi un nuovo post');
});

//update
router.put('/:id', (req,res) =>{
   res.send(`Modifico il post con id: ${req.params.id}`);
});

//modify
router.patch('/:id', (req,res) =>{
   res.send(`Modifico parzialmente il post con id: ${req.params.id}`);
});

//destroy
router.delete('/:id', (req,res) =>{
   res.send(`Ellimino il post con id: ${req.params.id}`);
});

//Esporto il modulo del router:
module.exports = router;