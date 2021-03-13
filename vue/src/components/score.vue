<template>
  <div id="score">
    <h2>成績</h2>
    <div><button type="button" @click="dataReset">クリア</button></div>
    <ul v-if="scores">
      <li v-for="(score,i) in this.scores" :key="score.message">
        {{i+1}}回目結果：{{score}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    name:"score",
    props:["scores"],
    data(){
      return {
      }
    },
    methods:{
      dataReset(){
        this.score = []
        this.deleteLocalStorage("message")
      },
      deleteLocalStorage(k){
        this.$localStorage.remove(k)
      },
    }
  }
</script>

<style>

</style>
