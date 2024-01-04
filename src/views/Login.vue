<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const userIdRef = ref("");
const userPasswordRef = ref("");

const login = () => {
    store.dispatch("login", {
        id: userIdRef.value,
        password: userPasswordRef.value,
    });
};
</script>

<template>
    <header class="header title">logipick WMS</header>
    <main class="main-area">
        <div class="image-box">
            <img
                src="https://images.unsplash.com/photo-1682686581776-b6ebee7c150e?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
            />
        </div>

        <div class="input-icon">
            <input type="text" placeholder="ID" v-model="userId" />
            <span>
                <i class="fa-solid fa-user-times"></i>
            </span>
        </div>

        <div class="input-icon">
            <input type="password" placeholder="PASSWORD" v-model="password" />
            <span>
                <i class="fa-solid fa-user-times"></i>
            </span>
        </div>

        <div class="remember-me">
            <input type="checkbox" id="remember_me" />
            <label for="remember_me">Remember me</label>
        </div>

        <button class="login-btn" @click="login">Login</button>
    </main>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 100%;
    border-bottom: 1px solid black;
}
.main-area {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 30px 30px;

    .image-box {
        overflow: hidden;
        max-width: 320px;
        max-height: 320px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .input-icon {
        position: relative;
        display: flex;
        align-items: center;

        span {
            position: absolute;
            right: 5px;
        }
    }

    .remember-me {
        input {
            width: 15px;
        }
        label {
            padding-left: 5px;
        }
    }
    .login-btn {
        height: 40px;
        background-color: #ffffff;
        border: 1px solid lightgray;
    }
    .login-btn:active {
        background-color: lightgray;
    }
}
</style>
