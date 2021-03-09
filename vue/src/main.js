import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Game from './components/game.vue'
import Score from './components/score.vue'

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

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')