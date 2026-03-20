//verificar tareas
const verificarTarea = (nombre, categoria) => {
    if(!categoriasValidas.includes(categoria)) {
        return res.status(400).json({ error: "La categoría no es válida" });
    }
    if (!nombre) {
        return res.status(400).json({ error: "Nombre no valido" });
    }
    if(tareas.some(tarea => tarea.nombre.toLowerCase() === nombre.toLowerCase())) {
        return res.status(400).json({ error: "No puede haber tareas repetidas" });
    }
}

//mostrar tareas
import { tareas } from "../data/tareas-array.js";

export function getTareas(req, res) {
    return res.json(tareas);
}

//crear tareas
import { randomUUID } from "crypto";

const categoriasValidas = ["skilling", "bossing", "otros"];
export function crearTarea(req, res) {
    const nombre = req.body.nombre.trim();
    const categoria = req.body?.categoria;
    verificarTarea(nombre, categoria);
    const nuevaTarea = { id: randomUUID(), nombre: nombre, categoria: categoria, completada: false,};
    tareas.push(nuevaTarea);
    return res.status(201).json(tareas);
}

//editar tareas

export function editarTarea(req, res) {
    const id = req.params.id;
    const nombreNuevo = req.body.nombre.trim();
    const categoriaNueva = req.body?.categoria;
    verificarTarea(nombreNuevo, categoriaNueva);
    const tareaTemporal = tareas.find(tarea => tarea.id === id);
    if (!tareaTemporal) {
        return res.status(404).json({ error: "Tarea no encontrada" });
    }
    tareaTemporal.nombre = nombreNuevo;
    tareaTemporal.categoria = categoriaNueva;
    
    console.log(tareaTemporal);
}