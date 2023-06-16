var express = require('express');
var router = express.Router();
  /* Renderizar el Login. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'PROBANDO'});
});
module.exports = router;