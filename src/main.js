// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'
Vue.use(VueAxios, axios)

// axios.defaults.withCredentials = true
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth === true){
    console.log("觸發守衛")
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`;
    axios.post(api).then((response) =>{
        if(response.data.success){
          console.log("通過cookie驗證~")
          next()
        }else{
          console.log("未通過cookie驗證")
          next({
            path: '/login'
          })
        }
    })
  }else{
    next()
  }
})