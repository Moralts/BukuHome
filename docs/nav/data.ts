import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: 'Buku 系列项目',
    items: [
      {
        icon: '/public/icons/book.png',
        title: 'BukuWiki',
        desc: 'Minecraft 玩家们的终极游玩指南',
        link: 'https://docs.buku.wiki/',
      },
      {
        icon: '/public/icons/file.png',
        title: 'BukuFile',
        desc: 'BukuWiki 的一站式存储',
        link: 'https://file.buku.wiki/',
      },
      {
        icon: '/public/logo.png',
        title: 'BukuHome',
        desc: '为 Buku 系列项目搭建的安身小窝',
        link: 'https://buku.wiki/',
      },
    ],
  },
  {
    title: 'Buku 系列用到的开源项目',
    items: [
      {
        icon: '/public/icons/docusaurus_keytar.svg',
        title: 'Docusaurus',
        link: 'https://docusaurus.io/',
      },
      {
        icon: '/public/icons/openlist.svg',
        title: 'OpenList',
        link: 'https://github.com/OpenListTeam/OpenList',
      },
    ],
  },
  {
    title: 'Buku 系列所用到的服务',
    items: [
      {
        icon: '/public/icons/netlify.svg',
        title: 'Netlify',
        desc: 'Buku 系列文档主要部署服务',
        link: 'https://github.com/moralts',
      },
    ],
  },
]
