import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
// 引入单独模块
// import * as types from './mutation-types';
// import {BRAND_MAP} from '@/services/common';

Vue.use(Vuex);
// 开放环境:打印store
const debug = process.env.NODE_ENV !== 'production';
const store = new Vuex.Store({
  state: {},
  actions: {
  },
  mutations: {
  },
  modules: {
  },
  strict: debug, // 开发环境下使用严格模式
  plugins: debug ? [createLogger()] : [] // 开发环境输出log
});
export default store;
