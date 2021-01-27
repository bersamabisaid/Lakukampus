import { db, fireUtils } from 'src/firebase';
import { cloneObject, copyObjectProperties } from 'utils/Object';
import { ConverterV2 } from 'models/ModelFactory/Converter';
import Create from 'models/ModelFactory/Create';
import Find from 'models/ModelFactory/find';
import type fb from 'firebase';

interface ModelTimestamp {
  _created: typeof fireUtils.firestoreNow;
  _updated: typeof fireUtils.firestoreNow;
  _deleted: typeof fireUtils.firestoreNow | null;
}

interface ModelOptions<TDataModel> {
  path: string;

  defaults: Partial<TDataModel>;

  model: new () => TDataModel;
}

interface IThisModel<TDataModel, TModel = Ctor<TDataModel>> {
  parent?: TModel;
  childs: TModel[];
}

type Ctor<T> = new (...args: unknown[]) => T

const getTimestampAttr = () => ({
  _created: fireUtils.firestoreNow,
  _updated: fireUtils.firestoreNow,
  _deleted: null,
} as ModelTimestamp);

export default function defineModel <TDataModel>(
  { model, path, defaults }: ModelOptions<TDataModel>,
) {
  type tFullDataDefinition = { [k in keyof TDataModel]-?: TDataModel[k] };
  type tFullModelDefinition = tFullDataDefinition & ModelTimestamp;

  const factory = function (this: IThisModel<TDataModel>) {
    const Model = Object.assign(model as Ctor<tFullDataDefinition>, {
      get ref() {
        return db.collection(path);
      },

      get converter() {
        return ConverterV2<tFullModelDefinition>(this);
      },

      factory(payload: TDataModel) {
        const data = copyObjectProperties(
          { ...cloneObject(defaults), ...getTimestampAttr() },
          payload,
        ) as tFullModelDefinition;

        return copyObjectProperties(data, new Model());
      },

      create(modelInstance: InstanceType<Ctor<tFullModelDefinition>>) {
        return Create(this.ref, this.converter, modelInstance);
      },

      find(id: string, options: fb.firestore.GetOptions = { source: 'default' }) {
        return Find(this.ref, this.converter, id, options);
      },

      // defineSubModel: () => {
      // },
    });

    this.parent = Model;

    return Model;
  };

  return factory.apply({ childs: [] });
}
