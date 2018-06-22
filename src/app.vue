<template>
  <div>
    <Navbar></Navbar>
    <div id="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Navbar from './components/Navbar.vue';

@Component({
  components: {
    'Navbar': Navbar
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
div#container {
  padding-top: 42px;
  height: calc(100vh - 40px);
}
</style>