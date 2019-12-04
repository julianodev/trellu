<template>
  <v-toolbar color="#0079bf" flat height="40">
    <v-toolbar-title
      class="ml-2 mt-1"
      style="font-size:18px;font-weight:700;line-height:32px;color:#fff"
    >Broker Admin - Backlog</v-toolbar-title>

    <div style="display:flex;">
      <div
        class="ml-3 mt-1"
        style="height:30px;width:30px;background:#4D95BE;border-radius:6px;text-align:center;margin-right:5px"
      >
        <v-icon small color="#fff">mdi-star-outline</v-icon>
      </div>
      <span style="border:0.5px solid #4D95BE;height:20px;display:flex;margin-top:10px;"></span>
    </div>

    <div style="display:flex;">
      <div
        class="ml-3 mt-1"
        style="height:30px;width:auto;background:#4D95BE;border-radius:6px;text-align:center;margin-right:5px;color:#fff;padding:5px;align-items:center;display:flex;"
      >
        <span class="body-2" style="color:#fff;">Broker</span>

        <v-chip
          class="ml-2 mt-0 overline"
          color="#64AED8"
          style="color:#fff;height:20px;"
          small
        >Free</v-chip>
      </div>
      <span style="border:0.5px solid #4D95BE;height:20px;display:flex;margin-top:10px;"></span>
    </div>

    <div style="display:flex;">
      <div
        class="ml-3 mt-1"
        style="height:30px;width:auto;background:#4D95BE;border-radius:6px;text-align:center;margin-right:5px;color:#fff;padding:5px;align-items:center;display:flex;"
      >
        <v-icon small color="#fff">mdi-security</v-icon>
        <span class="caption ml-1" style="color:#fff;">Particular</span>
      </div>
      <span style="border:0.5px solid #4D95BE;height:20px;display:flex;margin-top:10px;"></span>
    </div>

    <div class="ml-2 mt-1">
      <v-avatar color="#4D95BE" size="30">
        <img
          src="https://trello-avatars.s3.amazonaws.com/56d80c98213de6cf5319b5ce3037880d/50.png"
          alt="Lucas Juliano"
        />
      </v-avatar>
      <v-avatar color="#4D95BE" size="30">
        <img
          src="https://trello-avatars.s3.amazonaws.com/4518e3edc030f04bb8ff0717b5f7b764/30.png"
          alt="Fabio Silva Lima"
        />
      </v-avatar>
      <v-avatar color="#4D95BE" size="30">
        <img
          src="https://trello-avatars.s3.amazonaws.com/009a648adb84f45a83f1b00e0fb84fc7/30.png"
          alt="Aurelio Damiani"
        />
      </v-avatar>
      <v-avatar color="#4D95BE" size="30">
        <img
          src="https://trello-avatars.s3.amazonaws.com/ad383eab10c9466a448a59eac05a7416/30.png"
          alt="Jean Cecon"
        />
      </v-avatar>
      <v-avatar color="#4D95BE" size="30">
        <img
          src="https://trello-avatars.s3.amazonaws.com/aaa6eb77d4d9c49297f29ae2dba8122b/30.png"
          alt="Paulo Mevs"
        />
      </v-avatar>
      <v-avatar color="#4D95BE" size="30">
        <span class="white--text caption">+1</span>
      </v-avatar>
    </div>

    <div style="display:flex;">
      <div
        class="ml-3 mt-1"
        style="height:30px;width:auto;background:#4D95BE;border-radius:6px;text-align:center;margin-right:5px;color:#fff;padding:5px;align-items:center;display:flex;"
      >
        <span class="caption ml-1" style="color:#fff;">Convidar</span>
      </div>
    </div>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "Navbar",
  props: {
    title: {
      type: String,
      default: () => ""
    }
  },
  methods: {}
})
export default class Navbar extends Vue {}
</script>

