<template>
<div class="coder">
  <div class="coder__content">
    <div>
      <div class="coder__title" >Coder Eats</div>
      <img src="@/assets/images/projects/iphone.gif" alt="coder eats">
    </div>
    <div class="coder__content__description">{{ project.description }}</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CoderEats',
  props : ['project']
};
</script>

<style lang="scss" scoped>
@import "coder";
</style>
