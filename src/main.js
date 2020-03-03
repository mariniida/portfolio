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

const accessToken = 'MC5YbDRXWHhJQUFDQUFScG1f.Au-_vS3vv73vv71LB--_ve-_ve-_ve-_ve-_ve-_ve-_ve-_ve-_vQnvv73vv73vv71a77-977-9dAcPRu-_ve-_ve-_ve-_ve-_vQ';

Vue.use(ElementUI,{
  locale
});

Vue.use(PrismicVue,{
  endpoint: window.prismic.endpoint,
  linkResolver,
  apiOptions: { accessToken }
});
//Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
