import type { UserConfig } from 'vitepress'
import * as paths from './paths'

const config: UserConfig = {
  base: '/Linux-Blog/',
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
      '/guide/Linux/': mcol(merge(paths.sidebarGuideLinux(),paths.sidebarGuide())),
      '/guide/Prog-lang/': mcol(merge(paths.sidebarGuideProglang(),paths.sidebarGuide())),
      '/guide/Emacs/': mcol(merge(paths.sidebarGuideEmacs(),paths.sidebarGuide())),
      '/guide/Web-dev/': mcol(merge(paths.sidebarGuideWebdev(),paths.sidebarGuide())),

      // Must be at bottom, so other branches are not matched
      // '/': mcol(sidebarMain())
    }
  },
}

export default config;


function mcol(target: any) {
  if (target.length > 1) {
    target.forEach(v => v.collapsible = true);
  }
  return target;
}

function merge(obj1: any, obj2: any){
  return [...obj1, ...obj2]
}

