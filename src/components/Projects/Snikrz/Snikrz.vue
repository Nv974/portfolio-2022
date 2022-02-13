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
