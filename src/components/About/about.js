// Assets
import chibi from './../../assets/chibi.webp'

// Logic
export default {
  name: 'AboutComponent',
    data() {
        return {
            chibi,
            currentTime: ''
        }
    },
    created() {
      this.updateTime()
      this.timer = setInterval(this.updateTime, 1000)
    },
    beforeDestroy() {
      clearInterval(this.timer)
    },
    methods: {
      updateTime() {
        const now = new Date()
        const options = {
          timeZone: 'America/Chicago',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
        }
        this.currentTime = new Intl.DateTimeFormat('en-US', options).format(now)
      }
    }
}
