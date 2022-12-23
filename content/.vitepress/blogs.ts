export default () => {
  return [{
    text: 'Blogs',
    collapsible: true,
// Python Script Adjustment Block Start
    Uniqtags: ['postgres','Vim','podman','seaorm','kubernetes','Text Editor','rust','docker','devops','database'],
    items: [
      {
        links: '/Linux-Blog/blogs/Seaorm',
        text: 'Seaorm',
        description: 'This blog will describe the process of me learning about Seaorm',
        tags: ['docker','database','postgres','rust','seaorm'],
        lastUpdated: '2022-11-30'
      },
      {
        links: '/Linux-Blog/blogs/DevOps-tools',
        text: 'Dev Ops Tools',
        description: 'A list of dev ops tools and what they and what are there advantages or disadvantages',
        tags: ['docker','podman','devops','kubernetes'],
        lastUpdated: '2022-10-25'
      },
      {
        links: '/Linux-Blog/blogs/Vim',
        text: 'Vim Tricks',
        description: 'A set of vim command which can be useful but are not commonly found',
        tags: ['Text Editor', 'Vim'],
        lastUpdated: '2022-10-25'
      },
    ]
// Python Script Adjustment Block End
  }]
}
