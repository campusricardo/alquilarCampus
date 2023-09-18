const {Router} = require('express');
const {getAutomovilesDisponibles} = require('../controllers/alquilar.controllers.js');
const router = Router();

router.get('/automoviles/alquilar', getAutomovilesDisponibles);


module.exports = router;