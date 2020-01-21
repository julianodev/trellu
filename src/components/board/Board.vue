<template>
  <div>

    <app-header>
      <app-navbar />
    </app-header>

    <app-list />
    
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
</style>