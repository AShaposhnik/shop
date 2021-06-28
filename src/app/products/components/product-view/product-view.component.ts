import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  @Output() addToCart = new EventEmitter<ProductModel>();

  product: ProductModel;

  constructor(private productService: ProductsService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.product = new ProductModel();

    // it is not necessary to save subscription to route.paramMap
    // when router destroys this component, it handles subscriptions automatically
    const observer = {
      next: (product: ProductModel) => (this.product = { ...product }),
      error: (err: any) => console.log(err)
    };

    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
            const productId: string | null = params.get('productID');

            return productId !== null
              ? this.productService.getProduct(productId)
              : of(new ProductModel());
          }
        )
      )
      .subscribe(observer);
  }

  onAddToCart(product: ProductModel): void {
    console.log('Product has added to the cart!');
    this.addToCart.emit(product);
  }

  onGoBack(): void {
    this.router.navigate(['/products-list']);
  }
}
