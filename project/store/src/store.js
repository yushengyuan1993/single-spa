export const createApp = (container) => {
  container = document.createElement('div')
  container.id = 'mmc-site-store'
  container.innerHTML = 'Hello mmc-site-store'

  return container
}

export const destroyApp = (container) => {
  document.body.removeChild(container)
}
