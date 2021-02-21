<template>
  <q-card-section class="col-4 col-md-3 q-pa-sm">
    <div>
      <q-card class="my-card custom-card">
        <q-card-section
          v-ripple
          class="column items-center"
        >
          <div class="text-primary text-weight-medium">
            {{ number }}
          </div>
          <div class="text-center text-caption">
            {{ caption }}
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-card-section>
</template>

<script>
export default {
  name: 'ImportantCard',
  props: {
    number: {
      type: Number,
      default: 0,
    },
    caption: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
  },
};
</script>
