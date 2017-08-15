// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Input, Button, Pagination, Form, Radio, Dialog} from 'element-ui'
Vue.component(Input.name, Input)
Vue.component(Pagination.name, Pagination)
Vue.component(Button.name, Button)
Vue.component(Form.name, Form)
Vue.component(Radio.name, Radio)
Vue.component(Dialog.name, Dialog)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
