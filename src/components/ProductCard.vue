<script setup lang="ts">
import type { Product } from '@/data/products';
import type { CartItem } from './CartSummary.vue';
const props = defineProps<{ prod: Product }>();
const emit = defineEmits<{(e: 'AddToCart', prod: CartItem): void}>();
function addToCart() { emit('AddToCart', { product: props.prod, quantity: 1 }); }
</script>

<template>
    <div class="card p-4 bg-white rounded shadow grid grid-cols-1 gap-4 items-center min-w-[220px] max-w-[320px] basis-1/5">
        <img :src="prod.image" :alt="prod.name" class="w-40 justify-self-center rounded" />
        <div class="font-bold text-lg">{{ prod.name }}</div>
        <div class="text-gray-600">${{ prod.price.toFixed(2) }}</div>
        <div class="text-sm text-gray-500">Category: {{ prod.category }}</div>
        <div class="text-sm text-yellow-500">Rating: {{ prod.rating }} / 5</div>
        <button
            class="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400 w-full 
                hover:cursor-pointer hover:bg-blue-700
                active:bg-blue-500"
            :disabled="!prod.inStock"
            @click="addToCart"
        >
            <span v-if="prod.inStock">Add to Cart</span>
            <span v-else>Out of stock</span>
        </button>
    </div>
</template>