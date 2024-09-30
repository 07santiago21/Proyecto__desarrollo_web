import { Injectable, signal } from '@angular/core';
import { SignalUser } from '../interfaces/signal-user';
import { Signal } from '@angular/core';
import { User } from '../interfaces/user';
import { LoginResponse } from '../interfaces/auth_response';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  userSignal = signal<SignalUser>({user_id:null ,username: '',password:'',email:'',bio:'',is_owner:null,profile_picture:''});

  login(userName: string, password: string):LoginResponse{

    const usuarios:Array<User> = JSON.parse(localStorage.getItem("usuarios")|| "[]")


    if (!(usuarios.length === 0)){

        const existe = usuarios.find(item => item.username === userName  && item.password === password)
        
        if(existe){
          this.setUser(existe);
          return {
            success: true
          }

        }
    }
    
    return {
      success: false,
      message: 'Usuario o contraseña incorrectos'
    }    

  }



























































  private setUser(user:User){
    localStorage.setItem('loggedUser', JSON.stringify(user));
    this.userSignal.set(user);
  }

  getUser(){
    const userSrt = localStorage.getItem('loggedUser');
    if(userSrt){
      const user = JSON.parse(userSrt);
      this.userSignal.set(user);
    }
    return this.userSignal;
  }

}



