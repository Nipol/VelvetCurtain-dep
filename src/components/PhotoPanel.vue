<template>
  <div class="photo-panel">
    <img src="http://localhost:8080/ipfs/QmdxUtcsrcyFxzbLJyfijp8z1cRKbinuRfUgsDqeAFeL1h">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  }
})
export default class PhotoPanel extends Vue {
}
</script>

<style lang="scss" scoped>
div.photo-panel {
  width: 228px;
  max-width: 228px;
  min-height: 100px;
  max-height: 250px;
  margin-top: 5px;
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 5px;
  border-radius: 0.25rem;
  border: 1px solid #ced4da;

  img {
    width: 100%;
    border-radius: 0.25rem;
  }
}
</style>

