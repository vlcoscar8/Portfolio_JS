// import { CompanyClass } from "../../model/company";
const printCompany = (data) => {
    const companyTag = document.createElement("div");

    const companies = [];

    data.forEach((job) => {
        let jobData = {
            name: job.company_name,
            image: job.company_logo,
            id: job.id,
        };

        companies.push(jobData);
    });

    const companyContainer = document.getElementById("company-container");

    const contentCompany = companies
        .map(
            (company) => `
          <div class="company-tag">
          <img src="${company.image}" alt="" class="job-img"/>
          <div>
            <h3>${company.name}</h3>
          </div>
          </div>}`
        )
        .join("");
    companyContainer.innerHTML = `
    <a href="#home">Home</a>
    <div class="company__container">
    ${contentCompany.split("}").join("")}
    </div>
    `;
};

export { printCompany };
