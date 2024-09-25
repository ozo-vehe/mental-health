import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';
import ServiceView from '../views/ServiceView.vue';
import StoriesView from '../views/StoriesView.vue';
import ResourcesView from '../views/ResourcesView.vue';

const router = createRouter({
  linkActiveClass: "text-mh_dark_text",
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/services',
      name: 'services',
      component: ServiceView,
    },
    {
      path: '/stories',
      name: 'stories',
      component: StoriesView,
    },
    {
      path: '/resources',
      name: 'resources',
      component: ResourcesView,
    }
  ]
})

export default router
