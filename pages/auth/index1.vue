<template>
    <div>
        <form @submit.prevent="submit">
            <div
                class="form-group"
                :class="{ 'form-group--error': $v.name.$error }"
            >
                <label class="form__label">Name</label>
                <input v-model.trim="$v.name.$model" class="form__input" />
            </div>
            <div v-if="!$v.name.required" class="error">Name is required</div>
            <div v-if="!$v.name.minLength" class="error">
                Name must have at least
                {{ $v.name.$params.minLength.min }} letters.
            </div>
            <button
                class="button"
                type="submit"
                :disabled="submitStatus === 'PENDING'"
            >
                Submit!
            </button>
            <p v-if="submitStatus === 'OK'" class="typo__p">
                Thanks for your submission!
            </p>
            <p v-if="submitStatus === 'ERROR'" class="typo__p">
                Please fill the form correctly.
            </p>
            <p v-if="submitStatus === 'PENDING'" class="typo__p">Sending...</p>
        </form>
    </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'

export default {
    name: 'Index',
    layout: 'empty',
    auth: false,
    data() {
        return {
            name: '',
            age: 0,
            submitStatus: null,
        }
    },
    validations: {
        name: {
            required,
            minLength: minLength(4),
        },
    },
    methods: {
        submit() {
            console.log('submit!')
            this.$v.$touch()
            if (this.$v.$invalid) {
                this.submitStatus = 'ERROR'
            } else {
                // do your submit logic here
                this.submitStatus = 'PENDING'
                setTimeout(() => {
                    this.submitStatus = 'OK'
                }, 500)
            }
        },
    },
}
</script>

<style scoped></style>
