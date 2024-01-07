<script setup>
import { defineProps, defineModel } from "vue";

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
</script>

<template>
    <div :class="classList.join(' ')">
        <span class="label" :style="{ flexBasis: width }">{{
            props.text
        }}</span>
        <input
            type="text"
            :id="props.id"
            v-model="_value"
            :required="props.required"
            :placeholder="props.placeholder"
        />
    </div>
</template>

<style lang="scss" scoped></style>
