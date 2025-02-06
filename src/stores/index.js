import { defineStore } from '#q-app/wrappers'
import { createPinia } from 'pinia'

import { useCounterStore } from './example-store'
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default defineStore((/* { ssrContext } */) => {
  const pinia = createPinia()

  // const counterStore = useCounterStore(pinia)

  // console.log('Counter:', counterStore.counter)
  // console.log('Is Side Menu Open:', counterStore.isSideMenuOpen)
  // You can add Pinia plugins here
  // pinia.use(SomePiniaPlugin)

  return pinia
})
