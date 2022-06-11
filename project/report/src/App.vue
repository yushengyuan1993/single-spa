<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <router-link to="/index">Index</router-link> | 
      <router-link to="/about">About</router-link>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style></style>
