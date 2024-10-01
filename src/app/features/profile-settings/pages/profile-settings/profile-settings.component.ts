import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-settings',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {
  profileForm: FormGroup;

  userData = {
    username: 'a',
    email: 'b',
    password: 'c',
    profile_picture: 'mp',
    bio: 'anita.',
    is_owner: true
  };

  constructor(private fb: FormBuilder, private router: Router) {
    this.profileForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      profile_picture: [''],
      bio: [''],
      is_owner: [false]
    });
  }

  ngOnInit() {
    this.profileForm.patchValue(this.userData); // Pre-fill form with user data
  }

  saveProfile() {
    if (this.profileForm.valid) {
      console.log('Profile saved', this.profileForm.value);
      // Add logic to handle updated user data, e.g., call a service to save the user
    } else {
      console.log('Form is invalid');
    }
  }

  goBackToHome() {
    this.router.navigate(['/home']); // Adjust the route as necessary
  }
}