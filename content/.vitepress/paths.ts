export function sidebarGuideLinux() {
  return [
    {
      text: 'Linux',
      collapsible: true,
      items: [
        { text: 'Installation', link: '/guide/Linux/Installation' },
        { text: 'Terminal', link: '/guide/Linux/Terminal' },
      ]
    }
  ]
}
export function sidebarGuideEmacs() {
  return [
    {
      text: 'Emacs',
      collapsible: true,
      items: [
        { text: 'Introduction Emacs', link: '/guide/Emacs/Introduction' },
        { text: 'Installation Doom', link: '/guide/Emacs/Installation' },
        { text: 'Getting Started', link: '/guide/Emacs/GettingStarted' },
        { text: 'Resources', link: '/guide/Emacs/Resources' },
      ]
    }
  ]
}

export function sidebarGuideWebdev() {
  return [
    {
      text: 'Web Dev',
      collapsible: true,
      items: [
        { text: 'Vue', link: '/guide/Web-dev/Vue' },
      ]
    }
  ]
}
export function sidebarGuideProglang() {
  return [
    {
      text: 'Prog Lang',
      collapsible: true,
      items: [
        { text: 'Rust', link: '/guide/Prog-lang/Rust' },
      ]
    }
  ]
}

export function sidebarGuide() {
  return [
    {
      text: 'Guide Topics',
      items: [
        { text: 'Linux', link: '/guide/Linux/' },
        { text: 'Emacs', link: '/guide/Emacs/' },
        { text: 'Web Dev', link: '/guide/Web-dev/' },
        { text: 'Prog Lang', link: '/guide/Prog-lang/' },
      ]
    }
  ]
}

export function mcol(target: any) {
  if (target.length > 1) {
    target.forEach(v => v.collapsible = true);
  }
  return target;
}

export function merge(obj1: any, obj2: any) {
  return [...obj1, ...obj2]
}
