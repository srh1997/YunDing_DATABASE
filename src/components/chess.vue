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
    <div v-if="race_id>0">种族羁绊：{{this.$store.state.raceList[race_id].name}}:{{this.$store.state.raceList[race_id].intro}}</div>
    <div v-if="vocation_id>0">职业羁绊：{{this.$store.state.vocationList[vocation_id].name}}：{{this.$store.state.vocationList[vocation_id].intro}}</div>
    <div class="chess_search container">
        <div class="nuo">{{dataSave[1].name}}</div>
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
          raceList:['','恶魔','龙','浪人','极地','帝国','忍者','贵族','暗影','海盗','虚空','约德尔人','海克斯科技','狂野'],
          vocationList:['','剑士','斗士','元素使','护卫','枪手','骑士','游侠','换形师','法师','刺客'],
          chargeList:['',1,2,3,4,5],
          dataSave:this.$store.state.chess_data

        }
      }
    }
</script>

<style scoped>
    .container {
      margin-top: 20px;
      width: 400px;
      margin: 0 auto;
    }
    .nuo{

      height: 100px;
      color: white;
      background: url("../assets/chess/诺克萨斯之手.jpg")
    }
</style>
