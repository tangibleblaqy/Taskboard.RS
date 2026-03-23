import { tareas } from "../data/tareas-array.js";
import { randomUUID } from "crypto";

//validar tareas
const categoriasValidas = ["skilling", "bossing", "otros"];
const validarTarea = (nombre, categoria, id = null) => {
    if(!categoriasValidas.includes(categoria)) {
        return "La categoría no es válida" ;
    }
    if (!nombre) {
        return "Nombre no valido";
    }
    if(tareas.some(tarea => tarea.nombre.toLowerCase() === nombre.toLowerCase() && tarea.id !== id)) {
        return "No puede haber tareas repetidas";
    }
    return null;
}

//mostrar tareas
export function recuperarTareasServices() {
    return tareas;
}

//crear tareas
export function crearTareaServices(nombre, categoria) {
    const error = validarTarea(nombre, categoria);
    if (error) throw new Error(error);

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
export function editarTareaServices(nombreNuevo, categoriaNueva, id) {
    const error = validarTarea(nombreNuevo, categoriaNueva, id);
    if (error) throw new Error(error);

    const tarea = tareas.find(tarea => tarea.id === id);
    if (!tarea) throw new Error("Tarea no encontrada");

    tarea.nombre = nombreNuevo;
    tarea.categoria = categoriaNueva;
    return tarea;
}

//completar tarea
export function completarTareaServices(id) {
    const tarea = tareas.find(tarea => tarea.id === id);
    if (!tarea) throw new Error("Tarea no encontrada");

    tarea.completada = true;
    return tarea;
}

//eliminar tareas
export function eliminarTareaServices(id) {
    const index = tareas.findIndex(tarea => tarea.id === id);
    if (index === -1) throw new Error("Tarea no encontrada");

    const [tareaEliminada] = tareas.splice(index, 1);
    return { idEliminado: tareaEliminada.id };
}

//completar todo
export function completarTodoServices() {
    tareas.forEach(tarea => tarea.completada = true);
    return { exito: true};
}

//borrar tareas completadas
export function eliminarTareasCompletadasServices() {
    const tareasNoCompletadas = tareas.filter(tarea => !tarea.completada);
    tareas.length = 0;
    tareas.push(...tareasNoCompletadas);
    return { exito: true };
}