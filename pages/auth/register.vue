<template>
    <div class="center">
        <div class="auth-card">
            <h1 class="header">Register</h1>
            <form @submit.prevent="userRegister">
                <div>
                    <label>Username</label>
                    <input v-model="user.name" type="text" />
                </div>
                <div>
                    <label>Email</label>
                    <input v-model="user.email" type="email" />
                </div>
                <div>
                    <label>Password</label>
                    <input v-model="user.password" type="password" />
                </div>
                <div>
                    <label>CompanyName</label>
                    <input v-model="user.companyName" type="text" />
                </div>
                <div>
                    <label>City</label>
                    <input v-model="user.city" type="text" />
                </div>
                <div>
                    <button class="btn w100" type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Register',
    layout: 'empty',
    data: () => ({
        user: {
            name: 'Alex',
            email: 'qwe@gmail.com',
            city: 'Moscow',
            companyName: 'company1',
            password: 'qwertyuiop',
        },
    }),
    methods: {
        async userRegister() {
            try {
                await this.$axios
                    .post('/auth/register', this.user)
                    .then((e) => {
                        if (e.status === 201) {
                            this.$router.push('/auth/login')
                        } else {
                            console.log(e.statusText)
                        }
                    })
            } catch (err) {
                console.log(err)
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
