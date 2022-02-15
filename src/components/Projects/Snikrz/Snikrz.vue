<template>
<div class="snikrz" >
  <div class="snikrz__title" >SN!KRZ</div>
  <div class="snikrz__content">
    <div class="snikrz__content__img"></div>
    <img v-if="windowWidth > 780" src="@/assets/images/projects/snik.png" alt="snikrz">
    <img v-if="windowWidth <= 780" src="@/assets/images/projects/snkrz-sm.png" alt="snikrz">
    <div class="snikrz__content__description">
      {{ project.description }}
    </div>
    <div class="snikrz__content__technos">
      <div class="snikrz__content__technos__techno" >
        <img src="@/assets/images/technos/react.png" alt="react">
        <div>React</div>
      </div>
      <div class="snikrz__content__technos__techno" >
        <img src="@/assets/images/technos/stripe.png" alt="stripe">
        <div>Stripe</div>
      </div>
    </div>
    <div class="snikrz__content__code" >
      <div class="snikrz__content__code__link" >
        <a href="https://github.com/Nv974/SN-KRZ" target="_blank" >
          <img src="@/assets/icons/github.svg" alt="code">
        </a>
        <div>Voir le code</div>
      </div>
      <div class="snikrz__content__code__link" >
        <a href="https://github.com/Nv974/SN-KRZ" target="_blank" >
          <img src="@/assets/icons/click.png" alt="code" style="filter: invert(100%)" >
        </a>
        <div>Voir le site</div>
      </div>
    </div>
    </div>
</div>
</template>

<script>




export default {
  name: 'Snikrz',
  props : ['project'],
  data(){
    return {
      windowWidth : window.innerWidth
    }
  },
  created() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth
    });

  }

};

</script>

<style lang="scss" scoped>
  @import "snikrz";
</style>
