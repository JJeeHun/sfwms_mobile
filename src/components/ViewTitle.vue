<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { defineProps, computed } from "vue";

const _linkTo = useRouter().link;
const _store = useStore();
const props = defineProps({
    title: String,
    isLogout: Boolean,
});
const user = _store.getters["user/getUser"];

const logout = () => {
    const isYes = window.confirm("종료하시겠습니까?");

    if (isYes) _linkTo.LOGIN();
};
const goHome = computed(() => {
    return _linkTo.HOME;
});
</script>

<template>
    <div class="view-title">
        <div class="view-title-left">
            <div class="view-title-title title">
                {{ props.title }}
            </div>
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
            <div class="go-home" @click="goHome(1, 2)" v-else>←</div>
        </div>
    </div>
</template>

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
