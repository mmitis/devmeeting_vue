<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/vote">Vote</router-link> |
      <router-link to="/settings">Settings</router-link> |
      <router-link to="/score">score</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'app',
  computed: {
    ...mapGetters('user', ['userID', 'isAdmin'])
  },
  methods: {
    ...mapActions('user', ['getUser']),
    ...mapActions('settings', ['getSettings']),
    ...mapActions('votes', ['initVotesRef'])
  },
  mounted () {
    if (!this.userID) {
      this.$store.dispatch('user/getUser');
    }
    this.$store.dispatch('votes/initVotesRef');
    this.$store.dispatch('settings/getSettings');
  }
};
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
