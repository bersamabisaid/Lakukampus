import { db, fireUtils } from 'src/firebase';
import { StoredModel } from 'models/interface';
import type fb from 'firebase';

interface ModelOptions<TModel = fb.firestore.DocumentData> {
  path: string;

  paginateLimitDefault?: number;

  defaults?: Partial<TModel>;
}

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

  find(id: string) {
    return this.ref.doc(id).get();
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
