import {Injectable} from '@angular/core';
import {ProductModel} from '../../products/models/product.model';
import {CartProductModel} from '../models/cart-product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartProducts: CartProductModel[] = [];
  private totalQuantity: number;
  private totalSum: number;

  constructor() {
  }

  public getProducts(): CartProductModel[] {
    return this.cartProducts;
  }

  public getTotalQuantity(): number {
    return this.totalQuantity;
  }

  public getTotalSum(): number {
    return this.totalSum;
  }

  public addProduct(product: ProductModel): void {
    let isAlreadyInCart = false;
    this.cartProducts.forEach((item) => {
      if (item.id === product.id) {
        item.quantity += 1;
        isAlreadyInCart = true;
      }
    });

    if (!isAlreadyInCart) {
      this.cartProducts = [...this.cartProducts, {...product, quantity: 1}];
    }

    this.updateCartData();
  }

  public isEmptyCart(): boolean {
    return this.cartProducts.length === 0;
  }

  public removeProduct(product: ProductModel): void {
    this.cartProducts.forEach((item, index) => {
      if (item === product) {
        this.cartProducts.splice(index, 1);
      }
    });
    this.updateCartData();
  }

  public removeAllProducts(): void {
    this.cartProducts = [];
    this.updateCartData();
  }

  public updateCartData(): void {
    this.totalQuantity = this.calculateNumberOfItems();
    this.totalSum = this.calculateTotalPrice();
    this.cartProducts = [...this.cartProducts];
  }

  private calculateTotalPrice(): number {
    return this.cartProducts
      .reduce((sum, product) => sum + (product.price * product.quantity || 0), 0);
  }

  private calculateNumberOfItems(): number {
    return this.cartProducts.reduce((sum, product) => sum + (product.quantity || 0), 0);
  }

  public increaseQuantity(product: CartProductModel): void {
    this.changeQuantity(product, 1);
  }

  public decreaseQuantity(product: CartProductModel): void {
    this.changeQuantity(product, -1);
  }

  private changeQuantity(product: CartProductModel, delta: number): void {
    const possibleQuantity = product.quantity + delta;

    if (possibleQuantity > 0) {
      product.quantity = possibleQuantity;
    } else if (possibleQuantity === 0) {
      this.removeProduct(product);
    }

    this.updateCartData();
  }
}
