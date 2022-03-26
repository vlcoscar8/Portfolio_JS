const toggleSpinner = () => {
    document.getElementById("loader").classList.toggle("lds-dual-ring");
    console.log("toggle");
};

export { toggleSpinner };
