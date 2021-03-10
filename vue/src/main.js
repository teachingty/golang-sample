import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Game from './components/game.vue'
import Score from './components/score.vue'
import VueLocalStorage from "vue-localstorage"

Vue.config.productionTip = false

Vue.use(VueRouter);
const router = new VueRouter({
  routes:[
    {
      path:'/game',
      component:Game
    },
    {
      path:'/score',
      component:Score
    },
    {
      path:'*',
      redirect:"/game"
    }
  ]
});

Vue.use(VueLocalStorage)
// const LocalStorage = new VueLocalStorage({
//   stringKey:{
//     type:String
//   }
// });

new Vue({
  router,
  LocalStorage:{
    stringKey:{
      type:String
    }
  },
  render: h => h(App),
}).$mount('#app')
