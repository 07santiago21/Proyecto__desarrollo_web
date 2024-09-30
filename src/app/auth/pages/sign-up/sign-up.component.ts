import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Import necessary modules
import { Router } from '@angular/router'; // Import Router
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], // Add CommonModule to imports
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.signUpForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      profile_picture: [''],
      bio: [''],
      is_owner: [false]
    });
  }

  saveProfile() {
    if (this.signUpForm.valid) {
      console.log('Profile saved', this.signUpForm.value);
      // Add logic to handle user creation, e.g., call a service to save the user
    } else {
      console.log('Form is invalid');
    }
  }

  goBackToHome() {
    this.router.navigate(['/home']); // Adjust the route as necessary
  }
}