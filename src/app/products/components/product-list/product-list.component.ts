import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {ProductModel} from '../../models/product.model';
import {CartService} from '../../../cart';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(public productsService: ProductsService,
              private router: Router,
              private cartService: CartService) {
  }

  ngOnInit(): void {
  }

  onAddToCart(product: ProductModel): void {
    this.cartService.addProduct(product);
  }

  onViewProduct(product: ProductModel): void {
    const link = ['/product', product.id];
    this.router.navigate(link);
  }
}
