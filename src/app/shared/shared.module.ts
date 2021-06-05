import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { RandomTextColorDirective } from './directives/random-text-color.directive';


@NgModule({
  declarations: [
    HighlightDirective,
    RandomTextColorDirective
  ],
    exports: [
        HighlightDirective,
        RandomTextColorDirective
    ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
