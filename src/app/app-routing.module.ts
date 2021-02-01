import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ExternalurlDirective } from './externalurl.directive';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path: '',
component: HomeComponent},
{path: 'contact',
component: ContactComponent
},
{path: 'portfolio',
component: PortfolioComponent}
];

@NgModule({
  providers: [
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
