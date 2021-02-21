<template>
  <q-card>
    <q-list>
      <q-expansion-item default-opened>
        <template v-slot:header>
          <q-item-section>
            <div class="flex">
              <q-checkbox
                v-model="select"
                dense
              />
              <div>
                <div>
                  <q-icon
                    name="storefront"
                    size="md"
                    class="q-ml-md q-mr-sm"
                  />
                  <em class="text-weight-regular text-h6 vertical-middle">
                    Destiny Music
                  </em>
                </div>
              </div>
            </div>
          </q-item-section>
        </template>

        <q-card>
          <div class="q-mt-md q-mb-xl">
            <q-card-section
              class="row items-center q-ml-xl"
              style="height: 180px"
              v-for="n in 2"
              :key="n"
            >
              <q-checkbox
                v-model="select"
                dense
              />
              <div class="col-3">
                <q-card
                  class="q-ma-md"
                  style="width: 200px"
                  @click="select = !select"
                >
                  <q-img
                    src="https://picsum.photos/150"
                    height="150px"
                  />
                </q-card>
              </div>
              <div class="text-h5 col-3 text-weight-medium q-mr-xl">
                {{ title }}
                <div>
                  <span class="text-h6 text-weight-regular">
                    Rp. {{ price }}
                  </span>
                </div>
              </div>
              <div class="text-h4 col-2 q-mr-xl">
                <q-btn-group>
                  <q-btn
                    icon="remove"
                    color="white"
                    class="bg-grey-8"
                    @click="minButton"
                    v-if="numb >= 2"
                  />
                  <q-btn
                    v-else
                    disable
                    icon="remove"
                    color="grey"
                    text-color="white"
                  />
                  <q-input
                    v-model.number="numb"
                    input-class="text-center"
                    dense
                    outlined
                  />
                  <q-btn
                    icon="add"
                    color="primary"
                    text-color="white"
                    @click="plusButton"
                  />
                </q-btn-group>
                <div>
                  <span class="text-h6 text-weight-regular">
                    <small class="text-caption">total/item</small>
                    Rp. {{ pricePerItemTotal }}
                  </span>
                </div>
              </div>
              <q-btn
                class="col-2 q-ml-xl"
                color="red"
                text-color="white"
                label="Hapus"
              />
            </q-card-section>
          </div>
        </q-card>
      </q-expansion-item>
    </q-list>
  </q-card>
</template>

<script>
import { random, commerce } from 'faker';

export default {
  name: 'CartItemList',

  data: () => ({
    selected: ['dsd'],
    select: false,
    numb: 1,
    price: random.number({
      min: 12000,
      precision: 1000,
    }),
    title: commerce.productName(),
  }),
  computed: {
    pricePerItemTotal() {
      return this.price * this.numb;
    },
  },
  methods: {
    plusButton() {
      this.numb += 1;
    },
    minButton() {
      this.numb -= 1;
    },
  },
};
</script>

<style lang="scss" scoped>
  em {
    font-style: normal;
    text-decoration: none;
  }
</style>
