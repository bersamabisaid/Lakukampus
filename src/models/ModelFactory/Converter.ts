import { BaseModelCtor, ModelData } from 'models/ModelFactory/Constructor';
import { cloneObject } from 'utils/Object';
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
      return cloneObject(modelObject);
    },
  } as fb.firestore.FirestoreDataConverter<ModelData<TDataModel>>;
}
