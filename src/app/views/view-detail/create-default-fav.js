const createFavDefaultPage = () => {
    const favouriteContainer = document.getElementById("favourite-container");
    favouriteContainer.innerHTML = `
                <a href="#home">Home</a>
                <h2 id="text-select">Not selected jobs yet</h2>
            `;
};

export { createFavDefaultPage };
