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
import axios from 'axios';

export default {
  name: 'app',
  components: {
    BaseList,
    BaseListItem,
  },
  async created(){
    this.products = await axios.get('https://baconipsum.com/api/?type=all-meat').then(res => res.data);
  },
  data() {
    return {
      products: []
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
