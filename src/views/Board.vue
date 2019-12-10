<template>
  <app-board />
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
</style>