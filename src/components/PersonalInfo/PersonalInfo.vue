<template>
  <VerticalBar 
    :backgroundColor="backgroundColor"
  >
    <div class="row"></div>
    <div class="row">
      <div class="col-12 text-center">
        <img :src="data.image" alt="Profile picture" class="img-fluid rounded-circle"
          style="width: 200px; height: 200px; object-fit: cover; object-position: bottom; border: 2px solid rgb(222, 213, 213); ">
      </div>

      <div class="col-12 mt-2 text-center">
        <h1>{{ data.name }}</h1>                        
      </div>

      <div class="col-12 text-center">
        <h2 class="h5">Full Stack Developer</h2>
      </div>
      
      <div 
        :style="{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',          
        }"        
      >
        <div 
          v-for="socialLink in data.socialLinks" 
          class="ms-1 me-1"          
        >

          <SocialIcon v-bind="{...socialLink}" />
        </div>
      </div>

      <div class="col-12 mt-2 text-center">
        <span>{{ data.shortDescription }}</span>
      </div>
    </div>
    <div class="row"></div>
    <div class="row"></div>
    <div class="row"></div>
  </VerticalBar>
</template>

<script src="./PersonalInfo.logic.ts" lang="ts"></script>
