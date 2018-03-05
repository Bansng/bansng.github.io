<template>
  <div v-bind:class="menuBlock + '-block menu-block'" >
    <div v-bind:class="menuBlock + '-block-container'">
      <h2 v-bind:class="menuBlock + ' menu-item'">{{menuBlock}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: ['menuName'],
  data() {
    return {
      menuBlock: this.menuName,
    };
  },
};
</script>
