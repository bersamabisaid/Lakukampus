<template>
    <q-card
        flat
        bordered
        class="col"
    >
        <q-table
            :title="title"
            :columns="cols"
            :data="data"
            :row-key="rowKey"
            hide-pagination
            selection="multiple"
            :selected.sync="selected"
            hide-selected-banner
            @update:selected="selectionHandler"
        >
            <template v-slot:body-cell-item="props">
                <q-td :props="props">
                    <product-item
                        :title="props.value"
                        img-src="https://picsum.photos/150"
                        :price="10"
                        :ratings="1.2"
                    />
                </q-td>
            </template>
        </q-table>
    </q-card>
</template>

<script>
import ProductItem from 'components/ProductItem';

export default {
    name: 'CartItemList',

    props: {
        title: {
            type: String,
            required: true,
        },
        rowKey: {
            type: String,
            required: true,
        },
        cols: {
            type: Array,
            required: true,
        },
        data: {
            type: Array,
            required: true,
        },
    },

    data: () => ({
        selected: [],
    }),

    methods: {
        selectionHandler() {
            const selected = JSON.parse(JSON.stringify(this.selected));
            this.$emit('selection', selected);
        },
    },

    components: {
        ProductItem,
    },
};
</script>
