<template>
  <div id="chess">
<!--  <img src="../assets/chess.jpg" alt="">-->
    <span>筛选条件：</span>
    <span>卡费：</span>
    <select v-model="charge">
      <option :value="chargeList.indexOf(k)" v-for="k in chargeList">{{k}}<span v-if="k>0">费</span></option>
  </select>
    <span>种族：</span>
    <select v-model="race_id">
      <option :value="raceList.indexOf(race)" v-for="race in raceList">{{race}}</option>
    </select>
    <span>职业：</span>
    <select v-model="vocation_id">
      <option :value="vocationList.indexOf(vocation)" v-for="vocation in vocationList">{{vocation}}</option>
    </select>
    <div id="raceAndVocationIntro">
      <div v-if="race_id>0" ><b>种族羁绊</b>：{{this.$store.state.raceList[race_id].name}}:{{this.$store.state.raceList[race_id].intro}}</div>
      <div v-if="vocation_id>0"><b>职业羁绊</b>：{{this.$store.state.vocationList[vocation_id].name}}：{{this.$store.state.vocationList[vocation_id].intro}}</div>
    </div>
    <div class="chess_search container">
        <div class="chess_card"
             v-if=" (charge==chess.charge || charge==0)&&
                    (raceList[race_id]==chess.race||raceList[race_id]=='')&&
                    (vocationList[vocation_id]==chess.vocation ||vocationList[vocation_id]=='')"
             v-for="chess in chess_data">
          <img :src='"../../static/img/"+chess.name+".jpg"' width="100%">
          {{chess.name}}<br/>
          种族：{{chess.race}}<br>
          职业：{{chess.vocation}}<br>
          费用：${{chess.charge}}<br/>
          技能：{{chess.skill}}<br>
        </div>
    </div>

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
          raceList:['','剧毒','炼狱','林地','海洋','沙漠','钢铁','电能','山脉','风','光','暗','水晶'],
          vocationList:['','剑士','炼金师','守护神','掠食者','狂战士','秘术','游侠','德鲁伊','法师','刺客','化身','召唤使'],
          chargeList:['',1,2,3,4,5],
          chess_data:this.$store.state.chess_data,
          url:'../../static/img/chess.jpg'
        }
      },


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
    border: 1px solid black;
    padding: 10px;
    background-color: lightgreen;
    color: black;
  }
</style>
