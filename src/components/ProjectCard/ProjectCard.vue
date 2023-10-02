<template>
  <div class="row mb-3 pb-5">

    <div class="col-sm-12 col-md-4 mb-5">
      <div class="col-sm-12">
        <span class="h1">{{ project.title }}</span>
      </div>
      <div class="col-sm-12">
        <!-- Description -->
        <span v-html="project.description"></span>
      </div>

      <div class="col-12 mt-5">
        <!--  Tags  -->
        <span class="badge bg-success m-1" v-for="tech in project.techStack">{{ tech }}</span>
      </div>

      <div class="col text-center mt-5">
        <!-- More button -->
        <button class="btn btn-primary" v-if="project.moreInfo">
          <a :href="project.moreInfo" class="text-white" target="_blank">{{ $t('more') }}</a>
        </button>

        <!-- Share button -->
        <button class="btn btn-primary ms-1" v-if="project.shareLink">
          <a :href="project.shareLink" class="text-white" target="_blank">
            <i class="bi bi-share-fill"></i>
          </a>
        </button>
      </div>
    </div>

    <div class="col-sm-12 col-md-8 text-center">
      <div class="col">
        <img :src="project.preview"
          class="img-fluid rounded shadow-lg"
          :alt="project.title" 
          :style="{
            'max-height': '600px',
            'max-width': '100%'
          }"
          

        >
      </div>


    </div>

  </div>
</template>

<script src="./ProjectCard.logic.ts" lang="ts"></script>