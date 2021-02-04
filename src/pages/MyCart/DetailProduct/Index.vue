<template>
  <q-page-container
    padding
    style="padding-bottom: 20vh"
  >
    <div class="row">
      <div class="col-1" />
      <div class="col">
        <div class="row q-col-gutter-lg">
          <div class="col row full-width q-mb-md">
            <detail-card class="col full-width" />
          </div>
        </div>
      </div>
      <div class="col-1" />
    </div>

    <div class="row q-mt-xl">
      <div class="col-1" />
      <div class="col">
        <div class="row q-col-gutter-lg">
          <div class="col row full-width q-mb-md">
            <detail-content class="col full-width" />
          </div>
        </div>
      </div>
      <div class="col-1" />
    </div>
  </q-page-container>
</template>

<script>
import DetailCard from 'pages/MyCart/DetailProduct/DetailCard.vue';
import DetailContent from 'pages/MyCart/DetailProduct/DetailContent.vue';

export default {
  name: 'DetailProduct',

  data: () => ({
    selected: [],
    data: [
    ],
  }),

  components: {
    DetailCard,
    DetailContent,
  },
};
</script>

<style lang="scss">
  .done {
    text-decoration: line-through;
    color: #bbb;
  }

  em {
  font-style: normal;
  text-decoration: none;
  }
</style>
