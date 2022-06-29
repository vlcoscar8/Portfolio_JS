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
                <div class="buttons">
                    <a href="${
                        project.vercel
                    }" target="blank" class="button-vercel no-show" id="next-io">
                        See the project deployed
                    </a>
                    <a class="button-git no-show" id="next-io" href="${
                        project.git
                    }" target="blank">
                        See the code on Git Hub
                    </a>
                </div>
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
        <h3 class="next__title--code no-show" id="next-io">Features</h3>
        <div class="next__code">
            <figure class="next__code--card">
                <img src="${
                    project.features[0].img
                }" id="next-io" class="image-pop no-show"/>
                <div class="text-container  no-show" id="next-io">
                    <div class="text-container__content">
                    <p>${project.features[0].description}</p>
                    </div>
                </div>
            </figure>
            <figure class="next__code--card">
                <div class="text-container  no-show" id="next-io">
                    <div class="text-container__content">
                    <p>${project.features[1].description}</p>
                    </div>
                </div>
                <img src="${
                    project.features[1].img
                }" id="next-io" class="image-pop no-show"/>
            </figure>
            <figure class="next__code--card">
                <img src="${
                    project.features[2].img
                }" id="next-io" class="image-pop-phone no-show"/>
                <div class="text-container  no-show" id="next-io">
                    <div class="text-container__content">
                    <p>${project.features[2].description}</p>
                    </div>
                </div>
            </figure>
        </div>
    `;

    const backNext = () => {
        const back$ = document.getElementById("back");
        const cards$ = document.querySelectorAll("#pro-card");

        const remove = () => {
            next$.classList.remove("display");
        };

        back$.addEventListener("click", () => {
            setTimeout(remove, 1000);
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
