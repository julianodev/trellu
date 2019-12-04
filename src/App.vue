<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "App"
})
export default class App extends Vue {}
</script>

