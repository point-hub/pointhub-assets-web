import { ref } from 'vue'

const htmlTag = document.getElementsByTagName('html')[0]

export const isDark = ref(htmlTag.classList.contains('dark'))

export function useDarkMode() {
  const init = () => {
    // set default dark-mode to light
    if (!localStorage.getItem('dark-mode')) {
      localStorage.setItem('dark-mode', 'light')
      isDark.value = false
    }

    if (
      localStorage.getItem('dark-mode') === 'dark' ||
      (!('dark-mode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      isDark.value = true
    } else {
      document.documentElement.classList.remove('dark')
      isDark.value = false
    }
  }

  const toggleDarkMode = () => {
    if (htmlTag.classList.contains('dark')) {
      htmlTag.classList.remove('dark')
      localStorage.setItem('dark-mode', 'light')
      isDark.value = false
    } else {
      htmlTag.classList.add('dark')
      localStorage.setItem('dark-mode', 'dark')
      isDark.value = true
    }
  }

  return { init, toggleDarkMode }
}
