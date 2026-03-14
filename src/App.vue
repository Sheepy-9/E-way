<script setup lang="ts">
import { ref } from 'vue';
import CartSummary, { type CartItem } from './components/CartSummary.vue';
import ProductList from './components/ProductList.vue';
import { products } from './data/products';

const cart = ref<CartItem[]>([]);

function addToCart(item: CartItem) {
  const existing = cart.value.find(i => i.product.id === item.product.id);
  if (existing) existing.quantity += item.quantity;
  else cart.value.push(item);
}

</script>

<template>
  <ProductList :prods="products" @add-to-cart="addToCart"/>
  <CartSummary :cart="cart"/>
</template>
