import {Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {ProductModel} from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductModel;

  @Output() addToCart = new EventEmitter<ProductModel>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(product: ProductModel): void {
    console.log('Product has added to the cart!');
    this.addToCart.emit(product);
  }
}
