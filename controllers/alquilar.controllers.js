const sucursalAutomovil = require('../models/sucursal_automovil.js');

// 3. Obtener todos los automóviles disponibles para alquiler.

const getAutomovilesDisponibles = async(req, res) => {

const automovilesDisponibles = await sucursalAutomovil.aggregate([
  {
    $lookup: {
      from: 'automoviles',
      localField: 'ID_Automovil', 
      foreignField: '_id', 
      as: 'automoviles', 
    },
  },
  {
    $unwind: '$automoviles', 
  },
  {
    $project: {
      _id: 0, 
      Modelo: '$automoviles.Modelo', 
      Anio: '$automoviles.Anio', 
    },
  },
]);

res.json(automovilesDisponibles);
  
    
};

module.exports = {
    getAutomovilesDisponibles
}

