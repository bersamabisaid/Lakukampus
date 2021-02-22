<template>
  <q-card-section class="col-4 col-md-3 q-pa-sm">
    <div>
      <q-card class="my-card custom-card">
        <q-card-section
          v-ripple
          class="col-4 col-md-3"
        >
          <div class="row">
            <span class="text-center text-weight-regular">
              {{ caption }}
            </span>
            <span class="text-h6 text-weight-bolder">
              Rp. {{ number }}
            </span>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-card-section>
</template>
<script>
export default {
  name: 'AnalysisCard',
  props: {
    caption: {
      type: String,
      default: '',
    },
    number: {
      type: Number,
      default: 0,
    },
  },
};
</script>
