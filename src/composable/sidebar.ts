import type { RouteLocationNormalizedLoaded } from 'vue-router'
import type { ShortcutInterface, MenuInterface, SubmenuInterface } from '@/stores/sidebar-menu'
import { ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useSidebarStore } from '@/stores/sidebar'
import { useSidebarMenuStore } from '@/stores/sidebar-menu'
import { useMobileBreakpoint } from '@/composable/mobile-breakpoint'

export function useSidebar() {
  const sidebarStore = useSidebarStore()
  const sidebarMenuStore = useSidebarMenuStore()
  const route = useRoute()
  const router = useRouter()
  const { isMobileBreakpoint } = useMobileBreakpoint()

  onMounted(() => {
    setDefaultOpenSidebar()
  })

  // Close sidebar if change route in mobile
  watch(route, async () => {
    if (isMobileBreakpoint()) {
      sidebarStore.closeSidebar()
    }
  })

  /**
   * Set default open sidebar by breakpoint
   * sm, md, lg default sidebar is open
   * xl and 2xl default sidebar is closed
   */
  const setDefaultOpenSidebar = () => {
    if (isMobileBreakpoint()) {
      sidebarStore.closeSidebar()
    } else {
      sidebarStore.openSidebar()
    }
  }

  const onClickShortcut = (shortcut: MenuInterface) => {
    for (const sideMenuShortcut of sidebarMenuStore.shortcut) {
      if (sideMenuShortcut.meta === shortcut.meta) {
        sideMenuShortcut.active = true
        activeShortcut.value = sideMenuShortcut
      } else {
        sideMenuShortcut.active = false
      }

      // if sidebarMenuShortcut have a path, then redirect to that path
      if (sideMenuShortcut.meta === shortcut.meta && sideMenuShortcut.path) {
        router.replace(sideMenuShortcut.path)
      }
    }
  }

  const onClickMenu = (menu: MenuInterface) => {
    if (menu.submenu === undefined) {
      menu.active = true
    } else {
      menu.active = !menu.active
    }
  }

  const setActiveShortcut = (items: ShortcutInterface[], route: RouteLocationNormalizedLoaded): ShortcutInterface => {
    for (const item of items) {
      item.active = false
      if (item.menu && setActiveMenu(item.menu, route)) {
        item.active = true
        return item
      }
    }

    return items[0]
  }

  const setActiveMenu = (items: MenuInterface[], route: RouteLocationNormalizedLoaded): MenuInterface | undefined => {
    for (const item of items) {
      if (item.submenu === undefined) {
        item.active = false
      }

      if (item.submenu !== undefined && setActiveSubmenu(item.submenu, route)) {
        item.active = true
        return item.submenu !== undefined ? item : undefined
      }

      if (item.meta === route.meta.menu) {
        item.active = true
        return item
      }
    }
  }

  const setActiveSubmenu = (
    items: SubmenuInterface[],
    route: RouteLocationNormalizedLoaded
  ): SubmenuInterface | undefined => {
    for (const item of items) {
      item.active = false
      if (item.meta === route.meta.submenu) {
        item.active = true
        return item
      }
    }
  }

  /**
   * activeShortcut indicate which shortcut menu in sidebar is active,
   * if there is no active shortcut found, then first shortcut become active
   */
  const activeShortcut = ref(setActiveShortcut(sidebarMenuStore.shortcut, route))
  if (activeShortcut.value === undefined) {
    activeShortcut.value = sidebarMenuStore.shortcut[0]
  }

  return { onClickShortcut, onClickMenu, activeShortcut }
}
