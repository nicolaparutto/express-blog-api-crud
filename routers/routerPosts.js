//Importo express e inizializzo il router:
const express = require('express');
const router = express.Router();

//Importo le funzioni (per le rotte) del controller:
const postsController = require('../controllers/postsController.js');



//ROTTE CRUD:
//index
router.get('/', postsController.index);

//show
router.get('/:id', postsController.show);

//store
router.post('/', postsController.store);

//update
router.put('/:id', postsController.update);

//modify
router.patch('/:id', postsController.modify);

//destroy
router.delete('/:id', postsController.destroy);



//Esporto il modulo del router:
module.exports = router;