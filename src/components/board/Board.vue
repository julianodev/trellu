<template>
  <div>
    <div class="navbar-menu" style="background:#0067A3">
      <div class="navbar-start">
        <!-- navbar items -->
        <button
          class="button is-small"
          style="margin:5px;background:#4D95BE;color:#fff;border-color:#4D95BE"
        >
          <span class="icon is-small">
            <i class="fas fa-home"></i>
          </span>
        </button>

        <button
          class="button is-small"
          style="margin:5px;margin-left:1px;background:#4D95BE;color:#fff;border-color:#4D95BE"
        >
          <span class="icon is-small">
            <i class="fab fa-trello"></i>
          </span>
          <span>Quadros</span>
        </button>
        <div class="field" style="margin:5px;margin-left:1px;">
          <p class="control has-icons-right">
            <input
              class="input is-small"
              type="text"
              style="background:#4D95BE;color:#fff;border-color:#4D95BE"
            />
            <span class="icon is-small is-right">
              <i class="fas fa-search"></i>
            </span>
          </p>
        </div>
      </div>

      <div class="navbar-center">
        <img src="@/assets/logo-trello.png" />
      </div>

      <div class="navbar-end">
        <button
          class="button is-small"
          style="margin-right:3px;margin-bottom:5px;margin-top:5px;background:#4D95BE;color:#fff;border-color:#4D95BE;"
        >
          <span class="icon is-small">
            <i class="fas fa-plus"></i>
          </span>
        </button>

        <button
          class="button is-small"
          style="margin-right:3px;margin-bottom:5px;margin-top:5px;background:#4D95BE;color:#fff;border-color:#4D95BE;"
        >
          <span class="icon is-small">
            <i class="fas fa-exclamation-circle"></i>
          </span>
        </button>

        <button
          class="button is-small"
          style="margin-right:3px;margin-bottom:5px;margin-top:5px;background:#4D95BE;color:#fff;border-color:#4D95BE;"
        >
          <span class="icon is-small">
            <i class="far fa-bell"></i>
          </span>
        </button>

        <figure class="image is-32x32" style="margin-top:5px;margin-right:5px">
          <img
            class="is-rounded"
            src="https://trello-avatars.s3.amazonaws.com/56d80c98213de6cf5319b5ce3037880d/30.png"
          />
        </figure>
      </div>
    </div>
    <div class="navbar-menu">
      <div class="navbar-start" style="margin-top:5px">
        <!-- navbar items -->
        <label for="Lucas Juliano" class="lbl-titulo-board">Lucas Juliano</label>

        <button
          class="button is-small"
          style="margin:5px;background:#4D95BE;color:#fff;border-color:#4D95BE"
        >
          <span class="icon is-small">
            <i class="far fa-star"></i>
          </span>
        </button>

        <button
          class="button is-small"
          style="margin:5px;margin-left:1px;background:#4D95BE;color:#fff;border-color:#4D95BE"
        >
          <span>Quadros</span>&nbsp;
          <span
            class="tag is-info is-rounded"
            style="background:#64AED8;margin-left:5px;font-size:10px;font-height:400"
          >Free</span>
        </button>

        <button
          class="button is-small"
          style="margin:5px;margin-left:1px;background:#4D95BE;color:#fff;border-color:#4D95BE"
        >
          <span class="icon is-small">
            <i class="fas fa-lock"></i>
          </span>
          <span>Particular</span>
        </button>

        <figure class="image is-32x32" style="margin-top:5px;margin-right:5px">
          <img
            class="is-rounded"
            src="https://trello-avatars.s3.amazonaws.com/56d80c98213de6cf5319b5ce3037880d/30.png"
          />
        </figure>

        <button
          class="button is-small"
          style="margin:5px;margin-left:1px;background:#4D95BE;color:#fff;border-color:#4D95BE"
        >
          <span>Convidar</span>
        </button>
      </div>

      <div class="navbar-end">
        <button
          class="button is-small"
          style="margin:5px;margin-left:1px;background:#4D95BE;color:#fff;border-color:#4D95BE"
        >
          <span class="icon is-small">
            <i class="fab fa-trello"></i>
          </span>
          <span>Butler (3 Tips)</span>
        </button>

        <button
          class="button is-small"
          style="margin:5px;margin-left:1px;background:#4D95BE;color:#fff;border-color:#4D95BE"
        >
          <span class="icon is-small">
            <i class="fab fa-trello"></i>
          </span>
          <span>Mostrar Menu</span>
        </button>
      </div>
    </div>
    <div class="board">
      <!-- <div class="clear-button">
        <ui-button :disabled="lists.length === 0" @click="reset">Reset</ui-button>
      </div>-->

      <div class="lists-container" id="style-2">
        <Container
          lock-axis="x"
          orientation="horizontal"
          drag-handle-selector=".list-drag-handle"
          @drop="onListDrop"
        >
          <Draggable v-for="(list, listIndex) in lists" :key="list.id">
            <section class="list-container list-drag-handle" ref="list" :data-id="list.id">
              <div class="list-header">{{ list.title }}</div>

              <Container
                id="style-1"
                class="cards-container"
                group-name="list"
                drag-class="card-ghost"
                drop-class="card-ghost-drop"
                non-drag-area-selector=".icon"
                :animation-duration="100"
                @drop="e => onCardDrop(e, list, listIndex)"
              >
                <Draggable v-for="item in list.items" :key="item.id">
                  <Card
                    :item="item"
                    :list="{'title':list.title,'id':list.id}"
                    style="cursor:pointer"
                  />
                </Draggable>
              </Container>

              <div class="footer-container-list">
                <button class="button is-light is-fullwidth" @click="onAddItem(list.id)">
                  <span class="icon">
                    <i class="fas fa-plus"></i>
                  </span>
                  <span>Adicionar outro cartão</span>
                </button>
              </div>
            </section>
          </Draggable>
        </Container>

        <div class="new-list">
          <ui-item-entry placeholder="Adicionar outra lista" @enter="onAddList" />
        </div>
      </div>
    </div>
    <!-- <footer class="pb-2 bg-trellu" style="padding-bottom:10px">
      <div class="has-text-centered">
        <p style="color:#fff">
          <strong style="color:#fff">Trellu</strong> by
          <a style="color:#fff;font-weight:600" href="https://jgthms.com">Lucas Juliano</a>.
        </p>
      </div>
    </footer>-->
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Container, Draggable } from "vue-smooth-dnd";
import { makeDropHandler } from "@/utils/plugins";
import UiItemForm from "@/components/shared/UiItemForm.vue";
import UiItemEntry from "@/components/shared/UiItemEntry.vue";
import Card from "./Card.vue";

