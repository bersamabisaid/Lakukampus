import { db } from 'src/firebase';
import { DataModelCtor, ModelOptions } from 'models/Model';
import Create from 'models/ModelFactory/Create';
import Converter from 'models/ModelFactory/Converter';
import Find from 'models/ModelFactory/Find';
import Constructor, { BaseModelCtor, ModelData } from 'models/ModelFactory/Constructor';
import type fb from 'firebase';

interface SubModelOptions<
  TParentData extends fb.firestore.DocumentData,
> extends ModelOptions {
  parent: DataModelCtor<TParentData>
}

interface SubModelDataCtor<
  TDataModel extends fb.firestore.DocumentData
> extends BaseModelCtor<TDataModel> {
  ref: fb.firestore.CollectionReference<ModelData<TDataModel>>
}

interface ModelFactoryResult<TDataModel extends fb.firestore.DocumentData> {
  ref: fb.firestore.CollectionReference<ModelData<TDataModel>>

  find: (
    id: string,
    options?: fb.firestore.GetOptions,
  ) =>
    Promise<fb.firestore.DocumentSnapshot<InstanceType<BaseModelCtor<TDataModel>>>>

  create: (
    data: Partial<TDataModel> | InstanceType<SubModelDataCtor<TDataModel>>,
  ) =>
    Promise<ReturnType<SubModelDataCtor<TDataModel>['ref']['doc']>>
}

export default function SubModel<
  TParentData extends fb.firestore.DocumentData,
  TDataModel extends fb.firestore.DocumentData
>(
  { parent, path }: SubModelOptions<TParentData>,
  modelTemplate: TDataModel,
) {
  const BaseConstructor = Constructor(modelTemplate);
  const SubModelData = function (
    this: ModelData<TDataModel>,
    ...args: ConstructorParameters<BaseModelCtor<TDataModel>>
  ) {
    BaseConstructor.call(this, ...args);
  } as unknown as SubModelDataCtor<TDataModel>;

  const ModelFactory = (
    parentInstance: ReturnType<typeof parent['ref']['doc']>,
  ) => Object.freeze({
    ref: parentInstance
      .collection(path) as fb.firestore.CollectionReference<ModelData<TDataModel>>,

    find(id, options = { source: 'default' }) {
      return Find(
        this.ref, ModelFactory.converter, id, options,
      );
    },

    create(data) {
      return Create(
        this.ref,
        ModelFactory.converter,
        data instanceof SubModelData ? data
          : new SubModelData(BaseConstructor.applyTemplate(data)),
      );
    },
  } as ModelFactoryResult<TDataModel>);

  ModelFactory.group = db.collectionGroup(path);

  ModelFactory.converter = Converter(SubModelData);

  ModelFactory.class = SubModelData;

  return Object.freeze(ModelFactory);
}
