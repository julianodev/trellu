import { makeItem, makeList } from '../utils/data';
import { getItemById, getListById, getListByItemId } from '../utils/board'
import { REMOVE_ITEM, MOVE_ITEM, UPDATE_ITEM, ADD_ITEM, MOVE_LIST, ADD_LIST, RESET_BOARD } from './action-types';

export function state() {
    return {
        lists: [],
    }
}

const getters = {
    getListById: (state: any) => (listId: any) => {
        return getListById(state.lists, listId)
    },

    getListByItemId: (state: any) => (itemId: any) => {
        return getListByItemId(state.lists, itemId)
    },

    getItemById: (state: any) => (itemId: any) => {
        return getItemById(state.lists, itemId)
    }
}

export const mutations = {
    [RESET_BOARD](state: any) {
        state.lists = []
    },

    [ADD_LIST](state: any, { title }: any) {
        state.lists.push(makeList(title))
    },

    [MOVE_LIST](state: any, [fromIndex, toIndex]: any) {
        state.lists.splice(toIndex, 0, state.lists.splice(fromIndex, 1)[0])
    },

    [REMOVE_ITEM](state: any, { listId }: any) {
        const index = state.lists.findIndex((list: any) => list.id === listId)
        state.lists.splice(index, 1)
    },

    [ADD_ITEM](state: any, { listId, title, description, date }: any) {
        const list = getListById(state.lists, listId)
        list.items.push(makeItem(title, description, date))
    },

    [UPDATE_ITEM](state: any, { itemId, title, description, date }: any) {
        const item = getItemById(state.lists, itemId)
        if (item) {
            Object.assign(item, makeItem(title, description, date, itemId))
        }
    },

    [MOVE_ITEM](state: any, [fromListRef, fromIndex, toListRef, toIndex]: any) {
        const fromList = typeof fromListRef === 'number'
            ? state.lists[fromListRef].items
            : getListById(state.lists, fromListRef)
        const toList = typeof toListRef === 'number'
            ? state.lists[toListRef].items
            : getListById(state.lists, toListRef)
        toList.splice(toIndex, 0, fromList.splice(fromIndex, 1)[0])
    },

    [REMOVE_ITEM](state: any, { itemId }: any) {
        const list = getListByItemId(state.lists, itemId)
        list.items.splice(list.items.findIndex((item: any) => item.id === itemId), 1)
    }
}

export default {
    state,
    mutations,
    getters,
}
