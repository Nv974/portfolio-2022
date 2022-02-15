<template>
<div id="projects" class="projects">
  <div class="projects__title" > Mes projets </div>

  <div class="projects__all">
    <div v-for="project in projects" :key="project.id"
         class="projects__all__preview"  >
        <img @click="setShowProject(project)"
             :src="require(`@/assets/images/projects/${project.img}`)"
             :alt="project.title" >
    </div>
  </div>

  <div :class="{ 'projects__current projects__current--hide' : !showProject ,
                 'projects__current' : showProject}">
    <div class="projects__current__logo" >
      <img src="@/assets/images/logo.png" alt="logo">
    </div>
    <div class="projects__current__back" @click="setShowProject('')"
    >
      <button>+</button>
    </div>

    <harmonize :project="currentProject" v-if="currentProject.title === 'harmonize'" />
    <snikrz :project="currentProject" v-if="currentProject.title === 'snikrz'" />
    <coder-eats :project="currentProject" v-if="currentProject.title === 'coder eats'" />
    <blind-test :project="currentProject" v-if="currentProject.title === 'music blind test'" />
  </div>

</div>
</template>

<script>
import projects from '@/datas/projects';
import Harmonize from '@/components/Projects/Harmonize/Harmonize';
import Snikrz from '@/components/Projects/Snikrz/Snikrz';
import CoderEats from '@/components/Projects/CoderEats/CoderEats';
import BlindTest from '@/components/Projects/BlindTest/BlindTest';


export default {
  name: 'Projects',
  components : {
    Harmonize,
    Snikrz,
    CoderEats,
    BlindTest,
  },
  data(){
    return {
      projects,
      showProject : false,
      currentProject : {}
    }
  },
  methods : {
    setShowProject(project) {
      this.showProject = !this.showProject
      this.currentProject = project
    }
  }
};
</script>

<style lang="scss" scoped>
@import "projects";
</style>
