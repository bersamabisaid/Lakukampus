import { db, fireUtils } from 'src/firebase';
import type fb from 'firebase';

interface ModelOptions {
  path: string;
}

interface ModelWithTimestamp {
  _created: fb.firestore.Timestamp;
  _updated: fb.firestore.Timestamp;
  _deleted: fb.firestore.Timestamp | null;
}

type ModelData<T extends fb.firestore.DocumentData> = T & ModelWithTimestamp;

// type guard for Model fullfilled fields
function isModelData <T extends Record<string, unknown>>(data: T): data is T & ModelWithTimestamp {
  return ('_created' in data && fireUtils.isTimestamp(data._created))
    && ('_updated' in data && fireUtils.isTimestamp(data._updated))
    && ('_deleted' in data && (fireUtils.isTimestamp(data._deleted) || data._deleted === null));
}

export default function Model <
    TDataModel extends fb.firestore.DocumentData
  >(
  { path }: ModelOptions,
  model: TDataModel,
) {
  type tModelData = ModelData<TDataModel>;

  const modelTemplate = Object.assign(model, {
    _created: fireUtils.firestoreNow,
    _updated: fireUtils.firestoreNow,
    _deleted: null,
  } as ModelWithTimestamp);

  return ((function () {
    const DataModel = (function (this: tModelData, data: tModelData | TDataModel) {
      const payload = isModelData(data) ? data : DataModel.applyTemplate(data);

      Object.assign(this, payload);
      Object.seal(this);
    }) as unknown as tDataModel;

    type DataModelInstance = InstanceType<typeof DataModel>;

    interface tDataModel {
      new (data: tModelData | TDataModel): tModelData

      ref: fb.firestore.CollectionReference<tModelData>

      applyTemplate: (data: Partial<TDataModel>) => tModelData

      converter: fb.firestore.FirestoreDataConverter<DataModelInstance>

      find: (
        id: string,
        options?: fb.firestore.GetOptions
      ) => Promise<fb.firestore.DocumentSnapshot<DataModelInstance>>

      create: (data: Partial<TDataModel>) =>
        Promise<(options?: fb.firestore.GetOptions | undefined) =>
          ReturnType<tDataModel['find']>>
    }

    DataModel.ref = db.collection(path) as fb.firestore.CollectionReference<tModelData>;

    DataModel.applyTemplate = (data) => {
      // eslint-disable-next-line prefer-object-spread
      const copiedTemplate = Object.assign({}, modelTemplate);

      return Object.assign(copiedTemplate, data);
    };

    DataModel.converter = {
      fromFirestore(snapshot: fb.firestore.QueryDocumentSnapshot<tModelData>, options) {
        return new DataModel(snapshot.data(options));
      },

      toFirestore(modelObject: DataModelInstance) {
        // eslint-disable-next-line prefer-object-spread
        return Object.assign({}, modelObject);
      },
    };

    DataModel.find = (id, options = { source: 'default' }) => DataModel.ref.doc(id)
      .withConverter(DataModel.converter).get(options);

    DataModel.create = async (data) => {
      const createdModel = new DataModel(DataModel.applyTemplate(data));
      const created = await DataModel.ref.withConverter(DataModel.converter).add(createdModel);

      return DataModel.find.bind(null, created.id);
    };

    return Object.freeze(DataModel);
  })());
}
