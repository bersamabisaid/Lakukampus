import Model from 'models/Model';
import {
  company, image, lorem, random,
} from 'faker';
import { repeatedPromises } from 'src/utils/Promises';

interface IShop {
  name: string;
  description: string;
  headerImg: string;
  img: string;
}

const Shop = Model<IShop>({
  path: 'shops',
}, {
  name: '',

  description: '',

  headerImg: '',

  img: '',
});

const shopSeed = repeatedPromises(() => Shop.create({
  name: company.companyName(),
  description: lorem.paragraphs(),
  img: random.image(),
  headerImg: image.abstract(),
}));

export default Shop;

export {
  shopSeed,
};
