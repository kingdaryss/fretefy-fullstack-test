import { RouterModule, Routes } from '@angular/router';
import { RegiaoComponent } from './regiao.component';
import { NavsGuard } from 'src/app/core/route-guards/navs-guard';

const routes: Routes = [
  {
    path: '',
    component: RegiaoComponent,
    canActivate: [NavsGuard]
  },
  {
    path: ':id',
    component: RegiaoComponent,
    canActivate: [NavsGuard]
  },
];
export const RegiaoRoutingModule = RouterModule.forChild(routes);
