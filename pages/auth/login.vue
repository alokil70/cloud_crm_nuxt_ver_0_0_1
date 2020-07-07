<template>
    <div class="center">
        <div class="auth-card">
            <h1 class="header">Авторизация</h1>
            <form @submit.prevent="userLogin">
                <div>
                    <label>Email</label>
                    <input v-model="login.email" type="email" />
                </div>
                <div>
                    <label>Password</label>
                    <input v-model="login.password" type="password" />
                </div>
                <div>
                    <button class="btn w100" type="submit">Войти</button>
                </div>
            </form>
            <div>
                <span><nuxt-link to="/auth/register">reg</nuxt-link></span>
                <span>{{ error }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    layout: 'empty',
    data: () => ({
        login: {
            email: 'vasi@gmail.com',
            password: 'qwertyuiop',
        },
        error: null,
    }),
    methods: {
        async userLogin() {
            try {
                await this.$auth
                    .loginWith('local', {
                        data: this.login,
                    })
                    .then((e) => (this.error = e.message))
                    .catch((e) => (this.error = e.message))
            } catch (err) {
                console.log('eeeeeeeeeeeeeee', err.message)
            }
        },
    },
}
</script>

<style>
body {
    background-color: #666666;
    min-height: 100vh;
}
</style>
