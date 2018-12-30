<template>
    <div class="login-form">
        <form @submit.prevent="login">
            <div class="form-group">
                <label for="emailInput">Email address</label>
                <input v-model="username" type="email" class="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="passwordInput">Password</label>
                <input v-model="password" type="password" class="form-control" id="passwordInput" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>
</template>

<script>
    import {login} from "@/services/UserService";

    export default {
        name: "LoginForm",
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            login() {
                login(this.username, this.password).then(() => {
                    this.$store.commit('login');
                    this.$router.push({name: 'home'});
                });
            }
        }
    }
</script>

<style scoped>
    form {
        display: inline-block;
        max-width: 400px;
        width: 100%;
        text-align: left;
    }
    .login-form {
        text-align: center;
    }
</style>