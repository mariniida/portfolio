import Vue from 'vue'
import Router from 'vue-router'
import LP from '@/components/LP'
import Works from '@/components/Works'
import AboutMe from '@/components/AboutMe'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
    }
  ]
})
