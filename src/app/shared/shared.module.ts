import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HighlightDirective} from './directives/highlight.directive';
import {RandomTextColorDirective} from './directives/random-text-color.directive';
import {OrderByPipe} from './pipes/order-by.pipe';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    HighlightDirective,
    RandomTextColorDirective,
    OrderByPipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    HighlightDirective,
    RandomTextColorDirective,
    OrderByPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule {
}
