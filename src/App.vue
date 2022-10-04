<template>
  <div>
    <vuetab></vuetab>
   

    <router-view></router-view>
  </div>
</template>

<script>
import vuetab from './components/VueTab.vue'
export default {
  name: "App",
  components: {
    vuetab
  },
};
</script>

<style>
</style>
