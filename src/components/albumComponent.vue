<template>
  <div>
    <h1>Album Component</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';

@Component
export default class albumComponent extends Vue {
  
}
</script>

<style lang="scss" scoped>
div {
  margin: auto;
  width: 960px;
  height: 100%;
}
</style>
