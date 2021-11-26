<template>
  <div>
    <base-container title="Auth">
      <user-auth></user-auth>
    </base-container>
    <base-container title="Vuex" v-if="isAuth">
      <h3>{{ finalCounter }}</h3>
      <button @click="increment">Add 1</button>
    </base-container>
  </div>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import UserAuth from './components/UserAuth.vue';
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  components: {
    BaseContainer,
    UserAuth,
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    },
    // counter() {
    //   return this.$store.getters.finalCounter;
    // }
    ...mapGetters(['finalCounter']),
  },
  methods: {
    // addOne() {
    //   this.$store.dispatch('increment');
    // }
    ...mapActions(['increment']),
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