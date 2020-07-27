type<template>
    <div class="no-decor">
        <nuxt-link
            :to="{ name: 'manager-id', params: { id: rowData.id } }"
            class="flex row"
        >
            <div class="row-left">
                <div>{{ rowData.type }}</div>
                <div>{{ rowData.type }}</div>
                <div>{{ rowData.type }}</div>
                adress
                <div>{{ rowData.type }}</div>
            </div>
            <div class="row-left">
                <div>{{ rowData.address }}</div>
                <div>{{ rowData.address }}</div>
                <div>{{ rowData.address }}</div>
                <div>{{ rowData.address }}</div>
            </div>
            <div class="row-left">
                <div>{{ rowData.company }}</div>
                <div>Создана {{ rowData.createdAt }}</div>
            </div>
            <div class="row-left">
                {{ rowData.description }}
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
