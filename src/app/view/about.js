import { stack } from "../data/stak.data";
import { education } from "../data/education.data";

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
            <figure class="card"> 
              <img src="${el.img}" class="icon"/>
              <p>${el.name}</p>
            </figure>
          `
              )
              .join("")}
        </div>
      </div>
      <div class="about__education no-show" id="about-third">
        <p class="about__education--title no-show" id="about-third">My Education</p>
        <div class="about__education--cards">
          ${education
              .map(
                  (el) => `
                  <a href="${el.url}" target="blank" class="card no-show"  id="about-third">
                    <img src="${el.img}" class="card__img"/>
                    <div class="card__info">
                      <p class="card__info--title">${el.name}</p>
                      <p class="card__info--time">${el.year} - ${el.month}</p>
                    </div>
                  </a>
          `
              )
              .join("")}        
        </div>
      </div>
  `;
};

export { printAbout };
