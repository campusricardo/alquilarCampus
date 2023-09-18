const { Router } = require("express");
const {
  automovilesenSucursal,
} = require("../controllers/sucursal.controllers.js");
const { param } = require("express-validator");
const { validateDocuments } = require("../middlewares/validate.documents.js");
const router = Router();

router.get("/sucursales/autos/disponibles", automovilesenSucursal);

module.exports = router;
