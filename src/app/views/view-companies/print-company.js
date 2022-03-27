import { showCompanyDetail } from "./print-companyDetail";

const printCompany = (data) => {
    let companies = [];

    data.forEach((job) => {
        let jobData = {
            name: job.company_name,
            image: job.company_logo,
            id: job.id,
        };

        companies.push(jobData);
    });

    let firstIndex = 0;
    let lastIndex = 15;
    let dataToPrint = companies.slice(firstIndex, lastIndex);

    insertHTMLfromData(dataToPrint, firstIndex, lastIndex, companies);
};

const insertHTMLfromData = (dataToPrint, firstIndex, lastIndex, companies) => {
    const companyContainer = document.getElementById("company-container");

    let contentCompany = dataToPrint
        .map(
            (company) => `
        <div class="company-tag" id="${company.name}">
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
    <div>
        <button id="previous-btn-companies">Previous</button>
        <button id="next-btn-companies">Next</button>
    </div>
  `;

    if (lastIndex === 60) {
        document
            .getElementById("next-btn-companies")
            .classList.add("no-active");
    }

    if (firstIndex === 0) {
        document
            .getElementById("previous-btn-companies")
            .classList.add("no-active");
    }

    document.getElementById("next-btn-companies").onclick = () => {
        increasePaginationCompanies(companies, firstIndex, lastIndex);
    };

    document.getElementById("previous-btn-companies").onclick = () => {
        reducePaginationCompanies(companies, firstIndex, lastIndex);
    };

    const companyTag = document.querySelectorAll(".company-tag");

    companyTag.forEach((tag) => {
        tag.addEventListener("click", () => showCompanyDetail(tag));
    });
};

const increasePaginationCompanies = (companies, firstIndex, lastIndex) => {
    firstIndex = firstIndex + 15;
    lastIndex = lastIndex + 15;

    let dataToPrint = companies.slice(firstIndex, lastIndex);

    insertHTMLfromData(dataToPrint, firstIndex, lastIndex, companies);
};

const reducePaginationCompanies = (companies, firstIndex, lastIndex) => {
    firstIndex = firstIndex - 15;
    lastIndex = lastIndex - 15;

    let dataToPrint = companies.slice(firstIndex, lastIndex);

    insertHTMLfromData(dataToPrint, firstIndex, lastIndex, companies);
};

export { printCompany };
