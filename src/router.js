import { createRouter, createWebHistory } from 'vue-router';
import NotFound from './pages/NotFound.vue';
import RequestsRecieved from './pages/requests/RequestsRecieved.vue';
import CoachRegisteration from './pages/coaches/CoachRegisteration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import CoachDetail from './pages/coaches/CoachDetail.vue';
import Coacheslist from './pages/coaches/Coacheslist.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: Coacheslist },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true, // allows us to access the id as a prop in the component
      children: [{ path: 'contact', component: ContactCoach }],
    },
    { path: '/register', component: CoachRegisteration },
    { path: '/requests', component: RequestsRecieved },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
