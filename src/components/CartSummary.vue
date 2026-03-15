<script setup lang="ts">
import type { Product } from '@/data/products';
import { computed } from 'vue';

export type CartItem = {
  product: Product,
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
   <div class="p-4 bg-gray-100 rounded shadow right-5 bottom-5 fixed flex flex-col max-h-52">
        <div class="font-bold mb-2">Cart Summary</div>
        <div>Items in cart: {{ totalCount }}</div>
        <div>Total price: ${{ totalPrice.toFixed(2) }}</div>
        <div class="overflow-y-auto mt-2 flex-1 min-h-0">
            <ul v-if="props.cart.length" class="list-disc pl-5">
                <li v-for="item in props.cart" :key="item.product.id">
                    {{ item.product.name }} x {{ item.quantity }}
                </li>
            </ul>
            <div v-else class="text-gray-500">Cart is empty</div>
        </div>
    </div>
</template>