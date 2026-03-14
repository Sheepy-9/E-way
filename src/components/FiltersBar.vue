<script setup lang="ts">
import { categories } from '@/data/products';
import sortType from '@/data/sortType';
import { ref } from 'vue';

const selectedCategories = ref<string[]>([]);
const selectedSort = ref(sortType['P-LH']);
const searchedTerm = ref('');

const emit = defineEmits<{
    catChange: [cats: string[]],
    sortChange: [sort: sortType],
    termChange: [term: string]
}>()

function handleCategoryEvent(cat: string) {
    const idx = selectedCategories.value.indexOf(cat);
    idx === -1 ? selectedCategories.value.push(cat) : selectedCategories.value.splice(idx, 1);

    emit('catChange', selectedCategories.value);
    return idx === -1;
};

function handleSortEvent(sort: sortType) { emit('sortChange', sort); }

</script>
<template>
    <div class="p-2 bg-gray-100 mb-3 shadow">
        <div class="flex gap-4 items-center m-auto w-5/6 max-w-4/5 justify-center">
            <!-- Sort -->
            <select name="Sort" id="sort"
                class="px-3 py-2 border border-gray-300 rounded flex-none
                    focus:outline-none focus:ring-2 focus:ring-blue-400"
                v-model="selectedSort" @change="handleSortEvent(selectedSort)"
            >
                <option :value="sortType['P-LH']" selected>Price: Low → High</option>
                <option :value="sortType['P-HL']">Price: High → Low</option>
                <option :value="sortType['R-HL']">Rating: High → Low</option>
            </select>

            <!-- Search -->
            <form class="flex flex-row flex-none shadow rounded-md overflow-clip"
                @submit.prevent="$emit('termChange', searchedTerm)">
                <input type="search" placeholder="Search..."
                    class="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    v-model="searchedTerm"
                >
                <input type="submit" value="Go"
                    class="bg-white p-2">
            </form>

            <!-- Categories -->
            <div class="flex flex-row flex-nowrap gap-2 overflow-x-scroll py-3">
                <button v-for="cat in categories" :key="cat"
                    class="px-2 py-1 text-nowrap bg-white shadow rounded-md cursor-pointer
                    hover:underline"
                    :class="{'font-bold': selectedCategories.includes(cat)}"
                    @click="handleCategoryEvent(cat)">
                    {{ cat }}
                </button>
            </div>
        </div>
    </div>
</template>