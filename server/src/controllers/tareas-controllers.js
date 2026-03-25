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
export function crearTareaController(req, res, next) {
    try{
        const nombre = req.body.nombre?.trim();
        const categoria = req.body.categoria;
        const tarea = crearTareaServices(nombre, categoria);
        
        return res.status(201).json(tarea);
    } catch (err) {
        next(err);
    }
}

//editar tareas
export function editarTareaController(req, res, next) {
    const id = req.params.id;
    const nombreNuevo = req.body.nombre?.trim();
    const categoriaNueva = req.body.categoria;
    
    try{
        const tarea = editarTareaServices(nombreNuevo, categoriaNueva, id);

        return res.status(200).json(tarea);
    } catch (err) {
        next(err);
    }
}

//completar tarea
export function completarTareaController(req, res, next) {
    const id = req.params.id;

    try{
        const tarea = completarTareaServices(id);

        return res.status(200).json(tarea);
    } catch (err) {
        next(err);
    }
}

//eliminar tareas
export function eliminarTareaController(req, res, next) {
    const id = req.params.id;

    try{
        const response = eliminarTareaServices(id);

        return res.status(200).json(response);
    } catch (err) {
        next(err);
    }
}

//completar todo
export function completarTodoController(req, res) {
    const resultado = completarTodoServices();

    return res.status(200).json(resultado);
}

//borrar tareas completadas
export function eliminarTareasCompletadasController(req, res) {
    const resultado = eliminarTareasCompletadasServices();

    return res.status(200).json(resultado);
}