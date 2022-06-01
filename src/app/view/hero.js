const printHero = () => {
    const hero$ = document.getElementById("hero");

    hero$.innerHTML = `
      <div class="hero__title">
        <h1 class="hero__title--name">I'm <span class="hero__title--name-span">Oscar Perez Romero</span></h1>
        <h2 class="hero__title--subname">Junior <span class="hero__title--subname-mearn">MEARN</span> full stack developer</h2>
        <button class="btn-home"><a href="#contact">Contact Me</a></button>
      </div>
      <div class="hero__social">
        <ul>
          <li><a href="https://github.com/vlcoscar8" target="blank"><i class="fa-brands fa-github icon-social"></i></a></li>
          <li><a href="https://www.linkedin.com/in/oscarperez8/" target="blank"><i class="fa-brands fa-linkedin-in icon-social"></i></a></li>
        </ul>
      </div>
    `;
};

export { printHero };
