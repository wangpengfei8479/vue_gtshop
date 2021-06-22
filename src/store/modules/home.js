import {reqBaseCategoryList} from '@/api';

console.log(reqBaseCategoryList())
const state = {
    baseCategoryList:[]
};

const actions = {
    async getBaseCategoryList({commit}){
        const result = await reqBaseCategoryList();
        commit("receive_base_cate_gory_list",result.data)
        console.log(result)
    }
};
const mutations = {
    receive_base_cate_gory_list(state,baseCategoryList){
        state.baseCategoryList = baseCategoryList;
    }
};
const getters = {

};

export default {
  state,
  mutations,
  actions,
  getters,
}