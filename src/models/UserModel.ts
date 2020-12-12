import type fb from 'firebase';
import firebase from 'src/firebase';
import { ModelBuilderObject, User } from 'models/interface';
import Model from 'models/Model';
import { db } from 'src/firebaseServices';

export default class UserModel extends Model<User> {
  public static REF = db.collection('users');

  public static converter = UserModel._getConverter();

  public static async fromUserCredential(user: fb.User): Promise<UserModel> {
    const ref = UserModel.REF.doc(user.uid);
    const doc = await ref.get() as fb.firestore.DocumentSnapshot<User>;

    if (!doc.exists) {
      await ref.set(UserModel.builder(user));
    }

    return new UserModel(doc);
  }

  private static builder(user: fb.User) {
    const created = new Date(user.metadata.creationTime ?? Date.now());
    const current = firebase.firestore.Timestamp.fromDate(created);

    return {
      name: user.displayName,
      email: user.email,
      img: user.photoURL,
      address: '',
      phoneNumber: user.phoneNumber,
      birthDate: null,
      _created: current,
      _updated: current,
      _deleted: null,
    } as ModelBuilderObject<User>;
  }

  private static _getConverter() {
    return super._makeConverter<UserModel, User>((snapshot) => new UserModel(snapshot));
  }
}
