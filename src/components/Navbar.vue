<template>
  <nav>
    <div class="brand">
      Velvet Curtain
    </div>
    <ul>
      <li>
        <router-link tag="a" :to="{ 'name': 'index' }">
          Index
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Navbar extends Vue {
}
</script>

<style lang="scss" scoped>
nav {
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
  }

  ul {
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;

    li {
      width: 100px;
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

