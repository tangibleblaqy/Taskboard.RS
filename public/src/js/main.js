import { apiRequest } from "../api/client.js";

const seccionBuscador = document.getElementById("seccionBuscador");
const buscador = document.getElementById("buscador");
const creador = document.getElementById("creador");
const tipo = document.getElementById("tipo");
const tareas = document.getElementById("tareas");
const loading = document.getElementById("loading");

const estadisticas = document.getElementById("estadisticas");
const chatHead = document.getElementById("chathead");

const filtros = document.getElementById("filtros");
const completados = document.getElementById("completado");
const skilling = document.getElementById("skilling");
const bossing = document.getElementById("bossing");
const otro = document.getElementById("otro");

const botonTodo = document.getElementById("botonTodo");
const completarTodo = document.getElementById("completarTodo");
const borrarTodo = document.getElementById("borrarTodo");

const tareasTotales = document.getElementById("tareasTotales");
const tareasCompletas = document.getElementById("tareasCompletas");
const tareasSkilling = document.getElementById("tareasSkilling");
const tareasBossing = document.getElementById("tareasBossing");
const otrasTareas = document.getElementById("otrasTareas");

const textoFelicitacion = document.getElementById("textoFelicitacion");
const baile = document.getElementById("baile");

let tareasGuardadas = [];
//cargar tareas
const cargarTareas = async () => {
  try {
    const tareas = await apiRequest("tareas", {});
    tareasGuardadas.push(...tareas);
    console.log(tareasGuardadas);
    tareasGuardadas.forEach((tarea) => crearTarea(tarea));
    mostrarInformacion();
    actualizarEstadisticas();
  } finally {
    loading.style.display = "none";
    // Mostrar estadísticas y búsqueda después de cargar
    estadisticas.style.display = "flex";
    seccionBuscador.style.display = "block";
  }
};

// Mostrar loading inicialmente y ocultar estadísticas/búsqueda
loading.style.display = "flex";
estadisticas.style.display = "none";
seccionBuscador.style.display = "none";
cargarTareas();

const borrarTarea = async (id) => {
  return await apiRequest(`tareas/${id}`, {
    method: "DELETE",
  });
};

const editarTarea = async (tarea) => {
  return await apiRequest(`tareas/${tarea.id}`, {
    method: "PATCH",
    body: tarea,
  });
};

const completarTarea = async (id) => {
  return await apiRequest(`tareas/completados/${id}`, {
    method: "PATCH",
  });
};

//crear tarea en backend
const crearTareaBackend = async (nombre, categoria) => {
  return await apiRequest("tareas", {
    method: "POST",
    body: { nombre, categoria },
  });
};

