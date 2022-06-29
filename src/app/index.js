import "../styles/styles.scss";
import { printHeader } from "./view/header.js";
import { printHero } from "./view/hero.js";
import { printAbout } from "./view/about.js";
import { printProjects } from "./view/projects.js";
import { printContact } from "./view/contact.js";
import { printFooter } from "./view/footer";

window.onload = () => {
    window.scrollTo(0, 0);
    printHeader();
    printHero();
    printAbout();
    printProjects();
    printContact();
    printFooter();
    observer();
};

const observer = () => {
    const hero$ = document.getElementById("hero");
    const aboutFirst$ = document.getElementById("about-first");
    const aboutSecond$ = document.getElementById("about-second");
    const aboutThird$ = document.querySelectorAll("#about-third");
    const proCards$ = document.querySelectorAll("#pro-card");
    const contact$ = document.querySelectorAll("#contact-id");
    const footer$ = document.getElementById("footer");
    const button$ = document.getElementById("button-git");

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

    proCards$.forEach((el) => io.observe(el));
    contact$.forEach((el) => io.observe(el));
    aboutThird$.forEach((el) => io.observe(el));

    io.observe(hero$);
    io.observe(aboutFirst$);
    io.observe(aboutSecond$);
    io.observe(footer$);
    io.observe(button$);
};
