<script setup>
import { defineProps, defineModel } from "vue";
import onRequiredValidationEvent from "@/components/message/required_message.js";

const props = defineProps({
    id: String,
    value: String,
    text: String,
    width: String,
    placeholder: String,
    required: Boolean,
    readonly: Boolean,
});

const _value = defineModel();
const width = props.width || `100px`;
const requiredClass = props.required ? "requried" : "";
</script>

<template>
    <div :class="`textarea-box component-box ${requiredClass}`">
        <span
            class="label"
            :style="{ flexBasis: width }"
            v-if="width !== '0px'"
            >{{ props.text }}</span
        >
        <textarea
            type="text"
            :id="props.id"
            v-model="_value"
            :required="props.required"
            :placeholder="props.placeholder"
            :readonly="readonly"
            @invalid="onRequiredValidationEvent"
        />
    </div>
</template>

<style lang="scss" scoped></style>
