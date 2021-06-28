import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

const routes: Routes = [
  {
    path: 'my-account',
    data: { preload: false },
    loadChildren: () => import('./my-account/account.module')
      .then(m => m.AccountModule)
  },
  { path: 'watch-live', component: VideoPlayerComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
