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
        <h2 class="next__title" id="next-io">${project.title}</h2>
        <div class="next__description no-show" id="next-io">
            <div class="next__description--content">
                <p>${project.description}</p>
            </div>
            <div class="next__description--image" >
                <img src="${
                    project.pictures[0].img
                }" id="next-io" class="no-show"/>
                <button class="button-vercel no-show" id="next-io"><a href="${
                    project.vercel
                }" target="blank">See the project deployed</a></button>
            </div>
        </div>
        <h3 class="next__title--stack" id="next-io">Stack used</h3>
        <div class="next__stack no-show" id="next-io">
            ${project.stack.map(
                (el) => `
                <figure class="next__stack--card">
                    <img src="${el.img}" class="icon"/>
                    <p>${el.name}</p>
                </figure>
            `
            )}
        </div>
        <h3 class="next__title--code no-show" id="next-io">Code details</h3>
        <div class="next__code">
                ${project.code.map(
                    (el) => `
                    <figure class="next__code--card " >
                        <img src="${el.img}" id="next-io" class="image-pop no-show"/>
                        <div class="text-container  no-show" id="next-io">
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

    const nextShow$ = document.querySelectorAll("#next-io");

    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.remove("no-show");
                entry.target.classList.add("show");
            } else {
                entry.target.classList.add("no-show");
                entry.target.classList.remove("show");
            }
        });
    });

    nextShow$.forEach((el) => io.observe(el));
};

export { printDetailProject };
