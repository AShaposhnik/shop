import {Injectable} from '@angular/core';

@Injectable()
export class ConstantsService {
  App: string;
  Ver: string;
  API_URL: string;

  constructor() {
  }
}

export const appConstants: ConstantsService = {
  App: 'Shop',
  Ver: '1.0.777',
  API_URL: 'https://shop.me'
};
