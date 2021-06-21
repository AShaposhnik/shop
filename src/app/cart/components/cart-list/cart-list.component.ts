import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartProductModel } from '../../models/cart-product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  sortOptions = ['name', 'price', 'quantity'];
  selectedSortOption = 'name';
  isAsc = false;

  constructor(private cartService: CartService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  getProductsInCart(): CartProductModel[] {
    return this.cartService.getProducts();
  }

  getTotalSum(): number {
    return this.cartService.getTotalSum();
  }

  getTotalQuantity(): number {
    return this.cartService.getTotalQuantity();
  }

  isCartEmpty(): boolean {
    return this.cartService.isEmptyCart();
  }

  trackByProduct(index: number, product: CartProductModel): number {
    return product.id;
  }

  onRemoveProductFromCart(product: CartProductModel): void {
    console.log('Product has been removed!');
    this.cartService.removeProduct(product);
  }

  onDecrease(product: CartProductModel): void {
    this.cartService.decreaseQuantity(product);
  }

  onIncrease(product: CartProductModel): void {
    this.cartService.increaseQuantity(product);
  }

  onProcessOrder(): void {
    const link = ['/order'];
    this.router.navigate(link);
  }
}
