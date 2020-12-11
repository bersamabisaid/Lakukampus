import type fb from 'firebase';
import firebase from 'src/firebase';
import { ModelBuilderObject } from 'models/interface';
import 'src/firebaseServices';

export default abstract class Model<T = fb.firestore.DocumentData> {
  constructor(
    public doc: fb.firestore.DocumentSnapshot<T> | fb.firestore.QueryDocumentSnapshot<T>,
  // eslint-disable-next-line no-empty-function
  ) {}

  public toObject() {
    return {
      uid: this.doc.id,
      ...(this.doc.data() as ModelBuilderObject<T>),
    };
  }

  protected static _makeConverter<T extends Model<U>, U = fb.firestore.DocumentData>(
    createInstanceMethod: (
        doc: fb.firestore.QueryDocumentSnapshot<U>,
        options: fb.firestore.SnapshotOptions,
      ) => T,
  ) {
    return {
      toFirestore(data: new () => T): fb.firestore.DocumentData {
        return data;
      },
      fromFirestore(
        snapshot: fb.firestore.QueryDocumentSnapshot<U>,
        options: fb.firestore.SnapshotOptions,
      ): T {
        return createInstanceMethod(snapshot, options);
      },
    };
  }

  protected static _builderObjectMerge<T = unknown>(oldData: Partial<T>, newData: Partial<T>) {
    const serverTimeNow = firebase.firestore.FieldValue.serverTimestamp();

    return {
      _created: serverTimeNow,
      _deleted: serverTimeNow,
      ...oldData,
      ...newData,
      _updated: serverTimeNow,
    } as ModelBuilderObject<T>;
  }
}
