import Vue from 'vue';
import App from './App.vue';

Vue.config.devtools = true;

var old$on = Vue.prototype.$on;
Vue.prototype.$on = function(event, fn) {
  return old$on.call(this, event, function() {
    var array = [];
    array.push('$on');
    array.push(event);
    array.push(this.constructor.name);
    for (var i=0; i<arguments.length; ++i) {
      array.push(JSON.stringify(arguments[i], true, 2));
    }
    console.log.apply(console, array);
    return fn.apply(this, arguments);
  });
};

var oldDebounce = Vue.options.filters.debounce;
Vue.options.filters.debounce = function(handler, delay) {
  console.log('debounce', handler, delay);
  return oldDebounce.call(this, function() {
    console.log('in handler', handler, arguments);
    return handler.apply(this, arguments);
  }, delay);
};

new Vue({
  el: 'body',
  components: {
    App,
  },
});
