const { Router } = require("express");
const {
  reservasPendientes,
} = require("../controllers/reservar.controllers.js");
const { check } = require("express-validator");
const { validateDocuments } = require("../middlewares/validate.documents.js");
const { validateJWT } = require("../middlewares/validate.JWT.js");
const { existEmail } = require("../helpers/db.validator.js");
const router = Router();

router.get("/reservas/pendientes", reservasPendientes);
module.exports = router;
