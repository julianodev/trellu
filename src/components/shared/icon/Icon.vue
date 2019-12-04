<template>
  <v-icon small :color="color">{{nameLabel}}</v-icon>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "Icon",
  props: {
    name: {
      type: String,
      default: () => ""
    },
    color: {
      type: String,
      default: () => ""
    }
  },
  computed: {
    nameLabel(): string {
      const vm = this as any;
      return `mdi-${vm.name}`;
    }
  }
})
export default class Icon extends Vue {}
</script>

