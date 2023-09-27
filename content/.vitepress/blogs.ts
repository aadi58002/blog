export default () => {
  return [{
    text: 'Blogs',
    collapsible: true,
// Python Script Adjustment Block Start
    Uniqtags: [ 'Build systems','Vim','Automation','wayland','Text Editor','Rust','Github'],
    items: [
      {
        link: '/blogs/rustwaywm',
        text: 'Writing a wayland compositor',
        description: 'Understanding how linux, rendering and wayland works with writing a wayland compositor in rust',
        tags: ['wayland', 'Rust'],
        lastUpdated: '2023-09-27'
      },
      {
        link: '/blogs/Github-Actions',
        text: 'Github Actions For void linux',
        description: 'Explaining how i understand github actions',
        tags: ['Github', 'Automation', 'Build systems'],
        lastUpdated: '2023-08-20'
      },
      {
        link: '/blogs/Vim',
        text: 'Vim Tricks',
        description: 'A set of vim command which can be useful but are not commonly found',
        tags: ['Text Editor', 'Vim'],
        lastUpdated: '2023-08-05'
      },
    ]
// Python Script Adjustment Block End
  }]
}
