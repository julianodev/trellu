<template>
  <div class="board">
    <app-header>
      <app-navbar />
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
  data: () => ({}),
  computed: {},
  methods: {}
})
export default class Board extends Vue {}
</script>

<style >
.board {
  min-height: 100%;
}
</style>