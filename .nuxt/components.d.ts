
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'Alert': typeof import("../src/components/ui/alert/index")['Alert']
    'AlertDescription': typeof import("../src/components/ui/alert/index")['AlertDescription']
    'AlertTitle': typeof import("../src/components/ui/alert/index")['AlertTitle']
    'Avatar': typeof import("../src/components/ui/avatar/index")['Avatar']
    'AvatarFallback': typeof import("../src/components/ui/avatar/index")['AvatarFallback']
    'AvatarImage': typeof import("../src/components/ui/avatar/index")['AvatarImage']
    'Badge': typeof import("../src/components/ui/badge/index")['Badge']
    'Button': typeof import("../src/components/ui/button/index")['Button']
    'Card': typeof import("../src/components/ui/card/index")['Card']
    'CardContent': typeof import("../src/components/ui/card/index")['CardContent']
    'CardDescription': typeof import("../src/components/ui/card/index")['CardDescription']
    'CardFooter': typeof import("../src/components/ui/card/index")['CardFooter']
    'CardHeader': typeof import("../src/components/ui/card/index")['CardHeader']
    'CardTitle': typeof import("../src/components/ui/card/index")['CardTitle']
    'Collapsible': typeof import("../src/components/ui/collapsible/index")['Collapsible']
    'CollapsibleContent': typeof import("../src/components/ui/collapsible/index")['CollapsibleContent']
    'CollapsibleTrigger': typeof import("../src/components/ui/collapsible/index")['CollapsibleTrigger']
    'Input': typeof import("../src/components/ui/input/index")['Input']
    'Label': typeof import("../src/components/ui/label/index")['Label']
    'Separator': typeof import("../src/components/ui/separator/index")['Separator']
    'Sheet': typeof import("../src/components/ui/sheet/index")['Sheet']
    'SheetClose': typeof import("../src/components/ui/sheet/index")['SheetClose']
    'SheetContent': typeof import("../src/components/ui/sheet/index")['SheetContent']
    'SheetDescription': typeof import("../src/components/ui/sheet/index")['SheetDescription']
    'SheetFooter': typeof import("../src/components/ui/sheet/index")['SheetFooter']
    'SheetHeader': typeof import("../src/components/ui/sheet/index")['SheetHeader']
    'SheetTitle': typeof import("../src/components/ui/sheet/index")['SheetTitle']
    'SheetTrigger': typeof import("../src/components/ui/sheet/index")['SheetTrigger']
    'Sidebar': typeof import("../src/components/ui/sidebar/index")['Sidebar']
    'SidebarContent': typeof import("../src/components/ui/sidebar/index")['SidebarContent']
    'SidebarFooter': typeof import("../src/components/ui/sidebar/index")['SidebarFooter']
    'SidebarGroup': typeof import("../src/components/ui/sidebar/index")['SidebarGroup']
    'SidebarGroupAction': typeof import("../src/components/ui/sidebar/index")['SidebarGroupAction']
    'SidebarGroupContent': typeof import("../src/components/ui/sidebar/index")['SidebarGroupContent']
    'SidebarGroupLabel': typeof import("../src/components/ui/sidebar/index")['SidebarGroupLabel']
    'SidebarHeader': typeof import("../src/components/ui/sidebar/index")['SidebarHeader']
    'SidebarInput': typeof import("../src/components/ui/sidebar/index")['SidebarInput']
    'SidebarInset': typeof import("../src/components/ui/sidebar/index")['SidebarInset']
    'SidebarMenu': typeof import("../src/components/ui/sidebar/index")['SidebarMenu']
    'SidebarMenuAction': typeof import("../src/components/ui/sidebar/index")['SidebarMenuAction']
    'SidebarMenuBadge': typeof import("../src/components/ui/sidebar/index")['SidebarMenuBadge']
    'SidebarMenuButton': typeof import("../src/components/ui/sidebar/index")['SidebarMenuButton']
    'SidebarMenuItem': typeof import("../src/components/ui/sidebar/index")['SidebarMenuItem']
    'SidebarMenuSkeleton': typeof import("../src/components/ui/sidebar/index")['SidebarMenuSkeleton']
    'SidebarMenuSub': typeof import("../src/components/ui/sidebar/index")['SidebarMenuSub']
    'SidebarMenuSubButton': typeof import("../src/components/ui/sidebar/index")['SidebarMenuSubButton']
    'SidebarMenuSubItem': typeof import("../src/components/ui/sidebar/index")['SidebarMenuSubItem']
    'SidebarProvider': typeof import("../src/components/ui/sidebar/index")['SidebarProvider']
    'SidebarRail': typeof import("../src/components/ui/sidebar/index")['SidebarRail']
    'SidebarSeparator': typeof import("../src/components/ui/sidebar/index")['SidebarSeparator']
    'SidebarTrigger': typeof import("../src/components/ui/sidebar/index")['SidebarTrigger']
    'Skeleton': typeof import("../src/components/ui/skeleton/index")['Skeleton']
    'Table': typeof import("../src/components/ui/table/index")['Table']
    'TableBody': typeof import("../src/components/ui/table/index")['TableBody']
    'TableCaption': typeof import("../src/components/ui/table/index")['TableCaption']
    'TableCell': typeof import("../src/components/ui/table/index")['TableCell']
    'TableEmpty': typeof import("../src/components/ui/table/index")['TableEmpty']
    'TableFooter': typeof import("../src/components/ui/table/index")['TableFooter']
    'TableHead': typeof import("../src/components/ui/table/index")['TableHead']
    'TableHeader': typeof import("../src/components/ui/table/index")['TableHeader']
    'TableRow': typeof import("../src/components/ui/table/index")['TableRow']
    'FormControl': typeof import("../src/components/ui/form/index")['FormControl']
    'FormDescription': typeof import("../src/components/ui/form/index")['FormDescription']
    'FormItem': typeof import("../src/components/ui/form/index")['FormItem']
    'FormLabel': typeof import("../src/components/ui/form/index")['FormLabel']
    'FormMessage': typeof import("../src/components/ui/form/index")['FormMessage']
    'FORMITEMINJECTIONKEY': typeof import("../src/components/ui/form/index")['FORM_ITEM_INJECTION_KEY']
    'Form': typeof import("../src/components/ui/form/index")['Form']
    'FormField': typeof import("../src/components/ui/form/index")['FormField']
    'FormFieldArray': typeof import("../src/components/ui/form/index")['FormFieldArray']
    'DropdownMenu': typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenu']
    'DropdownMenuCheckboxItem': typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuCheckboxItem']
    'DropdownMenuContent': typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuContent']
    'DropdownMenuGroup': typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuGroup']
    'DropdownMenuItem': typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuItem']
    'DropdownMenuLabel': typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuLabel']
    'DropdownMenuRadioGroup': typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuRadioGroup']
    'DropdownMenuRadioItem': typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuRadioItem']
    'DropdownMenuSeparator': typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuSeparator']
    'DropdownMenuShortcut': typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuShortcut']
    'DropdownMenuSub': typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuSub']
    'DropdownMenuSubContent': typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuSubContent']
    'DropdownMenuSubTrigger': typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuSubTrigger']
    'DropdownMenuTrigger': typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuTrigger']
    'DropdownMenuPortal': typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuPortal']
    'Tooltip': typeof import("../src/components/ui/tooltip/index")['Tooltip']
    'TooltipContent': typeof import("../src/components/ui/tooltip/index")['TooltipContent']
    'TooltipProvider': typeof import("../src/components/ui/tooltip/index")['TooltipProvider']
    'TooltipTrigger': typeof import("../src/components/ui/tooltip/index")['TooltipTrigger']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyAlert': LazyComponent<typeof import("../src/components/ui/alert/index")['Alert']>
    'LazyAlertDescription': LazyComponent<typeof import("../src/components/ui/alert/index")['AlertDescription']>
    'LazyAlertTitle': LazyComponent<typeof import("../src/components/ui/alert/index")['AlertTitle']>
    'LazyAvatar': LazyComponent<typeof import("../src/components/ui/avatar/index")['Avatar']>
    'LazyAvatarFallback': LazyComponent<typeof import("../src/components/ui/avatar/index")['AvatarFallback']>
    'LazyAvatarImage': LazyComponent<typeof import("../src/components/ui/avatar/index")['AvatarImage']>
    'LazyBadge': LazyComponent<typeof import("../src/components/ui/badge/index")['Badge']>
    'LazyButton': LazyComponent<typeof import("../src/components/ui/button/index")['Button']>
    'LazyCard': LazyComponent<typeof import("../src/components/ui/card/index")['Card']>
    'LazyCardContent': LazyComponent<typeof import("../src/components/ui/card/index")['CardContent']>
    'LazyCardDescription': LazyComponent<typeof import("../src/components/ui/card/index")['CardDescription']>
    'LazyCardFooter': LazyComponent<typeof import("../src/components/ui/card/index")['CardFooter']>
    'LazyCardHeader': LazyComponent<typeof import("../src/components/ui/card/index")['CardHeader']>
    'LazyCardTitle': LazyComponent<typeof import("../src/components/ui/card/index")['CardTitle']>
    'LazyCollapsible': LazyComponent<typeof import("../src/components/ui/collapsible/index")['Collapsible']>
    'LazyCollapsibleContent': LazyComponent<typeof import("../src/components/ui/collapsible/index")['CollapsibleContent']>
    'LazyCollapsibleTrigger': LazyComponent<typeof import("../src/components/ui/collapsible/index")['CollapsibleTrigger']>
    'LazyInput': LazyComponent<typeof import("../src/components/ui/input/index")['Input']>
    'LazyLabel': LazyComponent<typeof import("../src/components/ui/label/index")['Label']>
    'LazySeparator': LazyComponent<typeof import("../src/components/ui/separator/index")['Separator']>
    'LazySheet': LazyComponent<typeof import("../src/components/ui/sheet/index")['Sheet']>
    'LazySheetClose': LazyComponent<typeof import("../src/components/ui/sheet/index")['SheetClose']>
    'LazySheetContent': LazyComponent<typeof import("../src/components/ui/sheet/index")['SheetContent']>
    'LazySheetDescription': LazyComponent<typeof import("../src/components/ui/sheet/index")['SheetDescription']>
    'LazySheetFooter': LazyComponent<typeof import("../src/components/ui/sheet/index")['SheetFooter']>
    'LazySheetHeader': LazyComponent<typeof import("../src/components/ui/sheet/index")['SheetHeader']>
    'LazySheetTitle': LazyComponent<typeof import("../src/components/ui/sheet/index")['SheetTitle']>
    'LazySheetTrigger': LazyComponent<typeof import("../src/components/ui/sheet/index")['SheetTrigger']>
    'LazySidebar': LazyComponent<typeof import("../src/components/ui/sidebar/index")['Sidebar']>
    'LazySidebarContent': LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarContent']>
    'LazySidebarFooter': LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarFooter']>
    'LazySidebarGroup': LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarGroup']>
    'LazySidebarGroupAction': LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarGroupAction']>
    'LazySidebarGroupContent': LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarGroupContent']>
    'LazySidebarGroupLabel': LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarGroupLabel']>
    'LazySidebarHeader': LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarHeader']>
    'LazySidebarInput': LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarInput']>
    'LazySidebarInset': LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarInset']>
    'LazySidebarMenu': LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarMenu']>
    'LazySidebarMenuAction': LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarMenuAction']>
    'LazySidebarMenuBadge': LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarMenuBadge']>
    'LazySidebarMenuButton': LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarMenuButton']>
    'LazySidebarMenuItem': LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarMenuItem']>
    'LazySidebarMenuSkeleton': LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarMenuSkeleton']>
    'LazySidebarMenuSub': LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarMenuSub']>
    'LazySidebarMenuSubButton': LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarMenuSubButton']>
    'LazySidebarMenuSubItem': LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarMenuSubItem']>
    'LazySidebarProvider': LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarProvider']>
    'LazySidebarRail': LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarRail']>
    'LazySidebarSeparator': LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarSeparator']>
    'LazySidebarTrigger': LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarTrigger']>
    'LazySkeleton': LazyComponent<typeof import("../src/components/ui/skeleton/index")['Skeleton']>
    'LazyTable': LazyComponent<typeof import("../src/components/ui/table/index")['Table']>
    'LazyTableBody': LazyComponent<typeof import("../src/components/ui/table/index")['TableBody']>
    'LazyTableCaption': LazyComponent<typeof import("../src/components/ui/table/index")['TableCaption']>
    'LazyTableCell': LazyComponent<typeof import("../src/components/ui/table/index")['TableCell']>
    'LazyTableEmpty': LazyComponent<typeof import("../src/components/ui/table/index")['TableEmpty']>
    'LazyTableFooter': LazyComponent<typeof import("../src/components/ui/table/index")['TableFooter']>
    'LazyTableHead': LazyComponent<typeof import("../src/components/ui/table/index")['TableHead']>
    'LazyTableHeader': LazyComponent<typeof import("../src/components/ui/table/index")['TableHeader']>
    'LazyTableRow': LazyComponent<typeof import("../src/components/ui/table/index")['TableRow']>
    'LazyFormControl': LazyComponent<typeof import("../src/components/ui/form/index")['FormControl']>
    'LazyFormDescription': LazyComponent<typeof import("../src/components/ui/form/index")['FormDescription']>
    'LazyFormItem': LazyComponent<typeof import("../src/components/ui/form/index")['FormItem']>
    'LazyFormLabel': LazyComponent<typeof import("../src/components/ui/form/index")['FormLabel']>
    'LazyFormMessage': LazyComponent<typeof import("../src/components/ui/form/index")['FormMessage']>
    'LazyFORMITEMINJECTIONKEY': LazyComponent<typeof import("../src/components/ui/form/index")['FORM_ITEM_INJECTION_KEY']>
    'LazyForm': LazyComponent<typeof import("../src/components/ui/form/index")['Form']>
    'LazyFormField': LazyComponent<typeof import("../src/components/ui/form/index")['FormField']>
    'LazyFormFieldArray': LazyComponent<typeof import("../src/components/ui/form/index")['FormFieldArray']>
    'LazyDropdownMenu': LazyComponent<typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenu']>
    'LazyDropdownMenuCheckboxItem': LazyComponent<typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuCheckboxItem']>
    'LazyDropdownMenuContent': LazyComponent<typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuContent']>
    'LazyDropdownMenuGroup': LazyComponent<typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuGroup']>
    'LazyDropdownMenuItem': LazyComponent<typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuItem']>
    'LazyDropdownMenuLabel': LazyComponent<typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuLabel']>
    'LazyDropdownMenuRadioGroup': LazyComponent<typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuRadioGroup']>
    'LazyDropdownMenuRadioItem': LazyComponent<typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuRadioItem']>
    'LazyDropdownMenuSeparator': LazyComponent<typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuSeparator']>
    'LazyDropdownMenuShortcut': LazyComponent<typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuShortcut']>
    'LazyDropdownMenuSub': LazyComponent<typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuSub']>
    'LazyDropdownMenuSubContent': LazyComponent<typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuSubContent']>
    'LazyDropdownMenuSubTrigger': LazyComponent<typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuSubTrigger']>
    'LazyDropdownMenuTrigger': LazyComponent<typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuTrigger']>
    'LazyDropdownMenuPortal': LazyComponent<typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuPortal']>
    'LazyTooltip': LazyComponent<typeof import("../src/components/ui/tooltip/index")['Tooltip']>
    'LazyTooltipContent': LazyComponent<typeof import("../src/components/ui/tooltip/index")['TooltipContent']>
    'LazyTooltipProvider': LazyComponent<typeof import("../src/components/ui/tooltip/index")['TooltipProvider']>
    'LazyTooltipTrigger': LazyComponent<typeof import("../src/components/ui/tooltip/index")['TooltipTrigger']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const Alert: typeof import("../src/components/ui/alert/index")['Alert']
