import { ref, SetupContext } from '@vue/composition-api';
import useAuthGuard from 'composition/useAuthGuard';
import ShopModel from 'models/ShopModel';
import ItemModel from 'models/ItemModel';
import { Notify } from 'quasar';
import type { Item } from 'models/interface';
import type fb from 'firebase';

Notify.registerType('no-shop-context-notification', {
  message: 'Can\'t add item without a Shop, you can create one',
});

const fetchShopData = async (docRef: fb.firestore.DocumentReference) => {
  const doc = await docRef.withConverter(ShopModel.converter).get();

  return doc.data();
};

const createNewShop = async (...[data]: Parameters<typeof ShopModel.builder>) => {
  const created = ShopModel.builder(data).buildObj();

  return ShopModel.REF.add(created);
};

const createNewItem = async (ctx: ShopModel, data: Omit<Item, 'shop'>) => {
  const created = ctx.itemBuilder(data).buildObj();

  return ItemModel.REF.add(created);
};

export default (props: unknown, ctx: SetupContext) => {
  useAuthGuard(props, ctx);

  const currentShop = ref<ShopModel | undefined>(undefined);

  const addNewItem = async (data: Parameters<typeof createNewItem>[1]) => {
    if (currentShop.value) {
      return createNewItem(currentShop.value, data);
    }

    Notify.create({ type: 'no-shop-context-notification' });
    return undefined;
  };

  const createNewShopWrapper = async (...[data]: Parameters<typeof createNewShop>) => {
    const created = await createNewShop(data);
    currentShop.value = await fetchShopData(created);
  };

  return {
    currentShop,
    createNewShop: createNewShopWrapper,
    fetchShopData,
    addNewItem,
  };
};
