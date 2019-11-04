<template>
  <div class="hello">
    <img src="../assets/title.jpg" alt="">
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
export default {
  // name: 'HelloWorld',
  // data () {
  //   return {
  //     msg: 'Welcome to Your Vue.js App'
  //   }
  // },
  // methods:{
  //     addCountEvent(n){
  //       console.log('+');
  //       this.$store.commit('addCount',n)
  //     },
  //     decCountEvent(n){
  //       console.log('-');
  //       this.$store.commit('decCount',n)
  //     },
  //     ...mapMutations({
  //       handleAddClick:'addCount',
  //       handleDecClick:'decCount'
  //     })
  //   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
