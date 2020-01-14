<template>
  <div class="board">
    <app-header>
      <app-navbar />
    </app-header>

    <div class="board">
      <app-list />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import userService from "@/service/user/user.service";

@Component<any>({
  props: {},
  components: {},
  data: () => ({
    title: "Lucas Juliano Company"
  }),
  computed: {},
  methods: {
    async getUserAsync(username: string) {
      const user = await userService.getUserAsync(username);
      this.user = user;
    }
  },
  async mounted() {
    if (!userService.hasUser) {
      const username = prompt("Por favor, informe o seu usuário do github", "");
      if (username != null) {
        await this.getUserAsync(username);
      }
    }
  }
})
export default class Board extends Vue {}
</script>

<style >
.board {
  min-height: 100%;
}
</style>