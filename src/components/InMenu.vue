<template>
  <div v-bind:class="'inline-menu-container' + showx">
    <span class="status">I am available for freelance</span>
    <ul class="inline-menu">
      <li
        :class="'about menu-item ' + isActive('about', this.clickedMenu)"
        v-on:click="menuClick('about')"
      >Resume</li>
      <li
        :class="'portfolio menu-item ' + isActive('portfolio', this.clickedMenu)"
        v-on:click="menuClick('portolio')"
      >Portfolio</li>
      <li
        :class="'blog menu-item ' + isActive('blog', this.clickedMenu)"
        v-on:click="menuClick('blog')"
      >Blog</li>
      <li
        :class="'contact menu-item ' + isActive('contact', this.clickedMenu)"
        v-on:click="menuClick('contact')"
      >Contact</li>
      <li
        id="close" class="menu-item"
        v-on:click="closeMenu">
        <i class="ion-ios-close-empty"></i>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable no-shadow,no-unused-vars */
import store from '@/store';
import { mapGetters } from 'vuex';

export default {
  name: 'InMenu',
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
      store.commit('closeMenu');
    },
    isActive: (menuItem, clickedMenu) => {
      let output;
      if (clickedMenu === menuItem) {
        output = 'active';
      } else {
        output = '';
      }
      return output;
    },
    menuClick(menuName) {
      store.commit('menuClick', menuName);
    },
  },
};
</script>
