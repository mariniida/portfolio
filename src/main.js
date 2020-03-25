// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-chalk/index.css';

import PrismicVue from 'prismic-vue';
import linkResolver from './link-resolver';
import htmlSerializer from './html-serializer';

const accessToken = 'MC5YbDVLQ3hJQUFDSUFObXlK.FwsU77-9Ae-_vRfvv71xYe-_vVplYu-_vRPvv70z77-9DmLvv70577-9Z3dE77-977-9YD17';

Vue.use(ElementUI,{
  locale
});

Vue.use(PrismicVue,{
  endpoint: window.prismic.endpoint,
  linkResolver,
  htmlSerializer: htmlSerializer,
  apiOptions: { accessToken }
});
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
