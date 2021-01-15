import Model from 'models/Model';
import Shop from 'models/Shop';
import User from 'models/User';

interface ITransaction {
  user: typeof User['ref']['doc'] | null;
  shop: typeof Shop['ref']['doc'] | null;
}

export default Model<ITransaction>({
  path: 'transactions',
}, {
  user: null,

  shop: null,
});
