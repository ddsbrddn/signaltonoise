import Vue from 'vue';
import Router from 'vue-router';

import Inspire from '~/pages/inspire';

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Inspire
      }
    ]
  });
}
