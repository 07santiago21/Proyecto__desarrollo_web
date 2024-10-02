import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-add-property',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent {
  property = {
    nombre: '',
    precio: '',
    lugar: '',
    title: '',
    description: '',
    address: '',
    latitude: '',
    longitude: '',
    price_per_night: '',
    num_bedrooms: '',
    num_bathrooms: '',
    max_guests: ''
  };
  imagePreview: string | ArrayBuffer | null = null;

  // Método que se ejecuta cuando se envía el formulario
  onSubmit() {
    if (this.property.nombre && this.property.precio && this.property.lugar) {
      console.log('Formulario enviado:', this.property);
      // poner logica ak
    }
  }

  // Metodo para manejar la selección de la imagen y mostrar una vista previa
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