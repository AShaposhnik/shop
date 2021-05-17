import { Component, OnInit } from '@angular/core';
import {Category} from '../products/models/product.model';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;

  constructor() { }

  ngOnInit(): void {
  }
}

