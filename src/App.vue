<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import userService from "@/service/user/user.service";

@Component({
  name: "App",
  async created() {
    if (!userService.hasUser) {
      const username = prompt("Por favor, informe o seu usuário do github", "");
      if (username != null) {
        await userService.getUserAsync(username);
        this.$router.go(0);
      }
    }
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
html,
body {
  background: #0079bf !important;
}

body {
  font-family: "Roboto !important";
  font-size: 22px;
}
</style>