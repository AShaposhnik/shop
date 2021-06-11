import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  // тут надо задекларировать ProductListComponent, ProductComponent
  // и убрать их из AppModule
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
