import pinia from './pinia.plugin'
import router from '../router'

export default function registerPlugins (app: any): void {
  app
    .use(pinia)
    .use(router)
}
