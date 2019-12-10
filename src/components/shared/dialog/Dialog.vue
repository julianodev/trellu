<template>
  <div>
    <div class="modal" :class="isOpen()">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal title</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <!-- Content ... -->
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="open = !open">Save changes</button>
          <button class="button" @click="open = !open">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: "",
    listId: [String, Number],
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
  methods: {
    isOpen() {
      return {
        "is-active": !this.open,
        "": this.open
      };
    }
  }
};
</script>

<style lang="scss">
</style>
