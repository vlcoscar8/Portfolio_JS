import "../styles/styles.scss";
import { printHeader } from "./view/header.js";
import { printHero } from "./view/hero.js";
import { printAbout } from "./view/about.js";
import { printProjects } from "./view/projects.js";
import { printContact } from "./view/contact.js";

window.onload = () => {
    window.scrollTo(0, 0);
    printHeader();
    printHero();
    printAbout();
    printProjects();
    printContact();
    observer();
};

const observer = () => {
    const hero$ = document.getElementById("hero");
    const aboutFirst$ = document.getElementById("about-first");
    const aboutSecond$ = document.getElementById("about-second");
    const proCards$ = document.querySelectorAll("#pro-card");
    const contact$ = document.querySelectorAll("#contact-id");
    const footer$ = document.getElementById("footer");

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

    io.observe(hero$);
    io.observe(aboutFirst$);
    io.observe(aboutSecond$);
    io.observe(footer$);
};
