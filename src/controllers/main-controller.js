const dataClients = require("../data/data-clients");

module.exports = {
  home: (req, res) => {
    res.render("index");
  },
  buscar: (req, res) => {
    res.render("buscar");
  },
  busqueda: (req, res) => {
    const busquedaIngresada = req.query.busqueda;

    let busquedaEncontrada = [];

    dataClients.forEach((cliente) => {
      if (cliente.nombre.includes(busquedaIngresada)) {
        busquedaEncontrada.push(cliente);
      }
    });

    res.render("busqueda", { busquedaEncontrada });
  },
  mostrarTodos: (req, res) => {
    res.render("mostrarTodos", { dataClients });
  },

  formulario: (req, res) => {
    res.render("formulario");
  },
  crear: (req, res) => {
    let usuario = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      edad: req.body.edad,
    };
    res.send(usuario);
  },
};
