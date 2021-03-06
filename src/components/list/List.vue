<template>
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
              <Card :item="item" :list="{'title':list.title,'id':list.id}" style="cursor:pointer" />
            </Draggable>

            <p class="empty-card" v-if="list.items == 0">A lista ainda não possui nenhum cartão :(</p>
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
      <div class="add-list-container">
        <add-list :placeholder="placeHolderLists" @enter="onAddList" />
      </div>
    </Container>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Container, Draggable } from "vue-smooth-dnd";
import { makeDropHandler } from "@/core/utils/plugins";
import Card from "@/components/card/Card.vue";
import AddList from "./add-list/AddList.vue";
import {
  ADD_LIST,
  UPDATE_ITEM,
  ADD_ITEM,
  MOVE_LIST,
  MOVE_ITEM
} from "../../store/board/action-types";

@Component<any>({
  name: "List",
  props: {
    title: {
      type: String,
      default: () => ""
    }
  },

  components: {
    Container,
    Draggable,
    AddList,
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
    },
    placeHolderLists(): string {
      return this.lists.length == 0
        ? "Adicionar nova lista"
        : "Adicionar outra lista";
    }
  },
  methods: {
    onAddList({ text }: any) {
      const vm = this as any;
      vm.$store.commit(ADD_LIST, { title: text || "" });
    },
    onAddItem(listId: string) {
      const vm = this as any;
      vm.addItem(listId, "New item", "", "");
    },
    addItem(listId: any, title: any, description: any, date: any) {
      const vm = this as any;
      vm.$store.commit(ADD_ITEM, { listId, title, description, date });
    },
    onListDrop: makeDropHandler("onListDropComplete"),
    onListDropComplete: function(src: any, trg: any) {
      const vm = this as any;
      vm.$store.commit(MOVE_LIST, [src.index, trg.index]);
    },
    onCardDrop: makeDropHandler("onCardDropComplete"),
    onCardDropComplete(src: any, trg: any, element: any, payload: any) {
      const vm = this as any;
      vm.$store.commit(MOVE_ITEM, [
        src.params[1],
        src.index,
        trg.params[1],
        trg.index
      ]);
    }
  }
})
export default class List extends Vue {}
</script>


<style lang="scss">
$column-width: 320px;

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

.add-list-container {
  width: $column-width;
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

.empty-card {
  color: #67748a;
  text-align: center;
}
</style>
