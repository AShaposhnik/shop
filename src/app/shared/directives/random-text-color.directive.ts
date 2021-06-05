import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRandomTextColor]'
})
export class RandomTextColorDirective {

  @Input('appRandomTextColor') color: string;

  constructor(private el: ElementRef, private render: Renderer2) {}

  @HostListener('click')
  onClick(): void {
    this.addColor(this.color || this.getRandomColor());
  }

  addColor(color: string): void {
    this.render.setStyle(this.el.nativeElement, 'color', color);
  }

  getRandomColor(): string {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

}
