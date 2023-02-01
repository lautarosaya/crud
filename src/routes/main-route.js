const { Router } = require("express");
const mainController = require("../controllers/main-controller");

const router = Router();

router.get("/", mainController.home);
router.get("/buscar", mainController.buscar);
router.get("/busqueda", mainController.busqueda);
router.get("/mostrarTodos", mainController.mostrarTodos);

router.get("/formulario", mainController.formulario);
router.post("/formulario", mainController.crear);

router.get("/editar/:idUser", mainController.verEditar);
router.put("/editar", mainController.editar);

router.delete("/delete/:idUser", mainController.delete);
module.exports = router;
