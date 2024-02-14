const express = require('express');
const router = express.Router();

const CarroController = require('./controllers/CarroController')


/*
localhost com prefixo api nas urls
http://localhost:3000/api/...
*/

router.get('/carros', CarroController.buscarTodos);
router.get('/carro/:codigo', CarroController.buscarUm);
router.post('/carro', CarroController.inserir);
router.put('/carro/:codigo', CarroController.alterar);
router.delete('/carro/:codigo', CarroController.excluir);

module.exports = router;