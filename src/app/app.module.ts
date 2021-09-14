import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BottomNavBarComponent } from './footer/bottom-nav-bar.components';
import { SecondBottomNavBarComponent } from './footer/second-bottom-nav-bar.component';
import { SecondNavBarComponent } from './header/second-nav-bar.component';
import { TopNavBarComponent } from './header/top-nav-bar.component';
import { LayoutFooterComponent } from './layout/layout-footer.component';
import { LayoutHeaderComponent } from './layout/layout-header.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SecondNavBarComponent,
    BottomNavBarComponent,
    SecondBottomNavBarComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
