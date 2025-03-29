export function checkIsActive(href: string, item: NavItem, mainNav = false) {
  return (
    href === item.href // /endpint?search=param
    || href.split('?')[0] === item.href // endpoint
    || !!item?.children?.filter(i => i.href === href).length // if child nav is active
    || (mainNav
      && href.split('/')[1] !== ''
      && href.split('/')[1] === item?.href?.split('/')[1])
  )
}

interface User {
  name: string
  email: string
  avatar: string
}

interface Team {
  name: string
  logo: Component
  plan: string
}

interface BaseNavItem {
  title: string
  icon: Component
  badge?: number
  separator?: 'top' | 'bottom'
}

type NavLink = BaseNavItem & {
  href: string
  children?: never
}

type NavCollapsible = BaseNavItem & {
  children?: Array<Omit<NavItem, 'children'>>
  href?: never
}

type NavItem = NavCollapsible | NavLink

interface NavGroup {
  title: string
  items: NavItem[]
}

interface SidebarData {
  user: User
  teams: Team[]
  navGroups: NavGroup[]
}

export type {
  NavCollapsible,
  NavGroup,
  NavItem,
  NavLink,
  SidebarData,
}
