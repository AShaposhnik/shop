export interface Product {
  id: number | null;
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;
}

export class ProductModel implements Product {
  constructor(
    public id: number | null = 0,
    public name: string = '',
    public description: string = '',
    public price: number = 0,
    public category: Category = Category.UNKNOWN,
    public isAvailable: boolean = false
  ) {
  }
}

export enum Category {
  FOOD = 'Food',
  BEVERAGES = 'Beverages',
  SOUVENIRS = 'Souvenirs',
  UNKNOWN = 'Unknown'
}
