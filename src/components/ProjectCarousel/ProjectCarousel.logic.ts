import { defineComponent } from "vue"
import type { ProjectCardData } from "@/utils/types"
import ProjectCard from "../ProjectCard/ProjectCard.vue"



export default defineComponent({

  components: {
    ProjectCard,
  },
  
  props: {
    id: {
      type: String,
      required: true
    },

    projects: {
      type: Array as () => ProjectCardData[],
      required: true
    }
  }
})