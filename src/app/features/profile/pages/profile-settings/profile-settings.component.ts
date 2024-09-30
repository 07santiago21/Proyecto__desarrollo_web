import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule
import { Router, RouterModule } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../../../auth/services/user.service';
import { Signal } from '@angular/core';
import { SignalUser } from '../../../../auth/interfaces/signal-user';



@Component({
  selector: 'app-profile-settings',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterModule], // Added FormsModule 
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})

export class ProfileSettingsComponent {


  editProfileForm:FormGroup;
  userSignal!: Signal<SignalUser>;

  constructor(private fb: FormBuilder, private router: Router,private userService: UserService) {

    this.userSignal = this.userService.userSignal;

    this.editProfileForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
    email: [''] 
  });

}
  profile = {
    img: 'path/to/image.jpg',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com'
  };

  saveProfile() {
    console.log('Profile saved', this.profile);
  }


  onEditProfile(){
    let userName = this.editProfileForm.value.userName||'';
    let password = this.editProfileForm.value.password||''; 
    let email = this.editProfileForm.value.email||'';
    let bio = this.editProfileForm.value.bio||'';
    let profile_picture = this.editProfileForm.value.profile_picture||'';

    console.log(userName,password,email,bio,profile_picture)

  }
}
