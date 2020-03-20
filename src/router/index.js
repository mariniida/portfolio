import Vue from 'vue'
import Router from 'vue-router'
import AboutMe from '@/views/AboutMe'
import Contact from '@/views/Contact'
import Work from '@/views/Work'
import Works from '@/views/workPreviews'
import NotFound from '@/views/NotFound'
import Landing from '@/views/LP'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { path: '/landing' }
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    },
    {
      path: '/landing',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/aboutme',
      name: 'AboutMe',
      component: AboutMe
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/work',
      name: 'Works',
      component: Works
    },
    {
      path: '/work/:uid',
      name: 'work',
      component: Work
  }]
})
