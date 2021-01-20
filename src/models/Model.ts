import { db } from 'src/firebase';
import Constructor, { BaseModelCtor, ModelData } from 'models/ModelFactory/Constructor';
import Converter from 'models/ModelFactory/Converter';
import Find from 'models/ModelFactory/find';
import Create from 'models/ModelFactory/Create';
import type fb from 'firebase';

export interface ModelOptions {
  path: string;
}

export interface DataModelCtor<
  TDataModel extends fb.firestore.DocumentData
> extends BaseModelCtor<TDataModel> {
  ref: fb.firestore.CollectionReference<ModelData<TDataModel>>

  converter: fb.firestore.FirestoreDataConverter<InstanceType<DataModelCtor<TDataModel>>>

  find: (
    id: string,
    options?: fb.firestore.GetOptions,
  ) =>
    Promise<fb.firestore.DocumentSnapshot<InstanceType<DataModelCtor<TDataModel>>>>

  create: (
    data: Partial<TDataModel> | InstanceType<DataModelCtor<TDataModel>>,
  ) =>
    Promise<ReturnType<DataModelCtor<TDataModel>['ref']['doc']>>
}

export default function Model <TDataModel extends fb.firestore.DocumentData>(
  { path }: ModelOptions,
  model: TDataModel,
) {
  const DataModel = Constructor(model) as DataModelCtor<TDataModel>;

  DataModel.ref = db.collection(path) as fb.firestore.CollectionReference<ModelData<TDataModel>>;

  DataModel.converter = Converter(DataModel);

  DataModel.find = (id, options = { source: 'default' }) => Find(
    DataModel.ref, DataModel.converter, id, options,
  );

  DataModel.create = (data) => Create(
    DataModel.ref,
    DataModel.converter,
    data instanceof DataModel ? data
      : new DataModel(DataModel.applyTemplate(data)),
  );

  return Object.freeze(DataModel);
}
