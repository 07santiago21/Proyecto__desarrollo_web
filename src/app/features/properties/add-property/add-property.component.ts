import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import Swal from 'sweetalert2';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-add-property',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule], 
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent {

  AddPropertyForm: FormGroup;

  constructor(private fb: FormBuilder, private propertyService: PropertyService){
    this.AddPropertyForm = this.fb.group({
      user_id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      address: ['', [Validators.required]],
      price_per_night: ['', [Validators.required]],
      rooms: ['', [Validators.required]],
      bathrooms: ['', [Validators.required]],
      max_capacity: ['', [Validators.required]],
      photos: [[], [Validators.required]]
    });
  }

  onSubmit(){
    if(!this.AddPropertyForm.valid){
      Swal.fire({
        text: 'Debe diligenciar todos los campos',
        icon: 'error'
      });
      return;
    }

    let property_id = 0
    let user_id = this.AddPropertyForm.value.user_id || '';
    let title = this.AddPropertyForm.value.title || '';
    let description = this.AddPropertyForm.value.description || '';
    let address = this.AddPropertyForm.value.address || '';
    let price_per_night = this.AddPropertyForm.value.price_per_night || 0;
    let rooms = this.AddPropertyForm.value.rooms || 0;
    let bathrooms = this.AddPropertyForm.value.bathrooms || 0;
    let max_capacity = this.AddPropertyForm.value.max_capacity || 0;
    let photos = this.AddPropertyForm.value.photos || [];

    let response = this.propertyService.addProperty({
      property_id,
      user_id,
      title,
      description,
      address,
      price_per_night,
      rooms,
      bathrooms,
      max_capacity,
      photos
    })

    if(response){
      Swal.fire({
        text: 'Propiedad añadida'
      })
    }

  }

  
}