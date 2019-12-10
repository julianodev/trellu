<template>
  <v-content class="login">
    <h1>Login Component works !!</h1>
  </v-content>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "login",
  data: () => ({}),
  methods: {}
})
export default class Login extends Vue {}
</script>

