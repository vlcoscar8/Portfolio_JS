import { fetchJobsFromCompanies } from "../../api/call-to-api-company";
import { CompanyDetailClass } from "../../model/company";

const showCompanyDetail = async (tag) => {
    window.location.hash = "#companyDetail";
    const companyData = await fetchJobsFromCompanies(tag.getAttribute("id"));

    const companyDetailContainer = document.getElementById(
        "companyDetail-container"
    );

    companyDetailContainer.innerHTML = `
        <div>
          <img src="${companyData[0].logo} "class="company_logo"/>
          <h2>${companyData[0].name}</h2>
        </div>
    `;

    companyData.forEach((job) => {
        printCompanyJob(job, companyDetailContainer);
    });
};

const printCompanyJob = (job, companyDetailContainer) => {
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

    const jobDetailContent = `
        <h3>${companyDetail.getJobTitle()}</h3>
        <div>
          <h4>${companyDetail.getCategory()}</h4>
          <h4>${companyDetail.getLocation()}</h4>
        </div>
      `;

    jobTag.innerHTML = jobDetailContent;

    companyDetailContainer.appendChild(jobTag);
};

export { showCompanyDetail };
