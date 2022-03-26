import { printDetailPage } from "../views/view-detail/print-detail";
import { setDetailPage } from "./hashchange-listener";

// Event listener click on the "see details" button
const detailListener = (data) => {
    const detailsBtn = document.querySelectorAll(".job-info");

    detailsBtn.forEach((button) => {
        button.addEventListener("click", () => {
            // Change the hash to create the flow page
            window.location.hash = "#detail";
            window.scrollTo(0, 0);
            const jobInfo = data.filter(
                (job) => job.id === parseInt(button.getAttribute("id"))
            );
            // Print the detail page with the data from the job selected
            printDetailPage(jobInfo);

            setDetailPage();
        });
    });
};

export { detailListener };
