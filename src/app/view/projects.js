import { printDetailProject } from "../controller/printDetailProject.js";

const printProjects = () => {
    const projects$ = document.getElementById("projects");

    projects$.innerHTML = `
      <p class="projects__title">Projects</p>
      <div class="projects__container">
        <figure class="projects__container--card no-show" id="pro-card">
          <p>Job finder web</p>
          <div class="img-01">
          </div>
        </figure>
        <figure class="projects__container--card no-show" id="pro-card">
          <p>Sneakers E-commerce</p>
          <div class="img-02"></div>
        </figure>
        <figure class="projects__container--card no-show" id="pro-card">
          <p>Recipe social media</p>
          <div class="img-03"></div>
        </figure>
        <button class="btn-home" id="pro-card" ><a href="https://github.com/vlcoscar8" target="blank">Find more on Github</a></button>
      </div>
    `;

    const scrollHorizontal = () => {
        const cards$ = document.querySelectorAll("#pro-card");
        const next$ = document.getElementById("next");

        console.log(next$);
        cards$.forEach((el) =>
            el.addEventListener("click", () => {
                next$.classList.add("center");
                cards$.forEach((el) => el.classList.add("left"));

                //Get the id project from the image div class and pass it to the function to print in next slide the info from the project stored in data
                const projectId = parseInt(
                    el.lastChild.previousSibling
                        .getAttribute("class")
                        .split("-")[1][1]
                );
                printDetailProject(projectId);
            })
        );
    };

    scrollHorizontal();
};

export { printProjects };
