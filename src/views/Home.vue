<template>
  <div>
    <section class="hero is-link is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <a class="title" @click="aoClicarVisualizar">Clique aqui para visualizar o seu quadro</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
const uuidv1 = require("uuid/v1");

@Component({
  name: "home",
  data: () => ({
    item: 1,
    items: [{ text: "Quadros", icon: "mdi-account" }]
  }),
  methods: {
    aoClicarVisualizar() {
      const id = uuidv1();
      const text: string = "my";
      this.$router.push(`/board/${id}/${text}`);
    }
  }
})
export default class Home extends Vue {}
</script>

