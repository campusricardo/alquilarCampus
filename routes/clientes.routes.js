const {Router} = require('express');
const { showClientes, postClientes } = require('../controllers/clientes.controllers.js');
const {check} = require('express-validator');
const { validateDocuments } = require('../middlewares/validate.documents.js');
const { validateJWT } = require('../middlewares/validate.JWT.js');
const { existEmail } = require('../helpers/db.validator.js');
const router = Router();
router.get("/clientes", showClientes);
router.post("/clientes",[
    check("Nombre", 'El nombre debe ser un String').isString(),
    check("Nombre", 'No esta el nombre').not().isEmpty(),
    check("Apellido", 'El Apellido debe ser un String').isString(),
    check("Apellido", 'No esta el Apellido').not().isEmpty(),
    check("DNI", 'El DNI debe ser un String').isString(),
    check("DNI", 'No esta el DNI').not().isEmpty(),
    check("Direccion", 'El Direccion debe ser un String').isString(),
    check("Direccion", 'No esta el Direccion').not().isEmpty(),
    check("Telefono", 'El Telefono debe ser un Number').isNumeric(),
    check("Telefono", 'No esta el Telefono').not().isEmpty(),
    check("Email", 'No hay email').not().isEmpty(),
    check("Email", 'Ya existe este email').custom(existEmail),
    validateJWT,
    validateDocuments
],
postClientes );


module.exports = router;