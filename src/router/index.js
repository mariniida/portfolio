import Vue from 'vue'
import Router from 'vue-router'
import LP from '@/components/LP'
import Works from '@/components/Works'
import AboutMe from '@/components/AboutMe'
import Contact from '@/components/Contact'

import Page from '@/views/Page'
import Work from '@/views/Work'

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
      path: '/works',
      name: 'Works',
      component: Works
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
      path: '/work/:uid',
      name: 'work',
      component: Work
  }
  ]
})
