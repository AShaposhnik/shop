import {Injectable} from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() {
  }

  public getItem(key: string): any {
    return JSON.parse(window.localStorage.getItem(key) ?? '');
  }

  public setItem(key: string, value: any): void {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  public removeItem(key: string): void {
    window.localStorage.removeItem(key);
  }
}

export const localStorage = new LocalStorageService();
