import type fb from 'firebase';
import Model from 'models/Model';
import {
  Seller, Shop, BuilderObject, ModelBuilderObject,
} from 'models/interface';
import { signedInUser } from 'composition/Auth';

export default class SellerModel extends Model<Seller> {
  public static builder(data: Omit<Seller, 'shops' | 'user'>) {
    if (signedInUser.value) {
      const defaults = {
        user: signedInUser.value,
        shops: [] as fb.firestore.DocumentReference[],
      };
      const obj = {} as Partial<Seller>;

      return {
        buildObj: () => ({
          ...defaults,
          ...super._builderObjectMerge(data, obj),
        } as ModelBuilderObject<Seller>),

        setFaculty(val: string) {
          obj.faculty = val;
          return this;
        },

        setProgram(val: string) {
          obj.program = val;
          return this;
        },

        setStudentId(val: string) {
          obj.studentId = val;
          return this;
        },

        setAddress(val: string) {
          obj.address = val;
          return this;
        },

        setIdentityImg(val: string) {
          obj.identityImg = val;
          return this;
        },

        setBatchYear(val: number) {
          obj.batchYear = val;
          return this;
        },

        addShop(val: fb.firestore.DocumentReference<Shop>) {
          if (obj.shops) {
            obj.shops.push(val);
          } else {
            obj.shops = [val];
          }
          return this;
        },

        removeShop(val: fb.firestore.DocumentReference<Shop>) {
          if (obj.shops) {
            const index = obj.shops.indexOf(val);
            obj.shops = obj.shops.splice(index, 0);
          }
          return this;
        },

      } as BuilderObject<Seller>;
    }

    throw new Error('Unauthenticated!');
  }
}
