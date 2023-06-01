import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ebf88dea = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _6beb0b14 = () => interopDefault(import('..\\pages\\blog.vue' /* webpackChunkName: "pages/blog" */))
const _dfb63bee = () => interopDefault(import('..\\pages\\blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _db153b94 = () => interopDefault(import('..\\pages\\brand-identity.vue' /* webpackChunkName: "pages/brand-identity" */))
const _1a76769e = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _79ebacb6 = () => interopDefault(import('..\\pages\\content-creation.vue' /* webpackChunkName: "pages/content-creation" */))
const _567c4824 = () => interopDefault(import('..\\pages\\marketing.vue' /* webpackChunkName: "pages/marketing" */))
const _3ffd0dd2 = () => interopDefault(import('..\\pages\\project.vue' /* webpackChunkName: "pages/project" */))
const _9a8ac5e8 = () => interopDefault(import('..\\pages\\project-details.vue' /* webpackChunkName: "pages/project-details" */))
const _d8fee94a = () => interopDefault(import('..\\pages\\seo.vue' /* webpackChunkName: "pages/seo" */))
const _b5d4729a = () => interopDefault(import('..\\pages\\service.vue' /* webpackChunkName: "pages/service" */))
const _12e58ea8 = () => interopDefault(import('..\\pages\\service-details.vue' /* webpackChunkName: "pages/service-details" */))
const _63ba47c0 = () => interopDefault(import('..\\pages\\web-development.vue' /* webpackChunkName: "pages/web-development" */))
const _ac88d860 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _ebf88dea,
    name: "about"
  }, {
    path: "/blog",
    component: _6beb0b14,
    name: "blog"
  }, {
    path: "/blog-details",
    component: _dfb63bee,
    name: "blog-details"
  }, {
    path: "/brand-identity",
    component: _db153b94,
    name: "brand-identity"
  }, {
    path: "/contact",
    component: _1a76769e,
    name: "contact"
  }, {
    path: "/content-creation",
    component: _79ebacb6,
    name: "content-creation"
  }, {
    path: "/marketing",
    component: _567c4824,
    name: "marketing"
  }, {
    path: "/project",
    component: _3ffd0dd2,
    name: "project"
  }, {
    path: "/project-details",
    component: _9a8ac5e8,
    name: "project-details"
  }, {
    path: "/seo",
    component: _d8fee94a,
    name: "seo"
  }, {
    path: "/service",
    component: _b5d4729a,
    name: "service"
  }, {
    path: "/service-details",
    component: _12e58ea8,
    name: "service-details"
  }, {
    path: "/web-development",
    component: _63ba47c0,
    name: "web-development"
  }, {
    path: "/",
    component: _ac88d860,
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
