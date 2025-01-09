//Funzione per la gestione degli errori:
function errorsHandler (err, req, res, next){
   res.status(500);
   res.json({
      message: err.message,
      status: 500,
      error: 'Internal Server Error'
   })
}
module.exports = errorsHandler;