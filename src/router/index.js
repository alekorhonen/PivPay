import Vue from 'vue'
import Router from 'vue-router'
import Overview from '@/components/views/Overview'
import Transactions from '@/components/views/Transactions'
import Coupons from '@/components/views/Coupons'
import Support from '@/components/views/Support'
import Settings from '@/components/views/Settings'
import Register from '@/components/views/Register'
import Login from '@/components/views/Login'

//View components
import Coupon from '@/components/views/view-components/Coupon'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Overview',
      component: Overview,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/transactions',
      name: 'Transactions',
      component: Transactions,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/coupons',
      name: 'Coupons',
      component: Coupons,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/coupons/new',
      component: Coupon,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/support',
      name: 'Support',
      component: Support,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(rec => rec.meta.requiresAuth)) {
    if(sessionStorage.getItem('sessionToken')) {
      next()
    } else {
      next({ name: 'Login' })
    }
  } else {
    if(!sessionStorage.getItem('sessionToken')) {
      next()
    } else {
      next({ name: 'Overview' })
    }
  }
})