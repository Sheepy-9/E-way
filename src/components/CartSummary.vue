<script setup lang="ts">
import type { product } from '@/data/products';
import { computed } from 'vue';

export type CartItem = {
  product: product,
  quantity: number
}

const props = defineProps<{
  cart: CartItem[]
}>()

const totalCount = computed(() =>
    props.cart.reduce((sum, item) => sum + item.quantity, 0)
)

const totalPrice = computed(() =>
    props.cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
)

</script>
<template>
   <div class="p-4 bg-gray-100 rounded shadow">
        <div class="font-bold mb-2">Cart Summary</div>
        <div>Items in cart: {{ totalCount }}</div>
        <div>Total price: ${{ totalPrice.toFixed(2) }}</div>
        <ul v-if="props.cart.length" class="mt-2 list-disc pl-5">
            <li v-for="item in props.cart" :key="item.product.id">
                {{ item.product.name }} x {{ item.quantity }}
            </li>
        </ul>
        <div v-else class="text-gray-500 mt-2">Cart is empty</div>
    </div>
</template>