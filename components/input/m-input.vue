<template>
    <div class="flex flex-col">
        <label for="input">{{ label }}</label>
        <input
            id="input"
            :value="value"
            :placeholder="placeholder"
            type="text"
            class=""
            @input="input"
        />
        <span v-if="error" class="">{{ error }}</span>
    </div>
</template>

<script>
export default {
    name: 'MInput',
    props: {
        label: {
            type: String,
            default: null,
        },
        placeholder: {
            type: String,
            default: '',
        },
        value: {
            type: [String, Number],
            default: 'value',
        },
        error: {
            type: String,
            default: '',
        },
    },
    methods: {
        input(e) {
            this.$emit('input', e.target.value)
        },
    },
}
</script>
