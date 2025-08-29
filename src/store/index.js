import { createStore } from 'vuex';
import coachesModule from './coaches/index.js';

const store = createStore({
  modules: {
    coaches: coachesModule, // this can be shortened if the key and value are the same
    //requestsModule,
  },
});
export default store;
