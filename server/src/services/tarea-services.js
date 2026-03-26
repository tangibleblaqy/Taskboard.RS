import { tareas } from "../data/tareas-array.js";
import { randomUUID } from "crypto";

//validar tareas
const categoriasValidas = ["skilling", "bossing", "otros"];
const validarTarea = (nombre, categoria, id = null) => {
    if (!nombre) {
        const err = new Error("Nombre no valido");
        err.status = 400;
        throw err;
    }

    if(!categoriasValidas.includes(categoria)) {
        const err = new Error("La categoría no es válida");
        err.status = 400;
        throw err;
    }
    if(tareas.some(tarea => tarea.nombre.toLowerCase() === nombre.toLowerCase() && tarea.id !== id)) {
        const err = new Error("No puede haber tareas repetidas");
        err.status = 400;
        throw err;
    }
    return null;
}

//mostrar tareas
export function recuperarTareaas() {
    return tareas;
}

//crear tareas
export function crearTareas(nombre, categoria) {
    validarTarea(nombre, categoria);

    const nuevaTarea = { 
        id: randomUUID(), 
        nombre, 
        categoria, 
        completada: false
    };

    tareas.push(nuevaTarea);
    return nuevaTarea;
}

//editar tareas
export function editarTareas(nombreNuevo, categoriaNueva, id) {
    const tarea = tareas.find(tarea => tarea.id === id);
    if (!tarea) {
        const err = new Error("Tarea no encontrada");
        err.status = 404;
        throw err;
    }

    validarTarea(nombreNuevo, categoriaNueva, id);

    tarea.nombre = nombreNuevo;
    tarea.categoria = categoriaNueva;
    return tarea;
}

//completar tarea
export function completarTareas(id) {
    const tarea = tareas.find(tarea => tarea.id === id);
    if (!tarea) {
        const err = new Error("Tarea no encontrada");
        err.status = 404;
        throw err;
    } 

    tarea.completada = true;
    return tarea;
}

//eliminar tareas
export function eliminarTareas(id) {
    const index = tareas.findIndex(tarea => tarea.id === id);
    if (index === -1) {
        const err = new Error("Tarea no encontrada");
        err.status = 404;
        throw err;
    } 

    const [tareaEliminada] = tareas.splice(index, 1);
    return { idEliminado: tareaEliminada.id };
}

//completar todo
export function completarTodas() {
    tareas.forEach(tarea => tarea.completada = true);
}

//borrar tareas completadas
export function eliminarTareasCompletadaas() {
    const tareasNoCompletadas = tareas.filter(tarea => !tarea.completada);
    const tareasCompletadas = tareas.filter(tarea => tarea.completada);
    const idTareasEliminadas = [];
    tareasCompletadas.forEach(tarea => {
        const index = tareas.findIndex(t => t.id === tarea.id);
        idTareasEliminadas.push(tarea.id);
    });
    tareas.length = 0;
    tareas.push(...tareasNoCompletadas);
    return { idTareasEliminadas };
}