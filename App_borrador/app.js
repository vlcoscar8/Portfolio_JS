window.onload = () => {
    printData();
    setHomePage();
};

// Function to print the data from API into a container ////////
const printData = async () => {
    const data = await getData();
    console.log(data);
    // Use map method to iterate and print the data its needed
    jobContainerHtml(data);

    // Listen the select options
    selectOptions(data);

    // Listen the input value in the search bar
    searchJobInput(data);
};

// Get data from API
const getData = async () => {
    let response = await fetch("https://remotive.io/api/remote-jobs?limit=60");
    let data = await response.json();

    // Return the jobs data to iterate later with map and extract the information its needed
    return data.jobs;
};

/////////////////////////////////////////////////////////////////////

let firstIndex = 0;
let finalIndex = 10;
// Get the data and print the list on the home page
const jobContainerHtml = (data) => {
    // Create container to insert the data
    const dataContainer = document.createElement("div");
    dataContainer.setAttribute("id", "jobs-container");

    const dataContent = data.map(
        (job) =>
            `
            <div class="job-container">
              <div class="job-info">
                <img src="${job.company_logo}" alt="" class="job-img"/>
                <div>
                    <h2>${job.title}</h2>
                    <div class="no-active">
                         <h4 id="${job.id}" class="added-mark">Added</h4> 
                    </div>                                                                  
                    <h3>${job.company_name}</h3>
                    <div class="job-tags">
                      ${
                          job.category
                              ? `<h4 class="job-category tag">${job.category}</h4>`
                              : `<h4></h4>`
                      }
                      ${
                          job.candidate_required_location
                              ? `<h4 class="job-location tag">${job.candidate_required_location}</h4>`
                              : `<h4></h4>`
                      }
                      ${
                          job.salary
                              ? `<h4 class="job-salary tag">${job.salary}</h4>`
                              : `<h4></h4>`
                      }
                    </div>
                </div>
              </div>
              <div class="job-btn-container">
                <button class="details-btn btn" id="${
                    job.id
                }">See details</button>
                <button class="favourites-btn btn" id="${
                    job.id
                }">Add to my favourites jobs</button>
              </div>
            </div>
            `
    );

    firstIndex = 0;
    finalIndex = 10;
    const jobsContainer = document.getElementById("jobsList-container");
    jobsContainer.innerHTML = "";

    getJobsFromList(
        dataContent,
        firstIndex,
        finalIndex,
        dataContainer,
        jobsContainer
    );

    // Listen all the click event on the main page
    paginationListJobs(dataContent, dataContainer, jobsContainer, data);
    clickListeners(data);
};

// Depending on the position of the pagination gets info from the data and print
const getJobsFromList = (
    dataContent,
    firstIndex,
    finalIndex,
    dataContainer,
    jobsContainer
) => {
    let currentJobs = dataContent.slice(firstIndex, finalIndex);
    dataContainer.innerHTML = currentJobs.join("");
    jobsContainer.appendChild(dataContainer);
};

// Create the function to change the data when the user click the next or previous button
const paginationListJobs = (
    dataContent,
    dataContainer,
    jobsContainer,
    data
) => {
    const previousBtn = document.getElementById("previous-btn");
    const nextBtn = document.getElementById("next-btn");
    const paginationNumber = document.getElementById("pagination-number");
    let numberPage = 1;

    checkPaginationButtons(firstIndex, previousBtn);

    nextBtn.onclick = () => {
        firstIndex = firstIndex + 10;
        finalIndex = finalIndex + 10;
        numberPage++;
        paginationNumber.innerHTML = numberPage;
        getJobsFromList(
            dataContent,
            firstIndex,
            finalIndex,
            dataContainer,
            jobsContainer
        );
        checkPaginationButtons(firstIndex, previousBtn, nextBtn);
        clickListeners(data);
    };

    previousBtn.onclick = () => {
        firstIndex = firstIndex - 10;
        finalIndex = finalIndex - 10;
        numberPage--;
        paginationNumber.innerHTML = numberPage;
        getJobsFromList(
            dataContent,
            firstIndex,
            finalIndex,
            dataContainer,
            jobsContainer
        );
        checkPaginationButtons(firstIndex, previousBtn, nextBtn);
        clickListeners(data);
    };
};

// Show or hide pagination buttons depending on which page of the list is the user
const checkPaginationButtons = (firstIndex, previousBtn, nextBtn) => {
    if (firstIndex === 0) {
        previousBtn.classList.add("no-active");
    } else {
        previousBtn.classList.remove("no-active");
    }

    if (firstIndex >= 50) {
        nextBtn.classList.add("no-active");
    } else if (firstIndex > 0 && firstIndex < 50) {
        nextBtn.classList.remove("no-active");
    }
};

///////////////////////////////////////////////////////////////

