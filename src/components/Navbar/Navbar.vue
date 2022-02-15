<template>
  <nav class="navbar__desktop" >
    <div class="navbar__desktop__title" >
      <img src="@/assets/images/logo.png" alt="logo" />
    </div>
    <ul class="navbar__desktop__links" >
      <li>
        <a @click="scrolling('home')"
             :class="{'navbar__desktop__links--active' : navWord === 'Accueil' }">
          Accueil
        </a>
      </li>
      <li>
        <a @click="scrolling('about')"
           :class="{'navbar__desktop__links--active' : navWord === 'Présentation' }">
          Présentation
        </a>
      </li>
      <li>
        <a @click="scrolling('skills')"
           :class="{'navbar__desktop__links--active' : navWord === 'Compétences' }">
          Compétences
        </a>
      </li>
      <li>
        <a @click="scrolling('projects')"
           :class="{'navbar__desktop__links--active' : navWord === 'Projets' }">
          Projets
        </a>
      </li>
      <li>
        <a @click="scrolling('contact')"
           :class="{'navbar__desktop__links--active' : navWord === 'Contact' }">
          Contact
        </a>
      </li>
    </ul>
  </nav>
  <nav class="navbar__mobile" >
    <div class="navbar__mobile__title" >
      <img src="@/assets/images/logo.png" alt="logo" />
    </div>
    <div class="navbar__mobile__toggle" @click="setToggle" ><span></span></div>
  </nav>
  <div class="navbar__drop">
    <ul class="navbar__drop__links" >
      <li><a href="#home" @click="scrolling('home')">Accueil</a></li>
      <li><a href="#about" @click="scrolling('about')">Présentation</a></li>
      <li><a href="#skills" @click="scrolling('skills')">Compétences</a></li>
      <li><a href="#projects" @click="scrolling('projects')">Projets</a></li>
      <li><a href="#contact" @click="scrolling('contact')">Contact</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      drop : false,
      navWord : 'Accueil'
    }
  },
  created() {
    window.addEventListener('scroll' , () => {
      const body = document.body,
          html = document.documentElement;

      const height = Math.max( body.scrollHeight, body.offsetHeight,
          html.clientHeight, html.scrollHeight, html.offsetHeight );

      const navbar = document.querySelector('.navbar__desktop')
      const navMobile = document.querySelector('.navbar__mobile')
      if (window.scrollY > 80  && window.scrollY < 700  ) {
        this.navWord = 'Accueil';
        navbar.classList.add('navbar__desktop--fixed');
        navMobile.classList.add('navbar__mobile--fixed');
      } else if (window.scrollY < 80 ) {
        navbar.classList.remove('navbar__desktop--fixed');
        navMobile.classList.remove('navbar__mobile--fixed');
      } else if (window.scrollY > height * 0.23  && window.scrollY < height * 0.37 ) {
        const about = document.querySelector('.about');
        about.style.animation = "slide 0.8s"
        this.navWord = 'Présentation'
      } else if (window.scrollY > height * 0.37  && window.scrollY < height * 0.55 ) {
        this.navWord = 'Compétences'
      }  else if (window.scrollY > height * 0.55 && window.scrollY <  height * 0.65  ) {
          this.navWord = 'Projets'
      }  else if (window.scrollY > height * 0.65 ) {
        this.navWord = 'Contact'
      }
      //
    } )
  },
  methods : {
    setToggle() {
      this.drop = !this.drop
      const navbarDrop = document.querySelector('.navbar__drop');
      navbarDrop.classList.toggle('navbar__drop--show')

      const toggle = document.querySelector('.navbar__mobile__toggle');
      toggle.classList.toggle('navbar__mobile__toggle--close')

    },
    scrolling(href) {
      const link = document.getElementById(href);
     link.scrollIntoView({
        behavior : 'smooth'
      })
      this.setToggle()
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "navbar";
</style>
