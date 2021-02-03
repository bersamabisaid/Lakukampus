<template>
  <q-page class="row">
    <div
      class="column items-center bg-cyan-2"
      style="width: 683px"
    >
      <img :src="require('assets/images/shopping/bro.png')">
    </div>
    <div
      class="column justify-center"
      style="width: 683px"
    >
      <div class="col-6 q-ml-xl q-pl-xl">
        <img
          :src="require('assets/images/Lakukampus_logo.png')"
          style="width: 160px"
          class="q-mb-sm"
        >

        <div class="text-h4 text-weight-bolder">
          Daftar Sekarang
          <div class="text-subtitle2 text-weight-regular q-py-md">
            Gabung Lakukampus nggak pake ribet!
          </div>
          <q-btn>
            <q-avatar
              left
              class="q-mr-md"
              size="20px"
            >
              <img :src="require('assets/images/Google_Logo.png')">
            </q-avatar>
            <div>daftar dengan google</div>
          </q-btn>
          <div class="text-subtitle2 text-weight-regular q-py-md">
            Dengan mendaftar, saya menyetujui
            <a
              href="/##"
              class="text-warning"
            >
              <em class="text-warning">Syarat<br>
                dan Ketentuan
              </em>
            </a> serta
            <a
              href="/##"
              class="text-warning"
            >
              <em class="text-warning">
                Kebijakan Privasi
              </em>
            </a>
            <div style="margin-top: 80px">
              Sudah punya akun Lakukampus?
              <a
                href="/##"
                class="text-warning"
              >
                <em class="text-warning">Masuk</em>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'SignUpPage',
};
</script>

<style lang="scss">
   em {
     font-style: normal;
     text-decoration: none;
    }
</style>
