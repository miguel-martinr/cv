import { defineComponent } from "vue"
import type { ProjectCardData } from "@/utils/types"

export default defineComponent({
  props: {
    project: {
      type: Object as () => ProjectCardData,
      required: true
    }    
  },    
})
