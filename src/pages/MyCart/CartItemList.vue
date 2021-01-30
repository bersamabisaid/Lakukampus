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
          <q-card-section
            class="row items-center"
            style="height: 345.3px"
            v-for="i in 2"
            :key="i"
          >
            <div class="col-3">
              <q-card
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

                <div class="bg-grey-3 text-right">
                  <span class="text-h6 text-weight-regular">
                    <small class="text-caption">price</small>
                    Rp 30.000
                  </span>
                </div>
              </q-card>
            </div>
            <div class="text-h5 col text-weight-medium q-mr-xl">
              Buku Edensor by Andrea hirata tetralogi laskar pelangi
            </div>
            <div class="text-h4 col col-2">
              <q-btn-group>
                <q-btn
                  icon="remove"
                  color="white"
                  class="bg-grey-8"
                />
                <q-input
                  v-model.number="numb"
                  input-class="text-center"
                  dense
                  outlined
                />
                <q-btn
                  icon="add"
                  color="white"
                  class="bg-grey-8"
                />
              </q-btn-group>
            </div>
            <q-btn
              class="col-2 q-ml-xl justify-center"
              style="background: red; color: white"
              label="Hapus"
            />
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

<style lang="scss" scoped>
  em {
    font-style: normal;
    text-decoration: none;
  }

  // FLEX ROW / COLUMN BREAK
  .flex-break {
    flex: 1 0 100% !important;
    width: 0 !important;
  }
</style>
