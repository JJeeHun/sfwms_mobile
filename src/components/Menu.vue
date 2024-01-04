<template>
    <div class="menu-item" @click="move">
        <div class="prev-icon">►</div>
        <div class="title">{{ props.title }}</div>
        <div class="next-icon">></div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
    title: String,
    url: String,
});

const move = () => {
    router.push(props.url);
};
</script>

<style scoped>
.menu-item {
    display: flex;
    align-items: center;
    flex-basis: 3rem;
    border-bottom: 1px solid lightgray;
    padding: 15px 0;

    .prev-icon {
        flex-basis: 30px;
    }
    .next-icon {
        margin-left: auto;
    }
}

.menu-item:active {
    background-color: lightgray;
}
</style>
