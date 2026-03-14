<script setup lang="ts">
import ProductList from './components/ProductList.vue';
import { products } from './data/products';

</script>

<template>
  <ProductList :prods="products" @add-to-cart=""/>
</template>

<style scoped></style>
