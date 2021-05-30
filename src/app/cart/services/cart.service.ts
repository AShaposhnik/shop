import {Injectable} from '@angular/core';
import {Category, ProductModel} from '../../products/models/product.model';
import {CartProductModel} from '../models/cart-product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productsInCart: CartProductModel[] = [];

  constructor() {
  }

  public getProductsInCart(): CartProductModel[] {
    return this.productsInCart;
  }

  public addProductToCart(product: ProductModel): void {
    let isAlreadyInCart = false;
    this.productsInCart.forEach((item, index) => {
      if (item.id === product.id) {
        item.quantity += 1;
        isAlreadyInCart = true;
      }
    });
    if (!isAlreadyInCart) {
      this.productsInCart.push({...product, quantity: 1});
    }
  }

  public removeProductFromCart(product: ProductModel): void {
    this.productsInCart.forEach((item, index) => {
      if (item === product) {
        this.productsInCart.splice(index, 1);
      }
    });
  }

  public getTotalPrice(): number {
    return this.productsInCart
      .reduce((sum, product) => sum + (product.price * product.quantity || 0), 0);
  }

  public getNumberOfItems(): number {
    return this.productsInCart.reduce((sum, product) => sum + (product.quantity || 0), 0);
  }

  public increaseQuantity(product: CartProductModel): void {
    product.quantity += 1;
  }

  public decreaseQuantity(product: CartProductModel): void {
    if (product.quantity > 0) {
      product.quantity -= 1;
    }
  }
}
