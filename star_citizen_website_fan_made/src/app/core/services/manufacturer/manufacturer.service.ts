import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Manufacturer } from '../../../shared/models/manufacturer.model';

@Injectable({
  providedIn: 'root',
})
export class ManufacturerService {
  private manufacturersUrl = 'http://localhost:3000/manufacturers';
  constructor(private http: HttpClient) {}

  getManufacturers(): Observable<Manufacturer[]> {
    return this.http.get<Manufacturer[]>(this.manufacturersUrl);
  }

  getManufacturerById(id: number): Observable<Manufacturer> {
    return this.http.get<Manufacturer>(`${this.manufacturersUrl}/${id}`);
  }  
}
