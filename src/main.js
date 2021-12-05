import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import VueParticles from "vue-particles";
import '../public/reset.css';

Vue.config.productionTip = false
Vue.use(VueParticles)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
