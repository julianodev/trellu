<template>
  <div>
    <div class="navbar-menu" style="background:#0067A3">
      <div class="navbar-start">
        <!-- navbar items -->
        <button
          class="button is-small"
          style="margin:5px;background:#4D95BE;color:#fff;border-color:#4D95BE"
        >
          <span class="icon is-small">
            <i class="fas fa-home"></i>
          </span>
        </button>

        <button
          class="button is-small"
          style="margin:5px;margin-left:1px;background:#4D95BE;color:#fff;border-color:#4D95BE"
        >
          <span class="icon is-small">
            <i class="fab fa-trello"></i>
          </span>
          <span>Quadros</span>
        </button>
        <div class="field" style="margin:5px;margin-left:1px;">
          <p class="control has-icons-right">
            <input
              class="input is-small"
              type="text"
              style="background:#4D95BE;color:#fff;border-color:#4D95BE"
            />
            <span class="icon is-small is-right">
              <i class="fas fa-search"></i>
            </span>
          </p>
        </div>
      </div>

      <div class="navbar-center">
        <img src="@/assets/logo-trello.png" />
      </div>

      <div class="navbar-end">
        <button
          class="button is-small"
          style="margin-right:3px;margin-bottom:5px;margin-top:5px;background:#4D95BE;color:#fff;border-color:#4D95BE;"
        >
          <span class="icon is-small">
            <i class="fas fa-plus"></i>
          </span>
        </button>

        <button
          class="button is-small"
          style="margin-right:3px;margin-bottom:5px;margin-top:5px;background:#4D95BE;color:#fff;border-color:#4D95BE;"
        >
          <span class="icon is-small">
            <i class="fas fa-exclamation-circle"></i>
          </span>
        </button>

        <button
          class="button is-small"
          style="margin-right:3px;margin-bottom:5px;margin-top:5px;background:#4D95BE;color:#fff;border-color:#4D95BE;"
        >
          <span class="icon is-small">
            <i class="far fa-bell"></i>
          </span>
        </button>

        <figure class="image is-32x32" style="margin-top:5px;margin-right:5px">
          <img
            class="is-rounded"
            src="https://trello-avatars.s3.amazonaws.com/56d80c98213de6cf5319b5ce3037880d/30.png"
          />
        </figure>
      </div>
    </div>

    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "Header",
  props: {
    title: {
      type: String,
      default: () => ""
    }
  },
  methods: {
    onClickHome(): void {
      this.$router.push("/");
    }
  }
})
export default class Header extends Vue {}
</script>

