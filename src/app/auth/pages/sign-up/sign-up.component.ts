import { SignInComponent } from './../sign-in/sign-in.component';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'sign-up',
  standalone: true,
  imports: [FormsModule], // Add FormsModule to imports
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'] // preguntar por tipo
})
export class SignUpComponent {
  profile = {
    username: '',
    email: '',
    password: '',
    profile_picture: '',
    bio: '',
    is_owner: false
  };

  saveProfile() {
    console.log('Profile saved', this.profile);
  }
}