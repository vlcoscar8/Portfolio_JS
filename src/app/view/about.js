import { stack } from "../data/stak.data";

const printAbout = () => {
    const about$ = document.getElementById("about");

    about$.innerHTML = `
      <div class="about__title no-show" id="about-first">
        <p class="about__title--title">About me</p>
        <div class="about__title--content">
          <p>I'm an industrial designer engineer interested in the digital world, that's the reason why I start the   journey to <span>become a full stack web developer</span>, going from creating     industrial products to   creating digital products.</p>
        </div>
      </div>
      <div class="about__skills no-show" id="about-second">
        <p class="about__skills--title">My Skills</p>
        <div class="about__skills--cards-container">
          ${stack
              .map(
                  (el) => `
            <picture class="card"> 
              <img src="${el.img}" class="icon"/>
              <p>${el.name}</p>
            </picture>
          `
              )
              .join("")}
        </div>
      </div>
  `;
};

export { printAbout };
