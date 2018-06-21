<template>
  <div>
    <Navbar></Navbar>
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

</style>