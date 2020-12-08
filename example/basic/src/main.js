import App from './app'

const APP_ROOT = document.getElementById('app-root')

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', onLoad, false)
} else {
  onLoad()
}

function onLoad () {
  render(App(), APP_ROOT)
}

function render (renderedElement, node) {
  const nextNode = node.cloneNode(false)
  nextNode.appendChild(renderedElement)
  node.parentNode.replaceChild(nextNode, node)
}
