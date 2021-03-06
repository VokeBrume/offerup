import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './body/home/home.component';
import { TermsOfServiceComponent } from './body/terms-of-service/terms-of-service.component';
import { PrivacyComponent } from './body/privacy/privacy.component';
import { EditMerchInfoComponent } from './body/home/edit-merch-info.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'terms-of-service', component: TermsOfServiceComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'edit-merch-info', component: EditMerchInfoComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
