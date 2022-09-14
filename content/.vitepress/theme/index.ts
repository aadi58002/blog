import DefaultTheme from 'vitepress/theme'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronUp, faMoon, faShareAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faLinkedin, faPinterest, faGetPocket, faReddit, faTumblr, faDiscord, faHackerNews } from '@fortawesome/free-brands-svg-icons'

//Custom css
import './global.css'

// Custom Components import start
import Link from './components/Link.vue'

// Animesh Sahu Componenets
import Quote from './components/Quote.vue'
import PageActions from './components/PageActions.vue'

import SiteLayout from './SideLayout.vue'
// Custom Components import end

library.add(faChevronUp, faMoon, faShareAlt);
library.add(faFacebook, faTwitter, faLinkedin, faPinterest, faEnvelope, faGetPocket, faReddit, faTumblr, faDiscord, faHackerNews);


/**
 * @type {import('vitepress').Theme}
 */
const config: Object = {
  ...DefaultTheme,
  Layout: SiteLayout,
  enhanceApp({ app }) {
    app.component('Link', Link)
    app.component('Quote', Quote);
    app.component('PageActions', PageActions);
    app.component('FontAwesomeIcon', FontAwesomeIcon);
  }
}

export default config;
