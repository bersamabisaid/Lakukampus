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
                        class="search-form__container"
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
                            class="search-form__category-input"
                            style="width: 150px;"
                        />

                        <q-input
                            v-model="search"
                            placeholder="Search here..."
                            dark
                            dense
                            standout
                            class="search-form__text-input"
                        >
                            <template v-slot:append>
                                <q-btn
                                    :to="searchNavigate"
                                    icon="search"
                                    round
                                    flat
                                />
                            </template>
                        </q-input>
                    </q-form>

                    <div class="toolbar__group-btn-action">
                        <q-btn
                            icon="shopping_cart"
                            flat
                            round
                            :to="{name: 'MyCart'}"
                        >
                            <q-badge
                                color="red"
                                floating
                            >
                                {{ cartAmount }}
                            </q-badge>
                        </q-btn>

                        <q-btn-dropdown
                            label="Hi, bbid!"
                            no-caps
                            flat
                        >
                            <q-list>
                                <q-item-label
                                    header
                                    @click="login"
                                >
                                    <q-img src="icons/favicon-128x128.png" />
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
                </div>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <router-view
                @product:add-to-cart="cartAmount += 1"
            />
        </q-page-container>
    </q-layout>
</template>

<script>
import auth from 'src/services/auth';

export default {
    name: 'MainLayout',
    data: () => ({
        search: null,
        category: null,
        cartAmount: 0,
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

    methods: {
        login() {
            auth.googleLogin();
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
        grid-template-areas:
            "brand searchForm groupBtnAction";

        @media screen and (max-width: $breakpoint-sm) {
            grid-template-areas:
                "brand . groupBtnAction"
                "searchForm searchForm searchForm"
            ;
        }
    }

    &__group-btn-action {
        grid-area: groupBtnAction;
    }
}

.search-form {
    &__container {
        grid-area: searchForm;
        display: flex;
        justify-content: center;
    }

    &__category-input {
        margin-left: map-get($space-md, x);

        @media screen and (max-width: $breakpoint-xs) {
            display: none;
        }
    }

    &__text-input {
        width: 30vw;
        margin-left: map-get($space-md, x);

        @media screen and (max-width: $breakpoint-xs) {
            width: 100%;
        }
    }
}
</style>
