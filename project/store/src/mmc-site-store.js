import { createApp, destroyApp } from './store'

let appContainer = null

export async function bootstrap () {
  console.log('App 初始化')
}

export async function mount () {
  console.log('App 挂载')

  const app = createApp(appContainer)

  document.body.appendChild(app)
}

export async function unmount () {
  console.log('App 卸载')

  destroyApp(appContainer)
}
