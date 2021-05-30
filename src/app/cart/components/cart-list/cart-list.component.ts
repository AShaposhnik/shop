import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ProductModel} from '../../../products/models/product.model';
import {CartService} from '../../services/cart.service';
import {CartProductModel} from '../../models/cart-product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
  }

  public getProductsInCart(): CartProductModel[] {
    return this.cartService.getProductsInCart();
  }
  public getTotalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  public getNumberOfItems(): number {
    return this.cartService.getNumberOfItems();
  }
  public isCartEmpty(): boolean {
    return this.cartService.getProductsInCart().length === 0;
  }
  public trackByProduct(index: number, product: ProductModel): number { return product.id; }
  public onRemoveProductFromCart(product: ProductModel): void {
    console.log('Product has been removed!');
    this.cartService.removeProductFromCart(product);
  }

  onDecrease(product: CartProductModel): void {
    this.cartService.decreaseQuantity(product);
  }

  onIncrease(product: CartProductModel): void {
    this.cartService.increaseQuantity(product);
  }
}
