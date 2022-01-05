import Vue from 'vue';
import router from './router';
require('./bootstrap');

window.Vue = require('vue').default;


Vue.component('index-component', require('./components/Index.vue').default);


const app = new Vue({
    el: '#app',
    router
});
