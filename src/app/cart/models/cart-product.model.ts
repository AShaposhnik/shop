import {ProductModel} from '../../products/models/product.model';

export interface CartProductModel extends ProductModel {
  quantity: number;
}
