import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { Subroute1Component }   from './subroute1/subroute1.component';
import { Subroute2Component }   from './subroute2/subroute2.component';

import { HomeComponent } from './home/home.component';
 
const routes: Routes = [
  { path: 'app2', component: HomeComponent },
  { path: 'app2/subroute1', component: Subroute1Component },
  { path: 'app2/subroute2', component: Subroute2Component }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}