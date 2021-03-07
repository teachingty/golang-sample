<template>
  <div id="app">
    <h1>じゃんけんゲーム</h1>
    <ul>
      <li><button>ゲーム</button></li>
      <li>成績</li>
    </ul>



    <ul>
      <li>
        <button v-on:click="onSelected">グー</button>
      </li>
      <li>
        <button v-on:click="onSelected">チョキ</button>
      </li>
      <li>
        <button v-on:click="onSelected">パー</button>
      </li>
    </ul>
    <button>{{msg}}</button>
  </div>
</template>

<script>
  export default{
    name:"App",
    data(){
      return {
        msg:"test message 1",
        imglist:[
          "./img/グー.png",
          "./img/チョキ.png",
          "./img/パー.png"
        ]
      }
    },
    watch: {

    }
  }
</script>

<style>

</style>
