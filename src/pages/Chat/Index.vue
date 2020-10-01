<template>
    <q-page padding>
        <div class="row full-width">
            <div class="col-1" />

            <div class="col-10">
                <q-card class="chat__container">
                    Lorem ipsum dolor sit amet.
                </q-card>
            </div>
            <!-- <div class="row full-height items-stretch">
                    <q-list
                        class="col-3"
                    >
                        <q-item
                            clickable
                            v-ripple
                        >
                            <q-item-section avatar>
                                <q-avatar>
                                    <q-icon name="people" />
                                </q-avatar>
                            </q-item-section>

                            <q-item-section>
                                <q-item-label lines="1">
                                    Anonymous
                                </q-item-label>

                                <q-item-label
                                    lines="2"
                                    caption
                                >
                                    Lorem ipsum dolor sit amet.
                                </q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-list>

                    <q-separator vertical />

                    <div class="col">
                        <div class="flex column full-height justify-between">
                            <div class="bg-grey-2 q-py-sm">
                                <q-toolbar>
                                    <q-avatar>
                                        <q-icon name="person" />
                                    </q-avatar>

                                    <q-toolbar-title>
                                        Anonymous
                                    </q-toolbar-title>

                                    <q-space />

                                    <q-btn
                                        icon="more_vert"
                                        round
                                        flat
                                    />
                                </q-toolbar>
                            </div>

                            <div class="chat__container">
                                <q-chat-message
                                    :text="['hello!']"
                                    sent
                                />
                                <q-chat-message :text="['hi!']" />
                            </div>

                            <q-card
                                class="enter-message"
                                bordered
                                flat
                            >
                                <q-input
                                    label="enter message here..."
                                    rounded
                                />
                            </q-card>
                        </div>
                    </div>
                </div>
            </q-card> -->

            <div class="col-1" />
        </div>
    </q-page>
</template>

<script>
export default {
    name: 'ChatPage',
};
</script>

<style lang="scss">
.chat {
    &__container {
        height: 700px;
        max-height: 80vh;
        display: grid;
    }
}
</style>
