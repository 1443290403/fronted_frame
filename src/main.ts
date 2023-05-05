import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import moment from 'moment'
import router from './router'
import tinymce from 'tinymce'
import * as echarts from 'echarts'
import 'echarts-wordcloud/dist/echarts-wordcloud'
import 'echarts-wordcloud/dist/echarts-wordcloud.min'
import 'echarts-liquidfill'
import baiDuMap from 'vue-baidu-map'
import ElementUI from 'element-ui'
import { Base64 } from 'js-base64'
import VueTinymce from '@packy-tang/vue-tinymce'
import VueCodeMirror from 'vue-codemirror'
import VueAMap from 'vue-amap'
import Print from 'vue-print-nb'


Vue.prototype.url = process.env.BASE_URL
Vue.prototype.curVersion = '/api/1.0'

Vue.prototype.apiUrl = Vue.prototype.url + Vue.prototype.curVersion

// 后台地址,在环境变量中配置 2022.7.11修改
Vue.prototype.wsUrl = process.env.WS_URL
Vue.prototype.domainName = process.env.BASE_URL
Vue.prototype.tenantUrl = 'http://192.168.0.188:9002' // window.location.href.split(`/#`)[0]

Vue.prototype.kkPreviewUrl = 'http://124.71.204.244:8012/onlinePreview?url='
Vue.prototype.pcUrl = Vue.prototype.url

Vue.config.productionTip = false

window.xmlns = 'http://www.w3.org/2000/svg'

new Vue({
  router,
  components: {
    App
  },
  template: '<App/>'
}).$mount('#app')
