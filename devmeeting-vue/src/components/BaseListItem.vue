<template>
   <form @submit.prevent="onSubmit()">
    <input
      name="product"
      v-model="newProduct.name"
      v-validate="'required|min:3'"
    >
    <button>Add</button>
    <div v-show="errors.has('product')">
      {{ errors.first('product') }}
    </div>
  </form>
</template>

<!--21- 2. A <script> part -->
<script>
//  4. Now App is not mounted itself, we're just creating a component
//  (more on that later - hold your horses!)
import uuid from 'uuid/v4';
export default {
  name: 'BaseListItem',
  data() {
    return {
      newProduct: {
        name: ''
      }
    }
  },
  methods: {
      onSubmit() {
        this.$validator.validateAll().then(result => {
          if (!result) {
            return;
          }
          //4/ But instead of adding element we're just emitting add-product event with product as a payload
          this.$emit('add-product', {
            id: uuid(),
            ...this.newProduct
          });
          this.newProduct.name = '';
          this.$validator.reset();
        });
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
