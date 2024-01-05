<script setup>
    import {defineProps ,defineModel} from 'vue';

    const props = defineProps({
        value: String,
        text: String,
        width: String,
        required: Boolean,
    });

    const modelValue = defineModel();
    const width = props.width || `100px`;
    
    const classList = ['edit',props.required ? 'requried' : ''];
</script>

<template>
    <div :class="classList.join(' ')">
        <span class="label" :style="{flexBasis:width}">{{ props.text }}</span>
        <input type="text" v-model="modelValue" :required="props.required">
    </div>
</template>

<style lang="scss" scoped>
    .edit {
        display: flex;
        align-items: center;

        height: 50px;
        overflow: hidden;

        font-size: 0.7rem;

        padding: 5px 3px;

        .label {
            display: flex;
            justify-content: right;
            align-items: center;
            padding: 0 10px;
            height: 100%;
            flex-shrink: 0;
        }
    }
    
    .requried {
        .label {
            color: red;            
        }
        input {
            border: 1px solid red;
            background: #ffffff;
            border-radius: 2px;
        }
        input:focus {
            outline: 2px solid red;            
        }
    }
</style>