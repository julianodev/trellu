<template>
  <div>
    <v-card outlined class="mb-1">
      <v-card-text style="color:#58667F">{{title}}</v-card-text>

      <v-card-actions></v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "Card",
  props: {
    title: {
      type: String,
      default: () => ""
    }
  }
})
export default class Card extends Vue {}
</script>

