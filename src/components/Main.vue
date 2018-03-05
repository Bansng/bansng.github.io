<template>
  <div>
    <InMenu/>
    <section class="home">
      <div class="bgScroll"></div>
      <div class="overlay opacity7"></div>
      <div v-bind:class="'name-block ' + reverse">
        <div v-bind:class="'name-block-container ' + reverse">
          <h1>Bansng</h1>
          <h2>Software Engineer</h2>
          <a class="btn btn-download">Download Resume</a>
          <ul class="social">
            <li><a href=""><i class="ion-social-facebook"></i></a></li>
            <li><a href=""><i class="ion-social-twitter"></i></a></li>
            <li><a href=""><i class="ion-social-googleplus"></i></a></li>
          </ul>
        </div>
      </div>
      <div v-bind:class="'menu-blocks ' + hidex">
        <Menu
          v-for="menu in menulist"
          v-bind:menuName="menu"
          v-bind:key="menu.id"
          v-on:click.native="menuClick(menu)"
        ></Menu>
      </div>
      <Container/>
    </section>
  </div>
</template>


<script>
import store from '@/store';
import { mapGetters } from 'vuex';
import Menu from './Menu';
import InMenu from './InMenu';
import Container from './Container';

export default {
  name: 'Main',
  components: { Menu, InMenu, Container },
  computed: {
    ...mapGetters([
      'isMenuClicked',
    ]),
  },
  watch: {
    isMenuClicked() {
      if (this.isMenuClicked) {
        this.hidex = 'hidex';
        this.reverse = 'reverse';
      } else {
        this.hidex = '';
        this.reverse = '';
      }
    },
  },
  store,
  data() {
    return {
      menulist: [
        'about',
        'portfolio',
        'blog',
        'contact',
      ],
      hidex: '',
      reverse: '',
    };
  },
  methods: {
    menuClick(menuName) {
      store.commit('menuClick', menuName);
    },
  },
};
</script>
