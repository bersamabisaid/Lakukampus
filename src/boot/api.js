import Vue from 'vue';
import api from 'helpers/api';

window.$api = api;
Vue.prototype.$api = api;
