<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Shop from 'models/Shop';
import Category from 'models/Category';
import Item from 'models/Item';
import Transaction from 'models/Transaction';
import ItemPurchased from 'models/ItemPurchased';
import User from 'models/User';

export default defineComponent({
  name: 'App',

  async mounted() {
    const tokoBagus = await Shop.create({
      name: 'Toko Bagus',
    });

    console.log({ tokoBagus });

    const getShop = await Shop.find('4C9Aho9RupS4LTaeHHly');

    console.log({ getShop });

    const mebelCategory = await Category.create({ name: 'Mebel' });

    const tokoBagusItems = Item(tokoBagus);
    const kayuBakar = await tokoBagusItems.create({
      name: 'Kayu Bakar',
      description: 'kayu kualitas impor joss pokok e!',
      category: mebelCategory,
      img: 'https://picsum.photos/300/300',
      stock: 1,
      price: 20000,
      tags: ['Kayu', 'Mebel', 'Arang'],
    });

    const kursiKayu = await tokoBagusItems.create({
      name: 'Qursi Qayu',
      description: 'kayu kualitas impor joss pokok e!',
      category: mebelCategory,
      img: 'https://picsum.photos/300/300',
      stock: 1,
      price: 20000,
      tags: ['Kayu', 'Mebel'],
    });

    const firstTransaction = await Transaction.create({
      user: (await User.find('lvLIOjzggiWgjJwFz1fyi8l7hJfR')).ref,
      shop: tokoBagus,
    });

    const firstTransactionItems = ItemPurchased(firstTransaction);
    await firstTransactionItems.create({
      item: kayuBakar,
      qty: 10,
      description: 'harus dari kayu jati!',
    });

    await firstTransactionItems.create({
      item: kursiKayu,
      qty: 40,
      description: '-',
    });

    console.log(
      await firstTransactionItems.ref.withConverter(Transaction.converter).get(),
    );
  },
});
</script>
