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

export { printDetailPage };
