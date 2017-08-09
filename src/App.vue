<template>
  <div id="app">
    <navBar></navBar>
    <router-view></router-view>
  </div>
</template>

<script>

import navBar from './components/NavBar';
export default {
  name: 'app',
  components: {
    navBar
  },
}
</script>
<style>

</style>




