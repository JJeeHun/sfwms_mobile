<template>
    <div class="menu-container">
        <ViewTitle title="logipick WMS" :isLogout="true" />
        <Menu
            v-for="menu in menus"
            :key="menu.id"
            :title="menu.title"
            :url="menu.path"
            class="title"
        />
    </div>
</template>
<script setup>
import Menu from "@/components/Menu";
import ViewTitle from "@/components/ViewTitle";

import { menus } from "@/router/index.js";
</script>
<style scoped>
.menu-container {
    display: flex;
    flex-direction: column;

    width: 100%;

    padding: 10px 15px;
}
</style>
