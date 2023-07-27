export default () => {
  return [{
    text: 'Blogs',
    collapsible: true,
// Python Script Adjustment Block Start
    Uniqtags: [ 'Text Editor','Automation','Github','Vim','Build systems'],
    items: [
      {
        link: '/blogs/Github-Actions',
        text: 'Github Actions',
        description: 'Explaining how i understand github actions',
        tags: ['Github', 'Automation', 'Build systems'],
        lastUpdated: '2023-07-27'
      },
      {
        link: '/blogs/Vim',
        text: 'Vim Tricks',
        description: 'A set of vim command which can be useful but are not commonly found',
        tags: ['Text Editor', 'Vim'],
        lastUpdated: '2023-07-20'
      },
    ]
// Python Script Adjustment Block End
  }]
}
