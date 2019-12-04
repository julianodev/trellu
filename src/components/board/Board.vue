<template>
  <div>
    <v-content>
      <div class="ma-3 d-flex row">
        <app-list title="Solicitações" />
        <app-list title="Análise / Especificação" />
        <app-list title="TODO" />
      </div>
    </v-content>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "Board",
  props: {
    title: {
      type: String,
      default: () => ""
    }
  }
})
export default class Board extends Vue {}
</script>

