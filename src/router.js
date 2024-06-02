// Vue logic
import { createRouter, createWebHashHistory } from 'vue-router'

// Components
import HomeComponent from '@/components/Home/home.vue'
import ProjectsComponent from '@/components/Projects/projects.vue'
import AboutComponent from '@/components/About/about.vue'
import DonationsComponent from '@/components/Donations/donations.vue'
import ContactComponent from '@/components/Contact/contact.vue'

// Other components
import BoBConverterComponent from '@/components/Projects/Tools/bobconverter.vue'

// Define the routes
const routes = [
  { path: '/', component: HomeComponent },
  { path: '/projects', component: ProjectsComponent },
    { path: '/projects/bobconverter', component: BoBConverterComponent },
  { path: '/about', component: AboutComponent },
  { path: '/donations', component: DonationsComponent },
  { path: '/contact', component: ContactComponent }
]

// Set up the router and export
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
