<template>
  <div>
    <h1>Upload Component</h1>
    <img v-bind:src="imghash">
    <input type="file" accept="image/*" @change="handleFileUpload($event.target.files)"/>
    <input type="submit" @mousedown="submit()"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

@Component({
  components: {
    'font-awesome-icon': FontAwesomeIcon
  }
})
export default class uploadComponent extends Vue {
  @Getter('getId', { namespace: 'ipfs' }) Id!: object;
  @Getter('getInstance', { namespace: 'ipfs' }) ipfs!: object;
  @Action('IPFSInject', { namespace: 'ipfs' }) IPFSInject: any;
  @Action('AddPhotoToAlbum', { namespace: 'ipfs' }) AddPhotoToAlbum: any;

  public filehash = '';
  public imghash = '';

  constructor(
    public file: Buffer,
    public filename: string
  ) {
    super();
  }

  created() {
    this.IPFSInject();
  }

  handleFileUpload(e: FileList) {
    const file = e[0];
    const reader: FileReader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      this.file = new Buffer(reader.result);
      this.filename = `vc-${Math.random()}-${file.name}`;
    }
  }

  submit() {
    this.AddPhotoToAlbum({filename: this.filename, file: this.file});

    // this.ipfs.files.add(this.file, (err, result) => {
    //   if(err) {
    //     console.error(err);
    //     return;
    //   }
    //   this.filehash = result[0].hash;
    //   this.imghash = `http://localhost:8080/ipfs/${this.filehash}`;
    // })
  }
  
}
</script>

<style lang="scss" scoped>
div {
  margin: auto;
  width: 960px;
  height: 100%;
}
</style>
