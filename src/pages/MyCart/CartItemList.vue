<template>
  <q-card>
    <q-list>
      <q-expansion-item
        default-opened
      >
        <template v-slot:header>
          <q-item-section>
            <div class="flex">
              <q-checkbox
                v-model="select"
                dense
              />
              <span class="text-caption q-ml-md">
                Seller:<span class="text-h6 text-grey-8"> Anonymous</span>
              </span>
            </div>
          </q-item-section>
        </template>

        <q-card>
          <q-card-section>
            <div class="flex justify-center">
              <q-card
                v-for="i in 3"
                :key="i"
                class="q-ma-md"
                style="width: 200px"
                @click="select = !select"
              >
                <q-card-section>
                  <q-checkbox
                    v-model="select"
                    dense
                  />
                </q-card-section>
                <q-img
                  src="https://picsum.photos/150"
                  height="150px"
                />
                <q-separator />
                <q-list dense>
                  <q-item>
                    <q-item-section>
                      <q-btn-group flat>
                        <q-btn icon="remove" />
                        <q-input
                          label="qty"
                          v-model.number="numb"
                          input-class="text-center"
                          dense
                          outlined
                        />
                        <q-btn icon="add" />
                      </q-btn-group>
                    </q-item-section>
                  </q-item>
                </q-list>
                <q-separator />
                <div class="flex justify-between q-px-sm bg-grey-1">
                  <span class="text-caption text-weight-regular">
                    <small>price</small> Rp 10
                  </span>
                  <span class="text-h6 text-weight-regular">
                    <small class="text-caption">total</small>
                    Rp 199
                  </span>
                </div>
              </q-card>
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </q-card>
</template>

<script>
export default {
  name: 'CartItemList',

  data: () => ({
    selected: ['dsd'],
    numb: 22,
    select: false,
  }),
};
</script>
