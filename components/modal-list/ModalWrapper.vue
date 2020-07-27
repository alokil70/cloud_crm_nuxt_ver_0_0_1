<template>
    <h1>MOdal wrapper {{ login }}</h1>
</template>

<script>
export default {
    name: 'ModalWrapper',
    props: {
        login: {
            type: Boolean,
        },
    },
}
</script>

<style scoped></style>
