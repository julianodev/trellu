<template>
  <div>
    <div class="flex column list-container mr-2">
      <label class="list-title">{{title}}</label>
      <app-card :title="'C#'" />

      <app-card :title="'Typescript'" />

      <app-card :title="'Blazor'" />

      <v-footer>
        <v-btn text @click="addCard">
          <app-icon name="plus" />Adicionar outro cartão
        </v-btn>
        <v-spacer></v-spacer>
      </v-footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "List",
  props: {
    title: {
      type: String,
      default: () => ""
    }
  },
  methods: {
    addCard(): void {
      alert("added");
    }
  }
})
export default class List extends Vue {}
</script>


<style >
.list-container {
  border-radius: 5px;
  padding: 10px;
  background: #ebecf0;
  max-width: 280px;
}

.list-title {
  color: #7a8599;
  font-weight: 600;
}
</style>