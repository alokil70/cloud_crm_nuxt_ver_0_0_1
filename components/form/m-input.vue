<template>
    <div class="m-input">
        <label :for="id" class="spacing-2">{{ label }}</label>
        <input
            :id="id"
            :value="value"
            class="form-control"
            :placeholder="placeholder"
            autofocus="autofocus"
            :type="type"
            :class="{ error: !isValid }"
            @input="input"
        />
        <span v-if="!isValid" class="error">{{ infoMessage }}</span>
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
        input(e) {
            this.$emit('input', e.target.value)
        },
    },
}
</script>
