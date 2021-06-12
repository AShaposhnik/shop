import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  // тут надо задекларировать ProductListComponent, ProductComponent
  // и убрать их из AppModule
  declarations: [],
  imports: [
    SharedModule
  ]
})
export class ProductsModule { }
