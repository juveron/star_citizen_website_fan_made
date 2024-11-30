import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ship } from '../../../shared/models/ship.model';

@Injectable({
  providedIn: 'root',
})
export class ShipService {
  private shipsUrl = 'http://localhost:3000/ships';

  constructor(private http: HttpClient) {}

  getShips(): Observable<Ship[]> {
    return this.http.get<Ship[]>(this.shipsUrl);
  }

  getShipById(id: number): Observable<Ship> {
    return this.http.get<Ship>(`${this.shipsUrl}/${id}`);
  }
}
