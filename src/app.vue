<template>
  <div>
    <Navbar></Navbar>
    <div id="container">
      <router-view></router-view>
      <div id="side-bar-container">
      </div>
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
  height: calc(100vh - 42px);
}

div#side-bar-container {
  width: 240px;
  height: calc(100% - 40px);
  position: fixed;
  top: 40px;
  background: #f8f9fc;

  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
</style>