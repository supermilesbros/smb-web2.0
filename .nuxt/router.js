import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1d224b61 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _6025d5fe = () => interopDefault(import('..\\pages\\blog.vue' /* webpackChunkName: "pages/blog" */))
const _308322f3 = () => interopDefault(import('..\\pages\\blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _6039cb74 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _25c4cded = () => interopDefault(import('..\\pages\\project.vue' /* webpackChunkName: "pages/project" */))
const _29c2883c = () => interopDefault(import('..\\pages\\project-details.vue' /* webpackChunkName: "pages/project-details" */))
const _2a4dc8ee = () => interopDefault(import('..\\pages\\service.vue' /* webpackChunkName: "pages/service" */))
const _4b49ad7e = () => interopDefault(import('..\\pages\\service-details.vue' /* webpackChunkName: "pages/service-details" */))
const _3cda2626 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _1d224b61,
    name: "about"
  }, {
    path: "/blog",
    component: _6025d5fe,
    name: "blog"
  }, {
    path: "/blog-details",
    component: _308322f3,
    name: "blog-details"
  }, {
    path: "/contact",
    component: _6039cb74,
    name: "contact"
  }, {
    path: "/project",
    component: _25c4cded,
    name: "project"
  }, {
    path: "/project-details",
    component: _29c2883c,
    name: "project-details"
  }, {
    path: "/service",
    component: _2a4dc8ee,
    name: "service"
  }, {
    path: "/service-details",
    component: _4b49ad7e,
    name: "service-details"
  }, {
    path: "/",
    component: _3cda2626,
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
