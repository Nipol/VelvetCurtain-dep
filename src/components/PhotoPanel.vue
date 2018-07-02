<template>
  <div class="photo-panel">
    <img v-show="fileHash" :src="fullUrl">
    <section>
      {{ FileName() }}
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { getFileStat } from '../utils/getIPFS';

@Component({
  components: {
  }
})
export default class PhotoPanel extends Vue {

  @Prop({ type: Object, default: 'QmesQMPamSbqNqVi2QqVto5fNYdWFi27PnvtVEbh5hY9ua' }) src!: Object;

  fileHash = '';
  // filename = '';

  get fullUrl() {
    getFileStat(this.src.name).then((result) => {
      this.fileHash = result.hash;
    });
    return `http://localhost:8080/ipfs/${this.fileHash}`;
  }

  FileName() {
    return this.src.name;
  }
}
</script>

<style lang="scss" scoped>
div.photo-panel {
  width: 220px;
  min-height: 100px;
  max-height: 400px;
  margin-top: 10px;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  display: inline-block;
  position: relative;

  @media only screen and (max-width: 2560px) and (min-width: 1921px) {
    & {
      width: 240px;
    }
  }

  @media only screen and (max-width: 1920px) and (min-width: 1661px) {
    & {
      width: 225px;
    }
  }

  @media only screen and (max-width: 1660px) and (min-width: 1201px) {
    & {
      width: 175px;
      margin-top: 10px;
      margin-right: 5px;
      margin-left: 5px;
      margin-bottom: 10px;
    }
  }

  @media only screen and (max-width: 1200px) and (min-width: 1024px) { 
    & {
      width: 120px;
      margin-top: 5px;
      margin-right: 5px;
      margin-left: 5px;
      margin-bottom: 5px;
    }
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 0.25rem;
    box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.2);
  }

  section {
    opacity: 0;
    position: absolute;
    bottom: 2px;
    width: inherit;
    height: 50px;
    background: #ced4da;
    border: 0;

    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>

