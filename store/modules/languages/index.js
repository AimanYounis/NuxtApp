const state = () => ({
  locales: [
    {
      lang: 'en',
      direction: 'ltr'
    }
    ,
    {
      lang: 'ar',
      direction: 'rtl'
    },
    {
      lang: 'he',
      direction: 'rtl'
    }
  ],
  locale:
  {
    lang: 'en',
    direction: 'ltr'
  }
})

const mutations = {
  SET_LANG(state, payload) {
      state.locale.lang = payload.lang;
      state.locale.direction = payload.direction;
  }
}

const actions = {
  setLanguage({ commit }, payload) {
    commit('SET_LANG', payload);
  }
}

const getters = {
  getCurrentLanguage: (state) => {
    return state.locale.lang;
  },
  getCurrentLanguageDirection:(state)=>{
    return state.locale.direction;
  },
  getLanguages: (state) => {
    return state.locales;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
};