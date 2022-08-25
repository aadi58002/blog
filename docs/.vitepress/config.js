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
      '/blogs/': [
        {
          text: 'Blogs',
          items: [
            { text: 'Nix', link: '/blogs/nix' },
          ]
        }
      ],
      '/guide/': [
        {
          text: 'Begineers',
          collapsible: true,
          items: [
            { text: 'Installation', link: '/guide/Installation' },
            { text: 'Terminal', link: '/guide/Terminal' },
          ]
        }
      ],
      '/contact/': [
        {
          text: 'Contact',
          items: [
            { text: 'Contact', link: '/contact/' }
          ]
        }
      ],
      '/': [
        {
          text: 'Main',
          items: [
            { text: 'Nix', link: '/blogs/nix' },
          ]
        }
      ]
    }
  }
}
