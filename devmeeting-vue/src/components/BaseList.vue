<template>
  <div>
    <ul>
      <li v-for="(p,index) in products" :key="p.index">{{ p }}
      <button v-on:click="removeThis(index)">X</button>
      </li>
    </ul>
    <p v-if="!products.length">No products!</p>
  </div>
</template>

<!--21- 2. A <script> part -->
<script>
//  4. Now App is not mounted itself, we're just creating a component
//  (more on that later - hold your horses!)

export default {
  name: 'BaseList',
  props: {
      products: {
        type: Array,
      }
    },
  methods: {
    removeThis(index) {
          this.products.splice(index, 1);
        },
  },
};
</script>

<!--9- 3. And <style> part -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
