import Vue from 'vue'
import App from './App.vue'
import router from './router'




Vue.config.productionTip = false
import {InlineSvgPlugin} from 'vue-inline-svg';
Vue.use(InlineSvgPlugin);


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')

