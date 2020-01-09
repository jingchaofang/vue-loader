import Vue from 'vue'
import Foo from './source_es.vue'

new Vue({
  el: '#app',
  render: h => h(Foo) // https://cn.vuejs.org/v2/guide/render-function.html#createElement-%E5%8F%82%E6%95%B0
})
