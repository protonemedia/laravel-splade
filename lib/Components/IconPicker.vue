<template>
    <div>
        <label class="block">
            <span class="block mb-1 text-gray-700 font-sans">{{ label ?? '' }}</span>
            <div class="flex rounded-md border border-gray-300 shadow-sm">
                <input name="search" v-model="search" type="text" data-validation-key="search" class="block w-full border-0 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed rounded-md" id="search">
            </div>
        </label>
    </div>
    <div class="grid grid-cols-12 gap-4 max-h-48 overflow-y-auto">
        <div @click="$emit('update:modelValue', icon)" v-for="(icon, k) in filteredIcons" :key="k" class="bg-white flex justify-center items-center p-3 cursor-pointer border-2 hover:border-blue-600" :class="modelValue == icon ? 'border-blue-600' : 'border-white'">
            <font-awesome-icon :icon="icon" size="2x" />
        </div>
    </div>
</template>

<script setup>
    import { computed, ref } from 'vue';
    import { icons } from './icons.js'

    const search = ref(props.modelValue[1] ?? '')

    const allIcons = ref(icons)

    const filteredIcons = computed(() => {
        return allIcons.value.filter(icon => search == '' || icon[1].toLowerCase().includes(search.value.toLowerCase()))
    })

    const props = defineProps(['modelValue', 'label'])
	const emits = defineEmits(['update:modelValue'])
</script>
