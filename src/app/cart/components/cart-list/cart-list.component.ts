import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {CartProductModel} from '../../models/cart-product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  sortOptions = ['name', 'price', 'quantity'];
  selectedSortOption = 'name';
  isAsc = false;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
  }

  public getProductsInCart(): CartProductModel[] {
    return this.cartService.getProducts();
  }

  public getTotalSum(): number {
    return this.cartService.getTotalSum();
  }

  public getTotalQuantity(): number {
    return this.cartService.getTotalQuantity();
  }

  public isCartEmpty(): boolean {
    return this.cartService.isEmptyCart();
  }

  public trackByProduct(index: number, product: CartProductModel): number {
    return product.id;
  }

  public onRemoveProductFromCart(product: CartProductModel): void {
    console.log('Product has been removed!');
    this.cartService.removeProduct(product);
  }

  onDecrease(product: CartProductModel): void {
    this.cartService.decreaseQuantity(product);
  }

  onIncrease(product: CartProductModel): void {
    this.cartService.increaseQuantity(product);
  }
}
