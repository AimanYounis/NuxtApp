import Vuex from 'vuex';
import languages from './modules/languages';

const createStore = () => {
    return new Vuex.Store({
      namespaced: true,
      modules: {
        languages
      }
    });
  };
  
  export default createStore