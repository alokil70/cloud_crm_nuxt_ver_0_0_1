<template>
    <div class="">
        <h1 class="flex-center-align fz28">Авторизация</h1>
        <form>
            <m-input
                v-model="login.email"
                label="login"
                :class="{
                    invalid:
                        ($v.login.email.$dirty && !$v.login.email.required) ||
                        ($v.login.email.$dirty && !$v.login.email.email),
                }"
            />
            <m-input
                v-model="login.password"
                :class="{
                    invalid:
                        ($v.login.password.$dirty &&
                            !$v.login.password.required) ||
                        ($v.login.password.$dirty &&
                            !$v.login.password.minLength),
                }"
            />
        </form>
        <div class="flex">
            <m-btn
                :disabled="loading"
                title="Войти"
                class="bg-red"
                @click="userLogin"
            />
            <m-btn
                :disabled="loading"
                title="Создать пользователя"
                @click="userCreate"
            />
        </div>
    </div>
</template>

<script>
import { email, required, minLength } from 'vuelidate/lib/validators'
export default {
    name: 'ModalWrapper',
    props: {
        loggin: {
            type: Boolean,
        },
    },
    validations: {
        login: {
            email: { email, required },
            password: { required, minLength: minLength(10) },
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
}
</script>

<style scoped></style>
