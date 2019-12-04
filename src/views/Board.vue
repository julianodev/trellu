<template>
  <v-content class="board-container">
    <app-header>
      <app-navbar :title="title" />
    </app-header>
    <app-board />
  </v-content>
</template>


<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  computed: {
    title(): string {
      const name = this.$route.params["name"];
      return name;
    }
  }
})
export default class Board extends Vue {}
</script>


<style scoped>
.board-container {
  background: #0079bf;
}
</style>