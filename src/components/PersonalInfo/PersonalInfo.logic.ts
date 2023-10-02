import { defineComponent } from "vue"
import VerticalBar  from '../VerticalBar/VerticalBar.vue'
import SocialIcon from '../SocialIcon/SocialIcon.vue'

export default defineComponent({

  components: {
    VerticalBar,
    SocialIcon  
  },

  props: {
    backgroundColor: {
      type: String,
      default: 'white'
    },

    data: {
      type: Object,
      default: () => {
        return {
          name: 'John Doe',
          image: 'https://via.placeholder.com/150',
          shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ' +
                            'nibh mi. Proin in ante nec massa aliquam tincidunt. Praesent vitae ' +
                            'erat eget libero ultricies congue. Nam tincidunt, sem vel feugiat ' +
                            'eleifend, enim dui molestie velit, nec molestie turpis nulla sit amet.',
          socialLinks: [
            {
              link: 'https://github.com',
              type: 'github'
            },
            {
              link: 'https://linkedin.com',
              type: 'linkedin'
            },
            {
              link: 'mailto:miguel.martinr11@gmail.com',
              type: 'email'
            }              
          ]
        }
      }
    },    
  }
})