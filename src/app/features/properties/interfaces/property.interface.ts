export interface Property {
    property_id: number;
    listing_id: number;
    title: string;
    description: string;
    address: string;
    latitude: string;
    longitude: string;
    pricePerNight: number;
    rooms: number;
    bathrooms: number;
    maxCapacity: number;
    photos: string;
  }