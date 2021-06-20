import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') public title!: ElementRef<HTMLHeadingElement>;

  ngAfterViewInit(): void {
    this.title.nativeElement.innerText = 'Shop';
  }

  onActivate($event: any, routerOutlet: RouterOutlet): void {
    console.log('Activated Component', $event, routerOutlet);
  }

  onDeactivate($event: any, routerOutlet: RouterOutlet): void {
    console.log('Deactivated Component', $event, routerOutlet);
  }
}
