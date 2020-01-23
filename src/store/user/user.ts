import { GET_INFO_USER_REQUEST, GET_INFO_USER_SUCCESS, GET_INFO_USER_ERROR } from './user.action-types'
import userService from '@/core/service/user.service';


interface ISTATE {
    user: any,
    status: string | null
}

export function state() {
    const state: ISTATE = {
        user: null,
        status: ''
    };
    return state;
}

const getters = {
    avatar: (state: ISTATE) => state.user ? state.user.avatar_url : null,
    name: (state: ISTATE) => state.user ? state.user.name : null,
    hasUser: (state: ISTATE) => state.user ? true : false
}

export const actions = {
    [GET_INFO_USER_REQUEST]: ({ commit, dispatch }: any, payload: any) => {
        return new Promise((resolve, reject) => {
            userService.getUserAsync(payload.name).then(result => {
                commit(GET_INFO_USER_SUCCESS, { user: result });
                resolve(result);
            }).catch(error => {
                commit(GET_INFO_USER_ERROR, error)
                reject(error)
            });
        });
    }

}

export const mutations = {
    [GET_INFO_USER_REQUEST]: (state: ISTATE, payload: ISTATE) => {
        state.status = 'Consultando informações do usuário...';
    },
    [GET_INFO_USER_SUCCESS]: (state: ISTATE, payload: ISTATE) => {
        state.user = payload.user;
        state.status = 'Informações consultadas com sucesso!';
    },
    [GET_INFO_USER_ERROR]: (state: ISTATE, payload: ISTATE) => {
        state.user = null;
        state.status = 'Não foi possível consultar as informações do usuário no momento...';
    },
}

export default {
    state,
    mutations,
    actions,
    getters,
}
