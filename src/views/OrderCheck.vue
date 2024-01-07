<script setup>
import { reactive } from "vue";
import ViewTitle from "@/components/ViewTitle";
import Edit from "@/components/Edit";

const state = reactive({
    edit1: "",
    edit2: "",
});

const click = () => {
    console.log(state.edit1);
};
</script>

<template>
    <div class="menu-container">
        <ViewTitle title="OrderCheck" />
        <Edit text="ddd" v-model="state.edit1" />
        <Edit text="ddd" v-model="state.edit1" />
        <Edit text="ddd" v-model="state.edit2" />
        <Edit text="ddd" v-model="state.edit2" />
        <button @click="click">change</button>
    </div>
</template>

<style lang="scss" scoped></style>
