import 'core-js/es7/reflect';

import { enableProdMode, ApplicationRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import singleSpaAngular from 'single-spa-angular';
import { APP_BASE_HREF } from '@angular/common';
import { Router } from '@angular/router';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export default singleSpaAngular({
  mainModule: AppModule,
  angularPlatform: platformBrowserDynamic(),
  template: '<app2-root />',
  providers: [{provide: APP_BASE_HREF, useValue: '/app2/'}],
  Router,
  ApplicationRef,
  domElementGetter() {
    let containerEl = document.getElementById('app2');
    if (!containerEl) {
      containerEl = document.createElement('div');
      containerEl.id = 'app2';
      document.body.appendChild(containerEl);
    }

    return containerEl;
  },
});