@Component<any>({
  props: {
    title: {
      type: String,
      default: () => ""
    }
  },
  components: {
    Container,
    Draggable,
    UiItemEntry,
    UiItemForm,
    Card
  },
  data: () => ({
    activeListId: null,
    modal: false
  }),
  computed: {
    lists() {
      const vm = this as any;
      return vm.$store.state.board.lists;
    }
  },
  methods: {
    onClickCard(item: any) {
      console.log("card-item", item);
    },
    onAddList({ text }: any) {
      const vm = this as any;
      vm.$store.commit("addList", { title: text || "" });
      // vm.$nextTick(() => {
      //   const lists = vm.$refs.list as any;
      //   lists[lists.length - 1].querySelector("input").focus();
      // });
    },
    onAddItem(listId: string) {
      const vm = this as any;
      vm.addItem(listId, "New item", "", "");
    },

    onAddFullItem(item: any) {
      const vm = this as any;
      item.id
        ? vm.$store.commit("updateItem", { itemId: item.id, ...item })
        : vm.addItem(vm.activeListId, item.title, item.description, item.date);
      vm.hideModal();
    },

    addItem(listId: any, title: any, description: any, date: any) {
      const vm = this as any;
      vm.$store.commit("addItem", { listId, title, description, date });
    },
    editItem(item: any) {
      const vm = this as any;
      vm.showModal(item);
    },
    onListDrop: makeDropHandler("onListDropComplete"),
    onListDropComplete: function(src: any, trg: any) {
      const vm = this as any;
      vm.$store.commit("moveList", [src.index, trg.index]);
    },

    onCardDrop: makeDropHandler("onCardDropComplete"),

    onCardDropComplete(src: any, trg: any, element: any, payload: any) {
      const vm = this as any;
      vm.$store.commit("moveItem", [
        src.params[1],
        src.index,
        trg.params[1],
        trg.index
      ]);
    },

    showModal(item: any) {
      const vm = this as any;
      vm.modal = true;
      vm.$nextTick(() => {
        vm.$refs.form.show(item);
      });
    },

    hideModal() {
      const vm = this as any;
      vm.focusInput(vm.activeListId);
      vm.modal = false;
    },

    focusInput(listId: any) {
      const vm = this as any;

      const index = vm.lists.findIndex((list: any) => list.id === listId);
      if (index > -1) {
        vm.$refs.list[index].querySelector("input").focus();
      }
    },

    reset() {
      const vm = this as any;

      if (confirm("Are you sure you want to reset the board?")) {
        vm.$store.commit("reset");
      }
    }
  }
})
export default class Board extends Vue {}
</script>

