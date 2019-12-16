<template>
  <div>
    <div class="navbar-menu">
      <div class="navbar-start" style="margin-top:5px">
        <!-- navbar items -->
        <label for="Lucas Juliano" class="lbl-titulo-board">{{title}}</label>

        <app-button-icon style="margin-left:5px" label icon="far fa-star" />

        <button class="button btn-boards is-small">
          <span>Quadros</span>&nbsp;
          <span class="tag is-info is-rounded btn-boards-type">Free</span>
        </button>

        <app-button-icon label="Particular" icon="fas fa-lock" />

        <figure class="image is-32x32" style="margin-top:5px;margin-right:5px">
          <img
            class="is-rounded"
            src="https://trello-avatars.s3.amazonaws.com/56d80c98213de6cf5319b5ce3037880d/30.png"
          />
        </figure>

        <app-button-icon label="Convidar" />
      </div>

      <div class="navbar-end">
        <app-button-icon label="Limpar Quadro" icon="far fa-trash-alt" @click="reset" />
        <app-button-icon label="Butler (3 Tips)" icon="fab fa-trello" />
        <app-button-icon label="Mostrar Menu" icon="fab fa-trello" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "Navbar",
  props: {
    title: {
      type: String,
      default: () => ""
    }
  },
  methods: {
    reset() {
      if (confirm("Deseja mesmo resetar esse quadro?")) {
        this.$store.commit("reset");
      }
    }
  }
})
export default class Navbar extends Vue {}
</script>


<style lang="scss" scoped>
.btn-boards {
  margin: 5px;
  margin-left: 1px;
  background: #4d95be;
  color: #fff;
  border-color: #4d95be;
}

.btn-boards-type {
  background: #64aed8;
  margin-left: 5px;
  font-size: 10px;
  font-weight: 400;
}
</style>
