import {
  commerce, company, image, lorem, random,
} from 'faker';
import Item from 'models/Item';
import Shop from 'models/Shop';
import type fb from 'firebase';

type seedingCallback<T> = () => Promise<fb.firestore.DocumentReference<T>>
const baseSeed = <T>(cb: seedingCallback<T>) => (count = 10) => Promise.all(
  Array.from(Array(count)).map(cb),
);

export const shopSeed = baseSeed(() => Shop.create({
  name: company.companyName(),
  description: lorem.paragraph(),
  img: image.business(),
  headerImg: image.abstract(),
}));

export const itemSeed = (shopDocRef: Parameters<typeof Item>[0]) => baseSeed(() => Item(shopDocRef)
  .create({
    name: commerce.productName(),
    img: image.food(),
    description: commerce.productDescription(),
    category: null,
    price: random.number({ min: 500, precision: 500 }),
    stock: random.number(20),
    tags: [],
  }));
