import { fetchJobsFromCompanies } from "../../api/call-to-api-company";
import { CompanyDetailClass } from "../../model/company";
import { detailListener } from "../../listeners/detail-listener";
import { getData } from "../../api/call-to-api-list";
const showCompanyDetail = async (tag) => {
    console.log(tag.parentNode);
    window.location.hash = "#companyDetail";
    const companyData = await fetchJobsFromCompanies(
        tag.parentNode.parentNode.getAttribute("id")
    );

    const companyDetailContainer = document.getElementById(
        "companyDetail-container"
    );

    companyDetailContainer.innerHTML = `
        <div class="company-detail__header ">
          <img src="${companyData[0].logo}" class="company-logo"/>
          <h2>${companyData[0].name}</h2>
        </div>
        <div id="company-jobs" class="company-jobs__container"></div>
    `;

    companyData.forEach((job) => {
        printCompanyJob(job);
    });
};

const printCompanyJob = async (job) => {
    const companyDetail = new CompanyDetailClass(
        job.id,
        job.name,
        job.logo,
        job.jobTitle,
        job.category,
        job.location
    );

    const jobTag = document.createElement("div");
    jobTag.classList.add("job-tag");
    jobTag.classList.add("job-info");
    jobTag.setAttribute("id", `${companyDetail.getCompanyId()}`);

    const jobDetailContent = `
        <h3 class="job-tag__title">${companyDetail.getJobTitle()}</h3>
        <div class="company-tag__container">
          <h4 class="tag">${companyDetail.getCategory()}</h4>
          <h4 class="tag">${companyDetail.getLocation()}</h4>
        </div>
      `;

    jobTag.innerHTML = jobDetailContent;

    document.getElementById("company-jobs").appendChild(jobTag);

    detailListener(await getData());
};

export { showCompanyDetail };
