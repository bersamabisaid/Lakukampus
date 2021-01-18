import { db } from 'src/firebase';
import BaseModelFactory, { BaseModelCtor, ModelData } from 'models/ModelFactory/BaseModelFactory';
import type fb from 'firebase';
import Converter from 'models/ModelFactory/Converter';
import Find from 'models/ModelFactory/find';
import Create from 'models/ModelFactory/Create';

interface ModelOptions {
  path: string;
}

interface DataModelCtor<
  TDataModel extends fb.firestore.DocumentData
> extends BaseModelCtor<TDataModel> {
  converter: fb.firestore.FirestoreDataConverter<InstanceType<DataModelCtor<TDataModel>>>

  find: (
    id: string,
    options?: fb.firestore.GetOptions,
  ) =>
    Promise<fb.firestore.DocumentSnapshot<InstanceType<DataModelCtor<TDataModel>>>>

  create: (
    data: Partial<TDataModel>,
  ) =>
    Promise<ReturnType<DataModelCtor<TDataModel>['ref']['doc']>>
}

export default function Model <
    TDataModel extends fb.firestore.DocumentData
  >(
  { path }: ModelOptions,
  model: TDataModel,
) {
  const DataModel = BaseModelFactory<TDataModel, ModelData<TDataModel>>(
    model,
    db.collection(path) as fb.firestore.CollectionReference<ModelData<TDataModel>>,
  ) as DataModelCtor<TDataModel>;

  DataModel.converter = Converter(DataModel);

  DataModel.find = (id, options = { source: 'default' }) => Find(
    DataModel.ref, DataModel.converter, id, options,
  );

  DataModel.create = (data) => Create(
    DataModel.ref,
    DataModel.converter,
    new DataModel(DataModel.applyTemplate(data)),
  );

  return Object.freeze(DataModel);
}
