import { store } from 'quasar/wrappers';
import Vuex from 'vuex';

import chatModule from './Chat';
import authModule from './Auth';
import type { AuthStateInterface } from './Auth/state';
import type { ChatStateInterface } from './Chat/state';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface StateInterface {
  // Define your own store structure, using submodules if needed
  // example: ExampleStateInterface;
  // Declared as unknown to avoid linting issue. Best to strongly type as per the line above.
  chatModule: ChatStateInterface;
  authModule: AuthStateInterface;
}

export default store(({ Vue }) => {
  Vue.use(Vuex);

  const Store = new Vuex.Store<StateInterface>({
    modules: {
      chatModule,
      authModule,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: !!process.env.DEBUGGING,
  });

  return Store;
});
