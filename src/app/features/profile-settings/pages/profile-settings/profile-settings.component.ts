import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-profile-settings',
  standalone: true,
  imports: [FormsModule], // Added FormsModule 
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})

export class ProfileSettingsComponent {
  profile = {
    img: 'path/to/image.jpg',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com', //se deben poner las reservas que tiene un usuario?
    
  };

  saveProfile() {
    
    console.log('Profile saved', this.profile);
  }
}