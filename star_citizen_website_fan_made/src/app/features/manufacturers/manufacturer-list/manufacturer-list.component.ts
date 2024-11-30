import { Component } from '@angular/core';
import { Manufacturer } from '../../../shared/models/manufacturer.model';
import { ManufacturerService } from '../../../core/services/manufacturer/manufacturer.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-manufacturer-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './manufacturer-list.component.html',
  styleUrl: './manufacturer-list.component.css'
})
export class ManufacturerListComponent {

  manufacturers: Manufacturer[] = []

  constructor(private manufacturerService: ManufacturerService) {}

  ngOnInit(): void {
    this.manufacturerService.getManufacturers()
    .subscribe((data) => { this.manufacturers = data})
  }
}
