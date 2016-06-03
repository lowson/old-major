import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { OldMajorAppComponent, environment } from './app/';
import 'angular2-materialize';

if (environment.production) {
  enableProdMode();
}

bootstrap(OldMajorAppComponent);
