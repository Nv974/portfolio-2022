<template>
<div id="about" class="about">
  <img src="@/assets/images/moi.png" alt="moi">
  <div class="about__description">
    <div class="about__description__title">A propos de moi</div>
    <div class="about__description__text">
      Ancien opérateur de machines à commande numérique dans le domaine de l'aéronautique et du bâtiment, j'ai décidé de me reconvertir dans le développement web.
      Pour cela, j'ai réalisé une formation de développeur web et web mobile durant laquelle j'ai
      appris à maîtriser différents langages de programmation pour la réalisation de sites web.
      Impliqué et rigoureux dans mon travail, je saurai mettre en œuvre toutes mes compétences et mes qualités dans les projets qui me seront confiés.
    </div>
    <a href="https://drive.google.com/file/d/1sm3jIxdgsn7haxmOSVkRXNu1HQIaOgtn/view"
      target="_blank"  class="about__description__resume">
      Télécharger mon CV
    </a>
  </div>
</div>
</template>

<script>
//import resume from '@/assets/documents/cv.pdf'

export default {
  name: 'About',
  created() {

  },
  data () {
    return  {
      //resume
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "about";
</style>
