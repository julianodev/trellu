<template>
  <div>
    <v-toolbar flat color="#0067A3" height="40">
      <app-button-icon name="home-outline" color="#fff" @click="onClickHome" />

      <div
        class="ml-2"
        style="display:inline-flex;background:#4D95BE;border-radius:6px;height:30px;width:110px;justify-content:center"
      >
        <v-icon color="#fff">mdi-view-dashboard</v-icon>
        <div style="color:#fff;font-weight:bold;margin-top:5px;margin-left:10px">Quadros</div>
      </div>

      <div>
        <input
          style="background:#4D95BE;height:30px;border-radius:6px;margin-left:10px"
          type="text"
        />
      </div>

      <v-spacer></v-spacer>
      <img
        height="50"
        src="https://www.freshbooks.com/wp-content/uploads/2018/03/Gwen_logo-trello.png"
        alt
      />
      <v-spacer></v-spacer>

      <app-button-icon name="plus" color="#fff" class="mr-1" />
      <app-button-icon name="alert-circle-outline" color="#fff" class="mr-1" />
      <app-button-icon name="bell-outline" color="#fff" class="mr-1" />

      <v-avatar color="#4D95BE" size="30">
        <img
          src="https://trello-avatars.s3.amazonaws.com/56d80c98213de6cf5319b5ce3037880d/50.png"
          alt="Lucas Juliano"
        />
        <!-- <span class="white--text subtitle-1">LJ</span> -->
      </v-avatar>
    </v-toolbar>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "Header",
  props: {
    title: {
      type: String,
      default: () => ""
    }
  },
  methods: {
    onClickHome(): void {
      this.$router.push("/");
    }
  }
})
export default class Header extends Vue {}
</script>

