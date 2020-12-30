import ItemModel from 'models/ItemModel';
import ShopModel from 'models/ShopModel';

const getPaginatedShopItems = (shop: ShopModel) => {
  const query = ItemModel.REF.where('shop', '==', shop.doc.ref);

  return ItemModel.getPaginatedCollection(query);
};

export default () => ({
  getPaginatedShopItems,
});
