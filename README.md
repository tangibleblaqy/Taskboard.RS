# TASKBOARD.RS

[Español](README.es.md) | English

<br />
<div align="center">
  <a href="https://github.com/tangibleblaqy/Taskboard.RS">
    <img src="public/assets/Gnomechild_(Steam_Emoticon).png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">TASKBOARD.RS</h3>

  <p align="center">
    A task management application designed for RuneScape players to organize and track their in-game activities.
    <br />
    <br />
    <a href="https://github.com/tangibleblaqy/Taskboard.RS">View Demo</a>
    ·
    <a href="https://github.com/tangibleblaqy/Taskboard.RS/issues">Report Bug</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#api-documentation">API Documentation</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

TASKBOARD.RS is a web-based task management application tailored for RuneScape players. It allows users to create, organize, and track tasks across different categories such as skilling, bossing, and other activities. The application features a responsive interface with dark mode support, real-time statistics, and bulk operations for efficient task management.

Key features include:

- Task creation, editing, completion, and deletion
- Categorization by skilling, bossing, and other
- Search functionality
- Filtering by category or completion status
- Bulk completion and deletion of tasks
- Statistics dashboard
- Dark mode toggle
- Responsive design for various screen sizes

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This section lists the major frameworks/libraries used to bootstrap the project.

- [![Node.js][Node.js]][Node-url]
- [![Express.js][Express.js]][Express-url]
- [![Tailwind CSS][Tailwind]][Tailwind-url]
- [![JavaScript][JavaScript]][JavaScript-url]
- [![HTML5][HTML5]][HTML5-url]
- [![CSS3][CSS3]][CSS3-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Before running the application, ensure you have the following installed:

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/tangibleblaqy/Taskboard.RS.git
   ```
2. Navigate to the project directory
   ```sh
   cd fct_fase_3
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start the development server
   ```sh
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:3000`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

Once the application is running, you can:

1. **Create Tasks**: Use the form to add new tasks with names and categories.
2. **Edit Tasks**: Click the edit button (✎) to modify task names.
3. **Complete Tasks**: Click the complete button (✓) to mark tasks as done.
4. **Delete Tasks**: Click the delete button (✕) to remove individual tasks.
5. **Search Tasks**: Use the search bar to find specific tasks.
6. **Filter Tasks**: Click category buttons to filter tasks by type or completion status.
7. **Bulk Operations**: Use "Completar todo" to complete all tasks or "Borrar completados" to delete all completed tasks.
8. **View Statistics**: Check the statistics panel for task counts by category.
9. **Toggle Dark Mode**: Click the theme button to switch between light and dark modes.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## API Documentation

The API provides endpoints for managing tasks. Base URL: `http://localhost:3000/api/v1/tareas`

| Method | Endpoint           | Description            | Body (if needed) | Response               |
| ------ | ------------------ | ---------------------- | ---------------- | ---------------------- |
| GET    | `/`                | Get all tasks          | -                | Array of tasks         |
| POST   | `/`                | Create a new task      | Task object      | Created task           |
| PATCH  | `/:id`             | Edit a task            | Updated fields   | Updated task           |
| PATCH  | `/completados/:id` | Complete a task        | -                | Updated task           |
| DELETE | `/:id`             | Delete a task          | -                | Deleted task           |
| PATCH  | `/completados`     | Complete all tasks     | -                | Array of updated tasks |
| DELETE | `/completados`     | Delete completed tasks | -                | Array of deleted tasks |

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acknowledgments

- [RuneScape Wiki](https://oldschool.runescape.wiki/) for providing assets and information
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Express.js](https://expressjs.com/) for the web application framework
- [othneildrew's Best-README-Template](https://github.com/othneildrew/Best-README-Template) for the README structure

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
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
