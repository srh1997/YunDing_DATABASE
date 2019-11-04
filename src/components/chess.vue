<template>
  <div id="chess">
<!--  <img src="../assets/chess.jpg" alt="">-->
    <span>筛选条件：</span>
    <span>卡费：</span>
    <select>
    <option value="#"></option>
    <option value="1">1费</option>
    <option value="2">2费</option>
    <option value="3">3费</option>
    <option value="4">4费</option>
    <option value="5">5费</option>
  </select>
    <span>种族：</span>
    <select>
      <option value="#"></option>
      <option value="1">恶魔</option>
      <option value="2">龙</option>
      <option value="3">浪人</option>
      <option value="4">极地</option>
      <option value="5">帝国</option>
      <option value="6">忍者</option>
      <option value="7">贵族</option>
      <option value="8">暗影</option>
      <option value="9">海盗</option>
      <option value="10">机器人</option>
      <option value="11">虚空</option>
      <option value="12">约德尔人</option>
      <option value="13">海克斯科技</option>
      <option value="14">狂野</option>
    </select>
    <span>职业：</span>
    <select>
      <option value="#"></option>
      <option value="1">剑士</option>
      <option value="2">斗士</option>
      <option value="3">元素使</option>
      <option value="4">护卫</option>
      <option value="5">枪手</option>
      <option value="6">骑士</option>
      <option value="7">游侠</option>
      <option value="8">换形师</option>
      <option value="9">法师</option>
      <option value="10">刺客</option>


    </select>
    <div>种族羁绊：{{msg}}</div>

  </div>
</template>

<script>
    export default {
        name: "chess"
    }
</script>

<style scoped>

</style>
