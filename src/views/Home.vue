<template>
  <div class="container">
    <div class="notification">
      This container is
      <strong>centered</strong> on desktop.
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "home",
  data: () => ({
    item: 1,
    items: [{ text: "Quadros", icon: "mdi-account" }]
  }),
  methods: {
    aoClicarVisualizar(text: string) {
      const id: number = Math.floor(Math.random() * 100) + 1;
      this.$router.push(`/board/${id}/${text}`);
    }
  }
})
export default class Home extends Vue {}
</script>

