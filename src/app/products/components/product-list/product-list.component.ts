import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {ProductModel} from '../../models/product.model';
import {CartService} from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(public productsService: ProductsService,
              private cartService: CartService) {
  }

  ngOnInit(): void {
  }

  onAddToCart(product: ProductModel): void {
    this.cartService.addProduct(product);
  }

}
