const printContact = () => {
    const contact$ = document.getElementById("contact");

    contact$.innerHTML = `
      <p class="contact__title" id="contact-id">Contact Me</p>
      <div class="contact__cards">
        <div class="contact__cards--top" id="contact-id">
          <picture class="card">
            <i class="fa-solid fa-envelope icon"></i>
            <p>vlcoscar8@gmail.com</p>
          </picture>
          <picture class="card" >
            <i class="fa-solid fa-phone icon"></i>
            <p>+34 677 185 432</p>
          </picture>
        </div>
        <picture class="card" id="contact-id">
          <i class="fa-solid fa-map-pin icon"></i>
          <p>Barcelona, Spain</p>
        </picture>
      </div>
      <ul class="contact__links" id="contact-id">
          <li><a href="https://github.com/vlcoscar8" target="blank"><i class="fa-brands fa-github icon-social"></i></a></li>
          <li><a href="https://www.linkedin.com/in/oscarperez8/" target="blank"><i class="fa-brands fa-linkedin-in icon-social"></i></a></li>
        </ul>

    `;
};

export { printContact };
