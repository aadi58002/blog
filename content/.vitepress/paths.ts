export function sidebarGuideLinux() {
  return [
    {
      text: 'Linux',
      collapsible: true,
      items: [
        { text: 'Installation', link: '/Linux-Blog/guide/Linux/Installation' },
        { text: 'Terminal', link: '/Linux-Blog/guide/Linux/Terminal' },
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
        { text: 'Introduction Emacs', link: '/Linux-Blog/guide/Emacs/Introduction' },
        { text: 'Installation Doom', link: '/Linux-Blog/guide/Emacs/Installation' },
        { text: 'Getting Started', link: '/Linux-Blog/guide/Emacs/GettingStarted' },
        { text: 'Resources', link: '/Linux-Blog/guide/Emacs/Resources' },
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
        { text: 'Vue', link: '/Linux-Blog/guide/Web-dev/Vue' },
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
        { text: 'Rust', link: '/Linux-Blog/guide/Prog-lang/Rust' },
      ]
    }
  ]
}

export function sidebarGuide() {
  return [
    {
      text: 'Guide Topics',
      items: [
        { text: 'Linux', link: '/Linux-Blog/guide/Linux/' },
        { text: 'Emacs', link: '/Linux-Blog/guide/Emacs/' },
        { text: 'Web Dev', link: '/Linux-Blog/guide/Web-dev/' },
        { text: 'Prog Lang', link: '/Linux-Blog/guide/Prog-lang/' },
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
