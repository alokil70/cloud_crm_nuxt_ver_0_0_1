<template>
    <header>
        <nav>
            <ul>
                <li><a href="#">Главная</a></li>
                <li><nuxt-link to="auth/login">Новости</nuxt-link></li>
                <li>
                    <a href="#">Контакты</a>
                    <!--<ul>
                        <li><a href="#">Адрес</a></li>
                        <li><a href="#">Телефон</a></li>
                        <li><a href="#">Email</a></li>
                    </ul>-->
                </li>
                <li><a href="#">О нас</a></li>
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
