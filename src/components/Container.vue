<template>
  <div v-bind:class="'content-blocks ' + this.clickedMenu + showx">
    <div v-if="this.clickedMenu === 'about'">
      <About />
    </div>
    <div v-else-if="this.clickedMenu === 'portfolio'">
      <Portfolio />
    </div>
    <div v-else-if="this.clickedMenu === 'blog'">
      <Blog />
    </div>
    <div v-else>
      <Contact />
    </div>
  </div>
</template>

<script>
/* eslint-disable no-shadow,no-unused-vars */
import store from '@/store';
import { mapGetters } from 'vuex';
import About from './contents/About';
import Portfolio from './contents/Portfolio';
import Blog from './contents/Blog';
import Contact from './contents/Contact';

export default {
  name: 'Container',
  components: { About, Portfolio, Blog, Contact },
  computed: {
    ...mapGetters([
      'isMenuClicked',
      'clickedMenu',
    ]),
  },
  watch: {
    isMenuClicked() {
      this.showx = this.isMenuClicked ? ' showx' : '';
    },
  },
  store,
  data() {
    return {
      showx: '',
    };
  },
  methods: {
    closeMenu() {
      store.commit('menuClick');
    },
  },
};
</script>
