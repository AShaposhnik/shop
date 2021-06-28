import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../products/models/product.model';
import { ProductsService } from '../../../products/services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit {

  constructor(
    public productsService: ProductsService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  onRemoveProduct(product: ProductModel): void {
    this.productsService.deleteProduct(product);
  }

  onEditProduct(product: ProductModel): void {
    const link = ['/admin/product/edit', product.id];
    this.router.navigate(link);
  }
}
