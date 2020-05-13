import LoadingComponents from "./index.vue";

const loading = {
  install: function(Vue) {
    Vue.component("Loading", LoadingComponents);
  }
};

export default loading;
