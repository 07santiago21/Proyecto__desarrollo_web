import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { PropertyService } from './../services/property.service';

@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule], // Add FormsModule and HttpClientModule to imports
  providers: [PropertyService] // Ensure PropertyService is provided
})
export class EditPropertyComponent implements OnInit {
  property: any = {
    nombre: 'void',
    precio: 'void',
    lugar: 'void',
    title: 'void',
    description: 'void',
    address: 'void',
    latitude: 'void',
    longitude: 'void',
    price_per_night: 'void',
    num_bedrooms: 'void',
    num_bathrooms: 'void',
    max_guests: 'void'
  };
  imagePreview: string | ArrayBuffer | null = null;

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService
  ) {}

  ngOnInit(): void {
    const propertyId = this.route.snapshot.paramMap.get('id');
    if (propertyId) {
      this.propertyService.getPropertyById(propertyId).subscribe(data => {
        if (data) {
          this.property = data;
        }
      });
    }
  }

  onSubmit() {
    const propertyId = this.route.snapshot.paramMap.get('id');
    if (propertyId) {
      this.propertyService.updateProperty(propertyId, this.property).subscribe(response => {
        console.log('Property updated:', response);
        // Add logic to handle successful update
      });
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.imagePreview = reader.result;
      };

      reader.readAsDataURL(file);
    }
  }
}