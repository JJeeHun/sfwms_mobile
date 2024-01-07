<script>
export default {};
</script>
<template>
    <div id="container">
        <div class="box">
            <router-view />
        </div>
    </div>
</template>

<style lang="scss">
@import "./index";
#container {
    display: flex;
    justify-content: center;

    width: 100vw;
    height: 100vh;
}
.box {
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100vw;
}
</style>
