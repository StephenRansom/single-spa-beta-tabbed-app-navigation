import { Component } from '@angular/core';
import {TabViewModule} from 'primeng/tabview';
import { platformCoreDynamicTesting } from '@angular/platform-browser-dynamic/testing/src/platform_core_dynamic_testing';
import { singleSpaNavigate } from 'single-spa';

@Component({
  selector: 'navbar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'
]
})
export class AppComponent {
  title = 'navbar';

  onTabChange(event){
    console.log(event);
    if(event.index && event.index ==1){
      singleSpaNavigate('/app1'); //this app has no idea about app1. 
    }
  }

}
