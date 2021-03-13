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
      <router-view :scores="scores"></router-view>
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
        tmp_scores : localStorage.getItem(["message"]).split(","),
      };
    },
    created:function(){
      this.scores=this.tmp_scores || []
    },
    methods:{
    },
  }
</script>