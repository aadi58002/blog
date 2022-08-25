import DefaultTheme from 'vitepress/theme'
import './custom.css'
// Custom Components import start
import Box from './components/Box.vue'
import Center from './components/Center.vue'
import Blog from './components/Blog.vue'
import videoEb from './components/videoEb.vue'
// Custom Components import end
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('videoEb', videoEb)
    app.component('Blog', Blog)
    app.component('Box', Box)
    app.component('c', Center)
  }
}
