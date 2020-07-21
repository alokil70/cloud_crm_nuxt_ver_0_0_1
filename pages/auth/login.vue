<template>
    <div class="center">
        <div class="card w460">
            <h1 class="flex-center-align fz28">Авторизация</h1>
            <form>
                <m-input v-model="login.email" label="login" />
                <m-input v-model="login.password" />
                <div class="flex-between">
                    <label for="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        :class="{
                            invalid:
                                ($v.login.email.$dirty &&
                                    !$v.login.email.required) ||
                                ($v.login.email.$dirty &&
                                    !$v.login.email.email),
                        }"
                    />
                </div>
                <div class="flex-between">
                    <label for="password">Password</label>
                    <input
                        id="password"
                        v-model="login.password"
                        type="password"
                        :class="{
                            invalid:
                                ($v.login.password.$dirty &&
                                    !$v.login.password.required) ||
                                ($v.login.password.$dirty &&
                                    !$v.login.password.minLength),
                        }"
                    />
                </div>
            </form>
            <div class="flex">
                <m-btn :disabled="loading" title="Войти" @click="userLogin" />
                <m-btn
                    :disabled="loading"
                    title="Создать пользователя"
                    @click="userCreate"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators'
import MBtn from '~/components/button/m-btn'
import MInput from '~/components/input/m-input'

export default {
    name: 'Login',
    components: { MInput, MBtn },
    layout: 'empty',
    auth: false,
    validations: {
        login: {
            email: { email, required },
            password: { required, minLength: minLength(8) },
        },
    },
    data: () => ({
        login: {
            email: 'user1@gmail.com',
            password: 'qwertyuiop',
        },
        error: null,
        loading: false,
    }),
    methods: {
        async userLogin() {
            if (this.$v.$invalid) {
                this.$v.$touch()
                return
            }
            this.loading = true
            try {
                await this.$auth
                    .loginWith('local', {
                        data: this.login,
                    })
                    .then((e) => {
                        this.loading = false
                        this.login.email = ''
                        this.login.password = ''
                        this.error = e.message
                        this.$router.push('/')
                    })
                    .catch((e) => {
                        this.loading = false
                        this.login.email = ''
                        this.login.password = ''
                        this.error = e.message
                    })
            } catch (e) {
                this.loading = false
                this.login.email = ''
                this.login.password = ''
                console.log('error', e.message)
            }
        },
        userCreate() {
            this.$router.push('/auth/createUser')
        },
    },
}
</script>

<style></style>
