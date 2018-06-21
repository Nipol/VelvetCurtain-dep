<template>
  <div>
    <Navbar></Navbar>
    <!-- <Navbar></Navbar> -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import { Action } from 'vuex-class';

import Navbar from './components/Navbar.vue';

@Component({
  components: {
    Navbar
  }
})
export default class App extends Vue {
  beforeCreate() {
  }

  created () {
  }
}
</script>

<style lang="scss">
div {
  z-index: 1;
  
  div#index {
    padding-top: 70px;
  }
}
</style>