// Function to collect all the listeners on the main page
const clickListeners = (data) => {
    detailListener(data);
    favouriteListener(data);
    showFavouritesJobs(data);
};

// Event listener click on the "see details" button
const detailListener = (data) => {
    const detailsBtn = document.querySelectorAll(".details-btn");

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

// Print the job data to the detail page
const printDetailPage = (jobInfo) => {
    // Create job detail container
    const detailContainer = document.createElement("div");
    detailContainer.setAttribute("id", "detail-container");
    detailContainer.innerHTML = jobInfo
        .map(
            (job) => `
            <div>
              <a href="#home">Home</a>
            </div>
            <div>
              <div class="job-detail__header">
                <img src="${job.company_logo}"/>
                <h3>${job.company_name}</h3>
              </div>
              <div class="job-tags">
                ${
                    job.category
                        ? `<h4 class="job-category tag">${job.category}</h4>`
                        : `<h4></h4>`
                }
                ${
                    job.candidate_required_location
                        ? `<h4 class="job-location tag">${job.candidate_required_location}</h4>`
                        : `<h4></h4>`
                }
                ${
                    job.salary
                        ? `<h4 class="job-salary tag">${job.salary}</h4>`
                        : `<h4></h4>`
                }
                ${
                    job.job_type
                        ? `<h4 class="job-job_type tag">${job.job_type}</h4>`
                        : `<h4></h4>`
                }
              </div>
              <h2>${job.title}</h2>
            </div>
              <p>${job.description}</p>
              <a href="${job.url}" target="_blank">Visit the offer</a>
          `
        )
        .join("");

    document.body.appendChild(detailContainer);
};

// Event listener click on the "add to my job" button
const favouriteListener = (data) => {
    const favouritesBtn = document.querySelectorAll(".favourites-btn");
    favouritesBtn.forEach((button) => {
        button.addEventListener("click", () => {
            const jobInfo = data.filter(
                (job) => job.id === parseInt(button.getAttribute("id"))
            );

            // Add a mark if the user click to "add favourite job" button
            addedFavouriteMark(jobInfo);
            // Add to favourites jobs
            printFavouritesJobsPage(jobInfo);
            // Set the click event when user has select a job
            showFavouritesJobs(data);
        });
    });
};

const addedFavouriteMark = (jobInfo) => {
    const addedMark = document.querySelectorAll(".added-mark");

    addedMark.forEach((favBtn) => {
        if (parseInt(favBtn.getAttribute("id")) === jobInfo[0].id) {
            favBtn.parentElement.classList.remove("no-active");
        }
    });
};

let jobsArray = [];

// Set the favourite jobs page but not show till the "my jibs" button is clicked
const printFavouritesJobsPage = (jobInfo) => {
    const favouriteContainer = document.createElement("div");

    favouriteContainer.innerHTML = jobInfo
        .map(
            (job) => `
            <div id="job-container">
            <div class="job-info">
                <img src="${job.company_logo}" alt="" class="job-img"/>
                <div>
                  <h2>${job.title}</h2>
                  <h3>${job.company_name}</h3>
                  <div class="job-tags">
                      ${
                          job.category
                              ? `<h4 class="job-category tag">${job.category}</h4>`
                              : `<h4></h4>`
                      }
                      ${
                          job.candidate_required_location
                              ? `<h4 class="job-location tag">${job.candidate_required_location}</h4>`
                              : `<h4></h4>`
                      }
                      ${
                          job.salary
                              ? `<h4 class="job-salary tag">${job.salary}</h4>`
                              : `<h4></h4>`
                      }
                  </div>
                </div>
              </div>
              <div class="job-btn-container">
                <button class="details-btn btn" id="${
                    job.id
                }">See details</button>
                <button class="remove-btn btn" id="${job.id}">Remove</button>
              </div>
            </div>
          `
        )
        .join("");

    jobsArray.push(favouriteContainer.innerHTML);
};

// When the user click the "my jobs" button the container created before with the selected jobs is showed
const showFavouritesJobs = (data) => {
    const favouritesBtn = document.getElementById("favourites-jobs-btn");
    favouritesBtn.addEventListener("click", () => {
        window.location.hash = "#favouritesJobs";

        // If the user has selected jobs, then show in a favourite page, if not, a commentary as "Not selected jobs yet" is showed
        if (document.getElementById("favourite-container")) {
            addJobsToFavPage(data, jobsArray);
        } else {
            createFavDefaultPage();
        }
    });
};

const createFavDefaultPage = () => {
    const favouriteContainer = document.createElement("div");
    favouriteContainer.setAttribute("id", "favourite-container");
    favouriteContainer.innerHTML = `
            <div>
                <a href="#home">Home</a>
            </div>
            <h2>Not selected jobs yet</h2>
            `;
    document.body.appendChild(favouriteContainer);
};

const addJobsToFavPage = (data, jobsArray) => {
    document
        .getElementById("favourite-container")
        .classList.remove("no-active");

    // Get the unique values of the selected jobs array to insert later in html
    const contentArr = [...new Set(jobsArray)];
    const content = contentArr.join("");

    // Insert all the data from the array of the favourites jobs
    const favouriteContainer = document.getElementById("favourite-container");
    favouriteContainer.innerHTML = `
                <div>
                <a href="#home">Home</a>
                </div>
                ${content === "" ? ` <h2>Not selected jobs yet</h2>` : content}
            `;
    document.body.appendChild(favouriteContainer);

    // Listen the click on details job
    detailListener(data);

    // Listen the click on remove job
    removeJob(data, jobsArray);
};

const removeJob = (data, jobsArray) => {
    const removeBtn = document.querySelectorAll(".remove-btn");
    removeBtn.forEach((button) => {
        button.addEventListener("click", () => {
            const jobInfo = data.filter(
                (job) => job.id === parseInt(button.getAttribute("id"))
            );
            // Remove the container html
            button.parentNode.parentNode.remove();

            // Remove the element on the jobs array
            for (let i = 0; i < jobsArray.length; i++) {
                if (jobsArray[i].includes(parseInt(jobInfo[0].id))) {
                    jobsArray.splice(i, 1);
                }
            }

            // Add a comentary when user removes all the items
            if (jobsArray.length === 0) {
                document.getElementById("favourite-container").remove();
                createFavDefaultPage();
            }
        });
    });
};

////////////////////////////////////////////////////////////////

// Filter the data list following the select option the user has choosen
const selectOptions = async (data) => {
    const selectOptions$$ = document.getElementById("select-options");

    const categoriesData = await getCategories();

    selectOptions$$.addEventListener("change", async () => {
        const jobFilterByCategorie = categoriesData.find(
            (job) => job.name.toLowerCase() === selectOptions$$.value
        ).slug;

        const result = await getJobsByCategories(jobFilterByCategorie);

        jobContainerHtml(result);

        checkboxFilters(result);
    });

    // Listen the filter checkbox options
    checkboxFilters(data);
};

// Use the api to get all the categories
const getCategories = async () => {
    let response = await fetch(
        "https://remotive.io/api/remote-jobs/categories"
    );
    let categoriesData = await response.json();

    return categoriesData.jobs;
};

// Use the api data getted before and filteres with  the input info
const getJobsByCategories = async (jobFilter) => {
    let response = await fetch(
        `https://remotive.io/api/remote-jobs?category=${jobFilter}`
    );
    let jobByCategory = await response.json();

    return jobByCategory.jobs;
};

// Filter the data list following the checkbox filters
const checkboxFilters = (data) => {
    const checkboxFilters$$ = document.querySelectorAll(".checkbox-filter");

    checkboxFilters$$.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
            jobContainerHtml(filterCheckbox(data));
        });
    });
};