<style lang="scss">
$column-width: 320px;
$bg-trellu-color: #0079bf;

.bg-trellu {
  background: $bg-trellu-color;
}

.lbl-titulo-board {
  background: transparent;
  cursor: default;
  font-size: 18px;
  font-weight: 700;
  line-height: 32px;
  padding: 0;
  text-decoration: none;
  max-width: calc(100% - 24px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 30px;
  color: #fff;
}
.cards-container {
  max-height: 725px;
  overflow: auto;
}

.board {
  min-height: 100%;
}

.list-container {
  width: $column-width;
  padding: 10px;
  margin: 5px;
  margin-right: 1px;
  background-color: #f3f3f3;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.24);
  border-radius: 5px;
  margin-bottom: 10px;
}

.lists-container {
  display: flex;
  overflow-x: auto !important;
  margin-left: 10px;
  margin-right: 5px;
}

.list-header {
  margin-bottom: 5px;
  font-weight: 600;
  margin-left: 10px;
  color: #67748a;
}

.card {
  margin: 5px;
  background-color: white;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.24);
  padding: 10px;
}

.card-ghost {
  transition: 0.25s all;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
  transform: rotate(5deg);
}

.card-ghost-drop {
  transform: scale(1) !important;
}

.list-header {
  font-size: 18px;
}

.list-drag-handle {
  cursor: move;
  padding: 5px;
}

.item-entry {
  padding-top: 10px;
  margin-top: 10px;
  border-top: 1px solid #ddd;
}

.new-list {
  width: $column-width;
}

.clear-button {
  position: absolute;
  top: 20px;
  right: 20px;
}

.footer-container-list {
  width: 100%;
}

#style-1::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

#style-1::-webkit-scrollbar {
  width: 9px;
  background-color: #f5f5f5;
}

#style-1::-webkit-scrollbar-thumb {
  border-radius: 10px;
  // -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #bfc4ce;
}

/**scroll */
#style-2::-webkit-scrollbar-track {
  padding: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px !important;
  background-color: #0067a3 !important;
}

#style-2::-webkit-scrollbar {
  width: 7px !important;
  height: 12px;
  background-color: #66a4c7 !important;
  border-radius: 10px !important;
}

#style-2::-webkit-scrollbar-thumb {
  border-radius: 10px !important;
  // -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #66a4c7 !important;
}
</style>
