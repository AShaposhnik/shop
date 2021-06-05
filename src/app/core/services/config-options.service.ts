import {Injectable} from '@angular/core';
import {ConfigModel} from '../models/config-model';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private config: ConfigModel;

  constructor() {
  }

  setConfig(updatedConfig: Partial<ConfigModel>): void {
    this.config = {...this.config, ...updatedConfig};
  }

  getConfig(): ConfigModel {
    return Object.assign({}, this.config);
  }
}
