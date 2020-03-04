import Vue from 'vue'
import Router from 'vue-router'

import LP from '@/views/LP'
import AboutMe from '@/views/AboutMe'
import Contact from '@/views/Contact'
import Page from '@/views/Page'
import Work from '@/views/Work'
import Works from '@/views/workPreviews'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/Landing',
      name: 'LandingPage',
      component: LP
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
      path: '/page/:uid',
      name: 'page',
      component: Page
    },
    {
      path: '/works',
      name: 'Works',
      component: Works
    },
    {
      path: '/works/:uid',
      name: 'work',
      component: Work
  }
  ]
})
