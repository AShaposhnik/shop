import { Injectable } from '@angular/core';
import {Category, ProductModel} from '../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productsInCart: ProductModel[] = [
    {
      id: 1,
      name: 'Ramen',
      description: 'Japanese noodle soup. It consists of Chinese wheat noodles served in a meat.',
      price: 3.4,
      category: Category.FOOD,
      isAvailable: true
    }
  ];

  constructor() { }
  public getProductsInCart(): ProductModel[] {
    return this.productsInCart;
  }
  public removeProductFromCart(product: ProductModel): void {
    this.productsInCart.forEach( (item, index) => {
      if (item === product) {
        this.productsInCart.splice(index, 1);
      }
    });
  }
}
