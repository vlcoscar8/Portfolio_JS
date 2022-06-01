const printProjects = () => {
    const projects$ = document.getElementById("projects");

    projects$.innerHTML = `
      <p class="projects__title">Projects</p>
      <div class="projects__container">
        <picture class="projects__container--card no-show" id="pro-card">
          <p>Job finder web</p>
          <div class="img-01">
          </div>
        </picture>
        <picture class="projects__container--card no-show" id="pro-card">
          <p>Sneakers E-commerce</p>
          <div class="img-02"></div>
        </picture>
        <picture class="projects__container--card no-show" id="pro-card">
          <p>Recipe social media</p>
          <div class="img-03"></div>
        </picture>
        <button class="btn-home" id="pro-card" ><a href="https://github.com/vlcoscar8" target="blank">Find more on Github</a></button>
      </div>
    `;
};

export { printProjects };
