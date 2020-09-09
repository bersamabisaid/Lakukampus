<template>
    <q-layout view="lHh Lpr lFf">
        <q-header
            reveal
            elevated
        >
            <q-toolbar class="q-py-sm">
                <div class="toolbar__container">
                    <q-toolbar-title>
                        <q-btn
                            :to="{name: 'Home'}"
                            flat
                            size="lg"
                        >
                            Lakukampus
                        </q-btn>
                    </q-toolbar-title>

                    <!-- eslint-disable -->
                    <q-form
                        class="flex justify-center"
                        @submit.prevent="$router.push(searchNavigate)"
                    >
                    <!-- eslint-enable -->
                        <q-select
                            v-model="category"
                            label="Category"
                            :options="['all', 'fashion', 'food', 'gadget']"
                            standout
                            dense
                            dark
                            class="q-ml-md"
                            style="width: 150px;"
                        />

                        <q-input
                            v-model="search"
                            placeholder="Search here..."
                            dark
                            dense
                            standout
                            class="q-ml-md"
                            style="width: 30vw;"
                        >
                            <template v-slot:append>
                                <!-- eslint-disable -->
                                <q-btn
                                    :to="searchNavigate"
                                    icon="search"
                                    round
                                    flat
                                />
                                <!-- eslint-enable -->
                            </template>
                        </q-input>
                    </q-form>

                    <q-btn
                        icon="shopping_cart"
                        flat
                        round
                        :to="{name: 'MyCart'}"
                    />

                    <q-btn-dropdown
                        label="Hi, Alwan!"
                        no-caps
                        flat
                    >
                        <q-list>
                            <q-item-label header>
                                <q-img src="'icons/favicon-128x128.png'" />
                                <span>Account</span>
                            </q-item-label>
                            <q-item>
                                <q-item-section>
                                    Settings
                                </q-item-section>
                            </q-item>
                            <q-item>
                                <q-item-section>
                                    Logout
                                </q-item-section>
                            </q-item>
                        </q-list>
                    </q-btn-dropdown>
                </div>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
export default {
    name: 'MainLayout',
    data: () => ({
        search: null,
        category: null,
    }),
    computed: {
        searchNavigate() {
            return this.search ? {
                name: 'Search',
                query: {
                    q: this.search,
                    category: this.category,
                },
            } : { name: 'Home' };
        },
    },
};
</script>

<style lang="scss">
.toolbar {
    &__container {
        width: 100%;
        display: grid;
        grid-template-columns: auto 1fr auto auto;
        align-items: center;
    }
}
</style>
