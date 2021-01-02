import { db, fireUtils } from 'src/firebase';
import { StoredModel } from 'models/interface';
import type fb from 'firebase';

interface ModelOptions<T = fb.firestore.DocumentData> {
  path: string;

  paginateLimitDefault?: number;

  defaults?: Partial<T>;
}

export default <TModel = fb.firestore.DocumentData>(
  {
    path, defaults = {},
    paginateLimitDefault = 20,
  }: ModelOptions<TModel>,
) => class {
  public static get ref() {
    return db.collection(path) as fb.firestore.CollectionReference<StoredModel<TModel>>;
  }

  public static get defaults() {
    return defaults;
  }

  public static find(id: string) {
    return this.ref.doc(id).get();
  }

  public static create(data: TModel) {
    return this.ref.add({
      ...data,
      _created: fireUtils.firestoreNow,
      _updated: fireUtils.firestoreNow,
      _deleted: null,
    });
  }

  public static async paginate(
    query: fb.firestore.Query<StoredModel<TModel>>,
    limit = paginateLimitDefault,
  ) {
    const finalQuery = query.limit(limit);
    const { docs } = await finalQuery.get();
    let page = 1;

    return {
      docs,
      next: () => {
        page += 1;
        return finalQuery.startAfter(limit * page).limit(limit);
      },
    };
  }
};
