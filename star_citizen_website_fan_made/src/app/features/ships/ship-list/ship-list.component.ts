import { Component, OnInit } from '@angular/core';
import { Ship } from '../../../shared/models/ship.model';
import { ShipService } from '../../../core/services/ship/ship.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ship-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './ship-list.component.html',
  styleUrl: './ship-list.component.css'
})

export class ShipListComponent implements OnInit {
  ships: Ship[] = [];

  constructor(private shipService: ShipService) {}

  ngOnInit(): void {
    this.shipService.getShips()
    .subscribe((data) => {this.ships = data})
  }
}