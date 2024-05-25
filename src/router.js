// Vue logic
import { createRouter, createWebHashHistory } from 'vue-router'

// Components
import ProjectsComponent from '@/components/Projects/projects.vue'
import AboutComponent from '@/components/About/about.vue'
import ServicesComponent from '@/components/Services/services.vue'
import ContactComponent from '@/components/Contact/contact.vue'

// Define the routes
const routes = [
  { path: '/', component: ProjectsComponent },
  { path: '/projects', component: ProjectsComponent },
  { path: '/about', component: AboutComponent },
  { path: '/services', component: ServicesComponent },
  { path: '/contact', component: ContactComponent }
]

// Set up the router and export
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
