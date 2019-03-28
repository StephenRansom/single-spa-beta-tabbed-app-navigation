import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { Subcomponent1Component }   from './subcomponent1/subcomponent1.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
 
const routes: Routes = [
  { path: 'app1', component: HomeComponent },
  { path: 'app1/subcomponent1', component: Subcomponent1Component }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}