import { computed } from 'vue'
import { useCounterStore } from 'src/stores/example-store'
export function useUI() {
  const store = useCounterStore()
  const sideMenuOpen = computed({
    get: () => store.getSideMenuOpen,
    set: (value) => {
      store.isSideMenuOpen = value
    },
  })
  function toggleSideMenu() {
    store.toggleSideMenu()
  }

  return {
    toggleSideMenu,
    sideMenuOpen,
  }
}
