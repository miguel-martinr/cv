<template>
  <div :id="id" class="carousel slide carousel-dark p-3" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button v-for="project, index in projects" type="button" :data-bs-target="`#${id}`" :data-bs-slide-to="index"
        :class="['', index === 0 ? 'active' : ''].join(' ')"></button>

    </div>
    <div class="carousel-inner">
      <div v-for="project, index in projects" :class="'carousel-item ' + (index === 0 ? 'active' : '')">
        <div class="project-wrapper">
          <ProjectCard :project="project" />
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./ProjectCarousel.logic.ts" lang="ts"></script>
<style src="./ProjectCarousel.styles.css" lang="scss" scoped></style>