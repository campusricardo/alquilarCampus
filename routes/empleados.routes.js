const {Router} = require('express');
const { loguearEmpleado } = require('../controllers/empleados.controllers.js');
const {check} = require('express-validator');
const { validateDocuments } = require('../middlewares/validate.documents.js');
const router = Router();

router.post("/empleados",[
    check('nombre', 'El nombre es requerido').not().isEmpty(),
    check('dni', 'El dni es requerido').not().isEmpty(),
    validateDocuments
],
 loguearEmpleado );


module.exports = router;