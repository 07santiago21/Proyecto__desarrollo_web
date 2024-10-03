import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../services/property.service';
import { Property } from '../interfaces/property.interface';

@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.css']
})
export class EditPropertyComponent implements OnInit {
  editPropertyForm: FormGroup;
  property!: Property; 
  imagePreview: string | ArrayBuffer | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private propertyService: PropertyService
  ) {
    this.editPropertyForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      address: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
      pricePerNight: ['', Validators.required],
      rooms: ['', Validators.required],
      bathrooms: ['', Validators.required],
      maxCapacity: ['', Validators.required],
      photos: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.propertyService.getPropertyById(id).subscribe((property: Property) => {
        this.property = property;
        this.editPropertyForm.patchValue(property);
      });
    }
  }

  onSubmit(): void {
    if (this.editPropertyForm.valid) {
      const updatedProperty = this.editPropertyForm.value;
      this.propertyService.updateProperty(this.property.listing_id.toString(), updatedProperty).subscribe(() => {
        // Handle successful update
      });
    }
  }

  onFileSelected(event: Event): void {
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