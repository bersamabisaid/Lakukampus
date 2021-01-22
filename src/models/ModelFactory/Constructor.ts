import { fireUtils } from 'src/firebase';
import { cloneObject } from 'utils/Object';
import type fb from 'firebase';

export interface ModelWithTimestamp {
  _created: fb.firestore.Timestamp;
  _updated: fb.firestore.Timestamp;
  _deleted: fb.firestore.Timestamp | null;
}

export type ModelData<T extends fb.firestore.DocumentData> = T & ModelWithTimestamp;

export interface BaseModelCtor<TDataModel extends fb.firestore.DocumentData> {
  new (data: ModelData<TDataModel> | TDataModel): ModelData<TDataModel>

  applyTemplate: (
    data: Partial<TDataModel>,
  ) =>
    ModelData<TDataModel>
}

// type guard for Model fullfilled fields
const isModelData = function <T extends Record<string, unknown>> (data: T): data is ModelData<T> {
  return ('_created' in data && fireUtils.isTimestamp(data._created))
    && ('_updated' in data && fireUtils.isTimestamp(data._updated))
    && ('_deleted' in data && (fireUtils.isTimestamp(data._deleted) || data._deleted === null));
};

export default function Constructor<TDataModel extends fb.firestore.DocumentData>(
  modelTemplate: TDataModel,
) {
  const template = Object.assign(modelTemplate, {
    _created: fireUtils.firestoreNow,
    _updated: fireUtils.firestoreNow,
    _deleted: null,
  } as ModelWithTimestamp);

  const BaseModel = function (
    this: ModelData<TDataModel>,
    data: TDataModel | ModelData<TDataModel>,
  ) {
    const payload = isModelData(data) ? data : BaseModel.applyTemplate(data);

    Object.assign(this, payload);
    Object.seal(this);
  } as unknown as BaseModelCtor<TDataModel>;

  BaseModel.applyTemplate = (data) => {
    const copiedTemplate = cloneObject(template);

    return Object.assign(copiedTemplate, data);
  };

  return BaseModel;
}
