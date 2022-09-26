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
      '/blogs/Linux/': mcol(sidebarBlogLinux()),
      '/blogs/Prog-lang/': mcol(sidebarBlogProglang()),
      '/blogs/Emacs/': mcol(sidebarBlogEmacs()),
      '/blogs/Web-dev/': mcol(sidebarBlogWebdev()),
      '/blogs/': mcol(sidebarBlog()),
      '/guide/': mcol(sidebarGuide()),
      '/contact/': mcol(sidebarContact()),

      // Must be at bottom, so other branches are not matched
      '/': mcol(sidebarMain())
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

function sidebarBlogLinux() {
  return [
    {
      text: 'Linux',
      collapsible: true,
      items: [
        { text: 'Nix', link: '/blogs/Linux/nix' },
      ]
    }
  ]
}
function sidebarBlogEmacs() {
  return [
    {
      text: 'Emacs',
      collapsible: true,
      items: [
        { text: 'Introduction Emacs', link: '/blogs/Emacs/Introduction' },
      ]
    }
  ]
}

function sidebarBlogWebdev() {
  return [
    {
      text: 'Web Dev',
      collapsible: true,
      items: [
        { text: 'Vue', link: '/blogs/Web-dev/Vue' },
      ]
    }
  ]
}
function sidebarBlogProglang() {
  return [
    {
      text: 'Prog Lang',
      collapsible: true,
      items: [
        { text: 'Rust', link: '/blogs/Prog-lang/Rust' },
      ]
    }
  ]
}

function sidebarBlog() {
  return [
    {
      text: 'Blogs Topics',
      items: [
      { text: 'Linux', link: '/blogs/Linux/'},
      { text: 'Emacs', link: '/blogs/Emacs/'},
      { text: 'Web Dev', link: '/blogs/Web-dev/'},
      { text: 'Prog Lang',link: '/blogs/Prog-lang/'},
      ]
    }
  ]
}


function sidebarGuide() {
  return [
    {
      text: 'Begineers',
      collapsible: true,
      items: [
        { text: 'Installation', link: '/guide/Installation' },
        { text: 'Terminal', link: '/guide/Terminal' },
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

function sidebarMain() {
  return [
    {
      text: 'Getting started points',
      items: [
        { text: 'Nix', link: '/blogs/Linux/nix' },
      ]
    }
  ]
}
