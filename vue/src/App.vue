<template>
  <div id="app">
    <h1>じゃんけんゲーム</h1>
    <ul class="nav">
      <li><router-link to="/game">ゲーム</router-link></li>
      <li><router-link to="/score">成績</router-link></li>
    </ul>
    <div class="inner">
      <!-- <game></game>
      <score></score> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  // import Game from "./components/game.vue"
  // import Score from "./components/score.vue"

  export default{
    name:"App",
    // components:{
    //   Game,
    //   Score
    // },
    data(){
      return {
      }
    }
  }
</script>