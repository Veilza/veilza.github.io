// Vue logic
import { createApp } from 'vue'
import router from './router.js'

// Components
import TemplateComponent from './components/Template/template.vue'

// Import stylings and components
import "@/style.css"

// Create, configure and mount the app
const app = createApp(TemplateComponent)
app.use(router)
app.mount('#app')
