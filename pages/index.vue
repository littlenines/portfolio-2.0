<template>
  <div>
    <section class="s1">
      <div class="main-container">
        <div class="greeting-wrapper">
          <h1>Hi, I'm Nemanja Galbinovic</h1>
        </div>

        <div class="intro-wrapper">
          <div class="nav-wrapper">
            <div class="dots-wrapper">
              <span id="dot-1" class="mdi mdi-ghost mdi-24px" />
              <span id="dot-2" class="mdi mdi-ghost mdi-24px" />
              <span id="dot-3" class="mdi mdi-ghost mdi-24px" />
            </div>

            <ul id="navigation">
              <li><span class="mdi mdi-pac-man mdi-24px" /></li>
            </ul>
          </div>
          <div class="left-column">
            <img id="profile_pic" src="~/assets/img/hero-picture.png" alt="hero img">
            <h5 style="text-align:center; line-height: 0;">
              Personalize Theme
            </h5>

            <div id="theme-options-wrapper">
              <div id="light-mode" class="theme-dot" />
              <div id="blue-mode" class="theme-dot" />
              <div id="green-mode" class="theme-dot" />
              <div id="purple-mode" class="theme-dot" />
            </div>

            <p id="settings-note">
              *Theme settings will be saved for your next visit
            </p>
          </div>
          <div class="right-column">
            <div id="preview">
              <span id="corner-tl" class="mdi mdi-pac-man corner" />
              <span id="corner-tr" class="mdi mdi-ghost dot-circle corner" />
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <h3>What I Do</h3>
                  <p id="settings-note">
                    *Hover me*
                  </p>
                </div>
                <div class="flip-card-back">
                  <p>
                    I'm pursuing the opportunity to begin my career in the web
                    development industry.
                  </p>
                </div>
              </div>
              <span id="corner-bl" class="mdi mdi-ghost dot-circle corner" />
              <span id="corner-br" class="mdi mdi-ghost dot-circle corner" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="s2">
      <div class="main-container">
        <div class="about-wrapper">
          <div class="about-me">
            <h4>More about me</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia dicta facere illo consequuntur! Praesentium, cumque!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, accusamus. Ullam sed mollitia ut perspiciatis?</p>

            <hr>

            <h4>Familiar with</h4>

            <div id="skills">
              <ul>
                <li><span class="mdi mdi-24px mdi-language-html5" /> HTML</li>
                <li><span class="mdi mdi-24px mdi-language-css3" /> CSS</li>
                <li><span class="mdi mdi-24px mdi-language-javascript" /> JavaScript</li>
                <li><span class="mdi mdi-24px mdi-nodejs" /> Node.js</li>
                <li><span class="mdi mdi-24px mdi-vuetify" /> Vuetify</li>
              </ul>

              <ul>
                <li><span class="mdi mdi-24px mdi-vuejs" /> Vue.js</li>
                <li><span class="mdi mdi-24px mdi-nuxt" /> Nuxt.js</li>
                <li><span class="mdi mdi-24px mdi-bootstrap" /> Bootstrap</li>
                <li><span class="mdi mdi-24px mdi-sass" /> SCSS</li>
                <li><span class="mdi mdi-24px mdi-database" /> MySQl</li>
              </ul>
            </div>
          </div>
          <div class="social-links">
            <div class="card">
              <div class="face face1">
                <div class="content">
                  <div class="icon">
                    <span class="mdi mdi-linkedin" />
                  </div>
                </div>
              </div>
              <div class="face face2">
                <div class="content">
                  <h3>
                    <a
                      href="https://www.linkedin.com/in/galbinovic584/"
                      target="_blank"
                    >_galbinovic584
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="s1">
        <div class="main-container">
          <h1>Portfolio</h1>
        </div>
      </section>

      <section class="s2">
        <div class="main-container">
          <h1>Contact</h1>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
