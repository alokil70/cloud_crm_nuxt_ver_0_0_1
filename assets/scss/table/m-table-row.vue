<template>
    <nuxt-link
        :to="{ name: 'manager-id', params: { id: rowData.id } }"
        class="table-row flex def-card"
    >
        <div class="row-left">
            {{ rowData.email }}
        </div>
        <div class="row-left">
            {{ rowData.city }}
        </div>
        <div class="row-left">
            {{ rowData.company }}
        </div>
        <div class="row-left">
            {{ rowData.expire }}
        </div>
        <div class="row-center">Администратор {{ rowData.admin }}</div>
    </nuxt-link>
</template>

<script>
export default {
    name: 'MTableRow',
    props: {
        rowData: {
            type: Object,
            default: () => {
                return {}
            },
        },
    },
}
</script>
