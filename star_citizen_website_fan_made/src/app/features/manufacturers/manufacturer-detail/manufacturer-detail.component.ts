import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Manufacturer } from '../../../shared/models/manufacturer.model';
import { ManufacturerService } from '../../../core/services/manufacturer/manufacturer.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-manufacturer-detail',
  imports: [CommonModule],
  templateUrl: './manufacturer-detail.component.html',
  styleUrls: ['./manufacturer-detail.component.css']
})
export class ManufacturerDetailComponent implements OnInit {
  manufacturer: Manufacturer = {
    id: 0,
    name: '',
    description: '',
    industry: '',
    founded: '',
    headquarters: '',
    products: '',
    logo_url: ''
  };
  isDataLoaded: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private manufacturerService: ManufacturerService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.manufacturerService.getManufacturerById(id).subscribe({
      next: (data) => {
        this.manufacturer = data;
        this.isDataLoaded = true;
      },
      error: (err) => {
        console.error('Error when trying to get manufacturer:', err);
      },
      complete: () => {
        console.log('Manufacturer data loading complete.');
      }
    });
  }
}