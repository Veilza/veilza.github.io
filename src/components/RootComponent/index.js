// Vue components
import Component1 from "@/components/Component1/index.vue"
import Component2 from "@/components/Component2/index.vue"

// Assets
import navbarimg from './../../assets/navicon.webp'

// Data model
export default {
  components: {
    Component1,
    Component2
  },
  data () {
    return {
      navbarimg
    }
  }
}
