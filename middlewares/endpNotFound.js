//Funzione che mi generi un messaggio di errore (nella risposta) nel caso si ricerchi un endpoint non esistente:
const endpNotFound = (req, res, next) => {
   res.status(404)
   res.json({
      message: 'Risorsa non trovata',
      status: 404,
      error: 'Not found'
   })
}

module.exports = endpNotFound;