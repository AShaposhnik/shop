import {Component, OnInit, EventEmitter, Input, Output, ChangeDetectionStrategy} from '@angular/core';
import {CartProductModel} from '../../models/cart-product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {

  @Input() product: CartProductModel;
  @Output() removeFromCart = new EventEmitter<CartProductModel>();
  @Output() increase = new EventEmitter<CartProductModel>();
  @Output() decrease = new EventEmitter<CartProductModel>();

  constructor() { }

  ngOnInit(): void {
  }

  onRemoveProductFromCart(product: CartProductModel): void {
    this.removeFromCart.emit(product);
  }

  onIncrease(product: CartProductModel): void {
    this.increase.emit(product);
  }

  onDecrease(product: CartProductModel): void {
    this.decrease.emit(product);
  }

}
