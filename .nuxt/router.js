import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _6c2637fb = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */))
const _6c1728ba = () => interopDefault(import('..\\pages\\careers.vue' /* webpackChunkName: "pages_careers" */))
const _650ab8a8 = () => interopDefault(import('..\\pages\\contactus.vue' /* webpackChunkName: "pages_contactus" */))
const _05979721 = () => interopDefault(import('..\\pages\\ourVehicles.vue' /* webpackChunkName: "pages_ourVehicles" */))
const _e843da80 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/about",
      component: _6c2637fb,
      name: "about"
    }, {
      path: "/careers",
      component: _6c1728ba,
      name: "careers"
    }, {
      path: "/contactus",
      component: _650ab8a8,
      name: "contactus"
    }, {
      path: "/ourVehicles",
      component: _05979721,
      name: "ourVehicles"
    }, {
      path: "/",
      component: _e843da80,
      name: "index"
    }],

    fallback: false
  })
}
