// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'


//按需加载element-ui里的组件
import {Input, Button, Pagination, Form, Radio,Option, Dialog, 
	Menu, Submenu, MenuItem, MenuItemGroup, Select,
	DatePicker, Transfer, Cascader, Card, Upload, Table,
	TableColumn, FormItem, MessageBox, Message, Checkbox, Tooltip,
	Tabs, TabPane} from 'element-ui'
	
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
Vue.component(Checkbox.name, Checkbox)
Vue.component(Tooltip.name, Tooltip)
Vue.component(Tabs.name, Tabs)
Vue.component(TabPane.name, TabPane)
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;

import App from './App'
import router from './router'
import store from './store'
import '@/permission' // 用户权限控制
import '@/assets/iconfont/iconfont.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
