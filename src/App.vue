<script setup lang="ts">
import { computed, ref } from 'vue';
import CartSummary, { type CartItem } from './components/CartSummary.vue';
import FiltersBar from './components/FiltersBar.vue';
import ProductList from './components/ProductList.vue';
import { products, type Product } from './data/products';
import sortType from './data/sortType';

const cart = ref<CartItem[]>([]);

function addToCart(item: CartItem) {
  const existing = cart.value.find(i => i.product.id === item.product.id);
  if (existing) existing.quantity += item.quantity;
  else cart.value.push(item);
}

const selectedCategories = ref<string[]>([]);
const selectedSort = ref(sortType['P-LH']);
const searchedTerm = ref('');


const filteredProducts = computed(() => {
  let filtered: Product[] = products.slice();
  if (selectedCategories.value.length) { 
    filtered = filtered.filter(p => selectedCategories.value.includes(p.category))
  }

  if (searchedTerm.value !== '') {
    filtered = filtered.filter(p => p.name.toLowerCase().trim().includes(searchedTerm.value.trim().toLowerCase()))
  }

  switch (selectedSort.value) {
    case sortType['P-LH']:
      filtered.sort((a, b) => a.price - b.price)
      break;
    case sortType['P-HL']:
      filtered.sort((a, b) => b.price - a.price)
      break;
    case sortType['R-HL']:
      filtered.sort((a, b) => b.rating - a.rating)
      break;
  }

  return filtered;
});

</script>

<template>
  <FiltersBar 
    @catChange="cs => selectedCategories = cs"
    @sortChange="s => selectedSort = s"
    @termChange="t => searchedTerm = t"
  />
  <ProductList :prods="filteredProducts" @AddToCart="addToCart"/>
  <CartSummary :cart="cart"/>
</template>
