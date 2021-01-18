import { BaseModelCtor } from 'models/ModelFactory/BaseModelFactory';
import type fb from 'firebase';

export default function Find<T extends fb.firestore.DocumentData>(
  ref: fb.firestore.CollectionReference<T>,
  converter: fb.firestore.FirestoreDataConverter<InstanceType<BaseModelCtor<T>>>,
  id: string,
  options: fb.firestore.GetOptions = { source: 'default' },
) {
  return ref.doc(id).withConverter(converter).get(options);
}
