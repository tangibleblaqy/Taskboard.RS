import * as tareasService from "../services/tarea-services.js";

//recuperar tareas
export function recuperarTareas(req, res) {
    const response = tareasService.recuperarTareas();
    return res.status(200).json(response);
}

//crear tareas
export function crearTarea(req, res, next) {
    try{
        const response = tareasService.crearTarea(req.body.nombre?.trim(), req.body.categoria);
        
        return res.status(201).json(response);
    } catch (err) {
        next(err);
    }
}

//editar tareas
export function editarTarea(req, res, next) {
    try{
        const response = tareasService.editarTarea(req.body.nombre?.trim(), req.body.categoria, req.params.id);

        return res.status(200).json(response);
    } catch (err) {
        next(err);
    }
}

//completar tarea
export function completarTarea(req, res, next) {
    try{
        const response = tareasService.completarTarea(req.params.id);

        return res.status(200).json(response);
    } catch (err) {
        next(err);
    }
}

//eliminar tareas
export function eliminarTarea(req, res, next) {
    try{
        const response = tareasService.eliminarTarea(req.params.id);

        return res.status(200).json(response);
    } catch (err) {
        next(err);
    }
}

//completar todo
export function completarTodo(req, res) {
    const resultado = tareasService.completarTodo();

    return res.status(200).json(resultado);
}

//borrar tareas completadas
export function eliminarTareasCompletadas(req, res) {
    const resultado = tareasService.eliminarTareasCompletadas();

    return res.status(200).json(resultado);
}