import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { ExternalurlDirective } from './externalurl.directive';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '',
component: HomeComponent},
];

@NgModule({
  providers: [
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
