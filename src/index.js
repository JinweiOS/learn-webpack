import Vue from 'vue'
import Single from './Single.vue'

const app = new Vue({
    render: h => h(Single)
});

app.$mount('#app')