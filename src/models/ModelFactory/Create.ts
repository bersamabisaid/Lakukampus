import { BaseModelCtor } from 'models/ModelFactory/Constructor';
import type fb from 'firebase';

export default function Create<T extends fb.firestore.DocumentData>(
  ref: fb.firestore.CollectionReference<T>,
  converter: fb.firestore.FirestoreDataConverter<InstanceType<BaseModelCtor<T>>>,
  model: InstanceType<BaseModelCtor<T>>,
) {
  return ref.withConverter(converter).add(model);
}
