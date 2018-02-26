import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import About from '@/pages/about'
import Course from '@/pages/course'
import Teacher from '@/pages/teacher'
import News from '@/pages/news'
import Occupation from '@/pages/occupation'
import Career from '@/pages/career'
import Enrollment from '@/pages/enrollment'
import Contact from '@/pages/contact'
import Download from '@/pages/download'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Index
    }, {
      path: '/about',
      name: 'About',
      component: About
    }, {
      path: '/course-category/package-course',
      name: 'Course',
      component: Course
    }, {
      path: '/teacher',
      name: 'Teacher',
      component: Teacher
    }, {
      path: '/news',
      name: 'News',
      component: News
    }, {
      path: '/xueyuanjiuye',
      name: 'Occupation',
      component: Occupation
    }, {
      path: '/career',
      name: 'Career',
      component: Career
    }, {
      path: '/zxbm',
      name: 'Enrollment',
      component: Enrollment
    }, {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }, {
      path: '/download',
      name: 'Download',
      component: Download
    }
  ]
})
