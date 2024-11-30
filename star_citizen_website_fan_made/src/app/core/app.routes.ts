import { Routes } from '@angular/router';
import { DashboardComponent } from '../features/dashboard/dashboard.component';

export const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'ships', loadChildren: () => import('../features/ships/ships-routing').then(m => m.shipsRoutes) },
  { path: 'manufacturers', loadChildren: () => import('../features/manufacturers/manufacturers-routing').then(m => m.manufacturersRoutes) },
  { path: '**', redirectTo: '' }
];
