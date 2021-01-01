import BaseModel from 'models/BaseModel';
import { User } from 'models/interface';

export default BaseModel<User>({
  path: 'users',
});
