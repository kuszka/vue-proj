<template>
  <div id="app">
    <h2>My awesome list</h2>
    <ul>
      <!-- 2. Then, we're using built-in v-for directive to iterate over products -->
      <li v-for="(p,index) in products" :key="p.id" >{{ p.name }}
        <button v-on:click="removeThis(index)">X</button>
      </li>
    </ul>
    <!-- 5. v-if can be helpful with conditional statements -->
    <p v-if="!products.length">No products!</p>
    <!-- 6. v-on adds an handler and :click is the name of the event, then goes the function to invoke -->
    <button v-on:click="removeLast()">Remove last item</button>
    <br>
    <button v-on:click="addProduct()">Add random item</button>
    <input v-model="message" placeholder="Item to add">
  </div>
</template>

<!--21- 2. A <script> part -->
<script>
//  4. Now App is not mounted itself, we're just creating a component
//  (more on that later - hold your horses!)

export default {
  name: 'app',
  data() {
    return {
    prevId: 4,
    products: [{
        id: 0,
        name: 'Coffee',
    }, {
        id: 1,
        name: 'Pizza',
    }],
    };
  },
  methods: {
    removeLast() {
          this.products.pop();
        },
        removeThis(index) {
          this.products.splice(index, 1);
        },
        addProduct() {
          this.products.push({
            id: parseInt(this.prevId,10) + 1,
            name: this.message,
          });
          this.prevId+=1;
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
