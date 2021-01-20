import Model from 'models/Model';
import Shop from 'models/Shop';
import User from 'models/User';

interface ITransaction {
  user: ReturnType<typeof User['ref']['doc']> | null;
  shop: ReturnType<typeof Shop['ref']['doc']> | null;
}

export default Model<ITransaction>({
  path: 'transactions',
}, {
  user: null,

  shop: null,
});
