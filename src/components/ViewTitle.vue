<template>
    <div class="view-title">
        <div class="view-title-left">
            <div class="view-title-title title">{{ props.title }}</div>
            <div class="view-title-user sub-text">[{{ user.username }}]</div>
        </div>

        <div class="view-title-right">
            <div class="view-title-info">
                <div class="view-title-client title1">
                    {{ user.client }}
                </div>
                <div class="view-title-warehouse sub-text">
                    {{ user.warehouse }}
                </div>
            </div>

            <div class="exit" @click="logout" v-if="props.isLogout">⍈</div>
            <div class="go-home" @click="goHome" v-else>←</div>
        </div>
    </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { defineProps } from "vue";

const router = useRouter();
const props = defineProps({
    title: String,
    isLogout: Boolean,
});

const user = useStore().state.user;

const logout = () => {
    const isYes = window.confirm("종료하시겠습니까?");

    if (isYes) router.push("/");
};
const goHome = () => {
    router.custom.HOME();
}
</script>
<style lang="scss" scoped>
.view-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid lightgray;
    padding: 10px 0;

    .view-title-left,
    .view-title-info {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .view-title-right {
        display: flex;
        align-items: center;
        gap: 10px;
    }
}
</style>
