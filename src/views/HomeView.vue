<script setup lang="ts">
import PersonalInfo from '@/components/PersonalInfo/PersonalInfo.vue'
import mePng from '@/assets/me.png'

</script>

<template>
  <main>
    <PersonalInfo 
      :data="{
        image: mePng,
        name: 'Miguel Martín',
        shortDescription: $t('whoami'),        
      }"

      backgroundColor="#72CCFF"
    />
    
  </main>
</template>
