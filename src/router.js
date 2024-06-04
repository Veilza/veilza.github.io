// Vue logic
import { createRouter, createWebHashHistory } from 'vue-router'

// Main Components
import HomeComponent from '@/components/Home/home.vue'
import ProjectsComponent from '@/components/Projects/projects.vue'
import AboutComponent from '@/components/About/about.vue'
import DonationsComponent from '@/components/Donations/donations.vue'
import ContactComponent from '@/components/Contact/contact.vue'
import NotFoundComponent from '@/components/NotFound/notfound.vue'

// Other components
import BoBConverterComponent from '@/components/Projects/Tools/bobconverter.vue'

// Variables
const baseTitle = "Veilza Kinsemi"

// Define the routes
const routes = [
  {
    name: `${baseTitle}`,
    path: '/',
    component: HomeComponent
  },
  {
    name: `${baseTitle} / Projects`,
    path: '/projects',
    component: ProjectsComponent
  },
    {
      name: `${baseTitle} / Linear to sRGB Color Converter`,
      path: '/projects/bobconverter',
      component: BoBConverterComponent
    },
  {
    name: `${baseTitle} / About`,
    path: '/about',
    component: AboutComponent
  },
  {
    name: `${baseTitle} / Donations`,
    path: '/donations',
    component: DonationsComponent
  },
  {
    name: `${baseTitle} / Contact`,
    path: '/contact',
    component: ContactComponent
  },
  {
    name: '${baseTitle} / 404',
    path: '/:catchAll(.*)',
    component: NotFoundComponent
  }
]

// Set up the router and export
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// Handle events that happen before loading the next page
router.beforeEach((to, from, next) => {
  // Handle updating the page title
  document.title = to.name ? to.name : baseTitle
  document.head.querySelector("[property='og:title'][content]").content = to.name ? to.name : baseTitle

  // Tell the router to go to the next page
  next()
})

export default router