//funcion para crear tareas
const crearTarea = (tarea) => {
  const div = document.createElement("div");
  div.id = tarea.id;
  div.className = "tarea";
  div.classList.add(tarea.categoria);

  const p = document.createElement("p");
  p.textContent = tarea.nombre;
  p.dataset.valor = tarea.nombre;
  if (tarea.completada === true) {
    p.classList.add("line-through");
    div.classList.add("completado");
  }

  const img = new Image(20, 20);
  if (tarea.completada === true) {
    img.src = "assets/Distraction_map_icon.png";
  } else if (tarea.categoria === "skilling") {
    img.src = "assets/Stats_icon.png";
  } else if (tarea.categoria === "bossing") {
    img.src = "assets/Multicombat.png";
  } else if (tarea.categoria === "otros") {
    img.src = "assets/Dungeon_icon.png";
  }
  const borrar = document.createElement("button");
  borrar.textContent = "✕";
  borrar.className = "borrar";

  //eventListener para boton de borrar
  borrar.addEventListener("click", async () => {
    const tareaId = div.id;
    await borrarTarea(tareaId);
    tareasGuardadas = tareasGuardadas.filter((tarea) => tarea.id !== tareaId);
    div.remove();
    mostrarInformacion();
    actualizarEstadisticas();
  });

  //si no esta completo
  if (tarea.completada !== true) {
    const editar = document.createElement("button");
    editar.textContent = "✎";
    editar.className = "editar";

    //eventListener para boton de editar
    editar.addEventListener("click", () => {
      const valorP = prompt("Editar tarea:", p.textContent);
      if (valorP !== null) {
        if (valorP === "") {
          alert("no puede estar vacío");
          return;
        }
        const tareaId = event.target.closest("div").id;
        const tarea = tareasGuardadas.find((t) => t.id === tareaId);
        tarea.nombre = valorP;
        let tareaEditada = {};
        const edición = async () => {
          tareaEditada = await editarTarea(tarea);
          console.log(tareaEditada);
          Object.assign(tarea, tareaEditada);
          p.textContent = tareaEditada.nombre;
          p.dataset.valor = tareaEditada.nombre;
        };
        edición();
        actualizarEstadisticas();
      }
      return;
    });

    const completar = document.createElement("button");
    completar.textContent = "✓";
    completar.className = "completar";

    //eventListener para boton de completar
    completar.addEventListener("click", async () => {
      const tareaId = event.target.closest("div").id;
      const tarea = tareasGuardadas.find((t) => t.id === tareaId);
      if (tarea) {
        tarea.completada = true;
        div.classList.add("completado");
      }
      await completarTarea(tareaId);
      p.classList.add("line-through");
      const imagen = div.querySelector("img");
      imagen.src = "assets/Distraction_map_icon.png";
      completar.remove();
      editar.remove();
      actualizarEstadisticas();
    });

    div.append(img, p, borrar, editar, completar);
  } else {
    div.append(img, p, borrar);
  }
  document.getElementById("tareas").appendChild(div);
  if (filtroActual && !div.classList.contains(filtroActual)) {
    div.style.display = "none";
  }
};

//Marcar todo como completado
const todoCompletado = async () => {
  const respuesta = confirm(
    "¿Estás seguro de que quieres marcar todas las tareas como completadas?",
  );
  if (respuesta) {
    await apiRequest("tareas/completados", {
      method: "PATCH",
    });

    const divTareas = document.getElementById("tareas");
    const todoTarea = divTareas.querySelectorAll("div p");
    todoTarea.forEach((p) => {
      p.classList.add("completado", "line-through");
      const parentDiv = p.closest("div");
      parentDiv.classList.remove("skilling", "bossing", "otro");
      parentDiv.classList.add("completado");
      const tareaTemporal = tareasGuardadas.find(
        (tarea) => tarea.id === parentDiv.id,
      );
      if (tareaTemporal) {
        tareaTemporal.completada = true;
      }
    });
    const imagen = divTareas.querySelectorAll("img");
    imagen.forEach((img) => {
      img.src = "assets/Distraction_map_icon.png?t=" + Date.now();
    });
    divTareas
      .querySelectorAll("div button.editar, div button.completar")
      .forEach((boton) => boton.remove());

    actualizarEstadisticas();
    filtrarTareas(filtroActual);
  }
};

completarTodo.addEventListener("click", () => {
  todoCompletado();
  actualizarEstadisticas();
});

//borrar todo completado:
const borrarCompletado = async () => {
  const respuesta = confirm(
    "¿Estás seguro de que quieres borrar todas las tareas completadas?",
  );
  if (respuesta) {
    await apiRequest("tareas/completados", {
      method: "DELETE",
    });

    // Remove completed tasks from DOM and array
    tareasGuardadas.forEach((tarea) => {
      if (tarea.completada) {
        const div = document.getElementById(tarea.id);
        if (div) div.remove();
      }
    });
    tareasGuardadas = tareasGuardadas.filter((t) => !t.completada);
    mostrarInformacion();
    actualizarEstadisticas();
    filtrarTareas(filtroActual);
  }
};

borrarTodo.addEventListener("click", () => {
  borrarCompletado();
});

