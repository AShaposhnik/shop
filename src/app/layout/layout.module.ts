import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent, LoginComponent, PathNotFoundComponent } from './components';



@NgModule({
  declarations: [
    AboutComponent,
    LoginComponent,
    PathNotFoundComponent
  ],
  imports: [
    SharedModule
  ]
})
export class LayoutModule {
}
