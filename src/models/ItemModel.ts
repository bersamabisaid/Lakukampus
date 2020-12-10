import type fb from 'firebase';
import firebase from 'src/firebase';
import Model from 'src/models/Model';
import {
  Category, Item, ModelBuilderObject, Shop,
} from 'models/interface';

export default class ItemModel extends Model<Item> {
  public static converter = ItemModel._getConverter();

  public static builder(
    shop: fb.firestore.DocumentReference<Shop>,
    data: Item | Pick<Item, 'name'>,
  ) {
    const serverTimeNow = firebase.firestore.FieldValue.serverTimestamp();

    return {
      obj: {
        // default values
        stock: 0,
        price: 0,
        description: '',
        shop,
        category: null,
        tags: [] as string[],
        _created: serverTimeNow,
        // replace the default values
        ...data,
        _updated: serverTimeNow,
      } as ModelBuilderObject<Item>,

      setCategory(val: fb.firestore.DocumentReference<Category>) {
        this.obj.category = val;
      },

      setName(val: string) {
        this.obj.name = val;
      },

      setStock(val: number) {
        this.obj.stock = val;
      },

      setPrice(val: number) {
        this.obj.price = val;
      },

      setDescription(val: string) {
        this.obj.description = val;
      },

      setTags(val: string[]) {
        this.obj.tags = val;
      },
    };
  }

  private static _getConverter() {
    return super._makeConverter<ItemModel, Item>((snapshot) => new ItemModel(snapshot));
  }
}
