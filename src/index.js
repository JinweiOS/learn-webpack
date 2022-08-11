import Vue from 'vue/dist/vue.esm.js'
import Single from './Single.vue'

const app = new Vue({
    render: h => h(Single)
});

app.$mount('#app')