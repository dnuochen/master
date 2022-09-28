import { createStore } from "vuex";

export default createStore({
  state: {
    mess:"",
    arrs:[
      {
        text:"张三"
      },
      {
        text:"李四"
      },
      {
        text:"王五"
      },
    ],

  },
  getters: {},
  mutations: {
    increment(state){
      if(!state.mess.trim()) return
      state.arrs.unshift({text:state.mess});
    },
    delete_mutation(state,payload){
      state.arrs.splice(payload,1);
    }
  },
  actions: {},
  modules: {},
});
