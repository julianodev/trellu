<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import userService from "@/core/service/user.service";
import { GET_INFO_USER_REQUEST } from "./store/user/user.action-types";

@Component<any>({
  name: "App",
  data: () => ({}),
  methods: {
    reload() {
      this.$router.go(0);
    }
  },
  created() {
    if (!this.$store.getters.hasUser) {
      const username = prompt("Por favor, informe o seu usuário do github");
      if (username) {
        this.$store
          .dispatch(GET_INFO_USER_REQUEST, { name: username })
          .catch((error: any) => this.reload());
      } else {
        this.reload();
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