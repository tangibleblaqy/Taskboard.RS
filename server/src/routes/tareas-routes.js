import express from "express";

const router = express.Router();
import { recuperarTareasController } from "../controllers/tareas-controllers.js";
import { crearTareaController } from "../controllers/tareas-controllers.js";
import { editarTareaController } from "../controllers/tareas-controllers.js";
import { eliminarTareaController } from "../controllers/tareas-controllers.js";
import { completarTareaController } from "../controllers/tareas-controllers.js";
import { eliminarTareasCompletadasController } from "../controllers/tareas-controllers.js";
import { completarTodoController } from "../controllers/tareas-controllers.js";

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