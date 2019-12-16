<template>
  <div>
    <section class="hero is-link is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <a class="title" href="board/demo/1">Clique aqui para visualizar o seu quadro</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "home",
  data: () => ({
    item: 1,
    items: [{ text: "Quadros", icon: "mdi-account" }]
  }),
  methods: {
    aoClicarVisualizar(text: string) {
      const id: number = Math.floor(Math.random() * 100) + 1;
      this.$router.push(`/board/${id}/${text}`);
    }
  }
})
export default class Home extends Vue {}
</script>

