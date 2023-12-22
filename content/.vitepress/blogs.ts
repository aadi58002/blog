export default () => {
  return [{
    text: 'Blogs',
    collapsible: true,
// Python Script Adjustment Block Start
    Uniqtags: [ 'Fun','Build systems','Projects','Text Editor','Github','Automation','Vim','Rust'],
    items: [
      {
        link: '/blogs/Rust-Fun-Part-1',
        text: 'Rust Fun (Part 1)(Macros)',
        description: 'The first part of fun tasks planned for the Rust fun series',
        tags: ['Rust', 'Projects', 'Fun'],
        lastUpdated: '2023-12-17'
      },
      {
        link: '/blogs/Rust-Fun-Part-0',
        text: 'Rust Fun (Part 0)',
        description: 'Some fun activities to try out with rust',
        tags: ['Rust', 'Projects', 'Fun'],
        lastUpdated: '2023-12-17'
      },
      {
        link: '/blogs/Vim',
        text: 'Vim Tricks',
        description: 'A set of vim command which can be useful but are not commonly found',
        tags: ['Text Editor', 'Vim'],
        lastUpdated: '2023-12-17'
      },
      {
        link: '/blogs/Github-Actions',
        text: 'Github Actions For void linux',
        description: 'Explaining how i understand github actions',
        tags: ['Github', 'Automation', 'Build systems'],
        lastUpdated: '2023-10-12'
      },
    ]
// Python Script Adjustment Block End
  }]
}
