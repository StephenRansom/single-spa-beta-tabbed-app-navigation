import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app2';
  items: MenuItem[];

    ngOnInit() {
        this.items = [
          {
            label: 'App2 home', 
            routerLink: ['app2'],
            icon: 'pi pi-fw pi-home',                        
          },
          {separator:true},
          {
              label: 'App 2 Subroutes',
              icon: 'pi pi-fw pi-file',
              items: [
                {
                  label: 'App2 home', 
                  routerLink: ['app2'],
                  icon: 'pi pi-fw pi-home',                        
                },
                {separator:true},
                {
                  label: 'Sub route 1', 
                  routerLink: ['app2/subroute1'],
                  icon: 'pi pi-fw pi-plus',                        
                },
                {
                  label: 'Sub route 2', 
                  routerLink: ['app2/subroute2'],
                  icon: 'pi pi-fw pi-plus',                        
                }                
              ]
          }
        ]
    }
}


