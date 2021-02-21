<template>
  <q-card>
    <q-list>
      <q-card>
        <q-card-section class="row q-ml-md">
          <div class="col-4">
            <image-detail-carousel />
          </div>

          <div class="col q-mx-lg">
            <h2 class="text-weight-medium text-h5">
              Jaket Universitas Sebelas Maret keren byatt parah lorem ipsum dolor sit amet
            </h2>
            <div class="row">
              <q-rating
                size="18px"
                v-model="stars"
                :max="5"
                color="primary"
              />
              <span class="text-subtitle1 q-ml-sm text-weight-medium">
                8.6
              </span>

              <q-separator
                vertical
                class="q-mx-md"
                color="primary"
              />

              <span class="text-subtitle1 text-weight-regular">
                500+ ulasan
              </span>

              <q-separator
                vertical
                class="q-mx-md"
                color="primary"
              />

              <span class="text-subtitle1 text-weight-regular">
                1.000 terjual
              </span>
            </div>

            <div class="text-h5 text-blue-9 text-weight-bold q-mt-md">
              <span
                class="done"
                style="font-size: 14px"
              >
                Rp 180.000
              </span>
              <span class="row">
                Rp 90.000
                <span
                  class="text-negative q-ml-sm"
                  style="font-size: 16px"
                >
                  33%OFF
                </span>
              </span>
              <span class="text-subtitle1 text-weight-regular text-grey-9 q-mt-sm">
                Tersedia > 50
              </span>

              <q-separator
                class="q-mt-md"
                color="dark"
              />
            </div>

            <div class="row q-mt-md">
              <span>Pengiriman: </span>
              <q-icon
                class="q-ml-md"
                name="local_shipping"
                size="sm"
              />
              <span class="q-ml-sm q-my-none">
                Dikirim ke <span class="text-weight-bold q-ml-sm">FMIPA</span>
              </span>
            </div>
            <q-btn
              color="primary"
              class="q-mt-xl"
              label="Beli Sekarang"
            />
          </div>
        </q-card-section>
      </q-card>
    </q-list>
  </q-card>
</template>

<script>
import { random, commerce } from 'faker';
import ImageDetailCarousel from 'components/ImageDetailCarousel.vue';

export default {
  name: 'DetailCard',

  data: () => ({
    selected: ['dsd'],
    stars: 4,
    select: false,
    numb: 1,
    price: random.number({
      min: 12000,
      precision: 1000,
    }),
    title: commerce.productName(),
    dialog: false,
  }),

  components: {
    ImageDetailCarousel,
  },

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
