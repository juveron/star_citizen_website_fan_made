import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Ship } from '../../../shared/models/ship.model';
import { ShipService } from '../../../core/services/ship/ship.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ship-detail',
  imports: [CommonModule],
  templateUrl: './ship-detail.component.html',
  styleUrl: './ship-detail.component.css'
})
export class ShipDetailComponent {
    ship: Ship = {
      id: 0,
      name: '',
      manufacturer: '',
      class: '',
      cargo_capacity: 0,
      crew: 0,
      role: '',
      speed: 0,
      description: '',
      logo_url: '', 
    };

    isDataLoaded: boolean = false
    constructor(
      private route: ActivatedRoute,
      private shipService: ShipService
    ) {}

    ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'))

      this.shipService.getShipById(id).subscribe({
        next: (data) => {
          this.ship = data;
          this.isDataLoaded = true;
        },
        error: (error) => {
          console.error('Error when trying to get ship: ', error);
        },
        complete: () => {
          console.log('Ship data loading complete.');
        }
      })
    }

}
