<template>
    <form class="form">
        <h1 class="form__title">Заголовок</h1>
        <m-input id="login" label="Логин" :error="true" />
        <m-input id="pass" label="Пароль" type="password" :error="false" />
        <button class="form__button">Войти</button>
    </form>
</template>

<script>
import MInput from '@/components/form/m-input'
export default {
    name: 'MForm',
    components: { MInput },
}
</script>

<style scoped></style>
