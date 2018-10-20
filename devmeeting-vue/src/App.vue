<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <BaseList :products="products"/>
    <BaseListItem @add-product="onAddProduct"/>
  </div>
</template>

<script>
import BaseList from './components/BaseList';
import BaseListItem from './components/BaseListItem';

export default {
  name: 'app',
  components: {
    BaseList,
    BaseListItem
  },
  data() {
    return {
      products: [{
        id: 0,
        name: 'Coffee',
      }, {
        id: 1,
        name: 'Pizza',
      }]
    }
  },
  methods: {
    onAddProduct(product) {
      this.products.push(product);
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
