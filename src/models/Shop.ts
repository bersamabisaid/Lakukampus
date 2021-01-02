import BaseModel from 'models/BaseModel';
import { Shop } from 'models/interface';

export default BaseModel<Shop>({
  path: 'shops',
  defaults: {
    description: '',
    headerImg: '',
    img: '',
  },
});
