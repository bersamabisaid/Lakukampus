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
            />
          </div>
        </q-card>
      </q-expansion-item>
    </q-list>
  </q-card>
</template>

<script>
import { random, commerce } from 'faker';

export default {
  name: 'DetailCard',

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
