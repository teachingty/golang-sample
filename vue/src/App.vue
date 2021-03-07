<template>
  <div id="app">
    <h1>じゃんけんゲーム</h1>
    <ul>
      <li><button>ゲーム</button></li>
      <li>成績</li>
    </ul>
    <div>
      <img class="imgArea" v-bind:src="src" alt="">
    </div>
    <ul>
      <li>
        <button>グー</button>
      </li>
      <li>
        <button>チョキ</button>
      </li>
      <li>
        <button>パー</button>
      </li>
    </ul>
    <button v-on:click="showObj">メッセージボタン</button>
    <input v-model="inputmessage" placeholder="input something">
    <p>message is: {{ inputmessage }}</p>
    <button type="reset">send</button>
  </div>
</template>

<script>
  export default{
    name:"App",
    data(){
      return {
        msg:"test message 1",
        inputmessage:"",
        src:require("./img/グー.png"),
        imglist:[
          "./img/グー.png",
          "./img/チョキ.png",
          "./img/パー.png"
        ]
      }
    },
    created(){
      this.reset();
      this.start();
    },
    watch: {

    },
    methods:{
      showObj:function(){
        window.alert(this.inputmessage)
      },
      log(){
        let msg_log = "test"
        console.log(msg_log)
      },
      start(){
        this.timer = setInterval(function() {
          this.src="./img/チョキ.png";
          console.log(this.src)
        }, 1000);
      },
      reset(){
        
      }
    }
  }
</script>

<style>
  .imgArea {width: 100px;}
</style>
