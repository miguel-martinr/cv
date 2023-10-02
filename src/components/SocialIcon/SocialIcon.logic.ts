import { defineComponent } from "vue"

export default defineComponent({

  props: {
    link: {
      type: String,
      required: true
    },

    type: {
      type: String,
      required: true
    }

  },

  data() {
    return {
      types: {
        github: 'bi-github',
        linkedin: 'bi-linkedin',
        email: 'bi-envelope',
        phone: 'bi-telephone',
      }      
    }
  },

  computed: {
    iconClass() {
      return this.types[this.type as keyof typeof this.types]
    }
  }
})
