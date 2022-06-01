const printAbout = () => {
    const about$ = document.getElementById("about");

    about$.innerHTML = `
      <div class="about__title no-show" id="about-first">
        <p class="about__title--title">About me</p>
        <div class="about__title--content">
          <p>I'm an industrial designer engineer interested in the digital world, that's the reason why I start the   journey to <span>become a full stack web developer</span>, going from creating     industrial products to   creating digital products.</p>
        </div>
      </div>
      <div class="about__skills no-show" id="about-second">
        <p class="about__skills--title">My Skills</p>
        <div class="about__skills--cards-container">
          <picture class="card"> 
              <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" class="icon"/>
            <p>Html</p>
          </picture>
          <picture class="card"> 
            <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" class="icon"/>
            <p>Css</p>
          </picture>
          <picture class="card">
            <img src="https://cdn.iconscout.com/icon/free/png-256/sass-226054.png" class="icon"/>
            <p>Sass</p>
          </picture>
          <picture class="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png" class="icon"/>
            <p>Javascript</p>
          </picture>
          <picture class="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png" class="icon"/>
            <p>Angular</p>
          </picture>
          <picture class="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" class="icon"/>
            <p>React</p>
          </picture>
          <picture class="card">
            <img src="https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png" class="icon"/>
            <p>NodeJs</p>
          </picture>
          <picture class="card">
            <img src="https://img.icons8.com/color/452/mongodb.png" class="icon"/>
            <p>Mongo</p>
          </picture>
          <picture class="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1024px-Git_icon.svg.png" class="icon"/>
            <p>Git</p>
          </picture>
        </div>
      </div>
  `;
};

export { printAbout };
