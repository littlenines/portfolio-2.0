<template>
  <div>
    <section class="section-1">
      <div class="container">
        <div class="greeting-title">
          <h1>Hi, I'm Nemanja Galbinovic</h1>
        </div>

        <div class="hero">
          <div class="hero-nav">
            <div class="hero-nav-left">
              <span class="mdi mdi-ghost mdi-24px danger--color" />
              <span class="mdi mdi-ghost mdi-24px warning--color" />
              <span class="mdi mdi-ghost mdi-24px success--color" />
            </div>

            <ul class="hero-nav-right">
              <li>
                <span class="mdi mdi-pac-man mdi-24px warning--color" />
              </li>
            </ul>
          </div>
          <div class="hero-left-column">
            <img id="hero-image" src="~/assets/img/hero-picture.png" alt="hero img">
            <h5 style="text-align:center; line-height: 0;">
              Personalize Theme
            </h5>

            <div class="theme-options-wrapper">
              <div id="light-mode" class="theme-dot" @click="$colorMode.preference = 'light'" />
              <div id="dark-mode" class="theme-dot" @click="$colorMode.preference = 'dark'" />
              <div id="green-mode" class="theme-dot" @click="$colorMode.preference = 'green'" />
              <div id="blue-mode" class="theme-dot" @click="$colorMode.preference = 'blue'" />
              <div id="purple-mode" class="theme-dot" @click="$colorMode.preference = 'purple'" />
            </div>

            <p class="info-note">
              *Theme settings will be saved for your next visit
            </p>
          </div>
          <div class="hero-right-column">
            <div id="flip-card">
              <span id="corner-tl" class="mdi mdi-pac-man mdi-18px warning--color corner" />
              <span id="corner-tr" class="mdi mdi-ghost mdi-18px danger--color corner" />
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <h3>What I Do</h3>
                  <p class="info-note">
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
              <span id="corner-bl" class="mdi mdi-ghost mdi-18px success--color corner" />
              <span id="corner-br" class="mdi mdi-ghost mdi-18px warning--color corner" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-2">
      <div class="container">
        <div class="about">
          <div class="about-wrapper">
            <h4>More about me</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia dicta facere illo consequuntur! Praesentium, cumque!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, accusamus. Ullam sed mollitia ut perspiciatis?</p>

            <div class="divider" />

            <h4>Familiar with</h4>

            <div class="skills">
              <ul>
                <li><span class="mdi mdi-24px mdi-language-html5 icon-html5--color" /> HTML</li>
                <li><span class="mdi mdi-24px mdi-language-css3 icon-css3--color" /> CSS</li>
                <li><span class="mdi mdi-24px mdi-language-javascript icon-javascript--color" /> JavaScript</li>
                <li><span class="mdi mdi-24px mdi-nodejs icon-nodejs--color" /> Node.js</li>
                <li><span class="mdi mdi-24px mdi-vuetify icon-vuetify--color" /> Vuetify</li>
              </ul>

              <ul>
                <li><span class="mdi mdi-24px mdi-vuejs icon-vuejs--color" /> Vue.js</li>
                <li><span class="mdi mdi-24px mdi-nuxt icon-nuxt--color" /> Nuxt.js</li>
                <li><span class="mdi mdi-24px mdi-bootstrap icon-bootstrap--color" /> Bootstrap</li>
                <li><span class="mdi mdi-24px mdi-sass icon-sass--color" /> SCSS</li>
                <li><span class="mdi mdi-24px mdi-database icon-database--color" /> MySQl</li>
              </ul>
            </div>
          </div>
          <div class="social-link">
            <div class="card">
              <div class="face face-1">
                <div class="content">
                  <div class="icon">
                    <span class="mdi mdi-linkedin" />
                  </div>
                </div>
              </div>
              <div class="face face-2">
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

      <section class="section-1">
        <div class="container">
          <h1>Portfolio</h1>
        </div>
      </section>

      <section class="section-2">
        <div class="container">
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
