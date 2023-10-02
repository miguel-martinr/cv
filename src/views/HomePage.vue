<script setup lang="ts">
import PersonalInfo from '@/components/PersonalInfo/PersonalInfo.vue'
import ProjectCarousel from '@/components/ProjectCarousel/ProjectCarousel.vue'
import mePng from '@/assets/me.png'
import evaluationMode from '@/assets/evaluation_mode.gif'
</script>

<template>
  <div class="container-fluid p-0">
    <div class="row">
      <div class="col-sm-12 col-md-3">
        <PersonalInfo :data="{
          image: mePng,
          name: 'Miguel Martín',
          shortDescription: $t('whoami'),
          socialLinks: [
            {
              type: 'github',
              link: 'https://www.linkedin.com/in/miguel-martinr/'
            },
            {
              type: 'email',
              link: 'mailto:miguel.martinr11@gmail.com'
            },
            {
              type: 'linkedin',
              link: 'https://www.linkedin.com/in/miguel-martinr/'
            },
            {
              type: 'phone',
              link: 'tel:+34666666666'
            }

          ]
        }" backgroundColor="#72CCFF" />
      </div>

      <div class="col-sm-12 col-md-9 mt-2">
        <div class="col text-center">
          <span class="h1">{{ $t('whativebeento') }}</span>

        </div>
        <div class="mt-5">

          <ProjectCarousel :id="'projectCarousel'" :projects="[
            {
              title: $t('project.deepview.title'),
              description: $t('project.deepview.desc'),
              preview: evaluationMode,
              shareLink: 'https://github.com/miguel-martinr/Deepview',
              moreInfo: 'https://github.com/miguel-martinr/Deepview',
              techStack: [
                'Python',
                'Django',
                'JavaScript',
                'React',
                'MongoDB',
                'OpenCV',
                'Redux'
              ]
            },
            {
              title: $t('project.pycture.title'),
              description: $t('project.pycture.desc'),
              preview: 'https://github.com/miguel-martinr/Pycture/raw/main/media/readme_demo.gif',
              shareLink: 'https://github.com/miguel-martinr/Pycture',
              moreInfo: 'https://github.com/miguel-martinr/Pycture',
              techStack: [
                'Python',
                'PyQT5',                
                'OpenCV',                
              ]
            }
          ]" />
        </div>
      </div>
    </div>
  </div>
</template>