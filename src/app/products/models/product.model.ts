
export interface ProductModel {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;
}

export enum Category {
  FOOD = 'Food',
  BEVERAGES = 'Beverages',
  SOUVENIRS = 'Souvenirs'
}
