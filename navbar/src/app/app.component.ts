import { Component } from '@angular/core';
import {TabViewModule} from 'primeng/tabview';
import { platformCoreDynamicTesting } from '@angular/platform-browser-dynamic/testing/src/platform_core_dynamic_testing';

@Component({
  selector: 'navbar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'
]
})
export class AppComponent {
  title = 'navbar';

  onTabChange(event){
    if(event.index == 0){
      history.pushState({urlPath:'/'},"",'/');
    }
    else if(event.index == 1){
      history.pushState({urlPath:'/app1'},"",'/app1');
    }
    else if(event.index == 2){
      history.pushState({urlPath:'/app2'},"",'/app2');
    }
  }

}
