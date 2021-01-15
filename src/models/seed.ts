// import {
//   commerce, company, image, lorem, random,
// } from 'faker';
// import Item from 'models/Item';
// import Shop from 'models/Shop';
// import type fb from 'firebase';

type seedingCallback<T> = () => Promise<T>

export default function baseSeed <T>(cb: seedingCallback<T>) {
  return (count = 10) => Promise.all(
    Array.from(Array(count)).map(cb),
  );
}

// export const shopSeed = baseSeed(() => Shop.create({
//   name: company.companyName(),
//   description: lorem.paragraph(),
//   img: image.business(),
//   headerImg: image.abstract(),
// }));

// eslint-disable-next-line max-len
// export const itemSeed = (shopDocRef: Parameters<typeof Item>[0]) => baseSeed(() => Item(shopDocRef)
//   .create({
//     name: commerce.productName(),
//     img: image.food(),
//     description: commerce.productDescription(),
//     category: null,
//     price: random.number({ min: 500, precision: 500 }),
//     stock: random.number(20),
//     tags: [],
//   }));
