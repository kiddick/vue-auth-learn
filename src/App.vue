<template>
  <div id="app">
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>|
    <router-link to="/secure">Secure</router-link>|
    <router-link v-if="!isLoggedIn" to="/register">Register |</router-link>
    <router-link v-if="!isLoggedIn" to="/login">Login</router-link>
    <span v-if="isLoggedIn" to="/logout">
      <a href="/logout" @click.prevent="logout">Logout</a>
    </span>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app",
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    }
  },
  components: {}
};
</script>

<style>
#app {
}
</style>
