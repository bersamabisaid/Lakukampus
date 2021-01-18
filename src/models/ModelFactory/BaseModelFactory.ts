import { fireUtils } from 'src/firebase';
import type fb from 'firebase';

export interface ModelWithTimestamp {
  _created: fb.firestore.Timestamp;
  _updated: fb.firestore.Timestamp;
  _deleted: fb.firestore.Timestamp | null;
}

export type ModelData<T extends fb.firestore.DocumentData> = T & ModelWithTimestamp;

export interface BaseModelCtor<TDataModel extends fb.firestore.DocumentData> {
  new (data: ModelData<TDataModel> | TDataModel): ModelData<TDataModel>

  ref: fb.firestore.CollectionReference<ModelData<TDataModel>>

  applyTemplate: (
    data: Partial<TDataModel>,
  ) =>
    ModelData<TDataModel>
}

// type guard for Model fullfilled fields
function isModelData <T extends Record<string, unknown>>(data: T): data is ModelData<T> {
  return ('_created' in data && fireUtils.isTimestamp(data._created))
    && ('_updated' in data && fireUtils.isTimestamp(data._updated))
    && ('_deleted' in data && (fireUtils.isTimestamp(data._deleted) || data._deleted === null));
}

export default function BaseModelFactory<
  T extends fb.firestore.DocumentData,
  U extends ModelData<T>
>(
  template: T,
  collectionRef: fb.firestore.CollectionReference<U>,
) {
  const modelTemplate = Object.assign(template, {
    _created: fireUtils.firestoreNow,
    _updated: fireUtils.firestoreNow,
    _deleted: null,
  } as ModelWithTimestamp);

  const BaseModel = function (this: U, data: T | U) {
    const payload = isModelData(data) ? data : BaseModel.applyTemplate(data);

    Object.assign(this, payload);
    Object.seal(this);
  } as unknown as BaseModelCtor<T>;

  BaseModel.ref = collectionRef;

  BaseModel.applyTemplate = (data) => {
    // eslint-disable-next-line prefer-object-spread
    const copiedTemplate = Object.assign({}, modelTemplate);

    return Object.assign(copiedTemplate, data);
  };

  return BaseModel;
}
