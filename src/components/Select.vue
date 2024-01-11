<script setup>
import { defineProps, defineModel } from "vue";

const props = defineProps({
    id: String,
    value: String,
    text: String,

    items: Array,
    textColumn: String,
    valueColumn: String,

    width: String,

    placeholder: String,
    required: Boolean,
    readonly: Boolean,
});

const _value = defineModel();
const items = defineModel("items");
const width = props.width || `100px`;
const requiredClass = props.required ? "requried" : "";
const textProp = props.textColumn ? props.textColumn : "text";
const valueProp = props.valueColumn ? props.valueColumn : "value";
</script>

<template>
    <div :class="`input-box component-box ${requiredClass}`">
        <span class="label" :style="{ flexBasis: width }">{{
            props.text
        }}</span>
        <select
            :id="props.id"
            :required="props.required"
            v-model="_value"
            :disabled="readonly"
        >
            <option
                v-for="(item, i) in items"
                :key="item[valueProp]"
                :value="item[valueProp]"
                :checked="i === 0"
            >
                {{ item[textProp] }}
            </option>
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
