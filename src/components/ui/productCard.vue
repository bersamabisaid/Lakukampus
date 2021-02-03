<template>
  <q-card class="product-card">
    <q-img
      height="150px"
      :src="photo"
    />

    <q-card-section>
      <div class="q-mb-sm">
        <h6
          class="q-my-none text-body1 text-weight-regular ellipsis"
          style="line-height: 1.1;"
        >
          {{ name }}
        </h6>
      </div>

      <div class="column">
        <small class="text-grey text-strike">
          Rp. {{ price }}
        </small>

        <span class="text-body2 text-weight-medium">
          Rp. 99.999.999
        </span>
      </div>
    </q-card-section>

    <q-separator />

    <div class="q-mx-sm row justify-evenly">
      <a
        href="#"
        class="text-grey"
      >
        <small>Toko bagus</small>
      </a>

      <a
        href="#"
        class="text-grey"
      >
        <small>FMIPA</small>
      </a>

      <div class="text-grey-7">
        <q-icon
          name="star_rate"
          color="amber"
        />
        <small> 4.9</small>
      </div>
    </div>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'productCard',

  props: {
    name: String,
    photo: String,
    price: Number,
    bestChoice: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss">
.product-card {
  min-width: 180px;
  max-width: 250px !important;
}
</style>
