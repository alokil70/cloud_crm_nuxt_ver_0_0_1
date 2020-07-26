<template>
    <div class="no-decor">
        <nuxt-link
            :to="{ name: 'manager-id', params: { id: rowData.id } }"
            class="flex row"
        >
            <div class="row-left">
                <div>{{ rowData.email }}</div>
                <div>{{ rowData.email }}</div>
                <div>{{ rowData.email }}</div>
                <div>{{ rowData.email }}</div>
            </div>
            <div class="row-left">
                <div>{{ rowData.city }}</div>
                <div>{{ rowData.city }}</div>
                <div>{{ rowData.city }}</div>
                <div>{{ rowData.city }}</div>
            </div>
            <div class="row-left">
                <div>{{ rowData.company }}</div>
                <div>Создана {{ rowData.createdAt }}</div>
            </div>
            <div class="row-left">
                {{ rowData.expire }}
            </div>
            <div class="row-center">Администратор {{ rowData.admin }}</div>
        </nuxt-link>
    </div>
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
