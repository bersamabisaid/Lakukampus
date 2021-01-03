import SubcollectionModel from 'models/SubcollectionModel';
import Shop from 'models/Shop';
import { Item as ItemInterface } from 'models/interface';

const [Item, ItemGroupCollection] = SubcollectionModel<typeof Shop, ItemInterface>({
  path: 'items',
  defaults: {
    description: '',
    tags: [],
    category: null,
    stock: 0,
    price: 0,
  },
});

export default Item;

export {
  ItemGroupCollection,
};
