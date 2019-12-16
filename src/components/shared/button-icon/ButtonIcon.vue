<template>
  <div>
    <button class="button is-small btn-container" @click="click">
      <span class="icon" :class="size" v-if="icon">
        <i :class="icon"></i>
      </span>
      <span v-if="label">{{label}}</span>
    </button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "ButtonIcon",
  props: {
    label: {
      type: String,
      default: () => ""
    },
    color: {
      type: String,
      default: () => ""
    },
    icon: {
      type: String,
      default: () => ""
    },
    size: {
      type: String,
      default: () => "is-small"
    }
  },
  methods: {
    click(event: Event) {
      this.$emit("click", event);
    }
  }
})
export default class ButtonIcon extends Vue {}
</script>


<style lang="scss">
$bg-btn: #0079bf !important;
$border-btn: #4d95be !important ;
$color-btn: #fff !important;

.btn-container {
  margin: 5px;
  margin-left: 1px;
  background: #4d95be;
  color: #fff;
  border-color: #4d95be;
}

.btn-container:hover {
  background: $bg-btn;
  border-color: $border-btn;
  color: $color-btn;
}

.btn-container:focus {
  background: #4d95be;
  border-color: #4d95be;
  color: $color-btn;
}
</style>