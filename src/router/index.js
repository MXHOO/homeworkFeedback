import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Login from '@/Layouts/Login/index.vue'
import Layout from '@/Layouts/Layout'
import createWork from '@/components/createWork/index.vue'
import userInfo from '@/components/userInfo/index.vue'
import statisticsData from '@/components/statisticsData/index.vue'
import editHomework from '@/components/createSubject/index.vue'
const routes = [{
  path: '/',
  component: Login
}, {
  path: '/home',
  component: Layout,
  children: [{
      path: '/work_lib',
      component: createWork
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
}, ]
const router = createRouter({
  routes: routes,
  history: createWebHashHistory(),
})

export {
  router
}