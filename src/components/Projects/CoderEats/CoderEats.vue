<template>
<div class="coder">
  <div class="coder__content">
    <div>
      <div class="coder__title" >Coder Eats</div>
      <img src="@/assets/images/projects/iphone.gif" alt="coder eats">
    </div>
    <div style="display: flex ; flex-direction: column ; gap: 1rem ; align-items: center ">
      <div class="coder__content__description">{{ project.description }}</div>
      <div class="coder__content__technos">
        <div class="coder__content__technos__techno" >
          <img src="@/assets/images/technos/react.png" alt="react">
          <div>React</div>
        </div>
        <div class="coder__content__technos__techno" >
          <a href="https://github.com/Nv974/coder-eats"  target="_blank" >
            <img src="@/assets/icons/github.svg" alt="github" style="filter: brightness(0)" >
          </a>
          <div>Voir le code</div>
        </div>
      </div>
    </div>


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
