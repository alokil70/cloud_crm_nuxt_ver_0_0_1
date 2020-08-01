<template>
    <div class="m-input">
        <label :for="id" class="spacing-2">{{ label }}</label>
        <input
            :id="id"
            :value="value"
            :placeholder="placeholder"
            autofocus="autofocus"
            :type="type"
            @input="input"
        />
        <span v-if="error" class="red">{{ info }}</span>
    </div>
</template>

<script>
export default {
    name: 'MInput',
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
        info: {
            type: String,
            default: 'Поле обязательно для заполнения',
        },
        type: {
            type: String,
            default: 'Text',
        },
        value: {
            type: [String, Number],
            default: '',
        },
        error: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        input(e) {
            this.$emit('input', e.target.value)
        },
    },
}
</script>
