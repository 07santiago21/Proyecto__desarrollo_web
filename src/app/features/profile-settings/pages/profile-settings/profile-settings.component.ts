import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-profile-settings',
  standalone: true,
  imports: [FormsModule], // Add FormsModule to imports
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent {
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