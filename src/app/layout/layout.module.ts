import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent, LoginComponent, PathNotFoundComponent, ForbiddenComponent } from './components';


@NgModule({
  declarations: [
    AboutComponent,
    LoginComponent,
    PathNotFoundComponent,
    ForbiddenComponent
  ],
  imports: [
    SharedModule
  ]
})
export class LayoutModule {
}
