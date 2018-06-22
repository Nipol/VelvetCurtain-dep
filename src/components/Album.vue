<template>
  <div>
    <h1>Album Component</h1>
    <div id="photo-container">
      <photo-panel></photo-panel>
      <photo-panel></photo-panel>
      <photo-panel></photo-panel>
      <photo-panel></photo-panel>
      <photo-panel></photo-panel>
      <photo-panel></photo-panel>
      <photo-panel></photo-panel>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import PhotoPanel from './PhotoPanel.vue';

@Component({
  components: {
    'photo-panel': PhotoPanel
  }
})
export default class albumComponent extends Vue {
  
}
</script>

<style lang="scss" scoped>
div {
  margin: auto;
  width: 960px;

  div#photo-container {
    width: inherit;
    display: flex;
    flex-flow: row wrap;
  }
}
</style>
