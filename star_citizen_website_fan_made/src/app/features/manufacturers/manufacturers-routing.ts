import { Routes } from '@angular/router';
import { ManufacturerListComponent } from './manufacturer-list/manufacturer-list.component';
import { ManufacturerDetailComponent } from './manufacturer-detail/manufacturer-detail.component';

export const manufacturersRoutes: Routes = [
    { path: '', component: ManufacturerListComponent },
    { path: ':id/:name', component: ManufacturerDetailComponent }
  ];
  
