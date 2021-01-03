import Model from 'models/Model';
import { Shop } from 'models/interface';

export default Model<Shop>({
  path: 'shops',
  defaults: {
    description: '',
    headerImg: '',
    img: '',
  },
});
