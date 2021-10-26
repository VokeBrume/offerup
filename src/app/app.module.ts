import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BottomNavBarComponent } from './footer/bottom-nav-bar.components';
import { SecondBottomNavBarComponent } from './footer/second-bottom-nav-bar.component';
import { SecondNavBarComponent } from './header/second-nav-bar.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { LayoutFooterComponent } from './layout/layout-footer.component';
import { LayoutHeaderComponent } from './layout/layout-header.component';
import { TermsOfServiceComponent } from './body/terms-of-service/terms-of-service.component';
import { PrivacyComponent } from './body/privacy/privacy.component';
import { HomeComponent } from './body/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MerchCardComponent } from './body/merch-card/merch-card.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './header/user-info.component';
import { MerchInfoComponent } from './body/home/merch-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SecondNavBarComponent,
    BottomNavBarComponent,
    SecondBottomNavBarComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
    TermsOfServiceComponent,
    PrivacyComponent,
    HomeComponent,
    MerchCardComponent,
    UserInfoComponent,
    MerchInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
