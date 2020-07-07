<template>
    <header>
        <nav>
            <ul>
                <li><nuxt-link to="/client">Клиенты</nuxt-link></li>
                <li><nuxt-link to="/manager">Менеджеры</nuxt-link></li>
                <li>
                    <nuxt-link to="/setting">Настройки</nuxt-link>
                    <!--<ul>
                        <li><a href="#">Адрес</a></li>
                        <li><a href="#">Телефон</a></li>
                        <li><a href="#">Email</a></li>
                    </ul>-->
                </li>
                <li><nuxt-link to="/">О нас</nuxt-link></li>
            </ul>
            <ul>
                <li v-if="$auth.loggedIn">
                    <nuxt-link to="/auth/login" @click="$auth.logout()">{{
                        $auth.user.name
                    }}</nuxt-link>
                    <!--<ul>
                        <li><a href="#">Адрес</a></li>
                        <li><a href="#">Телефон</a></li>
                        <li><a href="#">Email</a></li>
                    </ul>-->
                </li>
                <li v-else>
                    <nuxt-link to="auth/login">Войти</nuxt-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>

<style></style>
