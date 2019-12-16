<template>
  <div class="board">
    <app-header>
      <app-navbar :title="title " />
    </app-header>

    <div class="board">
      <app-list />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component<any>({
  props: {},
  components: {},
  data: () => ({
    title: "Lucas Juliano Company"
  }),
  computed: {}
})
export default class Board extends Vue {}
</script>

<style >
.board {
  min-height: 100%;
}
</style>