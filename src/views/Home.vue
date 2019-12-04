<template>
  <v-content class="home">
    <h1>Home Page</h1>
  </v-content>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "home"
})
export default class Home extends Vue {}
</script>

