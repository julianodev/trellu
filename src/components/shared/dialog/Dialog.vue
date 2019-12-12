<template>
  <div>
    <div class="modal fade" :class="classes">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head modal-body">
          <p class="modal-card-title">
            <slot name="header"></slot>
          </p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body modal-body">
          <slot name="body"></slot>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    toggle: Boolean,
    placeholder: String,
    icon: {
      type: String,
      default: "angle-right"
    }
  },

  data() {
    return {
      open: false
    };
  },
  watch: {
    toggle(val, old) {
      if (!val) {
        this.$emit("close");
      }
      // console.log("val", val, this.item);
    }
  },
  methods: {},
  computed: {
    classes() {
      return {
        "is-active": this.toggle
      };
    }
  },
  destroyed() {}
};
</script>

<style lang="scss">
$bg-modal: #f5f5f5;

.modal-body {
  background: $bg-modal;
}

.modal-card-head {
  border-bottom: $bg-modal;
}
</style>
