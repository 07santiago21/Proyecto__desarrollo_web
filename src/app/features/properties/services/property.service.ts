import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from '../interfaces/property.interface';
import { PropertyResponse } from '../interfaces/property_response.interface';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  addProperty(property:Property):PropertyResponse{
    let propertiesArray = localStorage.getItem('properties');
    let properties: Array<Property> = propertiesArray ? JSON.parse(propertiesArray): [];


    let lastPropertyId = properties.length > 0 ? Math.max(...properties.map((prop: Property) => prop.property_id)) + 1 : 1;

    property.property_id = lastPropertyId;
    
    properties.push(property);
    localStorage.setItem('properties', JSON.stringify(properties));
    return{
      success:true
    }

  }

}