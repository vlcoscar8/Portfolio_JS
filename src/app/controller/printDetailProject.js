import { projectsData } from "../data/projects.data.js";

const printDetailProject = (id) => {
    const projectData = projectsData.filter((project) => project.id === id);

    const next$ = document.getElementById("next");

    next$.innerHTML = `
      
    `;
};

export { printDetailProject };
