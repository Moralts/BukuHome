import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '项目介绍', link: '/about/' },
  { text: '项目导航', link: '/nav/' },
  {
    text: '更多',
    items: [
      { text: 'BukuWiki', link: 'https://docs.buku.wiki/' },
      { text: 'BukuFile', link: 'https://file.buku.wiki/' },
    ],
  },
  { text: '页面模板', link: 'https://github.com/maomao1996/vitepress-nav-template' },
]
