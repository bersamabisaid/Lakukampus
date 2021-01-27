/* eslint-disable max-classes-per-file */
import Model from 'models/Model';
import type fb from 'firebase';
import defineModel from 'models/defineModel';

interface IUser {
  name: string;
  email: string;
  img?: string;
  address?: string;
  phoneNumber?: string;
  birthDate?: fb.firestore.Timestamp | null;
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

const UserModel = defineModel({
  path: 'lorem',

  model: class User {
    name!: string;

    email!: string;

    img?: string;

    address?: string;

    phoneNumber?: string;

    birthDate?: Date | null;
  },

  defaults: {
    img: '',
    address: '',
    phoneNumber: '',
    birthDate: null,
  },
});

const anh = UserModel.factory({ name: 'Anh', email: 'anhDev' });

console.log({ anh, UserModel });
