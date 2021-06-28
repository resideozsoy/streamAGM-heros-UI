import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyAccountComponent } from './my-account.component';
import { BillingDetailsComponent } from './billing-details/billing-details.component';
import { ActiveSubscriptionsComponent } from './active-subscriptions/active-subscriptions.component';
import { RecentTransactionsComponent } from './recent-transactions/recent-transactions.component';

const routes: Route[] = [{
  path: '',
  component: MyAccountComponent,
  children: [
    { path: '', redirectTo: 'profile', pathMatch: 'full'},
    { path: 'profile', component: MyProfileComponent, data :{ title:'My profile'}},
    { path: 'billing', component: BillingDetailsComponent, data :{ title:'Billing details'}},
    { path: 'subscriptions', component: ActiveSubscriptionsComponent, data :{ title:'Active subscriptions'} },
    { path: 'transactions', component: RecentTransactionsComponent, data :{ title:'Recent transactions'} },
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
