const {Router} = require('express');
const { showClientes, postClientes } = require('../controllers/clientes.controllers.js');
const {check} = require('express-validator');
const { validateDocuments } = require('../middlewares/validate.documents.js');
const { validateJWT } = require('../middlewares/validate.JWT.js');
const { existEmail } = require('../helpers/db.validator.js');
const router = Router();

module.exports = router;
