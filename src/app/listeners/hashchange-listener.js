import { printHome } from "../views/view-home/print-home";
import { getData } from "../api/call-to-api-list";
import { showFavouritesJobs } from "../listeners/fav-listener";

// Listen the change hash to create the flow single page
window.addEventListener("hashchange", async () => {
    switch (window.location.hash) {
        case "#home":
            setHomePage();
            printHome();
            break;
        case "#favouritesJobs":
            showFavouritesJobs(await getData());
            setFavouriteJobs();
            break;
        case "#detail":
            setDetailPage();
            break;
        case "#company":
            setCompanyPage();
            break;
        default:
    }
});

const setCompanyPage = () => {
    if (document.getElementById("detail-container")) {
        document.getElementById("detail-container").remove();
    }

    if (document.getElementById("favourite-container")) {
        document
            .getElementById("favourite-container")
            .classList.add("no-active");
    }

    if (document.getElementById("nav-container")) {
        document.getElementById("nav-container").classList.add("no-active");
    }

    if (document.getElementById("jobs-container")) {
        document.getElementById("jobs-container").remove();
    }

    if (document.getElementById("filters-container")) {
        document.getElementById("filters-container").classList.add("no-active");
    }
};

const setFavouriteJobs = () => {
    window.location.hash = "#favouritesJobs";
    setOtherPage();

    if (document.getElementById("detail-container")) {
        document.getElementById("detail-container").remove();
    }

    if (document.getElementById("favourite-container")) {
        document
            .getElementById("favourite-container")
            .classList.remove("no-active");
    }
};

const setDetailPage = () => {
    window.location.hash = "#detail";
    setOtherPage();

    if (document.getElementById("favourite-container")) {
        document
            .getElementById("favourite-container")
            .classList.add("no-active");
    }

    if (document.getElementById("detail-container")) {
        document
            .getElementById("detail-container")
            .classList.remove("no-active");
    }
};

const setOtherPage = () => {
    if (document.getElementById("jobs-container")) {
        document.getElementById("jobs-container").remove();
    }

    if (document.getElementById("filters-container")) {
        document.getElementById("filters-container").classList.add("no-active");
    }

    if (document.getElementById("pagination-container")) {
        document
            .getElementById("pagination-container")
            .classList.add("no-active");
        document
            .getElementById("pagination-container")
            .classList.remove("pagination");
    }

    if (document.getElementById("nav-container")) {
        document.getElementById("nav-container").classList.add("no-active");
    }
};

const setHomePage = () => {
    window.location.hash = "#home";

    if (document.getElementById("detail-container")) {
        document.getElementById("detail-container").remove();
    }
    if (document.getElementById("favourite-container")) {
        document
            .getElementById("favourite-container")
            .classList.add("no-active");
    }
    if (document.getElementById("pagination-container")) {
        document
            .getElementById("pagination-container")
            .classList.remove("no-active");
    }
    if (document.getElementById("filters-container")) {
        document
            .getElementById("filters-container")
            .classList.remove("no-active");
    }
    if (document.getElementById("nav-container")) {
        document.getElementById("nav-container").classList.remove("no-active");
    }

    document.getElementById("search-job").classList.remove("no-active");
};

export { setHomePage, setDetailPage };
