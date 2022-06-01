import { projectsData } from "../data/projects.data.js";

const printDetailProject = (id) => {
    const projectData = projectsData.filter((project) => project.id === id);
    console.log(projectData);
};

export { printDetailProject };
