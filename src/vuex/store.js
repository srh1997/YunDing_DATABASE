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
        name:'沙漠死神',
        race:'光',
        vocation:'守护神',
        charge:1,
        skill:'内瑟斯暂时进入狂暴状态，在此期间获得额外生命值并每秒都对相邻敌方造成伤害。'
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
        name:'武器大师',
        race:'光',
        vocation:'狂战士',
        charge:2,
        skill:`贾克斯接下来数秒获得100%闪避几率，随后晕眩并对相邻敌方造成伤害`
      },
      {
        name:'虚空先知',
        race:'影',
        vocation:'召唤使',
        charge:2,
        skill:`玛尔扎哈开启传送门召唤虚灵。 星级越高，虚灵数越多。`
      },
      {
        name:'万花通灵',
        race:'森林',
        vocation:'德鲁伊',
        charge:2,
        skill:`妮蔻向随机敌方扔出会爆炸3次的种子，爆炸范围会越来越大。`
      },
      {
        name:'暗黑元首',
        race:'海洋',
        vocation:'魔法师',
        charge:2,
        skill:`辛德拉在目标位置幻化一颗海洋法球，对敌方造成伤害。`
      },
      {
        name:'虚空遁地兽',
        race:'钢铁',
        vocation:'掠食者',
        charge:2,
        skill:`雷克塞噬咬她的目标，造成真实伤害。`
      },
      {
        name:'水晶先锋',
        race:'水晶',
        vocation:'掠食者',
        charge:2,
        skill:`斯卡纳获得一个持续数秒的护盾，他在护盾存在时获得额外攻速。`
      },
      {
        name:'惩戒之箭',
        race:'地狱火',
        vocation:'游侠',
        charge:2,
        skill:`韦鲁斯蓄力并发射一支箭，对一条线上的所有敌方造成伤害。`
      },
      {
        name:'弗雷尔卓德之心',
        race:'极地',
        vocation:'守护神',
        charge:2,
        skill:`布隆朝距离最远的敌方举起盾牌，降低该方向传来的伤害并格挡飞行道具。`
      },
      {
        name:'魂锁典狱长',
        race:'海洋',
        vocation:'守护神',
        charge:2,
        skill:`锤石向生命值最低的队友扔出灯笼，让他和附近友军获得持续数秒的护盾。`
      },
      {
        name:'疾风剑豪',
        race:'云霄',
        vocation:'剑士',
        charge:2,
        skill:`亚索闪烁到装备最多的敌方身边，快速连续斩击并在持续时间内将他们击飞。`
      },
      {
        name:'元素女皇',
        race:'随机',
        vocation:'刺客',
        charge:3,
        skill:`奇亚娜突进到目标身边向其投掷一股风，对风穿过的敌方造成伤害并晕眩他们。`
      },
      {
        name:'永恒梦魇',
        race:'钢铁',
        vocation:'刺客',
        charge:3,
        skill:`魔腾每第四击都会获得强化，对相邻的所有敌方造成伤害，并将伤害的一部分用于治疗自己。`
      },
      {
        name:'雷霆咆哮',
        race:'雷霆 极地',
        vocation:'狂战士',
        charge:3,
        skill:`沃利贝尔撕咬目标，造成伤害。雷霆撕咬会斩杀低于一定生命值的敌方，完全恢复沃利贝尔的法力值`
      },
      {
        name:'亡灵战神',
        race:'影',
        vocation:'狂战士',
        charge:3,
        skill:`赛恩蓄力后猛击前方区域，击飞敌方并造成伤害。`
      },
      {
        name:'祖安狂人',
        race:'剧毒',
        vocation:'狂战士',
        charge:3,
        skill:`蒙多医生会生成一个围绕自己持续数秒的毒雾，对相邻敌方造成伤害并治疗自己`
      },
      {
        name:'沙漠皇帝',
        race:'沙漠',
        vocation:'召唤使',
        charge:3,
        skill:`阿兹尔在附近随机敌方身旁召唤无法选中的黄沙士兵，他会随阿兹尔一起进攻。`
      },
      {
        name:'邪恶小法师',
        race:'影',
        vocation:'魔法师',
        charge:3,
        skill:`维迦向敌方英雄掷出魔法能量，造成伤害 斩杀星级低于维迦的敌方。`
      },
      {
        name:'众星之子',
        race:'光',
        vocation:'秘术',
        charge:3,
        skill:`索拉卡对随机一名敌方周围的区域布置结界，对英雄造成伤害并阻止区域内的英雄获得法力值。`
      },
      {
        name:'永猎双子',
        race:'地狱火 影',
        vocation:'游侠',
        charge:3,
        skill:`狼灵撕咬目标时羊灵会从目标身上离开，造成伤害。`
      },
      {
        name:'探险家',
        race:'极地',
        vocation:'游侠',
        charge:3,
        skill:`伊泽瑞尔向生命值最低的敌方发射一块碎冰，对接触到的第一个敌方造成伤害并可触发攻击特效`
      },
      {
        name:'深海泰坦',
        race:'海洋',
        vocation:'守护神',
        charge:3,
        skill:`诺提勒斯朝最远的敌方射出一束冲击波，将他们击飞并晕眩相当长时间。`
      },
      {
        name:'战争女神',
        race:'沙漠',
        vocation:'剑士',
        charge:3,
        skill:`希维尔的攻击会暂时弹射至周围单位。`
      },
      {
        name:'暗裔剑魔',
        race:'光',
        vocation:'剑士',
        charge:3,
        skill:`亚托克斯向面前圆形区域猛砸他的巨剑，对命中的敌人造成伤害。`
      },
      {
        name:'虚空掠夺者',
        race:'沙漠',
        vocation:'刺客',
        charge:4,
        skill:`卡兹克暂时进入潜行状态，变为不可选取并且下次攻击会暴击。`
      },
      {
        name:'奥拉夫',
        race:'极地',
        vocation:'狂战士',
        charge:4,
        skill:`战斗剩余时间里，奥拉夫在数秒内获得巨额攻速和生命偷取，并且免疫控制`
      },
      {
        name:'黑暗之女',
        race:'地狱火',
        vocation:'召唤使',
        charge:4,
        skill:`安妮召唤提伯斯至附近格子。 提伯斯在存活期间会攻击附近敌方。`
      },
      {
        name:'牧魂人',
        race:'光',
        vocation:'召唤使',
        charge:4,
        skill:`约里克对生命值最低的数名队友进行祝福，阵亡后将他们复活为圣光仆从。 星级越高，目标越多。`
      },
      {
        name:'复仇焰魂',
        race:'地狱火',
        vocation:'魔法师',
        charge:4,
        skill:`布兰德发射一颗会弹射的火焰球，对命中的敌方造成伤害。`
      },
      {
        name:'风暴之怒',
        race:'云霄',
        vocation:'秘术',
        charge:4,
        skill:`迦娜击退大范围内的敌方并引导数秒，持续恢复附近友军生命。`
      },
      {
        name:'寒冰射手',
        race:'水晶',
        vocation:'游侠',
        charge:4,
        skill:`接下来的数秒艾希获得额外攻速，攻击转变为一阵强力的飓风箭阵，造成额外伤害。`
      },
      {
        name:'瘟疫之源',
        race:'剧毒',
        vocation:'游侠',
        charge:4,
        skill:`图奇暂时获得无限射程，他的攻击会变为穿刺箭头，对穿过的所有敌方造成伤害。`
      },
      {
        name:'熔岩巨兽',
        race:'山脉',
        vocation:'守护神',
        charge:4,
        skill:`墨菲特朝随机敌人冲击，对目标附近的所有敌人造成伤害并击飞。`
      },
      {
        name:'炼金术士',
        race:'剧毒',
        vocation:'炼金师',
        charge:5,
        skill:`辛吉德会在背后留下毒雾，对站在上面的地方造成伤害`
      },
      {
        name:'影流之主',
        race:'雷霆',
        vocation:'刺客 召唤使',
        charge:5,
        skill:`劫在当前目标身后创造一个携带了同样装备的影分身。 影分身同样能够施放影分身。`
      },
      {
        name:'无极剑圣',
        race:'影',
        vocation:'秘术 剑士',
        charge:5,
        skill:`易变得不可选取并在数秒内回复巨额生命值。 引导后短暂时间内，他的攻击会在命中后造成额外魔法伤害`
      },
      {
        name:'唤潮鲛姬',
        race:'海洋',
        vocation:'秘术',
        charge:5,
        skill:`朝随机敌人方向召唤一阵巨浪，伤害并击飞沿途的敌人，对穿越的友军提供命中造成额外魔法伤害的效果。`
      },
      {
        name:'瓦洛兰之盾',
        race:'水晶',
        vocation:'守护神',
        charge:5,
        skill:`短暂延迟后，塔里克和附近全体友军在数秒内免疫伤害。`
      },
      {
        name:'光辉女郎',
        race:'随机',
        vocation:'大元素使',
        charge:7,
        skill:'拉克丝发射一束巨型光波对敌方造成巨额伤害，并根据击中敌方数回复法力值。'
      }



    ],
    raceList:[{
      name:'',
      intro:''
    },

      {
      name:'剧毒',
        intro:'(3)对目标造成伤害后会施加神经毒素效果，目标施法所需的法力值提高50%'
    },{
        name:'地狱火',
        intro:`部署多名地狱火英雄能让他们的技能短暂地灼烧目标脚下的地面，对站在火中的敌人造成伤害。伤害随地狱火英雄数增加。 
        地狱火英雄的技能在接下来的5秒内灼烧地面，对目标额外造成80%/175%/275%的魔法伤害。`
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
      },
      {
        name:'随机',
        intro:`拉克丝：一局游戏共有10个拉克丝，各属于一个元素。一旦购买某一个拉克丝后，你在商店中看到的剩余拉克丝都是同一个元素。
              奇亚娜元素女皇奇亚娜的元素与游戏元素对应，根据本局游戏的元素（火水土风）而改变她的元素，作为3费的刺客棋子，她是中期一个不错的伤害来源角色。`
      }
    ],
    vocationList:[{
      name:'',
      intro:''
    },
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
        intro:'炼金师会穿过其他单位并且永不停止移动。'
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
        name:'魔法师',
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
        name :'召唤使',
        intro:'召唤物持续时间延长并获得额外生命值\n' +
          '\n' +
          '(3)40%额外生命值\n' +
          '\n' +
          '(6)100%额外生命值'
      },
      {
        name:'大元素使',
          intro:'大元素使存在于场上时计算元素特质加成按双倍计算。'
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
