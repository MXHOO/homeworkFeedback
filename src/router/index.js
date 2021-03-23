import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import userInfo from '@/components/userInfo/index.vue'
import statisticsData from '@/components/statisticsData/index.vue'
import editHomework from '@/components/createSubject/index.vue'
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
      component: statisticsData
    },
    {
      path: '/user_info',
      component: userInfo
    },
    {
      path: '/create_subject/:homeworkId',
      component: editHomework
    }
  ]
}, { path: '/:catchAll(.*)', component: () => import('@/views/error-page/404.vue'), meta: { title: '404' }}
]

const router = createRouter({
  routes: routes,
  history: createWebHashHistory(),
})

export {
  router
}