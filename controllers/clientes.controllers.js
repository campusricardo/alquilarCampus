const Cliente = require('../models/cliente.js');

// 2. Mostrartodoslosclientesregistradosenlabasededatos

const showClientes = async(req, res) => {
    const showClientes = await Cliente.find();
    res.json(showClientes);
};

const postClientes = async(req, res) => {
    try {
      const newCliente = await new Cliente(req.body);

      await newCliente.save();
      
      res.json({
        message: "Se creo el Cliente"
      })
    } catch (error) {
      
      console.log(error);
      res.status(200).json({
        message: "An error have occured"
      })
      throw new Error;
    }
};

module.exports = {
    showClientes,
    postClientes,
}