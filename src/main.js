import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {getRequest, postRequest, postRequestWithForm} from "./utils/api";
import store from "./store";

Vue.config.productionTip = false
Vue.prototype.getRequest = getRequest;
Vue.prototype.postRequest = postRequest;
Vue.prototype.postRequestWithForm = postRequestWithForm;

Vue.use(ElementUI);
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
