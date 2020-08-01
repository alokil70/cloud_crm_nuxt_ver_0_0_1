<template>
    <div>
        <form class="form">
            <h1 class="form__title">Заголовок</h1>
            <m-input id="login" label="Логин" :error="true" />
            <m-input id="pass" label="Пароль" type="password" :error="false" />
            <button class="form__button">Войти</button>
        </form>

        <div>
            <div
                class="form-group"
                :class="{ 'form-group--error': $v.name.$error }"
            >
                <label class="form__label">Name</label>
                <input v-model.trim="$v.name.$model" class="form__input" />
            </div>
            <div v-if="!$v.name.required" class="error">Field is required</div>
            <div v-if="!$v.name.minLength" class="error">
                Name must have at least
                {{ $v.name.$params.minLength.min }} letters.
            </div>
            <tree-view
                :data="$v.name"
                :options="{ rootObjectKey: '$v.name', maxDepth: 2 }"
            ></tree-view>
            <div
                class="form-group"
                :class="{ 'form-group--error': $v.age.$error }"
            >
                <label class="form__label">Age</label>
                <input v-model.trim.lazy="$v.age.$model" class="form__input" />
            </div>
            <div v-if="!$v.age.between" class="error">
                Must be between {{ $v.age.$params.between.min }} and
                {{ $v.age.$params.between.max }}
            </div>
            <span tabindex="0">Blur to see changes</span>
            <tree-view
                :data="$v.age"
                :options="{ rootObjectKey: '$v.age', maxDepth: 2 }"
            ></tree-view>
        </div>
    </div>
</template>

<script>
import { required, minLength, between } from 'vuelidate/lib/validators'

import MInput from '@/components/form/m-input'

export default {
    name: 'MForm',
    components: { MInput },
    data: () => ({
        name: '',
        age: 0,
    }),
    validations: {
        name: {
            required,
            minLength: minLength(4),
        },
        age: {
            between: between(20, 30),
        },
    },
}
</script>

<style scoped></style>
