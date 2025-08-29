import { createStore } from 'vuex';
import coachesModule from './coaches/index.js';

const store = createStore({
  modules: {
    coaches: coachesModule, // this can be shortened if the key and value are the same
    //requestsModule,
  },
  state() {
    return {
      userId: 'c3', // temporary hardcoded user ID
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});
export default store;
