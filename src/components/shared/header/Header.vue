<template>
  <div>
    <div class="navbar-menu" style="background:#0067A3">
      <div class="navbar-start">
        <app-button-icon icon="fas fa-home" style="margin-left:5px" />
        <app-button-icon icon="fab fa-trello" label="Quadros" />

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
        <app-button-icon icon="fas fa-plus" />
        <app-button-icon icon="fas fa-exclamation-circle" />
        <app-button-icon icon="far fa-bell" />

        <figure
          class="image is-32x32"
          style="margin-top:5px;margin-right:5px"
          @click="logout"
          title="clique aqui para trocar de perfil no github"
        >
          <img class="is-rounded" :src="avatar" />
        </figure>
      </div>
    </div>

    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import userService from "@/core/service/user.service";

@Component({
  name: "Header",
  computed: {
    avatar() {
      return this.$store.getters.avatar;
    }
  },
  methods: {
    logout() {
      const logout: boolean = confirm("Deseja fazer logout?");
      if (logout) {
        localStorage.removeItem('vuex');
         this.$router.go(0);
      }
    }
  }
})
export default class Header extends Vue {}
</script>

