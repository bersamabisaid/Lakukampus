import { ItemPurchased as ItemPurchasedInterface } from 'models/interface';
import SubcollectionModel from 'models/SubcollectionModel';
import Transaction from 'models/Transaction';

// eslint-disable-next-line max-len
const [ItemPurchased, ItemPurchasedGroup] = SubcollectionModel<typeof Transaction, ItemPurchasedInterface>({
  path: 'itemPurchased',

  defaults: {
    qty: 1,
    description: '',
  },
});

export default ItemPurchased;

export {
  ItemPurchasedGroup,
};
