import { defineComponent } from 'vue'

export default defineComponent({
  // type inference enabled
  props: {
    backgroundColor: {
      type: String,
      default: 'white'
    }
  }    
})