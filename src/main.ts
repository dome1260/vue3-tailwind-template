import { createApp } from 'vue'
import App from './App.vue'

import registerPlugins from './plugins'

import './style.css'
import '@mdi/font/css/materialdesignicons.css'

const app: any = createApp(App)

registerPlugins(app)
app.mount('#app')
