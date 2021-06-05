import {Injectable} from '@angular/core';
import {genId} from './gen-id.generator';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {
  static readonly CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  static readonly CHARACTERS_LENGTH = GeneratorService.CHARACTERS.length;

  private integerGenerator: Generator<number, number, number> = genId();

  constructor() {
  }

  public generate(n: number): string {
    const result = [];

    for (let i = 0; i < n; i++) {
      result.push(GeneratorService.CHARACTERS.charAt(Math.floor(Math.random() * GeneratorService.CHARACTERS_LENGTH)));
    }
    return result.join('');
  }

  public getNewId(): number {
    return this.integerGenerator.next().value;
  }

}
