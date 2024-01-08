<script setup>
import { defineProps, defineModel, ref } from "vue";

const props = defineProps({
    id: String,
    value: String,
    text: String,

    items: Array,

    width: String,

    placeholder: String,
    required: Boolean,
    readonly: Boolean,
});

const _value = defineModel();
const items = defineModel('items');
const width = props.width || `100px`;
const classList = ["input_box", props.required ? "requried" : ""];

const input_box = ref(null);
</script>

<template>
    <div :class="classList.join(' ')" ref="input_box">
        <span class="label" :style="{ flexBasis: width }">{{
            props.text
        }}</span>
        <select :id="props.id" :required="props.required" v-model="_value" :disabled="readonly">
            <option v-for="( item,i ) in items" :key="item.id" :value="item.id" :checked="i === 0">{{ item.text }}</option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
.input_box {
    select {
        option {
            font-size: 1.5rem;
        }
    }
}
</style>
