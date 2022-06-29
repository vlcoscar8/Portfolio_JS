const printHeader = () => {
    const header$ = document.getElementById("header");

    header$.innerHTML = `
    <h1 class="header__logo"><a href="#body">OPR</a></h1>
    <ul class="header__list">
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  `;
};

export { printHeader };
