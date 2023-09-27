import DefaultTheme from 'vitepress/theme'

// Custom Components import start
import Link from './components/Link.vue'
import BlogIndex from './components/BlogIndex.vue'

// Animesh Sahu Componenets
import Box from './components/Box.vue'
// Custom Components import end

const config: Object = {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.component('Box', Box)
        app.component('Link', Link)
        app.component('BlogIndex', BlogIndex)
    }
}

export default config;
