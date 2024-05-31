// Assets
import navbarimg from './../../assets/navicon.webp'

// Logic
export default {
    name: 'NavbarComponent',
    data () {
        return {
            isMenuVisible: false,
            navbarimg,
            links: [
                { text: 'Home', href: '/' },
                { text: 'About Me!', href: '/about' },
                { text: 'Projects', href: '/projects' },
                { text: 'Contact & Socials', href: '/contact' },
                { text: 'Donations', href: '/donations' }
            ]
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuVisible = !this.isMenuVisible
        }
    }
}
