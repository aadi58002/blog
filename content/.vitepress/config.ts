import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  base: '/Linux-Blog/',
  lang: 'en-US',
  title: 'Bloging is Linux',
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
      { text: 'Linux Guide', link: '/guide/' },
      { text: 'Contact', link: '/contact/' }
    ],
    sidebar: {
      '/guide/Linux/': mcol(merge(sidebarGuide(),sidebarGuideLinux())),
      '/guide/Prog-lang/': mcol(merge(sidebarGuide(),sidebarGuideProglang())),
      '/guide/Emacs/': mcol(merge(sidebarGuide(),sidebarGuideEmacs())),
      '/guide/Web-dev/': mcol(merge(sidebarGuide(),sidebarGuideWebdev())),
      '/guide/': mcol(sidebarGuide()),
      '/blogs/': mcol(sidebarBlog()),
      '/contact/': mcol(sidebarContact()),

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

function sidebarGuideLinux() {
  return [
    {
      text: 'Linux',
      collapsible: true,
      items: [
        { text: 'Installation', link: '/guide/Linux/Installation' },
        { text: 'Terminal', link: '/guide/Linux/Terminal' },
      ]
    }
  ]
}
function sidebarGuideEmacs() {
  return [
    {
      text: 'Emacs',
      collapsible: true,
      items: [
        { text: 'Introduction Emacs', link: '/guide/Emacs/Introduction' },
        { text: 'Installation Doom', link: '/guide/Emacs/Installation' },
        { text: 'Getting Started', link: '/guide/Emacs/GettingStarted' },
      ]
    }
  ]
}

function sidebarGuideWebdev() {
  return [
    {
      text: 'Web Dev',
      collapsible: true,
      items: [
        { text: 'Vue', link: '/guide/Web-dev/Vue' },
      ]
    }
  ]
}
function sidebarGuideProglang() {
  return [
    {
      text: 'Prog Lang',
      collapsible: true,
      items: [
        { text: 'Rust', link: '/guide/Prog-lang/Rust' },
      ]
    }
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Guide Topics',
      items: [
      { text: 'Linux', link: '/guide/Linux/'},
      { text: 'Emacs', link: '/guide/Emacs/'},
      { text: 'Web Dev', link: '/guide/Web-dev/'},
      { text: 'Prog Lang',link: '/guide/Prog-lang/'},
      ]
    }
  ]
}


function sidebarBlog() {
  return [
    {
      text: 'Begineers',
      collapsible: true,
      items: [
        { text: 'Vim Tricks', link: '/blogs/Vim' },
      ]
    }
  ]
}

function sidebarContact() {
  return [
    {
      text: 'Contact',
      items: [
        { text: 'Contact', link: '/contact/' },
      ]
    }
  ]
}

// function sidebarMain() {
//   return [
//     {
//       text: 'Getting started points',
//       items: [
//         { text: 'Nix', link: '/blogs/Linux/nix' },
//       ]
//     }
//   ]
// }
