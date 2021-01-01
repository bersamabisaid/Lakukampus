import BaseModel from 'models/BaseModel';
import { Item } from 'models/interface';

export default BaseModel<Item>({
  path: 'items',
});
