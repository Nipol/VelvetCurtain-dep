<template>
  <nav>
    <div class="brand">
      Velvet Curtain
    </div>
    <ul>
      <!-- <li>
        <router-link tag="a" :to="{ 'name': 'index' }">
          Index
        </router-link>
      </li> -->
      <li>
        Your Id : {{ Id.id }}
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';

@Component
export default class Navbar extends Vue {
  @Getter('getId', { namespace: 'ipfs' }) Id: object;
  @Action('IPFSInject', { namespace: 'ipfs' }) IPFSInject: any;

  created() {
    this.IPFSInject();
  }
}
</script>

<style lang="scss" scoped>
nav {
  background: #f8f9fc;
  z-index: 999;
  position: sticky;
  display: flex;
  flex-direction: row;
  height: 65px;
  width: 100%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  margin-bottom: 10px;

  div.brand {
    display: flex;
    width: 200px;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: 1.5rem;
    color: #c00000;
  }

  ul {
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    justify-content: flex-start;

    li {
      width: 100%;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;

      a {
        text-decoration: none;
        text-decoration-color: #0f0f0f;
      }
    }
    
  }
}
</style>

