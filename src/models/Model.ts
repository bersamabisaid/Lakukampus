import { db, fireUtils } from 'src/firebase';
import { StoredModel } from 'models/interface';
import type fb from 'firebase';

interface ModelOptions<TModel = fb.firestore.DocumentData> {
  path: string;

  paginateLimitDefault?: number;

  defaults?: Partial<TModel>;
}

const extendsSnapshot = <T>(
  snapshot: fb.firestore.DocumentSnapshot<StoredModel<T>>,
) => {
  Object.assign(snapshot, {
    update: (data: Partial<T>) => snapshot.ref.update({
      ...data,
      _updated: fireUtils.firestoreNow,
    }),
  });

  return snapshot;
};

export default <TModel = fb.firestore.DocumentData>(
  {
    path,
    defaults = {},
    paginateLimitDefault = 20,
  }: ModelOptions<TModel>,
) => ({
  get ref() {
    return db.collection(path) as fb.firestore.CollectionReference<StoredModel<TModel>>;
  },

  get defaults() {
    return defaults;
  },

  async find(id: string) {
    const doc = await this.ref.doc(id).get();

    return extendsSnapshot(doc);
  },

  create(data: TModel) {
    return this.ref.add({
      ...data,
      _created: fireUtils.firestoreNow,
      _updated: fireUtils.firestoreNow,
      _deleted: null,
    });
  },

  async paginate(
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
  },
});
