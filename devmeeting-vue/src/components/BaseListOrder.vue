<template>
    <div>
    <button v-on:click="order()">order</button>
    </div>
</template>

<!--21- 2. A <script> part -->
<script>
//  4. Now App is not mounted itself, we're just creating a component
//  (more on that later - hold your horses!)
export default {
  name: 'BaseListItem',
  props: {
      products: {
        type: Array,
      }
    },
  methods: {
      order(){
          this.products.sort();
      }
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
