import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private apiUrl = 'http://your-api-url.com/properties'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getPropertyById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updateProperty(id: string, property: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, property);
  }
}