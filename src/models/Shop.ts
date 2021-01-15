import Model from 'models/Model';
import baseSeed from 'models/seed';
import {
  company, image, lorem, random,
} from 'faker';

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

const shopSeed = baseSeed(async () => (await Shop.create({
  name: company.companyName(),
  description: lorem.paragraphs(),
  img: random.image(),
  headerImg: image.abstract(),
}))());

export default Shop;

export {
  shopSeed,
};
