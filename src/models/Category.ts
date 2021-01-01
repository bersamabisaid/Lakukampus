import BaseModel from 'models/BaseModel';
import { Category } from 'models/interface';

export default BaseModel<Category>({
  path: 'categories',
});
