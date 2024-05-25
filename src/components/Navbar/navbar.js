// Assets
import navbarimg from './../../assets/navicon.webp'

export default {
    data () {
        return {
            isMenuVisible: false,
            navbarimg,
            links: [
                { text: 'Home', href: '/' },
                { text: 'Projects Overview', href: '/projects' },
                { text: 'About Me!', href: '/about' },
                { text: 'Services', href: '/services' },
                { text: 'Contact', href: '/contact' }
            ]
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuVisible = !this.isMenuVisible
        }
    }
}
