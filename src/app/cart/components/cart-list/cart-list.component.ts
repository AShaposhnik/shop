import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../../../products/models/product.model';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
  }

  public getProductsInCart(): ProductModel[] {
    return this.cartService.getProductsInCart();
  }
  public isCartEmpty(): boolean {
    return this.cartService.getProductsInCart().length === 0;
  }
  public trackByProduct(index: number, product: ProductModel): number { return product.id; }
  public removeProductFromCart(product: ProductModel): void {
    console.log('Product has been removed!');
    this.cartService.removeProductFromCart(product);
  }
}
