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
            :src="avatar"
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
import userService from '@/service/user/user.service';
import { RESET_BOARD } from '../../../store/action-types';

@Component({
  name: "Navbar",
  props: {},
  computed: {
    title(): string {
      return userService.name;
    },
    avatar(){
      return userService.avatar;
    }
  },
  methods: {
    reset() {
      if (confirm("Deseja mesmo resetar esse quadro?")) {
        this.$store.commit(RESET_BOARD);
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
