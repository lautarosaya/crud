const { Router } = require("express");
const mainController = require("../controllers/main-controller");

const router = Router();

router.get("/", mainController.home);
router.get("/buscar", mainController.buscar);
router.get("/busqueda", mainController.busqueda);
router.get("/mostrarTodos", mainController.mostrarTodos);

router.get("/formulario", mainController.formulario);
router.post("/formulario", mainController.crear);
module.exports = router;
