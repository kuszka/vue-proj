import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger'

// Majestic 'store' is just a variable in our case
// Vuex needs to be initialized as it injects some data to the components
Vue.use(Vuex);

// Let's defince new store
export default new Vuex.Store({
  //3/ A 'state' part is basically data that will be propagate to the components
  state: {
    products: []
  },
  //5/ mutations are modifying data stored in state
  mutations: {
    addProduct(state, payload) {
      state.products.push(payload.product);
    },
    fetchProducts(state, payload) {
      return axios.get('https://baconipsum.com/api/?type=all-meat');
    },
  },
  //8/ actions can be invoked by components, and use mutations
  actions: {
    addProduct(store, payload) {
      store.commit({
        type: 'addProduct',
        product: payload
      });
    },
    fetchProducts(store, payload) {
      store.commit({
        type: 'fetchProducts',
        product: payload
      });
    }
  },
  // extra: we added to logger to see what's going on
  plugins: [createLogger()]
});