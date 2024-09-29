import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HotelComponent } from '../hotel-component/hotel-component.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HotelComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class HomeComponent {
  menuVisible = false;

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }
}