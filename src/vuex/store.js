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
    raceList:[{},

      {
      name:'恶魔',
        intro:'②/④/⑥ 恶魔的普通攻击有40%几率抽取目标15/40/60点法力值'
    },{
        name:'龙',
        intro:'② 龙族获得75%魔免'
      },
      {
        name:'浪人',
        intro:'① 浪人周围没有友军时，获得一层等同于自身最大生命值的护盾'
      },{
        name:'极地',
        intro:'②/④/⑥ 极地的攻击有20%/30%/45%几率对目标造成持续2秒的晕眩效果。'
      },{
        name:'帝国',
        intro:'②/④ 随机1名/全体帝国单位造成双倍伤害'
      },{
        name:'忍者',
        intro:'①/④ 忍者获得50/80攻击力和40%/80%法术强度，并只在有1个或4个忍者时触发'
      },{
        name:'贵族',
        intro:'③/⑥ 随即1名/全体友军获得100点护甲并且每次攻击治疗该友军35点生命值。'
      },{
        name:'暗影',
        intro:'② 在战斗开始时诅咒一名随机的敌人将其生命值设置为100。'
      },{
        name:'海盗',
        intro:'③ 在与另一名玩家作战之后，最多可赚取4枚额外的金币。'
      },{
        name:'机器人',
        intro:'① 在开始战斗时充满法力值。'
      },{
        name:'虚空',
        intro:'②/④ 随即一名/所有虚空单位造成真实伤害'
      },{
        name:'约德尔人',
        intro:'③/⑥/⑨ 所有约德尔人单位获得30%/60%/90%闪避'
      },{
        name:'海克斯科技',
        intro:'②/④ 战斗开始时释放一枚海克斯炸弹，使随机一名装有装备的敌军1/2半径内敌军装备失效8秒'
      },
      {
      name:'狂野',
      intro:'②/④ 狂野友军/全体友军的攻击会生成怒气层数，最多5层，每层怒气提供10%的攻击速度加成。4狂野时全体友军普通攻击无法被闪避'
    },
    ],
    vocationList:[{},
      {
        name:'剑士',
        intro:'③/⑥/⑨ 剑士的攻击有35%概率打出1/2/3次额外攻击'
      },
      {
        name:'斗士',
        intro:'②/④/⑥ 斗士获得250/500/900点最大生命值'
      },
      {
        name:'元素使',
        intro:'③ 在战斗开始时召唤一个元素之灵，血量：2200，攻击力：100'
      },
      {
        name:'护卫',
        intro:'② 护卫邻近友军获得45点护甲，多个护卫可以叠加'
      },
      {
        name:'枪手',
        intro:'②/④/⑥ 枪手的攻击有50%几率对攻击范围内的1/2/4个敌人进行额外打击'
      },
      {
        name:'骑士',
        intro:'②/④/⑥ 所有友军格挡任何伤害来源15/35/60点伤害'
      },
      {
        name:'游侠',
        intro:'②/④ 游侠每3秒钟就有25%/70%的概率使攻速翻倍，持续3秒'
      },
      {
        name:'换形师',
        intro:'③/⑥ 换形师在变形时获得额外60%/100%最大生命值'
      },
      {
        name:'法师',
        intro:'③/⑥/⑨ 所有友军获得40%/120%/175%法术强度'
      },
      {
        name:'刺客',
        intro:'③/⑥/⑨ 刺客获得5%/20%/30%暴击率和75%/150%/225%暴击伤害'
      },
    ]
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
