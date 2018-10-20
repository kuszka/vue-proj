<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <BaseList :products="products"/>
    <BaseListItem @add-product="onAddProduct"/>
    <BaseList :products="sharedState.products"></BaseList>
  </div>
</template>

<script>
import BaseList from './components/BaseList';
import BaseListItem from './components/BaseListItem';
import axios from 'axios';
import store from '../store';

export default {
  name: 'app',
  components: {
    BaseList,
    BaseListItem,
  },
  created() {
    store.fetchProducts();
  },
  data() {
    return {
      sharedState: store.state
    }
  },
  methods: {
    onAddProduct(product) {
      store.addProduct(product);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
