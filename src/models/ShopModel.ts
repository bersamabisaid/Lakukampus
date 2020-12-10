import firebase from 'src/firebase';
import Model from 'models/Model';
import {
  Shop, Item, ModelBuilderObject,
} from 'models/interface';
import ItemModel from 'models/ItemModel';

export default class ShopModel extends Model<Shop> {
  public static converter = ShopModel._getConverter();

  public static builder(
    data: Shop | Pick<Shop, 'name'>,
  ) {
    const serverTimeNow = firebase.firestore.FieldValue.serverTimestamp();

    return {
      obj: {
        // default values
        description: '',
        headerImg: '',
        img: '',
        // replace the values
        _created: serverTimeNow,
        ...data,
        _updated: serverTimeNow,
      } as ModelBuilderObject<Shop>,

      setName(val: string) {
        this.obj.name = val;
      },

      setDescription(val: string) {
        this.obj.description = val;
      },

      setHeaderImg(val: string) {
        this.obj.headerImg = val;
      },

      setImg(val: string) {
        this.obj.img = val;
      },
    };
  }

  public itemBuilder(
    data: Item | Pick<Item, 'name'>,
  ) {
    return ItemModel.builder(this.doc.ref, data);
  }

  private static _getConverter() {
    return super._makeConverter<ShopModel, Shop>((snapshot) => new ShopModel(snapshot));
  }
}
