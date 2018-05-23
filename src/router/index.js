import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: '/vue-prerender-plugin-demo/',
  routes: [
    {
      path: '/initialize',
      name: 'Initialize',
      component: () => import('@/pages/Initialize')
    },

    {
      path: '/transition-group',
      name: 'TransitionGroup',
      component: () => import('@/pages/TransitionGroup')
    },
    {
      path: '/parent',
      name: 'Parent',
      component: () => import('@/pages/Parent'),
      children: [
        {
          path: 'detail',
          name: 'Detail',
          component: () => import('@/pages/Detail')
        },
        {
          path: 'child',
          name: 'Child',
          component: () => import('@/pages/Child')
        }
      ]
    },
    {
      path: '/',
      name: 'Default',
      component: () => import('@/pages/Home')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/pages/Home')
    },
    {
      path: '/user/:id',
      name: 'User',
      component: () => import('@/pages/User'),
      props: true
    },
    {
      path: '/article/:id',
      name: 'Article',
      component: () => import('@/pages/Article'),
      props: true
    },
    {
      path: '/user/:id/view/:otherId',
      name: 'User-View',
      component: () => import('@/pages/UserView'),
      props: true
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(router)
  if ((from.matched && from.matched.length !== 0) || to.path === '/initialize' || Number.parseInt(sessionStorage.getItem('history.length')) === history.length) {
    next()
  } else {
    sessionStorage.setItem('path', to.fullPath)
    next({replace: true, path: '/initialize'})
  }

  document.title = to.name
})

export default router
