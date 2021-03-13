<template>
  <div id="game">
    <div v-if="decesion">
      <h2>{{decesion}}</h2>
      <div><button v-on:click="start">もういちど！</button></div>
    </div>
    <div>
      <img class="imgArea" v-bind:src="require('../assets/'+mainImg+'.png')" alt="">
    </div>
    <p>{{mainImg}}</p>
    <ul>
      <li>
        <button v-on:click="onSelected" value=0>グー</button>
      </li>
      <li>
        <button v-on:click="onSelected" value=1>チョキ</button>
      </li>
      <li>
        <button v-on:click="onSelected" value=2>パー</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    name:"game",
    props:["scores"],
    data(){
      return {
        mainImg:"グー",
        timer:null,
        count:0,
        imglist:[
          "グー",
          "チョキ",
          "パー"
        ],
        decesion:"",
      }
    },
    created(){
      this.start();
    },
    watch: {
      
    },
    methods:{
      start(){
        this.reset()
        clearInterval(this.timer)
        this.timer = setInterval(function() {
          this.count ++
          this.mainImg=this.imglist[this.count%3]
        }.bind(this), 1000);
      },
      onSelected(e){
        clearInterval(this.timer);
        let yourHand = parseInt(this.imglist.indexOf(this.mainImg),10)
        let myHand = parseInt(e.target.value,10)
        this.decesion = (function (myhand, yourhand) {
          switch (myhand) {
            case 0:
              if (yourhand===0){
                return "あいこ"
              } else if (yourhand===1){
                return "勝ち"
              } else if (yourhand===2){
                return "負け"
              }
              break;
            case 1:
              if (yourhand===1){
                return "あいこ"
              } else if (yourhand===2){
                return "勝ち"
              } else if (yourhand===0){
                return "負け"
              }
              break;
            case 2:
              if (yourhand===2){
                return "あいこ"
              } else if (yourhand===0) {
                return "勝ち"
              } else if (yourhand===1){
                return "負け"
              }
              break;
           }
        }(myHand,yourHand))
        const btns = document.querySelectorAll('button');
        for (var i =0;i<btns.length; i++){
          btns[i].setAttribute('disabled',true);
        }
        this.scores.push(this.decesion)
        this.storeLocalStorage(this.scores)
      },
      reset(){
        this.decesion=""
        const btns = document.querySelectorAll('button');
        for (var i =0;i<btns.length; i++){
          btns[i].removeAttribute('disabled');
        }
      },
      storeLocalStorage(v){
        this.$localStorage.set("message",v)
      }
    }
  }
</script>

<style>
  .imgArea {width: 100px;height:100px;}
</style>
