import { BaseModelCtor, ModelData } from 'models/ModelFactory/BaseModelFactory';
import type fb from 'firebase';

export default function Converter<
  TDataModel extends fb.firestore.DocumentData,
>(
  Model: BaseModelCtor<TDataModel>,
) {
  return {
    fromFirestore(snapshot: fb.firestore.QueryDocumentSnapshot<ModelData<TDataModel>>, options) {
      return new Model(snapshot.data(options));
    },
    toFirestore(modelObject: InstanceType<typeof Model>) {
      // eslint-disable-next-line prefer-object-spread
      return Object.assign({}, modelObject);
    },
  } as fb.firestore.FirestoreDataConverter<ModelData<TDataModel>>;
}
