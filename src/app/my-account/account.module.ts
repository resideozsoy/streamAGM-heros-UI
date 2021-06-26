import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
//import { UserComponent } from './user/user.component';
//import { LoginComponent } from '../user/login.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      },
      // {
      //   path: ':id',
      //   component: ProductDetailComponent,
      //   resolve: { resolvedData: ProductResolver }
      // },
      // {
      //   path: ':id/edit',
      //   component: ProductEditComponent,
      //   canDeactivate: [ProductEditGuard],
      //   resolve: { resolvedData: ProductResolver },
      //   children: [
      //     { path: '', redirectTo: 'info', pathMatch: 'full' },
      //     { path: 'info', component: ProductEditInfoComponent },
      //     { path: 'tags', component: ProductEditTagsComponent }
      //   ]
      // }
    ])
  ],
  declarations: [
    // ProductListComponent,
    // ProductDetailComponent,
    // ProductEditComponent,
    // ProductEditInfoComponent,
    // ProductEditTagsComponent
  
    //UserComponent,
    //LoginComponent
  ]
})
export class AccountModule { }
