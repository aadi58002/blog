import DefaultTheme from 'vitepress/theme-without-fonts'
import './global.css'

// Custom Components import start
import Link from './components/Link.vue'
import BlogIndex from './components/BlogIndex.vue'

const config: Object = {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.component('Link', Link)
        app.component('BlogIndex', BlogIndex)
    }
}

export default config;
