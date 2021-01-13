import { Seller } from 'models/interface';
import Model from 'models/Model';

export default Model<Seller>({
  path: 'sellers',

  defaults: {
    shops: [],
  },
});
