import Model from 'models/Model';
import Shop from 'models/Shop';
import User from 'models/User';

interface ISeller {
  user: typeof User['ref']['doc'] | null;
  shops: typeof Shop['ref']['doc'][];
  faculty: string;
  program: string;
  studentId: string;
  address: string;
  identityImg: string;
  batchYear: number;
}

export default Model<ISeller>({
  path: 'sellers',
}, {
  user: null,

  shops: [],

  faculty: '',

  program: '',

  studentId: '',

  address: '',

  identityImg: '',

  batchYear: new Date().getFullYear(),
});
