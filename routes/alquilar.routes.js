const { Router } = require("express");
const {
  getAutomovilesDisponibles,
  getAlquileresActivos,
  detallesAlquiler,
} = require("../controllers/alquilar.controllers.js");
const { param } = require("express-validator");
const { validateDocuments } = require("../middlewares/validate.documents.js");
const router = Router();

router.get("/automoviles/alquilar", getAutomovilesDisponibles);
router.get("/automoviles/alquilar/activos", getAlquileresActivos);
router.get(
  "/automoviles/alquilar/detalles/:id",
  [param("id", `This isn't a MongoId`).isMongoId(), validateDocuments],
  detallesAlquiler
);

module.exports = router;
