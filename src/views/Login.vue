<script setup>
import { reactive } from "vue";
import { useStore } from "vuex";

const store = useStore();
const initUser = {
    id: 'admin',
    password: '',
}
const user = reactive({...initUser});
const resetUser = () => Object.entries(initUser).forEach(([key,value]) => user[key] = value);

const login = () => {   
    // 로그인 성공 로직
    if(user.id === 'admin') {
        store.dispatch("user/login", {
            id: user.id,
            password: user.password,
        });
    }else { // 실패 로직
        resetUser();
    }
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
            <input type="text" placeholder="ID" v-model="user.id" />
            <span>
                <i class="fa-solid fa-user-times"></i>
            </span>
        </div>

        <div class="input-icon" @change="login">
            <input type="password" placeholder="PASSWORD" v-model="user.password" />
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

<style lang="scss" scoped>
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
