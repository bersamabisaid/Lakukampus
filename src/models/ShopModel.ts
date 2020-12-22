import Model from 'models/Model';
import {
  Shop, Item, ModelBuilderObject, BuilderObject, ItemPurchased,
} from 'models/interface';
import ItemModel from 'models/ItemModel';
import TransactionModel from 'models/TransactionModel';
import { signedInUser } from 'composition/Auth';
import Unauthenticated from 'models/Unauthenticated';
import { db } from 'src/firebaseServices';
import type fb from 'firebase';

export default class ShopModel extends Model<Shop> {
  public static REF = db.collection('shops') as fb.firestore.CollectionReference<ModelBuilderObject<Shop>>;

  public static converter = ShopModel._getConverter();

  private static defaults: Partial<Shop> = {
    description: '',
    headerImg: '',
    img: '',
  };

  public async doTransaction(...items: ItemPurchased[]) {
    if (signedInUser.value) {
      const transaction = await TransactionModel.REF.add(Model._builderObjectMerge({
        user: signedInUser.value.doc.ref,
        shop: this.doc.ref,
        itemPurchased: items,
      }));

      return new TransactionModel(await transaction.get());
    }

    throw new Unauthenticated();
  }

  public static builder(data: Shop | Pick<Shop, 'name'>) {
    const obj: Partial<Shop> = {};

    return {
      buildObj: () => ({
        ...this.defaults,
        ...super._builderObjectMerge(data, obj),
      } as ModelBuilderObject<Shop>),

      setName(val: string) {
        obj.name = val;
        return this;
      },

      setDescription(val: string) {
        obj.description = val;
        return this;
      },

      setHeaderImg(val: string) {
        obj.headerImg = val;
        return this;
      },

      setImg(val: string) {
        obj.img = val;
        return this;
      },
    } as BuilderObject<Shop>;
  }

  public itemBuilder(data: Item | Pick<Item, 'name'>) {
    return ItemModel.builder(this.doc.ref, data);
  }

  private static _getConverter() {
    return super._makeConverter<ShopModel, Shop>((snapshot) => new ShopModel(snapshot));
  }
}