export const AlertDescription: typeof import("../src/components/ui/alert/index")['AlertDescription']
export const AlertTitle: typeof import("../src/components/ui/alert/index")['AlertTitle']
export const Avatar: typeof import("../src/components/ui/avatar/index")['Avatar']
export const AvatarFallback: typeof import("../src/components/ui/avatar/index")['AvatarFallback']
export const AvatarImage: typeof import("../src/components/ui/avatar/index")['AvatarImage']
export const Badge: typeof import("../src/components/ui/badge/index")['Badge']
export const Button: typeof import("../src/components/ui/button/index")['Button']
export const Card: typeof import("../src/components/ui/card/index")['Card']
export const CardContent: typeof import("../src/components/ui/card/index")['CardContent']
export const CardDescription: typeof import("../src/components/ui/card/index")['CardDescription']
export const CardFooter: typeof import("../src/components/ui/card/index")['CardFooter']
export const CardHeader: typeof import("../src/components/ui/card/index")['CardHeader']
export const CardTitle: typeof import("../src/components/ui/card/index")['CardTitle']
export const Collapsible: typeof import("../src/components/ui/collapsible/index")['Collapsible']
export const CollapsibleContent: typeof import("../src/components/ui/collapsible/index")['CollapsibleContent']
export const CollapsibleTrigger: typeof import("../src/components/ui/collapsible/index")['CollapsibleTrigger']
export const Input: typeof import("../src/components/ui/input/index")['Input']
export const Label: typeof import("../src/components/ui/label/index")['Label']
export const Separator: typeof import("../src/components/ui/separator/index")['Separator']
export const Sheet: typeof import("../src/components/ui/sheet/index")['Sheet']
export const SheetClose: typeof import("../src/components/ui/sheet/index")['SheetClose']
export const SheetContent: typeof import("../src/components/ui/sheet/index")['SheetContent']
export const SheetDescription: typeof import("../src/components/ui/sheet/index")['SheetDescription']
export const SheetFooter: typeof import("../src/components/ui/sheet/index")['SheetFooter']
export const SheetHeader: typeof import("../src/components/ui/sheet/index")['SheetHeader']
export const SheetTitle: typeof import("../src/components/ui/sheet/index")['SheetTitle']
export const SheetTrigger: typeof import("../src/components/ui/sheet/index")['SheetTrigger']
export const Sidebar: typeof import("../src/components/ui/sidebar/index")['Sidebar']
export const SidebarContent: typeof import("../src/components/ui/sidebar/index")['SidebarContent']
export const SidebarFooter: typeof import("../src/components/ui/sidebar/index")['SidebarFooter']
export const SidebarGroup: typeof import("../src/components/ui/sidebar/index")['SidebarGroup']
export const SidebarGroupAction: typeof import("../src/components/ui/sidebar/index")['SidebarGroupAction']
export const SidebarGroupContent: typeof import("../src/components/ui/sidebar/index")['SidebarGroupContent']
export const SidebarGroupLabel: typeof import("../src/components/ui/sidebar/index")['SidebarGroupLabel']
export const SidebarHeader: typeof import("../src/components/ui/sidebar/index")['SidebarHeader']
export const SidebarInput: typeof import("../src/components/ui/sidebar/index")['SidebarInput']
export const SidebarInset: typeof import("../src/components/ui/sidebar/index")['SidebarInset']
export const SidebarMenu: typeof import("../src/components/ui/sidebar/index")['SidebarMenu']
export const SidebarMenuAction: typeof import("../src/components/ui/sidebar/index")['SidebarMenuAction']
export const SidebarMenuBadge: typeof import("../src/components/ui/sidebar/index")['SidebarMenuBadge']
export const SidebarMenuButton: typeof import("../src/components/ui/sidebar/index")['SidebarMenuButton']
export const SidebarMenuItem: typeof import("../src/components/ui/sidebar/index")['SidebarMenuItem']
export const SidebarMenuSkeleton: typeof import("../src/components/ui/sidebar/index")['SidebarMenuSkeleton']
export const SidebarMenuSub: typeof import("../src/components/ui/sidebar/index")['SidebarMenuSub']
export const SidebarMenuSubButton: typeof import("../src/components/ui/sidebar/index")['SidebarMenuSubButton']
export const SidebarMenuSubItem: typeof import("../src/components/ui/sidebar/index")['SidebarMenuSubItem']
export const SidebarProvider: typeof import("../src/components/ui/sidebar/index")['SidebarProvider']
export const SidebarRail: typeof import("../src/components/ui/sidebar/index")['SidebarRail']
export const SidebarSeparator: typeof import("../src/components/ui/sidebar/index")['SidebarSeparator']
export const SidebarTrigger: typeof import("../src/components/ui/sidebar/index")['SidebarTrigger']
export const Skeleton: typeof import("../src/components/ui/skeleton/index")['Skeleton']
export const Table: typeof import("../src/components/ui/table/index")['Table']
export const TableBody: typeof import("../src/components/ui/table/index")['TableBody']
export const TableCaption: typeof import("../src/components/ui/table/index")['TableCaption']
export const TableCell: typeof import("../src/components/ui/table/index")['TableCell']
export const TableEmpty: typeof import("../src/components/ui/table/index")['TableEmpty']
export const TableFooter: typeof import("../src/components/ui/table/index")['TableFooter']
export const TableHead: typeof import("../src/components/ui/table/index")['TableHead']
export const TableHeader: typeof import("../src/components/ui/table/index")['TableHeader']
export const TableRow: typeof import("../src/components/ui/table/index")['TableRow']
export const FormControl: typeof import("../src/components/ui/form/index")['FormControl']
export const FormDescription: typeof import("../src/components/ui/form/index")['FormDescription']
export const FormItem: typeof import("../src/components/ui/form/index")['FormItem']
export const FormLabel: typeof import("../src/components/ui/form/index")['FormLabel']
export const FormMessage: typeof import("../src/components/ui/form/index")['FormMessage']
export const FORMITEMINJECTIONKEY: typeof import("../src/components/ui/form/index")['FORM_ITEM_INJECTION_KEY']
export const Form: typeof import("../src/components/ui/form/index")['Form']
export const FormField: typeof import("../src/components/ui/form/index")['FormField']
export const FormFieldArray: typeof import("../src/components/ui/form/index")['FormFieldArray']
export const DropdownMenu: typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenu']
export const DropdownMenuCheckboxItem: typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuCheckboxItem']
export const DropdownMenuContent: typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuContent']
export const DropdownMenuGroup: typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuGroup']
export const DropdownMenuItem: typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuItem']
export const DropdownMenuLabel: typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuLabel']
export const DropdownMenuRadioGroup: typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuRadioGroup']
export const DropdownMenuRadioItem: typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuRadioItem']
export const DropdownMenuSeparator: typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuSeparator']
export const DropdownMenuShortcut: typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuShortcut']
export const DropdownMenuSub: typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuSub']
export const DropdownMenuSubContent: typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuSubContent']
export const DropdownMenuSubTrigger: typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuSubTrigger']
export const DropdownMenuTrigger: typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuTrigger']
export const DropdownMenuPortal: typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuPortal']
export const Tooltip: typeof import("../src/components/ui/tooltip/index")['Tooltip']
export const TooltipContent: typeof import("../src/components/ui/tooltip/index")['TooltipContent']
export const TooltipProvider: typeof import("../src/components/ui/tooltip/index")['TooltipProvider']
export const TooltipTrigger: typeof import("../src/components/ui/tooltip/index")['TooltipTrigger']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyAlert: LazyComponent<typeof import("../src/components/ui/alert/index")['Alert']>
export const LazyAlertDescription: LazyComponent<typeof import("../src/components/ui/alert/index")['AlertDescription']>
export const LazyAlertTitle: LazyComponent<typeof import("../src/components/ui/alert/index")['AlertTitle']>
export const LazyAvatar: LazyComponent<typeof import("../src/components/ui/avatar/index")['Avatar']>
export const LazyAvatarFallback: LazyComponent<typeof import("../src/components/ui/avatar/index")['AvatarFallback']>
export const LazyAvatarImage: LazyComponent<typeof import("../src/components/ui/avatar/index")['AvatarImage']>
export const LazyBadge: LazyComponent<typeof import("../src/components/ui/badge/index")['Badge']>
export const LazyButton: LazyComponent<typeof import("../src/components/ui/button/index")['Button']>
export const LazyCard: LazyComponent<typeof import("../src/components/ui/card/index")['Card']>
export const LazyCardContent: LazyComponent<typeof import("../src/components/ui/card/index")['CardContent']>
export const LazyCardDescription: LazyComponent<typeof import("../src/components/ui/card/index")['CardDescription']>
export const LazyCardFooter: LazyComponent<typeof import("../src/components/ui/card/index")['CardFooter']>
export const LazyCardHeader: LazyComponent<typeof import("../src/components/ui/card/index")['CardHeader']>
export const LazyCardTitle: LazyComponent<typeof import("../src/components/ui/card/index")['CardTitle']>
export const LazyCollapsible: LazyComponent<typeof import("../src/components/ui/collapsible/index")['Collapsible']>
export const LazyCollapsibleContent: LazyComponent<typeof import("../src/components/ui/collapsible/index")['CollapsibleContent']>
export const LazyCollapsibleTrigger: LazyComponent<typeof import("../src/components/ui/collapsible/index")['CollapsibleTrigger']>
export const LazyInput: LazyComponent<typeof import("../src/components/ui/input/index")['Input']>
export const LazyLabel: LazyComponent<typeof import("../src/components/ui/label/index")['Label']>
export const LazySeparator: LazyComponent<typeof import("../src/components/ui/separator/index")['Separator']>
export const LazySheet: LazyComponent<typeof import("../src/components/ui/sheet/index")['Sheet']>
export const LazySheetClose: LazyComponent<typeof import("../src/components/ui/sheet/index")['SheetClose']>
export const LazySheetContent: LazyComponent<typeof import("../src/components/ui/sheet/index")['SheetContent']>
export const LazySheetDescription: LazyComponent<typeof import("../src/components/ui/sheet/index")['SheetDescription']>
export const LazySheetFooter: LazyComponent<typeof import("../src/components/ui/sheet/index")['SheetFooter']>
export const LazySheetHeader: LazyComponent<typeof import("../src/components/ui/sheet/index")['SheetHeader']>
export const LazySheetTitle: LazyComponent<typeof import("../src/components/ui/sheet/index")['SheetTitle']>
export const LazySheetTrigger: LazyComponent<typeof import("../src/components/ui/sheet/index")['SheetTrigger']>
export const LazySidebar: LazyComponent<typeof import("../src/components/ui/sidebar/index")['Sidebar']>
export const LazySidebarContent: LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarContent']>
export const LazySidebarFooter: LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarFooter']>
export const LazySidebarGroup: LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarGroup']>
export const LazySidebarGroupAction: LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarGroupAction']>
export const LazySidebarGroupContent: LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarGroupContent']>
export const LazySidebarGroupLabel: LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarGroupLabel']>
export const LazySidebarHeader: LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarHeader']>
export const LazySidebarInput: LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarInput']>
export const LazySidebarInset: LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarInset']>
export const LazySidebarMenu: LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarMenu']>
export const LazySidebarMenuAction: LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarMenuAction']>
export const LazySidebarMenuBadge: LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarMenuBadge']>
export const LazySidebarMenuButton: LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarMenuButton']>
export const LazySidebarMenuItem: LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarMenuItem']>
export const LazySidebarMenuSkeleton: LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarMenuSkeleton']>
export const LazySidebarMenuSub: LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarMenuSub']>
export const LazySidebarMenuSubButton: LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarMenuSubButton']>
export const LazySidebarMenuSubItem: LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarMenuSubItem']>
export const LazySidebarProvider: LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarProvider']>
export const LazySidebarRail: LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarRail']>
export const LazySidebarSeparator: LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarSeparator']>
export const LazySidebarTrigger: LazyComponent<typeof import("../src/components/ui/sidebar/index")['SidebarTrigger']>
export const LazySkeleton: LazyComponent<typeof import("../src/components/ui/skeleton/index")['Skeleton']>
export const LazyTable: LazyComponent<typeof import("../src/components/ui/table/index")['Table']>
export const LazyTableBody: LazyComponent<typeof import("../src/components/ui/table/index")['TableBody']>
export const LazyTableCaption: LazyComponent<typeof import("../src/components/ui/table/index")['TableCaption']>
export const LazyTableCell: LazyComponent<typeof import("../src/components/ui/table/index")['TableCell']>
export const LazyTableEmpty: LazyComponent<typeof import("../src/components/ui/table/index")['TableEmpty']>
export const LazyTableFooter: LazyComponent<typeof import("../src/components/ui/table/index")['TableFooter']>
export const LazyTableHead: LazyComponent<typeof import("../src/components/ui/table/index")['TableHead']>
export const LazyTableHeader: LazyComponent<typeof import("../src/components/ui/table/index")['TableHeader']>
export const LazyTableRow: LazyComponent<typeof import("../src/components/ui/table/index")['TableRow']>
export const LazyFormControl: LazyComponent<typeof import("../src/components/ui/form/index")['FormControl']>
export const LazyFormDescription: LazyComponent<typeof import("../src/components/ui/form/index")['FormDescription']>
export const LazyFormItem: LazyComponent<typeof import("../src/components/ui/form/index")['FormItem']>
export const LazyFormLabel: LazyComponent<typeof import("../src/components/ui/form/index")['FormLabel']>
export const LazyFormMessage: LazyComponent<typeof import("../src/components/ui/form/index")['FormMessage']>
export const LazyFORMITEMINJECTIONKEY: LazyComponent<typeof import("../src/components/ui/form/index")['FORM_ITEM_INJECTION_KEY']>
export const LazyForm: LazyComponent<typeof import("../src/components/ui/form/index")['Form']>
export const LazyFormField: LazyComponent<typeof import("../src/components/ui/form/index")['FormField']>
export const LazyFormFieldArray: LazyComponent<typeof import("../src/components/ui/form/index")['FormFieldArray']>
export const LazyDropdownMenu: LazyComponent<typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenu']>
export const LazyDropdownMenuCheckboxItem: LazyComponent<typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuCheckboxItem']>
export const LazyDropdownMenuContent: LazyComponent<typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuContent']>
export const LazyDropdownMenuGroup: LazyComponent<typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuGroup']>
export const LazyDropdownMenuItem: LazyComponent<typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuItem']>
export const LazyDropdownMenuLabel: LazyComponent<typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuLabel']>
export const LazyDropdownMenuRadioGroup: LazyComponent<typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuRadioGroup']>
export const LazyDropdownMenuRadioItem: LazyComponent<typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuRadioItem']>
export const LazyDropdownMenuSeparator: LazyComponent<typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuSeparator']>
export const LazyDropdownMenuShortcut: LazyComponent<typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuShortcut']>
export const LazyDropdownMenuSub: LazyComponent<typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuSub']>
export const LazyDropdownMenuSubContent: LazyComponent<typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuSubContent']>
export const LazyDropdownMenuSubTrigger: LazyComponent<typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuSubTrigger']>
export const LazyDropdownMenuTrigger: LazyComponent<typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuTrigger']>
export const LazyDropdownMenuPortal: LazyComponent<typeof import("../src/components/ui/dropdown-menu/index")['DropdownMenuPortal']>
export const LazyTooltip: LazyComponent<typeof import("../src/components/ui/tooltip/index")['Tooltip']>
export const LazyTooltipContent: LazyComponent<typeof import("../src/components/ui/tooltip/index")['TooltipContent']>
export const LazyTooltipProvider: LazyComponent<typeof import("../src/components/ui/tooltip/index")['TooltipProvider']>
export const LazyTooltipTrigger: LazyComponent<typeof import("../src/components/ui/tooltip/index")['TooltipTrigger']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
