// Vue logic
import { createApp } from 'vue'
import router from './router.js'

// Assets
import butterfly from './assets/butterfly.ico'

// Components
import TemplateComponent from './components/Template/template.vue'

// Import stylings and components
import "@/style.css"

// Create, configure and mount the app
const app = createApp(TemplateComponent)
app.use(router)
app.mount('#app')
