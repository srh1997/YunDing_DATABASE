import Vuex from 'vuex';
import Vue from   'vue';
Vue.use(Vuex);

const state={
    chess_data:[
      {
        name:'猩红收割者',
        race:'海洋',
        vocation:'魔法师',
        charge:1,
        skill:`鲜血转换
          对目标造成伤害并回复自身`,
      },
      {
        name:'翠神',
        race:'森林',
        vocation:'德鲁伊',
        charge:1,
        skill:`为生命值最低的友军提供一层200/400/600的护盾，持续5秒`
      },
      {
        name:'荆棘之兴',
        race:'地狱火',
        vocation:'召唤使',
        charge:1,
        skill:`在角落召唤2个无法被选定的炼狱喷射者，对最近的敌人进行攻击`
      },
      {
        name:'荒漠屠夫',
        race:'沙漠',
        vocation:'狂战士',
        charge:1,
        skill:`对周围敌人造成150/275/400伤害

每命中一名敌人，回复150/250/350生命值`
      },
      {
        name:'皎月女神',
        race:'地狱火',
        vocation:'刺客',
        charge:1,
        skill:`黛安娜获得一个持续数秒的护盾并召唤三颗护体法球。法球在命中敌人后爆炸，造成伤害。`
      },
      {
        name:'扭曲树精',
        race:'森林',
        vocation:'德鲁伊',
        charge:1,
        skill:`每当茂凯受到敌方技能伤害，他的下一击都会回复生命。`
      },
      {
        name:'岩雀',
        race:'山脉',
        vocation:'魔法师',
        charge:1,
        skill:`塔莉垭引发随机敌方脚下的岩突，将远程英雄扔向自己，将近战英雄扔向反方向。`
      },
      {
        name:'祖安怒兽',
        race:'极地',
        vocation:'掠食者',
        charge:1,
        skill:`沃里克跃向生命值最低的敌方，晕眩并造成伤害。触发攻击特效`
      },
      {
        name:'深渊巨口',
        race:'剧毒',
        vocation:'掠食者',
        charge:1,
        skill:`克格莫射出腐蚀性物质并对随机敌方造成伤害。`
      },
      {
        name:'暗夜猎手',
        race:'光',
        vocation:'游侠',
        charge:1,
        skill:`薇恩对目标的第三次攻击会造成基于敌方最大生命值的真实伤害。`
      },
      {
        name:'山隐之焰',
        race:'雷霆',
        vocation:'守护神',
        charge:1,
        skill:`奥恩朝前方锥形喷出雷电，对敌方造成伤害并增加他们接下来数秒受到暴击的几率。`
      },
      {
        name:'诡术妖姬',
        race:'森林',
        vocation:'刺客 魔法师',
        charge:2,
        skill:`乐芙兰向最近的敌方施放一条锁链，短暂延迟后晕眩并对他们造成伤害。`
      },
      {
        name:'雷霆咆哮',
        race:'雷霆',
        vocation:'极地 狂战士',
        charge:1,
        skill:``
      },
      // {
      //   name:'',
      //   race:'',
      //   vocation:'',
      //   charge:1,
      //   skill:``
      // },
      // {
      //   name:'',
      //   race:'',
      //   vocation:'',
      //   charge:1,
      //   skill:``
      // },
      // {
      //   name:'',
      //   race:'',
      //   vocation:'',
      //   charge:1,
      //   skill:``
      // },



    ],
    raceList:[{},

      {
      name:'剧毒',
        intro:'(3)对目标造成伤害后会施加神经毒素效果，目标施法所需的法力值提高50%'
    },{
        name:'地狱火',
        intro:'部署多名地狱火英雄能让他们的技能短暂地灼烧目标脚下的地面，对站在火中的敌人造成伤害。伤害随地狱火英雄数增加。' +
          '\n' +
          '(3)地狱火英雄的技能在接下来的5秒内灼烧地面，对目标额外造成80%的魔法伤害。\n' +
          '\n' +
          '(6)地狱火英雄的技能在接下来的5秒内灼烧地面，对目标额外造成175%的魔法伤害。\n' +
          '\n' +
          '(9)地狱火英雄的技能在接下来的5秒内灼烧地面，对目标额外造成275%的魔法伤害。'
      },
      {
        name:'森林',
        intro:'部署多名森林英雄能在战斗开始时随机复制一个镜像（包括装备）。\n' +
          '(3)战斗开始时随机复制一个森林英雄的镜像（包括装备）。'
      },{
        name:'海洋',
        intro:'所有友军每3秒额外获得法力值\n' +
          '\n' +
          '(2)额外获得10法力值\n' +
          '\n' +
          '(4)额外获得25法力值\n' +
          '\n' +
          '(6)额外获得40法力值'
      },{
        name:'沙漠',
        intro:'获得护甲穿透\n' +
          '\n' +
          '(2)获得50%的护甲穿透\n' +
          '\n' +
          '(4)获得90%的护甲穿透'
      },{
        name:'钢铁',
        intro:'生命值低于50%时，免疫所有伤害\n' +
          '\n' +
          '(2)持续2秒\n' +
          '\n' +
          '(3)持续3秒\n' +
          '\n' +
          '(4)持续4秒'
      },{
        name:'雷霆',
        intro:'每当电能单位造成或承受暴击时，会对周围敌人造成伤害\n' +
          '\n' +
          '(2)造成60伤害\n' +
          '\n' +
          '(3)造成200伤害\n' +
          '\n' +
          '(4)造成500伤害'
      },{
        name:'山脉',
        intro:'(2)战斗开始时，随机一名友军获得一层1500的岩石护盾'
      },{
        name:'云霄',
        intro:'所有友军获得闪避率\n' +
          '\n' +
          '(2)+25%闪避率\n' +
          '\n' +
          '(3)+40%闪避率\n' +
          '\n' +
          '(2)+55%闪避率'
      },{
        name:'光',
        intro:'一名光单位死亡后，其他光单位获得攻速，并回复25%的生命值\n' +
          '\n' +
          '(3)获得10%攻速\n' +
          '\n' +
          '(6)获得25%攻速\n' +
          '\n' +
          '(9)获得50%攻速'
      },{
        name:'影',
        intro:'暗英雄在战斗开始后会获得一段时间内的伤害提升，这个效果会在参与击杀后刷新\n' +
          '\n' +
          '(2)50%伤害提升\n' +
          '\n' +
          '(4)100%伤害提升'
      },{
        name:'水晶',
        intro:'水晶英雄从单次攻击或技能中承受的伤害有一定上限\n' +
          '\n' +
          '(2)最多承受100伤害\n' +
          '\n' +
          '(4)最多承受60伤害'
      },
      {
        name:'极地',
        intro:`
        部署多名极地英雄让他们攻击有几率晕眩目标，几率随极地英雄数增加。
        (2)极地英雄的攻击有20%的几率对目标造成1.5秒的晕眩效果。

        (4)极地英雄的攻击有40%的几率对目标造成1.5秒的晕眩效果。

        (6)极地英雄的攻击有60%的几率对目标造成1.5秒的晕眩效果。`
      }
    ],
    vocationList:[{},
      {
        name:'剑士',
        intro:'剑士进行普通攻击时，有40%的几率造成额外打击\n' +
          '\n' +
          '(2)1次额外打击\n' +
          '\n' +
          '(4)2次额外打击\n' +
          '\n' +
          '(6)3次额外打击'
      },
      {
        name:'炼金师',
        intro:'无视单位碰撞，会一直移动'
      },
      {
        name:'守护神',
        intro:'守护神的总护甲提高\n' +
          '\n' +
          '(2)+100%护甲\n' +
          '\n' +
          '(4)+250%护甲\n' +
          '\n' +
          '(6)+400%护甲'
      },
      {
        name:'掠食者',
        intro:'(3)对生命值低于25%的敌人直接处决'
      },
      {
        name:'狂战士',
        intro:'战斗开始时，狂战士会跳向最近的敌人\n' +
          '\n' +
          '普攻有一定几率造成顺劈，造成100%伤害(2)40%的几率\n' +
          '\n' +
          '(4)80%的几率'
      },
      {
        name:'秘术',
        intro:'所有友军获得魔抗\n' +
          '\n' +
          '(2)+70魔抗\n' +
          '\n' +
          '(4)+150魔抗'
      },
      {
        name:'游侠',
        intro:'每过3秒，游侠有一定几率使他们的攻速翻倍，持续3秒\n' +
          '\n' +
          '(2)25%的几率\n' +
          '\n' +
          '(4)70%的几率\n' +
          '\n' +
          '(6)100%的几率'
      },
      {
        name:'德鲁伊',
        intro:'(2)每秒回复40生命值'
      },
      {
        name:'法师',
        intro:'施法后有一定几率再次施法：\n' +
          '\n' +
          '(3)50%的几率\n' +
          '\n' +
          '(6)100%的几率'
      },
      {
        name:'刺客',
        intro:`战斗开始时，刺客会跳向最远的敌人

                刺客的暴击伤害提高，并且获得额外暴击率

                (3)+10%暴击率 +75%暴击伤害

                (6)+20%暴击率 +150%暴击伤害`
      },
      {
        name:'随机',
          intro:'化身英雄在计算种族羁绊时算作2个单位'
      },
      {
        name :'召唤使',
        intro:'召唤物持续时间延长并获得额外生命值\n' +
          '\n' +
          '(3)40%额外生命值\n' +
          '\n' +
          '(6)100%额外生命值'
      }
    ]
};
const mutations={


};
const actions={

};
export default new Vuex.Store({
    state,
    mutations
})
