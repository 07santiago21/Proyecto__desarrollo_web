import { Component, OnInit, Signal, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PropertyService } from './../services/property.service';
import { Property } from './../interfaces/property.interface'; // Import the Property interface

@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [PropertyService]
})
export class EditPropertyComponent implements OnInit {
  propertySignal!: Signal<Property>; 
  editPropertyForm: FormGroup;
  imagePreview: string | ArrayBuffer | null = null;

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    private fb: FormBuilder
  ) {
    this.editPropertyForm = this.fb.group({
      nombre: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      lugar: ['', [Validators.required]],
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      address: ['', [Validators.required]],
      latitude: ['', [Validators.required]],
      longitude: ['', [Validators.required]],
      price_per_night: ['', [Validators.required]],
      num_bedrooms: ['', [Validators.required]],
      num_bathrooms: ['', [Validators.required]],
      max_guests: ['', [Validators.required]],
      photos: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    const propertyId = this.route.snapshot.paramMap.get('id');
    if (propertyId) {
      this.propertyService.getPropertyById(propertyId).subscribe((data: Property) => {
        if (data) {
          this.propertySignal = computed(() => data);
          this.editPropertyForm.patchValue(data);
        }
      });
    }
  }

  onSubmit() {
    const propertyId = this.route.snapshot.paramMap.get('id');
    if (propertyId) {
      this.propertyService.updateProperty(propertyId, this.editPropertyForm.value).subscribe(response => {
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