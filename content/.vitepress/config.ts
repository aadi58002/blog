/**
 * @type {import('vitepress').UserConfig}
 */

const config: Object = {
  lang: 'en-US',
  title: 'Bloging is Linux',
  description: 'Interting topics as well a place to get good links to resources for topics of my interest',
  base: '/Linux-Blog/',
  outDir: '../dist/',
  cleanUrls: 'with-subfolders',
  appearance: true,
  ignoreDeadLinks: true,
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true,
  },
  socialLinks: [
    { icon: 'github', link: 'https://github.com/aadi58002/Linux-Blog.git' },
  ],
  themeConfig: {
    editLink: { pattern: 'https://github.com/aadi58002/Linux-Blog/edit/main/content/:path' },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blogs', link: '/blogs/' },
      { text: 'Linux Guide', link: '/guide/' },
      { text: 'Contact', link: '/contact/' }
    ],
    sidebar: {
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

function sidebarBlog() {
  return [
    {
      text: 'Linux',
      collapsible: true,
      items: [
        { text: 'Nix', link: '/blogs/Linux/nix' },
      ],
    },
    {
      text: 'Web Dev',
      collapsible: true,
      items: [
        { text: 'Vue', link: '/blogs/Web-dev/Vue' },
      ],
    },
    {
      text: 'Prog Lang',
      collapsible: true,
      items: [
        { text: 'Rust', link: '/blogs/Prog-lang/Rust' },
      ],
    },
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
        { text: 'Contact', link: '/contact/' }
      ]
    }
  ]
}

function sidebarMain() {
  return [
    {
      text: 'Main',
      items: [
        { text: 'Nix', link: '/blogs/nix' },
      ]
    }
  ]
}
