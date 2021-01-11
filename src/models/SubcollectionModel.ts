import { db } from 'src/firebase';
import Model from 'models/Model';
import type fb from 'firebase';

export default <
  TParent extends ReturnType<typeof Model>,
  TModel = fb.firestore.DocumentData
>(...[modelOpts]: Parameters<typeof Model>) => {
  const baseModel = Model<TModel>(modelOpts);
  const docFactory = (docRef: ReturnType<TParent['ref']['doc']>) => ({
    ...baseModel,

    get ref() {
      return docRef.collection(modelOpts.path);
    },
  });
  const groupCollection = {
    get ref() {
      return db.collectionGroup(modelOpts.path);
    },
  };

  Object.freeze(groupCollection);

  return [docFactory, groupCollection] as const;
};
