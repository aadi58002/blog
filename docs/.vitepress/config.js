export default {
  lang: 'en-US',
  title: 'Bloging is Linux',
  description: 'This is just a desc',
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true,
    toc: { level: [1, 2] }
  },
  themeConfig: {
    displayAllHeaders: true,
    searchMaxSuggestions: 8,
    lastUpdatedText: 'Updated Date',
    nav: [
      { text: 'Blogs', link: '/blogs/' },
      { text: 'Linux Guide', link: '/guide/' },
      { text: 'Contact', link: '/contact/' }
    ],
    sidebar: {
      '/blogs/': sidebarBlog(),
      '/guide/': sidebarGuide(),
      '/contact/': sidebarContact(),
      '/': sidebarMain()
    }
  }
}

function sidebarBlog(){
  return [
    {
      text: 'Linux',
      collapsible: true,
      items: [
        { text: 'Linux Setup', link: '/blogs/Linux/linux-setup' },
        { text: 'Random Stuffs', link: '/blogs/Linux/linux-random-stuffs' },
        { text: 'Troubleshooting', link: '/blogs/Linux/linux-troubleshooting' },
        { text: 'Nix', link: '/blogs/Linux/nix' },
      ],
    },
    {
      text: 'Web Dev',
      collapsible: true,
      items: [
        {text: 'Vue', link: '/blogs/Web-dev/Vue'},
      ],
    },
    {
      text: 'Prog Lang',
      collapsible: true,
      items: [
        {text: 'Rust', link: '/blogs/Prog-lang/Rust'},
      ],
    },
  ]
}

function sidebarGuide(){
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

function sidebarContact(){
  return [
        {
          text: 'Contact',
          items: [
            { text: 'Contact', link: '/contact/' }
          ]
        }
  ]
}

function sidebarMain(){
  return [
        {
          text: 'Main',
          items: [
            { text: 'Nix', link: '/blogs/nix' },
          ]
        }
  ]
}
