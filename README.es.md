# TASKBOARD.RS

Español | [English](README.md)

<br />
<div align="center">
  <a href="https://github.com/tangibleblaqy/Taskboard.RS">
    <img src="public/assets/Gnomechild_(Steam_Emoticon).png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">TASKBOARD.RS</h3>

  <p align="center">
    Una aplicación de gestión de tareas diseñada para jugadores de RuneScape para organizar y rastrear sus actividades en el juego.
    <br />
    <br />
    <a href="https://github.com/tangibleblaqy/Taskboard.RS">Ver Demo</a>
    ·
    <a href="https://github.com/tangibleblaqy/Taskboard.RS/issues">Reportar Bug</a>
  </p>
</div>

<details>
  <summary>Tabla de Contenidos</summary>
  <ol>
    <li>
      <a href="#acerca-del-proyecto">Acerca del Proyecto</a>
      <ul>
        <li><a href="#construido-con">Construido Con</a></li>
      </ul>
    </li>
    <li>
      <a href="#primeros-pasos">Primeros Pasos</a>
      <ul>
        <li><a href="#prerrequisitos">Prerrequisitos</a></li>
        <li><a href="#instalación">Instalación</a></li>
      </ul>
    </li>
    <li><a href="#uso">Uso</a></li>
    <li><a href="#documentacion"></li>
    <li><a href="#agradecimientos">Agradecimientos</a></li>
  </ol>
</details>

## Acerca del Proyecto

TASKBOARD.RS es una aplicación web de gestión de tareas adaptada para jugadores de RuneScape. Permite a los usuarios crear, organizar y rastrear tareas en diferentes categorías como skilling, bossing y otras actividades. La aplicación cuenta con una interfaz responsiva con soporte para modo oscuro, estadísticas en tiempo real y operaciones masivas para una gestión eficiente de tareas.

Las características clave incluyen:

- Creación, edición, finalización y eliminación de tareas
- Categorización por skilling, bossing y otros
- Funcionalidad de búsqueda
- Filtrado por categoría o estado de finalización
- Finalización y eliminación masiva de tareas
- Panel de estadísticas
- Alternancia de modo oscuro
- Diseño responsivo para varios tamaños de pantalla

<p align="right">(<a href="#readme-top">volver al inicio</a>)</p>

### Construido Con

Esta sección enumera los principales marcos/bibliotecas utilizados para iniciar el proyecto.

- [![Node.js][Node.js]][Node-url]
- [![Express.js][Express.js]][Express-url]
- [![Tailwind CSS][Tailwind]][Tailwind-url]
- [![JavaScript][JavaScript]][JavaScript-url]
- [![HTML5][HTML5]][HTML5-url]
- [![CSS3][CSS3]][CSS3-url]

<p align="right">(<a href="#readme-top">volver al inicio</a>)</p>

## Primeros Pasos

Para obtener una copia local en funcionamiento, siga estos sencillos pasos de ejemplo.

### Prerrequisitos

Antes de ejecutar la aplicación, asegúrese de tener instalado lo siguiente:

- Node.js (versión 14 o superior)
- npm (viene con Node.js)

### Instalación

1. Clona el repositorio
   ```sh
   git clone https://github.com/tangibleblaqy/Taskboard.RS.git
   ```
2. Navega al directorio del proyecto
   ```sh
   cd fct_fase_3
   ```
3. Instala los paquetes NPM
   ```sh
   npm install
   ```
4. Inicia el servidor de desarrollo
   ```sh
   npm run dev
   ```
5. Abre tu navegador y navega a `http://localhost:3000`

<p align="right">(<a href="#readme-top">volver al inicio</a>)</p>

## Uso

Una vez que la aplicación esté ejecutándose, puedes:

1. **Crear Tareas**: Usa el formulario para agregar nuevas tareas con nombres y categorías.
2. **Editar Tareas**: Haz clic en el botón de editar (✎) para modificar los nombres de las tareas.
3. **Finalizar Tareas**: Haz clic en el botón de completar (✓) para marcar las tareas como realizadas.
4. **Eliminar Tareas**: Haz clic en el botón de eliminar (✕) para remover tareas individuales.
5. **Buscar Tareas**: Usa la barra de búsqueda para encontrar tareas específicas.
6. **Filtrar Tareas**: Haz clic en los botones de categoría para filtrar tareas por tipo o estado de finalización.
7. **Operaciones Masivas**: Usa "Completar todo" para finalizar todas las tareas o "Borrar completados" para eliminar todas las tareas completadas.
8. **Ver Estadísticas**: Revisa el panel de estadísticas para los conteos de tareas por categoría.
9. **Alternar Modo Oscuro**: Haz clic en el botón de tema para cambiar entre modos claro y oscuro.

<p align="right">(<a href="#readme-top">volver al inicio</a>)</p>

## Documentación de la API

La API proporciona endpoints para gestionar tareas. URL base: `http://localhost:3000/api/v1/tareas`

### Endpoints de Tareas

| Método | Endpoint           | Descripción                 | Body (si aplica)    | Respuesta                    |
| ------ | ------------------ | --------------------------- | ------------------- | ---------------------------- |
| GET    | `/`                | Obtener todas las tareas    | -                   | Array de tareas              |
| POST   | `/`                | Crear una tarea             | Objeto tarea        | Tarea creada                 |
| PATCH  | `/:id`             | Editar una tarea            | Campos actualizados | Tarea actualizada            |
| PATCH  | `/completados/:id` | Completar una tarea         | -                   | Tarea actualizada            |
| DELETE | `/:id`             | Eliminar una tarea          | -                   | Tarea eliminada              |
| PATCH  | `/completados`     | Completar todas las tareas  | -                   | Array de tareas actualizadas |
| DELETE | `/completados`     | Eliminar tareas completadas | -                   | Array de tareas eliminadas   |

<p align="right">(<a href="#readme-top">volver al inicio</a>)</p>

## Agradecimientos

- [RuneScape Wiki](https://oldschool.runescape.wiki/) por proporcionar activos e información
- [Tailwind CSS](https://tailwindcss.com/) por el marco CSS de utilidad primero
- [Express.js](https://expressjs.com/) por el marco de aplicación web
- [Plantilla Best-README de othneildrew](https://github.com/othneildrew/Best-README-Template) por la estructura del README

<p align="right">(<a href="#readme-top">volver al inicio</a>)</p>

<!-- ENLACES E IMÁGENES MARKDOWN -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/tangibleblaqy/Taskboard.RS.svg?style=for-the-badge
[contributors-url]: https://github.com/tangibleblaqy/Taskboard.RS/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/tangibleblaqy/Taskboard.RS.svg?style=for-the-badge
[forks-url]: https://github.com/tangibleblaqy/Taskboard.RS/network/members
[stars-shield]: https://img.shields.io/github/stars/tangibleblaqy/Taskboard.RS.svg?style=for-the-badge
[stars-url]: https://github.com/tangibleblaqy/Taskboard.RS/stargazers
[issues-shield]: https://img.shields.io/github/issues/tangibleblaqy/Taskboard.RS.svg?style=for-the-badge
[issues-url]: https://github.com/tangibleblaqy/Taskboard.RS/issues
[license-shield]: https://img.shields.io/github/license/tangibleblaqy/Taskboard.RS.svg?style=for-the-badge
[license-url]: https://github.com/tangibleblaqy/Taskboard.RS/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/
[Express.js]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]: https://expressjs.com/
[Tailwind]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[JavaScript]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[JavaScript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[HTML5]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[HTML5-url]: https://developer.mozilla.org/en-US/docs/Web/HTML
[CSS3]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[CSS3-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
