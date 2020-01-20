<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import userService from "@/core/service/user.service";

@Component({
  name: "App",
  data: () => ({
    title: "Por favor, informe o seu usuário do github"
  }),
  methods: {
    redirect(): void {
      this.$router.go(0);
    }
  },
  async created() {
    const vm = this as any;

    if (!userService.hasUser) {
      try {
        const username = prompt(vm.title);
        if (username != null) {
          await userService.getUserAsync(username);
          vm.redirect();
        }
      } catch (exception) {
        vm.redirect();
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