import { createPinia } from 'pinia'
import { definePlugin } from '@app-research/origin-vue'

export default definePlugin({
  name: 'pinia',
  load: ({ app, initialState }) => {
    const pinia = createPinia()
    app.use(pinia)

    if (import.meta.env.SSR) {
      // this will be stringified and set to window.__INITIAL_STATE__
      initialState.pinia = pinia.state.value
    } else {
      // on the client side, we restore the state
      pinia.state.value = initialState.pinia || {}
    }
  }
})
