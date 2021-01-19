import SubModel from 'models/Submodel';
import Shop from 'models/Shop';
import Category from 'models/Category';
import { repeatedPromises } from 'src/utils/Promises';
import { commerce, random } from 'faker';

interface IItem {
  category: typeof Category['ref']['doc'] | null;
  name: string;
  img: string;
  stock: number;
  price: number;
  description: string;
  tags: string[];
}

const Item = SubModel({
  parent: Shop,
  path: 'items',
}, {
  name: '',

  category: null,

  img: '',

  stock: 1,

  price: 0,

  description: '',

  tags: [],
} as IItem);

const itemSeed = (
  parent: Parameters<typeof Item>[0],
  count: number,
) => repeatedPromises(() => Item(parent).create({
  name: commerce.productName(),
  img: random.image(),
  stock: random.number(100),
  price: random.number({ precision: 1000 }),
  description: commerce.productDescription(),
}))(count);

export default Item;

export {
  itemSeed,
};
