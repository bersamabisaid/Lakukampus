import Model from 'models/Model';
import { Shop, Item, ModelBuilderObject } from 'models/interface';
import ItemModel from 'models/ItemModel';

export default class ShopModel extends Model<Shop> {
  public static converter = ShopModel._getConverter();

  public static builder(
    data: Shop | Pick<Shop, 'name'>,
  ) {
    const defaultVal: Partial<Shop> = {
      description: '',
      headerImg: '',
      img: '',
    };
    const obj: Partial<Shop> = {};

    return {
      buildObj: () => ({
        ...defaultVal,
        ...super._builderObjectMerge(data, obj),
      } as ModelBuilderObject<Shop>),

      setName(val: string) {
        obj.name = val;
      },

      setDescription(val: string) {
        obj.description = val;
      },

      setHeaderImg(val: string) {
        obj.headerImg = val;
      },

      setImg(val: string) {
        obj.img = val;
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
