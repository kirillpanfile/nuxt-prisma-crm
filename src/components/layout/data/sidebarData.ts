import type { NavGroup, SidebarData } from '../navigation'
import { Command, LayoutDashboard } from 'lucide-vue-next'

export function getSidebarData(): SidebarData {
  const prismaCrmConfig = inject<any>('prismaCrmConfig')

  const sidebarItems: NavGroup[] = [
    {
      title: 'General',
      items: [
        {
          title: 'Dashboard',
          href: '/private/admin/',
          icon: markRaw(LayoutDashboard),
        },
        ...prismaCrmConfig.apps,
      ],
    },
  ]

  return {
    user: {
      name: 'satnaing',
      email: 'satnaingdev@gmail.com',
      avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fprofile-avatar&psig=AOvVaw1MqeRVslciz37aZW3G_EuR&ust=1743167627862000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICo-8urqowDFQAAAAAdAAAAABAE',
    },
    teams: [
      {
        name: prismaCrmConfig.appName,
        logo: Command,
        plan: prismaCrmConfig.appDescription,
      },
    ],
    navGroups: sidebarItems,
  }
}
