// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Input, Button, Pagination, Form, Radio,Option, Dialog, 
	Menu, Submenu, MenuItem, MenuItemGroup, Select,
	DatePicker, Transfer, Cascader, Card, Upload, Table,
	TableColumn, FormItem, MessageBox, Message} from 'element-ui'
	
Vue.component(Input.name, Input)
Vue.component(Pagination.name, Pagination)
Vue.component(Button.name, Button)
Vue.component(Form.name, Form)
Vue.component(Radio.name, Radio)
Vue.component(Dialog.name, Dialog)
Vue.component(Menu.name, Menu)
Vue.component(Submenu.name, Submenu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(MenuItemGroup.name, MenuItemGroup)
Vue.component(Select.name, Select)
Vue.component(Option.name, Option)
Vue.component(DatePicker.name, DatePicker)
Vue.component(Transfer.name, Transfer)
Vue.component(Cascader.name, Cascader)
Vue.component(Card.name, Card)
Vue.component(Upload.name, Upload)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(FormItem.name, FormItem)
Vue.component(Message.name, Message)
Vue.component(MessageBox.name, MessageBox)

Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
