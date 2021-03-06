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
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      alias: '/',
      component: TeamsList,
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
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
  linkActiveClass: 'active', // CSS perpective: 'route-link-active' to 'active',
  scrollBehavior(to, from, savedPosition) {
    return { left: 0, top: 0 };
  },
});

router.beforeEach(function (to, from, next) {
  next();
});

const app = createApp(App);

app.use(router);

app.mount('#app');
