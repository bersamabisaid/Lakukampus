import Model from 'models/Model';
import type fb from 'firebase';

interface IUser {
  name: string;
  email: string;
  img: string;
  address: string;
  phoneNumber: string;
  birthDate: fb.firestore.Timestamp | null;
}

export default Model<IUser>({
  path: 'users',
}, {
  name: '',

  email: '',

  img: '',

  address: '',

  phoneNumber: '',

  birthDate: null,
});
