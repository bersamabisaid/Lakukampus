import type fb from 'firebase';
import Model from 'src/models/Model';
import {
  Category, Item, ModelBuilderObject, BuilderObject, Shop,
} from 'models/interface';

export default class ItemModel extends Model<Item> {
  public static converter = ItemModel._getConverter();

  public static builder(
    shop: fb.firestore.DocumentReference<Shop>,
    data: Item | Pick<Item, 'name'>,
  ) {
    const defaultVal: Partial<Item> = {
      stock: 0,
      price: 0,
      description: '',
      shop,
      category: null,
      tags: [],
    };
    const obj: Partial<Item> = {};

    return {
      buildObj: () => ({
        ...defaultVal,
        ...super._builderObjectMerge(data, obj),
      } as ModelBuilderObject<Item>),

      setCategory(val: fb.firestore.DocumentReference<Category>) {
        obj.category = val;
        return this;
      },

      setName(val: string) {
        obj.name = val;
        return this;
      },

      setStock(val: number) {
        obj.stock = val;
        return this;
      },

      setPrice(val: number) {
        obj.price = val;
        return this;
      },

      setDescription(val: string) {
        obj.description = val;
        return this;
      },

      setTags(val: string[]) {
        obj.tags = val;
        return this;
      },
    } as BuilderObject<Item>;
  }

  private static _getConverter() {
    return super._makeConverter<ItemModel, Item>((snapshot) => new ItemModel(snapshot));
  }
}