// Filter function to listen the checkbox changes and push into the array the data that the user choose
const filterCheckbox = (data) => {
    let jobsFiltered = [];

    const locationUsa = document.getElementById("location-usa");
    const locationEu = document.getElementById("location-EU");
    const locationWorld = document.getElementById("location-world");

    locationFilter(data, locationUsa, jobsFiltered);
    locationFilter(data, locationEu, jobsFiltered);
    locationFilter(data, locationWorld, jobsFiltered);

    if (jobsFiltered.length === 0) {
        jobsFiltered = data;
    }

    return jobsFiltered.sort().flat();
};

// Filter he data with the location variable
const locationFilter = (data, location, jobsFiltered) => {
    if (location.checked) {
        let jobFiltered = data.filter((job) =>
            job.candidate_required_location
                .toLowerCase()
                .includes(location.value)
        );
        jobsFiltered.push(jobFiltered);
    }
};

const searchJobInput = (data) => {
    const searchBarInput = document.getElementById("search-job");

    searchBarInput.addEventListener("input", () => {
        let jobsFiltered = [];

        searchBarInput.value === ""
            ? (jobsFiltered = data)
            : (jobsFiltered = data.filter(
                  (job) =>
                      job.category
                          .toLowerCase()
                          .includes(searchBarInput.value) ||
                      job.tags.includes(searchBarInput.value)
              ));

        jobContainerHtml(jobsFiltered);
    });
};

//////////////////////////////////////////////////////////////////////////////////////////////

// Listen the change hash to create the flow single page
window.addEventListener("hashchange", async () => {
    switch (window.location.hash) {
        case "#home":
            setHomePage();
            printData();
            break;
        case "#favouritesJobs":
            showFavouritesJobs(await getData());
            setFavouriteJobs();
            break;
        case "#detail":
            setDetailPage();
            break;
        default:
    }
});

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
