<script setup>
import { defineProps, defineModel, ref } from "vue";

const props = defineProps({
    id: String,
    value: String,
    text: String,
    width: String,
    placeholder: String,
    step: Number,
    required: Boolean,
    readonly: Boolean,
});

const _value = defineModel();
if(isNaN(_value.value)) throw Error('Component <Number /> Error, Value Is Not a Number');

const input_box = ref(null);
const input_text = ref(_value.value);
const isFocus = ref(false);

const width = props.width || `100px`;
const classList = ["input_box", props.required ? "requried" : ""];

const priceCommaRegExpr = new RegExp(/\B(?=(\d{3})+(?!\d))/, "g");
const changePriceNumber = () => 
    input_text.value = _value.value ? _value.value.toString()?.replace(priceCommaRegExpr, ",") : 0;


const activeNumberInput = () => {
    if(props.readonly) return;

    const targetNode = input_box.value;
    const focusInputText = document.activeElement;

    if (focusInputText.parentElement === targetNode) {
        isFocus.value = true;
        setTimeout(() => targetNode.childNodes[1].focus(), 0);
    }
};

const onRequiredValidation = () => {
    return 'dddd'
}
</script>

<template>
    <div :class="classList.join(' ')" ref="input_box">
        <span class="label" :style="{ flexBasis: width }">{{
            props.text
        }}</span>
        <input
            :id="props.id"
            type="number"
            :required="props.required"
            v-model="_value"
            v-show="isFocus"
            :step="step"
            @blur="isFocus = false"
            @change="changePriceNumber"
            @invalid="onRequiredValidation"
            :readonly="readonly"
        />
        <input type="text" :value="changePriceNumber()" v-show="!isFocus" :readonly="readonly" @focus="activeNumberInput"/>
    </div>
</template>

<style lang="scss" scoped>
.input_box {
    input {
        text-align: right;
    }
}
</style>
