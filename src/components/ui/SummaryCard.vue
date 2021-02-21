<template>
  <q-card-section
    class="col-4 col-md-6 q-pa-none"
  >
    <q-card-section>
      <q-icon
        :name="icon"
        size="md"
      /><br>
      <span class="text-center text-caption">{{ caption }}</span><br>
      <span class="text-primary text-weight-medium">0</span>
    </q-card-section>
  </q-card-section>
</template>

<script>
export default {
  name: 'SummaryCard',
  props: {
    icon: {
      type: String,
      default: '',
    },
    caption: {
      type: String,
      default: '',
    },
  },
};
</script>
