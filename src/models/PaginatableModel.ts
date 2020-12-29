import Model from 'models/Model';
import type fb from 'firebase';

// eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
type Constructor = new (...arg: any[]) => {};

interface HasConverter<T extends Model = Model> {
  converter: fb.firestore.FirestoreDataConverter<T>;
}

interface AcceptedModel extends Constructor, HasConverter {
}

export default function PaginatableModel<TModel extends AcceptedModel>(model: TModel) {
  const Paginatable = class extends model {
    public static async getPaginatedCollection(query: fb.firestore.Query, limit = 20) {
      const snapshots = await query.limit(limit).withConverter(model.converter).get();
      const { docs, query: finalQuery } = snapshots;
      const lastDoc = snapshots.docs[snapshots.docs.length - 1];

      return {
        docs,
        next: () => this.getPaginatedCollection(finalQuery.startAfter(lastDoc)),
      };
    }
  };

  return Paginatable;
}
