import { Injectable } from '@angular/core';
import { Property } from '../../properties/interfaces/property.interface';
import { User } from '../../../auth/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  get_hotels(){
    let properties: Array<Property> = JSON.parse(localStorage.getItem("properties")|| "[]")
    return properties
  }

  get_id_user(){
    let user: User = JSON.parse(localStorage.getItem("loggedUser")|| "[]")
    return user.user_id
  }

}
