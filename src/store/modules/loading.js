const state = {
    status: true,
    toggle : true
}

const getters = {}
const actions = {
    toggle({commit}){
     commit("toggle");
    },
   activateLoader( {commit} , status){
     commit('setLoader' , status);
    }
}

const mutations = {
    toggle(state){
    state.toggle = ! state.toggle;
    },
    setLoader (state , status){
        state.status = status;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}