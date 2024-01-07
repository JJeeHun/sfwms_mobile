<script setup>
import { defineProps, defineModel, ref } from "vue";

const props = defineProps({
    id: String,
    value: String,
    text: String,
    width: String,
    placeholder: String,
    required: Boolean,
});

const _value = defineModel();
const width = props.width || `100px`;
const classList = ["input_box", props.required ? "requried" : ""];

const input_box = ref(null);
</script>

<template>
    <div :class="classList.join(' ')" ref="input_box">
        <span class="label" :style="{ flexBasis: width }">{{
            props.text
        }}</span>
        <select :id="props.id" :required="props.required" v-model="_value">
            <option value="1">11</option>
            <option value="2">22</option>
            <option value="3">33</option>
            <option value="4">44</option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
.input_box {
    input {
        text-align: right;
    }
}
</style>
