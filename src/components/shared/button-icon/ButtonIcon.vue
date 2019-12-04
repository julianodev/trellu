<template>
  <div class="btn-container">
    <app-icon :name="name" :color="color" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "ButtonIcon",
  props: {
    name: {
      type: String,
      default: () => ""
    },
    color: {
      type: String,
      default: () => ""
    }
  }
})
export default class ButtonIcon extends Vue {}
</script>


<style lang="css">
.btn-container {
  height: 30px;
  width: 30px;
  background: #4d95be;
  border-radius: 6px;
  text-align: center;
}
</style>