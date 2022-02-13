<template>
<div class="snikrz">
  <div class="snikrz__content">
    <img src="@/assets/images/projects/snik.png" alt="">
    <div class="snikrz__content__background"></div>
    <div class="snikrz__content__description">
      {{ project.description }}
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Snikrz',
  props : ['project']
};
</script>

<style lang="scss" scoped>
  @import "snikrz";
</style>
