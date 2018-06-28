<template>
  <div class="photo-panel">
    <img :src="fullUrl">
    <section>
      asdf
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
  }
})
export default class PhotoPanel extends Vue {

  @Prop({ type: String, default: 'QmesQMPamSbqNqVi2QqVto5fNYdWFi27PnvtVEbh5hY9ua' }) src!: string;

  get fullUrl() {
    console.log()
    return `http://localhost:8080/ipfs/${this.src}`;
  }
}
</script>

<style lang="scss" scoped>
div.photo-panel {
  width: 228px;
  min-height: 100px;
  max-height: 400px;
  margin-top: 5px;
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 5px;
  border-radius: 0.25rem;
  display: inline-block;
  position: relative;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 0.25rem;
    border: 1px solid #ced4da;
  }

  section {
    opacity: 0;
    position: absolute;
    bottom: 2px;
    width: inherit;
    height: 50px;
    background: #ced4da;
    border: 1px solid #ced4da;

    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>

