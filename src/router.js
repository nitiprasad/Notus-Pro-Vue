import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import AboutUs from './views/about-us'
import Home from './views/home'
import ResearchPublications from './views/research-publications'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'About Us',
      path: '/about-us',
      component: AboutUs,
    },
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: 'Research & Publications',
      path: '/research-publications',
      component: ResearchPublications,
    },
  ],
})
