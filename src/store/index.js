/* eslint-disable no-shadow */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  isMenuClicked: false,
  isVisible: '',
  clickedMenu: '',
};

const mutations = {
  menuClick(state, menuName) {
    if (state.isMenuClicked) {
      if (state.clickedMenu !== '') {
        state.clickedMenu = menuName;
      } else {
        state.isMenuClicked = false;
        state.clickedMenu = '';
      }
    } else {
      state.isMenuClicked = true;
      state.clickedMenu = menuName;
    }
  },
  closeMenu(state) {
    state.isMenuClicked = false;
    state.clickedMenu = '';
  },
};

const getters = {
  isMenuClicked: state => state.isMenuClicked,
  clickedMenu: state => state.clickedMenu,
};

const actions = {
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});

