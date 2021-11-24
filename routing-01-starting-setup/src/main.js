import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const router = createRouter({
  history: createWebHistory(), // save history of pages that user entered, for example it used when user want to go back
  routes: [
    // { path: '/', redirect: '/teams' },
    {
      path: '/teams',
      alias: '/',
      component: TeamsList,
    }, // our-domain.com/teams => TeamsList
    {
      path: '/users',
      component: UsersList,
    }, // out-domain.com/users => UsersList
    {
      path: '/teams/:teamId',
      component: TeamMembers,
    }, // out-domain.com/users => UsersList
    {
      path: '/:notFound(.*)',
      redirect: '/',
    },
  ],
  linkActiveClass: 'active', // CSS perpective: 'route-link-active' to 'active'
});

const app = createApp(App);

app.use(router);

app.mount('#app');
