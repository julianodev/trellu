<template>
  <v-content class="home">
    <v-toolbar flat color="#0067A3" height="40">
      <div style="height:30px;width:30px;background:#4D95BE;border-radius:6px;text-align:center">
        <v-icon color="#fff">mdi-home-outline</v-icon>
      </div>

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
      <div
        style="height:30px;width:30px;background:#4D95BE;border-radius:6px;text-align:center;margin-right:5px"
      >
        <v-icon small color="#fff">mdi-plus</v-icon>
      </div>
      <div
        style="height:30px;width:30px;background:#4D95BE;border-radius:6px;text-align:center;margin-right:5px"
      >
        <v-icon small color="#fff">mdi-alert-circle-outline</v-icon>
      </div>

      <div
        style="height:30px;width:30px;background:#4D95BE;border-radius:6px;text-align:center;margin-right:5px;"
      >
        <v-icon small color="#fff">mdi-bell-outline</v-icon>
      </div>

      <v-avatar color="#4D95BE" size="30">
        <img
          src="https://trello-avatars.s3.amazonaws.com/56d80c98213de6cf5319b5ce3037880d/50.png"
          alt="Lucas Juliano"
        />
        <!-- <span class="white--text subtitle-1">LJ</span> -->
      </v-avatar>
    </v-toolbar>

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

    <v-content>
      <div class="ma-3 d-flex row">
        <div class="flex column md2 card-main-trellu mr-2">
          <label style="color:#7A8599;font-weight:600">Solicitações</label>
          <v-card outlined class="mb-2">
            <v-card-title>Lucas Juliano</v-card-title>
            <v-card-subtitle>Trellu</v-card-subtitle>
            <v-card-text>Descricao do trellu</v-card-text>
            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>Evan You</v-list-item-title>
                </v-list-item-content>

                <v-row align="center" justify="end">
                  <v-icon class="mr-1">mdi-heart</v-icon>
                  <span class="subheading mr-2">256</span>
                  <span class="mr-1">·</span>
                  <v-icon class="mr-1">mdi-share-variant</v-icon>
                  <span class="subheading">45</span>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
          <v-card outlined class="mb-2">
            <v-card-title>Fabio Silva Lima</v-card-title>
            <v-card-subtitle>Trellu</v-card-subtitle>
            <v-card-text>Descricao do trellu</v-card-text>
            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>Evan You</v-list-item-title>
                </v-list-item-content>

                <v-row align="center" justify="end">
                  <v-icon class="mr-1">mdi-heart</v-icon>
                  <span class="subheading mr-2">256</span>
                  <span class="mr-1">·</span>
                  <v-icon class="mr-1">mdi-share-variant</v-icon>
                  <span class="subheading">45</span>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </div>

        <div class="flex column md2 card-main-trellu">
          <label style="color:#7A8599;font-weight:600">Análise / Especificação</label>
          <v-card outlined class="mb-2">
            <v-card-title>Mevs</v-card-title>
            <v-card-subtitle>Trellu</v-card-subtitle>
            <v-card-text>Descricao do trellu</v-card-text>
            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>Evan You</v-list-item-title>
                </v-list-item-content>

                <v-row align="center" justify="end">
                  <v-icon class="mr-1">mdi-heart</v-icon>
                  <span class="subheading mr-2">256</span>
                  <span class="mr-1">·</span>
                  <v-icon class="mr-1">mdi-share-variant</v-icon>
                  <span class="subheading">45</span>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
          <v-card outlined class="mb-2">
            <v-card-title>Jean</v-card-title>
            <v-card-subtitle>Trellu</v-card-subtitle>
            <v-card-text>Descricao do trellu</v-card-text>
            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>Evan You</v-list-item-title>
                </v-list-item-content>

                <v-row align="center" justify="end">
                  <v-icon class="mr-1">mdi-heart</v-icon>
                  <span class="subheading mr-2">256</span>
                  <span class="mr-1">·</span>
                  <v-icon class="mr-1">mdi-share-variant</v-icon>
                  <span class="subheading">45</span>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </div>
      </div>
    </v-content>
  </v-content>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "home"
})
export default class Home extends Vue {}
</script>


<style lang="css">
.v-content {
  background: #0079bf;
}

.card-main-trellu {
  border-radius: 5px;
  padding: 10px;
  background: #ebecf0;
}
</style>