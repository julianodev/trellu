<template>
  <v-content class="home">
    <app-header />
    <v-container mt-5>
      <v-row no-gutters justify="center">
        <v-col cols="6" md="4">
          <v-card class="mx-auto" max-width="300" tile>
            <v-list rounded>
              <v-subheader>TRELLU</v-subheader>
              <v-list-item-group v-model="item" color="primary">
                <v-list-item v-for="(item, i) in items" :key="i">
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>

        <v-row no-gutters cols="12" md="5">
          <v-col :key="n" class="pa-1">
            <v-card color="#0067A3" dark>
              <v-card-title class="headline">Pessoal</v-card-title>

              <v-card-actions>
                <v-btn text @click="aoClicarVisualizar('pessoal')">VISUALIZAR</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col :key="n" class="pa-1">
            <v-card color="#0067A3" dark>
              <v-card-title class="headline">TODO</v-card-title>

              <v-card-actions>
                <v-btn text @click="aoClicarVisualizar('todo')">VISUALIZAR</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-row>
    </v-container>
  </v-content>
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

