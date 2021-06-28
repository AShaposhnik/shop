import { Component, OnDestroy, OnInit } from '@angular/core';
import { Category, ProductModel } from '../../../products/models/product.model';
import { ProductsService } from '../../../products/services/products.service';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { DialogService } from '../../../core';
import { CanComponentDeactivate } from '../../../core/interfaces/can-component-deactivate.interface';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, CanComponentDeactivate, OnDestroy {
  product: ProductModel;
  originalProduct: ProductModel;

  categories = [Category.BEVERAGES.toString(), Category.FOOD.toString(), Category.SOUVENIRS.toString()];
  selectedCategory: string;

  private sub: Subscription;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private dialogService: DialogService
  ) {
  }

  ngOnInit(): void {
    this.product = new ProductModel();

    const id = this.route.snapshot.paramMap.get('productID');

    if (id !== null) {
      const observer = {
        next: (product: ProductModel) => {
          this.product = { ...product };
          this.originalProduct = { ...product };
          this.selectedCategory = this.product.category.toString();
        },
        error: (err: any) => console.log(err)
      };

      this.sub = this.productsService.getProduct(id).subscribe(observer);
    }
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  canDeactivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (JSON.stringify(this.originalProduct) === JSON.stringify(this.product)) {
      return true;
    }

    // Otherwise ask the user with the dialog service and return its
    // promise which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }

  onGoBack(): void {
    this.router.navigate(['/admin/products']);
  }

  onSaveProduct(): void {
    const product = { ...this.product };

    if (product.id) {
      this.productsService.updateProduct(product);
      this.router.navigate(['/admin/products', { editedProductID: product.id }]);
    } else {
      this.productsService.createProduct(product);
      this.onGoBack();
    }
    this.originalProduct = { ...this.product };
  }
}
