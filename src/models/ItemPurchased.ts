import Item from 'models/Item';
import SubModel from 'models/Submodel';
import Transaction from 'models/Transaction';

interface IItemPurchased {
  item: ReturnType<ReturnType<typeof Item>['ref']['doc']> | null;
  qty: number;
  description: string;
}

const ItemPurchased = SubModel({
  parent: Transaction,
  path: 'itemPurchased',
}, {
  item: null,

  qty: 1,

  description: '',
} as IItemPurchased);

export default ItemPurchased;
