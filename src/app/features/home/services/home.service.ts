import { Injectable } from '@angular/core';
import { Property } from '../../properties/interfaces/property.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  get_hotels(){
    let properties: Array<Property> = JSON.parse(localStorage.getItem("properties")|| "[]")
    return properties
  }
}
