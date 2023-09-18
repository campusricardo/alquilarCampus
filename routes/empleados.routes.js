const { Router } = require("express");
const {
  loguearEmpleado,
  postSucursalAutomovil,
  postReservas,
  deleteReserva,
  postAliquiler,
  postDevolucion,
  postEntrega,
  deleteAlquiler,
  empleadosVendedores,
} = require("../controllers/empleados.controllers.js");
const { check } = require("express-validator");
const { validateDocuments } = require("../middlewares/validate.documents.js");
const {
  existSucursal,
  existAutomovil,
  existCliente,
  existAlquiler,
  existEmpleado,
} = require("../helpers/db.validator.js");
const { validateJWT } = require("../middlewares/validate.JWT.js");
const router = Router();

router.post(
  "/empleados",
  [
    check("nombre", "El nombre es requerido").not().isEmpty(),
    check("dni", "El dni es requerido").not().isEmpty(),
    validateDocuments,
  ],
  loguearEmpleado
);

router.post(
  "/empleados/suc/aut",
  [
    check("ID_Sucursal", "No es un Mongo Id").isMongoId(),
    check("ID_Sucursal", "No esta en la base de datos ese ID").custom(
      existSucursal
    ),
    check("ID_Automovil", "No es un Mongo Id").isMongoId(),
    check("ID_Automovil", "No esta en la base de datos ese ID").custom(
      existAutomovil
    ),
    check(
      "Cantidad_Disponible",
      "Cantidad Disponible no es un numero"
    ).isNumeric(),
    check("Cantidad_Disponible", "Cantidad Disponible no esta definida")
      .not()
      .isEmpty(),
    validateJWT,
    validateDocuments,
  ],
  postSucursalAutomovil
);

router.post(
  "/empleados/reservas",
  [
    check("ID_Cliente", "El ID_Cliente debe ser un Mongo ID").isMongoId(),
    check("ID_Cliente", " El ID_Cliente no existe").custom(existCliente),
    check("ID_Automovil", "El ID_Automovil debe ser un Mongo ID").isMongoId(),
    check("ID_Automovil", "El ID_Automovil no existe").custom(existAutomovil),
    check("Fecha_Inicio", "Fecha_Inicio no es una fecha").not().isEmpty(),
    check("Fecha_Fin", "Fecha_Fin no es una fecha").not().isEmpty(),
    validateJWT,
    validateDocuments,
  ],
  postReservas
);

router.delete("/empleados/reservas/:id", [validateJWT], deleteReserva);

router.post(
  "/empleados/alquiler",
  [
    check("ID_Cliente", "El ID_Cliente debe ser un Mongo ID").isMongoId(),
    check("ID_Cliente", " El ID_Cliente no existe").custom(existCliente),
    check("ID_Automovil", "El ID_Automovil debe ser un Mongo ID").isMongoId(),
    check("ID_Automovil", "El ID_Automovil no existe").custom(existAutomovil),
    check("Fecha_Inicio", "Fecha_Inicio no es una fecha").not().isEmpty(),
    check("Fecha_Fin", "Fecha_Fin no es una fecha").not().isEmpty(),
    check("Costo_Total", "No puedes dejar este espacio vacio").not().isEmpty(),
    check("Costo_Total", "El costo total tiene que ser un numero").isNumeric(),
    validateJWT,
    validateDocuments,
  ],

  postAliquiler
);

router.delete(
  "/empleados/alquiler/:id",
  [validateJWT],

  deleteAlquiler
);

router.post(
  "/empleados/alquiler/devolucion",
  [
    check("ID_Alquiler", "El ID_Alquiler debe ser un Mongo ID").isMongoId(),
    check("ID_Alquiler", " El ID_Alquiler no existe").custom(existAlquiler),
    check("ID_Empleado", "El ID_Empleado debe ser un Mongo ID").isMongoId(),
    check("ID_Empleado", "El ID_Empleado no existe").custom(existEmpleado),
    check("Fecha_Devolucion", "Fecha_Devolucion no es una fecha")
      .not()
      .isEmpty(),
    check("Combustible_Devuelto", "Combustible_Devuelto esta vacio")
      .not()
      .isEmpty(),
    check("Kilometraje_Devuelto", "No puedes dejar este espacio vacio")
      .not()
      .isEmpty(),
    check(
      "Monto_Adicional",
      "El Monto_Adicional tiene que ser un numero"
    ).isNumeric(),
    validateJWT,
    validateDocuments,
  ],
  postDevolucion
);

router.post(
  "/empleados/alquiler/entrega",
  [
    check("ID_Alquiler", "El ID_Alquiler debe ser un Mongo ID").isMongoId(),
    check("ID_Alquiler", " El ID_Alquiler no existe").custom(existAlquiler),
    check("ID_Empleado", "El ID_Empleado debe ser un Mongo ID").isMongoId(),
    check("ID_Empleado", "El ID_Empleado no existe").custom(existEmpleado),
    check("Fecha_Entrega", "Fecha_Entrega no es una fecha").not().isEmpty(),
    check("Combustible_Entregado", "no hay Combustible_Entregado")
      .not()
      .isEmpty(),
    check("Kilometraje_Entregado", "No puedes dejar este espacio vacio")
      .not()
      .isEmpty(),
    validateJWT,
    validateDocuments,
  ],
  postEntrega
);
router.get("/empleados/vendedores", empleadosVendedores);
module.exports = router;
