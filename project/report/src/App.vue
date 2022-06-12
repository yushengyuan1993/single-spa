<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <router-link to="/index">Index</router-link> | 
      <router-link to="/about">About</router-link>

      <button @click="handleClick">greet</button>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    
  },
  methods: {
    async handleClick() {
      const share = await window.System.import('@mmc-site/share')

      share?.greet('@mmc-site/report')
    }
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>
