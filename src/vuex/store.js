import Vuex from 'vuex';
import Vue from   'vue';
Vue.use(Vuex);

const state={
    chess_data:[
      {
        id:0,
        name:'狂野女猎手',
        race:'狂野',
        vocation:'换形师',
        charge:1,
        skill:`E：野性奔腾
奈德丽治疗自身和伤势最重的友军，然后变形。 伤害：20/70/120`
      },
      {
        id:1,
        name:'诺克萨斯之手',
        race:'帝国',
        vocation:'骑士',
        charge:1,
        skill:`Q：大杀四方
德莱厄斯挥舞他的斧头，对附近的敌人造成伤害并基于他的已损失生命值来治疗自身。 伤害：150/200/250`
      },
      {
        id:2,
        name:'',
        race:'',
        vocation:'',
        charge:0,
        skill:''
      },
      {
        id:0,
        name:'',
        race:'',
        vocation:'',
        charge:0,
        skill:''
      },
      {
        id:0,
        name:'',
        race:'',
        vocation:'',
        charge:0,
        skill:''
      },
      {
        id:0,
        name:'',
        race:'',
        vocation:'',
        charge:0,
        skill:''
      },
      {
        id:0,
        name:'',
        race:'',
        vocation:'',
        charge:0,
        skill:''
      },

    ],
    raceList:{
      '狂野':'狂野友军的攻击会生成怒气层数，最多5层，每层怒气提供10%的攻击速度加成。'
    }
};
const mutations={
  addCount(state,n=1) {
      return (state.count+=n)
  },
  decCount(state,n=1){
      return (state.count-=n)
  }

}
const actions={
    actionsAddCount(context,n=0){
        console.log(context);
    }
}
export default new Vuex.Store({
    state,
    mutations
})
