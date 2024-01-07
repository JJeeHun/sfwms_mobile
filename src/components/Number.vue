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
const isFocus = ref(false);
const priceCommaRegExpr = new RegExp(/\B(?=(\d{3})+(?!\d))/, "g");

const click = () => {
    const targetNode = input_box.value;
    const focusInputText = document.activeElement;

    if (focusInputText.parentElement === targetNode) {
        isFocus.value = true;
        setTimeout(() => targetNode.childNodes[1].focus(), 0);
    }
};

const changePriceNumber = () =>
    _value.value ? _value.value.toString()?.replace(priceCommaRegExpr, ",") : 0;
</script>

<template>
    <div :class="classList.join(' ')" ref="input_box" @click="click">
        <span class="label" :style="{ flexBasis: width }">{{
            props.text
        }}</span>
        <input
            :id="props.id"
            type="number"
            :required="props.required"
            v-model="_value"
            v-show="isFocus"
            @blur="isFocus = false"
        />
        <input type="text" :value="changePriceNumber()" v-show="!isFocus" />
    </div>
</template>

<style lang="scss" scoped>
.input_box {
    input {
        text-align: right;
    }
}
</style>
