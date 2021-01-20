import Model from 'models/Model';
import Shop from 'models/Shop';
import User from 'models/User';

interface IChat {
  participants: typeof User['ref']['doc'][];
  shop: typeof Shop['ref']['doc'] | undefined;
}

export default Model<IChat>({
  path: 'chats',
}, {
  participants: [],

  shop: undefined,
});
