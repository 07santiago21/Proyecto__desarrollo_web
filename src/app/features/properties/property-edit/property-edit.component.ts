import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { PropertyService } from '../services/property.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-property-edit',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,HttpClientModule],
  providers: [PropertyService],
  templateUrl: './property-edit.component.html',
  styleUrls: ['./property-edit.component.css']
})
export class PropertyEditComponent implements OnInit {
  id: string | null = null; 
  editPropertyForm: FormGroup;
  imagePreview: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder, private route: ActivatedRoute,private propertyService: PropertyService) {

    this.editPropertyForm = this.fb.group({
      title: ['', []],
      description: ['', []],
      address: ['', []],
      latitude: ['', []],
      longitude: ['', []], 
      price_per_night: ['', []],
      rooms: ['', []],
      bathrooms: ['', []],
      max_capacity: ['', []],
      photos: ['', []],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      
    });
  }

  onSubmit() {


    const update_property = this.editPropertyForm.value
    

    if(this.id){

      let property = this.propertyService.getPropertyById(this.id)

      const response = this.propertyService.updateProperty_(property,update_property)


      if (response) {
        Swal.fire({
          text: 'Propiedad editada',
          icon: 'success'
        });
      }
      
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
