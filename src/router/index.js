import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/Home',
  name: 'Home',
  component: Home,
  children: [{
    path: '/index',
    name: 'index',
    component: () => import('../components/tabBer/index.vue')
  },
  {
    path: '/course',
    name: 'course',
    component: () => import('../components/tabBer/course.vue')
  }, {
    path: '/practice',
    name: 'practice',
    component: () => import('../components/tabBer/practice.vue')
  }, {
    path: '/record',
    name: 'record',
    component: () => import('../components/tabBer/record.vue')
  }, {
    path: '/user',
    name: 'user',
    component: () => import('../components/tabBer/user.vue')
  }
  ]
  // beforeEnter: (to, from, next) => {
  //   if () {
  //     next()
  //   } else {
  //     next('/login')
  //   }
  // }
}, {
  path: '/login',
  name: 'login',
  component: () => import('../components/Login/login.vue')
}, {
  path: '/sms-login',
  name: 'sms-login',
  component: () => import('../components/Login/sms-login.vue')
} //, {
//   path: '/',
//   redirect: 'login'
//  },
, {
  path: '/detail/:id',
  name: 'detail',
  component: () => import('../components/detail/detail.vue'),
  meta: {
    title: '课程详情页'
  }
}

]

const router = new VueRouter({
  routes
})

export default router