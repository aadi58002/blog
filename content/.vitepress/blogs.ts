export default () => {
  return [{
    text: 'Blogs',
    collapsible: true,
// Python Script Adjustment Block Start
    Uniqtags: [ 'Projects','Text Editor','Fun','Github','Build systems','Automation','Programming','Rust','FFI','Vim'],
    items: [
      {
        link: '/blogs/ffi-circle',
        text: 'Foreign Function Interface are hard',
        description: 'A fun learning project to learn about ffi between languages and tooling around them',
        tags: ['Programming', 'Fun', 'FFI'],
        lastUpdated: '2024-04-12'
      },
      {
        link: '/blogs/Vim',
        text: 'Vim Tricks',
        description: 'A set of vim command which can be useful but are not commonly found',
        tags: ['Text Editor', 'Vim'],
        lastUpdated: '2024-03-09'
      },
      {
        link: '/blogs/Rust-Fun-Part-1',
        text: 'Rust Fun (Part 1)(Macros)',
        description: 'The first part of fun tasks planned for the Rust fun series',
        tags: ['Rust', 'Projects', 'Fun'],
        lastUpdated: '2023-12-24'
      },
      {
        link: '/blogs/Rust-Fun-Part-0',
        text: 'Rust Fun (Part 0)',
        description: 'Some fun activities to try out with rust',
        tags: ['Rust', 'Projects', 'Fun'],
        lastUpdated: '2023-12-24'
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
