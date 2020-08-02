<template>
    <div class="m-input">
        <label :for="id" :class="{ error }" class="spacing-2">{{
            label
        }}</label>
        <input
            :id="id"
            :value="value"
            class="form-control"
            :placeholder="placeholder"
            autofocus="autofocus"
            autocomplete="off"
            :type="type"
            :class="{ error }"
            @input="input($event.target.value)"
        />
        <span v-if="error" class="error">{{ submitStatus }}</span>
    </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'

export default {
    name: 'MInput',
    data: () => ({
        error: false,
        submitStatus: null,
    }),
    validations: {
        value: {
            required,
            minLength: minLength(4),
        },
    },
    props: {
        id: {
            type: String,
            default: 'input',
        },
        label: {
            type: String,
            default: null,
        },
        placeholder: {
            type: String,
            default: null,
        },
        infoMessage: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: 'Text',
        },
        value: {
            type: [String, Number],
            default: '',
        },
    },
    computed: {
        isValid() {
            return !!this.infoMessage
        },
    },
    methods: {
        input(value) {
            this.$v.value.$touch()
            this.$emit('input', value)
            if (this.$v.$invalid) {
                this.submitStatus = 'Поле обязательно для заполнения'
                this.error = true
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
