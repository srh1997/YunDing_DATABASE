<template>
  <div id="chess">
<!--  <img src="../assets/chess.jpg" alt="">-->
    <span>筛选条件：</span>
    <span>卡费：</span>
    <select v-model="charge">
      <option :value="k" v-for="k in chargeList">{{k}}<span v-if="k>0">费</span></option>
  </select>
    <span>元素：</span>
    <select v-model="race_id">
      <option :value="raceList.indexOf(race)" v-for="race in raceList">{{race.name}}</option>
    </select>
    <span>职业：</span>
    <select v-model="vocation_id">
      <option :value="vocationList.indexOf(vocation)" v-for="vocation in vocationList">{{vocation.name}}</option>
    </select>
    <div id="raceAndVocationIntro">
      <div v-if="race_id>0" ><b>元素羁绊</b>：{{raceList[race_id].name}}:{{raceList[race_id].intro}}</div>
      <div v-if="vocation_id>0"><b>职业羁绊</b>：{{vocationList[vocation_id].name}}：{{vocationList[vocation_id].intro}}</div>
    </div>
    <div class="chess_search container">
        <div class="chess_card"
             v-if=" (charge==chess.charge || charge==0)&&
                    (chess.race.includes(raceList[race_id].name)||raceList[race_id].name=='')&&
                    (chess.vocation.includes(vocationList[vocation_id].name )||vocationList[vocation_id].name=='')"
             v-for="chess in chess_data"
             :style="{'border':'7px solid '+getColor(chess.charge)}">
          <img :src='"../../static/img/"+chess.name+".jpg"' width="100%">
          {{chess.name}}<br/>
          元素：<span @mouseenter="toggleRace(chess.race)"  @mouseleave="showIntro=false">{{chess.race}}</span><br>
          职业：<span @mouseenter="toggleVoc(chess.vocation)" @mouseleave="showIntro=false">{{chess.vocation}}</span><br>
          费用：${{chess.charge}}<br/>
          技能：{{chess.skill}}<br>
        </div>
    </div>
    <div id="insertIntro" v-if="showIntro">{{intro}}</div>

  </div>
</template>

<script>
    export default {
        name: "chess",
      data:function () {
        return {
          race_id:0,
          vocation_id:0,
          charge:0,
          // raceList:['','剧毒','地狱火','森林','海洋','沙漠','钢铁','雷霆','山脉','云霄','光','影','水晶','极地','随机'],
          // vocationList:['','剑士','炼金师','守护神','掠食者','狂战士','秘术','游侠','德鲁伊','魔法师','刺客','召唤使','大元素使'],
          chargeList:['',1,2,3,4,5,7],
          chess_data:this.$store.state.chess_data,
          raceList:this.$store.state.raceList,
          vocationList:this.$store.state.vocationList,
          intro:'',
          showIntro:false
        }
      },
      methods:{
          getColor:function(charge){
            let bg_color;
            switch (charge) {
              case 1:bg_color='grey';
              break;
              case 2:bg_color='green';
              break;
              case 3:bg_color='#3d3d96';
              break;
              case 4:bg_color='purple';
              break;
              case 5:bg_color='gold';
              break;
              case 7:bg_color='#5ffcff'
            }
            return bg_color;
          },
        toggleRace:function (race) {
          this.intro='';
          for(let k of this.raceList){
            if(k.name && race.includes(k.name))this.intro+=(k.name+':'+k.intro+' \n ');
          };
          this.showIntro=true;
        },
        toggleVoc:function (vocation) {
            this.intro='';
          for(let k of this.vocationList){
            if(k.name && vocation.includes(k.name))this.intro+=(k.name+':'+k.intro+' \n ');
          };
          this.showIntro=true;
        }

      }


    }
</script>

<style>
    .container {
      width: 400px;
      height: 1000px;
      margin: 0 auto;
      margin-top: 30px;
    }
    #raceAndVocationIntro {
      width: 500px;
      margin: 0 auto;
      text-align: left;
    }
  .chess_card{
    text-align: left;
    margin-top: 10px;
    /*border: 3px solid deepskyblue;*/
    border-radius: 10px;
    padding: 10px;
    background-color: black;
    color: white;

  }
  #insertIntro {
    background: #e7e7e7;
    border: 2px solid #555555;
    border-radius: 10px;
    display: inline-block;
    padding: 10px;
    position: fixed;
    top: 50%;
    left: 50%;
    pointer-events: none;
    transform: translateX(-50%) translateY(-50%);
  }
</style>
