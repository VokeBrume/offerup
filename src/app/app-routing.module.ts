import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './body/home/home.component';
import { TermsOfServiceComponent } from './body/terms-of-service/terms-of-service.component';
import { PrivacyComponent } from './body/privacy/privacy.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'terms-of-service', component: TermsOfServiceComponent},
  {path: 'privacy', component: PrivacyComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
