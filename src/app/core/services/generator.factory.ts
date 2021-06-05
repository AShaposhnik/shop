import { InjectionToken } from '@angular/core';
import { GeneratorService } from './generator';

export function GeneratorFactory(n: number): (generator: GeneratorService) => string {
  return (generator: GeneratorService): string => generator.generate(n);
}

export const generatedString = new InjectionToken<string>('generatedString');
