var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion")

/* GET home page. */
router.get('/', function(req, res, next) {

db.query("SELECT * FROM contenido", function(err,resultado){
    console.log(resultado);
    res.render('index', { title: 'PROBANDO',v:resultado});
  });
    
  });


  /* Renderizar el Login. */
  router.get('/modal', function(req, res, next) {

    res.render('modal', { title: 'PROBANDO'});
  });



    /* Renderizar CRUD Agregar. */
router.get('/agregar', function(req, res, next) {

  res.render('agregar', { title: 'PROBANDO'});
});

 /* Renderizar CRUD Agregar. */
 router.get('/editar/:ID', function(req, res, next) {
    const ID =req.params.ID;
    db.query("SELECT * FROM contenido WHERE ID = ?",[ID],(error,resultado)=>{
      console.log(resultado);
      res.render('editar', { title: 'PROBANDO',v:resultado[0] });
      
    })
});
      
 
const crud = require('../metodos/CRUD');
router.post('/guardar',crud.guardar);
router.post('/editar',crud.editar);
router.post('/auth',crud.auth);

router.get('/borrar/:ID',(req,res)=>{
const ID = req.params.ID;
db.query('DELETE FROM contenido WHERE ID = ?', [ID],
function(error, resultado){
  if(error){
    console.log(error);
  }
  else{
      res.redirect('/');
  }
});
});

module.exports = router;
