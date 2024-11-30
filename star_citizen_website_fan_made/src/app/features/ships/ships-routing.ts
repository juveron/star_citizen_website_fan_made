import { Routes } from '@angular/router';
import { ShipListComponent } from './ship-list/ship-list.component';
import { ShipDetailComponent } from './ship-detail/ship-detail.component';

export const shipsRoutes: Routes = [
  { path: '', component: ShipListComponent },
  { path: ':id', component: ShipDetailComponent }
];
