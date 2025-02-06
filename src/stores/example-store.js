import { defineStore, acceptHMRUpdate } from 'pinia'

export const useCounterStore = defineStore('store', {
  state: () => ({
    counter: 0,
    isSideMenuOpen: true,
  }),

  getters: {
    doubleCount: (state) => state.counter * 2,
    getSideMenuOpen: (state) => state.isSideMenuOpen,
  },

  actions: {
    increment() {
      this.counter++
    },
    toggleSideMenu() {
      this.isSideMenuOpen = !this.isSideMenuOpen
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
}
