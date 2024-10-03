import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Property } from '../interfaces/property.interface';
import { PropertyResponse } from '../interfaces/property_response.interface';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http: HttpClient) {}

  addProperty(property: Property): PropertyResponse {
    let propertiesArray = localStorage.getItem('properties');
    let properties: Array<Property> = propertiesArray ? JSON.parse(propertiesArray) : [];

    let lastPropertyId = properties.length > 0 ? Math.max(...properties.map((prop: Property) => prop.property_id)) + 1 : 1;

    property.property_id = lastPropertyId;

    properties.push(property);
    localStorage.setItem('properties', JSON.stringify(properties));
    return {
      success: true
    };
  }

  getPropertyById(id: string): Observable<Property> {
    let propertiesArray = localStorage.getItem('properties');
    let properties: Array<Property> = propertiesArray ? JSON.parse(propertiesArray) : [];
    let property = properties.find(prop => prop.property_id === +id);
    return of(property as Property);
  }

  updateProperty(id: string, updatedProperty: Property): Observable<PropertyResponse> {
    let propertiesArray = localStorage.getItem('properties');
    let properties: Array<Property> = propertiesArray ? JSON.parse(propertiesArray) : [];
    let index = properties.findIndex(prop => prop.property_id === +id);

    if (index !== -1) {
      properties[index] = { ...properties[index], ...updatedProperty };
      localStorage.setItem('properties', JSON.stringify(properties));
      return of({ success: true });
    } else {
      return of({ success: false });
    }
  }
}