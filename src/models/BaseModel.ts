import { db } from 'src/firebase';
import type fb from 'firebase';
import { StoredModel } from 'models/interface';

interface ModelOptions {
  path: string;
}

export default <TModel = fb.firestore.DocumentData>({ path }: ModelOptions) => class {
  public static get ref() {
    return db.collection(path) as fb.firestore.CollectionReference<StoredModel<TModel>>;
  }

  public static find(id: string) {
    return this.ref.doc(id).get();
  }
};
