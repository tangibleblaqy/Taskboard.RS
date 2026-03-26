import express from "express";

const router = express.Router();
import * as tareasController from "../controllers/tareas-controller.js";

//GET tareas
router.get("/", tareasController.recuperarTareas);

//POST tareas
router.post("/", tareasController.crearTarea);

//PATCH completar todas las tareas
router.patch("/completados", tareasController.completarTodo);

//DELETE tareas completadas
router.delete("/completados", tareasController.eliminarTareasCompletadas);

//Req especificos con id
//PATCH completar tarea
router.patch("/completados/:id", tareasController.completarTarea);

//PATCH tareas
router.patch("/:id", tareasController.editarTarea);

//DELETE tareas
router.delete("/:id", tareasController.eliminarTarea);

export const tareasRouter = router; 