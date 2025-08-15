import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/about/': [
    {
      text: '关于 BukuHome',
      items: [
        { text: '项目简介', link: '/about/intro' },
        { text: '团队成员', link: '/about/team' },
        { text: '发展历程', link: '/about/history' },
      ],
    },
  ],
}
