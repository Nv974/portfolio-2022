<template>
 <div class="home" >
   <div class="home__work">
     <img src="@/assets/images/work.png" alt="work">
   </div>
   <div class="home__text">
     <div class="home__text__me">
       <h2>Nicolas Vitry <br> Développeur Web </h2>
     </div>
     <div class="home__text__contact">
       <div class="home__text__contact__button">
         <a href="#">Contactez-moi</a>
       </div>
       <div class="home__text__contact__social">
         <a href="">
           <img src="@/assets/icons/mail.svg" alt="mail" style="position: relative ; top: 3px" >
         </a>
         <a href="">
           <img src="@/assets/icons/linkedin.svg" alt="mail">
         </a>
         <a href="">
           <img src="@/assets/icons/github.svg" alt="mail">
         </a>
         <a href="">
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
};
</script>

<style lang="scss" scoped>
  @import "home";
</style>
