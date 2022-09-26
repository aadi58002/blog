import DefaultTheme from 'vitepress/theme'

//Custom css
import './global.css'

// Custom Components import start
import Link from './components/Link.vue'
import Home from './components/Home.vue'

// Animesh Sahu Componenets
import Box from './components/Box.vue'
// Custom Components import end

/**
 * @type {import('vitepress').Theme}
 */
const config: Object = {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Box', Box)
    app.component('Link', Link)
    app.component('Home', Home);
  }
}

export default config;
