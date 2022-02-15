<template>
  <div class="blind">
    <div class="blind__content">
      <div>
        <div class="blind__title" >Music Blind Test</div>
        <iframe
            width="280"
            height="600"
            src="https://www.youtube.com/embed/58kwE0lLiv0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        >
        </iframe>
      </div>
      <div style="display: flex ; flex-direction: column ; gap: 1rem ; align-items: center " >
        <div class="blind__content__description">{{ project.description }}</div>
        <div class="blind__content__technos">
          <div class="blind__content__technos__techno" >
            <img src="@/assets/images/technos/react.png" alt="react">
            <div>React Native</div>
          </div>
          <div class="blind__content__technos__techno" >
            <a href="https://github.com/Nv974/blind-test"  target="_blank" >
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
  name: 'BlindTest',
  props: ['project']
};

</script>

<style lang="scss" scoped>
  @import "blind";
</style>
