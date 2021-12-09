import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index.js';

const store = createStore({
    namespaced: true,
    modules: {
        coachesModule,
    }
});

export default store;