//Crear tarea
const formularioTarea = document.getElementById("formularioTarea");
formularioTarea.addEventListener("submit", async (e) => {
  e.preventDefault();

  const tareaTemporal = { categoria: tipo.value, nombre: creador.value.trim() };

  const nuevaTarea = await crearTareaBackend(
    tareaTemporal.nombre,
    tareaTemporal.categoria,
  );
  tareasGuardadas.push(nuevaTarea);
  crearTarea(nuevaTarea);
  borrarFormulario();
  mostrarInformacion();
  actualizarEstadisticas();
});

//borrar valores del formulario
const borrarFormulario = () => {
  creador.value = "";
};

//funcion para buscar tarea
const buscarTarea = () => {
  const valorBuscador = buscador.value;
  document.querySelectorAll(".tarea").forEach((div) => {
    const p = div.querySelector("p");
    console.log(p);
    const tarea = p.textContent.toLowerCase();

    if (tarea.includes(valorBuscador)) {
      div.style.display = "";
    } else {
      div.style.display = "none";
    }
  });
};

//Buscador
buscador.addEventListener("input", buscarTarea);

//filtrar por categoria
let filtroActual = null;
const botones = [completados, skilling, bossing, otro];

const filtrarTareas = (categoria) => {
  const tareaDivs = tareas.querySelectorAll("div.tarea");
  tareaDivs.forEach((div) => {
    if (categoria === null) {
      div.style.display = "";
    } else if (categoria === "completado") {
      div.style.display = div.classList.contains("completado") ? "" : "none";
    } else {
      div.style.display =
        div.classList.contains(categoria) &&
        !div.classList.contains("completado")
          ? ""
          : "none";
    }
  });
};

const activarBoton = (boton, categoria) => {
  filtroActual = filtroActual === categoria ? null : categoria;
  botones.forEach((b) => b.classList.remove("elegido"));
  if (filtroActual) {
    boton.classList.add("elegido");
  }
  filtrarTareas(filtroActual);
};

completados.addEventListener("click", () => {
  activarBoton(completados, "completado");
});

skilling.addEventListener("click", () => {
  activarBoton(skilling, "skilling");
});

bossing.addEventListener("click", () => {
  activarBoton(bossing, "bossing");
});

otro.addEventListener("click", () => {
  activarBoton(otro, "otros");
});

//Funcion para mostrar informacion
const mostrarInformacion = () => {
  if (!tareasGuardadas.length) {
    seccionBuscador.style.display = "none";
    estadisticas.style.display = "none";
    filtros.style.display = "none";
    botonTodo.style.display = "none";
    chatHead.style.display = "";
  } else {
    seccionBuscador.style.display = "";
    estadisticas.style.display = "";
    filtros.style.display = "";
    botonTodo.style.display = "";
    chatHead.style.display = "none";
  }
};

//estadisticas
const actualizarEstadisticas = () => {
  tareasTotales.textContent = tareasGuardadas.length;
  tareasCompletas.textContent = tareasGuardadas.reduce(
    (contador, tarea) => (tarea.completada === true ? contador + 1 : contador),
    0,
  );
  tareasSkilling.textContent = tareasGuardadas.reduce(
    (contador, tarea) =>
      tarea.categoria === "skilling" ? contador + 1 : contador,
    0,
  );
  tareasBossing.textContent = tareasGuardadas.reduce(
    (contador, tarea) =>
      tarea.categoria === "bossing" ? contador + 1 : contador,
    0,
  );
  otrasTareas.textContent = tareasGuardadas.reduce(
    (contador, tarea) =>
      tarea.categoria === "otros" ? contador + 1 : contador,
    0,
  );
  felicitar();
};

//felicitar
const felicitar = () => {
  const total = parseInt(tareasTotales.textContent);
  const completas = parseInt(tareasCompletas.textContent);
  if (total > 0 && total === completas) {
    textoFelicitacion.style.display = "";
    baile.style.display = "block";
  } else {
    textoFelicitacion.style.display = "none";
    baile.style.display = "none";
  }
};

//Modo oscuro
const tema = document.getElementById("tema");
tema.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});
