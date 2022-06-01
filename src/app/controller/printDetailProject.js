import { projectsData } from "../data/projects.data.js";

const printDetailProject = (id) => {
    const project = projectsData.filter((project) => project.id === id)[0];

    const next$ = document.getElementById("next");

    next$.innerHTML = `
        <div class="next__arrow" id="back">
            <i class="fa-solid fa-arrow-left-long arrow"></i>
            <h5 class="next__arrow--text">Back</h5>
        </div>
        <span class="next__style"></span>
        <h2 class="next__title">${project.title}</h2>
        <div class="next__description" id="next-io">
            <div class="next__description--content">
                <p>${project.description}</p>
            </div>
            <div class="next__description--image" >
                <img src="${project.pictures[0].img}" id="image"/>
            </div>
        </div>
        <h3 class="next__title--stack">Stack used</h3>
        <div class="next__stack" id="next-io">
            ${project.stack.map(
                (el) => `
                <figure class="next__stack--card">
                    <img src="${el.img}" class="icon"/>
                    <p>${el.name}</p>
                </figure>
            `
            )}
        </div>
        <h3 class="next__title--code">Code details</h3>
        <div class="next__code">
                ${project.code.map(
                    (el) => `
                    <figure class="next__code--card" id="next-io">
                        <img src="${el.img}" />
                        <div class="text-container">
                            <p>${el.description}</p>
                        </div>
                    </figure>
                `
                )}
        </div>
    `;

    const backNext = () => {
        const back$ = document.getElementById("back");
        const cards$ = document.querySelectorAll("#pro-card");
        const next$ = document.getElementById("next");

        back$.addEventListener("click", () => {
            next$.classList.remove("center");
            cards$.forEach((el) => el.classList.remove("left"));
        });
    };

    backNext();
};

export { printDetailProject };
