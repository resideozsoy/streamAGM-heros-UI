import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyAccountComponent } from './my-account.component';

const routes: Route[] = [{
  path: '',
  component: MyAccountComponent,
  children: [
    { path: '', redirectTo: 'profile', pathMatch: 'full' },
    { path: 'profile', component: MyProfileComponent },
    { path: '**', redirectTo: 'profile', pathMatch: 'full' }
  ]
}];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AccountModule { }
