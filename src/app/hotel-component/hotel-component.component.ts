import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hotel-component',
  templateUrl: './hotel-component.component.html',
  styleUrls: ['./hotel-component.component.css'],
  standalone: true
})
export class HotelComponent {
  @Input() imageUrl!: string;
  @Input() hotelName!: string;
  @Input() location!: string;
  @Input() price!: string;
}