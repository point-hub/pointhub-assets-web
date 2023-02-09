<template>
  <!-- Main Sidebar -->
  <div class="sidebar">
    <div ref="sidebarContainerRef">
      <!-- Sidebar Panel -->
      <div class="sidebar-panel">
        <div class="sidebar-panel-container">
          <!-- Sidebar Panel Header -->
          <div class="sidebar-panel-header">
            <a href="https://www.pointhub.net" class="text-base tracking-wider dark:text-slate-100">
              <img v-if="!isDark" src="@/assets/logo/primary/logo.png" alt="Pointhub" />
              <img v-else src="@/assets/logo/white/logo.png" alt="Pointhub" />
            </a>
            <button class="mx-2 lg:hidden" @click="sidebarStore.closeSidebar()">
              <fa-icon icon="fa-solid fa-angle-left w-5 h-5 text-gray-200"></fa-icon>
            </button>
          </div>

          <!-- Sidebar Panel Body -->
          <div class="sidebar-panel-body">
            <ul class="flex flex-1 flex-col px-4">
              <li v-for="menu in activeShortcut.menu" :key="menu.name">
                <!-- Sub Menu Wrapper -->
                <button
                  v-if="menu.submenu"
                  class="menu-link-button font-extrabold uppercase !text-lg"
                  :class="{
                    'dark:!text-white': route.meta.menu === menu.meta,
                    'dark:!text-slate-100/80': route.meta.menu !== menu.meta,
                  }"
                >
                  {{ menu.name }}
                </button>
                <!-- Internal Path -->
                <router-link
                  v-if="menu.path"
                  :to="menu.path as string"
                  class="menu-link-button"
                  :class="{
                    'dark:!text-white': route.meta.menu === menu.meta,
                    'dark:!text-slate-100/80': route.meta.menu !== menu.meta,
                  }"
                >
                  {{ menu.name }}
                </router-link>
                <!-- External Link -->
                <a
                  v-if="menu.link"
                  :href="menu.link as string"
                  target="_blank"
                  class="menu-link-button dark:!text-slate-200/80"
                >
                  {{ menu.name }}
                  <fa-icon icon="fa-solid fa-up-right-from-square" />
                </a>
                <div v-if="menu.submenu && menu.submenu.length > 0">
                  <ul
                    class="transition-all transform-gpu"
                    :class="{
                      'max-h-[1000px] overflow-auto p-1 rounded-lg': menu.active,
                      'max-h-0 overflow-hidden': !menu.active,
                    }"
                  >
                    <li v-for="submenu in menu.submenu" :key="submenu.name" class="overflow-hidden">
                      <router-link :to="submenu.path as string" class="submenu-link">
                        <div class="flex items-center space-x-2">
                          <span
                            :class="{
                              'dark:!text-white font-bold': route.meta.submenu === submenu.meta,
                              'dark:!text-slate-100/80': route.meta.submenu !== submenu.meta,
                            }"
                          >
                            {{ submenu.name }}
                          </span>
                        </div>
                      </router-link>
                      <div v-if="submenu.separator" class="submenu-separator"></div>
                    </li>
                  </ul>
                </div>
                <div v-if="menu.separator" class="menu-separator"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useRoute } from 'vue-router'
import { useSidebar } from '@/composable/sidebar'
import { useSidebarStore } from '@/stores/sidebar'
import { useMobileBreakpoint } from '@/composable/mobile-breakpoint'
import { isDark } from '@/composable/dark-mode'

const sidebarContainerRef = ref(null)

onClickOutside(sidebarContainerRef, () => {
  if (isMobileBreakpoint()) {
    sidebarStore.closeSidebar()
  }
})

const route = useRoute()
const sidebarStore = useSidebarStore()
const { isMobileBreakpoint } = useMobileBreakpoint()
const { activeShortcut } = useSidebar()
</script>
