import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Signup from '@/components/Signup';
import Dashboard from '@/components/Dashboard';
import CondoAdd from '@/components/CondoAdd';
import CondoView from '@/components/CondoView';
import HydroAdd from '@/components/HydroAdd';
import HydroView from '@/components/HydroView';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/condo/add',
      name: 'CondoAdd',
      component: CondoAdd,
    },
    {
      path: '/condo/:id',
      name: 'Condo',
      component: CondoView,
    },
    {
      path: '/condo/:id/add',
      name: 'HydroAdd',
      component: HydroAdd,
    },
    {
      path: '/hydro/:id',
      name: 'Hydro',
      component: HydroView,
    },
  ],
});
