
var Vue = require('vue');
var App = require('./app.vue');

new Vue({
  el: '#app',
  render: function(h) {
    return h(App)
  }
})