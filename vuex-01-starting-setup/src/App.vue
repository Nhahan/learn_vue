<template>
  <base-container title="Vuex">
    <h3>{{ counter }}</h3>
    <button @click="increment">Add 1</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  components: {
    BaseContainer,
  },
  computed: {
    // counter() {
    //   return this.$store.getters.finalCounter;
    // }
    ...mapGetters(['counter'])
  },
  methods: {
    // addOne() {
    //   this.$store.dispatch('increment');
    // }
    ...mapActions(['increment'])
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>