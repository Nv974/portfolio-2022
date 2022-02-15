<template>
<div class="harmonize">
  <div class="harmonize__title">Harmonize</div>
  <div class="harmonize__content">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/mQki_QvYDJ0?start=4453"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
    </iframe>
    <div class="harmonize__content__description">
      {{ project.description }}
    </div>
    <div class="harmonize__content__technos">
      <div class="harmonize__content__technos__techno" >
        <img src="@/assets/images/technos/react.png" alt="react">
        <div>React</div>
      </div>
      <div class="harmonize__content__technos__techno" >
        <img src="@/assets/images/technos/symfony.png" alt="symfony">
        <div>Symfony</div>
      </div>
    </div>
    <div class="harmonize__content__code" >
      <a href="https://github.com/Nv974/Harmonize-front-Nicolas" target="_blank" >
        <img src="@/assets/icons/github.svg" alt="code">
      </a>
      <div>Voir le code</div>
    </div>

    </div>
</div>
</template>

<script>
export default {
  name: 'Harmonize',
  props : ['project']
};
</script>

<style lang="scss" scoped>
@import "harmonize";
</style>
