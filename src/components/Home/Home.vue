<template>
 <div id="home" class="home" >
   <div class="home__work">
     <img src="@/assets/images/work.png" alt="work">
   </div>
   <div class="home__text">
     <div class="home__text__me">
       <h2>Nicolas Vitry <br> Développeur Web </h2>
     </div>
     <div class="home__text__contact">
         <a class="home__text__contact__button"  @click.prevent="scrolling('contact')" >
           Contactez-moi</a>
       <div class="home__text__contact__social">
         <a href="mailto:nicolasvitry.web@gmail.com" target="_blank" >
           <img src="@/assets/icons/mail.svg" alt="mail" style="position: relative ; top: 3px" >
         </a>
         <a href="https://www.linkedin.com/in/nicolas-vitry-0510711a1/" target="_blank" >
           <img src="@/assets/icons/linkedin.svg" alt="linkedin">
         </a>
         <a href="https://github.com/Nv974" target="_blank" >
           <img src="@/assets/icons/github.svg" alt="github">
         </a>
         <a href="tel:+262693516299">
           <img src="@/assets/icons/phone.svg" alt="mail">
         </a>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: 'Home',
  methods : {
    goToContact() {
      scrollTo({
        top : 6000,
        behavior : 'smooth'
      })
    },
    scrolling(href) {
      const link = document.getElementById(href);
      link.scrollIntoView({
        behavior : 'smooth'
      })
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "home";
</style>
