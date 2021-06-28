import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductModel } from '../../../products/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: ProductModel;

  @Output() editProduct = new EventEmitter<ProductModel>();
  @Output() removeProduct = new EventEmitter<ProductModel>();

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(product: ProductModel): void {
    this.editProduct.emit(product);
  }

  onRemove(product: ProductModel): void {
    this.removeProduct.emit(product);
  }
}
