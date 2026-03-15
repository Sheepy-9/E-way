<script setup lang="ts">
import type { Product } from '@/data/products';
import ProductCard from './ProductCard.vue';
import type { CartItem } from './CartSummary.vue';

const props = defineProps<{ prods: Product[] }>();
const emit = defineEmits(['AddToCart']);
function handleAddToCart(item: CartItem) { emit('AddToCart', item); }
</script>

<template>
    <div class="m-auto flex flex-wrap gap-4 w-4/5 justify-center">
        <ProductCard v-for="prod in prods" :key="prod.id" :prod="prod" 
            @AddToCart="handleAddToCart"/>
    </div>
</template>