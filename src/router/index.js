import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
const routes = [
  {
  path: '/login',
  name: 'login',
  component: () => import('@/Layouts/Login/index.vue')
}, {
  path: '/',
  component: () => import('@/Layouts/Layout'),
  redirect:'/work_lib',
  meta: {title: '作业反馈系统'},
  children: [
    {
      path: '/work_lib',
      component: () => import('@/components/createWork/index.vue')
    },
    {
      path: '/data_statistics',
      component: () => import('@/components/statisticsData/index.vue')
    },
    {
      path: '/user_info',
      component: () => import('@/components/userInfo/index.vue')
    }
  ]
}, {
  path: '/create_subject/:homeworkId',
  component: () => import('@/components/createSubject/index.vue')
  },
{ path: '/:catchAll(.*)', component: () => import('@/views/error-page/404.vue'), meta: { title: '404' }}
]

const router = createRouter({
  routes: routes,
  history: createWebHashHistory(),
})

export {
  router
}