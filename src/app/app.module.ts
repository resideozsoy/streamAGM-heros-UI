import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHeaderNavComponent } from './main-header-nav/main-header-nav.component';
import { MainHeaderSideNavComponent } from './main-header-side-nav/main-header-side-nav.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MyAccountComponent } from './my-account/my-account.component'

import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { ThemeServiceService } from './theme-service.service';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { LoginService } from './login.service';
import { MyProfileComponent } from './my-account/my-profile/my-profile.component';
import { BillingDetailsComponent } from './my-account/billing-details/billing-details.component';
import { ActiveSubscriptionsComponent } from './my-account/active-subscriptions/active-subscriptions.component';
import { RecentTransactionsComponent } from './my-account/recent-transactions/recent-transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderNavComponent,
    MainHeaderSideNavComponent,
    MainFooterComponent,
    HomeComponent,
    MyAccountComponent,
    LoginComponent,
    VideoPlayerComponent,
    MyProfileComponent,
    BillingDetailsComponent,
    ActiveSubscriptionsComponent,
    RecentTransactionsComponent
  ],
  imports: [
    BrowserModule,
    //we need this animation for video as well
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    AngularMaterialModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  exports: [],
  providers: [ThemeServiceService, LoginService,
    { provide: FormBuilder, useClass: FormBuilder }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
