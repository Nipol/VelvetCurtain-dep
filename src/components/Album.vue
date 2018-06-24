<template>
  <div>
    <div id="photo-container">
      <photo-panel v-for="(photo, index) in albums" :key="index" :src="photo.hash"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter, Action } from "vuex-class";
import PhotoPanel from './PhotoPanel.vue';

@Component({
  components: {
    'photo-panel': PhotoPanel
  }
})
export default class albumComponent extends Vue {
  @Getter('getAlbum', { namespace: 'album' }) albums: any;
  @Action('loadAlbum', { namespace: 'album' }) loadAlbum: any;

  created() {
  }

  mounted() {
    this.loadAlbum();
  }
}
</script>

<style lang="scss" scoped>
div {
  margin: auto;

  div#photo-container {
    width: inherit;
  }

  @media only screen and (min-width: 1201px) {
    div{
      width: 1200px;

      div#photo-container {
        column-count: 5;
      }
    }
  }

  @media only screen and (max-width: 1200px) and (min-width: 1024px) {
    div{
      width: 960px;
      div#photo-container {
        column-count: 4;
      }
    }
  }
}
</style>
