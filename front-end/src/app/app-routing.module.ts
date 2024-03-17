import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { NavsGuard } from './core/route-guards/navs-guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [NavsGuard],
    data: {animation: 'HomePage'}
  },
  {
    path: 'regiao',
    canActivate: [NavsGuard],
    loadChildren: () => import('./modules/regiao/regiao.module').then(m => m.RegiaoModule),
    data: {animation: 'RegiaoPage'}
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
