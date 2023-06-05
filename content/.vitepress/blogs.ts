export default () => {
  return [{
    text: 'Blogs',
    collapsible: true,
// Python Script Adjustment Block Start
    Uniqtags: ['seaorm','kubernetes','rust','Vim','Text Editor','podman','database','postgres','docker','devops'],
    items: [
      {
        link: '/Linux-Blog/blogs/Vim',
        text: 'Vim Tricks',
        description: 'A set of vim command which can be useful but are not commonly found',
        tags: ['Text Editor', 'Vim'],
        lastUpdated: '2023-06-05'
      },
      {
        link: '/Linux-Blog/blogs/DevOps-tools',
        text: 'Dev Ops Tools',
        description: 'A list of dev ops tools and what they and what are there advantages or disadvantages',
        tags: ['docker','podman','devops','kubernetes'],
        lastUpdated: '2023-06-02'
      },
      {
        link: '/Linux-Blog/blogs/Seaorm',
        text: 'Seaorm',
        description: 'This blog will describe the process of me learning about Seaorm',
        tags: ['podman','database','postgres','rust','seaorm'],
        lastUpdated: '2023-06-02'
      },
    ]
// Python Script Adjustment Block End
  }]
}
