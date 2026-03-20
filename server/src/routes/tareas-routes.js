import express from "express";

const router = express.Router();

//GET tareas
import { getTareas } from "../controller/tareas-controllers.js";
router.get("/tareas", getTareas);

//POST tareas
import { crearTarea } from "../controller/tareas-controllers.js";
router.post("/tareas", crearTarea);

//PATCH tareas
import { editarTarea } from "../controller/tareas-controllers.js";
router.patch("/tareas/:id", editarTarea);

export const tareasRouter = router; 