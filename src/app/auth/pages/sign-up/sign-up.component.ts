import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() userData: any; // Input property to accept user data
  @Output() formSubmit = new EventEmitter<any>(); // Output event to emit form data

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

  ngOnChanges() {
    if (this.userData) {
      this.signUpForm.patchValue(this.userData); // Pre-fill form with user data
    }
  }

  saveProfile() {
    if (this.signUpForm.valid) {
      this.formSubmit.emit(this.signUpForm.value); // Emit form data
      console.log('Profile saved', this.signUpForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  goBackToHome() {
    this.router.navigate(['/home']); // Adjust the route as necessary
  }
}