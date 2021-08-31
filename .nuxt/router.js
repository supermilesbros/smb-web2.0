import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _bc2bfd34 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _c386694e = () => interopDefault(import('..\\pages\\blog.vue' /* webpackChunkName: "pages/blog" */))
const _2b288d4e = () => interopDefault(import('..\\pages\\blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _5c27d78e = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _d111d29c = () => interopDefault(import('..\\pages\\project.vue' /* webpackChunkName: "pages/project" */))
const _3a9b20b2 = () => interopDefault(import('..\\pages\\project-details.vue' /* webpackChunkName: "pages/project-details" */))
const _5c8b644e = () => interopDefault(import('..\\pages\\service.vue' /* webpackChunkName: "pages/service" */))
const _42dd6143 = () => interopDefault(import('..\\pages\\service-details.vue' /* webpackChunkName: "pages/service-details" */))
const _7cbc47aa = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _bc2bfd34,
    name: "about"
  }, {
    path: "/blog",
    component: _c386694e,
    name: "blog"
  }, {
    path: "/blog-details",
    component: _2b288d4e,
    name: "blog-details"
  }, {
    path: "/contact",
    component: _5c27d78e,
    name: "contact"
  }, {
    path: "/project",
    component: _d111d29c,
    name: "project"
  }, {
    path: "/project-details",
    component: _3a9b20b2,
    name: "project-details"
  }, {
    path: "/service",
    component: _5c8b644e,
    name: "service"
  }, {
    path: "/service-details",
    component: _42dd6143,
    name: "service-details"
  }, {
    path: "/",
    component: _7cbc47aa,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
