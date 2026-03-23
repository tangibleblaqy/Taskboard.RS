import {
    recuperarTareasServices,
    crearTareaServices,
    editarTareaServices,
    completarTareaServices,
    eliminarTareaServices,
    completarTodoServices,
    eliminarTareasCompletadasServices
} from "../services/tarea-services.js";

//recuperar tareas
export function recuperarTareasController(req, res) {
    const tareas = recuperarTareasServices();
    return res.status(200).json(tareas);
}

//crear tareas
export function crearTareaController(req, res) {
    try{
        const nombre = req.body.nombre?.trim();
        const categoria = req.body?.categoria;
        const tarea = crearTareaServices(nombre, categoria);
        
        return res.status(201).json(tarea);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

//editar tareas
export function editarTareaController(req, res) {
    const id = req.params.id;
    const nombreNuevo = req.body.nombre?.trim();
    const categoriaNueva = req.body?.categoria;
    
    try{
        const tarea = editarTareaServices(nombreNuevo, categoriaNueva, id);

        return res.status(200).json(tarea);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

//completar tarea
export function completarTareaController(req, res) {
    const id = req.params.id;

    try{
        const tarea = completarTareaServices(id);

        return res.status(200).json(tarea);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
}

//eliminar tareas
export function eliminarTareaController(req, res) {
    const id = req.params.id;

    try{
        eliminarTareaServices(id);

        return res.status(204).send();
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
}

//completar todo
export function completarTodoController(req, res) {
    completarTodoServices();

    return res.status(204).send();
}

//borrar tareas completadas

export function eliminarTareasCompletadasController(req, res) {
    eliminarTareasCompletadasServices();

    return res.status(204).send();
}