<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "App"
})
export default class App extends Vue {}
</script>

<style lang="scss">
html,
body {
  background: #0079bf !important;
}

body {
  font-family: "Roboto !important";
  font-size: 22px;
}
</style>