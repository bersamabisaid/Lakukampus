<template>
  <q-page
    padding
    class="column"
  >
    <q-card
      flat
      class="self-center fit max-w-screen-xs"
    >
      <q-card-section>
        <section-layout title="Buat toko">
          <q-stepper
            v-model="step"
            ref="stepper"
            flat
            bordered
            vertical
          >
            <q-step
              :name="0"
              title="Beri nama toko"
              :done="step > 0"
            >
              <q-form
                ref="form"
                class="column q-gutter-y-lg"
              >
                <q-input
                  label="Beri nama untuk tokomu..."
                  v-model="shopName"
                  :rules="[rule.required, rule.uniqueShopName]"
                  lazy-rules
                />

                <transition
                  enter-active-class="animated fadeInDown"
                  leave-active-class="animated fadeOutUp"
                >
                  <q-input
                    v-if="shopName || shopDesc"
                    label="Beri deskripsi untuk tokomu... (opsional)"
                    v-model="shopDesc"
                    autogrow
                  />
                </transition>
              </q-form>
            </q-step>

            <q-step
              :name="1"
              title="Upload foto profil"
              :done="step > 1"
            >
              <div
                class="column justify-center items-center q-gutter-y-lg"
                style="min-height: 3rem;"
              >
                <q-avatar
                  v-if="photoObjectURL"
                  class="img-placeholder"
                >
                  <img
                    :src="photoObjectURL"
                    style="object-fit: cover;"
                  >
                </q-avatar>

                <q-btn
                  label="upload foto"
                  icon="upload"
                  flat
                  color="primary"
                  class="fit"
                  @click="inputEl.click()"
                />
              </div>
            </q-step>
          </q-stepper>
        </section-layout>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          :label="step === 1 ? 'Finish' : 'Continue'"
          color="primary"
          @click="onContinue"
        />

        <q-btn
          v-if="step > 0"
          label="Back"
          color="primary"
          flat
          @click="onBack"
        />
      </q-card-actions>
    </q-card>

    <q-btn
      v-if="!isUnderMd"
      icon="arrow_back"
      round
      color="white"
      text-color="grey-9"
      class="absolute-top-left q-ma-lg"
      @click="$router.back()"
    />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import SectionLayout from 'layouts/SectionLayout.vue';
import useFormFule from 'composables/useFormRule';
import Shop from 'models/Shop';
import type { QStepper, QForm } from 'quasar';

const createImgInput = () => {
  const el = document.createElement('input');
  el.type = 'file';
  el.accept = 'image/png, image/jpeg, image/jpg';

  return el;
};

export default defineComponent({
  name: 'CreateShopPage',

  components: {
    SectionLayout,
  },

  setup() {
    const { required, uniqueFieldFactory } = useFormFule();

    return {
      rule: {
        required,
        uniqueShopName: uniqueFieldFactory(Shop, 'name', 'Nama toko sudah tersedia'),
      },
    };
  },

  data() {
    return {
      step: 0,
      shopName: '',
      shopDesc: '',
      photo: null as (null | File),

      inputEl: createImgInput(),
    };
  },

  computed: {
    photoObjectURL(): string | null {
      return this.photo && URL.createObjectURL(this.photo);
    },
    isUnderMd(): boolean {
      return this.$q.screen.width < this.$q.screen.sizes.md;
    },
  },

  methods: {
    async onContinue() {
      const stepper = this.$refs.stepper as QStepper;
      const form = this.$refs.form as QForm;

      switch (this.step) {
        case 0:
          if (await form.validate()) {
            stepper.next();
          }
          break;

        case 1:
          try {
            await Shop.create({
              name: this.shopName,
              description: this.shopDesc,
            });
          } catch (err) {
            // eslint-disable-next-line no-console
            console.log(err);
          }

          break;

        default:
          stepper.next();
          break;
      }
    },
    onBack() {
      const stepper = this.$refs.stepper as QStepper;

      switch (this.step) {
        default:
          stepper.previous();
          break;
      }
    },
  },

  mounted() {
    this.inputEl.addEventListener('change', () => {
      this.photo = this.inputEl.files && this.inputEl.files[0];
    });
  },
});
</script>

<style lang="scss">
.img-placeholder {
  width: 12rem;
  height: 12rem;
  box-shadow: $shadow-3;
}
</style>
