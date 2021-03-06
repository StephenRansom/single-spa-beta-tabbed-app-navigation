import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app1';
  items: MenuItem[];

    ngOnInit() {
        this.items = [
          {
            label: 'App1 home', 
            routerLink: ['app1'],
            icon: 'pi pi-fw pi-home',                        
          },
          {separator:true},
          {
              label: 'App 1 Subroutes',
              icon: 'pi pi-fw pi-file',
              items: [
                {
                  label: 'App1 home', 
                  routerLink: ['app1'],
                  icon: 'pi pi-fw pi-home',                        
                },
                {separator:true},
                {
                  label: 'Sub Component 1', 
                  routerLink: ['app1/subcomponent1'],
                  icon: 'pi pi-fw pi-plus',                        
                },
                {
                  label: 'Sub Component 2', 
                  routerLink: ['app1/subcomponent2'],
                  icon: 'pi pi-fw pi-plus',                        
                }
              ]
          },
          {
              label: 'Edit',
              icon: 'pi pi-fw pi-pencil',
              items: [
                  {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                  {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
              ]
          },
          {
              label: 'Help',
              icon: 'pi pi-fw pi-question',
              items: [
                  {
                      label: 'Contents'
                  },
                  {
                      label: 'Search', 
                      icon: 'pi pi-fw pi-search', 
                      items: [
                          {
                              label: 'Text', 
                              items: [
                                  {
                                      label: 'Workspace'
                                  }
                              ]
                          },
                          {
                              label: 'File'
                          }
                  ]}
              ]
          },
          {
              label: 'Actions',
              icon: 'pi pi-fw pi-cog',
              items: [
                  {
                      label: 'Edit',
                      icon: 'pi pi-fw pi-pencil',
                      items: [
                          {label: 'Save', icon: 'pi pi-fw pi-save'},
                          {label: 'Update', icon: 'pi pi-fw pi-save'},
                      ]
                  },
                  {
                      label: 'Other',
                      icon: 'pi pi-fw pi-tags',
                      items: [
                          {label: 'Delete', icon: 'pi pi-fw pi-minus'}
                      ]
                  }
              ]
          }
        ]
    }
}

