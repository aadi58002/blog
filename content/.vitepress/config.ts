import type { UserConfig } from 'vitepress'
import { mcol, merge,sidebarGuide,sidebarGuideEmacs,sidebarGuideLinux,sidebarGuideProglang,sidebarGuideWebdev } from './paths'
import sidebarBlog from './blogs'

const config: UserConfig = {
  base: '/',
  lang: 'en-US',
  title: 'Aditya Yadav',
  description: 'Interting topics as well a place to get good links to resources for topics of my interest',
  lastUpdated: true,
  outDir: '../dist/',
  appearance: true,
  ignoreDeadLinks: true,
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true,
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/aadi58002/Linux-Blog.git' },
    ],
    editLink: { pattern: 'https://github.com/aadi58002/Linux-Blog/edit/main/content/:path' },
    lastUpdatedText: 'Updated Date',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blogs', link: '/blogs/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Contact', link: '/contact/' }
    ],
    sidebar: {
      '/guide/Linux/': mcol(merge(sidebarGuideLinux(),sidebarGuide())),
      '/guide/Prog-lang/': mcol(merge(sidebarGuideProglang(),sidebarGuide())),
      '/guide/Emacs/': mcol(merge(sidebarGuideEmacs(),sidebarGuide())),
      '/guide/Web-dev/': mcol(merge(sidebarGuideWebdev(),sidebarGuide())),
      '/blogs/': mcol(sidebarBlog()),

      // Must be at bottom, so other branches are not matched
      // '/': paths.mcol(sidebarMain())
    }
  },
}

export default config;
