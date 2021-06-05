import {Component, Inject, OnInit, Optional} from '@angular/core';
import {Category} from '../../../products/models/product.model';
import {ConfigOptionsService} from '../../services/config-options.service';
import {appConstants, ConstantsService} from '../../services/constants.service';
import {LocalStorageService} from '../../services/local-storage.service';
import {GeneratorService} from '../../services/generator';
import {generatedString, GeneratorFactory} from '../../services/generator.factory';
import {ConfigModel} from '../../models/config-model';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  providers: [
    ConfigOptionsService,
    GeneratorService,
    {provide: ConstantsService, useValue: appConstants},
    {provide: generatedString, useFactory: GeneratorFactory(42), deps: [GeneratorService]},
    {provide: LocalStorageService, useValue: localStorage}
  ]
})
export class FirstComponent implements OnInit {
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;

  config: ConfigModel;
  appName: string;
  appVersion: string;
  appApiUrl: string;
  localStorageValue: string;


  constructor(
    @Optional() private configService: ConfigOptionsService,
    @Optional() public generatorService: GeneratorService,
    @Optional() @Inject(ConstantsService) private constantsService: ConstantsService,
    @Optional() @Inject(generatedString) public generatedStr: string,
    @Optional() @Inject(LocalStorageService) private localStorageService: LocalStorageService
  ) {
  }

  ngOnInit(): void {
    this.configService.setConfig({id: 1, login: 'andrii'});
    console.log('Config:');
    console.log(this.configService.getConfig());

    this.configService.setConfig({id: 42, login: 'Andrii', email: 'andrii@email.com'});
    this.config = this.configService.getConfig();
    console.log('Updated config:');
    console.log(this.config);

    console.log('App constants:');
    console.log(this.constantsService);

    this.appName = this.constantsService.App;
    this.appVersion = this.constantsService.Ver;
    this.appApiUrl = this.constantsService.API_URL;

    console.log(`Generated string: ${this.generatedStr} Next integer: ${this.generatorService.getNewId()}`);
    console.log(`Generated string: ${this.generatedStr} Next integer: ${this.generatorService.getNewId()}`);
    console.log(`Generated string: ${this.generatedStr} Next integer: ${this.generatorService.getNewId()}`);

    this.localStorageService.setItem('email', this.configService.getConfig().email);
    console.log('From Local Storage:', this.localStorageService.getItem('email'));
    this.localStorageValue = this.localStorageService.getItem('email');
  }
}

