import BaseModel from 'models/BaseModel';
import { Item } from 'models/interface';

export default BaseModel<Item>({
  path: 'items',
  defaults: {
    description: '',
    tags: [],
    category: null,
    stock: 0,
    price: 0,
  },
});
