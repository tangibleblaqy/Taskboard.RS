import express from "express";

const router = express.Router();
import { recuperarTareasController } from "../controller/tareas-controllers.js";
import { crearTareaController } from "../controller/tareas-controllers.js";
import { editarTareaController } from "../controller/tareas-controllers.js";
import { eliminarTareaController } from "../controller/tareas-controllers.js";
import { completarTareaController } from "../controller/tareas-controllers.js";
import { eliminarTareasCompletadasController } from "../controller/tareas-controllers.js";
import { completarTodoController } from "../controller/tareas-controllers.js";

//GET tareas
router.get("/tareas", recuperarTareasController);

//POST tareas
router.post("/tareas", crearTareaController);

//PATCH completar todas las tareas
router.patch("/tareas/completados", completarTodoController);

//DELETE tareas completadas
router.delete("/tareas/completados", eliminarTareasCompletadasController);

//Req especificos con id
//PATCH completar tarea
router.patch("/tareas/completados/:id", completarTareaController);

//PATCH tareas
router.patch("/tareas/:id", editarTareaController);

//DELETE tareas
router.delete("/tareas/:id", eliminarTareaController);

export const tareasRouter = router; 