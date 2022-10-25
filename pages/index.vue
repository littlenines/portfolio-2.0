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
              <div id="dot-1" class="browser-dot" />
              <div id="dot-2" class="browser-dot" />
              <div id="dot-3" class="browser-dot" />
            </div>

            <ul id="navigation">
              <li><a href="">Contact</a></li>
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
            <div id="preview-shadow">
              <div id="preview">
                <div id="corner-tl" class="corner" />
                <div id="corner-tr" class="corner" />

                <h3>What I Do</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque illo fugiat aspernatur fuga doloremque. Corporis!</p>

                <div id="corner-br" class="corner" />
                <div id="corner-bl" class="corner" />
              </div>
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

            <h4>TOP EXPERTISE</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, eveniet?: <a href="">Download resume</a> </p>

            <div id="skills">
              <ul>
                <li>Python</li>
                <li>Django</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Postgres</li>
              </ul>

              <ul>
                <li>Python</li>
                <li>Django</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Postgres</li>
              </ul>
            </div>
          </div>
          <div class="social-links" />
        </div>
      </div>
    </section>

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
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
